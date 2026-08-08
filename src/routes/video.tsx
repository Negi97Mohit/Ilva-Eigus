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
      />

      <section className="px-6 py-24 lg:px-12">
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
          {videos.map((v) => (
            <div key={v.id} className="space-y-6">
              <div className="aspect-video w-full overflow-hidden bg-ink">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                  title={v.title}
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
              <div>
                <h2 className="font-display text-lg">{v.title}</h2>
                <p className="mt-1 font-display text-sm italic text-ink/60">
                  {v.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
