import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { site } from "@/config/site";

const links = [
  { to: "/bio", label: "Bio" },
  { to: "/season", label: "Season" },
  { to: "/video", label: "Video" },
  { to: "/gallery", label: "Gallery" },
  { to: "/press", label: "Press" },
  { to: "/downloads", label: "Downloads" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - lastY.current;
        setScrolled(y > 24);
        if (Math.abs(delta) > 6) {
          setHidden(delta > 0 && y > 96);
          lastY.current = y;
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) setHidden(false);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={[
          "fixed top-0 z-50 w-full transition-[transform,background-color,backdrop-filter,padding] duration-500 ease-editorial",
          hidden ? "-translate-y-full" : "translate-y-0",
          scrolled
            ? "bg-background/70 py-3 backdrop-blur-xl backdrop-saturate-150 sm:py-4"
            : "bg-transparent py-5 mix-blend-difference sm:py-6",
        ].join(" ")}
      >
        <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <div
            className={[
              "flex items-center justify-between gap-6 border-b pb-3 transition-colors duration-500 sm:pb-4",
              scrolled ? "border-border" : "border-paper/15",
            ].join(" ")}
          >
            <Link
              to="/"
              className={[
                "font-display text-lg leading-none tracking-tighter transition-colors sm:text-xl",
                scrolled ? "text-foreground" : "text-paper",
              ].join(" ")}
            >
              {site.name.toUpperCase()}
            </Link>

            <nav className="hidden items-center gap-1 md:flex lg:gap-2">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className={[
                    "eyebrow rounded-full px-3 py-2 transition-colors duration-300",
                    scrolled
                      ? "text-muted-foreground hover:text-foreground"
                      : "text-paper/60 hover:text-paper",
                  ].join(" ")}
                  activeProps={{
                    className: scrolled
                      ? "bg-foreground/5 text-foreground"
                      : "bg-paper/10 text-paper",
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className={[
                "group -mr-1 flex h-9 w-9 flex-col items-end justify-center gap-[5px] md:hidden",
                scrolled ? "text-foreground" : "text-paper",
              ].join(" ")}
              aria-label="Open menu"
            >
              <span className="block h-px w-6 bg-current transition-all duration-300" />
              <span className="block h-px w-4 bg-current transition-all duration-300 group-hover:w-6" />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-60 flex flex-col overflow-y-auto bg-ink/95 px-5 py-5 text-paper backdrop-blur-2xl sm:px-8 sm:py-6">
          <div className="flex items-center justify-between border-b border-paper/15 pb-3 sm:pb-4">
            <span className="font-display text-lg leading-none tracking-tighter sm:text-xl">
              {site.name.toUpperCase()}
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="eyebrow rounded-full border border-paper/20 px-4 py-2 transition-colors hover:bg-paper/10"
              aria-label="Close menu"
            >
              Close
            </button>
          </div>
          <nav className="mt-10 flex flex-col sm:mt-16">
            {[{ to: "/", label: "Home" } as const, ...links].map((l, i) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rise flex items-baseline justify-between border-b border-paper/10 py-4 font-display text-3xl tracking-tight transition-colors hover:text-accent-bronze sm:text-4xl"
                style={{ animationDelay: `${i * 40}ms`, animationDuration: "600ms" }}
              >
                {l.label}
                <span className="eyebrow text-paper/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </Link>
            ))}
          </nav>
          <p className="eyebrow mt-auto pt-10 text-paper/40">{site.tagline}</p>
        </div>
      )}
    </>
  );
}
