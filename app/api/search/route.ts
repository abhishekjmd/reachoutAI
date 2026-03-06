import { NextRequest, NextResponse } from "next/server";

const SCRAPER_URL = process.env.SCRAPER_URL ?? "http://localhost:8080";

// How long to wait between polls (ms)
const POLL_INTERVAL = 2000;
// Max time to wait for job (ms) — 120 seconds
const MAX_WAIT = 120000;

type JobStatus = {
  ID: string;
  Status: string;
};

type ScraperBusiness = {
  title: string;
  phone: string | null;
  website: string | null;
  rating: number | null;
  reviewsCount: number | null;
  address: string | null;
  city: string | null;
  categoryName: string | null;
  latitude: number | null;
  longitude: number | null;
};

// Robust CSV Parser that handles quotes and commas
function parseCSV(csvText: string): Record<string, string>[] {
  const lines: string[][] = [];
  let currentRow: string[] = [];
  let currentToken = "";
  let inQuotes = false;

  for (let i = 0; i < csvText.length; i++) {
    const char = csvText[i];
    const nextChar = csvText[i + 1];

    if (char === '"' && inQuotes && nextChar === '"') {
      currentToken += '"';
      i++;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      currentRow.push(currentToken.trim());
      currentToken = "";
    } else if ((char === "\r" || char === "\n") && !inQuotes) {
      if (currentToken || currentRow.length > 0) {
        currentRow.push(currentToken.trim());
        lines.push(currentRow);
        currentRow = [];
        currentToken = "";
      }
      if (char === "\r" && nextChar === "\n") i++;
    } else {
      currentToken += char;
    }
  }

  if (currentToken || currentRow.length > 0) {
    currentRow.push(currentToken.trim());
    lines.push(currentRow);
  }

  if (lines.length < 2) return [];

  const headers = lines[0];
  return lines.slice(1).map((row) => {
    const obj: Record<string, string> = {};
    headers.forEach((header, index) => {
      obj[header] = row[index] || "";
    });
    return obj;
  });
}

// Step 1 — Create a scraping job
async function createJob(keywords: string[]): Promise<string> {
  const res = await fetch(`${SCRAPER_URL}/api/v1/jobs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: `search-${Date.now()}`,
      keywords,
      lang: "en",
      zoom: 13,
      fast_mode: false,
      depth: 1,
      max_time: 120,
    }),
  });

  if (!res.ok) {
    throw new Error(`Failed to create job: ${res.status}`);
  }

  const data = (await res.json()) as { id: string };
  return data.id;
}

// Step 2 — Poll until job is finished
async function waitForJob(jobId: string): Promise<void> {
  const startTime = Date.now();

  while (Date.now() - startTime < MAX_WAIT) {
    const res = await fetch(`${SCRAPER_URL}/api/v1/jobs/${jobId}`);

    if (!res.ok) {
      throw new Error("Failed to poll job");
    }

    const job = (await res.json()) as JobStatus;

    // Real scraper uses "ok" status and capital keys
    if (job.Status === "ok") return;
    if (job.Status === "failed") {
      throw new Error("Scraping job failed");
    }

    // Wait before polling again
    await new Promise((resolve) => setTimeout(resolve, POLL_INTERVAL));
  }

  throw new Error("Job timed out after 120s");
}

// Step 3 — Fetch job results (CSV)
async function getJobResults(jobId: string): Promise<ScraperBusiness[]> {
  const res = await fetch(`${SCRAPER_URL}/api/v1/jobs/${jobId}/download`);

  if (!res.ok) {
    throw new Error("Failed to fetch results");
  }

  const csvText = await res.text();
  const parsed = parseCSV(csvText);

  return parsed.map((item) => {
    // Extract city from complete_address JSON
    let city = "";
    try {
      if (item.complete_address) {
        const addr = JSON.parse(item.complete_address);
        city = addr.city || "";
      }
    } catch (e) {
      console.warn("Failed to parse complete_address JSON", item.complete_address);
    }

    return {
      title: item.title,
      phone: item.phone || null,
      website: item.website || null,
      rating: item.review_rating ? parseFloat(item.review_rating) : null,
      reviewsCount: item.review_count ? parseInt(item.review_count) : null,
      address: item.address || item.complete_address || null,
      city: city || null,
      categoryName: item.category || null,
      latitude: item.latitude ? parseFloat(item.latitude) : null,
      longitude: item.longitude ? parseFloat(item.longitude) : null,
    };
  });
}

// Main route handler
export async function POST(req: NextRequest) {
  try {
    const { query, city, limit = 20 } = (await req.json()) as {
      query: string;
      city: string;
      limit?: number;
    };

    if (!query?.trim() || !city?.trim()) {
      return NextResponse.json(
        { error: "query and city are required" },
        { status: 400 }
      );
    }

    // Build search keyword
    const keyword = `${query.trim()} in ${city.trim()} India`;

    // Step 1 — Create job
    const jobId = await createJob([keyword]);

    // Step 2 — Wait for completion
    await waitForJob(jobId);

    // Step 3 — Get results
    const rawResults = await getJobResults(jobId);

    // Map to our format
    const results = rawResults.slice(0, limit).map((biz, index) => ({
      id: `${Date.now()}-${index}`,
      businessName: biz.title ?? "Unknown",
      phone: biz.phone ?? null,
      website: biz.website ?? null,
      hasWebsite: Boolean(biz.website?.trim()),
      rating: biz.rating ?? 0,
      reviewCount: biz.reviewsCount ?? 0,
      address: biz.address ?? "",
      city: biz.city ?? city,
      category: biz.categoryName ?? query,
      latitude: biz.latitude ?? null,
      longitude: biz.longitude ?? null,
    }));

    // Filter: no website + has phone
    const targets = results.filter((b) => !b.hasWebsite && b.phone);

    return NextResponse.json({
      results: targets,
      total: results.length,
      targets: targets.length,
    });
  } catch (error) {
    console.error("Search error:", error);
    return NextResponse.json(
      { error: "Search failed. Please try again." },
      { status: 500 }
    );
  }
}


