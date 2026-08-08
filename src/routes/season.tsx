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
      />

      <section className="px-6 py-24 lg:px-12">
        <div className="divide-y divide-ink/10 border-t border-ink/10">
          {concerts.map((c) => (
            <article
              key={c.iso + c.venue}
              className="grid gap-4 py-10 transition-colors hover:bg-ink/[0.02] md:grid-cols-12"
            >
              <div className="text-sm tracking-tight text-ink/60 md:col-span-2">
                {c.date}
              </div>
              <div className="eyebrow text-ink/50 md:col-span-2">{c.city}</div>
              <div className="md:col-span-5">
                <h2 className="font-display text-xl leading-snug">
                  {c.programme}
                </h2>
                <p className="mt-2 text-sm text-ink/60">{c.artists}</p>
              </div>
              <div className="text-sm text-ink/60 md:col-span-2">{c.venue}</div>
              <div className="md:col-span-1 md:text-right">
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
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
