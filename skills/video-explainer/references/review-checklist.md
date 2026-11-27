# Review checklist

The source skill answers these yes or no before delivery and fixes every no first. Its automated QA becomes the second list, checked with Subclip tools.

## Script and audience

1. Do the first 3 seconds pose a concrete question, tension or number that reads with the sound off?
2. Does the final scene answer the question the hook opened?
3. Is every claim, number, quote and step verified against the creator's files or a primary source?
4. Is the film at or under its maximum (120 s by default, aiming for 60 to 75 s)?
5. Do narration and on-screen labels match the audience level (general by default: no file paths, variable names, error codes or unexplained acronyms)?
6. Is one concrete example traced end to end, with no filler phrasing?

## Visual craft and audio

7. Does the film match its mode, with full-frame visuals (60 to 85 percent of the frame) that visibly change every 2 to 3 seconds?
8. Did a fresh-eyes look at the contact sheet and the opening find no slide-like frames, no clip-art look and a striking first 15 seconds?
9. Are all labels short (1 to 4 words), high contrast, camera-facing in 3D, and above the caption band?
10. Was every imported image or clip inspected for sharpness, credit and clean framing?

## The ten automated checks, done in Subclip

| Source check | How to check in Subclip |
|---|---|
| dimensions | `get_project_outline` canvas is 1920x1080 (or the requested aspect) |
| 30 fps | outline canvas fps |
| audio stream | voice and music items exist and are not muted (`read_project_section`, lane `audio`) |
| A/V sync | cues land on their words in `get_timeline_contact_sheet` at word times |
| duration cap | outline duration at or under the maximum plus 2 s; no blank tail (`set_project_duration`) |
| loudness | music bed well under voice; ask the creator to listen |
| peak | no clipping; keep music and effects volumes modest |
| black frames | contact sheet at 1 s intervals shows no empty or black frames |
| motion liveliness | contact sheet shows the hero moving; no frozen stretch over 4 s |
| layer check | `validate_runtime_layer_source` passes for every layer; text inside the frame and above the captions |

## Final

11. Did every review note from the creator get applied before the final export?
12. Did you ask the creator to listen for voice pacing and music balance?
