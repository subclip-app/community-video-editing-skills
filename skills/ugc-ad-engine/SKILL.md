---
name: ugc-ad-engine
description: Turns a product plus an avatar into a finished vertical UGC video ad inside Subclip. Finds sales angles, waits for the creator to pick one (the single gate), writes a direct-response script, makes a prompt sheet with one block per talking clip, then generates the avatar, the speech and the clips and assembles them on the timeline with captions, a hook in the first second and one call to action. Use when the creator describes a product and wants UGC ads, angles, hooks, a creator-style script, an AI avatar ad, a talking-head ad for Meta, TikTok or Reels, or says "make an ad for this". Also use to write iPhone-realism avatar image prompts with the 6C method.
---

# UGC ad engine (Subclip edition)

Product and avatar in, finished 9:16 UGC ad out, as an editable Subclip timeline.

```
intake -> angles -> GATE: creator picks an angle -> script -> prompt sheet -> quote -> speech -> avatar image -> clips -> assemble -> QA
```

You act as a direct-response creative director. You write ads that sell, not pretty ads. The same flow works for physical products (the product in hand, in use, the result) and digital ones (the screen in use, the before and after told by the person).

You do the thinking. Do not hand the creator a questionnaire about pains, desires or objections: work them out from the product and flag guesses as `[assumption]`.

## Capability reference

Watch `examples/capability-ugc-ad.mp4` (about 16 seconds, 9:16). It is a real run of this skill for an invented product (the Foldmug, a collapsible travel mug) with an invented avatar, three talking clips, word-synced captions, a hook in the first second and one call to action. `examples/angles.jpg` and `examples/prompt-sheet.jpg` show the two documents the skill writes before any paid step.

## Safety and honesty (apply at every step)

1. Fictional avatars only, or the creator's own likeness with their clear consent. Never build an avatar from a real person's photo without that person's consent. If a reference photo looks like a real person who is not the creator, stop and ask whose it is.
2. No claim you cannot prove: no health, medical or income results, no invented numbers, reviews or customer counts. Put `[data to fill in]` in the script draft and resolve it with the creator before any paid step.
3. Label the finished ad as AI-generated where the platform asks for it (Meta, TikTok and YouTube have AI labels). Say so in the hand-over and offer a small on-screen label.
4. Never ask for an API key in chat and never run anything silently. The creator sees the cost before every paid step.

5. The voice must match the avatar. Read apparent gender and age from the image at intake: a female avatar gets a female voice, a male avatar a male voice, an older avatar a more mature voice, never mismatched. Verify before any clip is paid for (`references/subclip-tools.md`, "Match the voice to the avatar"). The free local voices are often low and unreliable for this, so check them or use a cloud speech voice.

## Before you start

1. `get_project_outline` for an existing project, else `create_project` with a vertical canvas. Use the same project ID on every call.
2. If the creator attached a product photo or a reference ad, read it with `get_media_context` first. Never claim to see or hear media from a filename.
3. Ask once which image route to use: the creator's own Codex CLI (images, no Subclip credits) when it works, else Subclip `generate_ai_media`. Respect a prior choice.
4. Check the live catalog: `list_ai_models` (kinds avatar, video, image), `list_local_voices`, `get_ai_credit_status`. The live catalog beats any model name in these files.
5. Ask at most two questions, only if essential (what the product is, who it is for, the offer, the market and language). Propose the rest and mark it `[assumption]`.

## Workflow

Read each reference at the moment its phase starts, not before.

| Phase | Read | Ends with |
| --- | --- | --- |
| 1 Angles | `references/angles.md` | The angles table, then the GATE |
| 2 Script | `references/script.md` | A script with one talking clip per beat, self-reviewed |
| 3 Prompt sheet | `references/clip-prompts.md` | One finished block per clip |
| 4 Avatar | `references/avatar-6c.md` | An approved avatar image |
| 5 Produce | `references/subclip-tools.md` | Speech, clips, timeline |
| 6 QA | `references/qa.md` | A checked ad and a hand-over note |

1. **Intake.** Read the product details. If an avatar image exists, look at it: age and gender decide the voice, setting decides the accent, pose decides which camera moves are believable, props decide which gestures come free. No avatar yet: run Phase 1 anyway and ask for the image (or offer to make a fictional one, `references/avatar-6c.md`) in the gate message.
2. **Angles, then stop.** Deliver the angles table and finish with: "Which angle should I develop? (tell me the number, or say pick the best one)". This is the only gate that waits for the creator. Never skip it, even when the best angle looks obvious.
3. **Script and prompt sheet.** After the creator picks, write the script, self-review it, and write the prompt sheet in the same reply. No second gate here: the creator corrects the script and the sheet together afterwards.
4. **Quote, then approval.** Before any paid step show a table: stage, model, count, seconds, credits, total plus about 15 percent for retakes (`references/subclip-tools.md` has the formula). Wait for a clear yes to that scope. Free steps (local speech, Codex CLI images, captions) need no quote.
5. **Produce.** Avatar image if missing (show it, wait for approval), then speech first for every clip, then one avatar clip per speech file, one timeline edit at a time.
6. **Assemble.** Clips back to back on the timeline, word-synced captions inside the safe zone, hook text in the first second, one call to action on the last clip, an AI label if needed.
7. **QA and hand-over.** `references/qa.md`. Export only when the creator asks. Record models, credits and open issues with `update_project_director_brief` and `write_session_summary`.

## Rules

- One angle per ad. Different angles are different ads.
- Every clip is the avatar speaking to camera. Product shots, screens and before and afters are overlays on top of a clip that is already talking, never a replacement for one.
- Hook in the first second: something seen and something read, under 8 words, no intro, no greeting.
- Write spoken, not written: fragments, counting things off, short words.
- Talk about the viewer, not the brand. One dominant emotion, one proof, one call to action.
- Make the speech first, then size each clip to its audio. The speech file decides the clip length.
- Keep the same avatar image, voice and accent in every clip so the person does not drift.
- Match the voice to the avatar's apparent gender and age, and verify it with a short test line before the real takes.
- Quote before every paid step. A bigger bill or a retake needs a new yes.

Adapted for Subclip from the "UGC ad engine" pipeline and the "6C method" avatar prompts taught by Website Learners (https://www.skool.com/learn-ai-with-websitelearners-5339/new-video-how-to-create-ai-ugc-ad-full-tutorial?p=5220d4a0). No license is stated; the wording is our own and the creator's permission has not been confirmed. See README.
