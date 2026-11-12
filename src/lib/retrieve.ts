import { KNOWLEDGE, KnowledgeChunk } from "./knowledge";

function score(chunk: KnowledgeChunk, query: string): number {
  let s = 0;
  for (const kw of chunk.keywords) {
    if (query.includes(kw)) s += kw.includes(" ") ? 3 : 2;
  }
  for (const word of chunk.topic.toLowerCase().split(/\s+/)) {
    if (word.length > 3 && query.includes(word)) s += 1;
  }
  return s;
}

export function retrieve(question: string, topK = 3): KnowledgeChunk[] {
  const q = question.toLowerCase();
  const ranked = KNOWLEDGE.map((c) => ({ c, s: score(c, q) }))
    .filter((r) => r.s > 0)
    .sort((a, b) => b.s - a.s);

  if (ranked.length === 0) {
    return KNOWLEDGE.filter((c) => ["profile", "stack", "contact"].includes(c.id));
  }
  return ranked.slice(0, topK).map((r) => r.c);
}
