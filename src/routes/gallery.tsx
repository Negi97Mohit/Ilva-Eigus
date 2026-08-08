import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import galleryHero from "@/assets/gallery-hero.jpg";

const images = Object.entries(
  import.meta.glob<{ default: string }>("../assets/gallery/*.jpg", {
    eager: true,
  }),
)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, mod]) => mod.default);

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
      />

      <section className="px-6 py-24 lg:px-12">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(src)}
              className="group aspect-square overflow-hidden bg-muted"
            >
              <img
                src={src}
                alt={`Ilva Eigus, photograph ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
              />
            </button>
          ))}
        </div>
      </section>

      {active && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-ink/95 p-6"
          onClick={() => setActive(null)}
          role="presentation"
        >
          <img
            src={active}
            alt="Ilva Eigus, enlarged photograph"
            className="max-h-[85svh] max-w-full object-contain"
          />
          <button
            type="button"
            onClick={() => setActive(null)}
            className="eyebrow absolute right-6 top-6 text-paper"
          >
            Close
          </button>
        </div>
      )}
    </>
  );
}
