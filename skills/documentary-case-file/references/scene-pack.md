# Case file, scene pack and checks

## The four pillars (if one is missing it stops feeling like this style)

1. Minute-by-minute timeline storytelling: the story is a reconstructed timeline, every scene has an in-world clock time (chronological across the film, for example 08:41, 08:52, 09:14), and the narration keeps citing it. The same times become overlay text in the edit.
2. Cinematic 3D reconstruction in one locked style per film (`style-incident.md` or `style-investigation.md`).
3. A cold, clinical narrator that sounds like evidence (`narration.md`).
4. Curiosity loops: every scene ends on an open question; the film opens one big loop and closes it only at the end.

Framing rule above all: treat every story as a real incident.

## Formats

Pick the format that fits (or mix if the story needs both) and read its style file before writing any prompt. Incident reconstruction is for human-scale single events; large-scale investigation is for geographic-scale stories. Read `narration.md` before writing any narration.

## Plan first, then generate

The case file is one complete plan so that every shot is decided before generation. Do not run an interview: infer missing decisions, state each inference in one line in the case file header, and deliver the whole plan. If the creator wants changes after seeing it, regenerate only the affected scene packs and keep every lock intact. Plan in this order:

1. Parse topic, format, runtime, aspect (default 16:9) and accent color.
2. Timeline first: research the clock for a real event or invent it for a fictional one, split into chapters, then scenes.
3. Assets before motion: list everything that appears on screen, register it, write its image prompt.
4. Motion: one continuous prompt per scene.
5. Narration: per scene, then assembled into one master take.
6. Edit plan: assembly, overlays, pacing.

## Scene math

- One scene is one generation of up to 30 seconds (a block). One prompt carries a whole scene as a continuous sequence, so the film's foundation takes a handful of generations. If the chosen model caps lower, split the scene at its timecodes (0 to 8 s, 8 to 16 s and so on) with the same references and suffix.
- Default film: 3 scenes, about 1 minute 30. For a named runtime, scenes = ceil(minutes x 60 / 30). State the math in the case file: "N generations for M:SS of footage".
- One scene is one location, no cuts to other locations inside a scene. Camera movement inside it is welcome; location changes happen in the edit between scenes.
- Arc across scenes: routine, anomaly, escalation, aftermath or reveal. At 3 scenes that is setup, incident, aftermath; the last scene earns the loop close.

## The two locks

1. The style suffix: fill its accent slot once and append it unchanged to every image prompt and every video prompt.
2. References: every asset a scene shows is generated once as a still, then attached to the scene. Each scene pack ends with an attach line that lists every asset ID for the scene. Models vary in how many reference images they accept; check the limit in `list_ai_models` and attach key location and characters first. Same references across scenes give the same world.

Corollaries: a video prompt may show only registered assets (register a new one first). Every recurring character keeps one descriptor line (age, build, hair, clothing with colors, one distinguishing item) reused word for word. No readable text inside generations, because models garble it: timestamps, labels and captions are edit overlays (native text in Subclip), and investigation HUD elements are abstract ticks and shapes.

## Case file layout

```
CASE FILE: <title, for example "The X Incident", "The Search for X", "Time: The X File">
Logline: one clinical sentence.
Format: incident reconstruction / large-scale investigation / mixed, aspect
Runtime: M:SS, N video generations, accent color
One line per inferred decision.

TIMELINE: chapters with clock ranges, one line each
SCENE TABLE: number, chapter, clock, what happens, assets
SETTINGS: models, aspect, duration, audio
ASSET REGISTRY: CHAR-01..., LOC-01..., PROP-01... (investigation: MAP, TER, OVL, VEH), each with its ID, name and image prompt
SCENE PACKS: per scene, narration (with word count), video prompt, attach line
NARRATION MASTER: all scene narration in order, one block, plus the voice card
EDIT CHECKLIST: assembly order, narration on top with scene sound ducked, in-world clock overlays, pacing, export
Checkpoint: N generations for M:SS of film.
```

## Scene pack

```
SCENE <n>  <clock>  <chapter>
Narration (<word count> words): <the scene's words, at most about 65 for a 30 s scene>
Attach: <every asset ID in this scene>, and any extra angles you generated
Video prompt: <scaffold from the style file; style suffix last>
```

Quality bar for a first scene (about 44 words of narration): a clinical lab at 08:41, one intern, one terrarium. Three registered assets (the lab, the intern, the terrarium). Eight seconds of him badging in and walking the aisle from a high-corner surveillance angle, a lateral dolly past equipment, a push-in over his shoulder as he stops at the terrarium, and a hold on his hand unlatching the lid. Audio: HVAC room tone, footsteps on sealed concrete, one latch click, a low sparse score, no voice.

## Asset prompts

| Asset | What to ask for |
|---|---|
| Character | Full body, neutral pose, plain background, descriptor line, front three-quarter view |
| Location | Empty plate, wide, light as the film needs, no people, no text |
| Prop | Isolated, clean, with size cue and state; add intact or damaged variants when the story needs them |
| Map view (investigation) | Dark night terrain, thin route lines, no place labels (add labels as native text) |

## Sound

Clips carry their own sound: room tone, movement sounds and a low sparse suspenseful score, never dialogue. The narrator is generated separately and laid over the top with the clip sound ducked under it. Characters never talk on screen. If a video model has no native audio, drop the audio line and add sound in the edit.

## Mini mode

If the creator wants a single sequence (a teaser, a test, a 10 second search grid shot), skip the case file: deliver 2 to 4 asset prompts, one video prompt and one narration line if asked, under the same two locks. Scale the clip length to the ask.

## Real events

For incidents with real victims, restraint is ethics and authenticity: verified public facts only, no gore, no lingering on victims, generalize private individuals unless they are part of the public record. The clinical distance is the style.

## Silent check before delivering

- The same suffix appears in every prompt.
- No unregistered assets in any video prompt.
- Narration within the word budget per scene, and every non-final scene ends on an open loop.
- Clock times chronological.
- Every asset in the scene table exists in the registry, and attach lines are complete.

## Pacing

- A 30 second clip carries 3 to 5 beats. Do not squeeze more.
- Narration is about 2.4 words a second with pauses at chapter breaks.
- End each chapter on an image that raises the next question.
