# 04 Anime opening (style `anime`)

Reference: `examples/04-anime-opening.mp4` (rough reference: two generated stills animated in code; images gpt-image-2 through the creator's Codex CLI) and the original author's frames `examples/04-anime-opening-upstream.jpg` and `examples/04-anime-impact-upstream.jpg` (By the original author).

## What it is for
Any topic told as the opening of an anime episode, about 24 seconds: a title card, a task, a power-up with ability cards, the bug appears, a dash and a hit, a hero pose, a final beam against a sunset sky, then "CUT!" and a next-episode call to action.

## What makes it read as anime
| Technique | How to build it |
| --- | --- |
| Cel shading with 2 or 3 tones | A toon material with a 3 by 1 nearest-filter ramp texture |
| Black outline | An inverted hull: the same mesh, black, back faces, scaled 1.045 to 1.14 |
| Animation on twos | Only the character and the enemy use frame minus frame modulo 2; the camera, sky and petals update every frame, or the whole picture stutters |
| Hard cuts instead of a smooth camera | A list of shots (start, position, look target, field of view, roll, push); inside a shot only a slight push |
| Dutch angle, low angle | Roll in the shot; low camera at the power-up and the final attack |
| Sky | A DOM gradient layer under a transparent canvas: zenith to horizon, cumulus clouds from circles with warm undersides, a sun halo, birds, day to sunset over the reel |
| Petals | Petals that flip (scale Y = absolute cosine) |
| Focus lines and speed lines | Reshuffled every 2 frames; speed lines on dashes |
| Impact frame | 3 frames of grayscale, alternating invert and contrast 6, plus a decaying-sine camera shake of about 12 frames |
| Onomatopoeia | Big stroked letters, 14 px outline (text stroke with paint order) |
| Ability cards | Fly in from the right, tilted, neon frame in the power's colour |
| Eye shine | A highlight with a star in the face |

## Scene recipe (about 24 seconds)
Title card (vertical "[SHOW NAME]" plus a red "EPISODE 1" plate) / the hero gets a task [TASK] / power-up: close-up of the eyes, [3] ability cards with hits / the bug [ENEMY NAME] appears (two-shot then close) / dash, hit, sparks / hero pose / final beam, sky turns to sunset / "CUT!" and next-episode plate with [CTA]. Music epic, effects: an impact on every power and hit, a glitch on the enemy, a riser before the beam.

## Prompt to give yourself (fill the brackets)
> Vertical anime-opening reel, [LENGTH] seconds, 1080 by 1920. Cel-shaded [MASCOT] with an inverted-hull black outline, hard-cut camera shots with a Dutch roll at the power-up, character on twos, sky and petals every frame, [3] ability cards in [COLOURS], impact frame and a stroked "[ONOMATOPOEIA]" on the hit, a spiky enemy with red triangle eyes and glitch stripes. Captions in the safe zone.

## Build notes
- In 9:16 the vertical field of view of 36 degrees is about 20 degrees horizontally: a mascot of 1.1 m needs a camera at 6 to 7 m, a two-shot with a 2.6 m enemy about 11 m, or the mascot fills the frame like an orange wall.
- Use no tone mapping so toon colours stay flat.
- Put the beam behind the hero (about 1.4 m back) or the additive cylinder washes out the face.

## Subclip route
A Remotion layer with Three.js (`remotion-motion-layers`, `threejs-3d-scenes`) for the 3D shots, DOM layers for sky, petals, lines and text; or one generated still per shot (the creator's Codex CLI first) with hard cuts and 2 s of impact. Impact and riser sounds from `search_public_audio`. Optional: at most 3 short AI clips (3 to 4 seconds) for the hit, after a quote.

## Credit cost note
No credits for layers. A clip of 3 seconds on an economical model costs on the order of 8 credits: always `estimate_ai_generation` first.

## Upstream source
- [references/anime.md](https://github.com/Vladic20/tvhead-studio/blob/main/plugins/tvhead/skills/motion-studio/references/anime.md)
- [template/src/anime/] AnimeVideo and AnimeFx in the upstream template (https://github.com/Vladic20/tvhead-studio/blob/main/plugins/tvhead/skills/motion-studio/template/src)
- [template/tools/script.anime.mjs](https://github.com/Vladic20/tvhead-studio/blob/main/plugins/tvhead/skills/motion-studio/template/tools/script.anime.mjs)
Repository: https://github.com/Vladic20/tvhead-studio
