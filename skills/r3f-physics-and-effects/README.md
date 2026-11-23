Adapted for Subclip from [pmndrs/react-three-rapier](https://github.com/pmndrs/react-three-rapier) by Poimandres, MIT.

Adapted for Subclip from [pmndrs/react-postprocessing](https://github.com/pmndrs/react-postprocessing) by Poimandres, MIT.

# R3F Physics and Effects

Build editable 3D shots around one visible event, such as a ball hitting the floor, a stack settling, or an impact lighting up a ring. The skill carries forward Rapier's collider and contact techniques and react-postprocessing's selective bloom, glitch, and depth-of-field recipes.

**Runtime status.** Subclip does not expose either wrapper to authored layers. The current fallback uses seekable Three.js motion and material-based glow. See the [skill](SKILL.md) and [runtime notes](references/runtime-and-recipes.md).

The registry accepts one upstream, so it lists Rapier. Both MIT notices are preserved unchanged in [LICENSE](LICENSE) and [LICENSE.react-postprocessing](references/LICENSE.react-postprocessing). The latter credits react-spring as copyright holder. The postprocessing reference was checked at [e07ef9a](https://github.com/pmndrs/react-postprocessing/tree/e07ef9a890c8a202a3b20eac0249032cff4e7805). The cover is original artwork.

<!-- examples:start -->

## Examples

<p align="center"><img src="examples/attractors.jpg" alt="Small rigid bodies gather around a central attractor." width="720"><br><sub>Small rigid bodies gather around a central attractor.</sub></p>

<p align="center"><img src="examples/automatic-colliders.jpg" alt="Wireframes show automatic colliders around different meshes." width="720"><br><sub>Wireframes show automatic colliders around different meshes.</sub></p>

<p align="center"><img src="examples/compound-colliders.jpg" alt="Several collider shapes surround a single rigid body." width="720"><br><sub>Several collider shapes surround a single rigid body.</sub></p>

<p align="center"><img src="examples/physics-joints.jpg" alt="A jointed chain of spheres hangs between supports." width="720"><br><sub>A jointed chain of spheres hangs between supports.</sub></p>

<p align="center"><img src="examples/goal-sensor.jpg" alt="A ball approaches a goal that demonstrates a physics sensor." width="720"><br><sub>A ball approaches a goal that demonstrates a physics sensor.</sub></p>

<p align="center"><sub>Examples by Poimandres, MIT, from github.com/pmndrs/react-three-rapier</sub></p>

<!-- examples:end -->
