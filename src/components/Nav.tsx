"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) setIsDark(stored === "dark");
    else setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  function toggle() {
    const next = !(isDark ?? false);
    setIsDark(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[color-mix(in_srgb,var(--background)_78%,transparent)] border-b border-border">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 h-16 flex items-center justify-between gap-3">
        <a href="#top" className="font-mono-ui font-semibold text-sm flex items-center gap-2 shrink-0 whitespace-nowrap">
          <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
          nidhi kanwar
        </a>
        <nav className="flex items-center gap-7 min-w-0">
          <div className="hidden sm:flex items-center gap-7">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono-ui text-[13px] text-muted hover:text-accent transition-colors whitespace-nowrap"
              >
                {l.label}
              </a>
            ))}
          </div>
          <button
            onClick={toggle}
            aria-label="Toggle color theme"
            className="w-8 h-8 shrink-0 rounded-md border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors"
          >
            {isDark ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </nav>
      </div>
    </header>
  );
}
