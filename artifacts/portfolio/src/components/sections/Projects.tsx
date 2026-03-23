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
    metric: "5.0/5.0 client rating",
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
    <section id="projects" className="py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="mb-16">
            <span className="text-primary font-mono text-sm uppercase font-bold tracking-widest block mb-4">
              Featured Projects
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight font-display">
              Sticky proof of shipped XR work.
            </h2>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-16">
          {projects.map((project, i) => (
            <FadeIn key={i} delay={0.1}>
              <div className="group bg-card border border-card-border rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row h-full">
                
                {/* Content Side */}
                <div className="p-8 md:p-12 lg:w-1/2 flex flex-col justify-center order-2 lg:order-1">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-3 py-1 rounded">
                      {project.role}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                      {project.date}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-card-foreground mb-6 font-display">
                    {project.title}
                  </h3>
                  
                  <div className="inline-flex items-center w-fit bg-[#1A1A1A] border border-[#333] rounded-full px-4 py-1.5 mb-8">
                    <span className="text-primary font-bold mr-2">&rarr;</span>
                    <span className="text-card-foreground font-medium text-sm">{project.metric}</span>
                  </div>

                  <div className="space-y-6 text-sm">
                    <div>
                      <span className="text-muted-foreground font-mono uppercase tracking-wider text-xs block mb-1.5">Problem</span>
                      <p className="text-card-foreground/90 leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground font-mono uppercase tracking-wider text-xs block mb-1.5">Solution</span>
                      <ul className="list-disc pl-4 text-card-foreground/90 space-y-1.5 marker:text-[#333]">
                        {project.solution.map((item, idx) => (
                          <li key={idx} className="leading-relaxed">{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="text-muted-foreground font-mono uppercase tracking-wider text-xs block mb-1.5">Outcome</span>
                      <p className="text-card-foreground font-medium">{project.outcome}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-card-border">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-card-foreground/70 font-mono text-xs font-medium px-2.5 py-1 bg-[#1A1A1A] border border-[#333] rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image Side */}
                <div className="lg:w-1/2 relative bg-[#151515] overflow-hidden order-1 lg:order-2 border-b lg:border-b-0 lg:border-l border-card-border min-h-[300px] lg:min-h-full">
                  <img 
                    src={`${import.meta.env.BASE_URL}images/${project.image}`} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-card to-transparent opacity-80" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
