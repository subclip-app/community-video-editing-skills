# Depth: the interface in space, real objects in a real space

A product film that only slides flat panels around reads as slides, however well it is cut. Depth makes a shot feel built: the camera swings round the interface, layers of it separate and pass each other, the logo stands as an object with light on its edges, the frame has a foreground, a subject and a background moving at different speeds. It is always one of the three directions, never all three, and recommended only when the product and the brief suit it. When it is chosen, it carries the whole film.

## Two routes in Subclip

| | Interface in space | Objects in a studio |
| --- | --- | --- |
| What | The real interface as layers in depth: captures, crops of them, pieces rebuilt in code | The product's things as objects: a device with its real screen, its logo, its model file |
| Build | A HyperFrames layer with CSS 3D (`perspective`, `rotationX`, `rotationY`, `z` on GSAP) | Native 3D layers (`list_3d_models`, `add_3d_layer`, `set_3d_screen_content`, `set_3d_keyframe_sequence`, `verify_3d_layer_setup`), or a deterministic Three.js HyperFrames scene for logos and custom objects |
| Good at | Sharp interface text at any distance, every piece editable, real layouts | Hero shots, devices, light and material, a space you travel through |
| Weak at | Light, shadow, materials (it is paper in space) | Reading interface text up close (keep that on a flat layer above) |

A film can use both: a 3D opening on a device, then the interface in space.

## The camera: strong moves that still read

Every move has a subject and ends on something. Starting points, not rules:

- **Swing reveal (an opening).** Frame 1 close and oblique on the real thing (distance a third of the final, yaw 40 to 55 degrees, a few degrees of roll), then `expo.out` over 1.5 to 1.8 s to the establishing angle. The first second carries most of the film's motion.
- **Orbit drift.** During a hold, yaw 10 to 25 degrees with `sine.inOut`: layers slide past each other. A hold without it is dead time.
- **Push to a detail.** 0.9 to 1.3 s `expo.inOut` onto the element.
- **Crane or pull-back.** Distance 1.5 to 2x, pitch up 15 to 25 degrees, yaw across 30 to 50 degrees in about 2 s: shows the whole space after a close section.
- **Land.** The last move settles on the hero frame: the object to one side, the type on the other. Layers collapsing back into the flat interface is a strong ending.
- **Snap (on a beat).** 0.3 to 0.5 s `expo.inOut` to a new angle on a hit; once or twice a film.
- Never spin without a target, never cut straight through an object, never end a move on empty space. Frames where the back of a slab fills the screen read as a black flash: check the first frame and the middle of every swing.

## When depth is chosen, the whole film is in space

Test films that took the depth direction often opened in 3D, then went back to flat cuts: depth as a trick for two seconds. A depth film is one space the camera travels through:

- Every stretch has a camera move in space. Lists, proofs and features are stations in the same world, and the camera travels from one to the next.
- Transitions go through space: fly through a layer into what is behind it, pull back until the last scene is one card among many, whip along the row.
- Flat is the exception, used as contrast: one deliberate flat beat at most, then back into space.
- Plan it in the treatment: the rhythm sheet names the camera move of every stretch and where each station sits (x, y, z).
- Check it: look at a frame from every stretch; if one could be a flat slide, give it its move.

## A fine space

- **A floor and a wall that do not end**: a soft sweep in the product's ground colour, with the object's soft shadow on it. A hard horizon or a black void reads as unfinished.
- **Light with dark parts.** All-bright makes metal look white and weightless; none turns it black.
- **Layers in depth.** Something close (it passes the lens during moves), the subject, something behind. Crops of the same screenshot are real material that costs nothing. Lift the panels of the interface apart in z (60 to 400 px) and let them settle.
- **Small life.** Objects float slightly, a panel turns a degree: a still object in a moving camera is fine, a still frame is not.
- **Screens keep their real colours**; logos in their own colours.

## Real material in 3D

- The logo: the real file. Never retype or redraw a logo.
- The interface: real captures on a device (`set_3d_screen_content` with the exact media id) or as floating cards; pieces that must change rebuilt in code, traced from the capture at the same size.
- Product objects: the product's own model if it has one; otherwise build from its real shapes, not a stock model.
- In a HyperFrames 3D scene, keep `perspective` on the parent and transforms on positioned children; an `overflow`, `filter` or opacity below 1 between the world and a layer flattens it.
