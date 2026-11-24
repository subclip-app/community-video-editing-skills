# Layer rules: deterministic motion in HyperFrames and Remotion

Rules learned on the upstream's reels. They apply to every style.

- **Every frame is a pure function of time.** No wall-clock time, no frame-callback timers, no unseeded randomness. Use a seeded generator or index-based formulas (for example `(i * 137) % 1200` for scatter). In HyperFrames a lint error names `Math.random` and `gsap.utils.random`.
- **Animate transforms and opacity**, not `left`, `top`, `width` or `height`: layout properties snap to whole pixels and stutter under seek-by-frame capture.
- **Handheld or wobble:** smooth noise (sums of sines) only. A random offset that changes every few frames shows as a visible tick.
- **Animation on twos** (anime): only the character and the enemy; never the camera, sky or particles.
- **One main technique per line.** Staggers of a fraction of a beat. Nothing freezes except the final hold; a premium look is one object turning into another.
- **Readability:** captions at least 56 px, key numbers held at least 1 second, margins at least 60 px.
- **Multiline kinetic text:** one element per line; inline-block letters do not wrap on newlines.
- **3D:** a hidden scene must be hidden (vanish set to 1) or scattered cubes hang over the next scene. Move the mascot between scenes by interpolating position and scale, never by a jump. Use filmic tone mapping, glow sprites and a DOM vignette instead of a post-processing library, which can render black frames in a frame renderer.
- **Canvas textures:** load fonts with the right glyphs and preload images before the 3D scene mounts.
- **Shaders:** inline any shader library includes before use; keep shaders and 3D under text dimmed.
- **Check as you go:** snapshot one frame per scene, then the frames around every seam, before rendering the whole.
- **Honesty:** contact sheets and "mistakes" shown in the reel must come from real frames or drafts; numbers come from code or data.

## HyperFrames layer skeleton (in your own words)
One self-contained scene: a root element with the layer's width, height and duration; timed elements marked as clips with a start and a duration; one paused GSAP timeline registered for the layer; copy and colours as variables so the creator can edit them; the word timings as a data array that drives caption visibility and accent tweens. Read `subclip-hyperframes-layer` with `read_subclip_skill` for the exact contract, run `validate_runtime_layer_source`, then `add_runtime_layer`.

## Upstream source
- [SKILL.md](https://github.com/Vladic20/tvhead-studio/blob/main/plugins/tvhead/skills/motion-studio/SKILL.md) (section 3, rules learned on our reels)
- [references/fx-libraries.md](https://github.com/Vladic20/tvhead-studio/blob/main/plugins/tvhead/skills/motion-studio/references/fx-libraries.md)
- [references/sources.md](https://github.com/Vladic20/tvhead-studio/blob/main/plugins/tvhead/skills/motion-studio/references/sources.md)
Repository: https://github.com/Vladic20/tvhead-studio
