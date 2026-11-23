# Visual techniques for math animation

Visualization patterns for explaining mathematical ideas, from the original Manim Composer skill. The principles are unchanged. The "How in Subclip" lines replace the Manim code with what a Subclip motion layer can do (HTML, inline SVG and a paused GSAP timeline).

## Core principles

### 1. Progressive disclosure
Never show everything at once. Build complexity gradually.

Bad: show the complete equation immediately.
Good: build the equation term by term, explaining each part.

```
Scene flow:
1. Show the simple case: f(x) = x^2
2. Add complexity: f(x) = a x^2
3. Full form: f(x) = a x^2 + b x + c
```

How in Subclip: put each term in its own span and reveal it on its own timeline label, timed to the narration word that names it.

### 2. Transform, do not replace
When possible, morph objects into new forms instead of fading out and in. This keeps visual continuity and shows how two forms relate.

How in Subclip: keep matching symbols as the same element and tween them to their new position. Fade in only the new symbols. For shapes, interpolate the point lists of two paths that have the same number of points.

### 3. Color as meaning
Use color consistently to encode meaning through the whole video.

- Input or given values: blue
- Output or results: green
- Key term being discussed: yellow highlight
- Errors or negatives: red
- Neutral or supporting: white or grey

Store the palette as CSS variables at the top of the layer so every scene shares it.

### 4. Spatial relationships
Position encodes relationships:
- Left to right: transformation, time, causation
- Top to bottom: hierarchy, derivation
- Center: focus of attention
- Periphery: context, reference

---

## Animation techniques

### Highlighting and focus
- Brief flash to draw attention (the "Indicate" idea): a scale pulse to 1.15 and back, with a yellow color shift.
- Circle around an important element (the "Circumscribe" idea): draw a rounded rectangle or ellipse stroke around it with a stroke-dashoffset tween.
- Dramatic attention on a revelation: a short glow or flash around the result, then hold.

### Equation manipulation
- Isolate terms by coloring or moving specific spans.
- Step-by-step derivation: show each algebraic step on its own line, aligned on the equals sign.

```
2x + 4 = 10
2x = 6
x = 3
```

- Substitution: animate the number moving into the variable's position.

### Geometric intuition
- Coordinate systems: always label the axes. Build axes and grid from SVG lines.
- Trace paths: show how a point moves by drawing its trail as a growing path.
- Area visualization for integrals and sums: a filled SVG region under the graph at 50 percent opacity.

### 3D techniques
Real 3D is not required for most math scenes. Use these options:
- A deterministic Three.js layer (HyperFrames supports a pinned Three.js) when the idea truly needs depth, with a slow camera orbit.
- A flat projection drawn in SVG, with a clear note of what is the shadow of what.
- Slicing: show cross-sections one at a time as flat shapes.

---

## Common visual metaphors

### Vectors as arrows
- Position vectors: arrows from the origin
- Addition: tip to tail
- Scaling: stretching and shrinking

### Functions as machines
- Input goes in one side
- A transformation happens
- Output comes out

### Matrices as transformations
- Show the grid being transformed
- Track where the basis vectors go
- Emphasize the determinant as area scaling

How in Subclip: compute every grid line endpoint as `lerp(identity, M)` applied to the original point, with the blend value driven by the timeline.

### Derivatives as slopes
- A tangent line touching the curve
- Zoom in to show local linearity
- Animate the slope changing as the point moves

### Integrals as accumulation
- Riemann sums with rectangles
- Width shrinking to zero
- Area filling under the curve

---

## Scene composition

### The golden layout
```
+---------------------------------+
|           TITLE / CONTEXT       |  (top edge)
+---------------------------------+
|                                 |
|      MAIN VISUALIZATION         |  (center, largest area)
|                                 |
+---------------------------------+
|    EQUATION / FORMULA           |  (bottom third)
+---------------------------------+
```

### Side-by-side comparison
```
+---------------+---------------+
|   BEFORE /    |   AFTER /     |
|   CONCEPT A   |   CONCEPT B   |
+---------------+---------------+
```

### Zoomed detail
A small magnified inset with a connector line to its place in the main picture.

---

## Timing guidelines

| Action | Typical duration |
|--------|------------------|
| Simple shape creation | 0.5-1 s |
| Text or equation writing | 1-2 s |
| Transformation | 1-2 s |
| Camera movement | 2-3 s |
| Pause for absorption | 0.5-1 s |
| Complex animation | 2-4 s |

### Rhythm pattern
Fast, fast, SLOW, fast, fast, SLOW. Quick animations for setup, slow down for key insights.

---

## Color palettes

### Classic dark
- Background: #1C1C1C (dark grey)
- Primary: #58C4DD (blue)
- Secondary: #83C167 (green)
- Accent: #FFFF00 (yellow)
- Warning: #FF6666 (red)

### High contrast
- Background: #000000
- Primary: #FFFFFF
- Accent: #FFD700

### Soft academic
- Background: #2D2D2D
- Primary: #6ECFFF
- Secondary: #98E898
- Accent: #FFE66D

---

## Manim idea to Subclip layer

| Manim idea | Motion layer equivalent |
|---|---|
| Write, Create | Stroke-dashoffset tween on SVG paths; type-on for text |
| FadeIn, FadeOut | Opacity tween (use autoAlpha) |
| Transform | Tween position and shape; interpolate path points |
| TransformMatchingTex | Move spans that share a symbol; fade in the rest |
| Indicate, Circumscribe, FlashAround | Scale pulse, drawn outline, short glow |
| ValueTracker with updaters | A proxy value on the timeline and a redraw in onUpdate |
| NumberPlane, Axes | SVG lines for grid and ticks, labels as text |
| apply_matrix | Interpolate each grid point from identity to the matrix |
| Camera frame zoom or pan | Scale and translate a wrapper group |
| MathTex (LaTeX) | Unicode math in HTML or SVG text; use KaTeX only if validate_runtime_layer_source accepts it |
