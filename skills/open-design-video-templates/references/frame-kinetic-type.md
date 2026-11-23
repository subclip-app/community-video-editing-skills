# Kinetic Type (frame-kinetic-type)

Best for: A punchy promo headline built from six short typographic scenes, a bold statement, a fast intro.

## Canvas and engine

HyperFrames, 16:9, 15 s. Six scenes joined by a quick white wipe; the sample runs over footage that stays hidden until the second scene.

## Look

Palette: Near black #0A0A0F base, white wipe, plus a different mini palette per scene: Swiss grid white, dark overlay with glyphs, red dot on black, pastel Wes Anderson card, black Vignelli close.

Type: Inter for most scenes with a heavy weight for the hook. Swap per scene: grotesque for Swiss, light uppercase for the glyph scene, serif italic for the Wes Anderson line.

## Layers

- Scene 1 hook: three stacked phrases, for example 'What if', 'motion graphics', 'wrote themselves?'.
- Scene 2 Swiss panel: a grid of thin lines, a circle and a square, title, subtitle and a two-word main line.
- Scene 3 three glyph items (ring and diamond, rectangle with wipe, triangle with three lines) with labels and a footer sentence.
- Scene 4 two lines with a red full stop that slides up, second line pushes left.
- Scene 5 two lines separated by a rule.
- Scene 6 title and subtitle on black with a rule.

## Timeline beats

Build these as tweens on one paused timeline. Times are in seconds from the start of the layer.

- t=0.2 'What if' rises 30 px (power3.out); t=0.5 middle phrase scales in (back.out 1.7); t=0.9 last phrase slides from 100 px right.
- t=2.0 white wipe in over 0.2 s, out at t=2.2 revealing scene 2; panel enters at t=2.3 over 0.8 s (expo.out); words rise 0.15 s apart from t=3.0; circle and square pop at t=3.2 and 3.4; panel exits at t=4.7.
- Scene 3 runs t=5.3 to 9.6: three items enter 0.7 s apart; the diamond turns 225 degrees over 2 s; the wipe bar fills to 100 percent; three lines grow 0.2 s apart; footer rises at t=7.8.
- Scene 4 t=9.6 to 11.7: line 1 expo.out in 0.6 s, line 2 back.out at t=10.2; whole block drops 300 px at t=11.4.
- Scene 5 t=11.7 to 13.5: top text back.out at t=12.0, rule grows to 400 px at t=12.3, bottom text at t=12.6.
- Scene 6 t=13.5 to 14.7: overlay fades to 60 percent, title at t=13.8, subtitle at t=14.0, rule at t=14.2, then cut to black.

## Signature to keep

Each scene is its own typographic school, joined by hard cuts and one wipe. Keep scenes short (2 to 4 s).

## Notes for Subclip

Replace the sample sentences with the creator's own six beats. You can keep fewer scenes. Build each scene as a group inside one layer so the single timeline stays in sync.

Follow [layer-rules.md](layer-rules.md) for seekable timing, export-safe styling and fonts. Replace every sample word and number with the creator's real content.

Adapted for Subclip from https://github.com/nexu-io/open-design/tree/e033aad1d15a9d4084316e5223f2c6597fd32619/plugins/_official/video-templates/frame-kinetic-type by nexu-io, Apache-2.0.
