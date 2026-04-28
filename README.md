# Portfolio Site

Vue.js single-page portfolio/resume site. Content is edited in one place: **`src/data/siteContent.js`**.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Edit content

Open **`src/data/siteContent.js`** and change:

- **hero** — name, title, tagline, CTA, optional avatar path
- **about** — summary paragraphs, location, availability
- **skills** — grouped skill categories and items
- **experience** — jobs (company, role, dates, bullets, optional URL)
- **projects** — name, type (`webapp` | `embedded` | `migration`), role, description, tech, outcome, links
- **education** — institution, degree, years, notes
- **contact** — email, phone, location, link list (e.g. LinkedIn, GitHub)
- **site** — page title, footer text

No need to touch components unless you want to change layout or behaviour.

## Build for production

```bash
npm run build
```

Output is in `dist/`. Deploy that folder to any static host.

## Optional: add a profile photo

1. Put your image in `public/` (e.g. `public/avatar.jpg`).
2. In `siteContent.js`, set `hero.avatar` to `'/avatar.jpg'`.
