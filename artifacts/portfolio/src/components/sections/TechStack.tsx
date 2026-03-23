import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Gamepad2, Code, Zap, Glasses, Activity, GitBranch } from "lucide-react";

const categories = [
  {
    name: "UE5 Core",
    icon: <Gamepad2 size={24} />,
    skills: ["Blueprint Visual Scripting", "Gameplay Framework", "Behavior Trees", "Data Tables", "Animation Blueprints"]
  },
  {
    name: "C++ & Tooling",
    icon: <Code size={24} />,
    skills: ["Custom Editor Plugins", "Utility Functions", "DataTable-driven Properties", "Core System Extension"]
  },
  {
    name: "VFX & Physics",
    icon: <Zap size={24} />,
    skills: ["Niagara Particle Systems", "Chaos Physics", "Destruction", "Collision Logic"]
  },
  {
    name: "VR / XR",
    icon: <Glasses size={24} />,
    skills: ["Meta Quest 2/3", "Meta XR SDK", "OpenXR Hand Tracking", "PC VR Integration"]
  },
  {
    name: "Performance",
    icon: <Activity size={24} />,
    skills: ["Unreal Insights", "GPU Profiler", "Draw Call Budgeting", "LOD Authoring", "RenderDoc"]
  },
  {
    name: "Pipeline & Tools",
    icon: <GitBranch size={24} />,
    skills: ["Git", "Perforce", "Plastic SCM", "Trello", "Agile Leadership"]
  }
];

export default function TechStack() {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader title="Technical Arsenal" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {categories.map((cat, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-card border border-border p-8 rounded-2xl h-full shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 text-primary rounded-xl border border-primary/20">
                    {cat.icon}
                  </div>
                  <h3 className="text-xl font-bold font-display text-foreground">{cat.name}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map(skill => (
                    <span 
                      key={skill} 
                      className="px-3 py-1.5 bg-background border border-border text-muted-foreground text-sm font-medium rounded-lg hover:border-primary/50 hover:text-foreground transition-colors cursor-default"
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
