# Phase 2: Script

One script per chosen angle. Re-read the angle's hook and mechanism before writing.

## The governing rule

Every clip is the avatar speaking to camera. The avatar video model animates one portrait, so a clip without her in it has nothing to generate. Product shots, screens, before and afters and demo footage are overlays that cut in over her voice, on top of a clip where she is already talking. Write her line first, the overlay second. This keeps the script and the prompt sheet one to one: script clip 3 becomes prompt block 3.

## Length: speech first, then the clip

In Subclip you make the speech before the video, so the audio length decides the clip length. Plan for 3 to 7 clips of 4 to 8 seconds each, 15 to 35 seconds in total. Fewer longer clips beat many short ones because each clip is one paid generation.

Pace by voice, and measure it, do not guess:

| Voice | Words per second |
| --- | --- |
| Cloud speech model with a natural delivery | about 2.2 to 2.8 |
| Free local voice | about 3.0 to 3.5 (it reads fast, so write fewer words) |
| A real creator's own recording | about 2.0 to 2.5 |

Count the words of each line, make the audio, read the real duration, and if a line runs past 8 seconds or under 3, split or trim the words before the clip is generated. Show the count in the script.

## Write it spoken

If you would not say it to a friend in a voice note, rewrite it.

> Spoken: "Writing tool. Image tool. Video tool. A scheduler. And a chatbot on top."
> Written: "Using separate platforms for writing, design and scheduling turns one post into a full day of work."

Use fragments, sentences that start with "and", counting things off, a little self-interruption.

## Rules

- Talk about the viewer ("you"), not the brand. The hero is the customer and their change.
- Hook in the first second: no greeting, no intro. A visual hook (what we see) and a text hook (on-screen words, under 8 words).
- One idea per clip. Show before you describe.
- Specific beats generic: "folds to 4 cm" beats "very compact". Round numbers sound made up. Never invent a number: leave `[data to fill in]` and resolve it with the creator.
- One dominant emotion for the whole ad.
- Order: hook, problem, (agitate), mechanism, proof or demo, concrete benefit, one call to action.
- One call to action, concrete and casual ("link is below"). Never two or three.
- Use at most two persuasion triggers (social proof, liking, authority, scarcity, reciprocity, commitment), and only true ones. Never claim a scarcity or a deadline that is not real.
- Tone: a voice note to a friend. It should look like content, not like an ad.
- The second line is the second place people leave. Give it as much care as the hook.
- No health, medical, income or other results you cannot prove. In a sensitive niche, lower the promise and raise the proof.

## Output format

```
TITLE: angle - product
AWARENESS: cold or warm | EMOTION: one word
AVATAR: voice and accent (from the image) 
RUNTIME: n clips, about n seconds

CLIP 1 | HOOK
  Says: "..."                     [n words]
  Seen: her posture and framing
  Gesture: one micro-action, or -
  On-screen text: "..."
  Overlay: footage that cuts in over her voice, or -

CLIP 2 | function
  ...

CLIP n | CALL TO ACTION
  ...

EDIT: pace, captions, music, when each overlay lands
WHY IT CONVERTS: one or two lines (angle, mechanism, trigger)
```

`Says:` is never empty. `Gesture:` and `Overlay:` often are.

## Self-review before showing it

1. Is every clip her speaking to camera, with a non-empty `Says:`?
2. Is each line short enough for its clip (count the words against the voice pace)?
3. Does every line sound spoken?
4. Does the hook stop the scroll in one second, in sight and in text?
5. Does it talk about the viewer, with an angle and, if there is one, the mechanism?
6. Does it match the awareness level, and say one thing per clip?
7. Is there a demonstration, not just adjectives?
8. Is there one call to action?
9. Is every claim something the creator can prove? Any `[data to fill in]` left?

Rewrite anything that fails. There is no gate after the script: go straight on to the prompt sheet in the same reply, script first. If no avatar image exists yet, say so plainly and infer the voice from the script, naming that assumption.
