# 21 One shape: slider

Group: The one-shape loop (v2)
Use it for: State 6. A rate slider that stretches when dragged past its max.

## Recipe (in our own words, swap the [brackets])

- While held, value = cursor position; on release it springs back from wherever it was (sum of springs). Knob and fill follow the same Track.

## Prompt to give the layer builder

Build a [10 s] [1920x1080] layer for [fictional or real product, brand colours]. Style: One shape: slider. Follow the recipe above. Copy and numbers: [your approved copy and figures]. Hold the final state still for the last [0.5 s]. Use only seekable motion: every value is a function of the playhead.

## Subclip tools

validate_runtime_layer_source, then add_runtime_layer (HyperFrames: HTML plus one paused GSAP timeline) or a Remotion layer when you need typed props or Three.js. Look at the frame with view_current_frame after the entrance, at the settled state and near the exit.

## Credits

0 credits. This is a code layer, rendered locally. Only quote credits if you add AI images, video, music or voice, and then use estimate_ai_generation first.

## Where it comes from

Upstream file: [references/prompts.md](https://github.com/AbubakrChan/product-launch-motion/blob/main/references/prompts.md) in AbubakrChan/product-launch-motion (MIT).

## Reference clip

`examples/21-state-slider.mp4` (our own render, a fictional product, no AI model, a rough reference of the move rather than a template).
