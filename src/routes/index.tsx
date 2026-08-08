import { createFileRoute, Link } from "@tanstack/react-router";
import heroBw from "@/assets/hero-bw.jpg";
import portrait1 from "@/assets/portrait-1.jpg";
import { site, title, description } from "@/config/site";
import { concerts, bioParagraphs, press, videos } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: title() },
      { name: "description", content: description() },
      { property: "og:title", content: title() },
      { property: "og:description", content: description() },
    ],
  }),
  component: Index,
});

function Index() {
  const upcoming = concerts.slice(0, 4);
  const featured = videos.slice(0, 2);
  const latestPress = press.slice(0, 2);

  return (
    <>
      <section className="relative h-[100svh] overflow-hidden bg-ink">
        <img
          src={heroBw}
          alt="Ilva Eigus, black and white portrait with her violin"
          className="settle h-full w-full object-cover grayscale"
        />
        <div className="absolute bottom-12 left-6 lg:left-12">
          <h1 className="rise font-display text-6xl leading-none text-paper mix-blend-difference md:text-[120px]">
            {site.name}
          </h1>
          <p className="rise mt-4 font-display text-2xl italic text-paper/90 md:text-3xl">
            {site.tagline}
          </p>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-12 lg:py-48">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-24">
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <img
                src={portrait1}
                alt="Ilva Eigus photographed in Zurich"
                className="aspect-4/5 w-full object-cover grayscale"
              />
              <p className="mt-6 text-xs uppercase italic tracking-widest text-ink/40">
                Photography by Quim Vilar
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2 className="mb-12 text-balance font-display text-4xl">
              {site.heroStrapline}
            </h2>
            <div className="max-w-[48ch] space-y-8 text-pretty font-display text-lg leading-relaxed text-ink/80 md:text-xl">
              <p>{bioParagraphs[0]}</p>
              <p>{bioParagraphs[5]}</p>
              <div className="pt-8">
                <Link
                  to="/bio"
                  className="group flex w-fit items-center gap-3 border-b border-ink/10 py-2 text-sm font-medium transition-colors hover:border-ink"
                >
                  Read the full biography
                  <span className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 px-6 py-24 lg:px-12">
        <div className="mb-16">
          <h3 className="eyebrow mb-2 text-ink/40">Schedule</h3>
          <h4 className="font-display text-3xl">2025 / 26 Season</h4>
        </div>

        <div className="divide-y divide-ink/10 border-t border-ink/10">
          {upcoming.map((c) => (
            <div key={c.iso + c.venue} className="grid gap-4 py-8 md:grid-cols-4">
              <div className="text-sm text-ink/60">{c.date}</div>
              <div className="md:col-span-2">
                <div className="text-lg font-medium">{c.programme}</div>
                <div className="mt-1 text-sm text-ink/60">
                  {c.venue}, {c.city} — {c.artists}
                </div>
              </div>
              <div className="md:text-right">
                {c.link ? (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold uppercase tracking-widest text-accent-bronze hover:opacity-70"
                  >
                    Details
                  </a>
                ) : (
                  <span className="text-xs font-semibold uppercase tracking-widest text-ink/30">
                    Private
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <Link
          to="/season"
          className="mt-12 inline-block border-b border-ink/10 py-2 text-sm font-medium transition-colors hover:border-ink"
        >
          View the full season →
        </Link>
      </section>

      <section className="px-6 py-24 lg:px-12 lg:py-32">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {featured.map((v) => (
            <div key={v.id} className="space-y-6">
              <div className="aspect-video w-full overflow-hidden bg-ink">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                  title={v.title}
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
              <p className="font-display text-sm italic text-ink/60">
                {v.title} — {v.detail}
              </p>
            </div>
          ))}
        </div>
        <Link
          to="/video"
          className="mt-12 inline-block border-b border-ink/10 py-2 text-sm font-medium transition-colors hover:border-ink"
        >
          All videos →
        </Link>
      </section>

      <section className="border-t border-ink/10 px-6 py-24 lg:px-12">
        <h3 className="eyebrow mb-12 text-ink/40">Selected press</h3>
        <div className="grid gap-12 md:grid-cols-2">
          {latestPress.map((p) => (
            <blockquote key={p.link + p.date} className="space-y-4">
              <p className="text-balance font-display text-2xl italic leading-tight">
                “{p.headline}”
              </p>
              <cite className="block text-xs font-semibold uppercase not-italic tracking-widest">
                {p.outlet} / {p.date}
              </cite>
            </blockquote>
          ))}
        </div>
        <Link
          to="/press"
          className="mt-12 inline-block border-b border-ink/10 py-2 text-sm font-medium transition-colors hover:border-ink"
        >
          All press →
        </Link>
      </section>
    </>
  );
}
