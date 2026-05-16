"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <SectionLabel index="03" label="Projects" />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex items-end justify-between gap-4 mb-10">
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1.1] text-[#f0ede8]">
              Selected work
            </h2>
            <a
              href={projects[0]?.github || "#"}
              className="hidden md:inline-flex items-center gap-2 text-sm text-[#a78bfa] hover:text-[#f0ede8] transition-colors"
            >
              GitHub <ArrowUpRight size={16} />
            </a>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-[1.75rem] bg-[#161618] border border-white/5 card-hover"
            >
              <div
                className="h-40 w-full"
                style={{
                  background: `radial-gradient(circle at top left, ${project.accentColor}40, transparent 35%), radial-gradient(circle at right, rgba(255,255,255,0.06), transparent 40%), linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))`,
                }}
              />
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-[0.2em] text-[#f0ede8] border border-white/10 bg-black/25">
                {project.status}
              </div>

              <div className="p-6">
                <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#5a5858]">
                  {project.category}
                </p>
                <h3 className="mt-3 font-display text-3xl text-[#f0ede8] font-light">
                  {project.title}
                </h3>
                <p className="mt-4 text-[#9a9898] leading-relaxed font-light">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-full text-xs font-mono tracking-wide text-[#c4b5fd] border border-white/10 bg-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  className="mt-6 inline-flex items-center gap-2 text-sm text-[#a78bfa] hover:text-[#f0ede8] transition-colors animated-underline"
                >
                  View on GitHub <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
