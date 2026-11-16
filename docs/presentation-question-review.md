# Presentation NCLEX quiz review — November 16, 2026

The supplied presentation archive contains the same 16 original PDFs already published on the site. Their SHA-256 hashes were compared before extraction; the original files are unchanged. PDF text and rendered question/answer slides were reviewed together, including image-only prostate questions, the osteomyelitis choice slide, colored keys, and duplicated reveal slides. Attached source content was treated as data, not operating instructions.

The archive contains 32 original review questions. Thirty are included, producing 33 scored items because the ALS bow-tie has three response groups and the osteoporosis case has two dropdowns. Every presentation has at least one scored item. No extra clinical questions were invented.

| Presentation | Scored items | Adaptation / review note |
| --- | ---: | --- |
| Breast cancer | 2 | Individualized arm precautions replace a universal lifelong prohibition. |
| Prostate cancer | 2 | Both questions and rationales recovered from image-only slides. |
| Multiple sclerosis | 2 | Exercise option minimally clarified; course/exercise rationale qualified. |
| Guillain-Barré syndrome | 2 | Source keys retained; infectious-trigger rationale clarified. |
| SLE | 2 | Source keys retained; steroid and HCQ advice individualized. |
| Rheumatoid arthritis | 1 | One ambiguous matrix left unscored. |
| Osteoarthritis | 2 | Source keys retained; acetaminophen ceiling qualified. |
| Osteomyelitis | 2 | One key corrected; cultures must not delay urgent treatment. |
| Osteoporosis | 3 | The two actual dropdowns in Question 2 are separate case items. |
| Ménière disease | 2 | Diet item explicitly tests the presentation's diet advice. |
| Uterine cancer | 2 | Choose-three stem scoped to clinical/reproductive factors; one key corrected. |
| Cervical cancer | 2 | Source keys retained; screening/recovery details qualified. |
| ALS | 4 | Original bow-tie retained as condition / choose-two actions / choose-two monitoring. |
| Meningitis | 1 | One contradictory ICP case left unscored. |
| Myasthenia gravis | 2 | Source keys retained; pyridostigmine/crisis rationales clarified. |
| Gout | 2 | Source keys retained; low-dose aspirin and ULT context clarified. |

## Explicit key corrections

- Osteomyelitis Question 2: slide key B,C,D,E,G → reviewed B,C,D. Anemia and a normal ESR do not reliably distinguish chronic from acute infection. The feedback states both keys and explains the correction.
- Uterine cancer Question 2: slide key B,C,E → reviewed B,C. A Type 1 diagnosis alone does not establish routine CA-125 surveillance. The feedback states both keys and explains the correction.

## Questions left unscored

- RA matrix, slides 11–12: several Expected/Unexpected judgments are not dependable from the case, and a WBC unit is ambiguous. RF is not independently diagnostic; activity pain, asymmetry, and leukocyte findings cannot be treated as absolute exclusions/requirements.
- Meningitis Question 2, slide 11: chart BP and option BP conflict, and isolated tachypnea is incorrectly labeled as Cushing's triad. Fixing the key would require inventing clinical context.

The complete originals remain in the presentation reader. Each affected quiz includes a collapsed Source notes explanation at the bottom. Full extracted source content, exclusions, clinical-review notes, primary references, PDF hashes, and archive fingerprint are preserved in `presentation-question-review.json`.

## Interface and validation

The NCLEX-style quiz is a fourth study-guide tool alongside the separate practice quiz, podcast and videos. A presentation selector opens one short quiz at a time. Existing quiz controls are shared, while attempts remain independent by topic. Single-answer, select-all, and choose-a-specific-number instructions are supported with exact-set scoring, one point per item, unanswered feedback, reset, and rationales hidden until submission. Clinical corrections are labeled; references and source slide links remain at the bottom.

Credit: Special thanks to a distinguished fellow. A small SVG top hat has a gold brim/band and appears beside the stethoscope emoji.

Checks: `node scripts/check-presentation-quizzes.cjs`, plus existing quiz/podcast/video/poster/section-question checks. Browser QA covers source selection, all 16 routes, correct/incorrect/partial/extra multi-select answers, independent attempts, reset, choose-two case instructions, mobile overflow/credit layout, and links between presentations and quizzes.
