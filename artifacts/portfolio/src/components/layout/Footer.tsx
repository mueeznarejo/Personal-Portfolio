export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-muted-foreground text-sm font-mono">
        <p>© {new Date().getFullYear()} Mueez Aslam Narejo</p>
        <p className="text-xs text-muted-foreground/60">Built for clarity. Focused on delivery.</p>
      </div>
    </footer>
  );
}
