import { FadeIn } from "@/components/ui/FadeIn";

const experiences = [
  {
    role: "Lead VR Developer & Team Lead",
    company: "Mixeal",
    date: "May 2023 – Present",
    weight: "heavy",
    points: [
      "Owned the full lifecycle of Kynetik — Blueprint architecture, Niagara VFX, Chaos Physics, and GPU optimisation",
      "Awarded royalty on net revenue by the CEO for sole-developer ownership",
      "Maintained 72–90fps across all 7 Quest titles via Unreal Insights profiling and LOD authoring",
      "Led a team of 5 developers across 4 concurrent VR projects"
    ]
  },
  {
    role: "Freelance UE5 Developer",
    company: "Upwork (Remote)",
    date: "Feb – Dec 2025",
    weight: "heavy",
    points: [
      "Delivered Blueprint gameplay systems and puzzle logic for The Valley Beyond (PC/Steam)",
      "Maintained a 5.0/5.0 rating — cited as \"one of the best coding experiences\" in 15 years of game creation"
    ]
  },
  {
    role: "Unreal Engine / VR Developer",
    company: "Mixeal",
    date: "Jan 2022 – May 2023",
    weight: "medium",
    points: [
      "Shipped first VR projects, acquired UE5 expertise, and completed BSc Computer Science",
      "Resolved critical rendering bottlenecks on Quest 2 standalone via profiling and shader optimisation"
    ]
  },
  {
    role: "Web Development Teacher",
    company: "GETS (Non-Profit)",
    date: "Jan 2019 – Present",
    weight: "light",
    points: [
      "Founding volunteer teacher — established the web development curriculum from scratch"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-32 bg-background relative border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="mb-12 sm:mb-16">
            <span className="text-primary font-mono text-xs sm:text-sm uppercase font-bold tracking-widest block mb-3 sm:mb-4">
              Experience
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight font-display">
              Experience across Unreal Engine, VR, XR, and game development.
            </h2>
          </div>
        </FadeIn>

        <div className="relative border-l-2 border-border pl-6 sm:pl-10 md:pl-12 space-y-10 sm:space-y-14">
          {experiences.map((exp, i) => (
            <FadeIn key={i} delay={i * 0.1} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-[29px] sm:-left-[45px] md:-left-[53px] top-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-background border-2 border-primary shadow-[0_0_0_3px_hsl(var(--background))]" />

              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-3 md:gap-12">
                {/* Left: role info */}
                <div>
                  <h3 className={`font-display text-foreground mb-1 leading-tight ${
                    exp.weight === 'heavy' ? 'text-xl sm:text-2xl font-bold' :
                    exp.weight === 'medium' ? 'text-lg sm:text-xl font-semibold' :
                    'text-base sm:text-lg font-medium text-muted-foreground'
                  }`}>
                    {exp.role}
                  </h3>
                  <div className={`font-semibold mb-1 text-sm sm:text-base ${exp.weight === 'light' ? 'text-muted-foreground' : 'text-primary'}`}>
                    {exp.company}
                  </div>
                  <div className="text-muted-foreground text-xs sm:text-sm font-mono">{exp.date}</div>
                </div>

                {/* Right: bullet points */}
                <ul className={`space-y-2 mt-2 md:mt-0 ${
                  exp.weight === 'light' ? 'text-muted-foreground text-sm' : 'text-foreground/85 text-sm sm:text-base'
                }`}>
                  {exp.points.map((pt, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <span className={`mt-1 flex-shrink-0 text-sm leading-none ${exp.weight === 'light' ? 'text-border' : 'text-primary'}`}>›</span>
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
