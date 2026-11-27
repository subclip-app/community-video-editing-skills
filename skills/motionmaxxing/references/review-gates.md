# Review gates without scripts

Upstream, `look.py` measured the render (gates G0, G2, G3, the audio audit and the motion note) and `lint.mjs` read the page for page furniture (gate G5). In Subclip you run the same gates by looking, with `get_timeline_contact_sheet`, `view_current_frame` and `analyze_timeline`, and on the export when there is one. The thresholds are the upstream ones. A gate that fails is fixed, never argued. Write what you saw, not what you hoped.

## 0. Make the sheets

1. `get_timeline_contact_sheet` with `from: 0`, `to: <duration>`, `every: 1`: one frame per second, the film's sheet.
2. The same tool with `times` set to 2 frames before every cut and 2 frames after it (the cut frames are the scene starts on the timeline, or `at: "scene-changes"`).
3. `view_current_frame` at full size for the hero moment, the first frame and the last frame.
4. After an export, check the file the same way and measure its loudness.

Then describe every sheet tile in one sentence: what is on screen, what the hero is, and whether it would pass as a slide. Do this before judging anything.

## The gates

| Gate | Pass | How to check in Subclip |
|---|---|---|
| G0 render exists | Not blank, the picture moves, length matches the plan, audio is present when planned | Sheet tiles differ from each other; `get_project_outline` duration equals the plan; audio items exist and are not muted; after export, the file has an audio stream and is not silent. |
| G1 proof readable | UI text at least 0.04 H (43 px at 1080p); the proof fragment at least 0.55 W or cropped by the frame edge; lit, in a world; the camera magnified it | Full-size `view_current_frame` on each proof beat. Measure text height in the frame, not in the source. Readability comes from the camera, not from inflated UI type. |
| G2 no empty frame | No run of more than 3 consecutive frames that are one flat field | Contact sheet at 0.1 s steps across every cut, wipe and flood. A dip of 3 frames or fewer inside a move is fine. |
| G3 end card short | The picture is unchanged at the end for at most 1.4 s (0.6 to 1.4 s is a resolved hold; under 0.6 s ends mid-motion, fine when meant); the final shot is at most 25 percent of the film | Find the frame where the last element lands; end minus that time is the hold. A slow drift counts as held. |
| G4 one hero per frame | Two panels only if one has twice the area of the other or the camera moves between them | By eye on the sheet. |
| G5 no page furniture | None of the checks below | By eye on every tile, plus a read of the layer source for the same patterns. |

## G5 checks (the upstream lint rules)

FAIL unless noted. Text inside the product's own UI surface (a card with its own fill and radius, the real interface) is exempt except V1, V2 and V5.

- C1 corner or edge label: small text (4 percent H or less) in a corner zone (x under 0.2 or over 0.8, and y under 0.14 or over 0.86) or in a top, bottom or side strip, holding still for 0.1 s or more.
- C2 tracked-caps label: uppercase, letter spacing 0.05 em or more, 4.5 percent H or less.
- C3 counter: "02 / SPEAK", "01 - THE WAIT", "N/M", "Chapter 3", "FILM 01", a bare "01".
- C4 production metadata: BPM, FPS, frame numbers, resolutions, timecodes, version numbers, a copyright line.
- C5 mono micro-label: monospace text 4 percent H or less outside a UI surface (WARN).
- C6 header or footer bar: a full-width bar or hairline in the top or bottom band, or a row with small text at left and right.
- C7 kicker over a headline: a small line directly above a headline at least twice its size.
- D1 deck layout: a left-anchored headline block (x under 0.2) with media on the right, a sub-line or a kicker (FAIL); alone it is a WARN, fine only as a split phrase under about 1.2 s.
- P1 progress bar: a thin element outside a UI surface that grows over time.
- T1 letter-typed headline: headline-size text (5 percent H or more) that grows letter by letter (FAIL), or a caret beside it (WARN). Typing belongs to the product's own input.
- V1 greeting header: "Good morning", "Welcome back", "Hi Name".
- V2 label and value: "Revenue . $12,400".
- V3 status dot: a 6 to 14 px filled circle right before text (WARN).
- V4 zinc-grey text: Tailwind zinc 300 to 600 greys (WARN).
- V5 vibe-coded card: one surface holding two or more of greeting, label and value, status dot, zinc text.

Fix by deleting the element, not by justifying it.

## Notice-it questions (not gates)

- Motion: does something live on almost every frame? Upstream measured human films at a mean frame-to-frame change of 6.8 (IQR 4.4 to 9.8 on its scale). Below that, ask what is alive between beats; above it, ask whether the picture is too busy to read.
- Cuts: do they land on motion? Look at the frames 2 before each cut: something should be mid-move.
- The thumbnail test, the cover-the-logo test, the read at real speed.
- Sound: one to three hand-placed hits, silence or a dip before the big one, music changes at sections. Loudness of the export about -14 LUFS with true peaks under -1 dB. Say whether you listened or only measured.

## Fix order

Broken or untrue; the idea; connections between beats; hierarchy and scale; timing; surface and finish; sound polish. Two or three honest passes. Record every gate result, with the times you checked, in the director brief.
