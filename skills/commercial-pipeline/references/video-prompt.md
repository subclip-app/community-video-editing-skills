# Stage 2: video prompt architecture

One long structured prompt in a fixed section order. It moves identity into the images and leaves only behavior, timing and rules in the prompt.

## Section order

```
SCENE CONTEXT
ACTIVE REFERENCES
LOCATION MAP
GEOMETRY LOCK            (when an object must hold position across cuts)
FIRST FRAME AND SPATIAL BLOCKING
FORMAT MODE
EDIT ACCELERATION LOCK   (when the film should speed up)
OPTICS
LIGHTING PROGRESSION
CAMERA
ACTION TIMING
PHYSICS
AUDIO
POSITIVE LOCKS
<global style tail>
```

Spatial rules before camera style, optics before aesthetic language, locks before the segments they govern so segments can cite them by name. Everything critical appears twice: once where it applies and once in POSITIVE LOCKS.

## Reference handles

Number the references in the order you attach them in `sourceAssets` (role "reference") and refer to them by number inside the prompt. Seedance class models use a handle such as `<<<image_1>>>`; check the model's documented syntax in `list_ai_models` or the generation guide before writing. Assign the handles yourself so the creator never has to work out which image belongs where, and list them with a short descriptor in the settings summary so attaching is just following the numbers.

Each reference gets one line: identity anchors only, then a fidelity phrase ("100% matches the reference"). The image already carries the face, and prose piled on top competes with it. Two things ride on reference lines: the scale override of an object goes in that object's own line, and the logo's permitted placements are declared on its line and repeated in the locks.

Describe what generated, not what was planned. If the character sheet came back without the requested moustache, the line has no moustache. A reference line that contradicts its own image is worse than no line.

## What each section does

- SCENE CONTEXT: one paragraph, the whole film start to finish in plain language. Concept, not craft.
- LOCATION MAP: the location reference converted into geography: walls, doors, what lies along which wall, where the empty playing area is, what the floor is. Name zones in capitals so segments can cite them. Include the living background ("four to six people work at the benches, two or three walk across the depth"); a dead background reads as a render.
- GEOMETRY LOCK: see the catalogue below.
- FIRST FRAME AND SPATIAL BLOCKING: what is on screen at frame one, written as an image, plus "no empty establishing frame", then the geometry that must survive the film. If the film has a threat, machine or payoff object, put it in frame one so the stakes are legible at once.
- FORMAT MODE: segment count, runtime, cut types and a ban on everything else (for example sixteen scripted segments across 30.0 seconds, hard cuts and one insert cut, each cut hidden in motion or motivated by a look, no fades, no dissolves, no unscripted cuts).
- OPTICS: one lens lock per segment, in degrees of diagonal field of view, never millimeters (millimeters work for image models; video models want the observable result). Close with "no lens drift mid-segment". Rough map: 8 degrees super-telephoto observation, 18 classic telephoto or macro insert, 29 short telephoto and product macro, 47 standard normal, 84 classic wide, 107 wide rectilinear. For a block of macros give each shot its own camera distance and downward angle, which stops six product shots collapsing into one shot six times.
- CAMERA: operator behavior and any global movement law. Useful: every shot moves from its first frame, with named exceptions (if some segments are true handheld, say that this overrides the smooth-camera rule for those segments only). Weight cues belong here, not in physics: a low continuous vibration caused by the machine's mass through the floor, which is machine weight, not handheld shake.
- ACTION TIMING: the body. Every segment has a time range, an ID, a lighting tag and an explicit cut marker. Timings run to one decimal and every gap is filled so the model never invents a transition. Write body mechanics like a director's note ("one knee bending forward into a shallow lunge, the other leg braced behind, torso leaning over, never a deep squat"), because "he puts it down" produces the model's default crouch.
- PHYSICS: mass, inertia, contact, materials; viscosity, parabolic arcs, exhaust shimmer, and a restatement of anything in the environment that must not change.
- AUDIO: a sound design pass in film order, not a list of nouns. Sound effects only unless the creator asks for more.
- POSITIVE LOCKS: every non-negotiable restated as a plain declarative rule. Saying it twice is the point.
- Global style tail: an unlabeled closing paragraph with format, grain, bokeh behavior, framing law, cut law and the absolutes ("no CGI, no existing IP").

## The lock catalogue

A lock is how a rule survives a cut: a named section or line, stated in absolutes, restated in the positive locks.

### Geometry lock

For any object that must hold position across cuts; the most valuable section. Anchor to a world landmark, never to screen coordinates, because coordinates move with the camera and a box pinned to a screen position is dragged around the floor. Anchor to a floor joint, a distance from another object, an alignment with a doorway.

Pattern: a floor anchor line that governs a segment range, with a position (for example eighty centimeters in front of the machine's leading edge, in line with the center of the doorway), an orientation (open side faces screen-left, lid upright at the back), and a flat rule that the object never moves or turns. Four clauses earn their place:

- A definition clause: only one of this object exists in the film. Without it a duplicate appears on a bench in a wide shot.
- Explicit negation of drift: it does not slide, rotate, shift, tilt, settle or get nudged. Listing the failure modes beats asserting it stays put.
- "Do not re-center it, do not re-frame around it, do not correct its position to match a previous shot's composition", because models fix composition between cuts and think they are helping.
- A restatement requirement: every segment where the object appears names its anchor again, never assumed from the previous shot.

If the object legitimately moves once, give it a second anchor and show the transit on screen. An object that changes place between cuts without a visible move reads as a teleport, worse than drift. If the film has a hidden swap (object A becomes object B), the swap inherits the anchor and says so: the object changes, the position does not.

### Speed lock

For anything whose pace keeps drifting: "the machine never moves fast; in every shot it creeps at a slow, heavy, inevitable pace, slower than a person strolls; no speed-up, no lurch, no fast pass."

### Edit acceleration lock

Tension comes from the edit and the subject moving at different rates. State the shape of the cutting as a rule and name the exceptions, or the rule eats the beats that must breathe: before the trigger the film breathes (for example 3.0 s, 2.4 s, 1.6 s), from the trigger onward each segment is shorter than the last, except the two scripted long ones (the crush, the reveal). The slow subject is exempt from the speeding up.

### Lighting progression

Lighting written as prose is decoration and gets ignored. Declare three or four named states in order, each defined by its dominant sources rather than a mood word, and tag every segment ("light state B"). Bind transitions to a frame, not a section boundary ("state A cuts to state B on the press, not after it"). Name one state as the light event of the film, usually the reveal, and tell the change with light, not an effect: the shadow slides off the object, a beam sweeps across it, steam rises through the light. Then add "no glow effects, no magic". The first state is a deliberately boring baseline the others depart from.

### Product variety lock

For a block of consecutive product shots: "S10, S11, S12, S13, S14 and S16 are six different shots; each differs from the one before in angle, distance and camera move; no two share a framing", with the order listed (overhead pour, low skimming lateral, top-down gravity drop, pull, extreme macro, hero pull-back).

## Patterns for commercials

- Hidden transformation: never ask the model to morph. Object A before a cover, object B after, never both in frame, stated as a lock. The cover can be a machine, a hand, a door or a whip pan. This is why paired assets must share packaging.
- Start every segment on the action: if the beat is a button press, cut to the finger already on the button. Two seconds of getting ready is 6% of a 30 second ad spent on nothing.
- Delete setup entirely rather than shortening it: a driver climbing into a cab compressed to one second is still a driver climbing into a cab.
- Put the payoff object near the threat from segment one.
- Let the edit accelerate while the subject stays slow.
- Give the product reveal room: five or six varied beats beat two good ones.
- Prefer angle shots to action shots in product blocks. A macro from a new angle is cheap and reliable; a shot where a tool enters frame and pours, lifts or cuts is expensive and often breaks. Keep the downgrade ready (replace with a passive macro, same shot count). Know which two shots are the fragile ones before you batch.
- Keep the background alive in every wide and medium shot.
- Two logo placements at most, one diegetic and one end card, plus "the logo appears nowhere else, no other logos or text in frame". If no diegetic surface exists in the assets, use the end card only. In Subclip the end card logo and offer text are native overlays added in the edit, which is safer still.

## Quality bar (shape, not content)

A shipped 30 second film for a pizza brand had seven references (two character sheets, a hangar location, a burger in a kraft carton, a pizza in a kraft box, a colossal road roller, the logo), sixteen numbered segments, a geometry lock that occupied about a quarter of the prompt, four named light states, an edit that sped up after the trigger, and six product shots in the closing block. Locks in it answered that film's own past failures ("no other clipboard color" exists because red ones appeared), so do not carry specific locks into an unrelated brief. Note the density: numbered segments cited by ID in optics, acceleration, light states and locks; critical rules said at least twice; timings to one decimal with every gap filled.

## Delivery format for each prompt

1. A bold title line naming the artifact ("Asset 3 of 7, location plate, 16:9" or "Video prompt v2, 30 s").
2. The full prompt, plain text, nothing else inside it.
3. A settings table right below it (model, aspect, duration for video, batch 4, attachments in handle order).
4. "Judge on": three or four checks in priority order, never "pick the one you like best".
5. A progress line naming the next step.

| Stage | Model | Aspect | Duration | Attachments |
|---|---|---|---|---|
| 1 product, prop, machine | image route | 1:1 for pairs that cut together | none | none |
| 1 character sheet | image route | per asset rules | none | none |
| 1 location plate | image route | match the film (16:9 or 2.39:1) | none | none |
| 2 video prompt | Seedance class | match the film, 16:9 default | 30 s | every reference, numbered in handle order |
| 3 fix | same | unchanged | 30 s | unchanged unless an asset was regenerated |

In a Stage 3 rewrite say whether the block is a targeted patch of sections or the full prompt (full when more than a couple of sections changed).
