# Steps 4 to 6: voiceover, build, verify

## Step 4: Voiceover, timing and captions

If the message step said no narration, ask about background music and skip to Step 5.

1. **Calibrate first.** Estimate the length of the script. Speaking speed varies by voice, so generate a short test clip (the first two sentences) before the full read, and measure: seconds divided by words times total words gives the estimated full length. Check for dead spots: stretches with neither narration nor strong visual energy.
2. **Voice.** If no voice is approved, `get_voice_samples` and let the creator listen and choose, then `set_approved_voice`. Cloud: `generate_speech`. Free for tests: `generate_local_speech`. Import with `import_speech_to_timeline` or `import_generated_audio_to_timeline`. Ask once, and respect a prior choice.
3. **Pronunciation.** Spell tricky names and acronyms the way they should be said ("A P I", "sass" for SaaS). Test the first sentence and listen. Cloud voices usually handle product names; local voices may not. No SSML tags. Use blank lines or "..." for pauses. Keep the exact spoken text in the director brief.
4. **Word timings.** `transcribe_project` on the narration item (local mode is fine). The word times are the source of truth for every beat.
5. **Map words to beats.** For each beat: start = first word's start, end = last word's end, plus 0.3 to 0.5 s of breathing room. Beat boundaries land on word onsets (hard cuts to the voice). Replace estimated times in the plan with real ones.
6. **Reconcile.** `real_total = last_word.end + CTA hold (2 to 3 s)`. If it differs from the planned total by more than 15 percent do not build yet: shorten the script and regenerate if the audio is much longer; scale the non-CTA beats proportionally if it is much shorter. The CTA starts at `last_word.end + 0.3 s` and holds about 2.5 s. Tell the creator if durations changed from what they approved.
7. **Captions.** Ask once: yes or no. If yes, caption the narration with `apply_dynamic_caption_preset` or `update_caption_style` (read `subclip-dynamic-captions`), and keep them clear of the beat content (check `get_timeline_contact_sheet`).

## Step 5: Build the beats

Build one beat at a time, each as its own HyperFrames layer. Read `subclip-hyperframes-layer` and its authoring contract first.

Per beat:

1. Read the beat's storyboard entry, the brand sheet, and the assets it uses. Use only imported project assets (`list_editor_assets` URLs). Copy brand colors and verified fonts exactly.
2. Write one standalone HTML document: fixed root size with matching `data-width` and `data-height`, a transparent or intentionally opaque background, one paused GSAP timeline registered under the composition ID, GSAP 3.15.0 from the pinned CDN URL.
3. Set the root `data-duration` to the beat's duration. Add the layer at the beat's start time with `add_runtime_layer` after `validate_runtime_layer_source` passes.
4. Seek and look: after the entrance, at the settled state, at the middle of the camera move and near the exit, with `view_current_frame`. Fix in place with `edit_layer_source` or `update_runtime_layer`.

### Continuous motion (the most important rule)

A beat is a shot, not a webpage with entrance animations. Timeline events must spread across the whole beat, not only the first one or two seconds. If an element is on screen it should be doing something: camera dolly, parallax layers at different speeds, secondary elements arriving mid-beat, real depth shifts.

Required motion magnitudes (smaller is invisible at video scale):

| Motion | Minimum |
|---|---|
| Translate | 30 px entrance, 8 px drift during a hold |
| Scale | 0.05 change (1.0 to 1.05 or more) |
| Opacity | full 0 to 1 for reveals |
| Rotate | 4 degrees to read |
| Camera dolly | scale 1.0 to 1.06 or more over the beat |

Patterns that ARE shots: a captured logo drawing itself stroke by stroke; a hero illustration with a push-in from 1.0 to 1.08 over 4 s; a product screenshot with foreground and background moving at different speeds; the brand's hero image as the bed with a one-line message arriving as kinetic type; a UI moment composed from shapes only when the beat is about that interaction.

### Easing, by intent

| Intent | Ease | Use for |
|---|---|---|
| Snap | `power4.out` | hero text, UI elements |
| Whip overshoot | `back.out(1.7)` | numbers, badges, impact |
| Soft land | `expo.out` | per-word reveals |
| Mechanical | `power1.out` | terminal text, code typing |
| Bounce settle | `elastic.out(1, 0.5)` | counters, CTA buttons |
| Dramatic | `expo.inOut` | full-screen statements, hero reveals |
| Drift | `none` | parallax, Ken Burns, camera drift |

Do not default to `power2.out` everywhere. Staggers: `power4.out` with `stagger` 0.08 to 0.15.

### Layer rules

- Use `tl.fromTo()` for entrances, not `gsap.from()` with CSS `opacity: 0` (it animates 0 to 0).
- No `Math.random()`, `Date.now()`, `requestAnimationFrame` or infinite repeats. Derive variation from indices.
- Counters: swap discrete values with `tl.set(el, {textContent: "42"}, 2.5)`, not an `onUpdate` counter. `onUpdate` is for canvas or typing loops.
- Do not center with `transform: translate(-50%, -50%)` and also animate transforms with GSAP. Use flexbox or `xPercent` and `yPercent`.
- Never stack two transform tweens on the same element at the same time.
- A logo `<img>` of an SVG cannot take CSS color: inline the SVG or filter it (but never put `filter` or `backdrop-filter` on text or on any ancestor of text; it can vanish from exports).
- Use `&nbsp;` or per-word spans where inline-block spans would collapse spaces.
- Fonts: use families verified in the runtime. Never pair a font file with a family from memory.
- Narration, music, effects and captions stay on native Subclip lanes, not inside the layers.

When a beat is a layer built by sub-agents (if your client supports them), you still read each beat's source yourself against the brand sheet and the storyboard. Treat any sub-agent's diagnosis as an unverified claim until you see the frame.

## Step 6: Verify and deliver

Do not call the video ready until every item below has real evidence (not a summary impression). Score each from 1 to 5; fix anything below 3.

- [ ] Every beat's source read top to bottom against the brand sheet and storyboard. Per beat note: background and accent colors match the brand (yes or no), largest headline size (aim for 80 px or more at 1920x1080), captured assets referenced versus planned, timeline events span at least 70 percent of the beat, one sentence on whether the beat delivers its storyboard entry. Verdict PASS or NEEDS FIX with what.
- [ ] `validate_runtime_layer_source` clean for each layer and `validate_project` clean.
- [ ] Frames inspected: at least `max(beats x 3, ceil(duration_seconds / 2))` frames across the video with `seek_timeline` and `view_current_frame`, plus `get_timeline_contact_sheet`. Write one sentence per beat: what is in frame, what is moving, which brand assets are visible.
- [ ] No unexplained dark or empty frames mid-video; list any and why.
- [ ] Brand assets actually visible: for each beat name the captured asset on screen and the time. A beat with none needs a reason. At least one beat shows the signature visual, not only the logo.
- [ ] Audio length and video length agree within 0.5 s (state both numbers).
- [ ] Sound effects land at their storyboard times and sit under the voice.
- [ ] A hard second look: would you post this with your name on it? If not, fix what is wrong.

Run the original checks that matter as a manual pass: required artifacts present (concept, brand sheet, script, plan), brand visuals used, headline sizes at least 80 px, timeline coverage at least 70 percent per beat, transition and effect timings equal to the plan, beat durations equal to the plan within 0.5 s.

Final message: say what you verified with the real numbers, and include a "What I did NOT verify" section (for example listening to the voice and effect balance, and exact export playback). Never claim a check you did not perform.

Pause for review. Export only when asked: `get_export_configuration`, `list_render_queue`, `export_video` once. Save decisions with `update_project_director_brief` and `write_session_summary`.
