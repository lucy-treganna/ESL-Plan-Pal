# ESL PlanPal

**[Live Demo](https://esl-plan-pal.vercel.app/)**

An AI-powered lesson planning tool for ESL teachers working with young learners (ages 0-6). Generate age-appropriate songs, vocabulary, games, and speaking activities tailored to specific proficiency levels.

---

## Features

- **Quick Generate** — Input age, English level, and lesson topic to generate a full set of ESL resources
- **Age-Appropriate Content** — Separate prompt templates for 0-3, 4-5, and 5-6 year-olds based on developmental stages
- **Dynamic Resource Allocation** — Automatically adjusts vocabulary count, activity complexity, and speaking prompts based on age and proficiency
- **YouTube Integration** — Song suggestions matched to real YouTube videos from trusted ESL channels
- **User Authentication** — Sign up and log in via Supabase Auth
- **Vocabulary Reinforcement** — Resources designed to reinforce the same vocabulary across all activity types

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React, Tailwind CSS, Headless UI, Heroicons |
| Auth & Database | Supabase |
| AI | Google Gemini API |
| Video | YouTube Data API v3 |

---

## Roadmap

**AI & Performance**
- [ ] Migrate to function calling and tool use for more reliable structured output
- [ ] Implement streaming responses and caching to reduce generation time
- [ ] Parallelize API calls for faster resource generation

**User Features**
- [ ] Save and manage lesson plans in personal library
- [ ] Dynamic lesson builder — mix AI-generated content with manually added resources
- [ ] Upload custom resources and materials
- [ ] AI-generated flashcards with PDF export

**Community**
- [ ] Share lesson plans publicly
- [ ] Community ratings and reviews
- [ ] Browse and remix plans created by other teachers

**Engineering**
- [ ] Migrate codebase to TypeScript
- [ ] Add Jest unit tests and Cypress end-to-end tests
- [ ] Performance audit and optimization

---

## Running Locally

### Prerequisites

You'll need API keys for:
- [Google Gemini](https://aistudio.google.com/)
- [YouTube Data API v3](https://console.cloud.google.com/)
- [Supabase](https://supabase.com/) project (with Auth enabled)

### Setup

1. Clone the repo and install dependencies:
```bash
git clone https://github.com/your-username/esl-plan-pal.git
cd esl-plan-pal
npm install
```

2. Create a `.env.local` file in the root:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_publishable_key
GEMINI_API_KEY=your_gemini_api_key
YOUTUBE_API_KEY=your_youtube_api_key
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## Author

Built by [Lucy Treganna](https://github.com/lucy-treganna)

---

## License

MIT
