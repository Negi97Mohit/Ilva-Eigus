# Artist Portfolio — Lovable Remix

A clean, editorial portfolio website for a solo artist or performer. Originally built for a classical violinist, now refactored as a reusable template you can rebrand for any musician, performer, or creative.

## Quick customization

The most important file is `src/config/site.ts`. Change these values to make the site yours:

- `name` — artist or project name (titles, headings, copyright)
- `tagline` — short descriptor under the name
- `description` — default meta description for SEO
- `heroStrapline` — the pull-quote on the homepage
- `social.youtube` — YouTube channel link

## Content files

All editable content lives in `src/data/site.ts`:

- `concerts` — upcoming concerts / events / tour dates
- `videos` — YouTube embed IDs
- `press` — press quotes and links
- `supporters` — partners, sponsors, or institutions
- `bioParagraphs` — full biography text

## Pages

| Route | File | Purpose |
| --- | --- | --- |
| `/` | `src/routes/index.tsx` | Homepage with hero, bio teaser, schedule, videos, press |
| `/bio` | `src/routes/bio.tsx` | Full biography |
| `/season` | `src/routes/season.tsx` | Concert calendar |
| `/video` | `src/routes/video.tsx` | Video gallery |
| `/gallery` | `src/routes/gallery.tsx` | Photo gallery (auto-loads `src/assets/gallery/*.jpg`) |
| `/press` | `src/routes/press.tsx` | Press coverage |
| `/downloads` | `src/routes/downloads.tsx` | Press kit downloads |
| `/contact` | `src/routes/contact.tsx` | Contact form |
| `/impressum` | `src/routes/impressum.tsx` | Legal notice |
| `/privacy` | `src/routes/privacy.tsx` | Data protection |

## Design tokens

The visual style is defined in `src/styles.css` using Tailwind CSS v4:

- **Paper / Ink** — warm off-white background and near-black text
- **Bronze accent** — used for links and CTAs
- **Fonts** — Playfair Display (display) and Instrument Sans (UI)

To change colors or fonts, edit the CSS variables in `src/styles.css`.

## Development

```sh
bun install
bun run dev
```

Built with TanStack Start, React, TypeScript, and Tailwind CSS.
