import { NextResponse } from "next/server";
import { getResourceCount, buildSectionPrompt } from "@/app/prompts/promptHelpers";
import { extractJsonFromGeminiResponse } from "@/app/utils";

export async function POST(req) {
  try {
    const { age, level, topic, section } = await req.json();
    const resourceCounts = getResourceCount(age, level);

    const prompt = buildSectionPrompt(section, {
      age,
      level,
      topic,
      numSongs: resourceCounts.songs,
      numWords: resourceCounts.vocabulary,
      numGames: resourceCounts.games,
      numPrompts: resourceCounts.speakingPrompts ?? 0,
    });

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      console.error("Gemini API error:", res.status, data);
      return NextResponse.json(
        { error: data.error || "Error from Gemini API" },
        { status: 500 }
      );
    }

    const rawText = data.candidates[0].content.parts[0].text;
    const cleaned = extractJsonFromGeminiResponse(rawText);
    const parsed = JSON.parse(cleaned);

    return NextResponse.json({ data: parsed });
  } catch (error) {
    console.error("Route error:", error);
    return NextResponse.json(
      { error: "Error in processing the request" },
      { status: 500 }
    );
  }
}
