import { FadeIn } from "@/components/ui/FadeIn";

const projects = [
  {
    title: "Kynetik",
    role: "Lead",
    date: "June 2025 / Quest",
    metric: "72-90 FPS ON QUEST",
    image: "kynetik.png",
    problem: "Scalable fielding, hand-tracking on player hardware exceeds performance",
    solution: [
      "Built custom pose-detection",
      "Enemy combat system and AI-powered legs",
      "Ragdolls and low level optimisation"
    ],
    outcome: "Shipped on Quest with quality, performance, and technical sole ownership",
    tags: ["Pose detection", "Enemy AI", "Niagara optimisation"]
  },
  {
    title: "The Final Overs",
    role: "Core Dev",
    date: "June 2023 / Quest",
    metric: "40M+ balls played",
    image: "tfo.png",
    problem: "Retaining and enabling a natural wave gameplay flow on mobile VR",
    solution: [
      "Built a plugin-style integration layer",
      "Triggered a UE5/HTTP-driven phone dashboard for bowling"
    ],
    outcome: "Achieved as a time-trial, reached 40M+ balls played and 200K+ matches",
    tags: ["DataTable", "Animation Blueprints", "Local Multiplayer"]
  },
  {
    title: "GraspXR",
    role: "Solo Lead",
    date: "2023 / Quest & PC",
    metric: "GraspXR",
    image: "graspxr.png",
    problem: "Add feature-free legacy project support for 2000+ technical users",
    solution: [
      "Refactored Blueprints into custom components",
      "Data-added purely physics with full persistence"
    ],
    outcome: "Closed with a 5.0/5.0 rating and unusually strong client feedback",
    tags: ["Modular UE5 training system"]
  },
  {
    title: "Medic VR",
    role: "Lead Dev",
    date: "2023 / Quest",
    metric: "500+ nurses",
    image: "medicvr.png",
    problem: "Hospital-ready VR training with safe onboarding workflows",
    solution: [
      "Built runtime multi-tenant configuration",
      "Created a C++ editor plugin for DataTable driven task selection"
    ],
    outcome: "Supported 200+ nurses across multi-hospital deployments and 15+ procedural scenarios",
    tags: ["Multi-tenant", "C++ Plugin", "Runtime branding"]
  },
  {
    title: "The Valley Beyond",
    role: "Freelance",
    date: "2025 / Steam VR",
    metric: "5.0/5.0",
    image: "valleybeyond.png",
    problem: "Refactor legacy project for a live Steam VR game",
    solution: [
      "Refactored a legacy project into a scalable component-based architecture",
      "Implemented puzzle logic and persistence systems in production environment"
    ],
    outcome: "Delivered maintainable systems. Maintained a 5.0/5.0 client rating.",
    tags: ["Component architecture", "Puzzle systems", "Save pipeline"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-background relative border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-16 tracking-tight">
            Sticky proof of shipped XR work.
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-12">
          {projects.map((project, i) => (
            <FadeIn key={i} delay={0.1}>
              <div className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-colors flex flex-col md:flex-row">
                
                {/* Content Side */}
                <div className="p-8 md:p-12 flex-1 flex flex-col justify-center">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-semibold text-primary uppercase tracking-wider">
                      {project.role} &bull; {project.date}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {project.title}
                  </h3>
                  
                  <div className="inline-block bg-muted text-foreground font-mono text-sm px-3 py-1 mb-8 border border-border/50">
                    &rarr; {project.metric}
                  </div>

                  <div className="space-y-6 text-sm md:text-base">
                    <div>
                      <span className="text-muted-foreground font-semibold uppercase tracking-wider text-xs block mb-1">Problem</span>
                      <p className="text-foreground">{project.problem}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground font-semibold uppercase tracking-wider text-xs block mb-1">Solution</span>
                      <ul className="list-disc pl-4 text-foreground space-y-1">
                        {project.solution.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="text-muted-foreground font-semibold uppercase tracking-wider text-xs block mb-1">Outcome</span>
                      <p className="text-foreground font-medium text-primary/90">{project.outcome}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-border/50">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-muted-foreground text-xs font-medium px-2 py-1 bg-background border border-border rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image Side */}
                <div className="md:w-2/5 relative border-t md:border-t-0 md:border-l border-border bg-muted overflow-hidden">
                  <img 
                    src={`${import.meta.env.BASE_URL}images/${project.image}`} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-background/20 to-transparent pointer-events-none" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
