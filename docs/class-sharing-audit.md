# Class sharing audit

Reviewed November 16, 2026.

## Changes

- Added a green-on pixel stoplight share image, matching browser/touch icons, canonical URL, description, Open Graph and Twitter card metadata.
- Added GitHub Pages recovery for recognizable study URLs copied without the hash marker, plus a useful fallback for other unavailable paths.
- Normalized trailing slashes and hash query strings. Unknown condition, presentation and quiz IDs now show the existing unavailable-page view, including inherited JavaScript property names.
- Kept the current route when activating the keyboard skip link, so refreshing afterward opens the same study page.
- Replaced the retired NHS pyridostigmine PDF with its current Right Decisions PDF, the NICE NG24 link with the actual surgical blood-conservation chapter, and an unstable Australian medicine-finder page with the official Medsafe Mestinon datasheet. Study content and original presentation PDFs are unchanged.

## Checks

- All 59 canonical routes render in the shared route check; 391 internal links and 307 local assets resolve in the checkout.
- Checked all 16 presentation decks, 222 slide images, 14 posters and 14 practice banks for presence, plus the focused-review PDF and site assets.
- Automated checks pass for sharing/redirect recovery, the original practice quiz, section practice, presentation questions, posters, podcast, videos, focused review and analytics.
- Browser checks cover the home → exam overview → study guide path, focused-review refresh after the skip link, presentation navigation, mobile study-guide width and the published sharing metadata.

## External references

The bounded reference audit checked 341 unique URLs from the condition, quiz, focused-review and overview content. The first pass returned 321 HTTP 200, four HTTP 203 challenge shells, 14 HTTP 403 blocked responses, one confirmed HTTP 404 and one unstable HTTP 500. The confirmed broken URL, wrong-section redirect and unstable medicine page were replaced with verified HTTP 200 sources. Blocked/challenge responses do not establish that a source is unavailable to a person.

Third-party video availability and every publisher's browser behavior are not guaranteed. The site retains source links for videos that cannot play in an embedded player. No medical-content rewrite was performed as part of this sharing/navigation review.
