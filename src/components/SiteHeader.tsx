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
  const [peek, setPeek] = useState(false);
  const lastY = useRef(0);

  /* Auto-hide on scroll down, reveal on scroll up. */
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

  /* Pointer near the left edge brings the rail back. */
  useEffect(() => {
    const onMove = (e: PointerEvent) => setPeek(e.clientX < 90);
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
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

  const away = hidden && !peek && !open;
  const initials = site.name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <>
      {/* Vertical rail — desktop */}
      <aside
        className={[
          "fixed left-0 top-0 z-50 hidden h-svh w-[76px] flex-col items-center justify-between",
          "border-r border-paper/10 bg-ink/85 py-7 text-paper backdrop-blur-xl",
          "transition-transform duration-700 ease-editorial md:flex",
          away ? "-translate-x-full" : "translate-x-0",
        ].join(" ")}
      >
        <Link
          to="/"
          aria-label={site.name}
          className="font-display text-lg leading-none tracking-tighter transition-colors hover:text-accent-bronze"
        >
          {initials}
        </Link>

        <nav className="flex flex-1 flex-col items-center justify-center gap-4">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="eyebrow relative flex items-center justify-center px-2 py-3 text-paper/45 transition-colors duration-300 hover:text-paper"
              activeProps={{ className: "text-paper" }}
              style={{ writingMode: "vertical-rl" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <span
          className="index-num uppercase text-paper/30"
          style={{ writingMode: "vertical-rl" }}
        >
          {site.tagline}
        </span>
      </aside>

      {/* Mobile bar */}
      <header
        className={[
          "fixed left-0 top-0 z-50 flex w-full items-center justify-between",
          "border-b border-paper/10 bg-ink/85 px-5 py-3 text-paper backdrop-blur-xl",
          "transition-transform duration-500 ease-editorial md:hidden",
          hidden && !open ? "-translate-y-full" : "translate-y-0",
        ].join(" ")}
      >
        <Link to="/" className="font-display text-lg leading-none tracking-tighter">
          {site.name.toUpperCase()}
        </Link>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group -mr-1 flex h-9 w-9 flex-col items-end justify-center gap-[5px]"
          aria-label="Open menu"
        >
          <span className="block h-px w-6 bg-current transition-all duration-300" />
          <span className="block h-px w-4 bg-current transition-all duration-300 group-hover:w-6" />
        </button>
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
            {links.map((l, i) => (
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
