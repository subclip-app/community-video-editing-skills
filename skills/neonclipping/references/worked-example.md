# Worked example: Inde Navarrette, Phasmophobia stream

[Inde Navarrette | Lets Play Phasmophobia (Part 01)](https://www.youtube.com/watch?v=voQeFH0DXYk) is a 3 h 36 min Twitch-style stream that Inde Navarrette published on her own YouTube channel under a Creative Commons Attribution licence ("Creative Commons Attribution license (reuse allowed)" on the video page). That licence is the permission to clip it; every clip credits her on screen and in the post copy. It is a horror co-op game with friends on voice chat, a webcam in the top right corner, a subscriber goal bar above it and a chat overlay in the bottom left.

## 1. Source

`fetch_linked_media` could not download this video ("Requested format is not available"), so the run used the fallback the skill describes: the creator's own file. Only the two chosen sections were downloaded (40:18 to 41:40 and 21:52 to 22:42) and imported with `import_external_media`, never the whole 3.6 hour stream.

## 2. Moments

YouTube's own word-timed captions were read first (free, word level). Reaction words, `[screaming]` and `[laughter]` tags and "oh my god" moments gave about ten candidates; each was read with context.

| Rank | Moment | Source | Score | Kind | Decision |
| --- | --- | --- | --- | --- | --- |
| 1 | They killed me | 40:27.2 to 41:33.0 (1:05.8) | 8/10 (hook 8, engagement 9, value 6, share 8) | reaction | Cut. A hunt: screaming, "I dare you! They killed me", then the payoff "How did that happen? I used the cross. I don't understand." |
| 2 | Spirit box | 21:52.4 to 22:36.6 (0:44.2) | 7/10 (hook 7, engagement 8, value 6, share 7) | reaction | Cut. The spirit box turns the light off, "Oh, hello", then "Oh, he's right there. I see him." The ghost is visible in the gameplay. |
| 3 | First death | 25:00 to 26:30 | 6/10 | humour | Passed over: strong, but four swear words in 90 s. |
| 4 | Door closed by itself | 1:11:00 to 1:12:30 | 6/10 | reaction | Passed over: needs the setup before it. |

Edges: clip 1 starts 0.4 s before "This ain't my dad" and ends after "I don't understand."; clip 2 starts at "This just went off." and ends after "You're on top of him." The one swear inside clip 1 was muted by splitting the audible copy for 0.85 s; its caption word was left out.

## 3. Headings

| Clip | Heading | Evidence quote |
| --- | --- | --- |
| 1 | She used the CROSS and still died?! | "I used the cross." |
| 2 | One spirit box and he's RIGHT there?! | "You have the spirit box", "he's right there" |

Box look: Montserrat 800, uppercase, white on a black rounded box at 88% opacity, 8 s from each clip start, just under the facecam.

## 4. Boxes and layouts

Six stills across each section showed the webcam in the same top right rectangle in every frame, holding her face; the chat overlay and the sub goal bar never hold a face.

- Facecam box: x 0.731, y 0.093, w 0.269, h 0.359. Bottom crop raised to 0.62 to drop a channel link drawn on the webcam.
- Game box: crop 0.28 left, 0.28 right, 0.093 to 0.105 top. Brightness 1.35 on the game copy, because the game is near black on a phone.

| Clip | Layout | Copies |
| --- | --- | --- |
| 1 | Face + gameplay (face 0.32) | facecam copy, muted, x 0 y 0 w 1 h 0.5689; game copy, audible, x 0 y 0.5689 w 1 h 1.2089 |
| 2 | Circle camera (face 0.38) | game copy, audible, full canvas; facecam copy, muted, x 0.033 y 0.0667 w 0.38 h 0.38, `borderRadiusPx` 9999, crop 0.76 left and 0.035 right to centre her face, in front |

## 5. Captions

A free local transcription of clip 1 was tried first; on screaming and game noise it invented words (a name repeated seven times). YouTube's own captions were right, so they were imported per clip with `import_caption_cues_for_media_item`, one cue per word, with bleeped words and tags left out. This is the order the skill prescribes: platform captions first.

GTA Neon: `apply_dynamic_caption_preset` (`bold-clean`), then `update_caption_style` with Montserrat 900, 78 px, uppercase, cyan `#43FFEF`, spoken word hot pink `#FF45A8` through `highlightMode: "emphasis"`, purple outline `#310C56` 8 px, blue shadow `#00CCFF`, centre at 75%. Pages of at most 4 words with `arrange_dynamic_caption_pages`, broken at punctuation and pauses. Pages disappear in the 16 s scream gap and the 11 s death screen gap instead of hanging.

A small "Stream: Inde Navarrette, CC BY" credit sits at the bottom of both clips.

## 6. Export and checks

One ranged export per clip (1.0 to 66.8 and 68.8 to 113.0). Frames were checked at 1 s steps on the exports: facecam crop clean, heading readable for 8 s, captions never cover the face, quiet parts empty, credit visible. No music, no AI model, zero credits.
