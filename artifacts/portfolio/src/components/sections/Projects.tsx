import { FadeIn } from "@/components/ui/FadeIn";
import { useEffect, useRef, useState } from "react";

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
    problem: "Enterprise training platform needed to scale to 2000+ users without per-scenario code changes",
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

const DESKTOP_STACK_HEIGHT = 42;
const DESKTOP_STACK_TOP = 104;

export default function Projects() {
  const desktopStackRef = useRef<HTMLDivElement | null>(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  useEffect(() => {
    const updateActiveProject = () => {
      if (window.innerWidth < 1024 || !desktopStackRef.current) {
        setActiveProjectIndex(0);
        return;
      }

      const element = desktopStackRef.current;
      const rect = element.getBoundingClientRect();
      const start = window.scrollY + rect.top;
      const maxScrollableDistance = Math.max(element.offsetHeight - window.innerHeight, 1);
      const currentScroll = Math.min(
        Math.max(window.scrollY - start, 0),
        maxScrollableDistance,
      );

      const nextIndex = Math.min(
        projects.length - 1,
        Math.floor((currentScroll / maxScrollableDistance) * projects.length),
      );

      setActiveProjectIndex(nextIndex);
    };

    updateActiveProject();
    window.addEventListener("scroll", updateActiveProject, { passive: true });
    window.addEventListener("resize", updateActiveProject);

    return () => {
      window.removeEventListener("scroll", updateActiveProject);
      window.removeEventListener("resize", updateActiveProject);
    };
  }, []);

  const activeProject = projects[activeProjectIndex];

  return (
    <section id="projects" className="relative bg-background">
      {/* Section header */}
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

      <div className="mx-auto flex max-w-7xl flex-col gap-7 px-4 pb-12 sm:px-6 sm:pb-16 md:px-12 lg:hidden">
        {projects.map((project, i) => (
          <FadeIn
            key={i}
            delay={i * 0.06}
            className="group overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-[0_14px_30px_-28px_rgba(15,23,42,0.12)]"
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

                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 lg:px-5 lg:py-2">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span className="text-sm font-semibold text-foreground">{project.metric}</span>
                </div>

                <div className="space-y-3 text-sm lg:space-y-3.5">
                  <div>
                    <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">Problem</span>
                    <p className="leading-relaxed text-foreground/80">{project.problem}</p>
                  </div>
                  <div>
                    <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">Solution</span>
                    <ul className="space-y-1">
                      {project.solution.map((item, idx) => (
                        <li key={idx} className="flex gap-2 text-foreground/80">
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
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="rounded-md border border-border bg-muted/70 px-2.5 py-1 font-mono text-[11px] text-muted-foreground lg:px-3"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative h-56 overflow-hidden border-t border-border bg-[#101418] sm:h-72 lg:h-auto lg:min-h-[30rem] lg:w-[48%] lg:border-l lg:border-t-0">
                <img
                  src={`${import.meta.env.BASE_URL}images/${project.image}`}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-68 transition-all duration-700 group-hover:scale-[1.02] group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101418]/70 via-[#101418]/12 to-transparent lg:bg-gradient-to-l lg:from-[#101418]/72 lg:via-[#101418]/18 lg:to-transparent" />
                <div className="absolute bottom-4 right-4 font-mono text-[10px] text-white/45 sm:bottom-5 sm:right-5 sm:text-xs">
                  {String(i + 1).padStart(2, "0")} <span className="text-white/20">/</span> {String(projects.length).padStart(2, "0")}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <div
        ref={desktopStackRef}
        className="hidden lg:block"
        style={{ height: `${projects.length * DESKTOP_STACK_HEIGHT}vh` }}
      >
        <div
          className="mx-auto max-w-7xl px-6 md:px-12"
          style={{ position: "sticky", top: `${DESKTOP_STACK_TOP}px` }}
        >
          <div className="flex items-center gap-4 xl:gap-5">
            <div className="group flex-1 overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-[0_16px_34px_-30px_rgba(15,23,42,0.12)]">
              <div className="flex min-h-[28rem] flex-row">
                <div className="flex w-[52%] flex-col justify-center gap-4 p-8 xl:p-10">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-primary/15 bg-primary/10 px-2.5 py-1 font-mono text-xs font-bold text-primary">
                      {activeProject.role}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      {activeProject.date}
                    </span>
                  </div>

                  <h3 className="font-display text-3xl font-black leading-tight text-foreground xl:text-[2rem]">
                    {activeProject.title}
                  </h3>

                  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-sm font-semibold text-foreground">{activeProject.metric}</span>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">Problem</span>
                      <p className="leading-relaxed text-foreground/80">{activeProject.problem}</p>
                    </div>
                    <div>
                      <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">Solution</span>
                      <ul className="space-y-1">
                        {activeProject.solution.map((item, idx) => (
                          <li key={idx} className="flex gap-2 text-foreground/80">
                            <span className="mt-0.5 flex-shrink-0 text-primary">›</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">Outcome</span>
                      <p className="font-medium leading-relaxed text-foreground">{activeProject.outcome}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 border-t border-border pt-4">
                    {activeProject.tags.map(tag => (
                      <span
                        key={tag}
                        className="rounded-md border border-border bg-muted/70 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative min-h-[28rem] w-[48%] overflow-hidden border-l border-border bg-[#101418]">
                  <img
                    key={activeProject.image}
                    src={`${import.meta.env.BASE_URL}images/${activeProject.image}`}
                    alt={activeProject.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-68 transition-all duration-700 group-hover:scale-[1.02] group-hover:opacity-80"
                  />
                <div className="absolute inset-0 bg-gradient-to-l from-[#101418]/72 via-[#101418]/18 to-transparent" />
                </div>
              </div>
            </div>

            <aside className="flex w-14 shrink-0 flex-col items-center justify-center gap-4">
              <div className="text-center">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  Scroll
                </div>
                <div className="mt-1 font-mono text-base font-semibold text-foreground">
                  {String(activeProjectIndex + 1).padStart(2, "0")}
                  <span className="text-muted-foreground/55">/{String(projects.length).padStart(2, "0")}</span>
                </div>
              </div>

              <div className="relative flex flex-col items-center gap-2.5 py-2 before:absolute before:inset-y-0 before:left-1/2 before:w-px before:-translate-x-1/2 before:bg-border">
                {projects.map((_, index) => (
                  <span
                    key={index}
                    className={`z-10 block rounded-full bg-background transition-all duration-300 ${
                      index === activeProjectIndex
                        ? "h-8 w-2.5 bg-primary"
                        : "h-2.5 w-2.5 border border-border bg-background"
                    }`}
                  />
                ))}
              </div>

              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/80">
                {projects.length - activeProjectIndex - 1} left
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
