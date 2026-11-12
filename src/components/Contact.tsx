import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const LINKS = [
  { flag: "--email", label: "nikanwar111@gmail.com", href: "mailto:nikanwar111@gmail.com" },
  { flag: "--github", label: "Nikanwar3", href: "https://github.com/Nikanwar3" },
  { flag: "--linkedin", label: "nidhiikanwar", href: "https://linkedin.com/in/nidhiikanwar" },
  { flag: "--leetcode", label: "nikanwar3", href: "https://leetcode.com/u/nikanwar3/" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading label="// contact" />
        <div className="flex flex-wrap items-end justify-between gap-10">
          <Reveal className="max-w-[46ch]">
            <h2 className="text-2xl sm:text-[2.1rem] font-semibold tracking-tight text-balance">
              Open to backend &amp; applied-AI roles.
            </h2>
            <p className="text-muted mt-3.5">If something above looks like a fit, I&apos;d like to hear from you.</p>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <a
                key={l.flag}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener"
                className="font-mono-ui text-base sm:text-lg py-1.5 border-b border-transparent hover:text-accent hover:border-accent transition-colors w-fit"
              >
                <span className="text-faint mr-2.5">{l.flag}</span>
                {l.label}
              </a>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
