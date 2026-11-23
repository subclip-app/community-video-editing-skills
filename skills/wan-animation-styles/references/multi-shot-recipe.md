# One frame to a whole scene

A recipe for a ten second, five shot animated scene. Fill it with your look, your hero and your story.

## Template

```text
[Style paragraph: the look in your own words: line, colour, texture, motion style.]
The hero is the character from the style frame, the same design in every shot.
[N] shots with hard cuts, [aspect ratio].

SHOT 1, 0-2 s: [one clear action, where the hero is].
SHOT 2, 2-4 s, wide: [the next action, new place].
SHOT 3, 4-6 s, close-up: [a reaction or small event].
SHOT 4, 6-8 s, medium: [the talking shot, with the short quoted line].
SHOT 5, 8-10 s, wide: [the payoff, a gag or a twist].

SOUND: [list every effect in order]. No music.
```

## Rules that keep it readable

- One clear action per shot.
- Describe the hero once, at the top, not in every shot.
- Number the shots, give seconds and shot size.
- Keep the quoted line short enough to fit the shot length.
- List all sounds in one line at the end.
- To change the style, swap the style frame and the style paragraph. To change the story, rewrite the shots. To change the line, put your own words in the quotes.

## Example storyline (rubber hose, for shape only)

Hero reading in a cosy room, a gust steals the paper, he leaps out the window after it, lands on a bin and startles a dog, grabs the paper and says one short line to the camera, then a rounded garbage truck scoops him up. Five shots, ten seconds, cartoon sound effects only.

## In Subclip

- If one Wan 3 clip does not cut cleanly into shots, make one style frame per shot (reference the first style frame so the look matches), animate each for two seconds, and join them with `import_ai_operation_to_timeline` and `trim_media_item`.
- Add the spoken line with `generate_speech` or `generate_local_speech` if the model did not voice it, or leave it on screen with `add_text_overlay`.
- Keep all clips at the same aspect ratio and resolution.
