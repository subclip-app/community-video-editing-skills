# Flat Vector 2D Motion Graphics

Original film: popwise "One Dot", one continuous shot built from a single dot. 1920x1080, 30 fps, 10 s, final jury score 7.64 / 10. Upstream: [prompt](https://github.com/Vincentwei1021/mg-styles-15/blob/main/prompts/01-flat-vector.md), [source](https://github.com/Vincentwei1021/mg-styles-15/tree/main/demos/01-flat-vector).

Pick it for: SaaS and app explainers, friendly brand stories, annual report films, anything bright, bouncy and clear.

## Output (fixed in the original)

1920x1080, 30 fps, exactly 10.000 s (300 frames), stereo audio. Keep music peaks under -1 dB.

## Route in Subclip

One HyperFrames layer per beat: SVG shapes animated with GSAP 3.15 (paused timeline, seekable). Write the overshoot curves by hand (`cubic-bezier(0.34,1.56,0.64,1)` maps to a back ease) or load GSAP's CustomEase from the same pinned jsDelivr path if validation accepts it. Fake motion blur on fast moves with a stretched smear copy or 3 to 4 trailing ghosts at falling opacity. Upstream route for reference: SVG + GSAP (CustomEase, CustomBounce, MorphSVG), motion blur for fast moves.

## Creative seed (swap this for the creator's story)

"A flat world in one shot." A one-continuous-shot brand explainer, the canonical Motion Ocean or Google explainer form, pushed to showreel polish.
- 0.0 to 1.2 s HOOK: empty bold color field; a single saturated circle drops in with the three-phase anticipation, stretch, squash, overshoot, settle. Immediately readable craft.
- 1.2 to 3.0 s: the circle becomes the sun; a flat city pops up building by building with 2 to 4 frame stagger (each with its own mini overshoot), clouds slide, birds flap.
- 3.0 to 5.5 s: the camera pushes into one window to a geometric character at a desk (limb rig with anchor rotations, head bob, blink) who reacts; a phone pings.
- 5.5 to 8.0 s: the notification bubble expands to fill the frame as a SHAPE WIPE transition; inside, icons burst in a choreographed rhythm (bar chart grows, check mark draws, heart pops, coin flips).
- 8.0 to 10.0 s: element-driven transition: everything collapses and flies into a logo lockup for an invented brand (for example "Popwise") plus tagline, elastic settle, 1 s hold with micro-motion.
- Rules: one hero moves at a time; squash and stretch about 10%; secondary action and follow-through; element-driven transitions (an object flies out and carries the cut); strictly flat (no gradients); bold 5 to 6 color palette (for example ultramarine #2B2BFF, coral #FF5A4E, sunflower #FFC62B, mint #2EE6A8, cream #FFF6E9, ink #151433).
- Sound: upbeat future-bass or pop around 120 BPM; pop, boing and whoosh on each entry, synced to the frame.

## Signature features and key techniques (the film is judged against these)

The mainstream base style of motion graphics, from the Google Material and corporate explainer tradition. Solid-color geometric characters and scenes, no outline or a minimal one, big blocks of clashing color, every element a vector shape. Common in SaaS promos, science explainers and corporate annual report videos.

Visual features: big solid color blocks, geometric characters, no gradients or almost none, clean negative space, a saturated brand palette, elastic entrances and exits.

Key techniques:
- Shape layers with parent null controls for hierarchy; character limbs rigged as rotations around anchor points.
- Elastic easing is the soul: overshoot with `cubic-bezier(0.34,1.56,0.64,1)` or bezier handles at 70 to 85% influence; entrances in three phases: anticipate, shoot out, rebound.
- Stagger element entrances by 2 to 4 frames; only one subject moves at a time.
- Mostly 30 fps; add about 10% squash and stretch to moves for bounce.
- Transitions are color-block wipes (shape wipe) or an element flying out and carrying the whole scene change.

## Sound in Subclip

`search_public_audio` for "future bass loop 120 bpm" or "pop pluck loop" (prefer CC0) and `source: "sfx"` for pop, boing and whoosh; place each effect on its frame as a native audio item. Or `generate_music` after a quote.
