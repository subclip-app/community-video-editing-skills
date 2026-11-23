# Glitch Title (frame-glitch-title)

Best for: Tech product reveal, cyberpunk or hacker aesthetic, a title for a transition.

## Canvas and engine

HyperFrames, 16:9, 5 to 15 s with glitch bursts about every 4 s.

## Look

Palette: Near black #0D0E10, off-white #F5F5F7, cyan #00F0FF and magenta #FF2BD6 offset copies, amber #FFB547 for the status line, faint green grid.

Type: Space Grotesk 900 at 200 px for the title, JetBrains Mono for status lines and ASCII corners.

## Layers

- Status header: a transmission code, a frame label and a REC marker.
- ASCII block corners at 30 percent opacity.
- Centered kicker, a two-line title, and a mono status line with one struck-through amber word.
- Cyan and magenta copies of the title placed under the white title for the chromatic split.
- Overlays: scanlines, a 56 px grid, grain, vignette.

## Timeline beats

Build these as tweens on one paused timeline. Times are in seconds from the start of the layer.

- t=0 to 0.6 scanlines and grid fade in; the title appears with a short flicker (opacity 0, 1, 0.4, 1 in 0.15 s steps).
- Glitch burst every 4 s at t=3.7 to 3.9: the title jumps -6, +8, -4, +4 px in steps of 0.03 s while the cyan copy goes -3 to -9 px and the magenta copy +3 to +9 px, then all return to rest.
- Status line types in character by character at t=0.8 to 1.6.
- Hold the clean state between bursts; end on a final burst and a hard cut.

## Signature to keep

Short violent offset bursts on a calm base, never a constant wobble.

## Notes for Subclip

Build the chromatic split with real duplicate text layers, not an SVG filter. Reduce burst frequency for a calmer feel.

Follow [layer-rules.md](layer-rules.md) for seekable timing, export-safe styling and fonts. Replace every sample word and number with the creator's real content.

Adapted for Subclip from https://github.com/nexu-io/open-design/tree/e033aad1d15a9d4084316e5223f2c6597fd32619/plugins/_official/video-templates/frame-glitch-title by nexu-io, Apache-2.0.
