# Swiss Grid (overlay) (frame-swiss-grid)

Best for: Corporate stat callouts over a talking head, minimal report card, typography-led title.

## Canvas and engine

HyperFrames transparent layer over footage, 16:9, 10 to 15 s. The intro lasts about 1.9 s; callouts follow.

## Look

Palette: Navy #0A1E3D, off-white #F2F2F2 and #F5F5F5, gold #D4A017, light grey #E0E0E0.

Type: Helvetica Neue or Helvetica, uppercase labels, very large gold values.

## Layers

- Intro card: a navy rule, a title and a subtitle that slide in from the left, with a slow 30 px drift.
- Three stat groups on a 12 by 12 grid: a big gold value and a navy label on an off-white tile. Stat 2 adds a progress bar (62 percent); stat 3 adds four blocks, three gold and one navy.
- Caption boxes on a solid navy strip with off-white text, switched on and off by the transcript.

## Timeline beats

Build these as tweens on one paused timeline. Times are in seconds from the start of the layer.

- t=0.2 rule draws over 0.4 s (power4.out); t=0.5 title slides in from -100 percent over 0.2 s; t=0.6 subtitle follows.
- Stat 1 enters from the left at about t=1.9 and exits to the right 0.25 s before t=4.5.
- Stat 2 enters from below at about t=4.7, exits near t=8.6; its bar fills while it holds.
- Stat 3 enters at about t=8.9 and holds to t=14.2; the blocks pop in one by one.
- Every slide lasts 0.25 s; use power2.out in and power2.in out. Mechanical, no bounce.

## Signature to keep

Fast, exact 250 ms slides on a rigid grid, one gold accent.

## Notes for Subclip

Times are from the sample; retime each stat to the moment the speaker says the number.

Follow [layer-rules.md](layer-rules.md) for seekable timing, export-safe styling and fonts. Replace every sample word and number with the creator's real content.

Adapted for Subclip from https://github.com/nexu-io/open-design/tree/e033aad1d15a9d4084316e5223f2c6597fd32619/plugins/_official/video-templates/frame-swiss-grid by nexu-io, Apache-2.0.
