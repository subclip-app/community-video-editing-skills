# 10 Motion effects (16 effects)

**Status:** new. **Use it for:** one premium moving detail built from scratch in the creator's brand and placed as an editable layer: interfaces (a button becomes a player), data (bars become a line), type (letters stretch on a baseline) and systems (flat layers pull apart in depth). Every effect is one 8 second loop whose frames are a function of time, so it exports exactly.

## Step 1: ask for four things

1. The effect, by name or number. If the creator describes a job ("show our pricing", "reveal the launch name"), suggest the two effects from the table that fit best and let them pick.
2. The real content: words, labels and numbers (real figures, or say they are samples).
3. The size: 1080x1080, 1080x1350, 1080x1920 or 1920x1080.
4. Loop or hold.

## The 16 effects

| # | Effect | Group | Use it when | Recipe file | Clip |
| --- | --- | --- | --- | --- | --- |
| fx-01 | Button to player | Interfaces | adding a "watch the demo" moment to a landing page or launch email | [effects/fx-01-button-to-player.md](effects/fx-01-button-to-player.md) | `examples/fx-01-button-to-player.mp4` |
| fx-02 | Search to results | Interfaces | showing what people find in a help centre or content library | [effects/fx-02-search-to-results.md](effects/fx-02-search-to-results.md) | `examples/fx-02-search-to-results.mp4` |
| fx-03 | Card to workspace | Interfaces | announcing a feature where one small card becomes the whole editor | [effects/fx-03-card-to-workspace.md](effects/fx-03-card-to-workspace.md) | `examples/fx-03-card-to-workspace.mp4` |
| fx-04 | Tabs to panels | Interfaces | comparing plans, packages or channels without a wall of text | [effects/fx-04-tabs-to-panels.md](effects/fx-04-tabs-to-panels.md) | `examples/fx-04-tabs-to-panels.mp4` |
| fx-05 | Chart morph | Data and lists | dropping a weekly result into a report or results post | [effects/fx-05-chart-morph.md](effects/fx-05-chart-morph.md) | `examples/fx-05-chart-morph.mp4` |
| fx-06 | Dashboard zoom | Data and lists | pulling the one KPI that matters out of a monthly dashboard | [effects/fx-06-dashboard-zoom.md](effects/fx-06-dashboard-zoom.md) | `examples/fx-06-dashboard-zoom.mp4` |
| fx-07 | Spring stack | Data and lists | showing three offers, case studies or testimonials in turn | [effects/fx-07-spring-stack.md](effects/fx-07-spring-stack.md) | `examples/fx-07-spring-stack.mp4` |
| fx-08 | Magnetic dock | Data and lists | showing the tools you use or a product's integrations | [effects/fx-08-magnetic-dock.md](effects/fx-08-magnetic-dock.md) | `examples/fx-08-magnetic-dock.mp4` |
| fx-09 | Masked type | Type | revealing a campaign name, issue number or launch headline | [effects/fx-09-masked-type.md](effects/fx-09-masked-type.md) | `examples/fx-09-masked-type.mp4` |
| fx-10 | Elastic type | Type | opening an event, webinar or podcast with a moving title card | [effects/fx-10-elastic-type.md](effects/fx-10-elastic-type.md) | `examples/fx-10-elastic-type.mp4` |
| fx-11 | Text to layout | Type | turning a blog headline into a carousel cover or article teaser | [effects/fx-11-text-to-layout.md](effects/fx-11-text-to-layout.md) | `examples/fx-11-text-to-layout.mp4` |
| fx-12 | Image reveal | Type | teasing a product drop (swap in your own photo afterwards) | [effects/fx-12-image-reveal.md](effects/fx-12-image-reveal.md) | `examples/fx-12-image-reveal.mp4` |
| fx-13 | Perspective shift | Systems | explaining the layers of a service, brand system or tech stack | [effects/fx-13-perspective-shift.md](effects/fx-13-perspective-shift.md) | `examples/fx-13-perspective-shift.mp4` |
| fx-14 | Glass focus | Systems | making people read the one line of a report or pricing table that matters | [effects/fx-14-glass-focus.md](effects/fx-14-glass-focus.md) | `examples/fx-14-glass-focus.mp4` |
| fx-15 | Flowing paths | Systems | showing one piece of content feeding several channels, or a simple funnel | [effects/fx-15-flowing-paths.md](effects/fx-15-flowing-paths.md) | `examples/fx-15-flowing-paths.mp4` |
| fx-16 | Particle logo | Systems | closing a video, reel or launch post on your mark (use the creator's own logo file for the target shape) | [effects/fx-16-particle-logo.md](effects/fx-16-particle-logo.md) | `examples/fx-16-particle-logo.mp4` |

## Build rules (all 16)

1. One clock: every frame from time alone, with a seek that draws the exact frame for any moment, in any order. No wall-clock timers, no free-running CSS animation, no unseeded randomness.
2. One 8 second loop: move 0.0 to 2.2, hold to 6.6, return by 8.0. Frame 0 and frame 8 are the same frame. In hold mode play the move once and stay on the finished frame from 6.6 s.
3. The return eases every element back to exactly where it began. Nothing snaps home.
4. Real content, never lorem. Sample numbers carry a visible "example" label on every frame.
5. Self-contained: fonts embedded, images inlined, no network requests.
6. Scale the effect up so it fills the frame with margins from the brand notes. Never leave a small tile in a big empty canvas.
7. Map every color role (ground, surface, ink, muted, accent, second accent) to the brand notes (recipe 01).

## Check before showing

Capture frames at 0, 1, 2.2, 4.4, 6.6, 7.9 and 8 s and look at each. Loop: frame 0 equals frame 8. Move: frames 0, 1 and 2.2 differ. Fit: no text past its box. Still: the point reads from the single frame at 4.4. Brand: every color and font is from the notes. Fix what fails, capture again, then show the frames at 2.2 and 4.4.

## Learned the hard way

- "Premium" means one object changing shape. A fade from one picture to another looks cheap every time.
- The hold is where people look: 4.4 of the 8 seconds. Keep something small alive in it (a progress bar, a cursor, a second wave of light).
- A faint ghost of the start state sells the change.
- Stagger by a beat, not all at once. Everything moving together reads as a slide transition.
- An embedded font does not load until something uses it, so frame 0 can paint in a fallback. Load every font before the first frame.
- Scale the whole drawing instead of using fixed coordinates, or the effect ends up in one corner at a new size.
- A blank layer is usually a name declared twice in the script. Declare each name once and read the validation error.
- 8 seconds is too slow for a reel cut: use the active move (about 1.4 s) and hold mode under narration.
- Pick one unit for time (seconds) and keep it.

## Subclip tools

`read_subclip_skill` (`subclip-hyperframes-layer`), `validate_runtime_layer_source`, `add_runtime_layer` (kind `hyperframes`), `read_layer_source` and `edit_layer_source` for one-thing-at-a-time fixes, `seek_timeline`, `view_current_frame`, `export_video`.

## Credit cost

The code route costs no credits.

## Reference clips

`examples/10-motion-effects.mp4` is a montage of all 16. Each effect has its own clip, `examples/fx-NN-name.mp4`, listed in the table.

## Source

Upstream files: `skills/motion-effects/SKILL.md` and `skills/motion-effects/references/effects.md` in charlie947/motion-graphics-skills (https://github.com/charlie947/motion-graphics-skills/blob/main/skills/motion-effects/SKILL.md), MIT. Rewritten in our own words for Subclip.
