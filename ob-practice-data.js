/* Supplied OB exams; structured extraction and reviewed edits: scripts/prepare-ob-practice.py. */
const obPracticeExams = [
  {
    "id": "exam-1",
    "title": "Practice exam 1",
    "description": "Core review",
    "questions": [
      {
        "id": "1",
        "label": "Question 1",
        "category": "Normal Postpartum Care",
        "prompt": "A nurse is assessing a client who is 6 hr postpartum following a vaginal birth. The nurse should expect the fundus to be located in which of the following positions?",
        "rationale": "The fundus returns to the level of the umbilicus by 6–12 hr postpartum.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "2 cm above the umbilicus"
          },
          {
            "id": "B",
            "text": "At the level of the umbilicus"
          },
          {
            "id": "C",
            "text": "2 cm below the symphysis pubis"
          },
          {
            "id": "D",
            "text": "Non-palpable in the pelvis"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "2",
        "label": "Question 2",
        "category": "Normal Postpartum Care",
        "prompt": "A nurse is caring for a client who is 3 days postpartum. The nurse notes the client's lochia is pink to brownish in color. The nurse should document this finding as which of the following?",
        "rationale": "Lochia serosa is pink to brownish and occurs approximately days 3–10.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Lochia rubra"
          },
          {
            "id": "B",
            "text": "Lochia serosa"
          },
          {
            "id": "C",
            "text": "Lochia alba"
          },
          {
            "id": "D",
            "text": "Lochia purulenta"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "3",
        "label": "Question 3",
        "category": "Normal Postpartum Care",
        "prompt": "A nurse is reviewing vital signs for a client who is 12 hr postpartum. Which of the following findings should the nurse identify as an expected postpartum adaptation?",
        "rationale": "WBC of 25,000–30,000/mm3 is expected (non-pathologic leukocytosis). Sustained fever ≥38° C, sustained pulse of 110/min beyond the immediate postpartum period, decreased BP, and RR 28/min are NOT expected findings. Correct SATA selection: WBC count of 27,000/mm3.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Temperature of 38° C (100.4° F)"
          },
          {
            "id": "B",
            "text": "Pulse of 110/min"
          },
          {
            "id": "C",
            "text": "WBC count of 27,000/mm3"
          },
          {
            "id": "D",
            "text": "Blood pressure decreased from baseline"
          },
          {
            "id": "E",
            "text": "Respiratory rate of 28/min"
          }
        ],
        "multiple": true,
        "correct": [
          "C"
        ],
        "format": "Select all that apply"
      },
      {
        "id": "4",
        "label": "Question 4",
        "category": "Normal Postpartum Care",
        "prompt": "A nurse is teaching a postpartum client about expected changes in the urinary system. Which of the following statements by the client indicates understanding?",
        "rationale": "Decreased bladder sensation postpartum means the client may not feel the urge to void even when full.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "\"My bladder will have decreased capacity for the first week.\""
          },
          {
            "id": "B",
            "text": "\"I should expect to void less than usual for the first 3 days.\""
          },
          {
            "id": "C",
            "text": "\"I may not feel the urge to void even when my bladder is full.\""
          },
          {
            "id": "D",
            "text": "\"I will likely have less urine output than I did during pregnancy.\""
          }
        ],
        "multiple": false,
        "correct": [
          "C"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "5",
        "label": "Question 5",
        "category": "Normal Postpartum Care",
        "prompt": "A nurse is caring for a client who is 2 days postpartum and reports that her breasts are firm, warm, and diffusely tender bilaterally. The client's temperature is 37.2° C (99° F). The nurse should identify this finding as which of the following?",
        "rationale": "Bilateral firm, warm, tender breasts without high fever = expected engorgement, not mastitis (mastitis is typically unilateral with high fever).",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Mastitis"
          },
          {
            "id": "B",
            "text": "Expected breast engorgement"
          },
          {
            "id": "C",
            "text": "Plugged milk duct"
          },
          {
            "id": "D",
            "text": "Postpartum breast infection requiring antibiotics"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "6",
        "label": "Question 6",
        "category": "Normal Postpartum Care",
        "prompt": "A nurse is completing a BUBBLEHE assessment on a client who is 1 day postpartum. Which of the following findings should the nurse document as expected?",
        "rationale": "Uterus at the umbilicus, midline, firm is expected around 12–24 hr postpartum.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Uterus 1 cm above the umbilicus, midline, boggy"
          },
          {
            "id": "B",
            "text": "Uterus 1 cm below the umbilicus, deviated to the right, firm"
          },
          {
            "id": "C",
            "text": "Uterus at the umbilicus, midline, firm"
          },
          {
            "id": "D",
            "text": "Uterus 3 cm above the umbilicus, midline, firm"
          }
        ],
        "multiple": false,
        "correct": [
          "C"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "7",
        "label": "Question 7",
        "category": "Normal Postpartum Care",
        "prompt": "A client's fundus is palpated 2 cm below the umbilicus on postpartum day 2. The nurse should expect the fundus to descend approximately ______ cm per 24-hour period if involution is progressing normally.",
        "rationale": "1 to 2 cm per 24 hours.",
        "rationaleSource": "provided",
        "type": "text",
        "format": "Fill in the blank",
        "fields": [
          {
            "label": "Descent (cm per day)",
            "answer": "1–2",
            "accepted": [
              "1–2",
              "1",
              "2",
              "1 to 2",
              "1-2"
            ],
            "unit": "cm"
          }
        ]
      },
      {
        "id": "8",
        "label": "Question 8",
        "category": "Normal Postpartum Care",
        "prompt": "A nurse is providing discharge teaching to a postpartum client regarding perineal care. Which of the following instructions should the nurse include?",
        "rationale": "Peri-bottle should be used front to back.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "\"Use the peri-bottle with warm water directed front to back.\""
          },
          {
            "id": "B",
            "text": "\"Apply the ice pack directly to the perineum without a barrier.\""
          },
          {
            "id": "C",
            "text": "\"Take the sitz bath only once every 3 days.\""
          },
          {
            "id": "D",
            "text": "\"Wipe from back to front after each void.\""
          }
        ],
        "multiple": false,
        "correct": [
          "A"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "9",
        "label": "Question 9",
        "category": "Normal Postpartum Care",
        "prompt": "A nurse is caring for a client who is 4 hr postpartum following an epidural birth. The client has not voided since delivery. Which of the following actions should the nurse take first?",
        "rationale": "Assess/palpate the bladder first before any invasive intervention.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Insert a straight catheter immediately."
          },
          {
            "id": "B",
            "text": "Palpate the bladder for distention."
          },
          {
            "id": "C",
            "text": "Encourage the client to ambulate to the bathroom."
          },
          {
            "id": "D",
            "text": "Document the finding and reassess in 4 hr."
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "10",
        "label": "Question 10",
        "category": "Normal Postpartum Care",
        "prompt": "A nurse is assessing a client 6 weeks postpartum who is exclusively breastfeeding. Which of the following statements by the client requires follow-up?",
        "rationale": "Amenorrhea at 6 weeks while breastfeeding is expected. LAM requires an infant younger than 6 months, no return of menses, and full or nearly full breastfeeding; confirm all criteria and discuss contraceptive preferences.",
        "rationaleSource": "reviewed",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "\"I haven't had a period since my baby was born.\""
          },
          {
            "id": "B",
            "text": "\"I am using breastfeeding as my only form of birth control.\""
          },
          {
            "id": "C",
            "text": "\"My provider told me I should still use a backup method.\""
          },
          {
            "id": "D",
            "text": "\"I know exclusive breastfeeding isn't guaranteed protection past 6 months.\""
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice",
        "reviewNote": "The supplied key listed A. The statement needing clarification is B: breastfeeding alone is not enough without all LAM criteria.",
        "references": [
          {
            "title": "CDC: lactational amenorrhea",
            "url": "https://www.cdc.gov/contraception/hcp/usspr/combined-hormonal-contraceptives.html"
          }
        ]
      },
      {
        "id": "11",
        "label": "Question 11",
        "category": "Normal Postpartum Care",
        "prompt": "A nurse is caring for a client who delivered vaginally 8 hr ago and reports severe perineal pain rated 8 out of 10, unrelieved by ice and ibuprofen, along with a sensation of pressure. On exam, the nurse notes an area of bluish, tense swelling to the right of the episiotomy. The nurse should suspect which of the following complications?",
        "rationale": "Bluish, tense swelling with severe unrelieved pain suggests a perineal hematoma.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Normal postpartum edema"
          },
          {
            "id": "B",
            "text": "Perineal hematoma"
          },
          {
            "id": "C",
            "text": "Retained placental fragment"
          },
          {
            "id": "D",
            "text": "Uterine atony"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "12",
        "label": "Question 12",
        "category": "Normal Postpartum Care",
        "prompt": "A nurse is teaching a client about the taking-hold phase of Reva Rubin's maternal adaptation theory. Which of the following client behaviors is consistent with this phase?",
        "rationale": "Taking-hold phase includes the woman beginning to independently perform newborn care.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "The client asks the nurse to retell the story of the birth repeatedly."
          },
          {
            "id": "B",
            "text": "The client independently begins performing infant care with some assistance."
          },
          {
            "id": "C",
            "text": "The client reestablishes her role within family relationships."
          },
          {
            "id": "D",
            "text": "The client is focused primarily on her own physical needs and recovery."
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "13",
        "label": "Question 13",
        "category": "Postpartum Complications",
        "prompt": "A nurse is caring for a client who is 2 hr postpartum following a vaginal birth. The client's pad is saturated in 10 minutes, and the fundus is boggy and difficult to locate. Which of the following actions should the nurse take first?",
        "rationale": "Fundal massage is the immediate first action for a boggy uterus.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Notify the provider immediately."
          },
          {
            "id": "B",
            "text": "Insert an indwelling urinary catheter."
          },
          {
            "id": "C",
            "text": "Perform fundal massage."
          },
          {
            "id": "D",
            "text": "Prepare to administer a blood transfusion."
          }
        ],
        "multiple": false,
        "correct": [
          "C"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "14",
        "label": "Question 14",
        "category": "Postpartum Complications",
        "prompt": "A nurse is caring for a client who is 5 days postpartum and reports fever, chills, and foul-smelling lochia. The client's temperature is 38.9° C (102° F). The nurse should suspect which of the following complications?",
        "rationale": "Fever, chills, and foul-smelling lochia are classic for endometritis.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Mastitis"
          },
          {
            "id": "B",
            "text": "Endometritis"
          },
          {
            "id": "C",
            "text": "Deep vein thrombosis"
          },
          {
            "id": "D",
            "text": "Subinvolution of the uterus"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "15",
        "label": "Question 15",
        "category": "Postpartum Complications",
        "prompt": "A nurse is assessing a client who is 4 weeks postpartum for subinvolution. Which of the following findings should the nurse expect?",
        "rationale": "Subinvolution presents with a boggy, enlarged uterus and persistent lochia beyond the expected timeframe.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Fundus firm and non-palpable"
          },
          {
            "id": "B",
            "text": "Continued presence of lochia with a boggy, enlarged uterus"
          },
          {
            "id": "C",
            "text": "Fundus 2 cm below the symphysis pubis and firm"
          },
          {
            "id": "D",
            "text": "Absence of lochia with cramping"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "16",
        "label": "Question 16",
        "category": "Postpartum Complications",
        "prompt": "A nurse is caring for a client who is 3 days postpartum and reports unilateral calf pain, swelling, and warmth. Which of the following actions should the nurse take?",
        "rationale": "Notify the provider; do NOT massage a leg suspected of DVT (risk of dislodging clot). Homan's sign is not a reliable test.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Perform Homan's sign to confirm diagnosis."
          },
          {
            "id": "B",
            "text": "Massage the affected leg to promote circulation."
          },
          {
            "id": "C",
            "text": "Notify the provider and avoid massaging the leg."
          },
          {
            "id": "D",
            "text": "Apply a warm compress and ambulate the client immediately."
          }
        ],
        "multiple": false,
        "correct": [
          "C"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "17",
        "label": "Question 17",
        "category": "Postpartum Complications",
        "prompt": "A nurse is caring for a client 6 hr postpartum following an uncomplicated vaginal birth. Which of the following findings places this client at the greatest risk for postpartum hemorrhage?",
        "rationale": "Grand multiparity, precipitous labor, and retained placental fragments are risk factors for PPH.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Grand multiparity"
          },
          {
            "id": "B",
            "text": "Precipitous labor"
          },
          {
            "id": "C",
            "text": "First-degree perineal laceration"
          },
          {
            "id": "D",
            "text": "Retained placental fragments"
          },
          {
            "id": "E",
            "text": "Singleton term pregnancy"
          }
        ],
        "multiple": true,
        "correct": [
          "A",
          "B",
          "D"
        ],
        "format": "Select all that apply"
      },
      {
        "id": "18",
        "label": "Question 18",
        "category": "Postpartum Complications",
        "prompt": "A nurse is caring for a client who is postpartum day 1 with new onset of tearfulness, feeling overwhelmed, and mild anxiety that improves throughout the day. The nurse should identify this as which of the following?",
        "rationale": "Transient mood lability resolving within the day reflects expected postpartum blues.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Postpartum psychosis requiring immediate intervention"
          },
          {
            "id": "B",
            "text": "Postpartum major depressive disorder"
          },
          {
            "id": "C",
            "text": "Expected postpartum blues"
          },
          {
            "id": "D",
            "text": "An adjustment disorder requiring psychiatric hospitalization"
          }
        ],
        "multiple": false,
        "correct": [
          "C"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "19",
        "label": "Question 19",
        "category": "Normal Newborn Assessment & Care",
        "prompt": "A nurse is assessing a newborn who is 1 hr old. Which of the following findings should the nurse identify as requiring immediate follow-up?",
        "rationale": "Sustained tachypnea with grunting suggests respiratory distress requiring follow-up.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Acrocyanosis of the hands and feet"
          },
          {
            "id": "B",
            "text": "Respiratory rate of 68/min with mild grunting"
          },
          {
            "id": "C",
            "text": "Heart rate of 150/min"
          },
          {
            "id": "D",
            "text": "Axillary temperature of 36.8° C (98.2° F)"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "20",
        "label": "Question 20",
        "category": "Normal Newborn Assessment & Care",
        "prompt": "A nurse is completing a gestational age assessment using the Ballard scoring tool. The nurse should understand that a score of 0 corresponds to which of the following gestational ages?",
        "rationale": "A Ballard score of 0 corresponds to 24 weeks (viability).",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "20 weeks"
          },
          {
            "id": "B",
            "text": "24 weeks"
          },
          {
            "id": "C",
            "text": "28 weeks"
          },
          {
            "id": "D",
            "text": "32 weeks"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "21",
        "label": "Question 21",
        "category": "Normal Newborn Assessment & Care",
        "prompt": "A nurse is assessing a newborn's reflexes. Which of the following findings should the nurse expect to persist until approximately 12 months of age?",
        "rationale": "Babinski reflex may persist up to 12 months.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Moro reflex"
          },
          {
            "id": "B",
            "text": "Babinski reflex"
          },
          {
            "id": "C",
            "text": "Rooting reflex"
          },
          {
            "id": "D",
            "text": "Stepping reflex"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "22",
        "label": "Question 22",
        "category": "Normal Newborn Assessment & Care",
        "prompt": "A nurse is caring for a newborn who is 2 hr old and notes a soft, edematous swelling of the scalp that crosses the suture lines. The nurse should document this finding as which of the following?",
        "rationale": "Caput succedaneum is soft edema that crosses suture lines (unlike cephalohematoma).",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Cephalohematoma"
          },
          {
            "id": "B",
            "text": "Caput succedaneum"
          },
          {
            "id": "C",
            "text": "Molding"
          },
          {
            "id": "D",
            "text": "Subgaleal hemorrhage"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "23",
        "label": "Question 23",
        "category": "Normal Newborn Assessment & Care",
        "prompt": "A nurse is providing discharge teaching to new parents regarding umbilical cord care. Which of the following statements by the parent indicates a need for further teaching?",
        "rationale": "Alcohol/antiseptic application with every diaper change is outdated; dry cord care is preferred.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "\"I will give the baby a sponge bath until the cord falls off.\""
          },
          {
            "id": "B",
            "text": "\"I should expect the cord to fall off within about 10 days.\""
          },
          {
            "id": "C",
            "text": "\"I will apply alcohol to the cord with every diaper change.\""
          },
          {
            "id": "D",
            "text": "\"I should call the provider if I notice foul-smelling drainage.\""
          }
        ],
        "multiple": false,
        "correct": [
          "C"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "24",
        "label": "Question 24",
        "category": "Normal Newborn Assessment & Care",
        "prompt": "A nurse is assessing a newborn who is 24 hr old. Which of the following findings requires immediate follow-up?",
        "rationale": "Assess visible jaundice at this age and obtain an age-specific bilirubin measurement. A minimum of one wet diaper in the first day is expected, so that finding alone does not establish dehydration.",
        "rationaleSource": "reviewed",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Jaundice noted on the face and chest"
          },
          {
            "id": "B",
            "text": "Passage of a greenish-black stool"
          },
          {
            "id": "C",
            "text": "One wet diaper since birth"
          },
          {
            "id": "D",
            "text": "Axillary temperature of 36.6° C (97.9° F)"
          }
        ],
        "multiple": false,
        "correct": [
          "A"
        ],
        "format": "Multiple choice",
        "reviewNote": "The supplied key listed C. One wet diaper on day 1 can be expected; early jaundice needs bilirubin assessment.",
        "references": [
          {
            "title": "AAP: newborn assessment and intake",
            "url": "https://www.aap.org/en/patient-care/newborn-infant-and-early-childhood-nutrition/newborn-and-infant-health-assessment-and-promotion/newborn-visit/"
          },
          {
            "title": "AAP: jaundice in newborns",
            "url": "https://www.healthychildren.org/English/ages-stages/baby/Pages/jaundice.aspx"
          }
        ]
      },
      {
        "id": "25",
        "label": "Question 25",
        "category": "Normal Newborn Assessment & Care",
        "prompt": "A nurse is administering vitamin K to a newborn shortly after birth. The nurse should administer the injection into the ______ muscle.",
        "rationale": "Vastus lateralis (anterior thigh).",
        "rationaleSource": "provided",
        "type": "text",
        "format": "Fill in the blank",
        "fields": [
          {
            "label": "Muscle",
            "answer": "Vastus lateralis",
            "accepted": [
              "Vastus lateralis",
              "vastus lateralis muscle"
            ],
            "unit": ""
          }
        ]
      },
      {
        "id": "26",
        "label": "Question 26",
        "category": "Normal Newborn Assessment & Care",
        "prompt": "A nurse is preparing to administer eye prophylaxis to a newborn. Which of the following statements accurately describes the purpose of this medication?",
        "rationale": "Routine erythromycin eye prophylaxis targets gonococcal ophthalmia. It does not reliably prevent chlamydial conjunctivitis; maternal screening and treatment are essential.",
        "rationaleSource": "reviewed",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "It prevents hemorrhagic disease of the newborn."
          },
          {
            "id": "B",
            "text": "It prevents ophthalmia neonatorum caused by maternal STIs."
          },
          {
            "id": "C",
            "text": "It promotes surfactant production in the newborn's lungs."
          },
          {
            "id": "D",
            "text": "It reduces the newborn's risk of hyperbilirubinemia."
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice",
        "reviewNote": "Clarified the organism covered by routine eye prophylaxis.",
        "references": [
          {
            "title": "CDC: chlamydial infections",
            "url": "https://www.cdc.gov/std/treatment-guidelines/chlamydia.htm"
          }
        ]
      },
      {
        "id": "27",
        "label": "Question 27",
        "category": "Newborn Complications / Prematurity",
        "prompt": "A nurse is caring for a newborn of a mother with gestational diabetes. Which of the following findings should the nurse identify as a priority to monitor for in the first 24 hr of life?",
        "rationale": "Infants of diabetic mothers are at high risk for hypoglycemia after birth due to hyperinsulinemia in utero.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Hyperthermia"
          },
          {
            "id": "B",
            "text": "Hypoglycemia"
          },
          {
            "id": "C",
            "text": "Hypernatremia"
          },
          {
            "id": "D",
            "text": "Hyperbilirubinemia only after 48 hr"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "28",
        "label": "Question 28",
        "category": "Newborn Complications / Prematurity",
        "prompt": "A nurse is caring for a preterm newborn born at 30 weeks of gestation. Which of the following findings should the nurse expect related to the newborn's immature thermoregulatory system?",
        "rationale": "Preterm infants have decreased brown fat stores and limited ability to generate heat; they cannot shiver effectively.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Increased subcutaneous fat stores"
          },
          {
            "id": "B",
            "text": "Decreased ability to metabolize brown fat"
          },
          {
            "id": "C",
            "text": "Shivering thermogenesis as the primary heat source"
          },
          {
            "id": "D",
            "text": "Excess vernix providing thermal insulation"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "29",
        "label": "Question 29",
        "category": "Newborn Complications / Prematurity",
        "prompt": "A nurse is caring for a newborn diagnosed with respiratory distress syndrome (RDS). Which of the following findings should the nurse expect?",
        "rationale": "Nasal flaring, expiratory grunting, and substernal retractions are expected with RDS.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Nasal flaring"
          },
          {
            "id": "B",
            "text": "Expiratory grunting"
          },
          {
            "id": "C",
            "text": "Bradypnea"
          },
          {
            "id": "D",
            "text": "Substernal retractions"
          },
          {
            "id": "E",
            "text": "Pink, well-perfused extremities"
          }
        ],
        "multiple": true,
        "correct": [
          "A",
          "B",
          "D"
        ],
        "format": "Select all that apply"
      },
      {
        "id": "30",
        "label": "Question 30",
        "category": "Newborn Complications / Prematurity",
        "prompt": "A nurse is caring for a newborn who is small for gestational age (SGA). Which of the following maternal factors is a known risk factor for this finding?",
        "rationale": "Chronic hypertension with vascular disease is a maternal risk factor for SGA/IUGR.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Gestational diabetes"
          },
          {
            "id": "B",
            "text": "Chronic hypertension"
          },
          {
            "id": "C",
            "text": "Maternal obesity"
          },
          {
            "id": "D",
            "text": "Post-term pregnancy without complications"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "31",
        "label": "Question 31",
        "category": "Newborn Complications / Prematurity",
        "prompt": "A nurse is caring for a newborn receiving phototherapy for hyperbilirubinemia. Which of the following nursing actions is appropriate?",
        "rationale": "Eyes and genitalia must be covered/protected during phototherapy.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Dress the newborn in a onesie to prevent heat loss."
          },
          {
            "id": "B",
            "text": "Cover the newborn's eyes and genitalia during treatment."
          },
          {
            "id": "C",
            "text": "Restrict oral feedings to reduce stool output."
          },
          {
            "id": "D",
            "text": "Discontinue phototherapy once bilirubin begins to trend downward for one reading."
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "32",
        "label": "Question 32",
        "category": "Contraception",
        "prompt": "A nurse is counseling a client who desires a highly effective, reversible contraceptive method and reports a history of migraine with aura. Which of the following methods should the nurse recommend?",
        "rationale": "A progestin-only method (IUD) is preferred; estrogen-containing methods (combined pill, patch, ring) are contraindicated with migraine with aura.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Combined oral contraceptive pill"
          },
          {
            "id": "B",
            "text": "Levonorgestrel intrauterine device"
          },
          {
            "id": "C",
            "text": "Transdermal contraceptive patch"
          },
          {
            "id": "D",
            "text": "Vaginal contraceptive ring"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "33",
        "label": "Question 33",
        "category": "Contraception",
        "prompt": "A nurse is teaching a client about the copper intrauterine device (IUD). Which of the following statements should the nurse include?",
        "rationale": "The copper IUD lasts 10–12 years and is non-hormonal (works via changing uterine pH); it can cause heavier menses, not lighter.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "\"This device releases progestin to thicken your cervical mucus.\""
          },
          {
            "id": "B",
            "text": "\"This device can remain in place for up to 10 to 12 years.\""
          },
          {
            "id": "C",
            "text": "\"You should expect your periods to become lighter over time.\""
          },
          {
            "id": "D",
            "text": "\"This device is not recommended for women who have not had children.\""
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "34",
        "label": "Question 34",
        "category": "Contraception",
        "prompt": "A nurse is providing teaching to a client who missed two combined oral contraceptive pills at the start of her pack. Which of the following instructions should the nurse include?",
        "rationale": "Take the most recent missed pill now, discard the older missed pill, resume the pack, and use backup for 7 days. Consider emergency contraception after recent unprotected sex in the first week.",
        "rationaleSource": "reviewed",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "\"Discard the missed pills and resume your normal schedule tomorrow.\""
          },
          {
            "id": "B",
            "text": "Take the most recent missed pill now, discard the other missed pill, continue the pack, and use backup contraception for 7 days."
          },
          {
            "id": "C",
            "text": "\"Stop the pack entirely and restart with your next cycle.\""
          },
          {
            "id": "D",
            "text": "\"No backup method is needed if you remember within 24 hours.\""
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice",
        "reviewNote": "Reworded option B: take the most recent missed pill, rather than both missed pills.",
        "references": [
          {
            "title": "CDC: missed combined pills",
            "url": "https://www.cdc.gov/contraception/media/pdfs/2024/07/recommended-action-late-missed-contraception-508.pdf"
          }
        ]
      },
      {
        "id": "35",
        "label": "Question 35",
        "category": "Contraception",
        "prompt": "A nurse is teaching a client about oral levonorgestrel emergency contraception after unprotected intercourse 60 hours ago. Which of the following statements is accurate?",
        "rationale": "Levonorgestrel emergency contraception acts by delaying or preventing ovulation. It does not end an established pregnancy; taking it sooner improves effectiveness.",
        "rationaleSource": "reviewed",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "\"This medication will terminate an existing pregnancy.\""
          },
          {
            "id": "B",
            "text": "This medication works by delaying or preventing ovulation."
          },
          {
            "id": "C",
            "text": "\"This medication is most effective the closer you are to 72 hours.\""
          },
          {
            "id": "D",
            "text": "\"This medication requires a prescription and cannot be purchased over the counter.\""
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice",
        "reviewNote": "Removed the outdated claim that oral levonorgestrel prevents implantation.",
        "references": [
          {
            "title": "FDA: levonorgestrel emergency contraception",
            "url": "https://www.fda.gov/drugs/postmarket-drug-safety-information-patients-and-providers/plan-b-one-step-15-mg-levonorgestrel-information"
          }
        ]
      },
      {
        "id": "36",
        "label": "Question 36",
        "category": "Contraception",
        "prompt": "A nurse is teaching a client about the progestin-only \"mini-pill.\" Which of the following statements indicates a need for further teaching?",
        "rationale": "Norethindrone must be taken at the same time daily. More than 3 hours late requires backup for 2 days; drospirenone has different missed-pill rules.",
        "rationaleSource": "reviewed",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "I can take this pill several hours late each day without needing backup contraception."
          },
          {
            "id": "B",
            "text": "\"This is a good option for me since I am breastfeeding.\""
          },
          {
            "id": "C",
            "text": "\"I need to take this pill at the same time every day.\""
          },
          {
            "id": "D",
            "text": "\"If I take this pill more than 3 hours late, I need a backup method for 2 days.\""
          }
        ],
        "multiple": false,
        "correct": [
          "A"
        ],
        "format": "Multiple choice",
        "reviewNote": "Specified norethindrone: late-pill rules differ between progestin-only formulations.",
        "references": [
          {
            "title": "CDC: progestin-only pills",
            "url": "https://www.cdc.gov/contraception/hcp/usspr/progestin-only-pills.html"
          }
        ]
      },
      {
        "id": "37",
        "label": "Question 37",
        "category": "Contraception",
        "prompt": "A nurse is counseling a client considering an elective Medicaid-funded bilateral tubal ligation. Which of the following statements should the nurse include?",
        "rationale": "For federally funded Medicaid sterilization, informed consent generally must be signed 30–180 days beforehand. Limited premature-delivery/emergency-surgery exceptions still require at least 72 hours.",
        "rationaleSource": "reviewed",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "\"This procedure can be easily reversed if you change your mind.\""
          },
          {
            "id": "B",
            "text": "\"You must sign consent at least 30 days prior to the scheduled procedure.\""
          },
          {
            "id": "C",
            "text": "\"This method carries no increased risk of ectopic pregnancy if it fails.\""
          },
          {
            "id": "D",
            "text": "\"Your menstrual periods will stop completely after this procedure.\""
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice",
        "reviewNote": "Specified the federal Medicaid consent rule; the waiting period is not universal for every payer or procedure.",
        "references": [
          {
            "title": "Federal Medicaid sterilization consent requirements",
            "url": "https://www.ecfr.gov/current/title-42/section-441.253"
          }
        ]
      },
      {
        "id": "38",
        "label": "Question 38",
        "category": "Contraception",
        "prompt": "A nurse is teaching a client about the fertility awareness-based method using basal body temperature (BBT). Which of the following statements indicates understanding?",
        "rationale": "A sustained temperature rise of about 0.4°F indicates ovulation has occurred.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "\"My temperature should be taken at bedtime for the most accurate reading.\""
          },
          {
            "id": "B",
            "text": "\"A rise in temperature of about 0.4° F indicates that ovulation has occurred.\""
          },
          {
            "id": "C",
            "text": "\"I should expect my temperature to drop after ovulation occurs.\""
          },
          {
            "id": "D",
            "text": "\"This method is most reliable for women with irregular cycles.\""
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "39",
        "label": "Question 39",
        "category": "Contraception",
        "prompt": "A client who received the levonorgestrel IUD 5 years ago is now requesting removal and states she wants to conceive. The nurse should explain that fertility typically returns ______ (immediately / within weeks / after 6 months) following removal.",
        "rationale": "Immediately — fertility returns rapidly after IUD removal.",
        "rationaleSource": "provided",
        "type": "text",
        "format": "Fill in the blank",
        "fields": [
          {
            "label": "Return of fertility",
            "answer": "Immediately",
            "accepted": [
              "Immediately",
              "immediate",
              "right away"
            ],
            "unit": ""
          }
        ]
      },
      {
        "id": "40",
        "label": "Question 40",
        "category": "Sexually Transmitted Infections",
        "prompt": "A nurse is caring for a pregnant client diagnosed with active genital herpes lesions at 39 weeks of gestation. Which of the following actions should the nurse anticipate?",
        "rationale": "Active genital herpes lesions at the time of delivery are an indication for cesarean birth to prevent neonatal transmission.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Plan for a vaginal birth with continuous fetal monitoring."
          },
          {
            "id": "B",
            "text": "Prepare the client for a scheduled cesarean birth."
          },
          {
            "id": "C",
            "text": "Administer a single dose of ceftriaxone prior to delivery."
          },
          {
            "id": "D",
            "text": "Withhold antiviral medications until after delivery."
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "41",
        "label": "Question 41",
        "category": "Sexually Transmitted Infections",
        "prompt": "A nurse is reviewing lab results for a client diagnosed with bacterial vaginosis. Which of the following findings supports this diagnosis?",
        "rationale": "Vaginal pH >4.5, clue cells, and positive whiff test support bacterial vaginosis diagnosis.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Vaginal pH greater than 4.5"
          },
          {
            "id": "B",
            "text": "Clue cells present on wet mount"
          },
          {
            "id": "C",
            "text": "Thick, white, cottage cheese-like discharge"
          },
          {
            "id": "D",
            "text": "Positive whiff test with potassium hydroxide"
          },
          {
            "id": "E",
            "text": "Strawberry-red cervix on exam"
          }
        ],
        "multiple": true,
        "correct": [
          "A",
          "B",
          "D"
        ],
        "format": "Select all that apply"
      },
      {
        "id": "42",
        "label": "Question 42",
        "category": "Sexually Transmitted Infections",
        "prompt": "A nurse is teaching a client diagnosed with chlamydia. Which of the following statements should the nurse include?",
        "rationale": "Pregnant clients need a chlamydia test of cure around 4 weeks after treatment completion. Partners also require treatment.",
        "rationaleSource": "reviewed",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "\"Your sexual partner does not need to be treated unless symptomatic.\""
          },
          {
            "id": "B",
            "text": "You should complete a test of cure approximately 4 weeks after treatment if you are pregnant."
          },
          {
            "id": "C",
            "text": "\"This infection has a low association with pelvic inflammatory disease.\""
          },
          {
            "id": "D",
            "text": "\"Most men and women experience severe symptoms with this infection.\""
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice",
        "reviewNote": "Updated pregnancy test-of-cure timing from 2–3 weeks to approximately 4 weeks.",
        "references": [
          {
            "title": "CDC: chlamydial infections",
            "url": "https://www.cdc.gov/std/treatment-guidelines/chlamydia.htm"
          }
        ]
      },
      {
        "id": "43",
        "label": "Question 43",
        "category": "Sexually Transmitted Infections",
        "prompt": "A nurse is caring for a client diagnosed with primary syphilis. Which of the following findings should the nurse expect?",
        "rationale": "Primary syphilis presents with a painless chancre.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Painless chancre at the site of inoculation"
          },
          {
            "id": "B",
            "text": "Diffuse maculopapular rash on the palms and soles"
          },
          {
            "id": "C",
            "text": "Cardiovascular and neurologic symptoms"
          },
          {
            "id": "D",
            "text": "Latent period with no detectable findings"
          }
        ],
        "multiple": false,
        "correct": [
          "A"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "44",
        "label": "Question 44",
        "category": "Sexually Transmitted Infections",
        "prompt": "A nurse is providing education about HIV and breastfeeding to a client who is HIV-positive and taking antiretroviral therapy (ART) with an undetectable viral load. Which of the following statements should the nurse include?",
        "rationale": "With ART and undetectable viral load, breastfeeding risk is under 1%.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "\"You should not breastfeed under any circumstances.\""
          },
          {
            "id": "B",
            "text": "\"Breastfeeding carries a risk of less than 1% if you continue ART and had an undetectable viral load during pregnancy.\""
          },
          {
            "id": "C",
            "text": "\"Your infant does not need any antiretroviral prophylaxis after birth.\""
          },
          {
            "id": "D",
            "text": "\"Formula feeding is required by law for all HIV-positive mothers.\""
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "45",
        "label": "Question 45",
        "category": "Breast and Formula Feeding",
        "prompt": "A nurse is teaching a client about the differences between foremilk and hindmilk. Which of the following statements should the nurse include?",
        "rationale": "Milk fat content generally increases during a feeding. “Foremilk” and “hindmilk” describe a gradual change, not two sharply separated kinds of milk.",
        "rationaleSource": "reviewed",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "\"Foremilk is higher in fat and calories than hindmilk.\""
          },
          {
            "id": "B",
            "text": "\"Hindmilk is released at the beginning of the feeding.\""
          },
          {
            "id": "C",
            "text": "Milk at the beginning of a feeding generally contains less fat than milk later in the feeding."
          },
          {
            "id": "D",
            "text": "\"Hindmilk is watery and low in fat compared to foremilk.\""
          }
        ],
        "multiple": false,
        "correct": [
          "C"
        ],
        "format": "Multiple choice",
        "reviewNote": "Focused the explanation on the reliable change in fat content during a feed.",
        "references": []
      },
      {
        "id": "46",
        "label": "Question 46",
        "category": "Breast and Formula Feeding",
        "prompt": "A nurse is assessing a breastfeeding newborn's latch. Which of the following findings indicates an effective latch?",
        "rationale": "Chin embedded, nose close but not touching, indicates a good latch.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "The newborn's lips are pursed tightly around the nipple only."
          },
          {
            "id": "B",
            "text": "The newborn's chin is embedded in the breast with the nose close but not touching."
          },
          {
            "id": "C",
            "text": "The mother reports sharp pinching pain throughout the feeding."
          },
          {
            "id": "D",
            "text": "Clicking sounds are heard consistently during feeding."
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "47",
        "label": "Question 47",
        "category": "Breast and Formula Feeding",
        "prompt": "A nurse is teaching a client who plans to formula feed about safe preparation and storage. Which of the following statements indicates a need for further teaching?",
        "rationale": "Never prop a bottle. Refrigerate prepared formula promptly and use within 24 hours; use within 2 hours of preparation or within 1 hour after feeding starts, whichever comes first.",
        "rationaleSource": "reviewed",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "I can refrigerate prepared formula promptly and use it within 24 hours."
          },
          {
            "id": "B",
            "text": "I will discard formula after 2 hours at room temperature, or 1 hour after feeding starts, whichever comes first."
          },
          {
            "id": "C",
            "text": "\"I can prop the bottle so I don't have to hold my baby while feeding.\""
          },
          {
            "id": "D",
            "text": "\"I will position my baby at a 45-degree angle or higher during feeding.\""
          }
        ],
        "multiple": false,
        "correct": [
          "C"
        ],
        "format": "Multiple choice",
        "reviewNote": "Corrected the other storage choices so this single-answer question has one clear answer.",
        "references": [
          {
            "title": "CDC: formula preparation and storage",
            "url": "https://www.cdc.gov/infant-toddler-nutrition/formula-feeding/preparation-and-storage.html"
          }
        ]
      },
      {
        "id": "48",
        "label": "Question 48",
        "category": "Breast and Formula Feeding",
        "prompt": "A nurse is providing teaching to a breastfeeding client regarding milk storage. Which of the following statements is accurate?",
        "rationale": "Fresh breast milk is safe at room temperature up to 4 hr.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "\"Freshly expressed breast milk can remain at room temperature for up to 4 hours.\""
          },
          {
            "id": "B",
            "text": "\"Thawed breast milk can be refrozen if not used within 24 hours.\""
          },
          {
            "id": "C",
            "text": "\"Breast milk should be stored in plastic containers for best antibody preservation.\""
          },
          {
            "id": "D",
            "text": "\"Frozen breast milk is only safe for use up to 2 weeks after freezing.\""
          }
        ],
        "multiple": false,
        "correct": [
          "A"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "49",
        "label": "Question 49",
        "category": "Breast and Formula Feeding",
        "prompt": "A nurse is caring for a client who is exclusively formula feeding and asks when her milk production will stop. The nurse should explain that this typically occurs within which of the following timeframes?",
        "rationale": "Milk production typically stops within about 2 weeks without stimulation.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "24 to 48 hours"
          },
          {
            "id": "B",
            "text": "3 to 5 days"
          },
          {
            "id": "C",
            "text": "Approximately 2 weeks"
          },
          {
            "id": "D",
            "text": "6 to 8 weeks"
          }
        ],
        "multiple": false,
        "correct": [
          "C"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "50",
        "label": "Question 50",
        "category": "Breast and Formula Feeding",
        "prompt": "A nurse is providing education about maternal indications for formula supplementation. Which of the following maternal conditions should the nurse identify as an indication to avoid breastfeeding?",
        "rationale": "Active cocaine use and HSV lesions on the breast require precautions. Feeding from an unaffected breast may continue with HSV lesions covered. Hepatitis B requires timely infant vaccine and HBIG, but breastfeeding need not wait for completion of immunization.",
        "rationaleSource": "reviewed",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Active herpes simplex lesions on the breast"
          },
          {
            "id": "B",
            "text": "Hepatitis B infection without infant vaccination"
          },
          {
            "id": "C",
            "text": "Mastitis with a fever of 38.5° C (101.3° F)"
          },
          {
            "id": "D",
            "text": "Active untreated substance use with cocaine"
          },
          {
            "id": "E",
            "text": "History of gestational diabetes"
          }
        ],
        "multiple": true,
        "correct": [
          "A",
          "D"
        ],
        "format": "Select all that apply",
        "reviewNote": "Removed hepatitis B from the key; missing infant prophylaxis needs urgent action rather than automatic cessation of breastfeeding.",
        "references": [
          {
            "title": "CDC: hepatitis B and breastfeeding",
            "url": "https://www.cdc.gov/breastfeeding-special-circumstances/hcp/illnesses-conditions/hepatitis-b-c.html"
          }
        ]
      },
      {
        "id": "51",
        "label": "Question 51",
        "category": "Antepartum / Prenatal Care & Discomforts",
        "prompt": "A client's last menstrual period began on April 10. Using Naegele's rule, the nurse should calculate the client's estimated date of delivery as which of the following?",
        "rationale": "LMP April 10 → subtract 3 months (Jan 10) → add 7 days = January 17.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "January 3"
          },
          {
            "id": "B",
            "text": "January 17"
          },
          {
            "id": "C",
            "text": "December 17"
          },
          {
            "id": "D",
            "text": "January 10"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "52",
        "label": "Question 52",
        "category": "Antepartum / Prenatal Care & Discomforts",
        "prompt": "A nurse is calculating a client's obstetric history using the GTPAL system. The client has one child born at 39 weeks, one child born at 34 weeks, and one first-trimester spontaneous abortion. She is currently pregnant. Which of the following GTPAL values should the nurse document?",
        "rationale": "G4 (3 prior pregnancies + current), T1 (one term birth), P1 (one preterm birth), A1 (one abortion), L2 (two living children).",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "G3 T1 P1 A1 L2"
          },
          {
            "id": "B",
            "text": "G4 T1 P1 A1 L2"
          },
          {
            "id": "C",
            "text": "G4 T2 P0 A1 L2"
          },
          {
            "id": "D",
            "text": "G3 T1 P1 A0 L2"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "53",
        "label": "Question 53",
        "category": "Pregnancy Complications — Diabetes & Hypertension",
        "prompt": "A nurse is reviewing results of a 3-hour oral glucose tolerance test for a client at 26 weeks of gestation. Which of the following results confirms a diagnosis of gestational diabetes?",
        "rationale": "Using the 100-g, 3-hour Carpenter–Coustan test, thresholds are 95/180/155/140 mg/dL (fasting/1/2/3 hours). Option B exceeds three; option C exceeds none. At least two abnormal values meet these diagnostic criteria.",
        "rationaleSource": "reviewed",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Fasting 90 mg/dL, 1 hr 175 mg/dL, 2 hr 130 mg/dL, 3 hr 130 mg/dL"
          },
          {
            "id": "B",
            "text": "Fasting 98 mg/dL, 1 hr 185 mg/dL, 2 hr 160 mg/dL, 3 hr 120 mg/dL"
          },
          {
            "id": "C",
            "text": "Fasting 92 mg/dL, 1 hr 170 mg/dL, 2 hr 140 mg/dL, 3 hr 130 mg/dL"
          },
          {
            "id": "D",
            "text": "Fasting 88 mg/dL, 1 hr 175 mg/dL, 2 hr 145 mg/dL, 3 hr 135 mg/dL"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice",
        "reviewNote": "Corrected the supplied key from C to B; the original rationale mislabeled normal glucose values as abnormal.",
        "references": [
          {
            "title": "USPSTF: glucose-test thresholds",
            "url": "https://www.uspreventiveservicestaskforce.org/uspstf/index.php/recommendation/gestational-diabetes-screening"
          }
        ]
      },
      {
        "id": "54",
        "label": "Question 54",
        "category": "Pregnancy Complications — Diabetes & Hypertension",
        "prompt": "A nurse is caring for a client receiving magnesium sulfate for severe preeclampsia. Which of the following findings should the nurse report to the provider immediately?",
        "rationale": "A respiratory rate of 10/min indicates magnesium toxicity and must be reported immediately.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Deep tendon reflexes rated 2+"
          },
          {
            "id": "B",
            "text": "Respiratory rate of 10/min"
          },
          {
            "id": "C",
            "text": "Urine output of 40 mL/hr"
          },
          {
            "id": "D",
            "text": "Serum magnesium level of 5.5 mg/dL"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "bowtie-1",
        "label": "Bowtie 1",
        "category": "Pregnancy Complications — Diabetes & Hypertension",
        "prompt": "A nurse is caring for a client at 34 weeks of gestation who reports a severe headache, visual disturbances, and epigastric pain. Vital signs: blood pressure 168/112 mm Hg, heart rate 98/min, respiratory rate 20/min. Urine dip shows 4+ protein. Deep tendon reflexes are 3+ with clonus present.\nComplete the bowtie by selecting the condition most likely occurring, two actions the nurse should take, and two parameters the nurse should monitor.",
        "rationale": "Condition: Severe preeclampsia. Actions: Administer magnesium sulfate; prepare a quiet, dimly lit environment. Parameters: Deep tendon reflexes; respiratory rate. Severe hypertension with headache, visual changes, epigastric pain, and hyperreflexia supports preeclampsia with severe features. Magnesium reduces seizure risk; reflexes and breathing help identify toxicity.",
        "rationaleSource": "reviewed",
        "type": "groups",
        "format": "Bowtie",
        "groups": [
          {
            "id": "condition",
            "label": "Most likely condition",
            "selectionCount": 1,
            "options": [
              {
                "id": "A",
                "text": "Chronic hypertension"
              },
              {
                "id": "B",
                "text": "Severe preeclampsia"
              },
              {
                "id": "C",
                "text": "Gestational hypertension"
              },
              {
                "id": "D",
                "text": "HELLP syndrome without preeclampsia"
              }
            ],
            "correct": [
              "B"
            ]
          },
          {
            "id": "actions",
            "label": "Actions to take",
            "selectionCount": 2,
            "options": [
              {
                "id": "A",
                "text": "Administer magnesium sulfate per protocol"
              },
              {
                "id": "B",
                "text": "Encourage ambulation in the hallway"
              },
              {
                "id": "C",
                "text": "Prepare a quiet, dimly lit environment"
              },
              {
                "id": "D",
                "text": "Administer a tocolytic medication"
              },
              {
                "id": "E",
                "text": "Discontinue all IV fluids"
              }
            ],
            "correct": [
              "A",
              "C"
            ]
          },
          {
            "id": "monitoring",
            "label": "Parameters to monitor",
            "selectionCount": 2,
            "options": [
              {
                "id": "A",
                "text": "Deep tendon reflexes"
              },
              {
                "id": "B",
                "text": "Fundal height weekly"
              },
              {
                "id": "C",
                "text": "Respiratory rate"
              },
              {
                "id": "D",
                "text": "Maternal blood glucose every 15 min"
              },
              {
                "id": "E",
                "text": "Cervical dilation hourly"
              }
            ],
            "correct": [
              "A",
              "C"
            ]
          }
        ],
        "reviewNote": "The supplied selections are retained; an explanation of the case cues has been added.",
        "references": []
      },
      {
        "id": "bowtie-2",
        "label": "Bowtie 2",
        "category": "Pregnancy Complications — Diabetes & Hypertension",
        "prompt": "A nurse is caring for a client who is 30 minutes postpartum following a vaginal birth. The client's fundus is boggy and displaced to the right of midline. The perineal pad is saturated, and the client reports feeling dizzy. Blood pressure is 88/54 mm Hg, heart rate is 128/min.\nComplete the bowtie by selecting the condition most likely occurring, two actions the nurse should take, and two parameters the nurse should monitor.",
        "rationale": "Condition: Bladder distention causing uterine atony. Actions: Assist client to void/straight catheterize; perform fundal massage. Parameters: Vital signs/LOC; amount of vaginal bleeding/pad count. Activate the hemorrhage response immediately and treat shock while addressing uterine atony and bladder distention.",
        "rationaleSource": "reviewed",
        "type": "groups",
        "format": "Bowtie",
        "groups": [
          {
            "id": "condition",
            "label": "Most likely condition",
            "selectionCount": 1,
            "options": [
              {
                "id": "A",
                "text": "Uterine inversion"
              },
              {
                "id": "B",
                "text": "Bladder distention causing uterine atony"
              },
              {
                "id": "C",
                "text": "Retained products of conception with infection"
              },
              {
                "id": "D",
                "text": "Normal postpartum recovery"
              }
            ],
            "correct": [
              "B"
            ]
          },
          {
            "id": "actions",
            "label": "Actions to take",
            "selectionCount": 2,
            "options": [
              {
                "id": "A",
                "text": "Empty the bladder using catheterization per protocol while treating hemorrhage; do not ambulate this unstable client."
              },
              {
                "id": "B",
                "text": "Perform fundal massage"
              },
              {
                "id": "C",
                "text": "Apply a warm compress to the fundus"
              },
              {
                "id": "D",
                "text": "Administer an antihypertensive medication"
              },
              {
                "id": "E",
                "text": "Discharge the client home for outpatient follow-up"
              }
            ],
            "correct": [
              "A",
              "B"
            ]
          },
          {
            "id": "monitoring",
            "label": "Parameters to monitor",
            "selectionCount": 2,
            "options": [
              {
                "id": "A",
                "text": "Vital signs and level of consciousness"
              },
              {
                "id": "B",
                "text": "Deep tendon reflexes"
              },
              {
                "id": "C",
                "text": "Amount of vaginal bleeding/pad count"
              },
              {
                "id": "D",
                "text": "Newborn's blood glucose"
              },
              {
                "id": "E",
                "text": "Maternal temperature only, every 8 hours"
              }
            ],
            "correct": [
              "A",
              "C"
            ]
          }
        ],
        "reviewNote": "Clarified safe bladder emptying for a client with hypotension; do not walk this client to the bathroom.",
        "references": [
          {
            "title": "ACOG: postpartum hemorrhage",
            "url": "https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2017/10/postpartum-hemorrhage"
          }
        ]
      },
      {
        "id": "55",
        "label": "Question 55",
        "category": "Fetal Monitoring",
        "prompt": "A nurse is reviewing an FHR tracing during the active phase of labor. The tracing shows a baseline of 140/min, moderate variability, and a gradual decrease in FHR beginning at the onset of a contraction, with the lowest point occurring at the peak of the contraction and return to baseline by the end of the contraction. The nurse should identify this pattern as which of the following, and take which of the following actions?",
        "rationale": "Early deceleration mirrors the contraction (onset to onset, nadir at peak) — related to fetal head compression, no intervention needed.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Late deceleration; reposition the client and administer oxygen."
          },
          {
            "id": "B",
            "text": "Early deceleration; continue routine monitoring, no intervention needed."
          },
          {
            "id": "C",
            "text": "Variable deceleration; prepare for possible amnioinfusion."
          },
          {
            "id": "D",
            "text": "Prolonged deceleration; notify the provider for expedited birth."
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "56",
        "label": "Question 56",
        "category": "Fetal Monitoring",
        "prompt": "A nurse is reviewing an FHR tracing that shows a baseline of 150/min with minimal variability, recurrent decreases in FHR that begin after the peak of the contraction with a gradual return to baseline occurring after the contraction has ended. Which of the following actions should the nurse take first?",
        "rationale": "Reposition laterally, address reversible causes, and give IV fluids as appropriate while escalating the recurrent late-deceleration pattern. Stop oxytocin if infusing. Oxygen is indicated for maternal hypoxemia, not routinely for a normoxic client.",
        "rationaleSource": "reviewed",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Document the finding as a normal Category I tracing."
          },
          {
            "id": "B",
            "text": "Reposition the client to the lateral position and increase IV fluids."
          },
          {
            "id": "C",
            "text": "Prepare the client for an immediate amnioinfusion."
          },
          {
            "id": "D",
            "text": "Continue routine assessment; this pattern requires no intervention."
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice",
        "reviewNote": "Removed routine oxygen from the rationale when maternal oxygen saturation is normal.",
        "references": [
          {
            "title": "ACOG: oxygen during fetal resuscitation",
            "url": "https://www.acog.org/clinical/clinical-guidance/practice-advisory/articles/2022/01/oxygen-supplementation-in-the-setting-of-category-ii-or-iii-fetal-heart-tracings"
          }
        ]
      },
      {
        "id": "57",
        "label": "Question 57",
        "category": "Labor Complications & Emergencies",
        "prompt": "A nurse is caring for a client in active labor when the fetal head is delivered but the anterior shoulder fails to deliver after gentle traction. Which of the following actions should the nurse take first?",
        "rationale": "McRoberts positioning is the first-line maneuver for shoulder dystocia (never apply fundal pressure).",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Apply fundal pressure to assist delivery of the shoulder."
          },
          {
            "id": "B",
            "text": "Assist the client into the McRoberts position."
          },
          {
            "id": "C",
            "text": "Perform an immediate episiotomy."
          },
          {
            "id": "D",
            "text": "Prepare the client for emergency cesarean birth."
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "58",
        "label": "Question 58",
        "category": "Labor Complications & Emergencies",
        "prompt": "A nurse is caring for a client at 36 weeks of gestation who reports sudden, severe abdominal pain described as \"knife-like,\" along with dark red vaginal bleeding. On palpation, the uterus is rigid and tender. Fetal heart rate shows late decelerations. The nurse should suspect which of the following complications?",
        "rationale": "Sudden severe pain, rigid tender uterus, dark red bleeding, and late decelerations are classic for placental abruption.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Placenta previa"
          },
          {
            "id": "B",
            "text": "Placental abruption"
          },
          {
            "id": "C",
            "text": "Vasa previa"
          },
          {
            "id": "D",
            "text": "Uterine rupture from prior surgery"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "59",
        "label": "Question 59",
        "category": "Labor Complications & Emergencies",
        "prompt": "A nurse is caring for a client whose membranes have just ruptured spontaneously. On assessment, the nurse palpates a pulsating loop of umbilical cord protruding through the vagina. Which of the following actions should the nurse take first?",
        "rationale": "Apply upward pressure on the presenting part to relieve cord compression; also position knee-chest/Trendelenburg (not supine flat).",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Apply firm upward pressure on the presenting part with a gloved hand."
          },
          {
            "id": "B",
            "text": "Place the client in a supine, flat position."
          },
          {
            "id": "C",
            "text": "Administer oxytocin to expedite delivery."
          },
          {
            "id": "D",
            "text": "Perform an immediate vaginal examination for cervical dilation."
          }
        ],
        "multiple": false,
        "correct": [
          "A"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "60",
        "label": "Question 60",
        "category": "Labor Complications & Emergencies",
        "prompt": "A nurse is caring for a client diagnosed with preterm premature rupture of membranes (PPROM) at 32 weeks of gestation. Which of the following medications should the nurse anticipate administering?",
        "rationale": "Expect antenatal corticosteroids and latency antibiotics for appropriate expectant PPROM management. Magnesium neuroprotection is considered when delivery before 32 weeks is anticipated; Rh immune globulin depends on Rh status.",
        "rationaleSource": "reviewed",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Betamethasone"
          },
          {
            "id": "B",
            "text": "Magnesium sulfate for neuroprotection"
          },
          {
            "id": "C",
            "text": "Broad-spectrum antibiotics"
          },
          {
            "id": "D",
            "text": "Misoprostol"
          },
          {
            "id": "E",
            "text": "RhoGAM regardless of Rh status"
          }
        ],
        "multiple": true,
        "correct": [
          "A",
          "C"
        ],
        "format": "Select all that apply",
        "reviewNote": "At 32 weeks, magnesium for fetal neuroprotection is not a routine selection under the ACOG before-32-weeks threshold.",
        "references": [
          {
            "title": "ACOG: preterm labor and birth",
            "url": "https://www.acog.org/womens-health/faqs/preterm-labor-and-birth"
          }
        ]
      },
      {
        "id": "61",
        "label": "Question 61",
        "category": "Labor Complications & Emergencies",
        "prompt": "A nurse is caring for a client who experiences sudden hypotension, hypoxia, and cardiovascular collapse immediately following a rapid, tumultuous labor. The nurse should suspect which of the following obstetric emergencies?",
        "rationale": "Sudden cardiovascular collapse with hypoxia following rapid/tumultuous labor is classic for amniotic fluid embolism.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Amniotic fluid embolism"
          },
          {
            "id": "B",
            "text": "Uterine inversion"
          },
          {
            "id": "C",
            "text": "Disseminated intravascular coagulation secondary to abruption"
          },
          {
            "id": "D",
            "text": "Eclamptic seizure"
          }
        ],
        "multiple": false,
        "correct": [
          "A"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "62",
        "label": "Question 62",
        "category": "Labor Complications & Emergencies",
        "prompt": "A nurse is caring for a client with painless, bright red vaginal bleeding at 33 weeks of gestation. An ultrasound confirms the placenta is completely covering the cervical os. Which of the following actions is contraindicated for this client?",
        "rationale": "Digital cervical exams are contraindicated with placenta previa due to hemorrhage risk.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Continuous fetal heart rate monitoring"
          },
          {
            "id": "B",
            "text": "Pad counts to quantify blood loss"
          },
          {
            "id": "C",
            "text": "Digital cervical examination"
          },
          {
            "id": "D",
            "text": "Preparation for possible cesarean birth"
          }
        ],
        "multiple": false,
        "correct": [
          "C"
        ],
        "format": "Multiple choice"
      }
    ]
  },
  {
    "id": "exam-2",
    "title": "Practice exam 2",
    "description": "Advanced practice",
    "questions": [
      {
        "id": "1",
        "label": "Question 1",
        "category": "Normal Postpartum Care",
        "prompt": "A nurse is assessing a client who is 3 days postpartum following a cesarean birth. The fundus is palpated 3 cm below the umbilicus. Which of the following statements by the nurse reflects correct understanding of this finding?",
        "rationale": "1 cm/day descent from 1 cm below umbilicus at delivery means 3 cm below by day 3 is expected.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "This finding indicates delayed involution and requires immediate intervention."
          },
          {
            "id": "B",
            "text": "This finding is consistent with expected postpartum uterine involution."
          },
          {
            "id": "C",
            "text": "This finding suggests the client has a full bladder displacing the uterus."
          },
          {
            "id": "D",
            "text": "This finding requires notification of the provider for possible retained placenta."
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "2",
        "label": "Question 2",
        "category": "Normal Postpartum Care",
        "prompt": "A nurse is caring for a client who is 12 days postpartum and reports a return of bright red vaginal bleeding after several days of white/yellow discharge. Which of the following should the nurse identify as most consistent with this finding?",
        "rationale": "Return of rubra after progression to serosa/alba (\"reversal of lochia\") suggests subinvolution and warrants follow-up.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Expected transition back to lochia rubra"
          },
          {
            "id": "B",
            "text": "Normal variation related to increased physical activity"
          },
          {
            "id": "C",
            "text": "A possible sign of subinvolution requiring follow-up"
          },
          {
            "id": "D",
            "text": "Expected finding indicating the onset of menstruation"
          }
        ],
        "multiple": false,
        "correct": [
          "C"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "3",
        "label": "Question 3",
        "category": "Normal Postpartum Care",
        "prompt": "A nurse is assessing a client who is 24 hr postpartum. Which of the following findings should the nurse identify as expected?",
        "rationale": "WBC 24,000, pulse 100/min, trace pedal edema, and overnight diaphoresis are ALL expected. Sustained fever ≥38°C is NOT expected and suggests infection.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Temperature of 38.2° C (100.8° F) sustained for three consecutive readings"
          },
          {
            "id": "B",
            "text": "WBC count of 24,000/mm3"
          },
          {
            "id": "C",
            "text": "Pulse of 100/min"
          },
          {
            "id": "D",
            "text": "Trace pedal edema bilaterally"
          },
          {
            "id": "E",
            "text": "Diaphoresis noted overnight"
          }
        ],
        "multiple": true,
        "correct": [
          "B",
          "C",
          "D",
          "E"
        ],
        "format": "Select all that apply"
      },
      {
        "id": "4",
        "label": "Question 4",
        "category": "Normal Postpartum Care",
        "prompt": "Assuming normal involution, the fundus should descend approximately ______ to ______ cm every 24-hour period following birth.",
        "rationale": "1 to 2 cm per 24 hours.",
        "rationaleSource": "provided",
        "type": "text",
        "format": "Fill in the blank",
        "fields": [
          {
            "label": "Lower end (cm)",
            "answer": "1",
            "accepted": [
              "1",
              "one"
            ],
            "unit": "cm"
          },
          {
            "label": "Upper end (cm)",
            "answer": "2",
            "accepted": [
              "2",
              "two"
            ],
            "unit": "cm"
          }
        ]
      },
      {
        "id": "5",
        "label": "Question 5",
        "category": "Normal Postpartum Care",
        "prompt": "Which letter in the BUBBLEHE postpartum assessment framework corresponds to the assessment of hemorrhoids?",
        "rationale": "In this BUBBLEHE version, H stands for hemorrhoids.",
        "rationaleSource": "reviewed",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "The first B"
          },
          {
            "id": "B",
            "text": "The U"
          },
          {
            "id": "C",
            "text": "The H (hemorrhoids)"
          },
          {
            "id": "D",
            "text": "The second E"
          }
        ],
        "multiple": false,
        "correct": [
          "C"
        ],
        "format": "Multiple choice",
        "reviewNote": "The source says “second H,” but BUBBLEHE has one H.",
        "references": []
      },
      {
        "id": "6",
        "label": "Question 6",
        "category": "Normal Postpartum Care",
        "prompt": "A nurse is caring for a client who is breastfeeding and reports nipple pain that continues throughout the entire feeding, with visibly cracked skin at the base of the nipple. Which of the following is the priority nursing action?",
        "rationale": "Pain throughout the entire feeding with cracked skin signals a latch problem; reassessing latch is the priority over reassurance or discontinuing feeding.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Reassure the client that this is expected during the first week of breastfeeding."
          },
          {
            "id": "B",
            "text": "Instruct the client to switch to nipple shields permanently."
          },
          {
            "id": "C",
            "text": "Reassess the newborn's latch and positioning."
          },
          {
            "id": "D",
            "text": "Recommend discontinuing breastfeeding for 48 hours to allow healing."
          }
        ],
        "multiple": false,
        "correct": [
          "C"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "7",
        "label": "Question 7",
        "category": "Normal Postpartum Care",
        "prompt": "A nurse is identifying risk factors for delayed maternal-infant attachment. Which of the following should the nurse identify as risk factors?",
        "rationale": "History of PPD, preterm/NICU admission, and unplanned pregnancy are risk factors. Uncomplicated multiparity and strong social support are protective, not risk factors.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "History of postpartum depression"
          },
          {
            "id": "B",
            "text": "Preterm birth requiring NICU admission"
          },
          {
            "id": "C",
            "text": "Multiparity with prior uncomplicated births"
          },
          {
            "id": "D",
            "text": "Unplanned pregnancy"
          },
          {
            "id": "E",
            "text": "Strong social support system"
          }
        ],
        "multiple": true,
        "correct": [
          "A",
          "B",
          "D"
        ],
        "format": "Select all that apply"
      },
      {
        "id": "8",
        "label": "Question 8",
        "category": "Normal Postpartum Care",
        "prompt": "A client is 3 hr postpartum with a firm fundus at the umbilicus and moderate lochia rubra without clots. The client reports increasing rectal pressure. Heart rate is 118/min and blood pressure is 92/58 mm Hg. Which of the following complications should the nurse suspect?",
        "rationale": "Firm fundus with normal external bleeding but signs of hypovolemia (tachycardia, hypotension) plus rectal pressure suggests a concealed hematoma.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Uterine atony"
          },
          {
            "id": "B",
            "text": "Concealed perineal or vaginal hematoma"
          },
          {
            "id": "C",
            "text": "Retained placental fragment"
          },
          {
            "id": "D",
            "text": "Bladder distention"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "9",
        "label": "Question 9",
        "category": "Normal Postpartum Care",
        "prompt": "A nurse is caring for a client at two time points following a vaginal birth.\n2 hr postpartum:\nUterus firm, midline, at the level of the umbilicus. Moderate lochia rubra, no clots noted on pad. Vital signs stable.\n6 hr postpartum:\nUterus boggy, deviated to the right, palpated 2 cm above the umbilicus. Client has not voided since delivery. Large amount of lochia rubra noted with two golf-ball sized clots.\nSelect all findings at 6 hr postpartum that require immediate follow-up.",
        "rationale": "Correct selections: uterus deviated/above umbilicus, has not voided, and the two large clots all require follow-up. Lochia rubra presence alone and the earlier 2-hr firm/midline finding are expected, not concerning.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Uterus deviated to the right and above the umbilicus"
          },
          {
            "id": "B",
            "text": "Client has not voided since delivery"
          },
          {
            "id": "C",
            "text": "Two golf-ball sized clots noted in lochia"
          },
          {
            "id": "D",
            "text": "Lochia rubra present"
          },
          {
            "id": "E",
            "text": "Fundus was firm and midline at 2 hr postpartum"
          }
        ],
        "multiple": true,
        "correct": [
          "A",
          "B",
          "C"
        ],
        "format": "Select all that apply"
      },
      {
        "id": "10",
        "label": "Question 10",
        "category": "Normal Postpartum Care",
        "prompt": "A client who is 36 hr postpartum states, \"I keep replaying the delivery over and over — I still can't believe it happened so fast.\" Which phase of Reva Rubin's maternal role adaptation does this reflect?",
        "rationale": "Taking-in: replaying/retelling the birth experience repeatedly and needing others to meet her needs.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Taking-in"
          },
          {
            "id": "B",
            "text": "Taking-hold"
          },
          {
            "id": "C",
            "text": "Letting-go"
          },
          {
            "id": "D",
            "text": "Postpartum psychosis"
          }
        ],
        "multiple": false,
        "correct": [
          "A"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "11",
        "label": "Question 11",
        "category": "Normal Postpartum Care",
        "prompt": "A nurse is teaching a postpartum client about performing Kegel exercises. Which of the following instructions is INCORRECT and should NOT be included in teaching?",
        "rationale": "INCORRECT statement: the bladder should be EMPTY, not full, when performing Kegel exercises.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "\"Practice by trying to stop your urine stream to identify the correct muscles.\""
          },
          {
            "id": "B",
            "text": "\"Perform the exercises with a full bladder for the best results.\""
          },
          {
            "id": "C",
            "text": "\"Hold each contraction for about 10 seconds, then relax for 10 seconds.\""
          },
          {
            "id": "D",
            "text": "\"Repeat the exercise set three times a day.\""
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "12",
        "label": "Question 12",
        "category": "Normal Postpartum Care",
        "prompt": "By approximately 2 weeks postpartum, the fundus should no longer be palpable above the ______.",
        "rationale": "By approximately 2 weeks the uterus has returned to the pelvis and is generally no longer palpable abdominally.",
        "rationaleSource": "reviewed",
        "type": "text",
        "format": "Fill in the blank",
        "fields": [
          {
            "label": "Anatomical landmark",
            "answer": "Symphysis pubis",
            "accepted": [
              "Symphysis pubis",
              "pubic symphysis"
            ],
            "unit": ""
          }
        ],
        "reviewNote": "Changed the timing from 1 week to approximately 2 weeks so the anatomical landmark matches normal involution.",
        "references": [
          {
            "title": "Merck Manual: postpartum involution",
            "url": "https://www.merckmanuals.com/professional/gynecology-and-obstetrics/postpartum-care-and-associated-disorders/postpartum-care"
          }
        ]
      },
      {
        "id": "13",
        "label": "Question 13",
        "category": "Normal Postpartum Care",
        "prompt": "A client who is 18 hr postpartum has a urine output of 3,200 mL over the past 8 hr. Which of the following is the most accurate explanation for this finding?",
        "rationale": "Postpartum diuresis (elimination of 2,000–3,000 mL excess extracellular fluid) is expected in the first 1–2 days.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "This indicates renal impairment and requires immediate provider notification."
          },
          {
            "id": "B",
            "text": "This represents expected postpartum diuresis related to fluid shifts."
          },
          {
            "id": "C",
            "text": "This is abnormal and suggests diabetes insipidus."
          },
          {
            "id": "D",
            "text": "This indicates the client is developing hypovolemic shock."
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "14",
        "label": "Question 14",
        "category": "Normal Postpartum Care",
        "prompt": "A nurse is reviewing labs for a client 24 hr postpartum with a hematocrit of 40% (prenatal baseline was 33%). Which of the following best explains this finding?",
        "rationale": "Hemoconcentration from plasma volume loss can make H&H appear falsely elevated/stable rather than reflecting improvement.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "This represents significant blood loss requiring transfusion."
          },
          {
            "id": "B",
            "text": "This may reflect hemoconcentration from plasma volume loss rather than a true improvement."
          },
          {
            "id": "C",
            "text": "This is an expected and reassuring sign of adequate hydration."
          },
          {
            "id": "D",
            "text": "This indicates that iron supplementation has been highly effective."
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "15",
        "label": "Question 15",
        "category": "Normal Postpartum Care",
        "prompt": "A client who is rubella non-immune receives the MMR vaccine on postpartum day 2 prior to discharge. Which instruction should the nurse provide?",
        "rationale": "Live vaccine requires avoiding pregnancy for 1 month; not contraindicated with breastfeeding.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "\"You may breastfeed and should avoid becoming pregnant for at least 1 month.\""
          },
          {
            "id": "B",
            "text": "\"You should discontinue breastfeeding for 2 weeks after vaccination.\""
          },
          {
            "id": "C",
            "text": "\"You do not need to avoid pregnancy since this is an inactivated vaccine.\""
          },
          {
            "id": "D",
            "text": "\"You should delay vaccination until your 6-week postpartum visit.\""
          }
        ],
        "multiple": false,
        "correct": [
          "A"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "16",
        "label": "Question 16",
        "category": "Normal Postpartum Care",
        "prompt": "A nurse is identifying situations in which an Rh-negative client should receive Rho(D) immune globulin. Select all that apply.",
        "rationale": "For an unsensitized Rh-negative client, these examples warrant RhIg: Rh-positive birth, loss at 14 weeks, amniocentesis, and external cephalic version. An Rh-negative infant does not require postpartum prophylaxis.",
        "rationaleSource": "reviewed",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Delivery of an Rh-positive infant"
          },
          {
            "id": "B",
            "text": "Spontaneous abortion at 14 weeks of gestation"
          },
          {
            "id": "C",
            "text": "Amniocentesis"
          },
          {
            "id": "D",
            "text": "Delivery of an Rh-negative infant"
          },
          {
            "id": "E",
            "text": "External cephalic version"
          }
        ],
        "multiple": true,
        "correct": [
          "A",
          "B",
          "C",
          "E"
        ],
        "format": "Select all that apply",
        "reviewNote": "Changed the pregnancy-loss example to 14 weeks; routine RhIg before 12 weeks is no longer universal under ACOG guidance.",
        "references": [
          {
            "title": "ACOG: the Rh factor",
            "url": "https://www.acog.org/womens-health/faqs/the-rh-factor-how-it-can-affect-your-pregnancy"
          }
        ]
      },
      {
        "id": "17",
        "label": "Question 17",
        "category": "Postpartum Complications",
        "prompt": "Which of the following documented blood loss amounts should the nurse identify as meeting the definition of postpartum hemorrhage following a cesarean birth?",
        "rationale": "1,100 mL meets the ≥1,000 mL criterion. Blood loss with hypovolemic signs also qualifies, even below that volume; do not wait for a threshold to treat instability.",
        "rationaleSource": "reviewed",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "300 mL"
          },
          {
            "id": "B",
            "text": "600 mL"
          },
          {
            "id": "C",
            "text": "950 mL"
          },
          {
            "id": "D",
            "text": "1,100 mL"
          }
        ],
        "multiple": false,
        "correct": [
          "D"
        ],
        "format": "Multiple choice",
        "reviewNote": "Clarified the current ACOG definition, which applies regardless of birth route.",
        "references": [
          {
            "title": "ACOG: postpartum hemorrhage",
            "url": "https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2017/10/postpartum-hemorrhage"
          }
        ]
      },
      {
        "id": "18",
        "label": "Question 18",
        "category": "Postpartum Complications",
        "prompt": "A client 1 hr postpartum has a firm, midline fundus but continues to have steady bright red bleeding, saturating a pad in 8 minutes. Which of the following is the most likely cause?",
        "rationale": "A firm fundus with continued steady bleeding points to a laceration, not atony (atony presents with a boggy uterus).",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Uterine atony"
          },
          {
            "id": "B",
            "text": "Genital tract laceration"
          },
          {
            "id": "C",
            "text": "Retained placental fragments"
          },
          {
            "id": "D",
            "text": "Coagulopathy"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "19",
        "label": "Question 19",
        "category": "Postpartum Complications",
        "prompt": "A nurse is analyzing cues for a client with fever and uterine tenderness postpartum. For each assessment finding, indicate whether it is consistent with endometritis, mastitis, both, or neither.\nFor each finding, indicate whether it is consistent with each condition. A finding may apply to one, both, or neither condition.",
        "rationale": "Uterine tenderness/subinvolution and purulent, foul lochia support endometritis. Localized breast warmth and erythema support mastitis. Fever and general body aches can occur with either infection; myalgia alone cannot distinguish the two. Mastitis or both is accepted for that nonspecific row.",
        "rationaleSource": "reviewed",
        "type": "groups",
        "format": "Matrix",
        "groups": [
          {
            "id": "row-1",
            "label": "Fundal tenderness on palpation",
            "selectionCount": 1,
            "options": [
              {
                "id": "E",
                "text": "Endometritis"
              },
              {
                "id": "M",
                "text": "Mastitis"
              },
              {
                "id": "B",
                "text": "Both"
              },
              {
                "id": "N",
                "text": "Neither"
              }
            ],
            "correct": [
              "E"
            ]
          },
          {
            "id": "row-2",
            "label": "Purulent, foul-smelling lochia",
            "selectionCount": 1,
            "options": [
              {
                "id": "E",
                "text": "Endometritis"
              },
              {
                "id": "M",
                "text": "Mastitis"
              },
              {
                "id": "B",
                "text": "Both"
              },
              {
                "id": "N",
                "text": "Neither"
              }
            ],
            "correct": [
              "E"
            ]
          },
          {
            "id": "row-3",
            "label": "Unilateral breast erythema and warmth",
            "selectionCount": 1,
            "options": [
              {
                "id": "E",
                "text": "Endometritis"
              },
              {
                "id": "M",
                "text": "Mastitis"
              },
              {
                "id": "B",
                "text": "Both"
              },
              {
                "id": "N",
                "text": "Neither"
              }
            ],
            "correct": [
              "M"
            ]
          },
          {
            "id": "row-4",
            "label": "Temperature greater than 38° C (100.4° F)",
            "selectionCount": 1,
            "options": [
              {
                "id": "E",
                "text": "Endometritis"
              },
              {
                "id": "M",
                "text": "Mastitis"
              },
              {
                "id": "B",
                "text": "Both"
              },
              {
                "id": "N",
                "text": "Neither"
              }
            ],
            "correct": [
              "B"
            ]
          },
          {
            "id": "row-5",
            "label": "Flu-like body aches and myalgia",
            "selectionCount": 1,
            "options": [
              {
                "id": "E",
                "text": "Endometritis"
              },
              {
                "id": "M",
                "text": "Mastitis"
              },
              {
                "id": "B",
                "text": "Both"
              },
              {
                "id": "N",
                "text": "Neither"
              }
            ],
            "correct": [
              "M"
            ],
            "acceptedSets": [
              [
                "M"
              ],
              [
                "B"
              ]
            ]
          }
        ],
        "reviewNote": "Either mastitis or both is accepted for nonspecific flu-like myalgia; the other matrix findings retain the supplied key.",
        "references": []
      },
      {
        "id": "20",
        "label": "Question 20",
        "category": "Postpartum Complications",
        "prompt": "A nurse is caring for a client following a significant abruptio placentae. Which of the following laboratory findings is most consistent with disseminated intravascular coagulation (DIC)?",
        "rationale": "DIC presents with decreased platelets and decreased fibrinogen (consumption coagulopathy) alongside prolonged clotting times.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Elevated platelet count with elevated fibrinogen"
          },
          {
            "id": "B",
            "text": "Decreased platelet count with decreased fibrinogen"
          },
          {
            "id": "C",
            "text": "Elevated hematocrit with normal PT/PTT"
          },
          {
            "id": "D",
            "text": "Elevated fibrinogen with a prolonged bleeding time only"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "21",
        "label": "Question 21",
        "category": "Postpartum Complications",
        "prompt": "A nurse is identifying risk factors for uterine rupture. Select all that apply.",
        "rationale": "Prior classical cesarean, VBAC with misoprostol induction, excessive uterine distention, and external cephalic version are risk factors. A first pregnancy with no prior uterine surgery is NOT a risk factor.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Prior classical cesarean incision"
          },
          {
            "id": "B",
            "text": "VBAC attempt with misoprostol induction"
          },
          {
            "id": "C",
            "text": "First pregnancy with no prior uterine surgery"
          },
          {
            "id": "D",
            "text": "Excessive uterine distention from a multifetal pregnancy"
          },
          {
            "id": "E",
            "text": "External cephalic version"
          }
        ],
        "multiple": true,
        "correct": [
          "A",
          "B",
          "D",
          "E"
        ],
        "format": "Select all that apply"
      },
      {
        "id": "22",
        "label": "Question 22",
        "category": "Postpartum Complications",
        "prompt": "A client with subinvolution and a blood pressure of 158/98 mm Hg is prescribed methylergonovine. Which of the following actions should the nurse take?",
        "rationale": "Methylergonovine is contraindicated in hypertension; hold and notify the provider.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Administer the medication as prescribed."
          },
          {
            "id": "B",
            "text": "Hold the medication and notify the provider due to the client's blood pressure."
          },
          {
            "id": "C",
            "text": "Administer the medication only if the fundus remains boggy after massage."
          },
          {
            "id": "D",
            "text": "Administer double the ordered dose to control bleeding more quickly."
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "23",
        "label": "Question 23",
        "category": "Postpartum Complications",
        "prompt": "The therapeutic serum magnesium level during magnesium sulfate therapy for preeclampsia is approximately ______ to ______ mg/dL.",
        "rationale": "Approximately 4.8 to 9.6 mg/dL (therapeutic range; some sources cite 4–8 mg/dL).",
        "rationaleSource": "provided",
        "type": "text",
        "format": "Fill in the blank",
        "fields": [
          {
            "label": "Lower end (mg/dL)",
            "answer": "4.8",
            "accepted": [
              "4.8",
              "4"
            ],
            "unit": "mg/dL"
          },
          {
            "label": "Upper end (mg/dL)",
            "answer": "9.6",
            "accepted": [
              "9.6",
              "8",
              "9"
            ],
            "unit": "mg/dL"
          }
        ]
      },
      {
        "id": "24",
        "label": "Question 24",
        "category": "Postpartum Complications",
        "prompt": "A client 5 days postpartum reports she believes her infant is possessed and states she has not slept in 4 days. She reports auditory hallucinations instructing her to harm the infant. Which of the following is the priority nursing action?",
        "rationale": "Command hallucinations to harm the infant indicate postpartum psychosis — a psychiatric emergency requiring the infant never be left alone with the mother and immediate provider notification.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Reassure the client that postpartum blues are common and will resolve."
          },
          {
            "id": "B",
            "text": "Ensure the client is never left alone with the infant and notify the provider immediately."
          },
          {
            "id": "C",
            "text": "Encourage the client to attend a postpartum support group next week."
          },
          {
            "id": "D",
            "text": "Schedule a follow-up appointment with a psychiatrist in 2 weeks."
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "bowtie-a",
        "label": "Bowtie A",
        "category": "Postpartum Complications",
        "prompt": "A nurse is caring for a client following a significant abruptio placentae. The client has oozing from IV insertion sites, blood is not clotting in collection tubes, platelets are 65,000/mm3, and fibrinogen is 90 mg/dL.\nComplete the bowtie by selecting the condition most likely occurring, TWO actions the nurse should take, and TWO parameters the nurse should monitor.",
        "rationale": "Condition: DIC. Actions: Administer blood products/FFP per protocol; monitor for bleeding from puncture sites/mucous membranes. Parameters: Fibrinogen/platelet trends; coagulation studies (PT/PTT). Bleeding from puncture sites with low platelets and low fibrinogen supports consumption coagulopathy (DIC). Blood products replace depleted components; trends in bleeding and clotting studies guide the response.",
        "rationaleSource": "reviewed",
        "type": "groups",
        "format": "Bowtie",
        "groups": [
          {
            "id": "condition",
            "label": "Most likely condition",
            "selectionCount": 1,
            "options": [
              {
                "id": "A",
                "text": "Disseminated intravascular coagulation (DIC)"
              },
              {
                "id": "B",
                "text": "Uterine atony"
              },
              {
                "id": "C",
                "text": "Amniotic fluid embolism"
              },
              {
                "id": "D",
                "text": "Normal postpartum bleeding pattern"
              }
            ],
            "correct": [
              "A"
            ]
          },
          {
            "id": "actions",
            "label": "Actions to take",
            "selectionCount": 2,
            "options": [
              {
                "id": "A",
                "text": "Administer blood products/FFP per protocol"
              },
              {
                "id": "B",
                "text": "Prepare for immediate hysterectomy without lab confirmation"
              },
              {
                "id": "C",
                "text": "Monitor for bleeding from puncture sites/mucous membranes"
              },
              {
                "id": "D",
                "text": "Administer oral iron supplementation only"
              },
              {
                "id": "E",
                "text": "Discontinue all IV access"
              }
            ],
            "correct": [
              "A",
              "C"
            ]
          },
          {
            "id": "monitoring",
            "label": "Parameters to monitor",
            "selectionCount": 2,
            "options": [
              {
                "id": "A",
                "text": "Fibrinogen and platelet trends"
              },
              {
                "id": "B",
                "text": "Fundal height only"
              },
              {
                "id": "C",
                "text": "Coagulation studies (PT/PTT)"
              },
              {
                "id": "D",
                "text": "Deep tendon reflexes"
              },
              {
                "id": "E",
                "text": "Newborn bilirubin level"
              }
            ],
            "correct": [
              "A",
              "C"
            ]
          }
        ],
        "reviewNote": "The supplied selections are retained; an explanation of the case cues has been added.",
        "references": []
      },
      {
        "id": "25",
        "label": "Question 25",
        "category": "Normal Newborn Assessment & Care",
        "prompt": "A nurse is caring for a newborn of a mother with gestational diabetes at two time points.\n1 hr of life:\nBlood glucose 45 mg/dL. Feeding well at breast. Newborn alert with strong cry.\n2 hr of life:\nBlood glucose 28 mg/dL. Newborn is jittery with poor feeding and a weak cry.\nSelect the 3 priority actions the nurse should take at this time.",
        "rationale": "Jitteriness, poor feeding, and glucose 28 mg/dL indicate symptomatic hypoglycemia. Prompt IV dextrose under protocol is appropriate; oral feeding should not delay treatment. Recheck glucose and notify the provider.",
        "rationaleSource": "reviewed",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Feed the newborn immediately (breast or formula)"
          },
          {
            "id": "B",
            "text": "Administer IV dextrose immediately without attempting oral feeding first"
          },
          {
            "id": "C",
            "text": "Recheck blood glucose after intervention per protocol"
          },
          {
            "id": "D",
            "text": "Delay the next feeding for 4 hours to allow the newborn to rest"
          },
          {
            "id": "E",
            "text": "Wrap the newborn to prevent further heat loss"
          },
          {
            "id": "F",
            "text": "Notify the healthcare provider"
          }
        ],
        "multiple": true,
        "correct": [
          "B",
          "C",
          "F"
        ],
        "format": "Select all that apply",
        "selectionCount": 3,
        "reviewNote": "The source key prioritized feeding despite symptomatic severe hypoglycemia. Corrected to prompt IV glucose, reassessment, and provider notification.",
        "references": [
          {
            "title": "AAP: neonatal glucose management",
            "url": "https://publications.aap.org/pediatrics/article/127/3/e20103851/65026/Postnatal-Glucose-Homeostasis-in-Late-Preterm-and"
          }
        ]
      },
      {
        "id": "26",
        "label": "Question 26",
        "category": "Normal Newborn Assessment & Care",
        "prompt": "Which of the following newborn reflexes is expected to disappear by approximately 4 to 6 months of age?",
        "rationale": "Rooting reflex disappears by approximately 4–6 months; Babinski persists to ~12 months, tonic neck and palmar grasp disappear closer to 3–4 months.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Babinski reflex"
          },
          {
            "id": "B",
            "text": "Tonic neck (fencing) reflex"
          },
          {
            "id": "C",
            "text": "Rooting reflex"
          },
          {
            "id": "D",
            "text": "Palmar grasp reflex"
          }
        ],
        "multiple": false,
        "correct": [
          "C"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "27",
        "label": "Question 27",
        "category": "Normal Newborn Assessment & Care",
        "prompt": "Which of the following distinguishes a cephalohematoma from caput succedaneum?",
        "rationale": "Cephalohematoma does NOT cross suture lines (subperiosteal bleed) and raises bilirubin risk as it resolves; caput succedaneum crosses suture lines and is soft edema.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Cephalohematoma crosses suture lines; caput succedaneum does not."
          },
          {
            "id": "B",
            "text": "Cephalohematoma does not cross suture lines and may increase the risk for hyperbilirubinemia."
          },
          {
            "id": "C",
            "text": "Caput succedaneum increases the risk for intracranial hemorrhage."
          },
          {
            "id": "D",
            "text": "Both conditions require identical monitoring with no difference in risk."
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "28",
        "label": "Question 28",
        "category": "Normal Newborn Assessment & Care",
        "prompt": "The expected respiratory rate range for a healthy term newborn is ______ to ______ breaths/min.",
        "rationale": "30 to 60 breaths/min.",
        "rationaleSource": "provided",
        "type": "text",
        "format": "Fill in the blank",
        "fields": [
          {
            "label": "Lower end (breaths/min)",
            "answer": "30",
            "accepted": [
              "30",
              "thirty"
            ],
            "unit": ""
          },
          {
            "label": "Upper end (breaths/min)",
            "answer": "60",
            "accepted": [
              "60",
              "sixty"
            ],
            "unit": ""
          }
        ]
      },
      {
        "id": "29",
        "label": "Question 29",
        "category": "Normal Newborn Assessment & Care",
        "prompt": "A nurse is assessing a newborn for signs of respiratory distress. Which of the following findings should the nurse identify as concerning?",
        "rationale": "Nasal flaring, substernal retractions, and expiratory grunting are signs of distress. Acrocyanosis alone and brief apnea (<20 sec) are normal newborn findings.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Nasal flaring"
          },
          {
            "id": "B",
            "text": "Acrocyanosis of the hands and feet only"
          },
          {
            "id": "C",
            "text": "Substernal retractions"
          },
          {
            "id": "D",
            "text": "Expiratory grunting"
          },
          {
            "id": "E",
            "text": "Periods of apnea lasting less than 20 seconds"
          }
        ],
        "multiple": true,
        "correct": [
          "A",
          "C",
          "D"
        ],
        "format": "Select all that apply"
      },
      {
        "id": "30",
        "label": "Question 30",
        "category": "Normal Newborn Assessment & Care",
        "prompt": "A newborn develops jaundice at 18 hours of age. Which of the following is the priority concern?",
        "rationale": "Jaundice appearing before 24 hours of life is pathologic and requires workup (e.g., ABO/Rh incompatibility); physiologic jaundice appears after 24 hr.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "This is expected physiologic jaundice."
          },
          {
            "id": "B",
            "text": "This is considered pathologic jaundice and requires further workup."
          },
          {
            "id": "C",
            "text": "This finding is unrelated to bilirubin levels."
          },
          {
            "id": "D",
            "text": "This is a normal finding related to breastfeeding jaundice."
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "31",
        "label": "Question 31",
        "category": "Normal Newborn Assessment & Care",
        "prompt": "Which of the following findings 2 hours post-circumcision requires immediate provider notification?",
        "rationale": "Steady bright red bleeding after circumcision requires immediate notification; the other findings are expected/minor.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "A small amount of yellow exudate on the glans"
          },
          {
            "id": "B",
            "text": "Steady bright red bleeding from the circumcision site"
          },
          {
            "id": "C",
            "text": "Mild swelling of the glans"
          },
          {
            "id": "D",
            "text": "Newborn fussiness that is relieved by holding"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "32",
        "label": "Question 32",
        "category": "Normal Newborn Assessment & Care",
        "prompt": "A newborn is 3 days old. Which stool description should the nurse expect at this time?",
        "rationale": "Day 3 = transitional stool (thin, sticky, greenish-brown); meconium is days 1–2, milk stool begins around day 4.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Thick, tarry, black-green meconium"
          },
          {
            "id": "B",
            "text": "Thin, sticky, greenish-brown transitional stool"
          },
          {
            "id": "C",
            "text": "Yellow-gold, pasty stool typical of a fully established breastfed pattern"
          },
          {
            "id": "D",
            "text": "Formed, brown, formula-typical stool"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "33",
        "label": "Question 33",
        "category": "Normal Newborn Assessment & Care",
        "prompt": "A nurse is assessing a newborn's skin. Which of the following findings should the nurse identify as expected, benign variants?",
        "rationale": "Erythema toxicum, harlequin sign, hemangioma, and Mongolian spots are expected benign variants. Central cyanosis of the trunk/lips is abnormal and requires follow-up.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Erythema toxicum"
          },
          {
            "id": "B",
            "text": "Harlequin sign"
          },
          {
            "id": "C",
            "text": "Nevus vasculosus (strawberry hemangioma)"
          },
          {
            "id": "D",
            "text": "Central cyanosis of the trunk and lips"
          },
          {
            "id": "E",
            "text": "Mongolian spots"
          }
        ],
        "multiple": true,
        "correct": [
          "A",
          "B",
          "C",
          "E"
        ],
        "format": "Select all that apply"
      },
      {
        "id": "34",
        "label": "Question 34",
        "category": "Normal Newborn Assessment & Care",
        "prompt": "Which of the following findings on a newborn examination is most consistent with developmental dysplasia of the hip?",
        "rationale": "Asymmetric thigh/gluteal folds with a positive Ortolani sign are classic for developmental dysplasia of the hip.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Symmetric gluteal folds bilaterally"
          },
          {
            "id": "B",
            "text": "Asymmetric thigh folds with a positive Ortolani sign"
          },
          {
            "id": "C",
            "text": "Full, symmetric hip abduction bilaterally"
          },
          {
            "id": "D",
            "text": "Equal leg lengths with symmetric knee height in flexion"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "35",
        "label": "Question 35",
        "category": "Newborn Complications / Prematurity",
        "prompt": "A nurse is assessing a newborn born at 32 weeks of gestation who is exhibiting signs of respiratory distress. Which of the following findings should the nurse identify as primary manifestations of respiratory distress syndrome (RDS)?",
        "rationale": "Tachypnea, expiratory grunting, and substernal/intercostal retractions are RDS manifestations. Full flexion/vigorous cry and a resolving rash are unrelated distractors.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Tachypnea greater than 60/min"
          },
          {
            "id": "B",
            "text": "Expiratory grunting"
          },
          {
            "id": "C",
            "text": "Full flexion of extremities with a vigorous cry"
          },
          {
            "id": "D",
            "text": "Substernal and intercostal retractions"
          },
          {
            "id": "E",
            "text": "Fine, generalized rash that resolves within 24 hr"
          }
        ],
        "multiple": true,
        "correct": [
          "A",
          "B",
          "D"
        ],
        "format": "Select all that apply"
      },
      {
        "id": "36",
        "label": "Question 36",
        "category": "Newborn Complications / Prematurity",
        "prompt": "A preterm newborn is experiencing cold stress. Which of the following physiologic sequences correctly describes the resulting cascade?",
        "rationale": "Cold stress leads to increased oxygen consumption, anaerobic glycolysis, and metabolic acidosis.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Decreased oxygen consumption, respiratory alkalosis, improved perfusion"
          },
          {
            "id": "B",
            "text": "Increased oxygen consumption, anaerobic glycolysis, metabolic acidosis"
          },
          {
            "id": "C",
            "text": "Increased core temperature, vasodilation, improved glucose metabolism"
          },
          {
            "id": "D",
            "text": "Decreased peripheral vasoconstriction, increased oxygen delivery to tissues"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "37",
        "label": "Question 37",
        "category": "Newborn Complications / Prematurity",
        "prompt": "A nurse is caring for an infant of a diabetic mother (IDM). Which of the following findings should the nurse anticipate?",
        "rationale": "Hypoglycemia, macrosomia, polycythemia, and respiratory distress are expected in IDM. \"Hypobilirubinemia\" is a distractor — IDM infants are at risk for HYPERbilirubinemia, not hypo-.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Hypoglycemia"
          },
          {
            "id": "B",
            "text": "Macrosomia"
          },
          {
            "id": "C",
            "text": "Polycythemia"
          },
          {
            "id": "D",
            "text": "Hypobilirubinemia"
          },
          {
            "id": "E",
            "text": "Respiratory distress"
          }
        ],
        "multiple": true,
        "correct": [
          "A",
          "B",
          "C",
          "E"
        ],
        "format": "Select all that apply"
      },
      {
        "id": "38",
        "label": "Question 38",
        "category": "Newborn Complications / Prematurity",
        "prompt": "Which of the following maternal conditions is most associated with a large for gestational age (LGA) newborn?",
        "rationale": "Poorly controlled gestational diabetes is a leading cause of fetal macrosomia/LGA. Chronic HTN and severe preeclampsia cause placental insufficiency and are associated with SGA/IUGR instead.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Chronic hypertension with vascular disease"
          },
          {
            "id": "B",
            "text": "Poorly controlled gestational diabetes"
          },
          {
            "id": "C",
            "text": "Maternal smoking throughout pregnancy"
          },
          {
            "id": "D",
            "text": "Severe preeclampsia with placental insufficiency"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "39",
        "label": "Question 39",
        "category": "Newborn Complications / Prematurity",
        "prompt": "During phototherapy for hyperbilirubinemia, the newborn's ______ and genitalia must be covered/protected.",
        "rationale": "Eyes.",
        "rationaleSource": "provided",
        "type": "text",
        "format": "Fill in the blank",
        "fields": [
          {
            "label": "Body part",
            "answer": "Eyes",
            "accepted": [
              "Eyes",
              "eye"
            ],
            "unit": ""
          }
        ]
      },
      {
        "id": "40",
        "label": "Question 40",
        "category": "Newborn Complications / Prematurity",
        "prompt": "Which of the following findings in a preterm newborn should the nurse identify as an early sign of necrotizing enterocolitis?",
        "rationale": "Abdominal distention with bloody stools is an early/classic sign of necrotizing enterocolitis.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Increased interest in feeding"
          },
          {
            "id": "B",
            "text": "Abdominal distention with bloody stools"
          },
          {
            "id": "C",
            "text": "Decreased gastric residuals"
          },
          {
            "id": "D",
            "text": "A firm, flat abdomen with active bowel sounds"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "41",
        "label": "Question 41",
        "category": "Newborn Complications / Prematurity",
        "prompt": "Which of the following is the primary modifiable risk factor for retinopathy of prematurity?",
        "rationale": "Prolonged supplemental oxygen exposure is the primary modifiable risk factor for ROP.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Prolonged exposure to supplemental oxygen"
          },
          {
            "id": "B",
            "text": "Maternal use of prenatal vitamins"
          },
          {
            "id": "C",
            "text": "Vaginal birth versus cesarean birth"
          },
          {
            "id": "D",
            "text": "Delayed cord clamping"
          }
        ],
        "multiple": false,
        "correct": [
          "A"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "42",
        "label": "Question 42",
        "category": "Newborn Complications / Prematurity",
        "prompt": "Which of the following newborn findings is most consistent with transient tachypnea of the newborn (TTN) rather than respiratory distress syndrome (RDS)?",
        "rationale": "Mild tachypnea after cesarean birth that resolves within 24–72 hr is classic TTN, related to retained fetal lung fluid.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Onset of severe respiratory distress immediately at birth in an extremely preterm infant"
          },
          {
            "id": "B",
            "text": "Mild tachypnea beginning shortly after a cesarean birth that improves within 24 to 72 hours"
          },
          {
            "id": "C",
            "text": "Progressive worsening of grunting and retractions over the first week of life"
          },
          {
            "id": "D",
            "text": "Absent breath sounds bilaterally with a scaphoid abdomen"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "bowtie-c",
        "label": "Bowtie C",
        "category": "Newborn Complications / Prematurity",
        "prompt": "A nurse is caring for a newborn of a diabetic mother who is 2 hr old. The newborn is jittery, temperature is 36.1° C (97° F), respiratory rate is 74/min with grunting, blood glucose is 32 mg/dL, and the newborn is feeding poorly.\nComplete the bowtie by selecting the condition most likely occurring, TWO actions the nurse should take, and TWO parameters the nurse should monitor.",
        "rationale": "Neonatal hypoglycemia is the best listed condition. Give prompt IV glucose and recheck. Monitor glucose with respiratory status or temperature. Poor feeding and respiratory distress make oral-first management unsafe; assess other causes of illness too.",
        "rationaleSource": "reviewed",
        "type": "groups",
        "format": "Bowtie",
        "groups": [
          {
            "id": "condition",
            "label": "Most likely condition",
            "selectionCount": 1,
            "options": [
              {
                "id": "A",
                "text": "Neonatal hypoglycemia"
              },
              {
                "id": "B",
                "text": "Neonatal sepsis"
              },
              {
                "id": "C",
                "text": "Transient tachypnea of the newborn"
              },
              {
                "id": "D",
                "text": "Hypothermia alone"
              }
            ],
            "correct": [
              "A"
            ]
          },
          {
            "id": "actions",
            "label": "Actions to take",
            "selectionCount": 2,
            "options": [
              {
                "id": "A",
                "text": "Administer IV dextrose promptly per neonatal hypoglycemia protocol; do not delay for an oral feeding attempt."
              },
              {
                "id": "B",
                "text": "Recheck blood glucose after intervention"
              },
              {
                "id": "C",
                "text": "Notify the healthcare provider"
              },
              {
                "id": "D",
                "text": "Delay feeding until glucose stabilizes on its own"
              },
              {
                "id": "E",
                "text": "Administer antibiotics empirically without further assessment"
              }
            ],
            "correct": [
              "A",
              "B"
            ]
          },
          {
            "id": "monitoring",
            "label": "Parameters to monitor",
            "selectionCount": 2,
            "options": [
              {
                "id": "A",
                "text": "Blood glucose trend"
              },
              {
                "id": "B",
                "text": "Respiratory effort and rate"
              },
              {
                "id": "C",
                "text": "Temperature"
              },
              {
                "id": "D",
                "text": "Amniotic fluid color"
              },
              {
                "id": "E",
                "text": "Maternal blood type"
              }
            ],
            "correct": [
              "A",
              "B"
            ],
            "acceptedSets": [
              [
                "A",
                "B"
              ],
              [
                "A",
                "C"
              ]
            ]
          }
        ],
        "reviewNote": "Corrected oral-first treatment for a symptomatic newborn with hypoglycemia and respiratory distress. Either monitoring alternative in the original key is accepted.",
        "references": [
          {
            "title": "AAP: neonatal glucose management",
            "url": "https://publications.aap.org/pediatrics/article/127/3/e20103851/65026/Postnatal-Glucose-Homeostasis-in-Late-Preterm-and"
          }
        ]
      },
      {
        "id": "43",
        "label": "Question 43",
        "category": "Contraception",
        "prompt": "A nurse is assessing a client for use of an intrauterine device (IUD). Which of the following findings is a contraindication to this method?",
        "rationale": "Active cervicitis/STI is a contraindication to IUD placement (risk of ascending infection). Hypertension, multiple gestation history, and thromboembolic disease history are NOT contraindications to IUD use.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "History of hypertension"
          },
          {
            "id": "B",
            "text": "History of multiple gestations"
          },
          {
            "id": "C",
            "text": "Active cervicitis"
          },
          {
            "id": "D",
            "text": "History of thromboembolic disease"
          }
        ],
        "multiple": false,
        "correct": [
          "C"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "44",
        "label": "Question 44",
        "category": "Contraception",
        "prompt": "A nurse is counseling a client about depot medroxyprogesterone acetate (Depo-Provera). Which of the following adverse effects should the nurse include in teaching?",
        "rationale": "Depo-Provera is associated with decreased bone mineral density with prolonged use.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Increased bone mineral density with prolonged use"
          },
          {
            "id": "B",
            "text": "Decreased bone mineral density with prolonged use"
          },
          {
            "id": "C",
            "text": "Increased fertility return within 1 week of discontinuation"
          },
          {
            "id": "D",
            "text": "Guaranteed protection against sexually transmitted infections"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "45",
        "label": "Question 45",
        "category": "Contraception",
        "prompt": "A nurse is teaching a client about the subdermal progestin implant. Which of the following statements is accurate?",
        "rationale": "Nexplanon is a progestin-only implant approved in the U.S. for up to 5 years, with no daily dosing.",
        "rationaleSource": "reviewed",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "\"The implant must be replaced every year.\""
          },
          {
            "id": "B",
            "text": "The etonogestrel implant (Nexplanon) provides contraception for up to 5 years."
          },
          {
            "id": "C",
            "text": "\"The implant contains both estrogen and progestin.\""
          },
          {
            "id": "D",
            "text": "\"The implant requires daily maintenance dosing.\""
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice",
        "reviewNote": "Updated the etonogestrel implant duration from 3 years to the current U.S. 5-year approval.",
        "references": [
          {
            "title": "FDA: Nexplanon prescribing information",
            "url": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/021529s027lbl.pdf"
          }
        ]
      },
      {
        "id": "46",
        "label": "Question 46",
        "category": "Contraception",
        "prompt": "If the Xulane contraceptive patch, following its product labeling, has been detached for more than ______ hours, the client should use a backup method of contraception for 7 days.",
        "rationale": "The Xulane label uses a 24-hour detachment threshold (or unknown duration): start a new cycle and use backup for 7 days.",
        "rationaleSource": "reviewed",
        "type": "text",
        "format": "Fill in the blank",
        "fields": [
          {
            "label": "Hours",
            "answer": "24",
            "accepted": [
              "24",
              "twenty four",
              "twenty-four"
            ],
            "unit": "hours"
          }
        ],
        "reviewNote": "Specified Xulane labeling; detachment instructions differ from general CDC missed-patch guidance.",
        "references": [
          {
            "title": "Xulane prescribing information",
            "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f7848550-086a-43d8-8ae5-047f4b9e4382"
          }
        ]
      },
      {
        "id": "47",
        "label": "Question 47",
        "category": "Contraception",
        "prompt": "A nurse is identifying contraindications to combined hormonal contraceptives. Select all that apply.",
        "rationale": "Migraine with aura, smoker ≥35 years, uncontrolled hypertension, and history of DVT are contraindications to combined hormonal contraception. History of ectopic pregnancy is NOT a contraindication.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Migraine with aura"
          },
          {
            "id": "B",
            "text": "Smoker who is 38 years old"
          },
          {
            "id": "C",
            "text": "Uncontrolled hypertension"
          },
          {
            "id": "D",
            "text": "History of ectopic pregnancy"
          },
          {
            "id": "E",
            "text": "History of deep vein thrombosis"
          }
        ],
        "multiple": true,
        "correct": [
          "A",
          "B",
          "C",
          "E"
        ],
        "format": "Select all that apply"
      },
      {
        "id": "48",
        "label": "Question 48",
        "category": "Contraception",
        "prompt": "Which of the following clients meets the criteria for the Lactation Amenorrhea Method (LAM) as an effective form of contraception?",
        "rationale": "LAM requires exclusive breastfeeding, amenorrhea, AND an infant less than 6 months old — option A meets all three criteria.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Exclusively breastfeeding, infant is 4 months old, amenorrheic"
          },
          {
            "id": "B",
            "text": "Supplementing with formula twice daily, infant is 2 months old, amenorrheic"
          },
          {
            "id": "C",
            "text": "Exclusively breastfeeding, infant is 8 months old, amenorrheic"
          },
          {
            "id": "D",
            "text": "Breastfeeding on demand, infant is 3 months old, menstrual period has resumed"
          }
        ],
        "multiple": false,
        "correct": [
          "A"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "49",
        "label": "Question 49",
        "category": "Contraception",
        "prompt": "A nurse is teaching a client about the cervical mucus method of fertility awareness. Which of the following statements indicates a need for further teaching?",
        "rationale": "INCORRECT statement: fertile-type mucus means the client SHOULD avoid intercourse if trying to prevent pregnancy, not that she doesn't need to.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "\"Mucus that is clear, stretchy, and slippery indicates peak fertility.\""
          },
          {
            "id": "B",
            "text": "\"Dry, sticky mucus is present during the least fertile days.\""
          },
          {
            "id": "C",
            "text": "\"I should check my mucus at the same time every day.\""
          },
          {
            "id": "D",
            "text": "\"Fertile-type mucus means I don't need to avoid intercourse during this time.\""
          }
        ],
        "multiple": false,
        "correct": [
          "D"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "50",
        "label": "Question 50",
        "category": "Contraception",
        "prompt": "A client asks about the risk of ectopic pregnancy if a tubal ligation fails. Which of the following responses is accurate?",
        "rationale": "Pregnancy is uncommon after tubal sterilization, but a pregnancy that occurs requires prompt evaluation to exclude an ectopic pregnancy.",
        "rationaleSource": "reviewed",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "\"There is no increased risk of ectopic pregnancy with tubal ligation failure.\""
          },
          {
            "id": "B",
            "text": "If pregnancy occurs after tubal ligation, ectopic pregnancy is an important risk and needs prompt evaluation."
          },
          {
            "id": "C",
            "text": "\"The risk of ectopic pregnancy is lower after tubal ligation than in the general population.\""
          },
          {
            "id": "D",
            "text": "\"Ectopic pregnancy risk applies only to vasectomy failures, not tubal ligation.\""
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice",
        "reviewNote": "Removed an overly broad percentage range; the key teaching point is prompt evaluation for ectopic pregnancy after sterilization failure.",
        "references": [
          {
            "title": "ACOG: pregnancy after sterilization",
            "url": "https://www.acog.org/womens-health/experts-and-stories/the-latest/thinking-about-sterilization-heres-what-to-know"
          }
        ]
      },
      {
        "id": "51",
        "label": "Question 51",
        "category": "Contraception",
        "prompt": "A client presents 4 days after unprotected intercourse requesting emergency contraception. Which of the following options is most effective for this client?",
        "rationale": "Copper IUD is the most effective emergency contraception option and can be inserted up to 5 days after unprotected intercourse.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Levonorgestrel single-dose pill"
          },
          {
            "id": "B",
            "text": "Combined oral contraceptive (Yuzpe method)"
          },
          {
            "id": "C",
            "text": "Copper IUD insertion"
          },
          {
            "id": "D",
            "text": "Progestin-only mini-pill initiation"
          }
        ],
        "multiple": false,
        "correct": [
          "C"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "52",
        "label": "Question 52",
        "category": "Contraception",
        "prompt": "A client using the etonogestrel/ethinyl estradiol vaginal ring (NuvaRing) reports it was out for 6 hours in week 2. Following its product labeling, which instruction should the nurse provide?",
        "rationale": "Under this ring’s product labeling, being out for more than 3 continuous hours in week 2 requires reinsertion and backup for 7 days.",
        "rationaleSource": "reviewed",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "\"You need to use a backup method of contraception for the next 7 days.\""
          },
          {
            "id": "B",
            "text": "\"You may reinsert the ring now with no additional precautions needed.\""
          },
          {
            "id": "C",
            "text": "\"You should discard this ring and wait until your next cycle to start a new one.\""
          },
          {
            "id": "D",
            "text": "\"This requires emergency contraception due to the length of time out.\""
          }
        ],
        "multiple": false,
        "correct": [
          "A"
        ],
        "format": "Multiple choice",
        "reviewNote": "Specified the etonogestrel/ethinyl estradiol ring label; advice varies by ring and guideline.",
        "references": [
          {
            "title": "NuvaRing prescribing information",
            "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=19ef66d1-913f-49a8-a0a5-59b4e20322f5"
          }
        ]
      },
      {
        "id": "53",
        "label": "Question 53",
        "category": "Sexually Transmitted Infections",
        "prompt": "A client presents with a diffuse maculopapular rash on the palms and soles, lymphadenopathy, and flu-like symptoms. Which stage of syphilis is most consistent with these findings?",
        "rationale": "Secondary syphilis presents with a maculopapular rash on the palms/soles, lymphadenopathy, and flu-like symptoms.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Primary syphilis"
          },
          {
            "id": "B",
            "text": "Secondary syphilis"
          },
          {
            "id": "C",
            "text": "Latent syphilis"
          },
          {
            "id": "D",
            "text": "Tertiary syphilis"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "54",
        "label": "Question 54",
        "category": "Sexually Transmitted Infections",
        "prompt": "A nurse is providing education about the HPV vaccine (Gardasil) to the parent of an 11-year-old. Which of the following statements is accurate?",
        "rationale": "The HPV vaccine series is typically completed over about 6 months (2 doses 6–12 months apart for those starting before age 15).",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "\"The vaccine is given as a single dose at this age.\""
          },
          {
            "id": "B",
            "text": "\"The vaccine series should be completed over approximately 6 months.\""
          },
          {
            "id": "C",
            "text": "\"This vaccine cannot be started until age 15.\""
          },
          {
            "id": "D",
            "text": "\"This vaccine is only recommended for female children.\""
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "55",
        "label": "Question 55",
        "category": "Sexually Transmitted Infections",
        "prompt": "A nurse is assessing a client for pelvic inflammatory disease (PID). Which of the following findings should the nurse identify as consistent with this diagnosis?",
        "rationale": "Lower abdominal tenderness, cervical motion tenderness, and adnexal tenderness are consistent with PID. A painless ulcer is a syphilis chancre, and PID INCREASES infertility risk (the option stating \"increased fertility\" is incorrect).",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Lower abdominal tenderness"
          },
          {
            "id": "B",
            "text": "Cervical motion tenderness"
          },
          {
            "id": "C",
            "text": "A painless genital ulcer"
          },
          {
            "id": "D",
            "text": "Adnexal tenderness"
          },
          {
            "id": "E",
            "text": "Increased fertility as a long-term outcome"
          }
        ],
        "multiple": true,
        "correct": [
          "A",
          "B",
          "D"
        ],
        "format": "Select all that apply"
      },
      {
        "id": "56",
        "label": "Question 56",
        "category": "Sexually Transmitted Infections",
        "prompt": "A nurse is caring for a client diagnosed with gonorrhea. Which of the following treatment plans should the nurse anticipate if chlamydia co-infection cannot be ruled out?",
        "rationale": "Ceftriaxone plus doxycycline is standard when chlamydia co-infection cannot be excluded.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Ceftriaxone single IM dose only"
          },
          {
            "id": "B",
            "text": "Ceftriaxone single IM dose plus doxycycline"
          },
          {
            "id": "C",
            "text": "Metronidazole single oral dose"
          },
          {
            "id": "D",
            "text": "Acyclovir for 7 to 10 days"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "57",
        "label": "Question 57",
        "category": "Sexually Transmitted Infections",
        "prompt": "A pregnant client with HIV has a viral load of 1,500 copies/mL at 38 weeks of gestation. Which of the following birth plans should the nurse anticipate?",
        "rationale": "A viral load >1,000 copies/mL near delivery warrants a scheduled cesarean birth to reduce perinatal transmission risk.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Vaginal birth with continuous fetal monitoring"
          },
          {
            "id": "B",
            "text": "Scheduled cesarean birth to reduce the risk of transmission"
          },
          {
            "id": "C",
            "text": "Induction of labor with early amniotomy"
          },
          {
            "id": "D",
            "text": "Vaginal birth with routine artificial rupture of membranes"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "58",
        "label": "Question 58",
        "category": "Sexually Transmitted Infections",
        "prompt": "A nurse is caring for a client diagnosed with trichomoniasis who has been prescribed metronidazole. Which of the following instructions should the nurse include regarding the client's partner?",
        "rationale": "Partner treatment plus abstinence until treatment is complete are required, regardless of partner symptoms.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "\"Your partner does not need treatment unless he has symptoms.\""
          },
          {
            "id": "B",
            "text": "\"Your partner should be treated only if a culture confirms infection.\""
          },
          {
            "id": "C",
            "text": "\"Your partner needs treatment, and you should avoid intercourse until treatment is complete.\""
          },
          {
            "id": "D",
            "text": "\"Your partner only needs treatment if you have more than one sexual partner.\""
          }
        ],
        "multiple": false,
        "correct": [
          "C"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "59",
        "label": "Question 59",
        "category": "Breast and Formula Feeding",
        "prompt": "A breastfeeding client is diagnosed with mastitis. Which of the following instructions should the nurse include?",
        "rationale": "Continue usual feeding or expression to meet the infant’s needs. Avoid extra pumping to empty, which can worsen inflammation; treat bacterial mastitis as prescribed.",
        "rationaleSource": "reviewed",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "\"You should stop breastfeeding on the affected side until the infection resolves.\""
          },
          {
            "id": "B",
            "text": "Continue breastfeeding or expressing milk to match the infant’s needs; avoid excessive pumping to empty."
          },
          {
            "id": "C",
            "text": "\"Apply cold compresses only, and avoid antibiotics.\""
          },
          {
            "id": "D",
            "text": "\"Discontinue breastfeeding entirely and transition to formula.\""
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice",
        "reviewNote": "Clarified that physiologic feeding should continue without excessive pumping to empty.",
        "references": [
          {
            "title": "Academy of Breastfeeding Medicine: mastitis protocol",
            "url": "https://www.bfmed.org/assets/ABM%20Protocol%20%2336.pdf"
          }
        ]
      },
      {
        "id": "60",
        "label": "Question 60",
        "category": "Breast and Formula Feeding",
        "prompt": "A nurse is identifying maternal contraindications to breastfeeding. Select all that apply.",
        "rationale": "Untreated HIV without ART and cytotoxic chemotherapy require avoiding breast milk. Untreated active TB requires temporary separation from direct breastfeeding; expressed milk may be used if otherwise safe.",
        "rationaleSource": "reviewed",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Active HIV infection without antiretroviral therapy"
          },
          {
            "id": "B",
            "text": "Maternal use of cytotoxic chemotherapy"
          },
          {
            "id": "C",
            "text": "Well-controlled hypothyroidism"
          },
          {
            "id": "D",
            "text": "Active untreated tuberculosis"
          },
          {
            "id": "E",
            "text": "Occasional caffeine intake"
          }
        ],
        "multiple": true,
        "correct": [
          "A",
          "B",
          "D"
        ],
        "format": "Select all that apply",
        "reviewNote": "Clarified that untreated active TB temporarily prevents direct breastfeeding, while expressed milk may be given by another caregiver.",
        "references": [
          {
            "title": "CDC: breastfeeding contraindications",
            "url": "https://www.cdc.gov/breastfeeding-special-circumstances/hcp/contraindications/"
          }
        ]
      },
      {
        "id": "61",
        "label": "Question 61",
        "category": "Breast and Formula Feeding",
        "prompt": "A nurse is teaching a client about prepared formula storage. Which of the following statements indicates a need for further teaching?",
        "rationale": "Bottles/formula should NEVER sit out for 6 hours; formula left at room temperature over 1–2 hours should be discarded.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "\"Opened, ready-to-feed formula can be refrigerated for 24 to 48 hours.\""
          },
          {
            "id": "B",
            "text": "\"Formula left at room temperature for more than 2 hours should be discarded.\""
          },
          {
            "id": "C",
            "text": "\"I can leave a partially finished bottle out for up to 6 hours and still use it later.\""
          },
          {
            "id": "D",
            "text": "\"Powdered formula mixed with water should be used within 24 hours if refrigerated.\""
          }
        ],
        "multiple": false,
        "correct": [
          "C"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "62",
        "label": "Question 62",
        "category": "Breast and Formula Feeding",
        "prompt": "A nurse is teaching a client about breast milk storage. Which of the following statements indicates correct understanding?",
        "rationale": "Fresh breast milk is safe at room temperature for up to 4 hours.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "\"Fresh breast milk can stay at room temperature for up to 4 hours.\""
          },
          {
            "id": "B",
            "text": "\"Breast milk in the freezer is only good for 2 weeks.\""
          },
          {
            "id": "C",
            "text": "\"Thawed breast milk can be safely refrozen.\""
          },
          {
            "id": "D",
            "text": "\"Refrigerated breast milk should be discarded after 24 hours.\""
          }
        ],
        "multiple": false,
        "correct": [
          "A"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "63",
        "label": "Question 63",
        "category": "Breast and Formula Feeding",
        "prompt": "A lactating client requires an additional ______ calories per day compared to her prepregnancy caloric needs.",
        "rationale": "500 calories.",
        "rationaleSource": "reviewed",
        "type": "text",
        "format": "Fill in the blank",
        "fields": [
          {
            "label": "Additional calories per day",
            "answer": "500",
            "accepted": [
              "500",
              "450",
              "450–500",
              "450 to 500"
            ],
            "unit": "calories"
          }
        ],
        "reviewNote": "Accepted the supplied ACOG-style estimate of 450–500 calories; needs are individualized and other guidelines use different estimates.",
        "references": [
          {
            "title": "ACOG: breastfeeding nutrition",
            "url": "https://www.acog.org/womens-health/faqs/breastfeeding-your-baby"
          }
        ]
      },
      {
        "id": "64",
        "label": "Question 64",
        "category": "Breast and Formula Feeding",
        "prompt": "A nurse is providing anticipatory guidance to a breastfeeding client regarding pacifier use. Which of the following statements is most accurate?",
        "rationale": "Establishing breastfeeding for several weeks before introducing a pacifier helps avoid nipple confusion/early weaning.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "\"Introduce a pacifier within the first few days to help establish sucking patterns.\""
          },
          {
            "id": "B",
            "text": "\"It is generally recommended to establish breastfeeding for several weeks before introducing a pacifier.\""
          },
          {
            "id": "C",
            "text": "\"Pacifiers should never be used for breastfed infants under any circumstances.\""
          },
          {
            "id": "D",
            "text": "\"Pacifier use has no effect on breastfeeding establishment.\""
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "65",
        "label": "Question 65",
        "category": "Breast and Formula Feeding",
        "prompt": "A nurse is assessing a breastfed newborn who is 5 days old. Which of the following findings indicates adequate intake?",
        "rationale": "6–8 wet diapers and a transition to yellow, seedy stools by day 5 indicates adequate intake.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "2 wet diapers and 1 stool per day"
          },
          {
            "id": "B",
            "text": "6 to 8 wet diapers per day with transition to yellow, seedy stools"
          },
          {
            "id": "C",
            "text": "Weight loss of 12% from birth weight"
          },
          {
            "id": "D",
            "text": "Continued passage of meconium stool"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "66",
        "label": "Question 66",
        "category": "Breast and Formula Feeding",
        "prompt": "A client asks why her provider recommended she allow her infant to fully empty one breast before switching to the other during feedings. Which of the following is the best explanation by the nurse?",
        "rationale": "Emptying one breast fully ensures the infant receives both watery/protein-rich foremilk and fat/calorie-dense hindmilk.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "\"This ensures your baby receives both the lower-fat foremilk and the higher-fat hindmilk for adequate caloric intake.\""
          },
          {
            "id": "B",
            "text": "\"This prevents nipple confusion between breasts.\""
          },
          {
            "id": "C",
            "text": "\"This technique increases your milk supply more quickly than alternating breasts.\""
          },
          {
            "id": "D",
            "text": "\"This is only necessary if you are supplementing with formula.\""
          }
        ],
        "multiple": false,
        "correct": [
          "A"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "67",
        "label": "Question 67",
        "category": "Antepartum / Prenatal Care",
        "prompt": "A client is currently pregnant with twins. Her obstetric history includes one prior birth at 38 weeks (singleton), one prior birth at 35 weeks (singleton), and one second-trimester pregnancy loss at 16 weeks. Which of the following GTPAL values is correct?",
        "rationale": "G4 (3 prior pregnancies + current), T1 (one term birth at 38 wk), P1 (one preterm birth at 35 wk), A1 (16-week loss counts as an abortion, <20 weeks), L2 (two living children).",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "G4 T1 P1 A1 L2"
          },
          {
            "id": "B",
            "text": "G3 T1 P1 A1 L2"
          },
          {
            "id": "C",
            "text": "G4 T1 P2 A0 L2"
          },
          {
            "id": "D",
            "text": "G4 T2 P0 A1 L2"
          }
        ],
        "multiple": false,
        "correct": [
          "A"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "68",
        "label": "Question 68",
        "category": "Antepartum / Prenatal Care",
        "prompt": "A client's last menstrual period began on November 20. Using Naegele's rule, which of the following is the client's estimated date of delivery?",
        "rationale": "LMP Nov 20 minus 3 months = Aug 20, plus 7 days = August 27.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "August 20"
          },
          {
            "id": "B",
            "text": "August 27"
          },
          {
            "id": "C",
            "text": "September 3"
          },
          {
            "id": "D",
            "text": "August 13"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "69",
        "label": "Question 69",
        "category": "Pregnancy Complications — Diabetes & Hypertension",
        "prompt": "A client's 3-hour oral glucose tolerance test results are: fasting 94 mg/dL, 1 hr 179 mg/dL, 2 hr 156 mg/dL, 3 hr 138 mg/dL. Which of the following is the correct interpretation?",
        "rationale": "Only the 2-hr value (156, cutoff ≥155) is abnormal; diagnosis of GDM requires TWO or more abnormal values, so this is NOT diagnostic despite one abnormal result.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Not diagnostic of gestational diabetes; only one value is abnormal"
          },
          {
            "id": "B",
            "text": "Diagnostic of gestational diabetes; two values are abnormal"
          },
          {
            "id": "C",
            "text": "Diagnostic of gestational diabetes; all four values are abnormal"
          },
          {
            "id": "D",
            "text": "The test is invalid and must be repeated immediately"
          }
        ],
        "multiple": false,
        "correct": [
          "A"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "70",
        "label": "Question 70",
        "category": "Pregnancy Complications — Diabetes & Hypertension",
        "prompt": "A nurse is reviewing labs for a client with severe preeclampsia. Which of the following findings is most consistent with HELLP syndrome?",
        "rationale": "Low platelets, elevated AST, and evidence of hemolysis together indicate HELLP syndrome.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Platelets 220,000/mm3, AST 15 U/L, hemoglobin 13 g/dL"
          },
          {
            "id": "B",
            "text": "Platelets 90,000/mm3, AST 110 U/L, evidence of hemolysis on peripheral smear"
          },
          {
            "id": "C",
            "text": "Platelets 300,000/mm3, normal liver enzymes, normal hemoglobin"
          },
          {
            "id": "D",
            "text": "Platelets 250,000/mm3, AST within normal limits, elevated hematocrit"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "bowtie-b",
        "label": "Bowtie B",
        "category": "Pregnancy Complications — Diabetes & Hypertension",
        "prompt": "A client at 37 weeks of gestation with a blood pressure of 178/120 mm Hg has just had a generalized tonic-clonic seizure lasting 90 seconds and is now postictal.\nComplete the bowtie by selecting the condition most likely occurring, TWO actions the nurse should take, and TWO parameters the nurse should monitor.",
        "rationale": "Condition: Eclampsia. Actions: Maintain airway/turn to side; administer magnesium sulfate IV bolus. Parameters: Oxygen saturation; fetal heart rate (or maternal reflexes/clonus). A generalized seizure in this severely hypertensive pregnant client supports eclampsia. Protect the airway and position laterally, give prescribed magnesium, and monitor oxygenation and fetal status or maternal neurologic findings.",
        "rationaleSource": "reviewed",
        "type": "groups",
        "format": "Bowtie",
        "groups": [
          {
            "id": "condition",
            "label": "Most likely condition",
            "selectionCount": 1,
            "options": [
              {
                "id": "A",
                "text": "Eclampsia"
              },
              {
                "id": "B",
                "text": "Severe preeclampsia without seizure"
              },
              {
                "id": "C",
                "text": "Gestational hypertension"
              },
              {
                "id": "D",
                "text": "Chronic hypertension with superimposed preeclampsia"
              }
            ],
            "correct": [
              "A"
            ]
          },
          {
            "id": "actions",
            "label": "Actions to take",
            "selectionCount": 2,
            "options": [
              {
                "id": "A",
                "text": "Maintain the airway and turn the client to her side"
              },
              {
                "id": "B",
                "text": "Administer magnesium sulfate IV bolus per protocol"
              },
              {
                "id": "C",
                "text": "Restrain the client's extremities during the seizure"
              },
              {
                "id": "D",
                "text": "Leave the client alone to reduce stimulation"
              },
              {
                "id": "E",
                "text": "Prepare for expedited birth once the client is stabilized"
              }
            ],
            "correct": [
              "A",
              "B"
            ]
          },
          {
            "id": "monitoring",
            "label": "Parameters to monitor",
            "selectionCount": 2,
            "options": [
              {
                "id": "A",
                "text": "Oxygen saturation"
              },
              {
                "id": "B",
                "text": "Fetal heart rate"
              },
              {
                "id": "C",
                "text": "Maternal reflexes/clonus"
              },
              {
                "id": "D",
                "text": "Newborn Apgar score"
              },
              {
                "id": "E",
                "text": "Amniotic fluid index"
              }
            ],
            "correct": [
              "A",
              "B"
            ],
            "acceptedSets": [
              [
                "A",
                "B"
              ],
              [
                "A",
                "C"
              ]
            ]
          }
        ],
        "reviewNote": "The supplied selections are retained; an explanation of the case cues has been added.",
        "references": []
      },
      {
        "id": "71",
        "label": "Question 71",
        "category": "Fetal Monitoring",
        "prompt": "A nurse reviews an FHR tracing showing a smooth, wave-like undulating pattern with a baseline of 130/min, absent variability, and a cyclic frequency of 3 to 5 cycles per minute persisting for 25 minutes. Which of the following actions should the nurse take?",
        "rationale": "A sinusoidal pattern is a Category III tracing requiring immediate notification and expedited birth planning.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Document as a normal Category I tracing and continue routine monitoring."
          },
          {
            "id": "B",
            "text": "Recognize this as a Category III tracing and notify the provider immediately for expedited birth."
          },
          {
            "id": "C",
            "text": "Reposition the client and reassess in 30 minutes before taking further action."
          },
          {
            "id": "D",
            "text": "Apply a fetal scalp electrode to confirm the finding before intervening."
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "72",
        "label": "Question 72",
        "category": "Fetal Monitoring",
        "prompt": "A nurse reviews an FHR tracing with a baseline of 165/min, moderate variability, no decelerations, and occasional accelerations. Which of the following is the correct interpretation and initial action?",
        "rationale": "Tachycardia (>160/min) with otherwise reassuring findings (moderate variability, accelerations, no decels) is Category II; assess for cause (fever, infection) rather than assuming an emergency.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Category I tracing; no intervention is needed."
          },
          {
            "id": "B",
            "text": "Category II tracing due to tachycardia; continue monitoring and assess for an underlying cause (e.g., maternal fever)."
          },
          {
            "id": "C",
            "text": "Category III tracing; prepare for immediate cesarean birth."
          },
          {
            "id": "D",
            "text": "Category II tracing; immediately discontinue oxytocin and administer terbutaline."
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "73",
        "label": "Question 73",
        "category": "Labor Complications & Emergencies",
        "prompt": "A client attempting a VBAC reports sudden severe abdominal pain that then abruptly stops, along with loss of fetal station on vaginal exam and a Category III FHR tracing. Which of the following complications is most likely?",
        "rationale": "Sudden pain that ABRUPTLY STOPS plus loss of fetal station is the classic uterine rupture presentation (distinguishing it from abruption's persistent, worsening pain).",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Placental abruption"
          },
          {
            "id": "B",
            "text": "Uterine rupture"
          },
          {
            "id": "C",
            "text": "Umbilical cord prolapse"
          },
          {
            "id": "D",
            "text": "Vasa previa"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "74",
        "label": "Question 74",
        "category": "Labor Complications & Emergencies",
        "prompt": "A client develops sudden respiratory distress, hypotension, and cardiovascular collapse immediately after a rapid vaginal delivery, followed shortly by profuse hemorrhage and evidence of coagulopathy. Which of the following is most consistent with this presentation?",
        "rationale": "Sudden cardiovascular collapse with hypoxia immediately following rapid/tumultuous labor, followed by coagulopathy, is classic for amniotic fluid embolism.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Pulmonary embolism"
          },
          {
            "id": "B",
            "text": "Amniotic fluid embolism"
          },
          {
            "id": "C",
            "text": "Anaphylactic reaction to oxytocin"
          },
          {
            "id": "D",
            "text": "Postpartum cardiomyopathy"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "75",
        "label": "Question 75",
        "category": "Labor Complications & Emergencies",
        "prompt": "A nurse is assisting with a delivery complicated by shoulder dystocia. The McRoberts maneuver and suprapubic pressure have been unsuccessful. Which of the following maneuvers should the nurse anticipate assisting with next?",
        "rationale": "The Woods corkscrew maneuver (rotating the posterior shoulder) is the next step after McRoberts/suprapubic pressure fail. Fundal pressure is contraindicated.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Fundal pressure to force the shoulder under the symphysis"
          },
          {
            "id": "B",
            "text": "Woods corkscrew maneuver to rotate the posterior shoulder"
          },
          {
            "id": "C",
            "text": "Immediate cesarean birth with the fetal head still in the vagina"
          },
          {
            "id": "D",
            "text": "Zavanelli maneuver as the first-line intervention"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "76",
        "label": "Question 76",
        "category": "Labor Complications & Emergencies",
        "prompt": "A client with a history of two prior cesarean births and a current diagnosis of placenta previa is found to have placenta accreta on ultrasound. Which of the following should the nurse anticipate?",
        "rationale": "Placenta accreta greatly increases risk for postpartum hemorrhage and often requires hysterectomy due to abnormal placental attachment.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Increased likelihood of spontaneous placental separation at birth"
          },
          {
            "id": "B",
            "text": "Increased risk for postpartum hemorrhage and possible hysterectomy"
          },
          {
            "id": "C",
            "text": "No change in delivery plan compared to a client without accreta"
          },
          {
            "id": "D",
            "text": "Decreased risk of blood transfusion during birth"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "bowtie-d",
        "label": "Bowtie D",
        "category": "Labor Complications & Emergencies",
        "prompt": "A client's fetal head delivers but retracts against the perineum (\"turtle sign\"); the anterior shoulder cannot be delivered with gentle traction.\nComplete the bowtie by selecting the condition most likely occurring, TWO actions the nurse should take, and TWO parameters the nurse should monitor.",
        "rationale": "Condition: Shoulder dystocia. Actions: Call for help and note the time; assist into McRoberts position (or apply suprapubic pressure). Parameters: Time elapsed since head delivery; newborn status after birth. Head retraction and failure of the shoulder to deliver are the cues for shoulder dystocia. Call for help, use the prescribed maneuvers, and track elapsed time and newborn status because delivery can be compromised. Never apply fundal pressure.",
        "rationaleSource": "reviewed",
        "type": "groups",
        "format": "Bowtie",
        "groups": [
          {
            "id": "condition",
            "label": "Most likely condition",
            "selectionCount": 1,
            "options": [
              {
                "id": "A",
                "text": "Shoulder dystocia"
              },
              {
                "id": "B",
                "text": "Normal second stage of labor"
              },
              {
                "id": "C",
                "text": "Cephalopelvic disproportion requiring cesarean only"
              },
              {
                "id": "D",
                "text": "Breech presentation"
              }
            ],
            "correct": [
              "A"
            ]
          },
          {
            "id": "actions",
            "label": "Actions to take",
            "selectionCount": 2,
            "options": [
              {
                "id": "A",
                "text": "Call for additional help and note the time"
              },
              {
                "id": "B",
                "text": "Assist the client into the McRoberts position"
              },
              {
                "id": "C",
                "text": "Apply fundal pressure"
              },
              {
                "id": "D",
                "text": "Apply suprapubic pressure as directed"
              },
              {
                "id": "E",
                "text": "Continue routine coaching to push harder only"
              }
            ],
            "correct": [
              "A",
              "B"
            ],
            "acceptedSets": [
              [
                "A",
                "B"
              ],
              [
                "A",
                "D"
              ]
            ]
          },
          {
            "id": "monitoring",
            "label": "Parameters to monitor",
            "selectionCount": 2,
            "options": [
              {
                "id": "A",
                "text": "Time elapsed since head delivery"
              },
              {
                "id": "B",
                "text": "Newborn heart rate/status after birth"
              },
              {
                "id": "C",
                "text": "Maternal blood glucose"
              },
              {
                "id": "D",
                "text": "Fetal descent station before head delivery"
              },
              {
                "id": "E",
                "text": "Amniotic fluid volume"
              }
            ],
            "correct": [
              "A",
              "B"
            ]
          }
        ],
        "reviewNote": "The supplied selections are retained; an explanation of the case cues has been added.",
        "references": []
      }
    ]
  },
  {
    "id": "exam-3",
    "title": "Practice exam 3",
    "description": "Further practice",
    "questions": [
      {
        "id": "1",
        "label": "Question 1",
        "category": "Normal Postpartum Care",
        "prompt": "A nurse is assessing a client who is 4 days postpartum following a vaginal birth. Which of the following findings indicates normal progression of involution?",
        "rationale": "3–4 fingerbreadths below the umbilicus is expected on day 4 (fundus descends ~1–2 cm/day).",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Fundus palpable 4 cm above the umbilicus"
          },
          {
            "id": "B",
            "text": "Fundus firm, midline, approximately 3 to 4 fingerbreadths below the umbilicus"
          },
          {
            "id": "C",
            "text": "Fundus non-palpable in the abdomen"
          },
          {
            "id": "D",
            "text": "Fundus displaced 2 cm to the left of midline and soft"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "2",
        "label": "Question 2",
        "category": "Normal Postpartum Care",
        "prompt": "A client who is 5 days postpartum has lochia that is already white/yellow in color and minimal in amount. Which of the following should the nurse identify?",
        "rationale": "Lochia should NOT reach the alba stage until roughly 10–14 days; reaching it this early is unexpected and warrants follow-up.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "An expected finding, as lochia alba typically occurs by day 5"
          },
          {
            "id": "B",
            "text": "An unexpected finding, as lochia alba does not typically appear until approximately 10 to 14 days postpartum"
          },
          {
            "id": "C",
            "text": "An expected finding related to cesarean birth"
          },
          {
            "id": "D",
            "text": "A finding requiring immediate evaluation for hysterectomy"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "3",
        "label": "Question 3",
        "category": "Normal Postpartum Care",
        "prompt": "A nurse is assessing a client who is 20 hr postpartum. Which of the following findings should the nurse identify as expected physiologic adaptations?",
        "rationale": "Correct: bilateral mild edema, overnight diaphoresis, transient pulse elevation resolving within the first hour, and WBC 26,500 are ALL expected. Sustained BP elevation above baseline is NOT expected and suggests preeclampsia/other concern.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Bilateral mild dependent edema"
          },
          {
            "id": "B",
            "text": "Profuse diaphoresis noted overnight"
          },
          {
            "id": "C",
            "text": "Transient pulse elevation to 100/min that resolves within the first hour"
          },
          {
            "id": "D",
            "text": "WBC count of 26,500/mm3"
          },
          {
            "id": "E",
            "text": "Sustained blood pressure elevation above prenatal baseline"
          }
        ],
        "multiple": true,
        "correct": [
          "A",
          "B",
          "C",
          "D"
        ],
        "format": "Select all that apply"
      },
      {
        "id": "4",
        "label": "Question 4",
        "category": "Normal Postpartum Care",
        "prompt": "The uterus returns fully to the pelvis and generally becomes non-palpable abdominally by approximately ______ after birth.",
        "rationale": "Approximately 2 weeks.",
        "rationaleSource": "provided",
        "type": "text",
        "format": "Fill in the blank",
        "fields": [
          {
            "label": "Time after birth",
            "answer": "2 weeks",
            "accepted": [
              "2 weeks",
              "two weeks",
              "14 days",
              "two",
              "2"
            ],
            "unit": ""
          }
        ]
      },
      {
        "id": "5",
        "label": "Question 5",
        "category": "Normal Postpartum Care",
        "prompt": "Which letter in the BUBBLEHE postpartum assessment framework corresponds to the assessment of the client's vaginal discharge?",
        "rationale": "L = Lochia in the BUBBLEHE framework.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "B (breast)"
          },
          {
            "id": "B",
            "text": "U (uterus)"
          },
          {
            "id": "C",
            "text": "L (lochia)"
          },
          {
            "id": "D",
            "text": "E (episiotomy)"
          }
        ],
        "multiple": false,
        "correct": [
          "C"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "6",
        "label": "Question 6",
        "category": "Normal Postpartum Care",
        "prompt": "A nurse is caring for a client who chose not to breastfeed and reports breast engorgement and discomfort on postpartum day 2. Which of the following instructions should the nurse include?",
        "rationale": "For clients not breastfeeding, ice packs and avoiding stimulation help suppress milk production; warmth/expression would worsen engorgement.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Apply warm compresses and express milk frequently."
          },
          {
            "id": "B",
            "text": "Apply ice packs and avoid nipple/breast stimulation."
          },
          {
            "id": "C",
            "text": "Take a prescribed prolactin-stimulating medication."
          },
          {
            "id": "D",
            "text": "Massage the breasts vigorously every hour."
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "7",
        "label": "Question 7",
        "category": "Normal Postpartum Care",
        "prompt": "A nurse is identifying risk factors for delayed maternal-infant attachment. Which of the following should the nurse identify as risk factors?",
        "rationale": "Substance use disorder, multiples in the NICU, and a visible congenital anomaly are risk factors for delayed attachment. History of infertility treatment and an uncomplicated vaginal birth are not inherent risk factors.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Maternal substance use disorder"
          },
          {
            "id": "B",
            "text": "Multiple gestation with both infants admitted to the NICU"
          },
          {
            "id": "C",
            "text": "History of infertility treatment leading to this pregnancy"
          },
          {
            "id": "D",
            "text": "Infant born with a visible congenital anomaly"
          },
          {
            "id": "E",
            "text": "Uncomplicated vaginal birth without maternal or newborn complications"
          }
        ],
        "multiple": true,
        "correct": [
          "A",
          "B",
          "D"
        ],
        "format": "Select all that apply"
      },
      {
        "id": "8",
        "label": "Question 8",
        "category": "Normal Postpartum Care",
        "prompt": "A client 5 hr postpartum reports intense, unrelenting vaginal and rectal pressure rated 9 out of 10 despite ice and analgesics. Heart rate is 124/min and blood pressure is 88/56 mm Hg. External bleeding is minimal. Which of the following should the nurse suspect?",
        "rationale": "Severe unrelieved pressure/pain with tachycardia and hypotension despite minimal external bleeding suggests a concealed hematoma.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Expected postpartum discomfort"
          },
          {
            "id": "B",
            "text": "Concealed hematoma of the vaginal wall"
          },
          {
            "id": "C",
            "text": "A full bladder"
          },
          {
            "id": "D",
            "text": "Onset of recurrent labor contractions"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "9",
        "label": "Question 9",
        "category": "Normal Postpartum Care",
        "prompt": "A nurse is caring for a client at two time points following a vaginal birth.\n6 hr postpartum:\nTemperature 37.6° C (99.7° F). Uterus firm, midline. Moderate lochia rubra. Client resting comfortably.\n30 hr postpartum:\nTemperature 38.6° C (101.5° F). Uterus tender to palpation. Foul-smelling lochia noted. Client reports chills and malaise.\nSelect all findings at 30 hr postpartum that require immediate follow-up.",
        "rationale": "Correct selections: temperature 38.6°C, uterine tenderness, foul-smelling lochia, and chills all require follow-up (signs of endometritis). Moderate lochia rubra at 6 hr was a normal earlier finding, not a current concern.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Temperature of 38.6° C (101.5° F)"
          },
          {
            "id": "B",
            "text": "Uterine tenderness on palpation"
          },
          {
            "id": "C",
            "text": "Foul-smelling lochia"
          },
          {
            "id": "D",
            "text": "Client-reported chills"
          },
          {
            "id": "E",
            "text": "Moderate lochia rubra noted at 6 hr"
          }
        ],
        "multiple": true,
        "correct": [
          "A",
          "B",
          "C",
          "D"
        ],
        "format": "Select all that apply"
      },
      {
        "id": "10",
        "label": "Question 10",
        "category": "Normal Postpartum Care",
        "prompt": "A client 3 weeks postpartum tells the nurse, \"I've started reconnecting with my friends and I finally feel like myself again while balancing all my roles.\" Which phase of Reva Rubin's maternal role adaptation does this reflect?",
        "rationale": "Letting-go: reestablishing relationships/roles and integrating the new identity.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Taking-in"
          },
          {
            "id": "B",
            "text": "Taking-hold"
          },
          {
            "id": "C",
            "text": "Letting-go"
          },
          {
            "id": "D",
            "text": "Engrossment"
          }
        ],
        "multiple": false,
        "correct": [
          "C"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "11",
        "label": "Question 11",
        "category": "Normal Postpartum Care",
        "prompt": "Which of the following statements by a postpartum client indicates a need for further teaching regarding perineal hygiene?",
        "rationale": "Douching is never recommended postpartum; it increases infection risk.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "\"I will change my pad every time I use the bathroom.\""
          },
          {
            "id": "B",
            "text": "\"I will use the peri-bottle before and after voiding.\""
          },
          {
            "id": "C",
            "text": "\"I will apply the ice pack for the first 24 hours, then switch to warm sitz baths.\""
          },
          {
            "id": "D",
            "text": "\"I will douche daily to keep the area clean.\""
          }
        ],
        "multiple": false,
        "correct": [
          "D"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "12",
        "label": "Question 12",
        "category": "Normal Postpartum Care",
        "prompt": "The standard prophylactic dose of Rho(D) immune globulin is given at approximately ______ weeks of gestation, with a second dose given within 72 hours of delivery if indicated.",
        "rationale": "28 weeks.",
        "rationaleSource": "provided",
        "type": "text",
        "format": "Fill in the blank",
        "fields": [
          {
            "label": "Gestational age (weeks)",
            "answer": "28",
            "accepted": [
              "28",
              "twenty eight",
              "twenty-eight"
            ],
            "unit": "weeks"
          }
        ]
      },
      {
        "id": "13",
        "label": "Question 13",
        "category": "Normal Postpartum Care",
        "prompt": "A nurse explains the physiologic basis for postpartum diuresis to a nursing student. Which of the following statements by the student demonstrates correct understanding?",
        "rationale": "Postpartum diuresis eliminates the extra 2–3 L of extracellular fluid accumulated during pregnancy.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "\"The kidneys are eliminating the extra 2 to 3 liters of extracellular fluid accumulated during pregnancy.\""
          },
          {
            "id": "B",
            "text": "\"This occurs because of decreased renal blood flow after birth.\""
          },
          {
            "id": "C",
            "text": "\"This is caused by a sudden increase in aldosterone secretion.\""
          },
          {
            "id": "D",
            "text": "\"This indicates the client is developing preeclampsia.\""
          }
        ],
        "multiple": false,
        "correct": [
          "A"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "14",
        "label": "Question 14",
        "category": "Normal Postpartum Care",
        "prompt": "A nurse reviews labs for a client: prenatal hemoglobin was 11.8 g/dL; postpartum day 1 hemoglobin is 12.6 g/dL despite an estimated blood loss of 600 mL at delivery. Which of the following is the best explanation?",
        "rationale": "Hemoconcentration from plasma volume loss can make labs appear falsely stable/elevated despite real blood loss.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "The client has developed polycythemia requiring treatment."
          },
          {
            "id": "B",
            "text": "Hemoconcentration from postpartum fluid shifts may mask the true extent of blood loss."
          },
          {
            "id": "C",
            "text": "This confirms that no significant blood loss occurred."
          },
          {
            "id": "D",
            "text": "The lab result is an error and should be redrawn immediately."
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "15",
        "label": "Question 15",
        "category": "Normal Postpartum Care",
        "prompt": "A client received the varicella vaccine on postpartum day 1 due to nonimmune status. Which of the following instructions should the nurse include?",
        "rationale": "Live vaccines require avoiding pregnancy for about 1 month; not contraindicated with breastfeeding.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "\"You should avoid becoming pregnant for at least 1 month following vaccination.\""
          },
          {
            "id": "B",
            "text": "\"You cannot breastfeed for 6 weeks after this vaccine.\""
          },
          {
            "id": "C",
            "text": "\"This vaccine cannot be given while breastfeeding.\""
          },
          {
            "id": "D",
            "text": "\"No precautions are needed since this is an inactivated vaccine.\""
          }
        ],
        "multiple": false,
        "correct": [
          "A"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "16",
        "label": "Question 16",
        "category": "Normal Postpartum Care",
        "prompt": "In addition to delivery of an Rh-positive infant, pregnancy loss at 12 weeks or later, and amniocentesis, Rho(D) immune globulin should also be administered following an external cephalic ______ procedure.",
        "rationale": "External cephalic version can cause fetomaternal bleeding. Follow RhIg guidance for an unsensitized Rh-negative client; routine use after a loss before 12 weeks is individualized.",
        "rationaleSource": "reviewed",
        "type": "text",
        "format": "Fill in the blank",
        "fields": [
          {
            "label": "Procedure",
            "answer": "Version",
            "accepted": [
              "Version",
              "external cephalic version",
              "ecv"
            ],
            "unit": ""
          }
        ],
        "reviewNote": "Qualified the pregnancy-loss timing to avoid implying routine RhIg for every early loss.",
        "references": [
          {
            "title": "ACOG: the Rh factor",
            "url": "https://www.acog.org/womens-health/faqs/the-rh-factor-how-it-can-affect-your-pregnancy"
          }
        ]
      },
      {
        "id": "17",
        "label": "Question 17",
        "category": "Postpartum Complications",
        "prompt": "Using ACOG criteria, which documented cumulative blood loss alone meets the ≥1,000 mL criterion for postpartum hemorrhage within 24 hours after a vaginal birth?",
        "rationale": "1,050 mL meets ACOG’s ≥1,000 mL criterion within 24 hours. Hypovolemic signs qualify at a lower volume. Blood loss above 500 mL after vaginal birth still warrants attention.",
        "rationaleSource": "reviewed",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "200 mL"
          },
          {
            "id": "B",
            "text": "350 mL"
          },
          {
            "id": "C",
            "text": "480 mL"
          },
          {
            "id": "D",
            "text": "1,050 mL"
          }
        ],
        "multiple": false,
        "correct": [
          "D"
        ],
        "format": "Multiple choice",
        "reviewNote": "Specified ACOG criteria and updated option D; the older >500 mL vaginal-birth definition was not the stated current standard.",
        "references": [
          {
            "title": "ACOG: postpartum hemorrhage",
            "url": "https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2017/10/postpartum-hemorrhage"
          }
        ]
      },
      {
        "id": "18",
        "label": "Question 18",
        "category": "Postpartum Complications",
        "prompt": "A nurse performs fundal massage on a client with a boggy uterus. The fundus becomes firm, but bright red bleeding continues at a steady rate. Which of the following is most likely?",
        "rationale": "Persistent bleeding despite a firm, well-contracted uterus points to a laceration rather than atony.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "The massage was ineffective and should be repeated."
          },
          {
            "id": "B",
            "text": "A cervical or vaginal laceration is now the likely source of bleeding."
          },
          {
            "id": "C",
            "text": "This is an expected finding and requires no further action."
          },
          {
            "id": "D",
            "text": "The client needs an indwelling catheter to resolve the bleeding."
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "19",
        "label": "Question 19",
        "category": "Postpartum Complications",
        "prompt": "A nurse is analyzing cues for a postpartum client with fever and pelvic discomfort. For each assessment finding, indicate whether it is consistent with endometritis, mastitis, both, or neither.\nFor each finding, indicate whether it is consistent with each condition. A finding may apply to one, both, or neither condition.",
        "rationale": "Uterine tenderness/subinvolution and purulent, foul lochia support endometritis. Localized breast warmth and erythema support mastitis. Fever and general body aches can occur with either infection; myalgia alone cannot distinguish the two. Mastitis or both is accepted for that nonspecific row.",
        "rationaleSource": "reviewed",
        "type": "groups",
        "format": "Matrix",
        "groups": [
          {
            "id": "row-1",
            "label": "Uterine subinvolution and fundal tenderness",
            "selectionCount": 1,
            "options": [
              {
                "id": "E",
                "text": "Endometritis"
              },
              {
                "id": "M",
                "text": "Mastitis"
              },
              {
                "id": "B",
                "text": "Both"
              },
              {
                "id": "N",
                "text": "Neither"
              }
            ],
            "correct": [
              "E"
            ]
          },
          {
            "id": "row-2",
            "label": "Flu-like myalgia and body aches",
            "selectionCount": 1,
            "options": [
              {
                "id": "E",
                "text": "Endometritis"
              },
              {
                "id": "M",
                "text": "Mastitis"
              },
              {
                "id": "B",
                "text": "Both"
              },
              {
                "id": "N",
                "text": "Neither"
              }
            ],
            "correct": [
              "M"
            ],
            "acceptedSets": [
              [
                "M"
              ],
              [
                "B"
              ]
            ]
          },
          {
            "id": "row-3",
            "label": "Purulent lochia with a foul odor",
            "selectionCount": 1,
            "options": [
              {
                "id": "E",
                "text": "Endometritis"
              },
              {
                "id": "M",
                "text": "Mastitis"
              },
              {
                "id": "B",
                "text": "Both"
              },
              {
                "id": "N",
                "text": "Neither"
              }
            ],
            "correct": [
              "E"
            ]
          },
          {
            "id": "row-4",
            "label": "Localized breast warmth, erythema, and a hard wedge-shaped area",
            "selectionCount": 1,
            "options": [
              {
                "id": "E",
                "text": "Endometritis"
              },
              {
                "id": "M",
                "text": "Mastitis"
              },
              {
                "id": "B",
                "text": "Both"
              },
              {
                "id": "N",
                "text": "Neither"
              }
            ],
            "correct": [
              "M"
            ]
          },
          {
            "id": "row-5",
            "label": "Fever",
            "selectionCount": 1,
            "options": [
              {
                "id": "E",
                "text": "Endometritis"
              },
              {
                "id": "M",
                "text": "Mastitis"
              },
              {
                "id": "B",
                "text": "Both"
              },
              {
                "id": "N",
                "text": "Neither"
              }
            ],
            "correct": [
              "B"
            ]
          }
        ],
        "reviewNote": "Either mastitis or both is accepted for nonspecific flu-like myalgia; the other matrix findings retain the supplied key.",
        "references": []
      },
      {
        "id": "20",
        "label": "Question 20",
        "category": "Postpartum Complications",
        "prompt": "A nurse is caring for a client following an intrauterine fetal demise retained for several weeks. Which of the following findings should the nurse anticipate if disseminated intravascular coagulation develops?",
        "rationale": "DIC causes consumption of clotting factors, leading to prolonged PT/PTT and elevated D-dimer (from fibrin breakdown).",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Prolonged PT/PTT and elevated D-dimer"
          },
          {
            "id": "B",
            "text": "Shortened PT/PTT and decreased D-dimer"
          },
          {
            "id": "C",
            "text": "Elevated platelet count and elevated fibrinogen"
          },
          {
            "id": "D",
            "text": "Normal coagulation studies with isolated thrombocytosis"
          }
        ],
        "multiple": false,
        "correct": [
          "A"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "21",
        "label": "Question 21",
        "category": "Postpartum Complications",
        "prompt": "In addition to a prior classical cesarean incision and excessive uterine distention, attempting external cephalic ______ is also considered a risk factor for uterine rupture.",
        "rationale": "Version (external cephalic version).",
        "rationaleSource": "provided",
        "type": "text",
        "format": "Fill in the blank",
        "fields": [
          {
            "label": "Procedure",
            "answer": "Version",
            "accepted": [
              "Version",
              "external cephalic version",
              "ecv"
            ],
            "unit": ""
          }
        ]
      },
      {
        "id": "22",
        "label": "Question 22",
        "category": "Postpartum Complications",
        "prompt": "A client with a history of severe asthma requires a uterotonic medication for postpartum hemorrhage. Which of the following medications should the nurse question before administering?",
        "rationale": "Carboprost (a prostaglandin) is contraindicated/used with extreme caution in clients with asthma due to bronchospasm risk.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Oxytocin"
          },
          {
            "id": "B",
            "text": "Carboprost tromethamine (Hemabate)"
          },
          {
            "id": "C",
            "text": "Misoprostol"
          },
          {
            "id": "D",
            "text": "Methylergonovine, in a normotensive client"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "23",
        "label": "Question 23",
        "category": "Postpartum Complications",
        "prompt": "During magnesium sulfate therapy, deep tendon reflexes are typically lost at a serum magnesium level of approximately ______ mg/dL, and respiratory depression may occur at levels of approximately ______ mg/dL.",
        "rationale": "Approximately 8–12 mg/dL (loss of DTRs); approximately 15–17 mg/dL (respiratory depression).",
        "rationaleSource": "provided",
        "type": "text",
        "format": "Fill in the blank",
        "fields": [
          {
            "label": "Loss of reflexes (mg/dL)",
            "answer": "8–12",
            "accepted": [
              "8–12",
              "8 to 12",
              "8-12"
            ],
            "unit": "mg/dL",
            "numericRange": [
              8,
              12
            ]
          },
          {
            "label": "Respiratory depression (mg/dL)",
            "answer": "15–17",
            "accepted": [
              "15–17",
              "15 to 17",
              "15-17"
            ],
            "unit": "mg/dL",
            "numericRange": [
              15,
              17
            ]
          }
        ]
      },
      {
        "id": "24",
        "label": "Question 24",
        "category": "Postpartum Complications",
        "prompt": "A client 10 days postpartum tearfully reports having sudden, unwanted, distressing thoughts of accidentally dropping her infant down the stairs, which she finds horrifying and works hard to avoid. She denies any desire to act on these thoughts. Which of the following is the most appropriate nursing interpretation?",
        "rationale": "Ego-dystonic intrusive thoughts the mother recognizes as distressing and does not want to act on are characteristic of postpartum anxiety/OCD, not psychosis (psychosis involves loss of touch with reality and command hallucinations to act).",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "This is consistent with postpartum psychosis and requires emergency intervention."
          },
          {
            "id": "B",
            "text": "These are likely intrusive, ego-dystonic thoughts associated with postpartum anxiety, not psychosis, and warrant further mental health evaluation without emergency separation from the infant."
          },
          {
            "id": "C",
            "text": "This is a normal part of postpartum blues requiring no further action."
          },
          {
            "id": "D",
            "text": "This confirms a diagnosis of postpartum major depressive disorder."
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "bowtie-1",
        "label": "Bowtie 1",
        "category": "Postpartum Complications",
        "prompt": "A nurse is caring for a client 2 hr postpartum. The fundus is boggy and midline, lochia is moderate and steady, the client voided 400 mL spontaneously 20 minutes ago, heart rate is 112/min, and blood pressure is 96/60 mm Hg.\nComplete the bowtie by selecting the condition most likely occurring, TWO actions the nurse should take, and TWO parameters the nurse should monitor.",
        "rationale": "The boggy midline fundus suggests uterine atony. Massage and activate the hemorrhage response immediately. Monitor vital signs, consciousness, and quantified bleeding while treating the cause and supporting circulation.",
        "rationaleSource": "reviewed",
        "type": "groups",
        "format": "Bowtie",
        "groups": [
          {
            "id": "condition",
            "label": "Most likely condition",
            "selectionCount": 1,
            "options": [
              {
                "id": "A",
                "text": "Retained placental fragments"
              },
              {
                "id": "B",
                "text": "Uterine atony"
              },
              {
                "id": "C",
                "text": "Cervical laceration"
              },
              {
                "id": "D",
                "text": "Normal postpartum recovery"
              }
            ],
            "correct": [
              "B"
            ]
          },
          {
            "id": "actions",
            "label": "Actions to take",
            "selectionCount": 2,
            "options": [
              {
                "id": "A",
                "text": "Encourage ambulation to the bathroom immediately"
              },
              {
                "id": "B",
                "text": "Administer a stool softener"
              },
              {
                "id": "C",
                "text": "Perform fundal massage"
              },
              {
                "id": "D",
                "text": "Insert an indwelling catheter regardless of recent voiding"
              },
              {
                "id": "E",
                "text": "Activate the postpartum hemorrhage response and notify the provider immediately while continuing first-response care."
              }
            ],
            "correct": [
              "C",
              "E"
            ]
          },
          {
            "id": "monitoring",
            "label": "Parameters to monitor",
            "selectionCount": 2,
            "options": [
              {
                "id": "A",
                "text": "Newborn feeding pattern"
              },
              {
                "id": "B",
                "text": "Maternal temperature trend over 24 hr"
              },
              {
                "id": "C",
                "text": "Vital signs and level of consciousness"
              },
              {
                "id": "D",
                "text": "Deep tendon reflexes"
              },
              {
                "id": "E",
                "text": "Amount of vaginal bleeding/pad count"
              }
            ],
            "correct": [
              "C",
              "E"
            ]
          }
        ],
        "reviewNote": "Escalation is immediate for hypotension and tachycardia; it should not wait for massage to fail.",
        "references": [
          {
            "title": "ACOG: postpartum hemorrhage",
            "url": "https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2017/10/postpartum-hemorrhage"
          }
        ]
      },
      {
        "id": "25",
        "label": "Question 25",
        "category": "Normal Newborn Assessment & Care",
        "prompt": "A newborn is being scored using the APGAR system at 1 minute of life: heart rate 130/min, weak cry, some flexion of the extremities, grimace only in response to stimulation, body pink with blue extremities. Select all findings that would result in a POINT DEDUCTION from a perfect score of 10.",
        "rationale": "Correct deductions: grimace-only response, acrocyanosis, weak cry, and some (not full) flexion each cost 1 point. Heart rate of 130/min earns full points (>100/min = 2 points), so it is NOT a deduction.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Heart rate of 130/min"
          },
          {
            "id": "B",
            "text": "Grimace-only response to stimulation"
          },
          {
            "id": "C",
            "text": "Body pink with blue extremities (acrocyanosis)"
          },
          {
            "id": "D",
            "text": "Weak cry"
          },
          {
            "id": "E",
            "text": "Some flexion of the extremities"
          }
        ],
        "multiple": true,
        "correct": [
          "B",
          "C",
          "D",
          "E"
        ],
        "format": "Select all that apply"
      },
      {
        "id": "26",
        "label": "Question 26",
        "category": "Normal Newborn Assessment & Care",
        "prompt": "Which of the following statements about the newborn palmar grasp reflex is accurate?",
        "rationale": "Palmar grasp is present at birth and disappears by approximately 3–4 months.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "It disappears immediately after birth."
          },
          {
            "id": "B",
            "text": "It is present at birth and typically disappears by 3 to 4 months of age."
          },
          {
            "id": "C",
            "text": "It persists until 12 months of age."
          },
          {
            "id": "D",
            "text": "It is elicited by stroking the lateral sole of the foot."
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "27",
        "label": "Question 27",
        "category": "Normal Newborn Assessment & Care",
        "prompt": "A newborn delivered via vacuum extraction develops diffuse, boggy scalp swelling that crosses suture lines and is rapidly increasing in size, with the newborn becoming pale and tachycardic. Which of the following should the nurse suspect?",
        "rationale": "Diffuse, rapidly expanding, boggy scalp swelling that crosses suture lines with signs of hypovolemia (pallor, tachycardia) indicates subgaleal hemorrhage — a surgical/hematologic emergency, unlike benign caput or cephalohematoma.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Simple caput succedaneum"
          },
          {
            "id": "B",
            "text": "Cephalohematoma"
          },
          {
            "id": "C",
            "text": "Subgaleal hemorrhage, a potentially life-threatening emergency"
          },
          {
            "id": "D",
            "text": "Molding, an expected finding after vacuum-assisted delivery"
          }
        ],
        "multiple": false,
        "correct": [
          "C"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "28",
        "label": "Question 28",
        "category": "Normal Newborn Assessment & Care",
        "prompt": "The expected heart rate range for a healthy, awake term newborn is ______ to ______ beats/min.",
        "rationale": "110 to 160 beats/min.",
        "rationaleSource": "provided",
        "type": "text",
        "format": "Fill in the blank",
        "fields": [
          {
            "label": "Lower end (beats/min)",
            "answer": "110",
            "accepted": [
              "110",
              "one hundred ten"
            ],
            "unit": ""
          },
          {
            "label": "Upper end (beats/min)",
            "answer": "160",
            "accepted": [
              "160",
              "one hundred sixty"
            ],
            "unit": ""
          }
        ]
      },
      {
        "id": "29",
        "label": "Question 29",
        "category": "Normal Newborn Assessment & Care",
        "prompt": "A nurse is assessing a newborn's respiratory status. Which of the following findings should the nurse identify as signs of respiratory distress?",
        "rationale": "Apnea >20 seconds (25 sec), paradoxical retractions, see-saw respirations, and sustained RR of 70/min are all signs of distress. Brief apnea <20 seconds during sleep is a normal newborn finding.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Apnea lasting 25 seconds"
          },
          {
            "id": "B",
            "text": "Retractions with paradoxical breathing"
          },
          {
            "id": "C",
            "text": "See-saw respirations"
          },
          {
            "id": "D",
            "text": "Respiratory rate consistently 70/min at rest"
          },
          {
            "id": "E",
            "text": "Brief apnea lasting less than 15 seconds during sleep"
          }
        ],
        "multiple": true,
        "correct": [
          "A",
          "B",
          "C",
          "D"
        ],
        "format": "Select all that apply"
      },
      {
        "id": "30",
        "label": "Question 30",
        "category": "Normal Newborn Assessment & Care",
        "prompt": "A newborn develops visible jaundice at 30 hours of age, with a total bilirubin level within expected limits for age. Which of the following is the most accurate nursing interpretation?",
        "rationale": "Onset after 24 hours of life with a bilirubin appropriate for age is expected physiologic jaundice.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "This is pathologic jaundice requiring an immediate sepsis workup."
          },
          {
            "id": "B",
            "text": "This is consistent with expected physiologic jaundice, as onset occurred after 24 hours of age."
          },
          {
            "id": "C",
            "text": "This finding is unrelated to bilirubin metabolism."
          },
          {
            "id": "D",
            "text": "This confirms ABO incompatibility."
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "31",
        "label": "Question 31",
        "category": "Normal Newborn Assessment & Care",
        "prompt": "A parent calls 3 days after their newborn's circumcision, reporting a yellow-white exudate covering the glans with no odor or bleeding. Which of the following responses by the nurse is most appropriate?",
        "rationale": "Yellow-white exudate (granulation tissue) without odor or bleeding is a normal part of circumcision healing.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "\"This is a sign of infection and requires antibiotics.\""
          },
          {
            "id": "B",
            "text": "\"This is a normal part of the healing process and not a concern.\""
          },
          {
            "id": "C",
            "text": "\"Bring the infant to the emergency department immediately.\""
          },
          {
            "id": "D",
            "text": "\"This indicates the circumcision site has reopened.\""
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "32",
        "label": "Question 32",
        "category": "Normal Newborn Assessment & Care",
        "prompt": "A newborn is 14 hours old and has not yet passed meconium. Which of the following is the priority nursing action?",
        "rationale": "Meconium passage is expected within 24–48 hours of life; 14 hours is still within the normal window.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Document the finding and continue routine monitoring, as this is within the expected timeframe."
          },
          {
            "id": "B",
            "text": "Notify the provider immediately, as this exceeds the expected window for first meconium passage."
          },
          {
            "id": "C",
            "text": "Administer a rectal suppository to stimulate stooling."
          },
          {
            "id": "D",
            "text": "Restrict oral feedings until meconium is passed."
          }
        ],
        "multiple": false,
        "correct": [
          "A"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "33",
        "label": "Question 33",
        "category": "Normal Newborn Assessment & Care",
        "prompt": "A nurse is assessing a newborn's skin. Which of the following findings should the nurse identify as expected, benign variants?",
        "rationale": "Erythema toxicum, milia, hemangioma, and vernix caseosa are expected benign findings. Pustules with surrounding cellulitis suggest infection, not a benign variant.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Erythema toxicum with a flea-bitten appearance"
          },
          {
            "id": "B",
            "text": "Milia across the bridge of the nose"
          },
          {
            "id": "C",
            "text": "Yellow-crusted pustules with surrounding cellulitis"
          },
          {
            "id": "D",
            "text": "Nevus vasculosus (strawberry hemangioma)"
          },
          {
            "id": "E",
            "text": "Vernix caseosa"
          }
        ],
        "multiple": true,
        "correct": [
          "A",
          "B",
          "D",
          "E"
        ],
        "format": "Select all that apply"
      },
      {
        "id": "34",
        "label": "Question 34",
        "category": "Normal Newborn Assessment & Care",
        "prompt": "Which of the following newborn assessment techniques is used to assess for a dislocatable hip by adducting the flexed hip while applying gentle posterior pressure?",
        "rationale": "The Barlow maneuver assesses for a dislocatable hip via adduction with posterior pressure; Ortolani assesses for relocation of an already-dislocated hip via abduction.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Ortolani maneuver"
          },
          {
            "id": "B",
            "text": "Barlow maneuver"
          },
          {
            "id": "C",
            "text": "Allis sign assessment"
          },
          {
            "id": "D",
            "text": "Galeazzi sign assessment"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "35",
        "label": "Question 35",
        "category": "Newborn Complications / Prematurity",
        "prompt": "A nurse is assessing a newborn born at 28 weeks of gestation at two time points.\nImmediately after birth:\nRespiratory rate 70/min. Mild expiratory grunting. Some subcostal retractions. Acrocyanosis noted.\n30 minutes of life:\nRespiratory rate 84/min. Marked grunting. See-saw (paradoxical) respirations. Central cyanosis. Diminished breath sounds bilaterally.\nSelect all findings at 30 minutes of life that indicate WORSENING respiratory distress requiring immediate escalation of care.",
        "rationale": "Increased RR from baseline, see-saw respirations, central cyanosis, and diminished breath sounds all indicate worsening distress. Mild subcostal retractions at birth was the earlier baseline finding, not evidence of worsening.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Increased respiratory rate from baseline"
          },
          {
            "id": "B",
            "text": "See-saw (paradoxical) respirations"
          },
          {
            "id": "C",
            "text": "Central cyanosis"
          },
          {
            "id": "D",
            "text": "Diminished breath sounds bilaterally"
          },
          {
            "id": "E",
            "text": "Mild subcostal retractions noted immediately after birth"
          }
        ],
        "multiple": true,
        "correct": [
          "A",
          "B",
          "C",
          "D"
        ],
        "format": "Select all that apply"
      },
      {
        "id": "36",
        "label": "Question 36",
        "category": "Newborn Complications / Prematurity",
        "prompt": "Which of the following newborn characteristics increases the risk of ineffective thermoregulation in a preterm infant?",
        "rationale": "A larger surface-area-to-body-weight ratio increases heat loss risk in preterm infants.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Increased subcutaneous fat stores compared to a term infant"
          },
          {
            "id": "B",
            "text": "Greater body surface area to body weight ratio compared to a term infant"
          },
          {
            "id": "C",
            "text": "A fully mature shivering mechanism"
          },
          {
            "id": "D",
            "text": "Excess brown adipose tissue reserves"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "37",
        "label": "Question 37",
        "category": "Newborn Complications / Prematurity",
        "prompt": "In addition to hypoglycemia, macrosomia, and respiratory distress, an infant of a diabetic mother is also at increased risk for ______ (an elevated red blood cell count) due to chronic fetal hypoxia in utero.",
        "rationale": "Polycythemia.",
        "rationaleSource": "provided",
        "type": "text",
        "format": "Fill in the blank",
        "fields": [
          {
            "label": "Condition",
            "answer": "Polycythemia",
            "accepted": [
              "Polycythemia",
              "polycythaemia",
              "neonatal polycythemia"
            ],
            "unit": ""
          }
        ]
      },
      {
        "id": "38",
        "label": "Question 38",
        "category": "Newborn Complications / Prematurity",
        "prompt": "Which of the following fetal factors is most associated with a small for gestational age (SGA) newborn?",
        "rationale": "Chromosomal abnormalities (e.g., trisomy 21) are fetal factors associated with SGA; the other options are associated with LGA or are not complicating factors.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Trisomy 21 or another chromosomal abnormality"
          },
          {
            "id": "B",
            "text": "Maternal gestational diabetes"
          },
          {
            "id": "C",
            "text": "Post-term pregnancy beyond 42 weeks without other complications"
          },
          {
            "id": "D",
            "text": "Maternal obesity"
          }
        ],
        "multiple": false,
        "correct": [
          "A"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "39",
        "label": "Question 39",
        "category": "Newborn Complications / Prematurity",
        "prompt": "Which of the following nursing actions is appropriate for a newborn receiving phototherapy for hyperbilirubinemia?",
        "rationale": "More frequent feeding promotes stooling, which helps excrete bilirubin.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Limit feedings to every 4 hours to conserve the newborn's energy."
          },
          {
            "id": "B",
            "text": "Increase feeding frequency to promote bilirubin excretion through stooling."
          },
          {
            "id": "C",
            "text": "Withhold all oral intake until phototherapy is discontinued."
          },
          {
            "id": "D",
            "text": "Restrict fluids to prevent overhydration."
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "40",
        "label": "Question 40",
        "category": "Newborn Complications / Prematurity",
        "prompt": "A nurse is caring for a preterm newborn at two time points.\n8 hr of life:\nFeeding well via gavage. Abdomen soft with active bowel sounds. Passing stool without difficulty.\n14 hr of life:\nAbdominal distention noted. Bilious residual obtained prior to gavage feeding. Bloody stool noted. Newborn is lethargic.\nSelect all findings at 14 hr of life that require immediate provider notification.",
        "rationale": "Abdominal distention, bilious residual, bloody stool, and lethargy are all signs requiring immediate notification (classic NEC presentation). Feeding well at 8 hr was the prior baseline, not a current concern.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Abdominal distention"
          },
          {
            "id": "B",
            "text": "Bilious gastric residual"
          },
          {
            "id": "C",
            "text": "Bloody stool"
          },
          {
            "id": "D",
            "text": "Lethargy"
          },
          {
            "id": "E",
            "text": "Feeding well noted at 8 hr of life"
          }
        ],
        "multiple": true,
        "correct": [
          "A",
          "B",
          "C",
          "D"
        ],
        "format": "Select all that apply"
      },
      {
        "id": "41",
        "label": "Question 41",
        "category": "Newborn Complications / Prematurity",
        "prompt": "A nurse is caring for a preterm newborn requiring supplemental oxygen. Which of the following nursing actions is most important in reducing the risk of retinopathy of prematurity?",
        "rationale": "Keeping oxygen saturation within the ordered target range (avoiding both hypoxia and hyperoxia) reduces ROP risk; maximizing saturation above 98% increases risk.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Maintaining oxygen saturation within the target range ordered by the provider"
          },
          {
            "id": "B",
            "text": "Maximizing oxygen saturation above 98% at all times"
          },
          {
            "id": "C",
            "text": "Avoiding all pulse oximetry monitoring to reduce newborn stimulation"
          },
          {
            "id": "D",
            "text": "Administering oxygen only during feeding times"
          }
        ],
        "multiple": false,
        "correct": [
          "A"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "42",
        "label": "Question 42",
        "category": "Newborn Complications / Prematurity",
        "prompt": "A term newborn born through meconium-stained amniotic fluid develops respiratory distress with a barrel-shaped chest and coarse breath sounds shortly after birth. Which of the following is most likely?",
        "rationale": "Meconium-stained fluid with a barrel-shaped (hyperinflated) chest and coarse breath sounds is classic for meconium aspiration syndrome.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Transient tachypnea of the newborn"
          },
          {
            "id": "B",
            "text": "Meconium aspiration syndrome"
          },
          {
            "id": "C",
            "text": "Respiratory distress syndrome"
          },
          {
            "id": "D",
            "text": "Choanal atresia"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "bowtie-2",
        "label": "Bowtie 2",
        "category": "Newborn Complications / Prematurity",
        "prompt": "A newborn is 6 hr old with a temperature of 38.2° C (100.8° F), lethargy, and poor feeding. Respiratory rate is 68/min with grunting. The mother had prolonged rupture of membranes (22 hr) and untreated group B streptococcus status.\nComplete the bowtie by selecting the condition most likely occurring, TWO actions the nurse should take, and TWO parameters the nurse should monitor.",
        "rationale": "Early-onset neonatal sepsis is the best listed condition given maternal risk factors, fever, lethargy, poor feeding, and respiratory distress. Notify the provider, obtain cultures promptly, and begin prescribed empiric antibiotics without waiting for culture results. Follow temperature, respiratory status, and glucose.",
        "rationaleSource": "reviewed",
        "type": "groups",
        "format": "Bowtie",
        "groups": [
          {
            "id": "condition",
            "label": "Most likely condition",
            "selectionCount": 1,
            "options": [
              {
                "id": "A",
                "text": "Neonatal hypoglycemia"
              },
              {
                "id": "B",
                "text": "Necrotizing enterocolitis"
              },
              {
                "id": "C",
                "text": "Early-onset neonatal sepsis"
              },
              {
                "id": "D",
                "text": "Meconium aspiration syndrome"
              }
            ],
            "correct": [
              "C"
            ]
          },
          {
            "id": "actions",
            "label": "Actions to take",
            "selectionCount": 2,
            "options": [
              {
                "id": "A",
                "text": "Delay antibiotic administration until blood culture results return"
              },
              {
                "id": "B",
                "text": "Continue routine care with reassessment in 8 hours"
              },
              {
                "id": "C",
                "text": "Obtain blood cultures and notify the provider"
              },
              {
                "id": "D",
                "text": "Initiate broad-spectrum antibiotics per protocol"
              },
              {
                "id": "E",
                "text": "Restrict all oral feedings indefinitely"
              }
            ],
            "correct": [
              "C",
              "D"
            ]
          },
          {
            "id": "monitoring",
            "label": "Parameters to monitor",
            "selectionCount": 2,
            "options": [
              {
                "id": "A",
                "text": "Newborn stooling pattern only"
              },
              {
                "id": "B",
                "text": "Maternal blood type"
              },
              {
                "id": "C",
                "text": "Temperature trend"
              },
              {
                "id": "D",
                "text": "Respiratory status and blood glucose"
              },
              {
                "id": "E",
                "text": "Amniotic fluid color only"
              }
            ],
            "correct": [
              "C",
              "D"
            ]
          }
        ],
        "reviewNote": "This bowtie has no answer in the supplied document’s key. The answer and explanation were added from neonatal sepsis guidance.",
        "references": [
          {
            "title": "Canadian Paediatric Society: early-onset neonatal sepsis",
            "url": "https://cps.ca/en/documents/position/management-infant-sepsis"
          }
        ]
      },
      {
        "id": "43",
        "label": "Question 43",
        "category": "Contraception",
        "prompt": "Which of the following findings is a contraindication to IUD placement?",
        "rationale": "Undiagnosed abnormal uterine bleeding must be evaluated before IUD placement; the other options are not contraindications.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "History of ovarian cysts"
          },
          {
            "id": "B",
            "text": "Undiagnosed abnormal uterine bleeding"
          },
          {
            "id": "C",
            "text": "History of tubal ligation"
          },
          {
            "id": "D",
            "text": "Age older than 40 years"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "44",
        "label": "Question 44",
        "category": "Contraception",
        "prompt": "A client asks how long it may take for fertility to return after discontinuing Depo-Provera injections. Which of the following responses is most accurate?",
        "rationale": "Fertility return after Depo-Provera can be delayed up to 10 months or longer, unlike other reversible methods.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "\"Fertility typically returns within 1 to 2 weeks.\""
          },
          {
            "id": "B",
            "text": "\"Fertility may be delayed for up to 10 months or longer after the last injection.\""
          },
          {
            "id": "C",
            "text": "\"Fertility returns immediately, similar to combined oral contraceptives.\""
          },
          {
            "id": "D",
            "text": "\"This method causes permanent infertility.\""
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "45",
        "label": "Question 45",
        "category": "Contraception",
        "prompt": "A client using the subdermal progestin implant reports irregular, unpredictable spotting for the past 2 months. Which of the following responses is most appropriate?",
        "rationale": "Irregular spotting is the most common side effect and the most common reason for discontinuation, but it is not dangerous.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "\"This is the most common reason women discontinue this method, but it is not harmful.\""
          },
          {
            "id": "B",
            "text": "\"This indicates the implant has failed and needs immediate removal.\""
          },
          {
            "id": "C",
            "text": "\"This is a sign of pregnancy and requires a pregnancy test before continuing.\""
          },
          {
            "id": "D",
            "text": "\"This is not an expected side effect of this method.\""
          }
        ],
        "multiple": false,
        "correct": [
          "A"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "46",
        "label": "Question 46",
        "category": "Contraception",
        "prompt": "If a client forgets to change her contraceptive patch on the scheduled change day but it has been less than 24 hours past the due date, she should ______ on that day and resume her normal schedule (no backup method needed).",
        "rationale": "Apply a new patch.",
        "rationaleSource": "provided",
        "type": "text",
        "format": "Fill in the blank",
        "fields": [
          {
            "label": "Action",
            "answer": "Apply a new patch",
            "accepted": [
              "Apply a new patch",
              "replace the patch",
              "change the patch",
              "put on a new patch",
              "apply new patch"
            ],
            "unit": ""
          }
        ]
      },
      {
        "id": "47",
        "label": "Question 47",
        "category": "Contraception",
        "prompt": "A nurse is identifying contraindications to combined hormonal contraceptives. Select all that apply.",
        "rationale": "Breastfeeding and <21 days postpartum, active breast cancer, and liver disease/hepatic tumor are contraindications to combined hormonal contraceptives. Well-controlled hypothyroidism and migraine WITHOUT aura under age 35 are NOT contraindications.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Postpartum and exclusively breastfeeding less than 21 days"
          },
          {
            "id": "B",
            "text": "Active breast cancer"
          },
          {
            "id": "C",
            "text": "Well-controlled hypothyroidism"
          },
          {
            "id": "D",
            "text": "Migraine without aura in a client younger than 35"
          },
          {
            "id": "E",
            "text": "Liver disease or hepatic tumor"
          }
        ],
        "multiple": true,
        "correct": [
          "A",
          "B",
          "E"
        ],
        "format": "Select all that apply"
      },
      {
        "id": "48",
        "label": "Question 48",
        "category": "Contraception",
        "prompt": "Which of the following clients is correctly relying on the Lactation Amenorrhea Method (LAM) as an effective contraceptive method?",
        "rationale": "Meets all 3 LAM criteria: exclusive breastfeeding, amenorrhea, and infant younger than 6 months.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "5 months postpartum, exclusively breastfeeding every 3 to 4 hours, amenorrheic"
          },
          {
            "id": "B",
            "text": "5 months postpartum, breastfeeding twice daily with formula supplementation, amenorrheic"
          },
          {
            "id": "C",
            "text": "7 months postpartum, exclusively breastfeeding, amenorrheic"
          },
          {
            "id": "D",
            "text": "3 months postpartum, exclusively breastfeeding, but menses resumed 2 weeks ago"
          }
        ],
        "multiple": false,
        "correct": [
          "A"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "49",
        "label": "Question 49",
        "category": "Contraception",
        "prompt": "A nurse is teaching a client about identifying the peak day of fertility using the cervical mucus method. Which of the following descriptions best indicates the peak fertile day?",
        "rationale": "Clear, stretchy, egg-white-like mucus indicates peak fertility.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Mucus is thick, white, and tacky."
          },
          {
            "id": "B",
            "text": "Mucus is absent entirely."
          },
          {
            "id": "C",
            "text": "Mucus is clear, stretchy, and resembles raw egg white."
          },
          {
            "id": "D",
            "text": "Mucus is minimal and pasty."
          }
        ],
        "multiple": false,
        "correct": [
          "C"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "50",
        "label": "Question 50",
        "category": "Contraception",
        "prompt": "A nurse is teaching a client about vasectomy. Which of the following statements indicates a need for further teaching?",
        "rationale": "A vasectomy is NOT immediately effective; backup contraception is needed until a semen analysis confirms azoospermia.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "\"I will need to use a backup method of contraception until my sperm count is confirmed to be zero.\""
          },
          {
            "id": "B",
            "text": "\"This procedure is immediately effective, and I do not need any additional contraception after the procedure.\""
          },
          {
            "id": "C",
            "text": "\"My erection and ejaculation should be unaffected by this procedure.\""
          },
          {
            "id": "D",
            "text": "\"I understand this procedure has a low but real risk of failure.\""
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "51",
        "label": "Question 51",
        "category": "Contraception",
        "prompt": "A client asks how the effectiveness of levonorgestrel emergency contraception changes over time after unprotected intercourse. Which of the following statements is accurate?",
        "rationale": "Emergency contraception is most effective the sooner it is taken after unprotected intercourse.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "\"Effectiveness remains constant regardless of when it is taken within 72 hours.\""
          },
          {
            "id": "B",
            "text": "\"Effectiveness is greatest the sooner it is taken after unprotected intercourse.\""
          },
          {
            "id": "C",
            "text": "\"Effectiveness increases the longer you wait to take it.\""
          },
          {
            "id": "D",
            "text": "\"This method is only effective if taken within the first 6 hours.\""
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "52",
        "label": "Question 52",
        "category": "Contraception",
        "prompt": "A client has been using the same vaginal contraceptive ring continuously for 5 weeks without removal. Which of the following instructions should the nurse provide?",
        "rationale": "Continuous ring use beyond 4 weeks reduces reliable effectiveness; backup contraception is needed.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "\"Continue using this same ring for another month.\""
          },
          {
            "id": "B",
            "text": "\"You should use a backup method of contraception, as effectiveness cannot be ensured beyond 4 weeks of continuous use.\""
          },
          {
            "id": "C",
            "text": "\"No action is needed since the ring is still in place.\""
          },
          {
            "id": "D",
            "text": "\"This requires emergency contraception immediately.\""
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "53",
        "label": "Question 53",
        "category": "Sexually Transmitted Infections",
        "prompt": "A client with untreated syphilis of many years' duration develops cardiovascular involvement and gummas of the skin and bone. Which stage of syphilis does this represent?",
        "rationale": "Cardiovascular involvement and gummas are hallmarks of tertiary syphilis.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Primary"
          },
          {
            "id": "B",
            "text": "Secondary"
          },
          {
            "id": "C",
            "text": "Latent"
          },
          {
            "id": "D",
            "text": "Tertiary"
          }
        ],
        "multiple": false,
        "correct": [
          "D"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "54",
        "label": "Question 54",
        "category": "Sexually Transmitted Infections",
        "prompt": "A 17-year-old is receiving her first dose of the HPV vaccine series. Which of the following schedules should the nurse anticipate?",
        "rationale": "Starting the HPV series at or after age 15 requires a 3-dose schedule (rather than the 2-dose schedule used when starting before age 15).",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "A single dose only, since she is a teenager"
          },
          {
            "id": "B",
            "text": "A 2-dose series completed over 6 to 12 months"
          },
          {
            "id": "C",
            "text": "A 3-dose series, since vaccination was not started before age 15"
          },
          {
            "id": "D",
            "text": "A 4-dose series over 1 year"
          }
        ],
        "multiple": false,
        "correct": [
          "C"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "55",
        "label": "Question 55",
        "category": "Sexually Transmitted Infections",
        "prompt": "A nurse is assessing a client for pelvic inflammatory disease (PID). Which of the following findings should the nurse identify as consistent with this diagnosis?",
        "rationale": "Chandelier sign, purulent discharge, fever, and increased future infertility risk are consistent with PID. A painless chancre is a sign of syphilis, not PID.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Chandelier sign (cervical motion tenderness)"
          },
          {
            "id": "B",
            "text": "Purulent cervical discharge"
          },
          {
            "id": "C",
            "text": "Fever"
          },
          {
            "id": "D",
            "text": "Painless vulvar chancre"
          },
          {
            "id": "E",
            "text": "Increased risk of infertility in future pregnancies"
          }
        ],
        "multiple": true,
        "correct": [
          "A",
          "B",
          "C",
          "E"
        ],
        "format": "Select all that apply"
      },
      {
        "id": "56",
        "label": "Question 56",
        "category": "Sexually Transmitted Infections",
        "prompt": "A nurse is caring for a newborn whose mother had untreated gonorrhea at the time of delivery. Which of the following complications should the nurse monitor for in the newborn?",
        "rationale": "Untreated maternal gonorrhea at delivery places the newborn at risk for ophthalmia neonatorum.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Congenital heart defects"
          },
          {
            "id": "B",
            "text": "Ophthalmia neonatorum"
          },
          {
            "id": "C",
            "text": "Hypoglycemia"
          },
          {
            "id": "D",
            "text": "Meconium aspiration"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "57",
        "label": "Question 57",
        "category": "Sexually Transmitted Infections",
        "prompt": "A pregnant client with HIV has an undetectable viral load at 39 weeks of gestation and has been adherent to antiretroviral therapy throughout pregnancy. Which of the following birth plans is most appropriate?",
        "rationale": "With adherence to ART and a low/undetectable viral load, vaginal birth may be considered rather than requiring a scheduled cesarean.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "A scheduled cesarean birth is required regardless of viral load."
          },
          {
            "id": "B",
            "text": "A vaginal birth may be considered, as the viral load is low."
          },
          {
            "id": "C",
            "text": "Induction must occur at exactly 37 weeks regardless of status."
          },
          {
            "id": "D",
            "text": "Antiretroviral therapy should be discontinued prior to labor."
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "58",
        "label": "Question 58",
        "category": "Sexually Transmitted Infections",
        "prompt": "A nurse is providing education about trichomoniasis. Which of the following statements is accurate?",
        "rationale": "Men are frequently asymptomatic carriers of trichomoniasis but can still transmit the infection.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "\"Men are always symptomatic and easy to identify as infected.\""
          },
          {
            "id": "B",
            "text": "\"Men can be asymptomatic carriers and still transmit the infection to partners.\""
          },
          {
            "id": "C",
            "text": "\"This infection cannot be transmitted if the male partner has no symptoms.\""
          },
          {
            "id": "D",
            "text": "\"This infection is caused by a virus rather than a protozoan.\""
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "59",
        "label": "Question 59",
        "category": "Breast and Formula Feeding",
        "prompt": "A breastfeeding client has a localized area of breast redness and mild tenderness without fever, present for less than 24 hours. Which of the following is the most appropriate initial recommendation?",
        "rationale": "Continue usual feeding, use ice and appropriate anti-inflammatory measures, and avoid pumping to empty or deep massage. Seek assessment if symptoms persist or systemic illness develops.",
        "rationaleSource": "reviewed",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Begin antibiotics immediately regardless of symptoms."
          },
          {
            "id": "B",
            "text": "Continue usual breastfeeding, use ice and appropriate anti-inflammatory measures, and contact the provider if symptoms persist, fever develops, or symptoms worsen."
          },
          {
            "id": "C",
            "text": "Discontinue breastfeeding on that side until symptoms fully resolve."
          },
          {
            "id": "D",
            "text": "This always requires hospitalization for IV antibiotics."
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice",
        "reviewNote": "Updated the initial inflammatory mastitis advice to avoid increased milk removal and prolonged heat.",
        "references": [
          {
            "title": "Academy of Breastfeeding Medicine: mastitis protocol",
            "url": "https://www.bfmed.org/assets/ABM%20Protocol%20%2336.pdf"
          }
        ]
      },
      {
        "id": "60",
        "label": "Question 60",
        "category": "Breast and Formula Feeding",
        "prompt": "A nurse is identifying maternal or infant conditions that are contraindications to breastfeeding. Select all that apply.",
        "rationale": "Untreated brucellosis and classic galactosemia require avoiding breast milk. I-131 requires stopping breastfeeding for the current child under specialist guidance. A covered HSV lesion away from the breast is not itself a contraindication. Alcohol needs timing precautions.",
        "rationaleSource": "reviewed",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Herpes lesion present only on the client's thigh, not the breast"
          },
          {
            "id": "B",
            "text": "Active untreated brucellosis"
          },
          {
            "id": "C",
            "text": "Galactosemia diagnosed in the infant"
          },
          {
            "id": "D",
            "text": "Maternal alcohol use of one occasional drink"
          },
          {
            "id": "E",
            "text": "Radioactive iodine (I-131) therapy during the current lactation"
          }
        ],
        "multiple": true,
        "correct": [
          "B",
          "C",
          "E"
        ],
        "format": "Select all that apply",
        "reviewNote": "Clarified I-131 therapy: this is not simply a temporary waiting period before resuming breastfeeding the same child.",
        "references": [
          {
            "title": "NIH: sodium iodide I-131 in lactation",
            "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Sodium-iodide-I-131"
          },
          {
            "title": "CDC: breastfeeding contraindications",
            "url": "https://www.cdc.gov/breastfeeding-special-circumstances/hcp/contraindications/"
          }
        ]
      },
      {
        "id": "61",
        "label": "Question 61",
        "category": "Breast and Formula Feeding",
        "prompt": "A nurse is teaching a client about formula storage. Which of the following statements indicates correct understanding?",
        "rationale": "Opened liquid concentrate formula can typically be refrigerated and used within about 48 hours (2 days).",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "\"Once opened, a can of liquid concentrate formula can be refrigerated and used for up to 2 days.\""
          },
          {
            "id": "B",
            "text": "\"Prepared formula can sit at room temperature for up to 6 hours safely.\""
          },
          {
            "id": "C",
            "text": "\"I can reuse formula left in the bottle after my baby has been feeding from it for 2 hours.\""
          },
          {
            "id": "D",
            "text": "\"Formula should never be refrigerated once mixed.\""
          }
        ],
        "multiple": false,
        "correct": [
          "A"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "62",
        "label": "Question 62",
        "category": "Breast and Formula Feeding",
        "prompt": "A nurse is teaching a client about breast milk storage duration. Which of the following statements indicates correct understanding?",
        "rationale": "For milk continuously frozen at 0°F (−18°C) or colder, using within 6 months is preferred; up to 12 months is acceptable.",
        "rationaleSource": "reviewed",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "For breast milk kept frozen at 0°F (−18°C) or colder, using it within 6 months is best; up to 12 months is acceptable."
          },
          {
            "id": "B",
            "text": "\"Milk stored in a deep freezer remains safe indefinitely with no time limit.\""
          },
          {
            "id": "C",
            "text": "\"Refrigerated milk should be used within 12 hours.\""
          },
          {
            "id": "D",
            "text": "\"Milk can sit out at room temperature for up to 8 hours safely.\""
          }
        ],
        "multiple": false,
        "correct": [
          "A"
        ],
        "format": "Multiple choice",
        "reviewNote": "Updated the frozen-milk option from an older freezer-type rule to current CDC temperature-based storage guidance.",
        "references": [
          {
            "title": "CDC: breast milk storage",
            "url": "https://www.cdc.gov/breastfeeding/breast-milk-preparation-and-storage/handling-breastmilk.html"
          }
        ]
      },
      {
        "id": "63",
        "label": "Question 63",
        "category": "Breast and Formula Feeding",
        "prompt": "Using ACOG nutrition guidance, a client in the second trimester generally needs an additional ______ calories per day, while a lactating client generally needs an additional ______ calories per day above prepregnancy needs.",
        "rationale": "ACOG describes about 340 extra calories/day in the second trimester, 450 in the third, and about 450–500 during lactation. Needs vary with the individual.",
        "rationaleSource": "reviewed",
        "type": "text",
        "format": "Fill in the blank",
        "fields": [
          {
            "label": "Second trimester: additional calories/day",
            "answer": "340",
            "accepted": [
              "340"
            ],
            "unit": "calories"
          },
          {
            "label": "Lactation: additional calories/day",
            "answer": "450–500",
            "accepted": [
              "450–500",
              "450",
              "500",
              "450 to 500"
            ],
            "unit": "calories"
          }
        ],
        "reviewNote": "Specified second-trimester needs rather than one calorie value for all pregnancy; kept an ACOG lactation estimate.",
        "references": [
          {
            "title": "ACOG: trimester-specific nutrition",
            "url": "https://www.acog.org/womens-health/experts-and-stories/ask-acog/how-much-weight-should-i-gain-during-pregnancy"
          },
          {
            "title": "ACOG: breastfeeding nutrition",
            "url": "https://www.acog.org/womens-health/faqs/breastfeeding-your-baby"
          }
        ]
      },
      {
        "id": "64",
        "label": "Question 64",
        "category": "Breast and Formula Feeding",
        "prompt": "A nurse is caring for a preterm infant in the NICU who is gavage fed. Which of the following statements about pacifier use in this context is accurate?",
        "rationale": "Nonnutritive sucking supports oral motor skill development in preterm/gavage-fed infants and is generally encouraged.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Pacifiers should never be used in preterm infants under any circumstance."
          },
          {
            "id": "B",
            "text": "Nonnutritive sucking with a pacifier during gavage feeding can support oral motor development and is generally encouraged."
          },
          {
            "id": "C",
            "text": "Pacifier use in preterm infants always causes nipple confusion once breastfeeding begins."
          },
          {
            "id": "D",
            "text": "Pacifiers are only appropriate after the infant reaches full oral feeding."
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "65",
        "label": "Question 65",
        "category": "Breast and Formula Feeding",
        "prompt": "By which of the following ages should a breastfed newborn typically have regained their birth weight?",
        "rationale": "Birth weight is typically regained by 10–14 days of life.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "3 days"
          },
          {
            "id": "B",
            "text": "5 days"
          },
          {
            "id": "C",
            "text": "10 to 14 days"
          },
          {
            "id": "D",
            "text": "1 month"
          }
        ],
        "multiple": false,
        "correct": [
          "C"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "66",
        "label": "Question 66",
        "category": "Breast and Formula Feeding",
        "prompt": "A client who exclusively pumps notices that her stored breast milk separates into a thinner layer on top and a thicker, cream-colored layer at the bottom after refrigeration. Which of the following statements by the nurse is accurate?",
        "rationale": "Fat naturally separates and rises in stored breast milk; gently swirl (never shake vigorously) before feeding.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "\"This indicates the milk has spoiled and should be discarded.\""
          },
          {
            "id": "B",
            "text": "\"This is a normal separation of milk fat and should be gently swirled, not shaken, before feeding.\""
          },
          {
            "id": "C",
            "text": "\"This indicates bacterial contamination during pumping.\""
          },
          {
            "id": "D",
            "text": "\"This milk should be diluted with water before feeding.\""
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "67",
        "label": "Question 67",
        "category": "Antepartum / Prenatal Care",
        "prompt": "A client's history includes one ectopic pregnancy (surgically treated), one term vaginal birth, and one currently ongoing pregnancy. Which of the following GTPAL values is correct?",
        "rationale": "G3 (2 prior pregnancies + current), T1 (one term birth), P0 (no preterm births), A1 (ectopic pregnancy counts as an abortion/loss), L1 (one living child).",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "G3 T1 P0 A1 L1"
          },
          {
            "id": "B",
            "text": "G2 T1 P0 A0 L1"
          },
          {
            "id": "C",
            "text": "G3 T1 P1 A0 L1"
          },
          {
            "id": "D",
            "text": "G2 T1 P0 A1 L1"
          }
        ],
        "multiple": false,
        "correct": [
          "A"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "68",
        "label": "Question 68",
        "category": "Antepartum / Prenatal Care",
        "prompt": "A client's last menstrual period began on January 28. Using Naegele's rule, which of the following is the client's estimated date of delivery?",
        "rationale": "LMP Jan 28 minus 3 months = Oct 28, plus 7 days = November 4.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "October 28"
          },
          {
            "id": "B",
            "text": "November 4"
          },
          {
            "id": "C",
            "text": "November 1"
          },
          {
            "id": "D",
            "text": "October 21"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "69",
        "label": "Question 69",
        "category": "Pregnancy Complications — Diabetes & Hypertension",
        "prompt": "A client's 3-hour oral glucose tolerance test results are: fasting 99 mg/dL, 1 hr 174 mg/dL, 2 hr 158 mg/dL, 3 hr 135 mg/dL. Which of the following is the correct interpretation?",
        "rationale": "Fasting (99, abnormal ≥95) and 2-hr (158, abnormal ≥155) are both abnormal = 2 values = diagnostic. The 1-hr (174) and 3-hr (135) values are within normal limits.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Not diagnostic; no abnormal values are present"
          },
          {
            "id": "B",
            "text": "Diagnostic of gestational diabetes; two values (fasting and 2-hr) are abnormal"
          },
          {
            "id": "C",
            "text": "Diagnostic of gestational diabetes; only the 1-hr value is abnormal"
          },
          {
            "id": "D",
            "text": "Diagnostic of gestational diabetes; all four values are abnormal"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "70",
        "label": "Question 70",
        "category": "Pregnancy Complications — Diabetes & Hypertension",
        "prompt": "A client at 34 weeks of gestation with preeclampsia reports severe right upper quadrant pain and nausea. Which of the following complications should the nurse suspect?",
        "rationale": "Right upper quadrant/epigastric pain with preeclampsia suggests hepatic involvement consistent with HELLP syndrome.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Round ligament pain"
          },
          {
            "id": "B",
            "text": "HELLP syndrome with possible hepatic involvement"
          },
          {
            "id": "C",
            "text": "Braxton Hicks contractions"
          },
          {
            "id": "D",
            "text": "Normal third-trimester gastrointestinal discomfort"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "bowtie-3",
        "label": "Bowtie 3",
        "category": "Pregnancy Complications — Diabetes & Hypertension",
        "prompt": "A client at 33 weeks of gestation has a blood pressure of 172/108 mm Hg, reports epigastric pain and visual spots, and has labs showing platelets 78,000/mm3 and AST 145 U/L.\nComplete the bowtie by selecting the condition most likely occurring, TWO actions the nurse should take, and TWO parameters the nurse should monitor.",
        "rationale": "Condition: HELLP syndrome. Actions: Administer magnesium sulfate for seizure prophylaxis; prepare for possible urgent birth. Parameters: Reflexes/clonus and respiratory rate; liver enzymes and platelet trend. Severe hypertension with thrombocytopenia and elevated liver enzymes suggests HELLP among the listed choices. Assess hemolysis to complete the triad. Seizure prophylaxis, urgent birth planning, and maternal respiratory/neurologic and laboratory monitoring address the immediate risks.",
        "rationaleSource": "reviewed",
        "type": "groups",
        "format": "Bowtie",
        "groups": [
          {
            "id": "condition",
            "label": "Most likely condition",
            "selectionCount": 1,
            "options": [
              {
                "id": "A",
                "text": "Chronic hypertension alone"
              },
              {
                "id": "B",
                "text": "HELLP syndrome"
              },
              {
                "id": "C",
                "text": "Gestational hypertension without severe features"
              },
              {
                "id": "D",
                "text": "Placental abruption alone"
              }
            ],
            "correct": [
              "B"
            ]
          },
          {
            "id": "actions",
            "label": "Actions to take",
            "selectionCount": 2,
            "options": [
              {
                "id": "A",
                "text": "Encourage ambulation and oral fluids"
              },
              {
                "id": "B",
                "text": "Discharge home with outpatient follow-up in 1 week"
              },
              {
                "id": "C",
                "text": "Administer magnesium sulfate for seizure prophylaxis"
              },
              {
                "id": "D",
                "text": "Delay any birth planning until 37 weeks regardless of severity"
              },
              {
                "id": "E",
                "text": "Prepare for possible urgent birth"
              }
            ],
            "correct": [
              "C",
              "E"
            ]
          },
          {
            "id": "monitoring",
            "label": "Parameters to monitor",
            "selectionCount": 2,
            "options": [
              {
                "id": "A",
                "text": "Newborn feeding pattern"
              },
              {
                "id": "B",
                "text": "Reflexes/clonus and respiratory rate"
              },
              {
                "id": "C",
                "text": "Maternal blood glucose only"
              },
              {
                "id": "D",
                "text": "Liver enzymes and platelet trend"
              },
              {
                "id": "E",
                "text": "Amniotic fluid index only"
              }
            ],
            "correct": [
              "B",
              "D"
            ]
          }
        ],
        "reviewNote": "The supplied selections are retained; an explanation of the case cues has been added.",
        "references": []
      },
      {
        "id": "71",
        "label": "Question 71",
        "category": "Fetal Monitoring",
        "prompt": "A nurse reviews an FHR tracing showing abrupt drops in FHR to 90/min lasting 45 seconds, with a rapid return to baseline, occurring inconsistently with contractions and producing a V-shaped appearance. Which of the following is the correct interpretation and priority action?",
        "rationale": "Abrupt, V-shaped drops inconsistent with contraction timing are classic variable decelerations related to cord compression.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Early deceleration; no intervention needed."
          },
          {
            "id": "B",
            "text": "Variable deceleration; reposition the client and consider amnioinfusion if recurrent."
          },
          {
            "id": "C",
            "text": "Late deceleration; discontinue oxytocin and administer oxygen."
          },
          {
            "id": "D",
            "text": "Category I tracing; continue routine monitoring."
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "72",
        "label": "Question 72",
        "category": "Fetal Monitoring",
        "prompt": "A nurse reviews an FHR tracing with a baseline of 145/min, minimal variability, no accelerations, and no decelerations for the past 40 minutes. Which of the following is the correct classification and initial nursing action?",
        "rationale": "Minimal variability alone (without decelerations) is a Category II finding requiring closer monitoring and intrauterine resuscitation measures, not an emergency Category III response.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Category I tracing; continue routine monitoring, no action needed."
          },
          {
            "id": "B",
            "text": "Category II tracing due to minimal variability; reposition the client, increase IV fluids, and continue close monitoring."
          },
          {
            "id": "C",
            "text": "Category III tracing; prepare for immediate cesarean birth."
          },
          {
            "id": "D",
            "text": "This is not a valid tracing and must be restarted."
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "73",
        "label": "Question 73",
        "category": "Labor Complications & Emergencies",
        "prompt": "A nurse caring for a client in labor is suddenly unable to obtain fetal heart tones after a period of a Category II tracing and notes the client's abdominal contour has changed, with fetal parts now easily palpable through the abdominal wall. Which of the following is the priority concern?",
        "rationale": "Sudden loss of FHR with fetal parts palpable through the abdominal wall indicates uterine rupture with fetal extrusion into the abdomen — an obstetric emergency.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Normal fetal descent"
          },
          {
            "id": "B",
            "text": "Uterine rupture with possible fetal expulsion into the abdominal cavity"
          },
          {
            "id": "C",
            "text": "Braxton Hicks contractions"
          },
          {
            "id": "D",
            "text": "A maternal position change artifact on the monitor"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "74",
        "label": "Question 74",
        "category": "Labor Complications & Emergencies",
        "prompt": "Immediately after artificial rupture of membranes, a client suddenly becomes acutely short of breath, hypotensive, and unresponsive, followed by cardiac arrest. Which of the following is the most likely cause?",
        "rationale": "Sudden cardiovascular/respiratory collapse immediately after membrane rupture (amniotic fluid entering maternal circulation) is classic for amniotic fluid embolism.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Pulmonary embolism from a preexisting deep vein thrombosis"
          },
          {
            "id": "B",
            "text": "Amniotic fluid embolism"
          },
          {
            "id": "C",
            "text": "Local anesthetic systemic toxicity"
          },
          {
            "id": "D",
            "text": "A vasovagal response to the procedure"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "75",
        "label": "Question 75",
        "category": "Labor Complications & Emergencies",
        "prompt": "A nurse is assisting with a birth complicated by shoulder dystocia. Which of the following positioning changes may be used as an alternative maneuver to facilitate delivery of the shoulder?",
        "rationale": "The Gaskin (all-fours) maneuver is a recognized alternative positioning technique for shoulder dystocia.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "Placing the client in a supine, flat position with legs extended"
          },
          {
            "id": "B",
            "text": "Assisting the client onto her hands and knees (Gaskin maneuver)"
          },
          {
            "id": "C",
            "text": "Placing the client in Trendelenburg position with legs together"
          },
          {
            "id": "D",
            "text": "Encouraging the client to hold her breath and push continuously without repositioning"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "76",
        "label": "Question 76",
        "category": "Labor Complications & Emergencies",
        "prompt": "A client with confirmed placenta percreta is being scheduled for delivery. Which of the following should the nurse anticipate as part of the delivery plan?",
        "rationale": "Placenta percreta requires a planned, multidisciplinary cesarean birth with preparation for possible hysterectomy due to invasive placental attachment through the uterine wall.",
        "rationaleSource": "provided",
        "type": "choice",
        "options": [
          {
            "id": "A",
            "text": "A vaginal birth attempt with close monitoring"
          },
          {
            "id": "B",
            "text": "A scheduled cesarean birth, often with a multidisciplinary surgical team prepared for possible hysterectomy"
          },
          {
            "id": "C",
            "text": "Induction of labor at 39 weeks with routine precautions"
          },
          {
            "id": "D",
            "text": "Outpatient management with no changes to the standard birth plan"
          }
        ],
        "multiple": false,
        "correct": [
          "B"
        ],
        "format": "Multiple choice"
      },
      {
        "id": "bowtie-4",
        "label": "Bowtie 4",
        "category": "Labor Complications & Emergencies",
        "prompt": "A client's membranes rupture spontaneously with a large gush of fluid. The nurse immediately notes a pulsating, visible loop of umbilical cord at the vaginal introitus, and the FHR tracing shows a sudden prolonged deceleration to 70/min.\nComplete the bowtie by selecting the condition most likely occurring, TWO actions the nurse should take, and TWO parameters the nurse should monitor.",
        "rationale": "Condition: Umbilical cord prolapse. Actions: Apply firm upward pressure on the presenting part; position the client in knee-chest or Trendelenburg position. Parameters: Fetal heart rate continuously; cord pulsation and color. A visible pulsating cord with sudden fetal bradycardia indicates cord prolapse. Relieving pressure and changing position help preserve fetal circulation while arranging emergency delivery; continuous fetal monitoring tracks the response.",
        "rationaleSource": "reviewed",
        "type": "groups",
        "format": "Bowtie",
        "groups": [
          {
            "id": "condition",
            "label": "Most likely condition",
            "selectionCount": 1,
            "options": [
              {
                "id": "A",
                "text": "Placenta previa"
              },
              {
                "id": "B",
                "text": "Vasa previa"
              },
              {
                "id": "C",
                "text": "Umbilical cord prolapse"
              },
              {
                "id": "D",
                "text": "Uterine rupture"
              }
            ],
            "correct": [
              "C"
            ]
          },
          {
            "id": "actions",
            "label": "Actions to take",
            "selectionCount": 2,
            "options": [
              {
                "id": "A",
                "text": "Perform a vaginal examination to assess cervical dilation before acting"
              },
              {
                "id": "B",
                "text": "Place the client in a supine, flat position"
              },
              {
                "id": "C",
                "text": "Apply firm upward pressure on the presenting part with a gloved hand to relieve cord compression"
              },
              {
                "id": "D",
                "text": "Administer oxytocin to expedite birth"
              },
              {
                "id": "E",
                "text": "Position the client in knee-chest or Trendelenburg position"
              }
            ],
            "correct": [
              "C",
              "E"
            ]
          },
          {
            "id": "monitoring",
            "label": "Parameters to monitor",
            "selectionCount": 2,
            "options": [
              {
                "id": "A",
                "text": "Maternal temperature only"
              },
              {
                "id": "B",
                "text": "Newborn Apgar score"
              },
              {
                "id": "C",
                "text": "Color and amount of amniotic fluid"
              },
              {
                "id": "D",
                "text": "Fetal heart rate continuously"
              },
              {
                "id": "E",
                "text": "Cord pulsation and color"
              }
            ],
            "correct": [
              "D",
              "E"
            ]
          }
        ],
        "reviewNote": "The supplied selections are retained; an explanation of the case cues has been added.",
        "references": []
      }
    ]
  }
];
