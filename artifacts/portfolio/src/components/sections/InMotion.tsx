import { ArrowUpRight, ImageIcon, Play } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

type Clip = {
  title: string;
  type: "Reel" | "Post";
  href: string;
  embed: string;
};

const clips: Clip[] = [
  {
    title: "Reel 01",
    type: "Reel",
    href: "https://www.instagram.com/reel/DBdi8VeuZ_i/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    embed: "https://www.instagram.com/reel/DBdi8VeuZ_i/embed",
  },
  {
    title: "Post",
    type: "Post",
    href: "https://www.instagram.com/p/C-KZSLZgGyd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    embed: "https://www.instagram.com/p/C-KZSLZgGyd/embed",
  },
  {
    title: "Reel 02",
    type: "Reel",
    href: "https://www.instagram.com/reel/C004A55tIY2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    embed: "https://www.instagram.com/reel/C004A55tIY2/embed",
  },
  {
    title: "Reel 03",
    type: "Reel",
    href: "https://www.instagram.com/reel/C6gRrA5N3ub/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    embed: "https://www.instagram.com/reel/C6gRrA5N3ub/embed",
  },
  {
    title: "Reel 04",
    type: "Reel",
    href: "https://www.instagram.com/reel/DDrKQeBC_gA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    embed: "https://www.instagram.com/reel/DDrKQeBC_gA/embed",
  },
];

export default function InMotion() {
  return (
    <section id="in-motion" className="border-t border-border bg-background py-14 sm:py-18">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn className="max-w-2xl">
          <span className="block font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-primary sm:text-xs">
            Beyond The Build
          </span>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-2xl font-black tracking-tight text-foreground sm:text-3xl">
                A few public clips.
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Not a main portfolio section, just a small window into how some of the work shows up publicly.
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="mt-8 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max gap-4 pr-6">
            {clips.map((clip, index) => {
              const isReel = clip.type === "Reel";

              return (
                <FadeIn key={clip.href} delay={index * 0.05} className="w-[250px] shrink-0 sm:w-[270px]">
                  <article className="overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-[0_16px_32px_-28px_rgba(0,0,0,0.55)]">
                    <div className="border-b border-card-border px-4 py-3">
                      <div className="flex items-center justify-between gap-3">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-card-foreground/65">
                          {isReel ? <Play size={12} /> : <ImageIcon size={12} />}
                          {clip.type}
                        </div>
                        <a
                          href={clip.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-[0.14em] text-primary transition hover:text-primary/80"
                        >
                          Open
                          <ArrowUpRight size={12} />
                        </a>
                      </div>
                      <h3 className="mt-3 text-sm font-semibold text-card-foreground">
                        {clip.title}
                      </h3>
                    </div>

                    <div className="bg-black">
                      <iframe
                        title={clip.title}
                        src={clip.embed}
                        className="h-[360px] w-full"
                        loading="lazy"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      />
                    </div>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
