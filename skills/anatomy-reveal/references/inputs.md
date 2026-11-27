# From a photo or a name to a parts list

The film is only as good as the facts behind it. Spend the first part of the job here and write the result down as a spec before any geometry.

## Case A: the creator shares a photo

1. Read the media first: `get_media_context` with `includeContactSheet: true` for an imported file, or look at the attachment. Never describe media you have not inspected.
2. Read the picture region by region: outline and proportions (measure ratios in pixels), every visible part and how it meets its neighbours, materials (anodised, painted, polished, rubber, fabric, glass), colours, text and markings, controls, ports, seams and screws.
3. Several photos (front, side, back) show depth and hidden faces. Note what no photo shows and infer it from how such objects are built.
4. If it is a known product, also look up its real dimensions and internals as in case B. The photo decides finish; the research decides size and structure.
5. Otherwise scale from a known feature: a USB-C port is 8.4 mm wide, a camera lens mount about 60 mm across, a phone about 72 mm wide. State the assumption.
6. The photo is a reference only. Rebuild every shape, colour and marking as geometry: never trace it, embed it or map its pixels onto a part.

## Case B: only a name

1. Pin down the exact object: model, generation and variant. If the name is ambiguous, pick the most common variant and say which.
2. Collect the numbers: overall width, height and depth; the main sub-dimensions; the counts of buttons, dials, ports, screws and vents. Spec sheets are best, then reviews with measurements, then teardowns. Use `inspect_public_website` for a product page when the creator gives a link.
3. Collect the behaviour: what turns, slides, opens, folds, lights up. One or two become the feature beats.
4. Collect the inside: teardowns list the boards, chips, batteries and how the shell comes apart. That order becomes the explode order, and the most interesting inner parts become the highlight shots.
5. Without web access, use what you know, mark every estimate in the spec and prefer a well known variant whose numbers you are sure of.

## The spec

Write it in a few lines, record it with `update_project_director_brief`, and show it to the creator when it rests on guesses:

```
Object: compact full-frame mirrorless camera with a 35 mm f/1.8 lens (graphite body)
Size: 128 x 98 x 117 mm with the lens; lens 64 mm across, 57 mm long
Materials: graphite shell, rubber grip and eyecup, aluminium dials and mount, coated glass
Moves: mode dial turns; shutter button presses; rear screen tilts 70 degrees; lens zooms 14 mm
Inside: shutter unit, 36 x 24 mm sensor, stabiliser plate, main board with image chip and memory, battery, card slot
Parts (53): shell and lugs 12, grip 2, front 2, top 7, back 6, inside 17, lens 7
Highlights: sensor, battery, main board
```
