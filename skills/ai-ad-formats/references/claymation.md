# Claymation ad (`/claymation`)

Look: photographed hand-made clay with fingerprints and tool marks, stepped stop motion at about 12 frames per second, real cast shadows. Claymation here is only a rendering style. The ad (script, voice pacing, beats) is planned first; this file decides how the world is sculpted, lit and moved. It suits voiceover plus B-roll best.

## What makes it read as clay (every sub-style)

1. Visible making marks on every surface: thumb smudges and fingerprints in the rough lanes, fine tool marks in the refined lanes. A clay world with no trace of hands reads as CGI.
2. Matte to satin plasticine sheen with a little warmth under the surface. Never write "smooth", "polished" or "glossy": those words pull the model toward a CGI render.
3. Hard materials are clay imitations. Glass, liquid, metal and flame are the hard cases, so describe them as "sculpted as a clay imitation of an amber dropper bottle" or "of pouring water".
4. Hand-made geometry. Nothing is factory straight; each lane sets how wonky or how tidy.
5. Real cast shadows and physical lighting, as on a miniature film set.
6. Stepped cadence in motion, no motion blur.

## The camera lives inside the clay world

Each picture is a still a video model will animate, so it must be a complete scene: the clay world runs past every edge and the camera sits inside it at a named angle (eye level, worm's eye, overhead). Macro feel and shallow depth of field are welcome because they come from the lens. Never show the workbench, set edges or the room around the set.

## Pick one sub-style per ad

Pick by content fit or let the creator choose. The style block of the chosen lane opens every picture prompt and every clip prompt of the ad, word for word. A lane's design language (eyes, proportions, hair, how wonky the geometry is) is part of the style and stays fixed; the character's identity (face, outfit, colors) is free per ad and holds through hero references.

| # | Sub-style | Feel | Best for |
|---|---|---|---|
| 1 | Goofy claymation | Chunky, loud, wonky, packed sets | Playful brands, comic beats, high-energy hooks |
| 2 | Clean simple clay | Matte, rounded, tidy, dot eyes | Minimal brands, calm explainers, product out-detailing the world |
| 3 | Stop-motion puppet | Clay figures with tiny real craft bits, film lighting | Story-driven ads, moodier or cinematic tone |
| 4 | Premium studio plasticine | Refined sculpting, macro lens, soft rim light | Premium brands, hero product beats, the safe default |

The creator's own pack shows one identical bathroom scene in all four lanes on a single numbered sheet (see `examples/notion-claymation-styles.jpg`). Show a picture like that to the creator when they cannot choose from words alone. To get your own, make one scene with the product in each lane and compare.

If the creator wants another kind of clay, build a new style block from the six fundamentals above and lock it the same way.

### 1. Goofy claymation

Design language: oversized head, huge round googly eyes (white sclera, small dark pupils, thick sculpted lids), bold sculpted brows, round blush cheeks, wide open grin, hand-sculpted hair with a few playful strands out of place (never "sticking out in every direction"). Cluttered sets, fingerprints everywhere. Palette: saturated teal and terracotta.

Style block to paste first:
`Goofy claymation scene, everything sculpted from plasticine with visible fingerprints and thumb smudges, wonky hand-made geometry where nothing is straight, saturated teal and terracotta palette, the scene fills the whole frame and the camera sits inside the clay world.`

Character block: `a goofy plasticine [person] with an oversized head, huge round googly eyes with white sclera and small dark pupils under thick sculpted lids, bold sculpted eyebrows, round blush-pink cheeks, a wide open-mouthed grin, hand-sculpted clay hair with a few playful strands out of place`

### 2. Clean simple clay

Design language: smooth matte rounded forms with faint tool marks, simple dot eyes, gently exaggerated cartoon proportions, tidy composition.

Style block: `Polished claymation scene, everything sculpted from matte modeling clay, clean rounded forms with even soft surfaces and faint tool marks, gently exaggerated cartoon proportions, refined hand-made stop-motion feel, the scene fills the whole frame and the camera sits inside the clay world.`

### 3. Stop-motion puppet

Design language: clay figures finished with tiny real craft materials (thread-wrapped hair, fabric scraps, wire-rimmed glasses, button details) on fully sculpted clay sets. Cinematic film light, moody palette with deep teal shadows and warm amber practical light.

Style block: `Stop-motion clay puppet scene, clay characters finished with tiny craft materials such as thread-wrapped hair, fabric details and wire accents, on a fully sculpted clay set, cinematic stop-motion lighting with gentle shadows, the scene fills the whole frame and the camera sits inside the puppet world.`

### 4. Premium studio plasticine

Design language: matte plasticine with deliberate, controlled craft (fine tool marks, never messy fingerprints), natural proportions, hair with fine comb grooves, bright friendly eyes with white sclera and colored clay irises (the irises stop this lane from collapsing into dot eyes), softly sculpted lips, macro lens look with shallow depth of field, diffused light with a gentle rim glow, rich harmonious palette (sage, cream, terracotta family).

Style block: `Premium studio claymation scene, everything sculpted from matte plasticine with deliberate refined craft, fine tool marks, controlled texture, soft rounded geometry, slight warmth under the surface, macro lens look with shallow depth of field, soft diffused studio light with a gentle rim glow, the scene fills the whole frame and the camera sits inside the miniature clay world.`

Character block: `a plasticine [person] with natural proportions, neatly sculpted hair with fine comb grooves, bright friendly eyes with white sclera and colored clay irises, softly sculpted lips in a warm smile`

## Picture prompt rules

- Style block first, verbatim, then the scene. Consistency comes from the block plus hero references, never from "same style as before".
- Weave clay into every object: "a serum bottle sculpted as a clay imitation of an amber dropper bottle", "a coiled clay towel", "clay plants with thumb-pressed leaves".
- Name the palette in every prompt: saturated and high contrast by default, rich and harmonious for premium, cinematic for puppet.
- Name the camera angle inside the world. Macro with shallow depth of field is the premium lane's native look.
- The product stays accurate: attach the product photo whenever it appears and describe it as a clay imitation of its real shape so label and silhouette hold.
- Whimsy lives in the rendering (quilled coils, pressed textures, tiny props). The beat's content comes from the storyboard, not from the style.
- Close with the physicality line, adapted to the lane: `Everything in frame is real [modeling clay / professionally sculpted matte plasticine], photographed, [visible fingerprints and tool marks / refined sculpting marks], real cast shadows, soft studio light, the clay scene filling the entire frame.`

## Image route

Offer the creator's Codex CLI first for stills. Otherwise `generate_ai_media` with `kind: "image"` on the best clay renderer `list_ai_models` offers. In the original testing a Nano Banana class model gave the most creative, truest clay and a GPT Image class model came out flatter; Seedream class models are worth trying on demanding briefs. If a result misses the look, reroll (or swap model) before rewriting a locked prompt, because variance is the usual cause once the lane block is locked.

## Motion guard (every clip prompt, transitions included)

Video models smooth clay motion into organic movement and the material disappears. Put this in each clip prompt:

`Hand-made stop-motion claymation throughout: matte plasticine, visible fingerprints and tool marks, slightly stuttery 12 fps stop-motion cadence, no motion blur. Not CGI. Not a smooth cartoon. Motion starts on the first frame.`

In the premium lane say "refined sculpting marks" instead of fingerprints. One motion action per clip; stacked actions multiply drift. Keep each beat to one gesture and one camera move.

## Clay shot types

- Macro texture close-up: fingerprints and tool marks fill the frame.
- Worm's-eye miniature: camera at clay-ankle height, the world feels giant.
- Tilt-shift tabletop look: shallow depth of field (premium's native shot).
- Fingerprint insert: a detail of an object that was clearly just pressed by a thumb.
- Clay-frame POV: through a sculpted mirror, window or arch.
- Googly-eye extreme close-up: the goofy lane's charm shot.
- Hand-of-god cameo: real hands enter the set mid shot.

## Clay transitions (start frame plus end frame)

Clay is the one material where continuous metamorphosis feels native, so start frame and end frame transitions are strong here. Build the pair before writing the clip prompt:

1. One shared anchor object (usually the product) appears in both frames at similar position and scale. Generate both frames from the same references, ideally with the finished start frame attached when making the end frame. A similar but different anchor makes the model cut instead of morph.
2. The bridge is one physical action in one short sentence, something you could draw in two or three storyboard panels ("she sets the bottle on the tray and her hand pulls away"). A camera move alone is not a bridge when the subject also changes.
3. Keep camera family and scale equal across the two frames unless the change is the action itself.
4. Anything present in frame A and missing in frame B must be removed by the action, never silently gone.

Camera bridges (anchor fixed, camera moves): push in from a mid shot to macro on the product; pull back to reveal a new scene.
World bridges (camera fixed, clay changes around the anchor): the scene melts into a swirl of plasticine while the product stays; the scene is kneaded into the next one; it rolls into a ball and unfolds as the next; clay coils and pellets roll in and assemble the product; a clay smear wipes to the next scene; real hands re-sculpt one object into another; a recurring clay blob carries the viewer scene to scene.

The clip prompt names the bridge explicitly plus the motion guard and nothing else, because the frames carry the style. Chain each end frame into the next start frame for a flowing sequence. In Subclip pass the start picture as `start_frame` and, when `list_ai_models` shows a model with an end frame input, the end picture as the end frame; otherwise use the omni reference route and describe both pictures in the prompt.

## Beats (7)

1. Hook: the product in clay, one surprising gesture.
2. Problem: a clay character has the problem.
3. Product enters.
4. Use: a visible, simple action.
5. Change: the problem goes away, ideally in a funny way.
6. Proof or payoff shot.
7. End card: the real product photo with native text (never model-drawn text).

## Fixes

| Failure | Fix |
|---|---|
| Drifts to a smooth CGI render | Remove "smooth, polished, glossy"; paste the physicality line verbatim; reroll |
| Character design varies between generations | The lane's design language rides in every prompt; pin any feature that drifts |
| Premium faces collapse to dot eyes | Keep "white sclera and colored clay irises" |
| Goofy hair goes wild | Keep "a few playful strands out of place" |
| Glass or liquid looks realistic | Use "sculpted as a clay imitation of" |
| A transition cuts instead of morphing | Rebuild the frame pair by the four rules above |
| Texture melts away mid clip | Repeat the motion guard in every clip prompt |
