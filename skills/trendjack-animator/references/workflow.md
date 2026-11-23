# Workflow, stage by stage

Rules for every stage are in `SKILL.md`. Tool names and models are in `subclip-tools.md`.

## Stage 0: setup (free)

1. `get_project_outline` or `create_project` (portrait 9:16, 1080 by 1920).
2. Check models, voices and credits (`list_ai_models`, `list_ai_voices`, `get_ai_credit_status`).
3. Bring the clean product photo into the project (`import_attachment_to_project_media` or `import_external_media`), and note its `fileId` from `list_editor_assets`. Read it with `get_media_context`.

## Stage 1: intake, format and look

Ask in one message: the product (page and clean photo), real size in cm, who buys it, language, price and offer (or "no offer"), the buyer's own words if the creator has them, and three things the ad must never claim. Save the answers at the top of the project brief. If a real price, offer or "never claims" list is missing, say in one plain line what is missing and why it hurts ("no never-claims list, so the song could promise something your product does not do"), and ask before going on.

Then one card for the format (`formats.md`) and one for the look (`looks.md`), each with a recommended option.

**Length and cast gate (before the script).** Count the planned seconds and the recurring people. 15 to 45 seconds and up to 3 characters: go. Over 90 seconds or more than 4 characters: offer a 15 to 45 second cut-down first. Long-ad mode (below) only when the creator writes back an explicit line such as "yes, long mode, about <N> credits" after you quote the credits. "Yes", "go" or "make the whole video" are not that answer.

## Stage 2: script

Three options in the format's shape on one card, each with its lines in the target language and in English. Save them in the project brief. Lines are short (3 to 7 words sung, one sentence spoken), plain and specific; the hero looks like the buyer. Length is words times tempo, not the tool: about 80 to 90 sung words a minute (about 40 words for a 30 s song ad), about 150 spoken words a minute. The creator picks one.

## Stage 3: audio first

**Sung** (song ad, product song):

1. Write the lyrics and a style line: melodic, long held notes at the end of each line, smooth legato, the genre the buyer listens to (see `formats.md`), the vocal gender, the language. Put "the voice sings the first word at 0:00, no instrumental intro" and an avoid list (slow, sad, ballad, rap, spoken word, talk-singing, staccato chanting, long intro, EDM) into the prompt. Sing every line once, in order.
2. Quote and generate with `generate_music` (see `subclip-tools.md`). If no available music model gives a clean sung take with your lyrics, tell the creator plainly and let them pick: another music model, a song file they made elsewhere (`import_external_media`), or a licensed track from `search_public_audio` (then the shots follow that track's real vocals, so write the lyrics to match or use instrumental plus a voiceover).
3. Import the take (`import_ai_operation_to_timeline`), then get word timings with `transcribe_project` (local mode is free) for that audio item, one job at a time.
4. Compare the transcript with the approved lyrics. Fix misheard words with `update_caption_words`, keeping the approved spelling (brand names especially). Note any line the singer changed or swallowed; if a line is missing or wrong, that take is not usable: generate another (new quote and yes).
5. Whisper can repeat a line as a zero-length ghost word or invent a closing line on the outro: remove words after the last sung line before timing.
6. The creator listens and picks a take. You cannot hear it: say that.
7. The song starts on the singing: at most 0.5 s of music before the first sung word. Trim any intro with `trim_media_item` or `update_audio_item` (start offset), never hide it under a held frame. End about 0.4 s after the last word with a short fade.

**Spoken** (narrated story, explainer, skeleton, clone):

1. Pick a voice: `list_ai_voices`, then `get_voice_samples` for 2 or 3 candidates, the creator picks, `set_approved_voice`. Match the voice to the face (an older hero gets an older-sounding voice). A free local voice is fine for tests (`generate_local_speech`).
2. Quote the characters (cloud speech is billed per 1,000 characters), get a yes, then `generate_speech` ALL lines as ONE take. Import with `import_speech_to_timeline` (or `import_generated_audio_to_timeline` for local speech).
3. Ask the voice model for pace in its style instruction (about 150 words a minute, brisk, natural short pauses). Too slow or too fast: a new take with a changed instruction (new yes).
4. Transcribe the take with `transcribe_project` to get word timings and check every word and number against the script. A low-stability voice can change words; a doubtful word is checked on a 1 second slice.
5. Optional music bed: `generate_music` instrumental, volume about 0.14 to 0.2 so it sits far under the voice. Founder and talk ads usually run better with no music.
6. Start on the first word: frame 1 already has the voice, no breath or room tone before it, only tight breaths (about 0.15 to 0.3 s) between sentences. Trim the silence with `trim_media_item`.

Word times can stick to the previous word across a pause (a line's first word coming 0.4 s early). Snap each line's first word to the end of the silence before it, then cut the shot just before the line.

## Stage 4: shot plan

One shot per line or phrase, 1.2 to 2.7 seconds each (1 to 1.5 s for montage inserts), back to back: the first start is the audio start, the last end is the audio end. Write the plan in the project brief. For each shot:

- id, start and end (seconds of the audio), the line
- plates in the frame (character plates, product, place; "none" when nothing recurring is in it)
- still: repeat the full character description in the same words every time, then setting, camera position and ONE clear action that shows the line literally. End with "No text anywhere in the image" unless a label must show.
- motion: `Camera: <move>. <the action>.` A real action, not only a camera move.
- seconds: clip length to generate (at least the shot length plus 0.5 s, within the model's allowed durations)
- lip-sync on the 1 or 2 shots where the hero sings or speaks on camera
- strong model only on emotional close-ups and product-on-skin shots (about 1 in 5)

Story locks go in every prompt they touch: same clothes per scene, the hook's place comes back for the payoff, the product is never on screen before its reveal, recurring objects stay the same. Show the plan before any image.

**Swiping a reference ad?** Plan one shot per reference shot from its cuts, not from your lines. A shot may start in the middle of a sentence; the voice runs on underneath.

### Cut grid and spend plan (free, before any paid step)

Write a grid in the project brief and show it with the estimate. One row per shot with its build type:

| # | Scene | Slot (start to end) | Slot s | Build | Clip it comes from | Use from |
| --- | --- | --- | --- | --- | --- | --- |
| 14 | 3 kitchen | 41.20 to 44.70 | 3.50 | full clip | 14 | 0.45 |
| 15 | 3 kitchen | 44.70 to 46.10 | 1.40 | pair, shot 1 | 15 | 0.45 |
| 16 | 3 kitchen | 46.10 to 48.30 | 2.20 | pair, shot 2 | 15, after its cut | cut + 0.05 |
| 17 | 3 kitchen | 48.30 to 49.60 | 1.30 | still-only | none (push in) | 0 |

| Build | When | Costs |
| --- | --- | --- |
| Full clip | shots of about 2 s or more, any real action, lip-sync, the product reveal | 1 still and 1 clip |
| Two-shot pair | two neighbouring shots in the SAME scene whose slots together fit in one clip (minus 0.6 s); shot 2 is a new angle on the same set and people, nobody new | 1 still and 1 clip for 2 shots |
| Still-only insert | inserts, reactions and cutaways (under about 2.5 s) where nothing important has to move | 1 still, no clip |
| Long shot | a slot longer than one clip (minus 0.5 s) | 1 still and 2 clips, the second from the first clip's last frame |

1. Two shots per prompt, never more. Video models make one hard cut inside a clip reliably; three or four timed shots are ignored. Shot 2 of a pair has no still of its own. Never give a pair an end frame (it turns the cut into a morph).
2. Fixed clip lengths are fine. You never fill a slot by stretching or repeating; you trim the best part of each clip into its slot. For a short slot in a long clip, write when the action is done ("the hand sets the cup down by second 2").
3. Cuts sit on the clock (or the reference's timings), set in the edit, not where a clip happens to end. Aim for every cut within 0.2 s of the reference. If the audio runs more than 0.3 s long or short in a scene, fix the take (trim pauses, change the pace instruction, cut a word; a new take needs a yes), never move the cuts.
4. Never reuse one clip at different offsets to reach the shot count. Too few clips means more pairs and more still-only inserts, not repeats.
5. Check the plan before spending: list your cut times next to the reference's and count the share within 0.2 s. Fix the plan to 100 percent; cuts are typed in, so a miss is a typo.

Spend plan under the grid, one line per scene, then totals: stills = full + pairs + still-only + long shots; clips = full + pairs + 2 per long shot. Cost = plates + stills times the still price + clips times the clip price, plus about 15 percent for retakes. Shots with little movement (a look, an object, a reaction) are the best still-only candidates.

## Stage 5: plates and stills (paid)

1. **Plates first.** One plate per recurring character (16:9, white background, front, side, back and a face close-up), one product plate built from the REAL product photos (the real label copied letter for letter, or the real photo itself as the plate), one plate per place that comes back. Plate prompts describe the person and never give a name (a named sheet comes back with the name printed on it). Quote, get a yes, generate, then read them: same face in every view, right clothes, label exact. **Show the plates and wait for approval.** Write the approved plates and their file IDs in the project brief. No plates for one-shot props. A plate is only ever attached to an image prompt, never used as a clip's start frame.
2. **Stills** (9:16, 1K is enough, the clips are about 768p). The prompt is the look line, the framing and the shot's still text. Attach the references the shot lists (plates and product photo) through `sourceAssets` with role `reference`, and label each in the prompt by description ("image 1 is the man about 65 with round glasses, image 2 is the product"). One still per shot, except shot 2 of a pair. Later shots of a scene are edits of that scene's approved still ("Same room, same people, same clothes, same light; change only: <new framing and action>"), so set and faces stay locked. Quote all, get a yes, generate.
3. **Faces.** A character plate shows the face small. Crop the plate's front face close-up to its own image (generate it as a separate close-up, or ask the creator's image route for a face crop) and attach it as image 1 ("the face: copy it exactly") with the plate as image 2 in every still of that character. Without it, close-ups drift to another face.
4. Put the stills on the timeline in their slots and read `get_timeline_contact_sheet`. Check: faces match the plates, the product matches the photo, every still shows its line, nothing important where captions will go. Remake single shots with a new quote first.
5. Plate check: for each plate, list every still made from it and look at them side by side (plate first). Same face, product, label and room? Remake drifting stills from the plate. Every still must log which plates it used.
6. Show the creator the contact sheet and plate comparison before any clip is made. A new or changed plate later (a new outfit, a retake) is approved again.

Image models garble words and change numbers. For anything exact (a sign, a card, a screen), generate it into the still with the real asset attached as a reference so it takes the scene's light and angle, and check it. Never paste an overlay onto a moving clip in the edit: it looks flat and shows its edge. If exact editable text is essential, use `add_text_overlay` on a still-only insert instead.

## Stage 6: clips (paid)

- Normal shots: the economical start-frame video model at about 768p (see `subclip-tools.md`). The strong model for emotional close-ups (crying, shock, joy) and product-on-skin shots. A start and end frame model only for big action (throwing, running) and moves that must land exactly (a box opening). Start frame = the shot's still, 9:16, duration = the shot's seconds. No generated audio.
- Clip prompt: Style (look line), then Camera and action, then the constraints line, word for word: `Nobody talks or sings. No captions, no text. Same characters, clothes and set as the first frame.` (For a lip-sync shot drop "Nobody talks or sings".)
- Two-shot pair, one clip from shot 1's still:
  ```
  Camera and action, two shots with one hard cut:
  Shot 1 (0 to <slot 1 + 0.5>s): <framing>, <camera move>, <one action>.
  Hard cut.
  Shot 2 (<same> to <end>s): <new framing in the same set>, <camera move>, <one action>.
  Constraints: Nobody talks or sings. No captions, no text. Same characters, clothes and set as the first frame.
  ```
  Find the cut inside the clip on a contact sheet of the clip. Shot 2 uses the same media with a source start at that cut + 0.05 s (a second timeline item from the same file, trimmed with `trim_media_item`). Shot 1's source start plus its slot must end before the cut. No cut found: use the clip for shot 1 only and make shot 2 a still-only insert.
- Long shots (slot longer than one clip): make clip a from the still. For clip b make a second still by editing the first still to the pose where the action ends (same set, same people), then animate it with the action continuing. Cut a to b on the timeline.
- Still-only inserts (free): a slow push on the still, 0.5 s longer than the slot, with `add_media_keyframe` scale 1.0 at the start and 1.05 at the end.
- Lip-sync shots: use a model that lists audio-conditioned lip sync (see the avatar models in the live catalog; a Kling Lip Sync style model takes an existing video plus audio, an avatar model takes a portrait plus audio). Test one shot before planning a talking ad: several models ignore an external voice and invent garbled speech. Slices stay short, about 3.5 s, one line per clip, from a close-up still with the lips visible. Mute narrator words inside the slice so the mouth stays shut. The clip source start stays 0 so mouth and audio line up.
- Quote all clips first, get a yes, generate, then check the contact sheet again. Every clip must move. The first 0.4 s of a clip barely moves, so normal shots start at a source start of 0.45.
- Keep the operation IDs. In-app agents end the turn after accepted asynchronous work and resume on completion; do not submit duplicates. Do not store temporary signed URLs.
- One action per clip. A 10 s clip with two planned camera beats went dark after 8 s in a test; two 5 s clips from the same still with different moves give two clean shots. Late in a clip cartoon eyes turn to empty sockets and colours drift: trim the shot so it ends before that.
- Dramatic hooks (crying, throwing a phone): the start and end frame model for the action shot, the strong model for close-ups. If a face morphs mid-action, use the two clean parts of the clip as two back-to-back shots instead of paying for a retake.

## Stage 7: assemble and caption

Detailed tool steps are in `subclip-tools.md`. Summary: audio on the timeline at the clock, each shot trimmed into its slot, captions from the word timings in the safe zone, music under the voice, sound effects only where they help, `set_project_duration` to the audio end plus a short tail.

## Your product in generated shots

- Attach the product plate, or the real product photo itself (a clean packshot, and a real phone photo for photoreal ads), to every shot the product appears in, and name it in the prompt ("image 2 is the product"). No real photo: ask for one; never draw a product from text. A garbled label is a FAIL: turn the label away or cut to the real photo.
- Real packaging as sold. Caps on, lids closed, the real label. A box shows only while it opens; after the reveal, products sit on the table without the box (models redraw logos badly).
- Real sizes in the prompt, in cm and against a hand ("about as long as her index finger", "the jar is half the height of the bottle").
- Measure, do not eyeball: take the product's height divided by width from the real photo and write the allowed band (about 10 percent) in the brief. On each still, compare the product's ratio and its length against the hand, face or object beside it (within about 20 percent) and note both numbers. A check against an object no longer in the shots measures nothing. Crowd or shelf shots name a scale object. Build later shots by editing the one approved still. Video models grow or stretch the product mid-clip: before delivery put the first, middle and last frame of every product clip side by side and redo any shot where it changes size.
- Read label text at full size before calling it a misprint; thumbnails make letters look wrong. Use the image model that handles text best for readable packaging.
- Captions never touch the product, its label or the hand holding it.

## Long ads (over about 60 s)

Only after the gate in Stage 1. The first paid step of a long ad is one scene as a pilot, approved before the rest.

1. Group the beats into scenes: one place, the same people, one moment. A 4 minute story is usually 8 to 12 scenes, each with a number and a short label in the cut grid.
2. One scene block per scene, written once and pasted word for word into every still of that scene: `Set: <place, light, time of day>. In it: <each person by description, with this scene's clothes>.`
3. One still per SHOT. Make each scene's base still first (usually its widest shot); the other stills of the scene are edits of it. A place that comes back later reuses the same scene block and base still.
4. One continuous voice or song for the whole ad, never one take per scene. Cuts sit on the reference timings, independent of where lines start.
5. Cut grid and spend plan first. This gets a 56 shot ad without 56 clips.
6. Over about 40 shots, work in batches of about 13 shots, read a contact sheet per scene, and re-read the project state between batches. Independent generation jobs may run together inside the approved budget; timeline edits stay one at a time.

## Hook variations

Same clips in a new order plus ONE new opening shot per hook and a new voice take. Keep hook 1 in the main project; duplicate the project for hook 2 and 3 and change only the opening shots. A headline goes in with `add_text_overlay` (two lines, top band, never over a talking face), inside the safe zone.

## Translating

- A sung ad: a fresh generation with translated lyrics sounds like a different song. Keep the style text, change only the language words and keep the same line count, then re-time the shots line by line (the line timing stays close to the original) instead of re-planning them. Check the new transcript against the translated lyrics.
- A voiced ad: reuse the clips, make a new voice take in the new language, re-time the cuts through the new line timings. The community skill `video-translate` covers dubbing and caption translation.
