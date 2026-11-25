---
name: portrait-style-prompts
description: Restyle a frame of your own video into a chosen look (anime, watercolour, pixel art, noir comic, paper cut, or your own) with a seven-slot portrait style prompt, then use the styled frame as a start frame or reference to generate a video in that style. Use when the creator wants a talking-head frame turned into a stylised portrait, "make this video look like anime or watercolour", a style transfer from one frame to a video, or a set of the same portrait in several art styles.
---

# Portrait Style Prompts and Frame-to-Style (Subclip edition)

A style prompt describes one portrait completely: who is in the picture, in what medium, under what light, in what clothes, from what era, with what colour grade and mood. Feed it a frame of your video and the image model returns that frame in the style. The styled frame then becomes the first frame or the look reference for a generated video.

```
VIDEO  ->  FRAME  ->  STYLE PROMPT  ->  STYLED IMAGE  ->  STYLED VIDEO
(yours)   (exact     (7 slots)         (image model)     (start frame or reference)
          moment)
```

## Step 0: Choose generators (ask once)

- **Image:** offer the creator's own signed-in Codex CLI first (see Subclip's `subclip-ai-generation` skill, `references/creator-cli-generators.md`). Otherwise `generate_ai_media`, kind `image`, with a model from `list_ai_models` that accepts reference images (`gpt-image-2.5-flare`, `nano-banana-2.1` or `seedream-5-lite`). Name the pick and why.
- **Video:** Subclip video models through `generate_ai_media` (`list_ai_models` kind `video`). The Grok CLI can also be offered for video if it works. 
- Quote model, count, seconds, `estimate_ai_generation` total and a retry allowance before any spend. A larger bill needs a new decision.

## Step 1: Choose the frame

1. `get_media_context` on the video (read the contact sheet; reuse an existing description).
2. `extract_video_frames` at a handful of candidate seconds (up to the tool's limit) and look at them. Prefer a clear face, visible hands, a simple pose and background, and a moment that represents the video.
3. When the frame is chosen, make a file: `seek_timeline` to that time, then `export_current_frame` (saves a PNG of the composed frame). If you need the raw source frame without edits, export it from a project containing only the source clip.
4. Import the PNG with `import_external_media` and `addToTimeline: false`, describe it with `describe_media`, and look at it.

## Step 2: Write the style prompt (seven slots)

Fill these in order. The first sentence names what to keep from the frame; the rest describe the target.

| Slot | What it says |
|---|---|
| 1 Subject | Who and where: framing (front-facing bust, wide shot), pose, expression, clothes, the setting. Take it from the real frame. |
| 2 Medium | The technique: cel-shaded 2D, pigment washes on paper, 16-bit pixels, inked black and white, layered cut paper. |
| 3 Light | How the light behaves in that medium: hard beam with sharp highlights, diffused glow, dithered stripe, chiaroscuro, raking light with soft shadows under each layer. |
| 4 Wardrobe | How clothes are drawn: crisp exaggerated fit, muted tones that bleed, simplified shapes, stark pinstripes, flat die-cut shapes. |
| 5 Era | The time reference: late-90s Japanese animation, timeless vintage, early-90s console, 1940s detective, modern editorial collage. |
| 6 Colour grade | Saturation and palette: high saturation against cool grey-blue, desaturated pastels, CRT primaries, pure black and white, matte muted tones with one warm accent. |
| 7 Mood | The feeling: intense, reflective, playful, menacing, tactile. |

Add the guard line: keep the framing, pose, gaze and expression of the person in the frame; redraw everything else in the style; no text or logos. `references/five-styles.md` has a ready slot sheet for five looks. To invent a new look, fill the same seven slots.

## Step 3: Generate and choose

Send the prompt with the frame as a reference (`sourceAssets`, `role: "reference"`). Make two or three variants of one style. Import them, review with `view_current_frame`, and keep the one that reads most clearly as the style while still looking like the same person and moment. Save the winning image's description with `describe_media`.

## Step 4: Turn the styled frame into video

Choose one route by what the creator wants:

1. **A new clip that starts on the styled picture.** `generate_ai_media`, kind `video`, the styled image as the first frame (`role: "start_frame"`) in a model that takes one. Describe the motion and the style in the prompt: repeat the medium, grade and mood words from the style prompt so the look holds.
2. **Same performance, new look.** Restyle the original footage: `p-video-edit` (a source video up to 15 seconds plus up to four reference images and a prompt) or `seedance-2.5` with the clip as `role: "source_video"` and the styled image as `role: "reference"`. The clip keeps its timing and gestures, and the reference carries the look. This costs several times a plain clip, so quote the exact seconds and test on the shortest useful segment first.
3. **A style card inside the edit.** Keep only the still: `place_editor_asset`, a slow `add_media_keyframe` push-in, a title with `add_text_overlay`.

Import finished operations with `import_ai_operation_to_timeline`. Check start, middle and end frames, the duration and whether the face, hands and style held. One edit call at a time. Export only when asked.

## Checks

- Style readable in the first second of the clip.
- Face and pose still match the source frame.
- No text, no logos, no drifting back to realism mid-clip.
- Voice or music: generated video may bring its own sound; turn it off or replace it on purpose.

## Reference

A finished example: [luthier-style-reference.mp4](examples/luthier-style-reference.mp4). A fictional luthier speaks to camera (Kling Avatar v2 with a local voice), one frame is picked, the seven slots are filled for an anime look, and the styled frame becomes a five-second anime clip (Seedance 2 at 720p). The same frame then appears as watercolour, paper cut and noir comic, ending on all four looks side by side. Stills: gpt-image-2 through the Codex CLI. The [contact sheet](examples/one-second-contact-sheet.jpg) shows one frame per second and [four-looks.jpg](examples/four-looks.jpg) shows the four styled stills.

## Credit

Adapted for Subclip from guides by sferro21 (https://www.instagram.com/sferro21). Rewritten in our own words; the creator's guides state no license, so please confirm permission with the creator before relying on this skill.
