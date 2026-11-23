# Pentagram Stat (frame-pentagram-stat)

Best for: A single hero metric or benchmark reveal, an editorial data slide, a rational brand moment.

## Canvas and engine

HyperFrames, 16:9, 4 s of motion then a hold, about 8 s total.

## Look

Palette: White, black, one red #E63946, grey #999999 for the subtitle.

Type: Archivo 900 at 200 px for the headline, Archivo 700 uppercase with wide tracking for labels, a 1020 px ghost number at 7 percent opacity.

## Layers

- Hairline Swiss grid: horizontal rules at 110 and 560 px, vertical rules at 96, 960 and the right margin.
- Huge ghost number bleeding off the right edge.
- Left block: red uppercase label, headline with a red full stop, subtitle.
- A 400 px red center rule and a five-bar chart (one red bar at 100 percent).
- Black data bar sliding up from the bottom with three stat chips and a credit.

## Timeline beats

Build these as tweens on one paused timeline. Times are in seconds from the start of the layer.

- t=0 to 0.2 grid rules sweep in over 0.7 s (opacity to 6 percent).
- t=0.5 ghost number rises from -38 to -50 percent over 1.1 s (expo.out).
- t=0.7 label fades up; t=0.85 headline; t=1.15 subtitle.
- t=1.3 red rule grows over 0.8 s; t=1.35 to 1.66 bars grow from the base 0.07 s apart.
- t=1.5 black bar slides up over 0.6 s (expo.out).

## Signature to keep

A giant number, a grid you barely see, one red detail.

## Notes for Subclip

Use one number the creator can source. Animate the headline value with a count-up from 0 if the number is a score or percentage.

Follow [layer-rules.md](layer-rules.md) for seekable timing, export-safe styling and fonts. Replace every sample word and number with the creator's real content.

Adapted for Subclip from https://github.com/nexu-io/open-design/tree/e033aad1d15a9d4084316e5223f2c6597fd32619/plugins/_official/video-templates/frame-pentagram-stat by nexu-io, Apache-2.0.
