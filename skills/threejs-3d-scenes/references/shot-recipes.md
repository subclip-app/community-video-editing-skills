# Native 3D shot recipes

Three.js organizes a shot around geometry and materials, a camera, lights, and a render time. Subclip's native viewport renders a bundled glTF model with a registered starting scene. Keep its geometry and material setup, then use editable scene controls to tell the story.

| Scene decision | Subclip control |
| --- | --- |
| Subject and initial framing | Approved model and its default camera |
| Point of attention | Camera target in scene units |
| Near versus far perspective | Camera distance and field of view |
| Silhouette and surface contrast | Studio, soft, or dramatic lighting with a quiet scene background |
| Flat layout in the wider composition | Viewport center and size in canvas percentages |
| Motion and pauses | Model and camera keyframes at project times |

## Phone reveal with a readable landing

Fit the exact checkout recording to the approved phone's semantic screen slot. Match the source orientation to the screen where possible. Start with a shallow three-quarter angle to show the edge. Turn toward the viewer and hold through the UI action. If narration is present, land before the sentence that names the screen detail.

For a five-second layer starting at project second 12, use the saved, frame-aligned start as the anchor. If it is exactly 12, the keys below are a starting timing plan.

| Project time | Pose |
| --- | --- |
| 12.0 | Model turned 25 degrees around Y relative to its readable pose |
| 12.5 | Same opening pose, with ease-in-out for the outgoing turn |
| 14.0 | Readable pose, camera aimed at the screen |
| 17.0 | Same readable pose |

Read the model first and adapt the angle to its forward axis. Preserve the base pose's other axes and scale. Preview the midpoint and final visible frame before adding any text. If the UI becomes too small, move the camera inward along its viewing direction or narrow the FOV, then check the device edges.

## Turntable or tabletop reveal

For a full revolution, start with the reviewed turntable preset when the creator requests one. For a short reveal, hold a strong silhouette, rotate the object partway about its vertical axis, and settle on the feature. Pitch tilts the view of the top or bottom. Roll tilts the horizon in the image. Check all intermediate angles for cropped corners or a flat silhouette.

For camera motion, keep the target near the feature and put intermediate camera positions around that target. A straight path between opposite sides crosses the subject. For a push-in, keep the camera on the same side of the target and check that near surfaces stay visible. Use scene background for contrast within the viewport and a transparent scene background to reveal lower layers.

## Explicit custom Three.js Remotion scene

The native renderer uses Three.js, React Three Fiber, and a glTF loader internally. Its MCP interface exposes registry models and semantic controls. It has no custom source field or arbitrary model import. A custom procedural mesh can instead live in a separate editable Remotion layer when the creator requests that workflow.

Read the installed Remotion skill and its authoring contract. The checked runtime allows the package roots `three` and `@remotion/three`. Direct `@react-three/fiber` imports and arbitrary Three.js loader subpaths are outside the allowlist. Treat the live allowlist as authoritative.

Use one default-exported component. For a procedural cube or exploded stack, group simple meshes, light them with ambient and directional light, and use a contrasting material on the part that moves. Use `ThreeCanvas` with width and height from `useVideoConfig` and `gl={{preserveDrawingBuffer: true}}`. Derive transforms from `useCurrentFrame()` with clamped interpolation. Use local layer frames, avoid elapsed wall time and accumulating delta, and set `layout="none"` on any Remotion Sequence inside the 3D canvas.

Pass the component source to `validate_runtime_layer_source`, then save it with `add_runtime_layer` using the current schemas. Inspect first, middle, and last visible frames, then seek back to the midpoint and confirm the pose matches. Retain the editable runtime layer and review the actual WebGL pixels in the exported output if export was requested.

## Upstream reading

- [Three.js README and rotating cube example](https://github.com/mrdoob/three.js#readme)
- [Three.js manual and API documentation](https://threejs.org/docs/)
