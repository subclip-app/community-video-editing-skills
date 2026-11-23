---
name: trendjack-animator
description: Make the animated ad formats that are trending right now (vertical 9:16, 15 to 45 seconds, longer on request) inside Subclip with an audio-first clock - drama song ad, product song, narrated cartoon story, 3D how-it-works explainer, skeleton or X-ray demo, photoreal phone-footage clone - in looks like 3D animated film, claymation, watercolor, paper cut-out, felt, anime, collage or motion graphics. Writes the lyrics or script, makes the song or one continuous voiceover first, measures word timings, locks characters and product with approved plates, makes one still per line, animates clips, adds captions in the app safe zone and assembles an editable timeline. Use when the creator asks for an animated ad, song ad, jingle, cartoon ad, animated explainer, skeleton or X-ray ad, claymation, watercolor, felt, paper or anime ad, "that trending animated format", or an AI version of a real creator video.
---

# Trending animated ads (Subclip edition)

One skill for every animated ad format that is working in the feed. The creator picks a format and a look. You write the words, make the audio first, measure it, plan one shot per line, make approved reference plates, then stills, then clips, then captions and an editable Subclip timeline. Everything runs through Subclip's own tools and AI credits. No outside API keys, no scripts.

## Capability reference

Watch `examples/capability-trending-animated-ad.mp4` (about 25 seconds, 9:16). It is a made-up product ad (a fictional lamp brand) built the way this skill builds one: a sung line per shot, a picture per line, word-synced captions in the safe zone. `examples/` also has the plate sheet and three of its stills.

## The mechanism: the audio-first clock

Most AI animated ads are made picture-first and the voice is squeezed over them. Here the audio comes first. The song or ONE continuous voiceover is made, its word timings are measured, and those timings are the clock. Every shot starts and ends on a line of the audio, so each picture shows what the viewer hears at that moment and cuts land on words. Nothing is sped up or slowed to fit.

Three locks keep it one film:

- **Plate lock.** One approved reference picture (a plate) per recurring character, per product (from real photos) and per place that comes back. Every still is made with its plates attached.
- **Product lock.** The real product photo goes into every shot the product is in, with real sizes written in the prompt.
- **Safe-zone lock.** Every caption and overlay sits where the app interface leaves the frame clear: x 71 to 1027 and y 347 to 1426 on a 1080 by 1920 frame, and below y 868 only x 71 to 886.

## Words used

A **still** is one generated picture per shot. A **clip** is a still animated into a few seconds of video. A **plate** is an approved reference picture (character sheet, product, place). **Lip-sync** means the mouth moves with the audio.

## Before you start

1. `get_project_outline` if a project exists, else `create_project` with a portrait 9:16 canvas. Use the same project ID on every call.
2. Media context first: if the creator attached a product photo, a trending reference ad or footage, use `get_media_context` (and `list_media_without_context` then `generate_media_context` for the rest) before new analysis. Never claim to have seen or heard media from a filename.
3. Ask once which image route to use: the creator's own Codex CLI (images, no Subclip credits) when it works, else Subclip `generate_ai_media`. The Grok CLI may also animate clips. Respect a prior choice. Files from a creator CLI come in with `import_external_media`.
4. `list_ai_models` for image, video, audio (music) and avatar kinds, `list_ai_voices` for speech, and `get_ai_credit_status`. The live catalog wins over any model name written in these files.
5. One timeline edit at a time. Generation jobs may run together inside the approved budget.

## Rules for every stage

1. **Cost before spend.** Before every paid step quote model, number of outputs, durations, settings and the total from `estimate_ai_generation` plus the retake allowance (about 15 percent). Wait for a clear yes. "Make the ad" is not a yes to spend. A bigger bill or a retake needs a new yes. Stop on credit or storage limits.
2. **Audio first.** Song or voiceover first, word timings next, shots last. The voiceover is ONE continuous take of all lines, never one clip per line.
3. **Plates first, a hard gate.** No approved plate means no still. A new or changed plate is shown and approved again, also after "do everything".
4. **Still first, on any video model.** Every clip starts from the still of that exact shot. A character sheet is never a start frame (the first seconds would show the grey sheet).
5. **No names in prompts.** Describe people ("the woman in her 40s with a grey bob and a green cardigan"). Models print names into the picture. Names live only in your notes.
6. **Camera first.** Every clip prompt starts with `Camera: <move, speed, start to end framing>` then one real action. Never "static camera" (except a locked camera when text must stay readable inside a clip).
7. **Never change clip speed, never reuse footage.** Clips are only trimmed. A stretch of a clip is used once. Two back-to-back parts of one action are fine.
8. **Safe zone and captions.** 2 to 4 words per caption, one line, white, one size for the whole video, no commas, periods or quotes, never over a face or the product, no logo or price burned in.
9. **Claims.** Only what the product page and the creator's notes support. Never invent numbers, reviews or customer counts.
10. **Lip-sync is allowed.** 1 or 2 lip-sync shots per ad (close-up, face clear), the rest acted B-roll. Never lip-sync another character's quoted line to the narrator's voice.
11. **Never play audio out loud for the creator and never claim you heard it.** Check words through transcripts and tell the creator what still needs listening review.
12. **Check before "done".** Read the contact sheet and the QA frames yourself, fix what is wrong, then hand over. See `references/qa.md`.

## Workflow

Read the matching reference at each stage. The full step list is in `references/workflow.md`; the tool mapping, models and budget are in `references/subclip-tools.md`.

1. **Intake.** One message: product page and clean photo, real size in cm, who buys it, language, price and offer (or "no offer"), three things the ad must never claim. Save to the project brief with `update_project_director_brief`. Length and cast gate: 15 to 45 seconds and 1 to 3 characters by default; over 90 seconds or more than 4 characters only after the creator confirms long-ad mode (see workflow).
2. **Format and look.** Offer the format (`references/formats.md`) and the look (`references/looks.md`), each with a recommended option. If the creator brings a trending reference ad, break it down first: its lines, its cuts, sung or spoken, then pick the matching format.
3. **Script.** Three options in the format's shape. Show lines in the target language and English. Plan 80 to 90 sung words a minute or about 150 spoken words a minute.
4. **Audio first.** Sung: `generate_music` with custom lyrics (see tools reference; if no model gives a clean sung take, say so and let the creator choose a path: another music model, their own song file, or `search_public_audio` for a licensed track). Spoken: `generate_speech` (voice picked from samples) or `generate_local_speech` for a free test. Then `transcribe_project` per audio item for word timings.
5. **Shot plan.** One shot per line or phrase, 1.2 to 2.7 seconds, back to back on the real timings. Cut grid and spend plan before any paid image.
6. **Plates, then stills.** Approved plates, then one still per shot with plates attached. Contact sheet and plate sheets approved before any clip.
7. **Clips.** Animate from the stills, one action per clip, 1 or 2 lip-sync shots. Import with `import_ai_operation_to_timeline` and `replaceItemId` set to the shot's still.
8. **Assemble and caption.** Audio on the timeline, shots trimmed to the clock, captions in the safe zone, optional quiet sound effects, loudness balance.
9. **QA and hand-over.** `references/qa.md`. Export only when the creator asks.

## Files

| File | What it covers |
| --- | --- |
| `references/formats.md` | The six formats, their beats, lyric and voice rules, genre by buyer |
| `references/looks.md` | Eleven looks with the exact look lines and what to watch |
| `references/workflow.md` | Stage by stage: gates, cut grid, plates, stills, clips, long ads, hooks, fixes |
| `references/subclip-tools.md` | Subclip tool and model mapping, assembly steps, budget formula |
| `references/qa.md` | Every check as a manual step, and the common fixes table |

## Wrap up

Record decisions, models and credits spent with `update_project_director_brief` and `write_session_summary`. Say what you checked, what you could not (pronunciation, taste, music), and where the project is.

Adapted for Subclip from the "trendjack-animator" skill by Agent Chad (https://agentchad.io/), itself adapted from drama-song-ad (https://github.com/holy-templar/drama-song-ad, MIT, Maxfusion AI s.r.o). License: MIT.
