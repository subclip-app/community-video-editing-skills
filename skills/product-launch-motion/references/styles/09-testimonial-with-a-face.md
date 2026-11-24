# 09 Testimonial with a face

Group: Scene types (shots)
Use it for: A named, consenting customer with a result. Use their own photo.

## Recipe (in our own words, swap the [brackets])

- White card on light ground with faint concentric rings. Accent rule, one-sentence quote, cite row: face, name and role, hairline, company mark.
- Reveal with one tilted wipe panel (constant tilt in both states). Stagger the cite row at 0.04 s so the face lands on person and the logo on the brand.
- Hairline draws, the figure counts up, the quieter unit fades in last. Then locked still.
- In this reference the face is an abstract avatar for a fictional customer.

## Prompt to give the layer builder

Build a [10 s] [1920x1080] layer for [fictional or real product, brand colours]. Style: Testimonial with a face. Follow the recipe above. Copy and numbers: [your approved copy and figures]. Hold the final state still for the last [0.5 s]. Use only seekable motion: every value is a function of the playhead.

## Subclip tools

validate_runtime_layer_source, then add_runtime_layer (HyperFrames: HTML plus one paused GSAP timeline) or a Remotion layer when you need typed props or Three.js. Look at the frame with view_current_frame after the entrance, at the settled state and near the exit.

## Credits

0 credits. This is a code layer, rendered locally. Only quote credits if you add AI images, video, music or voice, and then use estimate_ai_generation first.

## Where it comes from

Upstream file: [legacy/references/09-shot-catalog.md](https://github.com/AbubakrChan/product-launch-motion/blob/main/legacy/references/09-shot-catalog.md) in AbubakrChan/product-launch-motion (MIT).

## Reference clip

`examples/09-testimonial-with-a-face.mp4` (our own render, a fictional product, no AI model, a rough reference of the move rather than a template).
