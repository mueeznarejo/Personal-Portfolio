import { FadeIn } from "@/components/ui/FadeIn";
import { useVisibility } from "@/hooks/useVisibility";
import { pickAudienceText } from "@/lib/visibility";

const signals = [
  {
    stat: "7+ years",
    title: "Teaching and community work",
    description:
      "Founded and continue teaching at GETS, showing communication, mentoring, and long-term consistency outside shipping work.",
  },
  {
    stat: "5 juniors",
    title: "Developers trained",
    description:
      "Led and trained junior UE5/VR developers, which signals team leverage and not just strong individual contribution.",
  },
  {
    stat: {
      publicText: "Games + enterprise + freelance",
      studioText: "Games + enterprise + teams",
    },
    title: "Range without losing focus",
    description: {
      publicText:
        "Worked across shipped products, freelance delivery, and team leadership while staying anchored in Unreal, VR, XR, and real-time systems.",
      studioText:
        "Worked across shipped products, enterprise delivery, and team leadership while staying anchored in Unreal, VR, XR, and real-time systems.",
    },
  },
];

export default function Signals() {
  const { effectiveAudience } = useVisibility();

  return (
    <section
      id="signals"
      className="border-t border-border bg-background py-14 sm:py-18"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn className="max-w-2xl">
          <span className="block font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-primary sm:text-xs">
            Beyond The Resume
          </span>
          <h2 className="mt-3 font-display text-2xl font-black tracking-tight text-foreground sm:text-3xl">
            A few signals that add depth.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            These are quieter proof points, but they matter: mentoring, teaching,
            leadership, and the ability to operate across different kinds of
            real-time products.
          </p>
        </FadeIn>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {signals.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.06}>
              <article className="h-full rounded-[1.4rem] border border-border bg-white px-5 py-5 shadow-[0_18px_30px_-30px_rgba(15,23,42,0.24)] dark:border-[hsl(var(--border))] dark:bg-[hsl(var(--card))] dark:shadow-[0_22px_40px_-36px_rgba(0,0,0,0.78)]">
                <div className="font-display text-xl font-black text-foreground sm:text-2xl">
                  {pickAudienceText(item.stat, effectiveAudience)}
                </div>
                <h3 className="mt-2 text-base font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {pickAudienceText(item.description, effectiveAudience)}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
