import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import pressHero from "../assets/gallery/g7.jpg";
import { press } from "@/data/site";

export const Route = createFileRoute("/press")({
  head: () => ({
    meta: [
      { title: "Press — Ilva Eigus, Violinist" },
      {
        name: "description",
        content:
          "Press coverage of violinist Ilva Eigus in COTE Magazine, Blick, SRF, Pforzheimer Zeitung and more.",
      },
      { property: "og:title", content: "Press — Ilva Eigus" },
      {
        property: "og:description",
        content:
          "Press coverage in COTE Magazine, Blick, SRF, Pforzheimer Zeitung and more.",
      },
    ],
  }),
  component: PressPage,
});

function PressPage() {
  return (
    <>
      <PageHero
        image={pressHero}
        title="Press"
        eyebrow="Media coverage"
        alt="Ilva Eigus performing on stage"
        lede="Selected features, reviews and broadcasts."
        meta={`${press.length} clippings`}
      />

      <section className="shell section-y">
        <div className="hairline">
          {press.map((p, i) => (
            <a
              key={p.link + p.date}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="group grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-6 gap-y-3 border-b border-ink/10 py-7 transition-colors hover:bg-ink/[0.025] md:grid-cols-12 md:items-center md:gap-8 md:py-9"
            >
              <div className="min-w-0 md:col-span-3">
                <div className="eyebrow text-ink/60">{p.outlet}</div>
                <div className="mt-2 text-sm text-ink/40">{p.date}</div>
              </div>
              <div className="index-num text-ink/25 md:hidden">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h2 className="col-span-2 text-balance font-display text-xl italic leading-snug transition-colors group-hover:text-accent-bronze md:col-span-8 md:text-2xl">
                {p.headline}
              </h2>
              <div className="col-span-2 md:col-span-1 md:text-right">
                <span className="link-detail">
                  Read
                  <span className="link-arrow">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
