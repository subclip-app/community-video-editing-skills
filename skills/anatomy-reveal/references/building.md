# Building the object

The object is never a stock 3D model or a traced picture. It is built part by part from its real dimensions: every panel, screw, dial, glass element and board is its own convex solid, shaded in four tones by how it faces the light, and drawn in an order solved from separating planes. Because it is real geometry, the same model turns through any angle, comes apart and drives the whole film.

## Frame and units

- World units are real millimetres.
- x is the object's right (as worn, held or faced), y its front (the face toward the viewer at yaw 0), z up.
- `origin` in `RevealKit.create` is the object's visual centre, so tumbles turn about the middle.
- `radius` is about 0.8 times the largest dimension.

## Convex parts, flush contacts

- Every part is convex: `box`, `prism` (a convex outline extruded along an axis) or `cyl` (a cylinder or frustum). Concave shapes are several convex parts; a plate with a rectangular opening is four pieces round the opening.
- Parts meet flush or with a gap, never sunk into each other. A button on a plate starts at the plate's face. Overlapping parts draw in a wrong order.
- Hollow shells: anything that must come out cannot sit inside a solid. Build housings as plates (front, back, sides, top, bottom) with the inner parts in the cavity.
- Faces with openings (a lens throat, a grille, a screen) are a solid face with a dark decal on it.
- Round parts use 12 to 48 sides: more for large rings seen up close, fewer for screws.

## Coming apart cleanly

- Along any exit direction, the part in front leads: it gets a smaller `delay` and a longer `travel`. If the bottom plate and the battery both leave downward, the bottom plate starts first and travels further, or the battery passes through it.
- Inner parts travel 6 to 30 mm, outer parts 40 to 70 mm, a lens or a lid 100 mm or more.
- A sub-assembly rides on its host (`K.assembly("dials", [0, 0, 1], 26, 0.15, "top")`), so dials lift off the top plate after it lifts off the body.
- A stack (a lens, a sandwich of boards) fans out along its axis: give each ring its own assembly with travel growing toward the outside.
- Read the explode at the film's own angle. A long object fans out along its axis; a column needs most of its travel along z with the view pitched 20 to 30 degrees.
- Prove it by looking: render `apart` at 0.3, 0.6 and 1 from the film's explode angle and from one other angle. Fix any part that passes through another with timing (delay) or geometry.

## Choosing the anatomy

Ask what the object is made of and how it would come apart on a bench. That order is the explode.

| Kind | What comes apart | What moves in a feature beat |
| --- | --- | --- |
| Electronics (phones, cameras, speakers, earbuds) | Shell plates, screen stack, boards, battery, buttons, screws | A door, a card, a dial, a button, a stand, a screen tilt |
| Kitchenware (kettle, mixer, coffee maker) | Body, lid, handle, spout, base, element, gaskets | The lid lifts, a switch flips, a jug slides off its base |
| Footwear and bags | Outsole, midsole, insole, upper panels, tongue, eyelets | A strap opens, a zip pull runs |
| Furniture (chair, lamp, shelf) | Legs, rails, seat, back, fittings, shade | A lamp arm folds, a drawer slides |
| Tools (drill, wrench, scissors) | Housing halves, motor, gears, chuck, battery, blades | The chuck turns, the blades open, the trigger moves |
| Watches and jewellery | Case, bezel, crystal, dial, hands, movement, crown, strap | The crown turns, the bezel clicks |
| Packaging (bottle, perfume, can, box) | Cap, pump, collar, body, label band, insert | The cap twists off, the lid lifts |
| Natural things (fruit, flower) | Layers from the outside in | It splits along its seams |

## Shapes from convex parts

| Shape | Build it as |
| --- | --- |
| Box, panel, slab | `box`, or `prism` of a rounded outline (`K.roundRect`). |
| Cylinder, disc, button, dial, ring | `cyl` on any axis. |
| Turned body (bottle, kettle, lens, vase) | A stack of `cyl` frustums with `r1`, one per profile segment, flush. 6 to 12 bands read as a curve. |
| Sphere, dome, fruit | Stacked frustums along one axis. |
| Arch, handle, frame tube | A chain of short prisms or cylinders meeting flush. |
| Organic forms (shoe upper, grip) | Several convex pieces that meet flush, cut where a maker would put seams. |
| Thin flat things (labels, film, petals) | Prisms 0.3 to 1 mm thick, or a decal on a host part. |
| Text, logos, dials, screens, grilles, vents | `K.decal` on the face. |

## Markings

- `K.decal(part, o, u, v, nodes)`: `u` is the drawing's right and `v` its down, seen from outside the face. For a front face (+y): `u = [1, 0, 0]`, `v = [0, 0, -1]`. For a back face (-y): `u = [-1, 0, 0]`, `v = [0, 0, -1]`. For a top face seen with the front toward you: `u = [1, 0, 0]`, `v = [0, 1, 0]`. If a decal never shows, its `u` and `v` are mirrored.
- Nodes are lists: `["text", { x, y, "font-size": 4.6, fill, "text-anchor": "middle", "font-family": FONT }, "MIRRORLESS"]`. Sizes are millimetres.
- Neutral markings by default: label parts generically (sensor, battery, crown). Draw a maker's logo or trademark only when the creator asks for a faithful replica of their own product.

## Anchors and features

- Add an anchor for every shot: `body`, each detail, each feature, each highlight target, and one for the explode centre. Give each the assembly it rides on.
- A feature is a `group` (turn or slide) driven by a channel in the film's keys. Test each feature at its extremes for parts passing through each other.

## Size

- **Clip**: 40 to 80 parts, one or two features, 10 to 20 s.
- **Hero**: 80 to 150 parts, three or four features, 20 to 40 s. Spend detail where the macro shots go; keep the rest as clean large parts.
- Large objects (a car, a piano): real millimetres, a few hundred parts at most.
