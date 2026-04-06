# Integrated Workforce Management Platform — NEA Write-up

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

Images referenced throughout are in [`public/images/`](./public/images/).

### Option 2 — Read as a styled site (recommended)

The same content is served as a Next.js static site on Cloudflare Pages, with a sticky table of contents, VS Code Dark+ syntax highlighting, and proper image/table rendering.

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
│   └── images/       # All figures and screenshots from the write-up (149 images)
│
├── app/              # Next.js App Router — the site that renders content/
├── components/       # React components (SectionView, MarkdownRenderer)
└── lib/              # Content reader and TOC extractor
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
