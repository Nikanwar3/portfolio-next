import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const GROUPS: [string, string[]][] = [
  ["Languages", ["Python", "Java", "JavaScript", "TypeScript", "SQL"]],
  [
    "Backend & Web",
    ["FastAPI", "Spring Boot", "Spring Security", "Node.js", "Express", "REST APIs", "React", "Next.js"],
  ],
  ["Data & Infra", ["PostgreSQL", "MySQL", "MongoDB", "Redis", "MSSQL", "Docker", "Kubernetes", "AWS"]],
  [
    "AI / LLM & Tooling",
    ["LangGraph", "RAG", "LLM Integration", "MLflow", "scikit-learn", "GitHub Actions", "pytest", "JUnit 5"],
  ],
];

export default function Stack() {
  return (
    <section id="stack" className="py-20 sm:py-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading label="// stack" />
        <Reveal className="divide-y divide-border border-y border-border">
          {GROUPS.map(([label, items]) => (
            <div key={label} className="grid sm:grid-cols-[180px_1fr] gap-2 sm:gap-5 py-4 sm:items-baseline">
              <span className="font-mono-ui text-[11px] uppercase tracking-wide text-faint">{label}</span>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="font-mono-ui text-[12px] px-2.5 py-1 rounded border border-border bg-surface text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
