# AGENTS.md

## Project Purpose

`cadence-engineer-site` is the static public website for Cadence Engineer.
The project was intentionally reset to a blank starting point so the site can be redesigned from the current Figma work and the shared brand system.

Cadence Engineer turns software-delivery activity into concise, understandable narratives for managers, teams, and other business-facing stakeholders.

Do not restore content, components, routes, or styling from earlier versions unless explicitly requested.

## Technical Architecture

- Framework: SvelteKit with Svelte 5 in runes mode
- Styling: Tailwind CSS 4 plus global CSS
- Rendering: all routes are prerendered
- Adapter: `@sveltejs/adapter-static`
- Backend: none in this repository
- Development: Vite through `pnpm dev`
- Validation: `pnpm check`
- Production: `pnpm build` generates a deployable static site

Keep the site compatible with static hosting. Do not introduce server-only routes, runtime server dependencies, or backend state without explicit approval.

## Current Baseline

- `/` contains the home-page hero plus Daily and Chat feature showcases.
- The global layout provides the reusable announcement banner, header, main-content slot, and footer.
- `src/routes/+layout.ts` enables prerendering and trailing slashes.
- `src/routes/layout.css` contains the global brand foundation.
- `src/lib/` contains the reusable layout, feature, card, button, and chat UI components.
- `src/lib/BrandLogo.svelte` is the shared logo component.
- `src/lib/assets/` contains only production assets needed by this site, copied from `cadence-engineer-brand` where applicable.

Add new pages and components deliberately as the redesign progresses.

## Brand Source of Truth

The adjacent `cadence-engineer-brand` repository is the source of truth for brand assets and guidance.

- Copy required production assets into this repository; do not load them from GitHub raw URLs.
- Copy only formats that the website actually uses.
- Prefer normal variable WOFF2 webfonts over complete desktop font packages.
- Do not add italic font variants; the site does not use italic typography.
- Keep each copied font license alongside its font files.
- Prefer SVG for interface logos and icons.
- Copy approved Lucide SVGs from `cadence-engineer-brand/icon/lucide/` instead of adding the full icon package to this site.
- Do not edit files in `cadence-engineer-brand` as a side effect of site work.
- When replacing an asset with a newer brand version, verify that the copied file matches its source.

## Color System

The core palette is:

- Black: `#000000`
- White: `#FFFFFF`
- Pink: `#EF406C`
- Teal: `#40EFC3`
- Red: `#FF383C`, reserved for dangerous or destructive actions
- Light grey: `#F2F2F2`

Black and white are the foundation. Pink is the primary accent. Teal is a rare secondary accent and should not compete with pink. Red is a semantic danger color, not a general accent.

Use the existing tokens rather than duplicating hex values:

- `--brand-color-black`
- `--brand-color-white`
- `--brand-color-pink`
- `--brand-color-teal`
- `--brand-color-red`
- `--brand-color-light-grey`
- `--color-background`
- `--color-foreground`
- `--color-accent`
- `--color-accent-secondary`
- `--color-danger`
- `--color-interactive-hover`

Tailwind exposes the same palette through the `brand-*` colors.

## Typography

Typography communicates who produced the content:

- Satoshi is the interface font for human-written or deterministic content, including navigation, controls, labels, metadata, headings, and ordinary website copy.
- Sentient is reserved for AI- or LLM-generated content, regardless of its length.

The system uses regular and bold semantic weights, with a family-specific regular weight:

- Satoshi regular: `500` for paragraphs, links, and ordinary interface text
- Sentient regular: `400` for AI- or LLM-generated paragraphs and prose
- Bold: `900` for headings and titles

Satoshi contains a true weight 900. The supplied Sentient variable font ends at 700, so a requested weight of 900 resolves to Sentient's heaviest available weight. Do not synthesize or modify the font to manufacture a weight 900.

Use the semantic global definitions:

- `--font-interface` or `.font-interface` for Satoshi
- `--font-generated`, `.font-generated`, or `.ai-generated` for Sentient
- `--font-weight-interface-regular` for regular Satoshi text
- `--font-weight-generated-regular` for regular Sentient text
- `--font-weight-regular` as the context-sensitive regular weight
- `--font-weight-bold` for headings and titles
- Tailwind `font-sans` maps to Satoshi
- Tailwind `font-serif` maps to Sentient

Do not use Sentient merely because text is long or editorial. Split mixed-origin content into separate elements when needed.

## Logo

Use `BrandLogo` from `$lib` instead of recreating or embedding the icon in page components.

- The default logo is black on transparent backgrounds.
- Use the `inverse` prop for white-on-dark presentation.
- Size it with `--brand-logo-size` or layout constraints.
- Keep its aspect ratio intact.
- Provide meaningful alternative text unless the surrounding UI already supplies the same accessible name.

## Design and Content Principles

The site should feel technical, credible, structured, and approachable.

- Create a clear hierarchy and an obvious reading flow.
- Use generous spacing and calm grouping.
- Translate engineering activity into language non-technical stakeholders can follow.
- Prefer concrete, concise copy over jargon.
- Use motion only when it improves comprehension.
- Design mobile layouts alongside desktop layouts.
- Avoid dense dashboards, code-heavy decoration, generic enterprise styling, and playful startup clichés.

## Implementation Rules

- Prefer semantic design tokens over one-off values.
- Keep global styles limited to brand foundations and true cross-page defaults.
- Build reusable Svelte components for repeated patterns.
- Keep page-specific layout and styling close to the page or component that owns it.
- Favor accessible semantic HTML and visible keyboard focus.
- Respect reduced-motion preferences.
- Use Svelte 5 runes and the existing project conventions.
- Preserve `BASE_PATH` compatibility; import bundled assets through Svelte/Vite rather than hardcoding root-relative deployment URLs.
- Do not add a backend or client-side data layer for static content.

Before handing off implementation changes, run:

```sh
pnpm check
pnpm build
```
