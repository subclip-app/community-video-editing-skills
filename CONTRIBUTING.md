# Submit your video editing skill

Help creators make better videos with [Subclip](https://www.subclip.app). Submit a pull request with a complete skill folder, or [open a submission issue](https://github.com/subclip-app/community-video-editing-skills/issues/new?template=submit-skill.yml) to propose one.

## Choose a path

1. **Write a skill for Subclip.** Describe when an agent should use it, the creative workflow, the native tools it needs, and how to verify the finished video. Set `upstream: null` and `adaptedBySubclip: false`.
2. **Convert an existing skill.** Give your agent [AGENTS.md](AGENTS.md) and the source folder. Keep its creative methods, replace outside generation and assembly with Subclip tools, retain its original LICENSE, and credit the author. Set `adaptedBySubclip: true` for Subclip adaptations.

Use plain, short English. Do not use an em dash or middle dot. Avoid secrets, hidden instructions, requests for API keys, and commands that download or execute scripts.

## Folder layout

```text
skills/<slug>/
  SKILL.md
  README.md
  LICENSE
  skill.yml
  cover.svg
  references/       optional
  assets/           optional
  preview.mp4       optional
```

Use a unique kebab-case folder name matching `slug`. `SKILL.md` needs YAML frontmatter with `name` and `description`. A pack can include more `SKILL.md` files in subfolders; the builder derives their names. Keep the root `SKILL.md` as the entry point. All files must be regular files inside the folder; no symlinks or external path references.

## Listing metadata

Create `skill.yml`:

```yaml
slug: vox-explainer
name: Vox explainer
summary: One topic in, a finished Vox-style explainer.
category: explainers
tags: [vox, documentary, collage]
cover: cover.svg
adaptedBySubclip: true
license: MIT
upstream: { repo: CK42BB/vox-explainer-skill, author: Kingsley, license: MIT }
addedAt: 2026-11-23
```

| Field | Rule |
| --- | --- |
| `slug` | Required, unique kebab-case, equal to the folder name. |
| `name` | Required display name, at most 100 characters. |
| `summary` | Required, at most 160 characters. Say what the skill makes. |
| `category` | One of `explainers`, `slides`, `motion`, `3d`, `pixel-art`, `animation`, `captions`, `audio`, `promos`, `templates`, `workflow`. |
| `tags` | Required list of unique kebab-case strings. |
| `cover` | Required relative image path inside the folder. |
| `preview` | Optional relative path to a silent MP4 loop. |
| `adaptedBySubclip` | Required boolean. True for Subclip adaptations; false for an author's skill written for Subclip. |
| `license` | Required license identifier from the allowed list below. |
| `upstream` | Required: `null` for original Subclip skills, otherwise `repo`, `author`, `license` and optional `url` matching the GitHub repo. For a non-GitHub source with no stated license, omit `repo` and give `url` (https), `author`, `license: Not stated` and an optional `note`. Then the skill's own `license` is also `Not stated`. |
| `addedAt` | Required real date in `YYYY-MM-DD` form. Keep it stable after adding the skill. |
| `allowlist` | Optional list of scanner exceptions, each with `code`, optional exact relative `file`, and a specific `reason`. Reviewers check every exception. |

The builder derives `path`, the pack's `skills` names, full cover/preview paths and upstream URL. Do not put those derived fields in `skill.yml`. The small YAML reader supports block maps and lists, single-line strings, booleans, null, numbers and flow lists/maps. It rejects tags, anchors, aliases, multiline scalars and duplicate keys. Quote strings containing YAML punctuation.

For example, a legitimate provider mention in a model reference can be documented as:

```yaml
allowlist:
  - code: external-provider
    reason: Model names describe Subclip's live catalog, not direct provider API calls.
```

An optional `file` matches an exact finding path, not a glob. Aggregate findings such as `external-provider` have no file. Exceptions stay visible in scan output. High-risk findings fail CI unless explicitly allowlisted with a reason; an exception is still subject to Subclip review.

## Keeping adapted skills in sync

Adapted skills record the original's commit and the date we last synced in `skill.yml`: `upstream: { repo, author, license, commit: "<40-character SHA>", syncedAt: "YYYY-MM-DD" }`. `npm run upstream:check` lists originals that changed since then, and a weekly workflow opens or updates an "Original skills have updates" issue. After porting the changes into the Subclip version, update `commit` and `syncedAt`.

## Cover and preview

Provide a 16:9 cover that shows what the skill makes. Use WebP, PNG, JPG/JPEG or static self-contained SVG, strictly under 300 KB (300,000 bytes). A 1600 by 900 image works well. Use a still from a test render or an upstream demo when its license permits. If none exists, make a clear designed card naming the skill and saying "Adapted for Subclip" for an adaptation. Keep text readable at thumbnail size.

An optional preview must be a silent MP4 video, strictly under 2 MB (2,000,000 bytes), no longer than 25 seconds. Make it loop cleanly; a short carousel of the skill's best results works well. Media paths must stay inside the skill folder.

## License and credit

Only submit sources whose licenses allow both changes and commercial use. Keep the original LICENSE and notices in the folder. The root MIT license does not replace a skill's license. Preserve any source, attribution, share-alike and redistribution obligations, including AGPL obligations.

Allowed identifiers: `MIT`, `Apache-2.0`, `BSD-2-Clause`, `BSD-3-Clause`, `ISC`, `AGPL-3.0`, `GPL-3.0`, `MPL-2.0`, `CC-BY-4.0`, `CC0-1.0`, `Unlicense`. The builder checks identifiers and the presence of LICENSE; reviewers verify the actual license text and provenance.

If there is no license, or it is non-commercial or no-derivatives, do not copy the skill. One exception: a creator's non-GitHub guides with no stated license may be rewritten entirely in your own words (no copied text, images or logos) when the creator is credited prominently and the maintainers have agreed to list them. Use `upstream: { url, author, license: Not stated, note }`, write a `LICENSE` file that says the source states no license and that the adaptation needs the creator's confirmation, and have the maintainers confirm permission with the creator. Propose its original link in [INSTALL_YOURSELF.md](INSTALL_YOURSELF.md) instead.

Start an adapted README with:

```text
Adapted for Subclip from <upstream link> by <author>, <license>
```

Repeat that credit at the end of `SKILL.md`. Link to the original project, even if adapting a fork.

## PR checklist

- [ ] The license allows changes and commercial use; original LICENSE and notices are retained.
- [ ] README starts with upstream credit and SKILL.md ends with it, or the skill is original.
- [ ] SKILL.md includes name and description, clear triggers, native workflow and verification.
- [ ] All named tools exist in the current Subclip catalog; no outside API keys or required executable scripts remain.
- [ ] The workflow reads media context first, serializes edits and quotes credits before paid work.
- [ ] The creator's own Codex/Grok generators are offered first when available.
- [ ] skill.yml is complete; slug, category, tags, license and date are correct.
- [ ] Cover is 16:9 and under 300 KB; optional silent preview is under 2 MB and at most 25 seconds.
- [ ] Any scanner allowlist entry has a narrow, concrete reason.
- [ ] No em dash, middle dot, secrets or hidden instructions remain.
- [ ] A Subclip test used local speech and at most three animated scenes; describe the result and any limits. Do not claim a test you did not run.
- [ ] `npm run build`, `npm run check`, `npm run scan` and `npm test` pass; generated registry.json and README table are included.

## Review and publication

CI checks the schema, folder files, media limits, allowed license identifiers and generated output. It scans with the desktop rules for secrets, hidden or obfuscated instructions, outside AI providers and API key requests, remote code and executable scripts. Warnings are reported; high risk fails the scan. Subclip then reviews the workflow, licensing, credit, exceptions and video quality. CI passing is not an endorsement or a replacement for review.

After merge, the skill is listed on [subclip.app](https://www.subclip.app/agent-skills/community) and in **Skills > Community** on the next site build. The desktop app still scans the files at installation and asks the creator to confirm.

## Examples from the original author

For an adapted skill whose license allows reusing its media, copy a few of the original author's example images or videos into `examples/` and list them in `skill.yml`:

```yaml
examples:
  - file: examples/flame-loop.jpg
    caption: A flame loop made with the original skill
examplesCredit: "Examples by pixelfx authors, MIT, from github.com/patch-gg/pixelfx"
```

Use 1 to 24 files in `examples/`: images (JPG, PNG, WebP or GIF) up to 600 KB each and MP4 videos up to 8 MB. Keep the original license's media terms: leave out files the license excludes (for example character art) and anything with no clear right to reuse. Skills without a stated license do not copy media: link to the creator instead. The skill's page on subclip.app shows these files under "Examples by the original author" with the credit line.

If the examples are test outputs you made by following the skill (not the original author's media), add `examplesKind: test`; the page then titles them "Made with this skill" instead of "Examples by the original author".
