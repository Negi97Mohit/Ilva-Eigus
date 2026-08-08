import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { site } from "@/config/site";

const links = [
  { to: "/", label: "Home" },
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
  const lastY = useRef(0);

  /* Auto-hide the trigger on scroll down, reveal on scroll up. */
  useEffect(() => {
    lastY.current = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - lastY.current;
        if (Math.abs(delta) > 6) {
          setHidden(delta > 0 && y > 120);
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

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className={[
          "group fixed right-4 top-4 z-70 flex h-11 w-11 flex-col items-center justify-center gap-[7px]",
          open ? "text-paper" : "text-foreground",
          "transition-[transform,opacity,color] duration-500 ease-editorial sm:right-8 sm:top-7",
          hidden && !open ? "-translate-y-20 opacity-0" : "translate-y-0 opacity-100",
        ].join(" ")}
      >
        <span
          className={[
            "block h-px w-6 bg-current transition-all duration-500 ease-editorial",
            open ? "translate-y-[4px] rotate-45" : "group-hover:w-5",
          ].join(" ")}
        />
        <span
          className={[
            "block h-px w-6 bg-current transition-all duration-500 ease-editorial",
            open ? "-translate-y-[4px] -rotate-45" : "group-hover:w-4",
          ].join(" ")}
        />
      </button>

      <div
        aria-hidden={!open}
        className={[
          "fixed inset-0 z-60 flex flex-col overflow-y-auto bg-ink/50 text-paper backdrop-blur-2xl",
          "transition-opacity duration-500 ease-editorial",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
      >
        <div className="shell flex min-h-svh flex-col py-5 sm:py-7">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            className="font-display text-base leading-none tracking-tight sm:text-lg"
          >
            {site.name.toUpperCase()}
          </Link>

          <nav className="my-auto flex flex-col items-center gap-1 py-12 text-center sm:gap-2">
            {links.map((l, i) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className={[
                  "font-display text-[2rem] leading-[1.15] tracking-tight text-paper/70 sm:text-[2.75rem] lg:text-[3.25rem]",
                  "transition-[color,opacity,transform] duration-500 ease-editorial hover:text-paper",
                  open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
                ].join(" ")}
                activeProps={{ className: "text-accent-bronze hover:text-accent-bronze" }}
                style={{ transitionDelay: open ? `${120 + i * 45}ms` : "0ms" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-end justify-between gap-6">
            <p className="eyebrow min-w-0 text-paper/40">{site.tagline}</p>
            <a
              href={site.social.youtube}
              target="_blank"
              rel="noreferrer"
              tabIndex={open ? 0 : -1}
              className="eyebrow shrink-0 text-paper/40 transition-colors hover:text-paper"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

