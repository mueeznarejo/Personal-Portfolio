import { FadeIn } from "@/components/ui/FadeIn";

const experiences = [
  {
    role: "Freelance UE5 Developer",
    company: "Upwork",
    date: "Feb–Dec 2025",
    weight: "heavy",
    points: [
      "Delivered maintainable systems for a French Steam VR client with a strong emphasis on code quality and long-term usability",
      "Refactored a legacy project into a more scalable component-based architecture",
      "Implemented puzzle logic and persistence systems in a live production environment",
      "Maintained a 5.0/5.0 client rating throughout the engagement"
    ]
  },
  {
    role: "Unreal Engine / XR Developer",
    company: "Mixeal",
    date: "Jan 2022–May 2023",
    weight: "heavy",
    points: [
      "Learned the ropes of UE5 and XR development, focusing on rapid prototyping and user-centric design",
      "Built immersive XR experiences tailored to client needs and hardware constraints"
    ]
  },
  {
    role: "Web Development Teacher",
    company: "GETS",
    date: "Jan 2019–Present",
    weight: "light",
    points: [
      "Trained five junior developers in UE5 and XR workflows through practical, project-based exercises"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-background relative border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="mb-16">
            <span className="text-primary font-mono text-sm uppercase font-bold tracking-widest block mb-4">
              Experience
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight font-display">
              Less scrolling, clearer career signal.
            </h2>
          </div>
        </FadeIn>

        <div className="relative border-l border-border pl-8 md:pl-12 space-y-16">
          {experiences.map((exp, i) => (
            <FadeIn key={i} delay={i * 0.1} className="relative">
              {/* Timeline Dot */}
              <div className="absolute -left-[37px] md:-left-[53px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary shadow-[0_0_0_4px_var(--color-background)]"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-12">
                <div>
                  <h3 className={`font-display text-foreground mb-1 ${exp.weight === 'heavy' ? 'text-2xl font-bold' : 'text-xl font-medium'}`}>
                    {exp.role}
                  </h3>
                  <div className="text-primary font-semibold mb-2">{exp.company}</div>
                  <div className="text-muted-foreground text-sm font-mono">{exp.date}</div>
                </div>
                
                <div>
                  <ul className={`space-y-3 ${exp.weight === 'heavy' ? 'text-foreground/90' : 'text-muted-foreground'}`}>
                    {exp.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="text-primary mt-1.5 text-lg leading-none">&bull;</span>
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
