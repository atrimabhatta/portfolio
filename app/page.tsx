import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import EducationSection from "@/components/sections/EducationSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PrinciplesSection from "@/components/sections/PrinciplesSection";
import ContactSection from "@/components/sections/ContactSection";
import StatusBar from "@/components/StatusBar";
export default function Home() {
  return (
    <main className="mesh-gradient">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ServicesSection />
      <PrinciplesSection />
      <ContactSection />
      <StatusBar />
      <footer className="max-w-6xl mx-auto px-6 pb-8 text-xs text-[#5a5858] font-mono tracking-[0.2em] uppercase">
        © 2026 Atrima Bhattacharyya
      </footer>
    </main>
  );
}
