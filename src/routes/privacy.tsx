import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import hero from "@/assets/portrait-2.jpg";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Data Protection — Ilva Eigus" },
      {
        name: "description",
        content:
          "How personal data submitted through the website of violinist Ilva Eigus is collected, used and stored.",
      },
      { property: "og:title", content: "Data Protection — Ilva Eigus" },
      {
        property: "og:description",
        content:
          "How personal data submitted through this website is collected, used and stored.",
      },
    ],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    title: "1. General",
    body: "We respect your privacy and handle your personal data with care. This website does not sell products. The only personal data collected is what you choose to share through the contact form.",
  },
  {
    title: "2. What data we collect",
    body: "If you use the contact form, you may provide your name, email address and — optionally — a phone number.",
  },
  {
    title: "3. How we use your data",
    body: "To respond if you request to be contacted by the artist, and to send a newsletter with concert updates, but only if you explicitly opt in.",
  },
  {
    title: "4. Newsletter",
    body: "The newsletter is sent using Mailchimp (Intuit Inc., USA). Your name and email are stored and processed there. Mailchimp complies with EU and Swiss data protection standards. You can unsubscribe at any time using the link in every newsletter.",
  },
  {
    title: "5. Storage period",
    body: "We keep your data until you unsubscribe or request deletion.",
  },
  {
    title: "6. Cookies",
    body: "This website uses only essential cookies required for proper functionality and security. We do not use cookies for analytics or marketing.",
  },
  {
    title: "7. Your rights",
    body: "You have the right to request access to your data, to request correction or deletion, and to withdraw your consent at any time. For such requests, please use the contact form.",
  },
  {
    title: "8. Children's data",
    body: "This website is not directed at children, and we do not knowingly collect personal data from children.",
  },
];

function PrivacyPage() {
  return (
    <>
      <PageHero
        image={hero}
        title="Data protection"
        eyebrow="Privacy"
        alt="Portrait of Ilva Eigus"
      />
      <section className="px-6 py-24 lg:px-12">
        <p className="mb-16 text-sm uppercase tracking-widest text-ink/40">
          Domicile: Switzerland
        </p>
        <div className="max-w-[56ch] divide-y divide-ink/10 border-t border-ink/10">
          {sections.map((s) => (
            <div key={s.title} className="py-8">
              <h2 className="eyebrow mb-4 text-ink/50">{s.title}</h2>
              <p className="font-display text-lg leading-relaxed text-ink/80">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
