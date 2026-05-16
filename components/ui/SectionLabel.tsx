"use client";

interface SectionLabelProps {
  index: string;
  label: string;
}

export default function SectionLabel({ index, label }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="font-mono text-xs text-[#a78bfa] tracking-[0.2em] opacity-80">
        {index}
      </span>
      <span className="h-px w-8 bg-[#a78bfa]/40" />
      <span className="font-mono text-xs text-[#5a5858] tracking-[0.2em] uppercase">
        {label}
      </span>
    </div>
  );
}
