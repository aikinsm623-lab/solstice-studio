# Known Limitations

Honest list — nothing here is described as better than it is.

## Typography is provisional

Fraunces and Inter are specified as CSS variables, but the actual font
files are not loaded — this environment's network egress list doesn't
include `fonts.googleapis.com` / `fonts.gstatic.com`, so `next/font/google`
fails at build time. The site currently renders in close system-font
fallbacks (`Iowan Old Style`/`Georgia` for Fraunces, `-apple-system`/`Segoe
UI` for Inter). **To fix**: either build in an environment with Google
Fonts access, or (better for production) download the Fraunces and Inter
variable font files, put them in `public/fonts/`, and load them via
`next/font/local` — no other code changes needed since every component
already references the `--font-display` / `--font-body` variables rather
than hardcoding font names.

## The solar model is simplified, not astronomically accurate

`lib/solar.ts` uses a half-sine daily elevation arc and a linear azimuth
sweep, with three fixed seasonal peak-elevation values calibrated loosely
to ~45°N (Portland, OR). It does **not** implement true solar declination,
equation of time, or atmospheric refraction correction. It's accurate
enough to communicate the idea — sun position changes shadow direction and
length — but should not be described as astronomically precise. Swapping
in a real algorithm (e.g. NOAA's SPA, or the `suncalc` package) would only
require rewriting `sunPositionForMoment`; every consumer depends on the
`SolarPosition` return shape, not the math inside it.

## The contact form has no backend

`components/ui/ContactForm.tsx` builds a `mailto:` link from the filled
fields and hands off to the visitor's own email client. This is genuinely
functional (it isn't a fake "Message sent" state that does nothing) but
it's not a real form-submission backend. A production version should post
to a real endpoint (a Next.js API route + a transactional email service).

## The favicon is the default Next.js placeholder

`app/favicon.ico` was never replaced with a real Solstice Studio mark.
Low-priority but worth flagging since a placeholder favicon undercuts an
otherwise-finished-looking site in a browser tab.

## The exact package-lock.json was not persisted to Drive

See `LOCKFILE_NOTE.md` alongside `package.json` in the Drive copy.
`package.json` is fully persisted and sufficient to regenerate a
functionally-equivalent lockfile via `npm install`; the original lockfile's
exact transitive-dependency hashes were not byte-transferred because doing
so reliably wasn't practical through this session's file-upload path.

## No real visual regression testing was performed

Headless-browser screenshot tooling (Playwright) could not be installed in
this sandbox — its browser-download step needs `deb.nodesource.com`, which
isn't in the allowed network egress list. QA in this build was performed
by: running the actual production build and server, curling every route
for status codes, inspecting the real rendered HTML for semantic structure
and ARIA attributes, and confirming `prefers-reduced-motion` /
`focus-visible` rules are present in the compiled CSS. No one has visually
eyeballed the rendered site at any breakpoint. Before showing this to a
client, open it in a real browser and check it looks the way the code
implies it should.

## Not deployed

The project has never been deployed. It's a static-friendly Next.js app
(all routes prerender; only `/contact`'s form interactivity and the 3D
scene are client-side) and should deploy cleanly to Vercel, but this has
not been verified against a real deployment target.
