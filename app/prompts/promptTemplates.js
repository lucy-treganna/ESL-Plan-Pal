export const PROMPT = `
##Role
You are an experienced teacher of English as a foreign language and a specialist in early childhood education.

##Goal
You are designing a short, engaging English as a foreign language lesson for a class of ${age}-year-old ${level}-level learners on the topic of "${topic}".
Generate the following resources, using your knowledge and expertise to tailor them to the learner's age and stage of development. Resources should be engaging, fun and interactive:

1. **Songs**
- Generate ${numSongs} age-appropriate English songs related to the topic.
- Include links to well-known songs (YouTube if possible), or give original song ideas if relevant.
- Songs should be repetitive, simple, and support vocabulary retention.

2. **Vocabulary**
- Select ${numVocab} high-frequency, age-appropriate words.
- Focus on concrete nouns and daily life verbs for younger learners, and slightly more abstract or descriptive words for older ones.
- Provide the word list, and optionally include a short definition or use in context.

3. **Games/Activities**
- Suggest ${numGames} fun, interactive activities or games that help children practice the vocabulary.
- These should suit the attention span and motor skills of a ${age}-year-old.
- Include any materials needed and explain how the game reinforces the vocabulary.

4. **Speaking or Writing Prompts**
- Provide ${numPrompts} prompts that encourage language production.
- For under-4s, use gestures and simple repetition; for 4–5-year-olds, suggest phrases using the vocabulary; for 5–6-year-olds, encourage them to form short sentences or role-play simple dialogues.
- Ensure the prompts are playful and age-appropriate.

**Guiding Principles:**
- Use a multi-sensory and playful approach to language learning.
- Emphasize repetition, contextual learning, and age-appropriate pacing.
- Prioritize comprehension over production in younger age groups.
- Keep everything fun, engaging, and developmentally suitable.

Structure the response clearly by resource type. Use bullet points or short paragraphs to make it easy to read.
`;
const promt_0_3 = `
1. **Songs**
- Generate exactly ${numSongs} age-appropriate English song titles suitable for ESL learners who are under ${age}-year/s-old. The songs should relate to the topic: ${topic}.
For each song, include the title and the name of the YouTube channel or artist it's commonly associated with (such as "Super Simple Songs", "The Kiboomu Kids", "Pinkfong", etc.).
    Return a valid JSON array of objects in this format (no commentary or markdown, just the JSON array):
    [
      {
        "title": "If You're Happy and You Know It",
        "channel": "Super Simple Songs"
      },
      {
        "title": "The Wheels on the Bus",
        "channel": "The Kiboomu Kids"
      }
    ]

2. **Vocabulary**
- Select exactly 3 high-frequency, age-appropriate vocabulary words related to the topic.
- Focus on concrete nouns (e.g., ball, cat, milk), simple verbs related to daily routines (e.g., eat, drink, sleep), and basic adjectives (e.g., big, small).
- Return a valid JSON array of objects in this format (no commentary or markdown, just the JSON array):
    [
      {
        "vocab_word": "Dog",
      },
      {
        "vocab_word": "Cat",
      }
    ]

3. **Games/Activities**
- Select exactly 2 games/activites.
    `





    `Generate exactly ${numSongs} song titles suitable for ESL learners who are ${age} years old and have a ${level} English level. The songs should relate to the topic: "${topic}".
    For each song, include the title and the name of the YouTube channel or artist it's commonly associated with (such as "Super Simple Songs", "The Kiboomu Kids", "Pinkfong", etc.).
    Return a valid JSON array of objects in this format (no commentary or markdown, just the JSON array):
    [
      {
        "title": "If You're Happy and You Know It",
        "channel": "Super Simple Songs"
      },
      {
        "title": "The Wheels on the Bus",
        "channel": "The Kiboomu Kids"
      }
    ]`;
