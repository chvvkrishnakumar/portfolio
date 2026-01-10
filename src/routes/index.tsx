import { createFileRoute } from '@tanstack/react-router'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { SkillsSection } from '@/components/skills-section'
import { ExperienceSection } from '@/components/experience-section'
import { ProjectsSection } from '@/components/projects-section'
import { ContactSection } from '@/components/contact-section'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import portfolioData from '@/data/portfolio.json'

export const Route = createFileRoute("/")({
  component: IndexPage,
});

function IndexPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection data={portfolioData.personal} />
      <AboutSection data={portfolioData.personal} />
      <SkillsSection data={portfolioData.skills} />
      <ExperienceSection data={portfolioData.experience} />
      <ProjectsSection data={portfolioData.projects} />
      {/* <TestimonialsSection data={portfolioData.testimonials} /> */}
      <ContactSection
        data={portfolioData.contact}
        personal={portfolioData.personal}
      />
      <Footer data={portfolioData.personal} />
      {/* <Chatbot /> */}
    </main>
  );
}
