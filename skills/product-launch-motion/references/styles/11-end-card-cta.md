# 11 End card and CTA

Group: Scene types (shots)
Use it for: The close of every film. Rhymes with the hook.

## Recipe (in our own words, swap the [brackets])

- Outgoing residue (two empty panels) clears off opposite edges while the mark draws on; that swap is the transition.
- Mark: a stroke layer self-draws by dashoffset, then crossfades to the filled layer. Never tween gradient stops.
- Headline words on their own cues; the brand word takes a linear gradient sweep. CTA pops on its verb, URL on its own cue.
- Logo band last: rest opacity up front, stagger only the y rise. Last frame is a poster.

## Prompt to give the layer builder

Build a [10 s] [1920x1080] layer for [fictional or real product, brand colours]. Style: End card and CTA. Follow the recipe above. Copy and numbers: [your approved copy and figures]. Hold the final state still for the last [0.5 s]. Use only seekable motion: every value is a function of the playhead.

## Subclip tools

validate_runtime_layer_source, then add_runtime_layer (HyperFrames: HTML plus one paused GSAP timeline) or a Remotion layer when you need typed props or Three.js. Look at the frame with view_current_frame after the entrance, at the settled state and near the exit.

## Credits

0 credits. This is a code layer, rendered locally. Only quote credits if you add AI images, video, music or voice, and then use estimate_ai_generation first.

## Where it comes from

Upstream file: [legacy/references/09-shot-catalog.md](https://github.com/AbubakrChan/product-launch-motion/blob/main/legacy/references/09-shot-catalog.md) in AbubakrChan/product-launch-motion (MIT).

## Reference clip

`examples/11-end-card-cta.mp4` (our own render, a fictional product, no AI model, a rough reference of the move rather than a template).
