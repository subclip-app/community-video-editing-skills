# Data Chart (newsroom line) (frame-data-chart-nyt)

Best for: Editorial data visualization, annual report moment, comparison reveal.

## Canvas and engine

HyperFrames, 16:9, 8 s.

## Look

Palette: Cream #F7F5EE, ink #1A1A1A, a newsroom red #A91D1D for the highlight, hairlines at 25 percent.

Type: Source Serif for the headline (up to 68 px), IBM Plex Sans for body, IBM Plex Mono for axis labels and annotations.

## Layers

- Kicker row (red caps) and a frame label.
- Two-line headline with the key phrase in red italic.
- SVG chart: four hairline gridlines with value labels, a faint red area band, a black polyline for the series, a dashed red segment for the inflection, dots (red for the last three), annotations and a serif italic callout.
- Footer: source, credit, style label.

## Timeline beats

Build these as tweens on one paused timeline. Times are in seconds from the start of the layer.

- t=0 headline and kicker fade in over 0.5 s with a 12 px rise.
- t=0.3 gridlines fade in bottom to top, 0.15 s apart.
- t=0.4 the polyline draws over 1.4 s (dash offset 1000 to 0, power2.out); dots pop in as the line reaches them.
- t=1.8 red segment draws over 0.8 s; t=2.4 annotations fade in 0.15 s apart; t=3.2 callout fades.
- Hold to the end; footer fades at t=1.

## Signature to keep

Hairlines, serif headline, one red story told by the last three points.

## Notes for Subclip

Use the creator's real series. Label every annotation with the exact value and date and add the source line. Scale the y axis from the real data, not the sample.

Follow [layer-rules.md](layer-rules.md) for seekable timing, export-safe styling and fonts. Replace every sample word and number with the creator's real content.

Adapted for Subclip from https://github.com/nexu-io/open-design/tree/e033aad1d15a9d4084316e5223f2c6597fd32619/plugins/_official/video-templates/frame-data-chart-nyt by nexu-io, Apache-2.0.
