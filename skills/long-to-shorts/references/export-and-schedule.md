# Export and schedule a batch

## Export

1. After the creator approves the clips, call `get_export_configuration`. Use MP4 (H.264) for social posting.
2. Call `list_render_queue`. If an export of the same unchanged project is already queued or finished, reuse it. Do not start duplicates.
3. For each clip, `export_video` with explicit start and end equal to that clip's OUTPUT range (not source time), and a distinct filename such as `short-01-why-the-number-is-wrong.mp4`. Run them one after another.
4. The export is a snapshot. If you edit after export, export that clip again.
5. The in-app agent resumes when a render finishes. External clients poll `get_export_status`.
6. Record each file path, range and result in the director brief with `update_project_director_brief`.

Do not clone the project per clip, delete other clips to export one, or export the whole reel when separate files were asked for.

## Schedule (only on request)

Posting and scheduling need the creator's exact confirmation. Read-only questions never authorize posting.

1. `list_social_accounts`. Match the account the creator named; ask if more than one fits.
2. Read the platform skill: `subclip-youtube`, `subclip-tiktok` (beta) or `subclip-social-media`.
3. Draft for each clip: title, description or caption, hashtags (a few that fit, not a wall), privacy, and date and time with timezone. Space clips out: one or two a day beats all at once.
4. Show the full batch in one table. Ask the creator to confirm file, account, text and time. For YouTube, ask which scheduling they want: Subclip scheduling (the app uploads at the time) or YouTube native scheduling (uploaded private now, public at the time).
5. After confirmation, publish each exported file with `publish_video_file_to_social` (or `youtube_upload_file` for YouTube), or a saved timeline range with `publish_video_segment_to_social` / `youtube_publish_segment`. Use a stable, unique `operationId` per clip and account. Do one at a time.
6. Treat "accepted" as submitted, not posted. Check status with `get_social_publication_status` (or the file status tool) and report the real result. Keep operation IDs in the director brief so an interrupted batch can resume without duplicates.
7. TikTok is beta: the creator chooses privacy, interactions and disclosures. Do not guess them.

Never reuse one approval for clips, accounts or text that were not in the reviewed batch.
