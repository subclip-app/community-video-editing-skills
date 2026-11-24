# 02 Cozy 3D elevator tower (style `tower`)

Reference: `examples/02-cozy-tower.mp4` (rough reference: two generated stills animated in code; images gpt-image-2 through the creator's Codex CLI) and the original author's frame `examples/02-cozy-tower-upstream.jpg` (By the original author).

## What it is for
Numbered lists (the six tools I use, the five steps) told as a ride in a glass elevator: one floor per item, a warm sign in the cabin reading "NN/MM [ITEM]", a screen or room for each floor, and a finale that pulls out to the tower at sunset.

## Scene recipe (lobby, one floor per item, roof)
1. Lobby: the cabin doors open, the clay mascot waves, sign "00/[MM]". [INTRO LINE]
2. Floors 1 to [N]: the cabin rises, a ding, the doors open on a room that shows [ITEM] on a screen; the mascot reacts with a face for that item; the sign shows "[NN]/[MM] [ITEM NAME]" for 2 to 4 seconds.
3. Roof: string lights, a railing, a sunset sky; a crane move pulls out to the whole tower; [CTA] on a screen.

## Look
Warm "Blender-like" world: a soft clay mascot (rounded cube body, pad hands, four legs, a painted face with 6 emotions and blush), wood, brass and glass, warm lamps, string lights, a sunset sky, miniature feel.

## Prompt to give yourself (fill the brackets)
> Vertical 3D reel, [LENGTH] seconds. A glass elevator cabin with a brass sign, floors 1 to [N] each a small glowing room, a roof at sunset. A soft clay mascot, [COLOUR], [ACCESSORY: headphones, monocle]. The cabin schedule follows the word timings: the doors open on the word [WORD] of each line. Warm tungsten light, ACES tone mapping, glow sprites on lamps and screens, a vignette as a DOM layer. Camera inside the cabin near the back wall, field of view about 64 degrees, then a crane out to the whole tower.

## Build notes (each cost the upstream a render)
- A Three.js layer: use filmic tone mapping and additive glow sprites. Do not rely on a post-processing library inside the frame renderer; it can give black frames. Draw only the floors near the camera, not dozens of point lights.
- Canvas textures for signs and screens: load fonts (with the glyphs of your language) and images before the 3D scene mounts, or textures render white or in a serif font.
- The mascot must not hide the room or reach the caption area: scale it down near the doors.
- Keep one shadow-casting light per frame.

## Subclip route
Read `threejs-3d-scenes` and `r3f-physics-and-effects` through `read_subclip_skill`, build the tower as a Remotion or HyperFrames layer with Three.js, `validate_runtime_layer_source`, `add_runtime_layer`. Cheaper route: generate one still per floor (the creator's Codex CLI first) and animate each with a slow push and a door-open wipe (`add_media_keyframe`). Add a ding and a hum with `search_public_audio`.

## Credit cost note
Layers cost no credits. The stills route costs nothing with the creator's Codex CLI, or a quoted amount with a Subclip image model.

## Upstream source
- [references/cozy3d.md](https://github.com/Vladic20/tvhead-studio/blob/main/plugins/tvhead/skills/motion-studio/references/cozy3d.md)
- [template/src/cozy3d/] folder in the upstream repository (https://github.com/Vladic20/tvhead-studio/blob/main/plugins/tvhead/skills/motion-studio/template/src), including TowerVideo, World, Clay
- [template/tools/script.tower.mjs](https://github.com/Vladic20/tvhead-studio/blob/main/plugins/tvhead/skills/motion-studio/template/tools/script.tower.mjs)
Repository: https://github.com/Vladic20/tvhead-studio
