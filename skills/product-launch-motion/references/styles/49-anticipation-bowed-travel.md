# 49 Anticipation and bowed travel

Group: Motion grammar
Use it for: A cursor that decides instead of slides.

## Recipe (in our own words, swap the [brackets])

- 8 px pull-back in 0.05 s, then x and y on different eases and durations so the path bows. Leave a 0.01 s gap between tweens.

## Prompt to give the layer builder

Build a [10 s] [1920x1080] layer for [fictional or real product, brand colours]. Style: Anticipation and bowed travel. Follow the recipe above. Copy and numbers: [your approved copy and figures]. Hold the final state still for the last [0.5 s]. Use only seekable motion: every value is a function of the playhead.

## Subclip tools

validate_runtime_layer_source, then add_runtime_layer (HyperFrames: HTML plus one paused GSAP timeline) or a Remotion layer when you need typed props or Three.js. Look at the frame with view_current_frame after the entrance, at the settled state and near the exit.

## Credits

0 credits. This is a code layer, rendered locally. Only quote credits if you add AI images, video, music or voice, and then use estimate_ai_generation first.

## Where it comes from

Upstream file: [legacy/references/04-motion-grammar.md](https://github.com/AbubakrChan/product-launch-motion/blob/main/legacy/references/04-motion-grammar.md) in AbubakrChan/product-launch-motion (MIT).

## Reference clip

`examples/49-anticipation-bowed-travel.mp4` (our own render, a fictional product, no AI model, a rough reference of the move rather than a template).
