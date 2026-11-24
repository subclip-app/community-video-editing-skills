---
name: website-to-video
description: Capture a public website or URL and turn it into a video in Subclip (site tour, showcase, social clip, brand reel) built from the site's own brand, copy and visuals, with a concept-first storyboard, voiceover, sound design and editable motion layers. Use when the creator gives a URL and wants a video from a portfolio, blog, landing page or general site. Not for product-launch promos (use a launch-video skill), topic explainers with no site, or adding captions to an existing video.
---

# Website to video (Subclip edition)

Capture a website, understand its brand, then make a professional video from it, inside Subclip. The original used a command line capture tool, API keys for voice and a Gemini image describer. This version uses Subclip's own site inspector, voice, music, motion-layer and export tools. No outside API keys, no Python, no ffmpeg.

Users say things like: "Turn this website into a 15 second social clip for Instagram", "Make a 30 second site tour from https://...", "Capture our homepage and build a video from its own visuals".

## Confirm the route first

This skill makes a video of or from a general site. If the creator is really marketing or launching a product (even from a URL, even "a promo for our site"), use a product-launch skill. A topic explainer with no site, a GitHub pull request video, re-cutting or recoloring an existing video, and captions for an existing video are all out of scope here. If unsure, ask one question.

## How it runs

Seven steps. Each produces something that gates the next. Gates marked "creator" stop and ask. If the creator says "decide for me" or "surprise me", preference questions are skipped (voice, color emphasis, beat count, music, captions), but verification gates never are: the asset audit, the per-beat read, the checklist and the honest "what I did NOT verify" note stay.

| Step | What | Read |
|---|---|---|
| 0 | Capture and understand the brand | `references/brand-and-brief.md` |
| 1 | Brand cheat sheet | `references/brand-and-brief.md` |
| 2 | Strategy and messaging | `references/brand-and-brief.md` |
| 3 | Storyboard and script (creator approves) | `references/storyboard.md` |
| 4 | Voiceover, timing, captions (creator) | `references/build-and-verify.md` |
| 5 | Build the beats as motion layers | `references/build-and-verify.md` |
| 6 | Verify and deliver | `references/build-and-verify.md` |

## Before you start

- Read with `read_subclip_skill`: `subclip-video-editor`, `subclip-hyperframes-layer` (and its authoring contract), `subclip-tts`, `subclip-music-generation`, `subclip-dynamic-captions`, `subclip-export`. Their current schemas win over anything here.
- `create_project` with the right canvas preset (landscape 1920x1080 default, vertical 1080x1920, square 1080x1080). Use its project ID on every call.
- Start with `get_project_outline`. One timeline edit at a time. Generations may run in parallel inside the approved budget; timeline writes may not.
- Before any paid generation (voice, music, sound effects, images) quote the model, count, duration, `estimate_ai_generation` total and retry allowance with `list_ai_models` and `get_ai_credit_status`, and get a go-ahead for the quoted scope. If the creator's Codex CLI is signed in, offer it first for any generated images (`import_external_media` brings the files in at no Subclip credits).

## Step 0: Capture and understand the brand

Call `inspect_public_website` with the URL. It returns visible copy, colors, fonts, logo and image candidates and real page captures stored in the project. Import and inspect what you need, then write a strategy-first summary (what the product does, who it is for, the voice) before the color, font and asset inventory. Details and limits are in `references/brand-and-brief.md`.

**Gate:** summary printed; the capture limits (up to 3 captures, no full SVG or Lottie export) are stated.

## Step 1: Brand cheat sheet

Write the short brand-truth sheet (theme, exact colors and fonts, components, 5 to 10 site-specific rules) and save it with `update_project_director_brief`. Do a 30 second check with the creator.

## Step 2: Strategy and messaging

Lock the video type, duration, format, and above all the one message and the narrative arc. Ask only what the prompt did not already say.

## Step 3: Storyboard and script (creator approves)

Concept first, then pacing, then beats with 2 to 4 techniques each, a mandatory asset audit, shot grammar (shot type, camera move, depth, purpose), sound effect placement and the script. Present a beat-by-beat summary and iterate until approved. Full rules in `references/storyboard.md`.

**Gate:** storyboard and script saved and approved.

## Step 4: Voiceover, timing and captions (creator)

Calibrate with a test clip, generate the voice (`generate_speech` or free `generate_local_speech`), transcribe for word timings with `transcribe_project`, map words to beats, reconcile durations (more than 15 percent off means fix before building), then ask about captions. See `references/build-and-verify.md`.

**Gate:** either no narration with manual beat times, or narration on the timeline with real beat timings.

## Step 5: Build the beats

One HyperFrames layer per beat, each validated, added at its start time, and inspected with `view_current_frame` before the next. Continuous motion across the whole beat, motion magnitudes that read at video scale, easing chosen by intent. See `references/build-and-verify.md`.

## Step 6: Verify and deliver

Run the full checklist with real evidence, then pause for the creator. Export only when asked. Include a "What I did NOT verify" section in the final message.

## Quick reference

| Type | Duration | Driver | Narration |
|---|---|---|---|
| Social ad (IG, TikTok) | 10 to 15 s | platform limit | optional |
| Product demo | 30 to 60 s | script length | full |
| Feature announcement | 15 to 30 s | feature complexity | full |
| Brand reel | 20 to 45 s | music track | optional, music focus |
| Launch teaser | 10 to 20 s | hook energy | minimal |

Beat count comes from the storyboard, not from the video type. Formats: landscape 1920x1080, portrait 1080x1920, square 1080x1080.

## Known gaps

- Subclip's site inspector returns up to 3 page captures plus logo and image candidates, not every SVG, Lottie file, shader or video on the page, and no per-element CSS tables. Ask the creator for missing signature art.
- No bundled sound effect files: create them with `elevenlabs-sound-effects` or find licensed ones with `search_public_audio`.
- The original verification script (`w2h-verify`) is replaced by the manual checklist in Step 6.

## Reference output

[examples/subclip-site-tour.mp4](examples/subclip-site-tour.mp4) is a 16.7 second site tour made with this skill from https://www.subclip.app, no narration, music bed plus a whoosh on each cut. It shows the bar to aim for:

| Beat | What it shows | Skill step |
| --- | --- | --- |
| Capture the site | The real page capture from `inspect_public_website` in a browser frame, a scan line, then a push in to the h1 | Step 0 |
| Brand cheat sheet | The four page colors, the font and the real logo (still: [examples/subclip-brand-sheet.jpg](examples/subclip-brand-sheet.jpg)) | Step 1 |
| Headline beat | The site's own h1 as kinetic type on the brand gradient | Steps 2 and 3 |
| Templates | The site's own template posters with a 0 to 200+ counter and a slow drift | Step 5 |
| Call to action | Real logo, closing line from the page and the URL | Step 5 |

Every beat is one HyperFrames layer at 1920x1080. A local page capture is embedded in its layer as image data, because HyperFrames layers only load public HTTPS files.

Adapted for Subclip from [OpenMontageInc/OpenMontage](https://github.com/OpenMontageInc/OpenMontage) (skill website-to-video) by OpenMontageInc, AGPL-3.0
