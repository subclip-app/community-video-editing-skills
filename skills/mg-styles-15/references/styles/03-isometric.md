# Isometric 2.5D

Original film: ISOPOLIS "Let the City Grow". 1920x1080, 30 fps, 10 s, final jury score 8.00 / 10. Upstream: [prompt](https://github.com/Vincentwei1021/mg-styles-15/blob/main/prompts/03-isometric.md), [source](https://github.com/Vincentwei1021/mg-styles-15/tree/main/demos/03-isometric).

Pick it for: tech architecture diagrams, app feature tours, smart city or logistics stories, anything dense but cute.

## Output (fixed in the original)

1920x1080, 30 fps, exactly 10.000 s (300 frames), stereo audio, music peaks under -1 dB.

## Route in Subclip

Either a HyperFrames layer that draws true isometric faces in Canvas2D or SVG (project every point with `sx = (x - y) * cos30 * U`, `sy = (x + y) * sin30 * U - z * U`, draw tiles first, then objects sorted by `x + y`), or a HyperFrames Three.js layer (pinned `three@0.181.2`) with an `OrthographicCamera` at 35.264 degrees elevation and 45 degrees azimuth, soft shadows on a `ShadowMaterial` receiver. The test film in `examples/` uses the Canvas2D route. Upstream route: Three.js OrthographicCamera at a true isometric angle with soft shadows and AO postprocessing, or SVG with SSR matrix faces.

## Creative seed (swap this)

"Miniature smart city." An isometric miniature city or data campus that builds itself: the School of Motion isometric mograph showpiece.
- True isometric camera (orthographic, 35.264 degree elevation, 45 degree azimuth), no perspective, pastel studio palette (lavender ground, mint, peach, sky blue, white) with soft shadows and ambient occlusion so it reads like a premium Dribbble or Behance hero.
- 0 to 2 s: ground tiles flip or drop in as a wave from the center (tiny bounce each).
- 2 to 5 s: buildings GROW: the base lands, walls scaleY from 0 with overshoot, roof caps 2 to 3 frames later; trees pop; windows light up in sequence.
- 5 to 8 s: life: cars loop along roads, a little train, drones carrying packets, glowing data streams pulse between buildings, a wind turbine spins; the camera does parallel slides (no rotation) with 1 : 0.8 : 0.6 parallax layers (foreground clouds).
- 8 to 10 s: pull back to reveal the whole island floating in a pastel void; a title card set ON the isometric plane (text skewed into iso space), for example "SMART CITY OS".
- Sound: bright plucky tech melody (FM marimba or pluck), soft clicks and pops for every tile and building landing, an airy whoosh on the pull-back.

## Signature features and key techniques

A miniature world in 30 degree isometric projection: a small city, an office slice, a data center. No vanishing point, equal scale everywhere. High information density that stays cute; the standard for tech company architecture animations and app feature demos. School of Motion has a whole isometric mograph tutorial series.

Visual features: 30 degree isometric projection, no perspective vanishing point, miniature scenes, buildings that grow, parallel dolly camera moves.

Key techniques:
- Build isometric faces with the SSR formula: scale vertically to 86.6%, then shear or skew by plus or minus 30 degrees, then rotate by minus or plus 30 degrees; make the three faces separately and join them.
- Fake 3D with layer order: Z order equals screen y; objects moving along the iso grid keep a 2:1 pixel slope.
- Building growth: the base lands first, walls rise with scaleY from 0, and the roof caps 2 to 3 frames later.
- The camera only translates the whole group (no rotation), with parallax speeds of 1 : 0.8 : 0.6 for foreground, middle and background.
- In After Effects a shortcut is true 3D layers with an orthographic camera (no perspective): the Motion Design School isometric camera trick.

## Sound in Subclip

`search_public_audio` for "pluck arpeggio 120 bpm" or "marimba loop" (CC0 first), pops and clicks from `source: "sfx"` on tile and building landings, a whoosh on the pull-back.
