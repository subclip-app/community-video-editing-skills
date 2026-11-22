# Painted worlds and character continuity

Use for art-history speedruns, a subject walking through different paintings, or a scene repainted by several media. These mechanisms are not the default for an ordinary explainer.

## Fixed scene, changing style

Keep a scene skeleton: stable subject positions, horizon, scale and a few landmarks. New subjects need their own skeleton, not the source's room, girl and cat.

Give each style one continuous main action plus two or more local motif loops. Choose motifs from its visual language: a border scrolling, paper curling, foliage moving, tiles changing light or paint following a current. Keep the continuous action on a shared project-time phase. Restarting a drinking motion in each style makes five drinks instead of one action seen through five media.

Let the incoming style supply the transition: mosaic tiles, growing organic lines, painted strokes, pixel blocks or paper folds. About 0.4 s can read for a simple transition; a complex material reveal may need 0.48 to 0.5 s. Judge actual visible motion, since easing reduces the time spent visibly changing. Apply any beat impact to both outgoing and incoming pictures so sound does not precede the visible accent.

If a counter uses years, order eras chronologically. Otherwise use style names or scene numbers. Its value must use the same project-time function across both sides of a transition. Keep it free of doubled text. Exact counters belong in authored graphics, not generated pixels.

A source musical pattern at 128 BPM used scene lengths of 6 eighth notes, then groups of 4, 3, 2 and 1, followed by a longer ending. Borrow the accelerating structure, not a fixed 16-era quota. Leave time for an actual closing action.

## Long-scroll journey

Build connected worlds, with one short runtime segment per event and explicit continuity values passed between them. Do not import the upstream world engine. Use native media where it fits and runtime graphics for the painted scenery.

For a 1920 by 1080 scene, the upstream demonstration used ground y=760, character height 300 and screen x=720. These are composition examples. Pick matching values for this project and bring each world's ground back to the shared height near its ends. Keep horizon and walking scale compatible.

Time an interaction relative to its own start, not a fixed delay since entering the world. Changing walking speed should not detach a thrown stone from the hand. Advance gait by distance traveled. Use feet anchors, maintain weight and pause the gait when standing. Do not mirror asymmetric costume details without checking them.

Move the camera forward without reversing at world boundaries. A segment can compute its camera position analytically from the planned path and smoothing curve; do not accumulate a historical maximum during playback. Random-access seeking must reproduce the same result. Let the incoming world's material form its seam. When a body straddles a boundary, clip two styled versions with the same pose and position.

A useful world contains walk, interaction and walk-out. Do not add souvenir hats or jokes that compete with the requested event. Re-read adjoining segment timings and inspect both sides of every seam. Splitting one long runtime item does not preserve its internal clock automatically; author separate local clocks and explicit continuity.

## Separate shape from medium

In an authored painting, first build a color map, a region-ownership map and brush directions for each region. The medium paints from them. Use this only when a custom material is worth the complexity; imported art and simple SVG need no pixel-processing engine.

Lay a seeded grid over each region. A brush starts at a jittered grid point, follows that region's direction and stops at its edge. Paint coarse passes first; finer passes concentrate on boundaries, faces and small objects. Give bristles uneven starts/ends and restrained highlight/shadow, rather than equal-width round lines that resemble yarn.

The traversal can place strokes, equal-size pointillist dots, mosaic tiles, coarse pixels or print dots. Lay paper, plaster or stone underneath so gaps reveal the medium. Generic noise over flat vectors does not reproduce painting.

Hash each mark by cell, pass and seed. Sequential random calls shift when one mark is skipped and cause the whole image to flicker. Keep texture in object/world coordinates. Local stroke drift can make it alive; re-randomizing the entire canvas is flashing.

Hand-drawn art can update at 12 drawings per second while the camera and seams run at the project frame rate. Derive both clocks from seek time. Cache static textures and repeated pose/material combinations. Reuse offscreen canvases. Do not regenerate dense paper grain every frame.

Draw only visible contours. Region ownership on both sides of an edge can determine whether it is exposed. A complete outline pass over all parts makes hidden sleeves and limbs show through bodies.

For small moving objects, repaint a local canvas and composite it into the world. Full-screen repainting for one small boat wastes work. Provide overscan for displaced water, clouds or shadows so movement does not reveal gaps. Composite offscreen pixels into the scene; direct pixel writes can bypass transforms and masks.

## Characters

Prefer creator-supplied finished poses or generated pose frames for human and expressive characters. Keep identity, costume, proportions, light, edges and material consistent. No generation available: use well-designed hands, backs or silhouettes, or let the object carry the story. Do not improvise a generic round-headed person or put a face on a coin just to fill the shot.

For an explicitly chosen flat outlined cartoon or digital cut-paper style, original semantic SVG characters can work. Separate body, head, arms, eyes and mouth by real pivots. This does not prove a walking rig exists. Check weight, hand contact, gaze and expression. Borrow the construction language rather than named characters or costume combinations.

For pose frames, align standing heights and feet centers. The source's eight-frame cycle at about 9 frames per second is a limited-animation starting point. Request consistent cells, framing and pose scale. Use project-imported image URLs. A sprite atlas can be cropped inside the runtime; it does not require a slicing script. Use separate pose images if the atlas is inconsistent.

Transparent output is preferable when supported. For a green background, use supported native background controls only when verified in the current media skill. Do not promise a dedicated batch keying or pose-slicing tool. A background matching the scene or a full-scene generated clip is a supported alternative.

To repaint existing character frames, treat their silhouette as one region. Remap luminance into the era's colors before painting. A small amount of the original face can restore identity, but too much looks like a sticker. Dark media may need local contrast. Recoloring alone cannot create Egyptian composite perspective.

Check the silhouette, bone proportions, real grip, matching light, material detail, concrete expression, medium match and identity across shots. For deliberately flat cut-paper work, judge its intended simplification rather than adding realistic shading.

## Action creates the transition

A character can pull the next painting in, walk through its seam, land to splash a new medium outward, or sweep a brush from the hand. Both styled worlds show the same continuous action, so the seam changes the body naturally. The ending can reveal several media as strips of the same scene, with enough hold to read it.
