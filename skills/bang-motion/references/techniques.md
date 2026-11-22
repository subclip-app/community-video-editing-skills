# Motion techniques

These are Bang Tutorial's working recipes adapted to Subclip. Numbers are starting points. Brand assets, current runtime rules and the creator's brief decide the result.

## Living type

Prefer sentence case at a medium or semibold weight. A heavy all-capital statement can be a deliberate peak, not every scene. Avoid automatic full stops on short claims. A real question earns its question mark. Vary scale, direction and placement between neighboring beats.

Eight entrance ideas: up, down, left, right, depth, a mask, word by word, or typing. Choose from the phrase's meaning. Start text hidden in CSS, then use explicit from/to transforms and opacity. Split only after font loading is complete, and split long phrases into words that can wrap. Give a word group stable line breaks at the intended dimensions.

Emphasis choices: none, a pill, underline, marker stroke, outlined box, color change or a struck word replaced by another. Choose one visual emphasis method for the piece. Draw its shape from the brand. If a highlight appears, let words arrive first and the highlight follow after roughly 0.4 to 0.6 seconds. Punctuation can land last when it matters. Do not inherit the same pill and sparkle from another brand.

Upstream uses directional blur on entering letters. In Subclip, never apply CSS filter or backdrop-filter to text or any text-bearing parent, including blur at zero. Use opacity, translation, scale, masks or a separate decorative streak. Keep background blur on a sibling with no text descendants. Do not blur an entire camera rig if it contains text.

For phone viewing, use a baseline of at least 44 px body, 34 px labels, 30 px credits, 48 px handwriting and about 100 px titles on a 1080-wide design. Scale for the actual frame and any safe-area transform. These are readable production targets, not permission to crowd the canvas. Native Text and Runtime items use different geometry units; see subclip-production.md.

## Contrast and glow

Create a quiet pocket around type. For white text, upstream targets a locally dark background, about 25 percent luminance or less; for dark text, about 80 percent or more. These are design heuristics, not measured accessibility certification. In that pocket keep particles dim and sparse. Start at opacity 0.35 or lower and reduce further when necessary.

Headlines use clean fill and a light readability shadow. Glow is for a product edge, glass orb or intentional light source. A background as bright as the letters fails attention hierarchy. If grayscale review is available, compare letter edges with local detail. Do not default to darkening the whole film when a brighter quiet surface works.

## One camera system per world

Put objects and their background inside one world group. Keep screen labels, captions and lens effects outside it. Use a separate wrapper for impact shake. Avoid two tweens fighting over the world's scale.

For a target at local coordinates (fx, fy) and scale s, camera translation is:

    tx = frameWidth / 2 - fx * s
    ty = frameHeight / 2 - fy * s

Use overscan and clamp so world edges stay offscreen. Plan geometry once after resources load; do not measure changing layouts inside frame callbacks. A fixed local composition size gives stable framing while the Subclip item rectangle controls final canvas placement.

Shot vocabulary:

- Wide: whole relationship, for comparisons or a group.
- Medium close-up: main element plus enough context, about one third to half the frame.
- Close-up: detail fills most of the frame, for a click, surface or decisive action.

A one-percent breathing scale is a subtle base, not an answer to a request for visible zooms. Move toward what is telling the story, hold long enough to read, then widen when the relationship matters. A closing hold can have a slow push. Labels in screen space must not be cropped by a world zoom.

For a collage, try close-up of asset A, glide to B, then home to the composition. Finish the pull-back before explanatory words appear, typically with at least 0.1 seconds of margin. Hold at home while labels complete the thought. Do not push back into a detail and crop the information just introduced.

## Transitions

Choose transitions at meaningful boundaries, not every sentence. Overlap the old elements' quick exit with the new elements' slower entrance. A restrained cut can be best. Avoid a repeated fade and scale bump or a shock spin at every boundary.

Useful choices:

- A new card rotates from depth while the old one leaves.
- A meaningful thick object fills the lens and reveals the next place.
- A logo-shaped mask opens.
- A UI panel expands into the next task.
- A foreground object carries us into a matched shape.
- A small directional offset accompanies a true change of location.
- A motivated push enters a screen or opening. About one major push-through per short film is a useful restraint.

A push-through can accelerate toward the outgoing focal point over about 0.5 seconds, cut under coverage, then settle from a closer incoming pose over about 0.95 seconds. Match the actual visible object, not the frame center by habit. Check full coverage at the cut, not just the starting frame. A circle that must cover the local frame needs radius times scale greater than the half-diagonal, plus margin.

A lens light can drift diagonally from one edge, using about 40 percent of its duration to rise and 60 percent to fade. Keep it separate from text; a decorative radial gradient is safer than a filtered text parent. Save it for a major event. A flat rectangle that passes for no reason is not an object-led transition. A color field that becomes the next scene's background can be meaningful.

For a special kinetic sentence, make a line wider than the frame and track through it. Words ahead of the focal point can start at about 20 percent opacity, then become full as the camera reaches them. A small yaw from roughly 10 to minus 10 degrees adds curvature. Use this once or twice, not as every text entrance.

## Background movement and surface

Choose movement separately from the objects' motion signature:

| Movement | Character |
| --- | --- |
| Textured surface with slow light drift | Calm editorial |
| Large gradient shifting or turning over 8 to 15 seconds | Soft, modern |
| Two to four palette blobs drifting about 60 px | Friendly |
| Paper grain offset derived from local time | Organic |
| One light sweep per segment | Premium |
| Large logo-derived geometry turning over 20 to 40 seconds | Brand-led |
| Slowly rising dust or bubbles | Warm |
| Grid breathing between scale 1 and 1.04 over 6 to 10 seconds | Technical |
| Huge low-contrast word drifting behind the subject | Editorial |
| Theme image with two-depth parallax | Narrative |
| Horizontal flow | Reserve for speed or data flow |
| Triggered palette fields, 0.15 to 0.3 second changes | Energetic pop |

Surface choices: horizon glow over a deep gradient, diagonal duotone, a light mesh with blobs, a spotlight with tint, layered sky, paper with a restrained texture, or grain inside saturated shapes. Usually build at least a base plus light/texture/shape depth. Poster color blocks and bright cartoon stages can be flat when the subject action supplies life. Never add texture to cartoon stage mode merely to satisfy another mode's recipe.

For grainy gradients, keep form edges crisp and interiors soft. Use two or three separated palette colors on a deep base. Fine monochrome grain should cover shapes as well as the background. A fixed noise tile can be offset deterministically, for example using k = floor(localTime * 12), then fixed modular x/y offsets. Do not create a new random pattern each frame. Keep text outside filtered grain subtrees. Heavy full-frame noise can slow preview.

When an export is requested, inspect its gradient banding and grain survival at the chosen quality. Use the quality options Subclip actually exposes; do not promise upstream encoder switches that are absent from its export schema.

## Object material families

Choose one family, or stage a meaningful change between two: flat solids, flat shapes with elastic color dots, soft matte clay, glossy plastic, glass/light, isometric blocks, realistic metal/marble, neon outlines, or flat character illustration. Mixing unrelated stock materials weakens the world.

Realistic objects may be imported approved image/video outputs instead of weak imitation geometry. Bundled product devices remain native 3D layers. Custom deterministic Three.js only uses the pinned adapter and permitted imports from the current internal HyperFrames skill. Do not copy upstream bloom/post-processing imports blindly. If unsupported, use a layered gradient or imported approved asset and state the substitution.

## Time and state

Every visual must be reproducible at any seek time, including after backward seeks and reloads. Use local segment time and finite animation. Store flow as distance and compute position from that distance, not accumulated velocity. Keep constant seeds fixed across loads. Setup randomness without a fixed seed can also change export.

Use absolute local seconds for tweens. Keep initial opacity in CSS without a more-specific rule overriding it. A numerical state proxy can be tweened, then applied consistently on seek. GSAP callbacks must not be the only place that creates or removes an object: all elements exist before the timeline is registered, and their current visibility derives from time.

Type-on: derive a character count from progress and slice the string. Counters use a time-derived number and tabular numerals with a stable minimum width. Sparkline motion can use a fixed combination of sine waves, but label it illustrative when it is not measured audio or product data.

Subclip owns play, pause, loop, seek and export. Do not add an autoplay player, debug panel, independent timer or media playback loop from the upstream starters.

## Common defects

| Symptom | Check |
| --- | --- |
| White wash over the frame | Additive backgrounds or excessive bloom; reduce decoration rather than weakening text. |
| Objects visible before entrance | CSS specificity and initial hidden state. |
| Thin ornament disappears in a turn | Flat geometry edge-on; use a shallow oscillation or actual thickness. |
| Unstable word wrapping | Missing font, split before load, or dimensions mismatched with data attributes. |
| Counter changes container width | Use tabular numerals and a stable number box. |
| World jumps when a joint rotates | Bounding-box pivot changed; use explicit local joint transforms. |
| Backward seek differs from forward | Callback-only state, accumulation or unseeded setup randomness. |
| Text disappears in output | Filter on the text or an ancestor, even a zero-strength filter. |
| Background remains after the intended ending | Set and re-read the project endpoint after timing edits. |
