---
name: stickman-video-director
description: Turn a script, topic, article or idea into a finished stickman (stick figure) animated video in Subclip. Use when the creator wants a stickman or stick figure explainer, a faceless YouTube, Shorts or TikTok story, a script turned into animated stick figures, or a choice among looks such as classic black and white, modern pop, prehistoric cave, cozy storytelling, historical cartoon, amber noir, rubber hose, hand-painted adventure, minimal line art, colorful hand-drawn, retro TV, survival thriller, avatar explainer, meme story or pixel theater. Runs a director's proposal with checks, locks the character and look, builds a storyboard table, voices it with a gender-matched local voice, makes the scenes, adds captions and sound, and exports.
---

# Stickman video director (Subclip edition)

Script in, finished stickman video out. The agent acts as the director: it rewrites the script, proposes the film with a storyboard table and checks, locks the look, then builds it on the editable Subclip timeline. Fifteen looks, each with its own prompt file and a 10 second reference clip.

```
SCRIPT -> 1 Proposal and checks -> 2 Locks -> 3 Storyboard approved -> 4 Voice -> 5 Scenes -> 6 Captions -> 7 Sound -> 8 Export
```

## Capability reference

Watch `examples/capability-stickman-video-director.mp4` (about 23 seconds, 16:9): all 15 looks in one labeled montage, cut from the original author's 10 second reference clips. `examples/director-storyboard-table.jpg` shows a finished director's proposal for a 30 second film, with its checks and cost line. Every look's own clip is in `examples/` (numbered like `references/style-index.md`).

## When to use

- A script, topic, article or link should become a stick figure video, short or long.
- The creator wants a look chosen from samples ("make it like the cave one").
- A film needs a proposal, a storyboard and approvals before anything is generated.

Hand over instead when the job is another one: see `references/overlap.md` (for example `cartoon-episodes` for a recurring show, `svg-character-animation` for a talking puppet, `ai-style-atlas` for non-stickman styles).

## Before you start

1. Read the installed Subclip skills with `read_subclip_skill`: `subclip-video-editor` first, then `subclip-ai-generation`, `subclip-hyperframes-layer`, `subclip-dynamic-captions`, `subclip-tts`, `subclip-music-generation`, `subclip-export` as the film needs them.
2. Read the project: `get_project_outline`, `list_editor_assets`, `get_media_context` for anything the creator attached. Create or reuse one project with `create_project`; pass the same explicit project ID on every call. One timeline edit at a time.
3. Offer the creator's own generators for images first (the signed-in Codex CLI, no Subclip credits) and import the files with `import_external_media`. Subclip's own models are the fallback. Ask once and remember the choice. Never ask for an API key in chat, never sign in for the creator, never run an installer, never hide an action from the creator.
4. `get_ai_credit_status` and `list_ai_models` for the kinds you need.

## Step 1: Director's proposal

Read `references/directors-proposal.md`. If the creator has not chosen a look, show 2 or 3 reference clips from `examples/` (see `references/style-index.md`) and ask. Ask once, together, for what is missing: ratio, length, look, voice preference. Otherwise infer and plan.

Write the proposal: title, message and hook, ratio, length, look, voice profile, palette (three accents at most, named in words), sound plan, the rewritten script with the five-stage heartbeat, the storyboard table with final-timeline times, the checks list, and a cost quote. See the worked example in `examples/director-storyboard-table.jpg`.

Stop there. Do not generate, draw or voice anything before the creator approves, revises a named row, or changes a global setting.

## Step 2: Character and style locks

Read `references/locks.md` and the chosen look's file in `references/looks/`. Write one cast card per recurring character, the prop and place notes, and freeze the look's style lock. Repeat each lock in full in every prompt. Make one character sheet or reference image if the look needs it (Codex CLI first, else a reference-following image model after a quote) and get it approved.

## Step 3: Storyboard approval and cost quote

Turn the approved table into the production plan: for the model engine (looks 01 to 08) the generation clips, retained ranges and prompts; for the code engine (looks 09 to 15) the stills list, the layer moves and the caption groups. Show the quote: stage, model, count, duration, credits from `estimate_ai_generation`, total, plus about 15 percent for retakes (`references/subclip-assembly.md`). Get approval for that scope. A larger bill needs a new decision. Prompts are delivered as a complete standalone package: no "same as above".

Offer a single representative test (one clip or one still) before the full set, at the lowest resolution that is honest.

## Step 4: Voice

Read `references/voice-and-sound.md`. Local voice first (`list_local_voices`, `generate_local_speech`), **gender matched to the character**, one voice for the whole film at native speed. Make a one-sentence test and let the creator confirm the fit. Import the narration with `import_generated_audio_to_timeline`, then `transcribe_project` in local mode for word timings. The voice is the clock: set every row's time from the words.

## Step 5: Scenes

Model engine: `generate_ai_media` kind video with the model the look names (Gemini Omni class if listed, else the closest in `list_ai_models`, for example `p-video-2`). Silent actors, no music, no on-screen words. Keep every operation ID, check `get_ai_operation`, import with `import_ai_operation_to_timeline`, trim to the retained range. Re-roll only a failed clip and not more than twice with a change between tries.

Code engine: stills by Codex CLI or an image model, one per row, placed on the timeline, then one HyperFrames layer per scene for the local moves (`add_runtime_layer`, `subclip-hyperframes-layer`). Pixel theater (look 15) is drawn entirely in code and needs no image model.

Check each clip or still against the look's checks and its reference clip before moving on.

## Step 6: Captions

Dynamic captions after transcription (`subclip-dynamic-captions`), then `update_caption_style` to the look's rules. Break on meaning. Keep them out of faces and key action. Never part of the generated picture.

## Step 7: Sound

Music bed (`search_public_audio` or `generate_music` instrumental), quiet effects on actions, one ambience layer, each its own audio item under the voice (`update_audio_item`). Say that the balance was set by volume and not measured, and ask the creator to listen.

## Step 8: Review and export

`set_project_duration` to the voice end plus a short tail. `get_timeline_contact_sheet` and `view_current_frame` at every join and doubtful frame. Compare with the look's reference clip. Fix and re-check. Export only when the creator asks (`get_export_configuration`, `list_render_queue`, `export_video`). Social publishing is out of scope. Finish with `update_project_director_brief` and `write_session_summary`, listing any failed or unchecked item honestly.

## Rules that never bend

- Ask before every credit-spending step and quote the cost first.
- One voice per film, matched to the cast gender.
- No visible words in generated pictures.
- No real people, no real brands, no famous characters without the creator's own clearance. A presenter character must be the creator's own or an original design.
- Never claim you heard sound or saw a frame you did not check.
- Reference clips are quality targets, never footage to reuse in the creator's film.

## Files

- `references/style-index.md`: the 15 looks, choosing guide, clip list.
- `references/looks/01` to `15`: one prompt file per look with style lock, recipe, Subclip route, credits, checks.
- `references/directors-proposal.md`: proposal, storyboard table, checks, worked example.
- `references/locks.md`: character, style, prop and place locks.
- `references/voice-and-sound.md`: voice choice, captions, music, effects.
- `references/subclip-assembly.md`: tools, credit quoting, assembly steps.
- `references/overlap.md`: other skills and what is new here.

Adapted for Subclip from https://github.com/kaomei/stickman-video-director by kaomei and the Stickman Video Director contributors, MIT
