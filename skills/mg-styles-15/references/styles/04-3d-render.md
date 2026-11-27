# 3D Render / CGI Motion Design (C4D and Blender look)

Original film: soft. "Soft Landing". 1920x1080, 24 fps, 10 s, final jury score 7.71 / 10. Upstream: [prompt](https://github.com/Vincentwei1021/mg-styles-15/blob/main/prompts/04-3d-render.md), [source](https://github.com/Vincentwei1021/mg-styles-15/tree/main/demos/04-3d-render).

Pick it for: premium product films (phones, drinks, sneakers), brand idents, soft and satisfying loops.

## Output (fixed in the original)

1920x1080, 24 fps, exactly 10.000 s (240 frames), stereo audio, music peaks under -1 dB. Subclip projects run at 30 fps: hold the layer's motion on a 24 fps grid (`t = Math.floor(t * 24) / 24`) when the cinematic cadence matters.

## Route in Subclip (no Blender needed)

- **Device or product hero:** native 3D layers. `list_3d_models`, `add_3d_layer`, bind the creator's media with `set_3d_screen_content`, animate with `set_3d_keyframe_sequence` or a preset (`list_3d_animation_presets`), then `verify_3d_layer_setup`.
- **Abstract C4D look (cloners, candy materials, jelly logo):** one HyperFrames Three.js layer with the pinned import map (`three@0.181.2` and `three/addons/`). Use an `InstancedMesh` grid of rounded pills or spheres as the cloner field, a wave effector computed from time, `MeshPhysicalMaterial` with `transmission`, `thickness`, `clearcoat` and `sheen` for the gummy, glossy and frosted trio, `RoomEnvironment` through `PMREMGenerator` instead of an HDRI file, soft shadows, and the addons postprocessing `BokehPass` for shallow depth of field. Every value comes from the seek time: precompute the damped spring for the hero drop as a closed form.
- **Creator has Blender:** they may render a PNG or video sequence themselves and bring it in with `import_external_media`; Subclip adds the type and grain as a separate layer.

Upstream route for reference: a Blender 5.1.2 script rendered with Cycles (OIDN denoise) or EEVEE to a PNG sequence, plus an optional HTML pass for typography.

## Creative seed (swap this)

"Soft and satisfying." The C4D or Octane pastel product ident look (Maxon demo reel vibe): soft candy materials, cloner arrays, physics-feel motion.
- Pastel studio: infinite cyc backdrop, big soft area lights plus HDRI-style environment light, shallow depth of field (f/1.8 feel), 24 fps, real motion blur.
- A MoGraph-style cloner field (a grid of glossy rounded pills or spheres) ripples with an effector wave; a hero object, an inflated bevelled 3D wordmark (for example "SOFT" or an invented brand) or a glossy jelly logo, drops in with a squash-and-stretch jiggle (damped spring), collides with and displaces the cloner field.
- Material trio: SSS gummy (candy pink or peach), glossy plastic (cream or lilac), frosted glass or polished metal accent, with AO, soft reflections and a subtle subsurface glow.
- Camera: long-tail ease (80% of the move in the first 20%), ends on a clean hero composition held about 1 s.
- Sound: ASMR-satisfying soft thuds, squishes, bubbly pops and an airy cinematic pad; hits frame-synced to impacts.

## Signature features and key techniques

Physical-material animation rendered in Cinema 4D with Redshift or Octane, or in Blender: soft rubber, glass, metal, cloth, with cloner arrays and physics simulation. The mainstream look for high-end product films (phones, drinks, sneakers) and brand idents; the official Maxon demo reel sets the trend each year.

Visual features: realistic PBR materials, shallow depth of field, soft studio lighting, cloner arrays, soft-body collisions, candy-colored gummy surfaces.

Key techniques:
- MoGraph core: a Cloner plus Random or Plain effectors to animate the crowd in waves.
- Material trio: subsurface scattering (the gummy feel) plus AO plus HDRI three-point lighting.
- Movement uses long-tail eases: the first 20% of the curve covers 80% of the distance and the end is very slow, with motion blur.
- 24 or 25 fps film cadence plus shallow depth of field (f/1.8 feel) set it apart from the crisp 30 fps of 2D styles.
- A common structure: the product is the axis and particles, fluids or cloth are choreographed around it as a physics simulation.

## Sound in Subclip

`search_public_audio` with `source: "sfx"` for soft thud, squish, bubble pop; a pad from "ambient cinematic pad" (CC0 first). Place each hit on its impact frame.
