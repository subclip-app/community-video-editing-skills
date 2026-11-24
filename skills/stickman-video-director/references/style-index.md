# Style index: the 15 looks

Pick one look per film. Open its file in `references/looks/` for the style lock, the prompt recipe, the Subclip route, the credit note and the checks. Every look has a 10 second reference clip in `examples/` (the original author's sample, trimmed, silent). Watch it before you plan, and compare your result with it at the end.

The original project calls the two routes Model Engine (A) and Code Engine (B). In Subclip:

- **A, model engine**: the pictures are video clips made by a video model with `generate_ai_media`. Fluid motion, cinematic light, real credit cost, retakes cost more. Look files 01 to 08.
- **B, code engine**: stills made once (Codex CLI image generation first, else an image model), then animated in an editable HyperFrames layer with local motion, local voice, captions and sound. Almost no credits. Look files 09 to 15.

The upstream calls its A1 to A8 and B1 to B7 looks "styles". There are 15 looks (A1 and A2 each have two variants, so 17 reference clips).

| # | Look | Engine | Best for | Prompt file | Reference clip |
| --- | --- | --- | --- | --- | --- |
| 01 | A1 Classic black and white (light and dark) | A | Mental models, science, psychology, business breakdowns | `looks/01-classic-black-and-white.md` | `examples/01-classic-black-on-white.mp4`, `examples/02-classic-white-on-black.mp4` |
| 02 | A2 Modern pop (minimal tech and colorful story) | A | AI tools, tutorials, personal growth stories | `looks/02-modern-pop.md` | `examples/03-modern-pop-minimal-tech.mp4`, `examples/04-modern-pop-colorful-story.mp4` |
| 03 | A3 Prehistoric cave | A | Workplace satire, human nature, dark comedy, fables | `looks/03-prehistoric-cave.md` | `examples/05-prehistoric-cave.mp4` |
| 04 | A4 Cozy storytelling | A | Everyday emotions, habits, relationships | `looks/04-cozy-storytelling.md` | `examples/06-cozy-storytelling.mp4` |
| 05 | A5 Historical cartoon | A | History explainers, daily life in the past | `looks/05-historical-cartoon.md` | `examples/07-historical-cartoon.mp4` |
| 06 | A6 Amber noir | A | What-if stories, modern fables, twists | `looks/06-amber-noir.md` | `examples/08-amber-noir.mp4` |
| 07 | A7 Rubber hose | A | Absurd comedy, everyday mishaps, music-led shorts | `looks/07-rubber-hose.md` | `examples/09-rubber-hose.mp4` |
| 08 | A8 Hand-painted adventure (the upstream calls it Studio Ghibli) | A | Travel, small adventures, work-life fables | `looks/08-hand-painted-adventure.md` | `examples/10-hand-painted-adventure.mp4` |
| 09 | B1 Minimal line art | B | YouTube explainers, education, product intros | `looks/09-minimal-line-art.md` | `examples/11-minimal-line-art.mp4` |
| 10 | B2 Colorful hand-drawn | B | Everyday psychology, sleep, habits, attention | `looks/10-colorful-hand-drawn.md` | `examples/12-colorful-hand-drawn.mp4` |
| 11 | B3 Retro TV | B | Curious facts, animal behavior, short mysteries | `looks/11-retro-tv.md` | `examples/13-retro-tv.mp4` |
| 12 | B4 Survival thriller | B | Survival rules, urban legends, suspense with a twist | `looks/12-survival-thriller.md` | `examples/14-survival-thriller.mp4` |
| 13 | B5 Avatar explainer | B | Explainers with a presenter and physical-comedy metaphors | `looks/13-avatar-explainer.md` | `examples/15-avatar-explainer.mp4` |
| 14 | B6 Meme story animation | B | Historical oddities, con stories, absurd comedy (portrait works best) | `looks/14-meme-story-animation.md` | `examples/16-meme-story-animation.mp4` |
| 15 | B7 Pixel theater | B | Choice stories, ironic life lessons, game-like fables | `looks/15-pixel-theater.md` | `examples/17-pixel-theater.mp4` |

Capability montage of all 15: `examples/capability-stickman-video-director.mp4`. Worked proposal and storyboard table: `examples/director-storyboard-table.jpg` (method in `references/directors-proposal.md`).

## How to choose

1. Idea is a mental model or logic chain, no story: A1 (or B1 if you want cheap and handwritten).
2. A character moves through places with a feeling: A4, A6 or A8 (video model), or B2 (cheap, still-based).
3. Comedy about the past: A3 or A5. Comedy through elastic acting: A7. Absurd stories with big faces: B6.
4. Suspense or horror: B4 (cheap) or A6 (cinematic). A late-night mystery with science: B3.
5. A presenter with metaphors on the left stage: B5.
6. Game-like fable: B7, drawn entirely in code.

If the creator is unsure, show three reference clips side by side and ask which one they want. Do not mix looks inside one film.

## What each reference clip is

The clips are the original author's sample films, cut to the first 10 seconds (A6 is an 8 second original, A8 and others are trimmed from 20 to 30 second films), the sound removed. The samples were made with a video model for A looks and with generated stills plus code for B looks. Captions burned into a clip belong to that sample. Treat each clip as a quality target, never as footage to reuse in a new film.
