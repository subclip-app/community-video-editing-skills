# Captions: styles, grouping and languages

NeonClipping burns word-timed captions into every clip. In Subclip they stay editable Dynamic Captions. Never edit caption words or timing on disk; use the caption tools.

## Timing source

1. **The platform's own captions.** For a YouTube link, `fetch_linked_media` may return a timestamped transcript with the video context. When it is word-timed and trustworthy, attach it to each trimmed clip with `import_caption_cues_for_media_item`: one cue per word, integer `startMs` and `endMs` relative to the source file, end bounded by the next word. At most 2,000 cues per call. Caption tags such as `[laughter]` or `[ __ ]` are not words: leave them out.
2. **Local speech model.** Otherwise run `transcribe_project` with `mode: "local"`, `purpose: "captions"` and the exact `mediaItemId` of the one audible copy of each clip, one job at a time. It is free and offline. Pass the language code (`en`, `hi`, `es` and so on); the desktop does not detect it.
3. **Creator's subtitle file.** An imported SRT or VTT is converted to cues the same way as step 1. Words inside one cue get evenly divided timing, so check the result.

Cloud transcription costs credits; use it only when the creator asks (for example for speaker labels).

## Caption styles

NeonClipping's five named styles, as Subclip caption settings. Apply the closest preset with `apply_dynamic_caption_preset`, then set the listed fields with `update_caption_style` (the preset resets earlier style fields, so the order matters). Sizes are for a 1080 by 1920 canvas.

| Style | Words | Spoken word | Outline and shadow | Size | Case |
| --- | --- | --- | --- | --- | --- |
| GTA Neon | cyan `#43FFEF` | hot pink `#FF45A8` | deep purple `#310C56` outline about 4 px, electric blue `#00CCFF` shadow offset about 5 px, slight blur | about 72 | upper |
| Impact | white | lime `#CBF33D` | black outline about 6 px, shadow about 4 px | about 72 | upper |
| Clean | white, whole line at once | white | thin black outline about 3 px | about 58 | lower |
| Hormozi | white | cyan `#00FFFF` | black outline about 7 px, soft shadow | about 84, spoken word pops to about 112% | upper |
| MrBeast | yellow `#FFFF00` | orange `#FF6600` | black outline about 9 px, hard shadow | about 90, pop about 112% | upper |

Use a heavy sans font (for example Arial Black, Impact or Montserrat ExtraBold) that is installed. For the spoken-word colour use `highlightMode: "emphasis"` with the colour above when the renderer colours the active word; check one frame with `view_current_frame` and adjust. Keep emphasis words (the punch words from moment judging) in the spoken-word colour with `set_dynamic_caption_priorities` when the creator wants them.

Without a named style, use Subclip's default captions (`apply_dynamic_caption_preset` with the default preset, no highlight). GTA Neon is this skill's default for gaming streams.

## Words per caption

Default at most 4 words per caption (1 for a one-word style). Group with `arrange_dynamic_caption_pages`:

- Break after `.`, `?`, `!`, `,`, `;` or `:` once a page has at least 2 words.
- Break at a pause longer than about 0.45 s.
- Break before a page gets too wide for the canvas at the chosen size.
- A lone last word merges into the page before it when that page has room; otherwise move one word down (4 + 1 becomes 3 + 2).

## Quiet parts

In a stream there are long gaps between lines: screaming, game sound, silence. A caption must not hang on screen through them. A page should disappear about 0.8 s after its last word ends when the next word is far away. Check one frame inside every gap longer than 2 s with `get_timeline_contact_sheet`; if a page stays visible, split the page so the long gap falls between pages.

## Position and safe zones

- Default caption centre at about 75% of the canvas height.
- When the facecam sits low (camera below gameplay, bottom corner overlay), move captions to about 120 px (6%) above the facecam.
- Keep captions inside the platform safe zone: clear of the bottom 15 to 20% (TikTok and Reels caption and buttons) and the right 12% (like and share buttons), and inside 90% of the width.
- Never cover the facecam, the face or the opening heading.

## Languages

- Any language the local speech model knows can be captioned; pass its code. NeonClipping lists 52.
- **Hinglish.** For Hindi speech, creators usually want Roman letters ("kya haal hai bhai"), not Devanagari. Transcribe with `hi`, then rewrite each word in Roman letters with `update_caption_words`, keeping every word's timing. Spell English words in English. Offer Hindi script or English only when asked.
- Right-to-left scripts and scripts without an installed font need a visual check.
- Remove obvious caption loops (the same word repeated more than three times) with `update_caption_words`.
