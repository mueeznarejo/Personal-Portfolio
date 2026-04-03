import { FadeIn } from "@/components/ui/FadeIn";
import { Code2, Cpu, Gamepad2 } from "lucide-react";

const capabilities = [
  {
    title: "VR/XR Gameplay",
    description: "Meta Quest 2/3, OpenXR, hand tracking, interaction design, and physics-driven systems.",
    icon: <Gamepad2 size={22} />,
    accent: "text-primary bg-primary/10 border-primary/20",
  },
  {
    title: "Architecture",
    description: "Advanced Blueprints, modular UE5 systems, C++ plugins, and DataTable-driven pipelines.",
    icon: <Code2 size={22} />,
    accent: "text-accent bg-accent/10 border-accent/20",
  },
  {
    title: "Optimization",
    description: "Quest standalone profiling, Unreal Insights, GPU analysis, and draw-call budgeting.",
    icon: <Cpu size={22} />,
    accent: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  },
];

const proof = [
  { value: "7+", label: "commercial releases" },
  { value: "40M+", label: "player interactions" },
  { value: "72-90", label: "Quest FPS range" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 overflow-hidden bg-[linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--background))_72%,rgba(16,185,129,0.035)_100%)] py-24 dark:[background-image:none] dark:bg-background"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] gap-8 xl:gap-12 items-start">
          <FadeIn className="relative overflow-hidden rounded-[2rem] border border-border bg-white/70 p-8 shadow-[0_25px_70px_-45px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-10 lg:p-12 dark:border-[hsl(var(--border))] dark:bg-[hsl(var(--card))] dark:shadow-[0_34px_90px_-58px_rgba(0,0,0,0.82)]">
            <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.12),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.05),transparent_45%)] dark:hidden" />
            <div className="relative">
              <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] text-primary font-bold">
                About Me
              </span>
              <div className="mt-4">
                <p className="max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground">
                  Mueez Aslam is an Unreal Engine developer and VR/XR game developer with 4+ years of experience shipping production Meta Quest, SteamVR, and enterprise training products.
                </p>
              </div>

              <div className="mt-8 h-px bg-gradient-to-r from-primary/45 via-border to-transparent" />

              <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  As Mueez Aslam, I have led and shipped 7+ commercial Unreal Engine releases, including{" "}
                  <strong className="text-foreground">The Final Overs</strong>{" "}
                  <span className="text-primary">(40M+ player interactions)</span> and{" "}
                  <strong className="text-foreground">Kynetik</strong>, with a focus on what modern VR hardware can achieve in real production environments.
                </p>
                <p>
                  My expertise spans Unreal Engine 5 gameplay programming, Blueprint architecture, Quest standalone optimization, and custom C++ editor tooling that helps teams ship faster without sacrificing maintainability.
                </p>
                <p>
                  Whether the project needs a VR developer, XR developer, gameplay engineer, technical game developer, or Unreal Engine specialist, I focus on scalable systems that stay performant on device and reliable in production.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {proof.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-border bg-background/90 px-4 py-4 dark:border-[hsl(var(--border))] dark:bg-[hsl(var(--secondary))]"
                  >
                    <div className="text-2xl sm:text-3xl font-black text-foreground font-display">
                      {item.value}
                    </div>
                    <div className="mt-1 text-xs sm:text-sm uppercase tracking-[0.14em] text-muted-foreground font-mono">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <div className="space-y-4 lg:pt-6">
            <FadeIn delay={0.08} className="px-1">
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground font-bold">
                Core Strengths
              </span>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md">
                The areas I usually own end-to-end when a UE5, VR, or XR project needs stronger technical direction.
              </p>
            </FadeIn>

            {capabilities.map((item, index) => (
              <FadeIn
                key={item.title}
                delay={0.14 + index * 0.08}
                className="group rounded-[1.75rem] border border-border bg-white/90 p-6 shadow-[0_16px_34px_-28px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_20px_40px_-30px_rgba(15,23,42,0.16)] sm:p-7 dark:border-[hsl(var(--border))] dark:bg-[hsl(var(--card))] dark:shadow-[0_22px_48px_-38px_rgba(0,0,0,0.8)] dark:hover:border-primary/30 dark:hover:bg-[hsl(var(--secondary))]"
              >
                <div className="flex items-start gap-4">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${item.accent}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
