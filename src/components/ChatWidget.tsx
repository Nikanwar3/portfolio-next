"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

type Msg = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = ["What backend experience does she have?", "Tell me about SearchSphere", "What's her RAG project?"];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: "Hi! Ask me anything about Nidhi's experience, stack, or projects — I'm grounded in her actual resume and repos." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;
    const next: Msg[] = [...messages, { role: "user", content: trimmed }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, history: next.slice(-6) }),
      });
      const data = await res.json();
      setMessages((m) => [...m, { role: "assistant", content: data.answer ?? "Something went wrong — try nikanwar111@gmail.com." }]);
    } catch {
      setMessages((m) => [...m, { role: "assistant", content: "Network hiccup — try again, or email nikanwar111@gmail.com." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-accent text-accent-ink shadow-[var(--shadow)] flex items-center justify-center hover:brightness-110 transition"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-5 z-50 w-[min(380px,calc(100vw-2.5rem))] h-[min(520px,calc(100vh-10rem))] rounded-lg border border-border bg-surface shadow-[var(--shadow)] flex flex-col overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border font-mono-ui text-[12px] text-muted">
            <Sparkles size={14} className="text-accent" />
            ask-nidhis-ai.exe
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`text-[13.5px] leading-relaxed rounded-md px-3 py-2 max-w-[88%] ${
                  m.role === "user"
                    ? "bg-accent text-accent-ink ml-auto"
                    : "bg-surface-2 text-foreground mr-auto"
                }`}
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="bg-surface-2 text-faint text-[13px] rounded-md px-3 py-2 w-fit font-mono-ui">
                thinking…
              </div>
            )}
          </div>

          {messages.length < 2 && (
            <div className="px-4 pb-2 flex flex-wrap gap-1.5">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="font-mono-ui text-[11px] px-2.5 py-1 rounded border border-border text-muted hover:border-accent hover:text-accent transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t border-border p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about the stack, a project…"
              maxLength={500}
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-faint"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send"
              className="w-8 h-8 rounded-md bg-accent text-accent-ink flex items-center justify-center disabled:opacity-40 transition"
            >
              <Send size={14} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
