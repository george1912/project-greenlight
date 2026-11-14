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

## Content scope

Personal study outline for weeks 7, 8, 9, and 12. The user-supplied syllabus was used only to identify the requested objectives and presentation topics. The original PDF, faculty information, and course policies are not included. Reading references and pre-lecture assignments are taken from the later user-supplied Course Final Word document.

## Hosting

The Pages workflow publishes the static website from `main` using GitHub Actions. `.nojekyll` ensures static files are served directly. Fonts use Google Fonts with local system fallbacks.


## Presentation PDFs

Sixteen supplied decks (222 pages) are available in a separate page-by-page viewer. Original PDFs are copied unchanged; slide previews are rendered at up to 2000 pixels and converted to WebP. Only the current and next slide image are loaded. Extracted slide text is available in a disclosure below the viewer; image-only source slides may have no selectable text.

`presentations.js` maps decks to their syllabus week and group. Ménière disease is under Additional presentations, as requested. All fifteen syllabus presentation topics have PDFs; the additional Ménière disease deck completes the set of sixteen. `presentations/<id>/deck.json` contains each slide image, dimensions, and extracted text.

To prepare future files, add their entries to `scripts/presentation-sources.json` and run `scripts/prepare-presentations.py --source-dir /path/to/provided/pdfs` using Python with Pillow, pypdf, and pdftoppm. The script only processes the explicitly listed files. Add the resulting assets and metadata to the repository. The workflow copies the presentation assets into the published site.

Reader controls: Previous/Next, page jump, zoom/reset and Full screen, and optional Auto (5–60 seconds). Auto starts only on request, stops on manual navigation or zoom, pauses when the tab is hidden, and ends at the final slide. Arrow keys work while focus is inside the viewer. Full screen uses browser fullscreen when supported and a full-window reader otherwise. Escape or Exit full screen returns to the page.
