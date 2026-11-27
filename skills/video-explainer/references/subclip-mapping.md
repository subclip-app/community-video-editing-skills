# What each upstream piece became

The source runs a local pipeline (Python scripts, a headless browser, local speech and alignment models, the HyperFrames command line renderer and a browser review page). This edition keeps the craft and moves every step into Subclip's editor tools.

| Upstream | Subclip |
|---|---|
| `setup.sh` and `setup.sh --voice` (install tools and models) | Nothing to install. Subclip ships the HyperFrames runtime, local speech and local transcription. |
| `script.md` | The plan in the director brief: `update_project_director_brief` (see `script.md` in this folder). |
| `media.py image`, `media.py clip` (Wikimedia, URLs, video sites) | `search_public_media` then `import_public_asset_to_timeline` with attribution; `fetch_linked_media` for a link the creator gave; `import_external_media` for the creator's own files. |
| `capture.py` (page screenshot) | `inspect_public_website` returns page captures, copy, colors and logos. |
| `narrate.py` with local Kokoro voice | `generate_local_speech` per scene, `import_generated_audio_to_timeline`. |
| `narrate.py` with Gemini TTS | `get_voice_samples`, `set_approved_voice`, `generate_speech`, `import_speech_to_timeline` (credits). |
| Parakeet word alignment, `work/transcript.md` | `transcribe_project` (local) writes word-level captions; read them with `read_project_section` lane `captions`. |
| `stage.cue("s03", "keyword", 1.2)` | The word's `startMs / 1000` minus the layer's start time. |
| `build.py` with `ExplainerStage`, `StoryBrush`, `Studio3D` | Standalone HyperFrames layers: `validate_runtime_layer_source`, `add_runtime_layer`, `edit_layer_source` (see `modes.md`). |
| `blender_export.py` | Procedural geometry first; for sculpted meshes see the `blender-to-subclip` community skill. |
| `generate.py music` (Lyria) | `generate_music` with Lyria 3 Pro (credits), or a CC0 loop from `search_public_audio`. |
| `sfx.py` synthesized cues | Library sounds from `search_public_audio` placed at word times (see `sound.md`). |
| Caption burn-in from `style.json` | Dynamic captions: `apply_dynamic_caption_preset` with the default preset, `update_caption_style` for position. |
| `render.py --preview` contact sheet | `get_timeline_contact_sheet`. |
| `render.py --draft`, `render.py` | `export_video` when the creator asks, then `get_export_status`. |
| `qa.py` ten checks | `review-checklist.md` with outline, contact sheet and layer validation. |
| `review.py` browser review page | The creator reviews in the Subclip editor; single frames with `view_current_frame`. |
| `~/.config/video-explainer/style.json` | Palettes in `script.md`; save a favorite look in the director brief. |

Not carried over: the bundled Inter font (it has its own SIL Open Font License; layers use a system UI stack unless a font is verified in the runtime), the engine source files, the test suite and the README demo images.
