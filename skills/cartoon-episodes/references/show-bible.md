# Show bible template and sheet spec

The bible is the single source of truth. Every scene prompt is written from it, never from memory. Keep it in the director brief (`update_project_director_brief`), and keep sheet names in it identical to the sheet names in the project.

## Bible layout

```
SHOW BIBLE: <series title>

SERIES
- Logline: one sentence, who, what world, what kind of show
- Visual style: 3 to 6 keywords (for example "3D animated feature look, soft warm light, pastel palette"), reused word for word in every prompt
- Aspect ratio: 16:9 or 9:16
- Default scene length: 15 seconds
- Style key: style-key

CHARACTERS (one block each)
- Name
  - Sheet: char-<name>
  - Visual lock: hair, clothes, accessories, eye color, size relative to the others, what must never change
  - Voice: one line a video model can act ("lazy teenage boy, low, dry, slightly nasal"), or "no voice" plus the sounds they make (barks, beeps)
  - Personality and speech style: how they act and talk

LOCATIONS (one block each)
- Name
  - Views: loc-<name>-1 (the master wide, the angle most scenes use), loc-<name>-2 (the counter angle or detail the story needs)
  - Mood and lighting

PROPS
- Name: prop-<name>, one-line description (only props that recur or carry a story beat)

EPISODE NOTES (optional): current outline, running gags, canon facts
```

Every character needs a voice line, because the voice line is written in front of each dialogue line later; a character with no voice never gets a dialogue line.

Questions to ask the creator, in one compact message and nothing more: logline, characters (name, look, personality, how they talk), recurring locations, recurring props, art style, aspect ratio. Rough notes are fine, and if they say "just build it" you fill the gaps. Then show the bible back as a compact table (characters, locations, props, style, aspect) with the settings: aspect 16:9 or 9:16, scene length 15 s by default (5 to 30 s per scene).

Hard rules for every prompt in the show: an original cast only (no real people, no existing characters, no brand or studio names), no on-screen text, captions or watermark, and the aspect ratio stated on every generation.

## Sheet spec

Every sheet prompt starts with the show's visual style line, unchanged, and attaches the style key as a reference (except the style key itself).

- Style key: one representative scene of the show in the target aspect. It is the look anchor for everything else. Make it first and review it before anything else.
- Characters: full body, neutral standing pose, front three-quarter view, clean plain backdrop, 2:3, every visual-lock detail spelled out, one sheet per character. Generate a few variations of each and keep the one that immediately feels like the face of the show, because you will animate it hundreds of times. A turnaround with three expressions is a good extra when a character is complex.
- Locations: two views per recurring location, in the target aspect, fully dressed and with no characters. View 1 is the master wide; view 2 is the counter angle or the detail the story needs. Each location prompt carries the empty-plate guard: say it is an empty location plate that takes only the render style and palette from the reference image and not its subject, with absolutely no characters, people or animals.
- Props: isolated on a plain backdrop, 1:1, no hands, no scene.
- A one-off place or object (a dinosaur jungle that appears once) gets no sheet; describe it inside the scene prompt.

Before directing any scene, check that every asset in the bible has a sheet. Never direct a scene with a missing sheet: that character will drift.
