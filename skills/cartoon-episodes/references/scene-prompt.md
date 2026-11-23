# Scene prompt pattern

The chain for every scene is always: idea, shots, timestamps, camera, actions, dialogue, references, final prompt. A prompt is good when it leaves nothing important to chance and stays short and readable. Undefined seconds become improvised action, undefined speakers become swapped voices, undefined framing becomes a random camera.

## Steps

1. Idea. Work out who is in the scene, where, what happens and whether anything is said. If a detail is ambiguous (which location view, who speaks first) choose the sensible option and flag the assumption in one line after the prompt, never as a question before it.
2. Shots. Decide how many shots the idea needs; that is the directing and it is your job, not the creator's. One clear action per shot, 3 to 5 seconds a shot.
3. Timestamps. Default 15 seconds. If the creator names a length, rebuild the scene for that length (fewer shots, tighter dialogue), never a squeezed copy. Roughly: 1 to 2 shots for 5 s, 2 to 3 for 10 s, 3 to 4 for 15 s, 4 to 6 for 20 to 30 s. The timestamps tile the duration exactly: first shot at 0:00, last shot ends at the duration, no gaps.
4. Camera. For each shot give the size (wide, medium, close-up), angle (eye level, low, high, over the shoulder), movement (static and a slow push-in are the workhorses) and composition (what dominates the frame, foreground, background). Mark the transition into every shot after the first: `CUT TO:` for a hard cut, `CONTINUOUS,` when one camera move carries across. Keep compositions simple: one clear subject, clean silhouette, no mirrors, no crowds, no intricate hand work.
5. Actions. Block the characters like a stage director: where each one is, what they do, where they look, how they move. Eyelines and small physical business sell the acting. Present tense, concrete verbs. Describe what changes (expression, pose, a temporary prop), never the baseline design the attached sheets already carry.
6. Dialogue. Every line sits inside a timestamp block, about 2 words per second of the shot, and some shots stay silent. Write each line as `Name (voice line from the bible): "..."` so voices do not swap. Characters with no voice never get dialogue; their barks and beeps go in the action text.
7. References. Attach only the sheets this scene relies on: every character on screen, the one location view closest to the master framing, props that have sheets, in that order, at most 4 (drop a prop first if there are more). Name each sheet once in the prompt and name nothing that is not used.
8. Final prompt: one block in the format below, then the settings, then at most a line or two of flagged assumptions.

## Format

```
SCENE: <short title>
DURATION: <N> seconds
STYLE: <visual style line from the bible>

[0:00-0:04] <SHOT SIZE, angle, movement>. Composition: <what dominates the frame>
<Blocking and action: who is where, doing what, looking where.>
Name (voice line): "<line>"

[0:04-0:09] CUT TO: <next shot>   (or CONTINUOUS, when the camera carries across)

Characters, costumes, objects and lighting exactly as in the reference images. Only <names> speak; <no-voice characters> never talk. No on-screen text, no captions, no watermark.
```

Generation settings in Subclip: `generate_ai_media` `kind: "video"`, `durationSeconds`, `aspectRatio` from the bible, `generateAudio: true` when the model should speak the dialogue, sheets in `sourceAssets` with `role: "reference"` in the order above. Aspect, duration and model are settings, not prompt text.

## Hard rules and why

- Timestamps tile the whole duration, because unclaimed seconds get improvised.
- Every dialogue line carries the speaker's name and voice line; one unlabeled line in a two-character scene is how voices swap.
- About 2 words per second; a 4 second shot holds one short sentence.
- One location per generation. A brief in-scene transformation is fine when it is the story beat; a sustained move to a second place is a separate scene.
- At most two characters actively doing things per shot; others may be present but passive.
- The reference list names every sheet the prompt relies on, once, and nothing unused.

## Worked shape (quality bar)

A 15 second scene where a teen finds a strange golden remote in the sofa, presses the red button and lands in a dinosaur jungle, with his pug watching. Four shots: a wide of him digging (with one dialogue line), a close-up push-in on the hand pulling out the remote (one line, the dog barks off screen), a continuous pull-back to a medium as he presses the button and white light floods the room, then a low-angle wide where the sofa sits tiny in a jungle with a dinosaur head rising behind it and one last dry line. Notice: the jungle has no sheet because it is a one-off payoff; the dog has no voice so its barks live in the action text; shot three has no dialogue because the action is the line; the continuous pull-back binds the find to the button press as one gesture while hard cuts frame setup and payoff; the location change is allowed because the teleport is the joke.

## Bigger than one scene

When the creator describes an episode (several locations, a chain of beats, more than about 30 seconds), split it into numbered scenes. Each scene is a self-contained prompt with its own duration, timestamps, reference list and settings, delivered one at a time (the creator says "next"). Never cram an episode into one generation; consistency comes from the shared sheets, not from one giant prompt. Number the clips in order.

## Checks before generating

- Is every speaker named with the voice line, and is each line short enough for its shot?
- Do the dialogue words fit the seconds (about 2 words a second)?
- Does each shot say one thing happens?
- Are only the needed sheets attached, in order (characters, location, props), at most 4?
- Did you repeat the style line exactly as in the bible?

## When a generation goes wrong

Change as little as possible. The value of the sheets is that every iteration builds on the same base instead of rolling new dice.

| Problem | Fix |
|---|---|
| Voices swapped or mixed | A dialogue line lacks its name and voice line. Find it, label it, regenerate; do not rewrite the scene |
| A character drifts (wrong jacket, new colors) | Confirm the sheet is attached and the character is named at first mention in the failing shot; add one clarifying detail to that shot ("in his red hoodie") rather than re-describing the design |
| Two characters merge | Give each a screen side and a distinct action |
| One shot is wrong, the rest is good | Rewrite only that shot, keep every other line verbatim |
| Small glitch at the very start or end | Trim it on the timeline instead of regenerating; a trim is free, a regeneration is a new roll |
| A location plate shows a character | The empty-plate guard was missing; regenerate the sheet with it |
| "Make it N seconds" | Keep the story, rebuild the shot plan, re-tile the timestamps, shrink dialogue to the word budget |
| The background changes mid scene | Attach the location sheet and say the camera never leaves the room |
| The platform pushes a photoreal preset | Decline it; the style line is the style |
