import { FadeIn } from "@/components/ui/FadeIn";
import { Blocks, Headset, FileCode2, Server } from "lucide-react";

const categories = [
  {
    name: "Core Dev",
    icon: <Blocks className="text-primary" size={28} />,
    skills: ["Blueprint Architecture", "Gameplay Framework", "Behavior Trees", "Actionable Elements", "UMG UI", "Data Tables"]
  },
  {
    name: "XR Delivery",
    icon: <Headset className="text-primary" size={28} />,
    skills: ["Meta Quest 2/3", "OpenXR Hand Tracking", "Controller / Dual Input", "Unreal Insights"]
  },
  {
    name: "C++ & Tooling",
    icon: <FileCode2 className="text-primary" size={28} />,
    skills: ["Editor Plugins", "DataTable Driven", "Editor Panel Extensions", "A/B Tester Integration", "Utility Modules"]
  },
  {
    name: "Back-End & APIs",
    icon: <Server className="text-primary" size={28} />,
    skills: ["Node.js", "HTTP / REST APIs", "Web Portal Integration", "Web Dashboards", "JSON Runtime Config"]
  }
];

export default function TechStack() {
  return (
    <section id="skills" className="pt-40 pb-32 bg-background relative border-t-2 border-border/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="mb-16">
            <span className="text-primary font-mono text-sm uppercase font-bold tracking-widest block mb-4">
              Toolkit / Skills
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight font-display">
              Technical breadth with a clear XR center.
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-white border border-border p-8 rounded-xl h-full shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    {cat.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground font-display">{cat.name}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(skill => (
                    <span 
                      key={skill} 
                      className="font-mono text-xs px-2.5 py-1 bg-muted border border-border rounded text-muted-foreground"
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
