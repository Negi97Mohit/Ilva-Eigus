import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import bioHero from "@/assets/portrait-1.jpg";
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
        lede="A Swiss-Latvian violinist shaped by the great teaching traditions."
        meta="Profile"
      />

      <section className="shell section-y">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <img
                src={portrait2}
                alt="Portrait of Ilva Eigus"
                className="aspect-4/5 w-full object-cover grayscale"
              />
              <p className="mt-5 border-t border-ink/10 pt-4 text-xs uppercase italic tracking-widest text-ink/40">
                Photography by Quim Vilar
              </p>
              <Link
                to="/downloads"
                className="group mt-6 inline-flex items-center gap-3 border-b border-ink/15 py-2 text-sm font-medium transition-colors hover:border-ink"
              >
                Press biography &amp; photos
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2 className="display-lg mb-10 max-w-[20ch] text-balance md:mb-14">
              A Swiss-Latvian voice shaped by the great teaching traditions.
            </h2>
            <div className="max-w-[56ch] space-y-7 text-ink/80">
              {bioParagraphs.map((p, i) => (
                <p
                  key={p.slice(0, 32)}
                  className={
                    i === 0
                      ? "lede first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-6xl first-letter:leading-[0.8] first-letter:text-ink"
                      : "lede"
                  }
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
