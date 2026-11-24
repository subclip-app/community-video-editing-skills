# 14 Underground engineering sim (look id `underground`)

Reference: `examples/14-underground.mp4` (a rough 10 second reference made for this skill: a still pair animated in code).

## What it is for
Vertical shorts (about 45 to 55 seconds) of the type build an absurd thing in a hidden room: problem, fix, problem, fix, result.

Format: 9:16 (vertical shorts).

## Visual signature
- One flat cutaway diorama: sky, a garage or house, earth layers, a hidden room under it (or a dacha attic).
- A HUD counter at the top, green upgrade chips that slide in, red stamps on problems, two-tone captions, a summary card at the end.
- The camera glides around one diorama as machines appear on cue words.

## Palette
underground paper #2c2945, accent #ffd23f; caption colours: objects yellow, problems red, fixes green, numbers cyan.

## Places, cast and props
- Places: cutaway (sky dusk, day, night or winter; building garage, house or none; room under or attic).
- Cast: Round head, hardhat, hoodie, small scale on the floor.
- Props and HUD: stamp, pipe, steam, waves, heat, sparks, thermometer, coins, plus, summary card, question bubble, wire.

## Captions, sound, camera
- Captions: Two-tone captions coloured by meaning.
- Music and sound: Upbeat; thuds on stamps, pops on upgrades.
- Camera and pace: One continuous keep-chain: glide camera targets between machines.

## Style anchor (paste into every still and every clip prompt of the video)
> vertical flat cutaway diorama of a hidden workshop under a garage, flat colourful engineering-sim style, earth layers, a hardhat hero, HUD counter, upgrade chips, red problem stamps, green fix stamps

Freeze it: write it once into the project brief (`update_project_director_brief`) and copy the same words into every prompt. Never paraphrase it between scenes.

## Still prompt template
> [STYLE ANCHOR]. [CAST CARD of the characters in this shot]. Scene: Cutaway, room [state after upgrade N], [machine], HUD [value], chip [text]. Frame: [9:16 portrait], keep the key content inside the safe area. No text in the picture unless named here: [exact words]. No real brands, logos or real people.

Fill the brackets from the director's proposal row of the scene (see `references/directors-proposal.md`). One still per scene, attached plates (the character sheet) as references.

## Subclip route
1. Route A, stills first (default): generate the character sheet plate, then one still per scene. Images come from the creator's Codex CLI image generation first (no Subclip credits, brought in with `import_external_media`), else `generate_ai_media` kind image (for example `nano-banana-2`; check `list_ai_models` and quote with `estimate_ai_generation` before every paid call). Place each still on the timeline for its line and add a slow keyframed move (`add_media_keyframe`, scale 1.0 to 1.05). Add at most 3 animated clips of 3 to 4 seconds (for example `p-video-2`) on the key beats.
2. Route B, code drawn (no credits): Best as a HyperFrames or Remotion layer with a persistent diorama and timed props: HUD counter, chips and stamps are plain DOM. Keep every number real or labelled illustrative. Show safe, legal engineering only.
3. Captions: `transcribe_project`, then a caption preset restyled to the look's caption style above, inside the safe zone (x 60 to 960, y 160 to 1420 on a 1080 by 1920 frame; keep 16:9 captions in the lower third).
4. Music and sound effects: `search_public_audio` or an instrumental `generate_music` (ask first), volume about 0.12 to 0.2 under the voice.

## Credit cost note
Route B and local speech cost nothing. Route A costs only for Subclip image or clip models, or nothing when the creator's Codex CLI makes the images. A 60 second story is about 14 to 18 scenes: quote the plate, the stills and any clips with `estimate_ai_generation` before the first paid call and wait for a clear yes.

## Upstream source
Adapted from the original author's look in tvhead-studio (Vladic20, MIT). Files in the upstream repository:
- [template/engine/styles/underground.js](https://github.com/Vladic20/tvhead-studio/blob/main/plugins/tvhead/skills/tvhead-video/template/engine/styles/underground.js)
Repository: https://github.com/Vladic20/tvhead-studio
