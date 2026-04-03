import type { ReactNode } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { useVisibility } from "@/hooks/useVisibility";
import { isAudienceVisible, type AudienceVisibility } from "@/lib/visibility";
import { ArrowUpRight, Mail, Linkedin } from "lucide-react";

type ContactLink = {
  audience?: AudienceVisibility;
  href: string;
  label: string;
  external?: boolean;
  icon: ReactNode;
};

export default function Contact() {
  const { effectiveAudience } = useVisibility();
  const links: ContactLink[] = [
    {
      href: "mailto:mueez.narejo112@gmail.com",
      label: "mueez.narejo112@gmail.com",
      icon: <Mail size={18} className="text-primary flex-shrink-0" />,
    },
    {
      href: "https://linkedin.com/in/mueeznarejo",
      label: "linkedin.com/in/mueeznarejo",
      external: true,
      icon: <Linkedin size={18} className="text-primary flex-shrink-0" />,
    },
    {
      audience: "public-only",
      href: "https://www.upwork.com/freelancers/~011f1ad9bb5a6e960c",
      label: "Upwork Profile",
      external: true,
      icon: (
        <span className="inline-flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-primary/10 px-1.5 font-mono text-[10px] font-bold uppercase text-primary">
          Up
        </span>
      ),
    },
  ];

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
            {links
              .filter((link) => isAudienceVisible(link.audience, effectiveAudience))
              .map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 rounded-xl border border-border bg-white px-5 py-4 text-sm font-medium text-foreground shadow-sm transition-colors hover:text-primary hover:shadow-md sm:text-base dark:border-[hsl(var(--border))] dark:bg-[hsl(var(--card))] dark:shadow-[0_20px_40px_-34px_rgba(0,0,0,0.8)] dark:hover:shadow-[0_24px_44px_-32px_rgba(0,0,0,0.82)]"
                >
                  {link.icon}
                  <span className="truncate">{link.label}</span>
                  {link.external ? (
                    <ArrowUpRight size={16} className="text-primary" />
                  ) : null}
                </a>
              ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
