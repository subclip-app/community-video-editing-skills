# 27 Odometer of real numbers

Group: Flourishes (v2)
Use it for: Real figures rolling in. Only numbers you can defend.

## Recipe (in our own words, swap the [brackets])

- Per-digit strips 0 to 9 then 0 in slots sized to each final glyph, clipped vertically only.
- A digit only moves while the digit below it carries: floor(v/10^p) mod 10 plus the carry term. Ease v to the exact integer. Leading slots fade in as the number grows.

## Prompt to give the layer builder

Build a [10 s] [1920x1080] layer for [fictional or real product, brand colours]. Style: Odometer of real numbers. Follow the recipe above. Copy and numbers: [your approved copy and figures]. Hold the final state still for the last [0.5 s]. Use only seekable motion: every value is a function of the playhead.

## Subclip tools

validate_runtime_layer_source, then add_runtime_layer (HyperFrames: HTML plus one paused GSAP timeline) or a Remotion layer when you need typed props or Three.js. Look at the frame with view_current_frame after the entrance, at the settled state and near the exit.

## Credits

0 credits. This is a code layer, rendered locally. Only quote credits if you add AI images, video, music or voice, and then use estimate_ai_generation first.

## Where it comes from

Upstream file: [references/technique.md](https://github.com/AbubakrChan/product-launch-motion/blob/main/references/technique.md) in AbubakrChan/product-launch-motion (MIT).

## Reference clip

`examples/27-odometer-real-numbers.mp4` (our own render, a fictional product, no AI model, a rough reference of the move rather than a template).
