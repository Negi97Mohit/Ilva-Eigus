import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import hero from "@/assets/portrait-1.jpg";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum — Ilva Eigus" },
      {
        name: "description",
        content:
          "Legal notice and responsible party for the website of violinist Ilva Eigus.",
      },
      { property: "og:title", content: "Impressum — Ilva Eigus" },
      {
        property: "og:description",
        content: "Legal notice for the website of violinist Ilva Eigus.",
      },
    ],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <>
      <PageHero
        image={hero}
        title="Impressum"
        eyebrow="Legal notice"
        alt="Portrait of Ilva Eigus"
      />
      <section className="px-6 py-24 lg:px-12">
        <div className="max-w-[52ch] space-y-8 font-display text-lg leading-relaxed text-ink/80">
          <p>
            Website: <span className="text-ink">www.ilvaeigus.com</span>
          </p>
          <div>
            <p className="eyebrow mb-4 font-ui text-ink/40">
              Responsible for content
            </p>
            <address className="not-italic">
              Ilva Eigus
              <br />
              c/o Nik Bärtsch
              <br />
              Toblerplatz 5<br />
              CH – 8044 Zürich
              <br />
              Switzerland
            </address>
          </div>
          <p>
            Email:{" "}
            <a href="mailto:contact@ilvaeigus.com" className="rule-link">
              contact@ilvaeigus.com
            </a>
          </p>
          <p className="text-sm text-ink/50">
            All photographs on this site remain the property of their
            respective photographers and may not be reproduced without credit.
          </p>
        </div>
      </section>
    </>
  );
}
