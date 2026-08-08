import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import contactHero from "@/assets/portrait-2.jpg";
import { supporters } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ilva Eigus, Violinist" },
      {
        name: "description",
        content:
          "Get in touch with violinist Ilva Eigus for concert bookings, press enquiries and collaborations.",
      },
      { property: "og:title", content: "Contact — Ilva Eigus" },
      {
        property: "og:description",
        content:
          "Concert bookings, press enquiries and collaborations with violinist Ilva Eigus.",
      },
    ],
  }),
  component: ContactPage,
});

const EMAIL = "contact@ilvaeigus.com";

function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    newsletter: false,
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [
      `Name: ${form.firstName} ${form.lastName}`.trim(),
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : "",
      form.newsletter ? "Please subscribe me to the newsletter." : "",
      "",
      form.message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      "Website enquiry",
    )}&body=${encodeURIComponent(body)}`;
  };

  const field =
    "w-full border-b border-ink/15 bg-transparent pb-2 text-sm outline-none transition-colors placeholder:text-ink/25 focus:border-ink";

  return (
    <>
      <section className="bg-ink text-paper">
        <div className="shell grid items-center gap-10 py-16 md:grid-cols-12 md:gap-16 md:py-24">
          <div className="md:col-span-7">
            <p className="eyebrow rise mb-5 text-paper/50">Contact</p>
            <h1 className="rise display-xl text-balance">Get in touch</h1>
            <p className="rise lede mt-8 max-w-[46ch] text-paper/70">
              Bookings, press requests and general enquiries.
            </p>
            <div className="mt-10 grid gap-6 border-t border-paper/15 pt-6 sm:grid-cols-2">
              <div>
                <p className="eyebrow mb-2 text-paper/40">Email</p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-sm text-paper/85 underline-offset-4 hover:underline"
                >
                  {EMAIL}
                </a>
              </div>
              <div>
                <p className="eyebrow mb-2 text-paper/40">Based in</p>
                <p className="text-sm text-paper/85">Zürich, Switzerland</p>
              </div>
            </div>
          </div>

          <figure className="md:col-span-5">
            <div className="mx-auto w-full max-w-[420px] overflow-hidden border border-paper/10 bg-paper/5">
              <img
                src={contactHero}
                alt="Portrait of Ilva Eigus"
                className="settle block h-auto w-full object-contain grayscale"
              />
            </div>
            <figcaption className="mt-4 text-center text-xs uppercase italic tracking-widest text-paper/35">
              Enquiries
            </figcaption>
          </figure>
        </div>
      </section>


      <section className="shell section-y grid gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-7">
          <h2 className="eyebrow text-ink/40">Enquiries</h2>
          <form onSubmit={onSubmit} className="mt-10 space-y-8">
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-[10px] uppercase tracking-widest text-ink/40">
                  First name*
                </label>
                <input
                  required
                  className={field}
                  value={form.firstName}
                  onChange={(e) =>
                    setForm({ ...form, firstName: e.target.value })
                  }
                  placeholder="Your first name"
                />
              </div>
              <div>
                <label className="mb-2 block text-[10px] uppercase tracking-widest text-ink/40">
                  Last name
                </label>
                <input
                  className={field}
                  value={form.lastName}
                  onChange={(e) =>
                    setForm({ ...form, lastName: e.target.value })
                  }
                  placeholder="Your last name"
                />
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-[10px] uppercase tracking-widest text-ink/40">
                  Email*
                </label>
                <input
                  required
                  type="email"
                  className={field}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="mb-2 block text-[10px] uppercase tracking-widest text-ink/40">
                  Phone
                </label>
                <input
                  className={field}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="Optional"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-[10px] uppercase tracking-widest text-ink/40">
                Message
              </label>
              <textarea
                rows={4}
                className={`${field} resize-none`}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Enquiry details"
              />
            </div>

            <label className="flex items-center gap-3 text-sm text-ink/60">
              <input
                type="checkbox"
                checked={form.newsletter}
                onChange={(e) =>
                  setForm({ ...form, newsletter: e.target.checked })
                }
                className="size-4 accent-[oklch(0.5595_0.0425_70)]"
              />
              Yes, subscribe me to the newsletter.
            </label>

            <button
              type="submit"
              className="w-full border border-ink py-4 text-[11px] font-semibold uppercase tracking-[0.3em] transition-colors duration-500 hover:bg-ink hover:text-paper"
            >
              Send message
            </button>
          </form>
        </div>

        <div className="lg:col-span-5">
          <h2 className="eyebrow text-ink/40">Direct</h2>
          <div className="mt-8 space-y-8 border-t border-ink/10 pt-8 text-sm">
            <div>
              <p className="eyebrow mb-2 text-ink">Email</p>
              <a href={`mailto:${EMAIL}`} className="rule-link text-ink/70">
                {EMAIL}
              </a>
            </div>
            <div>
              <p className="eyebrow mb-2 text-ink">Post</p>
              <address className="not-italic leading-relaxed text-ink/70">
                Ilva Eigus
                <br />
                c/o Nik Bärtsch
                <br />
                Toblerplatz 5<br />
                CH – 8044 Zürich, Switzerland
              </address>
            </div>
            <div>
              <p className="eyebrow mb-2 text-ink">Channels</p>
              <a
                href="https://www.youtube.com/channel/UCQZC5LGoXDzOHntApz6IcYg"
                target="_blank"
                rel="noreferrer"
                className="rule-link text-ink/70"
              >
                YouTube
              </a>
            </div>
          </div>

          <div className="mt-16 border-t border-ink/10 pt-10 md:mt-24">
            <h3 className="eyebrow mb-6 text-ink/40">Supported by</h3>
            <div className="flex flex-wrap gap-x-10 gap-y-4 text-xs font-semibold uppercase tracking-tight text-ink/40">
              {supporters.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-ink"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
