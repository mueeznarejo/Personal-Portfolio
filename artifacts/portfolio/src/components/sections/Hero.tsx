import { FadeIn } from "@/components/ui/FadeIn";
import { Download, MapPin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-16 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full flex flex-col">
        
        <div className="w-full flex flex-col lg:flex-row gap-16 lg:items-center justify-between">
          <div className="lg:w-2/3 flex-1">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-border shadow-sm text-foreground text-sm font-medium mb-8">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                </span>
                Available for work
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6 text-foreground font-display">
                I ship Unreal products for games, XR, and tooling.
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                From Quest combat systems to enterprise training products and editor tooling. I focus on architecture that feels clean in development and reliable in production.
              </p>
            </FadeIn>

            <FadeIn delay={0.4} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
              <a 
                href="mailto:mueez.narejo112@gmail.com" 
                className="px-8 py-3.5 rounded-lg bg-primary text-white font-semibold text-base hover:bg-primary/90 transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-center shadow-sm"
              >
                Download CV <Download size={18} />
              </a>
              <a 
                href="#projects" 
                className="px-8 py-3.5 rounded-lg bg-transparent border border-border text-foreground font-semibold text-base hover:bg-white hover:shadow-sm transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-center"
              >
                View Work
              </a>
              <a 
                href="https://linkedin.com/in/mueeznarejo" 
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3.5 rounded-lg bg-transparent text-muted-foreground font-semibold text-base hover:text-foreground transition-all flex items-center justify-center w-full sm:w-auto text-center"
              >
                LinkedIn
              </a>
            </FadeIn>
            
            <FadeIn delay={0.5}>
              <div className="flex items-center gap-6 text-sm text-muted-foreground font-medium">
                <span className="flex items-center gap-2"><MapPin size={16} /> Hyderabad, Pakistan</span>
                <span className="flex items-center gap-2"><Mail size={16} /> mueez.narejo112@gmail.com</span>
              </div>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.4} className="lg:w-1/3 flex justify-center lg:justify-end">
             <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-[2rem] bg-card border border-border flex items-center justify-center shadow-xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,hsl(var(--primary))_0%,transparent_70%)] rounded-[2rem]" />
                <h2 className="text-7xl lg:text-8xl font-black text-primary font-display tracking-tighter">MN</h2>
             </div>
          </FadeIn>
        </div>

        {/* Proof Bar */}
        <FadeIn delay={0.6} className="w-full mt-24 pt-10 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="border-l-2 border-primary pl-4">
              <div className="text-4xl md:text-5xl font-black text-primary mb-2 font-display">7+</div>
              <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider leading-snug">Commercial XR<br/>titles shipped</div>
            </div>
            <div className="border-l-2 border-primary pl-4">
              <div className="text-4xl md:text-5xl font-black text-primary mb-2 font-display">40M+</div>
              <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider leading-snug">Player interactions<br/>in The Final Overs</div>
            </div>
            <div className="border-l-2 border-primary pl-4">
              <div className="text-4xl md:text-5xl font-black text-primary mb-2 font-display">72-90</div>
              <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider leading-snug">Quest FPS<br/>maintained</div>
            </div>
            <div className="border-l-2 border-primary pl-4">
              <div className="text-4xl md:text-5xl font-black text-primary mb-2 font-display">500+</div>
              <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider leading-snug">Nurses trained<br/>in Medic VR</div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
