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

// Each card sticks 14px lower than the previous so you can see the stack building
const STACK_OFFSET = 14;
const TOP_PADDING = 88;

export default function Projects() {
  return (
    <section id="projects" className="bg-background relative">
      {/* Section header — not sticky, scrolls away */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-20">
        <FadeIn>
          <span className="text-primary font-mono text-sm uppercase font-bold tracking-widest block mb-4">
            Featured Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight font-display">
            Built, shipped, and proven in production.
          </h2>
        </FadeIn>
      </div>

      {/* Sticky stack — height = scroll runway per card */}
      <div style={{ height: `${projects.length * 70}vh` }}>
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

              {/* ── Content ── */}
              <div className="p-8 md:p-12 lg:w-[55%] flex flex-col justify-center gap-6 order-2 lg:order-1">

                {/* Meta row */}
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-md">
                    {project.role}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                    {project.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-black text-card-foreground font-display leading-tight">
                  {project.title}
                </h3>

                {/* Metric pill */}
                <div className="inline-flex items-center w-fit bg-[#161616] border border-[#2a2a2a] rounded-full px-5 py-2 gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-card-foreground font-semibold text-sm tracking-wide">{project.metric}</span>
                </div>

                {/* P/S/O */}
                <div className="space-y-4 text-[0.875rem] leading-relaxed">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground block mb-1.5">Problem</span>
                    <p className="text-card-foreground/85">{project.problem}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground block mb-1.5">Solution</span>
                    <ul className="space-y-1 pl-0">
                      {project.solution.map((item, idx) => (
                        <li key={idx} className="flex gap-2 text-card-foreground/85">
                          <span className="text-primary mt-0.5 flex-shrink-0">›</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground block mb-1.5">Outcome</span>
                    <p className="text-card-foreground font-medium">{project.outcome}</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-5 border-t border-card-border">
                  {project.tags.map(tag => (
                    <span key={tag} className="font-mono text-[11px] text-card-foreground/60 px-3 py-1 bg-[#161616] border border-[#2a2a2a] rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* ── Image ── */}
              <div className="lg:w-[45%] relative bg-[#0f0f0f] overflow-hidden order-1 lg:order-2 border-b lg:border-b-0 lg:border-l border-card-border min-h-[240px] lg:min-h-[460px]">
                <img
                  src={`${import.meta.env.BASE_URL}images/${project.image}`}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-55 group-hover:opacity-80 transition-all duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-[#0f0f0f] via-[#0f0f0f]/40 to-transparent" />

                {/* Counter */}
                <div className="absolute bottom-5 right-5 font-mono text-xs text-card-foreground/30 tabular-nums">
                  {String(i + 1).padStart(2, "0")} <span className="text-card-foreground/15">/</span> {String(projects.length).padStart(2, "0")}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Generous breathing room before next section */}
      <div className="h-48" />
    </section>
  );
}
