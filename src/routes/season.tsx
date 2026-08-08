import { createFileRoute } from "@tanstack/react-router";
import seasonHero from "@/assets/portrait-3.jpg";
import { PageHero } from "@/components/PageHero";
import { concerts } from "@/data/site";

export const Route = createFileRoute("/season")({
  head: () => ({
    meta: [
      { title: "2025 / 26 Season — Ilva Eigus" },
      { name: "description", content: "Upcoming concerts and recitals." },
      { property: "og:title", content: "2025 / 26 Season — Ilva Eigus" },
      {
        property: "og:description",
        content: "Upcoming concerts and recitals.",
      },
    ],
  }),
  component: Season,
});

function Season() {
  return (
    <>
      <PageHero
        image={seasonHero}
        alt="Ilva Eigus performing on stage"
        title="2025 / 26 Season"
        eyebrow="Concerts & Recitals"
        lede="Selected upcoming performances across Europe and the United States."
        meta={`${concerts.length} dates`}
      />

      <section className="shell section-y">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <h2 className="display-md">Schedule</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/55">
              Tickets and further information are available through the venue
              links. Private and festival appearances are marked as invitation
              only.
            </p>
          </div>

          <div className="lg:col-span-9">
            <div className="border-t border-ink/10">
              {concerts.map((c) => (
                <div
                  key={c.iso + c.venue}
                  className="group grid grid-cols-1 gap-4 border-b border-ink/10 py-8 transition-colors hover:bg-sand/40 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:gap-6 md:grid-cols-12 md:items-center md:gap-8 md:px-4"
                >
                  <div className="font-display text-lg leading-none tracking-tight md:col-span-3">
                    {c.date}
                  </div>
                  <div className="min-w-0 md:col-span-6">
                    <div className="text-balance font-display text-xl sm:text-2xl">
                      {c.programme}
                    </div>
                    <div className="mt-2 text-sm leading-relaxed text-ink/55">
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
          </div>
        </div>
      </section>
    </>
  );
}
