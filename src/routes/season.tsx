import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import seasonHero from "@/assets/portrait-3.jpg";
import { concerts } from "@/data/site";

export const Route = createFileRoute("/season")({
  head: () => ({
    meta: [
      { title: "2025/26 Season — Ilva Eigus" },
      {
        name: "description",
        content:
          "Upcoming concerts of violinist Ilva Eigus: Tonhalle Zurich, Schloss Nymphenburg, Spartanburg Philharmonic and more.",
      },
      { property: "og:title", content: "2025/26 Season — Ilva Eigus" },
      {
        property: "og:description",
        content:
          "Upcoming concerts of violinist Ilva Eigus across Switzerland, Germany, Italy and the USA.",
      },
    ],
  }),
  component: SeasonPage,
});

function SeasonPage() {
  return (
    <>
      <PageHero
        image={seasonHero}
        title="2025 / 26 Season"
        eyebrow="Schedule"
        alt="Ilva Eigus with her violin"
        lede="Concert dates across Switzerland, Germany, Italy and the United States."
        meta={`${concerts.length} dates`}
      />

      <section className="shell section-y">
        <div className="hairline">
          {concerts.map((c, i) => (
            <article
              key={c.iso + c.venue}
              className="group grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-6 gap-y-3 border-b border-ink/10 py-7 transition-colors hover:bg-ink/[0.025] md:grid-cols-12 md:items-center md:gap-8 md:py-9"
            >
              <div className="min-w-0 md:col-span-2">
                <div className="font-display text-lg leading-none tracking-tight md:text-xl">
                  {c.date}
                </div>
                <div className="eyebrow mt-2 text-ink/40">{c.city}</div>
              </div>

              <div className="index-num self-start text-ink/25 md:hidden">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="col-span-2 min-w-0 md:col-span-6">
                <h2 className="text-balance font-display text-xl leading-snug md:text-2xl">
                  {c.programme}
                </h2>
                <p className="mt-2 text-sm text-ink/55">{c.artists}</p>
                <p className="mt-1 text-sm text-ink/40 md:hidden">{c.venue}</p>
              </div>

              <div className="hidden text-sm text-ink/55 md:col-span-3 md:block">
                {c.venue}
              </div>

              <div className="col-span-2 md:col-span-1 md:text-right">
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
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
