export const PROMPT = `
##Role
You are an experienced teacher of English as a foreign language and a specialist in early childhood education.

##Goal
You are designing a short, engaging English as a foreign language lesson for a small-medium sized class of ${age}-year-old ${level}-level learners on the topic of "${topic}".
Generate the following resources, using your knowledge and expertise to tailor them to the learner's age and stage of development.

##Guiding Principles:
- Use a multi-sensory and playful approach to language learning.
- Emphasize repetition, contextual learning, and age-appropriate pacing.
- Keep everything fun, engaging, and developmentally suitable.

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
`;

const prompt_0_3 = `
2. **Vocabulary**
- Select exactly 3 high-frequency, age-appropriate vocabulary words related to the topic.
- Focus on concrete nouns (e.g. ball, cat, milk), simple verbs related to daily routines (e.g. eat, drink, sleep), and basic adjectives (e.g. big, small).
- Return a valid JSON array of objects in this format (no commentary or markdown, just the JSON array):
    [
      {
        "word": "Dog",
      },
      {
        "word": "Cat",
      }
    ]

3. **Games/Activities**
- Select exactly 2 fun, interactive games or activities related to the topic and that help children practice the vocabulary.
- The games should be movement-based or sensory (e.g., "hide the flashcard" or "touch the colour").
- Any additional materials/resources needed for the games should be kept simple and easily accessible (e.g. a flashcard, a sticky ball, a soft toy, etc.)
- Return a valid JSON array of objects in this format (no commentary or markdown, just the JSON array):
    [
      {
        "game": "Where is the...? (Object Recognition)",
        "description": "Have a few familiar objects in front of the child/children. The teacher says clearly, "Where is the ball?" (pointing to or holding up the ball as they say the word initially). Encourage the children to look at or touch the ball. You can gently guide their hand if needed. Repeat with the other objects: "Where is the teddy?", "Where is the car?", "Where is the shoe?",
        "variation": As they become more familiar, you can just say "Ball?" and see if they look at or touch it. You can also ask simple "Yes/No" questions like, "Is this a ball?" while holding up the correct or incorrect object.",
        "resources": "Toys/objects."
      },
      {
        "game": "Simple Imitation Game (Actions and Sounds)",
        "description": "The teacher performs a simple action (e.g., clap hands, stomp feet, wave) or makes a simple sound (e.g., 'moo', 'woof', 'vroom') and says the action word or sound. Encourage the children to copy the action or sound.",
        "variation": "Use pictures or toy animals/vehicles to accompany the sounds. Take turns leading the imitation.",
        "resources": "None generally needed, optional: pictures or simple toys."
      }
    ]
`;

const prompt_4_5 = `
2. **Vocabulary**
- Select exactly ${numVocab} high-frequency, age-appropriate vocabulary words related to the topic.
- Focus on concrete nouns (e.g., apple, car, book), action verbs (e.g., run, jump, draw), and basic prepositions (e.g., in, on, under).
- Return a valid JSON array of objects in this format (no commentary or markdown, just the JSON array):
    [
      {
        "word": "Apple",
      },
      {
        "word": "Run",
      }
    ]

3. **Games/Activities**
- Select exactly ${numGames} fun, interactive games or activities related to the topic and that help children practice the vocabulary.
- Games and activities should be designed to present the new vocabulary words in context. The games should encourage movement, simple problem-solving, or sensory exploration (e.g., following instructions to touch a colored object, matching sounds to pictures).
- Any additional materials/resources needed for the games should be kept simple and easily accessible (e.g. a flashcard, a sticky ball, a soft toy, etc.)
- Return a valid JSON array of objects in this format (no commentary or markdown, just the JSON array):
    [
      {
        "game": "Colour Catch",
        "description": "The teacher holds up a flashcard or object of a specific color and says the color. Children touch something in the room that is that colour.",
        "variation": "Have children move to the color (hop, jump, walk). The teacher can say 'Touch something [colour]!'",
        "resources": "Colour flashcards or coloured objects."
      },
      {
        "game": "Animal Sounds Bingo",
        "description": "Prepare bingo cards with animal pictures. The teacher makes an animal sound. Children mark the animal on their card.",
        "variation": "The teacher can say the animal name instead of the sound.",
        "resources": "Bingo cards with animal pictures, markers (crayons, small objects)."
      }
    ]

4. **Speaking Prompts**
- Provide ${numPrompts} prompts that encourage language production. Prompts can be interative include required props or visuals to show or point to.
- The prompts should encourage the children to use short phrases with simple sentence structure that put the vocabulary words related to the topic in context.
- Return a valid JSON array of objects in this format (no commentary or markdown, just the JSON array):
    [
      {
        "prompt": "Is this [object]? (Show a familiar object, e.g., a book)",
        "expected_response": ["Yes, it is.", "No, it isn't. It's a [correct object]."]
      {
        "prompt": "Where is the [body part]? (Point to your [body part])",
        "expected_response": ["This is my [body part]."]
      }
    ]
`;

const prompt_5_6 = `
2. **Vocabulary**
- Select exactly ${numVocab} high-frequency, age-appropriate vocabulary words related to the topic.
- Rather than only concrete nouns, action verbs and basic prepositions, include more abstract or descriptive words (e.g. friend, help, happy).
- Return a valid JSON array of objects in this format (no commentary or markdown, just the JSON array):
    [
      {
        "word": "Family",
      },
      {
        "word": "Happy",
      }
    ]

3. **Games/Activities**
- Select exactly ${numGames} fun, interactive games or activities related to the topic and that help children practice the vocabulary.
- The games should encourage movement, simple problem-solving, memory recall, or imaginative play while practicing vocabulary (e.g., acting out a word, remembering which picture was hidden).
- Any additional materials/resources needed for the games should be kept simple and easily accessible (e.g. a flashcard, a sticky ball, a soft toy, etc.)
- Return a valid JSON array of objects in this format (no commentary or markdown, just the JSON array):
    [
      {
        "game": "What's Missing? (Vocabulary)",
        "description": "Place 5-7 familiar objects or flashcards. Children close their eyes while one is removed or hidden. They guess the missing item.",
        "variation": "Increase the number of items as their vocabulary grows.",
        "resources": "Familiar objects or flashcards."
      },
      {
        "game": "Simon Says (Actions & Body Parts)",
        "description": "The teacher gives instructions starting with 'Simon says...' followed by an action. Children only do it if 'Simon says' is included.",
        "variation": "Let children take turns being 'Simon'.",
        "resources": "None."
      }
    ]

4. **Speaking or Writing Prompts**
- Provide ${numPrompts} prompts that encourage language production. Prompts can be interative include required props or visuals to show or point to.
- The prompts should encourage the children to form short sentences or role-play simple dialogues.
- Return a valid JSON array of objects in this format (no commentary or markdown, just the JSON array):
    [
      {
        "prompt": "Role-play: You want a toy. Ask the teacher for it.",
        "expected_response": ["Teacher, can I have the [toy], please?", "Please can I have the [toy]?"]
      {
        "prompt": "Ask your friend: 'Do you like [food]?'",
        "expected_response": ["Do you like [food]?", "(Friend might respond: 'Yes, I do.' or 'No, I don't.')"]
      }
    ]
`
