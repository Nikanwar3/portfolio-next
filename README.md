# nidhi kanwar — portfolio

Personal portfolio built with Next.js, TypeScript, and Tailwind CSS. Includes a chat
widget backed by a small retrieval pipeline over resume/project data, answered by
Groq's LLM API when a key is configured (falls back to returning the matched
knowledge chunk directly if not).

## Stack

- Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- Framer Motion for scroll reveals, Lucide for icons
- `/api/chat` route: keyword retrieval (`src/lib/retrieve.ts`) over `src/lib/knowledge.ts`,
  then Groq chat completion (`groq-sdk`) with same-origin + best-effort rate limiting

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Chat widget setup

Copy `.env.example` to `.env.local` and add a free Groq API key from
[console.groq.com](https://console.groq.com):

```bash
cp .env.example .env.local
# edit .env.local, set GROQ_API_KEY
```

Without a key, the widget still works — it just returns the best-matching knowledge
chunk directly instead of an LLM-generated answer.

## Deploying

Import this repo on [vercel.com](https://vercel.com/new), add `GROQ_API_KEY` as an
environment variable in the project settings, and deploy. No other config needed.

## Updating content

- Resume facts / project descriptions the chatbot can answer from: `src/lib/knowledge.ts`
- Project cards shown on the page: `src/lib/projects.ts`
- Page copy/sections: `src/components/*`
