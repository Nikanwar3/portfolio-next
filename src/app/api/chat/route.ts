import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";
import { retrieve } from "@/lib/retrieve";
import { isRateLimited } from "@/lib/rateLimit";

const SYSTEM_PROMPT = `You are the portfolio assistant for Nidhi Kanwar, a backend/applied-AI software engineer.
Answer visitor questions about her background, skills, experience, and projects using ONLY the context
provided below each message. Speak about her in the third person. Keep answers to 2-4 sentences, friendly
and specific, not generic. If the context doesn't cover the question, say you don't have that detail and
suggest reaching out to her directly at nikanwar111@gmail.com. Never invent facts not present in the context.`;

export async function POST(req: NextRequest) {
  // Same-origin requests pass automatically (no config needed per deploy); an explicit
  // SITE_URL env var can allow one extra origin (e.g. a custom domain) on top of that.
  const origin = req.headers.get("origin");
  const host = req.headers.get("host");
  const sameOrigin = host && origin && (origin === `https://${host}` || origin === `http://${host}`);
  const allowedExtra = process.env.SITE_URL && origin === process.env.SITE_URL;
  if (origin && !sameOrigin && !allowedExtra) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const ip = req.headers.get("x-forwarded-for") ?? "anon";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { answer: "I'm getting a lot of questions right now — try again in a minute, or email nikanwar111@gmail.com directly." },
      { status: 429 },
    );
  }

  let body: { message?: string; history?: { role: string; content: string }[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const message = (body.message ?? "").trim().slice(0, 500);
  if (!message) {
    return NextResponse.json({ error: "Empty message" }, { status: 400 });
  }

  const chunks = retrieve(message);
  const context = chunks.map((c) => `[${c.topic}] ${c.text}`).join("\n\n");

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ answer: chunks[0]?.text ?? "I don't have that detail — try nikanwar111@gmail.com." });
  }

  try {
    const groq = new Groq({ apiKey });
    const history = (body.history ?? []).slice(-6).map((h) => ({
      role: (h.role === "assistant" ? "assistant" : "user") as "assistant" | "user",
      content: String(h.content).slice(0, 500),
    }));

    const completion = await groq.chat.completions.create({
      model: process.env.GROQ_MODEL || "llama-3.1-8b-instant",
      max_tokens: 300,
      temperature: 0.4,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "system", content: `Context:\n${context}` },
        ...history,
        { role: "user", content: message },
      ],
    });

    const answer = completion.choices[0]?.message?.content?.trim();
    return NextResponse.json({ answer: answer || chunks[0]?.text || "Try nikanwar111@gmail.com for that one." });
  } catch {
    // Free-tier quota hit, network issue, etc. — degrade to retrieval-only, never escalate to a paid call.
    return NextResponse.json({ answer: chunks[0]?.text ?? "I don't have that detail — try nikanwar111@gmail.com." });
  }
}
