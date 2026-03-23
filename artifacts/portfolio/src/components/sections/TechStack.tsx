import { FadeIn } from "@/components/ui/FadeIn";
import { Blocks, Headset, FileCode2, Server } from "lucide-react";

const categories = [
  {
    name: "Core Dev",
    icon: <Blocks className="text-primary" size={32} />,
    skills: ["Blueprint Architecture", "Gameplay Framework", "Behavior Trees", "Actionable Elements", "UMG UI", "Data Tables"]
  },
  {
    name: "XR Delivery",
    icon: <Headset className="text-accent" size={32} />,
    skills: ["Meta Quest 2/3", "OpenXR Hand Tracking", "Controller / Dual Input", "Unreal Insights"]
  },
  {
    name: "C++ & Tooling",
    icon: <FileCode2 className="text-primary" size={32} />,
    skills: ["Editor Plugins", "DataTable Driven", "Editor Panel Extensions", "A/B Tester Integration", "Utility Modules"]
  },
  {
    name: "Back-End & APIs",
    icon: <Server className="text-accent" size={32} />,
    skills: ["Node.js", "HTTP / REST APIs", "Web Portal Integration", "Web Dashboards", "JSON Runtime Config"]
  }
];

export default function TechStack() {
  return (
    <section id="skills" className="py-32 bg-card/50 relative border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-16 tracking-tight">
            Technical breadth with a clear XR center.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {categories.map((cat, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 border-b border-border/50 pb-4">
                  {cat.icon}
                  <h3 className="text-2xl font-bold text-foreground">{cat.name}</h3>
                </div>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                  {cat.skills.map(skill => (
                    <li key={skill} className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
