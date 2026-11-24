# 15 Chart reveal

Group: Scene types (shots)
Use it for: The number moved and here is the shape of the move. Only with real data.

## Recipe (in our own words, swap the [brackets])

- Axis and gridlines draw first, then bars grow by scaleY from the axis in reading order (0.08 to 0.12 s stagger).
- The claim bar overshoots slightly and takes the accent; its label counts with the bar.
- End on one held state with at most one annotation. Never plot numbers you do not have.

## Prompt to give the layer builder

Build a [10 s] [1920x1080] layer for [fictional or real product, brand colours]. Style: Chart reveal. Follow the recipe above. Copy and numbers: [your approved copy and figures]. Hold the final state still for the last [0.5 s]. Use only seekable motion: every value is a function of the playhead.

## Subclip tools

validate_runtime_layer_source, then add_runtime_layer (HyperFrames: HTML plus one paused GSAP timeline) or a Remotion layer when you need typed props or Three.js. Look at the frame with view_current_frame after the entrance, at the settled state and near the exit.

## Credits

0 credits. This is a code layer, rendered locally. Only quote credits if you add AI images, video, music or voice, and then use estimate_ai_generation first.

## Where it comes from

Upstream file: [legacy/references/09-shot-catalog.md](https://github.com/AbubakrChan/product-launch-motion/blob/main/legacy/references/09-shot-catalog.md) in AbubakrChan/product-launch-motion (MIT).

## Reference clip

`examples/15-chart-reveal.mp4` (our own render, a fictional product, no AI model, a rough reference of the move rather than a template).
