---
name: wan-animation-styles
description: Turn a photo or a video frame into one of five animation looks (German Expressionism, 1930s rubber hose, gothic toon, surreal spooky 2000s cartoon, low-poly PS1), then animate it with Wan 3 on Subclip, or build a whole multi-shot animated scene from that one style frame. Use when the creator wants a cartoon or retro-game version of themselves or their footage, a stylised animated short, an animation style test, or "make this photo move in a 1930s cartoon style".
---

# Wan Animation Styles (Subclip edition)

Photo, style frame, animation. Two generations per look: an image model restyles the photo into one frame of the look, then a video model brings that frame to life.

```
PHOTO  ->  STYLE FRAME  ->  ANIMATION  ->  EDIT
(real)    (image model)    (Wan 3)       (Subclip timeline)
```

## Step 0: Choose generators (ask once)

- **Style frame (image):** offer the creator's own Codex CLI first (images from a reference photo). Read Subclip's `subclip-ai-generation` skill, `references/creator-cli-generators.md`. Otherwise `generate_ai_media` with a reference-capable image model from `list_ai_models`: `gpt-image-2.5-flare` (a GPT Image 2.5 model, the one the source guide used), or `nano-banana-2.1` or `seedream-5-lite`. Say which and why.
- **Animation (video):** `wan-3` in Subclip's catalog. Check `list_ai_models` for the live settings. Wan 3 in Subclip takes one image as the first frame, so the video opens on the style frame. Wan 3 costs a fraction of Seedance 2.5 per second, which is why it is the default.
- Quote first: model, outputs, seconds, resolution, `estimate_ai_generation` total and a retry allowance. A direct request for the exact job counts as approval; a bigger bill needs a new decision. Never use outside provider keys or accounts.

## Step 1: Choose the photo

Use the original, unedited photo every time, never a result from another style. Simple works best: a clear face, visible hands, a simple pose and a plain background. Video frames work too: seek the project to the frame (`seek_timeline`), then `export_current_frame`, or `extract_video_frames` to look at candidates. Import the chosen PNG with `import_external_media` (`addToTimeline: false`). Look at it before generating and save a description with `describe_media`.

## Step 2: The style frame

Pick one look from `references/five-styles.md`. Build the image prompt from its recipe. Every recipe follows the same pattern:

1. Transform the photo into one frame of that style.
2. Keep: framing, camera angle, pose, gaze, expression, hand gestures.
3. Redesign freely: faces, bodies, clothing, objects, surroundings. The style matters more than likeness.
4. Character design for the style, set design, palette, texture or light, and a list of banned looks (no realistic portrait, no gradients, no text, no logos).
5. Keep the source aspect ratio.

Generate two or three variants with the photo as a reference (`sourceAssets` with `role: "reference"`). Look at all of them and keep the one where the style reads strongest. If it looks like the photo with a filter, run it again with the "redraw the whole frame" line stressed. One style per generation; never mix two recipes in one run.

Import the winner as project media. Remember it is the look anchor for everything after.

## Step 3: Animate

Two routes. Use the first for a clip that starts on the frame, the second for a new scene in the same look.

**Route A: start frame (works in Subclip with Wan 3).** `generate_ai_media`, kind `video`, `modelId: wan-3`, the style frame as the first frame (`role: "start_frame"`, or the legacy first-frame field), five seconds first. Prompt = a short style paragraph that names the look in your own words (palette, line quality, texture, character design), then what moves, the camera, and the sounds. Keep that first paragraph identical across every clip of the film so the look does not drift back to realistic. Motion must match the style (see the table in `references/five-styles.md`).

**Route B: a new scene in the same look.** Wan 3 in Subclip cannot take a separate style reference. Two options: (1) generate a new style frame for the new scene with the image model, using the first style frame as a reference, then animate that frame with Route A; or (2) use `seedance-2.5` with the style frame as a reference image (`role: "reference"`), which accepts references but costs several times more per second, so quote it first.

Sound: Wan 3 can generate sound with the clip. Describe the sounds you want and write "no music" if you do not want a score. Pass the audio setting the model exposes, or generate silent and add your own track.

## Step 4: A whole scene from one frame

`references/multi-shot-recipe.md` shows the recipe for a ten second, five shot scene: style paragraph, hero described once, numbered shots with seconds and shot size, short quoted line in the talking shot, sounds listed at the end. Change the style, the story, the line, and keep each shot to one clear action.

If a model returns one long clip with cuts inside it, keep it. If cuts do not appear, generate the shots separately from separate style frames and cut them together on the timeline.

## Step 5: Put it in the edit

Import each finished clip with `import_ai_operation_to_timeline`. Trim with `trim_media_item`, add a title with `add_text_overlay` clear of faces, and music or voice with `generate_music` and `generate_speech`, or local speech for tests. Check with `get_timeline_contact_sheet` and `view_current_frame`. Export only when asked.

## Checks and fixes

- Same character in every clip? If not, reuse the style frame as the start frame again.
- Motion matches the style? A rubber-hose clip that moves like a realistic walk looks wrong.
- Number of frames or seconds can come back slightly short. Check the imported duration before building the timeline on it.
- No on-screen text from the model. Add titles natively.

## Reference

- [wan-styles-reference.mp4](examples/wan-styles-reference.mp4): one photo restyled into rubber hose, German Expressionism, gothic toon and low poly PS1 style frames (gpt-image-2), each animated for four seconds with Wan 3 at 720p from the frame as start frame, with per-look sound from ElevenLabs Sound Effects. Built with this skill in Subclip. [Contact sheet](examples/wan-styles-reference-sheet.jpg), one frame per second.
- The other images in [examples/](examples/) are one style frame per look from [sferro21’s guides](https://www.instagram.com/sferro21).

## Credit

Adapted for Subclip from guides by sferro21 (https://www.instagram.com/sferro21). Rewritten in our own words; the creator's guides state no license, so please confirm permission with the creator before relying on this skill.
