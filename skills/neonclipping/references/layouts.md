# Eleven stream and gaming layouts, natively

Every layout is built from copies of the same trimmed source item. Each copy is a native media item with its own crop, position and size, so the creator can drag and change it later. Only one copy per clip plays sound; mute the others (`update_media_item` with `muted: true`).

## Units

In a 1080 by 1920 canvas, media geometry uses canvas-width units on both axes: the full canvas is `positionX 0`, `positionY 0`, `width 1`, `height 1.7778`. Crops are fractions of the source frame (`cropLeft`, `cropRight`, `cropTop`, `cropBottom`, each 0 to 1). Use `fitMode: "cover"` on every cropped copy so the cropped region fills its box without stretching; the editor trims whatever does not fit the box shape from the middle.

Tested in Subclip: a copy with `positionY 0.5689`, `width 1`, `height 1.2089`, `fitMode cover` and crops of 0.28 left, 0.28 right and 0.093 top shows exactly that source region in the lower band.

## Two boxes from the source

Before any layout, know two boxes in the source frame, as fractions:

- **Facecam box**: the streamer's webcam (`camX`, `camY`, `camW`, `camH`). Crop it to the inside of the webcam frame, without stream overlays, links or borders.
- **Game box**: the part of the gameplay worth showing, clear of the facecam, chat, alerts, sub goals and watermarks.

Crops from a box: `cropLeft = camX`, `cropRight = 1 - camX - camW`, `cropTop = camY`, `cropBottom = 1 - camY - camH`.

### Finding the facecam

NeonClipping looks at about 14 frames spread over the video, keeps edges that stay in exactly the same place in almost every frame (a static border), lists rectangles anchored to a corner or side, and keeps the one that holds a face in most frames. A minimap, HUD or chat panel also has static borders but never a face, so it is rejected. A face that stays in one spot with no border is a borderless webcam. If no candidate holds a face clearly, the answer is "no facecam".

In Subclip:

1. `get_media_context` with `includeContactSheet: true` on the source, then `inspectAtSeconds` with six moments spread across it.
2. Find the rectangle that is in the same place in every still and contains the face. Ignore the minimap, HUD, chat, alerts and subscriber goals.
3. Write the box as fractions of the frame. If you are not sure, say so and use a layout without a facecam (blurred fill, fill screen or gameplay only), or ask the creator to pick a corner.
4. Check the crop with `view_current_frame` and correct it until no overlay edge shows.

### Facecam position presets

Starting boxes when the creator names a corner instead of letting you find it. They are guesses, not detection: a wrong corner shows gameplay where the face should be, so always check one frame.

| Preset | camX | camY | camW | camH |
| --- | --- | --- | --- | --- |
| Top left | 0 | 0 | 0.25 | 0.30 |
| Top right | 0.75 | 0 | 0.25 | 0.30 |
| Bottom left | 0 | 0.70 | 0.25 | 0.30 |
| Bottom right | 0.75 | 0.70 | 0.25 | 0.30 |
| Bottom centre | 0.375 | 0.70 | 0.25 | 0.30 |
| None | no facecam | | | |

## Face size

One setting, `face`, from 0.20 to 0.50 of the canvas (default 0.32). It sets the facecam band height in the stacked layouts and the facecam width in the overlay and side layouts.

## The layouts

H is the canvas height in width units (1.7778 for 9:16). `f` is the face size. `m` is the corner margin, about 0.033 (36 px). Every copy uses `fitMode: "cover"`.

| Layout | Game copy (audible) | Facecam copy (muted, in front) |
| --- | --- | --- |
| **Face + gameplay** (camera above, the default for streams) | crop to game box; x 0, y `f*H`, w 1, h `(1-f)*H` | crop to facecam box; x 0, y 0, w 1, h `f*H` |
| Gameplay + face (camera below) | crop to game box; x 0, y 0, w 1, h `(1-f)*H` | crop to facecam box; x 0, y `(1-f)*H`, w 1, h `f*H` |
| Blurred fill | see below | none |
| Fill screen | full source, x 0, y 0, w 1, h H, `set_media_source_focus` on the action | none |
| Gameplay only | crop to game box, full canvas | none |
| Camera top left | game box, full canvas | x `m`, y 0.0667, w `f`, h `0.9*f` |
| Camera top right | game box, full canvas | x `1-f-m`, y 0.0667, w `f`, h `0.9*f` |
| Camera bottom left | game box, full canvas | x `m`, y `H-0.9*f-0.1667`, w `f`, h `0.9*f` |
| Camera bottom right | game box, full canvas | x `1-f-m`, y `H-0.9*f-0.1667`, w `f`, h `0.9*f` |
| Circle camera | game box, full canvas | x `m`, y 0.0667, w `f`, h `f`, `borderRadiusPx` 9999 for a round mask, optional thin white border |
| Side by side | crop to game box; x `f`, y 0, w `1-f`, h H | crop to facecam box; x 0, y 0, w `f`, h H |

**Blurred fill.** Two copies of the full source. Background copy: full canvas, `fitMode cover`, `blurPx` about 30, `brightness` about 0.6, muted, behind. Foreground copy: full canvas box with `fitMode contain`, audible, in front. Use it when the whole frame matters, or when there is no clear facecam.

**Layer order.** Use `set_media_layer_order`: the facecam copy goes in front of the game copy. Put the copies on separate lanes.

**Dark gameplay.** Horror games are often near black on a phone. A small `brightness` lift on the game copy (1.2 to 1.4) helps; do not lift the facecam.

**Same shot, same geometry.** If the streamer moves the webcam or switches scenes inside a clip, split both copies at that moment with `split_timeline_item` and set a new box for the new segment. Never animate a restless crop.

## Platform safe zones

Preview only; nothing is drawn in the export. When checking frames, keep the heading and captions out of:

- TikTok and Reels: the bottom 15 to 20% (caption, sound and buttons) and the right 12% (like, comment and share).
- YouTube Shorts: the bottom 15% and the right 10%.
- All: the top 7% (status bar and search).

The facecam may sit in the top band; the heading sits just under it.

## Where text goes per layout

- Opening heading: about 30 px (1.5%) under the facecam when the facecam is at the top (Face + gameplay, top corners, circle), otherwise centred at about 13.5% of the height.
- Captions: centred at about 75% of the height, or about 6% above the facecam when the facecam sits at the bottom.
