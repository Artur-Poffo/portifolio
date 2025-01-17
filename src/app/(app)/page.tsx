import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { ExperienceSection } from "@/sections/Experience";
import { HomeSection } from "@/sections/Home";
import { ProjectsSection } from "@/sections/Projects";
import { SkillsSection } from "@/sections/Skills";

export default function Main() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
