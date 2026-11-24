# 01 Kinetic type beats

Group: Scene types (shots)
Use it for: Cold open for a pain that is a list of chores. No footage needed.

## Recipe (in our own words, swap the [brackets])

- One ground, [3 to 5] short lines, each at its final y. Nothing scrolls; the stack accumulates.
- One emphasis word per line (the verb) carries the accent gradient. Spent lines fall to 0.30 opacity and nudge up 10 px per arrival.
- Each line rises 28 px in 0.3 s (power3.out) on its own uneven cue time, never an even rhythm. A hairline rule draws under the active line.
- Last line: three micro-hits, one per word, then one 4 px settle and absolute stillness.
- Sound: a soft transient per line, rising level, one deeper hit on the last word.

## Prompt to give the layer builder

Build a [10 s] [1920x1080] layer for [fictional or real product, brand colours]. Style: Kinetic type beats. Follow the recipe above. Copy and numbers: [your approved copy and figures]. Hold the final state still for the last [0.5 s]. Use only seekable motion: every value is a function of the playhead.

## Subclip tools

validate_runtime_layer_source, then add_runtime_layer (HyperFrames: HTML plus one paused GSAP timeline) or a Remotion layer when you need typed props or Three.js. Look at the frame with view_current_frame after the entrance, at the settled state and near the exit.

## Credits

0 credits. This is a code layer, rendered locally. Only quote credits if you add AI images, video, music or voice, and then use estimate_ai_generation first.

## Where it comes from

Upstream file: [legacy/references/09-shot-catalog.md](https://github.com/AbubakrChan/product-launch-motion/blob/main/legacy/references/09-shot-catalog.md) in AbubakrChan/product-launch-motion (MIT).

## Reference clip

`examples/01-kinetic-type-beats.mp4` (our own render, a fictional product, no AI model, a rough reference of the move rather than a template).
