// components/sections/PrinciplesSection.tsx
"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers3,
  Code2,
  Workflow,
  Rocket,
  ShieldCheck,
  Database,
  GitBranch,
  PencilRuler,
  Users,
  FileText,
  Zap,
  Eye,
  MessagesSquare,
  ClipboardList,
  RefreshCw,
  CheckCircle2,
  Bug,
  CornerDownRight,
} from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";

type TabKey = "all" | "code" | "work" | "deliver";

type Principle = {
  title: string;
  desc: string;
  icon: React.ReactNode;
  categories: TabKey[];
};

const principles: Principle[] = [
  {
    title: "Rapid Application Development (RAD)",
    desc: "Move fast with focused prototypes, then refine the best ideas into production-ready features.",
    icon: <Zap size={18} />,
    categories: ["all", "work"],
  },
  {
    title: "Accelerated Intelligence",
    desc: "Use AI tools to improve speed, clarity, and decision-making without losing engineering quality.",
    icon: <Rocket size={18} />,
    categories: ["all", "work"],
  },
  {
    title: "Database as Code (DaC)",
    desc: "Treat schema changes, migrations, and data rules as versioned assets so every change stays traceable.",
    icon: <Database size={18} />,
    categories: ["all", "code"],
  },
  {
    title: "Pragmatic Testing",
    desc: "Test the parts that matter most: validation, critical flows, and edge cases that protect users.",
    icon: <CheckCircle2 size={18} />,
    categories: ["all", "code"],
  },
  {
    title: "Infrastructure as Code (IaC)",
    desc: "Keep environments reproducible and deployment-ready through versioned configuration and automation.",
    icon: <Workflow size={18} />,
    categories: ["all", "deliver"],
  },
  {
    title: "Continuous Integration & Delivery",
    desc: "Ship consistently with automated checks, predictable releases, and a low-friction delivery pipeline.",
    icon: <GitBranch size={18} />,
    categories: ["all", "deliver"],
  },
  {
    title: "Collaboration",
    desc: "Work closely with people, share context early, and keep the solution moving together.",
    icon: <Users size={18} />,
    categories: ["all", "work"],
  },
  {
    title: "Smooth Deployments",
    desc: "Plan rollouts, reduce downtime, and keep releases calm, observable, and reversible.",
    icon: <Rocket size={18} />,
    categories: ["all", "deliver"],
  },
  {
    title: "On-time Delivery",
    desc: "Meet deadlines through realistic scoping, steady progress, and honest trade-offs.",
    icon: <ClipboardList size={18} />,
    categories: ["all", "deliver"],
  },
  {
    title: "Transparency",
    desc: "Make progress visible, surface blockers early, and keep expectations aligned.",
    icon: <Eye size={18} />,
    categories: ["all", "work"],
  },
  {
    title: "Communication",
    desc: "Keep updates short, clear, and frequent so no one is surprised by the next step.",
    icon: <MessagesSquare size={18} />,
    categories: ["all", "work"],
  },
  {
    title: "Documentation",
    desc: "Write just enough for the next person to move forward confidently without confusion.",
    icon: <FileText size={18} />,
    categories: ["all", "deliver"],
  },
  {
    title: "Defensive Programming",
    desc: "Expect invalid input, validate assumptions, and handle edge cases before they become issues.",
    icon: <ShieldCheck size={18} />,
    categories: ["all", "code"],
  },
  {
    title: "Fail Fast",
    desc: "Stop early when assumptions break so problems stay small and easy to fix.",
    icon: <Bug size={18} />,
    categories: ["all", "code"],
  },
  {
    title: "Separation of Concerns",
    desc: "Keep layers focused so UI, logic, and data responsibilities stay easy to change.",
    icon: <Layers3 size={18} />,
    categories: ["all", "code"],
  },
  {
    title: "KISS & YAGNI",
    desc: "Prefer simple solutions and avoid building extra complexity you do not need yet.",
    icon: <PencilRuler size={18} />,
    categories: ["all", "code"],
  },
  {
    title: "Don’t Repeat Yourself (DRY)",
    desc: "Extract reusable logic so the same idea lives in one place and stays maintainable.",
    icon: <RefreshCw size={18} />,
    categories: ["all", "code"],
  },
  {
    title: "SOLID Principles",
    desc: "Design components and services so they are easier to extend, test, and maintain.",
    icon: <Code2 size={18} />,
    categories: ["all", "code"],
  },
  {
    title: "Code as Documentation",
    desc: "Use expressive names and clean structure so the code explains itself naturally.",
    icon: <FileText size={18} />,
    categories: ["all", "code"],
  },
  {
    title: "Domain-Driven Design",
    desc: "Model software around real business concepts so the product stays understandable.",
    icon: <CornerDownRight size={18} />,
    categories: ["all", "code"],
  },
  {
    title: "Design Patterns",
    desc: "Apply proven patterns when they solve a real problem, not just because they exist.",
    icon: <PencilRuler size={18} />,
    categories: ["all", "code"],
  },
  {
    title: "Clean Architecture",
    desc: "Keep business logic independent from frameworks so the system stays flexible.",
    icon: <Layers3 size={18} />,
    categories: ["all", "code"],
  },
  {
    title: "Strongly Typed",
    desc: "Use types to catch mistakes early and communicate intent clearly.",
    icon: <CheckCircle2 size={18} />,
    categories: ["all", "code"],
  },
];

const tabs: { key: TabKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "code", label: "How I Code" },
  { key: "work", label: "How I Work" },
  { key: "deliver", label: "How I Deliver" },
];

export default function PrinciplesSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("all");

  const filtered = useMemo(() => {
    if (activeTab === "all") return principles;

    return principles.filter((item) => item.categories.includes(activeTab));
  }, [activeTab]);

  return (
    <section id="principles" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0e0e0f]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.08),transparent_35%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.04),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <SectionLabel index="05" label="Principles" />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="font-display text-[clamp(2.6rem,5vw,4.3rem)] font-light leading-[1.05] text-[#f0ede8] mb-8">
            How I build software.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="flex flex-wrap gap-3">
            {tabs.map((tab) => {
              const active = activeTab === tab.key;

              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                    active
                      ? "bg-[#9307e4] text-white shadow-[0_8px_30px_rgba(239,68,68,0.25)]"
                      : "bg-[#d45aec] text-[#d6c9c9] hover:bg-[#8f61ad]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        <div className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => (
              <motion.article
                key={item.title}
                layout
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.35, delay: index * 0.02 }}
                className="group relative"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[#7a13ce]">{item.icon}</span>
                    <h3 className="text-lg font-semibold text-[#f0ede8]">
                      {item.title}
                    </h3>
                  </div>

                  <span className="mt-1 text-[#b67fbb] transition-colors group-hover:text-[#a78bfa]">
                    <CornerDownRight size={16} />
                  </span>
                </div>

                <p className="mt-3 max-w-md text-sm leading-7 text-[#c7bfbf]">
                  {item.desc}
                </p>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}