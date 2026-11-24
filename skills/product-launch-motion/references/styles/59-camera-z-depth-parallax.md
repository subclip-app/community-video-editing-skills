# 59 Z depth and parallax

Group: Camera and cursor
Use it for: Depth without a 3D engine.

## Recipe (in our own words, swap the [brackets])

- preserve-3d; touched elements get z 12 to 22 px. Two planes drift in opposite directions, one slow move each, never per-element drift.

## Prompt to give the layer builder

Build a [10 s] [1920x1080] layer for [fictional or real product, brand colours]. Style: Z depth and parallax. Follow the recipe above. Copy and numbers: [your approved copy and figures]. Hold the final state still for the last [0.5 s]. Use only seekable motion: every value is a function of the playhead.

## Subclip tools

validate_runtime_layer_source, then add_runtime_layer (HyperFrames: HTML plus one paused GSAP timeline) or a Remotion layer when you need typed props or Three.js. Look at the frame with view_current_frame after the entrance, at the settled state and near the exit.

## Credits

0 credits. This is a code layer, rendered locally. Only quote credits if you add AI images, video, music or voice, and then use estimate_ai_generation first.

## Where it comes from

Upstream file: [legacy/references/05-camera-3d-cursor.md](https://github.com/AbubakrChan/product-launch-motion/blob/main/legacy/references/05-camera-3d-cursor.md) in AbubakrChan/product-launch-motion (MIT).

## Reference clip

`examples/59-camera-z-depth-parallax.mp4` (our own render, a fictional product, no AI model, a rough reference of the move rather than a template).
