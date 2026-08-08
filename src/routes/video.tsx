import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import videoHero from "@/assets/video-hero.jpg";
import { videos } from "@/data/site";

export const Route = createFileRoute("/video")({
  head: () => ({
    meta: [
      { title: "Video — Ilva Eigus, Violinist" },
      {
        name: "description",
        content:
          "Filmed performances by violinist Ilva Eigus: Bruch, Mozart, Brahms, Schnittke, Ysaÿe and Prokofiev.",
      },
      { property: "og:title", content: "Video — Ilva Eigus" },
      {
        property: "og:description",
        content:
          "Filmed performances: Bruch, Mozart, Brahms, Schnittke, Ysaÿe and Prokofiev.",
      },
    ],
  }),
  component: VideoPage,
});

function VideoPage() {
  return (
    <>
      <PageHero
        image={videoHero}
        title="Video"
        eyebrow="Performances"
        alt="Ilva Eigus on stage"
        lede="Filmed concertos, recitals and chamber music."
        meta={`${videos.length} films`}
      />

      <section className="shell section-y">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:gap-x-12 lg:gap-y-20">
          {videos.map((v, i) => (
            <figure key={v.id} className="group">
              <div className="aspect-video w-full overflow-hidden bg-ink ring-1 ring-ink/10 transition-shadow duration-500 group-hover:ring-ink/25">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                  title={v.title}
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
              <figcaption className="mt-5 grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 border-t border-ink/10 pt-4">
                <div className="min-w-0">
                  <h2 className="text-balance font-display text-lg leading-snug md:text-xl">
                    {v.title}
                  </h2>
                  <p className="mt-1 font-display text-sm italic text-ink/55">
                    {v.detail}
                  </p>
                </div>
                <span className="index-num shrink-0 pt-1 text-ink/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
