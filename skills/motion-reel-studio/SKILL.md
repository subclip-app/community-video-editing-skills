---
name: motion-reel-studio
description: Build a 35 to 60 second vertical social reel (Reels, TikTok, Shorts) in one of five styles - kinetic motion with an original voxel mascot, cozy 3D elevator tower, cozy 3D film set with a clapperboard, anime opening with cel shading and impact frames, or a "shot on a phone" laptop screen look - as Remotion or HyperFrames layers with word-keyed scenes, captions inside the safe zone and a -14 LUFS delivery. Use when the creator wants a motion reel, product or tool promo, list-style reel ("01/06 Tool"), anime-style intro, or a handheld phone-footage look made in code. Code renders cost no credits.
---

# Motion Reel Studio (Subclip edition)

Topic in, finished vertical reel out. You pick one of five code-built styles, write a tight script, make the voice and word timings first, key every accent to a spoken word, build the scenes as editable layers, check contact sheets and seams, and deliver with safe zones and a measured loudness. Everything runs through Subclip tools. No outside API key, no installer, no local template project.

## Capability reference

Watch `examples/capability-motion-reel-studio.mp4` (about 17 seconds): the five styles one after another. Each style has its own reference in `examples/` numbered like the index below: a rough 10 second clip for every style (01 is a real code render made with HyperFrames) and the original author's frame or frames where they exist (files ending `-upstream.jpg`).

## The five styles

| # | Style | Best for | Recipe | Reference |
| --- | --- | --- | --- | --- |
| 01 | Kinetic motion reel with a voxel mascot | tool and idea promos, kinetic type, terminal prompts | `references/styles/01-kinetic-reel.md` | `examples/01-kinetic-reel.mp4` |
| 02 | Cozy 3D elevator tower | numbered lists of tools or steps, one floor each | `references/styles/02-cozy-tower.md` | `examples/02-cozy-tower.mp4` |
| 03 | Cozy 3D film set with a clapperboard | "scene NN" lists, a director and robot crew | `references/styles/03-film-set.md` | `examples/03-film-set.mp4` |
| 04 | Anime opening | power-up and boss-fight framing for any topic | `references/styles/04-anime-opening.md` | `examples/04-anime-opening.mp4` |
| 05 | Shot on a phone | a result shown on a laptop or terminal, honest numbers | `references/styles/05-phone-shot.md` | `examples/05-phone-shot.mp4` |

Shared references: `references/script-and-voice.md`, `references/safe-zones-and-delivery.md` (safe zones, loudness, delivery), `references/layer-rules.md` (deterministic motion rules for HyperFrames and Remotion), `references/subclip-tools.md`, `references/qa.md`, `references/overlap.md`.

## Rules for every reel

1. **Do not stop to ask** when the topic is clear. Choose the angle, a 35 to 60 second length, the creator's language and 9:16 for Reels, TikTok and Shorts. Say your defaults. Edits come after the first cut.
2. **Real material first, motion on top.** Numbers on screen come from the script data or the project, never invented. Label illustrative numbers "Example".
3. **Audio first.** Voice, then word timings, then scenes. Every accent is keyed to a spoken word, not to a hand-typed frame number.
4. **Safe zone.** Words and logos only inside x 60 to 960 and y 160 to 1420 on a 1080 by 1920 frame. Captions sit on a dark plate from about y 1250. The mascot and the picture may go lower; only the bottom and the right edge are covered by app buttons.
5. **Deterministic.** Every frame is a pure function of time: no wall-clock, no unseeded randomness, no accumulated state. Camera shake and handheld wobble come from smooth noise or sines, never a new random offset every few frames.
6. **Cost before spend.** Code layers, local speech and public audio cost nothing. Before any paid step (cloud voice, generated music, generated images) quote the model, count and total from `estimate_ai_generation` plus about 15 percent, and wait for a clear yes. Show credits with `get_ai_credit_status`.
7. **No outside keys, no hidden actions, no installers.** Repos named here are references, not things to install.
8. **Original characters only.** Design your own mascot. Do not copy another company's mascot, logo or brand characters.
9. **Honest checks.** Say what you saw in frames and what you measured. Never claim you heard the mix.
10. **One timeline edit at a time.** Re-read the project after each edit.

## Workflow

1. **Read the project.** `get_project_outline` or `create_project` with a vertical canvas, 30 fps. Keep the project ID on every call. `get_media_context` for attached media. `get_ai_credit_status`, `list_ai_models` if anything paid is possible.
2. **Choose the style** from the table. If the creator names a topic only, recommend one style with a reason and show its reference; offer a second.
3. **Brief (at most five questions in one message, skip when clear):** the exact words and numbers, platform, length, brand colours, a reference reel. If the creator has a brand, save it in the brief with `update_project_director_brief`.
4. **Script.** Follow `references/script-and-voice.md`: hook in 4 seconds, 6 to 8 scenes, 1 or 2 lines per scene, one thesis, one call to action, last frame equal to the first for a loop. Write brand names the way they should be heard.
5. **Voice and word timings.** `list_local_voices`, `generate_local_speech` (free) or `generate_speech` after a quote, then `transcribe_project` for word timings. Re-listen by transcript: if a name is mispronounced, rewrite the spoken form and regenerate that line.
6. **Music.** `search_public_audio` for a licensed bed that fits the style, or an approved `generate_music` instrumental. Volume about 0.12 under the voice, higher in silent stretches.
7. **Build the scenes** as layers following the style file: `read_subclip_skill` for `subclip-hyperframes-layer` or the Remotion layer skill, write the scene, `validate_runtime_layer_source`, `add_runtime_layer`. For 3D styles read `threejs-3d-scenes` and `r3f-physics-and-effects`. Key accents with the word timings.
8. **Stills check before rendering everything.** `seek_timeline` and `view_current_frame` at one frame per scene, plus `get_timeline_contact_sheet`. Fix text outside the safe zone, overlaps, empty areas, too-small text and floating pieces. One to three rounds.
9. **Seams.** Check the frames just before and just after every cut for jumps and objects popping in.
10. **Sound.** Effects only on actions on screen (a hit, a whoosh, a ding), sparing, never the same whoosh on every cut.
11. **Deliver.** Follow `references/safe-zones-and-delivery.md`: master at -14 LUFS, true peak at or below -1.5 dBTP, a phone copy under 29 MB. Export only when asked: `get_export_configuration`, `list_render_queue`, `export_video`. Report what each scene shows, what you fixed, what was not checked.

## Related skills

`hyperframes-motion-layers` and `remotion-motion-layers` (the layer engines), `code-motion-styles` and `code-animation-styles-remotion` (more code-built looks), `threejs-3d-scenes` and `r3f-physics-and-effects` (3D), `motion-polish`, `video-shotcraft`, `tvhead-story-looks` (narrated character stories, the sibling adaptation of the same upstream). See `references/overlap.md`. Not adapted here: the upstream's `ai-montage` (documentary montage from real data; see `vox-explainer` and `documentary-case-file`) and `blender-3d` (needs Blender; see `blender-to-subclip`).

Adapted for Subclip from https://github.com/Vladic20/tvhead-studio by Vladic20, MIT. Portions of the upstream derive from https://github.com/lubluniky/garazh-skill by lubluniky (MIT). The upstream also vendors recipes from https://github.com/charlie947/motion-graphics-skills and https://github.com/howseen-ai/claude-motion-design (both MIT).
