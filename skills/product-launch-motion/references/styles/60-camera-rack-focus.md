# 60 Rack focus

Group: Camera and cursor
Use it for: Take the dead region out of focus when the camera commits.

## Recipe (in our own words, swap the [brackets])

- Blur 2.6 px and opacity 0.55 on the spent plane over 0.44 s, restore on release. Give the element an explicit blur(0px) start.

## Prompt to give the layer builder

Build a [10 s] [1920x1080] layer for [fictional or real product, brand colours]. Style: Rack focus. Follow the recipe above. Copy and numbers: [your approved copy and figures]. Hold the final state still for the last [0.5 s]. Use only seekable motion: every value is a function of the playhead.

## Subclip tools

validate_runtime_layer_source, then add_runtime_layer (HyperFrames: HTML plus one paused GSAP timeline) or a Remotion layer when you need typed props or Three.js. Look at the frame with view_current_frame after the entrance, at the settled state and near the exit.

## Credits

0 credits. This is a code layer, rendered locally. Only quote credits if you add AI images, video, music or voice, and then use estimate_ai_generation first.

## Where it comes from

Upstream file: [legacy/references/05-camera-3d-cursor.md](https://github.com/AbubakrChan/product-launch-motion/blob/main/legacy/references/05-camera-3d-cursor.md) in AbubakrChan/product-launch-motion (MIT).

## Reference clip

`examples/60-camera-rack-focus.mp4` (our own render, a fictional product, no AI model, a rough reference of the move rather than a template).
