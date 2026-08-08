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
      <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-paper pb-8 md:pb-16">
        {/* Soft background texture */}
        <div className="absolute -left-20 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-sand opacity-50 blur-3xl" />

        <div className="shell relative grid flex-1 grid-cols-1 items-center gap-0 pt-28 md:grid-cols-12 md:pt-0">
          <div className="relative z-10 md:col-span-7 md:-mr-24">
            <h1 className="font-display leading-[0.8] text-ink">
              <span className="display-hero block font-light">
                {site.name.split(" ")[0]}
              </span>
              <span className="display-hero block italic md:ml-[18%]">
                {site.name.split(" ").slice(1).join(" ")}
              </span>
            </h1>

            <div className="mt-10 flex items-center gap-5 md:mt-14">
              <div className="h-px w-12 bg-accent-bronze" />
              <span className="eyebrow text-ink/80 italic">{site.tagline}</span>
            </div>
          </div>

          <div className="relative mt-12 md:col-span-5 md:mt-0">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-sand shadow-2xl">
              <img
                src={heroBw}
                alt="Ilva Eigus, portrait with her violin"
                className="h-full w-full object-cover sepia-[10%] contrast-105 grayscale transition-all duration-700 hover:grayscale-0"
              />
              <div className="pointer-events-none absolute inset-4 border border-paper/20" />
            </div>

            <div className="absolute -right-6 bottom-12 hidden lg:block">
              <span className="index-num -rotate-90 origin-right whitespace-nowrap text-accent-bronze">
                2025 / 26 Season
              </span>
            </div>
          </div>
        </div>

        <div className="shell mt-8 flex items-end border-t border-ink/10 pt-5 md:mt-12">
          <p className="eyebrow text-ink/50">2025 / 26 Season</p>
        </div>
      </section>

      <section className="shell section-y">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <img
                src={portrait1}
                alt="Ilva Eigus photographed in Zurich"
                className="aspect-4/5 w-full object-cover sepia-[8%] grayscale"
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
                <Link to="/bio" className="link-detail">
                  Read the full biography
                  <span className="link-arrow">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shell section-y bg-sand/30">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <h3 className="eyebrow mb-3 text-ink/40">Schedule</h3>
            <h4 className="display-lg">2025 / 26 Season</h4>
            <p className="mt-4 text-sm leading-relaxed text-ink/60">
              Selected upcoming performances across Europe and the United
              States.
            </p>
          </div>

          <div className="lg:col-span-9">
            <div className="border-t border-ink/10">
              {upcoming.map((c) => (
                <div
                  key={c.iso + c.venue}
                  className="group grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-6 gap-y-3 border-b border-ink/10 py-7 transition-colors hover:bg-paper md:grid-cols-12 md:items-center md:gap-8 md:px-4"
                >
                  <div className="font-display text-lg leading-none tracking-tight md:col-span-3">
                    {c.date}
                  </div>
                  <div className="min-w-0 md:col-span-6">
                    <div className="text-balance font-display text-xl">
                      {c.programme}
                    </div>
                    <div className="mt-2 text-sm text-ink/55">
                      {c.venue}, {c.city} — {c.artists}
                    </div>
                  </div>
                  <div className="md:col-span-3 md:text-right">
                    {c.link ? (
                      <a
                        href={c.link}
                        target="_blank"
                        rel="noreferrer"
                        className="link-detail"
                      >
                        Details
                        <span className="link-arrow">→</span>
                      </a>
                    ) : (
                      <span className="eyebrow text-ink/25">Private</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <Link to="/season" className="link-detail mt-10">
              View the full season
              <span className="link-arrow">→</span>
            </Link>
          </div>
        </div>
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
        <Link to="/video" className="link-detail mt-10">
          All videos
          <span className="link-arrow">→</span>
        </Link>
      </section>

      <section className="shell section-y bg-sand/30">
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
        <Link to="/press" className="link-detail mt-10">
          All press
          <span className="link-arrow">→</span>
        </Link>
      </section>
    </>
  );
}
