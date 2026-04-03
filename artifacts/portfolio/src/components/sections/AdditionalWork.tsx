import { ArrowUpRight, Building2, Globe2, ShieldPlus } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const additionalProjects = [
  {
    title: "Knorrverse",
    context: "Branded VR experience for Knorr / Unilever",
    icon: <Building2 size={18} />,
    summary:
      "Built combat and power systems for a promotional Quest experience, with custom pose work that later became the foundation for Kynetik.",
    why: "Adds recognizable brand credibility and shows commercial work beyond games alone.",
  },
  {
    title: "Mental Health VR Application",
    context: "Quest deployment with real patients",
    icon: <ShieldPlus size={18} />,
    summary:
      "Built a branching decision-tree therapy flow with contextual audio feedback for a clinically deployed mental health VR application.",
    why: "Shows real-world deployment depth in a sensitive domain without turning the site into an NDA-heavy case study.",
  },
  {
    title: "Homestay / ArchViz + Web Controller",
    context: "UE5 + HTTP + Node.js + WebSockets",
    icon: <Globe2 size={18} />,
    summary:
      "Architected browser-to-VR control for user position and environment updates, extending immersive work into real-time web systems.",
    why: "Shows breadth across UE5, web integration, and interactive control flows outside a pure gameplay context.",
  },
];

export default function AdditionalWork() {
  return (
    <section
      id="additional-work"
      className="border-t border-border bg-background py-14 sm:py-18"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn className="max-w-2xl">
          <span className="block font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-primary sm:text-xs">
            Selected Additional Work
          </span>
          <h2 className="mt-3 font-display text-2xl font-black tracking-tight text-foreground sm:text-3xl">
            A little more range, kept secondary.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            These are intentionally lighter than the featured projects. They are
            here to show broader range, not to compete with the main portfolio
            work.
          </p>
        </FadeIn>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {additionalProjects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.07}>
              <article className="h-full rounded-[1.4rem] border border-border bg-muted/35 p-5 transition duration-300 hover:border-primary/20 dark:border-[hsl(var(--border))] dark:bg-[hsl(var(--secondary))]">
                <div className="flex items-start gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-primary/15 bg-primary/10 text-primary">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      {project.title}
                    </h3>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {project.context}
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-foreground/82 dark:text-foreground/78">
                  {project.summary}
                </p>

                <div className="mt-5 rounded-2xl border border-border bg-background/80 px-4 py-3 dark:border-[hsl(var(--border))] dark:bg-[hsl(var(--card))]">
                  <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                    Why It Matters
                    <ArrowUpRight size={12} />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.why}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
