import { NextResponse } from "next/server";
import {
  getResourceCount,
  buildFullPrompt,
  interpolatePrompt,
} from "@/app/prompts/promptHelpers";

export async function POST(req) {
  try {
    const { age, level, topic } = await req.json();
    console.log("[/api/gemini] Received request:", { age, level, topic });

    const resourceCounts = getResourceCount(age, level);
    console.log("[/api/gemini] Resource counts:", resourceCounts);

    const fullTemplate = buildFullPrompt(age);
    const interpolatedPrompt = interpolatePrompt(fullTemplate, {
      age,
      level,
      topic,
      numSongs: resourceCounts.songs,
      numWords: resourceCounts.vocabulary,
      numGames: resourceCounts.games,
      numPrompts: resourceCounts.speakingPrompts ?? 0,
    });

    console.log("[/api/gemini] Sending prompt to Gemini (first 200 chars):", interpolatedPrompt.slice(0, 200));

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 60000);

    // Prepare the req to Gemini API
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: interpolatedPrompt,
                },
              ],
            },
          ],
        }),
        signal: controller.signal,
      }
    );

    clearTimeout(timeoutId);

    const data = await res.json();
    console.log("[/api/gemini] Gemini response status:", res.status, res.ok);

    // Check if the response is OK
    if (!res.ok) {
      console.error("[/api/gemini] Gemini API error:", res.status, data);
      const isUnavailable = data.error?.status === "UNAVAILABLE";
      return NextResponse.json(
        {
          error: isUnavailable
            ? "The AI service is currently experiencing high demand. Please try again in a moment."
            : "Something went wrong generating your lesson plan. Please try again.",
        },
        { status: res.status }
      );
    }

    // Return the response data from Gemini
    return NextResponse.json(data);
  } catch (error) {
    if (error.name === "AbortError") {
      console.error("[/api/gemini] Request timed out");
      return NextResponse.json(
        { error: "The request timed out. Please try again." },
        { status: 504 }
      );
    }
    console.error("[/api/gemini] Route error:", error);
    return NextResponse.json(
      { error: "Something went wrong generating your lesson plan. Please try again." },
      { status: 500 }
    );
  }
}
