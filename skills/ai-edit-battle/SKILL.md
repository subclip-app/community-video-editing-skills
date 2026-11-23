---
name: ai-edit-battle
description: Run an AI edit battle inside Subclip. Two AI models or agents each edit the same raw clip from the same brief, in separate cloned projects, and you compare the results and pick a winner. Works for any two contenders the creator names (two models in the Subclip agent, Claude Code against Codex over MCP, two versions of one model). Use when the creator says "AI edit battle", "model vs model edit", "which AI edits better", "convert this to an edit battle for two models", or wants a fair side-by-side of two AI edits of one video.
---

# AI Edit Battle (Subclip edition)

Two contenders, one raw clip, one brief. Each contender edits alone in its own copy of the project. Then you compare the two finished edits and the creator picks a winner. The format makes a good video: stack both edits over the raw clip and let the audience vote.

The contenders are whatever the creator names: "Fable against Opus", "Claude Code against Codex", "the same model with and without extra skills". Do not assume a pair. Ask who the two contenders are and how each one will be run (see Step 1).

## The three rules that make it fair

1. **Same inputs.** Both contenders get the same footage, the same logos and fonts, the same brief and the same credit cap.
2. **One shot.** Each contender starts in a fresh session with no memory or custom instructions, reads the brief once and delivers once. No follow-up coaching, no second try for one side.
3. **Same timeline.** Both edits keep the original clip's duration and voice timing exactly, so frame N of each edit lines up with frame N of the raw clip.

## What the guide this skill is based on learned

- Describe the level of craft, not the scenes. A brief that dictates every graphic makes both contenders deliver nearly the same video. A brief that sets the standard (timing, layout variety, transitions, effect budget) and leaves the design to the contender gives two clearly different edits.
- Keep the voice frame-perfect. This is what allows a side-by-side.
- One accent colour and an effect budget keep the result clean: glow and sheen only on the key words, each treatment used about twice.
- Text must read on a phone. Give a minimum text height for the size the viewer will really see.
- A quality gate before delivery: style frames first, then frame-by-frame transition checks and a "nothing freezes" check.

## Step 1: Intake (ask only what is missing)

- Who are the two contenders, and how is each run? Options: (a) two different models selected in the Subclip agent, one session each; (b) two external agents (for example Claude Code and Codex) connected to Subclip over MCP, one each; (c) the same model twice with different instructions. You cannot switch your own model. If you are one of the contenders, say so; you must not judge your own edit. Another agent or the creator judges.
- The raw clip (speech-led: talking head, vlog, tutorial, podcast cut), brand colours and fonts, logos, the call to action, the platform and aspect ratio.
- A credit cap per contender if either one may generate media (music, images, video). Default: no cloud generation unless the creator allows it. See Step 4.

## Step 2: Read the footage first

Follow the Subclip rule: media context before anything else.

1. `create_project` for the base project (landscape or the creator's ratio). Use its `projectId` on every call.
2. Import the clip (`import_attachment_to_timeline`, or `import_external_media` for a file path) and any logos with `import_attachment_to_project_media`.
3. `get_media_context` with `includeContactSheet: true`. If the clip has no context, `list_media_without_context`, then `generate_media_context`, inspect the contact sheets, and save observations with `describe_media`.
4. `transcribe_project` for the speech (one completed job at a time), then `get_script` for the word-level transcript. Fix obvious mishearings and list any word you are unsure of.
5. `get_project` or `read_project_section` for the real duration, frame rate and resolution. Never guess these.
6. Note the stressed words, numbers, lists, questions, pauses, the peak moment, and any gestures with their timestamps (use `get_media_context` with `fileId` and `inspectAtSeconds`, at most six moments).

## Step 3: Write the brief

Fill `references/edit-brief-template.md` with the measured facts and the creator's brand. It holds the craft rules in Subclip's own terms. Keep the sentences that set the level of craft. Describe how well things must be done, never what each scene shows.

Use only the creator's real script and facts. Add no claims or scenes they did not give you. Save the finished brief with `update_project_director_brief` on the base project and show it to the creator. They approve it once. After that it is frozen: both contenders receive the identical text.

## Step 4: Build the arena

1. `clone_project` the base project twice. Name them clearly, for example `Battle A - <contender 1>` and `Battle B - <contender 2>`. Write both `projectId` values in the director brief of the base project.
2. Check that both clones have the same assets with `list_editor_assets` and the same duration.
3. Decide generation. Contenders may only create media when the creator allowed it. If so, set one cap for both (`get_ai_credit_status` before and after). Image generation offers the creator's Codex CLI first; video and music use Subclip's models. Quote each contender's plan with `estimate_ai_generation` before it spends credits.
4. Hand each contender: its project ID, the frozen brief, and the instruction "Work alone. Ask no questions. Deliver one finished edit. Read the Subclip skills you need with `read_subclip_skill`." Give contenders `references/contender-playbook.md` so both know the native tools. Start each in a fresh session.
5. Note the start time, the finish time and the credits used by each. Screen-record both if the creator wants to show how long each took.

If you are asked to run both contenders yourself, run them one after the other in separate, clearly labelled passes, and say honestly that it is the same agent twice. A real battle needs two different contenders.

## Step 5: Collect the edits

When a contender reports done, read its project state (`get_project`, `validate_project`) without changing anything. Both edits must be finished, not half built. Then, with the creator's go-ahead, `get_export_configuration`, `list_render_queue` and `export_video` for each, with the same settings. Never queue a duplicate export. Record the output files.

## Step 6: Compare

Judge with the scorecard in `references/scorecard.md`. Do it in this order so the result is evidence, not taste:

1. **Hard checks (pass or fail):** same duration as the raw clip, voice untouched and in sync, no blank or frozen stretch, text inside safe margins, faces never covered, nothing missing or broken at the end.
2. **Look at the same moments of both.** `get_timeline_contact_sheet` over the same time ranges in each project, and `view_current_frame` at the same ten timestamps (hook, three key words, the peak, two transitions, the call to action, the last frame). Look at every transition.
3. **Phone test.** View a second contact sheet at half size to judge readability.
4. **Score each category** from 1 to 5 with one line of evidence: concept, layout variety, motion and transitions, typography, footage integration, sound, polish.
5. Label the edits "Edit 1" and "Edit 2" in the first pass, so scoring does not follow a favourite name. Reveal the names only at the end.

## Step 7: Build the reveal (optional)

For the video: create a new project at the creator's ratio. Import the raw clip and both exports. Put the raw clip full-frame, then show the two edits side by side or stacked, framed with `set_media_framing` and `adjust_media_transform`. Add contender names with `add_text_overlay` clear of faces (check with `get_timeline_contact_sheet` first). Keep all three on the same start frame and the same length. Mute two of the three so only the original voice plays. Verify with `view_current_frame`; do not claim a visual check you did not run.

## Report

Give the creator: both project IDs, both export files, the hard-check results, the scorecard with evidence, time and credits per contender, the recommended winner and what each contender did best. State any limits honestly (for example "loudness was not measured"). Record decisions with `update_project_director_brief` and `write_session_summary`.

## Rules

- One edit call at a time per project. Contenders work in their own projects, so they do not collide.
- Never touch a contender's project while it is working.
- Do not stack the deck: no extra hints, no better prompt for one side, no retry for one side.
- No outside API keys, no shell assembly, no provider SDKs.

Adapted for Subclip from guides by sferro21 (https://www.instagram.com/sferro21). Rewritten in our own words; the creator's guides state no license, so please confirm permission with the creator before relying on this skill.
