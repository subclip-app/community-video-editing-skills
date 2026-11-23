# Beat sync and sound design

Adapted from the upstream beat-sync, sound-design and SFX sourcing guides.

## Pick the soundtrack before timing a music-led edit

Use the creator's track first when provided. Otherwise, read `subclip-music-generation`. The original uses prerecorded tracks and has no AI music model preference. Use Subclip's Lyria 3 Pro default when available. Honor the creator's approved model and consult them before switching. Prompt for tempo, groove, instrumentation, energy arc, performance and mix space. Treat requested BPM and event times as approximate until the returned track is checked.

Example music prompt:

> Instrumental tech-house score for a 30-second product launch, approximately 124 BPM. Tight kick, dry claps, muted synth pulse and a restrained bassline. Open sparse, lift after the first reveal, leave a short breathing space, then resolve on a clear final downbeat. Keep the midrange open for UI sounds. No vocals, humming or speech.

For a narrated cut, establish the voice timing first and let the score support it. If a strong grid competes with an intelligible phrase, reserve accents for gaps in speech or major reveals.

## Quote and generate

1. Use `list_ai_models` with `kind: audio` and read the live settings and rates. Check available credits with `get_ai_credit_status`. Use `estimate_ai_generation` with `kind: audio`, exact model, prompt and settings. For an effect, match estimate `durationSeconds` to generation `settings.duration_seconds`. If using automatic length omit both. Report the model, output count and lengths, settings, estimated total, maximum reserved credits when returned, and retry allowance. Ask for approval only when the exact scope is still unapproved.
2. Use `generate_music` with `settings.mode: instrumental` for a score and set `confirmed: true` only for the authorized generation. Put approximate duration in the Lyria prompt. If the creator explicitly chooses ElevenLabs Music, it supports `settings.music_length_ms` from 5000 to 300000. Neither model promises delivery on the requested musical grid.
3. Save the operation ID and do not duplicate queued jobs. In-app agents end the turn after acceptance and resume on the completion event. External clients can check at reasonable intervals with `get_ai_operation`. Reconcile uncertain results before retrying and stop on credit or storage limits.
4. On completion read the actual duration and import the accepted result with `import_ai_operation_to_timeline`. Imported score is a single audio item. Keep audio independent of the motion source.

## Make the beat map

Use timestamp evidence from the exact source version. The current Subclip tool catalog has no automated BPM, classified transient or export A/V offset analysis. Use a creator-supplied beat map or mark attacks from editor waveform and listening review when accessible. If neither is available, use a confirmed BPM and first-attack time for an approximate grid, or plan to rough musical sections and report that sync is unverified.

- Record source trim, timeline start, playback rate, observed attacks and their evidence. Mark the first clear attack, a few nearby beats, one near the middle and one near the end. Separate frequent pulse markers from sparse strong hits and section changes. Listen for kick, snare and hats to find which sound should carry a payoff.
- For steady music, fit the time interval to spaced known attacks. Check the result against other marked attacks, including both ends. Test half-time or double-time when subdivisions appear to match better. If residuals accumulate or the tempo changes, use observed timestamps or separate local grids. Never assign an observed label to an extrapolated time.
- Compute source time as first beat time plus beat index times 60 divided by BPM. Convert to timeline seconds as audio item start plus (source time minus source trim start) divided by playback rate. Round once using project fps for frame-addressed events. For shot internals subtract the shot start. Recompute after changing source trim, rate or time.
- Use four or eight beats as a starting shot window. Put regular cuts or stepped elements on the grid and major isolated reveals on measured attacks when available. Keep the camera stable through most beats. Limit full-frame impacts to three across the film, with at least 16 beats between them for a strong score. On shorter cuts use fewer. Default to accenting the hero element.
- Record beat or hit, timeline time, action, and actual frame in the director brief. Review picture cuts and payoffs around each selected anchor. Where timestamps can be measured, aim for no more than three frames between the intended visible event and its audio anchor, and report source-grid error separately from picture placement error. Review the exported result when requested and playable. Avoid carrying over the source project's renderer offset.

## Choose and place one sound per meaningful action

Think in physical actions and materials. A pane can latch, a sheet can brush past, and a button can make a muted plastic tick. Use a short, distinct texture that fits the film. Prefer foley to decoration. Let dense percussion carry most rhythmic cuts.

- For existing project audio, find exact IDs with `list_editor_assets` and place with `place_editor_asset`. For a candidate-only request use `get_asset_options` or `search_public_audio`, and `preview_asset` where helpful. Prefer curated SFX for ordinary edit cues and Freesound for unusual material or ambience. Confirm the exact returned license is usable for the project. Prefer CC0 for Freesound, and use CC BY when attribution is acceptable. Provide the source and required credit. If chosen for use, import with `import_public_asset_to_timeline` using the returned import arguments and preserve attribution.
- For a new effect, use `generate_music` with the live `elevenlabs-sound-effects` model. Describe one sound in 450 characters or fewer and specify source, action, material and space. Use `settings.duration_seconds` between 0.5 and 22 when known, then trim to the actual action. Reserve looping for ambient beds. Use the same quotation, operation tracking and native import flow as for music.
- Example prompts: “Dry low paper swish across a close desk mic, fast attack, short tail, one pass.” “One muted mechanical click as a small plastic card slots into a tray, tight transient, almost no room.” “Short rising air tension, clean upward slope, ending before a separate impact.”
- For a finale, start a riser during assembly, align an impact to the wordmark's contact and add a brief sparkle on the finishing accent. For repeated cues alternate two short samples and step gains down as motion accelerates. Thin difficult clusters to a single swoosh.
- Pin the semantic onset or peak, whichever matches the action. If its timing is known, set item start to the cue time minus (source event time minus source trim start) divided by playback rate. Trim silence or move the cue if the calculated start precedes the project. Keep sound-source timing separate from any measured output offset. Allow the natural tail of a hero impact when it fits the scene.
- Set placement, trim, gain and fades with `update_audio_item`. Trim typing to the actual keying window. Start music beneath speech around 0.15 to 0.30 volume and adjust after listening. Keep the score, voice and each effect independently editable. Check clipping, masked clicks, timing, repetition, music fade and final silence after picture revisions.
