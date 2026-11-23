# Play Mode (overlay) (frame-play-mode)

Best for: Playful social ad, casual intro, fun product stat stickers.

## Canvas and engine

HyperFrames transparent layer, 16:9, about 10 to 15 s.

## Look

Palette: Hot pink #FF2D8A, electric blue #0057FF, lime #7FFF00, yellow #FFE500, white.

Type: Nunito, heavy weights, large rounded numerals.

## Layers

- Title: a hot pink word tilted -5 degrees with a stacked white offset shadow.
- Three sticker cards (blue, white, pink) with a rotated duplicate behind for a sticker stack, stat number plus a short label, decorated with circles, pills and blobs.
- Pink captions box.

## Timeline beats

Build these as tweens on one paused timeline. Times are in seconds from the start of the layer.

- t=0.5 title scales 0 to 1.1 over 0.6 s (back.out 1.7), settles to 1 over 0.4 s (elastic.out), swings between -5 and -3 degrees, exits at about t=1.4 by scaling to 0.5 over 0.3 s.
- Each sticker enters from scale 0 with a slight rotation (8, -5, 3 degrees), springs in with back or elastic ease, holds, then pops out; decorative shapes bounce in 0.1 s apart.
- The title returns as an end card near the end of the piece with the same bounce.

## Signature to keep

Everything springs; shapes overlap on purpose.

## Notes for Subclip

Keep elastic overshoot small enough that text stays on screen. Drop shadows on text must be built with duplicated offset text, not a filter.

Follow [layer-rules.md](layer-rules.md) for seekable timing, export-safe styling and fonts. Replace every sample word and number with the creator's real content.

Adapted for Subclip from https://github.com/nexu-io/open-design/tree/e033aad1d15a9d4084316e5223f2c6597fd32619/plugins/_official/video-templates/frame-play-mode by nexu-io, Apache-2.0.
