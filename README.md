# Project Greenlight

A growing nursing school study hub. Static HTML, CSS, and JavaScript; ready for GitHub Pages with no build step.

## Preview

Run `python3 -m http.server 8000` in this folder and open http://localhost:8000.

## Study structure

- Home: one large **Med Search 3 Final Exam** entry and room for future courses.
- Week 7: three Parkinson disease learning objectives and four cancer presentation placeholders.
- Week 8: six student presentation placeholders.
- Week 9: five student presentation placeholders.
- Week 12: four HIV/AIDS learning objectives.

`content.js` holds the syllabus outline. Populate each objective’s `answer` array with reviewed paragraphs when study materials are supplied. Presentation `content` arrays are intentionally empty. No clinical answers have been generated or added.

Routes use URL hashes so bookmarks and refreshes work under `/project-greenlight/` on GitHub Pages. Navigation remains keyboard accessible; objective panels use native disclosure controls.

## Content scope

Personal study outline for weeks 7, 8, 9, and 12. The user-supplied syllabus was used only to identify the requested objectives and presentation topics. The original PDF, reading assignments, faculty information, and course policies are not included.

## Hosting

Publish the root of the `main` branch with GitHub Pages. `.nojekyll` ensures static files are served directly. Fonts use Google Fonts with local system fallbacks.
