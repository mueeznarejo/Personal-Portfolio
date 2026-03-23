import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Kynetik",
    platform: "Meta Quest 2/3, Feb 2026",
    role: "Sole Lead Developer",
    image: "kynetik.png",
    description: "Hand tracking-based combat system using custom pose recognition built on raw Meta data. Features multi-level progression, complex AI, and a 72-90fps optimization pipeline.",
    tags: ["UE5", "Hand Tracking", "Niagara", "Chaos Physics", "Optimization"]
  },
  {
    title: "The Final Overs",
    platform: "Meta Quest 2/3, 2023",
    role: "Core Developer",
    image: "tfo.png",
    description: "Top-rated VR cricket game with 40M+ balls played. Architected cross-platform local multiplayer using an HTTP server running inside UE5 via a C++ plugin.",
    tags: ["UE5", "Multiplayer", "C++ Plugin", "Anim Blueprints"]
  },
  {
    title: "GraspXR Enterprise",
    platform: "Quest & PC VR, 2023-24",
    role: "Technical Architect",
    image: "graspxr.png",
    description: "Scalable simulation framework for medical & industrial scenarios. Features DLC architecture for dynamic scenario downloads and modular plugin design.",
    tags: ["UE5", "Enterprise VR", "DLC System", "Web Integration"]
  },
  {
    title: "Medic VR",
    platform: "Meta Quest, 2023",
    role: "Lead Developer",
    image: "medicvr.png",
    description: "15+ procedural medical scenarios used to train 500+ nurses. Multi-tenant system for custom branding via JSON and a C++ Editor Plugin for scenario creation.",
    tags: ["UE5", "C++ Tooling", "Procedural", "Multi-Tenant"]
  },
  {
    title: "KnorrVerse",
    platform: "Branded VR",
    role: "Sole Gameplay Developer",
    image: "knorrverse.png",
    description: "Branded VR experience where players gain powers based on noodle flavors. Built the entire combat and flavor-based power system.",
    tags: ["UE5", "Gameplay Systems", "VFX", "Combat Design"]
  },
  {
    title: "The Valley Beyond",
    platform: "PC/Steam",
    role: "Freelance Developer",
    image: "valleybeyond.png",
    description: "Refactored legacy codebase into component-based architecture. Implemented 8 distinct puzzle types and a full comprehensive save system.",
    tags: ["UE5", "PC", "Architecture", "Puzzle Logic"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader 
          title="Featured Projects" 
          subtitle="A selection of my best work across standalone VR, PC, and enterprise simulations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group h-full bg-card border border-border rounded-2xl overflow-hidden hover:shadow-[0_10px_30px_rgba(0,180,255,0.1)] hover:border-primary/50 transition-all duration-300 flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={`${import.meta.env.BASE_URL}images/${project.image}`} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-background/90 backdrop-blur-sm text-foreground text-xs font-bold px-3 py-1.5 rounded-full border border-border/50 shadow-lg">
                      {project.platform}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-primary text-sm font-bold mb-2 uppercase tracking-wider">{project.role}</div>
                  <h3 className="text-2xl font-bold font-display text-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="bg-muted text-muted-foreground text-xs font-medium px-2.5 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
