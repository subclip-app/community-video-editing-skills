# Diagram types for video

The router and the layout defaults come from Archify (`upstream/archify/ORIGINAL-SKILL.md`, `upstream/archify/references/authoring-defaults.md`). The schemas in `upstream/archify/schemas/` define what each type can say; read the one you use before inventing a field. The examples in `upstream/archify/examples/` teach shape, not facts.

## Router

| Type | Use for | How it builds in a scene |
| --- | --- | --- |
| `architecture` | components, services, boundaries, infrastructure; what something is made of | main path left to right in the top row, owned parts and stores directly below their owner, boundaries as soft labeled frames; enter the main path, then trace it |
| `workflow` | processes, approval gates, tool calls, runbooks, CI/CD, plans | steps in reading order with decisions as accent nodes; branches fan out to the right, one token per branch with `parallel` |
| `sequence` | API call chains, request lifecycles, async traces, returns | participants as header cards with dashed lifelines; each message draws and its token runs on the word; returns are dashed and colored; notes sit on the lifeline that does the work |
| `dataflow` | pipelines, ETL, lineage, consumers | 2 to 5 stage columns; every flow labeled with what moves; primary data in the emphasis color, async batch dashed |
| `lifecycle` | states and transitions, retries, terminal states | the happy path in one row, failures below with a real transition back; the token walks the main path, then one failure |
| `erd` | tables, keys, cardinality | table cards with every column and key role; domains as tinted bands; `relation` only, no tokens |
| `tree` | single-parent containment: repo or module trees, feature breakdowns | grows rightward for a repository, downward for a shallow breakdown; branches reveal level by level |
| `class` | types, members, inheritance, composition | at most three columns; relations draw without tokens |
| `timeline` | when things happened: incidents, releases | a proportional time axis with lanes per source; events drop in on their time |
| `waterfall` | where the time went in one request or run | spans on a shared axis, nesting by indent; bars grow to their measured length |

When the choice is unclear, pick by the question: "what is it made of" (architecture), "in what order" (sequence or workflow), "where does data go" (dataflow), "where does it stand" (lifecycle), "what is stored" (ERD), "what contains what" (tree), "when" (timeline), "how long" (waterfall).

For an everyday subject (a holiday plan, a household budget, an order), keep the same types and rename legend entries for the reader. Ask for missing personal facts.

## Layout in a 1920 by 1080 frame

- Title at x 96, y 72 (54 px, bold). Diagram area x 96 to about 1300, y 190 to 860. Side panel or code panel on the right (x 1090 to 1824). Bottom 170 px stay free for captions.
- Cards: 220 to 400 px wide, 94 to 104 px tall, 2.5 px semantic border, a solid 8 px color bar on the left, label 29 px, mono sublabel 19 px with the file path.
- Edge labels: mono 19 px on a white pill over the line. Budget the gap between side-by-side cards at about 11.5 px per character plus 30 px.
- Fan-out: a side with k edges needs at least 32 + 14 x (k - 1) px.
- Put a branch or store directly below or above its owner so the edge is one straight segment. Put returns in an empty corridor. Do not let a route pass behind another card.
- Keep labels readable at 720p: nothing under 16 px.

## Semantic palette on white

| Kind | Stroke | Fill | Default meaning |
| --- | --- | --- | --- |
| frontend | #0891b2 | #ecfeff | user-facing client |
| backend | #059669 | #ecfdf5 | services, core code |
| database | #7c3aed | #f5f3ff | stores and persisted state |
| cloud | #d97706 | #fffbeb | platform and runtime |
| security | #e11d48 | #fff1f2 | policy and guarded paths |
| messagebus | #ea580c | #fff7ed | queues and transport |
| external | #64748b | #f8fafc | outside the system |

Rename the legend entry when the subject gives the color a more exact meaning (for Koa: green "Koa core file", amber "Node built-in", orange "Dependency", slate "Outside Koa", violet "Example middleware"). Change marks for a PR: added #059669, modified #d97706, removed #e11d48 with a strike line. The trace token and focus glow use Subclip blue #153592 with a cyan #26c9d5 ring.
