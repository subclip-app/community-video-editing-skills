# Logo Outro (frame-logo-outro)

Best for: Video closing card, brand outro, channel sign-off.

## Canvas and engine

HyperFrames, 16:9, 4 s of motion then a hold, about 6 s total.

## Look

Palette: Radial dark background #1A1535 to #08090C, accent violet #7C5CFF, text #F5F5F7, a 4 px accent ribbon along the top.

Type: Inter Tight 900 at 84 px for the brand, medium weight for the tagline, small caps for meta.

## Layers

- The creator's logo, in the sample a five-piece geometric mark at 140 px.
- Brand name with a shimmer sweep, a tagline with an accent phrase, and a meta row (site, handle, year).
- Timecode and label at the corners.

## Timeline beats

Build these as tweens on one paused timeline. Times are in seconds from the start of the layer.

- t=0 to 0.32 the five logo pieces fly in from offsets at 1.4 scale to rest, 0.08 s apart, 1 s each (back.out 1.56).
- t=1.1 a glow bloom builds around the logo over 0.8 s (box shadow or a soft ring, not a filter on text).
- t=1.4 brand name fades up 20 px over 0.8 s; t=1.7 tagline; t=2.1 meta over 0.6 s.
- t=1.9 shimmer: a highlight band sweeps across the brand name over 1.8 s (a clipped gradient bar, built as a masked element).

## Signature to keep

Pieces assemble, glow, then the words settle.

## Notes for Subclip

Split the creator's real logo into three to five pieces. If it cannot be split, scale and fade the whole mark in with the same bounce. Never redraw a third party's trademark.

Follow [layer-rules.md](layer-rules.md) for seekable timing, export-safe styling and fonts. Replace every sample word and number with the creator's real content.

Adapted for Subclip from https://github.com/nexu-io/open-design/tree/e033aad1d15a9d4084316e5223f2c6597fd32619/plugins/_official/video-templates/frame-logo-outro by nexu-io, Apache-2.0.
