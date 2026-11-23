# Phase 3: The prompt sheet

The script already fixed each clip's line, gesture and overlay. This phase checks them, dresses each clip with a camera and a voice, and writes one finished block per clip. In Subclip the blocks are not pasted into an outside tool: they are the exact inputs you use in Phase 5. The creator can also copy them to another tool if they prefer.

## What one clip is made of

An avatar video model takes a portrait, a speech file and a short movement prompt. So each clip has three parts:

| Part | What it is | Where it comes from |
| --- | --- | --- |
| Avatar image | one portrait, the same in every clip | Phase 4 or the creator's image |
| Speech | the clip's line, spoken | Subclip speech or local voice, made first |
| Movement prompt | camera, gesture, expression, the pose | this phase |

Some video models (an image to video model with its own audio) take the line inside the prompt instead. Use that only when the live catalog says the model makes speech itself, and then also write the voice and accent line (see "Voice and accent" below).

## Step 1: verify the clips

Check once more, with fresh eyes:

- every line is spoken (no empty `Says:`)
- the word count fits the voice pace from `script.md`
- no clip needs a duration the chosen model cannot make (the avatar models in the catalog take their length from the speech file)

If something breaks, fix it and say so in your summary. Keep the spoken text otherwise identical to the script. Change a line only for a real reason (a name the voice will mispronounce, a stumble) and name the change.

## Step 2: pick a camera per clip

Use one workhorse camera and change it two or three times where the script changes gear: emphasis beats go still, the call to action goes tight on the face. The portrait's pose limits the options: a mid-stride photo wants a tracking shot, a seated or standing one wants still or a push-in. Locking a walking portrait to a static camera makes the model ignore your camera or freeze her.

Movement prompt wording (write them in plain English, one or two sentences):

| Camera | Wording |
| --- | --- |
| Still with life (default) | "Static camera. Natural arm movement and small facial movements." |
| Locked tripod | "Locked-off shot on a tripod, no camera movement." |
| Slow zoom to the face | "Slow steady push-in toward her face over the whole clip, then hold on the close-up." |
| Subtle handheld | "Very slight natural handheld movement, like a phone held at arm's length." |
| Gentle push-in | "Almost imperceptible slow push-in from medium shot to medium close-up." |
| Pull-back reveal | "Starts tight on her face and slowly pulls back to show her and the product." |
| Slow orbit | "Camera circles slowly around her, small arc, she stays centered." |
| Depth of field | "Shallow depth of field, background softly out of focus, she stays sharp." |

For a selfie-style portrait use still or subtle handheld; the selfie framing already reads as real.

## Step 3: gestures

One micro-action per clip, placed where the line needs it. Say what her hands do and when, in plain words. Examples:

- before speaking: "holds the product up to the camera, then looks at the lens"
- while speaking: "counts three items on her fingers"
- after the line: "gives a small shrug and half smiles"

Keep gestures small and physical. Large or fast hand moves are where avatar models fail. Do not ask for text to appear in the picture; add text in the timeline.

## Voice and accent

If the speech comes from a Subclip speech model or a local voice, pick the voice from the image (age and gender, they must match, see `subclip-tools.md`) and keep the same voice id in every clip. Approved voices go through `get_voice_samples` and `set_approved_voice`. If the model makes its own speech from the prompt, write the voice line once and repeat it word for word in every block, for example:

"Voice: a woman in her early thirties, medium pitch, calm and friendly, natural conversational pace. General American accent."

Build any voice from: gender and age, pitch (deep or bright), texture (smooth, soft, slightly raspy), delivery (calm, energetic, warm, authoritative). If the market language is not English, name the language and the regional accent.

## Output: the sheet

Write it as a Markdown document (also saved with `update_project_director_brief` as a short note). A header, then one block per clip, nothing else.

````markdown
# Foldmug | The mug that takes half your bag | prompt sheet

Avatar image: nora.png (same file in every clip)
Voice: elevenlabs-flash-v2.5 preset voice "Rachel" (female, matches the avatar), same in every clip
Model: p-video-avatar, 720p. 3 clips, about 15.7 s.

### Clip 01 | hook | 4.5 s

Speech: "Your travel mug takes up half your bag, but this one folds completely flat."
Movement: Static selfie framing, subtle handheld. She holds the small navy mug up toward the camera and looks at the lens, relaxed natural gestures.

### Clip 02 | demonstration | 6.8 s

Speech: "Press the sides down and it becomes a little disc. Pull it up, and it is a full cup again."
Movement: Static selfie framing. She looks at the camera, glances down at the mug in her hand while speaking, calm hand movements.

### Clip 03 | call to action | 4.4 s

Speech: "Mine lives in my tote now. If your mug is too bulky, the link is below."
Movement: Static selfie framing. Friendly smile, small nod, mug held near her chest, looking at the camera.
````

Rules for the blocks:

- Each block is complete: the creator can run it without joining anything.
- No brackets, no placeholders. Resolve every unknown before writing the sheet and flag what is still open in your chat summary, not inside the file.
- The spoken line is in straight double quotes, exactly as in the script.
- Voice, avatar image and model repeat identically in every block.
- Overlays (a screen recording, a product close-up) never enter a block. They are added on the timeline over her voice in Phase 5.
- After the sheet, show the quote table (see `subclip-tools.md`) and wait for the creator's yes before any paid step.
