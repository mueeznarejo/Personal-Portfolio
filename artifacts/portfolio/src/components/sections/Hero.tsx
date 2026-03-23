import { FadeIn } from "@/components/ui/FadeIn";
import { Download, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 overflow-hidden bg-background bg-grid-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/90 to-background pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full flex flex-col items-start mt-12 md:mt-24">
        
        <div className="w-full flex flex-col lg:flex-row gap-16 lg:items-center justify-between">
          <div className="max-w-3xl flex-1">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                Available for work
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-[1.05] tracking-tight mb-8 text-foreground">
                I ship Unreal products for games, XR, and tooling.
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                From Quest combat systems to enterprise training products and editor tooling. I focus on architecture that feels clean in development and reliable in production.
              </p>
            </FadeIn>

            <FadeIn delay={0.4} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-16">
              <a 
                href="mailto:mueez.narejo112@gmail.com" 
                className="px-8 py-4 rounded-md bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-center"
              >
                <Download size={20} />
                Download CV
              </a>
              <a 
                href="https://linkedin.com/in/mueeznarejo" 
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-md bg-transparent border border-border text-foreground font-bold text-lg hover:bg-muted hover:border-muted-foreground/30 transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-center"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a 
                href="#projects" 
                className="px-8 py-4 rounded-md bg-transparent text-muted-foreground font-bold text-lg hover:text-foreground transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-center lg:ml-4"
              >
                View Work
              </a>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.5} className="flex-shrink-0 flex flex-col items-end">
             <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border border-border/50 bg-card overflow-hidden flex items-center justify-center shadow-2xl shadow-primary/5 mb-6">
                {/* Fallback pattern for profile photo since specific path isn't given */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,hsl(var(--primary))_0%,transparent_70%)]" />
                <h2 className="text-5xl font-black text-muted/30 tracking-tighter">MN</h2>
             </div>
             <div className="text-right">
               <h2 className="text-3xl font-light text-muted-foreground tracking-tight leading-tight">
                 Mueez Aslam <br/>
                 <span className="text-foreground font-bold">Narejo</span>
               </h2>
             </div>
          </FadeIn>
        </div>

        {/* Proof Bar */}
        <FadeIn delay={0.6} className="w-full mt-24 pt-12 border-t border-border/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="border-l-2 border-primary/30 pl-4">
              <div className="text-3xl md:text-4xl font-black text-foreground mb-2">7+</div>
              <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider leading-snug">Commercial XR<br/>titles shipped</div>
            </div>
            <div className="border-l-2 border-primary/30 pl-4">
              <div className="text-3xl md:text-4xl font-black text-foreground mb-2">40M+</div>
              <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider leading-snug">Player interactions<br/>in The Final Overs</div>
            </div>
            <div className="border-l-2 border-primary/30 pl-4">
              <div className="text-3xl md:text-4xl font-black text-foreground mb-2">72-90fps</div>
              <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider leading-snug">Quest performance<br/>maintained</div>
            </div>
            <div className="border-l-2 border-primary/30 pl-4">
              <div className="text-3xl md:text-4xl font-black text-foreground mb-2">500+</div>
              <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider leading-snug">Nurses trained<br/>in Medic VR</div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
