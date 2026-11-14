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

Personal study outline for weeks 7, 8, 9, and 12. The user-supplied syllabus was used only to identify the requested objectives and presentation topics. The original PDF, faculty information, and course policies are not included. Reading references and pre-lecture assignments are taken from the later user-supplied Course Final Word document.

## Hosting

The Pages workflow publishes the static website from `main` using GitHub Actions. `.nojekyll` ensures static files are served directly. Fonts use Google Fonts with local system fallbacks.


## Presentation PDFs

Sixteen supplied decks (222 pages) are available in a separate page-by-page viewer. Original PDFs are copied unchanged; slide previews are rendered at up to 2000 pixels and converted to WebP. Only the current and next slide image are loaded. Extracted slide text is available in a disclosure below the viewer; image-only source slides may have no selectable text.

`presentations.js` maps decks to their syllabus week and group. Ménière disease is under Additional presentations, as requested. All fifteen syllabus presentation topics have PDFs; the additional Ménière disease deck completes the set of sixteen. `presentations/<id>/deck.json` contains each slide image, dimensions, and extracted text.

To prepare future files, add their entries to `scripts/presentation-sources.json` and run `scripts/prepare-presentations.py --source-dir /path/to/provided/pdfs` using Python with Pillow, pypdf, and pdftoppm. The script only processes the explicitly listed files. Add the resulting assets and metadata to the repository. The workflow copies the presentation assets into the published site.

Reader controls: Previous/Next, page jump, zoom/reset and Full screen, and optional Auto (5–60 seconds). Auto starts only on request, stops on manual navigation or zoom, pauses when the tab is hidden, and ends at the final slide. Arrow keys work while focus is inside the viewer. Full screen targets the presentation itself using the browser Fullscreen API when supported. The fallback is an edge-to-edge viewport player with no study-page heading, margins, borders, or nested card. Both modes retain compact controls and scale the slide to the available space. Escape or Exit full screen returns to the page.
