# Product Promo (30 s, with sound) (frame-product-promo-30s)

Best for: 30-second B2B or SaaS launch promo with a problem opening, brand reveal, benefits, product surfaces, value pillars and a CTA.

## Canvas and engine

HyperFrames, 16:9, 30 s as eight scene groups in one layer (or eight layers back to back), with music and effects on native audio lanes.

## Look

Palette: Pure black #000 stages, one product accent gradient (the sample used #5E6AD2 to #A9B0F0 and a purple #A155FF for the flowchart), white text at 85 percent.

Type: Space Grotesk for the problem line, Inter for the brand, Azeret Mono for flowchart labels, Instrument Serif and Inter for surfaces, Geist and JetBrains Mono for pillars, Cormorant Garamond for the foundation scene.

## Layers

- Eight scenes: 1 problem type (4 s), 2 card to logo (4 s), 3 brand reveal (2 s), 4 benefits flowchart (4.8 s), 5 product surfaces (4.7 s), 6 wheel and pillars (2.5 s), 7 foundation (3 s), 8 CTA outro (5 s).
- Every scene has a faint grid floor and a hard-cut or whip transition.

## Timeline beats

Build these as tweens on one paused timeline. Times are in seconds from the start of the layer.

- Scene starts at t=0, 4, 8, 10, 14.8, 19.5, 22 and 25.
- Scene 1: two lines, the last word 'broken' emphasized and outlined; a whip streak at the end (t=3.6).
- Scene 2: a ticket card (for example JIRA-2847) morphs into the product symbol.
- Scene 4: three benefit words feed an animated flowchart; edges draw and a comet travels along them; the flowchart fades in at t=1.2.
- Scene 5: three surfaces (Plan, Build, Monitor) each slide up over 0.7 s with a laptop frame and screenshot, then blur out to the left over 0.4 s; a micro caption shows from t=2.0 to 3.0.
- Scene 7: the symbol with three floating symbols (sine, 1 s up and back).
- Scene 8: symbol and wordmark fade in over 0.5 s, a shimmer sweep over 0.7 s, a vignette pulse over 5 s.
- Sound: a soft pad under the whole piece at about 15 percent volume, three short whooshes at the scene whips (about t=3.8, 6.0, 8.3) at about 20 percent.

## Signature to keep

Eight scenes with a hard rhythm: one idea per scene, whip transitions, calm pad underneath.

## Notes for Subclip

Write eight short lines of real copy first and confirm them. Use the creator's logo and screenshots (import them and bind with the media URL). Source sound with `generate_music` and `search_public_audio` after quoting credits; mix with `update_audio_item`. Do not blur text for transitions; slide and fade instead.

Follow [layer-rules.md](layer-rules.md) for seekable timing, export-safe styling and fonts. Replace every sample word and number with the creator's real content.

Adapted for Subclip from https://github.com/nexu-io/open-design/tree/e033aad1d15a9d4084316e5223f2c6597fd32619/plugins/_official/video-templates/frame-product-promo-30s by nexu-io, Apache-2.0.
