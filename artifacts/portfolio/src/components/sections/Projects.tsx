import { FadeIn } from "@/components/ui/FadeIn";

const projects = [
  {
    title: "Kynetik",
    role: "Lead Developer",
    date: "Feb 2026 / Quest",
    metric: "72-90 FPS ON QUEST",
    image: "kynetik.png",
    problem: "Scalable hand-tracking on Quest hardware without sacrificing performance",
    solution: [
      "Built custom pose-detection on raw Meta SDK data",
      "Enemy combat system with AI-powered locomotion and ragdolls",
      "Draw-call budgeting and Niagara baking pipeline"
    ],
    outcome: "Shipped on Quest with quality, performance, and sole technical ownership. Awarded royalty on net revenue.",
    tags: ["Pose detection", "Enemy AI", "Niagara optimisation"]
  },
  {
    title: "The Final Overs",
    role: "Core Developer",
    date: "2023 / Quest",
    metric: "40M+ balls played",
    image: "tfo.png",
    problem: "Enabling natural wave gameplay and cross-platform multiplayer on mobile VR",
    solution: [
      "Architected an in-engine HTTP server for cross-platform local multiplayer",
      "Built a real-time browser dashboard for live match data and bowler controls"
    ],
    outcome: "40M+ balls played, 200K+ matches — top-rated VR cricket title on Quest",
    tags: ["DataTable", "Animation Blueprints", "Local Multiplayer"]
  },
  {
    title: "GraspXR",
    role: "Solo Lead / Technical Architect",
    date: "2023–24 / Quest & PC",
    metric: "Enterprise SDK",
    image: "graspxr.png",
    problem: "Enterprise training platform needed to scale to 2000+ users without code changes per scenario",
    solution: [
      "Refactored Blueprints into a modular plugin-based SDK architecture",
      "DLC system for downloadable scenarios to reduce install size",
      "Web portal integration for live performance monitoring"
    ],
    outcome: "Non-technical staff could add scenarios via data alone — no code required",
    tags: ["Modular UE5 SDK", "DLC system", "Web portal"]
  },
  {
    title: "Medic VR",
    role: "Lead Developer",
    date: "2023 / Quest",
    metric: "500+ nurses trained",
    image: "medicvr.png",
    problem: "Hospital-ready VR training deployable across multiple clients with different branding",
    solution: [
      "Multi-tenant system using JSON payloads for runtime rebranding per hospital",
      "C++ editor plugin replacing brittle enum IDs with DataTable dropdowns"
    ],
    outcome: "Live across multiple hospitals — 500+ nurses trained across 15+ procedural scenarios",
    tags: ["Multi-tenant", "C++ Plugin", "Runtime branding"]
  },
  {
    title: "The Valley Beyond",
    role: "Freelance Developer",
    date: "2025 / Steam VR",
    metric: "5.0 / 5.0 rating",
    image: "valleybeyond.png",
    problem: "Fragile legacy codebase for a live Steam VR game with no scalable architecture",
    solution: [
      "Full refactor into a component-based architecture from scratch",
      "Implemented 8 distinct puzzle types and a complete save system"
    ],
    outcome: "5.0/5.0 rating — client cited it as \"one of the best coding experiences\" in 15 years of game dev",
    tags: ["Component architecture", "Puzzle systems", "Save pipeline"]
  }
];

const STACK_OFFSET = 10; // px each card peeks above the previous
const TOP_PADDING = 80;  // initial top offset in px

export default function Projects() {
  return (
    <section id="projects" className="bg-background relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-0">
        <FadeIn>
          <div className="mb-16">
            <span className="text-primary font-mono text-sm uppercase font-bold tracking-widest block mb-3">
              Featured Projects
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight font-display">
              Built, shipped, and proven in production.
            </h2>
          </div>
        </FadeIn>
      </div>

      {/* Sticky stack container — section height drives scroll distance */}
      <div style={{ height: `${projects.length * 55}vh` }}>
        {projects.map((project, i) => (
          <div
            key={i}
            style={{
              position: "sticky",
              top: `${TOP_PADDING + i * STACK_OFFSET}px`,
              zIndex: i + 1,
            }}
            className="px-6 md:px-12 max-w-7xl mx-auto"
          >
            <div className="group bg-card border border-card-border rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
              {/* Content Side */}
              <div className="p-7 md:p-10 lg:w-1/2 flex flex-col justify-center order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-3 py-1 rounded">
                    {project.role}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    {project.date}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-card-foreground mb-4 font-display">
                  {project.title}
                </h3>

                <div className="inline-flex items-center w-fit bg-[#1A1A1A] border border-[#333] rounded-full px-4 py-1.5 mb-6">
                  <span className="text-primary font-bold mr-2">&rarr;</span>
                  <span className="text-card-foreground font-medium text-sm">{project.metric}</span>
                </div>

                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-muted-foreground font-mono uppercase tracking-wider text-xs block mb-1">Problem</span>
                    <p className="text-card-foreground/90 leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground font-mono uppercase tracking-wider text-xs block mb-1">Solution</span>
                    <ul className="list-disc pl-4 text-card-foreground/90 space-y-1 marker:text-[#444]">
                      {project.solution.map((item, idx) => (
                        <li key={idx} className="leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="text-muted-foreground font-mono uppercase tracking-wider text-xs block mb-1">Outcome</span>
                    <p className="text-card-foreground font-medium">{project.outcome}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-card-border">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-card-foreground/70 font-mono text-xs font-medium px-2.5 py-1 bg-[#1A1A1A] border border-[#333] rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image Side */}
              <div className="lg:w-1/2 relative bg-[#151515] overflow-hidden order-1 lg:order-2 border-b lg:border-b-0 lg:border-l border-card-border min-h-[220px] lg:min-h-[400px]">
                <img
                  src={`${import.meta.env.BASE_URL}images/${project.image}`}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-card to-transparent opacity-80" />

                {/* Project number badge */}
                <div className="absolute top-4 right-4 font-mono text-xs text-card-foreground/40 bg-card/60 backdrop-blur-sm px-2.5 py-1 rounded border border-card-border">
                  {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom padding after the stack */}
      <div className="h-24" />
    </section>
  );
}
