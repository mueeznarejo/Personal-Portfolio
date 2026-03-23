import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Lead VR Developer & Team Lead",
    company: "Mixeal",
    location: "Hyderabad, PK",
    date: "May 2023 – Present",
    points: [
      "Owned the full lifecycle of Kynetik (Meta Quest, Feb 2026), including Blueprint architecture, Niagara VFX, Chaos Physics, and GPU optimization.",
      "Awarded royalty on net revenue for Kynetik by the CEO for sole-developer ownership.",
      "Maintained 72–90fps across all 7 Quest titles via Unreal Insights profiling, draw call budgeting, LOD authoring, and texture streaming optimization.",
      "Led a team of 5 developers across 4 concurrent VR projects and introduced a shared component library to reduce rework.",
      "Engineered a C++ editor plugin for Medic VR featuring a DataTable-driven Blueprint dropdown system."
    ]
  },
  {
    role: "Freelance UE5 Developer",
    company: "Upwork (Remote)",
    location: "Remote",
    date: "Feb – Dec 2025",
    points: [
      "Delivered Blueprint gameplay systems and puzzle logic for The Valley Beyond (PC/Steam).",
      "Maintained a 5.0/5.0 rating, cited by the client as providing 'one of the best coding experiences' in 15 years of game creation.",
      "Refactored legacy codebase into component-based architecture."
    ]
  },
  {
    role: "Unreal Engine / VR Developer",
    company: "Mixeal",
    location: "Hyderabad, PK",
    date: "Jan 2022 – May 2023",
    points: [
      "Built VR gameplay systems, physics interactions, and training simulations using UE5, Meta XR SDK, Animation Blueprints, and OpenXR across 3 shipped titles.",
      "Resolved critical rendering bottlenecks and reduced frame drops/crashes on Quest 2 standalone via targeted profiling."
    ]
  },
  {
    role: "Unreal Engine Instructor",
    company: "Mixeal",
    location: "Hyderabad, PK",
    date: "Mar 2023 – Feb 2024",
    points: [
      "Trained five junior developers in UE5 and VR development from scratch due to lack of local talent."
    ]
  },
  {
    role: "Web Development Teacher",
    company: "GETS (Non-Profit)",
    location: "Hyderabad, PK",
    date: "Jan 2019 – Present",
    points: [
      "Founding volunteer teacher who established the web development curriculum from scratch."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-card/30 border-y border-border/50">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <SectionHeader title="Experience" />

        <div className="relative pl-8 md:pl-12 border-l-2 border-primary/20 space-y-16 mt-16">
          {experiences.map((exp, i) => (
            <FadeIn key={i} delay={i * 0.1} className="relative">
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 h-6 w-6 rounded-full bg-background border-4 border-primary shadow-[0_0_15px_rgba(0,180,255,0.6)] z-10 flex items-center justify-center">
                {i === 0 && <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />}
              </div>
              
              <div className="bg-card border border-border p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-primary/5 hover:border-primary/30 transition-all">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 border-b border-border/50 pb-6">
                  <div>
                    <h3 className="text-2xl font-bold font-display text-foreground mb-2 flex items-center gap-2">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <Briefcase size={16} />
                      {exp.company}
                    </div>
                  </div>
                  <div className="bg-muted px-4 py-1.5 rounded-full text-sm font-medium text-muted-foreground whitespace-nowrap self-start">
                    {exp.date}
                  </div>
                </div>
                
                <ul className="space-y-3 text-muted-foreground">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="text-primary mt-1.5 text-lg leading-none">•</span>
                      <span className="leading-relaxed">{pt}</span>
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
