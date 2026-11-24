# 30 Closed-form spring

Group: Motion recipes (v2)
Use it for: Every move in the one-shape style: pure functions of time, no CSS transitions.

## Recipe (in our own words, swap the [brackets])

- Step response 0 to 1: critically damped x = w tau, 1 - e^-x (1 + x); underdamped with wd = w sqrt(1 - z^2).
- A value that changes target many times is the sum of one spring per change (Track class). Damping 0.72 to 0.9 for a tiny overshoot, 1.0 for camera and text.
- A target that must arrive at time T is issued one settle-lead early.

## Prompt to give the layer builder

Build a [10 s] [1920x1080] layer for [fictional or real product, brand colours]. Style: Closed-form spring. Follow the recipe above. Copy and numbers: [your approved copy and figures]. Hold the final state still for the last [0.5 s]. Use only seekable motion: every value is a function of the playhead.

## Subclip tools

validate_runtime_layer_source, then add_runtime_layer (HyperFrames: HTML plus one paused GSAP timeline) or a Remotion layer when you need typed props or Three.js. Look at the frame with view_current_frame after the entrance, at the settled state and near the exit.

## Credits

0 credits. This is a code layer, rendered locally. Only quote credits if you add AI images, video, music or voice, and then use estimate_ai_generation first.

## Where it comes from

Upstream file: [references/technique.md](https://github.com/AbubakrChan/product-launch-motion/blob/main/references/technique.md) in AbubakrChan/product-launch-motion (MIT).

## Reference clip

`examples/30-closed-form-spring.mp4` (our own render, a fictional product, no AI model, a rough reference of the move rather than a template).
