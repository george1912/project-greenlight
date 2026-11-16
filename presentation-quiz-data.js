/* Questions from the supplied presentation archive; clinical review: November 16, 2026. */
const presentationQuizData = {
  "multiple-sclerosis": {
    "id": "multiple-sclerosis",
    "questions": [
      {
        "prompt": "A nurse is providing teaching to a client who has a new diagnosis of multiple sclerosis (MS). The client asks the nurse about the usual course of MS. Which of the following responses should the nurse make?",
        "multiple": false,
        "options": [
          {
            "id": "A",
            "text": "“Each client is different; we cannot predict what will happen.”"
          },
          {
            "id": "B",
            "text": "“I can see that you are worried, but it’s too soon to predict what will happen.”"
          },
          {
            "id": "C",
            "text": "“Acute episodes are usually followed by remissions, which can vary in duration.”"
          },
          {
            "id": "D",
            "text": "“It’s too early to think about the future; let’s focus on the present and take each day as it comes.”"
          }
        ],
        "correct": [
          "C"
        ],
        "rationale": "C describes the common relapsing-remitting pattern and directly answers the request for information. MS also has progressive courses, and individual progression is variable; it is not accurate to promise that relapses inevitably become more frequent or intense.",
        "sourcePages": [
          9,
          10
        ],
        "answerSource": "presentation",
        "rationaleSource": "clinical-review",
        "references": [
          {
            "title": "NHS · Multiple sclerosis: disease courses",
            "url": "https://www.nhs.uk/conditions/multiple-sclerosis/"
          },
          {
            "title": "NICE NG220 · MS management and tailored exercise",
            "url": "https://www.nice.org.uk/guidance/ng220/chapter/Recommendations"
          }
        ],
        "id": 1,
        "sourceQuestionNumber": 1
      },
      {
        "prompt": "The nurse has been educating a client newly diagnosed with MS. Which of the following statements by the client indicates an understanding of the education?",
        "multiple": false,
        "options": [
          {
            "id": "A",
            "text": "“I should complete my exercises quickly to reduce fatigue.”"
          },
          {
            "id": "B",
            "text": "“I should participate only in non-weight-bearing exercises.”"
          },
          {
            "id": "C",
            "text": "“I will take hot tub baths to decrease spasms.”"
          },
          {
            "id": "D",
            "text": "“I will stretch daily as directed by the physical therapist.”"
          }
        ],
        "correct": [
          "D"
        ],
        "rationale": "D follows an individualized physical-therapy stretching plan to maintain mobility and flexibility and reduce contracture risk. Exercise should be paced and tailored to ability; a universal restriction to non-weight-bearing activity is not recommended. Heat exposure can worsen symptoms.",
        "sourcePages": [
          11,
          12
        ],
        "answerSource": "presentation",
        "rationaleSource": "clinical-review",
        "references": [
          {
            "title": "NICE NG220 · MS management and tailored exercise",
            "url": "https://www.nice.org.uk/guidance/ng220/chapter/Recommendations"
          }
        ],
        "id": 2,
        "sourceQuestionNumber": 2,
        "reviewNote": "The original exercise option could also be appropriate. Adding “only” clarifies that a blanket restriction to non-weight-bearing exercise is not recommended; the source answer D is retained."
      }
    ],
    "excluded": [],
    "adaptations": []
  },
  "guillain-barre": {
    "id": "guillain-barre",
    "questions": [
      {
        "prompt": "The nurse is caring for a client diagnosed with Guillain-Barré syndrome (GBS) following a severe viral infection. Which classification of medication should the nurse anticipate the health care provider will prescribe?",
        "multiple": false,
        "options": [
          {
            "id": "A",
            "text": "Neuromuscular blocking agents"
          },
          {
            "id": "B",
            "text": "Corticosteroids"
          },
          {
            "id": "C",
            "text": "Cholinergic muscle stimulants"
          },
          {
            "id": "D",
            "text": "Immunoglobulin (IVIG)"
          }
        ],
        "correct": [
          "D"
        ],
        "rationale": "IVIG treats Guillain-Barré syndrome by reducing the immune system’s attack on peripheral nerves, limiting nerve damage and helping recovery.",
        "sourcePages": [
          9,
          10
        ],
        "answerSource": "presentation",
        "rationaleSource": "presentation",
        "references": [
          {
            "title": "EAN/PNS · GBS diagnosis and treatment guideline",
            "url": "https://onlinelibrary.wiley.com/doi/10.1111/ene.16073"
          }
        ],
        "id": 1,
        "sourceQuestionNumber": 1
      },
      {
        "prompt": "You’re assessing a patient’s health history for risk factors associated with developing Guillain-Barré syndrome. Select all the risk factors below.",
        "multiple": true,
        "options": [
          {
            "id": "A",
            "text": "Recent upper respiratory infection"
          },
          {
            "id": "B",
            "text": "Patient’s age: 3 years old"
          },
          {
            "id": "C",
            "text": "Positive stool culture for Campylobacter jejuni"
          },
          {
            "id": "D",
            "text": "Hyperthermia"
          },
          {
            "id": "E",
            "text": "Epstein–Barr infection"
          },
          {
            "id": "F",
            "text": "Diabetes"
          },
          {
            "id": "G",
            "text": "Myasthenia gravis"
          }
        ],
        "correct": [
          "A",
          "C",
          "E"
        ],
        "rationale": "Recent respiratory or gastrointestinal infection, especially Campylobacter, and Epstein–Barr infection are recognized preceding associations. GBS can occur at any age, but age 3 years alone is not the increased-risk profile being tested. Hyperthermia, diabetes, and MG are not the preceding infectious triggers listed here.",
        "sourcePages": [
          9,
          10
        ],
        "answerSource": "presentation",
        "rationaleSource": "clinical-review",
        "references": [
          {
            "title": "CDC · GBS and preceding infections",
            "url": "https://www.cdc.gov/campylobacter/signs-symptoms/guillain-barre-syndrome.html"
          }
        ],
        "id": 2,
        "sourceQuestionNumber": 2
      }
    ],
    "excluded": [],
    "adaptations": []
  },
  "als": {
    "id": "als",
    "questions": [
      {
        "prompt": "Which of the following are clinical manifestations of ALS? Select all that apply.",
        "multiple": true,
        "options": [
          {
            "id": "A",
            "text": "Progressive, unilateral weakness of extremities"
          },
          {
            "id": "B",
            "text": "Incontinence of bladder and bowels"
          },
          {
            "id": "C",
            "text": "Altered speech, weak cough, and dysphagia"
          },
          {
            "id": "D",
            "text": "Ascending muscle paralysis, beginning with lower extremities towards the head"
          },
          {
            "id": "E",
            "text": "Decreased perception to touch or pain"
          }
        ],
        "correct": [
          "A",
          "C"
        ],
        "rationale": "ALS can begin with asymmetric or unilateral limb weakness and commonly causes bulbar and respiratory findings such as dysarthria, dysphagia and weak cough. Classic ascending paralysis suggests GBS. Sensory loss and bladder/bowel incontinence are not typical defining ALS features; new symptoms still warrant assessment rather than assuming these functions can never be affected.",
        "sourcePages": [
          9
        ],
        "answerSource": "presentation",
        "rationaleSource": "clinical-review",
        "references": [
          {
            "title": "NIH/NINDS · ALS",
            "url": "https://www.ninds.nih.gov/sites/default/files/2025-05/NINDS_ALS_Booklet_Digital-508c.pdf"
          }
        ],
        "id": 1,
        "sourceQuestionNumber": 1
      },
      {
        "prompt": "PHYSICAL ASSESSMENT: A 57-year-old male presents with worsening dysphagia and increased fatigue. Alert and oriented ×4; PERRLA. Speech is slowed with slurring. He endorses dyspnea on exertion and weak cough. His spouse reports drooling. Weakness is noted in all extremities. Grip strength is 2/5 in the right hand and 3/5 in the left hand. Fasciculations are observed in both upper extremities. Gait is unsteady; he ambulates with a cane.\n\nMEDICATION LIST: Amlodipine 5 mg PO daily; omeprazole 40 mg PO daily; riluzole 50 mg PO BID; tizanidine 2 mg PO every 8 hours PRN; baclofen 10 mg PO BID.\n\nCase study — Potential condition: select the most likely condition.",
        "multiple": false,
        "options": [
          {
            "id": "A",
            "text": "Hemorrhagic CVA"
          },
          {
            "id": "B",
            "text": "Myasthenia gravis"
          },
          {
            "id": "C",
            "text": "Meningitis"
          },
          {
            "id": "D",
            "text": "Amyotrophic lateral sclerosis (ALS)"
          }
        ],
        "correct": [
          "D"
        ],
        "rationale": "The potential condition is ALS. The progressive limb/bulbar weakness, fasciculations, weak cough and the listed riluzole treatment fit the condition identified in the presentation.",
        "sourcePages": [
          10
        ],
        "answerSource": "presentation",
        "rationaleSource": "presentation",
        "references": [
          {
            "title": "NIH/NINDS · ALS",
            "url": "https://www.ninds.nih.gov/sites/default/files/2025-05/NINDS_ALS_Booklet_Digital-508c.pdf"
          }
        ],
        "caseGroup": "als-presentation-question-2",
        "part": "condition",
        "originalQuestionNumber": 2,
        "id": 2,
        "sourceQuestionNumber": 2
      },
      {
        "prompt": "PHYSICAL ASSESSMENT: A 57-year-old male presents with worsening dysphagia and increased fatigue. Alert and oriented ×4; PERRLA. Speech is slowed with slurring. He endorses dyspnea on exertion and weak cough. His spouse reports drooling. Weakness is noted in all extremities. Grip strength is 2/5 in the right hand and 3/5 in the left hand. Fasciculations are observed in both upper extremities. Gait is unsteady; he ambulates with a cane.\n\nMEDICATION LIST: Amlodipine 5 mg PO daily; omeprazole 40 mg PO daily; riluzole 50 mg PO BID; tizanidine 2 mg PO every 8 hours PRN; baclofen 10 mg PO BID.\n\nCase study — Actions to take: select two.",
        "multiple": true,
        "options": [
          {
            "id": "A",
            "text": "Offer the client a notepad or communication board"
          },
          {
            "id": "B",
            "text": "Assist client with eating plain broth and saltine crackers"
          },
          {
            "id": "C",
            "text": "Maintain head of bed at 30 degrees at all times to promote comfort"
          },
          {
            "id": "D",
            "text": "Perform passive range-of-motion exercises regularly"
          }
        ],
        "correct": [
          "A",
          "D"
        ],
        "rationale": "Provide an alternative communication method and prescribed ROM to support participation and joint mobility. The proposed broth/crackers are not an individualized dysphagia plan, and a fixed 30° position at all times is not a substitute for appropriate breathing and feeding positioning. Oral textures and liquids should follow swallowing assessment.",
        "sourcePages": [
          10
        ],
        "answerSource": "presentation",
        "rationaleSource": "clinical-review",
        "references": [
          {
            "title": "NICE NG42 · Motor neurone disease care",
            "url": "https://www.nice.org.uk/guidance/ng42/chapter/recommendations"
          },
          {
            "title": "ASHA · Adult dysphagia",
            "url": "https://www.asha.org/practice-portal/clinical-topics/adult-dysphagia/"
          }
        ],
        "selectionCount": 2,
        "caseGroup": "als-presentation-question-2",
        "part": "actions",
        "originalQuestionNumber": 2,
        "id": 3,
        "sourceQuestionNumber": 2
      },
      {
        "prompt": "PHYSICAL ASSESSMENT: A 57-year-old male presents with worsening dysphagia and increased fatigue. Alert and oriented ×4; PERRLA. Speech is slowed with slurring. He endorses dyspnea on exertion and weak cough. His spouse reports drooling. Weakness is noted in all extremities. Grip strength is 2/5 in the right hand and 3/5 in the left hand. Fasciculations are observed in both upper extremities. Gait is unsteady; he ambulates with a cane.\n\nMEDICATION LIST: Amlodipine 5 mg PO daily; omeprazole 40 mg PO daily; riluzole 50 mg PO BID; tizanidine 2 mg PO every 8 hours PRN; baclofen 10 mg PO BID.\n\nCase study — Parameters to monitor: select two.",
        "multiple": true,
        "options": [
          {
            "id": "A",
            "text": "Respiratory status"
          },
          {
            "id": "B",
            "text": "Capillary refill"
          },
          {
            "id": "C",
            "text": "Liver function tests"
          },
          {
            "id": "D",
            "text": "Pupillary response"
          }
        ],
        "correct": [
          "A",
          "C"
        ],
        "rationale": "Monitor respiratory status because ALS can weaken ventilation and cough. Monitor liver function tests because riluzole can cause hepatic injury.",
        "sourcePages": [
          10
        ],
        "answerSource": "presentation",
        "rationaleSource": "presentation",
        "references": [
          {
            "title": "NICE NG42 · Motor neurone disease care",
            "url": "https://www.nice.org.uk/guidance/ng42/chapter/recommendations"
          },
          {
            "title": "DailyMed · Riluzole prescribing information",
            "url": "https://dailymed.awsprod.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=dd432c13-389e-46b3-8891-0cf1a58800ff&type=display"
          }
        ],
        "selectionCount": 2,
        "caseGroup": "als-presentation-question-2",
        "part": "monitoring",
        "originalQuestionNumber": 2,
        "id": 4,
        "sourceQuestionNumber": 2
      }
    ],
    "excluded": [],
    "adaptations": [
      "The bow-tie case is presented as three connected items: identify one condition, choose two actions, and choose two monitoring parameters. Its original case and choices are retained."
    ]
  },
  "myasthenia-gravis": {
    "id": "myasthenia-gravis",
    "questions": [
      {
        "prompt": "A client with myasthenia gravis takes pyridostigmine. The client tells the nurse, “By the end of dinner I can barely chew or swallow.” What is the nurse’s best response?",
        "multiple": false,
        "options": [
          {
            "id": "A",
            "text": "“Try eating your largest meal right before bed when you are most relaxed.”"
          },
          {
            "id": "B",
            "text": "“Take your pyridostigmine about 30 to 60 minutes before meals.”"
          },
          {
            "id": "C",
            "text": "“Switch to a full liquid diet to avoid choking.”"
          },
          {
            "id": "D",
            "text": "“Skip your dose before dinner so the medication does not upset your stomach.”"
          }
        ],
        "correct": [
          "B"
        ],
        "rationale": "Timing prescribed immediate-release pyridostigmine before meals helps its effect support chewing and swallowing. Do not skip doses or independently switch to a liquid-only diet; swallowing symptoms need assessment and an individualized safe-intake plan. Plan meals during stronger periods.",
        "sourcePages": [
          9
        ],
        "answerSource": "presentation",
        "rationaleSource": "clinical-review",
        "references": [
          {
            "title": "NHS Scotland · Pyridostigmine for myasthenia gravis",
            "url": "https://www.rightdecisions.scot.nhs.uk/media/zecds0og/1061-v2-pyridostigmine-for-ma.pdf"
          },
          {
            "title": "ASHA · Adult dysphagia",
            "url": "https://www.asha.org/practice-portal/clinical-topics/adult-dysphagia/"
          }
        ],
        "id": 1,
        "sourceQuestionNumber": 1
      },
      {
        "prompt": "A client with myasthenia gravis took extra doses of pyridostigmine at home because of increasing weakness. The client now has worsening muscle weakness, excessive salivation, sweating, abdominal cramping, and a heart rate of 52. Which action should the nurse anticipate?",
        "multiple": false,
        "options": [
          {
            "id": "A",
            "text": "Administer an additional dose of pyridostigmine"
          },
          {
            "id": "B",
            "text": "Prepare the client for an emergency thymectomy"
          },
          {
            "id": "C",
            "text": "Hold the anticholinesterase medication and have atropine available"
          },
          {
            "id": "D",
            "text": "Encourage the client to increase activity to rebuild muscle strength"
          }
        ],
        "correct": [
          "C"
        ],
        "rationale": "Excess anticholinesterase exposure with weakness, secretions, cramping and bradycardia suggests cholinergic crisis. Hold further medication under the emergency plan, obtain urgent clinical help and prepare prescribed atropine for muscarinic effects. Atropine does not reverse skeletal-muscle paralysis; airway and ventilatory support remain priorities.",
        "sourcePages": [
          10
        ],
        "answerSource": "presentation",
        "rationaleSource": "clinical-review",
        "references": [
          {
            "title": "Medsafe · Mestinon product information",
            "url": "https://www.medsafe.govt.nz/profs/datasheet/m/Mestinontab.pdf"
          },
          {
            "title": "ABN · Myasthenia gravis management (2025 update)",
            "url": "https://pn.bmj.com/content/25/5/422"
          }
        ],
        "id": 2,
        "sourceQuestionNumber": 2
      }
    ],
    "excluded": [],
    "adaptations": []
  },
  "meningitis": {
    "id": "meningitis",
    "questions": [
      {
        "prompt": "The nurse is caring for a 45-year-old female patient admitted to the ED.\n\n0900 — Admission note: Patient is alert and oriented ×4. She reports stiff neck, fever and headache for the last 24 hours. Positive Kernig’s sign. Lung sounds are clear bilaterally and bowel sounds are normoactive on auscultation. Mucous membranes are dry.\n\nVital signs: HR 98 bpm; RR 18; BP 116/78; temperature 101.2°F.\n\nWhich of the following should the nurse do first?",
        "multiple": false,
        "options": [
          {
            "id": "A",
            "text": "Place the patient on droplet precautions"
          },
          {
            "id": "B",
            "text": "Administer antibiotics as ordered"
          },
          {
            "id": "C",
            "text": "Assess vital signs"
          },
          {
            "id": "D",
            "text": "Prepare for a lumbar puncture"
          }
        ],
        "correct": [
          "A"
        ],
        "rationale": "For this documented stable patient with suspected undifferentiated acute bacterial meningitis, promptly initiate Standard plus Droplet Precautions while evaluating meningococcal/Hib disease and delivering urgent care. Do not delay resuscitation if instability develops or delay prescribed antibiotics for isolation arrangements. Precautions are organism-specific; not every bacterial cause is droplet-transmitted.",
        "sourcePages": [
          10
        ],
        "answerSource": "presentation",
        "rationaleSource": "clinical-review",
        "references": [
          {
            "title": "CDC · Organism-specific isolation precautions",
            "url": "https://www.cdc.gov/infection-control/hcp/isolation-precautions/appendix-a-type-duration.html"
          },
          {
            "title": "NICE NG240 · Meningitis recognition and urgent management",
            "url": "https://www.nice.org.uk/guidance/ng240/chapter/Recommendations"
          }
        ],
        "id": 1,
        "sourceQuestionNumber": 1
      }
    ],
    "excluded": [
      {
        "pages": [
          11
        ],
        "reason": "One case question is left unscored because the chart and answer choice give different blood pressures, and the slide incorrectly identifies tachypnea alone as the respiratory component of Cushing’s triad. The complete item remains in the presentation."
      }
    ],
    "adaptations": []
  },
  "rheumatoid-arthritis": {
    "id": "rheumatoid-arthritis",
    "questions": [
      {
        "prompt": "Sam’s provider would like to discuss pharmacological and non-pharmacological management of her rheumatoid arthritis. Which techniques should the nurse anticipate the provider recommending? Select all that apply.",
        "multiple": true,
        "options": [
          {
            "id": "A",
            "text": "Maintain a healthy weight"
          },
          {
            "id": "B",
            "text": "Attending physical therapy"
          },
          {
            "id": "C",
            "text": "A prescription for methylphenidate"
          },
          {
            "id": "D",
            "text": "Maintaining a sedentary lifestyle"
          },
          {
            "id": "E",
            "text": "Take DMARDs only on days when symptoms are most severe"
          },
          {
            "id": "F",
            "text": "Consider altering diet to help prevent flare-ups"
          }
        ],
        "correct": [
          "A",
          "B",
          "F"
        ],
        "rationale": "Healthy weight and physical therapy support joint health, function and flexibility. Regular appropriately tailored activity is preferred to a sedentary lifestyle. DMARDs must be taken on the prescribed schedule, not only on bad symptom days. Methylphenidate is not an RA disease-modifying treatment. A Mediterranean-style eating pattern can be considered as an adjunct for symptoms and overall health; it does not guarantee prevention of flares or replace DMARDs.",
        "sourcePages": [
          13,
          14
        ],
        "answerSource": "presentation",
        "rationaleSource": "clinical-review",
        "references": [
          {
            "title": "ACR · Exercise, rehabilitation and diet in RA",
            "url": "https://assets.contentstack.io/v3/assets/bltee37abb6b278ab2c/bltea261fe88e82ca2e/integrative-ra-treatment-guideline-manuscript-2022.pdf"
          },
          {
            "title": "NIAMS · RA treatment",
            "url": "https://www.niams.nih.gov/health-topics/rheumatoid-arthritis/diagnosis-treatment-and-steps-to-take"
          }
        ],
        "id": 1,
        "sourceQuestionNumber": 2
      }
    ],
    "excluded": [
      {
        "pages": [
          11,
          12
        ],
        "reason": "One Expected/Unexpected matrix is left unscored because several findings and a laboratory unit are ambiguous in the original case. The complete item remains in the presentation."
      }
    ],
    "adaptations": []
  },
  "osteoarthritis": {
    "id": "osteoarthritis",
    "questions": [
      {
        "prompt": "A nurse is assessing a 68-year-old client who has been diagnosed with osteoarthritis of the hands. Which finding should the nurse expect to see?",
        "multiple": false,
        "options": [
          {
            "id": "A",
            "text": "Bony enlargements of the distal interphalangeal joints (Heberden’s nodes)"
          },
          {
            "id": "B",
            "text": "Ulnar deviation with subcutaneous rheumatoid nodules"
          },
          {
            "id": "C",
            "text": "Low-grade fever and generalized fatigue"
          },
          {
            "id": "D",
            "text": "Prolonged morning stiffness lasting more than 2 hours with symmetrical joint swelling"
          }
        ],
        "correct": [
          "A"
        ],
        "rationale": "Heberden’s nodes at DIP joints and Bouchard’s nodes at PIP joints are characteristic OA findings. OA morning stiffness typically lasts less than 30 minutes and the pattern may be asymmetric. Prolonged stiffness, systemic inflammatory symptoms, ulnar deviation and rheumatoid nodules instead suggest inflammatory arthritis such as RA.",
        "sourcePages": [
          11
        ],
        "answerSource": "presentation",
        "rationaleSource": "presentation",
        "references": [
          {
            "title": "NIAMS · Osteoarthritis",
            "url": "https://www.niams.nih.gov/health-topics/osteoarthritis"
          }
        ],
        "id": 1,
        "sourceQuestionNumber": 1
      },
      {
        "prompt": "A client with osteoarthritis of the knee is prescribed acetaminophen for pain management. Which statement by the client indicates that teaching about the medication has been effective?",
        "multiple": false,
        "options": [
          {
            "id": "A",
            "text": "“I should avoid drinking alcohol while taking this medication.”"
          },
          {
            "id": "B",
            "text": "“I should take this medication only on an empty stomach.”"
          },
          {
            "id": "C",
            "text": "“This medication will reduce the inflammation in my joint.”"
          },
          {
            "id": "D",
            "text": "“I can take up to 6 grams a day if my pain is severe.”"
          }
        ],
        "correct": [
          "A"
        ],
        "rationale": "Acetaminophen can cause serious liver injury, especially with excessive total dosing or relevant alcohol/liver risks. Follow the actual product/prescriber limit and count all acetaminophen-containing products; FDA’s adult maximum ceiling is 4,000 mg in 24 hours, and many products or patients have lower limits. Six grams is unsafe. Acetaminophen relieves pain with little anti-inflammatory effect and can be taken with or without food.",
        "sourcePages": [
          11
        ],
        "answerSource": "presentation",
        "rationaleSource": "clinical-review",
        "references": [
          {
            "title": "FDA · Acetaminophen safety",
            "url": "https://www.fda.gov/consumers/consumer-updates/dont-overuse-acetaminophen"
          }
        ],
        "id": 2,
        "sourceQuestionNumber": 2
      }
    ],
    "excluded": [],
    "adaptations": []
  },
  "osteoporosis": {
    "id": "osteoporosis",
    "questions": [
      {
        "prompt": "A nurse is assessing four clients during a routine health screening. The nurse understands that certain medical conditions, medications, and lifestyle factors can increase the risk of developing osteoporosis. Which client is at the greatest risk for developing osteoporosis?",
        "multiple": false,
        "options": [
          {
            "id": "A",
            "text": "A 45-year-old male who exercises regularly, eats a balanced diet, and has a family history of hypertension."
          },
          {
            "id": "B",
            "text": "A 68-year-old postmenopausal female who has been taking prednisone daily for rheumatoid arthritis for the past 5 years."
          },
          {
            "id": "C",
            "text": "A 60-year-old female who walks daily, consumes calcium-rich foods, and takes vitamin D supplements."
          },
          {
            "id": "D",
            "text": "A 52-year-old male who has a sedentary lifestyle but maintains adequate calcium and vitamin D intake."
          }
        ],
        "correct": [
          "B"
        ],
        "rationale": "The 68-year-old postmenopausal client has several major risks: estrogen loss accelerates bone loss; prolonged prednisone decreases bone formation, increases breakdown and reduces calcium absorption; RA adds inflammatory and functional risk. The other clients have fewer major risk factors. Exercise and adequate calcium/vitamin D support bone health but do not eliminate risk, and inactivity is itself a risk.",
        "sourcePages": [
          13,
          14
        ],
        "answerSource": "presentation",
        "rationaleSource": "presentation",
        "references": [
          {
            "title": "NIAMS · Osteoporosis",
            "url": "https://www.niams.nih.gov/health-topics/osteoporosis"
          }
        ],
        "id": 1,
        "sourceQuestionNumber": 1
      },
      {
        "prompt": "A 78-year-old female client with osteoporosis is brought to the emergency department after falling while getting out of bed. She reports severe right hip pain and cannot stand or bear weight on her right leg. BP 148/86 mmHg; heart rate 108 beats/min; respiratory rate 22 breaths/min; SpO₂ 96% on room air; pain 9/10 in the right hip. The right leg is shortened and externally rotated, with significant pain on movement. History: osteoporosis, hypertension and previous vertebral compression fracture.\n\nThe nurse should recognize that the client is most likely experiencing which condition?",
        "multiple": false,
        "options": [
          {
            "id": "A",
            "text": "Osteoarthritis of the right hip"
          },
          {
            "id": "B",
            "text": "Right hip fracture"
          },
          {
            "id": "C",
            "text": "Acute lumbar radiculopathy"
          },
          {
            "id": "D",
            "text": "Right hip muscle strain"
          }
        ],
        "correct": [
          "B"
        ],
        "rationale": "Severe hip pain after a fall, inability to bear weight, and a shortened, externally rotated leg strongly suggest a displaced hip fracture. Osteoporosis increases fragility-fracture risk after low-energy trauma. Imaging confirms the diagnosis. OA usually develops gradually, while radiculopathy or a muscle strain does not explain the visible limb deformity.",
        "sourcePages": [
          15,
          16
        ],
        "answerSource": "presentation",
        "rationaleSource": "presentation",
        "references": [
          {
            "title": "AAOS · Hip fractures",
            "url": "https://www.orthoinfo.org/bodypart/hip-thigh/hip-fractures/"
          }
        ],
        "id": 2,
        "sourceQuestionNumber": 2
      },
      {
        "prompt": "A 78-year-old female client with osteoporosis is brought to the emergency department after falling while getting out of bed. She reports severe right hip pain and cannot stand or bear weight on her right leg. BP 148/86 mmHg; heart rate 108 beats/min; respiratory rate 22 breaths/min; SpO₂ 96% on room air; pain 9/10 in the right hip. The right leg is shortened and externally rotated, with significant pain on movement. History: osteoporosis, hypertension and previous vertebral compression fracture.\n\nWhich action should the nurse prioritize?",
        "multiple": false,
        "options": [
          {
            "id": "A",
            "text": "Assist the client to ambulate to assess mobility"
          },
          {
            "id": "B",
            "text": "Apply a heating pad to the affected hip"
          },
          {
            "id": "C",
            "text": "Immobilize the affected extremity and assess neurovascular status"
          },
          {
            "id": "D",
            "text": "Perform passive range-of-motion exercises"
          }
        ],
        "correct": [
          "C"
        ],
        "rationale": "Maintain the limb in its current supported position, avoid unnecessary movement, and assess circulation, sensation, movement, skin temperature and distal pulses. Notify the provider, monitor vital signs, give prescribed pain relief and prepare for imaging and possible surgery. Trying to walk the client or move the hip can worsen pain and displacement; a heating pad does not stabilize a suspected fracture.",
        "sourcePages": [
          15,
          17
        ],
        "answerSource": "presentation",
        "rationaleSource": "presentation",
        "references": [
          {
            "title": "AAOS · Hip fractures",
            "url": "https://www.orthoinfo.org/bodypart/hip-thigh/hip-fractures/"
          }
        ],
        "id": 3,
        "sourceQuestionNumber": 2
      }
    ],
    "excluded": [],
    "adaptations": [
      "The two dropdowns in the hip-fracture case are presented as separate questions using the same case and original choices."
    ]
  },
  "osteomyelitis": {
    "id": "osteomyelitis",
    "questions": [
      {
        "prompt": "A nurse is teaching a newly hired nurse about preventing and managing osteomyelitis. Which of the following pieces of information should the nurse include in the teaching? Select all that apply.",
        "multiple": true,
        "options": [
          {
            "id": "A",
            "text": "Shave the surgical site the morning of surgery to reduce bacteria on the skin."
          },
          {
            "id": "B",
            "text": "Elective orthopedic surgery should be postponed if the client has an active infection."
          },
          {
            "id": "C",
            "text": "The client will be prescribed oral antibiotics for 7–10 days after discharge."
          },
          {
            "id": "D",
            "text": "The client should begin full weight-bearing on the affected extremity as soon as possible to promote bone healing and prevent muscle atrophy."
          },
          {
            "id": "E",
            "text": "Obtain indicated blood cultures before initiating antibiotic therapy when doing so will not delay urgent treatment."
          }
        ],
        "correct": [
          "B",
          "E"
        ],
        "rationale": "Address active infection before elective orthopedic surgery. If hair removal is necessary, use clippers rather than a razor. Obtain indicated cultures before antibiotics when safely feasible, but do not delay urgent therapy in a septic or unstable patient. Osteomyelitis treatment duration and oral/IV route depend on the site, organism, surgery and clinical response; a universal 7–10-day post-discharge course is inappropriate. Weight-bearing and protection follow the orthopedic/wound plan, rather than automatic immediate full weight-bearing.",
        "sourcePages": [
          12,
          13
        ],
        "answerSource": "presentation",
        "rationaleSource": "clinical-review",
        "references": [
          {
            "title": "CDC · Surgical-site infection prevention",
            "url": "https://www.cdc.gov/infection-control/media/pdfs/guidelines-ssi-toolkit-508.pdf"
          },
          {
            "title": "WHO · Hair-removal safety",
            "url": "https://www.who.int/news-room/questions-and-answers/item/surgical-site-infections"
          },
          {
            "title": "IDSA · Osteomyelitis cultures and urgent treatment",
            "url": "https://www.idsociety.org/practice-guideline/vertebral-osteomyelitis/"
          },
          {
            "title": "IWGDF/IDSA · Diabetic foot infection and osteomyelitis",
            "url": "https://www.idsociety.org/practice-guideline/diabetic-foot-infections/"
          }
        ],
        "id": 1,
        "sourceQuestionNumber": 1,
        "reviewNote": "The source B/E key is retained. Culture collection must not delay urgent antibiotics in a septic or unstable patient; treatment route and duration are individualized.",
        "presentationCorrect": [
          "B",
          "E"
        ]
      },
      {
        "prompt": "Day 1, 0900: A 64-year-old client with type 2 diabetes mellitus and peripheral neuropathy is brought to the emergency department by their partner. The client reports throbbing left foot pain of 8/10 that worsens with movement, with general malaise for several days. The partner reports a sore on the bottom of the foot for about 8 weeks that never seems to heal, and treatment for an infection in the same foot 4 months ago. A 3 cm × 3 cm ulcer is present on the plantar surface of the left first metatarsal head, with a sinus tract draining purulent fluid. Temperature 37.9°C (100.2°F); HR 88/min; RR 18/min; BP 118/74 mmHg; SpO₂ 96% on room air. Day 1, 0945 labs: sodium 143 mEq/L (136–145), Hgb 9 g/dL (12–16), Hct 27% (37–47), WBC 15,800/mm³ (5,000–10,000), ESR 16 mm/hr (less than 20).\n\nThe nurse reviews the client’s history and physical and laboratory results. Which findings indicate a chronic rather than an acute osteomyelitis pattern? Select all that apply.",
        "multiple": true,
        "options": [
          {
            "id": "A",
            "text": "Throbbing left foot pain of 8/10 that worsens with movement"
          },
          {
            "id": "B",
            "text": "The client has had a “sore on the bottom of the foot” for about 8 weeks that “never seems to heal”"
          },
          {
            "id": "C",
            "text": "The client was treated for an infection in the same foot 4 months ago"
          },
          {
            "id": "D",
            "text": "Sinus tract draining purulent fluid"
          },
          {
            "id": "E",
            "text": "Hgb: 9 g/dL (12–16 g/dL)"
          },
          {
            "id": "F",
            "text": "WBC: 15,800/mm³ (5,000–10,000/mm³)"
          },
          {
            "id": "G",
            "text": "ESR: 16 mm/hr (less than 20 mm/hr)"
          }
        ],
        "correct": [
          "B",
          "C",
          "D"
        ],
        "rationale": "A longstanding nonhealing ulcer, recurrent infection at the same site, and a draining sinus tract support a persistent/chronic infection pattern in this case and warrant definitive bone-infection evaluation. Pain quality and WBC do not reliably date infection. Anemia has many causes and is not a dependable discriminator of chronic versus acute osteomyelitis. A normal ESR does not establish chronic infection: current IWGDF/IDSA guidance notes ESR may remain normal in acute infection and is affected by comorbidities. These findings require integrated clinical, imaging and microbiological assessment.",
        "sourcePages": [
          14,
          15,
          16
        ],
        "answerSource": "clinical-review",
        "rationaleSource": "clinical-review",
        "references": [
          {
            "title": "IWGDF/IDSA · Biomarker limitations in diabetic foot infection",
            "url": "https://www.idsociety.org/practice-guideline/diabetic-foot-infections/"
          },
          {
            "title": "WHO · Osteomyelitis duration and draining-sinus pattern",
            "url": "https://iris.who.int/bitstream/handle/10665/365135/WHO-MHP-HPS-EML-2022.02-eng.pdf"
          }
        ],
        "id": 2,
        "sourceQuestionNumber": 2,
        "reviewNote": "The slide marks B, C, D, E and G. The reviewed key is B, C and D: anemia and a normal ESR cannot reliably distinguish chronic from acute infection.",
        "presentationCorrect": [
          "B",
          "C",
          "D",
          "E",
          "G"
        ]
      }
    ],
    "excluded": [],
    "adaptations": []
  },
  "gout": {
    "id": "gout",
    "questions": [
      {
        "prompt": "A nurse is caring for a client who has gout. Which medication should the nurse expect the provider to prescribe for long-term treatment?",
        "multiple": false,
        "options": [
          {
            "id": "A",
            "text": "Colchicine"
          },
          {
            "id": "B",
            "text": "Allopurinol"
          },
          {
            "id": "C",
            "text": "Furosemide"
          },
          {
            "id": "D",
            "text": "Aspirin"
          }
        ],
        "correct": [
          "B"
        ],
        "rationale": "Allopurinol lowers urate production, helping prevent crystal buildup and future gout attacks, and is a preferred first-line long-term urate-lowering medicine when ULT is indicated. Colchicine treats or prevents inflammatory flares rather than lowering urate. Furosemide and low-dose aspirin may increase urate; aspirin prescribed for another appropriate indication should not be stopped independently.",
        "sourcePages": [
          13,
          14
        ],
        "answerSource": "presentation",
        "rationaleSource": "clinical-review",
        "references": [
          {
            "title": "ACR · Gout management",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10563586/"
          }
        ],
        "id": 1,
        "sourceQuestionNumber": 1
      },
      {
        "prompt": "Which factor places a client at the highest risk for developing gout?",
        "multiple": false,
        "options": [
          {
            "id": "A",
            "text": "Female gender and a low-purine diet"
          },
          {
            "id": "B",
            "text": "Use of hydrochlorothiazide and low-dose aspirin alongside a high BMI"
          },
          {
            "id": "C",
            "text": "A body mass index (BMI) under 25 with high fluid intake"
          },
          {
            "id": "D",
            "text": "Regular consumption of eggs and low-fat dairy"
          }
        ],
        "correct": [
          "B"
        ],
        "rationale": "Hydrochlorothiazide and low-dose aspirin can increase urate, and high BMI is associated with increased urate burden and gout risk. Together these are the strongest risk-factor combination among the listed choices. Review medicines with the prescriber; do not independently stop appropriately indicated aspirin.",
        "sourcePages": [
          13,
          14
        ],
        "answerSource": "presentation",
        "rationaleSource": "clinical-review",
        "references": [
          {
            "title": "ACR · Gout management",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10563586/"
          }
        ],
        "id": 2,
        "sourceQuestionNumber": 2,
        "reviewNote": "“Low-dose” clarifies the aspirin exposure in option B, matching the presentation’s explanation. The source B key is retained; do not stop prescribed aspirin independently."
      }
    ],
    "excluded": [],
    "adaptations": []
  },
  "breast-cancer": {
    "id": "breast-cancer",
    "questions": [
      {
        "prompt": "A client is 10 days into her second cycle of chemotherapy for breast cancer and calls the clinic saying she feels “a little warm.” Her temperature at home read 100.6°F. What is the nurse’s best response?",
        "multiple": false,
        "options": [
          {
            "id": "A",
            "text": "Take acetaminophen and recheck her temperature in a few hours"
          },
          {
            "id": "B",
            "text": "Increase fluids and rest, and call back if it goes above 101°F"
          },
          {
            "id": "C",
            "text": "Go to the ED right away—this needs to be addressed immediately"
          },
          {
            "id": "D",
            "text": "This is a normal side effect of chemo and doesn’t need to be reported"
          }
        ],
        "correct": [
          "C"
        ],
        "rationale": "Any fever of 100.4°F (38°C) or higher during chemotherapy has to be treated as a possible sign of neutropenic sepsis and evaluated right away. Chemo may suppress the immune response without the client appearing or feeling very sick.",
        "sourcePages": [
          12,
          13
        ],
        "answerSource": "presentation",
        "rationaleSource": "presentation",
        "references": [
          {
            "title": "CDC · Watch out for fever",
            "url": "https://www.cdc.gov/cancer-preventing-infections/patients/fever.html"
          }
        ],
        "id": 1,
        "sourceQuestionNumber": 1
      },
      {
        "prompt": "A client is three weeks post-op from an axillary lymph node dissection and reports new swelling in her affected arm, which she’s also been using for home blood pressure checks. What’s the priority teaching here?",
        "multiple": false,
        "options": [
          {
            "id": "A",
            "text": "This new swelling needs prompt assessment; use the other arm for BP checks or needle procedures when feasible and follow individualized precautions"
          },
          {
            "id": "B",
            "text": "Some swelling this soon after surgery is expected and should clear up on its own"
          },
          {
            "id": "C",
            "text": "She should wrap the arm snugly with an ace bandage to bring the swelling down"
          },
          {
            "id": "D",
            "text": "This probably isn’t related to the surgery—she can just mention it to her primary doctor at some point"
          }
        ],
        "correct": [
          "A"
        ],
        "rationale": "New arm swelling after node surgery warrants prompt assessment for lymphedema and other causes. Protect skin, avoid tight constriction, and use an unaffected site for BP or needle procedures when feasible, especially with established lymphedema. Evidence does not support a universal lifelong ban on every procedure in every at-risk arm; follow the individual care plan and do not delay necessary care. Do not start tight bandaging without assessment and appropriate lymphedema guidance.",
        "sourcePages": [
          14,
          15
        ],
        "answerSource": "presentation",
        "rationaleSource": "clinical-review",
        "references": [
          {
            "title": "NCI · Lymphedema",
            "url": "https://www.cancer.gov/about-cancer/treatment/side-effects/lymphedema"
          },
          {
            "title": "NICE NG101 · Breast cancer recommendations",
            "url": "https://www.nice.org.uk/guidance/ng101/chapter/recommendations"
          }
        ],
        "id": 2,
        "sourceQuestionNumber": 2,
        "reviewNote": "The original answer imposed a lifelong ban on BP checks and needle procedures. It is qualified here: assess new swelling promptly, follow individualized precautions, and use the unaffected arm when feasible. The source answer A is retained."
      }
    ],
    "excluded": [],
    "adaptations": []
  },
  "prostate-cancer": {
    "id": "prostate-cancer",
    "questions": [
      {
        "prompt": "A nurse is assessing a client who has prostate cancer. Which finding should the nurse recognize as most concerning for metastatic disease?",
        "multiple": false,
        "options": [
          {
            "id": "A",
            "text": "Decreased force of the urinary stream"
          },
          {
            "id": "B",
            "text": "Increased urinary frequency"
          },
          {
            "id": "C",
            "text": "New onset persistent hip pain"
          },
          {
            "id": "D",
            "text": "Painful ejaculation"
          }
        ],
        "correct": [
          "C"
        ],
        "rationale": "Prostate cancer can spread to the bones. New onset hip pain, backache, or spontaneous pathologic fractures can indicate metastatic prostate cancer. An enlarged prostate can press on the urethra and interfere with emptying, causing a weak stream and frequency; these can occur in localized disease and do not specifically suggest metastasis. Painful ejaculation can also occur with localized involvement and is less specific for metastasis.",
        "sourcePages": [
          9,
          10
        ],
        "answerSource": "presentation",
        "rationaleSource": "presentation",
        "references": [
          {
            "title": "NCI · Prostate cancer treatment and symptoms",
            "url": "https://www.cancer.gov/types/prostate/patient/prostate-treatment-pdq"
          }
        ],
        "id": 1,
        "sourceQuestionNumber": 1
      },
      {
        "prompt": "A nurse is caring for a 68-year-old client who has been newly diagnosed with prostate cancer. The client asks why a prostate-specific antigen (PSA) blood test is being monitored. Which response by the nurse is most appropriate?",
        "multiple": false,
        "options": [
          {
            "id": "A",
            "text": "“The PSA test confirms whether the cancer has metastasized to the bones.”"
          },
          {
            "id": "B",
            "text": "“The PSA level can help evaluate prostate abnormalities and monitor response to treatment.”"
          },
          {
            "id": "C",
            "text": "“A normal PSA level rules out prostate cancer.”"
          },
          {
            "id": "D",
            "text": "“The PSA test determines the exact stage and grade of prostate cancer.”"
          }
        ],
        "correct": [
          "B"
        ],
        "rationale": "PSA is a protein produced by prostate cells. An elevated PSA can occur with prostate cancer as well as benign conditions such as benign prostatic hyperplasia (BPH) or prostatitis. PSA levels can be followed over time to help monitor treatment response and detect possible recurrence. PSA alone does not confirm bone metastasis, completely rule out cancer when normal, or determine the exact stage and grade; these require the appropriate clinical, biopsy and imaging evaluation.",
        "sourcePages": [
          9,
          10
        ],
        "answerSource": "presentation",
        "rationaleSource": "presentation",
        "references": [
          {
            "title": "NCI · PSA test",
            "url": "https://www.cancer.gov/types/prostate/psa-fact-sheet"
          }
        ],
        "id": 2,
        "sourceQuestionNumber": 2
      }
    ],
    "excluded": [],
    "adaptations": []
  },
  "uterine-cancer": {
    "id": "uterine-cancer",
    "questions": [
      {
        "prompt": "Mrs. U is a 66-year-old white female who came to the medical clinic at an independent living community for older adults; she is concerned about recent postmenopausal bleeding. The nurse is gathering additional information before the patient is seen by the provider. Vitals: BP 130/85; HR 72; temperature 98.1°F; RR 16; O₂ saturation 99%. BMI: 31 kg/m². OB-Gyn history: menarche at age 10, G3P3, early menopause at age 45, and multiple recent sexual partners. Focusing on her age, body size, and reproductive history, which three findings increase her endometrial cancer risk? Select three.",
        "multiple": true,
        "options": [
          {
            "id": "A",
            "text": "Multiple sexual partners"
          },
          {
            "id": "B",
            "text": "Menarche age 10"
          },
          {
            "id": "C",
            "text": "BMI"
          },
          {
            "id": "D",
            "text": "Race"
          },
          {
            "id": "E",
            "text": "Obstetric history"
          },
          {
            "id": "F",
            "text": "Age"
          }
        ],
        "correct": [
          "B",
          "C",
          "F"
        ],
        "rationale": "Early menarche increases cumulative estrogen exposure; obesity and older age also increase endometrial cancer risk. In this case, menarche at 10, BMI 31 and age 66 are the three selected factors. Nulliparity, rather than this patient’s G3P3 history, is the reproductive risk discussed. Multiple partners relate more directly to HPV exposure/cervical risk and are not the selected endometrial factors. Do not replace individual risk assessment with a blanket statement that race never relates to incidence or outcomes.",
        "sourcePages": [
          10
        ],
        "answerSource": "presentation",
        "rationaleSource": "clinical-review",
        "references": [
          {
            "title": "NCI · Endometrial cancer prevention",
            "url": "https://www.cancer.gov/types/uterine/hp/endometrial-prevention-pdq"
          },
          {
            "title": "NCI SEER · Uterine cancer statistics by race/ethnicity",
            "url": "https://seer.cancer.gov/statfacts/html/corp.html"
          }
        ],
        "id": 1,
        "sourceQuestionNumber": 1,
        "reviewNote": "This question focuses on age, body size, and reproductive history. Population incidence varies by race and comparator, so race is not treated as universally irrelevant.",
        "selectionCount": 3
      },
      {
        "prompt": "Mrs. U received a diagnosis of Type 1 endometrioid cancer, and she asks the nurse what that means. The nurse explains that: Select all that apply.",
        "multiple": true,
        "options": [
          {
            "id": "A",
            "text": "Mrs. U will likely die because Type 1 uterine cancer has a poorer prognosis than Type 2."
          },
          {
            "id": "B",
            "text": "Type 1 endometrial cancer is estrogen dependent."
          },
          {
            "id": "C",
            "text": "There are several surgical treatment options depending on the cancer staging."
          },
          {
            "id": "D",
            "text": "Radiation treatment is rarely used for uterine cancer."
          },
          {
            "id": "E",
            "text": "Mrs. U will have regular blood tests to monitor for cancer antigen 125."
          }
        ],
        "correct": [
          "B",
          "C"
        ],
        "rationale": "In the traditional Type 1 framework, endometrioid cancer is classically estrogen-associated and often low grade, so the claim of a uniformly poorer prognosis than Type 2 is wrong. Treatment depends on stage, grade, histology and molecular features. Surgery commonly includes total hysterectomy with bilateral salpingo-oophorectomy and appropriate staging; radiation or systemic treatment may be indicated. Regular CA-125 testing is not required by a Type 1 diagnosis alone. It may be monitored selectively, for example if elevated before treatment, or investigated when recurrence is suspected. Thus B and C are supported; E cannot be promised from the information given.",
        "sourcePages": [
          11
        ],
        "answerSource": "clinical-review",
        "rationaleSource": "clinical-review",
        "references": [
          {
            "title": "NCI · Endometrial cancer treatment",
            "url": "https://www.cancer.gov/types/uterine/endometrial/treatment"
          },
          {
            "title": "NCCN · Uterine Cancer patient guideline (2026)",
            "url": "https://vicc.org/sites/default/files/2026-09/uterine-patient.pdf"
          }
        ],
        "id": 2,
        "sourceQuestionNumber": 2,
        "reviewNote": "The slide marks B, C and E. The reviewed key is B and C: a Type 1 diagnosis alone does not establish a need for routine CA-125 testing. Follow-up depends on the clinical history and treatment plan.",
        "presentationCorrect": [
          "B",
          "C",
          "E"
        ]
      }
    ],
    "excluded": [],
    "adaptations": []
  },
  "cervical-cancer": {
    "id": "cervical-cancer",
    "questions": [
      {
        "prompt": "A community health nurse is developing an educational PowerPoint for a seminar focused on reducing the incidence of cervical cancer. Which primary prevention strategy should the nurse emphasize?",
        "multiple": false,
        "options": [
          {
            "id": "A",
            "text": "Undergoing annual Pap smear screenings starting at 21"
          },
          {
            "id": "B",
            "text": "Receiving the recombinant HPV vaccination series"
          },
          {
            "id": "C",
            "text": "Scheduling routine biannual colposcopic evaluations"
          },
          {
            "id": "D",
            "text": "Initiating high-sensitivity serum tumor marker testing annually"
          }
        ],
        "correct": [
          "B"
        ],
        "rationale": "Primary prevention aims to prevent disease before it occurs. HPV vaccination prevents new infection with oncogenic HPV types responsible for many cervical cancers. Pap/HPV screening detects infection or precancerous changes and is secondary prevention; colposcopy is a diagnostic follow-up for selected abnormal findings. Annual serum tumor-marker testing is not a routine primary-prevention strategy. The annual Pap schedule in the distractor is not endorsed; use the applicable current screening guideline.",
        "sourcePages": [
          8,
          9
        ],
        "answerSource": "presentation",
        "rationaleSource": "clinical-review",
        "references": [
          {
            "title": "CDC · Reducing cervical cancer risk",
            "url": "https://www.cdc.gov/cervical-cancer/prevention/index.html"
          }
        ],
        "id": 1,
        "sourceQuestionNumber": 1
      },
      {
        "prompt": "A nurse is providing discharge instructions to a client who underwent a radical hysterectomy for early-stage cervical cancer. Which of the following client statements indicates a correct understanding of home care restrictions?",
        "multiple": false,
        "options": [
          {
            "id": "A",
            "text": "“I am able to resume my high-impact exercise regimen as soon as I am home.”"
          },
          {
            "id": "B",
            "text": "“I can relax and take a hot bubble bath the same night I get home.”"
          },
          {
            "id": "C",
            "text": "“I should avoid lifting any objects heavier than 10 lbs.”"
          },
          {
            "id": "D",
            "text": "“I am allowed to engage in sexual intercourse since my incision is closed with staples.”"
          }
        ],
        "correct": [
          "C"
        ],
        "rationale": "Heavy lifting and high-impact exercise are restricted during early recovery to protect internal healing; a 10-lb lifting limit is a commonly prescribed example. Tub bathing, vaginal insertion and intercourse require the surgical team’s clearance, even when the external incision appears closed. Exact lifting limits and intervals vary with the operation and healing plan; follow the patient’s written instructions rather than assuming every pelvic operation has the same six-week cutoff.",
        "sourcePages": [
          10,
          11
        ],
        "answerSource": "presentation",
        "rationaleSource": "clinical-review",
        "references": [
          {
            "title": "MSK · Abdominal hysterectomy and gynecologic surgery recovery",
            "url": "https://www.mskcc.org/cancer-care/patient-education/total-abdominal-hysterectomy"
          }
        ],
        "id": 2,
        "sourceQuestionNumber": 2
      }
    ],
    "excluded": [],
    "adaptations": []
  },
  "lupus": {
    "id": "lupus",
    "questions": [
      {
        "prompt": "A 34-year-old female client with SLE is seen in the rheumatology clinic. The patient takes hydroxychloroquine, prednisone, and belimumab. Which finding should the nurse report to the provider first?",
        "multiple": false,
        "options": [
          {
            "id": "A",
            "text": "Bilateral hand stiffness lasting about 30 minutes each morning"
          },
          {
            "id": "B",
            "text": "Facial erythema across the cheeks that darkens after time outdoors"
          },
          {
            "id": "C",
            "text": "Painless oral ulcers on the hard palate that began two days ago"
          },
          {
            "id": "D",
            "text": "Periorbital swelling, foamy urine, and a blood pressure of 158/94 mmHg"
          }
        ],
        "correct": [
          "D"
        ],
        "rationale": "Periorbital edema, foamy urine (suggesting proteinuria), and new hypertension together suggest lupus nephritis, an organ-threatening complication requiring prompt evaluation. Serum creatinine and urinalysis help detect kidney involvement early so treatment can limit permanent damage. Morning stiffness, a photosensitive facial rash and painless oral ulcers are recognized SLE manifestations, but the possible kidney involvement is the priority among these choices.",
        "sourcePages": [
          10,
          11
        ],
        "answerSource": "presentation",
        "rationaleSource": "presentation",
        "references": [
          {
            "title": "NIDDK · Lupus nephritis",
            "url": "https://www.niddk.nih.gov/health-information/kidney-disease/lupus-nephritis"
          }
        ],
        "id": 1,
        "sourceQuestionNumber": 1
      },
      {
        "prompt": "A client with SLE is starting prednisone. Which statements show the teaching was NOT understood? Select all that apply.",
        "multiple": true,
        "options": [
          {
            "id": "A",
            "text": "“I’ll wear sunscreen even on cloudy days.”"
          },
          {
            "id": "B",
            "text": "“I’ll stop prednisone once my rash clears.”"
          },
          {
            "id": "C",
            "text": "“I’ll take calcium and vitamin D daily.”"
          },
          {
            "id": "D",
            "text": "“A fever is probably just my lupus, so I’ll rest.”"
          },
          {
            "id": "E",
            "text": "“I’ll get a yearly eye exam for my hydroxychloroquine.”"
          }
        ],
        "correct": [
          "B",
          "D"
        ],
        "rationale": "Do not stop or change prednisone independently when symptoms improve; prolonged treatment may require a supervised taper to prevent adrenal insufficiency and flare. Fever while taking immune-suppressing treatment needs prompt clinical advice and assessment for infection rather than being assumed to be lupus. Sun protection and an individualized calcium/vitamin-D/bone-health plan are appropriate. Hydroxychloroquine requires retinal screening: annual screening is recommended while taking it, although low-risk patients may defer annual testing during the first five years after a baseline examination. Follow the ophthalmologist’s schedule; a plan for yearly screening does not itself show misunderstanding.",
        "sourcePages": [
          12,
          13
        ],
        "answerSource": "presentation",
        "rationaleSource": "clinical-review",
        "references": [
          {
            "title": "DailyMed · Prednisone safety",
            "url": "https://dailymed.nlm.nih.gov/dailymed/getFile.cfm?setid=01bdc479-1f1f-af94-837c-12e7e861321a&type=pdf"
          },
          {
            "title": "AAO · Hydroxychloroquine retinal screening (2025 revision / 2026)",
            "url": "https://www.aao.org/education/clinical-statement/revised-recommendations-on-screening-chloroquine-h"
          }
        ],
        "id": 2,
        "sourceQuestionNumber": 2
      }
    ],
    "excluded": [],
    "adaptations": []
  },
  "meniere-disease": {
    "id": "meniere-disease",
    "questions": [
      {
        "prompt": "A nurse is caring for a 58-year-old client diagnosed with Ménière’s disease who is experiencing an acute episode of vertigo. The client reports nausea and tinnitus and has vomited several times. Assessment findings include a blood pressure of 94/58 mmHg, heart rate of 112 beats/min, and dry mucous membranes. Which nursing intervention should the nurse prioritize?",
        "multiple": false,
        "options": [
          {
            "id": "A",
            "text": "Administer prescribed meclizine to reduce vertigo and nausea."
          },
          {
            "id": "B",
            "text": "Assist the client into a safe resting position, implement fall precautions, and assess hydration status."
          },
          {
            "id": "C",
            "text": "Educate the client about maintaining a sodium intake below 2,000 mg/day."
          },
          {
            "id": "D",
            "text": "Perform a Romberg test to evaluate the severity of the client’s balance impairment."
          }
        ],
        "correct": [
          "B"
        ],
        "rationale": "Immediate priorities are preventing injury and recognizing possible dehydration from repeated vomiting. Hypotension, tachycardia and dry mucous membranes suggest volume depletion.",
        "sourcePages": [
          13,
          14
        ],
        "answerSource": "presentation",
        "rationaleSource": "presentation",
        "references": [
          {
            "title": "NIDCD · Ménière’s disease",
            "url": "https://www.nidcd.nih.gov/health/menieres-disease"
          }
        ],
        "id": 1,
        "sourceQuestionNumber": 1
      },
      {
        "prompt": "The nurse is educating a client with Ménière’s disease who is recommended to follow the Hydrops diet described in this presentation. Which guidelines are included in this diet? Select all that apply.",
        "multiple": true,
        "options": [
          {
            "id": "A",
            "text": "Even food intake throughout the day"
          },
          {
            "id": "B",
            "text": "Avoid high salt content"
          },
          {
            "id": "C",
            "text": "Limit alcohol"
          },
          {
            "id": "D",
            "text": "Double fiber intake"
          },
          {
            "id": "E",
            "text": "Avoiding foods with MSG"
          }
        ],
        "correct": [
          "A",
          "B",
          "C",
          "E"
        ],
        "rationale": "The presentation’s Hydrops diet includes regular/spread-out food intake, avoiding high-salt foods, limiting alcohol, and avoiding MSG-containing foods; it does not prescribe doubling fiber. MSG contributes sodium. These are commonly discussed dietary measures, not a proven universal prescription or proof that MSG independently triggers every patient’s attacks. Diet and sodium/fluid goals should be individualized with the treating team because evidence for particular dietary restrictions is limited.",
        "sourcePages": [
          15,
          16
        ],
        "answerSource": "presentation",
        "rationaleSource": "clinical-review",
        "references": [
          {
            "title": "AAO-HNS · Ménière’s disease guideline",
            "url": "https://aao-hnsfjournals.onlinelibrary.wiley.com/doi/10.1177/0194599820909438"
          },
          {
            "title": "NIDCD · Ménière’s disease",
            "url": "https://www.nidcd.nih.gov/health/menieres-disease"
          }
        ],
        "id": 2,
        "sourceQuestionNumber": 2
      }
    ],
    "excluded": [],
    "adaptations": []
  }
};
