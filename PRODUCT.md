# Product

## Register

brand

## Users

Recruiters and HR screeners doing a fast scan of a candidate's site before deciding whether to move a candidate forward. They arrive from a resume/LinkedIn link, spend seconds per section, and are looking for: real experience, real projects (not placeholders), and a clear way to make contact.

## Product Purpose

Suvijak Phuphakdeepan's personal portfolio. Showcases education, work experience, projects, certificates, and skills, and exists to convert a recruiter's visit into an outreach/interview contact.

## Brand Personality

Precise and technical at the core (accurate, detailed project/experience descriptions), with a playful interactive layer on top (mouse-reactive dot-grid, wandering blob glow, magnetic hover) that demonstrates frontend craft without overwhelming the content. Calm/minimal base layout, quietly confident rather than loud — the interactivity is the flex, not shouting typography or color.

## Anti-references

No specific sites named; default judgment applies. Avoid generic AI-template tells surfaced and corrected during development: gradient text, side-stripe accent borders on cards, identical card grids for content that differs, cookie-cutter eyebrow labels, and over-saturated neon/rainbow effects (a rainbow hue-cycling background effect was explicitly stripped down to a single toned-down brand color for this reason).

## Design Principles

1. The site's own interaction design is part of the portfolio — every effect (cursor glow, dot-grid, hover states) should read as deliberate craft, not template default.
2. Restraint over spectacle — playful details stay secondary to the content; a recruiter scanning in 30 seconds should never be blocked or distracted by an effect.
3. Real data over placeholders — screenshots, certificates, and project links are real; nothing ships as filler content.
4. One consistent visual system (teal accent + warm-neutral base, light/dark) carries across all sections rather than each section inventing its own look.
5. Simplicity by default — no dependency, abstraction, or visual flourish added unless it earns its place (this project has had a `ponytail`-style complexity pass applied more than once).

## Accessibility & Inclusion

WCAG AA baseline; no additional accessibility requirements specified. Known gap: the ambient animations (dot-grid, blob glow, magnetic hover, typewriter) don't currently have `prefers-reduced-motion` alternatives — worth addressing in a future `harden` or `polish` pass.
