import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { useVisibility } from "@/hooks/useVisibility";
import { isAudienceVisible, type AudienceVisibility } from "@/lib/visibility";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Project = {
  audience?: AudienceVisibility;
  title: string;
  role: string;
  date: string;
  metric: string;
  image: string;
  video?: string;
  storeUrl?: string;
  storeLabel?: string;
  description: string;
  contributions: string[];
  outcome: string;
  alt: string;
};

const projects: Project[] = [
  {
    title: "Kynetik",
    role: "Lead Developer",
    date: "Feb 2026 / Quest",
    metric: "72-90 FPS ON QUEST",
    image: "kynetik.png",
    video: "kynetik.mp4",
    storeUrl: "https://www.meta.com/en-gb/experiences/kynetik/32269544462694283/",
    storeLabel: "View on Meta Store",
    description:
      "Hand-tracking combat game for Meta Quest with custom pose detection, enemy AI, and boss fight mechanics built entirely from scratch.",
    contributions: [
      "Built the full combat system on raw Meta SDK hand tracking data with custom poses for shield, charge, and fire.",
      "Designed three enemy AI types plus a multi-attack boss fight.",
      "Built the performance pipeline with precaching, baked Niagara VFX, and draw-call budgeting.",
      "Owned sprint planning, scope management, and day-to-day delivery.",
    ],
    outcome: "Shipped on Meta Quest Store. 72-90fps maintained. Awarded royalty on net revenue.",
    alt: "Kynetik — hand tracking combat game for Meta Quest",
  },
  {
    title: "The Final Overs",
    role: "Core Developer",
    date: "2023 / Quest",
    metric: "40M+ balls played",
    image: "tfo.png",
    video: "tfo.mp4",
    storeUrl: "https://www.meta.com/experiences/final-overs-vr-cricket/3753844808017398/",
    storeLabel: "View on Meta Store",
    description:
      "Top-rated VR cricket game on Meta Quest with cross-platform local multiplayer.",
    contributions: [
      "Architected local multiplayer with an HTTP server running inside UE5 through a custom C++ plugin.",
      "Built the real-time browser dashboard showing ball tracking, player orientation, and fielder positions as the sole web app developer.",
      "Rebuilt fielding AI with math-based decision logic for reliable ball-chase behaviour.",
      "Integrated user profiles, match data, and rankings with the backend server.",
    ],
    outcome: "40M+ balls played. Top-rated VR cricket title on Quest.",
    alt: "The Final Overs — VR cricket game on Meta Quest",
  },
  {
    title: "GraspXR",
    role: "Solo Lead / Technical Architect",
    date: "2023–24 / Quest & PC",
    metric: "Enterprise SDK",
    image: "graspxr.png",
    video: "graspxr.mp4",
    description:
      "Enterprise VR training platform for medical and industrial clients built to scale to 2000+ users without per-scenario code changes.",
    contributions: [
      "Architected the full base system as a modular Unreal plugin that was SDK-ready from day one.",
      "Built the DLC architecture so scenarios could be downloaded separately and keep install size down.",
      "Created a data-driven scenario pipeline so non-technical staff could add scenarios with data instead of code.",
      "Integrated the web portal for live performance monitoring.",
    ],
    outcome: "Non-technical staff could deploy new scenarios independently. Foundation for a future commercial SDK.",
    alt: "GraspXR — enterprise VR training platform",
  },
  {
    title: "Medic VR",
    role: "Lead Developer",
    date: "2023 / Quest",
    metric: "500+ nurses trained",
    image: "medicvr.png",
    description:
      "Multi-hospital VR nursing training platform live across 15+ procedural scenarios with per-client branding.",
    contributions: [
      "Built the multi-tenant system with JSON-driven runtime branding for each hospital across textures, logos, colors, and props.",
      "Integrated the full web portal connection for user auth, session logging, and performance reporting.",
      "Built a C++ editor plugin that replaced enum-based task IDs with DataTable-driven Blueprint dropdowns and removed designer friction.",
      "Built around 10 scenarios solo from scratch and handled additional bug fixing and flow repairs.",
    ],
    outcome: "500+ nurses trained. Deployed across multiple hospitals. Client described scenario turnaround as \"shocked and impressed.\"",
    alt: "Medic VR — multi-hospital VR nursing training",
  },
  {
    title: "The Valley Beyond",
    audience: "public-only",
    role: "Freelance Developer",
    date: "2025 / SteamVR",
    metric: "5.0 / 5.0 Upwork",
    image: "valleybeyond.jpg",
    video: "valleybeyond.mp4",
    storeUrl: "https://store.steampowered.com/app/3889780/The_Valley_Beyond/",
    storeLabel: "View on Steam",
    description:
      "Freelance SteamVR puzzle game — inherited a fragile legacy codebase and refactored it into a scalable, component-based architecture.",
    contributions: [
      "Inherited a messy legacy codebase and progressively refactored it into a component-based architecture to reduce repetition and improve Blueprint modularity.",
      "Implemented eight distinct puzzle types, each with unique unlock logic.",
      "Built the complete save system covering interaction state, inventory state, and puzzle completion state.",
      "Built the pickup-and-drop inventory system, sound cue system, Geometry Scripting implementation, and resolved critical packaging issues blocking the project.",
    ],
    outcome:
      "5.0/5.0 rating on Upwork — client cited it as \"one of the best coding experiences in 15 years of game dev.\" Ongoing relationship.",
    alt: "The Valley Beyond — SteamVR puzzle game",
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
        alt={project.alt}
        loading="lazy"
        decoding="async"
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
  const { effectiveAudience } = useVisibility();
  const visibleProjects = projects.filter((project) =>
    isAudienceVisible(project.audience, effectiveAudience),
  );

  return (
    <>
      <section id="projects" className="relative border-t-2 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 sm:pt-28 pb-10 sm:pb-14">
          <FadeIn>
            <span className="text-primary font-mono text-xs sm:text-sm uppercase font-bold tracking-widest block mb-3 sm:mb-4">
              Selected Projects
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight font-display">
              Selected Work.
            </h2>
          </FadeIn>
        </div>

        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-4 pb-12 sm:px-6 sm:pb-16 md:px-12 lg:gap-10">
          {visibleProjects.map((project, i) => (
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

                  {project.storeUrl ? (
                    <div>
                      <a
                        href={project.storeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.storeLabel} for ${project.title}`}
                        className="inline-flex items-center gap-2 rounded-full border border-primary/18 bg-primary/8 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-primary transition hover:border-primary/30 hover:bg-primary/12"
                      >
                        {project.storeLabel}
                        <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                  ) : null}

                  <div className="space-y-4 text-sm lg:space-y-4.5">
                    <p className="text-sm leading-relaxed text-foreground/82 sm:text-base dark:text-foreground/78">
                      {project.description}
                    </p>

                    <div>
                      <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                        My Role
                      </span>
                      <ul className="space-y-2">
                        {project.contributions.map((item, idx) => (
                          <li key={idx} className="flex gap-2 text-foreground/82 dark:text-foreground/78">
                            <span className="flex-shrink-0 text-primary">-</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="border-t border-border pt-4 text-sm font-bold leading-relaxed text-foreground sm:text-base">
                      {project.outcome}
                    </p>
                  </div>
                </div>

                <ProjectMedia
                  project={project}
                  index={i}
                  total={visibleProjects.length}
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
