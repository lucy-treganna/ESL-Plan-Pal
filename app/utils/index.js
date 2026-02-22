export function extractJsonFromGeminiResponse(text) {
  return text
    .replace(/^```(?:json)?\n?/, "") // remove leading code fence
    .replace(/\n?```$/, "");         // remove trailing code fence
}
