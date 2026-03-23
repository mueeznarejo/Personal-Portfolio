import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-display font-bold text-2xl tracking-tight">
            Mueez<span className="text-primary">.dev</span>
          </span>
          <p className="text-muted-foreground text-sm">
            Unreal Engine 5 Developer & VR Architect
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <a href="mailto:mueez.narejo112@gmail.com" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all">
            <Mail size={18} />
          </a>
          <a href="https://linkedin.com/in/mueeznarejo" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-8 pt-8 border-t border-border/50 text-center text-muted-foreground text-sm">
        <p>© {new Date().getFullYear()} Mueez Aslam Narejo. All rights reserved.</p>
      </div>
    </footer>
  );
}
