# 01 Kinetic motion reel with a voxel mascot (style `reel`)

Reference: `examples/01-kinetic-reel.mp4` (a real HyperFrames code render made for this skill, no AI model) and the original author's frame `examples/01-kinetic-reel-upstream.jpg` (By the original author).

## What it is for
Tool, idea and product promos of 35 to 60 seconds: kinetic type, a terminal that types the prompt in time with the voice, scene cards, a contact sheet, a small voxel mascot that reacts, and one call to action. The default style when the creator does not name one.

## Scene recipe (8 scenes, one or two lines each)
1. Hook: giant kinetic title, letters drop and settle, one letter in the accent colour, a strike-through or glitch on the old way. [HOOK WORDS]
2. Terminal: a card slides in, the prompt types in time with the voice, the cursor blinks. [PROMPT TEXT]
3. Scene cards: [NUMBER] cards stagger in with a progress bar and a wave.
4. Words with real timing: each word of [KEY LINE] pops on the frame it is spoken.
5. The mascot: a 3D turn with a wireframe, a cube burst and a viewport grid, or a hop beside the text.
6. Contact sheet: a grid of real frames from the reel with a ring and a stamp on the best one.
7. Phone or counter: a counter that counts to a real number from the data ([REAL NUMBER]).
8. Call to action on a plate: [CTA]. The last frame matches the first for a loop.

## Mascot
Draw an original small voxel mascot: a sprite of about 12 by 9 cells turned into cubes (CSS squares in a HyperFrames layer, or an instanced mesh in a Three.js layer). It builds from flying cubes, hops, blinks and explodes into cubes on the beat. Do not copy any company's mascot.

## Prompt to give yourself (fill the brackets)
> Vertical 1080 by 1920 reel, [LENGTH] seconds, dark navy grid background, one accent colour [ACCENT], font [FONT]. Scenes keyed to the word timings in [TIMINGS]. Kinetic title [HOOK WORDS] in scene 1, a terminal typing [PROMPT TEXT] in scene 2, [NUMBER] cards in scene 3, the voxel mascot in scene 5, a counter to [REAL NUMBER] in scene 7, a plate with [CTA] in scene 8. Captions of at most four words inside the safe zone (x 60 to 960, y 160 to 1420), on a dark plate from y 1250, 66 px. Every frame a pure function of time.

## Subclip route
1. Voice and timings first (see `../script-and-voice.md`).
2. Build one HyperFrames layer per two or three scenes (`subclip-hyperframes-layer`, GSAP timeline, `validate_runtime_layer_source`, `add_runtime_layer` kind `hyperframes`), or a Remotion layer if the creator asks for React. Put the word timings in the layer's props and key each tween to a word.
3. Shader backgrounds, particles, morphing and 3D are optional extras: see `../layer-rules.md`.
4. Check stills per scene, then the seams, then deliver.

## Credit cost note
No credits for layers, local speech and public audio. Generated music or cloud voice are optional paid steps: quote first.

## Upstream source
Adapted from the original author's reel template in tvhead-studio (Vladic20, MIT):
- [SKILL.md](https://github.com/Vladic20/tvhead-studio/blob/main/plugins/tvhead/skills/motion-studio/SKILL.md) (stack choice and pipeline)
- [template/src/scenes.tsx](https://github.com/Vladic20/tvhead-studio/blob/main/plugins/tvhead/skills/motion-studio/template/src/scenes.tsx)
- [template/src/Mascot3D.tsx](https://github.com/Vladic20/tvhead-studio/blob/main/plugins/tvhead/skills/motion-studio/template/src/Mascot3D.tsx)
- [template/tools/script.reel.mjs](https://github.com/Vladic20/tvhead-studio/blob/main/plugins/tvhead/skills/motion-studio/template/tools/script.reel.mjs)
- [references/fx-libraries.md](https://github.com/Vladic20/tvhead-studio/blob/main/plugins/tvhead/skills/motion-studio/references/fx-libraries.md)
Repository: https://github.com/Vladic20/tvhead-studio
