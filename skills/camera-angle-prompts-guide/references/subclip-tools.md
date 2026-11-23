# Using the angles with Subclip tools

Everything below runs through the Subclip AI Editor MCP tools. Tell the user what each step does and get approval before any step that spends credits. This skill needs no API keys.

## Choose models (do not guess names)

1. `list_ai_models` with kind `video` for image-to-video and text-to-video models, and kind `image` for keyframes. Read each model's schema: durations, aspect ratios, whether it takes a start frame, reference images or a multi-shot prompt.
2. Prefer a video model that accepts a start frame (`role: "start_frame"`) or reference images (`role: "reference"`), so the subject stays the same across angles. In the current catalog good candidates are `seedance-2.5`, `kling-v3`, `veo-3.1-fast`, `wan-3` and `p-video-2`; use whichever `list_ai_models` actually offers and say which one you picked and why.
3. `get_ai_credit_status` shows the balance. `estimate_ai_generation` gives the cost of a planned job.

## Quote credits first

Before any generation tell the user: model, number of clips, duration, resolution, the `estimate_ai_generation` total and a small retry allowance. Wait for a yes. Start with two or three angles, not forty. Do not resubmit a slow job; check `get_ai_operation` at calm intervals.

## Workflow

1. **Keyframe.** If the user has a still, import it (`import_attachment_to_project_media` or `import_external_media`, `addToTimeline: false`) and look at it with `preview_asset`. If not, make one with an image model from `list_ai_models` (or the creator's own Codex CLI if they offer it). Make the keyframe in the angle you want when the angle changes the viewpoint (low, high, overhead).
2. **Pick the angle** from `references/angle-index.md`, then take the camera sentence from its family file.
3. **Build the prompt** with `references/prompt-formula.md`: fixed look, your grade, the angle sentence, one subject beat.
4. **Generate** with `generate_ai_media` (kind `video`, the chosen model, the keyframe as `start_frame`, `generateAudio: false` unless room tone is wanted, 4 to 6 seconds). Keep the best two seconds.
5. **Fake where you can** (see below), and place the clips with the timeline tools one at a time.
6. **Check** with `view_current_frame` at the cut points and fix before moving on.

## Native fakes (free, keep the real performance)

Use `add_media_keyframe` on the clip for motion and `add_media_effect` for looks (check `list_element_catalog` for the exact names). `set_media_framing` and `set_media_source_focus` handle crops.

| Move | Recipe |
| --- | --- |
| Close up, medium, cowboy, insert | Crop with `set_media_framing`, or `sourceZoom` on a 4K or 1080p source |
| Dolly in or out | Scale keyframe 100 to 130 percent (or back), ease in and out |
| Crash zoom | Scale 100 to 200 percent over 4 to 6 frames, add a hit sound |
| Slow pan, tilt reveal, pedestal up | Oversized clip (scale 115 percent) with a position keyframe across it |
| Barrel roll | Rotation 0 to 360 over a push-in clip, scale up so corners stay covered |
| Whip pan | Fast sideways position keyframe on the cut, strong blur on the join, whoosh from `search_public_audio` |
| Handheld | Tiny rotation and position keyframes every few frames |
| Fisheye | Fisheye or barrel distortion effect with a close crop |
| Speed ramp | Slow the start and speed the punchline with the clip speed tools; ramp over 6 to 10 frames |
| Rack focus | Two stacked copies, animate blur on one up and on the other down |

Run mutations one at a time. If an effect name is not in the catalog, say so and use the closest one.

## Pairing into a cut

Place clips in the order in `our-guide.md`. Add a short whoosh on whip pans, a hit on crash zooms, and a riser under a long push-in. Keep all sound at 48 kHz when it is going to social.
