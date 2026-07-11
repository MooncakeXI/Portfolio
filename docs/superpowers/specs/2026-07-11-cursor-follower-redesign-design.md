# Cursor Follower Redesign

## Problem

Current `CursorFollower` (dot + lagging ring) feels stiff and too plain: the dot snaps to the mouse position 1:1 every frame while only the ring is lerped, so the two elements move inconsistently. The hover state just resizes the ring via a CSS width/height transition, with no glow or directional feel.

## Goals

- Dot and ring both animate via `requestAnimationFrame` lerp, with different smoothing factors, so they read as one coherent system.
- Add a `--primary`-colored glow (box-shadow/blur) instead of flat borders.
- Add velocity-based squash/stretch on the ring (scaleX/scaleY derived from per-frame movement delta) for a fluid feel.
- On hover of `data-magnetic` elements (buttons/links, already wired site-wide), the dot shrinks/fades into the ring, and the ring blends to a soft filled primary color — a "magnetic pull" look that matches the existing magnetic hover effect on buttons.

## Non-goals

- No particle/multi-dot trail.
- No new dependencies (framer-motion, etc.) — plain CSS transforms + box-shadow + rAF, matching the existing implementation style.
- No change to the `(pointer: fine)` visibility gate — still hidden on touch devices.

## Approach

Single-file change to `src/components/Cursor-follower.tsx`:

- Keep two refs (`dotRef`, `ringRef`) and a single rAF loop that lerps both `pos` → `dotPos` (fast, ~0.35) and `pos` → `ringPos` (slow, ~0.12).
- Track previous-frame ring position to compute velocity each frame; clamp and map velocity magnitude/angle to a `scaleX`/`scaleY` + `rotate` transform on the ring for stretch.
- Replace the ring's `border` look with `box-shadow` glow using `hsl(var(--primary) / 0.5)` and a semi-transparent fill.
- Keep `hovering` state (from existing `mouseover` closest(`[data-magnetic]`) check) to switch: dot `opacity`/`scale` → 0, ring `scale` up + background fill in primary color.
- All existing cleanup (rAF cancel, event listener removal, `visible` gate) stays as-is.

## Testing

Manual only — this is a purely visual/interactive effect with no meaningful assertions to unit test. Verify by running the dev server and moving the mouse over the page and over magnetic buttons/links (Hero, Navbar, Contact, Footer, Projects).
