# Hand-drawn and painted

Paper and wash looks depend on a texture: use an SVG feTurbulence filter on a rect, not a bitmap. Keep filters off text layers. Step the motion on twos or threes where the medium is hand-made.

Each recipe below is a short build brief. The example clip named in the title is the visual target: open it before building. The chai film (kettle pours into a clay cup, steam rises, 5 s) is the demo story; replace it with the creator's story using `our-guide.md`.

## 08 Hand-drawn pencil sketch

- Example: `examples/08-hand-drawn.mp4`
- Look: Wobbly graphite lines and soft shading on warm paper, drawn on twos.
- Palette: Paper #f2e9d8, graphite #3a3a3a at 60 to 90 percent opacity
- Motion rules: Two passes per outline with a small offset, hatch shading, hold each drawn frame for 2 frames.
- Typography: None.
- Engine: HyperFrames (SVG)
- Best for: Personal, nostalgic, craft and design stories
- Also see: ai-style-atlas 78; claude-drawing-skill

## 09 Urban sketch

- Example: `examples/09-urban-sketch.mp4`
- Look: Loose ink lines with watercolour washes and a street in the background.
- Palette: Paper #f6efe2, ink #222, washes in muted teal, ochre and rose
- Motion rules: Ink lines first, washes bleed in a beat later and stay slightly outside the lines.
- Typography: None.
- Engine: HyperFrames (SVG)
- Best for: Travel, city life, food and drink
- Also see: ai-illustration-styles; ai-style-atlas 02

## 10 Crayon book

- Example: `examples/10-crayon-book.mp4`
- Look: Waxy crayon strokes like a child's colouring book, with a sun and crayons.
- Palette: Paper #fffaf0, bright primaries, waxy texture via noise mask
- Motion rules: Scribbled fills drawn as zigzag strokes, step on threes, a corner sun that wobbles.
- Typography: Chunky hand letters only if needed.
- Engine: HyperFrames (SVG)
- Best for: Kids, families, schools, playful products
- Also see: none

## 11 Watercolour

- Example: `examples/11-watercolour.mp4`
- Look: Soft wet-edged washes and blooms on textured paper.
- Palette: Cold press paper #f4efe6, washes in 3 transparent hues, darker edge on each wash
- Motion rules: Washes grow with an eased mask, edges darken as they dry, no hard outlines.
- Typography: None.
- Engine: HyperFrames (SVG with filters)
- Best for: Gentle stories, wellness, food, nature
- Also see: ai-style-atlas 02

## 13 One line

- Example: `examples/13-one-line.mp4`
- Look: A single unbroken white line draws everything on a bold flat colour.
- Palette: One bold flat background colour, line white #ffffff, 8 to 10 px round caps
- Motion rules: One continuous path drawn with dashoffset at constant speed, no lifts, a small dot at the pen tip.
- Typography: None.
- Engine: HyperFrames (SVG)
- Best for: Logos, intros, minimal brand pieces
- Also see: code-motion-styles 05

## 16 Cel line boil

- Example: `examples/16-cel-line-boil.mp4`
- Look: Classic frame-by-frame cel look: ink outlines that jitter (boil) every few frames.
- Palette: Flat cel colours with an ink #1b1b1b outline
- Motion rules: Redraw the outline with a new seeded jitter every 2 or 3 frames; fills stay steady.
- Typography: None.
- Engine: HyperFrames (SVG)
- Best for: Cartoons, character pieces, light humour
- Also see: cartoon-animation

