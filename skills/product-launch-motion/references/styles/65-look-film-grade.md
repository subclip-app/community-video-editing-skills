# 65 Film grade

Group: Look and grade
Use it for: Grain, vignette, sweep on one overlay.

## Recipe (in our own words, swap the [brackets])

- Grain: feTurbulence with a luminance-to-alpha matrix, re-seeded at 12 Hz from the playhead. Vignette 0.15 corner alpha. No mix-blend-mode in overlay tracks.

## Prompt to give the layer builder

Build a [10 s] [1920x1080] layer for [fictional or real product, brand colours]. Style: Film grade. Follow the recipe above. Copy and numbers: [your approved copy and figures]. Hold the final state still for the last [0.5 s]. Use only seekable motion: every value is a function of the playhead.

## Subclip tools

validate_runtime_layer_source, then add_runtime_layer (HyperFrames: HTML plus one paused GSAP timeline) or a Remotion layer when you need typed props or Three.js. Look at the frame with view_current_frame after the entrance, at the settled state and near the exit.

## Credits

0 credits. This is a code layer, rendered locally. Only quote credits if you add AI images, video, music or voice, and then use estimate_ai_generation first.

## Where it comes from

Upstream file: [legacy/references/06-look-and-grade.md](https://github.com/AbubakrChan/product-launch-motion/blob/main/legacy/references/06-look-and-grade.md) in AbubakrChan/product-launch-motion (MIT).

## Reference clip

`examples/65-look-film-grade.mp4` (our own render, a fictional product, no AI model, a rough reference of the move rather than a template).
