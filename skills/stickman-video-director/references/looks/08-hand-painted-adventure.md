# 08 A8 Hand-painted adventure (the upstream calls it Studio Ghibli)

- **Reference clip:** `examples/10-hand-painted-adventure.mp4` (Mountain Workshop). Original author's sample, first 10 seconds of a 20 s film, silent. The look is hand-painted gouache; we avoid naming any studio in prompts.
- **Upstream source:** `references/a8-production-guide.md` and `a8-summer-two-roles-prompts.md` in [kaomei/stickman-video-director](https://github.com/kaomei/stickman-video-director/blob/8394bec0148fa281ea59171d90fddc13afb80c4e/skills/directing-stickman-videos/references/a8-production-guide.md) (the originals are written in Chinese; this file is our rewrite).
- **Engine:** A, video model. **Best for:** travel stories, small adventures, working-life fables with a touch of whimsy.

## The look

Textured gouache backgrounds with dry-brush grain, rich color blocks, crisp hard-edged cel shadows and flat-color stick figures: round pale ivory head, two dot eyes, one mouth stroke, thin ink-line body. Deep cobalt sky, turquoise distance, buttercream surfaces, leafy greens, tiny vermilion accents, cool blue-violet shadows. Wind moves laundry, awnings and scarves; distinct foreground and distant planes with gentle parallax.

## Four blocks

1. **Character (repeat verbatim per hero shot):** `CHARACTER. One original hand-inked stick figure animated inside a painted 2D scene. The head is a simple pale ivory circle finely outlined in near-black ink. The only marks inside are two tiny solid black dot eyes and one short expressive black mouth stroke. Cheeks are plain ivory like the forehead: no blush, freckles, nose, ears or face shadows. Keep the round head through turns and expressions. A slender connected ink-line neck, torso, arms and legs, tiny simple hands, narrow shoes. [Role-specific compact workwear] leaves the limbs visible.`
2. **Art direction (repeat per clip, change colors for new weather or time of day):** `ART DIRECTION. Original full-bleed hand-inked 2D adventure animation, sunny painted summer colors: [cobalt sky, turquoise distance, buttercream surfaces, leafy greens, tiny vermilion accents, blue-violet shadows]. Hand-painted gouache scenery with dry-brush grain, legible silhouettes, hard-edged cel shadows on objects, flat unshaded face. Action on distinct foreground and distant planes with wind and gentle parallax. Edge-to-edge picture, no white margins, borders, panels, captions or text.`
3. **Staging and contact:** start point, work area, walkable route, prop positions; hand contacts at named moments; front-and-back occlusion spelled out.
4. **Action and camera:** trigger, effort, contact, result, settle; a cut on the pull from a medium-wide shot to a waist-up three-quarter view; garments and tools follow through with wind.

## Continuation and extra cast

Same scene: watch the previous clip at normal speed, pick the latest clean frame at the end of the retained range (face, joints, contact, props, light, composition all fine) and use it as the next start frame; write the next action from that pose. New scene: new text-to-video with blocks 1 and 2. Supporting cast get a distinct marker (a blue cap, an apron) and a stable position; the reference binds only to its own character. Never use a code-drawn skeleton or SVG pose as a reference.

## Subclip route and credits

Gemini Omni class or `p-video-2` at 720p (the original used 6 second text-to-video clips). Quote per clip; start frames from `nano-banana-2` stills cost 2.5 credits each or free from Codex CLI.

## Checks

Pale ivory head with only dot eyes and one mouth stroke; full-bleed painted frame with no border; hard-edged shadows; wind motion tied to the story; hands touch props at the right moment; no face or anatomy glitches; rough on long continuations, so keep clips short.
