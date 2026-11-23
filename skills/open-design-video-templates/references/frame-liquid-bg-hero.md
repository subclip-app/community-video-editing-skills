# Liquid Background Hero (frame-liquid-bg-hero)

Best for: Product launch hero, SaaS landing video, editorial cover, a quote over a moving background.

## Canvas and engine

HyperFrames, 16:9, 8 to 12 s, designed to loop.

## Look

Palette: Deep indigo #1E1B4B, violet #A78BFA and #7C5CFF, pink #EC4899, cyan #06B6D4, text #FAFAF8 with a faint 64 px grid.

Type: Inter Tight 900 for the headline (up to 128 px), a serif italic for one emphasized word, small caps for chips.

## Layers

- Four large blurred color blobs (600, 520, 480 and 380 px) on the back layer.
- A faint grid overlay.
- Header chips and footer chips.
- Centered headline with one emphasized serif word, a subline, and a pill outline chip.

## Timeline beats

Build these as tweens on one paused timeline. Times are in seconds from the start of the layer.

- Blob 1 moves (0,0) to (80,-60) and scale 1 to 1.15 over half the loop and back; blob 2 moves (-100,40) and scales to 0.9; blob 3 moves (50,80) and scales to 1.2; blob 4 follows blob 1 at 60 percent opacity. Use loop lengths that divide the layer length (for example 12 s, 6 s, 4 s on a 12 s layer).
- t=0.5 headline rises and fades over 1 s; t=1.1 subline; t=1.5 chip.
- End the layer on the same positions as the start for a clean loop.

## Signature to keep

A slow liquid background behind large type.

## Notes for Subclip

Difference blending is not export-safe. Use solid white text with a darker overlay for contrast. Keep blurred blobs on their own layer with no text inside.

Follow [layer-rules.md](layer-rules.md) for seekable timing, export-safe styling and fonts. Replace every sample word and number with the creator's real content.

Adapted for Subclip from https://github.com/nexu-io/open-design/tree/e033aad1d15a9d4084316e5223f2c6597fd32619/plugins/_official/video-templates/frame-liquid-bg-hero by nexu-io, Apache-2.0.
