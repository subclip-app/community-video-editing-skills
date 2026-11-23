---
name: ai-camera-shots
description: Turn one frame of a person in a place into twenty different AI-generated camera angles (top-down, silhouette, inside the object, frame in frame, reflection, macro, wide, side profile, security cam, low angle, foreground occlusion, lens flare, peek through, through glass, high angle, shallow focus, Dutch angle, ground level, eye level, over the shoulder), then cut the best second of each to the beat. Uses Subclip video models (Seedance 2.5 with reference images first) and native keyframe moves on footage you already have. Use for B-roll angle packs, "same scene from every angle", camera coverage for a reel, or when the creator asks for camera shot prompts.
---

# AI Camera Shots (Subclip edition)

One base frame, twenty angles. Every shot is the same person in the same place at the same moment, seen from a different camera position. Cut the best second of each shot on the beat and you have a fast, rich reel from a single setup.

Two ways to get an angle:

- **Generate it** with a Subclip video model (best for angles the real camera never had: top-down, inside an object, through a mirror).
- **Fake it natively** on footage you already have, with keyframes and effects (best for push-ins, Dutch angle, security cam, shallow focus, tighter crops). Free, and it keeps the real performance.

## Step 0: Choose how to generate (ask once)

- If the creator has a working Grok CLI, it can make video from images on their own plan. Offer it. For the base frame image, offer the creator's signed-in Codex CLI first. Read Subclip's `subclip-ai-generation` skill, `references/creator-cli-generators.md`, for the check and commands. Import any outside file with `import_external_media`.
- Otherwise use Subclip: `list_ai_models` (kind `video` and `image`), then `generate_ai_media`. Respect an earlier choice by the creator.
- Quote before spending: model, number of shots, duration, resolution, `estimate_ai_generation` total, plus a retry allowance. Get approval for that scope. Twenty shots at five seconds each is a real bill, so offer a 5 to 8 shot starter pack first.

## Step 1: Make the base frame and the face reference

1. A base frame: one image of the person in the location, with a few clear objects around them (a cup, a seat, a machine, a window). Close-up angles need an object to look at. If the creator has none, generate one (Codex first, else an image model from `list_ai_models` such as `gpt-image-2.5-flare`, `nano-banana-2.1` or `seedream-5-lite`; say which and why).
2. A clear, neutral photo of the same person's face, so identity holds across all shots.
3. Import both into the project (`import_attachment_to_project_media` or `import_external_media` with `addToTimeline: false`). Look at them with `preview_asset` or `view_current_frame` before using them. Save a short description with `describe_media`.

If the creator wants angles from an existing video, take a frame from it: see the `portrait-style-prompts` skill, or use `export_current_frame` at the chosen time and import the PNG.

## Step 2: Generate the shots

Model choice, in order:

1. `seedance-2.5` with `sourceAssets`: the base frame and the face photo, both with `role: "reference"`. It accepts several reference images, which is what keeps scene and face steady. Refer to them in the prompt by order ("image 1 is the scene, image 2 is the face"). Check the model's schema in `list_ai_models` for the exact reference wording it expects.
2. If Seedance 2.5 is not offered or too costly: `kling-v3`, `veo-3.1-fast` or `wan-3` with the base frame as the start frame (`role: "start_frame"`). These take one image, so the face drifts more. Name the swap to the creator.
3. Set `generateAudio` to false unless the creator wants room tone, and never ask for dialogue.

Use five seconds per shot. Keep only the best second in the edit. Start two or three shots in parallel at most, then check `get_ai_operation` at reasonable intervals. Do not resubmit because a job is slow.

Build each prompt from the six blocks in `references/shot-prompt-formula.md`, then add that shot's camera sentence from `references/shot-catalog.md`. The only thing that changes between shots is the camera block. Everything else stays word for word, so all twenty angles read as one moment.

## Step 3: Review every clip

Import each completed operation with `import_ai_operation_to_timeline` (stable operation ID). Inspect frames at the start, middle and end with `view_current_frame`. Reject and regenerate a shot only for a clear fault: face changed, wrong camera position, extra people, wrong room, warped hands. Image and video models garble text; exact words belong in native text layers.

## Step 4: Cut it to the beat

1. Pick or make music (`generate_music`, or `search_public_audio` then `import_public_asset_to_timeline`). Find a beat grid by listening to context, or ask the creator for the tempo. You cannot hear audio; say what needs a listening check.
2. Keep the best second of each shot: `trim_media_item` and `split_timeline_item`. Alternate wide, medium and close. Never put two similar angles next to each other.
3. Cut on the beat. Put the strongest or strangest angle (inside the object, reflection, top-down) on the first and last beat.
4. Light motion on the cuts only: a small `add_media_keyframe` push-in, never a distracting move.
5. Check with `get_timeline_contact_sheet`, then `view_current_frame` on every cut. One edit call at a time. Export only when asked.

## Fake an angle natively

`references/shot-catalog.md` lists, for each shot, a native version using `add_media_keyframe` (scale, rotation, position, `sourceZoom`, focus, tilt), `set_media_source_focus`, and `add_media_effect` (for example `grayscale`, `noise`, `scanlines`, `vignette`, `fisheye`, `radialProgressiveBlur`, `shine`). Call `list_element_catalog` for the exact effect names and parameters first.

## Credit

Adapted for Subclip from guides by sferro21 (https://www.instagram.com/sferro21). Rewritten in our own words; the creator's guides state no license, so please confirm permission with the creator before relying on this skill.
