import { FadeIn } from "@/components/ui/FadeIn";
import { Mail, Phone, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-card border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <FadeIn>
          <h2 className="text-5xl md:text-7xl font-black text-foreground mb-12 tracking-tight">
            Let's talk.
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            <a 
              href="mailto:mueez.narejo112@gmail.com"
              className="group flex items-center gap-3 text-xl text-muted-foreground hover:text-primary transition-colors"
            >
              <div className="p-4 rounded-full bg-background border border-border group-hover:border-primary/50 transition-colors">
                <Mail size={24} />
              </div>
              mueez.narejo112@gmail.com
            </a>
            
            <a 
              href="https://linkedin.com/in/mueeznarejo"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 text-xl text-muted-foreground hover:text-primary transition-colors"
            >
              <div className="p-4 rounded-full bg-background border border-border group-hover:border-primary/50 transition-colors">
                <Linkedin size={24} />
              </div>
              LinkedIn
            </a>

            <div className="flex items-center gap-3 text-xl text-muted-foreground">
              <div className="p-4 rounded-full bg-background border border-border">
                <Phone size={24} />
              </div>
              +92 309 372 4514
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
