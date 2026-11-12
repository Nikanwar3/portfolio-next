export type KnowledgeChunk = {
  id: string;
  topic: string;
  keywords: string[];
  text: string;
};

export const KNOWLEDGE: KnowledgeChunk[] = [
  {
    id: "profile",
    topic: "Profile",
    keywords: ["who", "name", "background", "bio", "about", "summary", "graduate", "education", "vit", "college"],
    text: "Nidhi Kanwar is a backend-leaning software engineer with a B.Tech in Computer Science from Vellore Institute of Technology (Bhopal), GPA 8.7/10, graduated June 2026. She's an AWS Certified Cloud Practitioner, has solved 400+ problems on LeetCode, and completed Applied Machine Learning in Python (University of Michigan, Coursera). She was President of VIT's Software Development Club, growing an 80+ member community and teaching MERN-stack fundamentals to 100+ students across workshops.",
  },
  {
    id: "experience",
    topic: "Work experience",
    keywords: ["experience", "work", "job", "intern", "internship", "anv", "company", "role"],
    text: "Nidhi is currently a Software Engineer Intern at ANV Tech (Surat, Gujarat) since March 2026. She built Python FastAPI services for an IPO management system, adding MSSQL + Redis caching that cut API response latency by 30%. She shipped REST API integrations for a mutual-funds platform, built FastAPI data-processing workflows for a doctor-portfolio product (improving reporting throughput 20%), and optimized MongoDB queries for an internal ERP system (25% efficiency gain).",
  },
  {
    id: "stack",
    topic: "Tech stack / skills",
    keywords: ["stack", "skills", "languages", "tech", "technologies", "python", "java", "javascript", "sql", "framework"],
    text: "Languages: Python, Java, JavaScript (ES6+), TypeScript, SQL. Backend & web: FastAPI, Spring Boot, Spring Security, Node.js, Express, REST APIs, React, Next.js. Data & infra: PostgreSQL, MySQL, MongoDB, Redis, MSSQL, Docker, Kubernetes, AWS (EC2/RDS/S3). AI/LLM & tooling: LangGraph, RAG, LLM integration, MLflow, scikit-learn, GitHub Actions, pytest, JUnit 5.",
  },
  {
    id: "proj-job-queue",
    topic: "Project: Distributed Job Queue",
    keywords: ["job queue", "distributed", "queue", "worker", "retries", "timeout", "redis"],
    text: "Distributed Job Queue: a durable background job processing platform. Submit a job over HTTP, it's queued durably, a pool of workers picks it up with bounded concurrency, retries, and per-job timeouts; you can poll status, fetch results, cancel jobs, or inspect execution history. Built with Java 21, Spring Boot 3, PostgreSQL, Redis Streams, Docker Compose. github.com/Nikanwar3/distributed-job-queue",
  },
  {
    id: "proj-catalog",
    topic: "Project: Catalog Search Service",
    keywords: ["catalog", "search service", "spring", "redis", "benchmark"],
    text: "Catalog Search Service: a REST API for managing and searching a product catalog — CRUD, structured filtering, full-text search, sorting, pagination, Postgres indexing, and Redis caching with explicit invalidation. Includes a measured indexing/caching benchmark suite. Built with Java 21, Spring Boot 3, PostgreSQL, Redis. github.com/Nikanwar3/catalog-search-service",
  },
  {
    id: "proj-searchsphere",
    topic: "Project: SearchSphere",
    keywords: ["searchsphere", "search engine", "inverted index", "bm25", "trie", "autocomplete", "ranking"],
    text: "SearchSphere: a search engine built entirely from first principles — a custom inverted index, trie-based autocomplete, BM25 relevance ranking, and heap-based Top-K retrieval, all implemented from scratch with no search library. Served behind FastAPI with PostgreSQL persistence and Redis caching. github.com/Nikanwar3/searchsphere",
  },
  {
    id: "proj-codepilot",
    topic: "Project: CodePilot",
    keywords: ["codepilot", "ai agent", "autonomous", "bug", "patch", "sandbox", "code review agent"],
    text: "CodePilot: an autonomous AI software-engineering agent. Connect a GitHub repo and it explains the architecture, hunts for bugs and security issues, generates a patch, runs the tests in an isolated sandbox, retries on failure, and hands back verified results. Built with Python and FastAPI. github.com/Nikanwar3/codepilot",
  },
  {
    id: "proj-finance-agent",
    topic: "Project: Finance Agent Platform",
    keywords: ["finance agent", "multi-agent", "orchestrator", "websocket", "month-end close", "portfolio", "redis", "celery"],
    text: "Finance Agent Platform: automates month-end close for 8 simulated portfolios. A FastAPI/Pydantic backend models trial balances and consolidations over PostgreSQL. An orchestrator models 10 specialized agents as a dependency graph, running independent agents in parallel with Redis coordinating shared state, streaming progress over WebSockets. github.com/Nikanwar3/finance-agent-platform",
  },
  {
    id: "proj-rag",
    topic: "Project: Agentic RAG QA Platform",
    keywords: ["rag", "retrieval", "mlflow", "langgraph", "corrective rag", "document qa", "faiss"],
    text: "Agentic RAG QA Platform: a self-correcting document Q&A service. A LangGraph agent grades its own retrieved context before generating an answer, and retries the query (capped at 2 attempts) instead of answering off a bad retrieval. Uses local FAISS + SentenceTransformers for retrieval, with MLflow tracking both live queries and an offline evaluation sweep. github.com/Nikanwar3/agentic-rag-qa-platform",
  },
  {
    id: "proj-healthcare",
    topic: "Project: Healthcare Data Management System",
    keywords: ["healthcare", "clinical", "plpgsql", "stored procedure", "database"],
    text: "Healthcare Data Management System: a database-first clinical reporting system demonstrating relational design, SQL, and PL/pgSQL — stored procedures, functions, cursors, and exception handling — behind a validated Python reporting layer. All patient data is synthetic. github.com/Nikanwar3/healthcare-data-management-system",
  },
  {
    id: "proj-recon",
    topic: "Project: Recon Toolkit",
    keywords: ["recon", "reconciliation", "oracle", "data validation", "sqlite"],
    text: "Recon Toolkit: a configurable data reconciliation and validation platform. Compares two datasets (CSV/JSON) on a configurable business key and per-field rules, persists job metadata and results to SQLite (local dev) or Oracle Database + PL/SQL (production-style), and emits JSON/CSV reports. github.com/Nikanwar3/recon-toolkit",
  },
  {
    id: "contact",
    topic: "Contact",
    keywords: ["contact", "email", "reach", "hire", "linkedin", "github profile", "leetcode profile"],
    text: "Nidhi is open to Backend and AI-Platform engineering roles. Email: nikanwar111@gmail.com. GitHub: github.com/Nikanwar3. LinkedIn: linkedin.com/in/nidhiikanwar. LeetCode: leetcode.com/u/nikanwar3.",
  },
  {
    id: "this-chatbot",
    topic: "About this chatbot",
    keywords: ["this chatbot", "how does this work", "are you an ai", "built this chat", "meta"],
    text: "This chat widget is itself a small RAG pipeline: it keyword-matches your question against a knowledge base of Nidhi's resume and project data, then passes the best-matching chunks plus your question to an LLM (Groq) to generate a grounded answer. If no API key is configured or the free tier is exhausted, it falls back to returning the best-matching knowledge chunk directly instead of calling any paid API.",
  },
];
