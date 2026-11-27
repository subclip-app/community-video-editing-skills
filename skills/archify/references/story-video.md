# Story video

Archify's story mode walks a reader through one or more native diagrams. In Subclip the same story becomes a narrated film: one HyperFrames layer per scene, the narration as native audio, the captions as native captions.

## The story brief

Write it before any layer. It is the Archify v2 brief (see `upstream/archify/references/story-authoring.md`):

```json
{
  "version": 2,
  "title": "How Koa handles a request",
  "intro": "Establish the whole path before following its handoffs.",
  "outro": "Compose once, then create a context, run, respond for every request.",
  "scenes": [{
    "title": "What Koa is made of",
    "points": [{
      "anchor": "app",
      "via": "e3",
      "title": "Application",
      "text": "listen() starts an http.Server with this.callback(). use(fn) pushes fn onto this.middleware.",
      "caption": "application.js owns the server and the middleware list."
    }]
  }]
}
```

Each area has one job:
- **Top (`scene.title`)**: the chapter topic or central judgment. It stays while the points unfold, and it is already on screen in the first frame of the scene.
- **Side panel (`point.title`, `point.text`)**: responsibilities, conditions, branches or scope, with the source path under the title.
- **Voice and captions (`point.caption`)**: the narrator's sentence for this beat. It narrates the action and links it to the next one. It is not repeated as on-screen text.

Keep the brief in the project with `update_project_director_brief`, with the repository, commit and source paths.

## Beat operations

These come from Archify's story choreography. Each step happens at a time `at` (seconds inside the scene), placed on the word that names it.

| Operation | What it does on screen | Default timing |
| --- | --- | --- |
| `enter` | nodes rise 18 px and settle, opacity 0 to 1 | 0.5 s each, 0.3 s stagger |
| `connect` | edges draw from source to target, then the arrowhead and label appear | 0.55 s, 0.35 s stagger, starts 0.5 s after an enter in the same step |
| `focus` | every other node and edge dims to about 22 percent; `null` restores all | 0.45 s |
| `trace` | one token travels the listed edges in order; the edge lights up in Subclip blue behind it | about 620 px per second, at least 0.45 s per edge |
| `parallel` | one token per edge, all at once (branches) | same speed |
| `relation` | no token; edges just draw (default for ERD, class, tree, timeline, waterfall) | as connect |
| `panel` | the side panel swaps to this point's title, path and text | 0.25 s out, 0.45 s in |
| `code` | the code panel shows a real excerpt (at most 20 lines) and the highlight bar moves to the cited line | 0.4 s |
| `transition` | shared components morph from the previous view into the next | 1.4 s |
| `metrics` | a value changes from before to after on a node (only measured values) | 0.6 s |

Rules carried over from Archify:
- Trace tokens never run on static relation diagrams (ERD, class, tree) unless a real transfer happens there, and never on removed elements.
- Code excerpts are checked against the file: real path, real line numbers, at most 20 lines. Pin them to the commit in the brief.
- A gap between steps is allowed: the diagram holds its pose while the voice finishes.

## Scene loop

1. Voice the scene (`generate_local_speech`), import it, note its duration. Scene length = 0.5 s lead + voice + 0.4 to 1 s hold.
2. Get word times from `transcribe_project` and place each step on its word.
3. Fill the scene kit (`references/scene-kit.md`) with nodes, edges, excerpts and steps.
4. `validate_runtime_layer_source`, then `add_runtime_layer` (kind `hyperframes`, full frame, the scene start and duration).
5. `view_frame` at the scene start, at each focus change and at the end. Fix in place with `update_runtime_layer`.
6. Move to the next scene. Make the cut on motion: the next scene starts with its title and first node already arriving.

## Pacing

- 2 to 4 scenes for a 30 to 60 s film; one diagram type per scene, and a different type in the next scene when it answers a different question (structure, then order of calls, then decisions).
- One beat every 1.5 to 3 s. One lit thing per beat.
- End on the conclusion: a small loop, a one-line answer or the main path lit end to end, with the source line under it. No logo wall and no long end card.
