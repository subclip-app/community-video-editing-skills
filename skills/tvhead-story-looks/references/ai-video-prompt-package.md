# AI-video prompt package (Phase B)

Reference: `examples/17-ai-video-package.mp4` (a real 10 second clip made from the prompt below with `p-video`, 24 credits).

## What it is for
Standalone prompts of about 10 seconds each, so a video model can make the whole story with one character, one voice and one style across clips. Use it when the creator wants a generated video instead of stills, or wants prompts to paste elsewhere.

## The package
One file per language with a **global continuity** block, then **one prompt per 10 second clip**, then a stitching guide. Cut the story at sentence ends near each 10 second mark (within 3 seconds), else at a scene cut, else at a word gap.

### Global continuity block
- Format, length, look.
- **Style anchor:** the frozen look paragraph from the look's file.
- **Voice block (verbatim in every clip):** one off-screen narrator, gender, age feel, pitch, pace, accent, no second voice.
- **Music lock:** the same underscore description in every clip (for example soft ambient pad, no drums).

### One clip prompt (fill the brackets)

```text
Output: about [10] seconds, [16:9 or 9:16], 720p, synchronized audio.
Style: [STYLE ANCHOR, frozen]
Environment: [place in ordinary words]
Characters: [CAST CARD per character: shape, colours, clothes, in words not hex codes]. Repeat these exact designs; no other characters.
Composition: [left-center-right staging for 16:9, or vertical depth and a clear lower fifth for 9:16]
First frame: [continues from the previous clip's ending, or the opening state]
Timed visual beats:
- [0 to 3 s] (VO: "[exact words]"): [what happens, one action]
- [3 to 7 s] (VO: "[exact words]"): [escalation]
- [7 to 10 s] (VO: "[exact words]"): [payoff and hand-over]
Audio: voiceover only, no speech bubbles. Exact narration, do not add, omit or repeat words: "[all words of this clip]"
Voice: [VOICE BLOCK, frozen]
Music: [MUSIC LOCK, frozen]; synchronized crisp sound effects on physical actions; voice-first mix.
Final frame: sets up the next clip: [what the next clip opens on].
Negative constraints: no photorealism, no extra limbs, no changed proportions or line weight, no unintended characters, no visible words, letters, captions, subtitles, logos or watermarks, no speech bubbles.
```

Rules that keep it consistent:
1. Name colours in words (vivid red, warm gold); video models print hex codes into the picture.
2. Repeat the style, cast, voice and music blocks word for word in every clip.
3. Put the exact narration in the clip; end the clip on a sentence end so cuts do not split a word.
4. A clip's last frame names the next clip's opening state.
5. Keep three beats per clip: set up or inherit (0 to 3 s), escalate (3 to 7 s), pay off and hand over (7 to 10 s). A visible change every 2 to 3 seconds.
6. Narration of about 20 to 25 English words per clip.

## Subclip route
1. `list_ai_models` with kind video. Pick a model that makes audio with the picture when the voice should come from the clip (for example `p-video` at about 2.4 credits a second at 720p, or `seedance-1-5-pro`, `ltx-2.5-fast`, `veo-3.1-fast`; check the live catalog, the live list wins). A silent model (`p-video-2`, `wan-3`) needs a separate voice from `generate_local_speech`.
2. `estimate_ai_generation` for one clip, then the whole package. Show the table: clip, model, seconds, credits, total plus retakes. Wait for a yes.
3. Generate one clip first and check the character, the voice and the style before the rest. `generate_ai_media` with `confirmed: true` only after the yes.
4. Import with `import_ai_operation_to_timeline`, trim each clip at its sentence end, crossfade the audio for a few frames at each join.
5. If the clips drift, regenerate from the previous clip's last frame as a start frame (models with a start frame input) instead of describing the character again.

## Credit cost note
About 2 to 5 credits per second depending on the model: a 60 second story is 120 to 300 credits for 6 clips. The proposal and the prompt text cost nothing. The stills route (Route A) is much cheaper.

## Upstream source
Adapted from the original author's prompt module in tvhead-studio (Vladic20, MIT):
- [template/lib/director.mjs](https://github.com/Vladic20/tvhead-studio/blob/main/plugins/tvhead/skills/tvhead-video/template/lib/director.mjs)
- [references/story-api.md](https://github.com/Vladic20/tvhead-studio/blob/main/plugins/tvhead/skills/tvhead-video/references/story-api.md)
Repository: https://github.com/Vladic20/tvhead-studio
