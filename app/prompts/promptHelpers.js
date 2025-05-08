import {
  BASE_PROMPT,
  prompt0_3Yrs,
  prompt4_5Yrs,
  prompt5_6Yrs,
} from "@/app/prompts/promptTemplates";

// 1. Decide how many of each resource type
export function getResourceCount(age, level) {
  if (age === "Under 3 Years") {
    return { songs: 2, vocabulary: level === advanced ? 3 : 2, games: 2, speakingPrompts: 0 };
  }

  if (age === "4-5 years") {
    return {
      songs: 2,
      vocabulary: level === "Beginner" ? 3 : level === "Intermediate" ? 4 : 5,
      games: 2,
      speakingPrompts: 2,
    };
  }

  if (age === "5-6 years") {
    return {
      songs: 3,
      games: 2,
      vocabulary: level === "Beginner" ? 5 : level === "Intermediate" ? 6 : 7,
      speakingPrompts: 3,
    };
  }

  throw new Error("Unsupported age group");
}

// 2. Select age-specific section
export function getPromptTemplate(age) {
  if (age === "Under 3 years") return prompt0_3Yrs;
  if (age === "4-5 years") return prompt4_5Yrs;
  if (age === "5-6 years") return prompt5_6Yrs;
  throw new Error("No prompt template found for given age");
}

// 3. Merge BASE_PROMPT with age-specific template
export function buildFullPrompt(age) {
  return BASE_PROMPT + "\n" + getPromptTemplate(age);
}

// 4. Replace all placeholders in the full string
export function interpolatePrompt(template, values) {
  let result = template;
  for (const [key, val] of Object.entries(values)) {
    const regex = new RegExp(`\\{${key}\\}`, "g");
    result = result.replace(regex, val);
  }
  return result;
}
