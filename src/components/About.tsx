import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const FACTS = [
  ["Education", "B.Tech CSE, VIT Bhopal"],
  ["Graduated", "June 2026 · GPA 8.7/10"],
  ["Certification", "AWS Certified Cloud Practitioner"],
  ["LeetCode", "400+ problems solved"],
  ["Leadership", "President, Software Dev Club"],
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading label="// about" />
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12">
          <Reveal className="max-w-[62ch] space-y-4 text-[1.05rem] text-foreground/90 leading-relaxed">
            <p>
              I like systems with sharp edges — queues, indices, caches — as much as the LLM
              layer that sits on top of them. Most of what I build is backend-first: a job queue
              that guarantees retries and timeouts, a search engine with a hand-rolled inverted
              index and BM25 ranker, a Spring Boot service with a benchmarked caching layer
              underneath. The AI projects follow the same instinct — agents that check their own
              work instead of trusting the first answer.
            </p>
            <p>
              Currently a Software Engineer Intern at ANV Tech, and previously led VIT&apos;s
              80-member Software Development Club, teaching MERN-stack fundamentals to 100+
              students across workshops.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-lg border border-border overflow-hidden">
              {FACTS.map(([k, v], i) => (
                <div
                  key={k}
                  className={`flex items-center justify-between gap-4 px-4 py-3.5 ${
                    i !== FACTS.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <span className="font-mono-ui text-[11px] uppercase tracking-wide text-faint">{k}</span>
                  <span className="text-sm font-medium text-right">{v}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
