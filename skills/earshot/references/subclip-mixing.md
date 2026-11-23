# Placing and mixing with Subclip tools

Tools named here are in the Subclip AI Editor catalog. If the live catalog differs, follow the catalog and say what changed.

## Find
- `search_public_audio` (query, source `sfx` or `all` or `freesound`, limit, sort). Read-only. Results carry attribution, timing guidance and exact import arguments. To let the creator hear and choose options, use `get_asset_options` with kind `sfx` or `music` when it is listed.
- Keep the query short and concrete: "soft ui click", "whoosh fast", "riser tension".

## Import
- Library result: `import_public_asset_to_timeline` with `assetKind: "audio"`, the returned `provider`, `fileName`, `downloadUrl` or `objectKey`, `startTime` (the cue time minus the sound's lead, see recipes), `volume`, `query`, and the returned `attribution` and `pageUrl`. Mention attribution to the creator.
- Generated sound: `list_ai_models`, `estimate_ai_generation`, `get_ai_credit_status`, approval, `generate_ai_media`, then `get_ai_operation` and `import_ai_operation_to_timeline`. Do not resubmit a slow job. Music: `generate_music`.
- Local file (earshot or any tool): `import_external_media` with exactly one `path`, plus `startTime` and `volume`.
- One timeline write at a time. Re-read state after each.

## Levels (starting points, 0 to 2 scale of update_audio_item)
| Item | volume | note |
| --- | --- | --- |
| Voice | 1.0 | reference level |
| Music bed under voice | 0.15 to 0.25 | 0.35 to 0.5 with no voice |
| Ambience | 0.08 to 0.15 | constant, fade out at the end |
| UI click, typing | 0.5 to 0.7 | quieter than voice |
| Whoosh | 0.6 to 0.8 | under the picture |
| Notification | 0.5 to 0.7 | |
| Riser | 0.6 to 0.8 | peak at the cue |
| Impact | 1.0 | loudest cue in the mix, rare |

Judge by relative numbers, since the master target is about -14 to -16 LUFS with true peak under -1 dBTP. You cannot measure loudness with these tools, so say it is unmeasured and ask for a listening pass.

## Ducking
Subclip has no automatic sidechain tool. Do it by hand:
- Under voice: lower the music item to the level in the table. For speech that comes and goes, `split_timeline_item` the music at the voice start and end, then `update_audio_item` each piece (about 3 to 6 dB lower under voice) with `fadeIn` and `fadeOut` of 0.2 to 0.4 s on the pieces so level changes are smooth.
- Before an impact: split the music, lower the piece before the hit 4 to 6 dB or to near silence for 0.1 to 0.5 s, leave the hit alone.
- Keep effects out of the voice: do not stack a bright whoosh over a spoken word if it can move to the gap.

## Fades, pan, variation
- `update_audio_item`: `fadeIn`, `fadeOut` (0.01 to 0.05 s on short effects only if the file clicks, 1 to 2 s on ambience and music ends), `pan` (-1 to 1) toward the on-screen position, `playbackRate` only for a tiny variation (0.95 to 1.05).
- A repeated cue gets a different take or `playbackRate` and `volume` jitter of about 5 percent.

## Check
- `view_current_frame` at each cue time to confirm the visual moment matches.
- List audio items and check no two effects overlap in the same band at the same time, and that nothing runs past the project end.
- Say what is unverified: you did not hear the mix.
