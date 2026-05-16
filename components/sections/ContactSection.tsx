"use client";

import { ArrowUpRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding relative pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <SectionLabel index="05" label="Contact" />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <AnimatedSection delay={0.1}>
              <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1.1] text-[#f0ede8]">
                Let&apos;s build something thoughtful.
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="mt-6 text-[#9a9898] leading-relaxed font-light max-w-xl">
                Open to internships, AI/ML projects, data analytics roles, and product engineering work.
                Reach out if you want to collaborate on an idea, research project, or modern web experience.
              </p>
            </AnimatedSection>

            <div className="mt-8 space-y-3">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 text-[#c4b5fd] hover:text-[#f0ede8] transition-colors">
                <Mail size={18} />
                <span>{personalInfo.email}</span>
              </a>
              <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-3 text-[#c4b5fd] hover:text-[#f0ede8] transition-colors">
                <Phone size={18} />
                <span>{personalInfo.phone}</span>
              </a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[#c4b5fd] hover:text-[#f0ede8] transition-colors">
                <Github size={18} />
                <span>GitHub</span>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[#c4b5fd] hover:text-[#f0ede8] transition-colors">
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="rounded-[1.75rem] p-6 bg-[#161618] border border-white/5 card-hover">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#5a5858]">
              Ready for
            </p>
            <div className="mt-5 grid gap-3">
              {[
                "AI / ML Projects",
                "Data Analytics & BI",
                "Research Collaboration",
                "Full-Stack Development",
              ].map((item) => (
                <div key={item} className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-4 py-3">
                  <span className="text-[#f0ede8]">{item}</span>
                  <ArrowUpRight size={16} className="text-[#a78bfa]" />
                </div>
              ))}
            </div>

            <a
              href={personalInfo.resumeUrl}
              className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#a78bfa]/30 text-[#c4b5fd] hover:bg-[#a78bfa]/10 transition-all"
            >
              Download Resume <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
