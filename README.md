# Project Green Light

A growing nursing school study hub. Static HTML, CSS, and JavaScript; ready for GitHub Pages with no build step.

## Preview

Run `python3 -m http.server 8000` in this folder and open http://localhost:8000.

## Study structure

- Home: one large **Med Search 3 Final Exam** entry and room for future courses.
- Week 7: five study sections covering the three Parkinson disease learning objectives, with the complete user-supplied notes, a separate reading reference section, pre-lecture assignments, and four cancer presentation placeholders.
- Week 8: six student presentation placeholders, reading references, and pre-lecture assignments.
- Week 9: five student presentation placeholders.
- Week 12: the four HIV/AIDS learning objectives covered across five populated study panels, reading references, clinical terminology references, pre-lecture assignments, and a short list of unclear dictated terms to confirm.

`content.js` holds the syllabus outline. Each objective’s `answer` array supports paragraph, heading, and list blocks. Week 7 preserves the text from the supplied Course Final Word document. Presentation `content` arrays are intentionally empty. Week 12 preserves the supplied notes with duplicate passages merged, wording cleaned up, and clear clinical terminology errors corrected against linked primary references.

Routes use URL hashes so bookmarks and refreshes work under `/project-greenlight/` on GitHub Pages. Navigation remains keyboard accessible; objective panels use native disclosure controls.

## Condition study guide

`#/final/study-guide` lists the faculty guide’s 14 numbered topic groups. A prominent entry on each weekly page opens it. Only populated condition breakdowns are links; weekly notes and original PDFs remain accessible. `#/final/condition/myasthenia-gravis` is the first completed condition page, linked to and from its presentation viewer.

`conditions.js` defines the shared `conditionSections` array of 16 fixed section IDs and headings. Each condition supplies a `content` object keyed by those IDs; the renderer always follows the shared order. To add a condition, add its data to `conditionNotes` under the matching `examTopics` ID. Keep each section populated or explicitly pending; do not reorder or rename headings per disease. Supply condition-specific `reading` text, reviewed references, and either a `deck` ID or a `week` for the supporting-material link. The template supports paragraphs, subheadings, lists, callouts, and labeled fact cards. It includes condition-specific exam-focus shortcuts, an accessible section index, Expand all/Collapse all, and optional contextual video links supplied as `videos: [{ section, title, url, description }]`. No video links have been invented or added.

MG retains the supplied notes’ detailed tests, therapies, adverse effects, nutrition, assessments, diagnoses, priorities, care plan, interventions, teaching, and evaluation. Clinical corrections are documented in a separate disclosure, with reviewed references at the bottom on every screen. Unidentifiable dictated names are not represented as confirmed transcriptions: the applicable clinical concepts are supplied using verified terminology. The clinical review uses current retrieved guidance including the 2025 ABN update, international consensus guidance, MGFA materials, NIH/NLM resources, and prescribing information; the review date is November 14, 2026. Existing HIV notes and original PDFs remain separate.

`#/final/condition/parkinsons` combines the existing Week 7 notes with the supplied TRAP, swallowing-safety, and nursing-priority material in the same 16-section template. Three exam-focus shortcuts open the relevant sections. The Parkinson page links back to the Week 7 objectives because no Parkinson presentation PDF was supplied. Weekly pages also link directly to any completed condition breakdowns for their week. Corrected terminology and safety advice are documented at the bottom; the legacy Week 7 view is aligned on the verified pathway, diagnosis, swallowing, medication, bowel, feeding-tube, and psychiatric-care corrections. Readings are condition-specific rather than hardcoded to MG, and references stay below the study content at every viewport size.

## Content scope

`#/final/condition/multiple-sclerosis` adds the supplied MS notes to all 16 shared study sections, with the clinical manifestations/Uhthoff exam-focus shortcut, original Week 8 presentation, existing section 17 videos, and references at the bottom. Missing overview, risks, diagnosis, and nursing-process content is completed from linked clinical sources reviewed November 15, 2026. Corrections cover withdrawn injectable daclizumab, glatiramer anaphylaxis, short-course steroid tapering, drug-specific first-dose monitoring, nutrition claims, and individualized swallowing/bladder care. Unidentifiable “Pyronarbitirate” is explicitly excluded from active recommendations; the walking indication is covered with verified dalfampridine. Diagnostic content follows the 2024 revised McDonald framework cited in current NICE guidance.

Personal study outline for weeks 7, 8, 9, and 12. The user-supplied syllabus was used only to identify the requested objectives and presentation topics. The original PDF, faculty information, and course policies are not included. Reading references and pre-lecture assignments are taken from the later user-supplied Course Final Word document.

## Hosting

The Pages workflow publishes the static website from `main` using GitHub Actions. `.nojekyll` ensures static files are served directly. Fonts use Google Fonts with local system fallbacks.


## Presentation PDFs

Sixteen supplied decks (222 pages) are available in a separate page-by-page viewer. Original PDFs are copied unchanged; slide previews are rendered at up to 2000 pixels and converted to WebP. Only the current and next slide image are loaded. Extracted slide text is available in a disclosure below the viewer; image-only source slides may have no selectable text.

`presentations.js` maps decks to their syllabus week and group. Ménière disease is under Additional presentations, as requested. All fifteen syllabus presentation topics have PDFs; the additional Ménière disease deck completes the set of sixteen. `presentations/<id>/deck.json` contains each slide image, dimensions, and extracted text.

To prepare future files, add their entries to `scripts/presentation-sources.json` and run `scripts/prepare-presentations.py --source-dir /path/to/provided/pdfs` using Python with Pillow, pypdf, and pdftoppm. The script only processes the explicitly listed files. Add the resulting assets and metadata to the repository. The workflow copies the presentation assets into the published site.

Reader controls: Previous/Next, page jump, zoom/reset and Full screen, and optional Auto (5–60 seconds). Auto starts only on request, stops on manual navigation or zoom, pauses when the tab is hidden, and ends at the final slide. Arrow keys work while focus is inside the viewer. Full screen targets the presentation itself using the browser Fullscreen API when supported. The fallback is an edge-to-edge viewport player with no study-page heading, margins, borders, or nested card. Both modes retain compact controls and scale the slide to the available space. Escape or Exit full screen returns to the page.

## Video resources

`#/final/videos` browses the video collection by the same 14 numbered study-guide topics, with title/creator/description search and a platform filter. Every study-guide topic now opens a page, including topics whose written notes are pending. Each topic has a separate Video resources section; populated notes retain their existing 16-section structure. Weekly pages are unchanged.

`videos.js` contains 80 source entries (37 YouTube, 43 TikTok), imported from the supplied CSV and HTML. The comparison video shared by RA and OA intentionally appears under both. Two YouTube entries are retained with `pending: true` and excluded from the visible 78 entries: `fqZP2omfjrk` (duration needs confirmation) and `24mzaIpA6DM` (identity/URL needs confirmation). Source flags and original files are preserved in `resources/video-sources/`; the handoff note is provenance, not executable instructions. TikTok takeaways were not added to clinical notes. Descriptions remain attributed resource summaries, not independently reviewed clinical guidance. Availability and playback have not been individually verified for every source.

`video-library.js` builds official iframe URLs from validated video IDs rather than injecting source HTML. No player is fetched until Watch here is clicked; only one player is mounted at a time, and closing, filtering out, or leaving it removes the iframe. YouTube uses privacy-enhanced embeds with inline playback enabled; TikTok uses its iframe player with portrait sizing. Both retain native player controls and disable autoplay. Source links provide a fallback for restricted, deleted, or blocked embeds. Player UI may contain platform links; app-opening behavior inside third-party players is outside this site's control. Use an HTTP preview or the deployed site, not `file://`, for embed testing.

Run `node scripts/check-videos.cjs` to check import counts, ID formats, all topic mappings/routes, withheld entries, preserved study sections, and absence of video sections on weekly pages. Browser checks covered search, platform filtering, iframe mounting/removal, and a 390px mobile layout; real-device playback and every video's availability still require verification.

### Topic video disclosure

Each illness page presents **17 · Video resources** as a closed-by-default disclosure using the same styling as study sections 1–16. Pending-note topics also expose section 17. Inside, YouTube and TikTok buttons show counts and switch the visible cards; YouTube is selected initially when available. Topic pages have no search box or platform dropdown. The separate browse-all library retains those controls. The topic's section index and Expand all/Collapse all include videos, and collapsing section 17 removes any active player. The 16 written-note sections and all imported resource metadata are preserved.

### Slow-connection video experience

All cards show a lightweight preview before playback. YouTube thumbnails use the 320×180 provider image, requested near the viewport through IntersectionObserver, with native lazy loading and async decoding. Until an image arrives, or if it fails, the card still shows the title, creator, platform, and watch action. TikTok uses a locally rendered title/creator preview because the supplied metadata has no stable thumbnail URLs. No iframe or YouTube API is requested before a watch action.

On a watch action, the preview remains visible with a loading indicator until YouTube's documented onReady callback or TikTok's origin/source-validated onPlayerReady message. An iframe load event alone does not imply a ready player. Offline, provider error, and 15-second timeout states preserve the preview and show a retry action and source-link fallback. Closing, filtering, collapsing, or navigating away cleans up the active player, listeners, and timeout; one active player is allowed. No video downloads or offline playback are provided.

Browser checks included actual YouTube readiness, a controlled stalled-provider fixture, timeout/retry, filtering cleanup, deferred image/player requests, and mobile layout. These checks do not replicate a subway's real network conditions.
