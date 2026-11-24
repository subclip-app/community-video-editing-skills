---
name: tvhead-story-looks
description: Turn a topic into a narrated story video in one of 15 looks (doodle, warm cartoon, 3D desk, neon noir, dark fantasy, toy-block game, 8-bit, comic, five stickman styles, underground engineering sim, marker sketch), with a director's proposal (5-stage heartbeat storyboard plus checks) and standalone 10 second AI-video prompt packages with frozen style, cast and voice locks. Use when the creator wants a doodle, cartoon, stickman or game-look explainer or short story, a storyboard with checks before spending credits, or prompts for a video model that keep one character, one voice and one style across clips.
---

# TV-Head Doodle and Cartoon Stories (Subclip edition)

This adapts the `tvhead-video` sub-skill of Vladic20/tvhead-studio. That plugin also holds `motion-studio` (our separate Motion Reel Studio skill), `ai-montage` and `blender-3d` (not adapted), which is why two Subclip skills cite one repository.

You turn one topic into a narrated story video in a named look, inside Subclip. You write the story, the director's proposal and the checks first, make the voice and word timings, lock the style and cast, make one picture per line, add captions and sound, and assemble an editable timeline. Everything runs through Subclip's own tools and credits. No outside API key, no installer, no local studio app.

## Capability reference

Watch `examples/capability-tvhead-story-looks.mp4` (about 28 seconds). It cuts together the looks this skill can make. For a full worked story watch `examples/00-doodle-reference-episode.mp4` (33 seconds): script, Gemini 3.1 Flash TTS narration, gpt-image-2 doodle stills and one p-video clip, as a result of the workflow below. `examples/` has one reference per look (01 to 15), the director's proposal sheet (16) and an AI-video prompt package result (17), numbered like the index below.

## The look index

Pick one look per video. Offer two candidates with their references when the creator is unsure.

| # | Look | Best for | Recipe | Reference |
| --- | --- | --- | --- | --- |
| 01 | Doodle | calm essays, psychology | `references/looks/01-doodle.md` | `examples/01-doodle.jpg` |
| 02 | Cartoon (warm garage) | tool and product stories with a laptop | `references/looks/02-cartoon.md` | `examples/02-cartoon.jpg` |
| 03 | 3D desk | app and UI showcases | `references/looks/03-desk-3d.md` | `examples/03-desk-3d.mp4` |
| 04 | Neon noir | money, crime, tech stories | `references/looks/04-neon-noir.md` | `examples/04-neon-noir.mp4` |
| 05 | Dark fantasy (Dota-like) | rivalry, strategy | `references/looks/05-dark-fantasy.md` | `examples/05-dark-fantasy.mp4` |
| 06 | Toy-block game (Roblox-like) | games, creator economy | `references/looks/06-brick-game.md` | `examples/06-brick-game.mp4` |
| 07 | 8-bit pixel | retro level-up topics | `references/looks/07-8-bit.md` | `examples/07-8-bit.mp4` |
| 08 | Comic book | payoff shorts | `references/looks/08-comic.md` | `examples/08-comic.mp4` |
| 09 | Stickman 1, classic | one clean idea | `references/looks/09-stickman-classic.md` | `examples/09-stickman-classic.mp4` |
| 10 | Stickman 2, Zeke in a red beanie | tech and motivation | `references/looks/10-stickman-zeke.md` | `examples/10-stickman-zeke.mp4` |
| 11 | Stickman 3, prehistoric | dark comedy shorts | `references/looks/11-stickman-prehistoric.md` | `examples/11-stickman-prehistoric.mp4` |
| 12 | Stickman 4, cozy | everyday stories | `references/looks/12-stickman-cozy.md` | `examples/12-stickman-cozy.mp4` |
| 13 | Stickman 5, historical | Edo, Egypt, Rome | `references/looks/13-stickman-history.md` | `examples/13-stickman-history.mp4` |
| 14 | Underground engineering sim | vertical build-it shorts | `references/looks/14-underground.md` | `examples/14-underground.mp4` |
| 15 | Marker sketch | vertical problem, fix, arithmetic | `references/looks/15-marker.md` | `examples/15-marker.mp4` |

Extra references: `references/directors-proposal.md` (16, the proposal and its checks), `references/ai-video-prompt-package.md` (17, standalone prompts for video models), `references/story-writing.md` (script rules and arcs), `references/subclip-tools.md` (tool mapping and credits), `references/qa.md`, `references/overlap.md`.

## Rules for every video

1. **Cost before spend.** Before every paid step quote model, count, duration and the total from `estimate_ai_generation`, plus about 15 percent for retakes. Wait for a clear yes. A bigger bill needs a new yes. Show credits left with `get_ai_credit_status`. Local speech, code layers and the creator's own Codex or Grok image generation cost no Subclip credits.
2. **Never ask for an API key in chat.** Never run an installer. Never hide an action from the creator.
3. **Direct before you build.** Write the story table and the director's proposal first. Fix every flagged check, show the proposal, get a go.
4. **Lock the style and the cast.** One style anchor paragraph and one cast card per character, copied word for word into every prompt. Plates (character sheets) are approved before any scene still.
5. **One voice per video, matching the character.** A female character gets a female voice. Pick from samples; free `generate_local_speech` for drafts and tests.
6. **A hook in line 1.** One change on every key word. 6 to 22 spoken words per scene.
7. **Truth.** Dramatise with fictional people. Never invent statistics, quotations or history; label illustrative numbers.
8. **Safe zone.** Keep captions and key text inside x 60 to 960 and y 160 to 1420 on a 1080 by 1920 frame; on 16:9 keep text off the bottom 12 percent.
9. **Never claim what you did not check.** Do not say you heard the audio; say which checks ran (see `references/qa.md`).
10. **One timeline edit at a time.** Re-read the project after each edit and use the returned item IDs.

## Workflow

1. **Read the project.** `get_project_outline` or `create_project` (canvas landscape for 16:9, vertical for 9:16). Keep the project ID on every call. `get_media_context` for any attached media. Check credits with `get_ai_credit_status` and the model list with `list_ai_models`.
2. **Brief.** Topic, language, length (default 60 to 90 s landscape, 30 to 60 s vertical), format, look, narrator voice, music. If the topic is clear, pick sensible defaults, say them and go. Save the brief with `update_project_director_brief`.
3. **Story.** Write the story table with `references/story-writing.md`: hook, arc (`heartbeat` for explainers, `payoff` for comedy), scenes with a spoken line, a picture note, the key word and what changes on it.
4. **Director's proposal.** Build it with `references/directors-proposal.md`: header, storyboard by stage, continuity, on-screen text and the checks. Fix the flags, then show it and wait for a go.
5. **Voice.** `list_local_voices` and `generate_local_speech` (free) or `generate_speech` after a quote. Then `transcribe_project` for word timings. The audio is the clock: scene lengths follow the real timings.
6. **Plates.** Read the look's file in `references/looks/`. Make the character sheet plate and the place plate with its still prompt, show them and get approval.
7. **Pictures.** Route A: one still per scene with the plates attached, a slow keyframed move, at most 3 animated clips. Route B: a code-drawn layer for the flat looks (doodle, stickman, 8-bit, comic, underground, marker). See `references/subclip-tools.md`.
8. **Captions, music, effects.** Captions in the look's style via `apply_dynamic_caption_preset` then `update_caption_style`. Music bed and sparing sound effects from `search_public_audio` or an approved `generate_music`.
9. **Check.** Work through `references/qa.md` with `get_timeline_contact_sheet` and `view_current_frame`.
10. **Prompt package (optional).** When the creator wants a video model to make the whole story, build the package from `references/ai-video-prompt-package.md`, quote it, and generate after a yes.
11. **Export** only when asked: `get_export_configuration`, `list_render_queue`, `export_video`.

## Related skills

Use these by slug when they fit better: `cartoon-episodes` (a show with recurring characters across episodes), `code-motion-styles` and `code-animation-styles-remotion` (code-built looks for a short piece), `stickman-video-director` (stickman storyboards on their own), `ai-style-atlas` (86 other visual styles), `trendjack-animator` (trending vertical ad formats). See `references/overlap.md`. Upstream sibling skills not adapted here: tvhead's `ai-montage` and `blender-3d` need Blender or real source material.

Adapted for Subclip from https://github.com/Vladic20/tvhead-studio by Vladic20, MIT. Portions of the upstream derive from https://github.com/lubluniky/garazh-skill by lubluniky (MIT). The five stickman looks and the director's proposal in the upstream adapt https://github.com/kaomei/stickman-video-director (MIT).
