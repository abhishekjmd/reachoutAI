import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

type GenerateRequest = {
  businessName: string;
  category: string;
  city: string;
  rating: number;
  reviewCount: number;
  type: "initial" | "followup";
};

const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as GenerateRequest;

    const {
      businessName,
      category,
      city,
      rating,
      reviewCount,
      type = "initial",
    } = body;

    const prompt = type === "initial"
      ? `Write a short WhatsApp message to the owner of a business in India.

Business: ${businessName}
Type: ${category}
City: ${city}
Google rating: ${rating} stars
Reviews: ${reviewCount}

Rules:
- Start with "Hi!"
- Mention their review count naturally
- Point out they have no website
- Say a website helps get more customers
- End with a soft casual question
- Under 100 words
- One emoji at the end
- Warm and human, not salesy
- No markdown, no asterisks
- Plain text only

Return only the message.`
      : `Write a short WhatsApp follow-up for a business owner who didn't reply.

Business: ${businessName}
Type: ${category}
City: ${city}

Rules:
- Under 60 words
- Casual, not pushy
- Reference previous message briefly
- End with simple question
- One emoji max
- Plain text only

Return only the message.`;

    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: 
            "You write warm, conversational WhatsApp messages for small business outreach in India. Sound human, never like a bot or sales template.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      max_tokens: 200,
      temperature: 0.8,
    });

    const message = response.choices[0]?.message?.content?.trim() ?? "";

    if (!message) {
      throw new Error("Empty response");
    }

    return NextResponse.json({ message });

  } catch (error) {
    console.error("Groq error:", error);

    // Fallback if API fails
    return NextResponse.json({
      message:
        "Hi! I noticed your business has great reviews on Google Maps but no website yet. A simple website could help a lot more customers find you online. Would you like to know more? 🙏",
    });
  }
}
