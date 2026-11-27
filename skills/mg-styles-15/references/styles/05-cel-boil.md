# Frame-by-Frame Cel Animation and Line Boil

Original film: HAND MADE. 1920x1080, 24 fps, 10 s, final jury score 8.07 / 10. Upstream: [prompt](https://github.com/Vincentwei1021/mg-styles-15/blob/main/prompts/05-cel-boil.md), [source](https://github.com/Vincentwei1021/mg-styles-15/tree/main/demos/05-cel-boil).

Pick it for: warm, handmade, playful brand moments; title cards with character; anything that should feel anti-digital.

## Output (fixed in the original)

1920x1080, 24 fps, exactly 10.000 s (240 frames), stereo audio, music peaks under -1 dB. In Subclip (30 fps projects) quantize the layer clock to the drawing rate: `Math.floor(t * 12)` for animation on twos, `t * 24` for ones, `t * 8` for threes.

## Route in Subclip

A HyperFrames layer with Canvas2D: a custom variable-width brush (centerline plus pressure turned into an outline polygon). Boil is 3 to 4 seeded jitter variants of each drawing, cycled every 2 frames from the quantized clock. Paper texture: draw seeded grain in the layer with `multiply` at 10 to 15% (do not reuse the upstream paper scan). Upstream route: the same Canvas2D brush renderer with paper texture multiply.

## Creative seed (swap this)

"Handmade magic." Hand-made frame-by-frame magic, a Buck and Giant Ant hybrid (clean shapes plus hand-drawn cel FX), animated on twos at 24 fps.
- Warm paper ground; ink linework that BOILS (lines redrawn with slight variation every 2 frames); fills slightly off-register like hand coloring.
- Story: a matchstick strikes (SMEAR frame, on ones for the fast action), a flame spirit character jumps out with anticipation and squash and dances (on twos), it bursts into cel FX: smoke puffs curling, sparks, star bursts, speed lines, then the FX re-form into hand-lettered title (for example "HAND MADE") that keeps boiling on a 1 s hold (on threes for the hold).
- Palette of 3 to 4 colors: ink black, tomato red, sunny yellow, cream paper; paper grain multiply 10 to 15%.
- Sound: playful jazzy pizzicato or xylophone bed plus cartoon SFX: strike, fwoosh, pop, poof, sparkle, synced to the frame.

## Signature features and key techniques

Hand-drawn frame by frame, or frame-by-frame texture layered over vector animation. The signature is line boil: the lines wobble slightly every few frames, as if the picture breathes. Giant Ant, Buck and others use cel elements (smoke, splashes, speed lines) to accent the main animation; it is the core tool against digital perfection.

Visual features: lines that keep boiling, timing on twos or threes, smear frames, hand-drawn smoke and splash accents, paper texture ground.

Key techniques:
- Timing: at 24 fps animate mostly on twos (12 drawings per second), switch to ones for fast action, and threes for still shots.
- Faking line boil: Turbulent Displace (amount 2 to 5, size 50) with evolution randomized every 2 frames plus Posterize Time at 12 fps; real boil means drawing 3 to 4 slightly different line passes and cycling them.
- Smear frame: on the in-between of a fast move, stretch the object to 150% to 300% and keep it for only 1 frame.
- Cel FX accent layer: smoke, splashes and lightning drawn frame by frame on top of the vector subject (Buck-style hybrid).
- Overlay paper texture (multiply 10 to 15%) to unify the handmade feel.

## Sound in Subclip

`search_public_audio` for "pizzicato loop" or "xylophone playful" (CC0 first) and `source: "sfx"` for match strike, whoosh, pop, sparkle.
