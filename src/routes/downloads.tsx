import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import portrait1 from "@/assets/portrait-1.jpg";
import portrait2 from "@/assets/portrait-2.jpg";
import portrait3 from "@/assets/portrait-3.jpg";
import heroBw from "@/assets/hero-bw.jpg";

const bios = [
  {
    label: "Biography [EN] long",
    href: "https://www.ilvaeigus.com/_files/ugd/91e900_f5b7309aa81a4c0db7e8d9cf927e73ce.pdf",
  },
  {
    label: "Biografie [DE] lang",
    href: "https://www.ilvaeigus.com/_files/ugd/91e900_5d8e831003a94c128611a70c4c8e8e56.pdf",
  },
];

const photos = [
  {
    thumb: portrait1,
    full: "https://static.wixstatic.com/media/91e900_35bb819017fb40b5b897daca71f9061e~mv2.jpg",
  },
  {
    thumb: portrait2,
    full: "https://static.wixstatic.com/media/91e900_16d9a32fbcb84c9182a28c8216373f17~mv2.jpg",
  },
  {
    thumb: portrait3,
    full: "https://static.wixstatic.com/media/91e900_a2b2007cb7be4261aa230dc2ec6c1740~mv2.jpg",
  },
  {
    thumb: heroBw,
    full: "https://static.wixstatic.com/media/91e900_423c3090b3e0432288414d5cc16ddca5~mv2.jpg",
  },
];

export const Route = createFileRoute("/downloads")({
  head: () => ({
    meta: [
      { title: "Downloads — Ilva Eigus, Violinist" },
      {
        name: "description",
        content:
          "Press material for violinist Ilva Eigus: long biographies in English and German and high-resolution photographs.",
      },
      { property: "og:title", content: "Downloads — Ilva Eigus" },
      {
        property: "og:description",
        content:
          "Press biographies in English and German plus high-resolution photographs.",
      },
    ],
  }),
  component: DownloadsPage,
});

function DownloadsPage() {
  return (
    <>
      <PageHero
        image={portrait3}
        title="Downloads"
        eyebrow="Press material"
        alt="Ilva Eigus portrait"
        lede="Biographies and high-resolution photographs for editorial use."
        meta="Press kit"
      />

      <section className="shell section-y">
        <h2 className="eyebrow text-ink/40">Biography</h2>
        <div className="mt-6 hairline">
          {bios.map((b) => (
            <a
              key={b.href}
              href={b.href}
              target="_blank"
              rel="noreferrer"
              className="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-ink/10 py-6 transition-colors hover:bg-ink/[0.025]"
            >
              <span className="min-w-0 text-balance font-display text-lg md:text-2xl">
                {b.label}
              </span>
              <span className="eyebrow shrink-0 border-b border-ink/15 pb-1 text-ink/40 transition-colors group-hover:border-accent-bronze group-hover:text-accent-bronze">
                PDF ↓
              </span>
            </a>
          ))}
        </div>

        <h2 className="eyebrow mt-20 text-ink/40 md:mt-28">Photographs</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {photos.map((p) => (
            <figure key={p.full} className="group">
              <div className="overflow-hidden bg-muted">
                <img
                  src={p.thumb}
                  alt="Ilva Eigus press photograph"
                  loading="lazy"
                  className="aspect-2/3 w-full object-cover grayscale transition-all duration-[900ms] ease-editorial group-hover:scale-[1.04] group-hover:grayscale-0"
                />
              </div>
              <figcaption className="mt-3 flex items-center justify-between gap-3 border-t border-ink/10 pt-3 text-[10px] uppercase tracking-widest text-ink/40">
                <span className="truncate">© Quim Vilar</span>
                <a
                  href={p.full}
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 text-accent-bronze transition-opacity hover:opacity-70"
                  aria-label="Download high-resolution photograph"
                >
                  ↓
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-12 max-w-[52ch] text-sm text-ink/50">
          Photographs may be used for concert promotion and editorial coverage
          provided the photographer credit is reproduced.
        </p>
      </section>
    </>
  );
}
