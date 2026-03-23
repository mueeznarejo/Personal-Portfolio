import { FadeIn } from "@/components/ui/FadeIn";

export default function Achievements() {
  const stats = [
    { value: "40M+", label: "Balls Played", sub: "in The Final Overs VR" },
    { value: "500+", label: "Nurses Trained", sub: "via Medic VR platform" },
    { value: "5.0", label: "Client Rating", sub: "on Steam & Upwork projects" },
    { value: "90", label: "FPS Maintained", sub: "on mobile VR hardware" }
  ];

  return (
    <section id="achievements" className="py-24 bg-primary/5 border-y border-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, i) => (
            <FadeIn key={i} delay={i * 0.1} direction="up" className="flex flex-col items-center justify-center">
              <div className="text-5xl md:text-7xl font-black font-display text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent mb-4 drop-shadow-[0_0_15px_rgba(0,180,255,0.3)]">
                {stat.value}
              </div>
              <div className="text-xl font-bold text-foreground mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.sub}</div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
