# Vignelli (overlay, portrait) (frame-vignelli)

Best for: Portrait social stat overlays, bold statement cards, red accent promos.

## Canvas and engine

HyperFrames transparent layer over 9:16 footage, 10 to 14 s.

## Look

Palette: Black, white, charcoal #1A1A1A and a single red #CC0000.

Type: Helvetica Neue, very bold, large stat numbers, short uppercase labels.

## Layers

- Stat panels: a charcoal slab with a red accent bar, a huge number and a large label.
- Word-by-word bold captions on white with black text.
- A closing branding block with a logo underline.

## Timeline beats

Build these as tweens on one paused timeline. Times are in seconds from the start of the layer.

- Each panel enters from the right with two parts offset by 0.1 s (slab then red bar), 0.8 s expo.out, then the label rises 50 px and fades over 1 s.
- Each panel exits 0.6 to 0.8 s before the next arrives, sliding left with expo.in.
- About three stats fit 12 s; the branding block enters near the end and its underline scales from 0 over 0.8 s.
- Captions: show each word group at its spoken start time and hide it at its end.

## Signature to keep

Slabs of flat color sliding in and out with hard easing; the red bar is always the second thing to arrive.

## Notes for Subclip

Build captions natively with `transcribe_project` and Subclip's caption tools if the creator wants spoken words; use the layer only for the stat slabs.

Follow [layer-rules.md](layer-rules.md) for seekable timing, export-safe styling and fonts. Replace every sample word and number with the creator's real content.

Adapted for Subclip from https://github.com/nexu-io/open-design/tree/e033aad1d15a9d4084316e5223f2c6597fd32619/plugins/_official/video-templates/frame-vignelli by nexu-io, Apache-2.0.
