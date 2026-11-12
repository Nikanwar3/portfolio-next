export type Project = {
  slug: string;
  title: string;
  category: "Systems" | "AI Agents" | "Data";
  description: string;
  tags: string[];
  href: string;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    slug: "searchsphere",
    title: "SearchSphere",
    category: "Systems",
    description:
      "A search engine built from first principles — hand-rolled inverted index, trie autocomplete, BM25 ranking, and heap-based top-K. No search library underneath.",
    tags: ["Python", "FastAPI", "PostgreSQL", "Redis"],
    href: "https://github.com/Nikanwar3/searchsphere",
    featured: true,
  },
  {
    slug: "codepilot",
    title: "CodePilot",
    category: "AI Agents",
    description:
      "An autonomous AI software-engineering agent — point it at a repo and it explains the architecture, hunts bugs, drafts a patch, and verifies it in a sandboxed test run.",
    tags: ["Python", "FastAPI", "LLM Agents", "Sandboxed CI"],
    href: "https://github.com/Nikanwar3/codepilot",
    featured: true,
  },
  {
    slug: "finance-agent-platform",
    title: "Finance Agent Platform",
    category: "AI Agents",
    description:
      "Month-end close automation for 8 simulated portfolios — a 10-agent dependency graph running in parallel, streamed live over WebSockets.",
    tags: ["Python", "FastAPI", "Redis", "Celery"],
    href: "https://github.com/Nikanwar3/finance-agent-platform",
  },
  {
    slug: "agentic-rag-qa-platform",
    title: "Agentic RAG QA Platform",
    category: "AI Agents",
    description:
      "Self-correcting document Q&A — grades its own retrievals before answering, with MLflow tracking live queries and an offline eval sweep.",
    tags: ["Python", "FAISS", "LangGraph", "MLflow"],
    href: "https://github.com/Nikanwar3/agentic-rag-qa-platform",
  },
  {
    slug: "distributed-job-queue",
    title: "Distributed Job Queue",
    category: "Systems",
    description:
      "Durable background jobs — bounded-concurrency workers, retries, per-job timeouts, full execution history.",
    tags: ["Java 21", "Spring Boot", "Redis Streams"],
    href: "https://github.com/Nikanwar3/distributed-job-queue",
  },
  {
    slug: "catalog-search-service",
    title: "Catalog Search Service",
    category: "Systems",
    description:
      "Product catalog API — structured filtering, full-text search, Postgres+Redis caching, measured benchmark suite.",
    tags: ["Java 21", "Spring Boot", "PostgreSQL"],
    href: "https://github.com/Nikanwar3/catalog-search-service",
  },
  {
    slug: "healthcare-data-management-system",
    title: "Healthcare Data Management",
    category: "Data",
    description: "Database-first clinical reporting — PL/pgSQL procedures, cursors, exception handling.",
    tags: ["PostgreSQL", "PL/pgSQL", "Python"],
    href: "https://github.com/Nikanwar3/healthcare-data-management-system",
  },
  {
    slug: "recon-toolkit",
    title: "Recon Toolkit",
    category: "Data",
    description: "Configurable reconciliation engine — diffs datasets on a business key, reports to SQLite or Oracle.",
    tags: ["Python", "SQL", "Oracle"],
    href: "https://github.com/Nikanwar3/recon-toolkit",
  },
];
