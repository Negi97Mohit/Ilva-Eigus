import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import pressHero from "@/assets/gallery/g7.jpg";
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
      />

      <section className="px-6 py-24 lg:px-12">
        <div className="divide-y divide-ink/10 border-t border-ink/10">
          {press.map((p) => (
            <a
              key={p.link + p.date}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="group grid gap-3 py-10 transition-colors hover:bg-ink/[0.02] md:grid-cols-12"
            >
              <div className="text-sm text-ink/50 md:col-span-2">{p.date}</div>
              <div className="eyebrow text-ink/60 md:col-span-3">
                {p.outlet}
              </div>
              <h2 className="text-balance font-display text-xl italic leading-snug md:col-span-6">
                {p.headline}
              </h2>
              <div className="text-xs uppercase tracking-widest text-ink/30 transition-colors group-hover:text-accent-bronze md:col-span-1 md:text-right">
                Read
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
