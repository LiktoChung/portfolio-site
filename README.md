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
- **site** — page title, footer text, footer contact details (`footerContact`)

No need to touch components unless you want to change layout or behaviour.

## Build for production

```bash
npm run build
```

Output is in `dist/`. Deploy that folder to any static host.

## Optional: add a profile photo

1. Put your image in `public/` (e.g. `public/avatar.jpg`).
2. In `siteContent.js`, set `hero.avatar` to `'/avatar.jpg'`.

## Docker deploy (Ubuntu + likto.uk)

This repo includes a production Docker setup using Caddy (HTTPS handled automatically via Let's Encrypt).

### 1) DNS

At your domain provider, set:

- `A` record `@` -> your Ubuntu server public IP
- `A` record `www` -> your Ubuntu server public IP

### 2) Open firewall ports on Ubuntu

```bash
sudo ufw allow 80
sudo ufw allow 443
sudo ufw enable
```

### 3) Start the stack

From the project root on your Ubuntu server:

```bash
docker compose up -d --build
```

### 4) Verify

- https://likto.uk
- https://www.likto.uk

### Notes

- If another service already uses ports `80/443` (for example host Nginx/Apache), stop it or move it.
- Caddy certificate data is persisted in Docker volumes (`caddy_data`, `caddy_config`).

## Updating after changes

### Standard flow (Docker Compose v2)

Use this for normal updates after you push new commits:

```bash
git pull
docker compose up -d --build
```

### Legacy fallback (older docker-compose v1)

If your server still uses `docker-compose` v1 and hits recreate errors, use:

```bash
git pull
docker-compose build portfolio
docker-compose rm -sf portfolio
docker-compose up -d portfolio
```

### Useful checks

```bash
docker compose ps
docker compose logs -f portfolio
```
