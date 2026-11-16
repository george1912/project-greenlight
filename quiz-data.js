/* Supplied questions, answer key and rationales; short clinical-context notes are separately labeled. */
const practiceQuizData = {
  "title": "Med-Surg III Practice Questions (Weeks 7–12)",
  "source": "Med-Surg III Practice Questions 2.pdf",
  "sourceSha256": "2f77d9fe4dcfbf9dd8ff8219778223294b7e7a748f5a1870742e0e26962f91a1",
  "questions": [
    {
      "id": 1,
      "prompt": "A nurse is planning care for a patient who has Parkinson’s disease and is experiencing freezing episodes when ambulating. Which intervention should the nurse include in the plan of care?",
      "multiple": false,
      "options": [
        {
          "id": "A",
          "text": "Instruct the patient to take small, rapid steps to maintain momentum"
        },
        {
          "id": "B",
          "text": "Place strips of colored tape on the floor to serve as visual cues"
        },
        {
          "id": "C",
          "text": "Encourage the patient to look down at their feet while walking"
        },
        {
          "id": "D",
          "text": "Use a standard walker with rubber tips on all four legs"
        }
      ],
      "correct": [
        "B"
      ],
      "rationale": "Visual cues (such as colored tape strips on the floor or imagining stepping over an object) help patients with Parkinson’s disease overcome akinesia/freezing episodes."
    },
    {
      "id": 2,
      "prompt": "A patient with Myasthenia Gravis is admitted to the emergency department with severe muscle weakness, shallow respirations, and difficulty swallowing. Which action should the nurse take first?",
      "multiple": false,
      "options": [
        {
          "id": "A",
          "text": "Administer pyridostigmine orally"
        },
        {
          "id": "B",
          "text": "Prepare for endotracheal intubation"
        },
        {
          "id": "C",
          "text": "Perform an edrophonium (Tensilon) test"
        },
        {
          "id": "D",
          "text": "Obtain a sputum culture"
        }
      ],
      "correct": [
        "B"
      ],
      "rationale": "Shallow respirations and difficulty swallowing indicate myasthenic crisis; airway protection and ventilatory support via endotracheal intubation take top priority."
    },
    {
      "id": 3,
      "prompt": "A nurse is providing discharge teaching to a patient newly diagnosed with Multiple Sclerosis (MS). Which statement by the patient indicates a need for further teaching?",
      "multiple": false,
      "options": [
        {
          "id": "A",
          "text": "\"I should take warm baths to help relax my stiff muscles.\""
        },
        {
          "id": "B",
          "text": "\"I will pace my activities and schedule rest periods throughout the day.\""
        },
        {
          "id": "C",
          "text": "\"I should avoid people who have upper respiratory infections.\""
        },
        {
          "id": "D",
          "text": "\"I will use a cane or walker when I feel fatigued or unsteady.\""
        }
      ],
      "correct": [
        "A"
      ],
      "rationale": "Heat (such as warm baths or hot showers) exacerbates fatigue and neuromuscular symptoms in MS (Uhthoff phenomenon) and should be avoided.",
      "context": {
        "text": "Heat sensitivity varies. Avoid overheating and tailor bathing temperature to the person’s symptoms; the key tests recognition of heat-related symptom worsening (Uhthoff phenomenon).",
        "sourceTitle": "VA · MS and heat tolerance",
        "url": "https://www.va.gov/MS/LEARN_ABOUT_MULTIPLE_SCLEROSIS/Keep_Cool_Multiple_Sclerosis_and_Heat_Tolerance.asp"
      }
    },
    {
      "id": 4,
      "prompt": "A nurse is caring for a patient with Amyotrophic Lateral Sclerosis (ALS). Which nursing diagnosis is the highest priority for this patient?",
      "multiple": false,
      "options": [
        {
          "id": "A",
          "text": "Impaired physical mobility"
        },
        {
          "id": "B",
          "text": "Ineffective airway clearance"
        },
        {
          "id": "C",
          "text": "Imbalanced nutrition: less than body requirements"
        },
        {
          "id": "D",
          "text": "Impaired verbal communication"
        }
      ],
      "correct": [
        "B"
      ],
      "rationale": "Progressive bulbar and respiratory muscle weakness puts patients with ALS at high risk for aspiration and respiratory failure; airway clearance is the highest priority."
    },
    {
      "id": 5,
      "prompt": "A nurse is assessing a patient suspected of having bacterial meningitis. Which clinical manifestation should the nurse expect to find? (Select all that apply.)",
      "multiple": true,
      "options": [
        {
          "id": "A",
          "text": "Nuchal rigidity"
        },
        {
          "id": "B",
          "text": "Photophobia"
        },
        {
          "id": "C",
          "text": "Negative Brudzinski sign"
        },
        {
          "id": "D",
          "text": "Severe headache"
        },
        {
          "id": "E",
          "text": "Hypothermia"
        }
      ],
      "correct": [
        "A",
        "B",
        "D"
      ],
      "rationale": "Classic manifestations of bacterial meningitis include nuchal rigidity (stiff neck), photophobia, severe headache, fever, and positive Kernig and Brudzinski signs."
    },
    {
      "id": 6,
      "prompt": "A patient is admitted with Guillain-Barré Syndrome (GBS). Which assessment finding requires immediate intervention by the nurse?",
      "multiple": false,
      "options": [
        {
          "id": "A",
          "text": "Ascending paresthesia in the lower extremities"
        },
        {
          "id": "B",
          "text": "Absent deep tendon reflexes in the knees"
        },
        {
          "id": "C",
          "text": "Weak cough and inability to clear secretions"
        },
        {
          "id": "D",
          "text": "Complaints of lower back pain"
        }
      ],
      "correct": [
        "C"
      ],
      "rationale": "Ascending paralysis in GBS can rapidly involve the diaphragm and intercostal muscles; a weak cough and inability to clear secretions signal impending respiratory compromise."
    },
    {
      "id": 7,
      "prompt": "A nurse is reviewing the laboratory results of a patient with Rheumatoid Arthritis (RA) who is taking methotrexate. Which finding should the nurse report to the healthcare provider immediately?",
      "multiple": false,
      "options": [
        {
          "id": "A",
          "text": "Platelet count of 85,000/mm³"
        },
        {
          "id": "B",
          "text": "Erythrocyte sedimentation rate (ESR) of 42 mm/hr"
        },
        {
          "id": "C",
          "text": "C-reactive protein (CRP) of 3.5 mg/dL"
        },
        {
          "id": "D",
          "text": "Hemoglobin of 12.2 g/dL"
        }
      ],
      "correct": [
        "A"
      ],
      "rationale": "Methotrexate can cause bone marrow suppression; a platelet count of 85,000/mm³ indicates thrombocytopenia and an increased risk for bleeding."
    },
    {
      "id": 8,
      "prompt": "A nurse is teaching a patient with Osteoarthritis (OA) about nonpharmacological management of joint pain. Which instruction should the nurse include?",
      "multiple": false,
      "options": [
        {
          "id": "A",
          "text": "\"Apply ice packs to affected joints during acute flare-ups.\""
        },
        {
          "id": "B",
          "text": "\"Perform high-impact aerobic exercises daily to strengthen joints.\""
        },
        {
          "id": "C",
          "text": "\"Keep affected joints immobilized in splints at all times.\""
        },
        {
          "id": "D",
          "text": "\"Avoid using assistive devices so your muscles stay strong.\""
        }
      ],
      "correct": [
        "A"
      ],
      "rationale": "Cold applications (ice packs) reduce acute joint inflammation and pain during flare-ups, whereas heat relieves chronic stiffness; low-impact exercise and assistive devices are recommended."
    },
    {
      "id": 9,
      "prompt": "A nurse is providing dietary teaching to a postmenopausal female patient to prevent Osteoporosis. Which food selection indicates that the teaching was effective?",
      "multiple": false,
      "options": [
        {
          "id": "A",
          "text": "Fortified orange juice and canned salmon with bones"
        },
        {
          "id": "B",
          "text": "Grilled chicken breast and white rice"
        },
        {
          "id": "C",
          "text": "Fresh strawberries and spinach salad"
        },
        {
          "id": "D",
          "text": "Whole wheat toast with peanut butter"
        }
      ],
      "correct": [
        "A"
      ],
      "rationale": "Calcium-fortified orange juice and canned salmon with bones are rich sources of dietary calcium and vitamin D needed to maintain bone mineral density."
    },
    {
      "id": 10,
      "prompt": "A patient is prescribed allopurinol for the management of chronic Gout. Which instruction should the nurse include in the patient's teaching plan?",
      "multiple": false,
      "options": [
        {
          "id": "A",
          "text": "\"Take this medication on an empty stomach first thing in the morning.\""
        },
        {
          "id": "B",
          "text": "\"Increase your daily fluid intake to at least 2 to 3 liters per day.\""
        },
        {
          "id": "C",
          "text": "\"Stop taking the medication if you experience an acute gout attack.\""
        },
        {
          "id": "D",
          "text": "\"Expect your urine to turn a dark reddish-brown color.\""
        }
      ],
      "correct": [
        "B"
      ],
      "rationale": "Increasing fluid intake to 2–3 liters daily promotes renal uric acid excretion and prevents uric acid kidney stone formation while taking allopurinol.",
      "context": {
        "text": "This answer assumes increased fluids are appropriate. Individualize fluid goals for heart/kidney disease or prescribed restrictions. Allopurinol lowers uric acid production; do not independently stop it during a flare.",
        "sourceTitle": "FDA · Allopurinol prescribing information",
        "url": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/018832s056s058s061%2C018877s063s065s068lbl.pdf"
      }
    },
    {
      "id": 11,
      "prompt": "A nurse is caring for a patient experiencing an acute attack of Ménière disease. Which intervention should the nurse implement?",
      "multiple": false,
      "options": [
        {
          "id": "A",
          "text": "Keep the room brightly lit so the patient can orient themselves"
        },
        {
          "id": "B",
          "text": "Encourage the patient to change positions slowly and keep the head still"
        },
        {
          "id": "C",
          "text": "Increase dietary sodium intake to maintain fluid balance"
        },
        {
          "id": "D",
          "text": "Ambulate the patient in the hallway every 2 hours"
        }
      ],
      "correct": [
        "B"
      ],
      "rationale": "During acute vertigo episodes in Ménière disease, moving slowly, keeping the head still, dimming lights, and restricting sodium help minimize vestibular stimulation and fluid retention."
    },
    {
      "id": 12,
      "prompt": "A nurse is providing postoperative teaching to a patient who had a right modified radical mastectomy with axillary lymph node dissection. Which statement by the patient indicates an understanding of lymphedema prevention?",
      "multiple": false,
      "options": [
        {
          "id": "A",
          "text": "\"I will have my blood pressure taken on my right arm.\""
        },
        {
          "id": "B",
          "text": "\"I should wear tight-fitting sleeves to support my right arm.\""
        },
        {
          "id": "C",
          "text": "\"I will wear gloves when gardening or washing dishes.\""
        },
        {
          "id": "D",
          "text": "\"I should keep my right arm dependent at my side when sitting.\""
        }
      ],
      "correct": [
        "C"
      ],
      "rationale": "Protecting the affected extremity from cuts, burns, and infection (e.g., wearing gloves for gardening/dishes) and avoiding BP cuffs, venipunctures, or constriction prevent lymphedema.",
      "context": {
        "text": "C is the supplied key and supports skin protection. The rationale’s blanket avoidance of BP cuffs or venipuncture is more restrictive than current ANZCA guidance: an arm after axillary surgery can usually be used safely. Decisions, especially with existing swelling, follow an individualized clinical plan.",
        "sourceTitle": "ANZCA · Procedures after axillary lymph-node surgery",
        "url": "https://www.anzca.edu.au/patient-information/about-anaesthesia/have-you-had-axillary-lymph-nodes-removed-during-breast-surgery"
      }
    },
    {
      "id": 13,
      "prompt": "A nurse is teaching a group of young adult women about risk factors and prevention of Cervical Cancer. Which statement should the nurse include?",
      "multiple": false,
      "options": [
        {
          "id": "A",
          "text": "\"Human papillomavirus (HPV) infection is the primary risk factor for cervical cancer.\""
        },
        {
          "id": "B",
          "text": "\"You only need a Pap test if you are experiencing abnormal vaginal bleeding.\""
        },
        {
          "id": "C",
          "text": "\"The HPV vaccine is only effective if given after the age of 30.\""
        },
        {
          "id": "D",
          "text": "\"Using oral contraceptives decreases the risk of developing cervical cancer.\""
        }
      ],
      "correct": [
        "A"
      ],
      "rationale": "Persistent infection with high-risk strains of human papillomavirus (HPV) is the primary cause and risk factor for cervical cancer."
    },
    {
      "id": 14,
      "prompt": "A postmenopausal patient reports painless vaginal bleeding. The nurse recognizes that this is a classic early symptom of which condition?",
      "multiple": false,
      "options": [
        {
          "id": "A",
          "text": "Endometrial (uterine) cancer"
        },
        {
          "id": "B",
          "text": "Ovarian cyst rupture"
        },
        {
          "id": "C",
          "text": "Pelvic inflammatory disease"
        },
        {
          "id": "D",
          "text": "Endometriosis"
        }
      ],
      "correct": [
        "A"
      ],
      "rationale": "Painless abnormal postmenopausal vaginal bleeding is the cardinal early warning sign of endometrial (uterine) cancer."
    },
    {
      "id": 15,
      "prompt": "A nurse is reviewing the laboratory results of a patient with HIV. Which CD4+ T-cell count indicates that the patient has progressed to Acquired Immunodeficiency Syndrome (AIDS)?",
      "multiple": false,
      "options": [
        {
          "id": "A",
          "text": "650 cells/mm³"
        },
        {
          "id": "B",
          "text": "450 cells/mm³"
        },
        {
          "id": "C",
          "text": "250 cells/mm³"
        },
        {
          "id": "D",
          "text": "180 cells/mm³"
        }
      ],
      "correct": [
        "D"
      ],
      "rationale": "Progression from HIV to AIDS is defined by a CD4+ T-cell count below 200 cells/mm³ (or the presence of an AIDS-defining opportunistic illness)."
    }
  ]
};
