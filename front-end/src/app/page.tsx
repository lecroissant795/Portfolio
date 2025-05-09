import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { AboutSection } from "@/sections/About";
import { ProjectsSection } from "@/sections/Projects";
import { TestimonialsSection } from "@/sections/Testimonials";
import { TapeSection } from "@/sections/Tape";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TapeSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
