# Safe zones and loudness delivery

Reference: `examples/capability-motion-reel-studio.mp4` ends on the delivery card. Use the numbers below as hard rules.

## Safe zones (Reels, TikTok, Shorts, 1080 by 1920)
- Words and logos only inside **x 60 to 960 and y 160 to 1420**. The top 160 px and the bottom band hold the app interface; the right edge holds the action buttons.
- Captions: on a dark plate from about y 1250, at least 56 px on a 1920 frame (66 px recommended), at most 4 words at a time, karaoke style. Labels at least 32 px. Margins at least 60 px. A key number stays on screen at least 1 second. Wide monospace formulas at most 100 px. Shader or 3D behind text is dimmed.
- The mascot and the picture may go lower than the text zone.
- A horizontal video in a reel needs a purpose-built vertical layout, not a crop.

## Loudness (master at -14 LUFS)
- Voice about -16 LUFS on its own; music ducked under it (about 0.12 gain under speech, about 0.3 in gaps); effects about 4 dB over the music in their own band, never spiking.
- **Master: -14 LUFS integrated, true peak at or below -1.5 dBTP.** Calm pieces may sit nearer -16.
- A mix of short hits and silence cannot reach -14 without a bed: add a quiet bed, do not crush it with a limiter.
- Subclip has no loudness meter in the editor tools. Set levels with `update_audio_item` volumes, export, then **measure**: if you can run a command on the creator's machine and they agree, `ffmpeg -i reel.mp4 -af loudnorm=I=-14:TP=-1.5:LRA=11:print_format=json -f null -` prints the integrated loudness and true peak. If you cannot measure, say "levels set by volume, loudness not measured" and ask the creator to listen. Never state a LUFS number you did not measure.
- To correct, change the music and voice volumes and re-export; or deliver a second file normalised with a two-pass `loudnorm` if the creator agrees to a command.

## Delivery
- Master: H.264, yuv420p, 1080 by 1920, 30 fps, exact length of the audio, high quality.
- Phone copy: under 29 MB (phones and chat apps reject larger files), 720 by 1280, `-crf 27`, AAC 128 kbit/s.
- Check both: size, duration, resolution, audio present, loudness if measured.
- Export only when asked: `get_export_configuration`, `list_render_queue` (avoid a duplicate), `export_video`, `get_export_status`.

## Honest report
Say which of these you did: stills checked, seams checked, transcript compared, loudness measured, phone copy under the limit. State what a human must still watch and listen to.

## Upstream source
Adapted from the original author's delivery rules in tvhead-studio (Vladic20, MIT):
- [SKILL.md](https://github.com/Vladic20/tvhead-studio/blob/main/plugins/tvhead/skills/motion-studio/SKILL.md) (safe zone and delivery)
- [template/tools/deliver.mjs](https://github.com/Vladic20/tvhead-studio/blob/main/plugins/tvhead/skills/motion-studio/template/tools/deliver.mjs)
- [references/audio.md](https://github.com/Vladic20/tvhead-studio/blob/main/plugins/tvhead/skills/motion-studio/references/audio.md)
Repository: https://github.com/Vladic20/tvhead-studio
