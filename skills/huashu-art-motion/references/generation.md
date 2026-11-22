# Generation and prompt recipes

Read the current internal generation skills before using these examples. No provider accounts, keys or direct endpoints are part of this workflow. The creator generator choice in SKILL.md still applies; a prior Subclip choice needs no repeated question.

## Source-checked model examples

The expanded model catalog was read on 2026-11-23. These IDs and names are examples, not a frozen selection or price list. Call `list_ai_models` for the current requested kind before choosing. Check live modalities, settings, pricing and source limits. Use the tool's top-level generation fields and `sourceAssets` for project media; do not paste asset IDs or provider URLs into `settings`.

| Need | Catalog model | Useful source capabilities |
| --- | --- | --- |
| Anchor painting or pose references | `seedream-5-lite`, Seedream 5 Lite | 2K/3K size, image references, 16:9 and 9:16 |
| Multiple reference images | `nano-banana-2.1`, Nano Banana 2.1 | Up to 14 image references, 1K/2K/4K |
| Transparent character or separated prop | `gpt-image-2.5-flare`, GPT Image 2.5 Flare | Reference images, transparent background setting, quality levels |
| A short living painting with endpoints | `p-video-2`, P-Video 2 | First and last image, 1 to 20 s, 720p/1080p, 24/48 fps |
| Structured production brief or endpoint animation | `seedance-2.5`, Seedance 2.5 | First/last frames or reference inputs, 480p/720p; the two input modes cannot be mixed |
| A single-image organic-motion alternative | `grok-imagine-video`, Grok Imagine Video | Image input, 1 to 15 s, 480p/720p; no endpoint binding in the checked catalog |

These run through `generate_ai_media`, including models whose names identify outside providers. They do not mean a direct provider call. Match required first/last-frame semantics to the live tool's supported roles. Seedance's checked first/last mode requires adaptive aspect; its source schema may allow more references than Subclip's tool accepts. The checked tool caps `sourceAssets` at 15, so the tool limit wins. Do not send original reference videos as prompt context; use inspected stills and a motion brief.

Use `generateAudio: false` for visuals with separate narration/music. For P-Video 2, the checked model setting `save_audio: false` also disables saved audio. For Seedance 2.5, check `generate_audio` against the live schema. Do not send a setting from one model to another. Generated motion is probabilistic even with a seed.

## Budget and operations

Call `estimate_ai_generation` with kind, model ID, resolution, duration, output count, audio mode, prompt and settings matching the proposed call. Its `assets` field describes input dimensions and exact durations for pricing, not project IDs. `outputCount` is outputs per generation, not the number of separate shots. Quote one identical pricing case and multiply only when all pricing inputs match. Quote music and speech separately.

Show the total for candidates, approved production outputs and any retry allowance. For example, three frame candidates plus one selected animation are four outputs, not one. Do not spend the retry allowance without a failed or rejected result and authorization covering that retry. Do not infer authorization from a detected tool or account.

Retain the stable operation ID. In-app agents stop after an accepted async job and resume on its event; external clients can check `get_ai_operation` at reasonable intervals. A timeout or unchanged progress needs reconciliation, not duplicate generation. Never claim a stuck job is free. Stop on credit/storage limits. Before importing, read the completed operation and use `import_ai_operation_to_timeline`. For replacement use the existing target's `replaceItemId`.

## Anchor frame

Prompt structure:

> An original [subject] performing [specific action] in [new setting]. Compose for [aspect ratio] with [focal position and scale], [foreground], [middle ground] and [background]. Use [shape language], [material process], [edge behavior], [light direction] and [color relationships]. Give people, animals and props the same medium. Keep [identity details] consistent with the selected project references. No lettering, numbers, signatures or decorative captions. Leave [region] clear for native text.

Describe what the medium does. "Short broken cool/warm strokes that follow water reflections" directs more than an artist name alone. Preserve an approved pose when needed; a new action description can override the reference pose. Inspect exact features and composition before accepting.

## Separate prop or pose

> Use the approved scene and character as references. Draw only [prop or character pose]. Preserve its size, position, camera and orientation relative to that scene. [Transparent background if supported.] No ground, shadow backdrop, text or extra objects. [Describe pose, gaze, grip and fixed identity details.]

Keep original coordinates if the asset is later cropped. Record feet center and hand/object anchors in the scene plan. Do not crop away the origin and guess it later.

For an atlas:

> Eight frames of the same original character, in a four-column by two-row grid. One complete [walk or interaction] cycle. Identical costume, camera, cell size and standing scale. Feet centered at the bottom of each cell. Clear separation between cells. [Key poses and medium.] No labels or numbers.

Inspect cell consistency. If a model adds extra frames, merges limbs or changes clothes, use separate poses or revise within the approved scope. A requested eight-frame sheet is not proof of eight usable frames.

## Living painting

> Fixed camera throughout. Keep the approved composition, shapes, color relationships and painted medium. No zoom, pan, shake, new objects or text. [Subject] performs [one continuous action]. [Motif 1] moves [direction, amplitude, rhythm]. [Motif 2] moves [specific way]. Texture stays attached to surfaces without boiling or global flicker. Return to the endpoint composition with natural motion.

Use the anchor as start and end only for a model that supports both. This encourages returning to the frame but does not guarantee a seamless loop or exact timing. Generate the shortest supported useful test, inspect first/last poses and motion, then trim the best section natively. Charge and quote the full generated duration even if only one second is used. Avoid unnecessary speed changes that distort weight or narration timing.

## Music and effects

Keep the upstream musical idea: one short motif changes instrumentation as the world changes; a shared beat table controls cuts and accents. For a montage, shorter scene beat counts create acceleration while BPM stays stable. A closing action can use pause, suspension, impact, reaction and resolution. Do not add a whoosh at every cut.

Read `subclip-music-generation`. Discover audio models, quote and use `generate_music`, then import the completed operation as native audio. The current internal default for instrumental background music is `lyria-3-pro`, subject to live availability and creator choice. Sound effects can use the discovered `elevenlabs-sound-effects` through the same tool. Do not synthesize a replacement soundtrack in animation code.

Prompt a restrained motif, instrumental texture changes, desired arc and room for narration. Generated music cannot promise an exact score, instrument per era or millisecond onsets. For exact sync, use creator-provided music and native trims/placements, or align graphics to actual reviewed onsets. Keep voice, music and effects independently editable.
