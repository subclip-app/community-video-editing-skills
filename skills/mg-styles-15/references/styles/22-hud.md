# Cyberpunk HUD / FUI (Fictional UI)

Original film: KESTREL-9, "Target Acquired". 1920x1080, 30 fps, 10 s, final jury score 7.93 / 10. Upstream: [prompt](https://github.com/Vincentwei1021/mg-styles-15/blob/main/prompts/22-hud.md), [source](https://github.com/Vincentwei1021/mg-styles-15/tree/main/demos/22-hud).

Pick it for: tech reviews, game edits, aerospace and defense explainers, AI product demos, anything that should feel "high tech".

## Output (fixed in the original)

1920x1080, 30 fps, exactly 10.000 s (300 frames), stereo audio, music peaks under -1 dB.

## Route in Subclip

A HyperFrames layer: Canvas2D or SVG FUI layers drawn as a pure function of the seek time, seeded random data, glow via canvas `shadowBlur`, chromatic aberration by redrawing text in red and cyan at plus or minus 2 px, scanlines drawn on top. The central hologram can be a projected wireframe globe in Canvas2D (as in the test film in `examples/`) or a Three.js wireframe in a HyperFrames Three.js layer. Upstream route: SVG and Canvas FUI layers plus a Three.js wireframe hologram, seeded random data, glow and scanline post pass.

## Creative seed (swap this)

"TARGET ACQUIRED." Cyberpunk HUD and FUI at film UI grade (Territory Studio level density and restraint).
- Deep teal-black; cyan #00E5FF linework with an orange-red #FF6A00 alert state; a hex grid, concentric rotating rings with ticks, a radar sweep (conic) with blips, data columns (monospace numbers rolling 3 to 5 frames and then settling), typewriter status lines with a cursor, sparkline graphs, a central wireframe hologram (globe or drone) with scanlines.
- Layered build-up: lines draw on in a hierarchical staggered order, data comes alive, a target is found, lock brackets snap from 1.4 to 1.0 (fast out, slow in), everything flips to alert orange with "TARGET LOCKED" and coordinates "N31°14′ E121°29′".
- Glow, slight chromatic aberration, scanlines, restrained micro glitches.
- Sound: a darksynth pulse plus HUD beeps, scan sweeps, an ascending lock-on tone, an alarm on lock.

## Signature features and key techniques

Packaging that imitates the heads-up displays of sci-fi films and games: cyan and orange neon wireframes, target lock frames, radar sweeps, small streams of data text. It is the default "tech" skin in gadget reviews, game edits (Cyberpunk 2077, EVA remixes), military and aerospace explainers and AI product demos; After Effects HUD tutorials reach hundreds of thousands of views.

Visual features: cyan and orange neon wireframes, target lock frames and crosshairs, radar or ring scan loops, small monospace data streams and typewriter text, hexagon grids and glow.

Key techniques:
- Wireframe growth: SVG `stroke-dasharray` and `stroke-dashoffset` draw-on, elements unfold in hierarchical staggered frames.
- Ring radar: a rotating conic-gradient scan sector loop plus blinking target points.
- Number roll: random numbers jump quickly for 3 to 5 frames and then settle on the real value; typewriter text with a blinking cursor.
- Lock frame: four corner brackets shrink from large to small and snap onto the target (scale 1.4 to 1.0, fast out and slow in).
- A global outer glow plus slight chromatic aberration plus scanlines unify the texture.

## Sound in Subclip

`search_public_audio` for "cyberpunk loop" or "darksynth" (CC0 first), `source: "sfx"` for beep, scanner, lock-on, alarm, each on its visual hit.
