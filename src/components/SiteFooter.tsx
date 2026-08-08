import { Link } from "@tanstack/react-router";
import { site } from "@/config/site";
import { supporters } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 px-6 py-20 lg:px-12">
      <div className="grid gap-16 lg:grid-cols-3">
        <div>
          <h2 className="font-display text-3xl leading-none tracking-tighter">
            {site.name}
          </h2>
          <p className="mt-4 font-display text-lg italic text-ink/60">
            {site.tagline}
          </p>
        </div>

        <div>
          <h3 className="eyebrow text-ink/40">Navigate</h3>
          <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
            <Link to="/bio" className="rule-link w-fit">
              Biography
            </Link>
            <Link to="/season" className="rule-link w-fit">
              Season
            </Link>
            <Link to="/video" className="rule-link w-fit">
              Video
            </Link>
            <Link to="/gallery" className="rule-link w-fit">
              Gallery
            </Link>
            <Link to="/press" className="rule-link w-fit">
              Press
            </Link>
            <Link to="/downloads" className="rule-link w-fit">
              Downloads
            </Link>
            <Link to="/contact" className="rule-link w-fit">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h3 className="eyebrow text-ink/40">Supported by</h3>
          <div className="mt-6 flex flex-col gap-3 text-sm text-ink/60">
            {supporters.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="rule-link w-fit"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-24 flex flex-col gap-4 border-t border-ink/10 pt-8 text-[10px] uppercase tracking-widest text-ink/40 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <div className="flex gap-6">
          <a
            href={site.social.youtube}
            target="_blank"
            rel="noreferrer"
          >
            YouTube
          </a>
          <Link to="/impressum">Impressum</Link>
          <Link to="/privacy">Data protection</Link>
        </div>
      </div>
    </footer>
  );
}
