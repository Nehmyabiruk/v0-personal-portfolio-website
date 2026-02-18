import { Navbar } from '@/components/sections/navbar';
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { ServicesSection } from '@/components/sections/services';
import { SkillsSection } from '@/components/sections/skills';
import { ExperienceSection } from '@/components/sections/experience';
import { ProjectsSection } from '@/components/sections/projects';
import { EducationSection } from '@/components/sections/education';
import { GetInTouchSection } from '@/components/sections/get-in-touch';
import { BottomNav } from '@/components/sections/bottom-nav';

export default function Home() {
  return (
    <div className="min-h-screen bg-white pb-20 md:pb-0">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <GetInTouchSection />
      <BottomNav />
    </div>
  );
}
