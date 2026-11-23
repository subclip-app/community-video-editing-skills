Adapted for Subclip from the "trendjack-animator" skill by Agent Chad (https://agentchad.io/), itself adapted from drama-song-ad by Maxfusion AI s.r.o, MIT

# Trending animated ads (Subclip edition)

A skill for AI agents working in [Subclip](https://subclip.app) that makes the animated ad formats that are trending now: drama song ad, product song, narrated cartoon story, 3D how-it-works explainer, skeleton or X-ray demo and photoreal phone-footage clone. It works audio first: the song or one continuous voiceover is made and measured, then every shot is cut to a line of it.

**Product in, vertical 9:16 ad out, as an editable Subclip timeline. No outside API keys, no scripts.**

[Watch the silent preview](preview.mp4). The full capability reference video is `examples/capability-trending-animated-ad.mp4`.

```
brief -> script -> audio first -> word timings -> shot plan -> plates -> stills -> clips -> captions -> QA
```

## Install

In Subclip: **Skills > Add skill**, paste `https://github.com/subclip-app/community-video-editing-skills/tree/main/skills/trendjack-animator`. Or ask the agent: "install the trendjack-animator skill from github.com/subclip-app/community-video-editing-skills/tree/main/skills/trendjack-animator".

## Use

> Make a 20-second drama song ad for my reading lamp, 3D animated film look.

The agent asks for the product photo, real size and offer, pitches three scripts, makes the song or voice first, locks characters and product with approved plates, makes one still per line, animates clips, adds captions inside the Reels and Shorts safe zone and assembles everything on the timeline. Every paid step shows its credit cost first and waits for your yes.

## What's inside

| File | What it covers |
| --- | --- |
| `SKILL.md` | The mechanism, rules and the nine-step workflow |
| `references/formats.md` | The six formats with beats, lyric and voice rules |
| `references/looks.md` | Eleven looks with exact look lines |
| `references/workflow.md` | Every stage: gates, cut grid, plates, stills, clips, long ads |
| `references/subclip-tools.md` | Tool and model mapping, assembly steps, budget |
| `references/qa.md` | Fourteen manual checks and the fixes table |
| `LICENSE`, `NOTICE` | The original MIT license and notice, unchanged |

## Cost

A 9-shot 15 second ad is roughly 3 plates, 9 stills and 7 clips plus one song or voice take. Quote your own with the live catalog before spending. Pairs of shots, still-only inserts, free local speech and your own Codex CLI for images bring it down.

## Credits and license

MIT. See `LICENSE` and `NOTICE`.

- Adapted from the "trendjack-animator" skill from the Agent Chad pack, https://agentchad.io/. That skill adapts the story method of the open-source drama-song-ad skill.
- drama-song-ad, https://github.com/holy-templar/drama-song-ad, by Maxfusion AI s.r.o, MIT.

The original runs on outside image, video, voice and song services and local scripts; this version moves every step into Subclip's tools and credits. The example film and images were made for this repository with a fictional product.
