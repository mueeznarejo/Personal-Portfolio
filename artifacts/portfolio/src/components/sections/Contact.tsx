import { FadeIn } from "@/components/ui/FadeIn";
import { Mail, Phone, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-32 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-foreground mb-10 sm:mb-16 tracking-tight font-display">
            Let's talk.
          </h2>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <a
              href="mailto:mueez.narejo112@gmail.com"
              className="flex items-center gap-3 text-sm sm:text-base font-medium text-foreground hover:text-primary transition-colors bg-white px-5 py-4 rounded-xl border border-border shadow-sm hover:shadow-md"
            >
              <Mail size={18} className="text-primary flex-shrink-0" />
              <span className="truncate">mueez.narejo112@gmail.com</span>
            </a>

            <a
              href="https://linkedin.com/in/mueeznarejo"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm sm:text-base font-medium text-foreground hover:text-primary transition-colors bg-white px-5 py-4 rounded-xl border border-border shadow-sm hover:shadow-md"
            >
              <Linkedin size={18} className="text-primary flex-shrink-0" />
              linkedin.com/in/mueeznarejo
            </a>

            <div className="flex items-center gap-3 text-sm sm:text-base font-medium text-foreground bg-white px-5 py-4 rounded-xl border border-border shadow-sm">
              <Phone size={18} className="text-primary flex-shrink-0" />
              +92 309 372 4514
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
