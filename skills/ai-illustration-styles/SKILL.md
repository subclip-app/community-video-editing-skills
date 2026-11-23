---
name: ai-illustration-styles
description: Restyle any photo or video frame into one of twelve illustration looks (Cartoon Modern UPA, graphic noir, superflat, caricature, risograph, neon punk anime, ligne claire, gouache, constructivism, neo-expressionism, Persian miniature, cel-shaded mecha) with an image model, then optionally animate the result over your original video. Use when the creator wants a photo or thumbnail in an illustrated style, a style test across several looks, stylised B-roll from a frame, or a restyled talking-head video.
---

# AI Illustration Styles (Subclip edition)

One photo, twelve different worlds. Each style is a recipe: what to keep from the photo, how to redraw the person, how to rebuild the surroundings, which palette and texture to use, and what to ban.

## Step 0: Choose the generator (ask once)

- **Images:** offer the creator's own Codex CLI first (it edits from a reference photo on their ChatGPT plan; see Subclip's `subclip-ai-generation` skill, `references/creator-cli-generators.md`). Otherwise use `generate_ai_media` with an image model from `list_ai_models` that accepts reference images: `gpt-image-2.5-flare` (a GPT Image 2.5 model, the one the guide used), `nano-banana-2.1` (up to 14 references) or `seedream-5-lite`. Name the one you pick and why.
- Quote the number of images times the live price with `estimate_ai_generation`; approve once. Expect two or three variants per style. A catalog run of all twelve is a bigger bill, so offer a shortlist first.
- No outside provider accounts or keys.

## Step 1: Get the photo

Use the original, unedited picture every time. Portraits and talking-head frames work best: a clear face, visible hands, a simple pose.

From a video in the project: `get_media_context` (read the contact sheet), `extract_video_frames` to look at candidate times, then `seek_timeline` and `export_current_frame` to save the chosen frame as a PNG. Import it with `import_external_media` (`addToTimeline: false`) and describe it with `describe_media`.

## Step 2: Pick a style

Ask what the image is for (thumbnail, B-roll, title card, a reference for an animated look) and show the creator the list in `references/styles.md`. Recommend two or three that suit the subject and the brand colours. One style per generation, never a mix.

## Step 3: Build and run the prompt

Use the wrapper in `references/styles.md`:

1. Transform the photo into the style.
2. Keep framing, camera angle, pose, gaze, expression and hand gestures.
3. Redraw faces, bodies, clothes, objects and surroundings. State that the style matters more than likeness.
4. Paste the style's character, set, palette and texture lines.
5. End with: keep the source aspect ratio, plus the style's ban list.

Send it with the photo as a reference (`sourceAssets`, `role: "reference"`). Generate two or three variants. Import them as project media and review them with `view_current_frame`. Keep the one where the style reads best. If the result still looks like a photo with a filter, run it again; the stronger the instruction to redraw everything, the less photographic the result. Check any text in the image (the recipes ask for none).

## Step 4: Use the styled frame

- **As a still:** place it with `place_editor_asset` or `import_generated_media_to_timeline`, animate gently with `add_media_keyframe` (a slow push-in), add titles with `add_text_overlay`.
- **As a start frame for animation:** `generate_ai_media`, kind `video`, a model that takes a first frame (`wan-3`, `kling-v3`, `veo-3.1-fast`), the styled frame with `role: "start_frame"`. The `wan-animation-styles` skill covers motion that fits each look.
- **Restyle the whole video:** use the styled frame as the look reference and your original clip as the motion source. In Subclip use `p-video-edit` (a source video up to 15 seconds plus up to four reference images) or `seedance-2.5` with the clip as `role: "source_video"` and the styled frame as `role: "reference"`. Check the model's schema in `list_ai_models`, quote the exact seconds with `estimate_ai_generation` (video-in generation costs several times a plain clip), and test on the shortest useful segment first.

## Check

- Same framing and gestures as the photo, redrawn style everywhere (face, hands, clothes, background in one visual language).
- No text or logos in the image.
- Face still readable at thumbnail size.
- For video: compare duration and voice sync against the original before editing around it.

## Credit

Adapted for Subclip from guides by sferro21 (https://www.instagram.com/sferro21). Rewritten in our own words; the creator's guides state no license, so please confirm permission with the creator before relying on this skill.
