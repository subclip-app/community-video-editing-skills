# 33 Agent cursor and trail

Group: Motion recipes (v2)
Use it for: A cursor that is a character: gradient arrow, name pill, lean, trail, ripple.

## Recipe (in our own words, swap the [brackets])

- Lean = clamp(-vx * 0.0045, +-14 degrees). The name pill trails by -v * 0.012 px.
- Press scale 1 - 0.16 e^-((t-tc)/0.045)^2, ripple ring 0.4 s.
- Trail: sample the cursor at t - k * 9 ms (k up to 22), tapered segments, alpha from speed.

## Prompt to give the layer builder

Build a [10 s] [1920x1080] layer for [fictional or real product, brand colours]. Style: Agent cursor and trail. Follow the recipe above. Copy and numbers: [your approved copy and figures]. Hold the final state still for the last [0.5 s]. Use only seekable motion: every value is a function of the playhead.

## Subclip tools

validate_runtime_layer_source, then add_runtime_layer (HyperFrames: HTML plus one paused GSAP timeline) or a Remotion layer when you need typed props or Three.js. Look at the frame with view_current_frame after the entrance, at the settled state and near the exit.

## Credits

0 credits. This is a code layer, rendered locally. Only quote credits if you add AI images, video, music or voice, and then use estimate_ai_generation first.

## Where it comes from

Upstream file: [references/technique.md](https://github.com/AbubakrChan/product-launch-motion/blob/main/references/technique.md) in AbubakrChan/product-launch-motion (MIT).

## Reference clip

`examples/33-agent-cursor-and-trail.mp4` (our own render, a fictional product, no AI model, a rough reference of the move rather than a template).
