# 3D look

Heaviest styles. Use a Three.js HyperFrames scene (read `threejs-3d-scenes` first) or a Remotion canvas, keep the pixel ratio at 1 to 1.5, and render short segments. If a scene cannot hold 30 fps in the editor preview, lower the particle or facet count, not the resolution.

Each recipe below is a short build brief. The example clip named in the title is the visual target: open it before building. The chai film (kettle pours into a clay cup, steam rises, 5 s) is the demo story; replace it with the creator's story using `our-guide.md`.

## 57 Low-poly island

- Example: `examples/57-low-poly-island.mp4`
- Look: Faceted low-poly 3D: the cup sits on a tiny island with palm trees in a polygon sea.
- Palette: Teal sea, sand, green palms, flat shaded facets
- Motion rules: Slow orbit camera, bobbing water, flat shading with one directional light.
- Typography: None.
- Engine: HyperFrames (Three.js) or Remotion canvas
- Best for: Travel, games, calm brand scenes
- Also see: ai-style-atlas 40; threejs-3d-scenes

## 58 Brick toy

- Example: `examples/58-brick-toy.mp4`
- Look: Everything built from toy bricks and studs on a green baseplate.
- Palette: Primary brick colours on a green baseplate, studs on every top face
- Motion rules: Objects assemble brick by brick, small bounce on landing. Never name a toy brand on screen.
- Typography: None.
- Engine: HyperFrames (Three.js)
- Best for: Kids, builders, playful tech, steps
- Also see: code-motion-styles 09

## 59 Glass product

- Example: `examples/59-glass-product.mp4`
- Look: A clear glass kettle and cup lit like a product shot, with refraction and glow.
- Palette: Dark studio gradient, transparent glass, warm key light
- Motion rules: Slow turntable, soft light sweep, refraction approximated with envmap or layered gradients.
- Typography: Minimal sans if a name is needed.
- Engine: HyperFrames (Three.js)
- Best for: Product launches, drinks, premium goods
- Also see: threejs-3d-scenes

## 62 Claymation

- Example: `examples/62-claymation.mp4`
- Look: Lumpy plasticine shapes with fingerprints, stepped like stop-motion.
- Palette: Saturated clay colours, matte, fingerprint bump texture
- Motion rules: Stepped on twos, small squash on contact, hold poses between steps.
- Typography: None.
- Engine: HyperFrames (Three.js)
- Best for: Kids, humour, food, mascots
- Also see: ai-style-atlas 18 and 56

## 80 Lidar survey

- Example: `examples/80-lidar-survey.mp4`
- Look: A glowing 3D point cloud, like a laser scan, in blue and gold.
- Palette: Black, blue #2a6bff and gold #f0b840 points
- Motion rules: Points sweep in by scan line, slow orbit, point size scales with depth.
- Typography: Tiny mono readout if needed.
- Engine: HyperFrames (Three.js points)
- Best for: Architecture, mapping tech, science
- Also see: threejs-3d-scenes

