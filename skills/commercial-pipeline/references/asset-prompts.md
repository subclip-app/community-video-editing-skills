# Stage 1: asset image prompts

Reference images carry identity. The video prompt carries behavior. Whatever a reference gets wrong has to be fought in every segment afterwards, so the cheapest place to fix a film is here.

## House format

Plain text, one block per prompt, section labels in capitals on their own line with prose underneath. No markdown, bullets or bold inside the prompt. Order never varies; not every asset needs every section.

```
<one declarative opening line: what this image is>
BACKGROUND LOCK
SUBJECT
MATERIAL or PACKAGING LOCK   (only if the asset has a paired state)
SCALE LOCK                   (only if relative size is the point)
LIGHTING
COMPOSITION
STYLE
NEGATIVE
ASPECT RATIO
```

## The four rules that matter

1. Flat light on anything that travels. Products and characters appear under every lighting state in the film. A dramatic key baked into the reference is fought in every segment, or carried into a scene lit the opposite way. Use an anti-studio lighting block in your own words: this is not a studio photoshoot, no studio lights, softboxes, flash, hard directional key or dramatic highlights; plain ordinary soft ambient light wrapping the subject evenly from all sides with no visible direction, no hotspots, no deep shadows; the only shadow is a faint soft contact shadow under the subject. The location is the exception: it does not move through the film, so it establishes the lighting design and should be lit dramatically and deliberately.
2. Redundancy beats precision on backgrounds. Models leak environment into product shots, so state a white background four ways in one paragraph: white behind the subject, white surface beneath it, white to every edge of the frame, and what it is not (no room, table, walls, props, textures, gradients or color), like a catalog cutout photo.
3. Paired assets share paragraphs verbatim. If a before and after must read as the same object transformed, the paragraph describing the shared material or packaging is copied word for word into both prompts. Two separately written descriptions of "plain kraft cardboard" make two different cardboards and the reveal looks like a swap. Say which paragraph is the shared one when you deliver.
4. Scale is a video prompt problem. Generate a machine, vehicle or prop at its real size, because forcing it to look enormous distorts it. The size override goes in the reference line in Stage 2 (for example, "in this film the machine is colossal, the size of a two-story building, each drum over 4 meters tall, dwarfing every person, yet built from real steel with weight, rivets, hydraulics and wear").

## By asset class

- Product: pure white, catalog cutout, flat light, no branding unless the brand asset is the point. If the product sits in or on something (packaging, vessel, stand), that container gets its own lock paragraph because it is what drifts between before and after. If the relationship between two objects is the idea (oversized item in an undersized container), write a scale lock in physical terms (what reaches where, what overflows, what cannot close), not adjectives like "huge" or "tiny". Aspect 1:1 for pairs that will cut together.
- Character: a three-view sheet (full body front, full body back, head and shoulders close-up) on plain light grey, flat ambient light, identical clothing and proportions in all views. Keep the identity anchor list short, four or five items the image can actually carry (glasses shape, hair, one distinctive garment, gloves, a held prop); the same anchors are repeated verbatim in the Stage 2 reference line. Add a performance lock for tone ("deadpan, never smiling, no exaggerated reactions"). Sheets often come back with a missing or malformed front head; check and flag it, the close-up usually carries the face.
- Location: the one asset lit dramatically; it sets palette and light direction for everything else. Generate it empty of the action: the central playing area clear end to end, because every crate or cable in the path is one more object to simulate. Do not generate background people; add them in the Stage 2 location map as behavior. Aspect matches the film (16:9 or 2.39:1).
- Machine, vehicle or hero prop: three-quarter view, whole object in frame, nothing cropped, flat light, real material wear (chipped paint, dust in seams, oxidized metal) because clean CAD-looking machinery reads as CGI. Widest spread between image models, so if budget allows run the prompt through three or four models and lock one. No branding, decals or numbers (text is what image models mangle).
- Logo: never generated. Use the client's file (`import_external_media` with `addToTimeline: false`). A regenerated logo is wrong in a way everyone at the client notices.

## Delivering a Stage 1 artifact

Name the model, say batch 4, then give three specific things to judge on, not "which looks best". Good checks are binary and test what the prompt was fighting for: is the box clearly undersized without the product looking crushed, is the board clean and unbranded, is the white truly white to every edge. Close with a one-line statement of assumptions, and name the shared paragraph if the asset is half of a pair.

## Subclip notes

- Attach the real product photo as a reference to every asset that shows the product.
- Keep all assets in one lighting family (except the location, see rule 1).
- Never ask for letters or numbers on assets. Review each asset at full size before accepting it.
