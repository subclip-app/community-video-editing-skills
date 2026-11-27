# Research and sources

The film is only as good as its evidence: the primary document, the reporting with outlet and date, footage of
the subject the creator may use, and at most one real voice. Fill the sources table while you research, not
after.

## Where to look, in order

1. **The post or story the creator hands you.** Read the post, the replies and quote posts for the primary
   document, the outlets' own posts and headline cards, and news clips. If a site blocks automated reading, ask
   the creator to paste the text or a screenshot rather than working around the block.
2. **The outlets' own pages and posts**, plus the local press where it happened. For paywalled articles use the
   outlet's own post or headline card and the parts quoted by other outlets. Never invent an article's body.
   Recreate a clipping only with the outlet's exact published sentence, labelled outlet and date.
3. **The subject's own words:** letters, filings, statements, posts. The real screenshot beats a recreation.
4. **Public records and archives:** court filings, national archives, government history pages. These are often
   the safest primary sources for older stories.
5. **Footage of the subject:** their own talks and interviews, or news footage (FLAG). Bring a clip in with
   `fetch_linked_media` or `import_external_media` only when the creator has the right to use it.
6. **Logos:** the official mark from the company's press kit or a public archive, split into mark and wordmark
   for the ink wipe.

Look at everything collected before choosing: `get_media_context` with `includeContactSheet: true` for clips,
and `describe_media` to save what you saw. Never describe media from its file name.

## What to keep out

- AI-made images, even when they are the most shared picture of the story (look for tags, watermarks and
  community notes).
- Glamour, sexualised or paparazzi photos; photos of private family members beyond one captioned public event.
- Deepfakes, face swaps and meme edits of real people.
- Anything you cannot trace to who published it first.

## The sources table

Keep it in the project notes (`update_project_director_brief`) and show it at Gate 1.

**Claims:** one row per narrated or on-screen claim.

| # | claim as said in the script | source (outlet or archive, date, link) | second source | wording on screen |
|---|---|---|---|---|

**Media:** one row per file.

| file | what it shows | from (link, account, date) | licence or use | status |
|---|---|---|---|---|

Status is OK (own, public domain, licensed, official press kit), FLAG (news footage, press photo, someone else's
post: the creator decides) or OUT (AI-made, untraceable, glamour, a private person's photo).

- A serious allegation needs the outlet named on screen and, where possible, a second outlet reporting the same.
- Dates are publication dates, written the way they go on screen (`NOV 6, 2026`).
- Paraphrase in narration is fine; on-screen quotes are exact.
