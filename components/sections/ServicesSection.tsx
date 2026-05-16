// components/sections/ServicesSection.tsx
"use client";

import { motion } from "framer-motion";
import {
  ServerCog,
  Layers3,
  FileCode2,
  Boxes,
  PlugZap,
  Rocket,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";

const services = [
  {
    title: "Backend Development",
    desc: "Robust server-side solutions built for performance, stability, and clean architecture.",
    icon: ServerCog,
  },
  {
    title: "Software Architecture",
    desc: "Designing scalable systems that grow with your product and team.",
    icon: Layers3,
  },
  {
    title: "Code Review",
    desc: "Careful analysis to improve quality, maintainability, and security.",
    icon: FileCode2,
  },
  {
    title: "Framework-oriented",
    desc: "Leveraging modern frameworks to accelerate delivery without unnecessary complexity.",
    icon: Boxes,
  },
  {
    title: "API Integration",
    desc: "Connecting systems with clean, well-documented interfaces and reliable data flow.",
    icon: PlugZap,
  },
  {
    title: "Application Development",
    desc: "End-to-end development from concept to production-ready software.",
    icon: Rocket,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative border-t border-white/5 py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <SectionLabel index="03" label="Services" />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1.1] text-[#f0ede8] mb-12">
            My skills, applied.
          </h2>
        </AnimatedSection>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {services.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-[#9534f0] transition-transform duration-300 group-hover:scale-110">
                    <Icon size={18} />
                  </div>

                  <div>
                    <h3 className="text-[1.02rem] font-semibold text-[#f0ede8]">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-7 text-[#9a9898]">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-4 h-px w-full bg-white/5" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}