import { Mail, ArrowUpRight } from "lucide-react";
import PipelineViz from "./PipelineViz";
import GithubMark from "./GithubMark";

export default function Hero() {
  return (
    <section id="top" className="pt-16 sm:pt-24 pb-16">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
        <div>
          <p className="font-mono-ui text-[13px] text-accent mb-5 flex items-center gap-2.5">
            <span className="w-4 h-px bg-accent" />
            SOFTWARE ENGINEER — BACKEND &amp; APPLIED AI
          </p>
          <h1 className="text-[2.5rem] sm:text-6xl font-semibold tracking-tight leading-[1.02] text-balance">
            Nidhi Kanwar
          </h1>
          <p className="mt-5 text-lg text-muted max-w-[46ch]">
            I build backend systems and AI agents that hold up under load — job queues, search
            engines, and LLM pipelines, built from the data structures up.
          </p>
          <p className="font-mono-ui text-[13px] text-faint mt-5 flex flex-wrap gap-x-3 gap-y-1">
            <span>B.Tech CS, VIT &apos;26</span>
            <span className="text-border-strong">/</span>
            <span>Surat, India</span>
            <span className="text-border-strong">/</span>
            <span>Open to Backend &amp; AI-Platform roles</span>
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href="#projects"
              className="font-mono-ui text-[13px] font-medium px-4 py-2.5 rounded-md bg-accent text-accent-ink hover:brightness-110 transition inline-flex items-center gap-1.5"
            >
              View projects
            </a>
            <a
              href="https://github.com/Nikanwar3"
              target="_blank"
              rel="noopener"
              className="font-mono-ui text-[13px] px-4 py-2.5 rounded-md border border-border-strong text-muted hover:text-accent hover:border-accent transition inline-flex items-center gap-1.5"
            >
              <GithubMark size={14} /> Nikanwar3
            </a>
            <a
              href="mailto:nikanwar111@gmail.com"
              className="font-mono-ui text-[13px] px-4 py-2.5 rounded-md border border-border-strong text-muted hover:text-accent hover:border-accent transition inline-flex items-center gap-1.5"
            >
              <Mail size={14} /> Get in touch
            </a>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-surface shadow-[var(--shadow)] overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-border font-mono-ui text-[11px] text-faint">
            <span>pipeline.visualize()</span>
            <span className="flex items-center gap-1.5 text-status">
              <span className="w-1.5 h-1.5 rounded-full bg-status [animation:pulse-dot_2.2s_infinite]" />
              live
            </span>
          </div>
          <PipelineViz />
          <div className="flex items-center justify-between px-4 py-3 border-t border-border font-mono-ui text-[11px] text-faint">
            <span>ingest → process → index → serve</span>
            <a href="#projects" className="flex items-center gap-1 text-muted hover:text-accent transition-colors">
              see it built <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
