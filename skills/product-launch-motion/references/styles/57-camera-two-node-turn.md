# 57 Two-node camera turn

Group: Camera and cursor
Use it for: A whole-shot rotation and a mid-shot scale on different elements.

## Recipe (in our own words, swap the [brackets])

- Outer node dolly, inner node turn. perspective 2200 to 2800, rotationY -6 to -10 settling at -1 to -2, rotationX 2 to 0.5, ease power1.inOut. Never resolve to exactly 0.

## Prompt to give the layer builder

Build a [10 s] [1920x1080] layer for [fictional or real product, brand colours]. Style: Two-node camera turn. Follow the recipe above. Copy and numbers: [your approved copy and figures]. Hold the final state still for the last [0.5 s]. Use only seekable motion: every value is a function of the playhead.

## Subclip tools

validate_runtime_layer_source, then add_runtime_layer (HyperFrames: HTML plus one paused GSAP timeline) or a Remotion layer when you need typed props or Three.js. Look at the frame with view_current_frame after the entrance, at the settled state and near the exit.

## Credits

0 credits. This is a code layer, rendered locally. Only quote credits if you add AI images, video, music or voice, and then use estimate_ai_generation first.

## Where it comes from

Upstream file: [legacy/references/05-camera-3d-cursor.md](https://github.com/AbubakrChan/product-launch-motion/blob/main/legacy/references/05-camera-3d-cursor.md) in AbubakrChan/product-launch-motion (MIT).

## Reference clip

`examples/57-camera-two-node-turn.mp4` (our own render, a fictional product, no AI model, a rough reference of the move rather than a template).
