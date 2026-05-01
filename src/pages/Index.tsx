import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import FooterSection from "@/components/portfolio/FooterSection";

const Index = () => {
  return (
    <main className="bg-background min-h-dvh text-foreground overflow-x-hidden selection:bg-foreground/10">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <FooterSection />
      </div>
    </main>
  );
};

export default Index;
