import { FadeIn } from "@/components/ui/FadeIn";
import { Mail, Phone, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <FadeIn>
          <h2 className="text-5xl md:text-7xl font-black text-foreground mb-16 tracking-tight font-display">
            Let's talk.
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
            <a 
              href="mailto:mueez.narejo112@gmail.com"
              className="group flex items-center gap-3 text-lg font-medium text-foreground hover:text-primary transition-colors bg-white px-6 py-4 rounded-xl border border-border shadow-sm hover:shadow-md w-full md:w-auto justify-center"
            >
              <Mail size={20} className="text-primary" />
              mueez.narejo112@gmail.com
            </a>
            
            <a 
              href="https://linkedin.com/in/mueeznarejo"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 text-lg font-medium text-foreground hover:text-primary transition-colors bg-white px-6 py-4 rounded-xl border border-border shadow-sm hover:shadow-md w-full md:w-auto justify-center"
            >
              <Linkedin size={20} className="text-primary" />
              LinkedIn
            </a>

            <div className="flex items-center gap-3 text-lg font-medium text-foreground bg-white px-6 py-4 rounded-xl border border-border shadow-sm w-full md:w-auto justify-center">
              <Phone size={20} className="text-primary" />
              +92 309 372 4514
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
