# Art direction

## Plan the finished picture first

Draw the thing the viewer needs to understand. Place the focus and text space before adding decoration. Start from far shapes, move through the middle distance and subject, and finish with foreground occlusion. Read the silhouette at thumbnail size. Leave about 40 percent of an ink-wash composition open, and keep watercolor and paper collage airy. Use one bright paper piece or a small vermilion seal as a focal accent.

Plan the initial surface, the major shapes, the mark that makes the subject recognizable, and the final hold. Each pass keeps the work it covers or builds on. Animate a pen, stamp, or cutout through intermediate positions when its motion carries meaning. For quiet paint passes, reveal the new group while holding the earlier marks still.

## Recipes for Subclip layers

| Medium | Construct the marks | Fix common misreads |
| --- | --- | --- |
| Ink wash | Paint opaque silhouettes far to near, with pale distant ridges and heavier near washes. Clip feathered rims, slope-following dry strokes, and moss dots to the landforms. Keep mist as open space between masses. | Tie dab spacing to bristle width so the stroke reads as one mark. Put long texture strokes on the shadow side and let a few smooth paths disappear into mist. |
| Watercolor | Start with subtle paper tooth and a pale wash. Keep transparent glazes nested within the first shape. Bias pigment granules and wet-edge pools to one side. Use at most three glazes in the same spot. | Avoid concentric pools and uniform blur. Preserve light paper where the paint was lifted. Keep pigment texture fixed as the mask reveals it. |
| Paper collage | Cut big opaque silhouettes from flat or kraft-colored paper. Use short stretches of irregular white fiber at torn edges and offset each shadow down and away from a shared light. Reserve crayon for accents. | Preserve the shape of each cutout. Leave transparent padding so the shifted shadow never wraps around or clips against the item edge. |
| Colored pencil and graphite | Lay short hatch strokes along the form. Change angle slightly for each pass and use stroke density and weight as pressure. Make paper gaps consistent across passes. Shade white subjects with cool gray or lavender on warm paper. | Keep hair and fur in tapering directional clumps. Keep the hardest edges and tightest value range near the focal detail. |
| Continuous line | Arrange connected paths in pen order. Retrace an existing edge to get to a new feature, or keep that retrace visually silent. Use a lighter stroke for travel arcs and one accent for the payoff. | Put a loop where the curve is level. Keep the travel arc light enough to distinguish it from the landscape or subject outline. |
| Risograph and print | Use four or five spot inks with intentional overlaps. Draw separate ink groups with fixed slight registration offsets, grain, and halftone shadows. In woodblock work use flat colors, opaque cloud bands and a separate dark key outline. | Keep density variation within each ink and keep the offset constant across frames. Reserve graded bokashi for broad sky or sea. |
| Impasto and dry brush | Lay the big strokes first. Follow the form with smaller strokes and save the sharp detail for the focus. Simulate bristle grooves and modest relief with offset strokes and a shared light direction. | Use flat-topped paint ridges and soft highlights. Keep dry edges broken and crisp so they read as bristles. |
| Cartoon and picture book | Lay down back limbs before the body so shoulders occlude their joins. Make the shadow-side ink slightly heavier. Allow small offsets between fill and outline. Hold the color and paper still if you add line boil. | Check the pose without surface texture. A stray fold, mitten mark or pair of dots can read as a symbol, claws or a face. Change the silhouette or local marks before adjusting grain. |
| Pixel art | Use a small integer pixel grid and a limited palette. Dither in that grid and enlarge with nearest-neighbor rendering. | Keep glows small and ensure detail still reads at native resolution. |
| Cyanotype and stitched art | For a sun print, layer silhouettes by transmission, with dense white veins and softer lifted edges. For thread, snap regular crosses and back-stitches to a fixed hole grid. | Make a fern pinna a lobed blade. Use one cross per cell and a direct diagonal from hole to hole. |
| Chalk and blueprint | Set a sparse field, build marks by pressure, and reserve open areas for text. For chalk, leave tiny holes and break the edge. For blueprint, group primary contours, thin construction lines and leaders separately. | A perfectly solid chalk line reads as vector ink. Keep leaders and dimensions outside the dense portion of the drawing. |

For dense marks, store seeded positions and colors once. SVG suits shapes, masks, line work and a modest number of marks. Canvas can group thousands of strokes in one draw pass. Redraw the full visible state from authored time for every seek. Preserve shared grain across cumulative passes so transitions reveal paint without flickering the paper. Use smooth local reveals for washes and actual position changes for object motion. Start by matching one representative completed frame to the medium, then tune the pace.

## Upstream references

Use the gallery to choose a visual target and the principles to diagnose style-specific failures. The original examples are visual references for this adaptation.

- [Illustrated gallery](https://github.com/cloveric/claude-drawing-skill/blob/6af36dc717b63d6ddafb54d2eaa120cacd99ab4d/docs/GALLERY.md)
- [Style catalog](https://github.com/cloveric/claude-drawing-skill/blob/6af36dc717b63d6ddafb54d2eaa120cacd99ab4d/docs/STYLES.md)
- [Per-style principles](https://github.com/cloveric/claude-drawing-skill/blob/6af36dc717b63d6ddafb54d2eaa120cacd99ab4d/docs/PRINCIPLES.md)
- [Draw-on examples](https://github.com/cloveric/claude-drawing-skill/blob/6af36dc717b63d6ddafb54d2eaa120cacd99ab4d/docs/GIFS.md)
