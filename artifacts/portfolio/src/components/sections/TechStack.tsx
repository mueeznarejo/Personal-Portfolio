import { FadeIn } from "@/components/ui/FadeIn";
import { Blocks, Headset, FileCode2, Server } from "lucide-react";

const categories = [
  {
    name: "Unreal Gameplay",
    icon: <Blocks className="text-primary" size={24} />,
    skills: ["Blueprint Architecture", "Gameplay Framework", "Behavior Trees", "Actionable Elements", "UMG UI", "Data Tables"]
  },
  {
    name: "VR / XR Development",
    icon: <Headset className="text-primary" size={24} />,
    skills: ["Meta Quest 2/3", "OpenXR Hand Tracking", "Controller / Dual Input", "Unreal Insights"]
  },
  {
    name: "UE5 C++ & Tooling",
    icon: <FileCode2 className="text-primary" size={24} />,
    skills: ["Editor Plugins", "DataTable Driven", "Editor Panel Extensions", "A/B Tester Integration", "Utility Modules"]
  },
  {
    name: "Back-End & APIs",
    icon: <Server className="text-primary" size={24} />,
    skills: ["Node.js", "HTTP / REST APIs", "Web Portal Integration", "Web Dashboards", "JSON Runtime Config"]
  }
];

export default function TechStack() {
  return (
    <section id="skills" className="relative border-t-2 border-border/60 bg-background pt-16 sm:pt-24 pb-20 sm:pb-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="mb-10 sm:mb-16">
            <span className="text-primary font-mono text-xs sm:text-sm uppercase font-bold tracking-widest block mb-3 sm:mb-4">
              Toolkit / Skills
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight font-display">
              Skills for Unreal Engine, VR/XR, and technical game development.
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {categories.map((cat, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="h-full rounded-xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 dark:border-[hsl(var(--border))] dark:bg-[hsl(var(--card))] dark:shadow-[0_22px_42px_-36px_rgba(0,0,0,0.8)] dark:hover:shadow-[0_26px_48px_-34px_rgba(0,0,0,0.82)]">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 bg-primary/10 rounded-lg">
                    {cat.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground font-display">{cat.name}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(skill => (
                    <span
                      key={skill}
                      className="rounded border border-border bg-muted px-2.5 py-1 font-mono text-[11px] text-muted-foreground sm:text-xs dark:border-[hsl(var(--border))] dark:bg-[hsl(var(--secondary))]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
