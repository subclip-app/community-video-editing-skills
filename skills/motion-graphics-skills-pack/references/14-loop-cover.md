# 14 Loop cover

**Status:** new. **Use it for:** turning a newsletter or blog cover into a seamless loop where only one named element moves. It gets noticed in a feed of stills, but only works if the move is small, the loop never jumps and the first frame still makes sense alone.

## Inputs, then wait

1. The cover: a finished still, or a cover built in code. 896x640, or a larger image with the same 7:5 shape.
2. The one element that moves, named plainly ("the lighthouse beam", "the orange line drawing itself").
3. How it moves: a pulse, a draw-on, a slow drift or a glow. One move, not three.

## Build

- Code cover: animate only the named element as a function of time.
- Image cover: build a mask of the named element by color (for example every pixel where blue is much stronger than red), soften its edge a few pixels, and change only those pixels. Nothing outside the mask moves. Build this as a HyperFrames canvas layer with the still imported as the base image.
- Use one clean sine cycle or one draw-on, hold and fade across 9 seconds (180 frames at 20 fps).
- **Rotate the loop so the first frame is the finished picture.** Inboxes and link previews show frame 1 as a still. Frame i draws the moment `((i + offset) mod 180) / 20` seconds, where `offset` puts the fully drawn state first.
- Prefer flat colors with no dithering when exporting a GIF, because dithering adds flicker to a flat image.

## Check the seam (no scripts needed)

- Use `view_current_frame` at 0 seconds and at the last frame. They must match. A seam is a visible jump when the loop restarts.
- Measure the biggest change against frame 0, never at the halfway frame (a sine is back at zero there, so a working move looks like no move). Look at frames around the peak and compare them with frame 0.
- Shrink a frame to 240 px wide and look again. That is the inbox size. If the moving element disappears, it is too small.
- "You changed the image entirely" is the common failure: animate only what was named.

## Export

If the export options list GIF, export one (180 frames, 20 fps, 896x640) and confirm the file name still ends in .gif after any upload; some upload tools convert to PNG and silently drop the animation. If GIF is not offered, export MP4 and tell the creator. Target size: roughly 0.6 to 2.3 MB.

A video model adds a camera move even when told to hold still. Animating the still in code is the way to lock the camera.

## Subclip tools

`import_attachment_to_project_media` or `import_external_media` for the cover still, `add_runtime_layer` (kind `hyperframes`, canvas), `view_current_frame`, `seek_timeline`, `get_export_configuration`, `export_video`.

## Credit cost

The code route costs no credits. If the creator also wants a generated clip or a cloud voice, run `get_ai_credit_status`, pick a model from `list_ai_models`, run `estimate_ai_generation`, show the model, count and total, and wait for approval before `generate_ai_media`. Local narration with `generate_local_speech` is free.

## Reference clip

`examples/14-loop-cover.mp4` (rough reference, rendered in code with no AI model).

## Source

Upstream file: `skills/loop-cover/SKILL.md` in charlie947/motion-graphics-skills (https://github.com/charlie947/motion-graphics-skills/blob/main/skills/loop-cover/SKILL.md), MIT. Rewritten in our own words for Subclip.

Shared steps (project, build, checks, export) are in the root `SKILL.md` under Shared build workflow.
