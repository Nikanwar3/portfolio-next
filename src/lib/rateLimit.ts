// Best-effort only: resets on cold start since serverless instances don't share memory.
// Combined with a small client-side cap and low max_tokens, this is enough to deter
// casual abuse without adding an external store for a personal portfolio.
const hits = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 8;

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  hits.set(key, timestamps);
  return timestamps.length > MAX_PER_WINDOW;
}
