# 15 Reel export (9:16)

**Status:** partly new (safe-zone numbers already live in `trendjack-animator`; this adds the headline-over-clip layout and delivery checks, done on the Subclip timeline instead of ffmpeg). **Use it for:** a wide or square motion video turned into a 1080x1920 reel or short, with a hook on top that the apps accept without washing out colors.

## Inputs, then wait

1. The video (any size) in the project.
2. The headline: two short lines, word for word. It is the hook people read with the sound off.
3. Logos, as attached files, if the video names a product or company.
4. The background color around the video. Default near-black #0B0B0F.

## The safe zone

The app draws its own buttons, caption and profile over the edges of a reel. Keep every word and logo between y 360 and y 1420 (nothing in the bottom 500 px) and out of the right 120 px. Put the headline at the top of that zone, then the video under it. A 16:9 video scaled to 1080 wide is 608 tall and sits well at y 660. (`trendjack-animator` uses x 71 to 1027 and y 347 to 1426 for captions; both are consistent.)

## Steps in Subclip

1. `create_project` at 1080x1920 (or use a new 9:16 project) and keep the ID on every call.
2. Add the video as a native media item, scale it to 1080 wide with `update_media_item` and position it at y 660. Place a near-black background layer behind it.
3. Add the headline with `add_text_overlay` (two lines, top of the safe zone), and each logo on its own dark rounded tile so it never vanishes on a light frame.
4. `get_timeline_contact_sheet` and `view_current_frame` at three moments: nothing in the bottom 500 px or right 120 px, everything readable at phone size.
5. `get_export_configuration`, then `export_video` as H.264 at 1080x1920, 30 fps. If the video has no sound, add a silent or very quiet bed so the file has an audio track.

## Delivery checks

Before upload, confirm in the export result: video H.264, 1080x1920, an audio track present, and a re-export (not a camera original) so a phone recording that is HEVC and full range never goes up as is. Look at one frame from the middle at phone size. Keep the hook to two lines of a second to read ("This Mac launch" / "is 100% code").

## Subclip tools

`create_project`, `update_media_item`, `add_text_overlay`, `update_text_item`, `get_timeline_contact_sheet`, `view_current_frame`, `get_export_configuration`, `export_video`, `get_export_status`.

## Credit cost

The code route costs no credits. If the creator also wants a generated clip or a cloud voice, run `get_ai_credit_status`, pick a model from `list_ai_models`, run `estimate_ai_generation`, show the model, count and total, and wait for approval before `generate_ai_media`. Local narration with `generate_local_speech` is free.

## Reference clip

`examples/15-reel-export.mp4` (rough reference, rendered in code with no AI model).

## Source

Upstream file: `skills/reel-export/SKILL.md` in charlie947/motion-graphics-skills (https://github.com/charlie947/motion-graphics-skills/blob/main/skills/reel-export/SKILL.md), MIT. Rewritten in our own words for Subclip.

Shared steps (project, build, checks, export) are in the root `SKILL.md` under Shared build workflow.
