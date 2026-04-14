# AGENTS.md

## Project Purpose

This project defines the visual language for Cadence Engineer's static marketing site.
It should also serve as a reusable styling reference for related apps and future pages.

Cadence Engineer is a SaaS tool that helps organizations create a concise narrative about what is happening on the technical side of the organization.
The product translates engineering reality into communication that non-technical stakeholders can follow and act on.

## Target Audience

Primary audiences are non-technical stakeholders, including:

- Product owners
- Project managers
- C-level leaders
- Sales teams
- Marketing teams
- Other business-facing decision makers

Design and copy should assume readers are intelligent but not deeply technical.
The interface should reduce technical intimidation without hiding precision.

## Visual Philosophy

The brand should feel technical, credible, and structured, but still accessible.
It should suggest engineering rigor without looking cold, cryptic, or overly developer-centric.

Aim for:

- Clear hierarchy and obvious reading flow
- Calm, confident presentation
- Technical visual cues expressed in a simplified way
- Polished structure over decorative complexity
- Abstractions that explain, not obscure

Avoid:

- Dense dashboards or code-heavy aesthetics
- Jargon-first copy
- Overly playful startup visuals
- Generic enterprise blandness
- One-off styling decisions that cannot scale to other pages

## Styling System Rules

CSS decisions in this project should be explicit, reusable, and portable to other projects.

- Prefer design tokens over hardcoded one-off values.
- Centralize core choices such as colors, spacing, typography, radii, shadows, and layout widths.
- Use semantic names for reusable styles instead of page-specific names when possible.
- Treat each new section as a candidate pattern that may be reused elsewhere.
- Favor composition of small reusable utilities and primitives over large tightly coupled page styles.
- Keep visual rules easy to extract into a shared system later.
- If a style only works for one exact block, reconsider the abstraction before adding it.

## Typography

Typography should communicate clarity first.
Use a modern sans-serif voice with a technical edge, but keep it readable and friendly.

- Prioritize legibility and hierarchy over stylistic novelty.
- Headings should feel precise and confident.
- Body copy should be plainspoken and easy to scan.
- Support non-technical readers with concise wording and strong contrast.

## Layout and Interaction

- Prefer generous spacing and clean grouping.
- Make sections easy to understand at a glance.
- Use motion sparingly and only when it improves comprehension.
- Favor simple visual metaphors over literal technical representations.
- Ensure layouts remain clear on mobile before adding complexity.

## Content Tone

- Be concise, concrete, and credible.
- Translate technical outcomes into business understanding.
- Emphasize clarity, alignment, momentum, and trust.
- Do not write as if speaking only to engineers.

## Implementation Guidance

- Keep global styles intentional and minimal.
- When introducing a new visual pattern, define whether it is a token, a reusable component style, or a one-off exception.
- Document non-obvious styling decisions in code comments only when they prevent future confusion.
- Preserve consistency across the landing page so it can act as a reference for other Cadence Engineer surfaces.
