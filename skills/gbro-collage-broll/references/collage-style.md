# Collage style reference

Craft rules from pyang5166/gbro-collage-broll (MIT), translated to English.

## Visual spec

Write one self-contained spec per approved line before prompting.

```json
{
  "script_meaning": "",
  "visual_metaphor": "",
  "style_signature": "flat bold color field, mixed black-and-white halftone cut-outs and colored cardstock accents, crisp cut edges, cream keylines, soft paper shadows, editorial paper collage",
  "aspect_ratio": "9:16",
  "color_field": { "background_hex": "", "accent_colors": [], "paper_grain": "fine uncoated-paper fiber" },
  "elements": [ { "what": "", "role": "", "motion": "", "placement": "" } ],
  "composition": { "layout": "", "negative_space": "", "final_frame": "" },
  "motion_plan": "structure first, subject or cards second, action and result last",
  "avoid": "typography, readable letters, numerals, logos, watermark, UI, subtitles, glossy 3D, photoreal environment"
}
```

## Color

Do not default to one blue. Pick a strong field by meaning and keep one design language across a batch with different color fields:

- burnt orange or red: time spent, labor, urgency
- mustard yellow: tools, warning, lost experience
- deep green: cognition, taste, system reset
- deep purple: standards, accumulation, long memory
- teal: judgment, collaboration, automatic execution

The subject may be mostly black and white halftone. Colored paper must serve the information hierarchy, not decorate.

## Still prompt template

```
Use case: ads-marketing
Asset type: final still frame for a 9:16 image-to-video B-roll clip
Primary request: Create a finished editorial paper-collage image expressing [one-sentence visual proposition].
Scene/backdrop: perfectly flat [color] paper field [hex] with subtle uncoated paper fiber.
Style/medium: premium editorial stop-motion paper collage; black-and-white halftone photographic cut-outs mixed with selective [spot color] colored cardstock.
Composition/framing: vertical 9:16 locked poster frame; central subject within the middle 70 percent; generous clean color-field negative space; 3 to 6 large separable paper groups for later assemble-from-empty animation.
Materials/textures: visible printed halftone dots, crisp machine-cut edges, thin warm-cream paper keylines, soft low-opacity physical drop shadows.
Constraints: [the relationship the metaphor must show at a glance].
Avoid: no typography, no readable letters, no numerals, no logos, no watermark, no UI, no subtitles, no glossy 3D, no photoreal environment, no clutter.
```

## Animation prompt template

Default action order: base structure, person or key card, connectors, action, final result.

```
Paper-collage stop-motion assembly, using Image 1 as the exact empty first frame and Image 2 as the exact completed last frame. In one continuous locked-off vertical shot, open on the empty flat [color] paper field.

Assemble the scene piece by piece with crisp physical stop-motion timing: [3 to 6 elements: how each slides in, locks into place, connects and completes its action]. End by holding the supplied completed composition.

Preserve the exact 9:16 framing, [hex] color field, colored cardstock accents, uncoated paper grain, halftone dots, cream keylines, crisp cut edges and soft shadows. Restrained tactile 2D paper craft only.

No scene cuts, no camera movement, no zoom, no morphing, no new objects, no text, no letters, no numbers, no logos, no watermark, no UI, no sound.
```

State in every prompt that Image 1 is the empty first frame and Image 2 the approved completed frame. The final composition must stay close to Image 2.

## Batches

Number the lines. Only approved numbers move to the next gate. Keep earlier still versions so the creator can compare. A failed clip is rerun alone; passed clips are not rerun.
