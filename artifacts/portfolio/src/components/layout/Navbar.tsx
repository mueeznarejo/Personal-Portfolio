import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import type { Theme } from "@/hooks/useTheme";

function ThemeToggle({
  theme,
  toggleTheme,
  compact = false,
}: {
  theme: Theme;
  toggleTheme: () => void;
  compact?: boolean;
}) {
  const Icon = theme === "dark" ? Sun : Moon;
  const label = theme === "dark" ? "Light" : "Dark";

  if (compact) {
    return (
      <button
        type="button"
        aria-label={`Switch to ${label.toLowerCase()} mode`}
        onClick={toggleTheme}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/80 text-foreground/75 shadow-sm transition-all hover:border-primary/30 hover:text-primary dark:border-[hsl(var(--border))] dark:bg-transparent dark:text-foreground/72 dark:shadow-none dark:hover:border-primary/30 dark:hover:bg-[hsl(var(--secondary))] dark:hover:text-primary"
      >
        <Icon size={18} />
      </button>
    );
  }

  return (
      <button
        type="button"
        aria-label={`Switch to ${label.toLowerCase()} mode`}
        onClick={toggleTheme}
        className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-3 py-2 text-sm font-medium text-foreground/75 shadow-sm transition-all hover:border-primary/30 hover:text-primary dark:border-[hsl(var(--border))] dark:bg-transparent dark:text-foreground/72 dark:shadow-none dark:hover:border-primary/35 dark:hover:bg-[hsl(var(--secondary))] dark:hover:text-primary"
      >
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-muted text-foreground/80 dark:bg-[hsl(var(--secondary))] dark:text-foreground/88">
        <Icon size={15} />
      </span>
      <span>{label}</span>
    </button>
  );
}

export default function Navbar({
  theme,
  toggleTheme,
}: {
  theme: Theme;
  toggleTheme: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Work", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border py-4 transition-all duration-300">
      <div className="nav-shell max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="font-display font-bold text-2xl tracking-tight text-foreground flex items-center gap-1.5">
          Mueez <span className="text-primary">Aslam</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.slice(0, 3).map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <a 
            href="#contact"
            className="text-sm font-semibold bg-primary text-white px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
          >
            Let's Talk
          </a>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} compact />
          <button 
            type="button"
            className="text-foreground p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg"
          >
            <div className="px-6 py-6 flex flex-col gap-6">
              {links.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
