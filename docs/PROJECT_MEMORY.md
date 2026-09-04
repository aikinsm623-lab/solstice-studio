# Project Memory — Solstice Studio

## What this is

**Solstice Studio is entirely fictional.** It was built as a flagship
portfolio piece for a one-person digital studio to show prospective
clients — not a real architecture firm, and not built for or on behalf of
one. Every project, person, location, and detail on the site is invented:

- The firm ("Solstice Studio"), its founding story, and its three named
  staff (Mara Odell, Theo Bram, Priya Nair) do not exist.
- The four projects (Ridge House, Cannery Row House, Fir Grove Residence,
  Lowland Farmhouse) are not real built work, do not correspond to any real
  address, and are not associated with any real client.
- No statistics, awards, or claims on the site should be treated as real
  ("14 homes completed", "est. 2016", etc. are invented scene-setting, not
  facts about an actual business).
- Contact details (`studio@solsticestudio.example`, `503 555 0148`) use the
  reserved `.example` domain and a non-working placeholder phone number
  specifically so they can't be mistaken for real contact information.

This file exists so that anyone — including a future Claude session working
on this project — immediately understands the fictional status before
doing anything with the content (e.g. before ever considering publishing
it somewhere it could be mistaken for a real business).

## Origin

Built in response to a request for a flagship portfolio website
demonstrating premium interactive/3D web design capability. Direction
(architecture studio built around solar orientation and light) was chosen
independently, prototyped first as disposable HTML/CSS for creative-
direction approval, then rebuilt as a production Next.js app after
approval. See `DESIGN_SYSTEM.md` for the visual system and
`KNOWN_LIMITATIONS.md` for an honest account of what's provisional or
unfinished.

## Architecture summary

- Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- React Three Fiber / Three.js / Drei for the homepage light study
- No CMS, no database, no auth — all content lives in `lib/projects.ts`
  (fictional project data) and directly in page components
- No secrets, credentials, or API keys anywhere in this project

## Solar model — honesty note

The 3D light study's sun movement is driven by a deliberately simplified
model (`lib/solar.ts`), not a real astronomical calculation. Full detail in
`KNOWN_LIMITATIONS.md` — do not describe it as astronomically accurate in
any client-facing conversation about this project.
