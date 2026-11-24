# Overlap with other community skills

This skill is about one subject: turning a script into a stick-figure video. It adds a director's proposal with checks, fifteen locked looks (each with its own prompt file and reference clip) and the voice and sound rules. When the job is really another one, hand over to the skill below by slug instead of repeating it here.

| Existing skill | What it covers | What this skill does not repeat | When to switch |
| --- | --- | --- | --- |
| `cartoon-episodes` | A show bible, cast and location sheets, one-sentence scenes into consistent AI cartoon clips with dialogue | Long-running series management, show bible files, dialogue scenes with speaking characters | The creator wants a recurring show with several named speaking characters over many episodes. Use its show bible, then come back for a stickman look if wanted |
| `cartoon-animation` | A single hand-painted cartoon shot in a motion layer: boiling ink, acting emotions, brush wipes | Painting and acting engine for one mascot | The creator wants one lovingly animated painted shot or a mascot that acts. Our B1 to B6 looks only use simple local moves on stills |
| `svg-character-animation` | A rigged SVG puppet in a GSAP timeline with blinks, gaze and mouth shapes | Rigging, pivots, lip flap | The creator wants a talking puppet with a mouth that moves. The stickman looks keep faces simple and let the voice carry the line |
| `character-animation-qa` | A review method for a character animation with sampled frames and a pass, revise or fail verdict | Frame-by-frame animation review method | Run it on a finished stickman film when a motion looks wrong. Our checks are shorter and look-specific |
| `ai-style-atlas` | 86 named visual styles for restyling an explainer | A general style catalog | The creator wants a non-stickman look. This skill is only for stick-figure casts |
| `pixelfx` | 244 pixel-art effect recipes for canvas layers | Effect library | Use it for pixel fire, magic or weather inside the B7 pixel theater look |
| `vox-explainer`, `vox-director` | A collage explainer in a documentary news style | Narration-led collage method | The topic is a serious explainer in a collage look rather than a stick-figure film |
| `documentary-case-file` | Chapters, locked stills, scene clips and narrator for a documentary | Long documentary structure | The film is a multi-chapter documentary, not a short stickman story |
| `commercial-pipeline` | 5 to 8 locked reference images and a 30 second AI commercial | Product ads | A product ad. Use a stickman look only if the creator asks for it |
| `wan-animation-styles` | Photo to style frame to animation in five looks including rubber hose | Wan-based style frames from photos | The input is a photo to restyle. Our rubber hose look (A7) is a fresh stickman scene from a script |
| `hyperframes-motion-layers`, `remotion-motion-layers` | How to build editable motion layers | Layer authoring rules | Read them before writing a B-look scene layer |
| `trendjack-animator` | Short animated ads on trending audio | Ad formats | A short ad on a trend. Not a stickman story |

## What is new here

- The director's proposal with the five-stage story engine, the storyboard table and a checks list, approved by the creator before any spend (`directors-proposal.md`).
- Fifteen looks, each with an exact style lock, a prompt recipe, a Subclip route, a credit note and a 10 second reference clip (`style-index.md`, `looks/`).
- Voice rules: one voice per film, gender matched to the cast, local voice first (`voice-and-sound.md`).
- Two routes under one workflow: video-model clips (A) and still-plus-motion-layer (B), so the creator can choose price against motion.

## Not included from the upstream

Its Node and Python helper scripts, web app, installers, setup guides, paid-service adapters, sponsor links, the audio and music library with its licence archive, the 1000-plus bundled sound files, the large asset packs for the B looks, the localized READMEs and the test suite. Their useful rules are rewritten in the look files; nothing here asks the agent to run an installer or a script.
