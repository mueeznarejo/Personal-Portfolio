import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import AdditionalWork from "@/components/sections/AdditionalWork";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import InMotion from "@/components/sections/InMotion";
import Signals from "@/components/sections/Signals";
import TechnicalHighlights from "@/components/sections/TechnicalHighlights";
import TechStack from "@/components/sections/TechStack";
import Contact from "@/components/sections/Contact";
import type { Theme } from "@/hooks/useTheme";

export default function Home({
  theme,
  toggleTheme,
}: {
  theme: Theme;
  toggleTheme: () => void;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Experience />
        <TechnicalHighlights />
        <AdditionalWork />
        <InMotion />
        <Signals />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
