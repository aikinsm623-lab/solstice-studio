# Solstice Studio

A flagship portfolio website for a fictional residential architecture
practice built around one idea: **light is the medium.** Solstice Studio
designs homes around solar orientation and seasonal light rather than
treating light as decoration — see [`docs/PROJECT_MEMORY.md`](docs/PROJECT_MEMORY.md)
for the fictional-brand disclosure.

This project was built to demonstrate premium, interactive, 3D-capable web
development — not for or on behalf of a real business.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 (`@theme` design tokens)
- React Three Fiber / Three.js / Drei — the homepage's interactive light
  study
- GSAP (installed, available for future scroll-driven work)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint    # ESLint
npm run build   # production build
npm run start   # serve the production build locally
```

## Project structure

```
app/                  routes (home, projects index + detail, studio, contact)
components/
  home/                homepage sections
  layout/              nav, footer
  three/               the 3D light study (scene, massing model, sun rig, fallback)
  ui/                   shared interactive UI (time control, contact form)
lib/
  solar.ts             simplified solar-position model
  projects.ts          fictional project data
docs/
  DESIGN_SYSTEM.md      palette, type, layout, motion system
  KNOWN_LIMITATIONS.md  honest list of what's provisional or unfinished
  PROJECT_MEMORY.md     fictional-brand disclosure, architecture summary
```

## Known limitations

See [`docs/KNOWN_LIMITATIONS.md`](docs/KNOWN_LIMITATIONS.md) for the full,
honest list — in short: fonts are provisional system-stack fallbacks (no
Google Fonts CDN access in the build sandbox this was built in), the solar
model is simplified rather than astronomically accurate, the contact form
hands off to a `mailto:` link rather than a real backend, and pixel-level
visual QA has not yet been performed against a real rendered preview.
