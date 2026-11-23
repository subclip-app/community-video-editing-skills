# Talking object ad (`/talking-object`)

A video ad whose engine is an animated character talking to camera. The character can be a person, an animal, a creature, or a product, ingredient, organ or molecule that has been given a face and a voice. One character or several, a short hook or a full ad. Two things are always true: it is animated (not photoreal) and someone is talking. A real, photoreal person talking to camera is live action UGC, which is a different thing.

These are "yapping" videos: a character delivers a script and the visuals make the script land and hold attention. The look is a tool, not the point. A character worth watching says something worth hearing while the picture tells the story. An unexpected character (an ingredient, an object) often helps but is not required; an animated person or animal is just as valid if it fits.

Fundamentals: every generation is self-contained (re-describe and re-attach whatever must stay the same); reference images are role-labelled in the prompt (say which attached image is which); spoken lines go in the prompt in quotation marks with a stated voice emotion, in plain easy-to-pronounce words.

Two modes: a standalone hook, or a full end-to-end ad. It also applies when the creator shares a reference video that turns out to be an animated talking-character ad and wants that format for their brand (look at it with `get_media_context` and compare to this method).

## The core idea

- Every character has a face and can emote. A person or animal already is a character. An object, product, ingredient, organ or molecule must be anthropomorphized: eyes, a mouth and a way to gesture, and a decision about where the face lives (a jar with eyes on the label and a mouth below, a pill whose dent is the mouth, a molecule whose central atom is the head). If it cannot look at camera and emote, it is not a character yet.
- Do not over-bias to the exotic. Pick what carries the message.
- Rendering style is a swappable skin: Pixar-like 3D, claymation (see `claymation.md`), watercolor, paper craft (see `paper-animation.md`), Lego and others. Pick one per video, hold it for every plate, picture and clip, and put the style one-liner first in every prompt.
- The visual is the proof of the line. A viewer should understand the message with the sound off.
- Never static. A character standing still and talking is dead air; every beat moves, and beats hand off with intentional transitions, especially between characters.

## Pipeline (order matters)

1. Design the character or characters: a clean character plate (alone, neutral pose, plain background, chosen style), one per character, iterated until loved. It is the reusable source of truth for the look. Do not skip it and generate each beat from scratch, or the character drifts.
2. Write the script, pick the hook, storyboard. Choose a script variation and a tone, write one line per beat, choose the visual hook (the first frame, before a word, must stop the scroll with sound off), then storyboard each beat: environment, character action, framing.
3. One start frame per beat: attach the plate and render that character in that beat's environment doing that beat's action. Several characters in a beat means several plates attached.
4. Batch beats into clips. Group consecutive beats into one multi-reference generation up to the model's limit (about 15 seconds), attach each beat's start frame and address each one.
5. Assemble the clips into the hook or ad on the timeline (`subclip-assembly.md`).

Pace follows the script: fast and punchy, no monologues, no fixed beat length. Estimate runtime by reading the script aloud, pausing at each full stop, then add breathing room. AI voices run slower than you expect, so err longer.

## Rules

### R1. A face that can emote, in a layered design prompt
Write the plate prompt in layers: style plus subject plus two or three defining adjectives, then body form, then color and texture, then face, then limbs, then a pose with active intent. Push the design slightly past the obvious. Good: "a friendly tallow jar character with large expressive eyes on the upper label, a wide mouth across the lower label and short stylized arms, Pixar-like 3D, plain background". Bad: "the jar, animated" (no face, no emoting).

### R2. One plate, re-described and re-attached every beat
Each beat's start frame attaches the plate and restates the character's anatomy and style (shorter is fine after beat 1) next to the new environment and action. "The same character as before" means nothing to a model.

### R3. Batch start frames into one clip, role-label every reference, write the line in
In Subclip use `generate_ai_media` `kind: "video"` on a multi-reference capable model with the start frames in `sourceAssets` and the lines written in the prompt with a voice emotion. Backbone: style one-liner, role-labelled references, time-blocked beats, camera, dialogue.

```
<Style one-liner>.
Image 1 is the start frame of beat 1 (jar in the nursery, facing the mother).
Image 2 is the start frame of beat 2 (jar on a stylized skin cross-section).
[0-5s] Beat 1: the jar turns to camera and says, in a warm reassuring voice: "<line>". The mother reacts behind it. Cut to:
[5-10s] Beat 2 (from image 2): the jar points at cracks in the skin barrier, particles drift upward, the walls react. Slow push-in.
Camera: gentle handheld feel, one push-in in beat 2. No captions. No music.
```

Ratio, resolution, model and duration are settings, never prompt text. Default to native dialogue written into the prompt. Only for lines with unusual words that the model would mangle, generate the voice first with `generate_speech` (see `get_voice_samples`) and attach it for the video model to lip sync over (`audio_reference` when the model accepts it). Bad: attaching three images without saying which starts which beat, or cramming far past about 15 seconds into one generation. Quote and get approval before the clip run.

### R4. Move every beat: the three-layer rule
Each beat needs at least two of three motion layers at once, three is better: the camera (orbit, push-in, pull-back, whip pan, tilt), the character (enters, leans, gestures, performs the action of the line), the environment (walls respond, particles radiate, light shifts). Choose the entrance direction, the action, the camera move and the environment reaction per beat, and choreograph hand-offs between characters instead of hard cutting between two static heads.

### R5. The character carries the brand; the setting can travel
Palette, mood and light are brand signal, not defaults. Read the brand (site, packaging, product page) before designing and lock that DNA at the plate: a soft pink brand gets a peachy palette and a gentle world; a bold masculine brand gets deeper saturation and harder rim light; a premium clinical brand gets cool clean whites and sharp light. The setting then changes freely per beat while the character stays on brand. Intentional contrast (a villain, an ugly "before" state) is the one exception. Do not give every brand the same dark studio with blue rim light.

### R6. The visual is the proof of the line
Read the line and ask what it would look like if you could see it happen. "I seal the holes in your gut wall" shows hands pressed to the wall and cracks closing; "I calm the inflammation" shows cool light pulsing out and red walls turning healthy pink. Environment reactions are literal metaphors, never decoration. Do not show "I increase blood flow" in a neutral studio with nothing happening.

## Script layer

Core structure: "I am X. I do Y. So Z." Each character names itself, states its mechanism, then states the consequence for the viewer. It works for one character or twenty, each "I am X" is a reveal moment, and mechanism plus consequence is credible. Write consequences as visceral, visible effects ("I seal the holes so toxins stop leaking into your blood"), because every line has to become a picture; abstract benefit language gives the visuals nothing to show.

Three proven variations:
- Pure introduction: positive only. Each character introduces itself, its job and its benefit; the closing character or the packaging delivers the call to action. For premium brands, awareness and ensemble ingredient casts.
- Problem then solution: open by agitating a real problem (voiced by a narrator, the product or the body, not a villain), then the solution characters arrive and "I am X" kicks in. For cold audiences and scroll-stopping hooks.
- Villain to hero: the problem is a villain who speaks first with the structure turned negative ("I am X, I am the reason you suffer"), a dramatic transition, then the hero answers with the positive version. For maximum drama and entertainment-first content.

Tone: pick one register before writing and hold it (calm specialist crew, quiet ancient defenders, the unbothered fixer, frustrated and direct, exhausted but hopeful). Offer a few options with a vivid analogy each, then lock one.

Hook: the visual hook (first frame, sound off) and the verbal hook (first line names the viewer's exact problem or desire). Brainstorm both on purpose; never default them.

## Character types (where the face lives)

Anthropomorphized ingredient or molecule; object or product; packaging (often the closing hero that delivers the call to action); body part or organ; a person or animal rendered in the chosen style.

## Subclip notes

- Voice: `get_voice_samples`, then `generate_speech` (or `generate_local_speech` for a test). Character voices need a clear style instruction.
- If no talking capable model is offered by `list_ai_models`, show the object with the voice over it and use small `add_media_keyframe` moves, and say so.
- Do not make health claims through an organ or ingredient character unless the creator has proof.
