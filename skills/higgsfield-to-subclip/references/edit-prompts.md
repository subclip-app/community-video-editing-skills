# Edit-by-prompt for the whole video

Write one message, let the agent build on the native timeline, then ask for changes in plain English. Always request a preview frame first.

## First edit

"Edit this talking-head video for Reels. Time everything to my words: a bold one-word-at-a-time title on the hook, motion panels when I name each thing, captions in my brand font, and one sound effect per visual event. Show me a preview frame first."

## Change the style

- Paper: "Change the whole edit to a paper style: me as a die-cut sticker on kraft paper, ransom-note titles, everything moving on twos like stop motion."
- Futuristic: "Switch the edit to a futuristic style: a dark grid world, lime rim light, HUD rings tracking my head, titles that decode from glyphs."

## Bring in the relit clips

"Drop in the generated clips on the exact frames they came from so the lips stay in sync, and cut to them on my finger snaps."

## Subclip tool map

| The message asks for | Subclip tools |
|---|---|
| Time to my words | `transcribe_project` (one job at a time), `get_script`, then place everything by word timestamps |
| One-word-at-a-time title | `add_text_overlay` with `set_text_animation`, or a HyperFrames layer via `add_runtime_layer` |
| Motion panels | runtime layers; read the hyperframes layer skill with `read_subclip_skill` first |
| Captions in my brand font | `list_dynamic_caption_presets`, `apply_dynamic_caption_preset`, `update_caption_style` |
| Sound effects, one per event | `search_public_audio`, `import_public_asset_to_timeline`, `update_audio_item` |
| Head-tracking rings or text behind me | the `subclip-text-behind-subject` skill |
| Preview first | `view_current_frame` at the hook, then `get_timeline_contact_sheet` |
| Review before posting | contact sheet, frame checks, listening note, then `export_video` only on request |

Treat every render as a strong first draft: watch it, ask for fixes, then post. Generate two looks of one change when unsure (noir against warm key, sunset against night) and choose.
