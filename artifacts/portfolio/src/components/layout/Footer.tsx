export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground text-sm font-mono">
        <p>© {new Date().getFullYear()} Mueez Aslam, Inc.</p>
        <p>Built for clarity. Focused on delivery.</p>
      </div>
    </footer>
  );
}
