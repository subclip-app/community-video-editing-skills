# Explainer modes

An opener sells a feeling. An explainer guides one argument. Keep a coherent world while each phrase changes what the viewer understands. The number of sentences does not set the number of scenes.

## Set the brief

Resolve only missing choices: style, ratio, duration and sound. A single compact question can cover them. Recommend from the subject. Follow any supplied or delegated choices. Without a main video or explicit ratio, use 16:9; a vertical social request overrides it. Keep captions off unless requested.

For narrated films, import or generate narration before locking visual timings. If the creator plans to record later, supply a readable script, mark the edit as a provisional silent draft and retime the same items when audio arrives. Do not send them to an outside voice service as a required step. A script should spell numbers as spoken words and separate meaningful beats, not force a stage per paragraph.

## Six styles

| Mode | World and craft | Good subjects |
| --- | --- | --- |
| Cartoon collage | Cream paper, flat cutouts, warm marks, a characterful display face and handwriting accents. Camera explores evidence as it gathers. | Light science, children, approachable education |
| Visual journalism | Real licensed photographs, restrained dark or light surface, source labels, yellow emphasis and red warnings. Real evidence carries claims. | News, policy, geopolitics |
| White catalog | Clean white grid, product/photo cutouts, script connectors, bold subject type and precise annotations. | Product or company profiles |
| Vintage sketchbook | Sepia paper, engraving-style illustration, classical serif hierarchy, rust annotations and gold emphasis. | History and inventions |
| Continuous action | One recognizable subject in an active vector world, numbers inside the world, varied explanatory instruments. | Transport, sports, speed and processes |
| Cartoon stage | Bright flat frame-sized stages, jointed characters and active machinery/nature. Narration explains, action supplies meaning, labels belong to objects. | Character-led science and social processes |

Choose the mode's motion system before borrowing its surface. The first four can use a traversable collage. Continuous action moves the world around a hero. Cartoon stage uses local environments and cuts between them. Read cartoon-stages.md for that rig.

## Argument and evidence

A possible arc is a surprising image, explicit question, visual context, meaningful number, comparison, chronology, mechanism, effect on the viewer and an ending that revisits the opening. It is a menu, not a mandatory eight-scene script.

For a collage beat, build three to five useful elements progressively: subject, evidence, scale, date/label and an annotation. Each new phrase adds or changes something. Keep prior evidence visible while the relationship matters. One symbol and one sentence per beat often fail to show the mechanism.

Useful constructions:

- A photograph pulls back to become a magazine cover or case document.
- A stamp lands on a short typed document. Keep its text to three short lines.
- A repetition grid shows scale, with staggered copies instead of an isolated number.
- A clock hand moves toward a deadline.
- Cipher characters change deterministically and resolve into readable words.
- A chart path draws, then its area and two or three important points appear.
- A dashed annotation reveals through a clip rather than a moving dash offset.

Keep one camera within the beat. A new piece of evidence may invite a small reframing, not a new cut. For text-led collage, finish the pull-back before the headline arrives. Label the current subject clearly without creating kicker / headline / body / badge stacks.

## Entities and factual sources

Build an entity list from the script: people, companies, places, products and events. Give each named entity a truthful visual at the relevant moment. Prefer creator-owned or rights-cleared real assets. Public websites and official photos are not automatically licensed for reuse. Check the individual license and required attribution, including on archives and public collections.

Keep source title, URL, license, author and claim mapping in the project brief. Add readable credit where required. Do not label generic factory footage as a specific factory. Do not use generated real-person portraits as documentary evidence. If the exact visual is unavailable, explain that and use an agreed alternative with a clear illustration label.

Verify factual numbers before displaying them. If verification fails, omit the number or use an honest qualitative statement. Do not turn a fictional demo statistic into a measured product claim.

For new geography, route through Subclip's internal subclip-map-explainer skill and its supported templates. Do not invent map imagery endpoints, map-provider credentials or terrain capabilities. A non-geographic process diagram can stay in the current HyperFrames segment.

## Image prompts

Use one shared style block and approved reference assets across related outputs. Select the model and settings through the live Subclip catalog, not the historical provider names in upstream.

Cartoon cutout:

> Flat educational illustration of [subject performing action], simple readable silhouette, consistent warm palette [colors], [agreed outline style], plain contrasting background or transparency if supported, room for [annotation], no text, no border, same character and costume as the approved reference.

Catalog prop:

> Studio product photograph of [generic prop], isolated on a plain contrasting background, consistent soft lighting, clear silhouette, [camera angle], no logos, no text. Leave generous margins for a close-up.

Vintage sketch:

> Nineteenth-century copperplate-style illustration of [object or mechanism], fine sepia cross-hatching, consistent etching style, isolated on plain white, no text, no border.

Use a genuine archival image for a real named person. If an anonymous period figure helps explain the process, label it as an illustration and avoid implying it is an authenticated portrait.

Import the outputs as project media. Background removal uses Subclip's internal background-removal workflow if available and approved; inspect the actual result for a missing subject or damaged edges. Do not treat white-background multiply as equivalent to transparent pixels. A clean vector alternative is often better for a small educational prop.

## Living assets and camera

Differentiate phases so cutouts do not move in unison. Starting ranges for a playful cutout: vertical movement around 22 to 28 px over 1.3 to 1.8 seconds, a rotation around 1.5 degrees, and a slow growth toward 1.06 scale. Large ships and cityscapes instead need a meaningful directional move. Do not apply these values mechanically to serious archival material.

A collage camera can start close on A, glide to B, then return home as the relationship becomes clear. Put annotations after framing settles. Overscan paper generously. Keep label overlays outside the camera when they must stay fixed. Use one scale owner rather than stacking breathing, zoom and transition tweens on the same transform.

In vertical layouts, reserve social interface space from the actual composition. The upstream 0.78 safe scale is a starting example, not a universal platform specification. Make type larger before applying a safe-area scale, or it becomes unreadable. Never copy a reference's subtitle strip unless captions were requested.

## Continuous action

Keep the hero recognizable from start to finish through silhouette, palette and frame position. The world moves with two or three parallax depths; comparisons occur in that world. A large number can stand behind the subject and be occluded as it passes. Change an odometer's digits within one stable box instead of fading whole claims.

Derive distance from the authored motion profile and time. Background position is a fixed function of that distance, with a slower far layer. Use finite GSAP spans or analytic functions, not infinite loops or frame-by-frame integration. At short layer boundaries, initialize the next segment from the same distance and pose. Slow the world during reading rather than stopping the action abruptly.

Vary the instrument with the fact. Avoid three consecutive beats with the same view:

| Fact | View or instrument |
| --- | --- |
| Opening and return | Side profile as a visual anchor |
| Speed | Cab view with a moving gauge and digital number |
| Capacity | Interior, repeated seats or units lighting in sequence |
| Scale or proximity | Head-on approach |
| Terrain or mechanism | Profile/cutaway diagram with the important section highlighted |
| Comparison | Multiple actors in a shared space and one common clock |
| Geographic route | Subclip map workflow with verified places and clearly illustrative routing |

A new view must continue the motion and identity. Do not replace the hero with a differently colored or posed character each time. Keep explicit placement groups separate from animated transforms so a change of view does not shift pivots.

## Narration, captions and review

Use imported audio length as the master clock. Read existing media context/transcripts before transcription. For beat boundaries, use transcript timing or inspect the audio in Subclip; do not assume an automatic silence-to-stage tool exists. Store source item IDs and actual beat windows in the director brief.

Retiming means updating the existing segment timing and its local source duration, then adjusting internal actions at natural phrase boundaries. Keep transition lengths readable rather than stretching every tween equally. Recheck adjoining frames and the final intentional hold.

When captions are requested, use native exact-item transcription and styling. A cartoon stage can keep labels-only styling by default, but a creator's caption request overrides that default. Maintain enough empty space for subjects, labels and captions together.

Inspect frames for entity accuracy, source labels, legibility, camera arrival, overlaps, continuous hero identity and the ending. Tell the creator whether listening, playback or exported quality still needs review.
