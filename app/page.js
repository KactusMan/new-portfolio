import HeroKinetic from "@/components/HeroKinetic";
import WebsiteShowcase from "@/components/WebsiteShowcase";
import ProjectShowcase from "@/components/ProjectShowcase";
import SkillsDoodles from "@/components/SkillsDoodles";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-onyx text-vanilla selection:bg-lime selection:text-onyx relative overflow-x-hidden">
      <HeroKinetic />
      <WebsiteShowcase />
      <ProjectShowcase />
      <SkillsDoodles />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}
