# Cartoon stages

Adapted from Bang Tutorial's jointed cartoon method. A stage is a complete environment about the size of a frame, with overscan and its own camera. Keep related causes and effects together. Change stages when location, scale or explanatory method changes.

## Framing and cuts

A character should remain readable, around 35 percent of frame height at the widest view and 55 to 65 percent in close-up. Upstream zooms around 1.08 to 1.95 are useful starting values for a frame-sized stage. Do not build a huge map and zoom to 0.2 so houses become thumbnails and empty ground fills the film.

Try a hold of 0.45 to 0.7 seconds, one camera move per spoken beat, then a hold. Follow a leap, tilt to a roof or push into a machine only when that action explains something. Narration sentences do not automatically create a new stage.

Use cuts between stages. An accented location change can use a 96 px horizontal or 72 px vertical offset: about 0.28 seconds accelerating out, then 0.42 seconds easing in. Apply the offset inside an overscanned stage, not to an already cropped frame. In Subclip, keep text out of any filtered background wrapper. Skip upstream container blur when labels are descendants. Do not add scale bumps or long empty journeys between every stage.

## Make the environment work

Upstream targets at least ten meaningful moving things per stage. Treat that as an environment audit, not an excuse for visual noise. Each should establish activity, process or consequence. Examples:

- Fan turning around a stable hub; a meter rising; a status lamp changing.
- Water drops following the actual pipe path; river ripples moving.
- Steam rising and fading; leaves swaying with different phases.
- A bird crossing; a clothesline responding; a walking animal.
- Plants growing then wilting; cracks drawing; water level dropping.
- Repeated shelf lights or irrigation cells showing a sequence.

Motion is finite and derived from local time. One authored motion curve and one opacity curve own each particle. Competing repeating opacity tweens can suppress it. A pipe drop follows precomputed path geometry, not a dash pattern unrelated to the pipe's shape.

## Joint hierarchy

Use local coordinates, placement groups and a proxy per joint. A useful feet-at-zero construction:

    placement
      shadow
      character-root
        pelvis around (0, -214)
          thigh left/right at (+/-26, 0)
            shin at (0, 102)
              foot at (0, 96)
          torso
            back upper arm at shoulder
              forearm at (0, 78)
                hand at (0, 74)
            body shape
            head at neck
            front upper arm and forearm

The dimensions describe one starting rig, not anatomy constraints. Let costume and proportions fit the subject. Paint back leg and arm first, torso and head next, front arm last. Place a foot shadow before the character. It follows the root and shrinks during a leap.

Do not tween GSAP rotation/transformOrigin on a jointed SVG group whose bounding box changes as its children move. Do not write x/y on a group whose existing placement translate must survive. Keep the static placement and animated joint in separate groups.

Each joint proxy stores base translation, animated offset, angle and scale. Its apply step writes one explicit transform:

    translate(baseX + offsetX, baseY + offsetY) rotate(angle) scale(scaleX, scaleY)

Tween the proxy and apply the complete state after every timeline seek, including backwards and initialization. Do not rely solely on callbacks suppressed by a seek. Nothing should detach at shoulders, neck, knees or ankles.

## Acting recipes

Idle: torso sways around 1.1 degrees over 1.7 seconds, head about 1.7 degrees over 2.3 seconds, arms one to 1.5 degrees with different phases. A blink can last about 0.13 seconds every 3.5 seconds, offset between characters. Derive these states from local time with fixed phases.

Walk: step = sin(time * 8). Thighs swing about 15 degrees in opposing phase. Knees bend around max(0, step) * 18 degrees. Root bobs about abs(step) * three to four pixels. Arms counter-swing; foot shadow follows position. Gate the walk to the intended time interval.

Jump: one progress curve controls root arc, knees, arms and shrinking shadow. Landing restores the exact foot plane. Follow the arc with the camera only if needed to keep the head visible.

Point: upper arm can move from about six to minus 72 degrees over 0.7 seconds, then hold while the viewer follows it. Wave, crank, lift and fan-face motions should have a specific story purpose, not run throughout every shot.

## Face and expression

Prefer editable vector faces for the simplest characters: skin shape, one hair silhouette, dot eyes, brow strokes and a small mouth. Blink through eyelid shapes and change mouth/brow state from the same local clock. Use a stable head-neck overlap, about 14 px in the reference rig, and inspect close views for gaps.

If the creator chooses a raster head, generate through the approved Subclip image workflow and import it. A useful source prompt, rewritten for the chosen identity:

> One isolated front-facing cartoon head, centered with generous margin. No body, shoulders or text. Minimal flat educational style, broad rounded head, simple ears, hair as one solid silhouette, two small solid dot eyes, two tiny eyebrow strokes, no nose, a small curved smile. About three flat colors, no gradient, outline or shading. [Approved identity traits]. Transparent background if the chosen model supports it.

Freeze the approved head reference. For expressions use approved variants with the same head, or a vector face whose components can change independently. The upstream raster pupil/mouth detection script is not included and no automatic Subclip equivalent is promised. Do not cover an existing smile with a second mouth unless the resulting pixels have been checked. Match the jaw to the neck pivot and preserve costume colors across stages.

## Surface and words

Use bright flat fills, a pale sky, readable silhouettes and restrained contact shadows. Theme-derived teal, cream, warm earth and coral are possible choices, not a required palette. Building side faces can be about 0.86 to 0.9 of the main face brightness. Paper grain, vintage vignettes and collage marker captions belong to another mode.

Default text is diegetic: signs, tank labels, machine plates. Do not repeat every narration sentence onscreen. Requested captions remain native and take precedence over this stylistic default. Reserve space for them before composition.

## Verify the rig

For each short HyperFrames stage, inspect entrance, major actions, closest camera pose and exit through native frame tools. Check joints while walking and landing, exact ground contact, occlusion order, path-following drops, camera crop and the next stage's first pose. Several sampled frames do not prove smooth playback; when app testing is allowed, review the complete action and test forward/backward seeking. Report any playback or listening review still missing.
