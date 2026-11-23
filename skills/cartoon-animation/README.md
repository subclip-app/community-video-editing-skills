Adapted for Subclip from [JohnHeibel/ClaudeAnimationBase](https://github.com/JohnHeibel/ClaudeAnimationBase) by John Heibel, MIT

# cartoon-animation (Subclip edition)

Make a short hand-painted cartoon in Subclip. A character wants something, tries, fails or succeeds and reacts, in flat washes with boiling ink outlines on soft watercolor backgrounds and paper grain. The agent storyboards first (with timed reads so the viewer can follow), builds one shot per editable motion layer, joins shots with brush wipes and irises, and checks frames before it shows you.

The original is a starter kit for animating a mascot in p5.js and p5.brush. Its guide (the three goals, seven rules, animation principles, storyboard format, review loop and list of common failures) is kept. The drawing engine is rebuilt as a small deterministic canvas kit that runs inside a Subclip layer, so there is nothing to install and no render command. The original mascot art is not included; you design your own character.

## Install

In Subclip: **Skills > Add skill**, paste `https://github.com/subclip-app/community-video-editing-skills/tree/main/skills/cartoon-animation`.

## Use

> Make a 15 second cartoon of a little round creature trying to catch a butterfly.

## What's inside

| File | What it covers |
|---|---|
| `SKILL.md` | The workflow in Subclip: storyboard, character, one layer per shot, music, verify |
| `references/acting-guide.md` | The rules, principles, acting vocabulary, storyboard format, review loop, failures, a worked timing example |
| `references/canvas-brush-kit.md` | The canvas painting kit, a starter character, camera and transition helpers, the layer template and an example shot |

## Limits

The p5.brush look (WebGL watercolor, pigment mixing) is approximated in plain canvas. The original mascot and model sheets are left out on purpose, because the character is a brand mascot and the repository license is a code license.

## License

MIT, same as the original code. See `LICENSE`.

## Examples

Two original shots about a snail in the rain, painted with the canvas brush kit and rendered locally.

![Wide shot of a painted snail reaching the shelter of a leaf.](examples/snail-dashes-for-cover.jpg)

[Watch the clip](examples/snail-dashes-for-cover.mp4)

![Closer painted shot of the snail peeking out while rain falls around the leaf.](examples/snail-peeks-out.jpg)

[Watch the clip](examples/snail-peeks-out.mp4)
