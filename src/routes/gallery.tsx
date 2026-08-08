import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";


const images = Object.entries(
  import.meta.glob<{ default: string }>("../assets/gallery/*.jpg", {
    eager: true,
  }),
)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, mod]) => mod.default);

const galleryHero = images[3] ?? images[0] ?? "";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Ilva Eigus, Violinist" },
      {
        name: "description",
        content:
          "Concert and portrait photography of Swiss-Latvian violinist Ilva Eigus.",
      },
      { property: "og:title", content: "Gallery — Ilva Eigus" },
      {
        property: "og:description",
        content: "Concert and portrait photography of violinist Ilva Eigus.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <PageHero
        image={galleryHero}
        title="Gallery"
        eyebrow="Photography"
        alt="Ilva Eigus in performance"
        lede="Portraits and concert photography, shot on stage and off."
        meta={`${images.length} images`}
      />

      <section className="shell section-y">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(src)}
              className={[
                "group relative overflow-hidden bg-muted",
                i % 7 === 0
                  ? "col-span-2 aspect-4/3 md:col-span-2 md:row-span-2 md:aspect-square"
                  : "aspect-4/5",
              ].join(" ")}
            >
              <img
                src={src}
                alt={`Ilva Eigus, photograph ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover sepia-[8%] grayscale transition-all duration-[900ms] ease-editorial group-hover:scale-[1.04] group-hover:grayscale-0"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="index-num pointer-events-none absolute bottom-3 left-3 text-paper opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {String(i + 1).padStart(2, "0")}
              </span>
            </button>
          ))}
        </div>
      </section>

      {active && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-ink/95 p-4 backdrop-blur-xl sm:p-8"
          onClick={() => setActive(null)}
          role="presentation"
        >
          <img
            src={active}
            alt="Ilva Eigus, enlarged photograph"
            className="rise max-h-[82svh] max-w-full object-contain"
          />
          <button
            type="button"
            onClick={() => setActive(null)}
            className="eyebrow absolute right-4 top-4 rounded-full border border-paper/25 px-4 py-2 text-paper transition-colors hover:bg-paper/10 sm:right-8 sm:top-8"
          >
            Close
          </button>
        </div>
      )}
    </>
  );
}
