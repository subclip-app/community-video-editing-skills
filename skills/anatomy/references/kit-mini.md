# Mini kit API (assets/figure-template.html)

The kit is a small inline script, derived from the projection and tone ideas of the original Anatomy kit (MIT). World units are about one pixel of the real thing: x and y on the floor, z up. Camera: azimuth 45, elevation 30 (change `ISO.cam.a` and `ISO.cam.e` before `fit`).

| Function | Use |
|---|---|
| `ISO.fit(points3, w, h, pad, [cx, cy])` | Fit the world points into a w by h area centred at cx, cy. Call once, before drawing. Include the tallest and widest points. |
| `ISO.P(x, y, z)` | World point to screen point. |
| `ISO.box(x, y, z, w, d, h, tone, cls)` | A solid with three visible faces (top, left = +y side, right = +x side). Tone is lo, mid, hi or lit. |
| `ISO.cyl(cx, cy, r, z, h, tone, cls)` | A vertical cylinder: silhouette of both end ellipses, then the top ellipse. |
| `ISO.ring(cx, cy, r, z, n)` | Points of a circle on a horizontal plane, for `ISO.path`. |
| `ISO.line(points3, cls)` | A polyline in world space. Class `faint` makes a groove. |
| `ISO.dots(points3, r)` | Screws and terminal dots. |
| `ISO.ticks(x0, x1, step, every, y, z, minor, major)` | Ruler ticks along x hanging from the edge y. |
| `ISO.coil(x0, x1, cy, cz, r, turns)` | A coil spring along x. Split into two halves for strict painter's order when it wraps a rod. |
| `ISO.depth(x, y, z)` | Painter key. Sort ascending to draw far before near. |
| `ISO.vec(dx, dy, dz)` | Screen vector for a world move. Use it for GSAP `x` and `y` on a group, so parts slide along true axes. |
| `ISO.path(points, close)` | SVG path from screen points. |

## Motion

- Build every static path once. Moving parts are built at their rest position inside a `<g>` and moved with GSAP `x` and `y` from `ISO.vec`.
- Rotation about a point on screen: `gsap.set(el, { svgOrigin: 'x y' })`, then tween `rotation`.
- Only parts that change shape are rebuilt. In a seekable layer that usually means swapping between a few precomputed states with opacity, or tweening a transform. Do not rely on `onUpdate` callbacks, because seeking can skip them.
- Readout numbers come from the model. Precompute a few states as stacked text elements and switch them with `tl.set`.

## Known limits of the mini kit

- No rounded plans, bevels, knurls, lathe profiles or tube routing. Add small helpers when a part needs them, in the same style (screen paths from world points).
- Cylinders are vertical only. For a horizontal round part, draw an ellipse end with `ISO.ring` on a plane and connect with lines, or make a polygonal prism with `ISO.box`.
- Shading is flat per face. Curved parts get one side tone plus a lighter top. Add a narrow highlight band if a round body needs more volume.
- No automatic depth audit. Check order by looking at frames.
