# Data Rollup (Remotion option) (frame-data-rollup)

Best for: A data frame where the numbers animate, weekly metrics or growth bars driven by real values, one data beat inside a longer video.

## Canvas and engine

HyperFrames by default; a Remotion layer on request (the original is a Remotion component). 16:9, 6 s. Works at 9:16 and 1:1 because sizes scale from the canvas.

## Look

Palette: Background #0E0E10, foreground #F5F5F2, accent #FF5A2C for bars and rolled numbers.

Type: System sans for title and labels, system mono for the rolled numbers; no external fonts.

## Layers

- Title at 10 percent from the top, 5.8 percent of canvas height.
- One slot per item across 84 percent of the width; each slot has a bar (rounded top), a rolled number above it and a label beneath.
- Optional unit suffix after each number.

## Timeline beats

Build these as tweens on one paused timeline. Times are in seconds from the start of the layer.

- Title fades and rises 24 px over about 0.5 s (no bounce).
- Bar i starts at i times 0.12 s and grows with a spring (damping 14, mass 0.7, stiffness 90), about 0.8 s to settle.
- The number rolls from 0 to its true value on the same curve, so figure and bar finish together.
- If the largest value is at least 50 times the smallest, scale bar heights on a log scale (smallest bar about 25 percent tall); the printed numbers stay true.

## Signature to keep

Bar and number move on the same spring curve.

## Notes for Subclip

HyperFrames: tween `{v:0}` to the value with `back.out(1.2)` or a custom spring ease and write the rounded value in `onUpdate`. Remotion: follow `subclip-remotion-layer`, use `spring()` and `interpolate()`, and pass the data as typed props. Never use a random value.

Follow [layer-rules.md](layer-rules.md) for seekable timing, export-safe styling and fonts. Replace every sample word and number with the creator's real content.

Adapted for Subclip from https://github.com/nexu-io/open-design/tree/e033aad1d15a9d4084316e5223f2c6597fd32619/plugins/_official/video-templates/frame-data-rollup by nexu-io, Apache-2.0.
