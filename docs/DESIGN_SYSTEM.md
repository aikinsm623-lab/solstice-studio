# Solstice Studio — Design System

## Concept

Central idea: **light is the medium.** Solstice Studio is a fictional
residential architecture practice that designs homes around solar
orientation and seasonal light rather than treating light as decoration.
Every design decision on the site should trace back to that idea — if a
visual element doesn't support it, it doesn't belong.

## Palette

| Token | Hex | Use |
|---|---|---|
| `--color-limestone` | `#EDE7DA` | Primary background |
| `--color-limestone-dim` | `#E4DDCB` | Recessed surfaces (the light-study frame) |
| `--color-paper` | `#F6F3EC` | Cards, form fields, elevated surfaces |
| `--color-ink` | `#1C1712` | Primary text, dark UI fills |
| `--color-umber` | `#4A3B2A` | Secondary text, body copy on light backgrounds |
| `--color-bronze` | `#9C6B3E` | The one accent color — CTAs, active states, links-on-hover |
| `--color-slate` | `#5B6670` | Tertiary/meta text |

Deliberately excluded: neon accents, blue/purple gradients, glassmorphism,
heavy rounded corners, decorative blobs. Corners are square or barely
rounded (`rounded-sm` at most, on the season toggle buttons only).

## Typography

- **Display**: Fraunces — used for all headings (`h1`–`h4`), set via
  `--font-display`.
- **Body/UI**: Inter — used for everything else, via `--font-body`.

**Provisional font loading**: this build uses system-font fallback stacks
(`"Iowan Old Style", "Palatino Linotype", Georgia, serif` for Fraunces;
`-apple-system, "Segoe UI", Roboto, sans-serif` for Inter) instead of the
real typefaces. The sandboxed build environment cannot reach the Google
Fonts CDN (`fonts.googleapis.com` / `fonts.gstatic.com` are not in the
allowed network egress list), so `next/font/google` fails at build time.
See `KNOWN_LIMITATIONS.md` for how to fix this in a real deploy
environment.

## Layout

- `.container-wide` (1400px max) and `.container-read` (1200px max) are the
  two horizontal rhythm containers, both with responsive `clamp()` padding.
- The homepage hero is deliberately asymmetric (`0.85fr / 1.15fr` on large
  screens) with the light study as the dominant visual element — never a
  centered hero-over-gradient.
- Project index and homepage "selected work" both use a bordered grid
  (`border-t border-l` container + `border-b border-r` per cell) instead of
  card components with shadows/rounded corners — reads as an architectural
  drawing grid, not a SaaS card kit.

## Motion

- One orchestrated entrance sequence on the homepage light study: the sun
  sweeps from `ENTRANCE_START` (0.05) to `ENTRANCE_TARGET` (0.55, ~1:30–2pm)
  over 1.6s with an ease-out cubic, once, on mount.
- After that, motion is interaction-driven only: dragging/keying the time
  slider, clicking a season button, hover states on links and project tiles.
- `prefers-reduced-motion: reduce` is respected in two independent places:
  the global CSS (collapses all animation/transition durations to ~0) and
  the entrance sequence itself (skips the sweep entirely and jumps straight
  to the resting position, rather than relying on CSS alone to hide a still-
  running JS rAF loop).

## The Light Study (3D)

See `PROJECT_MEMORY.md` for the honest disclosure on the solar model's
accuracy. Component breakdown:

- `lib/solar.ts` — solar position model (simplified, documented as such)
- `components/three/HouseMassing.tsx` — generic architectural massing
  (not any specific project), low-poly, shadow-casting
- `components/three/SunRig.tsx` — directional light + visible sun marker,
  color/intensity shift from warm-low to cool-bright across the day
- `components/three/SolarStudyCanvas.tsx` — the R3F `<Canvas>` composition
- `components/three/SolarStudyFallback.tsx` — 2D SVG equivalent, shown when
  WebGL is unavailable
- `components/three/SolarStudy.tsx` — orchestrates state, entrance
  animation, WebGL detection, and the accessible control surface
- `components/ui/TimeControl.tsx` — the control surface (range input +
  season buttons), independent of pointer/drag input
