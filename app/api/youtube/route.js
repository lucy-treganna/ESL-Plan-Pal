import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { title, channel } = await req.json();
    console.log("[/api/youtube] Received request:", { title, channel });

    const q = `${title} ${channel}`;
    const encodedQuery = encodeURIComponent(q);

    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodedQuery}&key=${process.env.YOUTUBE_API_KEY}&type=video`
    );

    const data = await res.json();
    console.log("[/api/youtube] YouTube response status:", res.status, res.ok);

    // Check if the response is OK
    if (!res.ok) {
      console.error("[/api/youtube] YouTube API error response:", data)

      return NextResponse.json(
        { error: data.error?.message || "Error from YouTube API" },
        { status: res.status }
      );
    }

    // Return the response data from YouTube
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Error in processing the request" },
      { status: 500 }
    );
  }
}
