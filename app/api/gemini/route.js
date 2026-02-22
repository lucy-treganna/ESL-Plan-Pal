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
    })

    // Prepare the req to Gemini API
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${process.env.GEMINI_API_KEY}`,
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
      }
    );

    const data = await res.json();

    // Check if the response is OK
    if (!res.ok) {
      console.error("Gemini API error:", res.status, data);
      return NextResponse.json(
        { error: data.error || "Error from Gemini API" },
        { status: 500 }
      );
    }

    // Return the response data from Gemini
    return NextResponse.json(data);
  } catch (error) {
    console.error("Route error:", error);
    return NextResponse.json(
      { error: "Error in processing the request" },
      { status: 500 }
    );
  }
}
