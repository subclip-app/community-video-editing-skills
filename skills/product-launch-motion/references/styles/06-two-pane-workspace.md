# 06 Two-pane workspace

Group: Scene types (shots)
Use it for: The beat that has to feel like using the product: inbox, editor, CRM, IDE.

## Recipe (in our own words, swap the [brackets])

- Two nested camera nodes: outer scales (dolly), inner turns (rotation). Everything, cursor included, lives inside the inner node.
- Rail cascades in, right pane opens, the outbound message types with one character stepper.
- Shared click routine: bloom 0.1 s early, press to 0.86, ring, spring back. Split cursor x and y eases so the path bows.
- When the inbound item lands the list row updates too. The action row flips on the click, then the camera releases and locks.

## Prompt to give the layer builder

Build a [10 s] [1920x1080] layer for [fictional or real product, brand colours]. Style: Two-pane workspace. Follow the recipe above. Copy and numbers: [your approved copy and figures]. Hold the final state still for the last [0.5 s]. Use only seekable motion: every value is a function of the playhead.

## Subclip tools

validate_runtime_layer_source, then add_runtime_layer (HyperFrames: HTML plus one paused GSAP timeline) or a Remotion layer when you need typed props or Three.js. Look at the frame with view_current_frame after the entrance, at the settled state and near the exit.

## Credits

0 credits. This is a code layer, rendered locally. Only quote credits if you add AI images, video, music or voice, and then use estimate_ai_generation first.

## Where it comes from

Upstream file: [legacy/references/09-shot-catalog.md](https://github.com/AbubakrChan/product-launch-motion/blob/main/legacy/references/09-shot-catalog.md) in AbubakrChan/product-launch-motion (MIT).

## Reference clip

`examples/06-two-pane-workspace.mp4` (our own render, a fictional product, no AI model, a rough reference of the move rather than a template).
