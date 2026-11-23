# HyperFrames motion layers

**Pre-installed in Subclip: you do not need to install this skill.**

This is the listing for the HyperFrames engine that ships inside the Subclip AI Editor. When you ask your agent for animated graphics, it writes an editable layer on your timeline: a title, kinetic text, a chart, a map, word-by-word captions, a device scene or an overlay. The layer is plain HTML, CSS and a GSAP timeline. You can change its copy, colours and timing later, move it, resize it and fade it like any other item.

The page exists so you can see what the built-in skill does, and so other agents and people on GitHub can read the same rules. The built-in skills behind it are `subclip-hyperframes-layer`, `subclip-hyperframes-captions` and `subclip-hyperframes-map`.

## What your agent can do with it

- Build titles, lower thirds, logo reveals, counters and annotations.
- Draw animated line, bar and pie charts and bar-chart races.
- Draw flow maps and route maps from verified coordinates.
- Turn the project's captions into a styled word-by-word caption layer.
- Put your screen recording in a laptop or phone scene.
- Use GSAP, Lottie and deterministic Three.js, all checked by a validator before anything is saved.

## Ask for it

- "Add an animated line graph that highlights the March spike."
- "Make a HyperFrames lower third for the speaker, navy and cyan."
- "Give this clip word-by-word captions in a bold kinetic style."
- "Show a flow map with lines from New York to Chicago and Austin."

## HyperFrames or Remotion

HyperFrames is the default for new motion graphics in Subclip. Ask for Remotion, React or TSX, or pick a Remotion template, and the agent uses `remotion-motion-layers` instead. Both make editable layers. For related looks see `code-motion-styles`, `motion-polish` and `code-animation-styles-remotion`.

## What is inside

- `SKILL.md`: the workflow, engine choice and rules, in our own words.
- `references/authoring-contract.md`: the document shape, timing rules, pinned runtime and Three.js notes.
- `references/captions.md`: the caption conversion workflow.
- `references/maps.md`: when and how to build a HyperFrames map.
- `examples/capability-hyperframes-motion-layers.mp4`: a 17 second reference reel.

No keys are needed. Layers cannot read your files or call outside services with credentials. The agent asks before spending credits.

<!-- examples:start -->

## Examples

<p align="center"><video src="examples/capability-hyperframes-motion-layers.mp4" controls muted loop playsinline width="720"></video><br><sub>Capability reference: charts, maps, captions and device scenes as HyperFrames layers</sub></p>

<p align="center"><video src="examples/hyperframes-line-graph-highlight-point.mp4" controls muted loop playsinline width="720"></video><br><sub>HyperFrames layer: line graph that draws in and highlights one point</sub></p>

<p align="center"><video src="examples/hyperframes-bar-chart-race.mp4" controls muted loop playsinline width="720"></video><br><sub>HyperFrames layer: bar chart race with a ticking year label</sub></p>

<p align="center"><video src="examples/hyperframes-us-flow-map.mp4" controls muted loop playsinline width="720"></video><br><sub>HyperFrames layer: flow map with animated connections between cities</sub></p>

<p align="center"><video src="examples/hyperframes-caption-camera-follow.mp4" controls muted loop playsinline width="720"></video><br><sub>HyperFrames layer: kinetic caption words with a camera that follows them</sub></p>

<p align="center"><video src="examples/hyperframes-subclip-hinged-laptop-showcase.mp4" controls muted loop playsinline width="720"></video><br><sub>HyperFrames layer: hinged laptop device scene for a product reveal</sub></p>

<p align="center"><video src="examples/hyperframes-terminal-code-reveal.mp4" controls muted loop playsinline width="720"></video><br><sub>HyperFrames layer: terminal line that types out your title</sub></p>

<p align="center"><video src="examples/hyperframes-saas-launch-logo-reveal.mp4" controls muted loop playsinline width="720"></video><br><sub>HyperFrames layer: title reveal with a glowing purple floor</sub></p>

<p align="center"><video src="examples/hyperframes-hand-drawn-circle-highlight.mp4" controls muted loop playsinline width="720"></video><br><sub>HyperFrames layer: hand-drawn arc and highlighted label (template text)</sub></p>

<p align="center"><sub>Subclip motion graphics template previews, each listed as a HyperFrames template in the Subclip catalog, plus a capability reel rendered by Subclip with HyperFrames. Template text is placeholder copy.</sub></p>

<!-- examples:end -->

## Credits

HyperFrames is an open-source video framework by [HeyGen](https://github.com/heygen-com/hyperframes), licensed Apache-2.0. Subclip runs it inside the AI Editor. This listing and its text are written by Subclip and released under the MIT license in `LICENSE`. The example clips are previews from Subclip's own template catalog.
