import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowDown, Mail, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
          alt="Abstract VR Background" 
          className="w-full h-full object-cover opacity-40 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="max-w-4xl">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new opportunities
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-[1.1] mb-6 tracking-tight">
              Mueez Aslam <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-accent">
                Narejo
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Lead <strong className="text-foreground font-semibold">Unreal Engine 5</strong> Developer crafting immersive <strong className="text-foreground font-semibold">VR/XR</strong> gameplay experiences and robust enterprise architectures.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
            <a 
              href="#projects" 
              className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(0,180,255,0.3)] hover:shadow-[0_0_30px_rgba(0,180,255,0.5)] hover:-translate-y-1 w-full sm:w-auto text-center"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 rounded-xl bg-card border border-border text-foreground font-bold text-lg hover:bg-muted hover:border-muted-foreground/30 transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-center"
            >
              <Mail size={20} />
              Let's Talk
            </a>
          </FadeIn>

          <FadeIn delay={0.5} className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground font-medium">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              Hyderabad, Pakistan
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-[10px] text-white font-bold">7</div>
              Titles Shipped
            </div>
          </FadeIn>
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce">
        <ArrowDown size={24} />
      </a>
    </section>
  );
}
