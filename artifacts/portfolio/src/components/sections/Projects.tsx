import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
    metric: "5.0/5.0 client rating",
    image: "graspxr.png",
    problem: "Add feature-free legacy project support for 2000+ technical users",
    solution: [
      "Refactored Blueprints into custom components",
      "Data-driven physics with full persistence"
    ],
    outcome: "Closed with a 5.0/5.0 rating and unusually strong client feedback",
    tags: ["Modular UE5 training system"]
  },
  {
    title: "Medic VR",
    role: "Lead Dev",
    date: "2023 / Quest",
    metric: "500+ nurses trained",
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

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (next: number) => {
    setDirection(next > index ? 1 : -1);
    setIndex(next);
  };

  const prev = () => go((index - 1 + projects.length) % projects.length);
  const next = () => go((index + 1) % projects.length);

  const project = projects[index];

  return (
    <section id="projects" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-primary font-mono text-sm uppercase font-bold tracking-widest block mb-3">
                Featured Projects
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight font-display">
                Sticky proof of shipped XR work.
              </h2>
            </div>

            {/* Navigation controls */}
            <div className="hidden md:flex items-center gap-3">
              <span className="text-muted-foreground font-mono text-sm tabular-nums">
                {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </span>
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                aria-label="Previous project"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                aria-label="Next project"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </FadeIn>

        {/* Card viewport — fixed height, no overflow */}
        <div className="relative overflow-hidden rounded-2xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="group bg-card border border-card-border rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row"
            >
              {/* Content Side */}
              <div className="p-8 md:p-12 lg:w-1/2 flex flex-col justify-center order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-3 py-1 rounded">
                    {project.role}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    {project.date}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-card-foreground mb-5 font-display">
                  {project.title}
                </h3>

                <div className="inline-flex items-center w-fit bg-[#1A1A1A] border border-[#333] rounded-full px-4 py-1.5 mb-7">
                  <span className="text-primary font-bold mr-2">&rarr;</span>
                  <span className="text-card-foreground font-medium text-sm">{project.metric}</span>
                </div>

                <div className="space-y-4 text-sm">
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

                <div className="flex flex-wrap gap-2 mt-7 pt-6 border-t border-card-border">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-card-foreground/70 font-mono text-xs font-medium px-2.5 py-1 bg-[#1A1A1A] border border-[#333] rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image Side */}
              <div className="lg:w-1/2 relative bg-[#151515] overflow-hidden order-1 lg:order-2 border-b lg:border-b-0 lg:border-l border-card-border min-h-[260px] lg:min-h-[520px]">
                <img
                  src={`${import.meta.env.BASE_URL}images/${project.image}`}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-card to-transparent opacity-80" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot indicators + mobile arrows */}
        <div className="flex items-center justify-center gap-4 mt-6">
          {/* Mobile arrows */}
          <button
            onClick={prev}
            className="md:hidden w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            aria-label="Previous project"
          >
            <ChevronLeft size={16} />
          </button>

          <div className="flex items-center gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Go to project ${i + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  i === index
                    ? "w-6 h-2 bg-primary"
                    : "w-2 h-2 bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="md:hidden w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            aria-label="Next project"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
