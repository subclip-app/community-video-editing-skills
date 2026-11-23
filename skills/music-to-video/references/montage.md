# Asset treatments: weaving the creator's media onto the beat spine

When the creator supplies images or videos, a group can be an **asset treatment** instead of a typographic one. Assets are an additive ingredient on the same beat spine, never a separate pipeline. Typography stays the floor: if no asset fits a group, fall back to a typographic group.

In Subclip the clips are **native media items** on the timeline, not embedded in layer code. That keeps them editable and trimmable. Import them first (`import_attachment_to_timeline`, `import_external_media`, or reuse `list_editor_assets`) and read their context with `get_media_context` before placing them.

## The three treatments

### beat_cut: one clip per anchor (only on a beat_cut frame)

Cut to a new clip on each anchor (the frame's beats or onsets). Place each clip as its own media item starting at its anchor and ending at the next anchor, using `update_media_item` and `trim_media_item` (non-destructive trims, keep the source duration). A photo gets a short scale push with `add_media_keyframe`. Cut on strong anchors and land a hero clip on a key moment or downbeat. Cuts are hard cuts, no dissolves, and no gaps between clips.

### ken_burns: slow push on one clip (fits phrase_flow)

For calm frames: one clip held over the span with a slow scale and drift (for example scale 1.0 to 1.08 plus a small translate) eased across the whole span with `add_media_keyframe`. Paced by the frame, not by beats. No hard cuts. Crossfade at the frame edges.

### bg_under_text: clip dimmed behind a typographic group

A full-bleed clip dimmed to about 50 to 70 percent brightness behind a group whose foreground is a typographic layer. The text rides the same anchors; the clip is the bed. Use it when footage should be present but the message must stay readable.

## Rules

- `pacing` decides the treatment: beat_cut only on a beat_cut frame; on a phrase_flow frame use ken_burns or a slow crossfade, never per-onset hard cuts.
- Clips are muted unless the creator asks for their own sound. The music is the only audio by default. If a clip should play its own sound, duck the music under it with `update_audio_item` volume changes around the clip.
- Anchors are track seconds from the beat map. Convert to the timeline position by adding where the music starts on the timeline.
- Backgrounds are dimmed so foreground text stays legible.
- After placing, check cuts and the first and last frame of each clip with `seek_timeline` and `view_current_frame`.
