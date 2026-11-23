# Light Leak Cinema (frame-light-leak-cinema)

Best for: Cinematic intro, documentary cold open, chapter card, mood piece over b-roll.

## Canvas and engine

HyperFrames, 2.39:1 letterbox inside a 16:9 canvas (black bars), 6 to 10 s.

## Look

Palette: Burnt dark #1A0D08 to #0A0502, amber #FFB547, orange #FF7E3F, terracotta #D97757, cream text #F5E9D6.

Type: EB Garamond italic at 84 px for the title, IBM Plex Mono small caps with wide tracking for captions.

## Layers

- Letterbox bars top and bottom to reach 2.39:1.
- Scene backdrop: layered radial glows near the top right, a dark vignette, optional b-roll underneath.
- Three faint vertical scratches at 12 to 18 percent opacity and film perforations along an edge at 50 percent.
- Top caption row (reel, title, timecode), the italic title and a one-line dek lower left, bottom caption row (coordinates, format, label).

## Timeline beats

Build these as tweens on one paused timeline. Times are in seconds from the start of the layer.

- t=0 bars slide in over 0.8 s; glows fade up over 1.5 s.
- t=0.6 caption rows fade in; t=1.0 title fades and rises 24 px over 1.2 s; t=1.8 dek fades.
- Light leak: from t=0 let the amber glow drift 6 percent right and swell 15 percent over the full length, then settle.
- Scratches flicker on and off in 0.1 s steps at fixed times (for example t=1.2, 2.6, 4.1).

## Signature to keep

A warm light leak breathing over a quiet serif title, with film dressing at the edges.

## Notes for Subclip

Put real footage on the track below and keep the leak at low opacity. Blur used for the glow must sit on a layer with no text.

Follow [layer-rules.md](layer-rules.md) for seekable timing, export-safe styling and fonts. Replace every sample word and number with the creator's real content.

Adapted for Subclip from https://github.com/nexu-io/open-design/tree/e033aad1d15a9d4084316e5223f2c6597fd32619/plugins/_official/video-templates/frame-light-leak-cinema by nexu-io, Apache-2.0.
