import { FadeIn } from "@/components/ui/FadeIn";
import { Mail, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-32 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-foreground mb-10 sm:mb-16 tracking-tight font-display">
            Let's talk.
          </h2>

          <p className="max-w-3xl text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 sm:mb-10">
            If you're hiring an Unreal Engine developer, VR developer, XR developer, gameplay programmer, or technical game developer, contact Mueez Aslam for projects in games, interactive simulations, and production-ready real-time products.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <a
              href="mailto:mueez.narejo112@gmail.com"
              className="flex items-center gap-3 rounded-xl border border-border bg-white px-5 py-4 text-sm font-medium text-foreground shadow-sm transition-colors hover:text-primary hover:shadow-md sm:text-base dark:border-[hsl(var(--border))] dark:bg-[hsl(var(--card))] dark:shadow-[0_20px_40px_-34px_rgba(0,0,0,0.8)] dark:hover:shadow-[0_24px_44px_-32px_rgba(0,0,0,0.82)]"
            >
              <Mail size={18} className="text-primary flex-shrink-0" />
              <span className="truncate">mueez.narejo112@gmail.com</span>
            </a>

            <a
              href="https://linkedin.com/in/mueeznarejo"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border bg-white px-5 py-4 text-sm font-medium text-foreground shadow-sm transition-colors hover:text-primary hover:shadow-md sm:text-base dark:border-[hsl(var(--border))] dark:bg-[hsl(var(--card))] dark:shadow-[0_20px_40px_-34px_rgba(0,0,0,0.8)] dark:hover:shadow-[0_24px_44px_-32px_rgba(0,0,0,0.82)]"
            >
              <Linkedin size={18} className="text-primary flex-shrink-0" />
              linkedin.com/in/mueeznarejo
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
