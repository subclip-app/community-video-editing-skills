# Shot and render recipes

Craft notes adapted from the scene design and animation guides of ahujasid/mcp-for-blender (MIT). Work in a new scene or a saved copy, never in the creator's only copy.

## Plan the shot

Write down before touching Blender: subject, camera angle and move, aspect ratio, frame rate, duration in frames (seconds times fps), and the space reserved for a Subclip title.

- 16:9 landscape is 1920 x 1080. Vertical is 1080 x 1920. Match the Subclip project canvas.
- 24 or 30 fps. Use the same fps as the Subclip project when possible.
- Short shots read best: 3 to 6 seconds for a turntable or camera move.

## Blockout

1. Check scale first (`get_scene_info`). Work at real-world size.
2. Block the subject and set with simple primitives. Check proportions with `look` in camera and angles modes before adding detail.
3. Put things on the ground. Floating or clipping objects are the most common flaw. Scale from the bounding box, not by eye.
4. Compose for the camera early. Foreground, midground, background. Leave negative space where a title will go. Subject on a third.
5. Lens: 35 to 50 mm natural, 85 mm and up for product shots, 24 mm or wider for interiors.
6. Do not mix very different styles (low-poly props next to photoreal scans) in one frame.

## Lighting

- Ambient light plus reflections from an HDRI at strength 0.5 to 1.5, then a key light for shape and shadows.
- Product shots: key light, a fill at lower power, a rim light behind.
- Interiors: area lights at windows plus practical lamps.
- Judge a rendered-shading camera frame. Blown white or pure black means light power is off; fix power before exposure.

## Motion

- Timing and spacing matter more than poses. Ease in and out of holds. Use linear motion for constant movement such as a turntable.
- Turntable: rotate the subject (or a parent empty) 360 degrees over the whole shot, linear interpolation. For a seamless loop, make the last frame the same pose as the first and leave the duplicate frame out of the render range.
- Camera moves: animate the camera or a parent empty. A Track To constraint on a target empty keeps the subject framed. Keep focal length changes slow.
- Add anticipation before big moves and a small settle after them. Objects travel on arcs, not straight lines.
- Check motion with the frames mode of `look` and `view: "camera"`: frames near the start, middle, end and every direction change. Look for popping, interpenetration, sliding and the loop seam.

## Render output

- Test first: one still frame or a short low-sample preview. Raise samples only for the final.
- Resolution and fps in the output settings must match the plan. Use 100 percent scale.
- Preferred output: a video file (H.264 in an MP4 or MOV container, set in Output properties). If the build offers only image sequences, render numbered PNG frames and assemble them with Blender's own Video Sequencer.
- Use an absolute output path on the computer running Subclip and a unique name per version (for example `mug-turntable-v2`) so a rerender never overwrites an earlier file.
- Transparent backgrounds need PNG with RGBA and Film Transparent enabled; plain MP4 cannot hold alpha.
- Check the finished file exists and plays before importing it.

## After the render

Import with `import_external_media`, trim with `trim_media_item`, and add titles in Subclip. Geometry, lights and animation changes go back to the saved Blender scene, then a new render replaces the clip with `replace_media_item_source`.
