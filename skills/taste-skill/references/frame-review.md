# Frame review: the checker and finish gate for video

On a website the kit renders the page in a real browser and a gate holds the finish until no fixable fail is left (`website/gate.md`). In Subclip the same job is done by looking at rendered frames. A saved layer or a successful tool call proves nothing about pixels.

## The run

1. **Sheet.** `get_timeline_contact_sheet` with `from: 0`, `to: <duration>`, `every: 1` (detail `balanced` when UI text is small). Add each scene's entrance, settled state and exit, and every moment's peak, with `times`.
2. **Close look.** `view_current_frame` at full size on each scene's settled frame, each moment's peak and the end card.
3. **Sound.** When the video has sound, `get_audio_timeline_sheet`: true peak under -1 dB, no long silence, voice above the music, a sound on the cuts that matter.
4. **Judge** every frame against the checklist below. Write each fail with its time.
5. **Fix in place**: `read_layer_source` then `edit_layer_source` with the source hash, or `update_runtime_layer` (it replaces props, so send them all); `update_media_item`, `update_text_item`, `update_audio_item` for native items. One edit at a time, then re-read the project.
6. **Again**, rendering only the changed times. Three rounds at most. When the creator says stop or ship it as it is, stop and report the open fails.
7. **Export only when asked**, then look at the exported file at one frame per second as well, including its first two frames.

## Checklist

Each line maps to the kit's check ids in brackets, so a creator who knows the original can follow.

- **First scene** says what is sold, for whom or where, with one hard fact; the hero is alone on screen and its main action visible [copy-headline, copy-fact, hero-screen, fold-action].
- **One idea per scene**: one heading, first and top-aligned; no neighbour's heading or picture; nothing sparse, no scene half empty [one-section, one-heading, section-air, empty-area].
- **Equal edges**: every block starts and ends on the same side margins in every scene; nothing out to one side; nothing past the frame or inside the platform's UI zones [container-edges, off-grid, spill, off-viewport].
- **Every visual draws** on every frame: no empty frame, no black layer, no missing font, an effect that fails shows its flat ground [visual-empty, gl-fallback, font-load].
- **No caption** explains, apologises for or labels a picture; credits in one line; no placeholder, sample note or lorem text [visual-caption, credit-wall, placeholder].
- **The right things for the kind**: outside tech no shader, print or big scene; the product itself shown big, a new picture each scene, never one view twice; software shows its own UI doing its job in one app frame; real photographs where they fit, none twice; real icons in their own colours [effect-kind, product-shown, photo-repeat, grounds].
- **Motion**: the hero enters once; one or two dealt moments, each in its own scene; everything else rests; no fade-in on every scene; nothing tilts; anything moving more than 5 s has a reason [hero-enter, moment-none, scroll-reveal, tilt].
- **One system**: one palette, two faces, one heading scale, one radius, one button style, one card style, one app frame across all scenes; text contrast readable on its ground [button-styles, card-family, heading-scale, text-contrast].
- **Copy**: headings name things, buttons are a verb and an object, at most two actions on a frame, one fact said one way, no slop words or stock lines (`website/copy-tells.md`), no invented figures, quotes or customers; nothing reads faster than two seconds a line [copy-headings, copy-buttons, fact-agree, copy-slop-word].
- **Contacts**: no house numbers, postcodes, real-format phones or register numbers; domains and addresses on `.example` [street-number, phone-number].
- **Your eyes**: beside a figma.com or x.ai launch video it reads as a professional company film; nothing tilted, staggered, cut or overlapping; the hero shows the work, not a mood.

## Report

The review result first (all clear, or the open fails with times), then the kind and the deal, every assumed fact, every stand-in photograph, and what frames cannot judge (taste of the sound, pacing at full speed), with a request for one watch-through with sound.
