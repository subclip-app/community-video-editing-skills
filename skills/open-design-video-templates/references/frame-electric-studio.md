# Electric Studio (frame-electric-studio)

Best for: Pull quote or testimonial reveal, mission statement card, clean high-contrast title.

## Canvas and engine

HyperFrames, 16:9, 4.5 s of motion then a hold.

## Look

Palette: White #FFFFFF top panel, blue #4361EE bottom panel, near black #0A0A0A and white text, black accent bar on the seam.

Type: Manrope 800 at 104 px for the quote, Manrope 700 and 500 for attribution and brand marks.

## Layers

- Top half white and bottom half blue, meeting at the horizontal center.
- A 320 by 8 px black bar sitting on the seam at the left margin.
- Three-line quote starting above the seam; the last line crosses into the blue half and turns white.
- Attribution (name and role in small caps) bottom left on blue; brand marks top right and bottom right.

## Timeline beats

Build these as tweens on one paused timeline. Times are in seconds from the start of the layer.

- t=0.1 panels slide into place from above and below over 0.9 s (expo.out).
- t=0.9 seam bar grows from 0 to 320 px over 0.8 s.
- t=1.0, 1.15, 1.3 quote lines rise 26 px and fade over 0.7 s.
- t=2.2 attribution fades; t=2.5 top brand mark fades; t=2.6 bottom mark fades to 60 percent.

## Signature to keep

The quote straddles the seam and changes color where the panels meet.

## Notes for Subclip

Break the quote so the last line carries the punch and lands on the blue half. Quote lines should be short (about 14 characters).

Follow [layer-rules.md](layer-rules.md) for seekable timing, export-safe styling and fonts. Replace every sample word and number with the creator's real content.

Adapted for Subclip from https://github.com/nexu-io/open-design/tree/e033aad1d15a9d4084316e5223f2c6597fd32619/plugins/_official/video-templates/frame-electric-studio by nexu-io, Apache-2.0.
