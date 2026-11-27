# One-page answers, PR walkthroughs and Architecture Diagnosis

## One-page answer (Archify explainer as video)

Archify's explainer turns an answer into one page: the conclusion first, then the reasons, the scope and the evidence in structured panels, with native diagrams and charts where they help (see `upstream/archify/references/explainer-authoring.md`). Use it when the creator asks for an answer to share, a diagnosis, a comparison, a test report or a plan.

As video:
1. **Conclusion card** (3 to 5 s): one or two lines that answer the question, with the key number or recommendation. The narrator says it first.
2. **Panels** (2 to 4, 5 to 10 s each): each panel is one reason. A panel holds one native diagram from `diagram-types.md`, a small table (at most 5 rows) or a bar chart with real values. Panels arrive one at a time on a board; the earlier ones shrink to the left as a column of thumbnails so the viewer keeps the structure.
3. **Scope line**: what was checked and what was not, in one sentence, on the last panel.
4. **Close** on the conclusion again, smaller, with the source line.

Make a page only when there is a conclusion with structure behind it. A one-line answer stays a line of text.

## PR walkthrough

Read `upstream/archify/references/pr-review.md` and `upstream/archify-pr/references/pr-workflow.md` for the method. In Subclip:
1. `fetch_public_github_pull_request` with the PR URL. Use the three-dot diff (what the branch changed since it left the base).
2. Draw one merged view: the base architecture or flow plus the PR's changes, marked added (green), modified (amber) and removed (rose, struck through). Keep unchanged parts neutral and dim.
3. Scenes: the area before the change (5 s), the change landing with marks (8 to 12 s, a token on the new path), the changed lines in the code panel with the highlight on the key lines (5 to 10 s), and what a reviewer should check (one panel).
4. Never mark something as changed that the diff does not change. Name the PR number and head commit in the source line.

## Architecture Diagnosis

Archify's Code Analysis builds a source-backed workbench of coupling, cycles, layer violations, large files and complexity hotspots. Subclip does not run that analysis tool. In video form:
1. Read the repository yourself: imports between top-level modules, cycles you can trace in the import lines, the largest files and the functions with deep nesting. Write every finding with its file and line.
2. Draw the architecture view of the modules, then mark findings: a rose ring on a cycle (trace the token around it once), an amber badge with the line count on a hotspot, a dashed rose edge for an import that crosses a layer boundary.
3. End on one or two scoped observations and what to refactor first. Say that static reading does not prove runtime failure.

If the creator ran Archify's own analysis on their machine, they can share the exported image or numbers; import with `import_external_media` and cite it.
