# NYT Graph (bars plus line) (frame-nyt-graph)

Best for: News-style stat reveal, bars with a line over time, an editorial data point.

## Canvas and engine

HyperFrames, 16:9, 15 s.

## Look

Palette: Off-white #FAF9F6, text #333, bar grey #5C5C5C, line blue #326FA8, gridlines #E8E8E8, source grey #999.

Type: Libre Baskerville for the headline (42 px), Libre Franklin for subtitle, axis labels and key.

## Layers

- Left aligned header: headline, subtitle and an inline key (a square for bars, a line for the series).
- SVG chart 1400 by 500 px: five gridlines, month labels, six bars with value labels, a drawing line with a travelling dot and percentage labels.
- A baseline rule and a small source line.

## Timeline beats

Build these as tweens on one paused timeline. Times are in seconds from the start of the layer.

- t=0 headline wipes on left to right (clip inset 100 percent to 0, 1.2 s, power1.inOut); subtitle follows at t=0.2.
- t=0.5 gridlines fade in 0.25 s apart; t=1.0 key fades in.
- Bars: start at t=1.5, one every 0.5 s, each 0.8 s (power2.out), its label fades in 0.8 s after it starts.
- The line starts at t=4.5 (after the last bar begins plus 0.5 s) and draws over 3 s linearly; the dot follows the points and each percent label counts up from 0.0 and fades in as the dot reaches it.
- t=8 source fades in. Hold to the end.

## Signature to keep

Everything is a draw-on: text wipes, bars rise, a line is traced by a dot.

## Notes for Subclip

Scale bars and line to the creator's data with two separate axes (for example revenue and rate) and label both. Keep six or fewer categories.

Follow [layer-rules.md](layer-rules.md) for seekable timing, export-safe styling and fonts. Replace every sample word and number with the creator's real content.

Adapted for Subclip from https://github.com/nexu-io/open-design/tree/e033aad1d15a9d4084316e5223f2c6597fd32619/plugins/_official/video-templates/frame-nyt-graph by nexu-io, Apache-2.0.
