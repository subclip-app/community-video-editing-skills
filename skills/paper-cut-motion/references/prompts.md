# Prompt building blocks

Three prompts do the whole job. Each is one paragraph with no line breaks. Keep the repeated blocks (style, opening, closing) identical every time so results stay in one family. Never name real public figures, famous artworks or brands in a prompt: describe them generically ("a footballer in a yellow jersey", "a girl reaching for a heart-shaped balloon"). The picture still reads correctly.

## 1. Paper-cut still

Shape: `Recreate this exact image: <subject, pose, composition, key colors, any visible text or numbers> as a handcrafted torn-paper collage.` followed by the style block. Describe what is really in the source (subject, pose, colors, layout, text) in a sentence or two, keep subject, composition and colors, and change only the material to paper.

Style block (use the same wording in every project):

`Built entirely from layered cut and torn paper pieces. Every shape is a separate flat paper cutout with rough torn edges, visible paper grain and fiber texture, and a hard drop shadow beneath it. Small rough white slivers of negative space show between the pieces. Muted, tactile, slightly desaturated color. A mosaic of overlapping paper facets, like a real handmade paper artwork photographed under soft directional light. No smooth gradients, no digital flatness, no glossy 3D: it must look like real cut paper.`

Attach the original image as a reference. If the model accepts a second style reference, attach an earlier paper-cut result you like from your own project to pull the look closer (the original pack bundled one style anchor image; we do not redistribute it).

## 2. Storyboard sheet (nine panels)

One image, a 3 by 3 grid of nine sequential panels with thin borders, the same scene assembling itself out of torn paper. Absolutely no text, labels, captions, frame numbers or writing anywhere in the grid. Order across the panels, far to near:

1. Panel 1: a nearly empty frame with only the first background pieces (sky or back wall) sliding in from the top and sides.
2. Next panels: the ground or floor rises in; environment and set pieces slide in; a background crowd builds up; props settle.
3. Then the hero figure or figures assemble part by part across one or two panels.
4. If the creator asked for an end action, the second-to-last panel shows that beat.
5. Last panel: the complete scene, matching the paper-cut still.

Keep the same paper-cut look in every panel (torn edges, grain, hard shadows, white slivers, same muted palette) and finish the prompt by restating that there is no text or writing in any panel. Attach the paper-cut still. Generate the sheet in the aspect ratio of the final video (16:9, 9:16 or 1:1) so the seed matches the output.

## 3. Animation prompt (fixed order)

Write it as one paragraph in this order. The opening and the three closing blocks are constants: do not reword them between projects. Describe only what is visible in the scene.

1. Opening: `Animate this as a handcrafted stop-motion paper collage assembly. Every element enters the frame as a flat, pre-cut, torn paper piece pushed in from outside the frame.`
2. Assembly body (see the logic below).
3. Optional action beat, only if requested or clearly implied.
4. Style closing: `Motion feels tactile, slightly imperfect, editorial and stop-motion real, with tiny misalignments, staggered timing, hard shadows, rough white torn edges, overlapping paper layers and visible paper texture.`
5. Negative closing: `No folding, no morphing, no drawing in place, no smooth digital animation. Every piece is a pre-made flat cutout sliding, rotating or dropping into place.`
6. Sound closing: `Sound design: paper-only ASMR foley, soft paper slides, taps, shuffles, drops and friction. No music, no voice, no ambient sound, no extra effects.`

### Assembly logic

Silently sort every element back to front, then describe entrances in that depth order:

1. Back layer (sky, back wall, backdrop): overlapping torn panels sliding in from above and the sides.
2. Ground or floor: layered torn strips sliding up from below.
3. Environment and set pieces (stadium, ropes, goalposts, buildings): slide in from the sides and top; small details drop in.
4. Background crowd: small overlapping paper silhouettes dropping in row by row from above.
5. Props near or held by figures: separate small cutouts settling into place.
6. Hero figure or figures last, part by part.

Every object gets a hard paper shadow that slides in beneath it.

Hero figure order, base up, naming only parts that are really visible, each with an entry direction (from above, from below, from the left or right, from the top corners, dropping in, pressing into the center, locking into place):

- Body: legs and feet, trousers or shorts, torso, arms, hands, head, facial features, hair last.
- Face or portrait: jaw and chin, cheeks, nose, forehead, eye sockets and eyes (with tiny white catchlight flecks), eyebrows, hair strand by strand, then any mustache or beard.
- Clothing details, numbers and logos enter as separate small cutouts.

### Action logic

- The action is optional. The default is pure assembly: end the moment the scene is complete, with "all pieces settle and lock into place with tiny staggered adjustments".
- Add a beat only if the creator asks or the image clearly implies one iconic beat. Put it after assembly, introduced with "As the final beat". One beat only.
- Paper physics only. Allowed verbs: slide, drop, rotate, tumble, push out, pull back, lift, plant, scatter, tip, swing, snap forward, drive off. Walking or running is "flat cutout limbs sliding and swapping mid-stride in choppy stop-motion steps".
- Forbidden: morph, curl, fold, bend, deform, smooth motion. Pieces stay rigid and flat; motion is whole pieces changing position.
- Chain cause to effect for the payoff: a kick, the ball travels, hits the net, confetti; a pole is planted, a flag drops and locks on, confetti; a hand grabs a string, a balloon lifts the figure out of frame; the engine starts, the car drives off, a puff of paper exhaust.
- A payoff scatter is always "tiny scattered paper flecks" (confetti, sweat, dust).
- Beat library to pick from: projectile, impact and scatter; a final-piece micro loop; a payoff object dropping in and scattering; character walking or running; grab then lift and exit; a structure tipping or collapsing; lean in and drive off with flecks.

### Two reference shapes (quality bar, adapt do not copy)

Assembly plus drive-off: opening, then the track and pit wall slide in as layered strips, the grandstands build row by row as small silhouettes from above, the race car assembles piece by piece (floor and wheels, side pods, nose, cockpit, rear wing last, sponsor marks as separate small cutouts), then "as the final beat the engine starts and the car drives off to the right while a puff of tiny paper flecks scatters behind it", then the three closing blocks.

Pure assembly of a portrait: opening, a dark textured background slides in from the sides and top, shoulders and collar slide up from below, the face builds jaw first through cheeks, nose, forehead, eyes with catchlight flecks and eyebrows, hair strand by strand as ragged wisps, then "all pieces settle and lock into place", then the three closing blocks.

## Reading the result

| Problem | Fix |
|---|---|
| Pieces look like clean vector shapes | Strengthen torn edges, fibers, grain and hard shadows in the still, regenerate the still first |
| Sheet panels differ from the still | Attach the still again and regenerate the sheet; restate "same look in every panel" |
| Text or numbers appear in the sheet | Restate "no text or writing in any panel"; add real words later as native text |
| Pieces teleport in | Name each piece's entry direction and the order again |
| Pieces fold, bend or morph | Keep the negative closing verbatim; remove any verb outside the allowed list |
| Extra objects appear | Add "only the pieces shown in the sheet" |
| A render fails for no clear reason | Some models refuse graphic or violent imagery; try a different source |
