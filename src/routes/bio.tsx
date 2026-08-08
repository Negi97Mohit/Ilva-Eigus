import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import bioHero from "@/assets/bio-hero.jpg";
import portrait2 from "@/assets/portrait-2.jpg";
import { bioParagraphs } from "@/data/site";

export const Route = createFileRoute("/bio")({
  head: () => ({
    meta: [
      { title: "Biography — Ilva Eigus, Violinist" },
      {
        name: "description",
        content:
          "Biography of Swiss-Latvian violinist Ilva Eigus: studies with Zakhar Bron and Marc Bouchkov, orchestral debuts, prizes and her 1707 Omobono Stradivari.",
      },
      { property: "og:title", content: "Biography — Ilva Eigus" },
      {
        property: "og:description",
        content:
          "Swiss-Latvian violinist Ilva Eigus: studies, debuts, prizes and her 1707 Omobono Stradivari.",
      },
    ],
  }),
  component: BioPage,
});

function BioPage() {
  return (
    <>
      <PageHero
        image={bioHero}
        title="Biography"
        eyebrow="The artist"
        alt="Ilva Eigus performing"
      />

      <section className="px-6 py-24 lg:px-12 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-24">
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <img
                src={portrait2}
                alt="Portrait of Ilva Eigus"
                className="aspect-4/5 w-full object-cover grayscale"
              />
              <p className="mt-6 text-xs uppercase italic tracking-widest text-ink/40">
                Photography by Quim Vilar
              </p>
              <Link
                to="/downloads"
                className="mt-8 inline-block border-b border-ink/10 py-2 text-sm font-medium transition-colors hover:border-ink"
              >
                Press biography & photos →
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2 className="mb-12 max-w-[24ch] text-balance font-display text-4xl">
              A Swiss-Latvian voice shaped by the great teaching traditions.
            </h2>
            <div className="max-w-[52ch] space-y-8 text-pretty font-display text-lg leading-relaxed text-ink/80 md:text-xl">
              {bioParagraphs.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
