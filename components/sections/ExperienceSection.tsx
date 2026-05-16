"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <SectionLabel index="02" label="Experience" />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1.1] text-[#f0ede8] mb-12">
            Experience shaped by <span className="italic text-[#a78bfa]">research</span>,{" "}
            <span className="italic text-[#67e8f9]">analytics</span>, and{" "}
            <span className="italic text-[#f472b6]">building</span>.
          </h2>
        </AnimatedSection>

        <div className="relative pl-4 md:pl-8">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-white/10" />
          <div className="space-y-6">
            {experiences.map((item, idx) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative ml-6 md:ml-10 p-6 rounded-2xl bg-[#161618] border border-white/5 card-hover"
              >
                <div className="absolute -left-[34px] md:-left-[42px] top-7 w-4 h-4 rounded-full bg-[#a78bfa] shadow-[0_0_20px_rgba(167,139,250,0.45)]" />
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                  <div>
                    <p className="font-mono text-xs tracking-[0.18em] uppercase text-[#5a5858]">
                      {item.type}
                    </p>
                    <h3 className="mt-2 font-display text-3xl text-[#f0ede8] font-light">
                      {item.role}
                    </h3>
                    <p className="mt-2 text-sm text-[#a78bfa]">{item.company}</p>
                  </div>
                  <span className="font-mono text-xs tracking-[0.18em] uppercase text-[#5a5858]">
                    {item.period}
                  </span>
                </div>

                <p className="mt-5 text-[#9a9898] leading-relaxed font-light">
                  {item.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full text-xs font-mono tracking-wide text-[#c4b5fd] border border-white/10 bg-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
