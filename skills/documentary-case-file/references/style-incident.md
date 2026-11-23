# Style: incident reconstruction

For single events at human scale: an accident, a disappearance, a break-in, a mechanical failure, an origin story told as an incident. The register is "evidence render": the calm of a forensic reconstruction, not an action scene. Real events get case-file treatment naturally; invented ones get it deliberately (dates, clock times, file numbers, clinical language, no winking at the camera). Playing it straight is the signature.

## Visual DNA

- Stylized low-poly 3D with simplified geometry and softly textured materials. Never photoreal, never bouncy cartoon. Think of a premium courtroom reconstruction.
- Characters are simplified geometric figures with minimal facial detail. They read through posture and blocking, not expressions.
- Lighting does the drama: realistic and motivated by the scene (window daylight, fluorescent panels, one desk lamp at night), with soft volumetric shafts and gentle haze.
- Palette: muted and desaturated with one accent color that marks what matters (the specimen, the warning light, the evidence). Choose the accent once per film: amber by default, red when danger leads, cyan for clinical or tech stories.
- Scale cues everywhere: rooms feel measured and props feel placed, as if the frame could be exhibit B.

## The style suffix (lock 1)

Fill the accent slot once, then append the suffix unchanged to every image prompt and every video prompt in the film. One changed word is how drift starts.

`Stylized low-poly 3D documentary reconstruction render, simplified geometric human figures with minimal facial detail, clean soft-textured materials, realistic cinematic lighting with soft volumetric shafts, muted desaturated palette with a single [ACCENT] accent, gentle filmic haze and shallow depth of field, high-end production render, no text, no watermark, 16:9`

Swap the final aspect if the film is not 16:9.

## Asset scaffolds

- Location (LOC): an empty plate, because people contaminate location references. "Empty location plate, no people, no animals: [layout, key furniture and equipment, materials, light sources, time of day, where the accent color lives]. Wide coverage from a natural corner height." plus the suffix.
- Character (CHAR): a reference sheet, full body, neutral standing pose, plain light grey studio background, front three-quarter view, built from a descriptor line (age, build, hair, clothing with colors, one distinguishing item) that you reuse word for word in every prompt showing that character. Plus the suffix.
- Prop (PROP): isolated on a plain light grey background, with materials, a size cue against a hand or table, and its state. Plus the suffix.
- Valuable extras: a second angle of the key location (an aerial establisher) and a state variant of the key prop (intact, opened, damaged) made from the base prompt with only the state changed.

## Camera grammar (pick two or three per block, vary across the film)

- Slow push-in: the evidence move, ends most scenes.
- High-corner surveillance angle, locked off: makes footage feel recovered.
- Wide aerial establisher: opens scenes and sells scale.
- Slow lateral dolly: follows movement without excitement.
- Top-down schematic: turns a room into a diagram.
- Static tripod mid shot: lets an action simply happen on record.

Procedural pace: characters move deliberately and actions take their real duration. Slow reads as documentary; fast reads as animation.

## Motion prompt scaffold (one scene, up to 30 seconds)

```
Continuous single-scene sequence, one location, no cuts.
SETTING: <the location, time of day, light>.
CHARACTERS: <each descriptor line, word for word>.
SEQUENCE: 0-8s <action and camera>; 8-16s <action and camera>; 16-24s <action and camera>; 24-30s <action and camera, end on a push-in or a held frame>.
Characters only gesture and act, they do not talk.
AUDIO: <room tone of this space>, <named movement sounds>, low sparse suspenseful score, subtle; no dialogue, no narration.
<style suffix>
```

Three to five beats per block. Each beat is one physical action the camera can see: "he hesitates" is invisible, "he stops with his hand on the latch" is a shot.

## Don'ts

- No second location inside a block; make it two scenes.
- No unregistered element: if a beat needs a forklift, register it as a prop first.
- No readable text anywhere in frame (screens glow, they do not say words); labels are edit overlays.
- No gore and no lingering on injury: the camera arrives after, or cuts away before.
- No comedy in the frame; irony lives in the deadpan narration.
