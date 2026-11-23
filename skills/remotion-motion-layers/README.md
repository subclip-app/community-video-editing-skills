# Remotion motion layers

**Pre-installed in Subclip: you do not need to install this skill.**

This is the listing for the Remotion engine that ships inside the Subclip AI Editor. Ask your agent for Remotion, React or TSX graphics, or choose a Remotion template, and it writes an editable layer on your timeline: a title, a chart, a globe or flat map, a 3D shot, a device frame or an overlay. The layer is one React component with typed props, so you can change copy, colours and numbers without touching code, and move, resize or fade it like any other item.

The page exists so you can see what the built-in skill does, and so other agents and people on GitHub can read the same rules. The built-in skill behind it is `subclip-remotion-layer`, together with the two map styles it uses (`map-explainer` and `river-sequence`).

## What your agent can do with it

- Build titles, glitch and kinetic text, logo reveals and counters.
- Draw charts and data stories driven by props.
- Make a Cesium globe route or a flat vector route map.
- Add real 3D with Three.js, plus Lottie, GIF, shapes and transitions.
- Put your clip in a phone or laptop frame, or show a terminal or UI flow.
- Check the result against the export renderer, which silently drops some CSS, before anything ships.

## Ask for it

- "Make a Remotion pie chart of where our users come from."
- "Show a globe route from London to Mumbai."
- "Use the glitch text template for the intro."
- "Put this screen recording in a phone frame."

## Remotion or HyperFrames

New motion graphics with no engine named go to HyperFrames in Subclip. Name Remotion, React or TSX, pick a Remotion template, or edit an existing Remotion layer, and the agent uses this skill. See `hyperframes-motion-layers` for the HTML and GSAP engine. For related looks see `code-animation-styles-remotion`, `code-video-recipes`, `motion-polish` and `threejs-3d-scenes`.

## What is inside

- `SKILL.md`: the workflow, engine choice and rules, in our own words.
- `references/authoring-contract.md`: component shape, props, approved imports and Three.js notes.
- `references/export-safe-css.md`: what the export renderer can and cannot draw.
- `references/map-styles.md`: the two built-in map styles and when to use each.
- `examples/capability-remotion-motion-layers.mp4`: a 17 second reference reel.

No keys are needed. Layers cannot install packages, fetch data or read your files. The agent asks before spending credits.

<!-- examples:start -->

## Examples

<p align="center"><video src="examples/capability-remotion-motion-layers.mp4" controls muted loop playsinline width="720"></video><br><sub>Capability reference: maps, charts, titles and device scenes as Remotion layers</sub></p>

<p align="center"><video src="examples/remotion-map-explainer.mp4" controls muted loop playsinline width="720"></video><br><sub>Remotion template: Cesium globe route between two cities</sub></p>

<p align="center"><video src="examples/remotion-river-sequence.mp4" controls muted loop playsinline width="720"></video><br><sub>Remotion template: flat vector map with an ordered route line</sub></p>

<p align="center"><video src="examples/remotion-animated-pie-chart.mp4" controls muted loop playsinline width="720"></video><br><sub>Remotion template: animated pie chart with a legend, driven by props</sub></p>

<p align="center"><video src="examples/remotion-glitch-text.mp4" controls muted loop playsinline width="720"></video><br><sub>Remotion template: glitch text title</sub></p>

<p align="center"><video src="examples/remotion-golden-bounce-3d.mp4" controls muted loop playsinline width="720"></video><br><sub>Remotion template: 3D golden spheres bouncing, rendered with Three.js</sub></p>

<p align="center"><video src="examples/remotion-phone-frame.mp4" controls muted loop playsinline width="720"></video><br><sub>Remotion template: phone frame holding a clip on screen</sub></p>

<p align="center"><video src="examples/remotion-terminal-simulator.mp4" controls muted loop playsinline width="720"></video><br><sub>Remotion template: terminal simulator with a typed command</sub></p>

<p align="center"><sub>Subclip motion graphics template previews, each listed as a Remotion template in the Subclip catalog, plus a capability reel rendered by Subclip with HyperFrames. Template text is placeholder copy.</sub></p>

<!-- examples:end -->

## Credits

Remotion is made by [Remotion](https://www.remotion.dev). Its source is available under a company license: individuals, non-profits and for-profit organizations with up to 3 employees use it free, and larger for-profit companies need a paid company license for commercial use (see the [license terms](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md)). Subclip runs it inside the AI Editor. This listing and its text are written by Subclip and released under the MIT license in `LICENSE`. The example clips are previews from Subclip's own template catalog, and the capability reel was built with [HyperFrames](https://github.com/heygen-com/hyperframes) by HeyGen, Apache-2.0.
