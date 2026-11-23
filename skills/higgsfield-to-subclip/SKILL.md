---
name: higgsfield-to-subclip
description: Change the background or the lighting of real talking-head footage while keeping the face, lips and timing, then edit the whole video by prompt, all inside Subclip. Relight one clip five ways (amber haze, rain on glass, shadow play, teal smoke, red danger), swap a room for a new place with no green screen, and stack the looks into one vertical reel. Use when the creator wants a new background or new light on a clip they filmed, a "same take, five looks" reel, a cinematic relight, or an edit-by-prompt of a talking-head video.
---

# Background Swap, Relight and Edit-by-Prompt (Subclip edition)

The original guides ran this on an outside video service connected to Claude. In Subclip the same workflow runs entirely on Subclip's own tools and models: no connector to add, no outside account, no keys. What stays is the craft: how to prepare the clip, how to describe a light as a setup, how to lock everything that must not change, and how to check the result.

```
FILM ONE TAKE -> FRAME 0 -> RELIT STILL -> VIDEO RELIGHT -> CHECK -> EDIT / STACK
(your clip)     (export)   (image model)  (video model)    (draft)   (Subclip)
```

## Step 0: Choose generators and quote

- **Stills (relight frame):** offer the creator's own Codex CLI first (see Subclip's `subclip-ai-generation` skill, `references/creator-cli-generators.md`). Otherwise `generate_ai_media`, kind `image`, with a model that accepts two reference images from `list_ai_models`: `seedream-5-lite` (the closest Subclip model to the Seedream 5.0 Pro the guide used), `nano-banana-2.1` or `gpt-image-2.5-flare`.
- **Video relight or swap:** `seedance-2.5` with the original clip as `role: "source_video"` and the still as `role: "reference"`, or `p-video-edit` (video up to 15 seconds, up to four reference images, prompt, optional draft mode). The guide used an edit mode of Seedance 2.5; this is the closest equivalent. Check live settings and limits in `list_ai_models`.
- `estimate_ai_generation` for the exact seconds and resolution, then quote the total with a retry allowance: video-in generation costs several times a plain clip, and a five-look reel is five generations plus stills. Run drafts first (see Step 5). A direct request for the exact job counts as approval; a bigger bill needs a new decision. Never ask for outside accounts or keys.

## Step 1: Prepare the clip

- Film on any phone. For relights: talk to camera and move your hands, because gestures sell the effect. A locked-off camera, a window behind you (it gives the new light a motivated source), eight to nine seconds.
- Trim to the moment that changes: at least four seconds, about six per pass to keep the price down. Keep framing and frame rate as shot. One change per pass: background first, then light; a result you like becomes the input for the next pass.
- Import the clip. Follow the Subclip order: `get_media_context` with a contact sheet, `transcribe_project` if speech matters, and the real duration from `get_project`. Never guess it.
- Export frame 0 of the clip: `seek_timeline` to the first frame, `export_current_frame`, import the PNG (`import_external_media`, `addToTimeline: false`).

## Step 2: Describe a light as a setup, not a colour grade

A grade is not a lighting setup. Tint-only looks all read the same. For each look write a small table:

| Field | Example (sunset through haze) |
|---|---|
| Time | Sunset |
| Motivated source | A burning orange sun behind the subject through the window |
| Key | Backlight: a hot orange rim on hair, jaw, hand |
| Fill | None; the face sits in warm shadow |
| Background | Dark teal-green shadow |
| Exposure | About three stops darker than the raw clip |
| Atmosphere and grade | Thick haze, orange highlights, teal shadows |

Look for a motivated light: a window, a slash of light, haze, one strong colour. A reference photo lends only its light, never its people or room. `references/relight-looks.md` has the five looks and the lines that fixed every problem the guides hit.

## Step 3: Relight one still first

This step makes the method work. Text-only relights come back timid, with the old room light still on the face. A still becomes the target for every frame.

1. Image 1 is frame 0, image 2 is an optional reference for the light.
2. Prompt: relight like a feature-film cinematographer; keep image 1 exactly (same person, face, expression, pose, hands, framing, lens, room layout, depth of field); change only light, atmosphere and colour; then the "new light" paragraph from your setup table; a photoreal 35mm film still, natural skin texture, film grain, soft halation.
3. Make two stills per look (different reference or wording), same shape as the clip (for example 16:9 or 9:16). Review with `view_current_frame`; pick the winner by eye.

For a background swap, build the new background description with the same care: real scale and depth (what is near and what is far, haze on the distance), the light direction that matches the new place, and the colour of the real light on the subject. See `references/background-swap.md`.

## Step 4: Video pass (clip plus still)

Run the model with the clip as the video source and the still as the reference. The video prompt locks what must not move and describes the light as the still shows it. Use the block structure in `references/video-prompt-blocks.md`: locked from the plate, the room unchanged, remove, lighting exactly as the still, static light with no reveal, lens and look, lock.

Use draft settings first: lowest resolution, shortest length that proves the look. Never rewrite the video prompt from the reference; describe the winning still.

## Step 5: Check, then finalize

Run every look as a cheap draft. Check it before you spend more:

- **Light holds.** Scrub it: no fade-in, flicker or brightness ramp.
- **Room unchanged.** No new bulbs, windows or fixtures. Nothing moved.
- **Face intact.** Still the same person, eyes natural, no pattern projected on the skin.
- **Length.** An eight second clip can come back a few frames short (a clip of 96 frames came back as 89 in the guide). Compare the imported duration to the original with `get_project`. If it is short, retime with the playback speed on `update_media_item` or trim the original to match, then keep the original audio.
- **Lips in sync.** Place the result on the exact frames it came from. Keep the original audio item untouched and mute the generated one.

Only the winning drafts get the higher resolution run. Quote it first. If the catalog caps resolution, say so; do not promise an upscale Subclip does not offer.

## Step 6: Edit the whole video

Ask for the first edit as one plain-language message and review a frame before continuing. In Subclip, the agent builds it on the native timeline: a bold one-word-at-a-time title on the hook, motion panels when each thing is named, captions in the brand font, and one sound effect per visual event. `references/edit-prompts.md` has the prompts and the Subclip tool map. Keep generated clips on the exact frames they came from, cut to them on gestures such as finger snaps, then preview before export.

## Step 7 (bonus): The five-look stack

One vertical reel with the five relit clips in a stack.

- Canvas: `set_canvas_properties` for 1080 by 1920, black background.
- Strips: five wide bands, rounded corners, equal gaps; crop each clip with `set_media_framing` and `adjust_media_transform` so the hair has room.
- Labels: the setup's name with `add_text_overlay` in a bold condensed font, on the left; keep the right side and bottom clear for the platform's buttons.
- Order: alternate warm and cool so neighbours never look alike.
- Sync: all strips start on the same frame and run the same length.
- Sound: one dark trailer-style cue (`generate_music` or `search_public_audio`), cut hit to hit so the reel loops clean. Check frames with `get_timeline_contact_sheet`. Say what still needs a listening review.

## Rules

- One edit call at a time per project; keep creator work; re-read state after each edit.
- Say plainly which model made each file and which clips are drafts.
- Nothing is published unless the creator asks and confirms.

## Credit

Adapted for Subclip from guides by sferro21 (https://www.instagram.com/sferro21). Rewritten in our own words; the creator's guides state no license, so please confirm permission with the creator before relying on this skill.
