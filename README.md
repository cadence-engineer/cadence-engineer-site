# Cadence Engineer Site

The static public website for Cadence Engineer. The current implementation follows the shared visual
system documented by
[`cadence-engineer-brand`](https://github.com/cadence-engineer/cadence-engineer-brand).

## Current implementation

Verified on August 21, 2026, the home page contains the product hero, Daily and Chat feature
showcases, and Free, Base, and Premium plan cards. The shared layout supplies the announcement banner, header, and footer. Contact, cookies,
imprint, privacy, and terms pages are also present. A static `404.html` handles unknown paths. The site
remains entirely static and does not call the API.

## Technical architecture

- SvelteKit with Svelte 5
- Tailwind CSS 4 plus global CSS
- Static rendering with every route prerendered at build time
- No backend or runtime server dependency
- Vite development server
- `pnpm build` generates deployable static files through `@sveltejs/adapter-static`
- `Staticfile` configures Railpack to serve `build/` and return the static `404.html` for unknown paths

## Development

Requirements:

- Node.js 22.12 or newer
- pnpm 11 or newer

Install dependencies and start the development server:

```sh
pnpm install
pnpm dev
```

Validate and build the site:

```sh
pnpm check
pnpm build
```

The header's sign-in link points to `https://app.cadence.engineer/signin` by default. Set
`PUBLIC_APP_ORIGIN` to the web application's origin to override it. For example, a development site
deployment can use:

```sh
PUBLIC_APP_ORIGIN=https://develop.app.cadence.engineer
```

This value is embedded into the static site at build time, so the site must be rebuilt after it
changes. A hostname without a scheme is treated as HTTPS. Do not include `/signin` in the value; the
site appends that route.

## Brand assets

`cadence-engineer-brand` is the source of truth. Required production assets are copied into this repository so the built website has no runtime dependency on GitHub or another asset host.

| Site asset                                       | Brand source                                            |
| ------------------------------------------------ | ------------------------------------------------------- |
| `src/lib/assets/brand/cadence-engineer-icon.svg` | `cadence-engineer-brand/icon/cadence-engineer-icon.svg` |
| `src/lib/assets/icons/*.svg`                     | `cadence-engineer-brand/icon/lucide/`                   |
| `src/lib/assets/fonts/satoshi/`                  | `cadence-engineer-brand/typography/satoshi/`            |
| `src/lib/assets/fonts/sentient/`                 | `cadence-engineer-brand/typography/sentient/`           |

Copy only the formats and individual interface icons used by the website. Keep the relevant font and third-party icon notices with copied assets. Do not load brand files directly from repository URLs.

## Typography

- Satoshi is the interface font for human-written and deterministic content.
- Sentient is reserved for AI- or LLM-generated content.
- Satoshi regular uses weight `500`.
- Sentient regular uses weight `400`.
- Headings and titles request weight `900`; Sentient resolves to its heaviest supplied weight, `700`.
