"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { PROJECTS, Project } from "@/lib/projects";

const FILTERS: Array<Project["category"] | "All"> = ["All", "Systems", "AI Agents", "Data"];

const SPAN: Record<string, string> = {
  searchsphere: "lg:col-span-2",
  codepilot: "lg:col-span-2",
};

function Card({ p }: { p: Project }) {
  const big = Boolean(p.featured);
  return (
    <a
      href={p.href}
      target="_blank"
      rel="noopener"
      className={`group relative flex flex-col gap-3 rounded-lg border border-border bg-surface p-5 min-h-[180px] transition-all hover:border-accent hover:-translate-y-0.5 hover:shadow-[var(--shadow)] ${
        SPAN[p.slug] ?? ""
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className={`font-semibold tracking-tight ${big ? "text-xl" : "text-base"}`}>{p.title}</h3>
        <span className="font-mono-ui text-[10px] tracking-wide text-accent whitespace-nowrap pt-1">
          {p.category.toUpperCase()}
        </span>
      </div>
      <p className={`text-muted ${big ? "text-[0.95rem]" : "text-[0.88rem]"} leading-relaxed`}>{p.description}</p>
      <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
        {p.tags.map((t) => (
          <span key={t} className="font-mono-ui text-[10.5px] px-2 py-0.5 rounded bg-surface-2 text-faint">
            {t}
          </span>
        ))}
      </div>
      <span className="flex items-center gap-1 font-mono-ui text-[12px] text-foreground group-hover:text-accent transition-colors">
        view repo
        <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </a>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const visible = PROJECTS.filter((p) => filter === "All" || p.category === filter);

  return (
    <section id="projects" className="py-20 sm:py-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <SectionHeading label="// projects" />
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-balance">
              Things I&apos;ve shipped end to end
            </h2>
          </div>
          <p className="text-muted max-w-[46ch] text-[0.95rem]">
            Eight repos spanning distributed systems, search, and agentic AI — each built, tested, and pushed solo.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`font-mono-ui text-[12px] px-3.5 py-1.5 rounded-md border transition-colors ${
                filter === f
                  ? "bg-foreground text-background border-foreground"
                  : "border-border text-muted hover:border-accent hover:text-accent"
              }`}
            >
              {f.toLowerCase()}
            </button>
          ))}
        </div>

        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {visible.map((p) => (
              <Card key={p.slug} p={p} />
            ))}
          </div>
        </Reveal>

        <a
          href="https://github.com/Nikanwar3?tab=repositories"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-1.5 mt-10 font-mono-ui text-sm text-muted hover:text-accent border-b border-border-strong hover:border-accent pb-0.5 transition-colors"
        >
          more on github <ArrowUpRight size={14} />
        </a>
      </div>
    </section>
  );
}
