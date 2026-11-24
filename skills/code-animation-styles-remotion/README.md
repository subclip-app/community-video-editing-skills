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

<p align="center"><a href="examples/capability-animation-styles.mp4"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/code-animation-styles-remotion/capability-animation-styles.gif" alt="Capability reference: ten of the 39 styles in a 20 second montage" width="480"></a><br><sub>Capability reference: ten of the 39 styles in a 20 second montage <a href="examples/capability-animation-styles.mp4">Play with sound</a></sub></p>

<p align="center"><a href="examples/01-whiteboard.mp4"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/code-animation-styles-remotion/01-whiteboard.gif" alt="1. Whiteboard: the 5 second chai film" width="480"></a><br><sub>1. Whiteboard: the 5 second chai film <a href="examples/01-whiteboard.mp4">Play with sound</a></sub></p>

<p align="center"><a href="examples/02-chalkboard.mp4"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/code-animation-styles-remotion/02-chalkboard.gif" alt="2. Chalkboard: the 5 second chai film" width="480"></a><br><sub>2. Chalkboard: the 5 second chai film <a href="examples/02-chalkboard.mp4">Play with sound</a></sub></p>

<p align="center"><a href="examples/05-notepad-doodle.mp4"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/code-animation-styles-remotion/05-notepad-doodle.gif" alt="5. Notepad doodle: the 5 second chai film" width="480"></a><br><sub>5. Notepad doodle: the 5 second chai film <a href="examples/05-notepad-doodle.mp4">Play with sound</a></sub></p>

<p align="center"><a href="examples/06-blueprint.mp4"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/code-animation-styles-remotion/06-blueprint.gif" alt="6. Blueprint: the 5 second chai film" width="480"></a><br><sub>6. Blueprint: the 5 second chai film <a href="examples/06-blueprint.mp4">Play with sound</a></sub></p>

<p align="center"><a href="examples/08-hand-drawn.mp4"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/code-animation-styles-remotion/08-hand-drawn.gif" alt="8. Hand-drawn pencil sketch: the 5 second chai film" width="480"></a><br><sub>8. Hand-drawn pencil sketch: the 5 second chai film <a href="examples/08-hand-drawn.mp4">Play with sound</a></sub></p>

<p align="center"><a href="examples/09-urban-sketch.mp4"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/code-animation-styles-remotion/09-urban-sketch.gif" alt="9. Urban sketch: the 5 second chai film" width="480"></a><br><sub>9. Urban sketch: the 5 second chai film <a href="examples/09-urban-sketch.mp4">Play with sound</a></sub></p>

<p align="center"><a href="examples/10-crayon-book.mp4"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/code-animation-styles-remotion/10-crayon-book.gif" alt="10. Crayon book: the 5 second chai film" width="480"></a><br><sub>10. Crayon book: the 5 second chai film <a href="examples/10-crayon-book.mp4">Play with sound</a></sub></p>

<p align="center"><a href="examples/11-watercolour.mp4"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/code-animation-styles-remotion/11-watercolour.gif" alt="11. Watercolour: the 5 second chai film" width="480"></a><br><sub>11. Watercolour: the 5 second chai film <a href="examples/11-watercolour.mp4">Play with sound</a></sub></p>

<p align="center"><a href="examples/13-one-line.mp4"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/code-animation-styles-remotion/13-one-line.gif" alt="13. One line: the 5 second chai film" width="480"></a><br><sub>13. One line: the 5 second chai film <a href="examples/13-one-line.mp4">Play with sound</a></sub></p>

<p align="center"><a href="examples/16-cel-line-boil.mp4"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/code-animation-styles-remotion/16-cel-line-boil.gif" alt="16. Cel line boil: the 5 second chai film" width="480"></a><br><sub>16. Cel line boil: the 5 second chai film <a href="examples/16-cel-line-boil.mp4">Play with sound</a></sub></p>

<p align="center"><a href="examples/17-flat-vector.mp4"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/code-animation-styles-remotion/17-flat-vector.gif" alt="17. Flat vector: the 5 second chai film" width="480"></a><br><sub>17. Flat vector: the 5 second chai film <a href="examples/17-flat-vector.mp4">Play with sound</a></sub></p>

<details><summary>More example videos</summary>

<ul><li><a href="examples/21-cel-anime-80s.mp4">21. 80s cel anime: the 5 second chai film</a></li><li><a href="examples/22-stick-figure.mp4">22. Stick figure: the 5 second chai film</a></li><li><a href="examples/23-cut-out.mp4">23. Cut-out collage: the 5 second chai film</a></li><li><a href="examples/24-red-papercut.mp4">24. Red papercut: the 5 second chai film</a></li><li><a href="examples/25-paper-pop-up.mp4">25. Paper pop-up: the 5 second chai film</a></li><li><a href="examples/27-shadow-puppet.mp4">27. Shadow puppet: the 5 second chai film</a></li><li><a href="examples/28-woodcut.mp4">28. Woodcut: the 5 second chai film</a></li><li><a href="examples/29-engraving.mp4">29. Engraving: the 5 second chai film</a></li><li><a href="examples/31-silkscreen-poster.mp4">31. Silkscreen poster: the 5 second chai film</a></li><li><a href="examples/33-ukiyo-e.mp4">33. Ukiyo-e: the 5 second chai film</a></li><li><a href="examples/34-art-deco.mp4">34. Art deco: the 5 second chai film</a></li><li><a href="examples/35-stained-glass.mp4">35. Stained glass: the 5 second chai film</a></li><li><a href="examples/39-memphis-diorama.mp4">39. Memphis diorama: the 5 second chai film</a></li><li><a href="examples/51-sticker-explainer.mp4">51. Sticker explainer: the 5 second chai film</a></li><li><a href="examples/52-math-diagram.mp4">52. Math diagram: the 5 second chai film</a></li><li><a href="examples/57-low-poly-island.mp4">57. Low-poly island: the 5 second chai film</a></li><li><a href="examples/58-brick-toy.mp4">58. Brick toy: the 5 second chai film</a></li><li><a href="examples/59-glass-product.mp4">59. Glass product: the 5 second chai film</a></li><li><a href="examples/62-claymation.mp4">62. Claymation: the 5 second chai film</a></li><li><a href="examples/80-lidar-survey.mp4">80. Lidar survey: the 5 second chai film</a></li><li><a href="examples/70-silent-film.mp4">70. Silent film: the 5 second chai film</a></li><li><a href="examples/71-newsreel.mp4">71. Newsreel: the 5 second chai film</a></li><li><a href="examples/64-pixel-art-rpg.mp4">64. Pixel art RPG: the 5 second chai film</a></li><li><a href="examples/81-microscope.mp4">81. Microscope: the 5 second chai film</a></li><li><a href="examples/84-hologram-hud.mp4">84. Hologram HUD: the 5 second chai film</a></li><li><a href="examples/85-circuit-board.mp4">85. Circuit board: the 5 second chai film</a></li><li><a href="examples/87-liquid-motion.mp4">87. Liquid motion: the 5 second chai film</a></li><li><a href="examples/89-generative-abstract.mp4">89. Generative abstract: the 5 second chai film</a></li></ul>

</details>

<p align="center"><sub>Examples by deenukhan, MIT, from the animation-styles repo (github.com/deenukhan/animation-styles)</sub></p>

<!-- examples:end -->

## Credits

- animation-styles by deenukhan (https://github.com/deenukhan/animation-styles), MIT license, copyright 2026 Deenu Khan. The 39 styles, their numbering, the chai story and the example clips in `examples/` come from this collection and are used under its MIT license. The original LICENSE is kept in this folder.
- The descriptions, recipes, guide and tool steps in this folder are written by Subclip in our own words. The capability video and preview are cut from the upstream clips with Subclip labels.
