import { FadeIn } from "@/components/ui/FadeIn";

const experiences = [
  {
    role: "Freelance UE5 Developer",
    company: "Upwork",
    date: "Feb–Dec 2025",
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
    points: [
      "Learned the ropes of UE5 and XR development, focusing on rapid prototyping and user-centric design"
    ]
  },
  {
    role: "Web Development Teacher",
    company: "GETS",
    date: "Jan 2019–Present",
    points: [
      "Trained five junior developers in UE5 and XR workflows through practical, project-based exercises"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-background relative border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-16 tracking-tight">
            Less scrolling, clearer career signal.
          </h2>
        </FadeIn>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <FadeIn key={i} delay={i * 0.1} className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-12 border-t border-border/50 pt-8 first:border-t-0 first:pt-0">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {exp.role}
                </h3>
                <div className="text-primary font-medium mb-1">{exp.company}</div>
                <div className="text-muted-foreground text-sm font-mono">{exp.date}</div>
              </div>
              
              <div>
                <ul className="space-y-3 text-muted-foreground">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="text-primary mt-1.5 text-lg leading-none">&bull;</span>
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
