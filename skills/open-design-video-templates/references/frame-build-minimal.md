# Build Minimal (frame-build-minimal)

Best for: Premium product or brand hero, calm one-word statement, elegant title card.

## Canvas and engine

HyperFrames, 16:9, 5 s of motion then a long hold.

## Look

Palette: Warm white #FAFAF8, ink #1A1A18, soft greys #B0ACA4 to #D8D4CE, one warm gold #D4A574, a very faint gold radial wash.

Type: Inter weight 200 at 220 px for the hero word with tight tracking (-7 px), Inter 300 for the description, wide-tracked uppercase for eyebrow and side labels.

## Layers

- Faint radial wash behind the center.
- Two thin corner marks, top left and bottom right.
- Rotated side labels on the left and right edges.
- Centered stack: eyebrow, hero word, 88 px gold hairline, two-line description.
- Seven thin vertical indicator bars at the bottom, two of them gold; a small gold glyph top right.

## Timeline beats

Build these as tweens on one paused timeline. Times are in seconds from the start of the layer.

- t=0 wash fades in over 1.4 s; t=0.2 corner marks fade in over 0.8 s.
- t=0.5 eyebrow fades up 22 px over 0.9 s.
- t=0.6 to 0.92 hero letters rise 30 px and fade, 0.08 s apart, 0.7 s each (expo.out).
- t=1.8 side labels fade over 1 s; t=1.9 gold line grows from 0 to 88 px over 1 s.
- t=2.2 description fades up; t=2.4 to 2.76 indicator bars scale up from the bottom 0.06 s apart.
- t=2.6 gold glyph fades. From t=3 the bars breathe between opacity 1 and 0.45 on a 4 s sine, finite repeats.

## Signature to keep

Lots of empty space, a single light-weight word, one gold detail.

## Notes for Subclip

One word works best (a product name, a verb). Keep the description under two lines. Light weights need a font that actually has weight 200; if not, use 300 and slightly larger size.

Follow [layer-rules.md](layer-rules.md) for seekable timing, export-safe styling and fonts. Replace every sample word and number with the creator's real content.

Adapted for Subclip from https://github.com/nexu-io/open-design/tree/e033aad1d15a9d4084316e5223f2c6597fd32619/plugins/_official/video-templates/frame-build-minimal by nexu-io, Apache-2.0.
