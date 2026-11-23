# Bold Signal (frame-bold-signal)

Best for: Section or chapter divider, bold launch statement, high-impact title card.

## Canvas and engine

HyperFrames, 16:9, 4 s of motion then a hold.

## Look

Palette: Dark gradient #1A1A1A to #2D2D2D at 135 degrees, white text, orange #FF5722 card with #1A1A1A text.

Type: Archivo Black for the number and card title, Space Grotesk uppercase for navigation and labels.

## Layers

- Dark stage with a diagonal gradient.
- Section number top left, 96 px, with a dimmed total such as 01/04.
- Breadcrumb navigation top right: one active item in orange, others at 35 percent opacity.
- Orange card 1180 by 600 px anchored to the right edge with rounded left corners (36 px) and a soft orange shadow; label and a two-line title (130 px) bottom aligned inside.
- Footer tick and small caps credit bottom left.

## Timeline beats

Build these as tweens on one paused timeline. Times are in seconds from the start of the layer.

- t=0.2 section number drops in from -30 px over 0.7 s (expo.out).
- t=0.4 to 0.7 breadcrumb items fade in with 0.1 s steps; active item to full opacity.
- t=0.6 card slides in from 110 percent right over 0.9 s (expo.out).
- t=1.15 label fades up; t=1.3 title rises 28 px over 0.8 s.
- t=1.6 footer marks fade. Hold.

## Signature to keep

A single saturated card sliding over a calm dark stage.

## Notes for Subclip

Use the breadcrumb to show where the viewer is in a series; update the active item per section if you build several dividers.

Follow [layer-rules.md](layer-rules.md) for seekable timing, export-safe styling and fonts. Replace every sample word and number with the creator's real content.

Adapted for Subclip from https://github.com/nexu-io/open-design/tree/e033aad1d15a9d4084316e5223f2c6597fd32619/plugins/_official/video-templates/frame-bold-signal by nexu-io, Apache-2.0.
