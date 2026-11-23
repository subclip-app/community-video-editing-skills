# Optional local engine: earshot

earshot is an open-source (MIT) program by Leon Lin that renders sound effects from plain words on your own CPU, with no audio model and no network use when it makes a sound. It is optional. Subclip never runs it silently.

## Ask first
Say what it does and what it needs, then wait for yes:
- Needs Python 3.10 or newer. The base install brings numpy, scipy, soundfile, soxr and numba (about 350 MB). It downloads nothing else when it makes a sound. ffmpeg is needed only to write ogg, mp3 or m4a, so write wav.
- Works in its own virtual environment, so it does not touch the creator's other Python packages.
- The install fetches code from GitHub. The name `earshot` on PyPI is a different project, so install from GitHub only, pinned to the commit this skill was checked against.
- Skip the listening extras (torch, about 1.1 GB models) unless the creator wants the optional `sheet` event labelling below.

## Commands (run only after yes, in a scratch folder)
```
python3 -m venv earshot-env
earshot-env/bin/pip install "earshot @ git+https://github.com/Leonxlnx/earshot@7a7f7c5c70d4a763a1eca4b3666af7c77e313f97"
earshot-env/bin/earshot make "a soft ui click" -o click.wav
```
On Windows use `earshot-env\Scripts\`. The first sound takes about 30 seconds while numba compiles; later ones start at once.

## Asking in words
Name the thing or job first, then feelings, material and numbers: `earshot make "a fast whoosh" -o whoosh.wav`. Plural or counts play an action ("keyboard typing, 8 keys" = 8 presses at about 6 a second). Add "no loop" or `--no-loop`, `--dur 0.4`, `--pitch`, `--lufs`, and the axes `--bright`, `--hard`, `--ring`, `--size`, `--space`, `--width`, `--energy`, `--motion` (each -1 to 1). To steer, ask again with adjectives ("softer", "darker", "longer"). `earshot sounds --search whoosh` lists designs; `--sound family/name` picks one.

The first output line gives the design, length, loudest moment ("peak at"), loudness and a clean check. Use "peak at" to compute the start time: cue time minus peak time.

## Designs that worked in testing (tested with the commit above)
| Recipe | Command words or design | Result |
| --- | --- | --- |
| UI click | `"a soft ui click"` (switch/small), `--sound toggle/key_down` | 0.24 to 0.28 s |
| Whoosh | `"a fast whoosh"` (whoosh/fast), `--sound whoosh/sweep` | 0.3 to 0.42 s |
| Riser | `--sound rise/tension` | 3.9 s, peak at 2.85 s |
| Impact | `--sound slam/title` | 0.51 s, peak at 0.2 s |
| Typewriter | `"keyboard typing, 8 keys"` (keyboard/desktop) | 1.63 s |
| Notification | `--sound notify/knock` | 0.4 s |
| Ambience | `"a quiet room tone" --dur 20` | seamless loop |

A request the catalogue does not cover still returns a file and says so ("not followed", "not understood"). Read that line and pick another design from the `also:` list. Some vague words ("heavy") may be ignored, so name a design instead.

## Bring it into the project
`import_external_media` with the file `path` and the `startTime`, then `update_audio_item`. Files made this way use no Subclip credits.

## Optional deeper check: earshot sheet
Subclip's own `get_audio_timeline_sheet` already shows lanes, waveform, spectrogram, loudness and cut sync with no install. Use earshot's `sheet` command only when the creator wants every sound named (for example "which event is the whoosh at 4.2 s") and agrees to the bigger install. It reads one audio or video file, so export a draft first (`export_video`, with the creator's approval), then run it on that file.

Ask first and say the cost: the sheet needs the `images` extra (matplotlib, pillow, small) and, for event labels, the `listen` extra (torch and two models, about 1.1 GB to download and 2.2 GB on disk, and each command loads them for 20 to 40 seconds). Still no API keys. Same virtual environment and pinned commit as above, only the extras differ:
```
earshot-env/bin/pip install "earshot[images,listen] @ git+https://github.com/Leonxlnx/earshot@7a7f7c5c70d4a763a1eca4b3666af7c77e313f97"
earshot-env/bin/earshot sheet draft.mp4 -o draft-sheet.png
```
Run `earshot sheet --help` first: options such as `--video` for the frames strip and `--cues` for your own cue times follow the `timeline` command, and the live help wins over this text. Open the png with an image read (for example `get_media_context` or the file viewer), then act on it like the native sheet: events with time, level and tag, sections, a spectrogram, a loudness curve and the sync of sound to picture cuts. Fix in Subclip with `update_audio_item` and re-export, never by editing the draft. Skip `critique`, `llm` and the MCP server.

## Not needed here
earshot also has `build`, listening models, an MCP server and film sound kits. This skill does not use them. They need larger downloads and keys are never involved, but ask the creator before enabling any extra.
