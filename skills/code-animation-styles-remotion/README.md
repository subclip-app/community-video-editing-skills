# 39 code-drawn animation styles for Subclip

Adapted for Subclip from https://github.com/deenukhan/animation-styles by deenukhan, MIT

Pick one of 39 animation looks that are drawn entirely in code, then retell your own story in it. The agent builds one editable HyperFrames layer (or a Remotion layer if you ask for React) on your Subclip timeline, checks the frames, adds one sound if you want it and exports when you ask.

The styles run from a whiteboard, chalkboard and blueprint through watercolour, cel anime, papercut, woodcut, ukiyo-e and stained glass to brick toy, claymation, pixel art, a hologram HUD, a circuit board and liquid motion. Each one has a 5 second example clip in `examples/` and a build recipe with palette, motion rules and typography in `references/`.

## What you get

- A style index of all 39 looks with the other community skills that also cover them, so the agent picks the best fit (`references/overlap.md`).
- A guide for choosing a style by topic and audience, retelling the demo story with your own, durations and vertical safe zones (`references/our-guide.md`).
- Exact Subclip tool steps for code layers, sound, checks and export (`references/subclip-tools.md`).
- A 20 second capability video and a clip for every style.

## Cost

Code-drawn layers use no AI credits. Credits are only spent on optional extras such as cloud speech or generated music, and the agent quotes the cost and asks first.

## Other styles and overlaps

Many of these looks also exist in `ai-style-atlas`, `code-motion-styles`, `paper-cut-motion`, `pixelfx`, `cartoon-animation`, `threejs-3d-scenes` and `svg-character-animation`. This skill keeps all 39 for the example clips and the comparison method; the specialist skill wins when you need depth in one technique.

<!-- examples:start -->

## Examples

<p align="center"><video src="examples/capability-animation-styles.mp4" controls muted loop playsinline width="720"></video><br><sub>Capability reference: ten of the 39 styles in a 20 second montage</sub></p>

<p align="center"><video src="examples/01-whiteboard.mp4" controls muted loop playsinline width="720"></video><br><sub>01 Whiteboard: the 5 second chai film</sub></p>

<p align="center"><video src="examples/02-chalkboard.mp4" controls muted loop playsinline width="720"></video><br><sub>02 Chalkboard: the 5 second chai film</sub></p>

<p align="center"><video src="examples/05-notepad-doodle.mp4" controls muted loop playsinline width="720"></video><br><sub>05 Notepad doodle: the 5 second chai film</sub></p>

<p align="center"><video src="examples/06-blueprint.mp4" controls muted loop playsinline width="720"></video><br><sub>06 Blueprint: the 5 second chai film</sub></p>

<p align="center"><video src="examples/08-hand-drawn.mp4" controls muted loop playsinline width="720"></video><br><sub>08 Hand-drawn pencil sketch: the 5 second chai film</sub></p>

<p align="center"><video src="examples/09-urban-sketch.mp4" controls muted loop playsinline width="720"></video><br><sub>09 Urban sketch: the 5 second chai film</sub></p>

<p align="center"><video src="examples/10-crayon-book.mp4" controls muted loop playsinline width="720"></video><br><sub>10 Crayon book: the 5 second chai film</sub></p>

<p align="center"><video src="examples/11-watercolour.mp4" controls muted loop playsinline width="720"></video><br><sub>11 Watercolour: the 5 second chai film</sub></p>

<p align="center"><video src="examples/13-one-line.mp4" controls muted loop playsinline width="720"></video><br><sub>13 One line: the 5 second chai film</sub></p>

<p align="center"><video src="examples/16-cel-line-boil.mp4" controls muted loop playsinline width="720"></video><br><sub>16 Cel line boil: the 5 second chai film</sub></p>

<p align="center"><video src="examples/17-flat-vector.mp4" controls muted loop playsinline width="720"></video><br><sub>17 Flat vector: the 5 second chai film</sub></p>

<p align="center"><video src="examples/21-cel-anime-80s.mp4" controls muted loop playsinline width="720"></video><br><sub>21 80s cel anime: the 5 second chai film</sub></p>

<p align="center"><video src="examples/22-stick-figure.mp4" controls muted loop playsinline width="720"></video><br><sub>22 Stick figure: the 5 second chai film</sub></p>

<p align="center"><video src="examples/23-cut-out.mp4" controls muted loop playsinline width="720"></video><br><sub>23 Cut-out collage: the 5 second chai film</sub></p>

<p align="center"><video src="examples/24-red-papercut.mp4" controls muted loop playsinline width="720"></video><br><sub>24 Red papercut: the 5 second chai film</sub></p>

<p align="center"><video src="examples/25-paper-pop-up.mp4" controls muted loop playsinline width="720"></video><br><sub>25 Paper pop-up: the 5 second chai film</sub></p>

<p align="center"><video src="examples/27-shadow-puppet.mp4" controls muted loop playsinline width="720"></video><br><sub>27 Shadow puppet: the 5 second chai film</sub></p>

<p align="center"><video src="examples/28-woodcut.mp4" controls muted loop playsinline width="720"></video><br><sub>28 Woodcut: the 5 second chai film</sub></p>

<p align="center"><video src="examples/29-engraving.mp4" controls muted loop playsinline width="720"></video><br><sub>29 Engraving: the 5 second chai film</sub></p>

<p align="center"><video src="examples/31-silkscreen-poster.mp4" controls muted loop playsinline width="720"></video><br><sub>31 Silkscreen poster: the 5 second chai film</sub></p>

<p align="center"><video src="examples/33-ukiyo-e.mp4" controls muted loop playsinline width="720"></video><br><sub>33 Ukiyo-e: the 5 second chai film</sub></p>

<p align="center"><video src="examples/34-art-deco.mp4" controls muted loop playsinline width="720"></video><br><sub>34 Art deco: the 5 second chai film</sub></p>

<p align="center"><video src="examples/35-stained-glass.mp4" controls muted loop playsinline width="720"></video><br><sub>35 Stained glass: the 5 second chai film</sub></p>

<p align="center"><video src="examples/39-memphis-diorama.mp4" controls muted loop playsinline width="720"></video><br><sub>39 Memphis diorama: the 5 second chai film</sub></p>

<p align="center"><video src="examples/51-sticker-explainer.mp4" controls muted loop playsinline width="720"></video><br><sub>51 Sticker explainer: the 5 second chai film</sub></p>

<p align="center"><video src="examples/52-math-diagram.mp4" controls muted loop playsinline width="720"></video><br><sub>52 Math diagram: the 5 second chai film</sub></p>

<p align="center"><video src="examples/57-low-poly-island.mp4" controls muted loop playsinline width="720"></video><br><sub>57 Low-poly island: the 5 second chai film</sub></p>

<p align="center"><video src="examples/58-brick-toy.mp4" controls muted loop playsinline width="720"></video><br><sub>58 Brick toy: the 5 second chai film</sub></p>

<p align="center"><video src="examples/59-glass-product.mp4" controls muted loop playsinline width="720"></video><br><sub>59 Glass product: the 5 second chai film</sub></p>

<p align="center"><video src="examples/62-claymation.mp4" controls muted loop playsinline width="720"></video><br><sub>62 Claymation: the 5 second chai film</sub></p>

<p align="center"><video src="examples/80-lidar-survey.mp4" controls muted loop playsinline width="720"></video><br><sub>80 Lidar survey: the 5 second chai film</sub></p>

<p align="center"><video src="examples/70-silent-film.mp4" controls muted loop playsinline width="720"></video><br><sub>70 Silent film: the 5 second chai film</sub></p>

<p align="center"><video src="examples/71-newsreel.mp4" controls muted loop playsinline width="720"></video><br><sub>71 Newsreel: the 5 second chai film</sub></p>

<p align="center"><video src="examples/64-pixel-art-rpg.mp4" controls muted loop playsinline width="720"></video><br><sub>64 Pixel art RPG: the 5 second chai film</sub></p>

<p align="center"><video src="examples/81-microscope.mp4" controls muted loop playsinline width="720"></video><br><sub>81 Microscope: the 5 second chai film</sub></p>

<p align="center"><video src="examples/84-hologram-hud.mp4" controls muted loop playsinline width="720"></video><br><sub>84 Hologram HUD: the 5 second chai film</sub></p>

<p align="center"><video src="examples/85-circuit-board.mp4" controls muted loop playsinline width="720"></video><br><sub>85 Circuit board: the 5 second chai film</sub></p>

<p align="center"><video src="examples/87-liquid-motion.mp4" controls muted loop playsinline width="720"></video><br><sub>87 Liquid motion: the 5 second chai film</sub></p>

<p align="center"><video src="examples/89-generative-abstract.mp4" controls muted loop playsinline width="720"></video><br><sub>89 Generative abstract: the 5 second chai film</sub></p>

<p align="center"><sub>Examples by deenukhan, MIT, from the animation-styles repo (github.com/deenukhan/animation-styles)</sub></p>

<!-- examples:end -->

## Credits

- animation-styles by deenukhan (https://github.com/deenukhan/animation-styles), MIT license, copyright 2026 Deenu Khan. The 39 styles, their numbering, the chai story and the example clips in `examples/` come from this collection and are used under its MIT license. The original LICENSE is kept in this folder.
- The descriptions, recipes, guide and tool steps in this folder are written by Subclip in our own words. The capability video and preview are cut from the upstream clips with Subclip labels.
