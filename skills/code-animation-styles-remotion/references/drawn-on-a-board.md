# Drawn on a board

Build the drawing as stroked SVG paths revealed with stroke-dashoffset, driven by layer time. The board is a full-frame rect, so the layer can sit over footage only with a mask or a card. Check legibility of thin lines at 1080p before exporting.

Each recipe below is a short build brief. The example clip named in the title is the visual target: open it before building. The chai film (kettle pours into a clay cup, steam rises, 5 s) is the demo story; replace it with the creator's story using `our-guide.md`.

## 1 Whiteboard

- Example: `examples/01-whiteboard.mp4`
- Look: A marker hand draws black outlines on a white board, then fills the cup with colour.
- Palette: Board #f7f7f2, marker black #1a1a1a, fills in 2 or 3 flat colours
- Motion rules: Stroke-draw each path with stroke-dashoffset on ones or twos; a marker hand follows the pen tip; colour fills fade in after the outline.
- Typography: None. If labels are needed use a hand marker font, 2 to 4 words.
- Engine: HyperFrames (SVG)
- Best for: Teaching, how-to, product explainers
- Also see: ai-style-atlas 04; claude-drawing-skill

## 2 Chalkboard

- Example: `examples/02-chalkboard.mp4`
- Look: Dusty coloured chalk on a green-black board in a wooden frame.
- Palette: Board #1f2a24, chalk white #f1efe6, chalk yellow, pink and blue accents, wood frame #7a5a3a
- Motion rules: Chalk strokes drawn with dashoffset, grain via a turbulence filter mask, slight smudge at the stroke start; step on twos.
- Typography: Chalk handwriting font, 2 to 4 words.
- Engine: HyperFrames (SVG)
- Best for: Lessons, school topics, recipes
- Also see: ai-style-atlas 23

## 3 Notepad doodle

- Example: `examples/03-notepad-doodle.mp4`
- Look: Blue and red ballpoint doodles on lined, spiral-bound notebook paper.
- Palette: Paper #fbfaf3 with blue rule lines #b9d3ee and a red margin, pen blue #1f4fd1, pen red #d6322c
- Motion rules: Ballpoint strokes with small wobble, doubled lines, scribble fills; step on twos.
- Typography: Handwritten font, only for tiny labels.
- Engine: HyperFrames (SVG)
- Best for: Casual tips, study notes, personal stories
- Also see: code-motion-styles 07; ai-style-atlas 68

## 4 Blueprint

- Example: `examples/04-blueprint.mp4`
- Look: White technical drawing on blueprint blue, with grid, dimensions and a title block.
- Palette: Blue #1b4f9c, line white #e8f1ff, grid at 25 percent white
- Motion rules: Thin lines draw in sequence, dimension arrows and tick marks appear after the part, grid fades in first.
- Typography: Monospace or condensed sans, upper case, 10 to 14 px labels scaled for the frame.
- Engine: HyperFrames (SVG)
- Best for: Engineering, how things work, hardware, process
- Also see: ai-style-atlas 37

