import { createFileRoute } from "@tanstack/react-router";
import downloadsHero from "@/assets/portrait-2.jpg";
import { PageHero } from "@/components/PageHero";
import { downloadsList, type DownloadItem } from "@/data/site";
import { FileText, Image, Music } from "lucide-react";

const iconMap: Record<DownloadItem["type"], typeof FileText> = {
  pdf: FileText,
  image: Image,
  audio: Music,
};

export const Route = createFileRoute("/downloads")({
  head: () => ({
    meta: [
      { title: "Downloads — Ilva Eigus" },
      {
        name: "description",
        content:
          "Download press photos, biography, repertoire and technical rider.",
      },
      { property: "og:title", content: "Downloads — Ilva Eigus" },
      {
        property: "og:description",
        content:
          "Download press photos, biography, repertoire and technical rider.",
      },
    ],
  }),
  component: Downloads,
});

function Downloads() {
  return (
    <>
      <PageHero
        image={downloadsHero}
        alt="Ilva Eigus, black and white portrait"
        title="Downloads"
        eyebrow="Press kit"
        lede="High-resolution press photos, biography, repertoire and technical rider for promoters and journalists."
      />

      <section className="shell section-y">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <h2 className="display-md">Press kit</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/55">
              All files are provided for editorial and promotional use.
              Please credit the photographer where noted.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-9 lg:grid-cols-3">
            {downloadsList.map((d) => {
              const Icon = iconMap[d.type];
              return (
                <a
                  key={d.label}
                  href={d.href}
                  download
                  className="group flex flex-col justify-between border border-ink/10 bg-paper p-6 transition-all duration-300 hover:border-accent-bronze hover:bg-sand/30 hover:shadow-sm"
                >
                  <div className="flex items-start justify-between">
                    <Icon
                      className="h-6 w-6 text-accent-bronze transition-colors"
                      strokeWidth={1.5}
                    />
                    <span className="eyebrow text-ink/30">{d.meta}</span>
                  </div>
                  <div className="mt-8">
                    <h3 className="font-display text-xl leading-tight">
                      {d.label}
                    </h3>
                    <p className="mt-2 text-sm text-ink/55">{d.description}</p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-ink/70 transition-colors group-hover:text-ink">
                    Download
                    <span className="transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
