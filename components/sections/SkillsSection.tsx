"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Braces,
  Atom,
  GitBranch,
  Github,
  TerminalSquare,
  Server,
  Database,
  Wind,
  LayoutGrid,
  Globe,
  FileCode2,
} from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";

const skills = [
  { name: "HTML 5", icon: FileCode2 },
  { name: "CSS", icon: Wind },
  { name: "TypeScript", icon: Braces },
  { name: "Next.js", icon: Globe },
  { name: "Tailwind CSS", icon: LayoutGrid },
  { name: "React.js", icon: Atom },
  { name: "Git", icon: GitBranch },
  { name: "Github", icon: Github },
  { name: "JavaScript", icon: Code2 },
  { name: "Node.js", icon: TerminalSquare },
  { name: "Express.js", icon: Server },
  { name: "MongoDB", icon: Database },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-20 md:py-24"
    >
      <div className="absolute inset-0 bg-[#0e0e0f]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.06),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <SectionLabel index="04" label="Skills" />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="text-center">
            <h2 className="font-mono text-[clamp(2.8rem,6vw,4.8rem)] font-bold tracking-[-0.06em] text-[#f0ede8]">
              My <span className="text-[#a78bfa]">Skills</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base leading-7 text-[#9a9898] font-light">
              A compact tech stack grid with a clean dark interface, subtle glow, and soft hover motion.
            </p>
          </div>
        </AnimatedSection>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.06,
              },
            },
          }}
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
        >
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                variants={{
                  hidden: { opacity: 0, y: 24, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.55,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
                whileHover={{
                  y: -6,
                  scale: 1.03,
                }}
                className="group relative flex aspect-square flex-col items-center justify-center rounded-2xl border border-white/8 bg-[#161618] shadow-[0_0_18px_rgba(255,255,255,0.05)] transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]" />

                <div className="relative z-10 flex flex-col items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl text-white transition-transform duration-300 group-hover:scale-110">
                    <Icon size={28} strokeWidth={1.8} />
                  </div>

                  <span className="mt-4 text-center font-mono text-[12px] font-medium leading-tight tracking-wide text-[#f0ede8]">
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}