import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Code2, Cpu, Gamepad2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader 
          title="About Me" 
          subtitle="4+ years of experience shipping production VR games, enterprise training platforms, and PC titles across Meta Quest and Steam." 
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mt-12">
          <FadeIn className="lg:col-span-2 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              As a Lead Developer on 7+ commercial releases—including <strong className="text-primary">The Final Overs</strong> (40M+ player interactions) and <strong className="text-primary">Kynetik</strong>—I specialize in pushing the boundaries of what mobile VR hardware can achieve.
            </p>
            <p>
              My expertise lies in complex Blueprint architecture, deep optimization for Quest standalone headsets (maintaining solid 72-90fps), and building custom C++ editor tooling that empowers design teams. 
            </p>
            <p>
              Whether it's engineering a cross-platform local multiplayer system using an in-engine HTTP server, or building procedural enterprise medical scenarios, I focus on scalable, performant, and maintainable systems.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 gap-4">
            <FadeIn delay={0.1} className="bg-card border border-border p-6 rounded-2xl flex items-start gap-4 hover:border-primary/50 transition-colors">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Gamepad2 size={24} />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">VR/XR Gameplay</h3>
                <p className="text-sm text-muted-foreground">Meta Quest 2/3, OpenXR, Hand Tracking, Physics</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="bg-card border border-border p-6 rounded-2xl flex items-start gap-4 hover:border-accent/50 transition-colors">
              <div className="p-3 rounded-lg bg-accent/10 text-accent">
                <Code2 size={24} />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Architecture</h3>
                <p className="text-sm text-muted-foreground">Advanced Blueprints, C++ Plugins, DataTables</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3} className="bg-card border border-border p-6 rounded-2xl flex items-start gap-4 hover:border-blue-400/50 transition-colors">
              <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                <Cpu size={24} />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Optimization</h3>
                <p className="text-sm text-muted-foreground">Unreal Insights, GPU Profiling, Draw Call Budgeting</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
