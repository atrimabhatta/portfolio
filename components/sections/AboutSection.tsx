"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo, certifications } from "@/data/portfolio";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "12+", label: "Projects Built" },
    { value: "5★", label: "HackerRank Python" },
    { value: "80.9%", label: "MCA CGPA" },
    { value: "2026", label: "Graduating" },
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#a78bfa]/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <SectionLabel index="01" label="About" />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 mt-8">
          <div>
            <AnimatedSection delay={0.1}>
              <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1.1] text-[#f0ede8] mb-8">
                Crafting systems<br />
                <span className="italic text-[#a78bfa]">at the edge</span> of<br />
                AI & engineering.
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-[#9a9898] leading-relaxed text-base mb-6 font-light">
                {personalInfo.bio}
              </p>
              <p className="text-[#9a9898] leading-relaxed text-base font-light">
                From building privacy-hardened emotion recognition models to designing AI-powered
                sustainability dashboards — I gravitate toward problems where data meets real human
                impact. Currently pursuing MCA with a specialization in AI, Data Science &amp; Cloud Computing.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-wrap gap-2 mt-8">
                {personalInfo.highlights.map((h) => (
                  <span
                    key={h}
                    className="px-3 py-1.5 rounded-full text-xs font-mono tracking-wide text-[#a78bfa] border border-[#a78bfa]/20 bg-[#a78bfa]/5"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <div ref={ref} className="grid grid-cols-2 gap-4 content-start">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 + 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative p-6 rounded-2xl bg-[#161618] border border-white/5 overflow-hidden group hover:border-[#a78bfa]/20 transition-colors duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#a78bfa]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <p className="font-display text-4xl font-light text-[#f0ede8] mb-1">{s.value}</p>
                <p className="font-mono text-xs text-[#5a5858] tracking-[0.12em] uppercase">{s.label}</p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-2 p-6 rounded-2xl bg-[#161618] border border-white/5 group hover:border-[#67e8f9]/20 transition-colors duration-300"
            >
              <p className="font-mono text-xs text-[#5a5858] tracking-[0.12em] uppercase mb-3">
                Recent Certifications
              </p>
              <div className="flex flex-col gap-1.5">
                {certifications.slice(0, 3).map((cert) => (
                  <div key={cert.name} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#67e8f9]/60" />
                    <span className="text-sm text-[#9a9898] font-light">{cert.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
