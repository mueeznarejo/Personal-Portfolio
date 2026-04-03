import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Project = {
  title: string;
  role: string;
  date: string;
  metric: string;
  image: string;
  video?: string;
  problem: string;
  solution: string[];
  outcome: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: "Kynetik",
    role: "Lead Developer",
    date: "Feb 2026 / Quest",
    metric: "72-90 FPS ON QUEST",
    image: "kynetik.png",
    video: "kynetik.mp4",
    problem: "Scalable hand-tracking on Quest hardware without sacrificing performance",
    solution: [
      "Built custom pose-detection on raw Meta SDK data",
      "Enemy combat system with AI-powered locomotion and ragdolls",
      "Draw-call budgeting and Niagara baking pipeline",
    ],
    outcome: "Shipped on Quest with quality, performance, and sole technical ownership. Awarded royalty on net revenue.",
    tags: ["Pose detection", "Enemy AI", "Niagara optimisation"],
  },
  {
    title: "The Final Overs",
    role: "Core Developer",
    date: "2023 / Quest",
    metric: "40M+ balls played",
    image: "tfo.png",
    video: "tfo.mp4",
    problem: "Enabling natural wave gameplay and cross-platform multiplayer on mobile VR",
    solution: [
      "Architected an in-engine HTTP server for cross-platform local multiplayer",
      "Built a real-time browser dashboard for live match data and bowler controls",
    ],
    outcome: "40M+ balls played, 200K+ matches — top-rated VR cricket title on Quest",
    tags: ["DataTable", "Animation Blueprints", "Local Multiplayer"],
  },
  {
    title: "GraspXR",
    role: "Solo Lead / Technical Architect",
    date: "2023–24 / Quest & PC",
    metric: "Enterprise SDK",
    image: "graspxr.png",
    video: "graspxr.mp4",
    problem: "Enterprise training platform needed to scale to 2000+ users without per-scenario code changes",
    solution: [
      "Refactored Blueprints into a modular plugin-based SDK architecture",
      "DLC system for downloadable scenarios to reduce install size",
      "Web portal integration for live performance monitoring",
    ],
    outcome: "Non-technical staff could add scenarios via data alone — no code required",
    tags: ["Modular UE5 SDK", "DLC system", "Web portal"],
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
      "C++ editor plugin replacing brittle enum IDs with DataTable dropdowns",
    ],
    outcome: "Live across multiple hospitals — 500+ nurses trained across 15+ procedural scenarios",
    tags: ["Multi-tenant", "C++ Plugin", "Runtime branding"],
  },
  {
    title: "The Valley Beyond",
    role: "Freelance Developer",
    date: "2025 / Steam VR",
    metric: "5.0 / 5.0 rating",
    image: "valleybeyond.jpg",
    video: "valleybeyond.mp4",
    problem: "Fragile legacy codebase for a live Steam VR game with no scalable architecture",
    solution: [
      "Full refactor into a component-based architecture from scratch",
      "Implemented 8 distinct puzzle types and a complete save system",
    ],
    outcome: "5.0/5.0 rating — client cited it as \"one of the best coding experiences\" in 15 years of game dev",
    tags: ["Component architecture", "Puzzle systems", "Save pipeline"],
  },
];

function ProjectMedia({
  project,
  index,
  total,
  onOpenTrailer,
}: {
  project: Project;
  index: number;
  total: number;
  onOpenTrailer: (project: Project) => void;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePointerEnter = () => {
    if (!project.video || !videoRef.current) return;
    videoRef.current.currentTime = 0;
    void videoRef.current.play().catch(() => {});
  };

  const handlePointerLeave = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <div
      className="relative h-56 overflow-hidden border-t border-border bg-[#101418] sm:h-72 lg:h-auto lg:min-h-[30rem] lg:w-[48%] lg:border-l lg:border-t-0 dark:bg-[hsl(var(--sidebar))]"
      onMouseEnter={handlePointerEnter}
      onMouseLeave={handlePointerLeave}
    >
      <img
        src={`${import.meta.env.BASE_URL}images/${project.image}`}
        alt={project.title}
        className={`absolute inset-0 h-full w-full object-cover opacity-68 transition-all duration-700 group-hover:scale-[1.02] ${
          project.video ? "group-hover:opacity-80 group-hover:lg:opacity-0" : "group-hover:opacity-78"
        }`}
      />

      {project.video ? (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="metadata"
          poster={`${import.meta.env.BASE_URL}images/${project.image}`}
          className="absolute inset-0 hidden h-full w-full object-cover opacity-0 transition-all duration-500 group-hover:lg:opacity-100 lg:block"
        >
          <source src={`${import.meta.env.BASE_URL}videos/${project.video}`} type="video/mp4" />
        </video>
      ) : null}

      <div className="absolute inset-0 bg-gradient-to-t from-[#101418]/70 via-[#101418]/12 to-transparent lg:bg-gradient-to-l lg:from-[#101418]/72 lg:via-[#101418]/18 lg:to-transparent" />

      {project.video ? (
        <>
          <button
            type="button"
            onClick={() => onOpenTrailer(project)}
            className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-3 py-2 text-xs font-semibold text-white backdrop-blur-sm transition hover:bg-black/60 sm:bottom-5 sm:left-5 lg:hidden"
          >
            <Play size={14} className="fill-current" />
            Watch Trailer
          </button>
          <div className="absolute left-5 top-5 hidden rounded-full border border-white/10 bg-black/35 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/70 backdrop-blur-sm lg:block">
            Hover for trailer
          </div>
        </>
      ) : (
        <div className="absolute inset-0 hidden items-center justify-center lg:flex">
          <div className="rounded-full border border-white/10 bg-black/45 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/55 opacity-0 backdrop-blur-sm transition duration-300 group-hover:opacity-100">
            No Media
          </div>
        </div>
      )}

      <div className="absolute bottom-4 right-4 font-mono text-[10px] text-white/45 sm:bottom-5 sm:right-5 sm:text-xs">
        {String(index + 1).padStart(2, "0")} <span className="text-white/20">/</span> {String(total).padStart(2, "0")}
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeTrailer, setActiveTrailer] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="relative border-t-2 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 sm:pt-28 pb-10 sm:pb-14">
          <FadeIn>
            <span className="text-primary font-mono text-xs sm:text-sm uppercase font-bold tracking-widest block mb-3 sm:mb-4">
              Featured Projects
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight font-display">
              Unreal Engine work built for VR, XR, and games.
            </h2>
          </FadeIn>
        </div>

        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-4 pb-12 sm:px-6 sm:pb-16 md:px-12 lg:gap-10">
          {projects.map((project, i) => (
            <FadeIn
              key={project.title}
              delay={i * 0.06}
              className="group overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-[0_14px_30px_-28px_rgba(15,23,42,0.12)] dark:border-[hsl(var(--border))] dark:bg-[hsl(var(--card))] dark:shadow-[0_24px_48px_-36px_rgba(0,0,0,0.78)]"
            >
              <div className="flex flex-col lg:min-h-[30rem] lg:flex-row">
                <div className="flex flex-col gap-5 p-6 sm:p-8 lg:w-[52%] lg:justify-center lg:p-10 xl:p-12">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-primary/15 bg-primary/10 px-2.5 py-1 font-mono text-xs font-bold text-primary">
                      {project.role}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      {project.date}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-black leading-tight text-foreground sm:text-2xl lg:text-3xl xl:text-4xl">
                    {project.title}
                  </h3>

                  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 lg:px-5 lg:py-2 dark:border-[hsl(var(--border))] dark:bg-[hsl(var(--secondary))]">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-sm font-semibold text-foreground">{project.metric}</span>
                  </div>

                  <div className="space-y-3 text-sm lg:space-y-3.5">
                    <div>
                      <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">Problem</span>
                      <p className="leading-relaxed text-foreground/80 dark:text-foreground/78">{project.problem}</p>
                    </div>
                    <div>
                      <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">Solution</span>
                      <ul className="space-y-1">
                        {project.solution.map((item, idx) => (
                          <li key={idx} className="flex gap-2 text-foreground/80 dark:text-foreground/78">
                            <span className="flex-shrink-0 text-primary">›</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">Outcome</span>
                      <p className="font-medium leading-relaxed text-foreground">{project.outcome}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 border-t border-border pt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border bg-muted/70 px-2.5 py-1 font-mono text-[11px] text-muted-foreground lg:px-3 dark:border-[hsl(var(--border))] dark:bg-[hsl(var(--secondary))]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <ProjectMedia
                  project={project}
                  index={i}
                  total={projects.length}
                  onOpenTrailer={setActiveTrailer}
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <Dialog open={!!activeTrailer} onOpenChange={(open) => !open && setActiveTrailer(null)}>
        <DialogContent className="max-w-5xl border-border bg-background p-3 sm:p-4">
          {activeTrailer ? (
            <div className="space-y-4">
              <DialogHeader className="px-3 pt-8 sm:px-4 sm:pt-6">
                <DialogTitle className="font-display text-2xl text-foreground">
                  {activeTrailer.title} Trailer
                </DialogTitle>
                <DialogDescription>
                  A quick preview of the project in motion.
                </DialogDescription>
              </DialogHeader>

              <div className="overflow-hidden rounded-2xl border border-border bg-black">
                <video
                  key={activeTrailer.video}
                  autoPlay
                  controls
                  playsInline
                  className="aspect-video w-full"
                  poster={`${import.meta.env.BASE_URL}images/${activeTrailer.image}`}
                >
                  {activeTrailer.video ? (
                    <source src={`${import.meta.env.BASE_URL}videos/${activeTrailer.video}`} type="video/mp4" />
                  ) : null}
                </video>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
