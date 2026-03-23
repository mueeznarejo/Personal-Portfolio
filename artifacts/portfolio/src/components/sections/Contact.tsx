import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Mail, Phone, Linkedin, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <SectionHeader align="center" title="Let's Build Something Immersive" />

        <FadeIn delay={0.2} className="bg-card border border-border p-8 md:p-12 rounded-3xl text-center mt-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
          
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Currently open to new Lead Developer or Architecture roles.
          </h3>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Whether you need to hit a strict 90fps target on standalone hardware, or architect a scalable enterprise VR system from scratch, I'm ready to help.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
            <a 
              href="mailto:mueez.narejo112@gmail.com"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:bg-primary/90 transition-all w-full sm:w-auto hover:shadow-[0_0_20px_rgba(0,180,255,0.4)] hover:-translate-y-1"
            >
              <Mail size={20} />
              Email Me
            </a>
            
            <a 
              href="https://linkedin.com/in/mueeznarejo"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-[#0A66C2]/10 border border-[#0A66C2]/30 text-[#0A66C2] rounded-xl font-bold text-lg hover:bg-[#0A66C2] hover:text-white transition-all w-full sm:w-auto"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-2 text-muted-foreground">
            <Phone size={16} />
            <span className="font-mono text-sm">+92 308 372 4514</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
