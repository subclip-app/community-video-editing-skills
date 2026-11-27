# Frame and audio review (Gate 2)

The original skill measured its mix with a script. In Subclip, review the saved project with the editor's own
frame tools and measure the exported file. Write down what you checked; a successful tool call is not proof.

## Frames

1. `get_timeline_contact_sheet` from 0 to the end, one tile every 1 to 2.5 s. Look at every tile.
2. `view_frame` at every QA moment from the shot list (up to 8 per call), including:
   - the date: letters on one line, the year on its bar;
   - each highlighter: the yellow sits under the words being spoken at that second, no earlier;
   - each underline, ring and arrow: on the right word, not visible before its cue;
   - each source tape: present whenever its claim is on screen, typed fully, inside y 160 to 900;
   - the board: the light is on the card being talked about, the string reaches its pin;
   - the question: fully typed, the ring closed, then black;
   - the title: name, bar and sources line readable, nothing touching the frame edge.
3. Nothing in the letterbox bars except black. No black or empty scene, no leftover sample text, no text in a
   fallback font, nothing cut by the frame edge.
4. After export, look at the file at one frame per second (a contact sheet image is fine) and the first two
   frames.

## Audio

1. Read the audio lane with `read_project_section` (start, end, trims, volume, fades) and compare with the
   script table: every line placed, no overlaps between narration items, the gaps where the story needs them.
2. Re-transcribe the exported film with `transcribe_project` in reference mode (or compare against the earlier
   transcript) and diff it with the script. A word a hit masked shows up wrong.
3. Measure the exported file: integrated loudness about -16 to -14 LUFS, peaks under -1 dB, narration above the
   music. Lower a hit or the drone when a peak is over.
4. Listen in the editor preview with the creator before calling it done. Record in `write_session_summary`
   which checks were measured and which were heard.

## Claims

Walk the sources table line by line against the film: every on-screen claim has its tag, every allegation is
hedged, quotes match the source exactly, the counterweight is present and the film ends on a question.
