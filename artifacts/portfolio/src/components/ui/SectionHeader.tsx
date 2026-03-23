import { FadeIn } from "./FadeIn";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeader({ title, subtitle, align = "left" }: SectionHeaderProps) {
  return (
    <FadeIn className={`mb-16 ${align === "center" ? "flex flex-col items-center text-center" : ""}`}>
      <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4 relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mt-6">
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}
