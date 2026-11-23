# Measuring a style

Adapted from the creator-teardown skill of nextwork-projects/ai-video-editor-cooked (MIT). The aim is a short set of numbers a Subclip edit can follow. Analyze only videos the creator owns or has rights to study. Do not copy material, and do not imitate a named creator's identity.

Read numbers from the transcript word times (`get_script`, or `transcribe_project` on the reference) and from sampled frames (`extract_video_frames`). Measure boundaries on frames near the event (at least every 0.2 s around it); pops and slides are shorter than 0.5 s, so sparse sampling misses them.

## Script and delivery

- Time to first word, hook length (seconds and words), beat count and seconds per beat.
- Overall words per minute and per beat. Good short-form often speeds up into a list and slows for the close.
- Where the call to action starts, as a percentage of runtime.
- Sentence length (median and range), pause rate, longest pause, filler rate.
- Beats are jobs, not sentences: cold open, hook, open loop, credential, context, item, mechanism, example, objection, reframe, CTA. Label them per creator.
- Across the set, what is constant in every video is the format. What varies is the creator improvising: do not turn it into a rule. A move in winners and median videos alike is a habit, not the lever; a move only in winners is a candidate lever, and two videos out of six is a hypothesis, not a rule.

## Cut and camera

- Cuts per minute, median shot length, share of cuts that are hard cuts.
- Zoom rate (punch-ins per minute), size of zoom, how fast it eases, whether it returns to base.
- Face framing in the frame and what it does while a card is up.

## Captions

- Words per line, number of lines, position (percent of frame height), size relative to frame width, font family category, case, stroke, highlight on the active word, entrance.
- Whether captions sit clear of cards.

## Cards and graphics

For each image, card, logo, mark or text block: time in, settled, out; what it shows and where it came from (real UI, screen recording, logo, photo, AI image, custom graphic); the spoken word that triggers it and the lag between word start and entrance; entrance and exit style counted in frames; resting box as a percent of frame; layer (over face, beside, full frame).

- Rhythm: events per minute, median time on screen, gap between cards, share that land on a hard cut.
- A copied style's card rate wins over your taste: give each wanted card the same kind and place, clear of the head.

## Sound

- Music bed or none, its level in the gaps against speech, and whether a sound marks card entrances.
- Cue density: a few events, not every card.

## Style brief shape

Save as a short brief with `set_project_data`:

```json
{
  "cuts_per_min": 0,
  "pause_target_s": 0.15,
  "zoom": { "per_min": 0, "scale": 1.12, "ease": "expo out" },
  "captions": { "words_per_line": 3, "position_pct": 70, "size_pct_of_width": 7, "case": "sentence", "highlight": "none" },
  "cards": { "per_min": 0, "kinds": [], "box_pct": [0, 0, 0, 0], "lag_s": 0.1, "gap_max_s": 8 },
  "sound": { "music": "none", "cues": "few" },
  "palette": "from real content, no invented accent"
}
```

## Default style (no reference)

A smooth zoom move at least every 5 seconds, 3-word captions, hard cuts for most joins, a card only where a line names something real, no music bed unless asked. Never ask which stock to use: pick the real capture of the named thing.

## Check the edit against the style

After building, compare each number with the brief: card kinds and places, zoom rate, caption size and words per line, music level. Fix every line that differs from the target before showing the creator, then re-check. What the creator changed by hand becomes the new target.
