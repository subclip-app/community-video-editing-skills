# 03 Held thesis

Group: Scene types (shots)
Use it for: The one positioning line the film earns. The shortest frame in the film.

## Recipe (in our own words, swap the [brackets])

- Two halves of one sentence, both boxes reserved from frame 1. Half two is quieter (0.8 opacity, no accent).
- One accent job: a gradient wipes through a single hinge word (background-position tween, 3x wide gradient), soft glow behind it.
- Half one rises as one unit; half two arrives about 1 s later. Then lock: nothing moves for the last 0.4 s.
- Ground is an aurora of three broad pools with one slow drift. Camera locked. Near-silence in the mix.

## Prompt to give the layer builder

Build a [10 s] [1920x1080] layer for [fictional or real product, brand colours]. Style: Held thesis. Follow the recipe above. Copy and numbers: [your approved copy and figures]. Hold the final state still for the last [0.5 s]. Use only seekable motion: every value is a function of the playhead.

## Subclip tools

validate_runtime_layer_source, then add_runtime_layer (HyperFrames: HTML plus one paused GSAP timeline) or a Remotion layer when you need typed props or Three.js. Look at the frame with view_current_frame after the entrance, at the settled state and near the exit.

## Credits

0 credits. This is a code layer, rendered locally. Only quote credits if you add AI images, video, music or voice, and then use estimate_ai_generation first.

## Where it comes from

Upstream file: [legacy/references/09-shot-catalog.md](https://github.com/AbubakrChan/product-launch-motion/blob/main/legacy/references/09-shot-catalog.md) in AbubakrChan/product-launch-motion (MIT).

## Reference clip

`examples/03-held-thesis.mp4` (our own render, a fictional product, no AI model, a rough reference of the move rather than a template).
