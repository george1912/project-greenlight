/* Reviewed mnemonic additions; existing OB study content is unchanged. */
const obMnemonicData = {
  "categories": [
    {
      "id": "antepartum",
      "title": "Pregnancy & prenatal care",
      "description": "Pregnancy signs, fetal circulation and assessment."
    },
    {
      "id": "pregnancy-complications",
      "title": "Pregnancy complications",
      "description": "Bleeding, diabetes, hypertension and infection."
    },
    {
      "id": "labor-birth",
      "title": "Labor & birth",
      "description": "Progress, birth injuries and team responses."
    },
    {
      "id": "postpartum",
      "title": "Postpartum",
      "description": "Recovery, assessment and warning signs."
    },
    {
      "id": "newborn",
      "title": "Newborn",
      "description": "Adaptation, assessment, warmth and safe sleep."
    },
    {
      "id": "feeding",
      "title": "Feeding",
      "description": "Latch and safe milk handling."
    },
    {
      "id": "contraception",
      "title": "Contraception",
      "description": "LAM criteria and device durations."
    },
    {
      "id": "stis",
      "title": "STIs",
      "description": "Vaginal symptoms and clinical assessment."
    }
  ],
  "cards": [
    {
      "hook": "Postpartum warning signs after discharge",
      "items": [
        {
          "k": "P",
          "v": "Pain in chest"
        },
        {
          "k": "O",
          "v": "Obstructed breathing"
        },
        {
          "k": "S",
          "v": "Seizures"
        },
        {
          "k": "T",
          "v": "Thoughts of harming self or baby"
        },
        {
          "k": "B",
          "v": "Bleeding, heavy or increasing"
        },
        {
          "k": "I",
          "v": "Incision not healing"
        },
        {
          "k": "R",
          "v": "Red or swollen leg"
        },
        {
          "k": "T",
          "v": "Temperature ≥100.4°F (38°C) or ≤96.8°F (36°C)."
        },
        {
          "k": "H",
          "v": "Headache, severe, or vision change"
        }
      ],
      "n": 1,
      "note": "AWHONN’s POST-BIRTH warning signs: chest pain, breathing difficulty, seizures or thoughts of harm need emergency help. Other listed signs need prompt clinical contact; if care cannot be reached, seek emergency care. Fainting is also concerning and is not interchangeable with seizures. Tell the team when you gave birth.",
      "title": "POST-BIRTH",
      "id": "post-birth",
      "categoryId": "postpartum",
      "objectiveIds": [
        "postpartum-discharge"
      ],
      "weekIds": [
        "week-7"
      ],
      "topicIds": [
        "normal-postpartum"
      ],
      "references": [
        {
          "title": "AWHONN: POST-BIRTH warning signs",
          "url": "https://saveyourlife.awhonn.org/"
        }
      ],
      "reviewNote": "Clinical clarification"
    },
    {
      "hook": "Perineal and incision assessment",
      "items": [
        {
          "k": "R",
          "v": "Redness"
        },
        {
          "k": "E",
          "v": "Edema"
        },
        {
          "k": "E",
          "v": "Ecchymosis"
        },
        {
          "k": "D",
          "v": "Drainage"
        },
        {
          "k": "A",
          "v": "Approximation"
        }
      ],
      "n": 2,
      "note": "Assess redness, swelling, bruising, drainage and wound-edge approximation. Side-lying/Sims can help perineal inspection; assess a cesarean incision in an appropriate comfortable position. Worsening redness, drainage, separation or fever needs review.",
      "title": "REEDA",
      "id": "reeda",
      "categoryId": "postpartum",
      "objectiveIds": [
        "postpartum-assessment",
        "postpartum-comfort-mobility",
        "assisted-cesarean-birth"
      ],
      "weekIds": [
        "week-7",
        "week-6"
      ],
      "topicIds": [
        "normal-postpartum"
      ],
      "references": [],
      "reviewNote": "Clinical clarification"
    },
    {
      "hook": "Lochia changes color as it heals",
      "items": [
        {
          "k": "Rubra",
          "v": "Dark red, first few days"
        },
        {
          "k": "Serosa",
          "v": "Pinkish, around days 3 to 10"
        },
        {
          "k": "Alba",
          "v": "Yellow-white, over subsequent weeks"
        }
      ],
      "n": 3,
      "note": "Rubra to serosa to alba. Timing varies; assess the whole pattern. Foul lochia or a return to bright red is a warning sign.",
      "title": "Red, Pink, Pale",
      "id": "lochia",
      "categoryId": "postpartum",
      "objectiveIds": [
        "postpartum-physiology",
        "postpartum-assessment"
      ],
      "weekIds": [
        "week-7"
      ],
      "topicIds": [
        "normal-postpartum"
      ],
      "references": [],
      "image": {
        "file": "posters/ob/mnemonics/03-lochia.png",
        "width": 1200,
        "height": 792
      }
    },
    {
      "hook": "Three things that raise clot risk after birth",
      "items": [
        {
          "k": "1",
          "v": "Hypercoagulability: pregnancy makes blood clot more easily"
        },
        {
          "k": "2",
          "v": "Vessel injury: birth trauma to blood vessels"
        },
        {
          "k": "3",
          "v": "Immobility: stasis from bed rest or limited movement"
        }
      ],
      "n": 4,
      "note": "Pregnancy and birth stack all three. Early movement and watching for a painful swollen leg are the nursing answers.",
      "title": "Virchow's Triad",
      "id": "virchow",
      "categoryId": "postpartum",
      "objectiveIds": [
        "postpartum-thromboembolism"
      ],
      "weekIds": [
        "week-7"
      ],
      "topicIds": [
        "postpartum-complications"
      ],
      "references": [],
      "image": {
        "file": "posters/ob/mnemonics/04-virchow.png",
        "width": 1200,
        "height": 792
      }
    },
    {
      "hook": "Two uterotonics, two contraindications",
      "items": [
        {
          "k": "M",
          "v": "Methylergonovine: avoid with hypertension or preeclampsia, check BP first"
        },
        {
          "k": "C",
          "v": "Carboprost: avoid with asthma, check breathing first"
        }
      ],
      "n": 5,
      "note": "Both stop postpartum bleeding. The drug choice depends on the patient, not just the bleeding.",
      "title": "M is for Pressure, C is for Chest",
      "id": "uterotonics",
      "categoryId": "postpartum",
      "objectiveIds": [
        "postpartum-hemorrhage-management"
      ],
      "weekIds": [
        "week-7"
      ],
      "topicIds": [
        "postpartum-complications"
      ],
      "references": [],
      "image": {
        "file": "posters/ob/mnemonics/05-uterotonics.png",
        "width": 1200,
        "height": 750
      }
    },
    {
      "hook": "Rubin's phases of becoming a parent",
      "items": [
        {
          "k": "In",
          "v": "Taking-in: early recovery, dependence, retelling the birth story"
        },
        {
          "k": "Hold",
          "v": "Taking-hold: learning to care for the baby, seeking guidance"
        },
        {
          "k": "Go",
          "v": "Letting-go: accepting the new role, growing into a parental identity"
        }
      ],
      "n": 6,
      "note": "The phases overlap and move at their own pace. Meet physical needs first, then teach when the parent is ready.",
      "title": "Taking-in, Taking-hold, Letting-go",
      "id": "rubin-phases",
      "categoryId": "postpartum",
      "objectiveIds": [
        "postpartum-family-adaptation"
      ],
      "weekIds": [
        "week-7"
      ],
      "topicIds": [
        "normal-postpartum"
      ],
      "references": [],
      "image": {
        "file": "posters/ob/mnemonics/06-rubin-phases.png",
        "width": 1200,
        "height": 824
      }
    },
    {
      "hook": "Three letters for safer infant sleep",
      "items": [
        {
          "k": "A",
          "v": "Alone on a separate infant sleep surface; share a room, not a bed."
        },
        {
          "k": "B",
          "v": "Back: on the back for every sleep"
        },
        {
          "k": "C",
          "v": "Crib: firm flat surface, empty crib, nothing loose"
        }
      ],
      "n": 7,
      "note": "Back for every sleep on a firm, flat, level surface with no loose bedding, pillows or toys. Room-share without bed-sharing, ideally for at least the first six months. These measures reduce risk; they do not guarantee prevention of SIDS.",
      "title": "ABCs of Safe Sleep",
      "id": "abcs-safe-sleep",
      "categoryId": "newborn",
      "objectiveIds": [
        "newborn-discharge-teaching"
      ],
      "weekIds": [
        "week-9",
        "week-10"
      ],
      "topicIds": [
        "normal-newborn"
      ],
      "references": [
        {
          "title": "NICHD: safe sleep environment",
          "url": "https://safetosleep.nichd.nih.gov/reduce-risk/safe-sleep-environment"
        }
      ],
      "reviewNote": "Clinical clarification"
    },
    {
      "hook": "Two scalp swellings, one suture-line rule",
      "items": [
        {
          "k": "Caput",
          "v": "Caput succedaneum crosses suture lines. Soft-tissue swelling, present at birth, gone in days."
        },
        {
          "k": "Cephalo",
          "v": "Cephalohematoma is confined by suture lines. Blood under the periosteum, appears hours later, gone in weeks."
        },
        {
          "k": "Danger",
          "v": "Subgaleal hemorrhage spreads and can hold a large blood volume. That is the emergency."
        }
      ],
      "n": 8,
      "note": "Crosses or confined is the exam question. Subgaleal is the one that can cause shock.",
      "title": "Caput Crosses, Cephalo Confined",
      "id": "caput-cephalo",
      "categoryId": "newborn",
      "objectiveIds": [
        "newborn-variants"
      ],
      "weekIds": [
        "week-9"
      ],
      "topicIds": [
        "normal-newborn"
      ],
      "references": [],
      "image": {
        "file": "posters/ob/mnemonics/08-caput-cephalo.png",
        "width": 1200,
        "height": 852
      }
    },
    {
      "hook": "The gestational-age staircase, odd numbers up",
      "items": [
        {
          "k": "37",
          "v": "Early term (before 37 is preterm)"
        },
        {
          "k": "39",
          "v": "Full term"
        },
        {
          "k": "41",
          "v": "Late term"
        },
        {
          "k": "42",
          "v": "Postterm"
        }
      ],
      "n": 9,
      "note": "For size, 10 and 90 are the fences: under the 10th percentile is SGA, over the 90th is LGA, between is AGA.",
      "title": "37, 39, 41, 42",
      "id": "term-staircase",
      "categoryId": "newborn",
      "objectiveIds": [
        "newborn-gestational-assessment"
      ],
      "weekIds": [
        "week-9",
        "week-10"
      ],
      "topicIds": [
        "normal-newborn"
      ],
      "references": [],
      "image": {
        "file": "posters/ob/mnemonics/09-term-staircase.png",
        "width": 1200,
        "height": 866
      }
    },
    {
      "hook": "Evaporation, convection, conduction, radiation",
      "items": [
        {
          "k": "Evaporation",
          "v": "Heat lost from wet skin. Dry the baby."
        },
        {
          "k": "Convection",
          "v": "Heat lost to cooler air. Protect from drafts."
        },
        {
          "k": "Conduction",
          "v": "Heat lost to cold surfaces. Use warm surfaces."
        },
        {
          "k": "Radiation",
          "v": "Heat lost to nearby cold objects. Keep the bassinet away from cold walls and windows."
        }
      ],
      "n": 10,
      "note": "Cold stress raises oxygen and glucose use and can cause acidosis. Warmth is a vital sign in a newborn.",
      "title": "Four Ways Babies Lose Heat",
      "id": "heat-loss",
      "categoryId": "newborn",
      "objectiveIds": [
        "newborn-temperature-glucose",
        "newborn-routine-care"
      ],
      "weekIds": [
        "week-10",
        "week-9"
      ],
      "topicIds": [
        "newborn-complications",
        "normal-newborn"
      ],
      "references": [],
      "image": {
        "file": "posters/ob/mnemonics/10-heat-loss.png",
        "width": 1200,
        "height": 898
      }
    },
    {
      "hook": "Three causes of newborn breathing trouble",
      "items": [
        {
          "k": "RDS",
          "v": "Respiratory distress syndrome: insufficient surfactant promotes alveolar collapse, especially in preterm infants."
        },
        {
          "k": "TTN",
          "v": "Transient tachypnea: lung fluid not cleared, often term or late preterm, often after cesarean without labor. Improves over days."
        },
        {
          "k": "MAS",
          "v": "Meconium aspiration: meconium breathed in, blocks and inflames airways, often postterm or meconium-stained fluid."
        }
      ],
      "n": 11,
      "note": "RDS is primarily a surfactant problem; TTN is delayed fluid clearance; MAS involves aspiration with obstruction/inflammation. Signs overlap, so assess history and condition. Meconium-stained fluid alone does not diagnose aspiration or justify routine suctioning.",
      "title": "RDS, TTN, MAS",
      "id": "rds-ttn-mas",
      "categoryId": "newborn",
      "objectiveIds": [
        "newborn-respiratory-distress"
      ],
      "weekIds": [
        "week-10"
      ],
      "topicIds": [
        "newborn-complications"
      ],
      "references": [
        {
          "title": "NHLBI: newborn respiratory distress syndrome",
          "url": "https://www.nhlbi.nih.gov/health/respiratory-distress-syndrome"
        }
      ],
      "reviewNote": "Clinical clarification"
    },
    {
      "hook": "Fontanelle shapes and closing times",
      "items": [
        {
          "k": "Anterior",
          "v": "Diamond-shaped, closes around 18 months"
        },
        {
          "k": "Posterior",
          "v": "Triangular, closes around 8 to 12 weeks"
        }
      ],
      "n": 12,
      "note": "Timing varies. Persistent bulging, marked depression, or unusual head size needs review.",
      "title": "Diamond 18, Triangle 8 to 12",
      "id": "fontanelles",
      "categoryId": "newborn",
      "objectiveIds": [
        "newborn-head-to-toe"
      ],
      "weekIds": [
        "week-9",
        "week-10"
      ],
      "topicIds": [
        "normal-newborn"
      ],
      "references": [],
      "image": {
        "file": "posters/ob/mnemonics/12-fontanelles.png",
        "width": 1200,
        "height": 718
      }
    },
    {
      "hook": "Three fetal shunts and the pathways they bypass",
      "items": [
        {
          "k": "Liver",
          "v": "Ductus venosus directs some umbilical venous blood toward the inferior vena cava, bypassing much of the liver."
        },
        {
          "k": "Heart",
          "v": "Foramen ovale allows right atrium → left atrium flow, bypassing much of the lung circulation."
        },
        {
          "k": "Lungs",
          "v": "Ductus arteriosus connects pulmonary artery → descending aorta, bypassing much of the lung circulation."
        }
      ],
      "n": 13,
      "note": "These are branching pathways, not a single stream passing through all three shunts. One umbilical vein brings relatively oxygen-rich blood toward the fetus; two umbilical arteries return blood toward the placenta.",
      "title": "Liver, Heart, Lungs",
      "id": "fetal-shunts",
      "categoryId": "antepartum",
      "objectiveIds": [
        "conception-fetal-development"
      ],
      "weekIds": [
        "week-1",
        "week-2"
      ],
      "topicIds": [],
      "references": [
        {
          "title": "CHOP: fetal circulation",
          "url": "https://www.chop.edu/conditions-diseases/fetal-circulation"
        }
      ],
      "reviewNote": "Clinical clarification"
    },
    {
      "hook": "Breastfeeding assessment in five letters",
      "items": [
        {
          "k": "L",
          "v": "Latch: deep, comfortable, wide mouth"
        },
        {
          "k": "A",
          "v": "Audible swallow: hear or see swallowing, not just sucking"
        },
        {
          "k": "T",
          "v": "Type of nipple"
        },
        {
          "k": "C",
          "v": "Comfort: no persistent pain"
        },
        {
          "k": "H",
          "v": "Hold: positioning that supports the latch"
        }
      ],
      "n": 14,
      "note": "Judge the feed by latch, swallowing, and comfort, not by minutes at the breast. Persistent pain or poor transfer means lactation referral.",
      "title": "LATCH",
      "id": "latch",
      "categoryId": "feeding",
      "objectiveIds": [
        "breastfeeding-latch-support"
      ],
      "weekIds": [
        "week-9"
      ],
      "topicIds": [
        "feeding"
      ],
      "references": [],
      "image": {
        "file": "posters/ob/mnemonics/14-latch.png",
        "width": 1200,
        "height": 940
      }
    },
    {
      "hook": "Breast milk storage clocks",
      "items": [
        {
          "k": "4 hours",
          "v": "At room temperature, up to 77 F (25 C)"
        },
        {
          "k": "4 days",
          "v": "Refrigerated, up to 40 F (4 C)"
        },
        {
          "k": "6 months",
          "v": "Freezer best, up to 12 months acceptable, at 0 F (-18 C)"
        }
      ],
      "n": 15,
      "note": "Never microwave milk and never refreeze fully thawed milk. Thaw in the refrigerator or lukewarm water. Once fully thawed in the refrigerator, use within 24 hours; use within two hours after warming or bringing to room temperature. Use milk left after a feed within two hours.",
      "title": "4, 4, 6",
      "id": "milk-storage",
      "categoryId": "feeding",
      "objectiveIds": [
        "milk-expression-storage"
      ],
      "weekIds": [
        "week-9"
      ],
      "topicIds": [
        "feeding"
      ],
      "context": "For freshly expressed milk for a healthy term infant at home. Hospital/preterm instructions may differ.",
      "references": [
        {
          "title": "CDC: breast milk storage",
          "url": "https://www.cdc.gov/breastfeeding/breast-milk-preparation-and-storage/handling-breastmilk.html"
        }
      ],
      "reviewNote": "Clinical clarification",
      "image": {
        "file": "posters/ob/mnemonics/15-milk-storage.png",
        "width": 1200,
        "height": 792
      }
    },
    {
      "hook": "Lactational amenorrhea needs all three",
      "items": [
        {
          "k": "A",
          "v": "Amenorrhea: no periods since birth"
        },
        {
          "k": "A",
          "v": "Age: the infant is younger than six months."
        },
        {
          "k": "A",
          "v": "All breastmilk: full or nearly full breastfeeding"
        }
      ],
      "n": 16,
      "note": "Feeding gaps no longer than 4 hours by day, 6 by night. All three must hold. One fails, LAM fails.",
      "title": "LAM and the 3 A's",
      "id": "lam",
      "categoryId": "contraception",
      "objectiveIds": [
        "barrier-fertility-lam",
        "postpartum-discharge"
      ],
      "weekIds": [
        "august-4",
        "week-7"
      ],
      "topicIds": [
        "contraception",
        "normal-postpartum"
      ],
      "context": "All three criteria must remain true, including feeding gaps no longer than four hours by day and six hours by night.",
      "references": [
        {
          "title": "CDC: lactational amenorrhea method",
          "url": "https://www.cdc.gov/contraception/hcp/usmec/lactational-amenorrhea-method.html"
        }
      ],
      "reviewNote": "Clinical clarification",
      "image": {
        "file": "posters/ob/mnemonics/16-lam.png",
        "width": 1200,
        "height": 792
      }
    },
    {
      "hook": "IUD years, longest to shortest",
      "items": [
        {
          "k": "10",
          "v": "Paragard (copper), up to 10 years"
        },
        {
          "k": "8",
          "v": "Mirena and Liletta, up to 8 years"
        },
        {
          "k": "5",
          "v": "Kyleena, 5 years"
        },
        {
          "k": "3",
          "v": "Skyla, 3 years"
        }
      ],
      "n": 17,
      "note": "Nexplanon, the implant, is up to 5 years. Document the device, insertion date, and replacement plan.",
      "title": "10, 8, 5, 3",
      "id": "iud-years",
      "categoryId": "contraception",
      "objectiveIds": [
        "iud-implant-care"
      ],
      "weekIds": [
        "august-4"
      ],
      "topicIds": [
        "contraception"
      ],
      "references": [],
      "image": {
        "file": "posters/ob/mnemonics/17-iud-years.png",
        "width": 1200,
        "height": 866
      }
    },
    {
      "hook": "Diagnosing bacterial vaginosis",
      "items": [
        {
          "k": "1",
          "v": "Thin homogeneous discharge"
        },
        {
          "k": "2",
          "v": "Vaginal pH over 4.5"
        },
        {
          "k": "3",
          "v": "Positive whiff (amine) test"
        },
        {
          "k": "4",
          "v": "Clue cells on microscopy"
        }
      ],
      "n": 18,
      "note": "Three of the four makes the clinical diagnosis. Lab testing can also be used.",
      "title": "Amsel: 3 of 4",
      "id": "amsel",
      "categoryId": "stis",
      "objectiveIds": [
        "sti-assessment-discharge"
      ],
      "weekIds": [
        "august-4"
      ],
      "topicIds": [
        "stis"
      ],
      "references": [],
      "image": {
        "file": "posters/ob/mnemonics/18-amsel.png",
        "width": 1200,
        "height": 830
      }
    },
    {
      "hook": "The most-tested OB contrast pair",
      "items": [
        {
          "k": "Previa",
          "v": "Classically painless bright-red bleeding with a soft uterus; placenta covers the cervical opening."
        },
        {
          "k": "Abruption",
          "v": "Often pain, uterine tenderness/firmness and possible bleeding; placenta separates early and blood may be concealed."
        }
      ],
      "n": 19,
      "note": "Patterns overlap: pain, blood color or visible amount cannot establish or exclude either diagnosis. No digital vaginal examination before previa is excluded. Assess maternal perfusion and fetal status urgently; abruption can cause shock or DIC.",
      "title": "Painless Previa, Painful Abruption",
      "id": "previa-abruption",
      "categoryId": "pregnancy-complications",
      "objectiveIds": [
        "placental-bleeding",
        "placental-emergency-response"
      ],
      "weekIds": [
        "week-3",
        "week-6"
      ],
      "topicIds": [
        "labor-emergencies"
      ],
      "references": [],
      "reviewNote": "Clinical clarification"
    },
    {
      "hook": "Check before you give it and while it runs",
      "items": [
        {
          "k": "R",
          "v": "Respirations: rate and effort"
        },
        {
          "k": "R",
          "v": "Reflexes: deep tendon reflexes"
        },
        {
          "k": "R",
          "v": "Renal: urine output"
        }
      ],
      "n": 20,
      "note": "Absent/decreasing reflexes, respiratory depression or oliguria are concerning; common escalation values include respirations <12/min or urine <25–30 mL/hour, with local hold parameters. For suspected toxicity: stop magnesium, call the emergency/obstetric team, support breathing and prepare prescribed calcium gluconate. Do not wait for a laboratory result or give an antidote without the actual order/protocol.",
      "title": "Magnesium and the 3 R's",
      "id": "magnesium-3rs",
      "categoryId": "pregnancy-complications",
      "objectiveIds": [
        "eclampsia-magnesium-hellp"
      ],
      "weekIds": [
        "week-3"
      ],
      "topicIds": [
        "pregnancy-complications"
      ],
      "references": [],
      "reviewNote": "Clinical clarification"
    },
    {
      "hook": "Two blood pressure lines in preeclampsia",
      "items": [
        {
          "k": "140 or 90",
          "v": "Hypertension threshold: systolic ≥140 OR diastolic ≥90 mm Hg on appropriate repeat measurements."
        },
        {
          "k": "160 or 110",
          "v": "Severe-range BP: systolic ≥160 OR diastolic ≥110 mm Hg needs immediate escalation, prompt confirmation and timely prescribed treatment."
        }
      ],
      "n": 21,
      "note": "BP alone does not diagnose preeclampsia. New hypertension after 20 weeks plus proteinuria OR qualifying organ dysfunction supports the diagnosis; chronic hypertension can have superimposed disease. Persistent severe BP is commonly confirmed within about 15 minutes and treated within 30–60 minutes of confirmation; do not wait hours or for proteinuria.",
      "title": "140/90 Is the Door, 160/110 Is the Alarm",
      "id": "preeclampsia-bp",
      "categoryId": "pregnancy-complications",
      "objectiveIds": [
        "hypertensive-disorders"
      ],
      "weekIds": [
        "week-3"
      ],
      "topicIds": [
        "pregnancy-complications"
      ],
      "references": [
        {
          "title": "ACOG: preeclampsia and high blood pressure",
          "url": "https://www.acog.org/womens-health/faqs/preeclampsia-and-high-blood-pressure-during-pregnancy"
        }
      ],
      "reviewNote": "Clinical clarification"
    },
    {
      "hook": "Infections that can reach the fetus",
      "items": [
        {
          "k": "T",
          "v": "Toxoplasmosis: cook meat, wash produce, let someone else handle cat litter."
        },
        {
          "k": "O",
          "v": "Other, syphilis in these notes: transplacental infection, treat with penicillin."
        },
        {
          "k": "R",
          "v": "Rubella: early infection can cause heart, eye, and hearing problems. MMR before pregnancy or postpartum, never during."
        },
        {
          "k": "C",
          "v": "CMV: congenital infection can affect hearing, growth or neurologic development. When suspected, collect appropriate saliva/urine testing within 21 days."
        },
        {
          "k": "H",
          "v": "Herpes simplex: most neonatal infection is acquired during birth. Genital lesions or prodrome at labor generally indicate cesarean birth."
        }
      ],
      "n": 22,
      "note": "TORCH is a reminder of possible congenital and perinatal infections, not a diagnosis by itself.",
      "title": "TORCH",
      "id": "torch",
      "categoryId": "pregnancy-complications",
      "objectiveIds": [
        "rh-abo-infections"
      ],
      "weekIds": [
        "week-3"
      ],
      "topicIds": [],
      "references": [],
      "reviewNote": "Clinical clarification"
    },
    {
      "hook": "Carpenter-Coustan glucose tolerance numbers",
      "items": [
        {
          "k": "95",
          "v": "Fasting"
        },
        {
          "k": "180",
          "v": "1 hour"
        },
        {
          "k": "155",
          "v": "2 hours"
        },
        {
          "k": "140",
          "v": "3 hours"
        }
      ],
      "n": 23,
      "note": "100-gram, 3-hour test. At or above a threshold is abnormal; at least two of the four values are needed for a GDM diagnosis. Screen first with the 50-gram, 1-hour challenge at 24 to 28 weeks.",
      "title": "95, 180, 155, 140",
      "id": "ogtt-numbers",
      "categoryId": "pregnancy-complications",
      "objectiveIds": [
        "diabetes-assessment",
        "prenatal-assessment"
      ],
      "weekIds": [
        "week-3",
        "week-2"
      ],
      "topicIds": [
        "pregnancy-complications",
        "antepartum-prenatal"
      ],
      "context": "All four thresholds are in mg/dL. These are diagnostic 100-g test values, not glucose treatment targets or the 50-g screen cutoffs.",
      "references": [],
      "reviewNote": "Clinical clarification",
      "image": {
        "file": "posters/ob/mnemonics/23-ogtt-numbers.png",
        "width": 1200,
        "height": 902
      }
    },
    {
      "hook": "Recall the shoulder-dystocia team response",
      "items": [
        {
          "k": "H",
          "v": "Help: call for help, start timing from birth of the head"
        },
        {
          "k": "E",
          "v": "Evaluate for episiotomy"
        },
        {
          "k": "L",
          "v": "Legs: McRoberts, thighs sharply flexed toward the abdomen"
        },
        {
          "k": "P",
          "v": "Pressure: directed suprapubic pressure above the pubic bone."
        },
        {
          "k": "E",
          "v": "Enter: internal rotation, the Woods screw"
        },
        {
          "k": "R",
          "v": "Remove the posterior arm"
        },
        {
          "k": "R",
          "v": "Roll to all-fours, the Gaskin maneuver"
        }
      ],
      "n": 24,
      "note": "A team memory aid, not a mandatory order or a bedside training protocol. Call for help immediately and assist within training. Episiotomy may create room for internal maneuvers but does not relieve the bony obstruction. Internal rotation, posterior-arm delivery and all-fours positioning are clinician-directed options. Never fundal pressure or forceful head/neck traction.",
      "title": "HELPERR",
      "id": "helperr",
      "categoryId": "labor-birth",
      "objectiveIds": [
        "shoulder-dystocia"
      ],
      "weekIds": [
        "week-6"
      ],
      "topicIds": [
        "labor-emergencies"
      ],
      "references": [
        {
          "title": "RCOG: shoulder dystocia",
          "url": "https://www.rcog.org.uk/for-the-public/browse-our-patient-information/shoulder-dystocia-green-top-guideline-no-42/"
        }
      ],
      "reviewNote": "Clinical clarification"
    },
    {
      "hook": "Five forces that decide how labor goes",
      "items": [
        {
          "k": "Passageway",
          "v": "Bony pelvis and soft tissues, including cervix and vagina"
        },
        {
          "k": "Passenger",
          "v": "Fetus and placenta: size, flexion, presentation"
        },
        {
          "k": "Powers",
          "v": "Contractions thin and dilate the cervix; bearing down moves the baby in the second stage"
        },
        {
          "k": "Position",
          "v": "Maternal position shapes the fit and the progress"
        },
        {
          "k": "Psychological",
          "v": "Response: fear, support, and coping change the experience and the outcome"
        }
      ],
      "n": 25,
      "note": "A pelvis label alone does not guarantee the birth route. All five P's work together.",
      "title": "The 5 P's of Labor",
      "id": "five-ps",
      "categoryId": "labor-birth",
      "objectiveIds": [
        "normal-labor-process",
        "complicated-labor"
      ],
      "weekIds": [
        "week-5",
        "week-6"
      ],
      "topicIds": [],
      "references": [],
      "image": {
        "file": "posters/ob/mnemonics/25-five-ps.png",
        "width": 1200,
        "height": 968
      }
    },
    {
      "hook": "Perineal laceration degrees, skin to rectum",
      "items": [
        {
          "k": "1st",
          "v": "Skin and superficial tissue"
        },
        {
          "k": "2nd",
          "v": "Perineal muscles"
        },
        {
          "k": "3rd",
          "v": "Anal sphincter"
        },
        {
          "k": "4th",
          "v": "Rectal mucosa"
        }
      ],
      "n": 26,
      "note": "The degrees describe injury depth, not a pain scale. Deeper tears need more repair and more recovery support.",
      "title": "1, 2, 3, 4: How Deep?",
      "id": "laceration-degrees",
      "categoryId": "labor-birth",
      "objectiveIds": [
        "assisted-cesarean-birth"
      ],
      "weekIds": [
        "week-6"
      ],
      "topicIds": [],
      "references": [],
      "image": {
        "file": "posters/ob/mnemonics/26-laceration-degrees.png",
        "width": 1200,
        "height": 866
      }
    },
    {
      "hook": "Four cues of suspected intraamniotic infection",
      "items": [
        {
          "k": "Fever",
          "v": "Maternal fever"
        },
        {
          "k": "Fast",
          "v": "Fetal tachycardia"
        },
        {
          "k": "Tender",
          "v": "Uterine tenderness"
        },
        {
          "k": "Foul",
          "v": "Foul-smelling amniotic fluid"
        }
      ],
      "n": 27,
      "note": "Suspected intraamniotic infection means recognize and escalate. Mother and baby both need assessment and the team needs to know.",
      "title": "Fever, Fast Heart, Tender Uterus, Foul Fluid",
      "id": "intraamniotic-infection",
      "categoryId": "labor-birth",
      "objectiveIds": [
        "complicated-labor",
        "pregnancy-prom-preterm"
      ],
      "weekIds": [
        "week-6",
        "week-3"
      ],
      "topicIds": [],
      "context": "Recognition cues, not a checklist requiring all four findings. Escalate a concerning pattern promptly; the clinical team determines diagnosis and treatment.",
      "references": [],
      "reviewNote": "Clinical clarification",
      "image": {
        "file": "posters/ob/mnemonics/27-intraamniotic-infection.png",
        "width": 1200,
        "height": 934
      }
    },
    {
      "hook": "Three cervical signs of pregnancy",
      "items": [
        {
          "k": "Goodell",
          "v": "Soft cervix"
        },
        {
          "k": "Chadwick",
          "v": "Bluish-purple cervix or vaginal tissue, from increased blood flow"
        },
        {
          "k": "Hegar",
          "v": "Soft lower uterine segment"
        }
      ],
      "n": 28,
      "note": "These are probable signs of pregnancy, not proof by themselves. They suggest pregnancy; they do not confirm it.",
      "title": "Goodell, Chadwick, Hegar",
      "id": "cervical-signs",
      "categoryId": "antepartum",
      "objectiveIds": [
        "pregnancy-adaptations",
        "pregnancy-signs"
      ],
      "weekIds": [
        "week-1",
        "week-2"
      ],
      "topicIds": [
        "antepartum-prenatal"
      ],
      "references": [],
      "image": {
        "file": "posters/ob/mnemonics/28-cervical-signs.png",
        "width": 1200,
        "height": 824
      }
    },
    {
      "hook": "Three levels of pregnancy evidence",
      "items": [
        {
          "k": "Presumptive",
          "v": "The patient's symptoms: missed period, nausea, breast tenderness"
        },
        {
          "k": "Probable",
          "v": "Findings that suggest pregnancy: cervical signs, positive pregnancy test"
        },
        {
          "k": "Positive",
          "v": "Direct evidence of an embryo or fetus: fetal heartbeat, ultrasound, fetal movement felt by the examiner"
        }
      ],
      "n": 29,
      "note": "Only positive signs confirm pregnancy. Presumptive and probable signs point toward it.",
      "title": "Presumptive, Probable, Positive",
      "id": "pregnancy-signs",
      "categoryId": "antepartum",
      "objectiveIds": [
        "pregnancy-signs"
      ],
      "weekIds": [
        "week-2"
      ],
      "topicIds": [
        "antepartum-prenatal"
      ],
      "references": [],
      "image": {
        "file": "posters/ob/mnemonics/29-pregnancy-signs.png",
        "width": 1200,
        "height": 852
      }
    }
  ],
  "existing": [
    {
      "title": "VEAL CHOP",
      "categoryId": "labor-birth",
      "objectiveIds": [
        "fhr-patterns",
        "fhr-priorities",
        "fhr-strip-assessment"
      ],
      "weekIds": [
        "week-5"
      ],
      "topicIds": [
        "fetal-monitoring"
      ]
    },
    {
      "title": "BUBBLE-HE",
      "categoryId": "postpartum",
      "objectiveIds": [
        "postpartum-assessment"
      ],
      "weekIds": [
        "week-7"
      ],
      "topicIds": [
        "normal-postpartum"
      ]
    },
    {
      "title": "4 Ts",
      "categoryId": "postpartum",
      "objectiveIds": [
        "postpartum-hemorrhage-assessment",
        "postpartum-hemorrhage-management"
      ],
      "weekIds": [
        "week-7"
      ],
      "topicIds": [
        "postpartum-complications"
      ]
    },
    {
      "title": "ACHES",
      "categoryId": "contraception",
      "objectiveIds": [
        "hormonal-contraception-safety"
      ],
      "weekIds": [
        "august-4"
      ],
      "topicIds": [
        "contraception"
      ]
    },
    {
      "title": "APGAR",
      "categoryId": "newborn",
      "objectiveIds": [
        "newborn-transition-apgar"
      ],
      "weekIds": [
        "week-9",
        "week-10"
      ],
      "topicIds": [
        "normal-newborn"
      ]
    },
    {
      "title": "GTPAL",
      "categoryId": "antepartum",
      "objectiveIds": [
        "obstetric-history-gtpal",
        "pregnancy-adaptations"
      ],
      "weekIds": [
        "week-2",
        "week-1"
      ],
      "topicIds": [
        "antepartum-prenatal"
      ]
    },
    {
      "title": "HELLP",
      "categoryId": "pregnancy-complications",
      "objectiveIds": [
        "eclampsia-magnesium-hellp"
      ],
      "weekIds": [
        "week-3"
      ],
      "topicIds": [
        "pregnancy-complications"
      ]
    }
  ]
};
