# Integrated Workforce Management Platform — Alevel NEA write up

**OCR A-Level Computer Science · H446-03 · Component 3: Programming Project**  
Leo Johnston

---

## What this repository is

This repo contains the **written component of my A-Level Computer Science NEA** — the full analysis, design, development, testing, and evaluation write-up for my programming project: an integrated workforce management platform for rota scheduling, time tracking, and payroll automation.

The write-up lives in the [`content/`](./content/) folder as plain Markdown files — readable directly here on GitHub, or as a styled site via Cloudflare Pages.

---

## Reading the write-up

### Option 1 — Read on GitHub (simplest)

Browse the Markdown files directly:

| Section | File | Description |
|---|---|---|
| 01 · Analysis | [`content/analysis.md`](./content/analysis.md) | Project overview, stakeholders, MoSCoW analysis, requirements |
| 02 · Design | [`content/design.md`](./content/design.md) | System decomposition, screen designs, data storage, algorithms |
| 03 · Development | [`content/development.md`](./content/development.md) | Prototyping, 13 iterative development modules |
| 04 · Testing | [`content/testing.md`](./content/testing.md) | Alpha, functional, robustness, and usability testing |
| 05 · Evaluation | [`content/evaluation.md`](./content/evaluation.md) | Project success, limitations, future development |
| 06 · Appendices | [`content/appendices.md`](./content/appendices.md) | Testing transcript, bibliography |

Images are stored in [`public/images/`](./public/images/) and referenced with relative paths (`../public/images/`), so they render correctly both here on GitHub and in the styled site.

### Option 2 — Read as a styled site (recommended)

The same content is served as a Next.js static site on Cloudflare Pages, with a persistent sidebar, SPA-style navigation (no page reloads between sections), VS Code Dark+ syntax highlighting, and shareable deep-link URLs via `#heading-id` hashes.

👉 **[Open the write-up site](https://nea.daftscientist.dev/)**

---

## Repository structure

```
├── content/          # The write-up — one Markdown file per section
│   ├── analysis.md
│   ├── design.md
│   ├── development.md
│   ├── testing.md
│   ├── evaluation.md
│   └── appendices.md
│
├── public/
│   ├── images/       # All figures and screenshots (149 images)
│   ├── assets/       # Site assets (favicon)
│   └── _redirects    # Cloudflare Pages: / → /sections/analysis/
│
├── app/              # Next.js App Router
│   └── sections/
│       ├── layout.js # Persistent shell (sidebar + topbar, stays mounted across sections)
│       └── [slug]/   # Per-section page (just the article body)
├── components/
│   ├── SectionShell.js   # Client shell — sidebar, TOC, SPA navigation
│   └── MarkdownRenderer.js
└── lib/              # Content reader and TOC extractor (with duplicate-ID deduplication)
```

---

## Running the site locally

Only needed if you want to view the styled site locally rather than on Cloudflare Pages.

```bash
npm install
npm run dev
# Open http://localhost:3000
```

---

*Project built with Python · Sanic · React · Tailwind CSS · SQLAlchemy*
