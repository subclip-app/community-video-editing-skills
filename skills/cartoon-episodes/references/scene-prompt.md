# Scene prompt pattern

```
<art style paragraph from the bible>

Characters: <name and visual lock in a few words>, ...
Place: <location sheet name and one line about the view>

0-3s: <shot>. Camera: <wide, push in, pan...>. Action: <blocking>.
3-6s: <shot>. ...
6-10s: <shot>. ...

Dialogue:
<Speaker> (<tone>): "<line>"
<Speaker> (<tone>): "<line>"

Sound: <room tone, effects, no music unless asked>.
```

## Checks before generating

- Is every speaker named and is the line short enough for the shot it sits in?
- Do the dialogue words fit the seconds? About 2.5 spoken words a second.
- Does each shot say one thing happens?
- Are only the needed sheets attached, and named in the prompt in the order attached?
- Did you repeat the art style paragraph exactly as in the bible?

## Typical fixes

| Problem | Fix |
|---|---|
| A character changes color or shape | Quote the visual lock again, attach that sheet first |
| Two characters merge | Give each a screen side and a distinct action |
| Dialogue goes to the wrong mouth | Name the speaker in front of every line and mention who is talking in the shot text |
| Background changes mid scene | Attach the location sheet and say the camera never leaves the room |
