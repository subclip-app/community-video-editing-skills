<div align="center">

# Community video editing skills for AI agents

**The largest free directory of video editing skills for Claude Code, Codex, Cursor and the [Subclip AI video editor](https://www.subclip.app).**

[![Star us on GitHub](https://img.shields.io/github/stars/subclip-app/community-video-editing-skills?style=for-the-badge&logo=github&label=Star%20us%20on%20GitHub&color=153592)](https://github.com/subclip-app/community-video-editing-skills)
[![Browse on subclip.app](https://img.shields.io/badge/browse-subclip.app-153592?style=for-the-badge)](https://www.subclip.app/agent-skills/community)
[![Submit a skill](https://img.shields.io/badge/submit-a%20skill-26c9d5?style=for-the-badge)](CONTRIBUTING.md)
[![License: MIT](https://img.shields.io/badge/license-MIT-3fa34d?style=for-the-badge)](LICENSE)

<table>
<tr>
<td width="33%"><a href="skills/stickman-video-director"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/stickman-video-director.gif" alt="Stickman video director" width="100%"></a></td>
<td width="33%"><a href="skills/code-motion-styles"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/code-motion-styles.gif" alt="Motion style prompts" width="100%"></a></td>
<td width="33%"><a href="skills/ai-style-atlas"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/ai-style-atlas.gif" alt="AI Style Atlas" width="100%"></a></td>
</tr>
</table>

[Browse every skill with previews, search and ratings on subclip.app](https://www.subclip.app/agent-skills/community)

</div>

Each skill teaches an AI agent one way of making video on an editable Subclip timeline: explainers, motion graphics, ads, slides, 3D, pixel art, captions, music and more. Every skill has a looping preview, real examples made with it, and its own folder you can read before you install. Skills adapted from other projects credit their original authors and keep their licenses.

## Install

**In the Subclip app:** open **Skills**, then **Browse Community**, and install any skill. Your agent reviews the files first, and nothing is executed.

**From the terminal:**

```sh
npx @subclip/community-skills install earshot          # one skill
npx @subclip/community-skills install --all --yes      # every skill, for Claude Code
npx @subclip/community-skills list                     # browse in the terminal
npx @subclip/community-skills update                   # move to the latest release
```

Add `--agent codex`, `--agent cursor` or `--agent all` for other agents. Files are checked against their sha256 before they are written. More in [packages/cli](packages/cli).

**From a link:** paste a skill page (for example `https://www.subclip.app/agent-skills/community/vox-explainer`) or a skill folder from this repo into **Skills**, then **Add skill**.

## How it works

1. **Pick** a skill from the previews below or on [subclip.app](https://www.subclip.app/agent-skills/community).
2. **Install** it in Subclip or with the command above.
3. **Ask** your agent for the video you want. It follows the skill on the Subclip timeline and tells you the credits before any paid step.

## Skill directory

<!-- skills:start -->

<p align="center"><b>73 skills</b> in 13 categories</p>

<p align="center"><a href="#explainers">Explainers</a> &nbsp;|&nbsp; <a href="#ui-and-saas">UI and SaaS</a> &nbsp;|&nbsp; <a href="#animation">Animation</a> &nbsp;|&nbsp; <a href="#templates">Templates</a> &nbsp;|&nbsp; <a href="#motion-graphics">Motion graphics</a> &nbsp;|&nbsp; <a href="#3d">3D</a> &nbsp;|&nbsp; <a href="#pixel-art">Pixel art</a> &nbsp;|&nbsp; <a href="#audio-and-music">Audio and music</a> &nbsp;|&nbsp; <a href="#promos">Promos</a> &nbsp;|&nbsp; <a href="#workflows">Workflows</a> &nbsp;|&nbsp; <a href="#b-roll">B-roll</a> &nbsp;|&nbsp; <a href="#clipping">Clipping</a> &nbsp;|&nbsp; <a href="#slides">Slides</a></p>

### Explainers

<table>
<tr>
<td width="50%" valign="top">
<a href="skills/vox-director"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/vox-director.gif" alt="Vox director preview" width="100%"></a><br>
<h4><a href="skills/vox-director">Vox director</a></h4>
<sub>Direct paper-collage explainers with beat maps, theme comparisons, wide-to-detail shot plans and editable motion in Subclip.</sub><br>
<sub>Adapted from <a href="https://github.com/Alisa0808/vox-director">Alisa0808/vox-director</a> &nbsp;|&nbsp; MIT &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/vox-director">View on subclip.app</a></sub>
</td>
<td width="50%" valign="top">
<a href="skills/documentary-case-file"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/documentary-case-file.gif" alt="Documentary case file preview" width="100%"></a><br>
<h4><a href="skills/documentary-case-file">Documentary case file</a></h4>
<sub>One sentence in, a documentary plan with chapters, locked stills, scene clips and a narrator, assembled on the Subclip timeline.</sub><br>
<sub>Adapted from <a href="https://app.notion.com/p/Claude-Creative-Skill-Library-Vol-2-3ffb5f1fde2d81938bb9eb76ea6c60d1">app.notion.com/p/Claude-Creative-Skill-Library-Vol-2-3ffb5f1fde2d81938bb9eb76ea6c60d1</a> &nbsp;|&nbsp; Not stated &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/documentary-case-file">View on subclip.app</a></sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="skills/anatomy"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/anatomy.gif" alt="Anatomy isometric figures preview" width="100%"></a><br>
<h4><a href="skills/anatomy">Anatomy isometric figures</a></h4>
<sub>Isometric explainer figures for video: a real object, many small parts and calm motion, built as HyperFrames scenes with optional narration.</sub><br>
<sub>Adapted from <a href="https://github.com/wheresryan22/anatomy">wheresryan22/anatomy</a> &nbsp;|&nbsp; MIT &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/anatomy">View on subclip.app</a></sub>
</td>
<td width="50%" valign="top">
<a href="skills/manim-composer"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/manim-composer.gif" alt="Manim composer preview" width="100%"></a><br>
<h4><a href="skills/manim-composer">Manim composer</a></h4>
<sub>Plan and build a 3Blue1Brown-style math explainer as animated, narrated motion-layer scenes.</sub><br>
<sub>Adapted from <a href="https://github.com/OpenMontageInc/OpenMontage">OpenMontageInc/OpenMontage</a> &nbsp;|&nbsp; AGPL-3.0 &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/manim-composer">View on subclip.app</a></sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="skills/vox-explainer"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/vox-explainer.gif" alt="Vox explainer preview" width="100%"></a><br>
<h4><a href="skills/vox-explainer">Vox explainer</a></h4>
<sub>One topic in, a finished Vox-style explainer.</sub><br>
<sub>Adapted from <a href="https://github.com/CK42BB/vox-explainer-skill">CK42BB/vox-explainer-skill</a> &nbsp;|&nbsp; MIT &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/vox-explainer">View on subclip.app</a></sub>
</td>
<td width="50%" valign="top">
<a href="skills/case-file-doc"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/case-file-doc.gif" alt="Case file doc preview" width="100%"></a><br>
<h4><a href="skills/case-file-doc">Case file doc</a></h4>
<sub>Narrated investigative doc cold opens from real reporting, with date stamps, highlighted documents and a dark evidence board, all built in code.</sub><br>
<sub>Adapted from <a href="https://github.com/Tejashmakwana/case-file-doc">github.com/Tejashmakwana/case-file-doc</a> &nbsp;|&nbsp; Not stated &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/case-file-doc">View on subclip.app</a></sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="skills/faceless-channel-video"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/faceless-channel-video.gif" alt="Faceless channel video preview" width="100%"></a><br>
<h4><a href="skills/faceless-channel-video">Faceless channel video</a></h4>
<sub>Faceless channel episodes planned as hook, build, turn and payoff, five sized shots per 10 s block, a 20 to 23 word pacing gate and one locked look.</sub><br>
<sub>Adapted from <a href="https://github.com/higgsfield-ai/skills">higgsfield-ai/skills</a> &nbsp;|&nbsp; MIT &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/faceless-channel-video">View on subclip.app</a></sub>
</td>
<td width="50%" valign="top">
<a href="skills/rough-sketch"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/rough-sketch.gif" alt="Rough sketch preview" width="100%"></a><br>
<h4><a href="skills/rough-sketch">Rough sketch</a></h4>
<sub>Hand-drawn whiteboard explainers with Rough.js: sketchy diagrams, charts, arrows and circled callouts drawn on in sync with the voice.</sub><br>
<sub>Adapted from <a href="https://github.com/rough-stuff/rough">rough-stuff/rough</a> &nbsp;|&nbsp; MIT &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/rough-sketch">View on subclip.app</a></sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="skills/video-explainer"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/video-explainer.gif" alt="Video explainer preview" width="100%"></a><br>
<h4><a href="skills/video-explainer">Video explainer</a></h4>
<sub>Any topic, doc or URL to a tight 60 to 75 second explainer in Motion, Illustrated or 3D, with narration, word-timed animation and captions.</sub><br>
<sub>Adapted from <a href="https://github.com/petergyang/video-explainer">petergyang/video-explainer</a> &nbsp;|&nbsp; MIT &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/video-explainer">View on subclip.app</a></sub>
</td>
<td width="50%"></td>
</tr>
</table>

### UI and SaaS

<table>
<tr>
<td width="50%" valign="top">
<a href="skills/product-launch-motion"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/product-launch-motion.gif" alt="Product launch motion preview" width="100%"></a><br>
<h4><a href="skills/product-launch-motion">Product launch motion</a></h4>
<sub>A launch film from code with one shape that never cuts, springs and a cursor, plus 68 scene types, recipes and easings with clips.</sub><br>
<sub>Adapted from <a href="https://github.com/AbubakrChan/product-launch-motion">AbubakrChan/product-launch-motion</a> &nbsp;|&nbsp; MIT &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/product-launch-motion">View on subclip.app</a></sub>
</td>
<td width="50%" valign="top">
<a href="skills/video-shotcraft"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/video-shotcraft.gif" alt="Video Shotcraft preview" width="100%"></a><br>
<h4><a href="skills/video-shotcraft">Video Shotcraft</a></h4>
<sub>Build product promos from shot recipes, real product captures, beat-aligned cuts, and editable music and sound effects.</sub><br>
<sub>Adapted from <a href="https://github.com/Vincentwei1021/video-shotcraft">Vincentwei1021/video-shotcraft</a> &nbsp;|&nbsp; Apache-2.0 &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/video-shotcraft">View on subclip.app</a></sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="skills/website-to-video"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/website-to-video.gif" alt="Website to video preview" width="100%"></a><br>
<h4><a href="skills/website-to-video">Website to video</a></h4>
<sub>Turn any public website into a branded video: capture, storyboard, voice, sound and editable motion layers.</sub><br>
<sub>Adapted from <a href="https://github.com/OpenMontageInc/OpenMontage">OpenMontageInc/OpenMontage</a> &nbsp;|&nbsp; AGPL-3.0 &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/website-to-video">View on subclip.app</a></sub>
</td>
<td width="50%" valign="top">
<a href="skills/archify"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/archify.gif" alt="Archify preview" width="100%"></a><br>
<h4><a href="skills/archify">Archify</a></h4>
<sub>Turn an idea, plan, codebase or PR into a narrated diagram video: 10 diagram types, source-backed story scenes, code highlights and captions.</sub><br>
<sub>Adapted from <a href="https://github.com/tt-a1i/archify">tt-a1i/archify</a> &nbsp;|&nbsp; Apache-2.0 &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/archify">View on subclip.app</a></sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="skills/changelog-video"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/changelog-video.gif" alt="Changelog video preview" width="100%"></a><br>
<h4><a href="skills/changelog-video">Changelog video</a></h4>
<sub>Release notes in, a 40 to 60 s release video out, where an animated mock of your real UI acts out each change, with voice, captions and music.</sub><br>
<sub>Adapted from <a href="https://github.com/heygen-com/hyperframes">heygen-com/hyperframes</a> &nbsp;|&nbsp; Apache-2.0 &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/changelog-video">View on subclip.app</a></sub>
</td>
<td width="50%" valign="top">
<a href="skills/figma-to-motion"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/figma-to-motion.gif" alt="Figma to motion preview" width="100%"></a><br>
<h4><a href="skills/figma-to-motion">Figma to motion</a></h4>
<sub>Figma frames, layers and brand tokens into editable motion: storyboard frames become states of one element, UI frames become click-driven mocks.</sub><br>
<sub>Adapted from <a href="https://github.com/heygen-com/hyperframes">heygen-com/hyperframes</a> &nbsp;|&nbsp; Apache-2.0 &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/figma-to-motion">View on subclip.app</a></sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="skills/hallmark"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/hallmark.gif" alt="Hallmark preview" width="100%"></a><br>
<h4><a href="skills/hallmark">Hallmark</a></h4>
<sub>Pages, product UI and SaaS promo videos that look designed, not generated, checked against a numbered list of AI slop tells.</sub><br>
<sub>Adapted from <a href="https://github.com/Nutlope/hallmark">Nutlope/hallmark</a> &nbsp;|&nbsp; MIT &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/hallmark">View on subclip.app</a></sub>
</td>
<td width="50%" valign="top">
<a href="skills/huashu-motion"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/huashu-motion.gif" alt="Huashu motion preview" width="100%"></a><br>
<h4><a href="skills/huashu-motion">Huashu motion</a></h4>
<sub>The director method for launch films as code. Real product material, three directions, a treatment, an energy shape and frame-pointed fixes.</sub><br>
<sub>Adapted from <a href="https://github.com/alchaincyf/huashu-motion">alchaincyf/huashu-motion</a> &nbsp;|&nbsp; MIT &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/huashu-motion">View on subclip.app</a></sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="skills/hyperframes-motion-layers"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/hyperframes-motion-layers.gif" alt="HyperFrames motion layers preview" width="100%"></a><br>
<h4><a href="skills/hyperframes-motion-layers">HyperFrames motion layers</a></h4>
<sub>Built into Subclip: an agent builds editable HTML, GSAP and Lottie layers for titles, charts, maps, captions and device scenes.</sub><br>
<sub>Written for Subclip &nbsp;|&nbsp; MIT &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/hyperframes-motion-layers">View on subclip.app</a></sub>
</td>
<td width="50%" valign="top">
<a href="skills/impeccable"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/impeccable.gif" alt="Impeccable preview" width="100%"></a><br>
<h4><a href="skills/impeccable">Impeccable</a></h4>
<sub>Critique, polish, typeset, colorize and lay out product UI and SaaS videos with one design vocabulary, plus the original website commands.</sub><br>
<sub>Adapted from <a href="https://github.com/pbakaus/impeccable">pbakaus/impeccable</a> &nbsp;|&nbsp; Apache-2.0 &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/impeccable">View on subclip.app</a></sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="skills/motionmaxxing"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/motionmaxxing.gif" alt="motionmaxxing preview" width="100%"></a><br>
<h4><a href="skills/motionmaxxing">motionmaxxing</a></h4>
<sub>Launch films and brand stings with a brand-owned idea, a built world, eases measured on 53 pro moments and six honest frame review gates.</sub><br>
<sub>Adapted from <a href="https://github.com/Tejashmakwana/motionmaxxing">Tejashmakwana/motionmaxxing</a> &nbsp;|&nbsp; Apache-2.0 &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/motionmaxxing">View on subclip.app</a></sub>
</td>
<td width="50%" valign="top">
<a href="skills/pr-to-video"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/pr-to-video.gif" alt="PR to video preview" width="100%"></a><br>
<h4><a href="skills/pr-to-video">PR to video</a></h4>
<sub>A public pull request in, a 30 to 45 s video out that explains what changed and why, with one legible code diff, proof from the PR and a true end card.</sub><br>
<sub>Adapted from <a href="https://github.com/heygen-com/hyperframes">heygen-com/hyperframes</a> &nbsp;|&nbsp; Apache-2.0 &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/pr-to-video">View on subclip.app</a></sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="skills/remotion-motion-layers"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/remotion-motion-layers.gif" alt="Remotion motion layers preview" width="100%"></a><br>
<h4><a href="skills/remotion-motion-layers">Remotion motion layers</a></h4>
<sub>Built into Subclip: an agent builds editable React and TSX layers for titles, charts, globe maps, 3D and device scenes with typed props.</sub><br>
<sub>Written for Subclip &nbsp;|&nbsp; MIT &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/remotion-motion-layers">View on subclip.app</a></sub>
</td>
<td width="50%" valign="top">
<a href="skills/screen-recording-polish"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/screen-recording-polish.gif" alt="Screen recording polish preview" width="100%"></a><br>
<h4><a href="skills/screen-recording-polish">Screen recording polish</a></h4>
<sub>Polish screen demos: an oversized cursor whose every click causes the next beat, and captions that ride on top: drop, rail or one embed.</sub><br>
<sub>Adapted from <a href="https://github.com/heygen-com/hyperframes">heygen-com/hyperframes</a> &nbsp;|&nbsp; Apache-2.0 &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/screen-recording-polish">View on subclip.app</a></sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="skills/taste-skill"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/taste-skill.gif" alt="Taste skill preview" width="100%"></a><br>
<h4><a href="skills/taste-skill">Taste skill</a></h4>
<sub>Anti-slop art direction for websites and SaaS videos: one system, real product UI, one hero entrance, one or two moments, plain copy, checked frame by frame.</sub><br>
<sub>Adapted from <a href="https://github.com/Leonxlnx/taste-skill">Leonxlnx/taste-skill</a> &nbsp;|&nbsp; MIT &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/taste-skill">View on subclip.app</a></sub>
</td>
<td width="50%" valign="top">
<a href="skills/transitions-dev"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/transitions-dev.gif" alt="transitions-dev for video preview" width="100%"></a><br>
<h4><a href="skills/transitions-dev">transitions-dev for video</a></h4>
<sub>Pick the right UI transition for each state change in a SaaS explainer, build seekable product UI scenes and polish the motion frame by frame.</sub><br>
<sub>Adapted from <a href="https://github.com/Jakubantalik/transitions.dev">Jakubantalik/transitions.dev</a> &nbsp;|&nbsp; Transitions.dev License &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/transitions-dev">View on subclip.app</a></sub>
</td>
</tr>
</table>

### Animation

<table>
<tr>
<td width="50%" valign="top">
<a href="skills/stickman-video-director"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/stickman-video-director.gif" alt="Stickman video director preview" width="100%"></a><br>
<h4><a href="skills/stickman-video-director">Stickman video director</a></h4>
<sub>Turn a script into a stick figure video: director proposal with checks, 15 locked looks, gender-matched local voice, scenes, captions, sound and export.</sub><br>
<sub>Adapted from <a href="https://github.com/kaomei/stickman-video-director">kaomei/stickman-video-director</a> &nbsp;|&nbsp; MIT &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/stickman-video-director">View on subclip.app</a></sub>
</td>
<td width="50%" valign="top">
<a href="skills/ai-style-atlas"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/ai-style-atlas.gif" alt="AI Style Atlas preview" width="100%"></a><br>
<h4><a href="skills/ai-style-atlas">AI Style Atlas</a></h4>
<sub>Pick any of 86 visual styles by name or mood and restyle an explainer on your topic in that look, built as editable layers.</sub><br>
<sub>Adapted from <a href="https://www.futurepedia.io/resources/ai-style-atlas/view">www.futurepedia.io/resources/ai-style-atlas/view</a> &nbsp;|&nbsp; Not stated &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/ai-style-atlas">View on subclip.app</a></sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="skills/tvhead-story-looks"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/tvhead-story-looks.gif" alt="TV-Head Doodle and Cartoon Stories preview" width="100%"></a><br>
<h4><a href="skills/tvhead-story-looks">TV-Head Doodle and Cartoon Stories</a></h4>
<sub>Turn a topic into a narrated story video in 15 looks (doodle, cartoon, stickman, game), with a director's proposal and 10 second AI-video prompts.</sub><br>
<sub>Adapted from <a href="https://github.com/Vladic20/tvhead-studio">Vladic20/tvhead-studio</a> &nbsp;|&nbsp; MIT &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/tvhead-story-looks">View on subclip.app</a></sub>
</td>
<td width="50%" valign="top">
<a href="skills/code-animation-styles-remotion"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/code-animation-styles-remotion.gif" alt="39 code-drawn animation styles preview" width="100%"></a><br>
<h4><a href="skills/code-animation-styles-remotion">39 code-drawn animation styles</a></h4>
<sub>Pick one of 39 code-drawn looks (whiteboard, papercut, pixel art, hologram and more) and retell your story in it as an editable layer, with no AI credits.</sub><br>
<sub>Adapted from <a href="https://github.com/deenukhan/animation-styles">deenukhan/animation-styles</a> &nbsp;|&nbsp; MIT &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/code-animation-styles-remotion">View on subclip.app</a></sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="skills/motion-polish"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/motion-polish.gif" alt="Motion polish preview" width="100%"></a><br>
<h4><a href="skills/motion-polish">Motion polish</a></h4>
<sub>Eight skills to animate, review, simplify and name motion on video layers, text and transitions with a high craft bar.</sub><br>
<sub>Adapted from <a href="https://github.com/emilkowalski/skills">emilkowalski/skills</a> &nbsp;|&nbsp; MIT &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/motion-polish">View on subclip.app</a></sub>
</td>
<td width="50%" valign="top">
<a href="skills/cartoon-episodes"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/cartoon-episodes.gif" alt="Cartoon episodes preview" width="100%"></a><br>
<h4><a href="skills/cartoon-episodes">Cartoon episodes</a></h4>
<sub>Define a show once, then turn one-sentence scenes into consistent AI cartoon clips and cut them into an episode.</sub><br>
<sub>Adapted from <a href="https://app.notion.com/p/Claude-Creative-Skill-Library-Vol-2-3ffb5f1fde2d81938bb9eb76ea6c60d1">app.notion.com/p/Claude-Creative-Skill-Library-Vol-2-3ffb5f1fde2d81938bb9eb76ea6c60d1</a> &nbsp;|&nbsp; Not stated &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/cartoon-episodes">View on subclip.app</a></sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="skills/wan-animation-styles"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/wan-animation-styles.gif" alt="Wan animation styles preview" width="100%"></a><br>
<h4><a href="skills/wan-animation-styles">Wan animation styles</a></h4>
<sub>Photo to style frame to animation in five looks (Expressionism, rubber hose, gothic toon, surreal cartoon, PS1) with Wan 3, plus a multi-shot scene recipe.</sub><br>
<sub>Adapted from <a href="https://www.instagram.com/sferro21">www.instagram.com/sferro21</a> &nbsp;|&nbsp; Not stated &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/wan-animation-styles">View on subclip.app</a></sub>
</td>
<td width="50%" valign="top">
<a href="skills/paper-cut-motion"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/paper-cut-motion.gif" alt="Paper-cut motion preview" width="100%"></a><br>
<h4><a href="skills/paper-cut-motion">Paper-cut motion</a></h4>
<sub>Turn any image into a torn paper collage and a video where the scene assembles piece by piece, finished on the Subclip timeline.</sub><br>
<sub>Adapted from <a href="https://app.notion.com/p/Claude-Creative-Skill-Library-Vol-2-3ffb5f1fde2d81938bb9eb76ea6c60d1">app.notion.com/p/Claude-Creative-Skill-Library-Vol-2-3ffb5f1fde2d81938bb9eb76ea6c60d1</a> &nbsp;|&nbsp; Not stated &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/paper-cut-motion">View on subclip.app</a></sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="skills/claude-drawing-skill"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/claude-drawing-skill.gif" alt="Claude Drawing preview" width="100%"></a><br>
<h4><a href="skills/claude-drawing-skill">Claude Drawing</a></h4>
<sub>Draw ink washes, paper collages and line art in code, then reveal the marks in editable Subclip motion layers.</sub><br>
<sub>Adapted from <a href="https://github.com/cloveric/claude-drawing-skill">cloveric/claude-drawing-skill</a> &nbsp;|&nbsp; MIT &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/claude-drawing-skill">View on subclip.app</a></sub>
</td>
<td width="50%" valign="top">
<a href="skills/cartoon-animation"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/cartoon-animation.gif" alt="Cartoon animation preview" width="100%"></a><br>
<h4><a href="skills/cartoon-animation">Cartoon animation</a></h4>
<sub>Hand-painted cartoon shots with boiling ink linework, acted emotions and brush-wipe transitions in motion layers.</sub><br>
<sub>Adapted from <a href="https://github.com/JohnHeibel/ClaudeAnimationBase">JohnHeibel/ClaudeAnimationBase</a> &nbsp;|&nbsp; MIT &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/cartoon-animation">View on subclip.app</a></sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="skills/svg-character-animation"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/svg-character-animation.gif" alt="SVG character animation preview" width="100%"></a><br>
<h4><a href="skills/svg-character-animation">SVG character animation</a></h4>
<sub>Rig and animate an SVG character in an editable Subclip motion layer with readable acting.</sub><br>
<sub>Adapted from <a href="https://github.com/OpenMontageInc/OpenMontage">OpenMontageInc/OpenMontage</a> &nbsp;|&nbsp; AGPL-3.0 &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/svg-character-animation">View on subclip.app</a></sub>
</td>
<td width="50%" valign="top">
<a href="skills/character-animation-qa"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/character-animation-qa.gif" alt="Character animation QA preview" width="100%"></a><br>
<h4><a href="skills/character-animation-qa">Character animation QA</a></h4>
<sub>Review a character animation with sampled frames, motion checks and a pass, revise or fail verdict.</sub><br>
<sub>Adapted from <a href="https://github.com/OpenMontageInc/OpenMontage">OpenMontageInc/OpenMontage</a> &nbsp;|&nbsp; AGPL-3.0 &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/character-animation-qa">View on subclip.app</a></sub>
</td>
</tr>
</table>

### Templates

<table>
<tr>
<td width="50%" valign="top">
<a href="skills/open-design-video-templates"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/open-design-video-templates.gif" alt="Open Design Video Templates preview" width="100%"></a><br>
<h4><a href="skills/open-design-video-templates">Open Design Video Templates</a></h4>
<sub>22 editable Subclip motion recipes for kinetic type, editorial data, product promos, diagrams and brand frames.</sub><br>
<sub>Adapted from <a href="https://github.com/nexu-io/open-design">nexu-io/open-design</a> &nbsp;|&nbsp; Apache-2.0 &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/open-design-video-templates">View on subclip.app</a></sub>
</td>
<td width="50%" valign="top">
<a href="skills/ai-illustration-styles"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/ai-illustration-styles.gif" alt="AI illustration styles preview" width="100%"></a><br>
<h4><a href="skills/ai-illustration-styles">AI illustration styles</a></h4>
<sub>Restyle any photo or video frame into 12 illustration looks (UPA, noir, superflat, risograph, anime, gouache and more) with one reusable prompt wrapper.</sub><br>
<sub>Adapted from <a href="https://www.instagram.com/sferro21">www.instagram.com/sferro21</a> &nbsp;|&nbsp; Not stated &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/ai-illustration-styles">View on subclip.app</a></sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="skills/portrait-style-prompts"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/portrait-style-prompts.gif" alt="Portrait style prompts preview" width="100%"></a><br>
<h4><a href="skills/portrait-style-prompts">Portrait style prompts</a></h4>
<sub>Turn a frame of your video into a styled portrait (anime, watercolour, pixel art, noir, paper cut) with a seven-slot prompt, then make a video in that style.</sub><br>
<sub>Adapted from <a href="https://www.instagram.com/sferro21">www.instagram.com/sferro21</a> &nbsp;|&nbsp; Not stated &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/portrait-style-prompts">View on subclip.app</a></sub>
</td>
<td width="50%"></td>
</tr>
</table>

### Motion graphics

<table>
<tr>
<td width="50%" valign="top">
<a href="skills/code-motion-styles"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/code-motion-styles.gif" alt="Motion style prompts preview" width="100%"></a><br>
<h4><a href="skills/code-motion-styles">Motion style prompts</a></h4>
<sub>Sixteen new code-built motion styles (3D charts, line-art diagrams, glow sketch, cel anime, brick world, galaxy, glitch cut) as editable layers.</sub><br>
<sub>Adapted from <a href="https://www.its-applied-ai.com/r/styles">www.its-applied-ai.com/r/styles</a> &nbsp;|&nbsp; Not stated &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/code-motion-styles">View on subclip.app</a></sub>
</td>
<td width="50%" valign="top">
<a href="skills/huashu-art-motion"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/huashu-art-motion.gif" alt="Huashu art motion preview" width="100%"></a><br>
<h4><a href="skills/huashu-art-motion">Huashu art motion</a></h4>
<sub>Living paintings, art-history journeys and nine explainer animation grammars on an editable Subclip timeline.</sub><br>
<sub>Adapted from <a href="https://github.com/alchaincyf/huashu-art-motion">alchaincyf/huashu-art-motion</a> &nbsp;|&nbsp; MIT &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/huashu-art-motion">View on subclip.app</a></sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="skills/bang-motion"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/bang-motion.gif" alt="Bang Motion preview" width="100%"></a><br>
<h4><a href="skills/bang-motion">Bang Motion</a></h4>
<sub>Brand-led openers, kinetic type, product demos and six explainer styles as editable Subclip motion layers.</sub><br>
<sub>Adapted from <a href="https://github.com/bangtutorial/bang-motion">bangtutorial/bang-motion</a> &nbsp;|&nbsp; MIT &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/bang-motion">View on subclip.app</a></sub>
</td>
<td width="50%" valign="top">
<a href="skills/motion-reel-studio"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/motion-reel-studio.gif" alt="Motion Reel Studio preview" width="100%"></a><br>
<h4><a href="skills/motion-reel-studio">Motion Reel Studio</a></h4>
<sub>Make a vertical reel in 5 code-built styles (kinetic mascot, 3D tower, film set, anime opening, phone shot) with safe zones and a -14 LUFS master.</sub><br>
<sub>Adapted from <a href="https://github.com/Vladic20/tvhead-studio">Vladic20/tvhead-studio</a> &nbsp;|&nbsp; MIT &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/motion-reel-studio">View on subclip.app</a></sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="skills/open-design-motion"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/open-design-motion.gif" alt="Open Design Motion preview" width="100%"></a><br>
<h4><a href="skills/open-design-motion">Open Design Motion</a></h4>
<sub>Six editable Subclip workflows for animated posters, short shots, pixel sprites, audio, explainers and 3D device showcases.</sub><br>
<sub>Adapted from <a href="https://github.com/nexu-io/open-design">nexu-io/open-design</a> &nbsp;|&nbsp; Apache-2.0 &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/open-design-motion">View on subclip.app</a></sub>
</td>
<td width="50%" valign="top">
<a href="skills/mg-styles-15"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/mg-styles-15.gif" alt="15 Motion Design Styles preview" width="100%"></a><br>
<h4><a href="skills/mg-styles-15">15 Motion Design Styles</a></h4>
<sub>Pick one of 15 deeply specified motion design styles and make your own 10 second film in it as editable layers, reviewed with a jury rubric.</sub><br>
<sub>Adapted from <a href="https://github.com/Vincentwei1021/mg-styles-15">Vincentwei1021/mg-styles-15</a> &nbsp;|&nbsp; MIT &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/mg-styles-15">View on subclip.app</a></sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="skills/motion-design-principles"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/motion-design-principles.gif" alt="Motion design principles preview" width="100%"></a><br>
<h4><a href="skills/motion-design-principles">Motion design principles</a></h4>
<sub>Timing, easing, choreography and the 12 principles of animation applied to every keyframe and motion layer, with a frame review checklist.</sub><br>
<sub>Adapted from <a href="https://github.com/LottieFiles/motion-design-skill">LottieFiles/motion-design-skill</a> &nbsp;|&nbsp; MIT &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/motion-design-principles">View on subclip.app</a></sub>
</td>
<td width="50%" valign="top">
<a href="skills/motion-graphics-skills-pack"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/motion-graphics-skills-pack.gif" alt="Motion graphics skills pack preview" width="100%"></a><br>
<h4><a href="skills/motion-graphics-skills-pack">Motion graphics skills pack</a></h4>
<sub>Fifteen code-built motion recipes as editable layers - Mac-style launch film, milestone reveal, 16 premium effects, loop cover, reel export and more.</sub><br>
<sub>Adapted from <a href="https://github.com/charlie947/motion-graphics-skills">charlie947/motion-graphics-skills</a> &nbsp;|&nbsp; MIT &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/motion-graphics-skills-pack">View on subclip.app</a></sub>
</td>
</tr>
</table>

### 3D

<table>
<tr>
<td width="50%" valign="top">
<a href="skills/3d-myth-short"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/3d-myth-short.gif" alt="3D myth short preview" width="100%"></a><br>
<h4><a href="skills/3d-myth-short">3D myth short</a></h4>
<sub>One idea in, a narrated 30 second 3D animated short: the myth, the twist and the real mechanism, built on the timeline.</sub><br>
<sub>Adapted from <a href="https://app.notion.com/p/Claude-Creative-Skill-Library-Vol-2-3ffb5f1fde2d81938bb9eb76ea6c60d1">app.notion.com/p/Claude-Creative-Skill-Library-Vol-2-3ffb5f1fde2d81938bb9eb76ea6c60d1</a> &nbsp;|&nbsp; Not stated &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/3d-myth-short">View on subclip.app</a></sub>
</td>
<td width="50%" valign="top">
<a href="skills/threejs-3d-scenes"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/threejs-3d-scenes.gif" alt="Three.js 3D scenes preview" width="100%"></a><br>
<h4><a href="skills/threejs-3d-scenes">Three.js 3D scenes</a></h4>
<sub>Build editable 3D device reveals, camera moves, and product turntables in Subclip.</sub><br>
<sub>Adapted from <a href="https://github.com/mrdoob/three.js">mrdoob/three.js</a> &nbsp;|&nbsp; MIT &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/threejs-3d-scenes">View on subclip.app</a></sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="skills/r3f-physics-and-effects"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/r3f-physics-and-effects.gif" alt="R3F Physics and Effects preview" width="100%"></a><br>
<h4><a href="skills/r3f-physics-and-effects">R3F Physics and Effects</a></h4>
<sub>Build editable 3D impact shots with bouncing bodies, contact cues, and luminous accents.</sub><br>
<sub>Adapted from <a href="https://github.com/pmndrs/react-three-rapier">pmndrs/react-three-rapier</a> &nbsp;|&nbsp; MIT &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/r3f-physics-and-effects">View on subclip.app</a></sub>
</td>
<td width="50%" valign="top">
<a href="skills/blender-to-subclip"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/blender-to-subclip.gif" alt="Blender to Subclip preview" width="100%"></a><br>
<h4><a href="skills/blender-to-subclip">Blender to Subclip</a></h4>
<sub>Build and review a short Blender shot, then place the rendered clip or stills on an editable Subclip timeline.</sub><br>
<sub>Adapted from <a href="https://github.com/ahujasid/mcp-for-blender">ahujasid/mcp-for-blender</a> &nbsp;|&nbsp; MIT &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/blender-to-subclip">View on subclip.app</a></sub>
</td>
</tr>
</table>

### Pixel art

<table>
<tr>
<td width="50%" valign="top">
<a href="skills/pixelfx"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/pixelfx.gif" alt="Pixelfx preview" width="100%"></a><br>
<h4><a href="skills/pixelfx">Pixelfx</a></h4>
<sub>244 pixel art effect recipes (fire, magic, impacts, weather, UI, transitions) for canvas motion layers in Subclip.</sub><br>
<sub>Adapted from <a href="https://github.com/patch-gg/pixelfx">patch-gg/pixelfx</a> &nbsp;|&nbsp; MIT &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/pixelfx">View on subclip.app</a></sub>
</td>
<td width="50%"></td>
</tr>
</table>

### Audio and music

<table>
<tr>
<td width="50%" valign="top">
<a href="skills/music-to-video"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/music-to-video.gif" alt="Music to video preview" width="100%"></a><br>
<h4><a href="skills/music-to-video">Music to video</a></h4>
<sub>Turn a music track into a beat-synced video with kinetic type, your own clips and editable motion layers.</sub><br>
<sub>Adapted from <a href="https://github.com/OpenMontageInc/OpenMontage">OpenMontageInc/OpenMontage</a> &nbsp;|&nbsp; AGPL-3.0 &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/music-to-video">View on subclip.app</a></sub>
</td>
<td width="50%" valign="top">
<a href="skills/cut-to-the-beat"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/cut-to-the-beat.gif" alt="Cut to the beat preview" width="100%"></a><br>
<h4><a href="skills/cut-to-the-beat">Cut to the beat</a></h4>
<sub>Cut footage, captions and motion graphics to the music's beat with a beat map, a frame-snapped cut list and checks.</sub><br>
<sub>Written for Subclip &nbsp;|&nbsp; ISC &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/cut-to-the-beat">View on subclip.app</a></sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="skills/earshot"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/earshot.gif" alt="Sound effects from words preview" width="100%"></a><br>
<h4><a href="skills/earshot">Sound effects from words</a></h4>
<sub>Ask for UI clicks, whooshes, risers, impacts and typing in plain words, then place them on the timeline with levels and ducking.</sub><br>
<sub>Adapted from <a href="https://github.com/Leonxlnx/earshot">Leonxlnx/earshot</a> &nbsp;|&nbsp; MIT &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/earshot">View on subclip.app</a></sub>
</td>
<td width="50%"></td>
</tr>
</table>

### Promos

<table>
<tr>
<td width="50%" valign="top">
<a href="skills/ugc-ad-director"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/ugc-ad-director.gif" alt="UGC ad director preview" width="100%"></a><br>
<h4><a href="skills/ugc-ad-director">UGC ad director</a></h4>
<sub>Stage-gated UGC ad director: character, product and location sheets, concepts, script, storyboard and a consistency check before any video is made.</sub><br>
<sub>Adapted from <a href="https://docs.google.com/document/d/1Fl1YmUx7ODrjNEjzBcFIZbW3x6wTN2uhee5SMgSFX6s/edit">docs.google.com/document/d/1Fl1YmUx7ODrjNEjzBcFIZbW3x6wTN2uhee5SMgSFX6s/edit</a> &nbsp;|&nbsp; Not stated &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/ugc-ad-director">View on subclip.app</a></sub>
</td>
<td width="50%" valign="top">
<a href="skills/trendjack-animator"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/trendjack-animator.gif" alt="Trending animated ads preview" width="100%"></a><br>
<h4><a href="skills/trendjack-animator">Trending animated ads</a></h4>
<sub>Make trending vertical animated ads (song ad, cartoon story, 3D explainer, skeleton) with audio-first timing and safe-zone captions.</sub><br>
<sub>Adapted from <a href="https://github.com/holy-templar/drama-song-ad">holy-templar/drama-song-ad</a> &nbsp;|&nbsp; MIT &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/trendjack-animator">View on subclip.app</a></sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="skills/ai-ad-formats"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/ai-ad-formats.gif" alt="AI ad formats preview" width="100%"></a><br>
<h4><a href="skills/ai-ad-formats">AI ad formats</a></h4>
<sub>Five ad formats from one product photo: claymation (4 styles), paper animation (5 styles), singing ad, talking object and skeleton progression.</sub><br>
<sub>Adapted from <a href="https://app.notion.com/p/Claude-Creative-Skill-Library-Vol-2-3ffb5f1fde2d81938bb9eb76ea6c60d1">app.notion.com/p/Claude-Creative-Skill-Library-Vol-2-3ffb5f1fde2d81938bb9eb76ea6c60d1</a> &nbsp;|&nbsp; Not stated &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/ai-ad-formats">View on subclip.app</a></sub>
</td>
<td width="50%" valign="top">
<a href="skills/commercial-pipeline"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/commercial-pipeline.gif" alt="Commercial pipeline preview" width="100%"></a><br>
<h4><a href="skills/commercial-pipeline">Commercial pipeline</a></h4>
<sub>Plan 5 to 8 locked reference images, then assemble a 30 second multi-cut AI commercial and fix only what broke.</sub><br>
<sub>Adapted from <a href="https://app.notion.com/p/Claude-Creative-Skill-Library-Vol-2-3ffb5f1fde2d81938bb9eb76ea6c60d1">app.notion.com/p/Claude-Creative-Skill-Library-Vol-2-3ffb5f1fde2d81938bb9eb76ea6c60d1</a> &nbsp;|&nbsp; Not stated &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/commercial-pipeline">View on subclip.app</a></sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="skills/anatomy-reveal"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/anatomy-reveal.gif" alt="Anatomy reveal preview" width="100%"></a><br>
<h4><a href="skills/anatomy-reveal">Anatomy reveal</a></h4>
<sub>Exploded views and product highlight shots of any physical product, built part by part from real dimensions as one editable HyperFrames layer.</sub><br>
<sub>Adapted from <a href="https://github.com/annnguyentt/anatomy-reveal-skill">annnguyentt/anatomy-reveal-skill</a> &nbsp;|&nbsp; MIT &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/anatomy-reveal">View on subclip.app</a></sub>
</td>
<td width="50%" valign="top">
<a href="skills/ugc-ad-engine"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/ugc-ad-engine.gif" alt="UGC ad engine preview" width="100%"></a><br>
<h4><a href="skills/ugc-ad-engine">UGC ad engine</a></h4>
<sub>Product and avatar in, finished vertical UGC ad out: angles, one gate, script, prompt sheet, avatar clips, captions and CTA on the timeline.</sub><br>
<sub>Adapted from <a href="https://www.skool.com/learn-ai-with-websitelearners-5339/new-video-how-to-create-ai-ugc-ad-full-tutorial?p=5220d4a0">www.skool.com/learn-ai-with-websitelearners-5339/new-video-how-to-create-ai-ugc-ad-full-tutorial?p=5220d4a0</a> &nbsp;|&nbsp; Not stated &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/ugc-ad-engine">View on subclip.app</a></sub>
</td>
</tr>
</table>

### Workflows

<table>
<tr>
<td width="50%" valign="top">
<a href="skills/video-translate"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/video-translate.gif" alt="Video translate preview" width="100%"></a><br>
<h4><a href="skills/video-translate">Video translate</a></h4>
<sub>Translate and dub a video into one or more languages with per-speaker voices, timing checks and optional lip-sync.</sub><br>
<sub>Adapted from <a href="https://github.com/OpenMontageInc/OpenMontage">OpenMontageInc/OpenMontage</a> &nbsp;|&nbsp; AGPL-3.0 &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/video-translate">View on subclip.app</a></sub>
</td>
<td width="50%" valign="top">
<a href="skills/ai-edit-battle"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/ai-edit-battle.gif" alt="AI edit battle preview" width="100%"></a><br>
<h4><a href="skills/ai-edit-battle">AI edit battle</a></h4>
<sub>Two AI models or agents edit the same clip from the same brief in cloned projects. Compare, score and pick a winner.</sub><br>
<sub>Adapted from <a href="https://www.instagram.com/sferro21">www.instagram.com/sferro21</a> &nbsp;|&nbsp; Not stated &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/ai-edit-battle">View on subclip.app</a></sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="skills/higgsfield-to-subclip"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/higgsfield-to-subclip.gif" alt="Relight and background swap preview" width="100%"></a><br>
<h4><a href="skills/higgsfield-to-subclip">Relight and background swap</a></h4>
<sub>Change the background or lighting of real footage and keep face, lips and timing. Five relight looks, edit by prompt and a stacked reel, all in Subclip.</sub><br>
<sub>Adapted from <a href="https://www.instagram.com/sferro21">www.instagram.com/sferro21</a> &nbsp;|&nbsp; Not stated &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/higgsfield-to-subclip">View on subclip.app</a></sub>
</td>
<td width="50%" valign="top">
<a href="skills/code-video-recipes"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/code-video-recipes.gif" alt="Code video recipes preview" width="100%"></a><br>
<h4><a href="skills/code-video-recipes">Code video recipes</a></h4>
<sub>Turn code-made video references into editable Subclip motion graphics, explainers, 3D shots and scripted demos.</sub><br>
<sub>Adapted from <a href="https://github.com/yihui-dev/awesome-opus5-5-videos">yihui-dev/awesome-opus5-5-videos</a> &nbsp;|&nbsp; MIT &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/code-video-recipes">View on subclip.app</a></sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="skills/ai-video-editor-cooked"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/ai-video-editor-cooked.gif" alt="Cooked edit method preview" width="100%"></a><br>
<h4><a href="skills/ai-video-editor-cooked">Cooked edit method</a></h4>
<sub>A talking-head edit method: retake-aware cuts, a measured reference style, real visuals timed to the words, and a ban list of AI-made looks.</sub><br>
<sub>Adapted from <a href="https://github.com/nextwork-projects/ai-video-editor-cooked">nextwork-projects/ai-video-editor-cooked</a> &nbsp;|&nbsp; MIT &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/ai-video-editor-cooked">View on subclip.app</a></sub>
</td>
<td width="50%"></td>
</tr>
</table>

### B-roll

<table>
<tr>
<td width="50%" valign="top">
<a href="skills/camera-angle-prompts-guide"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/camera-angle-prompts-guide.gif" alt="44 cinematic camera angles preview" width="100%"></a><br>
<h4><a href="skills/camera-angle-prompts-guide">44 cinematic camera angles</a></h4>
<sub>All 44 camera angles with prompts, a pick-by-emotion table, native fakes and credit-quoted video models, plus a guide to cutting them.</sub><br>
<sub>Adapted from <a href="https://www.digital-windows.co.uk/guides/camera-angles">www.digital-windows.co.uk/guides/camera-angles</a> &nbsp;|&nbsp; Not stated &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/camera-angle-prompts-guide">View on subclip.app</a></sub>
</td>
<td width="50%" valign="top">
<a href="skills/ai-camera-shots"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/ai-camera-shots.gif" alt="AI camera shots preview" width="100%"></a><br>
<h4><a href="skills/ai-camera-shots">AI camera shots</a></h4>
<sub>One frame, twenty camera angles. Prompt formula, a catalog of 20 shots, Subclip video models and native keyframe fakes, cut to the beat.</sub><br>
<sub>Adapted from <a href="https://www.instagram.com/sferro21">www.instagram.com/sferro21</a> &nbsp;|&nbsp; Not stated &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/ai-camera-shots">View on subclip.app</a></sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="skills/gbro-collage-broll"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/gbro-collage-broll.gif" alt="Collage B-roll preview" width="100%"></a><br>
<h4><a href="skills/gbro-collage-broll">Collage B-roll</a></h4>
<sub>Turn one spoken line into a halftone paper-collage B-roll clip, approved at two gates before any video credits are spent.</sub><br>
<sub>Adapted from <a href="https://github.com/pyang5166/gbro-collage-broll">pyang5166/gbro-collage-broll</a> &nbsp;|&nbsp; MIT &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/gbro-collage-broll">View on subclip.app</a></sub>
</td>
<td width="50%"></td>
</tr>
</table>

### Clipping

<table>
<tr>
<td width="50%" valign="top">
<a href="skills/long-to-shorts"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/long-to-shorts.gif" alt="Long video to shorts preview" width="100%"></a><br>
<h4><a href="skills/long-to-shorts">Long video to shorts</a></h4>
<sub>Turn a long video into several ready-to-post vertical shorts with hooks, captions and music.</sub><br>
<sub>Written for Subclip &nbsp;|&nbsp; MIT &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/long-to-shorts">View on subclip.app</a></sub>
</td>
<td width="50%" valign="top">
<a href="skills/neonclipping"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/neonclipping.gif" alt="NeonClipping stream clips preview" width="100%"></a><br>
<h4><a href="skills/neonclipping">NeonClipping stream clips</a></h4>
<sub>Clip YouTube, Twitch or Kick streams into 9:16 shorts with facecam layouts, GTA Neon style captions and an opening heading on each clip.</sub><br>
<sub>Adapted from <a href="https://github.com/iamajmeena/neonclipping">iamajmeena/neonclipping</a> &nbsp;|&nbsp; AGPL-3.0 &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/neonclipping">View on subclip.app</a></sub>
</td>
</tr>
</table>

### Slides

<table>
<tr>
<td width="50%" valign="top">
<a href="skills/frontend-slides"><img src="https://subclipweb.subclip.app/agent-skills/community-readme/frontend-slides.gif" alt="Frontend Slides preview" width="100%"></a><br>
<h4><a href="skills/frontend-slides">Frontend Slides</a></h4>
<sub>Turn a slide outline into editable animated scenes with optional narration and captions, ready to export as video.</sub><br>
<sub>Adapted from <a href="https://github.com/zarazhangrui/frontend-slides">zarazhangrui/frontend-slides</a> &nbsp;|&nbsp; MIT &nbsp;|&nbsp; <a href="https://www.subclip.app/agent-skills/community/frontend-slides">View on subclip.app</a></sub>
</td>
<td width="50%"></td>
</tr>
</table>

<!-- skills:end -->

## Install it yourself

Some upstream licenses do not allow adapting a skill for commercial use. Those originals are listed in [Install it yourself](INSTALL_YOURSELF.md) with links and steps.

## Contribute

Write a skill for Subclip or convert an existing one: see [CONTRIBUTING.md](CONTRIBUTING.md) and [AGENTS.md](AGENTS.md). Run the checks with Node.js 22 (no install needed):

```sh
npm run build && npm run check && npm run scan && npm test
```

`registry.json` and the directory above are generated by `npm run build`. Commit them with your change.

## License and credits

Repository files use the [MIT license](LICENSE). Each skill folder keeps its own `LICENSE`, which governs that skill; check it before you reuse or redistribute the skill. Upstream authors are credited in every listing, and outside sources are listed in [REFERENCES.md](REFERENCES.md).
