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

`#/final/study-guide` lists the faculty guide’s 14 numbered topic groups. A prominent entry on each weekly page opens it. All 14 condition breakdowns are populated and linked; weekly notes and original PDFs remain accessible. Each condition follows the same 16-section order and Goal / Actions / Evaluate care-plan format. The [coverage review](docs/final-exam-coverage.md) maps every faculty-highlighted point to its study section.

`conditions.js` defines the shared `conditionSections` array of 16 fixed section IDs and headings. Each condition supplies a `content` object keyed by those IDs; the renderer always follows the shared order. To add a condition, add its data to `conditionNotes` under the matching `examTopics` ID. Keep each section populated or explicitly pending; do not reorder or rename headings per disease. Supply condition-specific `reading` text, reviewed references, and either a `deck` ID or a `week` for the supporting-material link. The template supports paragraphs, subheadings, lists, callouts, and labeled fact cards. It includes condition-specific exam-focus shortcuts, an accessible section index, Expand all/Collapse all, and optional contextual video links supplied as `videos: [{ section, title, url, description }]`. No video links have been invented or added.

MG retains the supplied notes’ detailed tests, therapies, adverse effects, nutrition, assessments, diagnoses, priorities, care plan, interventions, teaching, and evaluation. Clinical corrections are documented in a separate disclosure, with reviewed references at the bottom on every screen. Unidentifiable dictated names are not represented as confirmed transcriptions: the applicable clinical concepts are supplied using verified terminology. The clinical review uses current retrieved guidance including the 2025 ABN update, international consensus guidance, MGFA materials, NIH/NLM resources, and prescribing information; the original review date is November 14, 2026, with targeted complement-inhibitor safety guidance added November 15. Existing HIV notes and original PDFs remain separate.

`#/final/condition/parkinsons` combines the existing Week 7 notes with the supplied TRAP, swallowing-safety, and nursing-priority material in the same 16-section template. Three exam-focus shortcuts open the relevant sections. The Parkinson page links back to the Week 7 objectives because no Parkinson presentation PDF was supplied. Weekly pages also link directly to any completed condition breakdowns for their week. Corrected terminology and safety advice are documented at the bottom; the legacy Week 7 view is aligned on the verified pathway, diagnosis, swallowing, medication, bowel, feeding-tube, and psychiatric-care corrections. Readings are condition-specific rather than hardcoded to MG, and references stay below the study content at every viewport size.

## Content scope

`#/final/condition/hiv` completes Topic 14 in the same 16-section template using the supplied Week 12 notes and new exam-focus material. Focus shortcuts cover OIs, PEP/PrEP, medicines and partner education; all 14 condition guides are now populated. Current NIH/CDC references reviewed November 15, 2026 and correction notes remain at the bottom. Corrections include the May 2026 PCP prophylaxis framework, toxoplasma/MAC eligibility, systemic esophageal candidiasis treatment, cryptococcal ART timing, current nPEP and six-monthly lenacapavir, and U = U/reproductive counseling. Week 12 objectives and the eight existing HIV videos remain available; no HIV presentation PDF was supplied. Unverified dictated organism fragments and an unsupported HAND percentage are excluded from active recommendations.

`#/final/condition/prostate-cancer` adds the supplied notes in all 16 sections, with risk-factor and metastasis shortcuts, the Week 7 presentation, and existing topic videos. Missing nursing-process content is completed. Sources reviewed November 15, 2026 include ACS’s November 12 screening update; corrections distinguish source-specific screening, Grade Groups/MRI-biopsy pathways, surveillance/watchful waiting, modern systemic treatment, TURP/radical surgery, catheter/CBI safety, and treatment-specific radiation precautions. References and correction notes remain at the bottom; presentation/video metadata are unchanged.

`#/final/condition/breast-gynecologic-cancers` is a breast-focused Topic 12 breakdown in the same 16 sections, with brief gynecologic comparisons and the requested cervical-screening/endometrial-biopsy points. Five focus buttons cover breast risk reduction, SLNB care, chemotherapy/fever, cervical screening, and endometrial biopsy. The Week 7 breast presentation and six existing umbrella-topic videos are retained. Sources reviewed November 15, 2026 support corrections to biomarkers/genetics, source-specific screening (including ACS self-collection and 2026 ACOG bleeding evaluation), individualized node/arm care, drug safety, fever definitions, nutrition, and completed nursing-process content. References and correction notes remain at the bottom.

`#/final/condition/meniere-disease` adds the supplied Ménière’s notes in all 16 sections, with symptoms and HCTZ shortcuts, original presentation, and existing videos. The topic retains no assigned week and links to Additional presentations rather than a fabricated week. Corrections cover definite/probable criteria, hydrops/epidemiology, selected tests, acute/chronic rehabilitation, Meniett, diuretic evidence/potassium safety, sedatives/reversal, and individualized nutrition. Sources reviewed November 15, 2026 and correction notes remain at the bottom; missing nursing-process content is completed.

The final-exam study-guide entry is the primary green card above weekly navigation, with a larger title and clear open action. The study-guide page title is enlarged. The homepage exam card opens `#/final`, restoring the large study-guide entry above the weekly material and podcast navigation. Weekly objectives and presentation routes remain available.

`#/final/condition/gout` adds the supplied notes in all 16 shared sections, with clinical-signs and diet shortcuts, the original Week 9 presentation, and existing topic videos. Missing nursing-process sections are completed. Verified corrections distinguish flare treatment from maintenance ULT, clarify urate/crystal diagnostic limits and septic-joint urgency, add treat-to-target/prophylaxis and medicine-safety guidance, and qualify dietary/recovery claims. Clinical references reviewed November 15, 2026 and correction notes remain at the bottom; presentation and video metadata are unchanged.

`#/final/condition/osteoporosis` organizes the supplied notes in all 16 sections, with prevention and diagnostic-testing shortcuts, the original Week 9 presentation, and five existing videos. Missing nursing-process content is completed. Verified corrections cover T-score/Z-score references, screening versus fracture evaluation, FRAX/DXA use, formulation-specific bisphosphonate dosing, denosumab transition/advanced-CKD safety, teriparatide duration, nutrition targets, and tailored exercise. Clinical sources reviewed November 15, 2026 and correction notes remain at the bottom. Presentation/video metadata are unchanged.

`#/final/condition/osteoarthritis` adds the supplied OA notes in all 16 sections, with symptoms and nursing-care-plan shortcuts, the original Week 9 presentation, and five existing videos. Conservative and arthroplasty care plans are retained and missing sections completed. Sources reviewed November 15, 2026 include the September 2026 ACR summary; corrections address whole-joint inflammation, hot-joint warnings, imaging, analgesic/injection choices, perioperative blood/VTE/medicine safety, and approach-specific hip precautions/recovery. References remain at the bottom, and incomplete author-year citations are not expanded into invented bibliographies. Presentation/video metadata are unchanged.

`#/final/condition/rheumatoid-arthritis` adds the supplied RA notes in all 16 sections, with exam shortcuts for clinical findings, DMARDs, and labs. Pharmacology and nursing-process gaps are completed. Clinical corrections cover early referral/treat-to-target timing, seronegativity and lab ranges, synovial-fluid limitations, weekly methotrexate, current HCQ retinal screening, drug-specific monitoring/reproductive risks, biologic/JAK distinctions, and nutrition/systemic care. Sources reviewed November 15, 2026 remain at the bottom after the existing four videos and correction notes. The Week 9 presentation and video metadata are unchanged.

`#/final/condition/guillain-barre` organizes the supplied GBS notes in all 16 shared sections, with the clinical-signs exam shortcut and the original Week 8 presentation. Missing nursing-process content is completed. Verified corrections cover axonal variants, respiratory/NIF trends, early normal CSF/electrodiagnostic results, LP aftercare, product-specific IVIG rates, immunotherapy sequencing/steroids, supportive medicines/nutrition, and variable recovery. Clinical sources reviewed November 15, 2026 follow the existing six videos and correction notes at the bottom. Presentation and video metadata are unchanged.

`#/final/condition/meningitis` adds the supplied notes to all 16 shared sections, with focus shortcuts for symptoms, droplet precautions, and lumbar-puncture nursing care. Completed nutrition and nursing-process content accompanies verified corrections to CT/LP sequencing, urgent antibiotics, organism-specific precautions/contact prophylaxis, steroid timing, fever/seizure teaching, drug monitoring, fluid/ICP care, and recovery evaluation. Clinical sources reviewed November 15, 2026 appear at the bottom, following the existing videos and correction notes. The original Week 8 presentation and video metadata are unchanged.

`#/final/condition/als` organizes the supplied ALS notes in the same 16-section template, followed by the existing topic videos and reading references. Focus shortcuts cover manifestations, priority respiratory assessment, and communication tools (AAC, retaining the guide’s “CAM” wording). Verified corrections address cortical upper motor neurons, dysarthria, cognitive/behavioral involvement, uncertain risk/prevention claims, hypoventilation/CO₂ and oxygen limitations, individualized PEG/NIV decisions, aspiration risk, drug-specific monitoring/withdrawal, and AAC access. Care-plan outcomes and education are completed; repeated notes are consolidated and the trailing meningitis fragment is excluded. Clinical sources were reviewed November 15, 2026. Original ALS presentation and video metadata are unchanged.

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

## Study podcast

`#/final/podcast` provides the supplied YouTube episode, **MS3 Final Examination Study Guide** by Next Stop Nursing (`7pSK_zxd2WU`), with the requested “Special thanks to Alessia.” note. Its visible official YouTube player loads only after Play is selected. Custom controls provide play/pause, 10-second skips, a labeled seek slider, elapsed/total time and supported playback speeds. The native YouTube controls and source link remain available.

`podcast.js` shares the YouTube IFrame API loader with `video-library.js`. It handles connection failures/retry, offline status and stale asynchronous callbacks, pauses when the document is hidden, and destroys the player/timers/listeners when navigating away. It does not extract media, hide the video or claim audio-only/background playback. A separately supplied original audio asset would be needed for a true HTML audio player. The existing 80-video resource set is unchanged.

Run `node scripts/check-podcast.cjs` for playback-state, seeking, cleanup, failure and routing checks; `node scripts/check-videos.cjs` verifies the existing study videos. YouTube integration follows the [IFrame API](https://developers.google.com/youtube/iframe_api_reference), [embedded-player requirements](https://developers.google.com/youtube/terms/required-minimum-functionality) and [developer policies](https://developers.google.com/youtube/terms/developer-policies).

## Practice quiz

`#/final/quiz` contains all 15 questions, 61 answer choices and original answer-key rationales from the supplied `Med-Surg III Practice Questions 2.pdf`, including question 5's A/B/D select-all key. The requested “Special thanks to Danalky.” note appears above the quiz. `quiz-data.js` stores normalized text and the source PDF's SHA-256 for traceability; the PDF itself is not published.

`quiz.js` provides single-choice radios and multi-select checkboxes, an answered counter, Submit quiz, overall score/percentage, correct/incorrect/unanswered feedback per question, correct answers, original rationales and Reset quiz. Each question is one point. Multi-select scoring requires an exact set match; omitted or extra choices receive no point. Unanswered questions receive no point and are labeled separately. Submission locks the answers for review; Reset clears answers, score, annotations and feedback and enables a fresh attempt. The draft/submitted attempt survives navigation within the current app visit; refreshing starts over. Nothing is sent or saved to a server.

The supplied answer key remains unchanged. Separately labeled post-submission clinical-context notes clarify MS heat sensitivity, individualized fluid intake and contemporary arm-procedure guidance after axillary surgery; sources are also at the bottom. Original PDF rationales remain identifiable as supplied wording.

The exam navigation now contains the four weeks, Podcast and Practice quiz; the homepage continues to open the overview with the large study-guide card first. Run `node scripts/check-quiz.cjs` to validate the source-matched key, all multi-select combinations, scores, route links and pre-submission answer hiding. Browser checks cover Submit/Reset, exact-set multi-select grading, score/feedback, route retention and desktop/mobile layouts.

## Nursing-focus posters

All 14 condition routes begin with a compact poster preview alongside Exam focus and Jump to a section on desktop. Previews are capped at 410 px tall (360 px in the stacked layout); the original 1200 × 1446 images are unchanged. `posters/` contains the original PNGs with source hashes and route mappings in `posters.js`.

Clicking the image opens the existing full-window viewer with zoom, Fit, Actual size, panning and Escape/Close. There is no separate Expand poster button, action row or visible poster-text disclosure. The supplied text remains available to screen readers. Poster clarifications and the optional PNG download are in the existing Clinical corrections & clarifications disclosure at the bottom. Within the expanded viewer, its clarification is below the image.

The 16 study sections, exam-focus shortcuts, section navigation and reading references are retained. Run `node scripts/check-posters.cjs` to verify mappings, original image hashes/dimensions, the simplified layout, bottom clarifications and deployment assets.
