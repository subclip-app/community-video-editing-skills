# Motion library

Four layers, chosen in this order. Keeping them separate is what lets one product get a film that fits it instead of the house style every agent produces.

| Layer | Question |
| --- | --- |
| Format | What kind of film? (length, frame, structure, ending) |
| Language | How do things move, and what does that say? |
| Techniques | Which moves, each with a meaning |
| Look and sound | Palette, type, material, music, hits ([colour](colour.md), [sound and music](sound-and-music.md)) |

The [director](director.md) picks them.

## Formats

Times are starting points measured from top films of September and October 2026; retime to the content and the music. At 120 BPM a beat (B) is 0.5 s.

| Format | Length | Skeleton | Languages | Checks |
| --- | --- | --- | --- | --- |
| Launch sting | 6 to 15 s | hook in motion (0 to 4 B), the product doing the one thing (4 to 16 B), hero moment on the drop, payoff line, mark and name | continuous morph, cursor demo, kinetic type, 3D object, showreel | readable muted; the name on screen at least 1.5 s; one key phrase, not five |
| Launch film | 30 to 90 s | cold open on the result or the problem, 2 to 4 moments each showing a different capability, often a spectacle after the demos, proof, availability line and mark held 2 to 4 s | cursor demo as the spine, kinetic type or data story for claims | each capability gets its own visual moment; climax at 70 to 85 percent, not at the end |
| Feature demo | 10 to 45 s | context, action, response, result held long enough to read | cursor demo, continuous morph | action, response and result visible for every step |
| Explainer | 30 to 180 s | question, intuition (one picture), mechanism in steps, payoff, recap image | mechanism, system diagram, flat world, hand-drawn, editorial collage | every sentence has a visible change |
| Data story | 15 to 60 s | question, baseline, the change, the turning point, takeaway over the chart, source line | data story, kinetic type, modular grid | bars start at zero; numbers carry their source |
| Kinetic manifesto | 8 to 30 s | one phrase per beat or two, a build of 3 or 4 statements, a break, the payoff, mark | kinetic type, modular grid | every word readable at 1x; the payoff has the most space |
| Logo reveal or end card | 3 to 6 s | elements gather, the mark resolves on a hit, wordmark, hold at least 1 s | continuous morph, kinetic type, 3D object | the mark is the real logo file |
| Showreel | 10 to 20 s | about 8 sections of two beats each, one spine (colour, a recurring shape, one track) | showreel, art styles | the spine is visible in every section |
| Social hook or ad | 6 to 20 s, 9:16 | hook in the first 0.5 s, problem or desire, product moment, call to action with the name on screen at least 2 s | kinetic type, cursor demo, photo-led | captions if there is speech; keep clear of the top and bottom interface zones |
| Resource list loop | 8 to 25 s | title with the count, items one by one with a counter, the full wall, back to the first frame | kinetic type, modular grid, editorial collage | every item readable when highlighted; the names are real |
| Loop | 4 to 12 s | a cycle whose last frame equals the first, including velocities | continuous morph, generative field, modular grid | check the seam frame by frame |
| Step promo | 15 to 30 s | problem line, mark, 3 to 6 step screens of 2 to 3 s, completion, logo and URL | card montage | every card does something while on screen |
| Before and after | 6 to 20 s | before state, the transformation device (wipe, morph, flood), after state held, the label of what changed | continuous morph, data story | before and after framed identically |

Nearly half of the October 2026 launch films told a meta-story: the film itself was made by the product (a prompt is typed and the film is the result). That is the shape of this skill's reference film.

## Languages

| Language | Says | Best for | In Subclip |
| --- | --- | --- | --- |
| cursor demo | It works; here is how | features, workflows, SaaS, AI apps | captures or recordings as native media, a rebuilt interface piece in a HyperFrames layer for the moving part; `add_cursor_zooms` on real recordings |
| continuous morph | One crafted system | consumer apps, interface features, stings, loops | one HyperFrames scene with a shared element carried through states |
| card montage | Step by step, finished and real | small-team product promos | HyperFrames cards, one per step, a progress system across cuts |
| kinetic type | A claim with conviction | slogans, lists, hooks, endings | HyperFrames type with mask reveals; `add_text_overlay` for static labels |
| modular grid | Precise, engineered | developer tools, infrastructure, specs | HyperFrames grid with snapped cells |
| data story | Here is the evidence | metrics, reports, milestones | HyperFrames charts or the map and chart templates |
| mechanism | Why it works | AI, algorithms, science | HyperFrames diagrams that transform step by step |
| system diagram | How parts connect | infrastructure, agents, pipelines | HyperFrames nodes and drawn edges |
| flat world | Wonder, scale | science, health, education | HyperFrames illustration |
| editorial collage | It is real; look at this line | news, case studies | real screenshots as native media plus cut-out framing |
| hand-drawn | Human, thinking aloud | teaching, friendly brands, annotations | SVG strokes drawn on in HyperFrames |
| character | Emotion, personality | stories, agents as actors | real or licensed art animated in HyperFrames; see huashu-art-motion |
| 3D object | Tangible, premium | hardware, logos, devices, the interface in space | native 3D layers or CSS 3D ([depth](depth.md)) |
| generative field | Intelligence, mood | model launches, loops | seeded particles or fields in HyperFrames |
| liquid glass | Premium consumer | iOS apps, media apps | layered translucent panels (keep filters off text) |
| photo-led | The real world | travel, food, fashion | native photos and footage with framing moves |
| showreel | Range and mastery | capability showcases, "made with X" | short native clips cut on beats over one spine |
| retro digital | Culture, edge | developer culture, games, CLI tools | a seasoning on kinetic type or showreel |
| art styles | Culture, delight | the unexpected direction | huashu-art-motion |
| talking head | A real person behind it | founders, creators | native footage with name plates, number cards and chapter cards |

## Choosing: message shape by personality

Each cell lists the fit language first, then good amplify or unexpected options.

| | Precise, technical | Calm, premium | Playful, energetic | Human, warm |
| --- | --- | --- | --- | --- |
| Claim | kinetic type, modular grid, system diagram ident | 3D object, generative field, photo-led | kinetic type slams, showreel, retro digital | hand-drawn, kinetic type, character |
| Workflow | cursor demo, system diagram, continuous morph | cursor demo, continuous morph, card montage | continuous morph, cursor demo, card montage | cursor demo, talking head, hand-drawn notes |
| Mechanism | mechanism, system diagram, modular grid | mechanism, 3D object, flat world | flat world, character, art styles | hand-drawn, flat world, character |
| Evidence | data story, modular grid, kinetic type | data story, editorial collage, 3D object | bold data story, kinetic type | data story, editorial collage, talking head |
| List | modular grid, kinetic type, continuous morph | card montage, continuous morph, kinetic type | continuous morph, card montage, 3D object | card montage, hand-drawn, character |
| Story | system diagram, talking head, character | photo-led, talking head, flat world | character, art styles, photo-led | talking head, photo-led, character |
| Showcase | one deep artifact, showreel, generative field | one deep artifact, 3D object, restrained showreel | showreel, art styles, retro digital | art styles, character, the product demoing itself |

Then set the parameters from the personality sentence: tempo, easing family, palette energy, type contrast, amount on screen. Notes from the evidence: every launch story was told by real people, none by animated characters; showcase launches were one deeply made artifact, not reels; a calm premium claim moved an object or a field, not the words.

## Techniques: each move says something

- **Ease-out (expo, power3)** says *arrived with intent*: the default for anything entering, 0.5 to 0.9 s. Most travel happens in the first third, so the hit goes where it visually lands.
- **Spring** says *physical, alive*: interface that reacts to a click. Breaks when everything bounces.
- **Ease-in-out** says *a deliberate move from A to B*: camera moves, never entrances.
- **Linear** says *mechanical, time passing*: tickers, counters, scrolling, holds that drift.
- **Anticipation**: a 2 to 6 percent move against the direction 0.1 to 0.15 s before the action.
- **Stagger** says *these are a set*: 30 to 60 ms between interface items, 15 to 25 ms between letters, from the point of cause.
- **Hold** says *this matters; read it*: about 0.25 s per short word plus 0.5 s. A still frame with nothing to read is dead time.
- **On the beat** says *this was composed, not generated*. Fast sections use fewer beats per event, not a faster tempo.
- **Mask reveal** (text rising from a line) says *precise, editorial*. **Draw on** says *being traced or connected*. **Type on** says *typed live*: characters by time, text on fixed lines, caret visible. **Wipe** says *replace, reveal underneath*. **Blur-in** is overused as a default; keep it for a meaning about focus, and never as a filter on text in Subclip.
- **Exit faster than entrance**: 0.25 to 0.4 s with `power2.in`.
- **Continuity devices instead of cuts**: a shared element (the button becomes the page), a flood out of an object, a push through a layer, a match on shape or position. Plan one per transition in the continuity chain.
- **Camera**: a push to a detail, a pull-back that reveals scale, a whip on a beat, a slow drift during a hold. Every move ends on something.
- **Start from a dot** is close to a cliché in prompt galleries: use the product's own mark (a cursor, a pixel, a send button) instead.

## The house style

Many top AI-made films of late 2026 look alike: warm off-white or near-black ground, an orange-red or lime accent, a giant grotesk with mono labels, one-second modules, a dot that opens the film. The pattern is the problem, not the names in it ([colour](colour.md), section 4). After choosing a language, say in one line how this film's look differs from that pattern, or that the brand really looks like that. The look comes from the product; the library supplies motion.

## Mixing languages

A film may switch language when the switch means something: open in character (the problem, emotionally), move to cursor demo (the product), close in kinetic type (the claim). Carry a spine across the switch (palette, a shape, the cursor). Three languages in 30 s is the most that still reads as one film.
