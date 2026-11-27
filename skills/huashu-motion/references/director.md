# The director

Read this before any new film. The director's job is to turn "make a video for my product" into one specific film that could only be about this product, then hand the animator a plan precise enough to build without inventing anything on the way.

Most AI-made motion fails here, not in the code: it picks the same look for every product (warm off-white, a grotesk, a lime accent, springs on everything), or it animates every feature with equal weight. The [motion library](motion-library.md) gives you a vocabulary; this file is how you choose from it.

## 1. Read the product before asking anything

Look at what the creator gave you and what you can open yourself: the website, store page, README, screenshots, logo, brand colours, earlier launch posts, the data file. Note in one line each:

- **What it is** in the creator's words, and the category (developer tool, consumer app, AI model, hardware).
- **The one thing** this film must leave behind (section 2). If the creator did not say it, propose it.
- **Personality** on five sliders (section 3), with the evidence you read it from (the site's type, its copy, its colours). Brand assets beat adjectives.
- **Real material**, gathered before anything is drawn: `inspect_public_website` for the site, `import_external_media` for files on the creator's machine, captures of the product running. The logo file, the interface, numbers with sources, footage, a voice. Real material is the strongest thing in a film; a faithful rebuild of the product's own interface beats any invented mock-up. Every string, number and default on screen must point to a real screenshot, recording or page; what you cannot point to is not shown. Footage the creator gives (a person demoing, a screen recording) plays as it is, uncut and unmasked; in a 16:9 frame the space beside it carries the supporting elements. Process it only when asked.
- **Research without waiting.** When material takes long to gather (a product's history, old launch videos), keep building the hardest shot from what you have meanwhile. A main line idle for half an hour is the most common waste.
- **Where it plays**: X or LinkedIn feed (autoplay, muted at first, 16:9 or 1:1), TikTok or Reels (9:16, captions), landing-page hero (seamless loop, no sound), keynote (16:9, sound), a README clip.
- **Material**: code-built, footage, screen recording, generated, and in what mix. Material changes a film more than language does.
- **People**: none, hands only, picture in picture, on camera; who speaks. In October 2026 launches, 12 of 15 films over 60 s had a person; 1 of 20 under 20 s did.
- **Sound mode**: muted first (must read without sound) or sound-led. Short interface films are often silent; anything long or with people needs sound.
- **Campaign**: one film, or one of a series that shares a skeleton and swaps the world.

Ask only what you cannot find or infer, in one message, with your defaults written in: "I'll assume X unless you say otherwise." Always settle narration once.

## 2. Find the shape of the message

The message's shape decides the motion language far more than the product category does.

| Shape | Sounds like | Natural languages | Wrong choice |
| --- | --- | --- | --- |
| Claim or feeling | "Introducing X." | kinetic type, generative field, 3D object; brand ident | an interface tour |
| Workflow | "Type this, get that." | cursor demo, continuous morph | abstract shapes with no product |
| Mechanism | "Here is why it works." | mechanism, system diagram, flat world | a fast cut reel |
| Evidence | "Signups doubled." | data story, editorial collage | numbers flashing by unreadably |
| List | "Five new things." | kinetic type chapters, modular grid, card montage, continuous morph | five equal slides |
| Transformation | "Before and after." | continuous morph, data story, split compare | a cut between two stills |
| Story | "A little agent wakes up." | talking head, photo-led, character, flat world, hand-drawn | bullet points |
| Showcase | "Look what it can do." | one deeply made artifact; showreel on one spine; art styles | a feature list |

A film can have two shapes (story opening, workflow middle, claim ending). Give each part its own language only when the switch itself means something; otherwise carry one language through.

## 3. Read the personality

Score each slider from -2 to +2 from evidence. The sliders set the parameters of whatever language you pick.

| Slider | -2 | +2 | Moves |
| --- | --- | --- | --- |
| precise to playful | Linear, Vercel, Stripe | Duolingo, Arc, Figma | easing (hard ease-out to springs with overshoot), shape language (grids to blobs) |
| calm to energetic | Notion, Things | games, sport, music | tempo (80 to 100 BPM up to 125 to 150), shot length, cut density |
| premium to accessible | Apple, Leica | Canva, consumer utilities | negative space, type scale contrast, colour count, how much is on screen |
| technical to human | CLI tools, infrastructure, models | social, health, kids | monospace, code and diagrams versus photos, faces, hand-drawn |
| established to new | banks, enterprise | startups, beta launches | restraint and continuity versus bold and surprising |

Write the result as a sentence: "Precise, calm, premium, technical, new: Linear-like." That sentence is the brief for every later choice.

Three cautions. Precise to playful is about motion and shape; premium to accessible is about density and vocabulary: do not let one drag the other. Calm to energetic sets the music and the cutting, and the cutting matters more. Measured on 21 launch films (October 2026), the cool ones were not fast in tempo (reliable BPMs 77 to 130, median 105) but in cutting: music-driven films cut every 1.8 to 3.5 s on average, 15 to 33 times a minute, and nine in twelve had one burst of 5 to 8 cuts inside five seconds. For a launch film the default is energetic whatever the brand: 100 to 125 BPM, an onset or the first cut within 3 s, a climb, and a burst near 30 to 60 percent of the length. The brand's calm sets the look (palette, type, eases), not the energy. Go calm only when the creator asks or the piece is a loop or an ambient ident. A calm brand's launch built at 96 BPM with one event every few seconds was called boring; rebuilt at 120 BPM with shot-scale contrast, an eighth-note montage and a stop before the drop, the same person scored it 80 against 60.

## 4. Three directions, genuinely different

Unless the creator already chose a style, propose three directions on the same content. Make them differ in **language or material**, not just colour:

- **A, Fit**: the language the message shape and personality point to. The safe, excellent choice.
- **B, Amplify**: the same message pushed: a bolder language or a stronger device (one continuous take instead of scenes, type as the hero instead of the interface, a 3D world instead of flat).
- **Depth, exactly once**: one of the three (A, B or C) is a depth direction and the other two use languages with no 3D as their idea, so the creator always has depth to choose and always has something else. Recommend depth for a premium launch, a physical or iconic object, an interface with layers worth separating; another language when the message is a sentence, a list, a changelog or a mechanism.
- **C, Unexpected**: a different language that still carries the message and suits the brand (an art-history reimagining, a character story, an editorial collage). It must still be about the product. Patterns that worked: the film is itself the product's output (a voice product's film voiced by it); an everyday world that unfolds into the flat interface; a calm hand-drawn loop; one physical object as the ident.

Directions differ on the energy axis too: never three quiet ones. For a launch film all three have a beat, and one of them is the fast, montage-led version.

If the directions share a drawn object (a mascot, an emblem), make that object first, alone, at full size: it must look like artwork, not an icon, because one weak object sinks all three. Living things (animals, plants, people) are not hand-written geometric SVG: cut them from real material or use an art-direction skill such as huashu-art-motion.

For each direction write the lines below and show **one real key frame** at full resolution (a short HyperFrames layer or a native frame, checked with `view_current_frame`), not a description:

```
A, <name>     language: <id> (+ techniques)   look: <type, material, light>
Palette:      <role #hex share, role #hex share> from: <where each colour came from>
Logline:      <the film in one sentence, with the hook and the ending>
Why it fits:  <message shape + personality sentence, so this>
Feel:         <route, BPM, events per bar, what the first 3 s show with the sound off>
Risk:         <what could make it fail>
```

Music is not on the cards: most people cannot judge a music world from a name. Once a direction is chosen, you find the track ([sound and music](sound-and-music.md)) and write it into the treatment.

Take the colours from the product before drawing anything ([colour](colour.md)); the three use the brand's palette differently rather than inventing new ones. People mix by layer ("C's composition and people, B's feeling"), so keep palette, look and feel as separate lines. Never drift from the chosen direction without saying so.

If the creator said "just make it", choose A yourself, say in one line why, and offer B and C as a one-line alternative at hand-over. Name directions by a real reference ("Linear changelog", "Apple bumper", "Kurzgesagt"), never by adjectives like "premium modern".

## 5. Treatment: the beat map and four stills

Write these into the director brief with `update_project_director_brief` before building the full film:

1. **The rhythm sheet, then the beat map.** Choose the route and draw the energy curve first ([rhythm](rhythm.md)): energy per stretch, events per bar, where the burst is (usually 30 to 60 percent), where the hero moment is, and whether a stop earns its place. Then lay the film on bars at the track's tempo. One row per event: `bar.beat | time | what happens | move | sound`. Put the hero moment on the strongest musical point.
2. **Four stills** at the moments that carry the film: the hook frame, the hero moment, the densest frame, the end card. Render them for real with `view_current_frame`. If a still is not good as a poster, the film will not be good either.
3. **The continuity chain.** One line per transition: what object or colour carries the eye from shot N to N+1 (`send button, flood, wall of names, dot, logo`). Any link you cannot name is a cut; keep it only if the cut is the point. A film whose scenes replace each other with nothing carried across reads as slides, however smooth each scene is.

Show these to the creator before building the full film when it is longer than about 15 s or the creator is picky about taste. For a short sting you may build straight through, but still write them.

## 6. Hand-off rules for the animator (you, next)

- Build the hardest shot first, at full resolution, with final type and colours.
- Everything is a function of time; randomness is seeded.
- Keep the language's banned list and the film-wide one below.
- After each build, look at the contact sheet: pops, dead time, motion contrast, loop seam.

## Film-wide taste rules

From 142 high-engagement films of September and October 2026 (motion films on X, product launches, the top of a prompt gallery). They describe what worked, not why. Defaults, not laws: break one when the direction calls for it and say why.

1. **Start moving.** Frame 0 is the poster: the subject is already in it. The hook can be the result first, a prompt being typed, or a question on screen; never a static title card, and never a lone object glowing in on an empty dark frame. Films built around a person open on the person.
2. **Choose the route on purpose.** Continuous (one world, few cuts, an object carried from scene to scene) suits short interface films. Montage (many cuts, each on a beat and readable at once) is the language of hype, hardware and trailers. Most launch films that should feel tech and cool are hybrid: a continuous spine broken open by montage bursts at the turn and the peak. Every cut is motivated: carried or on the beat.
3. **Something lands on the beat, and the energy has a shape.** Most beats carry an event, the hook lands within 3 s, one stretch bursts into cuts on the beat, and the biggest reveal sits on the strongest musical point. A film at the same energy from start to end is boring however good each frame is.
4. **Real product.** The actual interface and words: a clean capture of the real thing, or a code rebuild traced over a capture. Never grey boxes, never an invented interface, never a placeholder where a photo or thumbnail belongs, never a screenshot just panned around. Prompts and code shown on screen count as real material. When depth is chosen, the camera carries the whole film in space, not just its opening ([depth](depth.md)).
5. **Craft shows at rest.** Every hold is a poster: type set properly, one accent, no default fonts.
6. **Sound.** No film goes to the creator without music, chosen before the cuts. Each landing gets a hit. Short interface films and loops must still read with the sound off.
7. **End right.** A launch ends on the mark (a URL pill is optional). A showcase, list or loop ends by returning to its first frame.
8. **Give people something to take.** Saves came from reusable things: a named list, the prompt on screen, labelled specs. Films with only mood got likes and few saves.
9. **Not a template.** If the film would look the same with another product's name in it, it fails. Say how the look differs from the house style ([motion library](motion-library.md)).
