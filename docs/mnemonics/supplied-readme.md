# OB Final Exam Mnemonics, 29 Cards

One image per mnemonic for the OB final exam (NRBS 3410), Project Green
Light OB section. Same visual family as the OB posters: cream background,
forest header, terracotta rule, Nunito type. Each card is 1200 px wide;
height varies with content (718 to 1272 px).

## What this set is

29 new mnemonics, drawn from the OB site notes and the corrected 541
flashcards. Simple, one-line hooks with a letter-by-letter breakdown and a
short note. None of these repeat the 7 mnemonics already on the
memory-tricks sheet (00-memory-tricks.png: VEAL CHOP, BUBBLE-HE, 4 Ts,
ACHES, APGAR, GTPAL, HELLP). This set is the new material; the tricks
sheet stays as-is.

## File to topic mapping

Postpartum (Week 7)
- 01-post-birth.png, POST-BIRTH: postpartum warning signs after discharge
- 02-reeda.png, REEDA: perineal and incision assessment
- 03-lochia.png, Red, Pink, Pale: lochia sequence (rubra, serosa, alba)
- 04-virchow.png, Virchow's Triad: clot risk after birth
- 05-uterotonics.png, M is for Pressure, C is for Chest: methylergonovine
  vs carboprost contraindications
- 06-rubin-phases.png, Taking-in, Taking-hold, Letting-go: Rubin's phases

Newborn (Weeks 9-10 unless noted)
- 07-abcs-safe-sleep.png, ABCs of Safe Sleep: SIDS prevention
- 08-caput-cephalo.png, Caput Crosses, Cephalo Confined: scalp swellings
  plus subgaleal danger
- 09-term-staircase.png, 37, 39, 41, 42: gestational age, plus the 10/90
  SGA/AGA/LGA fences
- 10-heat-loss.png, Four Ways Babies Lose Heat: evaporation, convection,
  conduction, radiation
- 11-rds-ttn-mas.png, RDS, TTN, MAS: newborn breathing trouble (Week 10)
- 12-fontanelles.png, Diamond 18, Triangle 8 to 12: fontanelle shapes and
  closing times (Week 9)
- 13-fetal-shunts.png, Liver, Heart, Lungs: the three fetal shunts
  (Weeks 1-2)

Feeding (Week 9)
- 14-latch.png, LATCH: breastfeeding assessment
- 15-milk-storage.png, 4, 4, 6: breast milk storage clocks

Contraception (Week 7, Aug 4)
- 16-lam.png, LAM and the 3 A's: lactational amenorrhea
- 17-iud-years.png, 10, 8, 5, 3: IUD durations (Aug 4)

STIs (Aug 4)
- 18-amsel.png, Amsel: 3 of 4: bacterial vaginosis diagnosis

High-Risk Classics (Weeks 2-3)
- 19-previa-abruption.png, Painless Previa, Painful Abruption (Week 3)
- 20-magnesium-3rs.png, Magnesium and the 3 R's (Week 3)
- 21-preeclampsia-bp.png, 140/90 Is the Door, 160/110 Is the Alarm
  (Week 3)
- 22-torch.png, TORCH: congenital and perinatal infections (Week 3)
- 23-ogtt-numbers.png, 95, 180, 155, 140: Carpenter-Coustan OGTT values
  (Weeks 2-3)

Labor and Birth (Weeks 5-6)
- 24-helperr.png, HELPERR: shoulder dystocia steps (Week 6)
- 25-five-ps.png, The 5 P's of Labor (Week 5)
- 26-laceration-degrees.png, 1, 2, 3, 4: How Deep? (Week 6)
- 27-intraamniotic-infection.png, Fever, Fast Heart, Tender Uterus, Foul
  Fluid (Week 6)

Antepartum (Weeks 1-2)
- 28-cervical-signs.png, Goodell, Chadwick, Hegar (Weeks 1-2)
- 29-pregnancy-signs.png, Presumptive, Probable, Positive (Week 2)

## Placement notes

- Place alongside the OB posters (posters/ob/) or in a mnemonics section of
  the OB final page. Group by section if the page supports it: Postpartum,
  Newborn, Feeding, Contraception, STIs, High-Risk Classics, Labor and
  Birth, Antepartum. Each card carries its own section and source-week tag
  in the header, so the grouping is visible on the image itself.
- Cards are numbered 01-29 in the order above. Keep the numbering; the
  header on each card says "Mnemonic NN of 29".
- Alt text suggestion: the card title plus its hook line, e.g.
  "POST-BIRTH: postpartum warning signs after discharge."
- Do not retype the text from the images. If a card needs a wording fix,
  change the text in source/mnemonics-content.json and re-render with
  source/render_cards.py (needs the Nunito fonts from the posters folder
  and Python 3 with Pillow). The rendered text is the verified wording.
- Two content notes (full detail in research-notes.md): POST-BIRTH's S is
  seizures in the ACOG standard while the site notes list fainting; the
  HELPERR card shows the full clinical sequence while the site notes cover
  Help, Legs, Pressure, and Enter. Both are flagged on the cards
  themselves. Do not "fix" them silently.

## Contents of this zip

- 29 PNG cards (1200 px wide, variable height)
- README.md (this file)
- research-notes.md (sources and verification notes)
- source/mnemonics-content.json (all card text, the single source of truth)
- source/render_cards.py (the renderer)
