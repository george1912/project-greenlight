# OB Final (NRBS 3410): TikTok study videos for Project Green Light

This is a drop-in data pack for adding short TikTok study videos to the OB section of
https://george1912.github.io/project-greenlight/#/ob-final (repo `george1912/project-greenlight`).

- **115 videos (version 2)**, every one verified live on **2026-11-20**, with **at most 2 per study objective** (ideally one *concept* clip and one *nursing* clip). They cover **71 of the site's 75 study objectives**. 4 are left empty on purpose (see `gaps.md`). The TikTok page for each video was fetched, and the creator, caption, and duration were read from the page's own data. oEmbed was not used, because TikTok's oEmbed responds even for fake IDs.
- 11 exam-topic groups plus 5 weekly groups (`week-1`, `week-3`, `week-5`, `week-6`, `august-4`) for objectives that exist only on week pages. Version 1's mixed-topic `general` row was removed.
- **Changes since v1** (102 videos, 54 objectives): 30 videos were added to fill 17 empty objectives and 3 weak spots (DVT, newborn respiratory distress, newborn hypoglycemia), and 17 were removed to keep each objective at 2 or fewer. Removed rows, each with a reason, are in `removed_videos.csv`. The v1 files are backed up outside this pack.
- The repo was read at commit `da92835` (2026-11-20 17:01 ET). Since then `origin` has moved to `dbb892d` (18:16 ET), with small TikTok preview/player changes in `video-library.js`, `index.html` and `styles.css`. Re-check option 3 below against the current file.

## Files

| File | Purpose |
|---|---|
| `ob_tiktok_videos.csv` | One row per video. UTF-8, every field quoted, 23 columns. |
| `ob_tiktok_videos.json` | Same rows nested by topic, plus each topic's `highlights` (3 study bullets). |
| `ob_tiktok_embeds.html` | Standalone HTML5 page with one copy-pasteable `<section>` per topic, holding the official TikTok `blockquote` embed and a plain link fallback for each video. `embed.js` is included once at the bottom. |
| `removed_videos.csv` | The 17 v1 rows dropped in v2. Same columns plus `removal_reason`. Do **not** add these to the site. |
| `gaps.md` | Objectives with no or weak coverage, non-RN sources, long videos, and content notes. |

## Column schema (CSV, and JSON `videos[]`)

| column | meaning |
|---|---|
| `topic_id` | An **exam topic id** from `obCourse.topics[].id` in `ob-content.js` (for example `normal-postpartum`), **or** a week id from `obCourse.weeks[].id` (`week-1`, `week-3`, `week-5`, `week-6`, `august-4`) for objectives that have no exam topic. |
| `topic_name` | `obCourse.topics[].title` (exact site heading). For week groups, a descriptive label. |
| `topic_type` | `exam_topic` or `week` |
| `route` | The hash route the block belongs on: `#/ob-final/topic/<topicId>` (from `topicURL()` in `ob.js`) or `#/ob-final/<weekId>` (from `weekURL()`). |
| `section_id` | A **study-objective id** from `obStudyObjectives[].id` in `ob-objectives.js` (for example `postpartum-hemorrhage-management`). Every row has one. |
| `section_title` | `obStudyObjectives[].title` (exact site heading) |
| `section_anchor` | A CSS selector for the rendered objective: `ob.js` renders each objective as `<details class="objective ob-study-objective" data-objective="<id>">` on both topic pages and week pages. |
| `source_area` | `final_guide` (main exam topics, weeks 7–10 and Aug 4), `final_guide_cumulative` (cumulative-review topics from Exams I/II), or `earlier_week` (week-only objectives from weeks 1–6). The `august-4` fertility row is `final_guide`. |
| `week_ids` / `week_numbers` | The objective's `weekIds` (`;`-separated), and the plain week numbers (`Aug 4` for `august-4`). |
| `video_type` | `concept` (what the condition or concept is) or `nursing` (assessment, interventions, priorities, patient teaching). v1's `bonus` label is gone: each former bonus row was relabeled `nursing` if the creator is an RN/nursing educator and `concept` otherwise. |
| `creator`, `creator_name` | The TikTok handle (without @) and display name, as shown on the video page |
| `creator_credential` | The credential stated in the creator's bio. It is self-reported and has not been independently checked. |
| `rn_or_nursing_educator` | `yes` for an RN or nursing-education creator, `no` for physicians, IBCLCs, PAs, and others |
| `title` | The cleaned caption: hashtags, mentions, and emoji removed, cut to about 140 characters |
| `url` | The canonical `https://www.tiktok.com/@handle/video/<id>` URL |
| `video_id` | The 19-digit TikTok id |
| `player_iframe_url` | `https://www.tiktok.com/player/v1/<id>`, the same player the site's `video-library.js` already uses |
| `duration_sec` | Duration from the video page |
| `covers` | One line on what the video covers, written from the caption and creator context |
| `notes` | Length or format warnings and fit caveats |
| `verified_live_on` | The date the page was loaded and confirmed live |

## How the ids map to the repo

- `ob-content.js` → `obCourse.topics` (11 exam topics: 7 `main`, 4 `cumulative`), `obCourse.weeks` (weeks 1, 2, 3, 5, 6, 7, 8, 9, 10, and `august-4`), and `obCourse.sections` (the 16-section nursing template; every topic currently has an empty `content: {}` and an empty `resources: []`).
- `ob-objectives.js` → `obStudyObjectives` (75 objectives, each with `weekIds` and `topicIds`; v1's README wrongly said 77). **`section_id` in this pack is always an objective id**, because these are the subsections the site actually renders today. The 16 template sections are empty, so videos were not mapped to them.
- `ob.js` → `topicPage(topic)` renders `topicObjectives(topic)`, and `weekPage(week)` renders `weekObjectives(week)`. Both use `objectiveSection()`, which emits `data-objective="<id>"`.
- Objectives such as `placental-bleeding` belong to week 3 **and** to topic `labor-emergencies`. In this pack the row sits under the topic, and `week_ids` keeps the week link, so the agent can show the same video on both pages.
- Week-group rows (`topic_id` = `week-N` or `august-4`) map to objectives with `topicIds: []`, which only appear on week pages.

## Suggested placement

1. **Per objective (best fit):** inside each `ob-study-objective` `<details>`, after the "Study notes" area (`.answer-area`), add a small "Watch (≈1 min)" strip with that objective's videos. Use the rows where `section_id === objective.id`, ordered concept → nursing (the files are already in this order). This works on topic pages and week pages because both render the same objective markup.
2. **Per topic:** on `#/ob-final/topic/<id>`, add a "Video resources" block (the Med-Surg pages use `VideoLibrary.section(topic)` from `video-library.js`) with the topic's `highlights` and all of its videos.
3. **Reuse the existing player:** the most consistent option is to convert rows into `videoResources`-style objects (`{topic, platform:'TikTok', id, title, creator, duration, description, url, pending:false}`) with `topic` set to the OB `topic_id`, then call `VideoLibrary.section('<ob-topic-id>')`. The OB pages don't call this today, and `videoResources` currently uses numeric Med-Surg topic ids, so check that string ids don't collide. That player builds `https://www.tiktok.com/player/v1/<id>` iframes from validated ids, so no third-party HTML is injected.
4. **Static paste:** each `<section class="ob-tt-topic">` in `ob_tiktok_embeds.html` can be pasted as is. Include `<script async src="https://www.tiktok.com/embed.js"></script>` **once** per page. Because the site is a hash-routed SPA, call `window.tiktokEmbed?.lib?.render?.()` after route changes, or prefer option 3.

Keep the creator credit and the "Creator videos supplement your course materials" disclaimer the site already shows in `video-library.js`.

## Verification and caveats

- 115 of 115 video pages loaded with `statusCode 0` and an `itemStruct` whose id and author match the URL.
- **The embeds were not seen rendering.** TikTok's `embed.js` loaded in a test browser on the build machine, but its follow-on library (`embed_lib_v1.0.15.js`) was blocked or returned 404 from that network, so no iframes appeared. This may be a network/CDN quirk of the build machine and not a problem with the markup. Test the HTML on a normal connection. The `player/v1/<id>` URLs returned HTTP 200.
- Descriptions are summaries of the captions and creator context. Nobody has watched the videos frame by frame, so faculty or student spot-checks are recommended. See `gaps.md`.
