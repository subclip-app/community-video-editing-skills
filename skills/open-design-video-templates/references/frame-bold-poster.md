# Bold Poster (frame-bold-poster)

Best for: Brand manifesto, vision statement, editorial or cultural opener, a few words that should feel like a magazine cover.

## Canvas and engine

HyperFrames, 16:9 (also works 9:16 and 1:1 with the figure moved above the headline), 5 s of motion then a hold, 8 to 15 s total.

## Look

Palette: Paper #F5F2EF, ink #1C1410, one tomato red #D8000F. Red is the only accent.

Type: Shrikhand for the giant figure and the headline, Libre Baskerville italic for the standfirst, Space Grotesk uppercase with wide tracking for labels.

## Layers

- Full-bleed paper sheet.
- Kicker row at top: mono label at left, a 3 px red rule that fills the space, mono date at right.
- Giant red figure (320 px) at top right, tilted -6 degrees.
- Three-line headline (150 px, line height 0.86) at lower left: line 1 ink at -2 degrees, line 2 red at -4, line 3 ink at +2.
- Italic standfirst, 34 px, max width about 980 px.
- Footer: 2 px ink rule and a mono metadata row, one item in red.

## Timeline beats

Build these as tweens on one paused timeline. Times are in seconds from the start of the layer.

- t=0 sheet fades in over 0.5 s (expo or power2 out).
- t=0.35 label fades; t=0.5 red rule scales from the left over 0.8 s (expo.out); t=0.55 date fades.
- t=0.7 figure drops from -60 px and -14 degrees to rest at -6 degrees over 0.9 s (expo.out).
- t=1.15, 1.35, 1.55 headline lines rise 40 px with fade over 0.7 s each (expo.out), landing on their tilts.
- t=1.95 standfirst fades up 22 px over 0.7 s.
- t=2.15 footer rule draws over 0.7 s; t=2.4 metadata fades. Hold to the end.

## Signature to keep

Heavy display type tilted line by line, one red accent, printed paper feel. Do not add a second accent color.

## Notes for Subclip

The figure can be a chapter number, year or count. Keep the headline to three short lines; shrink the size rather than adding a fourth line.

Follow [layer-rules.md](layer-rules.md) for seekable timing, export-safe styling and fonts. Replace every sample word and number with the creator's real content.

Adapted for Subclip from https://github.com/nexu-io/open-design/tree/e033aad1d15a9d4084316e5223f2c6597fd32619/plugins/_official/video-templates/frame-bold-poster by nexu-io, Apache-2.0.
