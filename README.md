# Cadence Engineer Site

The static public website for Cadence Engineer. The current implementation follows the shared visual
system documented by
[`brand`](https://github.com/cadenceengineer/brand).

## Current implementation

Verified on August 27, 2026, the home page contains the product hero; Daily and Chat feature
showcases; AI-provider and connected-tool logo sections; and Basic, Premium, and Enterprise pricing
cards. The displayed plans describe the current public-site proposal and are intentionally independent
from the plans currently implemented by the API. The shared layout supplies the announcement banner,
header, and footer. Contact, cookies, imprint, privacy, and terms pages are also present. A static
`404.html` handles unknown paths with the public header and a concise link home. The site remains
entirely static and does not call the API.

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

Links to the web application are disabled by default. Set `PUBLIC_APP_LINKS_ENABLED=true` to show the
header's Sign in link and the Basic and Premium pricing cards' Get Started links. The Enterprise
Contact link remains available regardless of this setting.

When web-app links are enabled, they point to `https://app.cadence.engineer/signin` by default. Set
`PUBLIC_APP_ORIGIN` to the web application's origin to override it. For example, a development site
deployment can use:

```sh
PUBLIC_APP_LINKS_ENABLED=true
PUBLIC_APP_ORIGIN=https://develop.app.cadence.engineer
```

These values are embedded into the static site at build time, so the site must be rebuilt after they
change. Only the exact value `true` enables app links. A hostname without a scheme is treated as
HTTPS. Do not include `/signin` in `PUBLIC_APP_ORIGIN`; the site appends that route.

## Brand assets

`brand` is the source of truth. Required production assets are copied into this repository so the built website has no runtime dependency on GitHub or another asset host.

| Site asset                                     | Brand source                                  |
| ---------------------------------------------- | --------------------------------------------- |
| `src/lib/assets/brand/whorl_no_whitespace.svg` | `../brand/logo/whorl_no_whitespace.svg`       |
| `static/favicon.png`                           | `../brand/logo/favicon.png`                   |
| `static/logo/whorl.{svg,png}`                  | `../brand/logo/whorl.{svg,png}`               |
| `static/logo/whorl_no_whitespace.{svg,png}`    | `../brand/logo/whorl_no_whitespace.{svg,png}` |
| `static/logo/banner.png`                       | `../brand/logo/banner.png`                    |
| `src/lib/assets/icons/*.svg`                   | `../brand/icon/lucide/`                       |
| `src/lib/assets/fonts/satoshi/`                | `../brand/typography/satoshi/`                |
| `src/lib/assets/fonts/sentient/`               | `../brand/typography/sentient/`               |
| `src/lib/assets/providers/*.svg`               | User-supplied official provider brand kits    |

Copy only the formats and individual interface icons used by the website. Keep the relevant font and third-party icon notices with copied assets. Do not load brand files directly from repository URLs.

`ProviderSection` composes the shared responsive `LogoGrid`, which supports at most two columns and
collapses to one column on small screens. `PricingCard` composes the shared `FeatureCard`, `Button`,
and `Pill` primitives. Basic, Premium, and Enterprise select documented primary, secondary, and
inverse variants; the pricing component does not override those primitives. Provider and plan content
remains deterministic interface copy and therefore uses Satoshi.

## Typography

- Satoshi is the interface font for human-written and deterministic content.
- Sentient is reserved for AI-generated content.
- Satoshi regular uses weight `500`.
- Sentient regular uses weight `400`.
- Headings and titles request weight `900`; Sentient resolves to its heaviest supplied weight, `700`.

## Global component system

The canonical component specification is
[`brand/components/README.md`](../brand/components/README.md).
The site consumes it through semantic tokens in `src/routes/layout.css` and reusable components in
`src/lib/`. Pages compose those components and own layout only; they must not invent local versions of
shared typography, buttons, links, inputs, cards, modals, or icon controls.

| Component         | Canonical appearance                                                                                                                                                       |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Typography        | Satoshi `500` interface text, Sentient `400` generated text, semantic bold headings; `2rem` section titles, `1rem` component/body/control text, `0.875rem` supporting text |
| Button            | `2rem` high, `1rem` horizontal padding, compact squircle, pink/white primary, teal/white secondary, red/white danger, visible `2px` focus outline                          |
| Icon button       | Transparent `1.5rem` square with a `1rem` current-color Lucide icon and light-grey hover                                                                                   |
| Action toolbar    | Horizontal, vertically centered shared controls with native toolbar semantics, an accessible label, and a `0.5rem` gap                                                     |
| Link/navigation   | Recognizable inline text links; `2rem` navigation controls with light-grey hover, pink/white active state, and subdued disabled state                                      |
| Input/select      | `3rem` high, `0.5rem 1rem` padding, white compact-card squircle, black-at-10% shadow, pink focus outline; select uses the approved chevron                                 |
| Chat composer     | `4rem` compound-input variant with `1rem` padding, standard surface shadow, and circular `2rem` send action                                                                |
| Card              | White, normally `2rem` padding, `3rem` fallback radius, `6rem` squircle radius, `0 0 1rem rgb(0 0 0 / 10%)` shadow                                                         |
| Modal/danger card | Modal retains the exact card surface and changes only to the documented stronger shadow; danger retains the card and adds semantic-red stroke/content/action treatment     |
| Pill              | `2rem` compact label with `0.5rem 1rem` padding; primary, secondary, and inverse use the documented `30%` muted surface behind solid text                                  |
| Logo grid         | Shared, centered, maximum two-column grid with contain-fitted marks; one column on small screens                                                                           |
| Identity mark     | `4rem` circle for a person and `4rem` squircle for an organization                                                                                                         |

All states belong to the shared component. A visual exception is valid only when explicitly requested
by the user and documented with its reason and scope. Repeated exceptions must become named variants
or coordinated changes to the brand specification and every consumer.
