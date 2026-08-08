import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 z-50 w-full px-6 py-6 mix-blend-difference lg:px-12">
        <div className="flex items-end justify-between border-b border-paper/15 pb-4">
          <Link
            to="/"
            className="font-display text-xl leading-none tracking-tighter text-paper"
          >
            {site.name.toUpperCase()}
          </Link>

          <nav className="hidden gap-8 md:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="eyebrow text-paper/70 transition-colors hover:text-paper"
                activeProps={{ className: "text-paper" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="eyebrow text-paper md:hidden"
            aria-label="Open menu"
          >
            Menu
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-60 flex flex-col bg-ink px-6 py-6 text-paper">
          <div className="flex items-end justify-between border-b border-paper/15 pb-4">
            <span className="font-display text-xl leading-none tracking-tighter">
              {site.name.toUpperCase()}
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="eyebrow"
              aria-label="Close menu"
            >
              Close
            </button>
          </div>
          <nav className="mt-16 flex flex-col gap-8">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="font-display text-4xl"
            >
              Home
            </Link>
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-display text-4xl"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
