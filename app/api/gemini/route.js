import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { age, level, numSongs, topic } = await request.json();

    // Construct the Gemini prompt based on the form data
    const prompt = `Generate exactly ${numSongs} YouTube songs suitable for ESL learners ${age} years old with ${level} English level about the topic: ${topic}.
    Return them as a simple numbered list, with no explanations or instructions, just the names of the songs. Example format:
    1. [Song Name]
    2. [Song Name]
    3. [Song Name]
    4. [Song Name]
    5. [Song Name]`;

    // Prepare the request to Gemini API
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + process.env.GEMINI_API_KEY, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt,
          }]
        }]
      }),
    });

    const data = await response.json();

    // Check if the response is OK
    if (!response.ok) {
      return NextResponse.json({ error: data.error || 'Error from Gemini API' }, { status: 500 });
    }

    // Return the response data from Gemini
    return NextResponse.json(data);

  } catch (error) {
    return NextResponse.json({ error: 'Error in processing the request' }, { status: 500 });
  }
}
