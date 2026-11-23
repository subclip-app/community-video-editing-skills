# Paper animation ad (`/paper-animation`)

Look: scenes that read as photographed physical paper. This is a style, not a production pipeline: plan the ad first (script, voiceover as the pacing source, storyboard), then apply this file when writing picture prompts and clip prompts. Paper worlds illustrate a narration better than they lip sync a character, so it suits voiceover plus B-roll.

## What makes it read as paper (every sub-style)

1. Visible material texture on every element: grain, fibers, card weight.
2. Believable cast shadows between layers. Shadows give flat art its depth.
3. Imperfect edges: torn, scissor cut or white bordered, never a clean vector line.
4. Planar motion: pieces slide, pivot and parallax as flat planes. Paper never squashes, stretches or moves like rubber.
5. Stepped, stuttering timing instead of smooth easing.

## The camera lives inside the paper world

Every picture is a still that a video model will animate, so it is a complete scene: the paper world runs past every edge and the camera sits inside it (eye level with a paper character, worm's eye up at card buildings, overhead on a paper street). Name that camera position in every prompt.

Watch for the exterior view failure. Craft words such as "diorama", "shadow box", "tabletop" and "model" make the model show the object from outside: a framed box, a workbench, a flat-lay board. The style blocks below avoid those words. If a frame, table edge or board still appears, add "the paper scene fills the entire frame, the camera is inside the scene".

## Physicality line (add to every picture prompt)

`Everything in frame is real physical paper, photographed: visible paper grain and fibers, cut edges that show paper thickness, real cast shadows, soft studio light, the paper scene filling the entire frame.`

## Pick one sub-style per ad

The chosen block opens every picture and clip prompt, verbatim. Ask the creator to choose by name or number, or choose by content fit and say why. If they want another paper look, build a block from the five fundamentals and lock it the same way.

| # | Sub-style | Lane | Best for |
|---|---|---|---|
| 1 | Layered papercraft world | Volumetric depth | Hero product shots, gift or premium feel, title cards, parallax pushes. The most sophisticated look |
| 2 | Flat construction-paper cutout | Cartoon cutout (think paper-puppet sitcom) | Comedy, character skits, low-fi charm, irony |
| 3 | Handmade stop-motion paper | Hand-made jitter | Warmth and authenticity, strong for short-form product ads |
| 4 | Mixed-media collage | Colorized editorial | Explainers, story ads with a human subject, eclectic brands |
| 5 | Origami world | Folded paper | Calm premium tone, elegant product stories, transformation ads (the pop-up unfold fits) |

### 1. Layered papercraft world

Anchors: stacked card with visible thickness on each cut edge, deep depth between foreground, midground and background layers, layered cast shadows, rich palettes, backlit glow where warmth is wanted, quilled paper details.
Block: `Layered papercraft world, everything built from stacked card with visible paper thickness, deep depth between foreground, midground and background paper planes, layered cast shadows, quilled paper details, the camera inside the scene and the paper world running past every edge of the frame.`

### 2. Flat construction-paper cutout

Anchors: flat layered card shapes, snipped edges, construction-paper grain, bold flat colors, jointed paper-puppet limbs, soft drop shadows between layers.
Block: `Flat construction-paper cutout scene, simple layered flat card shapes, snipped edges, visible paper grain, jointed paper puppet characters, soft drop shadows between layers, bold flat colors, the scene fills the whole frame with the camera inside the paper world.`

### 3. Handmade stop-motion paper

Anchors: torn edges, visible glue seams, finger-crumpled texture, hand-placed imperfection, soft practical light with visible falloff. In motion: 12 fps stepping, no motion blur.
Block: `Handmade paper stop-motion scene, torn paper edges, visible glue seams, construction-paper grain, hand-placed imperfection, soft practical lighting with visible falloff, the scene fills the whole frame.`

### 4. Mixed-media collage

Anchors: the whole scene made of cutouts composed into one deep coherent world. Black and white photographic cutout faces on hand-drawn paper bodies, clothes from patterned paper, buildings from cardboard and newspaper, vintage magazine clippings, washi tape and stamps tucked through, ink details over the paper, saturated collage colors against newsprint neutrals. The background is part of the scene, never a visible board behind pasted items. A real product photo stays photographic as a cutout inside the world (attach it and describe it as a photo cutout with rough scissor edges so the label stays right).
Block: `Mixed-media paper collage world, the entire scene built from cutouts composed into one deep coherent scene, black and white photographic cutout faces on hand-drawn paper bodies, clothing collaged from colorful patterned paper, structures of cardboard and newspaper fragments, vintage magazine clippings, washi tape strips and vintage stamps tucked through the scene, hand-drawn ink details over the paper, rich saturated collage colors against newsprint neutrals, the camera inside the scene.`

### 5. Origami world

Anchors: everything folded from paper with clean geometric creases, delicate origami figures, crisp angular folds, pleated details (pleated towels, pleated mirror frame), soft diffused light whose shadows reveal the folds. Palette exception: soft pastels (blush, sage, cream). It is the one lane that overrides the saturated-color rule, because quiet surfaces let fold shadows carry the frame. In the physicality line say "real physical folded paper" and "crisp crease lines, folded edges showing paper thickness".
Block: `Origami world scene, everything folded from paper with clean geometric creases, delicate origami figures, crisp angular folds on every object, pleated paper details, soft pastel papers, soft diffused light casting gentle shadows that reveal the dimensional folds, the handmade feel of a stop-motion paper world, the scene fills the whole frame with the camera inside the paper world.`

## Picture prompt rules

- Style block first and verbatim; consistency comes from the block plus reused hero references, never from "same style as before".
- Image model: try a Nano Banana class model first (the more creative paper renderer in the original testing) and a GPT Image class model as the second take. They render these styles very differently, so swapping the model with the identical prompt is a style lever before any rewrite. Offer the creator's Codex CLI first for stills, else `generate_ai_media` `kind: "image"`; the live `list_ai_models` catalog decides.
- Color: saturated with clear contrast between adjacent layers and between subject and background. State the palette in each prompt ("greens stepping from lime to deep forest", "a vivid orange sun on a pale sky"). Origami is the exception (soft pastel).
- Name the interior camera position in every prompt; the angle is free per shot, the interior view is not.
- Say "papercraft", not "paper cut", near faces and products. "Paper cut" blurs fine features.
- Weave the material into each element: "pleated paper towels", "a serum bottle snipped from green card", "shelves layered from vintage magazine clippings". In clip prompts repeat material words in the action ("the paper waves slide", "the card sun pivots").
- Text overlays are done in the edit with native text, never requested from the video model.

## Motion vocabulary (clip prompts)

Models interpolate toward smooth 24 fps motion and kill the paper look unless told otherwise. Include: `stop-motion cadence, 12 fps judder, slight frame-to-frame jitter, no motion blur` (use "subtle stepped motion" for layered papercraft if full judder is too rough).

| Move | How to prompt it | Reliability |
|---|---|---|
| Slide or rotate flat pieces | "the paper [piece] slides across the frame", "pivots at one corner" | Good |
| Parallax push through layers | "slow push-in through the layered paper planes, parallax between foreground and background" | Good, the strongest paper move; lead with it |
| Jointed limbs, flapping mouths | "a jointed paper puppet raises one arm, pivoting at the shoulder", one gesture per shot | Medium, models over-smooth |
| Pop in with hard drop shadow | "a paper [piece] pops into frame with its shadow" | Medium, timing is loose; precise pops belong in the edit |
| Self-drawing pencil lines | Do not ask the video model; add a motion layer in the edit | Weak in model |

## Paper transitions

Paper can carry the scene change itself. Use one where the storyboard changes setting; keep hard cuts for beat changes inside a setting.

| Transition | What happens | Prompt language |
|---|---|---|
| Storybook page turn | The scene lifts and turns like a book page | "the entire paper scene lifts at one edge and turns like a storybook page, revealing the next scene beneath" |
| Cut-through push | Camera pushes into a cutout opening; the next scene lies beyond | "slow push-in into the cutout opening until it fills the frame, the next scene lies inside it" |
| Layer peel | The top layer peels away to show the next scene | "the top paper layer peels back from one corner and lifts away, revealing the next scene beneath" |
| Assemble and disassemble | Pieces slide out, new pieces slide in and settle with shadows | "the paper pieces slide apart and exit; the pieces of the next scene slide in and settle into place" |
| Pop-up unfold | Scene folds flat, the next rises like a pop-up book | "the scene folds flat and closes; the next scene rises and unfolds like a pop-up book spread" |
| Torn reveal | A ripped edge sweeps across and tears the scene away | "a torn paper edge sweeps across the frame, tearing the scene away to reveal the next scene" |
| Foreground wipe | Camera passes a big foreground paper piece into the new scene | "the camera pans past a large foreground paper cloud that fills the frame and emerges into the next scene" |

Three ways to run a transition in Subclip, depending on the model's inputs:

1. Inside one multi-beat clip (default when both scenes share a generation): name the transition at the cut between shot blocks.
2. Start frame plus end frame: start is the last still of scene A, end is the first still of scene B, the prompt describes the paper move between them (check `list_ai_models` for an end frame input).
3. Omni reference: attach both stills, label them ("image 1 is the opening scene, image 2 is the scene it becomes") and describe the move that carries one into the other.

## Beats (6)

1. Hook: a folded shape unfolds or a page opens.
2. World: the paper set builds.
3. Product arrives in paper form, then reveals the real product photo.
4. Benefit shown by one simple paper action.
5. Payoff: the set settles into a finished scene.
6. End card with native text.

## Fixes

| Failure | Fix |
|---|---|
| Drifts to a flat vector illustration | Physicality line verbatim; add "everything in frame is real photographed paper" |
| Shows a framed box, workbench or flat-lay board | Remove diorama, shadow box, tabletop, model; add "the paper scene fills the entire frame, the camera is inside the scene" and an interior angle |
| Collage looks like pasted items on a board | Compose every piece into one deep world; the background is scenery (sky, street, room), never a board |
| Faces or labels blur | Say "papercraft", attach the product or character reference |
| Motion smooths away the paper feel | Name the cadence; keep motion planar |
| "Stop motion" alone drifts to clay | Always pair it with paper: "handmade paper stop-motion" |
| Style drifts across shots | Same block verbatim, hero references re-attached each time |

For a single-image collage build with a storyboard sheet use the `paper-cut-motion` skill.
