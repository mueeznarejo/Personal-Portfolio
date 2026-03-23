import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import TechSolutions from "@/components/sections/TechSolutions";
import TechStack from "@/components/sections/TechStack";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <TechSolutions />
        <TechStack />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
