---
name: video-translate
description: Translate and dub an existing video into another language inside Subclip, with the agent doing the translation, voices chosen per speaker, duration-fit checks, optional lip-sync, translated captions and multi-language versions. Use when the creator wants a video translated, dubbed, localized, voiced in another language, or delivered in several languages, with or without lip-sync.
---

# Video translation and dubbing (Subclip edition)

Translate and dub videos that are already on the Subclip timeline. The original skill called the HeyGen video translate API with an API key. Subclip has its own dubbing workflow, so this version needs no outside account or key: the agent translates, Subclip's voice models speak, and the dubbed audio lands on an editable timeline.

The engine is the installed `subclip-dubbing` skill (read it with `read_subclip_skill` first; its current rules win). This skill adds what the original taught: how to plan language versions, which options matter, and what makes a translation good.

## When to use

- Translate or dub one video into one or more languages.
- Keep it natural: fit the translated speech to the original timing.
- Lip-sync the speaker to the new audio (optional, paid).
- Audio-only translation with no lip-sync (the default and the faster, cheaper path).
- Several language versions of the same video.

Do not use this for a request to caption in the same language (use captions skills) or to generate a new narration for a script (use a text-to-speech workflow).

## Before you start

1. Identify one exact audible video or audio item. Call `get_project_outline`, `list_editor_assets`, then `get_media_context` with `includeContactSheet: true` for the clip. If it has no context, `list_media_without_context` and `generate_media_context`, then `describe_media`.
2. Ask only what is missing: target language or languages, lip-sync or not, number of speakers, terms to keep as written (brand names, product names), and whether to clone the original voice.
3. Check credits: `get_ai_credit_status`. Quote the total (see Cost) and get the creator's go-ahead for the quoted scope before any paid generation.
4. Work on a copy for several languages: `clone_project` for each language so the original stays intact. One edit at a time per project.

## Workflow (one language at a time)

Follow `subclip-dubbing` exactly. In short:

1. **Transcript.** Use an existing transcript if `list_reference_transcripts` has one for the source. Otherwise `transcribe_project` with `purpose: "reference"`. For two or more speakers use cloud mode with `detectSpeakers: true`, and tell the creator the speaker count you found.
2. **Workspace.** `create_dubbing_workspace`, then read every page with `get_dubbing_workspace`. Keep segment IDs, speaker IDs and timing windows unchanged.
3. **Translate yourself.** Write each segment into the target language and save with `update_dubbing_translations`. See the translation rules below.
4. **Voices.** Per speaker: `list_ai_voices` then `set_dubbing_speaker_voice` for a system or saved voice. Use `prepare_dubbing_temporary_voice` only when the creator explicitly asked to clone or match the original speaker. A plain "dub this" does not authorize cloning. Clone one speaker at a time and wait for each to finish.
5. **Generate.** `generate_dubbing_segments` in batches of at most 12. Wait for each batch to finish before the next. Do not regenerate completed segments.
6. **Check fit.** `get_dubbing_workspace` and read the measured duration ratios, not character counts. About 1.08 or less is a safe mild speed fit. Above that, shorten that segment's wording and regenerate only that segment. Never truncate speech.
7. **Commit.** `commit_dubbing_workspace` only when every segment is complete and you have reviewed the translations. It places the audio on the timeline and mutes the original source when replacement was requested.
8. **Captions.** If the source had visible captions, caption the dubbed audio in the target language as `subclip-dubbing` describes (`transcribe_project` with `allTimelineClips: true` and a base language code such as `es`, `fr`, `de`). Keep the caption style.
9. **Review.** Seek to several moments and call `view_current_frame` and `get_timeline_contact_sheet`. State clearly that the creator must listen to confirm pacing and pronunciation.

## Translation rules (the craft)

- Translate meaning and intent, not word by word. Keep names, numbers, dates, negations and calls to action exact.
- Use the workspace's `lockedTerms`, and the creator's keep-as-written list (the original's "custom vocabulary"). Brand and product names stay unchanged unless the creator wants them localized.
- Fit the timing. Many languages run longer than English. Prefer a shorter natural phrasing before paying for speech. Remove redundancy and choose shorter idioms; never delete a required fact to fit.
- A short translation may leave natural silence. Do not invent filler.
- Respect register: formal or informal address, regional variety. Ask when the choice matters (Spanish for Spain or Mexico, Portuguese for Brazil or Portugal).
- Read each segment aloud in your head: numbers and symbols should be written the way they are spoken in the target language.

## Lip-sync (optional)

Audio-only dubbing is the default. For lip-sync, first finish and approve the dubbed audio. Then look for lip-sync capable models with `list_ai_models` (kind `avatar` lists models with a lip-sync operation) and quote with `estimate_ai_generation` for the exact clip length. Generate with `generate_ai_media`, attaching the source video and the dubbed audio as `sourceAssets` with the correct roles, then `get_ai_operation` and `import_ai_operation_to_timeline`. Lip-sync needs a clear front-facing speaker, and results are best with one speaker and moderate pacing. If no suitable model is listed, say so and deliver the audio-only dub.

## Several languages

Languages are separate dubbing jobs, not one call. For each language: clone the project, run the workflow above, name the project clearly (for example "Product demo (es)"). Run translation and checking one language at a time; generation jobs of different languages may run in parallel inside the approved budget, timeline writes may not.

## Languages and options from the original

The original service offered these targets: English (US), Spanish (Spain and Mexico), French, German, Italian, Portuguese (Brazil), Japanese, Korean, Chinese (Mandarin), Hindi and Arabic. In Subclip the available voice languages depend on the voice model, so call `list_ai_voices` to see what is offered for the target language and pick another model if one lacks it. `generate_local_speech` with the `subclip-local-supertonic` model speaks 31 languages on this computer for free tests.

| Original option | Subclip equivalent |
|---|---|
| Audio only, no lip-sync | Default dubbing workflow |
| Lip-sync | Optional lip-sync generation after the dub |
| Number of speakers | Speaker detection in transcription and per-speaker voices |
| Custom vocabulary | Locked terms and the creator's keep-as-written list |
| Custom subtitles (SRT) | Bring existing cues in with `import_caption_cues_for_media_item`, or translate the transcript |
| Voice cloning | `prepare_dubbing_temporary_voice`, only on explicit request |
| Remove background music | The commit mutes the original source as a whole. If the music matters, ask for a music-free track, or add a new music bed with `generate_music` |
| Speech enhancement | Not offered; start from the cleanest source audio |

## Best practices

1. Source quality matters: clear speech, little noise.
2. Single speaker gives the best results; moderate pacing helps.
3. Test first on a short clip before dubbing a long video.
4. Keep the original project untouched; work on clones.

## Cost

Translation by the agent costs no credits. Cloud speech is billed per output; local speech is free. Lip-sync is a paid generation priced by clip length. Before paid work quote the model, number of segments or languages, the `estimate_ai_generation` total and a retry allowance. A bigger scope needs a new decision. Stop on credit or storage limits.

## Verify

- Every segment completed, translations reviewed, no segment above the chosen speed-up limit.
- Frames inspected after commit; captions in the target language inspected where they apply.
- Say what needs a human listen: pronunciation of names, tone, timing against lip movement.
- Save decisions with `update_project_director_brief` and `write_session_summary`.

## Reference output

Three 13 second versions of one pour-over coffee tutorial show what a finished run delivers:

| File | What it shows |
| --- | --- |
| [examples/coffee-english-source.mp4](examples/coffee-english-source.mp4) | The source: three photo scenes, English narration, English captions |
| [examples/coffee-spanish-dub.mp4](examples/coffee-spanish-dub.mp4) | The Spanish dub: same scenes, each translated line placed in its original timing window, Spanish captions |
| [examples/coffee-french-dub.mp4](examples/coffee-french-dub.mp4) | The French dub, built the same way |

How they were made: the agent translated the three segments itself, kept "20" and "three minutes" exact, voiced each line with the free local Supertonic voice (`generate_local_speech`, the free test path), placed every line at its source window and checked the fit (the longest line used 1.03 of its window), then captioned each language with local `transcribe_project` and fixed two words with `update_caption_words`. On-screen graphics are language neutral (step numbers, a gram counter, a timer), so only voice and captions change per language. The stills are gpt-image-2 images made with the Codex CLI; the scenes are HyperFrames layers. A paid run uses the dubbing workspace above instead of local speech.

Adapted for Subclip from [OpenMontageInc/OpenMontage](https://github.com/OpenMontageInc/OpenMontage) (skill video-translate) by OpenMontageInc, AGPL-3.0
