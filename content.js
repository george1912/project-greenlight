/* Syllabus NRBS 4210, Fall 2026, pp. 18–20.
   Objectives retain syllabus wording; punctuation and topic spelling normalized.
   Add reviewed study content to each objective's answer array when provided.
   Presentation bodies intentionally remain empty. No clinical answers generated. */
const studyWeeks = [
  {
    number: 7, date: 'October 6, 2026', title: 'Parkinson’s disease',
    label: 'Care of patients with Parkinson’s disease', focus: true, sourcePage: 18,
    reading: 'Brunner & Suddarth’s · Chapter 66 (Parkinson’s disease only). Presentation readings: Chapter 52 (cervical and uterine cancer); Chapter 54 (BPH and prostate cancer).',
    objectives: [
      { id: '7-1', title: 'Pathophysiology & clinical manifestations', text: 'Explain the pathophysiology and clinical manifestations of Parkinson disease.', answer: [] },
      { id: '7-2', title: 'Diagnostic tests & treatment options', text: 'Identify the diagnostic tests and treatment options used in the management of Parkinson disease.', answer: [] },
      { id: '7-3', title: 'Medical & nursing management', text: 'Apply evidence-based medical and nursing management principles to the care of patients with Parkinson disease.', answer: [] }
    ],
    presentations: [
      { group: '1A', title: 'Breast cancer', content: [] },
      { group: '2A', title: 'Uterine cancer', content: [] },
      { group: '3A', title: 'Cervical cancer', content: [] },
      { group: '4A', title: 'Prostate cancer', content: [] }
    ]
  },
  {
    number: 8, date: 'October 13, 2026', title: 'Neurological & immune disorders',
    label: 'Student presentations', sourcePage: 19,
    reading: 'Brunner & Suddarth’s · Chapter 35 (SLE only); Chapter 65 (MS, Guillain-Barré, myasthenia gravis, and meningitis only).',
    objectives: [],
    presentations: [
      { group: '5A', title: 'Multiple sclerosis', content: [] },
      { group: '6A', title: 'Amyotrophic lateral sclerosis (ALS)', content: [] },
      { group: '7A', title: 'Guillain-Barré syndrome', content: [] },
      { group: '8A', title: 'Meningitis', content: [] },
      { group: '9A', title: 'Systemic lupus erythematosus (SLE)', content: [] },
      { group: '10A', title: 'Myasthenia gravis', content: [] }
    ]
  },
  {
    number: 9, date: 'October 20, 2026', title: 'Musculoskeletal disorders',
    label: 'Student presentations', sourcePage: 19,
    reading: 'Brunner & Suddarth’s · Chapter 35 (rheumatoid arthritis and gout only); Chapter 37 (osteoarthritis, osteomyelitis, and osteoporosis only).',
    objectives: [],
    presentations: [
      { group: '11A', title: 'Rheumatoid arthritis', content: [] },
      { group: '12A', title: 'Osteoarthritis', content: [] },
      { group: '13A', title: 'Osteomyelitis', content: [] },
      { group: '14A', title: 'Osteoporosis', content: [] },
      { group: '15A', title: 'Gout', content: [] }
    ]
  },
  {
    number: 12, date: 'November 10, 2026', title: 'HIV / AIDS',
    label: 'Care of patients with HIV', sourcePage: 20,
    reading: 'Brunner & Suddarth’s · Chapter 33.',
    objectives: [
      { id: '12-1', title: 'Transmission, prevention & pathophysiology', text: 'Describe the transmission, prevention, and pathophysiology of HIV/AIDS.', answer: [] },
      { id: '12-2', title: 'Clinical manifestations & antiretroviral management', text: 'Explain the clinical manifestations and antiretroviral management of HIV/AIDS.', answer: [] },
      { id: '12-3', title: 'The nursing process', text: 'Apply the nursing process to the care of patients with HIV/AIDS.', answer: [] },
      { id: '12-4', title: 'Resources & support systems', text: 'Identify resources and support systems for patients with immune deficiency disorders.', answer: [] }
    ],
    presentations: []
  }
];
