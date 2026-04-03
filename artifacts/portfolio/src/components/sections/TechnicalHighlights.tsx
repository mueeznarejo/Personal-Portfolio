import {
  Boxes,
  BrainCircuit,
  DatabaseZap,
  Network,
  Users,
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const technicalHighlights = [
  {
    title: "In-Engine HTTP Multiplayer",
    icon: <Network size={18} />,
    project: "The Final Overs",
    description:
      "Architected a UE5 HTTP server plus browser dashboard so live match data, batting support, and field orientation stayed responsive in real time.",
  },
  {
    title: "Custom Pose Detection",
    icon: <BrainCircuit size={18} />,
    project: "Knorrverse -> Kynetik",
    description:
      "Built custom hand-pose logic from raw Meta tracking data to support richer shield, power, and combat interactions than the platform defaults allowed.",
  },
  {
    title: "C++ Editor Workflow",
    icon: <DatabaseZap size={18} />,
    project: "Medic VR",
    description:
      "Extended the UE5 editor to pull DataTable rows into designer-facing dropdowns, replacing brittle task IDs with faster and safer authoring.",
  },
  {
    title: "SDK-Ready Plugin Architecture",
    icon: <Boxes size={18} />,
    project: "GraspXR",
    description:
      "Restructured the base product into a modular plugin architecture so scenarios could be built, distributed, and maintained without touching core code.",
  },
  {
    title: "Multi-Tenant Enterprise VR",
    icon: <Users size={18} />,
    project: "Medic VR",
    description:
      "Designed runtime branding and scenario assignment flows that let different hospitals share the same product while keeping client-specific behavior isolated.",
  },
];

export default function TechnicalHighlights() {
  return (
    <section
      id="technical-highlights"
      className="border-t border-border bg-background py-16 sm:py-22"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn className="max-w-2xl">
          <span className="block font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-primary sm:text-xs">
            Technical Highlights
          </span>
          <h2 className="mt-3 font-display text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Systems thinking behind the shipped work.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Not a full skills matrix - just a few standout systems that show how
            I solve hard product problems in UE5, VR, and real-time pipelines.
          </p>
        </FadeIn>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {technicalHighlights.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.06}>
              <article className="h-full rounded-[1.5rem] border border-border bg-white p-5 shadow-[0_18px_34px_-30px_rgba(15,23,42,0.28)] transition duration-300 hover:border-primary/25 dark:border-[hsl(var(--border))] dark:bg-[hsl(var(--card))] dark:shadow-[0_24px_44px_-36px_rgba(0,0,0,0.78)]">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-primary/15 bg-primary/10 text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      {item.title}
                    </h3>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-primary/85">
                      {item.project}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
