---
name: earshot
description: Sound effects from plain words for a Subclip video. Say what you need (UI click, whoosh, riser, impact, typewriter, notification, ambience), and the agent finds or makes it with search_public_audio, optional audio models from list_ai_models, or the optional local earshot engine (asked first), then places it on the timeline at the cut with levels, ducking and fades. Use for "add sound effects", "sound design", "whoosh on the cuts", "make this feel less silent".
---

# Sound effects from words

Give a video its sound design from plain requests. You cannot hear audio, so you work from named recipes with exact levels and timing, place every sound on a frame-accurate cue, and tell the creator what needs a listening check.

Safety rules for this skill: it needs no API keys, never installs or runs anything without an explicit yes from the creator, and never spends credits before quoting them. Tool schemas in the live catalog win over this text.

## The idea

A sound effect has a name (what it is), a job (what the picture does at that moment) and a few numbers (length, brightness, size). Ask for it in those words, for example "a short soft UI click, 80 ms" or "a 3 second riser that ends on the logo frame". Three ways to get it, in this order:

1. **Subclip library, free.** `search_public_audio` with the recipe words (source `sfx` first, then `all`). Import with `import_public_asset_to_timeline`, passing `startTime`, `volume`, `query` and the returned `attribution`.
2. **Subclip generation, costs credits.** Call `list_ai_models` for kind `audio` or `sfx`. Only if a sound-effect model is listed, quote it with `estimate_ai_generation` and `get_ai_credit_status`, get approval, then `generate_ai_media` and `import_ai_operation_to_timeline`. If none is listed, say so and use route 1 or 3. Music beds use `generate_music`.
3. **Local code synthesis, free, optional.** The open-source earshot engine renders sounds on your own CPU from the same plain words, with no audio model. See `references/local-engine.md`. Ask first: it needs a one time install on the creator's computer. Import results with `import_external_media`.

How earshot-style synthesis works, so you can reason about sounds you cannot hear: it ranks a catalogue of designs against your words (the thing, the job, feelings like "darker", numbers like "400 ms"), renders a fresh take of the best one (layers of noise, tones and real recorded parts, each with an envelope and a filter that moves), and checks it for clicks, cut tails and clipping. Quality comes from layers, movement and timing, which is also what the recipes teach.

## Workflow

1. **Read the picture first.** `get_project_outline`, `get_media_context` (with contact sheets), `get_timeline_contact_sheet`. List the cue points: cuts, on-screen actions (clicks, typing, pop-ins), reveals and the end card. Keep the same project ID on every call.
2. **Write a cue sheet** before touching audio: one row per cue with time in seconds, recipe name from `references/recipes.md`, length, level. Most motion needs no sound: skip anything where nothing visibly happens. Show the sheet to the creator. Aim for sound from the first second, a steady body and a landing ending.
3. **Pick the route** per recipe (library first). Name credit costs and any install before doing them. Ask once, remember the answer.
4. **Place sounds.** One timeline edit at a time. Import at the cue time: the sound's loudest moment must land on the frame (a whoosh starts 0.2 to 0.6 s before the cut, an impact starts about 0.2 s before its frame, a click lands on the press). Then `update_audio_item` for volume, fades and pan. Details and levels in `references/subclip-mixing.md`.
5. **Mix.** Voice and music keep their own items. Duck the music, keep effects under the picture, vary repeated sounds (different takes, small level and timing changes), never the same whoosh on every cut.
6. **Verify by looking at the sound.** Call `get_audio_timeline_sheet` (Subclip native, read-only, no install) for the whole project or a window (`startSeconds`, `endSeconds`, up to 300 s). Read it as below, fix what the warnings name, then call it again for the changed window. Also `view_current_frame` at a few cue times. Say plainly what only a listening pass can judge (taste, harshness) and ask for one. Export only when asked.

## Reading the sheet

`get_audio_timeline_sheet` returns one image and a JSON summary built from the real decoded audio (item volumes, speed, trims and fades applied, muted items left out).

- **Lanes**: voice, music, effects, other, each item with its name, time range and true waveform. Check that every cue in your sheet exists in the effects lane at its time, that voice is not buried, and that nothing runs past the end.
- **Cut marks and green ticks**: orange marks are visual cuts, green ticks are moments a new sound starts. `cutSync.percentInSync` is the share of cuts with a new sound within 100 ms; `cutSync.missing` lists the cuts without one and the nearest sound. Aim for the cuts that matter (scene changes, reveals) at 70 percent or more; not every cut needs a hit. Move a sound with `update_audio_item` or add one from the recipes.
- **Mix and spectrogram**: a red band is clipping, a shaded band is silence. Dense full-height blocks mean overlapping loud sounds; an empty spectrogram band mid-video is dead air.
- **Loudness curve**: short-term LUFS against the -14 and -16 lines. Aim for an integrated -14 to -16 LUFS with `peaks.truePeakDbTP` under -1. Large swings between the opening and the body, or a drop at the end, are mix problems.
- **Warnings**, with the usual fix: `true-peak` or `clipping`: lower the loudest items (volume, not the master); `long-silence`: add a bed, room tone or an effect, or tighten the cut; `overlapping-effects`: stagger or drop one; `music-too-loud` (voice under 4 dB above music): lower the music or split and duck it under the voice; `music-barely-audible` (over 25 dB): raise it a little; `loudness-off-target`: scale the music and effects together; `cuts-without-sound`: add whooshes, hits or music accents on the listed cuts.

The tool measures but does not hear: it cannot tell a pleasant whoosh from a harsh one, and loudness assumes a centred stereo mix. For deeper event labelling (which sound is which), the optional local engine can render the same kind of sheet with named events; see `references/local-engine.md`, only after the creator agrees.

## Recipes

`references/recipes.md` holds the library: UI click, whoosh, riser, impact, typewriter, notification, ambience. Each has search words, a plain-words request, synthesis parameters, timing and level. Use the search words for the library, the request for generation or the local engine, and the parameters to judge results.

## Capability reference

A 12 second clip made with this skill in Subclip (route 1, library sounds only): `examples/sound-design-reference.mp4`. Soft typing under the prompt, a UI click on the button press, a whoosh whose peak lands on the cut, a riser into an impact on the reveal and a chime on the confirmation, over a quiet music bed, about -17 LUFS with peaks under -1 dB. `examples/sound-design-reference-sheet.jpg` shows one frame per second, and `examples/audio-timeline-sheet.jpg` is the `get_audio_timeline_sheet` image the agent read to check it (both cuts in sync, no warnings). Use them as the target for cue density, timing and levels.

## Do not

- Do not run `pip`, `npx` or any script on your own. Ask, show the exact command, wait for yes.
- Do not request, store or paste API keys. None are needed.
- Do not put a whoosh on every cut or a hover sound on everything. Do not make effects louder to make them better.
- Do not claim you heard a sound. Report what the sheet shows (levels, times, sync percent) instead.

Adapted for Subclip from https://github.com/Leonxlnx/earshot by Leon Lin, MIT
