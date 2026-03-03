import { NextResponse } from "next/server";
import {
  getResourceCount,
  buildFullPrompt,
  interpolatePrompt,
} from "@/app/prompts/promptHelpers";

export async function POST(req) {
  try {
    const { age, level, topic } = await req.json();
    const resourceCounts = getResourceCount(age, level);

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

    // Check if the response is OK
    if (!res.ok) {
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
      return NextResponse.json(
        { error: "The request timed out. Please try again." },
        { status: 504 }
      );
    }
    return NextResponse.json(
      { error: "Something went wrong generating your lesson plan. Please try again." },
      { status: 500 }
    );
  }
}
