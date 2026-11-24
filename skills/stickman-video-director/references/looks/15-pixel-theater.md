# 15 B7 Pixel theater

- **Reference clip:** `examples/17-pixel-theater.mp4` ("A path in your life", choices and noodles). Original author's sample, first 10 s of a 20 s film, silent.
- **Upstream source:** `references/b7-pixel-theater.md`, `b7-native-portrait.md`, `b7-review.md` in [kaomei/stickman-video-director](https://github.com/kaomei/stickman-video-director/blob/8394bec0148fa281ea59171d90fddc13afb80c4e/skills/directing-stickman-videos/references/b7-pixel-theater.md).
- **Engine:** B, drawn entirely in code. **Best for:** choice-driven stories, ironic life lessons, dark comedy, emotional fables with a game-like twist.

## The look

Crisp pixel art, expressive white thin-line stick figures with a round white head and simple black face, scene-specific palettes, restrained dithering and coherent shadows, no blurred edges and no smooth-vector substitutes. Each character has one or two small meaningful accessories tied to the story (a chef hat and apron, a courier cap and satchel). A closing reflection with typewriter keystrokes and a softly pulsing line lets the ending linger.

## Build rules

- **No image or video model.** Draw scenes, actors, accessories, text and animation in code inside one HyperFrames layer (see the installed `subclip-hyperframes-layer` skill; for pixel effects see the `pixelfx` community skill). Zero Subclip credits.
- Use a small logical canvas and integer scaling: for example 320 x 180 drawn on a canvas and shown at 6x with nearest-neighbor scaling (CSS `image-rendering: pixelated`), giving 1920 x 1080. For 9:16 re-compose natively at 180 x 320 and scale the same way. Keep integer-aligned drawing.
- Fixed geometry: the same head size, limb lengths, line weight and accessory attachment in every frame. Attach accessories to the actual body part through all motion.
- Cause and contact: each action has a visible cause and consequence (a button press that changes the street, a missed noodle bowl). Vary framing; do not reuse one wide shot.

## Recipe skeleton for the layer

```text
Draw with canvas 2D in a [320x180] logical grid, integer coordinates only, no anti-aliasing. Palette: [4 to 8 named colors per scene]. Actor: round white head, black eyes, thin white line limbs of fixed lengths, [one or two accessories]. Scene: [location, props, light]. Timeline (GSAP, paused, seekable): [0-2s establish] [2-5s action and consequence] [5-8s reaction] [8-10s closing line typed with a keystroke per character]. Caption box at y=[165], single line, width under [90] percent of the grid.
```

## Captions, voice and sound

Short single-line pixel captions that match the art and stay readable (in 9:16 about 60 percent of the frame width, never over 65). Speech first: the voice (a calm narrator, gender matched to the lead) leads; game-like bed, 8-bit effects on actions, a typewriter ending. Pick music with `search_public_audio` or `generate_music`; do not reuse the original's music.

## Checks

Pixels stay crisp and integer-aligned; the figure geometry never drifts; every action has a cause; the first spoken beat already has development (no static opening); captions never collide with art; the film ends on the quiet typed line.
