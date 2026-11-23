# Creative Voltage (frame-creative-voltage)

Best for: Energetic brand or campaign title, a creative reveal with a human hand-drawn accent.

## Canvas and engine

HyperFrames, 16:9, 4.5 s of motion then a hold.

## Look

Palette: Electric blue #2F4BFF panel, near black #0D0D14, white text, light blue outline #6F86FF.

Type: Syne 800 at 132 px for the display title, Caveat for the handwritten line (120 px, rotated -7 degrees), Space Mono for meta lines.

## Layers

- Left panel (47 percent) in blue, right panel (53 percent) in near black; a soft white radial glow on the blue panel.
- Mono meta line top left on blue, mono caption bottom right on dark.
- Right aligned three-line display title; the middle word is outlined in blue with a 2 px light stroke.
- Handwritten phrase on the blue panel and a hand-drawn curved underline beneath it.

## Timeline beats

Build these as tweens on one paused timeline. Times are in seconds from the start of the layer.

- t=0.1 left panel slides in from the left over 0.85 s (expo.out); t=0.25 right panel from the right.
- t=0.9 glow fades in over 1.2 s; t=1.0 meta line fades.
- t=1.0, 1.18, 1.36 title lines rise 34 px over 0.7 s.
- t=1.4 script phrase fades in, rises 20 px and scales from 0.9 over 0.8 s.
- t=1.9 underline path draws over 0.9 s (dash offset 600 to 0).
- t=2.2 caption fades.

## Signature to keep

Two offset panels, an outlined word, and one hand-written gesture.

## Notes for Subclip

Keep the handwritten phrase to two or three words. The outlined word is the idea you want remembered.

Follow [layer-rules.md](layer-rules.md) for seekable timing, export-safe styling and fonts. Replace every sample word and number with the creator's real content.

Adapted for Subclip from https://github.com/nexu-io/open-design/tree/e033aad1d15a9d4084316e5223f2c6597fd32619/plugins/_official/video-templates/frame-creative-voltage by nexu-io, Apache-2.0.
