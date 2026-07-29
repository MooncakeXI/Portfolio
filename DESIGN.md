---
name: Suvijak Phuphakdeepan — Portfolio
description: A developer portfolio where the interaction design itself is part of the pitch — a mono-numbered, terminal-flavored index lit by a mouse-reactive aurora.
colors:
  signal-teal: "#107E75"
  signal-teal-dark: "#42D7CA"
  aurora-teal: "#0E9488"
  warm-ivory: "#FAF8F5"
  midnight-zinc: "#09090B"
  pure-white: "#FFFFFF"
  ink: "#09090B"
  off-white: "#FAFAFA"
  zinc-gray: "#71717A"
  hairline-gray: "#E4E4E7"
  secondary-fill: "#F4F4F5"
typography:
  display:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(3rem, 6vw, 6rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.5rem, 4vw, 3rem)"
    fontWeight: 600
    letterSpacing: "-0.025em"
  title:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
  body:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    lineHeight: 1.625
  label:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    fontSize: "0.75rem"
    letterSpacing: "0.02em"
rounded:
  sm: "6px"
  md: "8px"
  lg: "10px"
  card: "16px"
  media: "28px"
  portrait: "32px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  section: "112px"
components:
  button-primary:
    backgroundColor: "transparent"
    textColor: "{colors.signal-teal}"
    rounded: "{rounded.full}"
    padding: "12px 28px"
  button-primary-hover:
    backgroundColor: "{colors.signal-teal}"
    textColor: "{colors.pure-white}"
  card-standard:
    backgroundColor: "{colors.pure-white}"
    rounded: "{rounded.card}"
    padding: "24px"
  card-media:
    backgroundColor: "{colors.pure-white}"
    rounded: "{rounded.media}"
  card-certificate:
    backgroundColor: "{colors.pure-white}"
    rounded: "{rounded.lg}"
    padding: "24px"
  chip:
    backgroundColor: "{colors.secondary-fill}"
    textColor: "{colors.zinc-gray}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
---

# Design System: The Terminal Aurora

## 1. Overview

**Creative North Star: "The Terminal Aurora"**

Two layers, always working together. The base layer is a developer's terminal: monospace labels, a literal `01–05` index that cross-references the nav bar section by section, a `<dev />` logotype, flat cards with hairline borders. The second layer is an aurora that lives behind and reacts to the visitor — a mouse-reactive dot-grid, a slow-wandering blob glow, and per-card proximity lighting, all rendered in one consistent teal. Neither layer performs alone: the terminal without the aurora is a dry resume; the aurora without the terminal is a tech demo with no substance behind it. Together they say "I build interactive frontend, and this page is the proof," aimed squarely at a recruiter doing a 30-second scan.

The palette is deliberately restrained — a warm-ivory neutral base (chosen over a colder pure white specifically for warmth without sacrificing the technical read) and one teal accent, never more than one saturated color live on screen at once. The playful interactivity (glow, magnetic hover, the typewriter role line) is the flex; it never gets in the way of the actual content a recruiter needs to read.

This system explicitly rejects the SaaS-landing-page toolkit: no gradient text as decoration, no colored side-stripe borders on cards, no identical card grid used for genuinely different content types, no rainbow/neon color cycling. Where those tells were introduced during development (see Do's and Don'ts), they were caught and either removed or toned down to the single-teal palette.

**Key Characteristics:**
- One teal, two representations: Signal Teal for interactive UI (links, buttons, active nav), Aurora Teal for ambient effects (glow, dot-grid, blob).
- A literal, functional numbered index (`01–05`) — not decorative eyebrows.
- Elevation is a hover response, not baseline depth — everything is flat until you touch it.
- Card surfaces are deliberately varied by section (see Components) so the page doesn't read as one repeated template.
- Monospace exclusively for metadata (dates, tech tags, index numbers, the logo) — never for body prose.

## 2. Colors

A warm, mostly-neutral surface carrying one recurring teal, plus a near-black / off-white flip for dark mode.

### Primary
- **Signal Teal** (`#107E75` / `hsl(175 77% 28%)`): interactive UI — links, button text/border, active nav state, section-index numerals. Darkened from the initial `hsl(175 77% 33%)` after a contrast check found 3.48:1 against Warm Ivory at small text sizes (below the 4.5:1 AA minimum); this value verifies at 4.62:1. In dark mode this shifts to **Signal Teal Dark** (`#42D7CA` / `hsl(175 65% 55%)`) for contrast against the near-black background.
- **Aurora Teal** (`#0E9488` / `oklch(0.52 0.14 175)`): the ambient-effects variant of the same hue — dot-grid accent, blob glow, per-card proximity glow, the favicon monogram. Kept as a separate token from Signal Teal because it's defined in OKLCH (for the effects layer) rather than the HSL custom properties (for the UI layer); the two should be nudged together if the brand teal ever moves. In dark mode, Aurora Teal brightens to `oklch(0.75 0.14 175)`.

### Neutral
- **Warm Ivory** (`#FAF8F5` / `hsl(40 33% 97%)`): page background, light mode. Chosen deliberately over pure white mid-project — it reads warmer without tipping into the generic cream/sand-default territory, specifically because cards stay pure white on top of it, so the warmth shows as a background tone, not a surface tone.
- **Pure White** (`#FFFFFF`): card / surface background, light mode. Popping against Warm Ivory is what gives cards their separation instead of relying on shadow.
- **Midnight Zinc** (`#09090B` / `hsl(240 10% 3.9%)`): page + card background, dark mode (cards and page share this value; borders do the separating work instead of a surface-tone difference).
- **Ink** (`#09090B`): body text, light mode.
- **Off-White** (`#FAFAFA` / `hsl(0 0% 98%)`): body text, dark mode.
- **Zinc Gray** (`#71717A` / `hsl(240 3.8% 46.1%)`): secondary / muted text — descriptions, dates, supporting copy.
- **Hairline Gray** (`#E4E4E7` / `hsl(240 5.9% 90%)`): default border color, light mode.
- **Secondary Fill** (`#F4F4F5` / `hsl(240 4.8% 95.9%)`): chip/tag backgrounds, hover fills.

### Named Rules
**The One Teal Rule.** Exactly one saturated hue exists in this system. If a new accent color is needed for anything (status, category, chart), reach for a tint/shade of teal before introducing a second hue.

**The Warmth-Isn't-Cream Rule.** Warm Ivory is a background tone that exists specifically because Pure White cards sit on top of it. Don't let the warm neutral migrate onto cards or surfaces — the contrast between warm background and neutral-white surface is the point.

## 3. Typography

**Body Font:** ui-sans-serif / system-ui stack (no custom font loaded — Tailwind's default sans)
**Label/Mono Font:** ui-monospace / SFMono-Regular / Menlo / Monaco / Consolas

**Character:** System sans for anything meant to be read as prose (name, bio, descriptions); monospace for anything meant to be read as data (dates, tech stacks, index numbers, the `<dev />` logo). The pairing is the "developer" signal — no display serif or custom webfont is loaded, on purpose, in keeping with the terminal-not-magazine read.

### Hierarchy
- **Display** (700, `clamp(3rem, 6vw, 6rem)`, tracking `-0.025em`): the hero name only. Caps out at 6rem (96px) at `lg:text-8xl` — at the system's own display-heading ceiling, not over it.
- **Headline** (600, `clamp(1.5rem, 4vw, 3rem)`, tracking `-0.025em`): the hero's animated role line ("I'm a [typewriter role]").
- **Title** (700, 1.5rem / 24px): section headings ("About Me", "Education", ...), always paired with the mono index number and a trailing hairline rule.
- **Body** (400, 1rem, line-height 1.625): paragraph copy — bio, descriptions, experience bullets. Max width capped around 60–70ch via container widths.
- **Label** (400–500, 0.625–0.875rem, mono, tracking `0.02em`): dates, tech-stack chips, nav index numbers, footer credit line.

### Named Rules
**The Mono-Never-Prose Rule.** Monospace is reserved for metadata. It never carries a sentence of body copy — if a mono-styled string needs to become readable prose, switch it back to the sans body font first.

## 4. Elevation

Flat by default; elevation exists only as a response to interaction, never as baseline decoration. Cards sit at `shadow-sm` or no shadow at rest and lift to `shadow-lg`/`shadow-xl`/`shadow-2xl` on hover, paired with a small `-translate-y` lift. The one exception is the Featured Projects media card, which uses a heavier resting `shadow-md` → hover `shadow-2xl` jump, because it's meant to read as a showcased screenshot rather than a data card.

### Shadow Vocabulary
- **Resting card** (`shadow-sm`, or none): Education timeline cards, certificate cards at rest.
- **Hover lift** (`shadow-lg` / `shadow-xl`): standard card hover state, paired with `-translate-y-1` to `-translate-y-2`.
- **Showcase** (`shadow-md` resting → `shadow-2xl` hover): Featured Projects media card only.

### Named Rules
**The Touch-to-Lift Rule.** No card gets a resting shadow heavier than `shadow-sm`. If something needs to look important at rest, use size or position, not elevation.

## 5. Components

### Buttons
- **Shape:** fully rounded (`rounded-full`, {rounded.full}).
- **Primary (CTA — "Get In Touch", "Say Hello"):** transparent fill, 1px Signal Teal border, Signal Teal text, mono font, `12px 28px` padding. A solid Signal Teal panel slides in from the left on hover (`translate-x` from `-100%` to `0`), flipping the text to Pure White — the fill is a literal wipe, not a color-swap transition.
- **Secondary:** none in use; the site has exactly one CTA style, repeated.

### Chips
- **Style:** Secondary Fill background, Zinc Gray mono text, `rounded-full`, `4px 10px` padding. Used for tech-stack tags and skill badges.
- **State:** static display only, no selected/unselected toggle state exists on this site.

### Cards / Containers — three deliberate variants
This site intentionally does **not** use one repeated card shape everywhere; each content type gets its own surface so the page doesn't read as a stamped-out grid.
- **Standard card** (Education timeline entries): Pure White background, `{rounded.card}` (16px), 1px Hairline Gray border, `shadow-sm` → `shadow-lg` on hover, plus a 4px top gradient accent bar (Signal Teal fading to transparent) that's always faintly visible and brightens on hover.
- **Media card** (Featured Projects screenshot): Pure White background, `{rounded.media}` (28px, larger than the standard card), **no border**, shadow-only separation (`shadow-md` → `shadow-2xl`). Reserved for image-forward content.
- **Certificate card** (compact grid): Pure White background, `{rounded.lg}` (10px, smaller than the standard card), 1px Hairline Gray border (`border-border/60`, deliberately lighter than the standard card's border), circular Signal-Teal-tinted icon badge instead of a full-bleed icon. Built to read as denser/more compact than the standard card since certificates carry less content per item.

### Navigation
- **Style:** mono index number (`01.`–`05.`) + label, `rounded-full` pill hit-area. Default state: muted-foreground text. Active state (scroll-spy driven): Signal Teal text on an 8%-opacity Signal Teal background fill. Desktop: horizontal pill row. Mobile: full-screen overlay with staggered fade/slide-in per item.
- **Logo:** the `<dev />` string itself, mono, Signal Teal, scales up slightly on hover.

### The Aurora System (signature component)
Three layered, mouse-reactive background effects, always mounted behind all page content (`z-index` −1 to −3), sharing one set of CSS custom properties (`--mx`, `--my`) updated by a single `requestAnimationFrame`-throttled mousemove listener:
1. **Dot-grid base** — a faint, theme-adapting dot pattern (30px grid) covering the full viewport at all times.
2. **Dot-grid accent** — the same grid rendered in Aurora Teal, revealed only in a 220px circle around the cursor via a CSS `mask-image` radial gradient. This is the direct "aurora follows you" effect.
3. **Blob glow** — several large, heavily blurred Aurora Teal ellipses that wander slowly (150s loop) behind everything, giving the page ambient life even when the cursor is still.
Individual cards additionally get a `.glow-surface` treatment: a proximity-based radial glow (900px falloff) that brightens as the cursor approaches, independent of hover.

## 6. Do's and Don'ts

### Do:
- **Do** keep exactly one saturated hue (teal) in the system — see The One Teal Rule.
- **Do** vary card surface treatment by content type (standard / media / certificate) rather than reusing one card shape everywhere.
- **Do** reserve monospace for metadata only — dates, tags, index numbers, the logo — never for body prose.
- **Do** treat the `01–05` section numbers as a literal index synced to the Navbar, not a decorative eyebrow — renumber both together if a section is ever added, removed, or reordered.
- **Do** keep elevation state-driven (shadow appears on hover, not at rest).

### Don't:
- **Don't** use gradient text (`background-clip: text` + gradient background) — decorative, not meaningful; use a solid color and lean on weight/size for emphasis. **Known current exception to fix:** the Hero role line (`.text-gradient` in `index.css`, applied in `Hero.tsx`) still does this and should be converted to a solid Signal Teal on a future pass.
- **Don't** use a colored side-stripe border (`border-left`/`border-right` as a colored accent) on cards — this was tried for the certificate cards during development and reverted specifically because it read as a template default.
- **Don't** reuse one identical card grid for genuinely different content (projects vs. certificates vs. education) — each gets its own surface per the Components section.
- **Don't** introduce a second saturated hue or a rainbow/neon color-cycling effect — a rainbow hue-rotate background effect was explicitly stripped down to single-tone Aurora Teal during development for this reason.
- **Don't** let the warm-ivory background bleed onto card surfaces — see The Warmth-Isn't-Cream Rule.
