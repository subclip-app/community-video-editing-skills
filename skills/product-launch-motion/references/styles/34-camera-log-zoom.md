# 34 Camera on log-zoom

Group: Motion recipes (v2)
Use it for: Zooms that feel even.

## Recipe (in our own words, swap the [brackets])

- Camera = translate(centre) scale(z) translate(-cx,-cy) with x, y and log(z) on springs. Zooming linearly in z feels wrong.

## Prompt to give the layer builder

Build a [10 s] [1920x1080] layer for [fictional or real product, brand colours]. Style: Camera on log-zoom. Follow the recipe above. Copy and numbers: [your approved copy and figures]. Hold the final state still for the last [0.5 s]. Use only seekable motion: every value is a function of the playhead.

## Subclip tools

validate_runtime_layer_source, then add_runtime_layer (HyperFrames: HTML plus one paused GSAP timeline) or a Remotion layer when you need typed props or Three.js. Look at the frame with view_current_frame after the entrance, at the settled state and near the exit.

## Credits

0 credits. This is a code layer, rendered locally. Only quote credits if you add AI images, video, music or voice, and then use estimate_ai_generation first.

## Where it comes from

Upstream file: [references/technique.md](https://github.com/AbubakrChan/product-launch-motion/blob/main/references/technique.md) in AbubakrChan/product-launch-motion (MIT).

## Reference clip

`examples/34-camera-log-zoom.mp4` (our own render, a fictional product, no AI model, a rough reference of the move rather than a template).
