# 58 Dolly and fixed point

Group: Camera and cursor
Use it for: A push that keeps the cursor aligned with no maths.

## Recipe (in our own words, swap the [brackets])

- Set transform-origin exactly on the clicked control; it becomes a fixed point. Settle the push before the cursor arrives, release after the state resolves. Check bottom_after = bottom + (bottom - origin_y)(scale - 1) against the keep-out.

## Prompt to give the layer builder

Build a [10 s] [1920x1080] layer for [fictional or real product, brand colours]. Style: Dolly and fixed point. Follow the recipe above. Copy and numbers: [your approved copy and figures]. Hold the final state still for the last [0.5 s]. Use only seekable motion: every value is a function of the playhead.

## Subclip tools

validate_runtime_layer_source, then add_runtime_layer (HyperFrames: HTML plus one paused GSAP timeline) or a Remotion layer when you need typed props or Three.js. Look at the frame with view_current_frame after the entrance, at the settled state and near the exit.

## Credits

0 credits. This is a code layer, rendered locally. Only quote credits if you add AI images, video, music or voice, and then use estimate_ai_generation first.

## Where it comes from

Upstream file: [legacy/references/05-camera-3d-cursor.md](https://github.com/AbubakrChan/product-launch-motion/blob/main/legacy/references/05-camera-3d-cursor.md) in AbubakrChan/product-launch-motion (MIT).

## Reference clip

`examples/58-camera-dolly-fixed-point.mp4` (our own render, a fictional product, no AI model, a rough reference of the move rather than a template).
