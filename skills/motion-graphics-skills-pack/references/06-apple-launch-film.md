# 06 Apple-style launch film (notch)

**Status:** new. **Use it for:** a launch film that looks like a native Mac interface: a thin menu bar, a black notch that grows into widgets one scene at a time, a full-screen gradient wallpaper per scene and one short caption per scene. Every pixel of the "Mac" is drawn in code. Fictional or the creator's own product only, and the interface is original: never copy a real product's icons or logos.

## Inputs to ask for, then wait

1. The product name and its one line, word for word.
2. The facts list: every feature, number and requirement the film may show. Nothing else goes on screen.
3. The scenes: six to eight, each one feature and one short caption (for example "Your voice lives here.").
4. A reference (optional): frames of a real launch film. It sets the look only, never the words.
5. Size and length: 1920x1080, 30 fps, about 2.5 seconds a scene.

## Build brief

```text
Build one seekable HyperFrames layer, [WIDTH] x [HEIGHT], 30 fps, for a launch film of [PRODUCT]. The frame is a Mac screen: a thin menu bar across the top with at most five items and a black notch at the top centre. The notch grows into widgets, one scene at a time. Each scene has its own full-screen [COLOR] gradient wallpaper and one centred caption below the notch; the last word or two of the caption are tinted a lighter shade of the wallpaper color.
Open with the notch expanded on black and the word "hello" handwritten in a white script line (draw the stroke progressively).
Use only these facts and add no others: [FACTS LIST].
Scenes of about 2.5 s: [1 notch expanded on black, hello] [2 to n: wallpaper color, what the notch opens into, the caption] [last: black, the notch closes to its resting shape, caption with PRODUCT and its one line].
System font stack. Widgets use grey bars for placeholder text.
Add a reduced-motion setting that swaps springs for quick fades.
After building, capture one frame per scene and compare it with the matching reference frame when one exists. Fix what differs.
```

## Craft rules learned in review

- Name the notch in words ("the notch at the top centre of the screen"). Without that anchor a model may draw a whole laptop.
- Springs, not tweens: width and height spring on their own curves, opening soft and closing with no overshoot.
- Work motion out from the start of the film, not per scene. If the notch reopens before it has finished closing, it carries on from where it is; a per-scene tween jumps.
- Compare against the reference scene by scene. Typical catches: a "hello" off-centre and too big, a chunky progress bar that should be thin ticks, a prompt jammed into the menu bar.
- Keep the menu bar short: a full menu of words gets cut in half by wide widgets.
- Widgets add no claims. Any interface word not in the facts list (button labels, a clock time) is listed back for approval.
- Check: would a stranger believe it is a real Mac for the first second, and is every word on screen from the facts list?

For a vertical cut, hand the result to recipe 15. Run `motion-polish` `review-animations` for a motion audit.

## Subclip tools

`create_project` (16:9, 1080p or 4K), `read_subclip_skill` for `subclip-hyperframes-layer`, `validate_runtime_layer_source`, `add_runtime_layer` (kind `hyperframes`), `seek_timeline`, `view_current_frame`, `get_timeline_contact_sheet`, `search_public_audio` (soft hits and a riser), `export_video`.

## Credit cost

The code route costs no credits. If the creator also wants a generated clip or a cloud voice, run `get_ai_credit_status`, pick a model from `list_ai_models`, run `estimate_ai_generation`, show the model, count and total, and wait for approval before `generate_ai_media`. Local narration with `generate_local_speech` is free.

## Reference clip

`examples/06-apple-launch-film.mp4` (rough reference, rendered in code with no AI model).

## Source

Upstream file: `skills/apple-launch-film/SKILL.md` in charlie947/motion-graphics-skills (https://github.com/charlie947/motion-graphics-skills/blob/main/skills/apple-launch-film/SKILL.md), MIT. Rewritten in our own words for Subclip.

Shared steps (project, build, checks, export) are in the root `SKILL.md` under Shared build workflow.
