Adapted for Subclip from https://github.com/kaomei/stickman-video-director by kaomei and the Stickman Video Director contributors, MIT

# Stickman video director for Subclip

Give your agent a script, a topic or an article and it directs a stick figure film inside Subclip. It writes a director's proposal with a storyboard table and a checks list, locks the character and the look, voices it with a local voice that matches the character's gender, makes the scenes, adds captions and sound, and exports when you ask.

Fifteen looks, each with its own prompt file and a 10 second reference clip: classic black and white (light and dark), modern pop, prehistoric cave, cozy storytelling, historical cartoon, amber noir, rubber hose, hand-painted adventure, minimal line art, colorful hand-drawn, retro TV, survival thriller, avatar explainer, meme story animation and pixel theater.

## What you get

- `SKILL.md`: the workflow from script to export on Subclip tools, with a credit quote before every paid step.
- `references/style-index.md`: the look index and a guide to choosing one.
- `references/looks/`: 15 prompt files. Each has the style lock, the prompt recipe, the Subclip route, the credit note, the checks and a link to its reference clip.
- `references/directors-proposal.md`: the proposal and storyboard method with a worked example (`examples/director-storyboard-table.jpg`).
- `references/locks.md`, `voice-and-sound.md`, `subclip-assembly.md`: character locks, voice and sound rules, tools and credits.
- `references/overlap.md`: where this skill meets `cartoon-episodes`, `cartoon-animation`, `svg-character-animation` and others, and what it leaves to them.

## Two routes

Looks 01 to 08 use a video model (clips cost credits, motion is fluid). Looks 09 to 15 use stills plus editable motion layers (almost no credits, the cheap way). A 10 second video clip on `p-video-2` is about 25.5 credits at 720p; images from your own Codex CLI cost no Subclip credits. The agent quotes the live price and waits for your yes.

## What was changed from the original

The original project drives Google Flow, a local renderer, paid voice services and a large audio library through scripts. This version uses only Subclip tools and your credits, local speech first, public licensed audio search, and describes steps instead of running installers or scripts. The reference clips are the original author's samples cut to 10 seconds with the sound removed. Nothing in this skill makes a new film with those samples.

This test did not spend credits on generation. The worked proposal and the montage were made in code. Quality of a new film depends on the model and on how many retakes you approve.

<!-- examples:start -->

## Examples

<p align="center"><a href="examples/capability-stickman-video-director.mp4"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/stickman-video-director/capability-stickman-video-director.gif" alt="Capability montage of all 15 looks, labeled. Cut from the author's clips in Subclip, no AI model." width="480"></a><br><sub>Capability montage of all 15 looks, labeled. Cut from the author's clips in Subclip, no AI model. <a href="examples/capability-stickman-video-director.mp4">Play with sound</a></sub></p>

<p align="center"><img src="examples/director-storyboard-table.jpg" alt="Worked director's proposal: storyboard table, checks and cost line for a 30 s film. Rendered in code from HTML, no AI model." width="720"><br><sub>Worked director's proposal: storyboard table, checks and cost line for a 30 s film. Rendered in code from HTML, no AI model.</sub></p>

<p align="center"><a href="examples/01-classic-black-on-white.mp4"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/stickman-video-director/01-classic-black-on-white.gif" alt="1. Classic black on white (A1.1): hollow-head figure, flat canvas, red accent. Original author, Google Flow video model." width="480"></a><br><sub>1. Classic black on white (A1.1): hollow-head figure, flat canvas, red accent. Original author, Google Flow video model. <a href="examples/01-classic-black-on-white.mp4">Play with sound</a></sub></p>

<p align="center"><a href="examples/02-classic-white-on-black.mp4"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/stickman-video-director/02-classic-white-on-black.gif" alt="2. Classic white on black (A1.2): the dramatic variant of the same figure. Original author, Google Flow video model." width="480"></a><br><sub>2. Classic white on black (A1.2): the dramatic variant of the same figure. Original author, Google Flow video model. <a href="examples/02-classic-white-on-black.mp4">Play with sound</a></sub></p>

<p align="center"><a href="examples/03-modern-pop-minimal-tech.mp4"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/stickman-video-director/03-modern-pop-minimal-tech.gif" alt="3. Modern pop, minimal tech (A2.1): red beanie, white studio, cyan glass UI. Original author, Google Flow video model." width="480"></a><br><sub>3. Modern pop, minimal tech (A2.1): red beanie, white studio, cyan glass UI. Original author, Google Flow video model. <a href="examples/03-modern-pop-minimal-tech.mp4">Play with sound</a></sub></p>

<p align="center"><a href="examples/04-modern-pop-colorful-story.mp4"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/stickman-video-director/04-modern-pop-colorful-story.gif" alt="4. Modern pop, colorful story (A2.2): the beanie figure in cinematic light. Original author, Google Flow video model." width="480"></a><br><sub>4. Modern pop, colorful story (A2.2): the beanie figure in cinematic light. Original author, Google Flow video model. <a href="examples/04-modern-pop-colorful-story.mp4">Play with sound</a></sub></p>

<p align="center"><a href="examples/05-prehistoric-cave.mp4"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/stickman-video-director/05-prehistoric-cave.gif" alt="5. Prehistoric cave (A3): caveman satire with a twist. Original author, Google Flow video model. Burned-in subtitles are the sample's." width="480"></a><br><sub>5. Prehistoric cave (A3): caveman satire with a twist. Original author, Google Flow video model. Burned-in subtitles are the sample's. <a href="examples/05-prehistoric-cave.mp4">Play with sound</a></sub></p>

<p align="center"><a href="examples/06-cozy-storytelling.mp4"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/stickman-video-director/06-cozy-storytelling.gif" alt="6. Cozy storytelling (A4): a quiet cafe break, warm light. Original author, Google Flow video model." width="480"></a><br><sub>6. Cozy storytelling (A4): a quiet cafe break, warm light. Original author, Google Flow video model. <a href="examples/06-cozy-storytelling.mp4">Play with sound</a></sub></p>

<p align="center"><a href="examples/07-historical-cartoon.mp4"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/stickman-video-director/07-historical-cartoon.gif" alt="7. Historical cartoon (A5): an Edo samurai and street life. Original author, Google Flow video model." width="480"></a><br><sub>7. Historical cartoon (A5): an Edo samurai and street life. Original author, Google Flow video model. <a href="examples/07-historical-cartoon.mp4">Play with sound</a></sub></p>

<p align="center"><a href="examples/08-amber-noir.mp4"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/stickman-video-director/08-amber-noir.gif" alt="8. Amber noir (A6): orange hoodie in a warm-lit city, 8 s original. Original author, Veo 3.1 Fast in Google Flow." width="480"></a><br><sub>8. Amber noir (A6): orange hoodie in a warm-lit city, 8 s original. Original author, Veo 3.1 Fast in Google Flow. <a href="examples/08-amber-noir.mp4">Play with sound</a></sub></p>

<p align="center"><a href="examples/09-rubber-hose.mp4"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/stickman-video-director/09-rubber-hose.gif" alt="9. Rubber hose (A7): elastic acting chased by a cloud, 1930s scenery. Original author, Omni 1.2 Flash in Google Flow." width="480"></a><br><sub>9. Rubber hose (A7): elastic acting chased by a cloud, 1930s scenery. Original author, Omni 1.2 Flash in Google Flow. <a href="examples/09-rubber-hose.mp4">Play with sound</a></sub></p>

<p align="center"><a href="examples/10-hand-painted-adventure.mp4"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/stickman-video-director/10-hand-painted-adventure.gif" alt="10. Hand-painted adventure (A8): gouache mountain workshop. Original author, Google Flow video model." width="480"></a><br><sub>10. Hand-painted adventure (A8): gouache mountain workshop. Original author, Google Flow video model. <a href="examples/10-hand-painted-adventure.mp4">Play with sound</a></sub></p>

<p align="center"><a href="examples/11-minimal-line-art.mp4"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/stickman-video-director/11-minimal-line-art.gif" alt="11. Minimal line art (B1): handwritten hook on paper. Original author, gpt-image-2 stills animated and rendered in code." width="480"></a><br><sub>11. Minimal line art (B1): handwritten hook on paper. Original author, gpt-image-2 stills animated and rendered in code. <a href="examples/11-minimal-line-art.mp4">Play with sound</a></sub></p>

<details><summary>More example videos</summary>

<ul><li><a href="examples/12-colorful-hand-drawn.mp4">12. Colorful hand-drawn (B2): why trying to sleep keeps you awake. Original author, gpt-image-2 stills and code.</a></li><li><a href="examples/13-retro-tv.mp4">13. Retro TV (B3): a 3 AM broadcast mystery, white figures on dark. Original author, gpt-image-2 stills and code.</a></li><li><a href="examples/14-survival-thriller.mp4">14. Survival thriller (B4): night dispatcher rules and a rule 01 hook. Original author, gpt-image-2 stills and code.</a></li><li><a href="examples/15-avatar-explainer.mp4">15. Avatar explainer (B5): presenter bottom right, metaphors on the left stage. Original author, gpt-image-2 and code.</a></li><li><a href="examples/16-meme-story-animation.mp4">16. Meme story animation (B6): 1990s Hong Kong breakfast, painted layers. Original author, gpt-image-2 and code.</a></li><li><a href="examples/17-pixel-theater.mp4">17. Pixel theater (B7): a choice story drawn fully in code. Original author, no image model, rendered in code.</a></li></ul>

</details>

<p align="center"><sub>Clips 01 to 17 are the original author's samples from github.com/kaomei/stickman-video-director (MIT), trimmed to about 10 s, sound removed. The montage and the proposal table were made for this skill in code. No Subclip credits were spent.</sub></p>

<!-- examples:end -->

## Credit

This skill adapts kaomei/stickman-video-director (MIT), including its look descriptions, prompt contracts, the five-stage story method, the director's proposal contract, the voice continuity rules and the sample films used as reference clips. The upstream states that third-party music, sound effects and other assets keep their own licenses, so the sample sound is not included.

Original project: https://github.com/kaomei/stickman-video-director

Some looks name a YouTube channel as visual inspiration in the upstream. The upstream credits its style contributors; the A5 historical cartoon style and Roman era pack came from the GitHub user leksautomate. The sample films carry the original author's own presenter and channel marks.

Adapted for Subclip from https://github.com/kaomei/stickman-video-director by kaomei and the Stickman Video Director contributors, MIT
