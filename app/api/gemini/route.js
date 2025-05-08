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

    console.log("prompt:", interpolatedPrompt)

    // Prepare the req to Gemini API
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
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
      return NextResponse.json(
        { error: data.error || "Error from Gemini API" },
        { status: 500 }
      );
    }

    // Return the response data from Gemini
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Error in processing the request" },
      { status: 500 }
    );
  }
}



    // Construct the Gemini prompt based on the form data
    // const prompt = `Generate exactly ${numSongs} song titles suitable for ESL learners who are ${age} years old and have a ${level} English level. The songs should relate to the topic: "${topic}".
    // For each song, include the title and the name of the YouTube channel or artist it's commonly associated with (such as "Super Simple Songs", "The Kiboomu Kids", "Pinkfong", etc.).
    // Return a valid JSON array of objects in this format (no commentary or markdown, just the JSON array):
    // [
    //   {
    //     "title": "If You're Happy and You Know It",
    //     "channel": "Super Simple Songs"
    //   },
    //   {
    //     "title": "The Wheels on the Bus",
    //     "channel": "The Kiboomu Kids"
    //   }
    // ]`;
