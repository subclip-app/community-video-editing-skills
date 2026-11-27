# Subclip tools for each upstream step

The upstream skill ships Node, Python and shell scripts that capture a site, voice a script, render HTML to video and check the render. None of them are shipped or run here. Each step has a Subclip equivalent. Script names that still appear in the other references refer to this table.

| Upstream step | Upstream tool | Subclip step |
|---|---|---|
| 0. What the machine has | `providers.sh` | `get_ai_credit_status` for the budget, `list_local_voices` for free voices, `list_ai_models` for paid models. Ask once whether the creator's own Codex CLI may make images. |
| 1. Capture the brand | `brand.mjs`, `fetch_logo.mjs` | `inspect_public_website` with the URL: colours, fonts, logo, copy and screenshots. Look at the screenshots before deciding ink, ground and accent. Use the official logo from the site; never redraw it. With no site, design an identity on purpose and say so. |
| 3. Precedent per beat | `precedent.py` | Read `library/moments.jsonl` (716 rule-only rows). Search it for the beat (`hook`, `turn`, `proof`, `cta`) and the content (`ui`, `type`, `logo`, `number`, `3d`) and write the one rule you adopt with its id in the beat table. Rows never outrank a measured number in the references. |
| 4. A missing surface plate | `imagegen.py` | Offer the creator's own Codex CLI first and import the file with `import_external_media`. Otherwise `list_ai_models`, `estimate_ai_generation`, a credit quote and a yes, then `generate_ai_media`. Never for text, logos, UI or people shown as real. |
| 5. Voice and word timings | `voice.py vo`, `sync.mjs` | `get_voice_samples`, then `set_approved_voice`, then `generate_speech` (cloud, quote first) or `generate_local_speech` (free, tests). Import with `import_speech_to_timeline` or `import_generated_audio_to_timeline`. Word times: `transcribe_project` on the voice item (local mode for tests), then `frame = round(seconds * 30)` and the on-screen word lands 0 to 2 frames earlier. |
| 6. Build the film | `templates/film.html`, `runtime/` | One HyperFrames layer per scene with `add_runtime_layer`, full frame 1920 x 1080, root `id="main"`, the runtime from `assets/motion-layer.js` pasted inline (see `runtime.md`). Check with `validate_runtime_layer_source` first. For later scenes, `clone_runtime_layer` and patch the scene lines with `read_layer_source` and `edit_layer_source`, so the runtime is not resent. |
| 6. A 3D hero | `hero3d` | A native 3D layer: `list_3d_models`, `add_3d_layer`, `set_3d_keyframe_sequence`, `verify_3d_layer_setup`. Or a separate Three.js layer on the pinned module. |
| 6. Stills of the hardest beat | `render.mjs --still` | `view_current_frame` at exact times, or `get_timeline_contact_sheet` with `times` for several at once. |
| 7. Render a draft | `render.mjs` | Not needed: the timeline is the draft. Review it with `get_timeline_contact_sheet`. Export only when the creator asks. |
| 7. Review gates | `look.py`, `lint.mjs` | The checklist in `review-gates.md`, run on contact sheets and frames. |
| 8. Sound effects | `voice.py sfx` | `search_public_audio` (Subclip catalog or Freesound; keep CC0 or CC BY with credit), import with `import_public_asset_to_timeline` at the event frame. |
| 8. Music | `voice.py music` | `search_public_audio` with music words (check each license), or `generate_music` after a quote and a yes. Import as its own audio item. |
| 8. Mix | `mix.py` | Separate native audio items, gain and fades with `update_audio_item`. Music sits about 9 dB under a voice; peaks stay under -1 dB. |
| 9. Final | `render.mjs --audio` | `get_export_configuration`, `list_render_queue`, then `export_video` once, and `get_export_status`. Shutter blur and grain at render time are not available; use the runtime's per-element smear (one blur grammar per film) and a static SVG grain layer. |
| 9. Blind A/B | `blind_review.py` | Export both versions and let the creator compare them side by side; append the verdict to `taste/verdicts.md` in their words. |
| NOTE.md | written by the agent | `update_project_director_brief` with the idea, beats and what each buys, what is real and what is invented, and the gate results; `write_session_summary` at the end. |

## Layer facts that change how you build

- A layer may load only pinned GSAP 3.15.0, Lottie 5.13.0 and HyperFrames 0.8.26 from a CDN. Everything else is inline.
- Layers block dynamic imports, `innerHTML` assignment, timers, `requestAnimationFrame` and reading a few property names such as `top` and `parent`. `assets/motion-layer.js` already avoids them.
- `getTotalLength()` and `offsetWidth` reads at setup are fine: measure once, then animate from the numbers.
- One editor mutation at a time, with the project id on every call, and re-read the project after each change.
