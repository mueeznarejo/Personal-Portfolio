import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Server, Activity, Wrench, Network } from "lucide-react";

const solutions = [
  {
    title: "In-Engine HTTP Server",
    icon: <Server size={32} />,
    description: "Enabled cross-platform local multiplayer by serving a dynamically mounted web app directly from within Unreal Engine 5 via a custom C++ plugin."
  },
  {
    title: "Custom Pose Detection",
    icon: <Activity size={32} />,
    description: "Built a highly flexible combat system analyzing raw hand tracking data, bypassing standard API limitations to recognize unique gestures like shield blocks and charge attacks."
  },
  {
    title: "C++ Editor Tooling",
    icon: <Wrench size={32} />,
    description: "Created plugins extending the UE5 details panel, allowing designers to rapidly select scenario tasks via dynamic DataTable-driven dropdowns."
  },
  {
    title: "Multi-Tenant VR System",
    icon: <Network size={32} />,
    description: "Designed a robust architecture using JSON payloads to rebrand, re-texture, and reconfigure entire VR applications at runtime for enterprise hospital clients."
  }
];

export default function TechSolutions() {
  return (
    <section className="py-24 bg-card border-y border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeader 
          title="Unique Technical Solutions" 
          subtitle="Solving complex gameplay and architectural challenges with custom engineering."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {solutions.map((solution, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-background border border-border p-8 rounded-2xl hover:border-primary/40 group transition-all relative overflow-hidden h-full">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
                
                <div className="text-primary mb-6 p-4 bg-primary/10 w-fit rounded-xl border border-primary/20 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{solution.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
