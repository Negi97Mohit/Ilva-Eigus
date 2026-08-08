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
      <section className="relative flex h-[100svh] flex-col justify-end overflow-hidden bg-ink">
        <img
          src={heroBw}
          alt="Ilva Eigus, black and white portrait with her violin"
          className="settle absolute inset-0 h-full w-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/30" />
        <div className="shell relative pb-12 md:pb-16">
          <h1 className="rise display-xl text-paper">{site.name}</h1>
          <div className="mt-6 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6 border-t border-paper/20 pt-5">
            <p className="rise min-w-0 font-display text-xl italic text-paper/85 md:text-2xl">
              {site.tagline}
            </p>
            <p className="index-num rise hidden shrink-0 uppercase text-paper/45 sm:block">
              2025 / 26 Season
            </p>
          </div>
        </div>
      </section>

      <section className="shell section-y">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <img
                src={portrait1}
                alt="Ilva Eigus photographed in Zurich"
                className="aspect-4/5 w-full object-cover grayscale"
              />
              <p className="mt-5 border-t border-ink/10 pt-4 text-xs uppercase italic tracking-widest text-ink/40">
                Photography by Quim Vilar
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2 className="display-lg mb-10 max-w-[20ch] text-balance md:mb-14">
              {site.heroStrapline}
            </h2>
            <div className="max-w-[52ch] space-y-7 text-ink/80">
              <p className="lede first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-6xl first-letter:leading-[0.8] first-letter:text-ink">
                {bioParagraphs[0]}
              </p>
              <p className="lede">{bioParagraphs[5]}</p>
              <div className="pt-8">
                <Link
                  to="/bio"
                  className="group flex w-fit items-center gap-3 border-b border-ink/15 py-2 text-sm font-medium transition-colors hover:border-ink"
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

      <section className="hairline shell section-y">
        <div className="mb-10 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6 md:mb-14">
          <div className="min-w-0">
            <h3 className="eyebrow mb-3 text-ink/40">Schedule</h3>
            <h4 className="display-lg">2025 / 26 Season</h4>
          </div>
          <span className="index-num hidden shrink-0 uppercase text-ink/30 sm:block">
            Next {upcoming.length}
          </span>
        </div>

        <div className="hairline">
          {upcoming.map((c) => (
            <div
              key={c.iso + c.venue}
              className="grid gap-3 border-b border-ink/10 py-7 transition-colors hover:bg-ink/[0.025] md:grid-cols-4 md:items-center md:gap-8"
            >
              <div className="font-display text-lg leading-none tracking-tight">
                {c.date}
              </div>
              <div className="min-w-0 md:col-span-2">
                <div className="text-balance font-display text-xl">
                  {c.programme}
                </div>
                <div className="mt-2 text-sm text-ink/55">
                  {c.venue}, {c.city} — {c.artists}
                </div>
              </div>
              <div className="md:text-right">
                {c.link ? (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noreferrer"
                    className="eyebrow inline-block border-b border-accent-bronze/40 pb-1 text-accent-bronze transition-colors hover:border-accent-bronze"
                  >
                    Details
                  </a>
                ) : (
                  <span className="eyebrow text-ink/25">Private</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <Link
          to="/season"
          className="mt-10 inline-block border-b border-ink/15 py-2 text-sm font-medium transition-colors hover:border-ink"
        >
          View the full season →
        </Link>
      </section>

      <section className="shell section-y">
        <h3 className="eyebrow mb-10 text-ink/40">Watch</h3>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-12">
          {featured.map((v) => (
            <figure key={v.id} className="group">
              <div className="aspect-video w-full overflow-hidden bg-ink ring-1 ring-ink/10 transition-shadow duration-500 group-hover:ring-ink/25">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                  title={v.title}
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
              <figcaption className="mt-4 border-t border-ink/10 pt-4 font-display text-sm italic text-ink/60">
                {v.title} — {v.detail}
              </figcaption>
            </figure>
          ))}
        </div>
        <Link
          to="/video"
          className="mt-10 inline-block border-b border-ink/15 py-2 text-sm font-medium transition-colors hover:border-ink"
        >
          All videos →
        </Link>
      </section>

      <section className="hairline shell section-y">
        <h3 className="eyebrow mb-10 text-ink/40">Selected press</h3>
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          {latestPress.map((p) => (
            <blockquote key={p.link + p.date} className="space-y-4">
              <p className="text-balance font-display text-2xl italic leading-tight md:text-3xl">
                “{p.headline}”
              </p>
              <cite className="eyebrow block not-italic text-ink/50">
                {p.outlet} / {p.date}
              </cite>
            </blockquote>
          ))}
        </div>
        <Link
          to="/press"
          className="mt-10 inline-block border-b border-ink/15 py-2 text-sm font-medium transition-colors hover:border-ink"
        >
          All press →
        </Link>
      </section>
    </>
  );
}
