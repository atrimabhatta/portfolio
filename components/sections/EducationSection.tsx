"use client";

import { motion } from "framer-motion";
import { education } from "@/data/portfolio";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function EducationSection() {
  return (
    <section id="education" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <SectionLabel index="02" label="Education" />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1.1] text-[#f0ede8] mb-12">
            Academic foundation
          </h2>
        </AnimatedSection>

        <div className="grid gap-5">
          {education.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative p-6 rounded-[1.75rem] bg-[#161618] border border-white/5 card-hover"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                <div>
                  <p className="font-mono text-xs tracking-[0.18em] uppercase text-[#5a5858]">
                    {item.type}
                  </p>
                  <h3 className="mt-2 font-display text-3xl text-[#f0ede8] font-light">
                    {item.degree}
                  </h3>
                  <p className="mt-2 text-sm text-[#a78bfa]">{item.institution}</p>
                </div>

                <div className="text-right">
                  <span className="block font-mono text-xs tracking-[0.18em] uppercase text-[#5a5858]">
                    {item.period}
                  </span>
                  <span className="mt-2 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#c4b5fd]">
                    {item.gpa}
                  </span>
                </div>
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
    </section>
  );
}