# Source and verification notes

## Provenance

Source: https://github.com/alchaincyf/huashu-motion by alchaincyf (Huashu), commit f4f38bfe295a3f768753857be9236cc3277c7dad, skill version 0.6.1 at `skills/huashu-motion/SKILL.md`. The code and documents are MIT. The original LICENSE is included unchanged, including its copyright notice.

The upstream THIRD_PARTY notes list pieces under other terms: GSAP (its own standard license), three.js (MIT), a font library under the SIL Open Font License, the huashu-art-motion engine and fonts in a showcase folder, an AI-generated music library under its own dedication, and the author's cartoon character ("bean Huashu"), which is not licensed under MIT and appears in a template and demo films. None of these files are copied here. The upstream README's demo GIFs include unofficial fan films about other companies' products and are also left out. The cover and the examples are original to this adaptation.

The upstream SKILL.md, its references and its README carry some Chinese text. Everything brought over is rewritten in plain English; only the LICENSE is kept as it was.

## Retained craft

From the upstream SKILL.md, director, rhythm, punch-up, colour, depth, sound, music sources, verification and craft references, and the motion library (formats, 20 languages, techniques, product fit):

- the bar and the three tests (is it this product, does the energy have a shape, is any stretch a slide);
- the gates: real material first, three directions and a wait, a treatment before the full build, own notes before the creator sees it, nothing published;
- reading the product, the message shapes, the five personality sliders and the measured cut rates;
- three genuinely different directions with exactly one depth direction, palette cards with sources;
- the rhythm sheet, beat map, four stills and continuity chain;
- the energy curve (hook, burst, stop, peak, landing), density per bar, contrast schedule and montage bursts;
- the colour method and the house look to avoid; the depth camera moves;
- the punch-up method and the five ways out of a slide;
- handling a pointed comment by changing exactly that place and time;
- the track before the cuts, hits on landing frames, music source licensing order and levels;
- verification honesty: stills are not motion review, levels are not a listening test.

## What was replaced or left out

| Upstream | In this adaptation |
| --- | --- |
| The `om` command line tool, grabbing material from a folder or URL | `inspect_public_website` and `import_external_media` |
| One composition file rendered frame by frame in a local browser, parallel render workers, motion blur by subframes | Short HyperFrames layers plus native media and audio items, rendered by Subclip's own export |
| Studio preview, comment inbox, look and done commands, undo history | The Subclip timeline and chat, `view_current_frame`, `read_layer_source`, `edit_layer_source`, project history |
| Stills, layout checks, single-frame pop and dead-time reports | `validate_runtime_layer_source`, `view_current_frame`, `get_timeline_contact_sheet` read at one tile per second |
| Music composed in notation and played by sampled instruments, a built-in AI music library, track re-arrangement by bars, synthesized effects | A track from the creator, `search_public_audio` (CC0 or CC BY) or `generate_music`, cut and mixed as native audio items; hits from the sound catalog placed on scene cues |
| Narration with system voices or a local model download | `generate_local_speech` or the approved cloud voice |
| Share kit, share page, posting text | `export_video` when asked; posting is out of scope |
| Local experience file and harvest command | The director brief and session summary |
| The "Made with huashu-motion" end signature | Off by default; added only on request |
| About-the-author recommendations and the version check against the remote repository | Omitted |

There is no Subclip equivalent of the upstream automatic beat tracker, the track re-arranger with scored joins, the numeric motion-per-second report or the composer mode. The skill tells the agent to read tempo and sections by hand, to place cuts on bars, and to say what it could not measure.

## Test film, 2026-11-27

The reference example was made by following this skill in the Subclip AI Editor, with 0 credits and no AI model:

- Material: `inspect_public_website` on https://www.subclip.app returned the homepage copy, colours (navy #153592, cyan #26c9d5, slate #0f172a, white ground) and fonts, a page capture and the logo file. Six real template preview clips from the same site (bar chart race, Claude Code, glyph anatomy, stamp type, GitHub stars, phone frame) were imported as native media.
- Direction: a hybrid route at 120 BPM. Scene A (0 to 6 s, HyperFrames): frame 0 is the real headline close up, a hard pull-out on the beat, a prompt typed into a pill, the page falls back into space as four real feature words land one per beat, a navy flood carries into the cut. Burst (6 to 10 s): the six template clips as native items, shot lengths 1, 1, 0.5, 0.5, 0.5, 0.5 s. Scene B (10 to 19 s, HyperFrames, on the site's white ground): the stop (one cyan dot, a click, near silence), the drop at 11 s into a wall of real MCP tool names in space with a count to 300+, a cut to 49 agent skills with real skill names, then "Works with Claude Code, Codex, Cursor" one word per beat. Scene C (19 to 25 s, HyperFrames): the real logo, the site's own headline and a URL pill.
- Sound: a CC0 120 BPM synth loop by josefpres (freesound.org/s/621770) in two items, lower under the hook, cut out for the stop and back at full level on the drop; whip, click, whoosh, click, boom, whip and deep hits on the scene cues.
- Checks: every layer validated; contact sheets in the editor at the key moments; the exported file viewed at one frame per second and probed for length, size and the audio stream; loudness measured per section and peaks kept under -1 dB.
- Found and fixed during the test: the first export showed Scene A shifted up with a black strip at the bottom, because an image taller than the frame sat inside the scene; making every element fit the 1920 by 1080 frame (the capture cropped with `object-fit`) and setting `overflow: clip` on the root fixed it. The boom and deep hits clipped at 0 dB and were lowered. The editor preview did not show the scroll problem; only the exported frames did.
- Not verified: a human listening pass and a cold review by another person.

## Source checks

Tool names used in the skill were checked against the Subclip AI Editor MCP catalog available on 2026-11-27. Internal skills read: subclip-hyperframes-layer and its authoring contract. Repository build, check, scan and tests are run before publishing.
