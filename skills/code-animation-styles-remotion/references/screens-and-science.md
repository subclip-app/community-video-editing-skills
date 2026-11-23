# Screens and science

Canvas or SVG with a strict palette. Readouts and labels must be true to the story: no invented numbers. For counters, derive values from the same progress variable that drives the animation.

Each recipe below is a short build brief. The example clip named in the title is the visual target: open it before building. The chai film (kettle pours into a clay cup, steam rises, 5 s) is the demo story; replace it with the creator's story using `our-guide.md`.

## 64 Pixel art RPG

- Example: `examples/64-pixel-art-rpg.mp4`
- Look: Chunky pixel sprites and stepped motion in a cosy room, with a game dialogue box.
- Palette: Limited 16 colour palette, dialogue box navy with white border
- Motion rules: Render to a low-res canvas and scale with nearest neighbour; step motion on threes; typewriter dialogue.
- Typography: Pixel font, 3 to 6 words per box.
- Engine: HyperFrames (canvas)
- Best for: Gaming, devs, retro, stats as quests
- Also see: pixelfx; ai-style-atlas 22

## 81 Microscope

- Example: `examples/81-microscope.mp4`
- Look: The chai seen through a microscope: a round lens view of bubbles and specks.
- Palette: Circular lens mask, blue-green tint, vignette
- Motion rules: Slow drift and focus pull, particles move with Brownian motion from seeded noise.
- Typography: None or a tiny scale bar.
- Engine: HyperFrames (canvas)
- Best for: Biology, health, food science
- Also see: none

## 84 Hologram HUD

- Example: `examples/84-hologram-hud.mp4`
- Look: A cyan sci-fi hologram with wireframes, readouts and a fill gauge.
- Palette: Black, cyan #26c9d5, white, scanlines
- Motion rules: Wireframe draws on, scanline sweep, readouts count up, a small glitch on each beat.
- Typography: Mono upper case labels.
- Engine: HyperFrames (SVG plus canvas)
- Best for: Tech, AI, data and dashboards
- Also see: ai-style-atlas 06

## 85 Circuit board

- Example: `examples/85-circuit-board.mp4`
- Look: A green circuit board where the chai flows along glowing copper traces.
- Palette: PCB green #0f5a3a, copper #d89b4a, light pulses cyan
- Motion rules: Traces draw on, pulses travel along paths, chips light when reached.
- Typography: Silkscreen mono labels.
- Engine: HyperFrames (SVG)
- Best for: Hardware, data flow, networks, AI
- Also see: code-motion-styles 12

