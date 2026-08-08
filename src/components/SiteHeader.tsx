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
          "group fixed right-5 top-5 z-70 flex h-12 w-12 flex-col items-center justify-center gap-[6px]",
          "rounded-full border border-paper/25 bg-ink/40 text-paper backdrop-blur-md",
          "transition-[transform,opacity,background-color] duration-500 ease-editorial",
          "hover:bg-ink/70 sm:right-8 sm:top-8",
          hidden && !open ? "-translate-y-24 opacity-0" : "translate-y-0 opacity-100",
        ].join(" ")}
      >
        <span
          className={[
            "block h-px w-5 bg-current transition-transform duration-400 ease-editorial",
            open ? "translate-y-[3.5px] rotate-45" : "",
          ].join(" ")}
        />
        <span
          className={[
            "block h-px w-5 bg-current transition-transform duration-400 ease-editorial",
            open ? "-translate-y-[3.5px] -rotate-45" : "",
          ].join(" ")}
        />
      </button>

      {open && (
        <div className="fixed inset-0 z-60 flex flex-col overflow-y-auto bg-ink/45 text-paper backdrop-blur-2xl">
          <div className="shell flex min-h-svh flex-col py-6 sm:py-8">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="font-display text-lg leading-none tracking-tighter sm:text-xl"
            >
              {site.name.toUpperCase()}
            </Link>

            <nav className="my-auto flex flex-col py-10">
              {links.map((l, i) => (
                <Link
                  key={l.to}
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  onClick={() => setOpen(false)}
                  className="rise group flex items-baseline justify-between gap-6 border-b border-paper/15 py-4 font-display text-4xl tracking-tight transition-colors hover:text-accent-bronze sm:text-5xl lg:text-6xl"
                  activeProps={{ className: "text-accent-bronze" }}
                  style={{
                    animationDelay: `${i * 45}ms`,
                    animationDuration: "600ms",
                  }}
                >
                  <span className="flex items-baseline gap-5">
                    <span className="index-num text-paper/35">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {l.label}
                  </span>
                  <span className="text-base opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    →
                  </span>
                </Link>
              ))}
            </nav>

            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6">
              <p className="eyebrow min-w-0 text-paper/40">{site.tagline}</p>
              <a
                href={site.social.youtube}
                target="_blank"
                rel="noreferrer"
                className="eyebrow shrink-0 text-paper/40 transition-colors hover:text-paper"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
