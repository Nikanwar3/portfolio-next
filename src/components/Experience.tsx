import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const BULLETS = [
  <>
    Built Python <b>FastAPI</b> services for an IPO management system, adding <b>MSSQL + Redis</b>{" "}
    caching that cut API response latency by <b>30%</b>
  </>,
  <>
    Shipped <b>REST API</b> integrations for a mutual-funds platform, connecting backend
    workflows across services
  </>,
  <>
    Built <b>FastAPI</b> data-processing workflows for a doctor-portfolio product, improving
    reporting throughput by <b>20%</b>
  </>,
  <>
    Optimized <b>MongoDB</b> queries and backend logic for an internal ERP system, improving
    processing efficiency by <b>25%</b>
  </>,
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading label="// experience" />
        <Reveal className="grid sm:grid-cols-[200px_1fr] gap-6 sm:gap-10">
          <div className="font-mono-ui text-[13px] text-faint">
            <span className="block text-foreground font-semibold text-[14px] mb-1.5">
              Software Engineer Intern
            </span>
            ANV Tech
            <br />
            Surat, Gujarat
            <br />
            Mar 2026 — Present
          </div>
          <ul className="space-y-3 list-disc pl-5 marker:text-accent">
            {BULLETS.map((b, i) => (
              <li key={i} className="text-[0.97rem] leading-relaxed">
                {b}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
