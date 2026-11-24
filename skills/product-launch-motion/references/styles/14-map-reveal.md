# 14 Map reveal

Group: Scene types (shots)
Use it for: Coverage, logistics, marketplaces, travel.

## Recipe (in our own words, swap the [brackets])

- Flat stylised geography as inline SVG, one accent over the ground. Never a live tile layer.
- Places land on their spoken names with a small scale pop; routes draw by dashoffset in 0.4 to 0.6 s in sentence order.
- Draw [3 to 5] hero routes; slow push toward the region that matters, released before the cut.
- Do not light up territory you do not operate in.

## Prompt to give the layer builder

Build a [10 s] [1920x1080] layer for [fictional or real product, brand colours]. Style: Map reveal. Follow the recipe above. Copy and numbers: [your approved copy and figures]. Hold the final state still for the last [0.5 s]. Use only seekable motion: every value is a function of the playhead.

## Subclip tools

validate_runtime_layer_source, then add_runtime_layer (HyperFrames: HTML plus one paused GSAP timeline) or a Remotion layer when you need typed props or Three.js. Look at the frame with view_current_frame after the entrance, at the settled state and near the exit.

## Credits

0 credits. This is a code layer, rendered locally. Only quote credits if you add AI images, video, music or voice, and then use estimate_ai_generation first.

## Where it comes from

Upstream file: [legacy/references/09-shot-catalog.md](https://github.com/AbubakrChan/product-launch-motion/blob/main/legacy/references/09-shot-catalog.md) in AbubakrChan/product-launch-motion (MIT).

## Reference clip

`examples/14-map-reveal.mp4` (our own render, a fictional product, no AI model, a rough reference of the move rather than a template).
