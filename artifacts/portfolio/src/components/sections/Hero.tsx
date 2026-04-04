import { FadeIn } from "@/components/ui/FadeIn";
import { Mail, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="hero-section relative min-h-screen flex flex-col justify-center bg-background pt-24 pb-12 dark:bg-background">
      <div className="hero-shell max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col">

        <div className="hero-layout w-full flex flex-col lg:flex-row gap-10 lg:gap-16 lg:items-center justify-between">
          {/* Text content */}
          <div className="hero-copy lg:w-2/3 flex-1">
            <FadeIn delay={0.1}>
              <div className="hero-status mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 text-sm font-medium text-foreground shadow-sm dark:border-[hsl(var(--border))] dark:bg-transparent dark:shadow-none">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                </span>
                Available for work
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-sm sm:text-base font-mono uppercase tracking-[0.2em] text-primary mb-4">
                Mueez Aslam • VR/XR Developer
              </p>
              <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-5 text-foreground font-display">
                I build Unreal Engine games, VR/XR products, and gameplay systems.
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="hero-summary text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                I'm Mueez Aslam, a VR/XR developer and technical game developer focused on Meta Quest, SteamVR, UE5 gameplay architecture, optimization, and production-ready technical systems.
              </p>
            </FadeIn>

            <FadeIn delay={0.35}>
              <div className="hero-tags flex flex-wrap gap-2 mb-8 max-w-3xl">
                {[
                  "UE5",
                  "VR/XR Developer",
                  "Game Developer",
                  "Meta Quest",
                  "SteamVR",
                  "Blueprints + C++",
                ].map((item) => (
                  <span
                    key={item}
                    className="hero-chip rounded-full border border-border bg-white px-3 py-1.5 text-sm font-medium text-foreground shadow-sm dark:border-[hsl(var(--border))] dark:bg-transparent dark:text-foreground/94 dark:shadow-none"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="hero-actions flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8">
                <a
                  href="mailto:mueez.narejo112@gmail.com"
                  className="px-6 py-3 rounded-lg bg-primary text-white font-semibold text-base hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  Email Mueez <Mail size={17} />
                </a>
                <a
                  href="#projects"
                  className="flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-base font-semibold text-foreground transition-all hover:bg-white hover:shadow-sm dark:border-[hsl(var(--border))] dark:bg-transparent dark:hover:bg-[hsl(var(--secondary))] dark:hover:shadow-none"
                >
                  View Work
                </a>
                <a
                  href="https://linkedin.com/in/mueeznarejo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg text-muted-foreground font-semibold text-base hover:text-foreground transition-all flex items-center justify-center"
                >
                  LinkedIn ↗
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground font-medium">
                <span className="flex items-center gap-1.5"><MapPin size={14} /> Hyderabad, Pakistan</span>
                <span className="hidden sm:block text-border">·</span>
                <a href="mailto:mueez.narejo112@gmail.com" className="hover:text-primary transition-colors truncate max-w-[220px] sm:max-w-none">
                  mueez.narejo112@gmail.com
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Profile portrait — hidden on mobile to save space */}
          <FadeIn delay={0.4} className="hero-portrait hidden lg:flex lg:w-1/3 justify-end lg:-mt-8">
            <div className="hero-portrait-frame group relative h-80 w-72 flex-shrink-0 transition-transform duration-500 hover:-translate-y-2 hover:rotate-[1.5deg] xl:h-[26rem] xl:w-80">
              <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.2),transparent_45%),radial-gradient(circle_at_80%_80%,hsl(var(--accent)/0.18),transparent_40%)] blur-2xl opacity-80 transition duration-500 group-hover:opacity-100 dark:bg-[radial-gradient(circle_at_50%_48%,rgba(16,185,129,0.045),transparent_52%)] dark:opacity-100 dark:blur-3xl" />
              <div className="hero-portrait-card relative h-full w-full overflow-hidden rounded-[2.25rem] shadow-[0_30px_80px_-28px_rgba(0,0,0,0.45)] ring-1 ring-black/5 transition duration-500 group-hover:shadow-[0_38px_95px_-28px_rgba(0,0,0,0.55)] dark:bg-[hsl(var(--card))] dark:shadow-[0_28px_72px_-26px_rgba(0,0,0,0.82)] dark:ring-[hsl(var(--border))] dark:group-hover:shadow-[0_36px_84px_-24px_rgba(0,0,0,0.86)]">
                <img
                  src={`${import.meta.env.BASE_URL}images/mueez-portrait.png`}
                  alt="Mueez Aslam, Lead VR Developer"
                  width={600}
                  height={800}
                  fetchPriority="high"
                  decoding="async"
                  className="hero-portrait-image h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.03] dark:object-center"
                />
                <div className="hero-portrait-base absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/35 via-black/5 to-transparent dark:h-[32%] dark:bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.06)_24%,rgba(14,16,18,0.18)_44%,hsl(var(--card))_100%)]" />
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Proof Bar */}
        <FadeIn delay={0.6} className="w-full mt-14 sm:mt-20 pt-8 sm:pt-10 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { num: "7+",      label: "Commercial XR\ntitles shipped" },
              { num: "40M+",   label: "Balls played\nThe Final Overs" },
              { num: "72-90", label: "FPS on Quest\nhardware" },
              { num: "500+",  label: "Nurses trained\nacross hospitals" },
            ].map(({ num, label }) => (
              <div key={num} className="border-l-2 border-primary pl-4">
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-1.5 font-display">{num}</div>
                <div className="text-[11px] sm:text-xs text-muted-foreground font-semibold uppercase tracking-wider leading-snug whitespace-pre-line">{label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
