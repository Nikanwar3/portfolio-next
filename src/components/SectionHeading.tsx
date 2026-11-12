export default function SectionHeading({ label }: { label: string }) {
  return (
    <p className="font-mono-ui text-[13px] text-accent mb-5 flex items-center gap-2.5">
      <span className="w-4 h-px bg-accent" />
      {label}
    </p>
  );
}
