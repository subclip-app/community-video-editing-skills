# 05 Shot on a phone (style `screen`)

Reference: `examples/05-phone-shot.mp4` (rough reference: two generated stills animated in code; images gpt-image-2 through the creator's Codex CLI) and the original author's frame `examples/05-phone-shot-upstream.jpg` (By the original author).

## What it is for
Showing a real result as if filmed on a phone: a dark room, a laptop with a live terminal session close up, handheld camera, shallow depth of field, a cream result card with one big number, a phone on the desk with a notification. About 24 seconds.

## What makes it look real
| Phone-footage cue | Build |
| --- | --- |
| Handheld camera | Keyed shots plus breathing (sines of about 37 and 17 frames) plus a micro tremor from smooth noise (periods 9 and 4 frames) and a slight roll. Never a new random offset every 2 frames: it shows as a tick |
| Depth of field | A DOM layer with a backdrop blur of about 7 px and a gradient mask: a sharp band (a share of the frame height) that moves with the camera focus |
| Motion smear | Blur of speed times 5 px on fast moves |
| Auto exposure | Brightness flares when the camera goes from the dark desk to the bright screen, then dips while moving |
| Lens and sensor | Vignette, light chromatic fringe at the edges (inset red and blue shadows), overlay noise |
| Screen light | A cool light in front of the screen plus a glow, a warm lamp from the side |
| Screen | The terminal as a texture that is not tone mapped, so it glows; the keyboard as a drawn layout |
| Phone | A lock screen with date, time and wallpaper; the notification slides in from the top |

## Honest terminal
The session is the typed prompt plus lines that appear on spoken words: a tool line, an output line, a grey redaction bar where the data is private, green for pass, yellow for a warning. Every number shown comes from a real run (frames, seconds, loudness), never invented. The window scrolls itself; a working line at the bottom while new lines arrive.

## Prompt to give yourself (fill the brackets)
> Vertical reel, [LENGTH] seconds, 1080 by 1920. A dark room, a laptop with a terminal session close up filmed handheld on a phone. The prompt [PROMPT TEXT] types in time with the voice, lines [LINES] appear on the words [WORDS], grey redaction bars over [PRIVATE DATA]. Then a cream result card with the number [REAL NUMBER] in red and an orange button, then a phone on the desk with a lock screen and the notification [NOTIFICATION]. Backdrop-blur depth of field, auto exposure, vignette, chromatic fringe, noise. Lo-fi music at 0.09 under the voice, soft key-tick effects, a ding on the notification.

## Build notes
- A 9:16 frame sees only about 1.7 m of width at 3 m: aim at the left half of the screen (the header and the markers), pan right to the card.
- Film the phone from above (camera height about 2.5 m) or it is cut off and defocused.
- Keep the music quiet: this is a night mood.

## Subclip route
A HyperFrames or Remotion layer for the terminal and the card (text stays crisp), composited over a still or a 3D desk scene; the handheld camera is keyframes with smooth noise (a layer prop or `add_media_keyframe` on the still). Key tick and ding sounds from `search_public_audio`. If the creator has a real screen recording of their terminal, use that recording (`import_attachment_to_timeline`) instead of drawing it.

## Credit cost note
No credits for layers and recordings. Stills as in style 02.

## Upstream source
- [references/phone-shot.md](https://github.com/Vladic20/tvhead-studio/blob/main/plugins/tvhead/skills/motion-studio/references/phone-shot.md)
- [template/src/screen/] ScreenVideo and Terminal in the upstream template (https://github.com/Vladic20/tvhead-studio/blob/main/plugins/tvhead/skills/motion-studio/template/src)
- [template/tools/script.screen.mjs](https://github.com/Vladic20/tvhead-studio/blob/main/plugins/tvhead/skills/motion-studio/template/tools/script.screen.mjs)
Repository: https://github.com/Vladic20/tvhead-studio
