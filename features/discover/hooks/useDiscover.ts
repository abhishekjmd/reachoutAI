import { useDiscoverStore } from "@/store";
import { openWhatsApp } from "@/lib/whatsapp";
import toast from "react-hot-toast";

export function useDiscover() {
  const store = useDiscoverStore();

  const handleSearch = async () => {
    const { query, city } = store;

    if (!query.trim() || !city.trim()) {
      toast.error("Please enter a business type and city");
      return;
    }

    store.setIsSearching(true);
    store.setSearchStatus("Searching...");
    store.setSearchError(null);
    store.setResults([]);

    // Multi-stage loading timer
    const startTime = Date.now();
    const timerId = setInterval(() => {
      const elapsed = Date.now() - startTime;
      if (elapsed >= 10000) {
        store.setSearchStatus("Almost there...");
      } else if (elapsed >= 3000) {
        store.setSearchStatus(`Scanning Google Maps for ${query} in ${city}...`);
      }
    }, 1000);

    try {
      const res = await fetch("/api/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          query: query.trim(), 
          city: city.trim(),
          limit: 20
        }),
      });

      if (!res.ok) throw new Error("Search failed");

      const data = await res.json() as {
        results: Array<{
          id: string;
          businessName: string;
          phone: string;
          website: string | null;
          hasWebsite: boolean;
          rating: number;
          reviewCount: number;
          address: string;
          city: string;
          category: string;
          latitude: number | null;
          longitude: number | null;
        }>;
        targets: number;
      };

      if (data.results.length === 0) {
        toast("No businesses without websites found in this area", { icon: "🔍" });
        store.setResults([]);
        return;
      }

      // Set results first with null messages
      store.setResults(
        data.results.map((r) => ({
          ...r,
          generatedMessage: null,
          isGeneratingMessage: false,
        }))
      );

      toast.success(`Found ${data.targets} businesses without websites`);

      // Generate messages for each result in parallel (max 5 at a time)
      const chunks = chunkArray(data.results, 5);
      
      for (const chunk of chunks) {
        await Promise.all(
          chunk.map((biz) => 
            generateMessage(biz.id, {
              businessName: biz.businessName,
              category: biz.category,
              city: biz.city,
              rating: biz.rating,
              reviewCount: biz.reviewCount,
              type: "initial",
            })
          )
        );
      }

    } catch (err) {
      console.error(err);
      store.setSearchError("Search failed. Please try again.");
      toast.error("Search failed. Try again.");
    } finally {
      clearInterval(timerId);
      store.setIsSearching(false);
      store.setSearchStatus("");
    }
  };

  const generateMessage = async (
    id: string,
    payload: {
      businessName: string;
      category: string;
      city: string;
      rating: number;
      reviewCount: number;
      type: "initial" | "followup";
    }
  ) => {
    store.setIsGeneratingMessage(id, true);
    try {
      const res = await fetch("/api/ai/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json() as { message: string };
      store.setGeneratedMessage(id, data.message);
    } catch {
      store.setGeneratedMessage(
        id,
        `Hi! I noticed ${payload.businessName} has great reviews on Google Maps but no website yet. A simple website could bring you more customers online. Would you like to know more? 🙏`
      );
    } finally {
      store.setIsGeneratingMessage(id, false);
    }
  };

  const handleSend = (id: string, phone: string, message: string) => {
    openWhatsApp(phone, message);
    store.markAsSent(id);
    toast.success("Opening WhatsApp...");
  };

  const handleSkip = (id: string) => {
    store.markAsSkipped(id);
  };

  const handleEditMessage = (id: string, newMessage: string) => {
    store.setGeneratedMessage(id, newMessage);
  };

  const handleRegenerateMessage = (
    id: string,
    biz: {
      businessName: string;
      category: string;
      city: string;
      rating: number;
      reviewCount: number;
    }
  ) => {
    generateMessage(id, { ...biz, type: "initial" });
    toast("Regenerating message...", { icon: "✨" });
  };

  return {
    query: store.query,
    city: store.city,
    results: store.getVisibleResults(),
    isSearching: store.isSearching,
    searchStatus: store.searchStatus,
    searchError: store.searchError,
    setQuery: store.setQuery,
    setCity: store.setCity,
    handleSearch,
    handleSend,
    handleSkip,
    handleEditMessage,
    handleRegenerateMessage,
  };
}


// Helper — split array into chunks
function chunkArray<T>(arr: T[], size: number): T[][] {
  return Array.from(
    { length: Math.ceil(arr.length / size) },
    (_, i) => arr.slice(i * size, i * size + size)
  );
}
