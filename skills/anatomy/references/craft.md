# Craft notes

Condensed from the craft guide of the original Anatomy skill (wheresryan22/anatomy, MIT), rewritten for video scenes.

## What "crafted" means

1. A real object you could build, named at a glance. Invented for the subject, never traced.
2. Many small precise parts. A clip carries 40 to 80 solids. Density comes from structure (feet, rails, stops, bushings, knobs), not from texture.
3. Volume: real thickness, sides in different tones, lighter tops, a soft shadow under the base.
4. Calm: thin lines, a restrained palette, one lit accent, slow eased motion.
5. Truth: true numbers and a motion that follows the real model.

## Anti-patterns

- Abstract stacks: floating plates standing for "layers". Make drawers, trays in a rack, plates on guide pillars.
- One big plain slab. Break it into a base, a carriage and parts; add a groove, screws, a ruler and a label plate.
- Blueprint furniture: leader lines, numbered balloons, dimension arrows, hatching, dashed hidden edges.
- Lines that stop in mid air. Each line lands on a face, another line or a dot.
- Wireframes with visible back edges.
- Colour everywhere. Stay monochrome with one lit accent. Use true colour only when colour is the subject.
- Text in the drawing. At most one tiny engraved label. Words go in the card corners, the legend or the narration.
- Copying a reference image. Take the finish, invent the object.
- Parts that snap or jitter. Ease everything.
- Pipes and cables through other parts. Keep about 1.5 radii of clearance, run lines beside structure, and gap a pipe where a clamp wraps it.
- Textures that stop mid surface (bolt rows, seams, ribs). End them on an edge or fade them out.
- Fixing one frame by eye. A tweak that helps one view often breaks another, so check several frames.

## Parts vocabulary

| Group | Parts |
|---|---|
| Base | plate with rounded corners, four feet (flange and foot), groove, corner screws, label plate with three rule lines, ruler strip |
| Structure | posts on feet, rails, frame bars, end stops, brackets |
| Mechanism | carriage, bushings, guide rods, coil springs, plunger with collar, rider on a rail, hinge, cam |
| Controls | knurled knob, thumb screw, crown, lever, lock screw |
| Instrument | dial with bezel ring, face ring, ticks (major every fifth), needle, crown, stand |
| Subject | the one lit part: the thing being explained, drawn with a bevel and a highlight |
| Detail | screws as 0.4 to 0.55 unit dots with a ring on plate corners, bevels of 0.4 to 1.6, grooves inset 3 to 5 from an edge |

Each part sits on another part, ends on an edge and belongs to the mechanism.

## Tones

| Element | Tone |
|---|---|
| Base, feet, floors | lo |
| Structure: posts, rails, frame, carriage, case | mid |
| The subject | hi |
| The part to watch now | lit (only one) |
| Grooves, inset outlines, floor grid | faint |
| Minor ticks | lo |
| Major ticks | mid |
| Zero mark, pointer line | hi |
| Screws and rivets | dots at mid |

The template defines the tones as the CSS classes `s-lo`, `s-mid`, `s-hi` and `s-lit`, each with a top, a left and a right face.

## Painter's order

- Draw the base first, then everything that stands on it.
- Within a level sort by depth, far before near (`ISO.depth`, larger is nearer).
- Split wrapping parts. A spring or a frame around a carriage: back half, inner part, front half.
- A moving part is drawn at its slot inside a group that moves. If it can pass in front of and behind the same neighbour, split the neighbour or bound the motion.
- Taller steps go further back, so a probe resting on a lower step is not hidden.
- Vertical parts that pass through a horizontal one are drawn in two segments, below and above.

## Camera and composition

- Default azimuth 45 degrees and elevation 30. Turn the azimuth (35 to 60) so the face with the mechanism points at the viewer. Raise the elevation to look into something open.
- Fit the figure to the card with `ISO.fit` and leave air around it. It fills about 55 to 65 percent.
- Keep the same camera and scale in every scene of one clip.
- Check that it still reads small, because phone viewers see video at a tiny size.

## Light theme

Video backgrounds are usually light for explainers. The template uses a white card with the Subclip blue ink and cyan accent. Every colour is a class, so a dark theme is a second set of class colours. Keep tones about the same luminance distance apart.

## Screens and things on faces

Text a machine displays must fit its window at its widest string and be clipped to it. In scenes, show such text as an SVG `text` element inside a clip path or group sized to the window, and keep the string short.
