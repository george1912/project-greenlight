/* Authored study prompts based on the supplied syllabus, Exam 3 blueprint, and teaching PDFs.
   These are not verbatim faculty objectives. Notes are shared by weekly and topic views; populated when the user supplies material.
   Add studyContent-compatible blocks to an objective's answer array when notes are supplied. */
const obStudyObjectives = [
  {
    "id": "family-centered-care",
    "weekIds": [
      "week-1"
    ],
    "topicIds": [],
    "title": "Family-centered obstetric nursing",
    "text": "Explain the nurse’s role in safe, culturally responsive, family-centered care across pregnancy, birth, and recovery. Include communication, consent, advocacy, and available support systems.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "The nurse combines maternal/newborn assessment, early escalation, education, coordination, and respect for the patient’s choices.",
          "Include the family the patient chooses; use clear communication, informed consent, privacy, and culturally responsive care.",
          "Prevent failure to rescue by recognizing deterioration, communicating it, acting promptly, and reassessing; connect the family to usable follow-up and support."
        ]
      },
      {
        "type": "group",
        "title": "The nurse’s role: safe care with the patient and family",
        "blocks": [
          "Family-centered obstetric nursing treats pregnancy, birth, and recovery as both a health-care experience and a major family transition. The nurse assesses and protects the pregnant or postpartum patient and the fetus/newborn, teaches practical skills, coordinates care, and supports informed decisions. The patient defines who their family and support people are and how they should participate; family involvement never replaces the patient’s own voice, privacy, or consent."
        ]
      },
      {
        "type": "group",
        "title": "Safety, risk management, and failure to rescue",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Risk management means identifying hazards, preventing avoidable harm, and learning from errors and near misses. Use patient identification, medication/allergy checks, infection prevention, accurate handoffs, appropriate maternal and newborn monitoring, and timely documentation. Follow unit protocols and work within your training and scope.",
              "Sentinel event: a serious patient-safety event meeting Joint Commission criteria, such as a care-related event resulting in death, severe harm, or permanent harm rather than the expected course of illness. Some specified events qualify regardless of the outcome. “Bad outcome” is a lecture shorthand, not the definition; use the organization’s current event criteria and reporting process.",
              "Failure to rescue means failing to prevent serious deterioration from a complication through timely recognition and response. A complication can arise despite good care; failing to recognize it, relay the concern, or react appropriately can turn a treatable problem into major harm. This applies to maternal and newborn care.",
              "Nursing response: recognize a change, assess promptly, summon appropriate help, communicate clearly, initiate actions permitted by emergency protocols, and reassess. Use SBAR (Situation, Background, Assessment, Recommendation) and closed-loop communication (the receiver repeats key information and the sender confirms it). If the response is delayed or the patient worsens, use the chain of command or rapid-response/emergency system; one unanswered call is not the end of escalation.",
              "Example: a postpartum patient becomes pale and dizzy with increasing bleeding. Assess and activate the hemorrhage response rather than assuming normal lochia. A newborn with apnea, cyanosis, or worsening respiratory effort likewise needs immediate assessment and the neonatal emergency response. Document observations, actions, notifications, and responses objectively."
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "What the nurse does across pregnancy, birth, and recovery",
        "blocks": [
          {
            "type": "list",
            "items": [
              "During pregnancy: assess history, baseline health, pregnancy risks, emotional well-being, learning needs, and access to care. Reinforce the prenatal plan, prepare the family for birth and infant care, teach when to seek help, and coordinate referrals and follow-up.",
              "During labor and birth: reassess the patient and fetus as indicated, provide comfort and emotional support, explain what is happening, help the chosen support person participate, and collaborate with the obstetric/midwifery, anesthesia, and neonatal teams. Report changes promptly and prepare for a different plan when clinical needs change.",
              "During recovery: assess maternal recovery and newborn adaptation, support bonding when clinically appropriate, help with feeding and newborn-care skills, and assess the family’s ability to manage at home. Arrange maternal and newborn follow-up and confirm who to contact after discharge.",
              "Warning-sign teaching: seek immediate care for concerning symptoms such as heavy bleeding, chest pain, difficulty breathing, severe or persistent headache, vision changes, or fever. Pregnancy-related complications can occur during pregnancy and up to a year after birth. Give a clear action plan rather than simply saying “call if needed.”"
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Communication and culturally responsive care",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Introduce yourself and your role, listen without interrupting, validate concerns, and use plain language. Ask “What matters most to you?” and “Who would you like involved?” Explain changes in the care plan and make time for questions.",
              "Use a qualified interpreter when needed instead of relying on a partner or child for clinical interpretation. Provide accessible written or visual information. Use teach-back: “To check how clearly I explained this, tell me what you would do if the bleeding became heavy.” Re-teach without blaming the patient.",
              "Ask about the individual’s beliefs, language, modesty, food preferences, spiritual practices, and birth/feeding preferences; do not infer them from appearance, ethnicity, or religion. Accommodate safe practices and discuss safety concerns respectfully when a preference conflicts with the proposed plan.",
              "Use trauma-informed care: explain before touching or examining, ask permission, protect privacy, and offer choices and pauses whenever possible. Speak directly to the patient, even when family members are present."
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Consent, advocacy, and privacy",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Informed consent is an ongoing discussion of the proposed care, expected benefits, material risks, alternatives, and the option to decline. A signature alone does not show understanding or voluntary agreement.",
              "The clinician responsible for the procedure explains it; the nurse supports communication, checks for unanswered questions or coercion, reinforces information within scope, and follows policy for consent verification or witnessing. If the patient does not understand or changes their mind, pause a nonurgent procedure and contact the responsible clinician rather than treating the signed form as permission to proceed.",
              "Respect an adult patient’s informed choice, including refusal, when they have decision-making capacity. Discuss concerns without threats or pressure. Family members do not override that patient’s decision. Follow applicable policy and law when capacity, emergency care, or surrogate decision making is involved.",
              "Advocate when pain, symptoms, or concerns are dismissed. Communicate the patient’s preferences and request review when the plan is unclear or unsafe. Obtain permission before sharing information with support people, and provide private time for sensitive assessment such as intimate-partner violence or other safety concerns."
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Teaching, support systems, and community resources",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Nurses may provide childbirth education through hospital, private, or community-funded classes. Tailor teaching to readiness, language, literacy, and resources; include coping skills, support-person participation, feeding, newborn care, and warning signs.",
              "Provide breastfeeding/chestfeeding education and practical support within competence, and refer to a lactation specialist when needed. Respect the patient’s feeding decisions and include safe formula preparation and feeding teaching when relevant.",
              "Assess barriers such as transportation, cost, food insecurity, housing, work, child care, and limited support. Collaborate with social work/case management and connect the family with public-health clinics, community programs, peer groups, and chosen faith/community supports.",
              "Examples: WIC offers eligible families nutrition services, breastfeeding support, and health-care referrals. Voluntary HRSA-funded home-visiting programs can provide education, parenting support, and resource connections; local eligibility and availability vary. Also consider perinatal mental-health services, safety resources, and bereavement support when indicated.",
              "Make referrals usable: confirm contact details, accessibility, eligibility, and transportation needs, and check that the patient understands the next step. Giving a phone number alone does not confirm that support was obtained."
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Care settings and team roles",
        "blocks": [
          "The lecture traces a shift from home/midwife care toward hospital/physician-led birth and renewed emphasis on family participation, midwifery, and doulas. Today, match choices to clinical risk, informed preferences, available resources, and a safe transfer/escalation plan.",
          {
            "type": "list",
            "items": [
              "Hospital care: patients may receive care through a private obstetric practice, a hospital-based team, or a midwifery service. The nurse provides ongoing assessment, support, education, and coordination; availability of obstetric, anesthesia, operative, and neonatal services depends on the facility.",
              "Birth center: often provides midwife-led care for appropriately selected patients with uncomplicated pregnancies. The team must reassess eligibility and have consultation and transfer arrangements for complications. A home-like setting still requires clinical assessment and an emergency plan.",
              "Midwifery is a model of care, not a building. Midwives can work in hospitals, birth centers, offices, and, where permitted and appropriate, homes. A bedside RN is not automatically a midwife; a certified nurse-midwife has additional advanced-practice education and credentials. A doula provides nonmedical support and does not replace the nurse, midwife, or obstetric clinician."
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Population health: what the lecture’s statistics mean",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Birth and fertility rates",
                "text": "Birthrate counts live births per 1,000 population. The lecture’s general fertility rate uses live births per 1,000 women aged 15–44. Always check the population and time period before comparing rates."
              },
              {
                "label": "Maternal mortality",
                "text": "NCHS maternal mortality counts pregnancy-related or pregnancy-aggravated deaths during pregnancy or within 42 days after it ends, excluding accidental/incidental causes, per 100,000 live births. CDC pregnancy-related mortality surveillance also considers causally related deaths through one year; these measures are not interchangeable."
              },
              {
                "label": "Infant, neonatal, and perinatal outcomes",
                "text": "Infant mortality concerns deaths before age one; neonatal mortality concerns deaths in the first 28 days, usually reported per 1,000 live births. Perinatal measures combine specified fetal and early neonatal deaths; the gestational and age cutoffs must be stated."
              },
              {
                "label": "What the nurse can change",
                "text": "The lecture’s international comparisons and racial disparities are a prompt to examine access, racism/bias, delayed escalation, transportation, language access, and continuity of care. Assess the individual and remove barriers; a population disparity does not determine one patient’s outcome. The slide graphs use historical data, not current-year rates."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Ethical issues and professional responsibility",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Care choices may involve fertility treatment, genetic testing, substance use, pregnancy loss, extreme prematurity, or cord-blood/stem-cell decisions. Clarify the patient’s values, explain the team’s roles, and involve genetic counseling, social work, or ethics consultation when needed.",
              "Provide respectful care regardless of family structure, disability, diagnosis, income, or substance-use history. Assess substance use without stigma and connect the patient to treatment. Do not turn historical lecture examples of discriminatory care into current recommendations.",
              "Testing, confidentiality, consent, and mandatory-reporting rules depend on current law and policy. Explain confidentiality limits and obtain the appropriate consent. Pregnancy alone does not erase an adult patient’s decision-making rights."
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Evaluate the care and remember the priorities",
        "blocks": [
          "Effective care means the patient feels heard, understands their choices, can teach back key warning signs and self-care skills, and has a realistic follow-up and support plan. The nurse reassesses both clinical status and understanding, documents the response, and adapts the plan when needs change.",
          "Exam recall: ASSESS the patient and family → LISTEN and respect preferences → EXPLAIN and support consent → ACT and escalate for safety → TEACH and connect resources → REASSESS. Family-centered care includes the chosen family while keeping the patient’s autonomy and maternal/newborn safety central."
        ]
      }
    ],
    "answerReviewedOn": "2026-11-20",
    "answerSourceNote": "Based on your handwritten notes and Historical Context & Maternal–Fetal Health, pages 2–16. Original nursing explanations are retained and organized into short topics. Historical statistics and legal/ethical examples are contextualized; definitions and safety guidance were checked against the references below.",
    "answerSources": [
      {
        "title": "WHO — Respectful maternal and newborn care",
        "url": "https://www.who.int/teams/maternal-newborn-child-adolescent-health-and-ageing/quality-of-care/respectful-care"
      },
      {
        "title": "ACOG — Informed consent and shared decision making",
        "url": "https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2021/02/informed-consent-and-shared-decision-making-in-obstetrics-and-gynecology"
      },
      {
        "title": "Joint Commission — Sentinel event policy and procedures",
        "url": "https://www.jointcommission.org/en-us/knowledge-library/support-center/standards-interpretation/sentinel-event-policy-and-procedures"
      },
      {
        "title": "AHRQ PSNet — Failure to Rescue",
        "url": "https://psnet.ahrq.gov/primer/failure-rescue"
      },
      {
        "title": "CDC Hear Her — Urgent maternal warning signs",
        "url": "https://www.cdc.gov/hearher/maternal-warning-signs/index.html"
      },
      {
        "title": "Public Health Agency of Canada — Family-centred care during pregnancy",
        "url": "https://www.canada.ca/en/public-health/services/publications/healthy-living/maternity-newborn-care-guidelines-chapter-3.html"
      },
      {
        "title": "HRSA — Maternal, Infant, and Early Childhood Home Visiting",
        "url": "https://www.hrsa.gov/services/maternal-infant-early-childhood-home-visiting-program"
      },
      {
        "title": "USDA — WIC frequently asked questions",
        "url": "https://www.fna.usda.gov/wic/faqs"
      },
      {
        "title": "American College of Nurse-Midwives — Midwifery FAQs",
        "url": "https://midwife.org/faqs/"
      },
      {
        "title": "CDC NCHS — Maternal mortality definitions",
        "url": "https://www.cdc.gov/nchs/maternal-mortality/faq.htm"
      },
      {
        "title": "CDC — Pregnancy Mortality Surveillance System methods",
        "url": "https://www.cdc.gov/maternal-mortality/php/pregnancy-mortality-surveillance-data/about.html"
      }
    ]
  },
  {
    "id": "pregnancy-adaptations",
    "weekIds": [
      "week-1"
    ],
    "topicIds": [
      "antepartum-prenatal"
    ],
    "title": "Maternal adaptations to pregnancy",
    "text": "Describe the major physiologic changes of pregnancy by body system. Connect those changes to common discomforts, expected assessment findings, and findings that need further evaluation.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Pregnancy hormones and uterine growth change every body system to support placental circulation, fetal growth, birth, and lactation.",
          "For each system, connect the mechanism to the expected finding, a practical nursing measure, and the finding that needs assessment.",
          "Gradual discomforts may be expected; bleeding, severe pain, chest symptoms, fever, or concerning neurologic symptoms must not be dismissed as “just pregnancy.”"
        ]
      },
      {
        "type": "group",
        "title": "Dating, trimesters, term, and viability",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Gestational age versus conception age",
                "text": "Clinical weeks usually begin with the first day of the last menstrual period (LMP); conception is approximately two weeks later in a typical cycle. About 40 gestational weeks/280 days equals about 38 weeks after fertilization. Early ultrasound helps establish the best obstetric date when cycles or LMP are uncertain."
              },
              {
                "label": "Trimesters",
                "text": "A common clinical convention is first trimester through 13 weeks 6 days, second 14–27 weeks 6 days, and third from 28 weeks. The lecture divides the last two at 27 weeks; state the convention being used rather than mixing boundaries."
              },
              {
                "label": "Birth timing",
                "text": "Preterm birth is before 37 weeks. Early term: 37 weeks 0 days–38 weeks 6 days; full term: 39 weeks 0 days–40 weeks 6 days; late term: 41 weeks 0 days–41 weeks 6 days; postterm: 42 weeks or later. Passing the estimated due date is not automatically postterm."
              },
              {
                "label": "Viability",
                "text": "Potential survival outside the uterus depends on gestational age, fetal condition, available neonatal care, and individualized counseling. A weight or week cutoff does not guarantee survival or intact development. Do not apply the slide’s survival percentages as a prediction for every hospital or infant."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Reproductive changes: uterus, cervix, vagina, and breasts",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Uterus and landmarks",
                "text": "Myometrial growth and stretching accommodate the fetus. The fundus is near the symphysis pubis around 12 weeks and the umbilicus around 20 weeks, rising toward the xiphoid late in pregnancy. Fundal height is an approximate growth screen; unexpected size or growth trends need follow-up rather than an assumption about fetal size."
              },
              {
                "label": "Cervical signs",
                "text": "Goodell = soft cervix; Chadwick = bluish/purple cervix or vaginal tissue from vascularity; Hegar = soft lower uterine segment. Cervical mucus forms a protective plug. These are probable signs of pregnancy, not proof by themselves."
              },
              {
                "label": "Expected findings and teaching",
                "text": "Increased nonirritating white discharge and breast enlargement/tenderness may occur. Breasts develop more visible veins, larger/darker areolae, and may produce colostrum; do not squeeze repeatedly to test for it. Use comfortable support and gentle hygiene; avoid douching."
              },
              {
                "label": "Assess rather than reassure",
                "text": "Bleeding, foul/itchy or painful discharge, fluid leakage, or regular painful contractions require assessment. Braxton Hicks contractions are typically irregular and do not produce progressive cervical change; symptoms of labor before 37 weeks need prompt evaluation."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Cardiovascular and blood changes",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Mechanism and expected findings",
                "text": "Blood volume and cardiac output increase; resting pulse commonly rises about 10–20 beats/min. Plasma expands more than red-cell mass, lowering measured hemoglobin/hematocrit by dilution. Vascular resistance falls, so blood pressure often dips midpregnancy and approaches baseline later."
              },
              {
                "label": "Physiologic anemia is not every anemia",
                "text": "Hemodilution explains part of the change, but iron deficiency or blood loss can coexist. Assess symptoms, diet, prenatal supplements, and ordered laboratory results; do not dismiss marked fatigue or abnormal values without follow-up."
              },
              {
                "label": "Position and venous return",
                "text": "A gravid uterus can compress the vena cava while supine, reducing venous return and causing dizziness/hypotension. Turn laterally and reassess. Leg edema and varicosities may relate to venous pressure; movement, position changes, leg elevation, and prescribed support can help."
              },
              {
                "label": "Safety",
                "text": "Pregnancy is hypercoagulable. Unilateral leg pain/swelling, chest pain, sudden shortness of breath, syncope, or severe/persistent headache or visual change need urgent assessment. New hypertension is not explained away by a normal midpregnancy BP dip."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Respiratory changes",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Why breathing feels different",
                "text": "The enlarging uterus elevates the diaphragm. Progesterone increases ventilation mainly through deeper breaths; oxygen demand also rises. Increased ventilation produces a mild compensated respiratory alkalosis; interpret blood gases in pregnancy context. Mild gradual awareness of breathing and nasal congestion or small nosebleeds can occur."
              },
              {
                "label": "Nursing care",
                "text": "Assess respiratory rate, effort, oxygenation when indicated, and the timing of symptoms. Upright positioning, rest between activities, and avoiding smoke can help. Respiratory rate is usually not markedly elevated solely from normal pregnancy."
              },
              {
                "label": "Report now",
                "text": "Sudden or severe breathlessness, symptoms at rest, chest pain, blue discoloration, or low oxygenation need urgent evaluation. Do not label acute respiratory distress a normal effect of the diaphragm moving upward."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Gastrointestinal, oral, and urinary changes",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "GI mechanism and findings",
                "text": "Hormonal smooth-muscle relaxation promotes reflux and slower bowel transit; the uterus adds pressure. Nausea/vomiting, excess saliva, constipation, hemorrhoids, and tender/bleeding gums can occur. Gallbladder emptying also slows."
              },
              {
                "label": "Comfort and education",
                "text": "Try small frequent meals; avoid personal reflux triggers and lying flat immediately after meals. Encourage fluids, fiber, activity as appropriate, and oral/dental care. Persistent vomiting, inability to keep fluids down, dehydration, severe abdominal pain, or bleeding need assessment."
              },
              {
                "label": "Renal adaptation",
                "text": "Renal blood flow and glomerular filtration increase; the ureters and renal pelvis dilate. Urinary stasis increases infection risk, while bladder pressure contributes to frequency. Some baseline renal laboratory values differ from nonpregnant values."
              },
              {
                "label": "Frequency versus infection",
                "text": "Encourage regular voiding and appropriate hydration. Burning, fever, flank pain, blood in urine, or markedly reduced urine output need evaluation; frequency alone does not diagnose a UTI, and lack of symptoms does not exclude asymptomatic bacteriuria."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Musculoskeletal and skin changes",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Joints and posture",
                "text": "Relaxin and other hormones loosen supporting ligaments; the center of gravity shifts and lumbar lordosis increases. Back discomfort, pelvic discomfort, and a changed gait can result. Teach body mechanics, supportive shoes, position changes, and activity matched to clinical advice."
              },
              {
                "label": "Skin and veins",
                "text": "Melasma is facial hyperpigmentation; linea nigra is the dark abdominal midline; striae are stretch marks. Increased vascularity and venous pressure contribute to spider vessels and varicosities. Many pigment changes fade after birth; stretch marks often lighten rather than disappear."
              },
              {
                "label": "When to assess",
                "text": "Severe pain, weakness, trauma, or inability to function needs evaluation. New intense itching, especially on palms/soles or without a rash, should be reported because it can indicate a pregnancy-related liver condition."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Hormones: connect the name with the job",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "hCG",
                "text": "Maintains the corpus luteum early in pregnancy so progesterone support continues; it is the hormone detected in pregnancy tests. A positive test alone does not establish the pregnancy’s location or viability."
              },
              {
                "label": "Progesterone and estrogen",
                "text": "Progesterone supports the endometrium and uterine relaxation and contributes to GI/urinary smooth-muscle effects. Estrogen supports uterine growth, vascular changes, and breast development. Ovarian cycling/ovulation are suppressed during pregnancy."
              },
              {
                "label": "hPL and metabolic change",
                "text": "Human placental lactogen and other placental hormones contribute to increasing insulin resistance, especially later in pregnancy, making more nutrients available to the fetus. This explains why pregnancy may uncover glucose intolerance; it does not mean every patient develops gestational diabetes."
              },
              {
                "label": "Relaxin, prolactin, and oxytocin",
                "text": "Relaxin contributes to ligament relaxation. Prolactin supports milk production; oxytocin produces uterine contractions and milk ejection. Estrogen/progesterone fall after placental delivery, helping permit copious milk production."
              },
              {
                "label": "Thyroid and other glands",
                "text": "Thyroid-binding proteins and total thyroid hormone rise; hCG can lower TSH, especially early. Interpret thyroid tests with pregnancy-appropriate ranges rather than diagnosing disease from one nonpregnant reference range. Cortisol and aldosterone also increase."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Shared-deck essentials: pregnancy signs and GTPAL",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Signs of pregnancy",
                "text": "Presumptive signs are patient-reported, such as amenorrhea, nausea, fatigue, or quickening. Probable signs include the cervical changes and positive hCG. Positive signs directly demonstrate the fetus, such as ultrasound visualization or fetal cardiac activity distinct from the maternal pulse."
              },
              {
                "label": "Test limits",
                "text": "Urine and serum tests detect hCG after implantation; testing too early can be negative. A quantitative serum result gives an amount, but location and viability require interpretation with the clinical picture, trends, and ultrasound—not a single number."
              },
              {
                "label": "GTPAL",
                "text": "G = all pregnancies including the current one; T = births at or after 37 weeks; P = births from 20 weeks to before 37 weeks; A = pregnancy losses before 20 weeks; L = living children. T/P count pregnancies delivered, not infants; twins count once in T/P but twice in L if both live."
              },
              {
                "label": "Lecture example",
                "text": "Currently pregnant, with two prior term births, one prior 35-week twin birth, and three early losses: G7 T2 P1 A3 L4. The current pregnancy increases G but is not yet a T/P/A outcome. Use the course/facility’s documented cutoffs when a history is near a reporting boundary."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Shared-deck essentials: nutrition and weight gain",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Daily intake targets",
                "text": "For most pregnant adults, total dietary targets include iron 27 mg and folate 600 micrograms dietary folate equivalents (DFE); adult calcium needs are 1,000 mg (1,300 mg for pregnant adolescents). These are intake goals, not an individualized treatment prescription. Check the prenatal product and avoid stacking supplements or megadoses."
              },
              {
                "label": "Energy needs",
                "text": "For a typical singleton pregnancy, extra calories are generally not needed in the first trimester; about 340/day in the second and 450/day in the third are common estimates. Adjust for prepregnancy weight, activity, growth, and clinical needs rather than using a fixed increase for everyone."
              },
              {
                "label": "Why these nutrients matter",
                "text": "Folate supports early neural-tube development; iron supports red-cell oxygen transport; calcium supports mineralized tissues; protein supports maternal and fetal tissue growth. Evaluate the whole diet and supplement plan rather than simply counting pills."
              },
              {
                "label": "Correct the units",
                "text": "The slides contain iron “gm” and folate “mg” typos. Iron is measured here in mg; folate in micrograms. Adequate diet does not eliminate the need to discuss recommended prenatal supplementation with the obstetric clinician."
              },
              {
                "label": "What contributes to weight",
                "text": "Pregnancy weight includes the fetus, placenta, amniotic fluid, growing uterus/breasts, expanded blood and fluid volume, and maternal energy stores. A sudden weight jump is not simply rapid fetal growth; assess edema, blood pressure, and associated symptoms."
              },
              {
                "label": "Weight-gain framework",
                "text": "Singleton pregnancy targets by prepregnancy BMI: underweight <18.5, 28–40 lb; BMI 18.5–24.9, 25–35 lb; BMI 25–29.9, 15–25 lb; BMI ≥30, 11–20 lb. Assess trends, fetal growth, and individual circumstances. Twin/multiple pregnancy targets need a separate plan; do not copy an underweight-twin target from the lecture as a universal recommendation."
              },
              {
                "label": "Safer food handling",
                "text": "Cook animal foods thoroughly, avoid unpasteurized products, and wash produce. Heat deli meats/hot dogs to 165°F or until steaming hot; use current guidance for soft cheeses, including heating higher-risk soft cheeses and avoiding unheated queso fresco-type products. Choose cooked lower-mercury seafood rather than avoiding all fish."
              },
              {
                "label": "Food and access",
                "text": "Choose balanced protein, whole grains, fruit/vegetables, and calcium sources; adapt for culture, vegetarian/vegan diets, lactose intolerance, and food insecurity. Ask about pica and assess nutritional/anemia concerns. Refer for dietary planning when restrictions or access barriers make intake inadequate."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Apply it: expected finding or concern?",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Gradual constipation plus reflux: connect progesterone and pressure to symptoms, assess intake and bowel pattern, then teach appropriate comfort measures.",
              "Dizziness when lying flat later in pregnancy: turn laterally, assess vital signs and response, and escalate if symptoms persist or another cause is suspected.",
              "Chest pain with sudden breathlessness: assess and activate urgent evaluation; do not reassure the patient that normal pregnancy increases oxygen demand."
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-20",
    "answerSourceNote": "Based on Maternal Adaptation & Nutrition, pages 2–37, including its shared Week 2 terminology, pregnancy-sign, and nutrition material. Notes link mechanisms, expected findings, nursing measures, and warning signs. Dating/term language, physiology, nutrition units, and selected safety statements are clarified against current references.",
    "answerSources": [
      {
        "title": "Merck Manual Professional — Physiology of pregnancy",
        "url": "https://www.merckmanuals.com/professional/gynecology-and-obstetrics/approach-to-the-pregnant-woman-and-prenatal-care/physiology-of-pregnancy"
      },
      {
        "title": "OpenStax — Physiologic changes due to pregnancy",
        "url": "https://openstax.org/books/maternal-newborn-nursing/pages/10-1-physiologic-changes-due-to-pregnancy"
      },
      {
        "title": "ACOG — Definition of term pregnancy",
        "url": "https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2013/11/definition-of-term-pregnancy"
      },
      {
        "title": "CDC — Urgent maternal warning signs",
        "url": "https://www.cdc.gov/hearher/maternal-warning-signs/index.html"
      },
      {
        "title": "NIH Office of Dietary Supplements — Pregnancy nutrient requirements",
        "url": "https://ods.od.nih.gov/factsheets/pregnancy-healthprofessional/"
      },
      {
        "title": "CDC — Weight gain during pregnancy",
        "url": "https://www.cdc.gov/maternal-infant-health/pregnancy-weight/"
      },
      {
        "title": "ACOG — Healthy eating during pregnancy",
        "url": "https://www.acog.org/womens-health/faqs/healthy-eating-during-pregnancy"
      },
      {
        "title": "CDC — Safer food choices during pregnancy",
        "url": "https://www.cdc.gov/food-safety/foods/pregnant-women.html"
      },
      {
        "title": "RCOG — Intrahepatic cholestasis of pregnancy",
        "url": "https://www.rcog.org.uk/for-the-public/browse-our-patient-information/intrahepatic-cholestasis-of-pregnancy"
      },
      {
        "title": "ACOG — Periviable birth and individualized counseling",
        "url": "https://www.acog.org/clinical/clinical-guidance/obstetric-care-consensus/articles/2017/10/periviable-birth"
      }
    ]
  },
  {
    "id": "pregnancy-psychosocial-care",
    "weekIds": [
      "week-1"
    ],
    "topicIds": [],
    "title": "Psychological adaptation and support",
    "text": "Describe psychological adaptation during pregnancy and assess family support, coping, cultural preferences, and safety. Explain how those findings influence individualized nursing care.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Pregnancy changes identity, relationships, body image, and daily life; mixed feelings and changing support needs are common.",
          "Assess coping, mood, safety, cultural preferences, and practical resources privately and without assuming every family follows the same pattern.",
          "Use the assessment to tailor teaching, strengthen the chosen support system, make referrals, and check that support actually reaches the patient."
        ]
      },
      {
        "type": "group",
        "title": "Emotional adaptation over time",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Early pregnancy",
                "text": "Ambivalence means mixed feelings—not automatic rejection of the pregnancy. Concerns may involve timing, finances, relationships, prior loss, or health. Fatigue and inward focus can reduce social activity. Listen before deciding that a response is abnormal."
              },
              {
                "label": "Middle pregnancy",
                "text": "As physical changes and fetal movement become tangible, the fetus may feel more real and attachment or acceptance may grow. Some patients feel better physically; others remain anxious or ambivalent. These are common patterns, not required milestones."
              },
              {
                "label": "Later pregnancy",
                "text": "Preparing for birth and parenting may increase anticipation, practical planning, and fears about pain, safety, or role change. Ask what feels manageable and what remains uncertain; offer realistic preparation and support."
              },
              {
                "label": "Quickening is not lightening",
                "text": "Quickening = the pregnant person first perceives fetal movement, often around 16–20 weeks. Lightening = descent of the presenting part into the pelvis later in pregnancy. The lecture uses “lightening” for fetal movement; that wording is corrected here."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Assess coping, mood, and body image",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Ask how the patient feels about the pregnancy, what changed from previous expectations, and what currently causes the most stress. Consider prior pregnancy loss, trauma, infertility, health conditions, work/school demands, and the patient’s own goals.",
              "Explore sleep, appetite, mood, enjoyment, concentration, daily function, and current coping strategies. Use the unit’s validated perinatal depression/anxiety screening process; a positive screen needs assessment and a follow-up plan, not a label or a handout alone.",
              "Ask about body-image and sexual-health concerns without judgment. A changing body may produce pride, discomfort, grief, or mixed feelings. Offer privacy, realistic explanations, comfort measures, and referral when distress interferes with eating, relationships, or functioning.",
              "Do not assume age, pregnancy intention, marital status, disability, or family structure predicts parenting ability. Assess the individual’s needs and resources."
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Expected emotional variation versus a safety concern",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Common variation",
                "text": "Brief worry, ambivalence, changing sexual desire, and mood fluctuations can occur while the patient remains able to function and use support. Validate the experience and reassess over time."
              },
              {
                "label": "Needs follow-up",
                "text": "Persistent sadness, loss of interest, severe or intrusive anxiety, panic, inability to function, escalating substance use, or a history of serious mental illness warrants prompt clinical review and a treatment/support plan."
              },
              {
                "label": "Urgent safety assessment",
                "text": "Thoughts of self-harm or harm to others, hallucinations, delusions, severe confusion, or immediate violence risk require urgent assessment and the local emergency/safety response. Do not dismiss them as normal pregnancy hormones or leave a patient at immediate risk without appropriate support."
              },
              {
                "label": "Evaluate the response",
                "text": "Confirm who will assess the concern, how the patient will get there or connect, and when follow-up occurs. Reassess symptoms and safety rather than treating a referral as completion of care."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Partners, siblings, and the wider family",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Ask whom the patient wants involved. Teach the chosen support person practical ways to help: transport, rest, meals, appointment support, warning-sign recognition, and preparation for birth and infant care. Do not presume a partner is present, supportive, or safe.",
              "Partners may also experience mixed feelings, role concerns, or sympathetic symptoms (couvade, such as nausea or appetite/weight changes). Offer education and support, while still evaluating concerning physical symptoms appropriately.",
              "Prepare siblings in age-appropriate ways: explain changes, allow questions and feelings, involve them in simple preparations, and plan individual attention. Jealousy can occur; supervise contact and never leave an infant alone with a young child.",
              "Identify helpful extended-family or community supports while respecting boundaries and confidentiality. A patient can decline someone’s involvement even if that person wants to help."
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Culture, sexuality, and communication",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Ask about preferred language, spiritual practices, modesty, food practices, roles, and birth/feeding preferences. Use a qualified interpreter and teach-back; individual preferences guide the plan rather than cultural stereotypes.",
              "Explain that sexual desire may rise or fall. Sexual activity is generally safe in an uncomplicated pregnancy when the clinician has not advised restrictions. Bleeding, fluid leakage, placenta-related concerns, preterm-labor symptoms, or other complications require individualized advice; intact membranes alone do not establish safety.",
              "Offer private discussion of consent, comfort, and STI prevention. Never imply the patient owes a partner sexual activity or family participation."
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Assess intimate-partner violence and practical barriers",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Private safety screening",
                "text": "Screen without the partner or family member present, using a qualified interpreter when needed. Ask about feeling safe, threats, coercion, or control of money, transport, medications, or appointments. Explain confidentiality limits and reporting requirements."
              },
              {
                "label": "RADAR from the lecture",
                "text": "Routinely screen; affirm feelings and assess abuse; document objective findings; assess immediate safety; review options and referrals. Ask permission and follow policy for photographs/documentation. Avoid confronting the partner or forcing a disclosure or decision."
              },
              {
                "label": "Practical support",
                "text": "Assess housing, food, insurance, work, transport, child care, and digital access. With consent, coordinate social work, public health, home visiting, nutrition/WIC, mental-health care, and other community services."
              },
              {
                "label": "Make the plan safe to use",
                "text": "Ask how and when it is safe to contact the patient and share resources. Respect the patient’s choices, develop an individualized safety plan with the appropriate team, and escalate immediate danger through the local response system."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Nursing plan and quick application",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Assess → plan",
                "text": "“I cannot get to appointments and I am worried about rent” identifies access and stress needs. Arrange transport/resource help, agree on a manageable teaching plan, and follow up; do not chart the problem as lack of motivation."
              },
              {
                "label": "Teach → evaluate",
                "text": "Give information in small portions and ask the patient to explain the next step. Improvement means the patient feels heard, can name a support/contact plan, and can access needed care—not simply that they say they are happy."
              },
              {
                "label": "Recall",
                "text": "Normalize a range of feelings; assess the effect on function; ask privately about safety; involve chosen supports; refer and reassess. Emotional adaptation is individual, not a test every patient must pass on schedule."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-20",
    "answerSourceNote": "Based on Maternal Adaptation & Nutrition, pages 34–37, and Historical Context & Maternal–Fetal Health, pages 9 and 14–16. The lecture’s family/adaptation concepts are expanded into assessment and nursing actions. Quickening/lightening and the blanket sexual-activity statement are clarified; unsourced prevalence figures are not presented as current estimates.",
    "answerSources": [
      {
        "title": "OpenStax — Psychosocial aspects of pregnancy",
        "url": "https://openstax.org/books/maternal-newborn-nursing/pages/10-2-psychosocial-aspects-of-pregnancy"
      },
      {
        "title": "ACOG — Screening and diagnosis of perinatal mental health conditions",
        "url": "https://www.acog.org/clinical/clinical-guidance/clinical-practice-guideline/articles/2023/06/screening-and-diagnosis-of-mental-health-conditions-during-pregnancy-and-postpartum"
      },
      {
        "title": "Public Health Agency of Canada — Family-centred care during pregnancy",
        "url": "https://www.canada.ca/en/public-health/services/publications/healthy-living/maternity-newborn-care-guidelines-chapter-3.html"
      },
      {
        "title": "ACOG — Anxiety and pregnancy",
        "url": "https://www.acog.org/womens-health/faqs/anxiety-and-pregnancy"
      },
      {
        "title": "ACOG — How to tell when labor begins",
        "url": "https://www.acog.org/womens-health/faqs/how-to-tell-when-labor-begins"
      },
      {
        "title": "March of Dimes — Sex during pregnancy",
        "url": "https://www.marchofdimes.org/find-support/topics/pregnancy/sex-during-pregnancy"
      }
    ]
  },
  {
    "id": "conception-fetal-development",
    "weekIds": [
      "week-1",
      "week-2"
    ],
    "topicIds": [],
    "title": "Conception and fetal development",
    "text": "Outline the reproductive cycle, fertilization, implantation, and stages of fetal development. Explain the functions of the placenta, umbilical cord, amniotic fluid, and fetal circulation.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "The ovarian cycle releases an oocyte; fertilization usually occurs in the fallopian tube, followed by cell division, blastocyst formation, and uterine implantation.",
          "Organ formation is concentrated in the embryonic period; the fetal period emphasizes growth and maturation. Always distinguish weeks after fertilization from LMP-based gestational weeks.",
          "The placenta exchanges gases/nutrients/waste and makes hormones; the cord transports fetal blood; amniotic fluid protects and supports development.",
          "Fetal circulation uses three shunts to bypass much of the liver/lungs. The umbilical vein brings oxygenated blood toward the fetus; two arteries return blood to the placenta."
        ]
      },
      {
        "type": "group",
        "title": "Reproductive cycle: match the ovarian and uterine phases",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Follicular / proliferative",
                "text": "FSH supports follicle development; the dominant follicle produces estrogen. After menstruation, estrogen rebuilds the endometrium. Cycle day 1 is the first day of menstrual bleeding."
              },
              {
                "label": "Ovulation",
                "text": "The LH surge triggers release of an oocyte. In the lecture’s ideal 28-day cycle this is near day 14, but actual timing varies. The oocyte enters the fallopian tube, where fertilization may occur."
              },
              {
                "label": "Luteal / secretory",
                "text": "The ruptured follicle becomes the corpus luteum, which produces progesterone (and estrogen). Progesterone makes the endometrium secretory and suitable for implantation."
              },
              {
                "label": "If pregnancy does or does not occur",
                "text": "After implantation, hCG helps maintain the corpus luteum until placental hormone production can sustain pregnancy. Without an implanted pregnancy, luteal hormone support falls, the endometrium breaks down, and menstruation begins. The lecture calls the late withdrawal period the ischemic phase."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Fertilization, cell division, and implantation",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Fertilization usually occurs in the ampulla/outer portion of the fallopian tube. Sperm and oocyte contribute genetic material to form a zygote. The usual chromosome total is 46, with 23 from each gamete.",
              "Cleavage produces progressively more cells while the conceptus travels toward the uterus: zygote → morula (solid cell cluster) → blastocyst (fluid-filled structure with inner and outer cell populations).",
              "The inner cell mass forms the embryo and contributes to embryonic membranes. The trophoblast contributes to the chorion and fetal portion of the placenta. Implantation begins about a week after fertilization as the blastocyst attaches to and invades the prepared endometrium.",
              "Nursing connection: hCG appears after implantation. A positive test does not show whether implantation is intrauterine; pain or bleeding with a possible pregnancy requires appropriate assessment for ectopic pregnancy or other complications."
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Developmental stages, germ layers, and time scales",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Preembryonic",
                "text": "Fertilization through the first two weeks after fertilization: cell division, transport, implantation, and early differentiation. This is approximately gestational weeks 2–4 in a typical LMP-dated cycle."
              },
              {
                "label": "Embryonic",
                "text": "Approximately weeks 3–8 after fertilization (about gestational weeks 5–10): major organ structures are laid down. This organogenesis period is especially vulnerable to exposures that can cause structural abnormalities."
              },
              {
                "label": "Fetal",
                "text": "From week 9 after fertilization (about gestational week 11) to birth: growth, functional development, and maturation continue. Early organ formation does not mean lungs, brain, or other organs are ready for extrauterine life."
              },
              {
                "label": "Germ layers",
                "text": "Ectoderm contributes to nervous system and epidermal/sensory structures. Mesoderm contributes to muscle, bone, cardiovascular, urinary, and reproductive structures. Endoderm contributes to epithelial linings of digestive/respiratory systems and organs such as liver and pancreas. These are major contributions, not an exhaustive organ map."
              },
              {
                "label": "Exposure teaching",
                "text": "Discuss medications, supplements, alcohol/substances, infection risks, and relevant environmental/work exposures with the clinician. Timing, dose, duration, and the developing organ matter. Do not abruptly stop a necessary prescribed treatment without an individualized plan."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Membranes, placenta, and pregnancy hormones",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Chorion and amnion",
                "text": "The chorion is the outer fetal membrane; chorionic villi contribute to placental exchange. The amnion is the inner membrane surrounding the fluid-filled amniotic cavity. Together they form the sac around the developing fetus."
              },
              {
                "label": "Placental exchange",
                "text": "Maternal blood surrounds chorionic villi while fetal blood circulates inside fetal vessels. Oxygen and nutrients move toward the fetus; carbon dioxide and wastes move toward maternal clearance. Maternal and fetal blood normally remain in separate circulations, though cells or blood can cross under some circumstances."
              },
              {
                "label": "Passive immunity",
                "text": "Maternal IgG crosses the placenta, with much transfer later in pregnancy, giving the infant temporary passive protection. This is one reason prematurity can reduce the antibody reserve available at birth."
              },
              {
                "label": "Placenta is not an absolute barrier",
                "text": "Many drugs, alcohol, and some infections can cross. Placental immune functions help support pregnancy but do not guarantee protection from infection or rejection-related problems."
              },
              {
                "label": "Hormonal jobs",
                "text": "hCG supports the corpus luteum early; progesterone supports the lining and uterine relaxation; estrogen supports growth and breast changes; hPL contributes to maternal insulin resistance and nutrient availability. Relaxin contributes to ligament changes. Placental hormones support development; the placenta does not itself mature into fetal organs."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Umbilical cord and amniotic fluid",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Two arteries and one vein",
                "text": "The single umbilical vein carries relatively oxygen-rich blood from placenta to fetus. Two umbilical arteries carry relatively oxygen-poor blood and waste from fetus to placenta. Vessel names describe direction relative to the fetal heart, not oxygen content."
              },
              {
                "label": "Wharton’s jelly",
                "text": "This connective tissue cushions the cord vessels against compression. Cord compression can reduce fetal blood flow even though the cord is protected."
              },
              {
                "label": "Fluid source and function",
                "text": "Early fluid reflects maternal/fetal membrane transport; fetal urine becomes a major contributor later. Fetal swallowing and other pathways regulate volume. Fluid cushions trauma, limits cord compression, stabilizes temperature, and permits movement, symmetric growth, and lung development."
              },
              {
                "label": "Why fluid assessment matters",
                "text": "Low volume (oligohydramnios) or high volume (polyhydramnios) can signal problems with membranes, fetal urine production, swallowing, or other maternal/fetal conditions. The volume is one part of assessment, not a stand-alone diagnosis. Suspected fluid leakage needs evaluation."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Fetal circulation: trace the blood and name the three shunts",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Start at the placenta",
                "text": "Placenta → umbilical vein → some liver flow and ductus venosus → inferior vena cava → right atrium. Fetal blood mixes along the route; it is not all equally oxygenated."
              },
              {
                "label": "Ductus venosus: liver bypass",
                "text": "Directs a portion of umbilical venous blood toward the inferior vena cava, bypassing much of the hepatic circulation."
              },
              {
                "label": "Foramen ovale: atrial shortcut",
                "text": "Allows right-to-left flow from right atrium to left atrium. Blood then passes to the left ventricle and aorta, supplying the heart, brain, and upper body."
              },
              {
                "label": "Ductus arteriosus: lung bypass",
                "text": "Much right-ventricular output travels from pulmonary artery through the ductus arteriosus into the descending aorta, bypassing the high-resistance fetal lungs."
              },
              {
                "label": "Return and transition",
                "text": "Blood returns to the placenta through the two umbilical arteries. Before birth the placenta supplies oxygen; fetal breathing movements do not provide air exchange. After birth, lung expansion and separation from the placenta change pressures/oxygenation and promote functional closure of the fetal pathways."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Developmental milestones and twins",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Early to middle pregnancy",
                "text": "Cardiac activity develops in the embryonic period, before the fetal stage—not only when the fetus reaches a later gestational week. Doppler heart tones are often detectable around 10–12 gestational weeks; perceived movement/quickening often occurs around 16–20 weeks. Detection depends on method and circumstances."
              },
              {
                "label": "Later pregnancy",
                "text": "Swallowing, movement, reflexes, and sensory responses develop as organs mature. Lanugo and vernix help protect fetal skin; later fat deposition improves energy and temperature reserves. Lung development and surfactant increase over time, but a very preterm infant may still need substantial respiratory support."
              },
              {
                "label": "Viability is individualized",
                "text": "Do not read “breathing movements” or a surfactant milestone as proof that an infant can breathe independently. Survival and morbidity depend on maturity, illness, treatment, and neonatal resources—not one weight or week threshold."
              },
              {
                "label": "Dizygotic / fraternal twins",
                "text": "Two oocytes fertilized by two sperm produce two genetically distinct embryos. They have separate chorions and amniotic sacs; placentas can lie together and appear fused."
              },
              {
                "label": "Monozygotic / identical twins",
                "text": "One fertilized oocyte splits. Chorionicity and amnionicity depend on when splitting occurs; identical twins do not always share one placenta. Ultrasound-defined placental/membrane arrangement guides surveillance because shared placental circulation can create additional risks."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Genetics: screening versus diagnosis",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Screening estimates risk",
                "text": "Cell-free DNA/NIPT can be performed from about 10 gestational weeks and analyzes mainly placental DNA fragments in maternal blood. First-trimester ultrasound/serum screening and second-trimester serum screening assess risk; a positive screen is not a confirmed diagnosis and a negative screen cannot rule out every condition."
              },
              {
                "label": "Ultrasound and serum markers",
                "text": "Nuchal translucency assesses a fluid space at the back of the fetal neck—not the “neonatal cervical spine.” Interpretation depends on gestational age/size and the whole assessment. An anatomy ultrasound is generally offered at 18–22 weeks. AFP is one marker: an elevation can suggest an open neural-tube defect or other causes and needs follow-up, not a diagnosis from the number alone."
              },
              {
                "label": "Diagnostic sampling",
                "text": "CVS usually samples chorionic villi at 10–13 weeks; amniocentesis usually samples fluid at 15–20 weeks (and may be done later). Both can support specific genetic diagnoses and have procedure risks. CVS and amniocentesis are not interchangeable for every question; CVS does not directly evaluate open neural-tube defects."
              },
              {
                "label": "Cord blood sampling",
                "text": "Percutaneous umbilical blood sampling/cordocentesis is a specialist invasive test for selected fetal blood disorders or treatment needs, not routine first-line screening for every pregnancy."
              },
              {
                "label": "Nurse’s role",
                "text": "Provide balanced explanations of what each test can and cannot tell the family, verify understanding/consent, assess family history, support a choice to accept or decline, and arrange genetic counseling and diagnostic follow-up when indicated. Avoid predicting an outcome from a screen or pressuring a decision."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Check yourself: connect structure to function",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Which vessel brings oxygen-rich blood to the fetus? The umbilical vein. Which shunts bypass most liver flow and much lung flow? Ductus venosus; foramen ovale and ductus arteriosus.",
              "Why does maternal movement at 18 weeks not mark the beginning of fetal movement? Quickening is when movement is perceived; fetal movement began earlier.",
              "Why is a positive NIPT result followed by counseling and an offer of diagnostic testing? It is a risk screen, not a diagnosis.",
              "Why are two dates sometimes about two weeks apart? LMP-based gestational age and time since fertilization use different starting points."
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-20",
    "answerSourceNote": "Based on Menstruation, Conception & Fetal Development, pages 2–24, including the cycle, twin, circulation, and milestone diagrams. Notes cover the complete objective plus the deck’s genetics material. Stage dating, circulation timing, twin membranes, and screening-versus-diagnosis language are clarified.",
    "answerSources": [
      {
        "title": "MedlinePlus — Fetal development",
        "url": "https://www.medlineplus.gov/ency/article/002398.htm"
      },
      {
        "title": "American Heart Association — Fetal circulation",
        "url": "https://www.heart.org/en/health-topics/congenital-heart-defects/symptoms--diagnosis-of-congenital-heart-defects/fetal-circulation"
      },
      {
        "title": "ACOG — Prenatal genetic screening tests",
        "url": "https://www.acog.org/womens-health/faqs/prenatal-genetic-screening-tests"
      },
      {
        "title": "ACOG — Prenatal genetic diagnostic tests",
        "url": "https://www.acog.org/womens-health/faqs/prenatal-genetic-diagnostic-tests"
      },
      {
        "title": "ACOG — Current prenatal genetic screening guidance",
        "url": "https://www.acog.org/advocacy/policy-priorities/non-invasive-prenatal-testing/current-acog-guidance"
      },
      {
        "title": "ACOG — Definition of term pregnancy",
        "url": "https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2013/11/definition-of-term-pregnancy"
      },
      {
        "title": "ACOG — Periviable birth and individualized counseling",
        "url": "https://www.acog.org/clinical/clinical-guidance/obstetric-care-consensus/articles/2017/10/periviable-birth"
      },
      {
        "title": "ACOG — Multiple pregnancy: chorionicity and amnionicity",
        "url": "https://www.acog.org/womens-health/faqs/multiple-pregnancy"
      },
      {
        "title": "Children’s Hospital of Philadelphia — Maternal antibodies and passive immunity",
        "url": "https://www.chop.edu/vaccine-education-center/human-immune-system/development-immune-system"
      }
    ]
  },
  {
    "id": "pregnancy-signs",
    "weekIds": [
      "week-2"
    ],
    "topicIds": [
      "antepartum-prenatal"
    ],
    "title": "Recognizing pregnancy",
    "text": "Distinguish presumptive, probable, and positive signs of pregnancy. Explain the role and limits of pregnancy testing and how findings are confirmed.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Presumptive signs are the patient’s symptoms; probable signs are findings that suggest pregnancy; positive signs provide direct evidence of an embryo or fetus.",
          "A positive hCG test is a probable sign in the nursing classification. It does not establish where the pregnancy is located or whether it is developing normally.",
          "Confirm with the clinical history and appropriate ultrasound/follow-up. Pain, bleeding, fainting, or shoulder pain needs urgent assessment even if an early urine test is negative."
        ]
      },
      {
        "type": "group",
        "title": "Presumptive: what the patient reports",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Examples",
                "text": "Amenorrhea (missed period), nausea/vomiting, fatigue, breast tenderness, urinary frequency, and quickening (the patient first perceives fetal movement)."
              },
              {
                "label": "Why these are not proof",
                "text": "Stress, endocrine conditions, illness, medications, and other causes can produce similar symptoms. Quickening is subjective; it is different from an examiner detecting fetal movement."
              },
              {
                "label": "Nursing assessment",
                "text": "Ask about the first day of the last menstrual period (LMP), usual cycle, contraception, symptoms, test timing, and pregnancy possibility. Respond without assumptions about whether the pregnancy is wanted."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Probable: findings that suggest pregnancy",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Cervical and uterine signs",
                "text": "Goodell sign = softening of the cervix; Chadwick sign = bluish-purple cervix/vaginal tissue from increased vascularity; Hegar sign = softening of the lower uterine segment. These are not independently diagnostic."
              },
              {
                "label": "Other examples",
                "text": "Uterine enlargement, Braxton Hicks contractions, and ballottement (rebound of a floating structure when tapped during examination) suggest pregnancy but can have other explanations."
              },
              {
                "label": "Positive pregnancy test",
                "text": "Urine or serum hCG detects a hormone associated with pregnancy. Despite the word “positive,” the test belongs in the probable-sign category; fetal evidence confirms pregnancy in this framework."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Positive: evidence from the fetus",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Ultrasound",
                "text": "Visualization of an embryo or fetus, with cardiac activity when expected for gestational age, supplies direct evidence. A very early indeterminate scan may need a planned repeat; it does not automatically establish pregnancy loss."
              },
              {
                "label": "Fetal heart activity",
                "text": "A clinician detects fetal heart activity distinct from the maternal pulse. Compare the maternal pulse to avoid mistaking maternal circulation for fetal activity."
              },
              {
                "label": "Movement felt by the examiner",
                "text": "Fetal movement palpated by a trained examiner is a positive sign; movement only reported by the patient remains presumptive. Detection depends on gestational age and assessment method."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Pregnancy testing: timing, limits, and follow-up",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Urine versus serum",
                "text": "Urine tests usually give a yes/no answer. Serum testing can detect lower hCG levels and may measure a quantitative value; serial results can help guide evaluation when clinically indicated."
              },
              {
                "label": "An early negative can be false",
                "text": "Testing before enough hCG is present, diluted urine, or incorrect use can miss pregnancy. Follow the test directions; first-morning urine can improve detection. If suspicion persists, repeat after several days or arrange clinical testing."
              },
              {
                "label": "A positive does not locate the pregnancy",
                "text": "hCG may be present in ectopic pregnancy, after a recent pregnancy, or with some fertility medications. One value or a simple “doubling” rule cannot independently diagnose location or viability; interpret symptoms, trends, and ultrasound together."
              },
              {
                "label": "Apply it",
                "text": "Missed period + breast tenderness = presumptive. Positive home test = probable. Embryo seen on ultrasound = positive. Unilateral pelvic pain with dizziness or bleeding requires urgent evaluation for ectopic pregnancy; do not wait for a repeat home test."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Objective-focused synthesis of Maternal Adaptation, pages 10–13, with pregnancy-test timing and confirmation clarified using the references below.",
    "answerSources": [
      {
        "title": "Open RN — Antepartum assessment and pregnancy signs",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK615334/"
      },
      {
        "title": "MedlinePlus — Pregnancy testing and its limits",
        "url": "https://www.medlineplus.gov/lab-tests/pregnancy-test/"
      },
      {
        "title": "FDA — Home pregnancy tests",
        "url": "https://www.fda.gov/medical-devices/home-use-tests/pregnancy"
      },
      {
        "title": "CDC Hear Her — Urgent maternal warning signs",
        "url": "https://www.cdc.gov/hearher/maternal-warning-signs/index.html"
      }
    ]
  },
  {
    "id": "obstetric-history-gtpal",
    "weekIds": [
      "week-2"
    ],
    "topicIds": [
      "antepartum-prenatal"
    ],
    "title": "Obstetric history and GTPAL",
    "text": "Calculate and interpret gravida, parity, and GTPAL from a patient history. Include the current pregnancy, term and preterm births, pregnancy losses, multiple gestation, and living children.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Gravida counts all pregnancies, including the current pregnancy; parity counts pregnancies delivered at the course’s gestational-age threshold, regardless of live birth or stillbirth.",
          "GTPAL = total pregnancies, term births, preterm births, losses before 20 weeks, and children currently living. T and P count pregnancies delivered, not individual babies.",
          "Twins count as one pregnancy and one birth event but can add two to L. The current pregnancy increases G only until delivery."
        ]
      },
      {
        "type": "group",
        "title": "Decode G, parity, and GTPAL",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "G — gravida",
                "text": "Every pregnancy counts once: current pregnancy, term/preterm births, miscarriage, induced abortion, and ectopic or molar pregnancy. A twin pregnancy still adds only one to G."
              },
              {
                "label": "Parity in G/P notation",
                "text": "Number of pregnancies reaching the reporting threshold, whether the infant is born alive or stillborn. This course uses 20 weeks. Nulligravida = never pregnant; primigravida = first pregnancy; nullipara = no birth at/after that threshold."
              },
              {
                "label": "T — term births",
                "text": "Pregnancies delivered at 37 weeks 0 days or later. In GTPAL this includes early term, full term, late term, and postterm; it is not limited to 39–40 weeks."
              },
              {
                "label": "P — preterm births",
                "text": "Pregnancies delivered from 20 weeks 0 days through 36 weeks 6 days in this course. P here means preterm, whereas P in simple G/P means overall parity."
              },
              {
                "label": "A and L",
                "text": "A counts pregnancies ending before 20 weeks, whether spontaneous or induced; use respectful language when asking about losses. L counts children currently living. A is a documentation category, not a statement about intent."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Calculate in a consistent order",
        "blocks": [
          {
            "type": "list",
            "items": [
              "List each pregnancy once with gestational age at its end, number of babies, and whether each child is currently living. Add the current pregnancy as its own row.",
              "Count all rows for G. Classify each completed pregnancy into T, P, or A using gestational age at the outcome; do not classify the ongoing pregnancy yet.",
              "Count living children separately for L. A stillbirth or a child who later died still counts in T or P when the gestational threshold was reached, but does not add to current L.",
              "Cross-check: for an ongoing pregnancy, G = T + P + A + 1; after all pregnancies have ended, G = T + P + A. This assumes every prior pregnancy is accounted for.",
              "Document exact gestational ages when known. Institutions may use different reporting conventions near the threshold; 20 weeks is the course convention, not a universal viability prediction."
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Worked example: singleton births and early losses",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "History",
                "text": "Pregnant now; one birth at 39 weeks and one at 34 weeks, both children living; one induced abortion at 8 weeks and one miscarriage at 18 weeks."
              },
              {
                "label": "Count",
                "text": "G = 5 total pregnancies. T = 1 (39-week birth). P = 1 (34-week birth). A = 2 (8- and 18-week losses). L = 2 living children."
              },
              {
                "label": "Answer",
                "text": "G5 T1 P1 A2 L2; often written G5P1122. In simple gravida/para notation this is G5 P2, because overall parity = T + P = 2."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Worked example: twins and the living count",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "History",
                "text": "Pregnant now; two prior singleton births at 39 and 40 weeks; one twin pregnancy delivered at 35 weeks; three losses at 12, 14, and 10 weeks. All four born children are living."
              },
              {
                "label": "Answer",
                "text": "G7 T2 P1 A3 L4 (G7P2134). The twin delivery adds one to preterm P and two to living L. Check: 2 + 1 + 3 + 1 current pregnancy = 7."
              },
              {
                "label": "If one twin had died",
                "text": "G, T, P, and A would stay the same, but L would be 3. Living children are not the same thing as number of deliveries."
              },
              {
                "label": "Why the nurse needs more than the code",
                "text": "GTPAL does not reveal previous cesarean birth, hemorrhage, preeclampsia, birth trauma, or neonatal complications. Ask about these and the patient’s experience to guide this pregnancy’s care."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Based on Maternal Adaptation, pages 5–9. Worked examples show the counting process; the 20-week classification follows the course and is distinguished from individualized viability.",
    "answerSources": [
      {
        "title": "Open RN — Antepartum assessment and pregnancy signs",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK615334/"
      },
      {
        "title": "ACOG — Definition of term pregnancy",
        "url": "https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2013/11/definition-of-term-pregnancy"
      }
    ]
  },
  {
    "id": "estimated-due-date",
    "weekIds": [
      "week-2"
    ],
    "topicIds": [
      "antepartum-prenatal"
    ],
    "title": "Naegele’s rule and due dates",
    "text": "Calculate an estimated due date using Naegele’s rule, explain the assumptions behind the calculation, and identify when menstrual history or ultrasound dating changes the assessment.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Naegele’s rule uses the FIRST day of the last menstrual period: subtract 3 months, add 7 days, then add 1 year.",
          "It estimates a 40-week pregnancy from the LMP and assumes a regular 28-day cycle with ovulation around day 14. It is an estimate, not a guaranteed birth date.",
          "Uncertain LMP, irregular cycles, recent hormonal changes, or assisted reproduction can make the shortcut unreliable. Early ultrasound and the clinician’s documented best obstetric estimate guide dating."
        ]
      },
      {
        "type": "group",
        "title": "Use the rule and check the calendar",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Starting point",
                "text": "Use the first day of the last normal menstrual period, not the last day of bleeding, the positive test date, or the date of intercourse."
              },
              {
                "label": "Method",
                "text": "LMP − 3 calendar months + 7 days + 1 year. An equivalent classroom shortcut is +9 calendar months +7 days; carry dates across months/years correctly."
              },
              {
                "label": "Gestational age",
                "text": "Clinical gestational age starts at the LMP and is roughly 2 weeks longer than time since fertilization in a typical cycle. Forty weeks = 280 days from the LMP."
              },
              {
                "label": "Calendar caveat",
                "text": "Calendar-month arithmetic can differ slightly from an exact 280-day calculation because months differ in length. Use the stated method for a classroom problem and a validated calculator plus the clinical dating plan for patient care."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Worked examples from the lecture",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Example 1",
                "text": "LMP November 21, 2025 → subtract 3 months: August 21, 2025 → add 7 days: August 28, 2025 → add 1 year: EDD August 28, 2026."
              },
              {
                "label": "Example 2",
                "text": "LMP August 20, 2025 → May 20, 2025 → May 27, 2025 → EDD May 27, 2026. The final August date printed on the second lecture example is a slide error."
              },
              {
                "label": "Check your answer",
                "text": "Both examples also give the same dates with exact +280-day arithmetic. Always check the final year, month, and whether the result is approximately 9 months after the LMP."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "When menstrual dating is less reliable",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Ask about reliability",
                "text": "Confirm whether the date is certain and bleeding was typical. Ask about cycle length/regularity, recent contraception use, breastfeeding, postpartum status, and recent pregnancy loss."
              },
              {
                "label": "Cycle assumption",
                "text": "Longer or shorter regular cycles shift the likely ovulation date; irregular cycles make a simple adjustment unreliable. Share this history with the clinician rather than treating the standard shortcut as definitive."
              },
              {
                "label": "Assisted reproduction",
                "text": "Known embryo age and transfer date guide dating after IVF. Do not replace this with an assumed LMP or a recollection of intercourse."
              },
              {
                "label": "Nurse’s role",
                "text": "Record the reported LMP, its certainty, cycle history, ultrasound dates, and the established EDD. Explain the method and help resolve conflicting dates with the obstetric team."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "How ultrasound changes the assessment",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Most accurate window",
                "text": "First-trimester ultrasound through 13 weeks 6 days, usually using crown–rump length, is the most accurate way to establish or confirm gestational age."
              },
              {
                "label": "When to reconsider the EDD",
                "text": "An uncertain LMP or a meaningful discrepancy between LMP dating and ultrasound prompts clinician review using gestational-age-specific criteria. A tiny difference does not automatically require redating."
              },
              {
                "label": "After dating is established",
                "text": "Document and discuss any change; later growth scans should not routinely reset the due date. A smaller third-trimester fetus may have a growth problem rather than a younger gestational age."
              },
              {
                "label": "Why accuracy matters",
                "text": "Dating determines the timing and interpretation of screening, growth assessment, preterm/term classification, and birth planning. An EDD is not proof that fetal lungs are mature or justification for an elective early delivery."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Based on Prenatal Nursing Care, pages 4–8. The second worked example’s printed final date is corrected; clinical ultrasound dating follows ACOG guidance.",
    "answerSources": [
      {
        "title": "ACOG — Methods for estimating the due date",
        "url": "https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2017/05/methods-for-estimating-the-due-date"
      },
      {
        "title": "ACOG — Prenatal care and tailored visits",
        "url": "https://www.acog.org/womens-health/faqs/prenatal-care"
      }
    ]
  },
  {
    "id": "prenatal-assessment",
    "weekIds": [
      "week-2"
    ],
    "topicIds": [
      "antepartum-prenatal"
    ],
    "title": "Prenatal assessment and monitoring",
    "text": "Describe the initial and follow-up prenatal assessment, routine screening, maternal measurements, and assessment of fetal well-being. Identify which findings require follow-up or urgent reporting.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "The first visit establishes gestational age, baseline maternal health, pregnancy history, support needs, and a plan for labs, screening, and follow-up.",
          "Follow-up tracks symptoms, blood pressure, weight trend, fetal growth/heart activity, and movement as gestation advances; reassess risk and teaching needs at every contact.",
          "A screening result identifies risk or the need for further testing. Follow up abnormal findings and escalate urgent symptoms; a normal earlier test does not rule out a new problem."
        ]
      },
      {
        "type": "group",
        "title": "Initial history: establish the baseline and risks",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Pregnancy and obstetric history",
                "text": "Confirm LMP/cycle reliability, test results, dating ultrasound and EDD; calculate GTPAL. Ask about prior cesarean birth, preterm birth, hypertensive disorders, diabetes, hemorrhage, losses, and newborn complications."
              },
              {
                "label": "Medical and exposure history",
                "text": "Review chronic illness, surgery, allergies, family/genetic history, infections, prescription/OTC/herbal products, alcohol, tobacco/vaping, and other substances. Identify symptoms requiring assessment before routine intake continues."
              },
              {
                "label": "Family-centered assessment",
                "text": "Ask about the patient’s goals, preferred language, chosen support people, nutrition, mental health, safety, housing, transportation, and access to care. Screen privately for violence and substance use with a nonjudgmental approach."
              },
              {
                "label": "Nursing action",
                "text": "Reconcile medications, arrange ordered tests/referrals, identify barriers early, and ensure the patient knows how to reach the team between visits. Do not wait for the next appointment to address an urgent finding."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Initial examination and maternal measurements",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Baseline measurements",
                "text": "Measure blood pressure with the correct cuff, pulse, and weight; obtain height/prepregnancy BMI and temperature or other vital signs as indicated. Review trends and symptoms rather than treating one number as the whole assessment."
              },
              {
                "label": "Focused examination",
                "text": "Assess general appearance, heart/lungs, thyroid or other systems as indicated, abdomen/uterine size, and extremities. Pelvic examination and cervical screening are performed when indicated, with explanation, consent, privacy, and appropriate support."
              },
              {
                "label": "Avoid overinterpreting findings",
                "text": "A named pelvic shape does not guarantee a vaginal birth. Edema alone does not diagnose preeclampsia. Hemodilution can lower hemoglobin, but anemia still needs trimester-appropriate interpretation and follow-up."
              },
              {
                "label": "Follow up abnormal BP",
                "text": "New systolic BP ≥140 or diastolic BP ≥90 requires prompt evaluation and confirmation according to protocol. Severe-range BP ≥160 systolic or ≥110 diastolic needs immediate escalation and timely confirmation/treatment; do not wait hours or for a routine visit."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Early labs: connect each test to its purpose",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "CBC",
                "text": "Assesses hemoglobin/hematocrit and platelets. Follow up anemia or thrombocytopenia; do not label every low hemoglobin value “normal dilution.”"
              },
              {
                "label": "ABO/Rh and antibody screen",
                "text": "Identifies blood group, Rh status, and red-cell antibodies. An unsensitized Rh-negative patient may need Rh immune globulin at the indicated times; a positive antibody screen needs a specific follow-up plan."
              },
              {
                "label": "Urine testing",
                "text": "A urine culture screens for asymptomatic bacteriuria, which can progress to pyelonephritis. Urinalysis helps evaluate symptoms/findings; dipstick glucose does not diagnose gestational diabetes, and protein alone does not establish preeclampsia."
              },
              {
                "label": "Infection and immunity testing",
                "text": "Check rubella immunity and screen for hepatitis B, hepatitis C, HIV, and syphilis. Gonorrhea/chlamydia and other tests follow age, exposure risk, and local recommendations; discuss results privately."
              },
              {
                "label": "Genetic screening choices",
                "text": "Offer informed discussion of screening and diagnostic options to all patients, including the option to decline. A positive aneuploidy screen is a risk result requiring counseling and possible diagnostic testing, not a confirmed fetal diagnosis."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Infection results: what changes in care?",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Rubella nonimmune",
                "text": "Teach avoidance of exposure and plan postpartum MMR vaccination. MMR is a live vaccine and is not given during pregnancy."
              },
              {
                "label": "Hepatitis B positive",
                "text": "Coordinate the maternal plan and notify the newborn team: the exposed infant needs hepatitis B vaccine plus HBIG within 12 hours of birth. Ensure series completion and follow-up blood tests at 9–12 months (or 1–2 months after delayed completion)."
              },
              {
                "label": "HIV positive",
                "text": "Link promptly to specialist care and ongoing antiretroviral therapy. Viral load, treatment, and adherence guide delivery/newborn prevention plans; IV zidovudine during labor is not automatically required for every patient with HIV."
              },
              {
                "label": "Syphilis and other STIs",
                "text": "Ensure timely treatment, appropriate partner care, and retesting. ACOG recommends syphilis screening at the first prenatal visit, in the third trimester, and at birth; other repeat testing depends on the infection and local protocol."
              },
              {
                "label": "GBS colonization",
                "text": "GBS is not an STI. The late-pregnancy vaginal–rectal swab guides intrapartum antibiotics to reduce early-onset neonatal infection; it does not mean the patient caused an infection."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Follow-up visits and the screening timeline",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Visit schedule",
                "text": "Know the lecture’s traditional pattern: about every 4 weeks to 28 weeks, every 2 weeks to 36 weeks, then weekly. Current care is tailored to risk, services needed, access, and patient preferences; symptoms can require extra assessment at any time."
              },
              {
                "label": "At follow-up",
                "text": "Review interval symptoms, BP, weight/gain trend, ordered results, medications, coping/support, and fetal assessment appropriate to gestational age. Urine tests and additional examination follow clinical need and the care plan."
              },
              {
                "label": "18–22 weeks",
                "text": "The fetal anatomy ultrasound assesses structures and can evaluate placental location. A normal anatomy scan does not exclude every condition; follow up incomplete views or abnormal findings."
              },
              {
                "label": "24–28 weeks",
                "text": "Routine gestational diabetes testing and commonly repeat CBC. Earlier testing for preexisting diabetes may be indicated by risk. Review results and arrange the required follow-up rather than assuming no symptoms means no diabetes."
              },
              {
                "label": "Around 28 weeks",
                "text": "Reassess red-cell antibodies and give Rh immune globulin as ordered for an unsensitized Rh-negative patient; additional doses may be needed after sensitizing events and after an Rh-positive newborn. It does not treat existing alloimmunization."
              },
              {
                "label": "36 weeks 0 days–37 weeks 6 days",
                "text": "Routine GBS screening guides birth care; known GBS bacteriuria this pregnancy or a prior infant with GBS disease can already indicate intrapartum prophylaxis. Coordinate vaccines and repeat infection testing at their appropriate times."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Glucose screening: distinguish screen from diagnosis",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Common two-step approach",
                "text": "A 50-g, 1-hour glucose challenge is a screen, often without fasting. A result meeting the local cutoff (130, 135, or 140 mg/dL) commonly leads to a fasting 100-g, 3-hour oral glucose tolerance test."
              },
              {
                "label": "Carpenter–Coustan values",
                "text": "For the 100-g test: fasting 95, 1 hour 180, 2 hours 155, and 3 hours 140 mg/dL. A value AT OR ABOVE the threshold is abnormal; diagnosis generally requires at least two abnormal values under this approach."
              },
              {
                "label": "Protocol matters",
                "text": "Some services use a one-step 75-g test with different criteria. Do not mix test doses, timing, or thresholds. Explain preparation, communicate results, and confirm the follow-up appointment."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Fetal growth, heart activity, and movement",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Fundal height",
                "text": "The uterus is near the symphysis around 12 weeks and the umbilicus around 20 weeks. From about 20–36 weeks, fundal height in cm roughly tracks gestational weeks in a singleton pregnancy. An unexpected trend prompts evaluation, not automatic redating."
              },
              {
                "label": "Factors affecting size",
                "text": "Dating error, multiple pregnancy, body habitus, fibroids, amniotic fluid, and growth abnormalities can change the measurement. Use serial measurements and ultrasound when indicated."
              },
              {
                "label": "Fetal heart assessment",
                "text": "Assess with the method appropriate to gestational age and compare with the maternal pulse. Later-pregnancy baseline fetal heart rate is generally 110–160 beats/min; a persistently abnormal rate needs assessment, not reassurance from movement alone."
              },
              {
                "label": "Movement teaching",
                "text": "Once a pattern is established, teach awareness of the baby’s usual activity. If a formal count is prescribed, follow the team’s specific method (a common method uses 10 movements within up to 2 hours). Reduced or absent movement from usual needs prompt contact; do not wait 12 hours, until tomorrow, or for juice to “fix” it."
              },
              {
                "label": "When more testing is needed",
                "text": "NST, biophysical profile, growth ultrasound, or Doppler studies are used for clinical indications, not automatically at every low-risk visit. A home Doppler cannot confirm fetal well-being."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Report promptly: connect the cue to the next action",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Urgent maternal symptoms",
                "text": "Severe/persistent headache, vision changes, severe upper abdominal pain, sudden face/hand swelling, fever ≥100.4°F (38°C), persistent vomiting/dehydration, or painful urination with fever/flank pain require prompt evaluation. Preeclampsia can occur without proteinuria."
              },
              {
                "label": "Bleeding, fluid, or preterm symptoms",
                "text": "Report vaginal bleeding, a gush/trickle of fluid, or regular contractions/pelvic pressure/backache before 37 weeks. Do not assume these are normal discharge or Braxton Hicks."
              },
              {
                "label": "Emergency symptoms",
                "text": "Heavy bleeding, severe abdominal/shoulder pain with faintness, chest pain, severe breathing difficulty, seizure, or thoughts of self-harm need emergency help. Unilateral leg swelling/pain needs urgent evaluation for a clot; chest/breathing symptoms can signal pulmonary embolism."
              },
              {
                "label": "Nursing response",
                "text": "Assess stability and vital signs, obtain gestational age and symptom details, escalate to the obstetric/emergency team, and document findings, communication, and response. Teach whom to call and where to go; use teach-back to confirm the plan."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Based on Prenatal Nursing Care, pages 2–17 and 27–29. Screening schedules, infection follow-up, movement teaching, and abnormal findings are clarified with current references; care is individualized.",
    "answerSources": [
      {
        "title": "ACOG — Prenatal care and tailored visits",
        "url": "https://www.acog.org/womens-health/faqs/prenatal-care"
      },
      {
        "title": "ACOG — Routine tests during pregnancy",
        "url": "https://www.acog.org/womens-health/faqs/routine-tests-during-pregnancy"
      },
      {
        "title": "ACOG — Syphilis screening in pregnancy",
        "url": "https://www.acog.org/clinical-information/physician-faqs/syphilis-screening-in-pregnancy"
      },
      {
        "title": "CDC — Group B strep screening",
        "url": "https://www.cdc.gov/group-b-strep/testing/index.html"
      },
      {
        "title": "CDC — Perinatal hepatitis B prevention",
        "url": "https://www.cdc.gov/hepatitis-b/hcp/perinatal-provider-overview/index.html"
      },
      {
        "title": "NIH — Intrapartum care for people with HIV",
        "url": "https://clinicalinfo.hiv.gov/en/guidelines/perinatal/intrapartum-care"
      },
      {
        "title": "USPSTF — Gestational diabetes screening",
        "url": "https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/gestational-diabetes-screening"
      },
      {
        "title": "RCOG — Your baby’s movements in pregnancy",
        "url": "https://www.rcog.org.uk/for-the-public/browse-our-patient-information/your-babys-movements-in-pregnancy/"
      },
      {
        "title": "CDC Hear Her — Urgent maternal warning signs",
        "url": "https://www.cdc.gov/hearher/maternal-warning-signs/index.html"
      },
      {
        "title": "ACOG — Preeclampsia and high blood pressure",
        "url": "https://www.acog.org/womens-health/faqs/preeclampsia-and-high-blood-pressure-during-pregnancy"
      },
      {
        "title": "ACOG — Prenatal screening choices and anatomy ultrasound",
        "url": "https://www.acog.org/advocacy/policy-priorities/non-invasive-prenatal-testing/current-acog-guidance"
      }
    ]
  },
  {
    "id": "pregnancy-discomforts",
    "weekIds": [
      "week-2"
    ],
    "topicIds": [
      "antepartum-prenatal"
    ],
    "title": "Discomforts and warning signs",
    "text": "Explain nursing measures and patient teaching for common pregnancy discomforts. Distinguish normal discomforts from warning signs that need prompt evaluation.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "For a common discomfort, connect the pregnancy-related cause to a practical comfort measure, then name the warning signs that change the plan.",
          "Use hydration, food changes, rest/activity, positioning, and body mechanics when appropriate. Review medicines and supplements with the prenatal team instead of assuming OTC means safe.",
          "Severe, persistent, sudden, or associated symptoms need assessment. Bleeding, leaking fluid, preterm contractions, reduced fetal movement, and cardiopulmonary symptoms must not be dismissed as normal pregnancy."
        ]
      },
      {
        "type": "group",
        "title": "Nausea, reflux, and constipation",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Nausea/vomiting",
                "text": "Often worse early in pregnancy. Try small frequent meals, a dry snack before rising, avoiding smell/food triggers, and small sips of fluids between meals. Ask about provider-approved treatment if symptoms interfere with intake."
              },
              {
                "label": "Escalate vomiting",
                "text": "Inability to keep fluids down, reduced/dark urine, dizziness, weight loss, blood in vomit, or severe pain needs evaluation for dehydration/hyperemesis or another cause."
              },
              {
                "label": "Heartburn",
                "text": "Progesterone relaxes the lower esophageal sphincter and the uterus increases abdominal pressure. Use smaller meals, stay upright after eating, avoid late meals and personal triggers, and elevate the upper body for sleep."
              },
              {
                "label": "Medication teaching",
                "text": "Use antacids or other reflux medicines only as advised; calcium-containing antacids count toward total calcium. Check dose limits and spacing from iron/other medicines with the pharmacist. Persistent upper abdominal pain with headache/visual symptoms is a warning sign, not simply reflux."
              },
              {
                "label": "Constipation",
                "text": "Slower bowel motility and iron can contribute. Increase fiber gradually, drink fluids, move regularly, and respond to the urge to defecate. Discuss a pregnancy-appropriate stool softener or other treatment if needed; do not stop prescribed iron or start laxatives/herbals without review."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Urinary frequency and vaginal discharge",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Urinary frequency",
                "text": "Early renal changes and later bladder pressure can increase frequency. Void regularly, consider pelvic-floor exercises, limit bladder irritants, and shift some fluids earlier if nighttime voiding disrupts sleep; maintain adequate total hydration."
              },
              {
                "label": "Possible UTI",
                "text": "Burning, urgency with pain, hematuria, or suprapubic pain needs follow-up. Fever, chills, flank pain, or vomiting can indicate kidney infection and require prompt evaluation. Frequency alone does not establish a UTI."
              },
              {
                "label": "Leukorrhea",
                "text": "Thin white/milky discharge without strong odor, itching, or pain can increase. Use gentle external hygiene and breathable underwear; avoid douching or inserting treatments without assessment."
              },
              {
                "label": "Fluid versus discharge",
                "text": "Itching, malodor, or colored discharge needs assessment. A gush or ongoing watery trickle may be ruptured membranes: contact the team promptly rather than assuming ordinary discharge or urine."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Fatigue, breast tenderness, and mild breathlessness",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Fatigue",
                "text": "Metabolic demands, sleep changes, and later physical discomfort can contribute. Plan rest, regular sleep, balanced meals, and tolerable activity. Persistent or disproportionate fatigue merits assessment for anemia, mood concerns, thyroid problems, or illness."
              },
              {
                "label": "Breast tenderness",
                "text": "Use a well-fitting supportive bra and avoid friction. Fever, a focal red/hot area, a new concerning mass, or severe localized pain needs evaluation."
              },
              {
                "label": "Breathlessness",
                "text": "Mild gradual breathlessness can accompany increased ventilation and later uterine pressure. Adjust posture, slow the pace, and rest as needed. Sudden dyspnea, breathlessness at rest, chest pain, fainting, or difficulty breathing when lying down needs urgent/emergency evaluation."
              },
              {
                "label": "Dizziness when supine",
                "text": "The enlarged uterus can reduce venous return while lying flat. Turn to the side and reassess; persistent dizziness, syncope, bleeding, or chest symptoms need prompt evaluation."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Backache, leg cramps, and body mechanics",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Backache",
                "text": "Changing center of gravity and ligament relaxation strain the back. Use good posture, bend the knees to lift, wear supportive low-heeled shoes, change position often, and use pillows for support. Gentle stretching and brief low heat may help; avoid overheating."
              },
              {
                "label": "Leg cramps",
                "text": "Gently dorsiflex the foot (toes toward the shin), stretch the calf, and review hydration/activity. Do not automatically prescribe high-dose calcium or other supplements without assessing intake and the care plan."
              },
              {
                "label": "Do not massage a possible clot",
                "text": "One-sided calf pain, warmth, redness, or swelling is not a routine cramp. Obtain urgent assessment for DVT; avoid massaging the leg. Chest pain or shortness of breath with these findings is an emergency."
              },
              {
                "label": "Back pain needing follow-up",
                "text": "Persistent low backache with contractions, pelvic pressure, bleeding, or fluid leakage before 37 weeks can be preterm labor. Fever or flank pain suggests a possible urinary infection."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Dependent edema, varicosities, and hemorrhoids",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Leg/ankle edema",
                "text": "Venous pressure can cause bilateral dependent swelling that worsens after standing. Change position, elevate legs, take walking breaks, and rest side-lying as comfortable. Do not restrict fluids or take diuretics without an order."
              },
              {
                "label": "Varicose veins",
                "text": "Avoid prolonged standing/sitting and constrictive clothing; use leg elevation, movement, and properly fitted support stockings if advised. Sudden unilateral swelling/pain needs urgent assessment."
              },
              {
                "label": "Hemorrhoids",
                "text": "Prevent constipation and straining; use fluids/fiber, short periods of sitting, and a comfortably warm sitz bath. Ask about approved topical treatment. Persistent/heavy rectal bleeding or severe pain needs assessment."
              },
              {
                "label": "Swelling warning",
                "text": "Sudden swelling of face/hands, especially with severe headache, visual disturbance, upper abdominal pain, or high BP, needs prompt evaluation for a hypertensive disorder. Edema alone is not diagnostic."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Braxton Hicks versus contractions that need assessment",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Typical Braxton Hicks",
                "text": "Usually irregular, without a progressively stronger/closer pattern, and may ease with a change of activity, rest, or hydration. They do not progressively dilate the cervix, but this cannot be determined from symptoms alone at home."
              },
              {
                "label": "Possible labor",
                "text": "Contractions becoming regular, longer, stronger, and closer together, persistent low back/pelvic pressure, or bleeding/fluid loss warrant contact with the birth team. Before 37 weeks, seek prompt assessment for possible preterm labor."
              },
              {
                "label": "At term",
                "text": "Follow the individualized plan for when to call or come in. Do not rely on one fixed contraction rule when there is fluid leakage, bleeding, reduced fetal movement, severe pain, or another concern."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Safety check: when comfort measures are not enough",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Call promptly for fever ≥100.4°F (38°C), persistent vomiting/dehydration, severe headache/visual changes, severe abdominal pain, vaginal bleeding, fluid leakage, or preterm-labor symptoms.",
              "Once fetal movement has an established pattern, reduced or absent movement needs prompt contact. Do not wait until the next day or use a home Doppler as reassurance.",
              "Use emergency services for heavy bleeding with weakness/fainting, seizure, chest pain, severe shortness of breath, or immediate danger of self-harm.",
              "Apply it: ankle swelling after standing that improves with elevation may be dependent edema. Swelling of face/hands with headache and visual changes requires urgent evaluation, even if rest seems to help briefly."
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Based on the Pregnancy Discomforts handout, pages 2–4, and Prenatal Nursing Care, pages 15 and 18–23. Comfort measures are paired with assessment cues and current maternal/fetal warning-sign guidance.",
    "answerSources": [
      {
        "title": "Merck Manual Professional — Physiology of pregnancy",
        "url": "https://www.merckmanuals.com/professional/gynecology-and-obstetrics/approach-to-the-pregnant-woman-and-prenatal-care/physiology-of-pregnancy"
      },
      {
        "title": "CDC Hear Her — Urgent maternal warning signs",
        "url": "https://www.cdc.gov/hearher/maternal-warning-signs/index.html"
      },
      {
        "title": "RCOG — Your baby’s movements in pregnancy",
        "url": "https://www.rcog.org.uk/for-the-public/browse-our-patient-information/your-babys-movements-in-pregnancy/"
      }
    ]
  },
  {
    "id": "prenatal-nutrition-teaching",
    "weekIds": [
      "week-2"
    ],
    "topicIds": [
      "antepartum-prenatal"
    ],
    "title": "Nutrition and health promotion",
    "text": "Develop teaching about nutrition, weight gain, supplements, activity, medication and substance exposure, immunizations, and when to seek care during pregnancy. Adapt the plan to individual risks and needs.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Build an individual plan for balanced food intake, appropriate weight gain, a reviewed prenatal supplement, safe activity, and avoidance of harmful exposures.",
          "Teaching should cover what to do, why it matters, and when to call. Adapt for prepregnancy BMI, age, multiple pregnancy, chronic illness, food access, culture, and personal preferences.",
          "Review all medicines and vaccines with the prenatal team. Do not abruptly stop essential treatment; untreated illness and withdrawal can also harm pregnancy."
        ]
      },
      {
        "type": "group",
        "title": "Food, energy, and weight-gain goals",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Balanced intake",
                "text": "Include vegetables/fruit, whole grains, protein foods, and pasteurized dairy or fortified alternatives. Choose practical, culturally acceptable foods; plan fluids and small meals around nausea/reflux. “Eating for two” does not mean doubling portions."
              },
              {
                "label": "Typical energy needs",
                "text": "For many singleton pregnancies, no extra calories are needed in the first trimester; about +340 calories/day in the second and +450 in the third are general estimates. Adjust for activity, baseline nutrition, weight trend, and clinical needs."
              },
              {
                "label": "Singleton total weight gain",
                "text": "Prepregnancy BMI <18.5: 28–40 lb; BMI 18.5–24.9: 25–35 lb; BMI 25–29.9: 15–25 lb; BMI ≥30: generally 11–20 lb. Use an individualized goal rather than a judgment about body size."
              },
              {
                "label": "Assess the trend",
                "text": "Weight gain includes fetus, placenta, fluid, and maternal tissue. Too little gain prompts assessment of intake, vomiting, food access, or growth; sudden gain with swelling/headache needs evaluation for fluid retention and hypertensive disease. Multiple pregnancies need different goals."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Key nutrients and supplement safety",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Folate/folic acid",
                "text": "Pregnancy requires 600 micrograms dietary folate equivalents (mcg DFE) daily. Folic acid before conception and early pregnancy helps prevent neural-tube defects; low-risk preconception supplements commonly provide 400–800 mcg/day. The DFE requirement and supplement dose are not interchangeable units. Higher-risk dosing is prescribed individually."
              },
              {
                "label": "Iron",
                "text": "Pregnancy RDA = 27 mg/day, supporting red-cell production and fetal needs. Pair plant iron with vitamin C; discuss constipation, tolerability, and timing around calcium. Anemia treatment may require a separate prescribed dose; 27 mg is not a treatment dose for every patient."
              },
              {
                "label": "Calcium and vitamin D",
                "text": "Calcium: 1,000 mg/day for adults, 1,300 mg/day for adolescents; vitamin D supports absorption and bone health. Count food plus supplements/antacids, and assess dairy-free diets for fortified alternatives."
              },
              {
                "label": "Other nutrients",
                "text": "Ensure adequate protein, vitamin B12, iodine, choline, and vitamin D through diet and a reviewed supplement plan. Vegan diets need reliable B12 sources; some prenatal products omit important nutrients."
              },
              {
                "label": "Use the actual label",
                "text": "Review the prenatal product, dose, duplicate supplements, and nonprescription/herbal products. Avoid megadoses and excess preformed vitamin A/retinol. Iron is measured in mg and folate in micrograms, correcting the lecture’s unit errors."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Food safety, fish, and caffeine",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Prevent foodborne infection",
                "text": "Wash produce; separate raw from ready-to-eat foods; cook meat, eggs, and seafood thoroughly; refrigerate promptly; choose pasteurized milk/juice. Avoid raw/undercooked animal foods and unpasteurized dairy."
              },
              {
                "label": "Listeria precautions",
                "text": "Heat deli meats/hot dogs to 165°F or steaming hot. Avoid unheated queso fresco–type cheeses, including products made with pasteurized milk; current CDC guidance advises heating these to 165°F or steaming hot. Check product safety rather than assuming every pasteurized soft cheese is equally low risk."
              },
              {
                "label": "Fish can be beneficial",
                "text": "Aim for 8–12 oz/week (2–3 four-ounce servings) of varied cooked lower-mercury fish from FDA’s Best Choices list. Avoid highest-mercury fish such as shark, swordfish, king mackerel, and bigeye tuna; follow local advisories for caught fish."
              },
              {
                "label": "Caffeine",
                "text": "Keep total caffeine below 200 mg/day under standard obstetric guidance; count coffee, tea, energy drinks, cola, chocolate, and medicines. Discuss energy drinks and other stimulants rather than treating their ingredients as harmless."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Activity, rest, hygiene, and everyday safety",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Activity goal",
                "text": "For an uncomplicated pregnancy, aim for at least 150 minutes/week of moderate activity, such as walking or swimming, with clinician guidance. Start gradually, hydrate, avoid overheating, and choose activities that minimize falls, abdominal trauma, and contact injury."
              },
              {
                "label": "Stop and seek advice",
                "text": "Stop exercise for bleeding, fluid leakage, dizziness, chest pain, breathing difficulty before exertion, calf pain/swelling, or regular painful contractions. Complications can change the exercise plan; routine bed rest is not a universal solution."
              },
              {
                "label": "Rest and comfort",
                "text": "Plan adequate sleep, rest breaks, supportive clothing, and comfortable side-lying positions later in pregnancy. Continue dental care and gentle hygiene; avoid douching, hot tubs/saunas that overheat the body, and hot yoga."
              },
              {
                "label": "Sex and travel",
                "text": "Sex is generally safe in an uncomplicated pregnancy, but bleeding, leaking fluid, placental problems, or preterm-labor concerns require individual advice. In a car, use the shoulder belt across the chest and lap belt low under the abdomen; take movement breaks on long trips."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Medicines, alcohol, tobacco, and other exposures",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Medication reconciliation",
                "text": "Review prescription drugs, OTC pain/cold products, vitamins, herbs, and topical treatments. Check indication, dose, gestational age, interactions, and risks of untreated illness with the prescriber/pharmacist."
              },
              {
                "label": "High-risk exposures",
                "text": "Isotretinoin and some antiseizure or anticoagulant regimens need prompt specialist review. Do not abruptly stop seizure medicines or anticoagulation; substitution depends on the condition, including special circumstances such as mechanical heart valves."
              },
              {
                "label": "Alcohol",
                "text": "There is no known safe amount, time, or type of alcohol in pregnancy. Use nonjudgmental counseling and connect the patient to support. If dependence is possible, arrange medical assessment rather than suggesting unmanaged withdrawal."
              },
              {
                "label": "Tobacco, vaping, cannabis, and other drugs",
                "text": "Support cessation of smoking/vaping and avoidance of cannabis, including use for nausea. Assess secondhand exposure and offer treatment/referral without stigma. Patients using opioids need an evidence-based treatment plan, not abrupt unsupervised discontinuation."
              },
              {
                "label": "Work/home risks",
                "text": "Ask about solvents, radiation, lead, infection exposure, and tasks involving injury risk. Discuss specific workplace protections and safe food/animal-waste handling with the team rather than assuming every exposure has the same risk."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Immunizations: timing and purpose",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Review early",
                "text": "Check records at the first visit and make an individualized schedule. These notes follow ACOG’s 2026 maternal schedule; vaccine recommendations are date-sensitive and should be checked against the current obstetric plan."
              },
              {
                "label": "Influenza and COVID-19",
                "text": "ACOG recommends inactivated/recombinant influenza vaccine and the current COVID-19 vaccine during pregnancy; either can be given at any gestational age. Do not use the live intranasal influenza vaccine."
              },
              {
                "label": "Tdap",
                "text": "Give during each pregnancy, preferably early in the 27–36-week window, to transfer antibodies that protect the newborn from pertussis. Prior Tdap outside the current pregnancy does not replace this dose."
              },
              {
                "label": "RSV",
                "text": "Use only Abrysvo for maternal RSV vaccination, at 32 weeks 0 days–36 weeks 6 days during the recommended season (September–January in most of the continental U.S.) if eligible and not previously vaccinated. A prior maternal RSV dose is not routinely repeated; arrange the infant antibody plan as appropriate."
              },
              {
                "label": "Other vaccines and postpartum plan",
                "text": "Hepatitis A/B and other nonlive vaccines depend on immunity, age, exposure risk, and indications. Live MMR and varicella are deferred until postpartum when indicated. Plan follow-through rather than leaving nonimmunity undocumented."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Individualize the teaching and check understanding",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Adapt to the patient",
                "text": "For diabetes, hyperemesis, anemia, prior bariatric surgery, food allergy, multiple pregnancy, eating disorder, or adolescent pregnancy, coordinate the appropriate dietitian/specialist plan. Ask about cultural/religious food practices without stereotyping."
              },
              {
                "label": "Access and support",
                "text": "Screen for food insecurity, safe housing, transportation, insurance, and ability to obtain supplements. Connect to WIC, social work, community resources, interpreters, and chosen support people with consent. Assess pica (craving/eating nonfood substances) and possible iron deficiency without judgment."
              },
              {
                "label": "Prepare for birth and feeding",
                "text": "Offer childbirth education, discuss preferences and support people, and provide balanced infant-feeding education/referral. Teach the warning signs and the team’s contact/triage plan before symptoms occur."
              },
              {
                "label": "Teach-back",
                "text": "Ask the patient to describe their daily food/supplement plan, medication questions, next vaccine/testing dates, and what they would do for bleeding, leaking fluid, severe headache/visual changes, fever, or reduced fetal movement. Revisit the plan at follow-up."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Objective-focused synthesis of Maternal Adaptation, pages 26–33, and Prenatal Nursing Care, pages 2–3 and 18–29. Nutrient units, food handling, activity advice, medication precautions, and vaccine timing are clarified with the references below.",
    "answerSources": [
      {
        "title": "CDC — Pregnancy weight gain and energy needs",
        "url": "https://www.cdc.gov/maternal-infant-health/pregnancy-weight/"
      },
      {
        "title": "NIH Office of Dietary Supplements — Pregnancy nutrient requirements",
        "url": "https://ods.od.nih.gov/factsheets/pregnancy-healthprofessional/"
      },
      {
        "title": "CDC — Safer food choices during pregnancy",
        "url": "https://www.cdc.gov/food-safety/foods/pregnant-women.html"
      },
      {
        "title": "FDA/EPA — Fish choices and portions in pregnancy",
        "url": "https://www.fda.gov/food/consumers/questions-answers-fdaepa-advice-about-eating-fish-those-who-might-become-or-are-pregnant-or"
      },
      {
        "title": "ACOG — Exercise during pregnancy",
        "url": "https://www.acog.org/womens-health/faqs/exercise-during-pregnancy"
      },
      {
        "title": "ACOG — 2026 maternal immunization schedule",
        "url": "https://www.acog.org/clinical-information/maternal-immunization-schedule"
      },
      {
        "title": "CDC — Guidelines for vaccinating pregnant patients",
        "url": "https://www.cdc.gov/vaccines-pregnancy/hcp/vaccination-guidelines/"
      },
      {
        "title": "CDC Hear Her — Urgent maternal warning signs",
        "url": "https://www.cdc.gov/hearher/maternal-warning-signs/index.html"
      },
      {
        "title": "ACOG — Caffeine during pregnancy",
        "url": "https://www.acog.org/womens-health/experts-and-stories/ask-acog/how-much-coffee-can-i-drink-while-pregnant"
      },
      {
        "title": "Office on Women’s Health — Pregnancy and medicines",
        "url": "https://womenshealth.gov/a-z-topics/pregnancy-and-medicines"
      }
    ]
  },
  {
    "id": "high-risk-pregnancy-assessment",
    "weekIds": [
      "week-3"
    ],
    "topicIds": [],
    "title": "Assessing a high-risk pregnancy",
    "text": "Identify maternal and fetal factors that make a pregnancy high risk. Explain how assessment findings guide surveillance, referrals, patient education, and the nursing plan of care.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "A high-risk pregnancy has maternal, fetal, placental, or social factors that increase the chance of complications; risk can exist before conception or develop suddenly.",
          "Assess the patient first, then connect the findings to targeted maternal–fetal surveillance, specialist referral, teaching, and practical support.",
          "A risk factor calls for a plan, not a prediction of a poor outcome. Reassess throughout pregnancy, birth, and postpartum; escalate new warning signs immediately."
        ]
      },
      {
        "type": "group",
        "title": "Recognize maternal, fetal, and pregnancy-related risks",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Preexisting maternal factors",
                "text": "Diabetes, chronic hypertension, renal/cardiac disease, autoimmune disease, anemia, and relevant medications can alter pregnancy care. Review prior cesarean birth, preterm birth, preeclampsia, hemorrhage, losses, and an affected newborn."
              },
              {
                "label": "Conditions arising in pregnancy",
                "text": "Bleeding, hyperemesis, infection, gestational diabetes, hypertensive disorders, membrane rupture, and preterm labor may change a previously low-risk pregnancy. Age and BMI contribute to assessment but do not determine the entire plan."
              },
              {
                "label": "Fetal and placental factors",
                "text": "Multiple gestation, abnormal growth/anatomy, alloimmunization, abnormal fluid volume, and placental location/separation can require additional evaluation. Distinguish a screening concern from a confirmed diagnosis."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Assess the whole patient and prioritize the findings",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Current status",
                "text": "Establish gestational age, symptoms/onset, vital signs including BP and oxygen saturation when indicated, bleeding/fluid loss, pain, intake/output, and fetal movement/heart assessment appropriate to gestation. Instability takes priority over completing a routine history."
              },
              {
                "label": "Baseline and trends",
                "text": "Review CBC/platelets, blood group/antibody screen, glucose, urine/infection results, and renal/liver studies when indicated. Compare with prior results; a falling platelet count or worsening BP matters even before every diagnostic criterion is met."
              },
              {
                "label": "Social and safety assessment",
                "text": "Ask privately about violence, mood, substance exposure, food/housing insecurity, transportation, language, and ability to obtain medicines or attend visits. Assess actual barriers without labeling the patient “noncompliant.”"
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Match surveillance and referrals to the problem",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Maternal monitoring",
                "text": "Examples: glucose logs for diabetes; BP, symptoms, platelets, creatinine, and liver tests for hypertensive disease; quantified bleeding/CBC/coagulation studies for hemorrhage. Frequency increases with acuity."
              },
              {
                "label": "Fetal surveillance",
                "text": "Ultrasound assesses growth, anatomy, fluid, and placenta. A nonstress test (NST) evaluates fetal heart-rate reactivity; a biophysical profile (BPP) adds ultrasound assessment of movement, tone, breathing, and fluid. Doppler studies answer specific blood-flow questions."
              },
              {
                "label": "Coordinate care",
                "text": "Arrange obstetric/MFM review and condition-specific services such as endocrinology, dietetics, genetics, social work, or neonatal consultation. Explain what a test can and cannot answer and ensure results reach the responsible clinician."
              },
              {
                "label": "NST clarification",
                "text": "A reactive NST usually has at least two qualifying accelerations in 20 minutes, using gestational-age criteria. Observation may extend to 40 minutes for sleep. Nonreactive is not a diagnosis of hypoxia: assess the whole tracing and arrange further testing/clinical review as indicated."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Build and evaluate the nursing plan",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Priorities",
                "text": "Examples of nursing problems include impaired perfusion, risk for fluid-volume deficit, unstable glucose, infection risk, anxiety, and difficulty accessing care. Link each to the patient’s findings rather than using the same list for everyone."
              },
              {
                "label": "Actions and measurable goals",
                "text": "Set goals such as stable vital signs, adequate urine output, glucose within the prescribed range, reassuring fetal assessment, and a patient who can explain the escalation plan. Implement ordered treatment, reassess response, and communicate deterioration using SBAR."
              },
              {
                "label": "Teaching and support",
                "text": "Provide short instructions, written contact/triage details, teach-back, and support people chosen by the patient. Hospital observation may be necessary for complications; routine strict bed rest is not a proven treatment for every high-risk condition and can cause harm."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Apply it: a risk factor versus an emergency",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Controlled chronic hypertension without new symptoms → review the BP/medication plan, preeclampsia prevention eligibility, and scheduled maternal/fetal monitoring.",
              "Severe headache, visual changes, upper abdominal pain, or severe-range BP → prompt assessment and escalation for severe hypertension/preeclampsia.",
              "Bleeding with faintness, severe pain, chest pain, severe dyspnea, seizure, or reduced fetal movement → urgent/emergency assessment rather than waiting for the next visit."
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Synthesis of the Week 3 risks discussed throughout Antepartum Risks, pages 2–55, and Diabetes in Pregnancy, pages 2–26. Organized around assessment, surveillance, referral, and the nursing plan rather than implying a separate high-risk lecture was supplied. Final review clarification adds NST result interpretation without a universal testing schedule.",
    "answerSources": [
      {
        "title": "NICHD — High-risk pregnancy",
        "url": "https://www.nichd.nih.gov/health/topics/factsheets/high-risk"
      },
      {
        "title": "CDC Hear Her — Urgent maternal warning signs",
        "url": "https://www.cdc.gov/hearher/maternal-warning-signs/index.html"
      },
      {
        "title": "SMFM — Activity restriction in obstetric care",
        "url": "https://publications.smfm.org/publications/326-society-for-maternal-fetal-medicine-consult-series-50/"
      },
      {
        "title": "ACOG: NST interpretation and follow-up clarification",
        "url": "https://www.acog.org/womens-health/faqs/special-tests-for-monitoring-fetal-well-being"
      }
    ]
  },
  {
    "id": "early-pregnancy-complications",
    "weekIds": [
      "week-3"
    ],
    "topicIds": [],
    "title": "Early pregnancy complications",
    "text": "Compare pregnancy loss, ectopic pregnancy, gestational trophoblastic disease, cervical insufficiency, and hyperemesis. For each, identify the assessment cues, diagnostic approach, management, safety priorities, and support needs emphasized in the lecture.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Compare the pattern: pregnancy loss often causes bleeding/cramping; ectopic pregnancy can cause internal hemorrhage; molar pregnancy involves abnormal trophoblastic growth; cervical insufficiency may cause painless second-trimester dilation; hyperemesis causes inability to maintain intake.",
          "Use symptoms, vital signs, ultrasound, and appropriate laboratory trends together. Neither one hCG value nor an assumed “doubling” rule independently proves location or viability.",
          "Stabilize bleeding, infection, or dehydration first; then support informed treatment choices, follow-up, and grief care without blame."
        ]
      },
      {
        "type": "group",
        "title": "Pregnancy loss: distinguish the lecture terms",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Threatened versus inevitable",
                "text": "Threatened: bleeding, sometimes cramps, with a closed cervix and a pregnancy that may continue. Inevitable: cervical dilation with bleeding/cramping suggests loss is progressing. Confirm the clinical diagnosis; bleeding alone does not establish miscarriage."
              },
              {
                "label": "Complete versus incomplete",
                "text": "Complete: pregnancy tissue has passed and symptoms usually decrease. Incomplete: tissue remains, with ongoing bleeding/cramping and risk of hemorrhage or infection. Ultrasound and follow-up help confirm completion."
              },
              {
                "label": "Missed and septic loss",
                "text": "Missed loss: a nonviable pregnancy remains in the uterus, sometimes without bleeding. Septic loss: fever, uterine tenderness, foul discharge, or systemic illness requires urgent antibiotics and source control. Do not assume a rigid retained-tissue time predicts DIC."
              },
              {
                "label": "Recurrent loss",
                "text": "The slide uses three consecutive losses; contemporary assessment may begin after two losses. Ask about the full history and refer for individualized evaluation instead of waiting for a third event by rule."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Pregnancy loss: assessment, treatment, and follow-up",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Assess and confirm",
                "text": "Measure bleeding, pain, vital signs, and hemodynamic status; review CBC, blood type/antibodies, ultrasound, and hCG when indicated. A scan too early to be definitive may require a planned repeat before treatment."
              },
              {
                "label": "Management choices",
                "text": "If stable and appropriate, expectant care, prescribed medication, or uterine aspiration/evacuation may be offered according to diagnosis and preference. Hemorrhage, infection, or instability requires urgent intervention, IV access, and possible blood products."
              },
              {
                "label": "Nursing teaching",
                "text": "Explain expected cramping/bleeding, analgesia, how completion is confirmed, and when to return for heavy bleeding, syncope, fever, or worsening pain. Bed rest has not been shown to prevent an early loss. Review Rh prophylaxis using gestation and current protocol rather than an automatic rule for every early loss."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Ectopic pregnancy: recognize rupture and follow treatment",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Cues and risks",
                "text": "Amenorrhea/positive hCG with pelvic or one-sided pain and spotting may occur. Prior ectopic pregnancy, tubal damage/PID, tubal surgery, or assisted reproduction increases concern; absence of risk factors does not rule it out. Pregnancy with an IUD is uncommon, but if it occurs the location must be assessed."
              },
              {
                "label": "Diagnostic approach",
                "text": "Transvaginal ultrasound plus quantitative hCG trends and clinical assessment locate the pregnancy. A pregnancy of unknown location needs a follow-up plan. A single progesterone cutoff or failure to double hCG is not a definitive ectopic diagnosis."
              },
              {
                "label": "Rupture is an emergency",
                "text": "Sudden severe abdominal/shoulder pain, dizziness/syncope, tachycardia, or hypotension can indicate intraperitoneal hemorrhage with little vaginal bleeding. Activate urgent help, support circulation, and prepare for surgery; do not wait for serial laboratory results."
              },
              {
                "label": "Treatment and teaching",
                "text": "Selected stable, unruptured cases may receive methotrexate with eligibility assessment and reliable serial hCG follow-up; surgery is required for rupture/instability and other indications. After methotrexate, follow the team’s instructions on medicines, folic acid, alcohol, sex, and conception timing. Rupture remains possible until resolution."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Gestational trophoblastic disease: molar pregnancy and follow-up",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "What changes",
                "text": "Abnormal trophoblastic/placental proliferation can form swollen grape-like villi. Complete and partial moles differ; a partial mole may contain abnormal fetal tissue, so not every molar pregnancy is an “empty sac.”"
              },
              {
                "label": "Cues and diagnosis",
                "text": "Bleeding, unusually severe nausea, hCG higher than expected, uterine size inconsistent with dates, or preeclampsia unusually early in pregnancy raise concern. Ultrasound, hCG, and tissue pathology establish the diagnosis; the lecture hCG chart is illustrative, not a diagnostic cutoff."
              },
              {
                "label": "Management",
                "text": "Uterine evacuation is usual initial treatment for a mole. Chemotherapy is used for persistent/malignant disease and selected specialist indications, not automatically for every patient with a mole."
              },
              {
                "label": "Nursing priorities",
                "text": "Monitor bleeding and perioperative stability; provide loss support. Emphasize serial hCG until the specialist surveillance plan is complete and reliable contraception during that interval, because a new pregnancy obscures interpretation. Persistent/rising hCG requires review for gestational trophoblastic neoplasia."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Cervical insufficiency: painless dilation is the clue",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Assessment cues",
                "text": "Prior painless second-trimester losses/preterm birth, pelvic pressure, pink discharge, or painless cervical change raise concern. Transvaginal ultrasound measures cervical length; a short cervix and cervical insufficiency are related but not identical diagnoses."
              },
              {
                "label": "Clarify the slide cutoff",
                "text": "For an asymptomatic singleton pregnancy without prior spontaneous preterm birth, SMFM uses ≤25 mm in midpregnancy for a short cervix, not a universal <3-cm rule. History and actual dilation change management."
              },
              {
                "label": "Management and teaching",
                "text": "Selected patients may receive vaginal progesterone or a cerclage (cervical suture) based on history, ultrasound, and examination. Cerclage is not automatic for every short cervix or multiple pregnancy. Teach prompt reporting of contractions, bleeding, fluid leakage, or fever; confirm the follow-up/removal plan. Routine bed rest is not a substitute for surveillance."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Hyperemesis: restore hydration and nutrition safely",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Recognize and assess",
                "text": "Persistent severe vomiting with inability to eat/drink, weight loss, dehydration, or electrolyte abnormalities needs assessment beyond routine morning-sickness advice. Track intake/output, weight, orthostatic symptoms, electrolytes/renal function, and alternative causes. Ketonuria alone does not grade severity."
              },
              {
                "label": "Collaborative management",
                "text": "Give prescribed antiemetics, IV isotonic fluids, and electrolyte replacement guided by results and renal status. With prolonged vomiting or poor intake, thiamine is given before dextrose-containing fluids/nutrition to reduce Wernicke encephalopathy risk. Do not delay emergency glucose treatment for severe hypoglycemia."
              },
              {
                "label": "Escalation and evaluation",
                "text": "Resume tolerated small meals/fluids as symptoms improve. Dietitian input, enteral feeding, or occasionally parenteral nutrition may be needed when intake remains inadequate. Reassess urine output, weight, electrolytes, and ability to take medicines/fluids; address distress and access to treatment."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Family support and quick comparison",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Ask what language the patient prefers for the pregnancy/loss and whom they want involved. Explain uncertainty and choices in small steps; avoid “at least…” statements, blame, or a fixed timetable for grief.",
              "Bleeding + closed cervix does not automatically mean loss. Severe unilateral/shoulder pain + faintness means possible ruptured ectopic pregnancy and urgent stabilization.",
              "Painless second-trimester dilation suggests cervical insufficiency; persistent vomiting with poor intake requires hydration/nutrition assessment. Give a clear follow-up and emergency-return plan for each condition."
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Based on Antepartum Risks, pages 2–17, including the ectopic diagram, molar-tissue image, and illustrative hCG chart. Diagnostic shortcuts, routine bed rest/chemotherapy, cervical-length thresholds, and nutrition safety are clarified below.",
    "answerSources": [
      {
        "title": "ACOG — Early pregnancy loss",
        "url": "https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2018/11/early-pregnancy-loss"
      },
      {
        "title": "ACOG — Ectopic pregnancy",
        "url": "https://www.acog.org/womens-health/faqs/ectopic-pregnancy"
      },
      {
        "title": "National Cancer Institute — Gestational trophoblastic disease treatment",
        "url": "https://www.cancer.gov/types/gestational-trophoblastic/hp/gtd-treatment-pdq"
      },
      {
        "title": "SMFM — Short cervix: Consult Series 70",
        "url": "https://pubmed.ncbi.nlm.nih.gov/38754603/"
      },
      {
        "title": "RCOG — Nausea, vomiting, and hyperemesis: Green-top Guideline 69",
        "url": "https://doi.org/10.1111/1471-0528.17739"
      },
      {
        "title": "SMFM — Activity restriction in obstetric care",
        "url": "https://publications.smfm.org/publications/326-society-for-maternal-fetal-medicine-consult-series-50/"
      },
      {
        "title": "ASRM — Rh(D) immune globulin in the first trimester (2026)",
        "url": "https://www.asrm.org/practice-guidance/practice-committee-documents/position-statement-on-rhod-immune-globulin-administration-in-the-first-trimester-2026/"
      },
      {
        "title": "ACOG — Repeated miscarriages",
        "url": "https://www.acog.org/womens-health/faqs/Repeated-Miscarriages"
      }
    ]
  },
  {
    "id": "placental-bleeding",
    "weekIds": [
      "week-3"
    ],
    "topicIds": [
      "labor-emergencies"
    ],
    "title": "Placenta previa and placental abruption",
    "text": "Compare placenta previa and placental abruption using risk factors, bleeding, pain, uterine findings, and fetal assessment. Explain the diagnostic approach, precautions, and priorities for maternal and fetal safety.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Placenta previa covers the cervical opening and classically causes painless bright-red bleeding; placental abruption is premature placental separation, often with pain, tenderness, or a firm uterus.",
          "Bleeding may be concealed in abruption. Color, visible amount, or the absence of pain cannot independently establish or exclude either diagnosis.",
          "Assess maternal circulation and fetal status urgently. Do not perform a digital vaginal examination until previa has been excluded; prepare for hemorrhage management and possible urgent birth."
        ]
      },
      {
        "type": "group",
        "title": "Placenta previa: location, risks, and expected pattern",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Mechanism and terminology",
                "text": "Placenta overlies the internal cervical os; a low-lying placenta is near but not covering it. The lecture shows marginal/partial/complete categories; current assessment emphasizes ultrasound location and distance from the os."
              },
              {
                "label": "Risk factors",
                "text": "Prior previa, cesarean/uterine surgery, multiple gestation, smoking, and increasing maternal age are associated. Previa with prior cesarean birth also raises concern for placenta accreta spectrum and major hemorrhage."
              },
              {
                "label": "Typical findings",
                "text": "Recurrent painless bright-red bleeding in the second half of pregnancy; uterus often soft and nontender. Abnormal fetal lie may occur. Contractions or pain can coexist, so the classic pattern is a clue, not a rule."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Placental abruption: separation and hidden blood loss",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Mechanism and risks",
                "text": "Premature separation reduces placental exchange and causes hemorrhage. Prior abruption, hypertension/preeclampsia, trauma, smoking/cocaine exposure, and uterine overdistension increase concern. Avoid blaming the patient when discussing exposures."
              },
              {
                "label": "Typical findings",
                "text": "Sudden abdominal/back pain, uterine tenderness, frequent contractions or sustained firm/rigid tone, with or without vaginal bleeding. Blood may remain behind the placenta; visible bleeding can underestimate severity."
              },
              {
                "label": "Maternal and fetal effects",
                "text": "Maternal shock, DIC, and organ hypoperfusion; fetal distress, growth restriction with chronic disease, prematurity, or death. Worsening fetal heart rate or maternal status may be the first sign of severe concealed bleeding."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Diagnostic approach and examination precautions",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Ultrasound",
                "text": "Defines placental location; transvaginal ultrasound performed by trained staff is appropriate for assessing previa. A normal ultrasound does not rule out abruption, which is primarily a clinical diagnosis."
              },
              {
                "label": "Assess both patients",
                "text": "Vital signs, mentation, perfusion, pain/uterine tone, contractions, bleeding trend, and continuous fetal monitoring when appropriate. Obtain CBC/platelets, type and crossmatch, fibrinogen, PT/aPTT, and other ordered tests."
              },
              {
                "label": "Avoid provoking hemorrhage",
                "text": "No digital vaginal examination before previa is excluded. Communicate the suspected placental problem before anyone examines the cervix; a clinician may perform a carefully indicated sterile speculum assessment."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Nursing priorities: stabilize while the team evaluates",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Activate the obstetric team/hemorrhage response for significant bleeding or instability. Assess airway, breathing, circulation, gestational age, and fetal status concurrently.",
              "Quantify visible loss, maintain IV access (large-bore access for major bleeding), obtain ordered samples, prepare fluids/blood products, and trend vital signs and urine output. Do not delay resuscitation because the initial hemoglobin looks normal.",
              "Reposition to reduce aortocaval compression as tolerated, keep the patient warm, and provide oxygen for maternal hypoxemia or resuscitation needs; oxygen is not a routine treatment for an abnormal fetal tracing when maternal saturation is normal.",
              "Prepare for birth, anesthesia, neonatal support, and possible massive transfusion according to maternal/fetal status. Explain actions calmly and support consent and the patient’s chosen support person."
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Birth planning and evaluation",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Previa",
                "text": "A persistent placenta covering the os generally requires cesarean birth; timing depends on bleeding, labor, gestational age, and stability. A low-lying placenta has an individualized plan. Stable patients may have expectant care with clear return precautions."
              },
              {
                "label": "Abruption",
                "text": "Prompt delivery is often needed for significant abruption, maternal instability, or fetal compromise. Cesarean is not automatic in every case; fetal status, labor progress, bleeding, and coagulopathy guide the team’s decision."
              },
              {
                "label": "Evaluate and teach",
                "text": "Track perfusion, bleeding, labs, and fetal response through birth and postpartum. Teach immediate contact for new bleeding, pain, contractions, fluid loss, or decreased fetal movement. Pelvic/activity restrictions and observation are individualized; routine long-term strict bed rest is not a universal treatment."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Based on Antepartum Risks, pages 18–25, including the previa-location and concealed/apparent-abruption diagrams. Classic patterns are qualified; examination precautions, oxygen use, and individualized birth decisions are clarified.",
    "answerSources": [
      {
        "title": "ACOG — Bleeding during pregnancy",
        "url": "https://www.acog.org/womens-health/faqs/bleeding-during-pregnancy"
      },
      {
        "title": "ACOG — Intrapartum fetal heart rate monitoring guideline",
        "url": "https://journals.lww.com/greenjournal/fulltext/2025/10000/acog_clinical_practice_guideline_no_.22.aspx"
      },
      {
        "title": "SMFM — Activity restriction in obstetric care",
        "url": "https://publications.smfm.org/publications/326-society-for-maternal-fetal-medicine-consult-series-50/"
      }
    ]
  },
  {
    "id": "diabetes-assessment",
    "weekIds": [
      "week-3"
    ],
    "topicIds": [
      "pregnancy-complications"
    ],
    "title": "Diabetes: screening and assessment",
    "text": "Distinguish pregestational diabetes from gestational diabetes. Interpret the screening and diagnostic tests used in the course, and connect glucose control with maternal, fetal, and newborn risks.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Pregestational diabetes is type 1 or type 2 diabetes present before pregnancy; GDM is diabetes diagnosed later in pregnancy that is not clearly preexisting overt diabetes.",
          "Pregnancy progressively increases insulin resistance. Maternal glucose crosses the placenta, causing fetal insulin production; maternal insulin does not cross in clinically meaningful amounts.",
          "Know the course’s two-step testing: 50-g screen, then a fasting 100-g/3-hour OGTT when indicated. A positive screen is not the same as a diagnosis."
        ]
      },
      {
        "type": "group",
        "title": "Types, timing, and pregnancy metabolism",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Pregestational diabetes",
                "text": "Type 1 involves insulin deficiency; type 2 commonly involves insulin resistance with inadequate insulin secretion. Identify the diagnosis, current treatment, complications, and preconception control. Overt diabetes first recognized early in pregnancy may represent previously undiagnosed disease."
              },
              {
                "label": "GDM and A1/A2",
                "text": "GDM commonly becomes apparent at 24–28 weeks as placental hormones increase insulin resistance. A1GDM is managed without medication; A2GDM requires medication, often insulin, and is not defined only by one particular drug."
              },
              {
                "label": "Changing requirements",
                "text": "Early pregnancy nausea/increased insulin sensitivity can increase hypoglycemia risk. Insulin requirements often rise later and drop after placental delivery. Do not assume every patient needs less insulin at a fixed week near term; an unexpected change deserves review."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Step 1: screening and early assessment",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Routine timing",
                "text": "Screen for GDM at 24–28 weeks even when there are no symptoms. Risk factors include prior GDM, family history, elevated prepregnancy BMI, and prior macrosomia; assess the individual rather than relying on age alone."
              },
              {
                "label": "50-g glucose challenge",
                "text": "Usually a nonfasting drink followed by a 1-hour glucose level. Depending on the service, a cutoff of 130, 135, or 140 mg/dL triggers diagnostic testing. Explain the local instructions and that an abnormal screen needs follow-up."
              },
              {
                "label": "Early testing",
                "text": "Selected patients are assessed early for overt/preexisting diabetes and abnormal glucose metabolism. A normal early result does not automatically replace routine 24–28-week testing. Glycosuria alone is not diagnostic."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Step 2: interpret the course’s diagnostic OGTT",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "100-g, 3-hour test",
                "text": "Follow the laboratory’s fasting and preparation instructions; do not restrict carbohydrates to try to “pass.” Four blood samples are obtained: fasting, then 1, 2, and 3 hours after the glucose load."
              },
              {
                "label": "Carpenter–Coustan thresholds",
                "text": "Fasting 95; 1 hour 180; 2 hours 155; 3 hours 140 mg/dL. Values AT OR ABOVE the thresholds are abnormal. At least two of the FOUR values are generally required under this approach; the slide’s “two out of three” is an error."
              },
              {
                "label": "Apply it",
                "text": "Fasting 97, 1 hour 185, 2 hours 150, 3 hours 135 → fasting and 1 hour are abnormal: two abnormal results meet the course’s two-step criteria. A 1-hour screening result of 145 alone is not this diagnostic test."
              },
              {
                "label": "Keep protocols separate",
                "text": "Some services use a one-step 75-g OGTT with different thresholds and only one abnormal value needed. Do not apply 100-g criteria to that test. HbA1c helps assess longer-term control/preexisting diabetes but does not replace the usual GDM OGTT."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Connect glucose exposure to maternal, fetal, and newborn risks",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Maternal risks",
                "text": "Hypoglycemia during treatment; DKA with insulin deficiency; infection, preeclampsia, polyhydramnios, and operative birth. Preexisting renal/retinal disease needs condition-specific assessment."
              },
              {
                "label": "Early fetal exposure",
                "text": "Poor control during organ formation in pregestational/overt diabetes raises miscarriage and congenital anomaly risks. GDM first arising after organogenesis is not automatically associated with the same early-malformation mechanism."
              },
              {
                "label": "Later fetal effects",
                "text": "Excess glucose → fetal hyperinsulinemia → increased growth/adiposity, macrosomia and shoulder-dystocia/birth-injury risk. Maternal vascular disease can instead cause placental insufficiency and fetal growth restriction; not every fetus is large."
              },
              {
                "label": "After birth",
                "text": "Placental glucose supply stops while the newborn’s insulin may remain high → neonatal hypoglycemia. Respiratory distress, polycythemia, and hyperbilirubinemia may also occur; risk depends on the whole clinical picture, not a guaranteed outcome."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Nursing assessment and diagnostic limits",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Review the pattern",
                "text": "Assess fasting/meal-related glucose, treatment, food intake, hypoglycemia episodes, illness/ketones when indicated, weight trend, BP, and fetal growth. Ask about access to supplies and ability to use a meter or CGM."
              },
              {
                "label": "Do not wait for classic symptoms",
                "text": "GDM often has no symptoms. Polyuria/polydipsia or recurrent infections merit review; vomiting, abdominal pain, rapid breathing, dehydration, or altered consciousness raises concern for DKA even with less dramatic hyperglycemia in pregnancy."
              },
              {
                "label": "Follow through",
                "text": "Communicate abnormal screens, arrange diagnostic testing, document the diagnosis/plan clearly, and connect to diabetes education, nutrition, and obstetric/MFM care. Explain that diagnosis guides prevention and support rather than reflecting personal failure."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Based on Diabetes in Pregnancy, pages 2–14 and 20–24. Clarifies four diagnostic samples, threshold equality, GDM medication categories, timing of fetal risk, and screening versus diagnosis.",
    "answerSources": [
      {
        "title": "ADA — Management of diabetes in pregnancy: Standards of Care 2026",
        "url": "https://diabetesjournals.org/care/article/49/Supplement_1/S321/163918/15-Management-of-Diabetes-in-Pregnancy-Standards"
      },
      {
        "title": "USPSTF — Gestational diabetes screening",
        "url": "https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/gestational-diabetes-screening"
      },
      {
        "title": "ADA — 2026 pregnancy care summary",
        "url": "https://diabetesjournals.org/docm-care/article/doi/10.2337/doc26-a015/164617/Section-15-Management-of-Diabetes-in-Pregnancy"
      }
    ]
  },
  {
    "id": "diabetes-nursing-management",
    "weekIds": [
      "week-3"
    ],
    "topicIds": [
      "pregnancy-complications"
    ],
    "title": "Diabetes: nursing care and teaching",
    "text": "Explain glucose monitoring, nutrition, activity, prescribed medication, and fetal surveillance in a pregnancy complicated by diabetes. Recognize hypo- and hyperglycemia, prioritize interventions, and describe intrapartum and postpartum follow-up.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Coordinate glucose monitoring, adequate nutrition/activity, prescribed medication, and fetal surveillance; individualize targets and adjust treatment as pregnancy changes.",
          "Treat hypoglycemia promptly and recognize possible DKA as an emergency. In type 1 diabetes, essential insulin must not be stopped simply because the patient is vomiting or not eating.",
          "Plan for frequent glucose checks during labor, a marked fall in insulin needs after birth, newborn glucose/feeding assessment, and postpartum diabetes testing after GDM."
        ]
      },
      {
        "type": "group",
        "title": "Monitoring: connect the number to its timing",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Common pregnancy targets",
                "text": "Typical goals are fasting <95 mg/dL, 1-hour after meals <140, or 2-hour after meals <120. The team individualizes goals to avoid significant hypoglycemia; do not confuse these treatment goals with diagnostic OGTT thresholds."
              },
              {
                "label": "Schedule and technique",
                "text": "Check fasting and postmeal glucose as prescribed; insulin-treated/preexisting diabetes may also require premeal, bedtime, overnight, or symptom checks. Teach correct meter use, CGM interpretation, and when a fingerstick confirmation is needed."
              },
              {
                "label": "Log and report",
                "text": "Record readings with meal timing, medicine doses, activity, illness, and symptoms. Discuss patterns rather than one isolated number; repeated out-of-range results need timely review, not independent dose changes unless a written adjustment plan exists."
              },
              {
                "label": "HbA1c context",
                "text": "HbA1c complements glucose logs in preexisting diabetes. A pregnancy goal near <6% may be used if achievable without significant hypoglycemia; the team relaxes the goal when necessary for safety. Preconception goals commonly aim for <6.5% to reduce early fetal risk."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Nutrition and activity without underfeeding",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Nutrition plan",
                "text": "Refer to a dietitian for adequate pregnancy energy, carbohydrate, protein, and micronutrients. Distribute carbohydrate across meals/snacks, choose fiber-rich foods, and pair foods thoughtfully; avoid starvation or a ketogenic diet to lower readings."
              },
              {
                "label": "Activity",
                "text": "Use safe, tolerated activity after obstetric review; a postmeal walk may help glucose control. Bleeding, membrane rupture, preterm symptoms, or other complications may change the plan. Have rapid-acting carbohydrate available if taking insulin."
              },
              {
                "label": "Practical support",
                "text": "Adapt to culture, work schedule, nausea, food access, and cost of supplies. Teach that insulin may be needed despite careful nutrition; treatment escalation is not a moral failure. The slide’s fixed calorie/macronutrient recipe is not a universal prescription."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Medication teaching and changing insulin needs",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Insulin",
                "text": "Preferred pharmacologic treatment for many pregnancies complicated by diabetes, and essential for type 1. Teach the exact product, units, route, timing, injection/storage technique, and device use; verify insulin orders carefully and use the prescribed pump/pen protocol."
              },
              {
                "label": "Match insulin and food",
                "text": "Rapid-acting lispro/aspart is coordinated closely with meals; regular insulin has a different onset; NPH has a later peak that can cause delayed/overnight hypoglycemia. Product/action tables are approximate, not interchangeable dosing instructions."
              },
              {
                "label": "Other agents",
                "text": "ADA recommends insulin as first-line medication in pregnancy; metformin and glyburide cross the placenta and are not recommended as first-line agents. Some protocols use metformin after individualized counseling, and insulin may still be needed. Review all diabetes and comorbidity medicines with the obstetric/endocrine team; do not assume the slide’s blanket medication-approval statement is accurate."
              },
              {
                "label": "Dose changes",
                "text": "Requirements often rise later in pregnancy and fall rapidly postpartum; illness, steroids, intake, and activity also affect them. An unexpected sustained decrease late in pregnancy needs clinical review rather than automatic reassurance."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Hypoglycemia: recognize, treat, and reassess",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Cues",
                "text": "Sweating, tremor, hunger, palpitations, headache, irritability, confusion, or seizure. Check glucose promptly; do not assume dizziness or altered behavior is “just pregnancy.”"
              },
              {
                "label": "Awake and safe to swallow",
                "text": "For glucose <70 mg/dL, follow the prescribed plan; the common 15–15 approach gives 15 g of fast-acting carbohydrate, rechecks in 15 minutes, and repeats if still low. Follow with a meal/snack as appropriate once corrected."
              },
              {
                "label": "Unsafe to swallow or unconscious",
                "text": "Call emergency help, protect airway, and give prescribed glucagon or IV dextrose per protocol. Give nothing by mouth. Reassess glucose and neurologic status; investigate the cause and revise the prevention plan."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Hyperglycemia, illness, and DKA",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Recognize risk",
                "text": "Thirst/polyuria may occur with hyperglycemia. Vomiting, abdominal pain, dehydration, fruity breath, rapid/deep breathing, or altered consciousness suggests DKA, which can occur at lower glucose levels in pregnancy."
              },
              {
                "label": "Sick-day teaching",
                "text": "Use the team’s plan for more frequent glucose and ketone checks, fluids/carbohydrate intake, and when to call. Never stop basal insulin in type 1 diabetes without a supervised replacement plan; inability to keep fluids down or positive/rising ketones requires prompt assessment."
              },
              {
                "label": "Emergency nursing priorities",
                "text": "Escalate immediately; assess circulation, electrolytes/ketones and acid–base status, and fetal status as appropriate. Administer ordered IV fluids, insulin, and electrolyte replacement with close monitoring. Treat maternal metabolic instability rather than waiting for glucose to become extremely high."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Fetal surveillance and intrapartum care",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Before birth",
                "text": "Growth/fluid ultrasound and NST/BPP are selected by diabetes type, control, medication use, vascular disease, and other risks. Detailed anatomy assessment and sometimes fetal echocardiography are indicated by the preexisting-diabetes plan."
              },
              {
                "label": "During labor",
                "text": "Follow the unit’s frequent glucose-check schedule, prescribed insulin/dextrose protocol, fetal monitoring, and intake plan. Coordinate changes in eating, labor energy use, and medication; prevent both maternal hypoglycemia and sustained hyperglycemia."
              },
              {
                "label": "Prepare the newborn team",
                "text": "Communicate diabetes type, medicines, control, and birth concerns. Anticipate feeding support, early newborn glucose monitoring per protocol, and assessment for respiratory distress or birth injury. Birth timing/mode is individualized rather than automatic cesarean for diabetes."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Postpartum and long-term follow-up",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "After placental delivery",
                "text": "Insulin resistance drops; preexisting diabetes requires prompt dose reassessment, and GDM medication is often discontinued with glucose monitoring unless persistent diabetes is present. Type 1 diabetes still requires insulin."
              },
              {
                "label": "Feeding support",
                "text": "Breastfeeding is encouraged when desired and medically appropriate. Review medicine compatibility and maternal food/snack needs, glucose checks, and hypoglycemia prevention during feeds."
              },
              {
                "label": "After GDM",
                "text": "Arrange a fasting 75-g OGTT at 4–12 weeks postpartum using NONPREGNANCY criteria, then lifelong diabetes screening at least every 1–3 years. A normal newborn or a normal single maternal reading does not replace this test."
              },
              {
                "label": "Evaluate understanding",
                "text": "Use teach-back for meter/insulin technique, low-glucose treatment, sick-day escalation, postpartum appointments, and future pregnancy planning. Include chosen support people with consent."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Based on Diabetes in Pregnancy, pages 5–8 and 15–26. Targets, oral-agent wording, hypoglycemia treatment, sick-day safety, postpartum insulin changes, and GDM follow-up are clarified using current diabetes guidance.",
    "answerSources": [
      {
        "title": "ADA — Management of diabetes in pregnancy: Standards of Care 2026",
        "url": "https://diabetesjournals.org/care/article/49/Supplement_1/S321/163918/15-Management-of-Diabetes-in-Pregnancy-Standards"
      },
      {
        "title": "ADA — 2026 pregnancy care summary",
        "url": "https://diabetesjournals.org/docm-care/article/doi/10.2337/doc26-a015/164617/Section-15-Management-of-Diabetes-in-Pregnancy"
      },
      {
        "title": "ADA — Glucose targets and monitoring in pregnancy (2026)",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12690181/"
      },
      {
        "title": "ADA — Symptoms and treatment of hypoglycemia",
        "url": "https://diabetes.org/living-with-diabetes/hypoglycemia-low-blood-glucose/symptoms-treatment"
      }
    ]
  },
  {
    "id": "hypertensive-disorders",
    "weekIds": [
      "week-3"
    ],
    "topicIds": [
      "pregnancy-complications"
    ],
    "title": "Hypertension and preeclampsia",
    "text": "Compare chronic hypertension, gestational hypertension, and preeclampsia. Identify concerning symptoms, severe features, laboratory findings, maternal and fetal complications, and nursing priorities.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Chronic hypertension predates pregnancy or is identified before 20 weeks; gestational hypertension begins after 20 weeks without preeclampsia findings; preeclampsia adds proteinuria or qualifying organ dysfunction.",
          "Preeclampsia does not require proteinuria when other diagnostic features are present. Severe BP or neurologic, hepatic, renal, hematologic, or pulmonary findings need urgent assessment.",
          "Prioritize accurate BP, symptom/lab trends, maternal–fetal surveillance, prompt treatment of severe hypertension, seizure prevention when indicated, and a birth/postpartum plan."
        ]
      },
      {
        "type": "group",
        "title": "Classify the disorder and recognize overlap",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Chronic hypertension",
                "text": "Present before pregnancy or diagnosed before 20 weeks; persistence beyond the usual postpartum resolution period (about 12 weeks) supports chronic disease. The slide’s 42-day boundary is not the standard definition."
              },
              {
                "label": "Gestational hypertension",
                "text": "New BP elevation after 20 weeks without proteinuria or qualifying organ dysfunction. It can progress to preeclampsia; severe-range pressures are managed urgently and may be classified/managed as severe-feature disease."
              },
              {
                "label": "Preeclampsia and superimposed disease",
                "text": "New hypertension after 20 weeks with proteinuria OR specified organ dysfunction. A patient with chronic hypertension can develop superimposed preeclampsia, such as new organ dysfunction or a substantial change in the clinical picture. It can also first present postpartum."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Diagnostic assessment: use correct measurements and units",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Blood pressure",
                "text": "Systolic ≥140 OR diastolic ≥90 mm Hg on appropriate repeat measurements (usually at least 4 hours apart for nonsevere readings). Use the correct cuff and technique; either number can meet the threshold."
              },
              {
                "label": "Severe pressure",
                "text": "Systolic ≥160 OR diastolic ≥110 needs immediate escalation and prompt repeat confirmation, often within about 15 minutes if persistent. Do not wait the slide’s 6 hours. Ordered treatment should occur as soon as possible, within 30–60 minutes of confirmed severe hypertension."
              },
              {
                "label": "Protein and organ tests",
                "text": "Proteinuria: ≥300 mg/24 hours or urine protein/creatinine ratio ≥0.3; dipstick is a less reliable fallback. Evaluate CBC/platelets, creatinine, AST/ALT, symptoms, and oxygenation; urine protein concentration in mg/L is not interchangeable with a 24-hour total."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Severe features and findings that need escalation",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Neurologic and pulmonary",
                "text": "Persistent severe headache not explained/responding to treatment, visual disturbance, altered mental state, seizure, or pulmonary edema. Assess respiratory effort, saturation, lung sounds, and chest/breathing symptoms."
              },
              {
                "label": "Hepatic, renal, and hematologic",
                "text": "Persistent right-upper-quadrant/epigastric pain, AST/ALT about twice the upper limit of normal, platelets <100,000/µL, or creatinine >1.1 mg/dL/doubling without another renal cause are key severe-feature criteria. Follow trends and local reference ranges."
              },
              {
                "label": "Avoid false reassurance",
                "text": "A large protein quantity is not required to define severe disease; edema alone is not diagnostic. New symptoms or a falling platelet count need review even when the BP is not dramatically high. HELLP can occur without the classic full presentation."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Why mother and fetus are at risk",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Maternal mechanism",
                "text": "Placental dysfunction, endothelial injury, vasoconstriction, and capillary leak can impair organ perfusion despite edema. This is more than an isolated high BP reading."
              },
              {
                "label": "Complications",
                "text": "Stroke, eclampsia, pulmonary edema, kidney/liver injury, HELLP, DIC, and abruption. Excess IV fluid can worsen pulmonary edema; assess intake/output and perfusion rather than assuming swelling means adequate circulating volume."
              },
              {
                "label": "Fetal effects",
                "text": "Uteroplacental insufficiency can cause growth restriction, low fluid, hypoxemia, and stillbirth; medically indicated preterm birth adds prematurity risks. Ultrasound growth/fluid and indicated fetal testing guide the plan."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Nursing care, prevention, and follow-up",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Ongoing assessment",
                "text": "Trend BP, headache/vision/pain, reflexes/mentation, respirations, urine output, and laboratory findings. Monitor fetal status as indicated, document clearly, and communicate changes promptly."
              },
              {
                "label": "Prevention and medicines",
                "text": "Eligible high-risk patients may be prescribed low-dose aspirin 81 mg/day starting at 12–28 weeks, ideally before 16 weeks. It is prevention, not rescue treatment. Use prescribed pregnancy-appropriate antihypertensives; magnesium prevents/treats seizures rather than replacing BP control."
              },
              {
                "label": "Birth planning",
                "text": "Delivery of the placenta is central to definitive management, but stabilization comes first. Timing depends on gestational age, severe features, and maternal/fetal status; do not delay indicated birth just to finish steroids. Selected nonsevere cases can be monitored closely as outpatients."
              },
              {
                "label": "Postpartum safety",
                "text": "Risk does not disappear immediately after birth. Guideline clarification: arrange BP review within 72 hours for severe hypertension and by 7–10 days postpartum for other hypertensive disorders. Seek urgent care for headache, visual symptoms, upper abdominal pain, chest pain/dyspnea, or seizure. Maintain long-term cardiovascular follow-up."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Based on Antepartum Risks, pages 30–38. Corrects mandatory-proteinuria/severe-protein assumptions, repeat-BP timing, postpartum definition, and routine bed-rest/high-protein treatment shortcuts. Final review clarification specifies early postpartum BP-review windows.",
    "answerSources": [
      {
        "title": "ACOG — Preeclampsia and high blood pressure",
        "url": "https://www.acog.org/womens-health/faqs/preeclampsia-and-high-blood-pressure-during-pregnancy"
      },
      {
        "title": "ACOG — Emergency treatment of severe hypertension",
        "url": "https://pubmed.ncbi.nlm.nih.gov/30575639/"
      },
      {
        "title": "ACOG — Low-dose aspirin during pregnancy",
        "url": "https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2018/07/low-dose-aspirin-use-during-pregnancy"
      },
      {
        "title": "SMFM — Activity restriction in obstetric care",
        "url": "https://publications.smfm.org/publications/326-society-for-maternal-fetal-medicine-consult-series-50/"
      },
      {
        "title": "ACOG — Gestational hypertension and preeclampsia bulletin",
        "url": "https://pubmed.ncbi.nlm.nih.gov/32443079/"
      },
      {
        "title": "ACOG: postpartum BP-review timing clarification",
        "url": "https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2018/05/optimizing-postpartum-care"
      }
    ]
  },
  {
    "id": "eclampsia-magnesium-hellp",
    "weekIds": [
      "week-3"
    ],
    "topicIds": [
      "pregnancy-complications"
    ],
    "title": "Eclampsia, HELLP, and medication safety",
    "text": "Recognize eclampsia and HELLP syndrome and explain immediate nursing priorities. Describe seizure precautions, prescribed antihypertensive and magnesium therapy, toxicity assessment, emergency response, and evaluation of treatment.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Eclampsia is a new seizure associated with a hypertensive pregnancy disorder without another explanation; it is an emergency during pregnancy, birth, or postpartum.",
          "Magnesium sulfate prevents/treats seizures; antihypertensives treat severe BP. Monitor breathing, reflexes, consciousness, urine output, and ordered magnesium levels for toxicity.",
          "HELLP = hemolysis, elevated liver enzymes, and low platelets. Stabilize the patient, escalate organ dysfunction/bleeding, and prepare for the multidisciplinary birth plan."
        ]
      },
      {
        "type": "group",
        "title": "During a seizure: protect oxygenation and prevent injury",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Call for emergency/obstetric help and note the seizure onset, duration, and observed features. Stay with the patient; support a side-lying position when feasible and protect from injury.",
              "Do not restrain the limbs or place anything in the mouth. Clear the surrounding area, support airway/ventilation, and provide oxygen/suction as clinically indicated and safe.",
              "Give prescribed magnesium and urgent BP treatment per emergency protocol. Assess glucose and other causes as the team directs; persistent/recurrent seizures require additional emergency management.",
              "After the seizure, reassess consciousness, breathing, saturation, BP, injury/aspiration risk, and fetal status. Stabilize the mother before deciding timing/mode of birth; cesarean is not automatic solely because a seizure occurred."
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Magnesium therapy: indication and safe administration",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Purpose",
                "text": "First-line seizure prophylaxis for indicated severe preeclampsia and treatment of eclampsia. A different indication is fetal neuroprotection with anticipated very preterm birth; it is not a routine long-term tocolytic."
              },
              {
                "label": "Administration",
                "text": "Use the ordered concentration, pump, loading time, and maintenance rate; verify calculations and line compatibility. Common obstetric regimens use a 4–6-g loading dose followed by 1–2 g/hour, but exact infusion timing and renal adjustments follow the product/unit protocol. Do not copy a rapid 5-minute slide bolus as a universal order."
              },
              {
                "label": "Renal safety",
                "text": "Magnesium is cleared by the kidneys. Oliguria/renal dysfunction increases toxicity risk and may require lower dosing and serum levels. Include magnesium carrier fluid in the total fluid balance."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Monitor effect and distinguish toxicity",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Routine bedside assessment",
                "text": "Measure respiratory rate/effort and saturation, deep-tendon reflexes, level of consciousness, BP/pulse, and urine output at protocol intervals. Monitor fetal status and obtain ordered serum magnesium, creatinine, and other labs."
              },
              {
                "label": "Concerning changes",
                "text": "Absent/decreasing reflexes, respiratory depression, increasing somnolence/weakness, hypotension, or oliguria require prompt action. Common escalation thresholds include respirations <12/min or urine output <25–30 mL/hour; follow the unit’s stricter hold parameters and do not wait for those limits if the patient deteriorates."
              },
              {
                "label": "Do not rely on one blood level",
                "text": "Check units and the ordered therapeutic range; magnesium concentration supports assessment but does not replace the clinical examination. Flushing/warmth can occur with infusion, but decreased breathing or absent reflexes must not be dismissed as expected discomfort."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Suspected magnesium toxicity: stop, call, support",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Stop the magnesium infusion and call the obstetric/emergency team; assess airway, breathing, pulse, and consciousness immediately.",
              "Support ventilation/oxygenation and resuscitation as needed. Prepare and administer the ordered antidote, calcium gluconate, according to the emergency protocol; ensure it is readily available during treatment.",
              "Obtain ordered magnesium/renal/electrolyte studies, review urine output and infusion dose, and continue maternal/fetal monitoring. Document the response and do not restart until the team reassesses the plan."
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "HELLP: connect each letter with the evidence",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "H — hemolysis",
                "text": "Microangiopathic red-cell destruction: falling hemoglobin with evidence such as elevated LDH/indirect bilirubin or abnormal smear. Anemia alone does not prove hemolysis."
              },
              {
                "label": "EL — elevated liver enzymes",
                "text": "AST/ALT elevation with possible right-upper-quadrant/epigastric pain, nausea/vomiting, or malaise signals hepatic injury. Severe pain can precede worsening laboratory values."
              },
              {
                "label": "LP — low platelets",
                "text": "A platelet count <100,000/µL is a common complete-HELLP criterion; criteria/classification vary. A count <150,000 is abnormal in some contexts but is not by itself a diagnosis of HELLP."
              },
              {
                "label": "Immediate care",
                "text": "Urgent obstetric/MFM, anesthesia, and blood-bank involvement; trend CBC/platelets, renal/liver tests, hemolysis and coagulation studies. Watch for DIC, hemorrhage, hepatic complications, pulmonary edema, and renal injury. Prepare for delivery after stabilization as indicated."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Antihypertensives and evaluation of the response",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Severe BP treatment",
                "text": "Prescribed IV labetalol, IV hydralazine, or immediate-release oral nifedipine are commonly used for acute severe hypertension. Give by the unit’s algorithm and reassess BP/heart rate and adverse effects; oral immediate-release nifedipine is not given sublingually."
              },
              {
                "label": "Seizure and medication checks",
                "text": "Evaluate for recurrent seizure, respiratory/reflex stability, urine output, and improvement in BP without excessive hypotension. Continue surveillance postpartum; magnesium duration is ordered individually and often continues for about 24 hours after birth/seizure."
              },
              {
                "label": "Apply it",
                "text": "A patient on magnesium has a respiratory rate of 8/min and absent patellar reflexes → stop the infusion, summon help, support breathing, and prepare calcium gluconate. Do not increase magnesium because the original diagnosis involved hyperreflexia."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Based on Antepartum Risks, pages 30–38. Separates BP control from seizure control, qualifies loading-dose timing and laboratory ranges, and corrects the slide’s nonspecific HELLP platelet cutoff.",
    "answerSources": [
      {
        "title": "ACOG — Preeclampsia and high blood pressure",
        "url": "https://www.acog.org/womens-health/faqs/preeclampsia-and-high-blood-pressure-during-pregnancy"
      },
      {
        "title": "ACOG — Emergency treatment of severe hypertension",
        "url": "https://pubmed.ncbi.nlm.nih.gov/30575639/"
      },
      {
        "title": "DailyMed — Magnesium sulfate in dextrose: prescribing information",
        "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=03ebeabb-8386-4af4-3086-bdf3c3fc4a5a"
      }
    ]
  },
  {
    "id": "pregnancy-prom-preterm",
    "weekIds": [
      "week-3"
    ],
    "topicIds": [],
    "title": "Membrane rupture and preterm risk",
    "text": "Distinguish PROM, PPROM, and preterm labor. Identify assessment findings and infection risks, explain diagnostic precautions and collaborative management, and describe patient teaching about when to seek care.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "PROM means membranes rupture before labor; PPROM is PROM before 37 weeks. Preterm labor means labor with cervical change before 37 weeks and can occur with intact or ruptured membranes.",
          "A gush or persistent watery leakage needs assessment of maternal vital signs, infection, fetal heart rate, gestational age, and possible cord prolapse. Avoid unnecessary digital examinations.",
          "Management balances prematurity against infection and maternal/fetal compromise. Steroids, latency antibiotics, GBS prophylaxis, magnesium neuroprotection, and tocolysis have different indications."
        ]
      },
      {
        "type": "group",
        "title": "Separate the terms and recognize presenting cues",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "PROM and PPROM",
                "text": "Prelabor rupture can occur at term (≥37 weeks) or preterm (<37 weeks). The membrane status and gestational age must both be documented; “PROM” does not always mean preterm."
              },
              {
                "label": "Preterm labor",
                "text": "Regular contractions with cervical change before 37 weeks. Pelvic pressure, persistent low backache, menstrual-like cramps, increased discharge, spotting, or leakage may be early cues. A contraction count by itself does not confirm labor."
              },
              {
                "label": "Shared risks",
                "text": "Ascending infection, preterm birth, abruption, and cord prolapse/compression after rupture. Prolonged severe low fluid very early in pregnancy can impair lung development; risk varies with gestation, residual fluid, and duration."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Assess suspected rupture without increasing risk",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "History and first checks",
                "text": "Ask when leakage began, amount/color/odor, contractions, bleeding, fever, fetal movement, and gestational age. Assess vital signs, uterine tenderness, and fetal heart rate promptly; new bradycardia after a gush requires urgent evaluation for cord complications."
              },
              {
                "label": "Confirm membrane status",
                "text": "A clinician uses a sterile speculum exam for pooling/leakage and tests such as ferning or pH when appropriate. Blood, semen, infection, or sampling problems can affect tests; an equivocal result requires clinical follow-up rather than certainty from nitrazine alone."
              },
              {
                "label": "Precautions and added assessment",
                "text": "Avoid routine/repeated digital cervical examinations unless needed for an imminent birth or specific emergency. Ultrasound assesses fluid, presentation, growth, and other concerns but does not alone prove/exclude rupture; obtain ordered infection/GBS studies."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Collaborative management depends on gestation and stability",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Term PROM",
                "text": "Birth/induction is generally recommended, with GBS antibiotics when indicated and individualized counseling if a short period of expectant care is considered. Do not give antibiotics to every term patient solely because membranes have ruptured."
              },
              {
                "label": "PPROM before 34 weeks",
                "text": "If no contraindication exists, expectant inpatient management commonly includes surveillance, a course of corticosteroids, and latency antibiotics. Late-preterm PPROM (34–36 weeks 6 days) may be managed with delivery or selected expectant care after counseling; the plan is not simply “wait until term” for everyone."
              },
              {
                "label": "Very early PPROM",
                "text": "Periviable/previable rupture requires individualized counseling about maternal risks, fetal prognosis, resuscitation goals, and pregnancy-management options, including ending the pregnancy or expectant care when appropriate. Do not promise that the leak will seal or that waiting guarantees fetal benefit."
              },
              {
                "label": "When waiting is unsafe",
                "text": "Suspected intra-amniotic infection, significant abruption/bleeding, maternal deterioration, cord prolapse, or nonreassuring fetal status requires prompt escalation and often delivery. Fever, uterine tenderness, foul fluid, or maternal/fetal tachycardia warrants evaluation; no single sign/lab is the entire diagnosis."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Know what each medication is intended to do",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Corticosteroids",
                "text": "Speed fetal maturation when preterm birth is likely within 7 days, commonly at 24–33 weeks 6 days, with selected earlier/later indications. They are not restricted to >32 weeks as the slide suggests; do not delay indicated birth to finish a course. Monitor glucose, especially with diabetes."
              },
              {
                "label": "Antibiotics",
                "text": "Latency antibiotics reduce infection/prolong latency in selected PPROM; GBS prophylaxis protects the newborn during labor; treatment antibiotics address suspected infection. These purposes/regimens differ and one does not automatically replace another."
              },
              {
                "label": "Magnesium and tocolysis",
                "text": "Magnesium may be used for fetal neuroprotection with anticipated very preterm birth, generally before 32 weeks. Tocolytics may briefly delay selected preterm labor to permit steroids/transfer; they are not used when prolonging pregnancy is unsafe and are not routine maintenance therapy."
              },
              {
                "label": "Medication safety",
                "text": "Nifedipine and other agents are selected by the clinical situation. Do not teach prolonged/outpatient terbutaline or long-term magnesium as a standard prevention plan; follow maternal monitoring and gestational-age-specific orders."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Nursing follow-up and return precautions",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Trend temperature, pulse/BP, uterine tenderness/contractions, fluid/bleeding, fetal heart rate, and movement. Provide perineal care, document fluid characteristics, and limit unnecessary vaginal procedures.",
              "Teach immediate contact for fever, foul fluid, increasing pain, bleeding, contractions, or reduced fetal movement; suspected rupture needs assessment even if the leakage later seems to stop.",
              "Explain the monitoring/medication plan, possible neonatal needs, and transfer/birth preparation. Use the team’s individualized activity/sexual guidance; routine strict bed rest is not a proven way to prevent preterm birth.",
              "Apply it: watery leakage at 30 weeks with no contractions = possible PPROM, not proof of labor. Leakage plus fever, uterine tenderness, and fetal tachycardia means urgent evaluation for infection, not routine continued waiting."
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Based on Antepartum Risks, pages 26–29. Clarifies prelabor terminology, diagnostic-test limitations, infection evaluation, gestational windows, medication purposes, and the limits of routine bed rest or prolonged tocolysis.",
    "answerSources": [
      {
        "title": "ACOG — Prelabor rupture of membranes",
        "url": "https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2020/03/prelabor-rupture-of-membranes"
      },
      {
        "title": "ACOG — Preterm labor and birth",
        "url": "https://www.acog.org/womens-health/faqs/preterm-labor-and-birth"
      },
      {
        "title": "SMFM — Previable and periviable PPROM: Consult Series 71",
        "url": "https://publications.smfm.org/publications/573-society-for-maternal-fetal-medicine-consult-series-71/"
      },
      {
        "title": "SMFM — Activity restriction in obstetric care",
        "url": "https://publications.smfm.org/publications/326-society-for-maternal-fetal-medicine-consult-series-50/"
      }
    ]
  },
  {
    "id": "rh-abo-infections",
    "weekIds": [
      "week-3"
    ],
    "topicIds": [],
    "title": "Alloimmunization and infection prevention",
    "text": "Explain Rh and ABO incompatibility, screening, and indicated prevention. Review the pregnancy and newborn implications of the infections discussed in class, including GBS and TORCH infections, and the nurse’s teaching and prevention responsibilities.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Rh alloimmunization can occur when an Rh-negative patient forms antibodies after exposure to Rh-positive red cells; antibodies may cross the placenta and cause fetal/newborn hemolysis.",
          "Screen maternal blood type and antibodies, give indicated anti-D prophylaxis to an unsensitized eligible patient, and coordinate specialist/newborn monitoring when antibodies are present. ABO incompatibility has no Rh-like preventive injection but can still require newborn treatment.",
          "For GBS and TORCH-related infections, connect the route of transmission to prevention, screening, pregnancy care, and newborn follow-up; do not assume all infections cause the same outcome."
        ]
      },
      {
        "type": "group",
        "title": "Rh incompatibility: explain sensitization and fetal risk",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Mechanism",
                "text": "Fetal Rh-positive red cells entering an Rh-negative patient’s circulation can trigger anti-D formation. Later exposure may produce an IgG response that crosses the placenta, destroying fetal red cells and causing anemia, hydrops, or newborn jaundice."
              },
              {
                "label": "Do not assume the first fetus is safe",
                "text": "Prior transfusion, loss, bleeding, procedures, trauma, or an earlier pregnancy may already have caused sensitization. ABO/Rh typing alone does not tell whether clinically important antibodies are present."
              },
              {
                "label": "If antibodies are found",
                "text": "Identify the antibody and review prior Rh immune globulin, because passive anti-D may affect the screen. Established alloimmunization requires an antibody-specific obstetric/MFM plan, sometimes serial titers, fetal antigen assessment, middle-cerebral-artery Doppler, and treatment for fetal anemia."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Screening and indicated Rh immune globulin",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Routine prevention",
                "text": "For an unsensitized Rh-negative patient with potential Rh-positive fetal exposure, anti-D is commonly given around 28 weeks and within 72 hours after an Rh-positive newborn. The antenatal dose does not automatically replace the postpartum dose."
              },
              {
                "label": "Other exposure and dosing",
                "text": "Bleeding, abdominal trauma, invasive procedures, or pregnancy loss may require prophylaxis depending on gestation and circumstances. Product/dose and assessment of fetomaternal hemorrhage determine whether additional doses are needed; do not assume one dose covers every exposure."
              },
              {
                "label": "Early-loss clarification",
                "text": "Current ACOG-aligned guidance does not require routine Rh testing/RhIg for every abortion or pregnancy loss before 12 weeks; use shared decision-making and the current local protocol. Ectopic pregnancy, procedures, or uncertainty need specific clinician review rather than a blanket omission."
              },
              {
                "label": "Nursing checks",
                "text": "Verify patient/product, Rh/antibody results, indication, dose, consent/education, timing, and documentation. RhIg prevents sensitization; it does not erase existing anti-D or treat an already anemic fetus."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "ABO incompatibility: newborn follow-up still matters",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Typical pattern",
                "text": "Often a type O mother with an A or B fetus/newborn; maternal IgG anti-A/anti-B can cause hemolysis. It can affect a first pregnancy and is commonly milder than severe Rh disease, but severity varies."
              },
              {
                "label": "Assessment and care",
                "text": "Assess newborn jaundice, bilirubin trend, hemoglobin, and direct antiglobulin test (DAT) when indicated. Treatment may include phototherapy or escalation for severe hyperbilirubinemia according to age-specific thresholds and clinical risk."
              },
              {
                "label": "Teaching distinction",
                "text": "There is no ABO equivalent of routine maternal anti-D prophylaxis. The lecture’s “no postpartum treatment” must not be interpreted as “an affected newborn never needs treatment.” Explain follow-up and feeding support."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "TORCH: toxoplasmosis, rubella, and syphilis",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Toxoplasmosis",
                "text": "Maternal infection can cross the placenta; earlier fetal infection may be more severe. Reduce exposure by thoroughly cooking meat, washing produce/hands, wearing gardening gloves, and having someone else handle cat litter if possible; use gloves/handwashing if necessary. Suspected infection needs targeted specialist assessment."
              },
              {
                "label": "Rubella",
                "text": "Maternal infection, especially early, can cause congenital cardiac, eye, and hearing problems. Check immunity; live MMR is given before pregnancy or postpartum when indicated, not during pregnancy. Report exposure promptly."
              },
              {
                "label": "Syphilis",
                "text": "Transplacental infection can cause fetal loss and congenital disease; do not wait for an assumed 16–18-week transmission threshold. Ensure screening, stage-appropriate penicillin treatment, follow-up, and partner care. Penicillin allergy in pregnancy requires specialist management/desensitization when indicated, not substitution with an unproven regimen."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "TORCH: CMV and herpes simplex",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "CMV",
                "text": "Often mild/asymptomatic maternal illness, but congenital infection can cause hearing loss, growth/neurologic problems, or other outcomes; it is not uniformly fatal. Handwashing after contact with young children’s saliva/urine and avoiding shared utensils reduce exposure."
              },
              {
                "label": "CMV newborn assessment",
                "text": "When congenital infection is suspected, arrange timely saliva/urine PCR testing in the first 21 days and appropriate hearing/developmental follow-up. A well-appearing baby can still need evaluation; testing later may not distinguish congenital from acquired infection."
              },
              {
                "label": "HSV",
                "text": "Most neonatal infection is acquired during birth; rare intrauterine transmission can occur. Ask about lesions/prodrome, support prescribed suppressive antivirals, and communicate findings at labor. Active genital lesions or prodromal symptoms generally indicate cesarean birth to reduce transmission."
              },
              {
                "label": "Use the mnemonic correctly",
                "text": "TORCH is a reminder of possible congenital/perinatal infections, not one diagnosis or a universal indiscriminate screening panel. “Other” infections and indicated testing depend on exposure, symptoms, ultrasound, and local guidance."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "GBS: current-pregnancy screening and intrapartum prevention",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Why it matters",
                "text": "GBS can colonize the GI/genital tract without symptoms; exposure around birth can cause neonatal sepsis, pneumonia, or meningitis. It is not an STI or evidence of poor hygiene."
              },
              {
                "label": "Screening",
                "text": "Routine vaginal–rectal culture at 36 weeks 0 days–37 weeks 6 days, unless prophylaxis is already indicated by GBS bacteriuria in this pregnancy or a previously affected infant. A positive culture in a past pregnancy alone is not an automatic permanent indication at every future birth."
              },
              {
                "label": "Antibiotics",
                "text": "Give prescribed intrapartum prophylaxis for current positive status or other indications; assess penicillin allergy and the required alternative carefully. Four hours of appropriate antibiotics before birth is ideal, but necessary obstetric care must not be delayed solely to achieve that interval."
              },
              {
                "label": "Additional distinctions",
                "text": "With unknown status, preterm labor, prolonged rupture, or fever may change management. Planned cesarean before labor with intact membranes generally does not require GBS-specific prophylaxis, though routine surgical antibiotics still apply. Monitor the newborn and communicate maternal risks/treatment."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Nurse’s prevention and teaching responsibilities",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Review blood type/antibody and infection results, explain their meaning privately, administer ordered prophylaxis/treatment, and make sure abnormal results have an assigned follow-up clinician.",
              "Teach food/hand hygiene, vaccine timing, safer sex, prompt reporting of fever/rash/exposure or genital symptoms, and adherence to the specific treatment plan without stigma.",
              "Handoff maternal antibody/infection status and treatment to the birth/newborn teams; arrange bilirubin/anemia, infection, hearing, and specialist follow-up when indicated. Use teach-back and address access barriers."
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Based on Antepartum Risks, pages 39–43 and 45, including the sensitization diagram. Updates early-loss Rh prophylaxis and GBS timing, and corrects absolute/no-treatment claims about ABO, CMV, HSV, and prior GBS history.",
    "answerSources": [
      {
        "title": "ACOG — Rh factor and pregnancy",
        "url": "https://www.acog.org/womens-health/faqs/the-rh-factor-how-it-can-affect-your-pregnancy"
      },
      {
        "title": "ASRM — Rh(D) immune globulin in the first trimester (2026)",
        "url": "https://www.asrm.org/practice-guidance/practice-committee-documents/position-statement-on-rhod-immune-globulin-administration-in-the-first-trimester-2026/"
      },
      {
        "title": "ACOG — Prevention of early-onset group B strep disease",
        "url": "https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2020/02/prevention-of-group-b-streptococcal-early-onset-disease-in-newborns"
      },
      {
        "title": "CDC — Preventing toxoplasmosis",
        "url": "https://www.cdc.gov/toxoplasmosis/prevention/index.html"
      },
      {
        "title": "CDC — Congenital CMV",
        "url": "https://www.cdc.gov/cytomegalovirus/congenital-infection/index.html"
      },
      {
        "title": "ACOG — CMV during pregnancy",
        "url": "https://www.acog.org/clinical-information/physician-faqs/cytomegalovirus-in-pregnancy"
      },
      {
        "title": "CDC — Syphilis during pregnancy",
        "url": "https://www.cdc.gov/std/treatment-guidelines/syphilis-pregnancy.htm"
      },
      {
        "title": "CDC — Genital herpes, pregnancy, and neonatal prevention",
        "url": "https://www.cdc.gov/std/treatment-guidelines/herpes.htm"
      },
      {
        "title": "AAP — Hyperbilirubinemia guideline implementation",
        "url": "https://www.aap.org/en/patient-care/hyperbilirubinemia/frequently-asked-questions-about-the-2022-aap-guideline-on-the-management-of-hyperbilirubinemia/"
      }
    ]
  },
  {
    "id": "fluid-multiples-pregnancy",
    "weekIds": [
      "week-3"
    ],
    "topicIds": [],
    "title": "Amniotic fluid disorders and multiple gestation",
    "text": "Compare oligohydramnios and polyhydramnios and identify the additional risks associated with multiple gestation. Explain the surveillance, nursing assessment, patient teaching, and care planning emphasized in the lecture.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Oligohydramnios is too little fluid; polyhydramnios is too much. Ultrasound estimates fluid, and the cause/gestational age determine the risk and management.",
          "Look for membrane rupture, fetal renal/anatomic problems, placental insufficiency, diabetes, or multiple-pregnancy complications rather than treating a fluid measurement in isolation.",
          "Multiple gestation increases preterm, growth, hypertensive, and hemorrhage risks. Chorionicity/amnionicity—not just whether twins are identical—guides surveillance and birth planning."
        ]
      },
      {
        "type": "group",
        "title": "Fluid physiology and ultrasound measurements",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Where fluid comes from",
                "text": "Later in pregnancy fetal urine and lung fluid contribute; fetal swallowing and membrane transfer remove fluid. Fluid cushions the fetus, supports movement and lung development, and reduces cord compression."
              },
              {
                "label": "Measurements",
                "text": "Ultrasound uses the single deepest vertical pocket (DVP/MVP) or amniotic fluid index (AFI). These are estimates, not exact liters. Interpret with gestational age, number of fetuses, membrane status, anatomy, and growth."
              },
              {
                "label": "Thresholds to recognize",
                "text": "Oligohydramnios commonly uses DVP <2 cm or AFI ≤5 cm. SMFM defines polyhydramnios in singletons as DVP ≥8 cm or AFI ≥24 cm; the slide uses AFI ≥25. Document which method/criterion is being used."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Oligohydramnios: find the reason for low fluid",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Possible causes",
                "text": "Ruptured membranes, placental insufficiency/growth restriction, postterm pregnancy, or fetal renal/urinary tract abnormalities; review maternal disease and medicines. Ask about leakage and evaluate growth/anatomy."
              },
              {
                "label": "Fetal risks",
                "text": "Cord compression and fetal heart-rate changes; prolonged severe early low fluid can impair lung/limb development. Do not interpret the slide’s “isolated low fluid is not associated with risk” as universal reassurance."
              },
              {
                "label": "Care and evaluation",
                "text": "Serial fluid/growth ultrasound and NST/BPP are chosen by context. Correct dehydration when appropriate, but maternal fluids do not fix every cause. Delivery timing depends on gestation and maternal/fetal status. Intrapartum amnioinfusion may be used for selected recurrent variable decelerations; it is not routine ongoing antepartum fluid replacement."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Polyhydramnios: excess urine or impaired swallowing",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Possible causes",
                "text": "Diabetes-related fetal osmotic diuresis, impaired swallowing from fetal anomalies, fetal anemia/infection, or twin–twin transfusion; many mild cases are idiopathic after evaluation. Assess anatomy, growth, maternal diabetes, and other suspected causes."
              },
              {
                "label": "Maternal/fetal cues and risks",
                "text": "Uterus larger than expected, abdominal discomfort or dyspnea, difficulty palpating fetal parts; increased risk of malpresentation, preterm labor, cord prolapse after rupture, abruption, and postpartum hemorrhage from overdistension."
              },
              {
                "label": "Management",
                "text": "Treat/monitor the cause. Severe maternal discomfort or dyspnea may require specialist amnioreduction. SMFM advises against indomethacin solely to reduce fluid; surveillance is not automatically required for every mild idiopathic case. Severity and associated findings determine follow-up and birth location."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Multiple gestation: assess placentas, sacs, and growth",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Confirm the type early",
                "text": "Ultrasound determines fetal number, chorionicity, and amnionicity. Shared placentas can create unequal blood flow; a shared amniotic sac also creates cord risks. Zygosity alone does not define surveillance needs."
              },
              {
                "label": "Maternal risks",
                "text": "More nausea/anemia/nutritional demand; increased GDM, hypertensive disorders, preterm labor/PPROM, operative birth, and postpartum hemorrhage. Individualize nutrition, weight-gain goals, and support without prescribing routine strict bed rest."
              },
              {
                "label": "Fetal risks",
                "text": "Prematurity and growth restriction/discordance. Monochorionic twins can develop twin–twin transfusion syndrome (TTTS), often with unequal fluid in separate sacs, and need specialist surveillance/treatment."
              },
              {
                "label": "Care planning",
                "text": "Serial ultrasound and other testing depend on chorionicity, growth, and complications. Plan appropriate obstetric/anesthesia/neonatal resources and assess each fetal heart rate distinctly. Mode/timing of birth is individualized; twins do not automatically require cesarean."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Nursing surveillance, teaching, and evaluation",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Assess fundal growth, discomfort/breathing, contractions, leakage/bleeding, BP, and usual fetal movement. Review serial ultrasound results and escalate abnormal trends instead of relying on one measurement.",
              "Teach prompt assessment for a gush/leak, reduced fetal movement, regular preterm contractions, severe pain, bleeding, or dyspnea. After rupture with polyhydramnios or malpresentation, urgent fetal assessment is important because of cord-prolapse risk.",
              "Coordinate specialist follow-up, nutrition, transportation, emotional support, and the birth/newborn plan. Evaluate symptom control, fetal growth/testing, and understanding through teach-back.",
              "Apply it: low fluid + leaking suggests possible membrane rupture; high fluid + elevated maternal glucose suggests a diabetes-related cause. Markedly unequal fluid/growth in twins sharing a placenta requires specialist evaluation, not a generic hydration prescription."
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Based on Antepartum Risks, pages 46–55. Ultrasound thresholds, indomethacin use, surveillance indications, amnioinfusion context, and individualized multiple-pregnancy care are clarified below.",
    "answerSources": [
      {
        "title": "SMFM — Polyhydramnios: Consult Series 46, reaffirmed 2024",
        "url": "https://publications.smfm.org/publications/263-society-for-maternal-fetal-medicine-consult-series-46/"
      },
      {
        "title": "ACOG — Multiple pregnancy",
        "url": "https://www.acog.org/womens-health/faqs/multiple-pregnancy"
      },
      {
        "title": "SMFM — Activity restriction in obstetric care",
        "url": "https://publications.smfm.org/publications/326-society-for-maternal-fetal-medicine-consult-series-50/"
      },
      {
        "title": "ACOG — Indications for antenatal fetal surveillance",
        "url": "https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2021/06/indications-for-outpatient-antenatal-fetal-surveillance"
      }
    ]
  },
  {
    "id": "normal-labor-process",
    "weekIds": [
      "week-5"
    ],
    "topicIds": [],
    "title": "Preparing for labor and birth",
    "text": "Distinguish true from false labor and explain the stages of labor, cervical changes, fetal position and descent, and factors affecting labor progress. Relate these findings to preparation and supportive nursing care.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "True labor produces progressive cervical dilation/effacement with contractions that become more regular, stronger, and closer together; false labor does not produce progressive cervical change.",
          "The lecture organizes progress around the 5 P’s, fetal lie/presentation/position/station, and the cardinal movements of birth.",
          "Know the four stages: onset to full dilation; full dilation to birth; birth to placenta; and early recovery. Match assessment, preparation, and support to the stage."
        ]
      },
      {
        "type": "group",
        "title": "Recognize approaching labor and distinguish true from false labor",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Premonitory signs",
                "text": "Cervical softening/change, lightening, bloody show, increased energy, Braxton Hicks contractions, and possible rupture of membranes. Lightening is descent into the pelvis; these warning signs do not independently establish active labor."
              },
              {
                "label": "False labor",
                "text": "Often irregular, does not become progressively stronger/closer, may decrease with walking/rest or position change, and causes no progressive dilation/effacement."
              },
              {
                "label": "True labor and reporting",
                "text": "Contractions continue despite position changes and accompany cervical change/descent. Ask frequency, duration, strength, progression, and leakage. The lecture’s contraction-timing example is not a reason to delay assessment for rupture, bleeding, decreased movement, or another concern."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Use the 5 P’s to explain progress",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Passageway and passenger",
                "text": "Passageway = bony pelvis and soft tissues, including cervix/vagina. Passenger = fetus and placenta. Pelvic shape, fetal size, flexion, and presentation affect the fit; a pelvis label alone does not guarantee the birth route."
              },
              {
                "label": "Powers",
                "text": "Involuntary contractions thin/dilate the cervix and move the presenting part downward; maternal bearing-down efforts contribute in the second stage. Relaxation between contractions allows placental blood flow to recover."
              },
              {
                "label": "Position and psychological response",
                "text": "Maternal position can affect comfort and descent. Anxiety, fatigue, preparation, information, support, and trust affect coping; explain what is happening and offer the patient meaningful choices."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Separate dilation, effacement, engagement, and station",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Cervical change",
                "text": "Dilation = opening from 0 to 10 cm. Effacement = thinning/shortening from 0% to 100%. They can occur together; complete dilation ends the first stage."
              },
              {
                "label": "Station and engagement",
                "text": "Station describes the presenting part relative to the maternal ischial spines: 0 at the spines, negative above, positive below. The lecture uses −4 to +4 and associates engagement with 0 station."
              },
              {
                "label": "Assessment connection",
                "text": "Document dilation, effacement, position, station, membrane status, and fluid findings together. Sutures/fontanelles help identify the fetal head’s orientation; molding is overlapping of cranial bones during passage."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Identify fetal lie, presentation, attitude, and position",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Lie and presentation",
                "text": "Lie compares fetal and maternal spines: longitudinal versus transverse. Presentation is the part entering first: cephalic, breech, or shoulder. The lecture shows vertex, military, brow, and face cephalic presentations, plus frank, complete, and footling breech."
              },
              {
                "label": "Attitude",
                "text": "Relationship of fetal parts to one another. Flexion with chin toward the chest presents a smaller head diameter; extension changes the diameter that must pass through the pelvis."
              },
              {
                "label": "Position",
                "text": "Three letters describe the fetal landmark in the maternal pelvis: mother’s left/right; occiput (O), mentum (M), or sacrum (S); then anterior/posterior/transverse. Read the lecture’s LOA/ROA/LOP/ROP diagrams from the mother’s perspective."
              },
              {
                "label": "Cardinal movements",
                "text": "Engagement → descent → flexion → internal rotation → extension → external rotation/restitution → expulsion. Follow the diagrams as the head aligns with the pelvis and the shoulders rotate for birth."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "First and second stages: cervical progress and birth",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "First stage",
                "text": "Labor onset to 10 cm. The lecture’s phases are latent (about 0–5 cm), active beginning at 6 cm, and transition (8–10 cm). Contractions generally become longer, stronger, and closer; individual timing varies."
              },
              {
                "label": "Coping and preparation",
                "text": "Early labor may bring excitement/talkativeness; active/transition labor may bring intense concentration, fatigue, shaking, nausea, irritability, or rectal pressure. Stay present, offer brief reassurance, reinforce breathing, allow rest, and protect privacy."
              },
              {
                "label": "Second stage",
                "text": "Complete dilation to birth. Assess descent, contractions, maternal vital signs/coping, and fetal response; prepare the room and assist with positioning and pushing. If an urge occurs before dilation is confirmed, stay with the patient and seek assessment."
              },
              {
                "label": "Timing clarification",
                "text": "The slides include different example stage lengths and delayed-pushing advice. Treat these as teaching descriptions, not automatic time limits or a routine 90-minute delay; follow the current individualized pushing/birth plan."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Third and fourth stages: placenta, recovery, and support",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Third stage",
                "text": "Birth to placental expulsion. Separation signs include a rising/globular uterus, cord lengthening, and a gush/trickle of blood. Assist with ordered care, repair/counts, uterotonic administration, and assessment of tone, bleeding, vital signs, and anesthesia recovery."
              },
              {
                "label": "Fourth stage",
                "text": "The first several hours of recovery, described as up to 4 hours in the lecture. Frequent vital signs, fundal/bleeding assessment, bladder assessment, and evaluation of maternal stability continue. A firm fundus is one finding; assess the whole patient."
              },
              {
                "label": "Support and preferences",
                "text": "Involve the chosen support person, explain procedures, revisit the birth/pain plan, and support skin-to-skin contact and feeding initiation when appropriate. Assess maternal–fetal tolerance throughout rather than judging progress by dilation alone."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Reorganized from Processes of Labor & Birth, pages 6–10, 14–23, 28–47, and 49–68. Keeps the lecture’s terminology and stage descriptions; the brief timing clarification avoids using example durations or delayed pushing as universal instructions.",
    "answerSources": [
      {
        "title": "Assigned lecture — Processes of labor & birth",
        "url": "#/ob-final/presentation/labor-and-birth"
      },
      {
        "title": "Safety clarification — ACOG first and second stage management",
        "url": "https://www.acog.org/clinical/clinical-guidance/clinical-practice-guideline/articles/2024/01/first-and-second-stage-labor-management"
      }
    ]
  },
  {
    "id": "labor-nursing-assessment",
    "weekIds": [
      "week-5"
    ],
    "topicIds": [],
    "title": "Maternal assessment during labor",
    "text": "Describe admission and ongoing maternal assessment during labor, including contractions, membrane status, pain, coping, and birth preferences. Explain documentation, communication, and recognition of changes requiring escalation.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Admission assessment combines the presenting concern, pregnancy/birth history, current maternal–fetal findings, and the patient’s preferences and support needs.",
          "Continue to assess contractions, membrane/fluid status, maternal vital signs, pain/coping, cervical progress when indicated, and fetal response as labor changes.",
          "Document findings and the response to care, communicate changes promptly, and escalate concerning maternal or fetal findings rather than treating a monitor reading in isolation."
        ]
      },
      {
        "type": "group",
        "title": "Admission history and birth preferences",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Pregnancy and obstetric data",
                "text": "Confirm EDD/gestation, GTPAL, prior birth methods and uterine incision type, previous hemorrhage/placental or hypertensive problems, prenatal tests/treatments, and current complications. Review medicines, allergies, and relevant test results."
              },
              {
                "label": "Presenting complaint",
                "text": "Ask when contractions began, frequency/duration/intensity, pain location and progression, leakage/rupture, vaginal bleeding, and the last fetal movement. Review available ultrasound/NST findings and treatments already received."
              },
              {
                "label": "Preferences and support",
                "text": "Discuss the written birth plan if present, childbirth preparation, pain-management choices, desired support, intervention preferences, infant feeding, and newborn plans. Assess practical needs and explain any change to the plan."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Assess contractions, membranes, and fetal position",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Contractions",
                "text": "Frequency: beginning of one to beginning of the next. Duration: beginning to end of one contraction. Intensity: palpation or internal pressure measurement when indicated. Note relaxation/resting time as well as the contraction peaks."
              },
              {
                "label": "Membranes and fluid",
                "text": "Record intact versus ruptured, time of rupture, fluid amount, color, odor, and particulate matter. Green/particulate fluid may indicate meconium and requires assessment of the fetal picture, not an isolated conclusion from color."
              },
              {
                "label": "Abdominal assessment",
                "text": "Use the lecture’s Leopold maneuvers to identify fundal contents, fetal back, the presenting part, and the cephalic prominence. The fetal back helps locate the best point to hear the heart rate."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Prepare for and document indicated vaginal assessment",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Before examination",
                "text": "Explain the procedure, obtain cooperation/consent, check relevant allergies, assemble supplies, provide positioning/draping/privacy, and tell the patient before touching. Limit unnecessary repeated examinations."
              },
              {
                "label": "Record the findings",
                "text": "Dilation, effacement, position, station, membrane status, and fluid characteristics. Relate these findings to contractions and the patient’s symptoms rather than documenting a cervical number alone."
              },
              {
                "label": "Safety clarification",
                "text": "Unexplained bleeding or suspected previa requires review before a digital examination; rupture increases the importance of minimizing unnecessary examinations. Follow the examination precautions and orders appropriate to the patient."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Ongoing maternal assessment and coping",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Physiologic assessment",
                "text": "Trend BP, pulse, respirations, temperature, intake/output, hydration/IV needs, and bladder distention. The lecture notes that labor changes heart rate, breathing, and metabolic demand; do not dismiss a concerning change as automatically normal."
              },
              {
                "label": "Comfort and emotional response",
                "text": "Reassess pain, fatigue, coping, response to medicines/positioning, and the support person’s needs. Increasing pressure or a changed behavioral/pain pattern may accompany labor progress and warrants assessment."
              },
              {
                "label": "Frequency",
                "text": "Increase observation as labor, pushing, treatment, or risk changes. The slides include frequent checks in active labor and early recovery; use the unit’s required schedule and reassess after an intervention."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Documentation, communication, and escalation",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Record maternal findings, contraction pattern, membrane/fluid observations, fetal tracing assessment, cervical findings, medicines/interventions, preferences, and the response over time.",
              "Communicate the actual findings and trends to the CNM/physician, including actions already taken and whether they helped. The lecture emphasizes timely reporting and follow-up for abnormal FHR patterns.",
              "Escalate significant bleeding, persistent maternal instability, respiratory suppression/hypotension after medication, concerning fluid findings with other signs, or unresolved fetal abnormalities. Continue assessment while help and further treatment are arranged."
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Based on Processes of Labor & Birth, pages 2–5, 24–35, 47–51, and 54–68, and Fetal & Maternal Monitoring, pages 2–8 and 50–51. The examination precaution is consistent with the previously assigned placental-bleeding material; no new assessment framework is introduced.",
    "answerSources": [
      {
        "title": "Assigned lecture — Processes of labor & birth",
        "url": "#/ob-final/presentation/labor-and-birth"
      },
      {
        "title": "Assigned lecture — Fetal & maternal monitoring in labor",
        "url": "#/ob-final/presentation/fetal-monitoring"
      }
    ]
  },
  {
    "id": "monitoring-methods",
    "weekIds": [
      "week-5"
    ],
    "topicIds": [
      "fetal-monitoring"
    ],
    "title": "Fetal monitoring methods",
    "text": "Compare intermittent assessment and external and internal electronic monitoring. Explain what each method measures, its limitations, the requirements for internal monitoring, and the nurse’s safety responsibilities.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Intermittent auscultation assesses the fetal heart at planned intervals; external EFM displays fetal heart rate and uterine activity continuously when used.",
          "The external ultrasound transducer detects FHR; the external toco tracks contraction timing. A fetal scalp electrode records fetal cardiac activity, while an IUPC measures uterine pressure internally.",
          "Internal monitoring requires ruptured membranes and suitable access/presentation. Choose the method for the clinical situation and verify signal quality, maternal pulse, patient comfort, and ongoing interpretation."
        ]
      },
      {
        "type": "group",
        "title": "Intermittent assessment and the lecture’s timing examples",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Purpose and limitations",
                "text": "Intermittent auscultation can be appropriate for selected laboring patients and supports periodic assessment of the response to labor. It does not provide the same continuous paper pattern for detailed variability/deceleration analysis as EFM."
              },
              {
                "label": "Lecture schedule",
                "text": "Slide 5 describes an initial 10–20-minute assessment, then first-stage intervals of 30 minutes for low risk/15 for high risk, and second-stage intervals of 15/5 minutes respectively. Treat these as the lecture’s schedule; actual monitoring follows risk, labor stage, and unit policy."
              },
              {
                "label": "Nursing responsibility",
                "text": "Complete the maternal/prenatal risk assessment, assess with contractions, compare with the maternal pulse when needed, document findings, and escalate changes or the need for a different monitoring method."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "External EFM: ultrasound and toco do different jobs",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Ultrasound transducer",
                "text": "Placed where the fetal heart is best heard, generally over the fetal back. Produces the FHR tracing used to assess baseline, variability, accelerations, and decelerations. Reposition when contact is lost."
              },
              {
                "label": "Tocotransducer",
                "text": "Placed over the fundus to display contraction timing, frequency, and duration. Clarification: its displayed height is not a reliable measurement of true contraction strength or resting pressure; palpation adds information."
              },
              {
                "label": "Artifact and limitations",
                "text": "Movement, transducer position, and maternal heart rate can distort the tracing. Assess the patient and equipment before assuming an abrupt change is a fetal event; a reassuring-looking display still needs interpretation in context."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Internal EFM: scalp electrode and IUPC",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Fetal scalp electrode",
                "text": "A spiral electrode attaches to the presenting fetal scalp and records cardiac activity more directly. The lecture requires ruptured membranes, at least about 2 cm dilation, and an accessible presenting part low enough for placement."
              },
              {
                "label": "Intrauterine pressure catheter",
                "text": "An IUPC measures contraction pressure, including intensity and resting pressure, from inside the uterus. It provides information an external toco cannot quantify. It does not itself record the FHR."
              },
              {
                "label": "Safety and limitations",
                "text": "These are invasive methods requiring appropriate selection and trained insertion; assess membrane/presentation status and follow procedure precautions. Internal monitoring can improve signal quality but does not eliminate the need to verify the signal, reassess the patient, or interpret the tracing. HIV safety clarification: avoid fetal scalp electrodes with HIV even when suppressed; do not use them when HIV RNA is ≥50 copies/mL. Review infection risk with the team."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Interpret and communicate, whichever method is used",
        "blocks": [
          {
            "type": "list",
            "items": [
              "The lecture’s goal is to recognize declining reserve/possible fetal compromise and guide interventions while following maternal hemodynamic stability and uterine activity.",
              "Ask the three lecture questions: what is the finding called, what does it mean, and what should be done? Record the assessment, actions, communication, and response.",
              "Support position changes and comfort as monitoring allows. Explain the reason for external or internal equipment and respond promptly to loss of contact or concerning findings."
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "From Fetal & Maternal Monitoring, pages 2–18, and Processes of Labor & Birth, pages 30–35 and 47–48. Clarifies the external toco’s measurement limits and the lecture’s overly absolute “no maternal artifact” wording. Final review clarification adds NIH fetal-scalp-electrode precautions with HIV.",
    "answerSources": [
      {
        "title": "Assigned lecture — Fetal & maternal monitoring in labor",
        "url": "#/ob-final/presentation/fetal-monitoring"
      },
      {
        "title": "Assigned lecture — Processes of labor & birth",
        "url": "#/ob-final/presentation/labor-and-birth"
      },
      {
        "title": "NIH: fetal scalp electrode and HIV safety clarification",
        "url": "https://clinicalinfo.hiv.gov/en/guidelines/perinatal/intrapartum-care"
      }
    ]
  },
  {
    "id": "fhr-strip-assessment",
    "weekIds": [
      "week-5"
    ],
    "topicIds": [
      "fetal-monitoring"
    ],
    "title": "Read a fetal heart rate strip",
    "text": "Use a consistent sequence to assess a strip: baseline, variability, accelerations, decelerations, and uterine activity. Interpret contraction frequency, duration, and resting intervals and recognize tachysystole.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Read the tracing in a consistent order: baseline, variability, accelerations, decelerations, and uterine activity; then interpret the whole pattern with maternal findings.",
          "The lecture’s usual baseline is 110–160 bpm and moderate variability is 6–25 bpm. Assess the tracing over time rather than classifying one peak or dip alone.",
          "Measure contraction frequency start-to-start, duration start-to-end, and the relaxation interval between contractions. Excessive activity can reduce the time available for placental perfusion."
        ]
      },
      {
        "type": "group",
        "title": "Baseline: establish the reference before naming changes",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "How to read it",
                "text": "Estimate the mean FHR in a 10-minute window, rounded to 5 bpm, excluding accelerations, decelerations, and marked variability. The usual range taught is 110–160 bpm. Definition clarification: identify at least two minutes of baseline within the window, not necessarily contiguous; otherwise the baseline is indeterminate."
              },
              {
                "label": "Tachycardia versus bradycardia",
                "text": "A sustained baseline >160 is tachycardia; <110 is bradycardia. A brief rise/drop is assessed as an acceleration/deceleration rather than automatically becoming a new baseline."
              },
              {
                "label": "Check the context",
                "text": "Confirm tracing quality and compare the maternal pulse when needed. Maternal hypotension, hemorrhage/anemia, hypertension, medications, and uterine activity can affect the fetal response discussed in the lecture."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Variability: describe the fluctuations around baseline",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Four descriptions",
                "text": "Absent = not detectable; minimal = detectable but ≤5 bpm; moderate = 6–25 bpm; marked = >25 bpm. The ≤5 boundary clarifies the slide’s “<5” shorthand."
              },
              {
                "label": "Why it matters",
                "text": "The lecture connects variability with sympathetic/parasympathetic activity and fetal oxygenation. Moderate variability is reassuring at the time assessed; reduced variability requires evaluation with the rest of the tracing."
              },
              {
                "label": "Interpretation clarification",
                "text": "Minimal or absent variability alone does not prove fetal acidemia. Review the rate, decelerations, medications, maternal status, and progression rather than turning one finding into a diagnosis."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Accelerations and decelerations: name and time the event",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Term acceleration",
                "text": "The usual term definition is a rise ≥15 bpm lasting ≥15 seconds but <2 minutes. Definition clarification: the lecture’s “less than 30 seconds” confuses the rapid onset with the full duration. Gestational-age clarification: before 32 weeks, use ≥10 bpm for ≥10 seconds but <2 minutes; from 32 weeks, use the 15-by-15 criteria."
              },
              {
                "label": "Describe a drop",
                "text": "Record its depth/duration, gradual versus abrupt onset/recovery, and relationship to the contraction. Early, late, and variable patterns are distinguished by this timing/shape, not by the lowest number alone."
              },
              {
                "label": "Use both traces",
                "text": "Line up the FHR event with contraction onset, peak, and end. Review whether events recur and whether baseline/variability recover between contractions."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Uterine activity: frequency, duration, intensity, and rest",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Frequency and duration",
                "text": "Frequency is beginning-to-beginning; duration is beginning-to-end of one contraction. The resting interval runs from the end of one contraction to the start of the next."
              },
              {
                "label": "Intensity and resting tone",
                "text": "Use palpation or an IUPC when indicated. External toco peak height does not establish true strength; note whether the uterus relaxes between contractions."
              },
              {
                "label": "Tachysystole clarification",
                "text": "More than 5 contractions in 10 minutes, averaged over 30 minutes. This supplies the precise term requested by the objective for what the slides describe as hyperstimulation. Document whether FHR abnormalities accompany it; do not wait for the averaging window to finish before responding to acute compromise."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Finish with a complete interpretation",
        "blocks": [
          {
            "type": "list",
            "items": [
              "State the baseline, variability, accelerations, deceleration type/timing, and contraction pattern together; then assign the tracing category using all required features.",
              "Decide whether observation, a corrective action, or urgent escalation is needed. Reassess after treatment and document the change rather than only writing “provider notified.”",
              "Use the supplied examples: variability on pages 36–39, early/late decelerations on pages 27–28, variable on page 29, and prolonged on page 33 of Fetal & Maternal Monitoring."
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "From Fetal & Maternal Monitoring, pages 18–40 and 43–45, and Processes of Labor & Birth, pages 46–48. Short definition clarifications correct the acceleration duration/minimal-variability boundary and define tachysystole already requested by the objective. Final review clarification adds the minimum identifiable baseline and the <32-week acceleration criteria.",
    "answerSources": [
      {
        "title": "Assigned lecture — Fetal & maternal monitoring in labor",
        "url": "#/ob-final/presentation/fetal-monitoring"
      },
      {
        "title": "Assigned lecture — Processes of labor & birth",
        "url": "#/ob-final/presentation/labor-and-birth"
      },
      {
        "title": "Definition clarification — AHRQ fetal monitoring terminology",
        "url": "https://www.ahrq.gov/patient-safety/settings/labor-delivery/perinatal-care/modules/strategies/safe-electronic-tool.html"
      },
      {
        "title": "Definition clarification — NICHD fetal monitoring workshop",
        "url": "https://onlinelibrary.wiley.com/doi/full/10.1111/j.1552-6909.2008.00284.x"
      },
      {
        "title": "NICHD workshop nomenclature: baseline and preterm acceleration clarification",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2621055/"
      }
    ]
  },
  {
    "id": "fhr-patterns",
    "weekIds": [
      "week-5"
    ],
    "topicIds": [
      "fetal-monitoring"
    ],
    "title": "Decelerations and tracing categories",
    "text": "Distinguish early, variable, late, and prolonged decelerations by their shape and relationship to contractions. Interpret Category I, II, and III patterns and connect the findings with likely causes.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Early decelerations gradually mirror the contraction and are linked with head compression; variable decelerations are abrupt and commonly reflect cord compression; late decelerations are delayed and suggest impaired uteroplacental exchange.",
          "A prolonged deceleration is a drop ≥15 bpm lasting 2 to <10 minutes. Assess the cause and response promptly rather than waiting for it to become a baseline change.",
          "Category I is reassuring, II requires evaluation and continued surveillance, and III requires urgent assessment/intervention. The category depends on the combined findings, especially variability."
        ]
      },
      {
        "type": "group",
        "title": "Early versus late: compare timing with the contraction",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Early",
                "text": "Gradual fall/recovery, with the nadir near the contraction peak and recovery as the contraction resolves. The lecture links this to fetal head compression, often in active/second-stage labor. Early decelerations alone are not evidence of fetal distress."
              },
              {
                "label": "Late",
                "text": "Gradual fall/recovery displaced later than the contraction; the nadir follows the contraction peak and recovery occurs later. The lecture lists hypotension, hypertension, post-term placental changes, and excessive oxytocin-related activity as contributors."
              },
              {
                "label": "How to distinguish",
                "text": "Compare both traces rather than simply calling every rounded dip early. Use the supplied page 27 early and page 28 late illustrations; their relative timing is the teaching point."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Variable and prolonged decelerations",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Variable",
                "text": "Abrupt fall and return, with variable timing/shape relative to contractions; commonly related to cord compression. Assess baseline and variability, recurrence, and recovery, not just whether the dip forms a V."
              },
              {
                "label": "Prolonged",
                "text": "Definition clarification: ≥15-bpm decrease lasting ≥2 but <10 minutes. The slide gives the lower boundary; the upper boundary distinguishes this from a sustained baseline change."
              },
              {
                "label": "Causes to review",
                "text": "The lecture lists excessive uterine activity, hypotension/hypoxia, abruption, rupture, and cord problems among possible prolonged-deceleration causes. A tracing does not by itself identify which cause is present; urgently assess the patient and obtain help."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Category I: all reassuring criteria must fit",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Baseline 110–160 bpm with moderate variability.",
              "No late or variable decelerations; early decelerations may be present or absent.",
              "Accelerations may be present or absent. Continue appropriate monitoring; no single feature substitutes for the full category definition."
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Category II: evaluate the indeterminate pattern",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "What belongs here",
                "text": "Findings not meeting Category I or III. Lecture examples include tachycardia, bradycardia with preserved variability, minimal/marked variability, prolonged decelerations, and recurrent late/variable decelerations when the Category III combination is absent."
              },
              {
                "label": "What it means",
                "text": "Indeterminate is not the same as reassuring and does not independently prove abnormal acid–base status. Assess the whole picture, address contributing causes, communicate, and reassess over time."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Category III: the missing combination matters",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Definition clarification",
                "text": "Absent baseline variability PLUS recurrent late decelerations, recurrent variable decelerations, or bradycardia; OR a sinusoidal pattern. The lecture’s Category III list must be read with the absent-variability requirement rather than treating each listed rate/deceleration as automatically Category III."
              },
              {
                "label": "Nursing significance",
                "text": "Urgently evaluate and begin corrective actions with the team. If the abnormal pattern does not resolve, prepare for expedited birth as directed. Continue maternal/fetal assessment and document actions and response."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Based on Fetal & Maternal Monitoring, pages 25–33 and 40–49. Keeps the lecture’s pattern comparisons; clearly marked definition clarifications supply the prolonged-deceleration upper boundary and the required Category III combination.",
    "answerSources": [
      {
        "title": "Assigned lecture — Fetal & maternal monitoring in labor",
        "url": "#/ob-final/presentation/fetal-monitoring"
      },
      {
        "title": "Definition clarification — NICHD fetal monitoring workshop",
        "url": "https://onlinelibrary.wiley.com/doi/full/10.1111/j.1552-6909.2008.00284.x"
      },
      {
        "title": "Safety clarification — ACOG fetal heart rate monitoring guideline",
        "url": "https://journals.lww.com/greenjournal/fulltext/2025/10000/acog_clinical_practice_guideline_no_.22.aspx"
      }
    ]
  },
  {
    "id": "fhr-priorities",
    "weekIds": [
      "week-5"
    ],
    "topicIds": [
      "fetal-monitoring"
    ],
    "title": "Choose the first nursing action",
    "text": "For a practice strip, identify the priority concern, select and explain the first nursing action, describe further interventions and escalation, and state how you would evaluate the response. Practice applying this sequence to two different strips.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Use the lecture’s sequence: name the finding, interpret its likely meaning, choose an action aimed at the cause, and reassess.",
          "Repositioning, stopping/reducing oxytocin when indicated, correcting maternal hypotension, and timely provider communication recur throughout the slides; do not use the same treatment automatically for every pattern.",
          "Practice with the supplied early and late tracings on pages 27–28, then use the variable/prolonged examples and treatment slides to compare how the response changes."
        ]
      },
      {
        "type": "group",
        "title": "Choose the first action from the whole situation",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Immediate assessment",
                "text": "Check the patient, tracing quality/maternal pulse when needed, baseline/variability, decelerations, contraction activity, and recent changes such as analgesia, rupture, pushing, or oxytocin."
              },
              {
                "label": "Act and communicate",
                "text": "For concerning decelerations, promptly reposition laterally and address the apparent contributor; stop oxytocin when excessive stimulation or a concerning pattern requires it. Obtain urgent help in parallel for severe/persistent abnormalities."
              },
              {
                "label": "Match the cause",
                "text": "Hypotension calls for assessment and ordered circulatory treatment; recurrent variable patterns may lead to cord assessment and prescribed amnioinfusion; excessive contractions require reducing uterine stimulation. Internal monitors improve selected measurements but do not themselves correct hypoxia."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Supplied strip 1: early decelerations — page 27",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Identify and interpret",
                "text": "The supplied tracing is labeled early; the gradual dips roughly mirror the contractions. The lecture explanation is head compression."
              },
              {
                "label": "Priority response",
                "text": "First complete the baseline/variability and maternal assessment. If the rest of the tracing is reassuring, continue appropriate observation and labor support rather than treating early decelerations alone as an emergency."
              },
              {
                "label": "Evaluate",
                "text": "Watch for recovery between contractions and any new late/variable changes or worsening variability. This illustration teaches timing; it does not provide a full patient history or justify inventing a complete clinical scenario."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Supplied strip 2: late decelerations — page 28",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Identify and interpret",
                "text": "The supplied tracing is labeled late; the FHR nadirs follow the contraction peaks and recovery is delayed. The lecture links the pattern to uteroplacental insufficiency."
              },
              {
                "label": "Priority response",
                "text": "Promptly reposition on the side; assess maternal BP and uterine activity, stop oxytocin when indicated, and notify the provider while continuing corrective care. Give ordered fluids/treatment for the contributing condition."
              },
              {
                "label": "Evaluate and escalate",
                "text": "Reassess whether the dips resolve, variability and recovery improve, and maternal status stabilizes. Persistent/recurrent deterioration requires further team assessment and an expedited-birth plan when indicated. Do not infer the entire category solely from this cropped pattern example."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Compare the lecture’s variable and prolonged responses",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Variable — pages 29 and 46",
                "text": "Reposition, assess rate/variability and recurrence, communicate, evaluate for cord prolapse when indicated, and prepare for ordered amnioinfusion or other treatment. Reduce/stop oxytocin when appropriate."
              },
              {
                "label": "Prolonged — pages 33 and 48–49",
                "text": "Call promptly, assess maternal status and uterine activity, reposition, stop oxytocin when indicated, and prepare for additional intervention/birth if unresolved. Do not delay escalation to complete a routine strip description."
              },
              {
                "label": "Oxygen safety clarification",
                "text": "The slides list routine mask oxygen. Current guidance does not recommend routine oxygen for an abnormal tracing when maternal oxygen saturation is normal; use it for maternal hypoxia or another clinical indication."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Document the response and the next step",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Record the pattern and maternal/contraction findings, action time, provider communication/orders, and fetal response after each intervention.",
              "Describe what improved or persisted, and whether monitoring or the birth plan changed. “Repositioned and notified” is incomplete without the follow-up assessment emphasized by the lecture.",
              "For each supplied strip, state: priority concern → first action and reason → further interventions/escalation → evidence of response. Use the actual slide findings instead of adding fictional patient measurements."
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Uses the supplied early/late strips (pages 27–28), variable/prolonged examples (29 and 33), and management slides (34, 40, 42, 46–51) in Fetal & Maternal Monitoring. No invented patient case or exact measurement is added to the images. The routine-oxygen advice receives a brief safety clarification.",
    "answerSources": [
      {
        "title": "Assigned lecture — Fetal & maternal monitoring in labor",
        "url": "#/ob-final/presentation/fetal-monitoring"
      },
      {
        "title": "Safety clarification — ACOG fetal heart rate monitoring guideline",
        "url": "https://journals.lww.com/greenjournal/fulltext/2025/10000/acog_clinical_practice_guideline_no_.22.aspx"
      }
    ]
  },
  {
    "id": "labor-comfort-medication",
    "weekIds": [
      "week-5"
    ],
    "topicIds": [],
    "title": "Comfort, analgesia, and anesthesia",
    "text": "Compare nonpharmacological comfort measures, systemic analgesia, regional anesthesia, and general anesthesia. Explain maternal and fetal assessments, contraindications, adverse effects, and the nursing response to complications.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Begin with the patient’s choices, coping, support, and prior experience; nonpharmacological and pharmacological measures can be combined and revisited as labor changes.",
          "Compare systemic opioids with epidural/spinal, pudendal/local, and general anesthesia by the area/degree of relief, timing, and maternal/fetal effects.",
          "Monitor especially for respiratory depression after systemic medication and hypotension after neuraxial anesthesia; prepare and reassess before, during, and after treatment."
        ]
      },
      {
        "type": "group",
        "title": "Nonpharmacological comfort and labor support",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Measures in the slides",
                "text": "Relaxation/breathing, imagery, music, chosen touch/massage, effleurage (light circular abdominal touch), counterpressure, position changes, and water therapy within the unit’s eligibility rules. What works early may need to change later."
              },
              {
                "label": "Patient choice",
                "text": "Ask about cultural/religious preferences, prior experiences, anxiety, and the desired support person. A doula supports labor and coping and is not the same role as a midwife. Avoid assuming everyone wants the same touch, position, or medication."
              },
              {
                "label": "Evaluate",
                "text": "Check comfort, coping, fatigue, and maternal/fetal tolerance. Offer another approach or medication when measures are insufficient. The lecture restricts hydrotherapy to intact membranes; follow the actual unit’s eligibility criteria rather than treating that as a universal rule."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Systemic analgesia: relief with sedation/respiratory risk",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Examples and role",
                "text": "The lecture lists IV opioids such as morphine, butorphanol, and nalbuphine, with other sedating medicines also named. These can reduce pain but do not provide the same localized block as epidural or spinal anesthesia."
              },
              {
                "label": "Timing and assessment",
                "text": "Review the ordered drug, recent doses, allergies, labor progress/likelihood of birth, maternal respirations/consciousness/BP, and fetal status. Placental drug exposure and timing near birth matter; a dilation number alone is not a universal medication cutoff."
              },
              {
                "label": "Adverse effect and response",
                "text": "Monitor mother and newborn for respiratory depression/sedation. Support breathing, summon help, and give prescribed reversal/treatment when indicated; naloxone availability does not replace airway and respiratory assessment."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Regional and local techniques: distinguish the sites",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Epidural and combined spinal–epidural",
                "text": "Epidural medicine is delivered into the epidural space, often through a catheter; spinal/intrathecal medicine enters the intrathecal space. A combined technique uses both. Clarification: these spaces are not interchangeable."
              },
              {
                "label": "Spinal",
                "text": "The lecture describes rapid onset and use mainly for cesarean anesthesia; risks include hypotension and post-dural-puncture headache. The anesthesia team determines the technique and degree of block."
              },
              {
                "label": "Pudendal and local",
                "text": "Pudendal block targets perineal/vaginal/vulvar pain for second-stage or operative/perineal procedures. Local lidocaine may be used for repair. These do not provide the same coverage as a neuraxial block."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Nursing preparation, contraindications, and monitoring",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Before regional anesthesia",
                "text": "Confirm informed consent, IV access, relevant history/medicines and ordered assessments. Prepare equipment, support positioning, and assess maternal BP and fetal status. Review refusal, anticoagulation/bleeding disorders, injection-site infection, allergy, and relevant cardiovascular/volume problems with anesthesia."
              },
              {
                "label": "After placement",
                "text": "Frequent BP checks, respiratory/level-of-block assessment, and fetal monitoring. The lecture emphasizes BP about every 5 minutes initially, then at the ordered interval. Assess bladder distention, motor/sensory effects, and safe positioning/movement."
              },
              {
                "label": "Hypotension",
                "text": "Reposition, alert anesthesia/provider, and give ordered fluid/vasopressor treatment while assessing fetal response. Safety clarification: the slide’s fixed 2-liter preload is not a universal order; fluids are individualized."
              },
              {
                "label": "Timing clarification",
                "text": "Neuraxial analgesia does not need to wait for an arbitrary >5-cm dilation. The timing, suitability, and monitoring plan depend on the patient and anesthesia team."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "General anesthesia and respiratory emergencies",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Use in the lecture",
                "text": "May be needed for urgent cesarean birth or when regional techniques are unsuitable. It produces unconsciousness and requires an anesthesia airway/ventilation plan; do not equate every prior spinal operation or cardiac diagnosis with an automatic contraindication to regional anesthesia."
              },
              {
                "label": "Nursing care",
                "text": "Assist preparation/consent as circumstances allow, verify readiness, and monitor recovery, consciousness, breathing, BP, bleeding, and newborn transition with the team."
              },
              {
                "label": "Newborn safety clarification",
                "text": "For a newborn with ineffective breathing after medication exposure, effective ventilation and the neonatal resuscitation response take priority. Do not use the slide’s neonatal naloxone dose table as a substitute for resuscitation; doses and reversal decisions follow the responsible clinical team."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Evaluate comfort and safety together",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Reassess reported relief, coping, maternal respirations/consciousness and BP, fetal response, motor/sensory recovery, bladder needs, and readiness for safe movement.",
              "Communicate inadequate relief, excessive sedation, hypotension, breathing changes, or a concerning fetal response promptly; continue support even when medication is used.",
              "Include the patient in the next step and explain changes to the pain plan. The goal is effective, acceptable relief with ongoing maternal/fetal safety."
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Based on Pain Management in Labor, pages 2–18, and the labor-support material in Processes of Labor & Birth, pages 49–50. Brief safety clarifications address anatomy, fixed dilation/fluid rules, overly broad contraindications, and prioritizing newborn ventilation over the slide’s reversal-dose table.",
    "answerSources": [
      {
        "title": "Assigned lecture — Pain management in labor",
        "url": "#/ob-final/presentation/labor-pain-management"
      },
      {
        "title": "Assigned lecture — Processes of labor & birth",
        "url": "#/ob-final/presentation/labor-and-birth"
      },
      {
        "title": "Safety clarification — ASA obstetric anesthesia guidance",
        "url": "https://doi.org/10.1097/aln.0000000000000935"
      },
      {
        "title": "Safety clarification — AHA/AAP neonatal resuscitation",
        "url": "https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/neonatal-resuscitation"
      }
    ]
  },
  {
    "id": "induction-augmentation",
    "weekIds": [
      "week-5"
    ],
    "topicIds": [],
    "title": "Induction and augmentation safety",
    "text": "Explain preparation and nursing monitoring for cervical ripening, induction, augmentation, and amniotomy. Identify contraindications, medication safety concerns, and changes in uterine or fetal status that require action.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Induction initiates labor; augmentation strengthens labor that has already begun. Cervical ripening prepares an unfavorable cervix for the process.",
          "The supplied slides cover vaginal prostaglandins and IV oxytocin, emphasizing the risk of excessive contractions and maternal/fetal compromise.",
          "Before and during treatment, review the indication, birth history/contraindications, cervical and membrane findings, uterine activity, fetal status, and response to each intervention."
        ]
      },
      {
        "type": "group",
        "title": "Preparation and contraindications from the lecture",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Prepare and explain",
                "text": "Confirm the plan and ordered agent, discuss the procedure, assess the cervix’s readiness, review previous birth/uterine incision history, and obtain baseline maternal/fetal and contraction findings."
              },
              {
                "label": "Contraindications and placental concerns",
                "text": "The slides name placenta previa, vasa previa, and prior cesarean. Safety clarification: prior cesarean is not a blanket prohibition of every induction method; the uterine incision, proposed drug, and obstetric plan matter."
              },
              {
                "label": "Vasa previa clarification",
                "text": "Unprotected fetal vessels cross or lie near the cervical opening. An off-center or velamentous insertion alone does not establish vasa previa. Confirm the diagnosis and birth plan before proceeding with a membrane/labor intervention."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Cervical ripening: understand the purpose and drug checks",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Purpose and examples",
                "text": "The lecture describes prostaglandins to soften/ripen the cervix when it is not favorable: dinoprostone (Cervidil) and misoprostol (Cytotec). Follow the specific ordered product, route, and administration instructions."
              },
              {
                "label": "Observe the response",
                "text": "Monitor contractions and FHR before/after treatment, maternal symptoms, and cervical/labor changes. Escalate excessive contractions or an abnormal fetal response rather than automatically giving the next dose."
              },
              {
                "label": "Medication safety clarification",
                "text": "Do not use the slide’s “two Cervidil doses 12 hours apart” as a universal regimen. The insert has removal and oxytocin-spacing requirements, and prostaglandin use after a uterine scar requires drug-specific review. This summary does not supply a replacement dosing schedule."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Oxytocin: monitor the patient, not just the pump setting",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Purpose",
                "text": "Oxytocin can initiate labor or strengthen ineffective contractions. The lecture emphasizes a carefully titrated IV infusion; verify the ordered concentration, units, pump rate, and escalation schedule."
              },
              {
                "label": "Watch maternal and fetal tolerance",
                "text": "Assess contraction frequency, duration, relaxation/resting tone, labor progress, maternal status, and the FHR response. More frequent/longer contractions are not automatically better if perfusion/recovery is impaired."
              },
              {
                "label": "Dosing clarification",
                "text": "The slide’s milliunits/minute starting rate is an initial infusion rate, not an IV push/loading bolus. Use the actual medication order and unit protocol rather than treating the lecture’s example concentration/titration as a universal prescription."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Amniotomy: relate membrane care to the lecture’s risks",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "What it means",
                "text": "Amniotomy is intentional rupture of the membranes as part of an ordered labor plan. Review presenting-part position/engagement, fetal status, and the indication before the procedure. Guideline clarification: explain/verify consent and confirm the head is stable and well applied; unresolved placental/vessel or presentation concerns need obstetric review before rupture."
              },
              {
                "label": "Assessment afterward",
                "text": "Reassess FHR promptly and record the rupture time and fluid amount/color/odor. The lecture warns about cord prolapse when the presenting part is not engaged; a new concerning FHR change after rupture needs prompt assessment and escalation."
              },
              {
                "label": "Limit of the supplied material",
                "text": "The PDFs do not provide a complete amniotomy protocol. Guideline clarification: continue maternal temperature, fluid, contraction and fetal assessment after rupture, limiting unnecessary digital examinations. Exact procedural steps remain clinician-led."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "When uterine or fetal findings require action",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Recognize contractions that are too frequent, prolonged, or poorly separated, especially with decelerations or a change in variability. Use the tachysystole definition in the strip-reading objective.",
              "Stop/reduce oxytocin as indicated by the safety protocol, reposition, assess maternal BP and FHR, and contact the provider; withhold further ripening medication and follow product-specific removal instructions when indicated.",
              "Give ordered treatment for the likely cause and reassess contractions, resting intervals, maternal status, and the fetal pattern. Persistent compromise requires urgent escalation and possible birth preparation."
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "From Processes of Labor & Birth, pages 7–13, 24–28, and 42–48, and Fetal & Maternal Monitoring, pages 46–50. Keeps to the named methods; flags the incomplete amniotomy protocol and clarifies unsafe blanket scar/drug/dose instructions without adding a new dosing regimen. Final review clarification adds consent, stable presenting-part checks and ongoing surveillance using NICE guidance; the PDFs still do not provide a complete amniotomy procedure.",
    "answerSources": [
      {
        "title": "Assigned lecture — Processes of labor & birth",
        "url": "#/ob-final/presentation/labor-and-birth"
      },
      {
        "title": "Assigned lecture — Fetal & maternal monitoring in labor",
        "url": "#/ob-final/presentation/fetal-monitoring"
      },
      {
        "title": "Medication clarification — CERVIDIL prescribing information",
        "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f3bc9031-0620-4a50-b440-f661cadfeb1d"
      },
      {
        "title": "Safety clarification — ACOG labor induction",
        "url": "https://www.acog.org/womens-health/faqs/labor-induction"
      },
      {
        "title": "NICE: amniotomy preparation and cord-prolapse precautions clarification",
        "url": "https://www.nice.org.uk/guidance/ng207/chapter/recommendations"
      }
    ]
  },
  {
    "id": "complicated-labor",
    "weekIds": [
      "week-6"
    ],
    "topicIds": [],
    "title": "Complicated labor and membrane rupture",
    "text": "Compare preterm and post-term labor, dysfunctional and precipitous labor, PROM/PPROM, and suspected intraamniotic infection. For each, describe recognition, collaborative management, and maternal and newborn nursing priorities.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Start with gestational age, contractions/cervical change, membrane status, maternal vital signs, and fetal response; similar symptoms can have different causes.",
          "Compare early birth and infection risks with post-term placental/fluid risks; distinguish slow or ineffective labor from birth progressing in under 3 hours.",
          "Recognize deterioration, notify the team, give ordered treatment, and reassess both patients. The labeled guideline supplements explain missing assessment and decision points; medication choices follow the individual obstetric plan."
        ]
      },
      {
        "type": "group",
        "title": "Preterm labor: recognize the pattern and risks",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Definition clarification",
                "text": "Preterm labor occurs before 37 completed weeks and involves contractions with cervical change. The slide’s “<37 6/7 weeks” is too broad. Prematurity describes gestational age; low birth weight describes weight."
              },
              {
                "label": "Risk cues from the PDF",
                "text": "Prior preterm birth, short cervix/cervical insufficiency, multiple gestation, uterine abnormalities, membrane rupture, infection, placental problems, smoking/substance exposure, poor nutrition, and limited prenatal care warrant closer assessment."
              },
              {
                "label": "Symptoms to report",
                "text": "Contractions or cramping, low backache, pelvic pressure, increased discharge, or leaking fluid. Gastrointestinal symptoms may accompany these findings; assess the pattern rather than diagnosing from one symptom."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Preterm assessment and teaching: act on symptoms",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Assess and report",
                "text": "Establish gestational age; assess uterine activity, cervical change, membranes, vital signs, and FHR. The lecture lists CBC, metabolic/electrolyte studies, and urine testing; obtain ordered studies and trend relevant findings."
              },
              {
                "label": "Test clarification",
                "text": "Fetal fibronectin may help assess preterm-birth risk in selected patients with intact membranes. It is not a stand-alone test confirming ruptured membranes."
              },
              {
                "label": "Safety clarification",
                "text": "Contact the maternity team promptly for symptoms or fluid leakage; do not delay evaluation to complete the slide’s one-hour rest/hydration trial. Routine bed rest/activity restriction is not an effective prevention treatment; restrictions require an individual indication."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Preterm treatment: separate the medication purposes",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Corticosteroid",
                "text": "Betamethasone promotes fetal maturation and reduces complications of prematurity. The lecture centers on approximately 24–34 weeks. Timing clarification: greatest benefit generally develops over about 2 days, with some benefit sooner; the slide’s dose alternatives are not reproduced as a prescribing schedule."
              },
              {
                "label": "Tocolysis versus neuroprotection",
                "text": "A selected short course of tocolysis may buy time for fetal treatment or transfer; it does not cure the cause. Magnesium sulfate before anticipated early birth, generally <32 weeks, is for fetal neuroprotection, not routine PPROM tocolysis."
              },
              {
                "label": "Nursing priorities",
                "text": "Administer actual orders; reassess maternal vital signs, respiratory status/lung sounds, infection findings, contractions, and FHR. Prepare the neonatal team if birth progresses: the PDF emphasizes malpresentation, cord risk, respiratory support, and family support."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "PROM and PPROM: identify what ruptured and when",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Definition clarification",
                "text": "PROM means prelabor rupture of membranes: the sac ruptures before labor, without a required one-hour interval. PPROM is the same event before 37 completed weeks."
              },
              {
                "label": "Assess immediately",
                "text": "Record when leakage began, the fluid’s amount, color and odor, contractions, gestational age, maternal vital signs, and FHR. A new fetal abnormality after rupture raises concern for cord compression/prolapse."
              },
              {
                "label": "Why it matters",
                "text": "Loss of the membrane barrier increases infection risk. PPROM also creates the competing risk of premature birth; the plan balances the condition of mother and fetus with gestational maturity."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Guideline supplement: confirm rupture and reduce infection risk",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Confirm the finding",
                "text": "Assist with a sterile speculum assessment for fluid pooling/leakage. If uncertain, the clinician may use a validated amniotic-fluid test; interpret it with the history and examination."
              },
              {
                "label": "Protect the patient",
                "text": "Avoid routine repeated digital cervical examinations because of infection risk. An urgent examination for suspected cord prolapse is a different situation."
              },
              {
                "label": "Keep assessing",
                "text": "Record fluid, temperature, uterine tenderness, contractions, bleeding, and FHR; report a change rather than relying on one reassuring test."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "PROM and PPROM: compare the management priorities",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "PROM at term",
                "text": "The lecture anticipates induction and continued maternal–fetal assessment. Explain the plan and report fever, uterine tenderness, abnormal fluid, or FHR changes."
              },
              {
                "label": "PPROM",
                "text": "Selected stable patients may receive expectant care, hospital monitoring, antibiotics, and gestation-appropriate fetal preparation. Watch for infection or fetal compromise that changes the plan."
              },
              {
                "label": "Safety clarification",
                "text": "The slide’s automatic “wait 24 hours / induce if ≥34 weeks” and blanket terbutaline-or-magnesium statements are not universal rules. Delivery timing, antibiotics, and any attempt to delay birth require the obstetric plan; suspected infection or compromise needs prompt reassessment rather than waiting out a clock."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Guideline supplement: how gestational age changes PROM care",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Stable at 24–33 weeks + 6 days",
                "text": "Expectant care usually includes surveillance, latency antibiotics, and fetal preparation; the team also plans GBS (group B streptococcus) assessment/prophylaxis."
              },
              {
                "label": "Stable at 34–36 weeks + 6 days",
                "text": "ACOG permits expectant management or delivery after counseling; expectant care does not extend beyond 37 weeks. Latency antibiotics are not routine in this interval."
              },
              {
                "label": "At 37 weeks or later",
                "text": "Induction is generally recommended if labor has not begun; a brief expectant period may be discussed."
              },
              {
                "label": "When waiting is unsafe",
                "text": "Infection, abruption, cord prolapse, or nonreassuring fetal status changes the plan toward urgent treatment/birth. Earlier PPROM needs individualized maternal–fetal medicine/neonatal counseling."
              },
              {
                "label": "Two antibiotic purposes",
                "text": "Latency antibiotics support continued pregnancy and reduce infection risk. They do not replace intrapartum GBS prophylaxis when indicated; expectant management means continuing pregnancy with close maternal–fetal monitoring."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Suspected intraamniotic infection: recognize and escalate",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Cues in the lecture",
                "text": "Prolonged membrane rupture increases risk. Maternal fever, fetal tachycardia, uterine tenderness, and foul-smelling amniotic fluid form the lecture’s recognition cluster."
              },
              {
                "label": "Collaborative response",
                "text": "Notify the obstetric team promptly, trend maternal vital signs and FHR, administer ordered antibiotics, and prepare for the team’s birth plan. Communicate suspected infection to the newborn team for assessment after birth."
              },
              {
                "label": "Safety clarification and evaluation",
                "text": "Do not wait until rupture has lasted 24 hours to treat suspected infection. Reassess temperature, perfusion, symptoms, and fetal response. Infection alone does not automatically require cesarean birth."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Post-term pregnancy: surveillance and birth planning",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Definition",
                "text": "Post-term begins at 42 weeks. The lecture discusses induction around 41 weeks; that planning point is earlier than the post-term definition."
              },
              {
                "label": "Compare the risks",
                "text": "Maternal: dysfunctional labor, fatigue, perineal trauma, hemorrhage, and infection. Fetal: abnormal growth/macrosomia, birth injury, declining placental function, and oligohydramnios."
              },
              {
                "label": "Nursing and collaborative priorities",
                "text": "Review dating and the ordered induction/surveillance plan. The PDF names nonstress testing and biophysical profile. Assess fetal well-being and labor progress, explain the reason for testing, and promptly report concerning changes."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Dysfunctional labor: connect the cause with the pattern",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "What it means",
                "text": "Dystocia is long, difficult, or abnormal labor. Consider powers (contractions), passage (bony or soft-tissue obstruction), passenger (fetal size/position), maternal position, and psychological response."
              },
              {
                "label": "Recognize and reassess",
                "text": "The lecture distinguishes hypertonic dysfunction from hypotonic uterine inertia and lists prolonged/protracted dilation, arrest, and poor descent. Assess the contraction/progress trend, FHR, fatigue, hydration, pain, and coping; a pattern name alone does not establish its cause."
              },
              {
                "label": "Nursing application",
                "text": "Report the findings, assist with positioning and comfort, and follow the team’s plan for inadequate contractions versus obstruction. Oxytocin overstimulation can itself worsen problems; continued stimulation is not the answer to every slow labor."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Guideline supplement: slow labor versus active-phase arrest",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Use the right phase",
                "text": "Active labor begins at 6 cm. A slow latent phase alone is not active-phase arrest."
              },
              {
                "label": "Current arrest criteria",
                "text": "At ≥6 cm with ruptured membranes, no cervical change despite 4 hours of adequate uterine activity or 6 hours of inadequate activity with oxytocin supports the clinician’s diagnosis of active-phase arrest."
              },
              {
                "label": "Match the response to the cause",
                "text": "Support position, hydration, analgesia, and reassessment. Inadequate contractions may need ordered augmentation when appropriate; suspected obstruction or established arrest may require operative birth."
              },
              {
                "label": "Nursing evaluation",
                "text": "Trend dilation/descent, contraction pattern, maternal condition and FHR. These criteria never require waiting through hemorrhage, tachysystole with compromise, or another emergency."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Precipitous labor: prepare for a rapidly changing birth",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Recognition",
                "text": "The lecture defines precipitous labor as birth occurring after labor lasting <3 hours. Rapid progress contrasts with the prolonged or arrested patterns of dystocia."
              },
              {
                "label": "Lecture associations",
                "text": "Strong/hypertonic uterine activity, tachysystole, placental abruption, and recent cocaine exposure are listed. Assess the actual contractions, bleeding, pain, and FHR rather than assuming rapid labor is uncomplicated."
              },
              {
                "label": "Nursing application and evaluation",
                "text": "Stay with the patient, summon birth/newborn assistance, and prepare for an unexpectedly fast birth. After birth, assess bleeding and perineal injury and ensure newborn assessment; continue communication and reassurance."
              }
            ]
          }
        ]
      }
    ],
    "answerSourceNote": "Lecture base: Labor & Birth Complications pages 2–17, 22–24 and 31; supportive care from Pain Management pages 2–5 and 12. Labeled guideline supplements cover membrane-rupture confirmation, ACOG gestational-age decision points and labor-arrest assessment. They are additional guidance, not content claimed to appear in the PDFs. Local orders and specialist assessment determine the patient’s plan; no medication dosing table is added.",
    "answerSources": [
      {
        "title": "Original PDF — Labor & birth complications",
        "url": "#/ob-final/presentation/labor-complications"
      },
      {
        "title": "Original PDF — Pain management in labor",
        "url": "#/ob-final/presentation/labor-pain-management"
      },
      {
        "title": "Definition/safety clarification — ACOG preterm labor and birth",
        "url": "https://www.acog.org/womens-health/faqs/preterm-labor-and-birth"
      },
      {
        "title": "Safety clarification — SMFM activity restriction",
        "url": "https://publications.smfm.org/publications/326-society-for-maternal-fetal-medicine-consult-series-50/"
      },
      {
        "title": "Definition/safety clarification — ACOG prelabor rupture of membranes",
        "url": "https://doi.org/10.1097/AOG.0000000000003700"
      },
      {
        "title": "Safety clarification — ACOG intraamniotic infection",
        "url": "https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2017/08/intrapartum-management-of-intraamniotic-infection"
      },
      {
        "title": "Test clarification — NICE preterm labor assessment",
        "url": "https://www.nice.org.uk/guidance/ng25/chapter/Recommendations"
      },
      {
        "title": "Guideline supplement — RCOG PPROM diagnosis",
        "url": "https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/care-of-women-presenting-with-suspected-preterm-prelabour-rupture-of-membranes-from-24plus0-weeks-of-gestation-green-top-guideline-no-73/"
      },
      {
        "title": "Guideline supplement — ACOG labor progress and arrest",
        "url": "https://doi.org/10.1097/AOG.0000000000005447"
      }
    ],
    "answerReviewedOn": "2026-11-21"
  },
  {
    "id": "assisted-cesarean-birth",
    "weekIds": [
      "week-6"
    ],
    "topicIds": [],
    "title": "Assisted vaginal and cesarean birth",
    "text": "Explain indications, preparation, consent, assessment, and complications associated with operative vaginal and cesarean birth. Describe postoperative monitoring, pain management, mobility, recovery teaching, and evaluation.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Operative vaginal birth uses forceps or vacuum to assist a low fetal head; cesarean birth may be needed for obstruction, malpresentation, or unresolved maternal–fetal compromise.",
          "Explain the reason and plan, support informed consent, check preparation and anesthesia needs, monitor FHR, and prepare for a change in birth route if assistance is unsuccessful.",
          "After birth, assess bleeding, breathing, pain/anesthesia recovery, incision, bladder/bowel function, mobility and emotional well-being. Labeled guideline supplements add preparation, prevention, recovery teaching and evaluation beyond the brief PDFs."
        ]
      },
      {
        "type": "group",
        "title": "Birth route: connect the indication with the situation",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Assisted vaginal birth",
                "text": "Forceps permit traction/rotation of the head; vacuum uses a suction cup. Guideline supplement: assistance may be considered for poor progress, fetal concerns, or inability to push safely when prerequisites for a feasible vaginal birth are met."
              },
              {
                "label": "Cesarean cues in the PDF",
                "text": "Dystocia/cephalopelvic disproportion, breech presentation, and fetal compromise may lead to surgical birth. Cord prolapse is an emergency example when rapid vaginal birth is not available."
              },
              {
                "label": "Future birth",
                "text": "VBAC means vaginal birth after cesarean; a trial of labor assesses whether vaginal birth can proceed safely. A prior cesarean does not automatically decide every future birth route; the obstetric team determines candidacy."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Preparation and consent: make the plan understandable",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Communication",
                "text": "Use the lecture’s pain-management framework: discuss what is happening, respect maternal choices, explain procedures, and verify informed consent. Refer unanswered questions about risks, benefits, alternatives, or the proposed operation to the clinician obtaining consent."
              },
              {
                "label": "Nursing preparation",
                "text": "Assess maternal status, FHR, IV access/hydration, pain plan, bladder status, and the presenting part/progress. Assist with positioning and explain who will provide birth, anesthesia, and newborn care."
              },
              {
                "label": "Safety clarification",
                "text": "Before operative vaginal birth, the team confirms full cervical dilation, ruptured membranes, known head position/station, adequate analgesia, an empty bladder, and readiness for cesarean if the attempt fails. The slide’s abbreviated list is not the full eligibility checklist."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Guideline supplement: cesarean preparation and prevention",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Before the procedure",
                "text": "Verify identity/procedure, consent, allergies and baseline maternal/FHR findings. Handoff the indication/urgency, IV access, medications, relevant history and last oral intake to the obstetric/anesthesia team."
              },
              {
                "label": "Laboratory and infection checks",
                "text": "Confirm ordered CBC and blood group/antibody screen; arrange additional blood preparation according to risk. Administer ordered prophylactic antibiotics before skin incision."
              },
              {
                "label": "Prevent venous clots",
                "text": "SMFM recommends sequential compression devices before cesarean and until fully ambulatory. Check fit/use; pharmacologic prophylaxis follows the individual risk assessment and neuraxial-anesthesia timing plan."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Forceps and vacuum: watch progress and fetal response",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "During assistance",
                "text": "Monitor FHR and communicate changes. Observe and document descent, the instrument used, attempts/detachments, timing, and maternal response with the delivering team."
              },
              {
                "label": "When progress is absent",
                "text": "The lecture says descent must occur to continue vacuum use. Escalate lack of descent or repeated cup detachments; the operator reassesses and may abandon assistance for cesarean."
              },
              {
                "label": "Safety clarification",
                "text": "The slide’s “3 pop-offs” is not permission to keep pulling through poor progress or fetal compromise. Stopping limits depend on the instrument and local protocol; agree on a contingency plan before starting."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Birth trauma: distinguish perineal and newborn injuries",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Maternal risk",
                "text": "Forceps/vacuum and a large fetus increase perineal trauma risk. Assess bleeding, pain, swelling, repair, and hematoma findings. The PDF contrasts midline episiotomy’s potential sphincter extension with greater pain/blood loss and repair difficulty in mediolateral incisions."
              },
              {
                "label": "Laceration depth",
                "text": "First degree: skin/superficial tissue. Second: perineal muscles. Third: anal sphincter. Fourth: extends into rectal mucosa. These describe injury depth, not a pain scale."
              },
              {
                "label": "Newborn risk",
                "text": "The lecture lists cephalohematoma and extensive caput after instrumental birth, with clavicular/brachial plexus injury in macrosomia/shoulder dystocia. Communicate the birth history and abnormal findings to the newborn team for assessment and follow-up."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Cesarean anesthesia: connect monitoring with the risk",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Regional versus general",
                "text": "The original pain PDF identifies spinal anesthesia as common for cesarean and general anesthesia for selected urgent births or when regional techniques cannot be used. Choice belongs to the anesthesia/obstetric plan."
              },
              {
                "label": "Nursing role",
                "text": "Check IV access, assist with positioning, assess maternal BP/respiratory status and fetal well-being, and monitor bladder function. Maternal hypotension can reduce fetal perfusion; opioids/anesthesia may impair breathing. Spinal headache requires assessment."
              },
              {
                "label": "Safety clarification",
                "text": "Epidural medication enters the epidural space; spinal medication enters the intrathecal space. The slides’ fixed fluid preload and cervical-dilation rule are not universal orders. Follow the individual anesthesia plan and monitoring requirements."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Guideline supplement: recovery after anesthesia",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Immediate observation",
                "text": "After general anesthesia, provide continuous one-to-one observation by a clinician with airway skills until airway control, circulation and communication recover. After regional anesthesia, continue one-to-one observation until hemodynamically stable."
              },
              {
                "label": "Handoff and monitoring",
                "text": "Document anesthesia/opioid type and timing, blood loss, fluids, urine output and complications. Follow the anesthesia-specific observation plan; neuraxial opioids can cause delayed respiratory depression."
              },
              {
                "label": "Escalate promptly",
                "text": "Assess sedation, respiratory rate, oxygen saturation, BP, pulse, pain and bleeding together. Excessive sleepiness, slow/ineffective breathing, falling saturation or unstable observations needs urgent review."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Recovery monitoring: assess the whole postpartum patient",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Bleeding and perfusion",
                "text": "Assess vital signs and trends, uterine position/tone, lochia amount/clots, and blood loss. Cesarean birth does not eliminate vaginal bleeding. Escalate increasing bleeding, abnormal perfusion, or deterioration."
              },
              {
                "label": "Incision and pain",
                "text": "Use the supplied redness, edema, ecchymosis, drainage, and approximation assessment. Report concerning drainage/separation, fever, or increasing pain; distinguish expected discomfort from a worsening pattern."
              },
              {
                "label": "Bladder, bowel, and breathing",
                "text": "Follow urine output/return of voiding, bladder distention, bowel sounds/function, intake tolerance, respiratory rate, and oxygen saturation. The postpartum PDF specifically identifies increasing respirations or low saturation as abnormal, not routine recovery."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Guideline supplement: pain relief and safe mobility",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Multimodal pain relief",
                "text": "As prescribed and appropriate for the patient, acetaminophen plus an NSAID can reduce opioid requirements; opioids may be added for breakthrough pain. Pair medication with positioning, relaxation and reassurance; reassess function as well as the pain score and check contraindications."
              },
              {
                "label": "Medication safety",
                "text": "Check total acetaminophen across combination products. With opioids, assess alertness and breathing; discuss infant sedation/feeding concerns if breastfeeding and follow the prescribed lactation-compatible plan."
              },
              {
                "label": "Mobilize safely",
                "text": "Assist early short walks once anesthesia recovery and circulation permit. Continue ordered clot prevention, support the incision during movement, and reassess dizziness, pain and leg symptoms. Do not use Homan’s sign to screen for DVT."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Guideline supplement: intake, voiding and newborn care",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Food and drink",
                "text": "Uncomplicated recovery generally allows normal eating/drinking as tolerated. Persistent vomiting, marked distention or worsening abdominal pain needs review rather than routine diet advancement."
              },
              {
                "label": "Urinary recovery",
                "text": "Track catheter output, distention and ability to void after removal. Remove the catheter according to mobility, anesthesia recovery and the ordered plan; report retention."
              },
              {
                "label": "Family-centered recovery",
                "text": "Help with skin-to-skin, feeding positions that protect the incision, and lifting/handling the newborn safely. Include the chosen support person, discuss the birth experience and emotional needs, and check that pain control enables care. An unplanned cesarean may bring grief or disappointment."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Guideline supplement: incision care and recovery at home",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Teach wound care",
                "text": "Gently clean and dry the incision daily; follow the dressing/stitch plan. Report spreading redness, increasing wound pain, drainage or separation."
              },
              {
                "label": "Activity and help",
                "text": "Build up gentle movement; arrange help with heavier tasks. Resume driving, exercise, heavier lifting and sex when recovered and cleared according to the individual plan; driving also requires safe vehicle control and freedom from sedating medication effects."
              },
              {
                "label": "Follow-up and teach-back",
                "text": "Confirm medication instructions, wound review and contact details. ACOG recommends postpartum contact within 3 weeks and comprehensive care by 12 weeks, with earlier review for individual needs. Ask the patient to explain self-care and when/where to get help."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Guideline supplement: warning signs and readiness for discharge",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Get emergency help",
                "text": "Chest pain, trouble breathing, fainting, uncontrolled heavy bleeding, or thoughts of harming self/baby need immediate help. Severe or worsening headache, visual changes, severe abdominal pain, or one-sided painful leg swelling need urgent assessment."
              },
              {
                "label": "Contact care promptly",
                "text": "Fever ≥38°C/100.4°F, worsening wound findings, painful urination or difficulty voiding need assessment; do not dismiss them as normal recovery."
              },
              {
                "label": "Evaluate readiness",
                "text": "Look for stable observations, controlled bleeding, a satisfactory wound, oral intake, a voiding plan and safe mobility. Pain should allow self-care; confirm support, follow-up and understanding of warning signs rather than using a fixed discharge day."
              }
            ]
          }
        ]
      }
    ],
    "answerSourceNote": "Lecture base: Labor & Birth Complications pages 18–24, 26–33 and 42; Pain Management pages 2–5, 9–13 and 15–18; Postpartum Care pages 4, 11–13, 21, 25–31, 34–40, 52–53 and 59. Labeled guideline supplements now fill preparation, prophylaxis, anesthesia recovery, pain/mobility, intake/voiding, wound teaching, follow-up and warning-sign gaps. Those additions come from the linked professional/public-health guidance, not the original slides. Drug doses and exact observation, catheter and activity schedules remain patient- and institution-specific.",
    "answerSources": [
      {
        "title": "Original PDF — Labor & birth complications",
        "url": "#/ob-final/presentation/labor-complications"
      },
      {
        "title": "Original PDF — Pain management in labor",
        "url": "#/ob-final/presentation/labor-pain-management"
      },
      {
        "title": "Original PDF — Postpartum care & assessment",
        "url": "#/ob-final/presentation/postpartum-care"
      },
      {
        "title": "Safety clarification — CRICO operative vaginal birth",
        "url": "https://www.rmf.harvard.edu/Risk-Prevention-and-Education/Guidelines-and-Algorithms-Catalog-Page/Guidelines-Algorithms/2026/OB-Guideline-Files/Guideline18-Operative-Vaginal-Birth"
      },
      {
        "title": "Safety clarification — ASA obstetric anesthesia guidance",
        "url": "https://doi.org/10.1097/ALN.0000000000000935"
      },
      {
        "title": "Guideline supplement — RCOG assisted-birth indications",
        "url": "https://www.rcog.org.uk/for-the-public/browse-our-patient-information/assisted-vaginal-birth-ventouse-or-forceps/"
      },
      {
        "title": "Guideline supplement — NICE cesarean preparation and monitoring",
        "url": "https://www.nice.org.uk/guidance/ng192/chapter/Recommendations"
      },
      {
        "title": "Guideline supplement — ACOG postpartum pain management",
        "url": "https://www.acog.org/clinical/clinical-guidance/clinical-consensus/articles/2021/09/pharmacologic-stepwise-multimodal-approach-for-postpartum-pain-management"
      },
      {
        "title": "Guideline supplement — SMFM cesarean thromboprophylaxis",
        "url": "https://publications.smfm.org/publications/327-society-for-maternal-fetal-medicine-consult-series-51/"
      },
      {
        "title": "Guideline supplement — NHS cesarean recovery",
        "url": "https://www.nhs.uk/tests-and-treatments/caesarean-section/recovery/"
      },
      {
        "title": "Guideline supplement — CDC urgent maternal warning signs",
        "url": "https://www.cdc.gov/hearher/maternal-warning-signs/index.html"
      },
      {
        "title": "Guideline supplement — ACOG postpartum follow-up",
        "url": "https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2018/05/optimizing-postpartum-care"
      }
    ],
    "answerReviewedOn": "2026-11-21"
  },
  {
    "id": "shoulder-dystocia",
    "weekIds": [
      "week-6"
    ],
    "topicIds": [
      "labor-emergencies"
    ],
    "title": "Shoulder dystocia",
    "text": "Recognize shoulder dystocia, identify contributing risks, and explain the nurse’s immediate actions and role during corrective maneuvers. Include actions to avoid, team communication, timing, documentation, and newborn assessment after birth.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Shoulder dystocia occurs after the head is born when an impacted shoulder prevents the body from delivering with routine gentle traction. Recognize it and call for help immediately.",
          "Assist with McRoberts positioning and directed suprapubic pressure; support the delivering clinician during further maneuvers. Never apply fundal pressure or forceful traction.",
          "Time and communicate the response, document the maneuver sequence and birth times, and reassess maternal bleeding/trauma and the newborn’s breathing, arms, and clavicles."
        ]
      },
      {
        "type": "group",
        "title": "Recognition: act when the shoulder is impacted",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Lecture cue",
                "text": "The head has delivered, but the anterior shoulder is trapped beneath the pubic arch and the body does not follow. This creates an urgent risk of hypoxia and birth injury."
              },
              {
                "label": "Safety clarification",
                "text": "Do not wait 2 minutes to call shoulder dystocia. The need for additional maneuvers after routine gentle traction is the key recognition point; the slide’s timing statement is not a diagnostic waiting period."
              },
              {
                "label": "Nursing priority",
                "text": "Announce the emergency, summon help, and begin/continue timing from birth of the head while the team acts. A listed risk factor is not required before taking the finding seriously."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Contributing risks: prepare without assuming certainty",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Key lecture risks",
                "text": "Previous shoulder dystocia, suspected macrosomia, maternal obesity, postdates pregnancy, abnormal fetal position, prolonged/ineffective labor, and a high head at complete dilation are listed."
              },
              {
                "label": "Why size matters",
                "text": "The lecture defines macrosomia as >4000 g and connects it with disproportion, difficult labor, maternal lacerations/hemorrhage, and fetal clavicular or brachial plexus injury."
              },
              {
                "label": "Risk clarification",
                "text": "Risk factors do not reliably predict every event. Maintain readiness even when the pregnancy seemed low risk; do not treat an estimated weight or a long risk list as proof of impaction."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Immediate nursing role: coordinate people and communication",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Call and allocate roles",
                "text": "Activate the obstetric emergency response and summon additional nursing, obstetric, anesthesia, and newborn support. Assign assistance with positioning, timekeeping/documentation, and equipment."
              },
              {
                "label": "At the bedside",
                "text": "Explain briefly what is happening and ask the patient to stop pushing as the delivering clinician directs. Assist with the named maneuvers and communicate requests/completion clearly so the team knows what has been attempted."
              },
              {
                "label": "Track the response",
                "text": "The lecture calls for elapsed-time announcements at 30-second to 1-minute intervals. Continue updating the team during active treatment; timekeeping must support the response rather than delay it."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Corrective maneuvers: understand the nurse’s assisting role",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "McRoberts",
                "text": "Assist the patient onto her back with thighs sharply flexed toward the abdomen/chest. This changes the pelvic relationship. The PDF illustration distinguishes this from the all-fours knee-chest position used for cord prolapse."
              },
              {
                "label": "Suprapubic pressure",
                "text": "Under the delivering clinician’s direction, apply pressure just above the pubic bone to help dislodge/adduct the impacted anterior shoulder. The lecture positions the assistant on the fetal-back side; confirm direction with the clinician."
              },
              {
                "label": "Woods screw",
                "text": "The delivering clinician uses internal rotation of the shoulders to relieve impaction. Assist with position, communication, and supplies; the diagram is a concept illustration, not a substitute for supervised maneuver training."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Actions to avoid: prevent additional injury",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Fundal pressure",
                "text": "Do not apply it: pressure over the uterine fundus can worsen impaction. Suprapubic pressure is anatomically different."
              },
              {
                "label": "Traction safety clarification",
                "text": "Do not use forceful, jerking, or excessive downward traction on the head/neck. Escalation uses coordinated maneuvers rather than stronger pulling."
              },
              {
                "label": "Escalation clarification",
                "text": "The slide mentions a stat cesarean. Once the head is born, an ordinary transfer for cesarean is not a simple next step; persistent impaction requires immediate expert rescue at the bedside, with operative/anesthesia support as directed. No advanced rescue procedure is taught by these notes."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Timing and documentation: make the sequence clear",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Times and team",
                "text": "Record head-birth time, recognition/help call, team arrival, each maneuver and response, and body-birth time. The nurse’s elapsed-time announcements support a shared record."
              },
              {
                "label": "What happened",
                "text": "Include fetal orientation/affected shoulder when identified, sequence of positions/pressure/internal maneuvers, clinicians involved, and relevant maternal/newborn findings. Documentation clarification: use contemporaneous, factual entries rather than a single “difficult delivery” label."
              },
              {
                "label": "Meaning of elapsed time",
                "text": "The lecture associates longer delay with hypoxia/acidosis. No duration is a guaranteed safe window; continue urgent coordinated care and hand off the actual interval to the newborn team."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "After birth: assess both patients and explain the event",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Newborn assessment",
                "text": "Ensure immediate assessment of breathing and overall condition. The PDF highlights brachial plexus injury and clavicular fracture; nursing application is to observe arm movement/symmetry and report reduced movement, apparent pain, or suspected injury for neonatal evaluation."
              },
              {
                "label": "Maternal assessment",
                "text": "Assess blood loss, uterine tone, vital signs, perineal/rectal injury, and pain. The lecture lists hemorrhage, rectal injury, and pubic injury among possible complications."
              },
              {
                "label": "Evaluation and follow-up",
                "text": "Communicate findings, resuscitation needs, and any injuries; continue reassessment and explain the event to the patient/support person. Document the post-birth examinations and follow-up plan."
              }
            ]
          }
        ]
      }
    ],
    "answerSourceNote": "From Labor & Birth Complications page 23 and pages 35–41, including the McRoberts, suprapubic-pressure and Woods-screw figures. Brief safety clarifications address immediate recognition rather than a two-minute wait, unpredictable risk, traction, rescue escalation and documentation. Advanced maneuvers are not expanded beyond the supplied material.",
    "answerSources": [
      {
        "title": "Original PDF — Labor & birth complications",
        "url": "#/ob-final/presentation/labor-complications"
      },
      {
        "title": "Safety clarification — RCOG shoulder dystocia",
        "url": "https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/shoulder-dystocia-green-top-guideline-no-42/"
      },
      {
        "title": "Safety clarification — RCOG maneuvers and documentation",
        "url": "https://obgyn.onlinelibrary.wiley.com/doi/10.1111/1471-0528.70258"
      },
      {
        "title": "Safety clarification — RCOG patient information and follow-up",
        "url": "https://www.rcog.org.uk/for-the-public/browse-our-patient-information/shoulder-dystocia-green-top-guideline-no-42/"
      }
    ],
    "answerReviewedOn": "2026-11-21"
  },
  {
    "id": "placental-emergency-response",
    "weekIds": [
      "week-3",
      "week-6"
    ],
    "topicIds": [
      "labor-emergencies"
    ],
    "title": "Placental emergencies and hemorrhage response",
    "text": "Apply the nursing process to a patient with bleeding related to placental complications. Prioritize assessment, hemorrhage response, fetal monitoring, preparation for birth, and recognition of shock or coagulopathy, including DIC.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "For suspected placental hemorrhage, assess maternal circulation and fetal status immediately while activating the obstetric/hemorrhage team.",
          "Visible blood loss can underestimate abruption; shock and coagulopathy can develop rapidly. Use trends in perfusion, bleeding, urine output, fetal tracing, and laboratory results.",
          "Stabilize, prepare IV/blood-product support and possible urgent birth, and reassess after each intervention. Do not perform a digital vaginal exam before previa is excluded."
        ]
      },
      {
        "type": "group",
        "title": "First response: recognize severity and summon the team",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Focused assessment",
                "text": "Identify gestational age, bleeding onset/amount, pain, uterine tone/contractions, membrane status, fetal movement, trauma, and known placenta location. Check airway/breathing, pulse/BP, mentation, skin/perfusion, and oxygenation."
              },
              {
                "label": "Escalation",
                "text": "Significant bleeding, severe pain/rigidity, fainting, tachycardia/hypotension, or a concerning fetal tracing requires immediate obstetric help. Activate the hemorrhage pathway early rather than waiting for a laboratory diagnosis or ultrasound."
              },
              {
                "label": "Safety precautions",
                "text": "No digital vaginal examination until previa is excluded. Quantify external loss with weighed materials/collection according to protocol, recognizing that retroplacental blood is concealed. Keep the patient warm, explain actions, and support privacy/consent."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Restore perfusion and prepare blood-product support",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Obtain/maintain large-bore IV access appropriate to severity; draw CBC/platelets, type and crossmatch, fibrinogen, PT/aPTT, and other ordered tests. An initially normal hemoglobin does not exclude acute hemorrhage.",
              "Administer prescribed resuscitation fluids and blood products using the hemorrhage/massive-transfusion protocol when indicated. Monitor warming, compatibility, reactions, and ordered electrolyte/coagulation studies; do not substitute endless crystalloid for definitive hemorrhage treatment.",
              "Reposition as tolerated to reduce aortocaval compression; support maternal oxygenation when hypoxemic or needed for resuscitation. Do not apply routine oxygen solely to treat a fetal tracing in a patient with normal oxygen saturation.",
              "Measure urine output when indicated and trend BP/pulse, consciousness, perfusion, blood loss, and fetal response. Escalate persistent deterioration despite treatment."
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "DIC: simultaneous clotting and bleeding",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Mechanism and triggers",
                "text": "Widespread coagulation consumes platelets/fibrinogen and disrupts perfusion, while breakdown of clots contributes to bleeding. Severe abruption, obstetric sepsis, HELLP, and other major complications can trigger DIC; it is not merely “a low platelet count.”"
              },
              {
                "label": "Clinical/laboratory cues",
                "text": "Oozing from IV/puncture sites, mucosal bleeding, worsening hemorrhage, or organ dysfunction; falling platelets/fibrinogen, prolonged PT/aPTT, and raised fibrin-degradation markers may support the diagnosis. Fibrinogen normally rises in pregnancy, so a falling or unexpectedly low value matters."
              },
              {
                "label": "Priorities",
                "text": "Urgently treat the cause and support circulation with the multidisciplinary team; prepare prescribed blood components guided by clinical/laboratory findings. Avoid unnecessary invasive trauma and repeat assessments/labs as ordered. Do not delay action until every test is abnormal."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Prepare for birth and communicate the plan",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Fetal surveillance",
                "text": "Use continuous fetal monitoring when appropriate for gestation and goals of care; identify persistent abnormalities and notify the team promptly. Maternal resuscitation and preparation for indicated birth occur together."
              },
              {
                "label": "Coordinate resources",
                "text": "Alert obstetric/MFM, anesthesia, operating-room staff, blood bank, and neonatal team. Prepare for urgent cesarean when indicated, while recognizing that mode depends on cause, fetal status, labor progress, and maternal condition."
              },
              {
                "label": "Patient and family support",
                "text": "Give concise updates, explain why rapid action may be needed, and help the patient participate in decisions as possible. Acknowledge fear and potential loss; involve the chosen support person and arrange bereavement care if needed."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Reassess through birth and postpartum",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Evaluation targets",
                "text": "Improving mentation/perfusion, stable vital signs, adequate urine output, controlled bleeding, stabilizing platelet/fibrinogen/coagulation results, and fetal/newborn response. Persistent tachycardia, oliguria, or oozing means the problem may not be controlled."
              },
              {
                "label": "Ongoing risk",
                "text": "Continue to assess uterine tone, postpartum blood loss, shock/coagulopathy, and transfusion complications. Completion of birth does not mean hemorrhage or DIC has resolved."
              },
              {
                "label": "Document and debrief",
                "text": "Record times, assessments, quantified loss, communication, orders/interventions, products, and response. Explain the event and follow-up needs to the patient; evaluate the nursing plan and offer emotional support."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Based on Antepartum Risks, pages 18–25 and 38. This nursing-process answer is shared by Week 3 and Week 6 and the existing labor-emergencies topic; it complements the previa/abruption comparison without changing their placement.",
    "answerSources": [
      {
        "title": "ACOG — Bleeding during pregnancy",
        "url": "https://www.acog.org/womens-health/faqs/bleeding-during-pregnancy"
      },
      {
        "title": "ACOG — Intrapartum fetal heart rate monitoring guideline",
        "url": "https://journals.lww.com/greenjournal/fulltext/2025/10000/acog_clinical_practice_guideline_no_.22.aspx"
      },
      {
        "title": "ACOG — Preeclampsia and high blood pressure",
        "url": "https://www.acog.org/womens-health/faqs/preeclampsia-and-high-blood-pressure-during-pregnancy"
      }
    ]
  },
  {
    "id": "other-birth-emergencies",
    "weekIds": [
      "week-6"
    ],
    "topicIds": [
      "labor-emergencies"
    ],
    "title": "Other emergencies in the labor lectures",
    "text": "Compare cord prolapse, uterine rupture, amniotic fluid embolism, and uterine inversion using the case cues in the lectures. Identify the first action, urgent team response, ongoing monitoring, and evaluation for each.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Use the lecture cues to separate cord compression after membrane rupture, possible uterine rupture, and sudden maternal hypoxic/circulatory collapse with coagulopathy.",
          "Call the emergency team immediately while supporting the threatened function: relieve cord compression, prepare urgent operative/resuscitative care for rupture, or support breathing/circulation for suspected AFE.",
          "Uterine inversion is the uterus turning inside out: activate hemorrhage help and prepare urgent clinician-led replacement. Across emergencies, document the actual response and reassess perfusion, bleeding and newborn condition; labeled supplements add missing follow-through."
        ]
      },
      {
        "type": "group",
        "title": "Cord prolapse: relieve compression while preparing birth",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Lecture cues",
                "text": "The cord descends below the presenting part and may be compressed, reducing fetal oxygenation. Watch FHR after membrane rupture/amniotomy, especially with an unengaged head, breech/transverse lie, or long cord."
              },
              {
                "label": "First actions",
                "text": "Call for help and, as the trained responder, use a sterile-gloved vaginal hand to elevate the presenting part off the cord. Stop an oxytocin infusion; assist with knee-chest/head-down positioning and prepare urgent birth, usually cesarean if vaginal birth is not imminent."
              },
              {
                "label": "Safety clarification and evaluation",
                "text": "Maintain decompression until relieved by the birth team; minimize cord handling and do not try to push it back above the fetus. Continue FHR assessment and communicate whether it improves while birth is organized."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Uterine rupture: treat the cue cluster as an emergency",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Lecture cues",
                "text": "Abnormal FHR, loss of fetal station, abdominal pain/rigidity, and shock suggest rupture. The PDF emphasizes a scarred uterus; risks include multiple cesareans, induced/augmented labor, multifetal gestation, macrosomia, infection, and a short pregnancy interval."
              },
              {
                "label": "Safety clarification: priority response",
                "text": "Activate the obstetric emergency response, report the findings, and prepare immediate operative birth/repair and maternal resuscitation. Stop a labor-stimulating oxytocin infusion during the emergency response; do not wait for every listed sign."
              },
              {
                "label": "Ongoing evaluation",
                "text": "Guideline supplement: bleeding may be concealed; visible loss alone cannot gauge severity. Monitor perfusion, FHR and urine output; support large-bore IV access, ordered blood/coagulation studies and blood products while preparing emergency surgery. Reassess after repair/birth; do not infer resolution from transient improvement."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Amniotic fluid embolism: support breathing and circulation",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Lecture cues",
                "text": "Sudden hypotension, hypoxia, cardiovascular collapse, and coagulopathy during labor/birth or shortly afterward. The slide calls this an anaphylactic syndrome of pregnancy."
              },
              {
                "label": "Safety clarification: immediate response",
                "text": "Activate maternal emergency/resuscitation help, support oxygenation/ventilation, and begin high-quality CPR if cardiac arrest occurs. Coordinate obstetric, anesthesia, respiratory, critical-care and blood-product support rather than waiting for diagnostic confirmation."
              },
              {
                "label": "Diagnosis and evaluation clarification",
                "text": "AFE is a clinical diagnosis; fetal cells alone do not confirm it. Monitor oxygenation, circulation, bleeding/coagulation and response to resuscitation. The supplied slide is a recognition summary, not a complete AFE treatment or medication algorithm."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Guideline supplement: AFE resuscitation and reassessment",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Parallel priorities",
                "text": "Support airway/breathing and circulation, summon the multidisciplinary team, and activate the hemorrhage/blood-product response when indicated. Obtain ordered CBC, platelets, coagulation and fibrinogen studies; DIC may evolve quickly."
              },
              {
                "label": "If maternal cardiac arrest occurs",
                "text": "Begin CPR/AED response immediately. With the fundus at/above the umbilicus, the team adds manual left uterine displacement during compressions and prepares resuscitative delivery from recognition of arrest, aiming for birth by 5 minutes if circulation has not returned; do not delay resuscitation for an operating-room transfer."
              },
              {
                "label": "Evaluate and hand off",
                "text": "Trend oxygenation, circulation, urine output, bleeding and coagulation response. Record interventions/products and response; critical-care and newborn follow-up continue after birth or return of circulation."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Guideline supplement: inversion recognition and first response",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Recognize",
                "text": "The uterus turns inside out; the usual abdominal fundus may be absent and a mass may be felt/seen vaginally, with pelvic pain, bleeding and shock. This differs from an ordinary boggy, atonic uterus."
              },
              {
                "label": "Act simultaneously",
                "text": "Call obstetric/anesthesia and hemorrhage help; support IV access, perfusion and blood-product preparation while the qualified clinician urgently replaces the uterus. Resuscitation and replacement proceed together."
              },
              {
                "label": "Avoid worsening it",
                "text": "Do not apply routine fundal massage or cord traction. Do not attempt to remove an attached placenta before replacement. Hold uterotonics during reduction; do not substitute repeated atony treatment for correction of the inversion."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Guideline supplement: after the uterus is replaced",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Restore and maintain contraction",
                "text": "Once replacement is confirmed, give ordered uterotonics and other hemorrhage treatment; prepare antibiotics as ordered. Persistent or recurrent inversion requires immediate specialist escalation, sometimes operative correction."
              },
              {
                "label": "Reassess",
                "text": "Monitor fundal position/tone, bleeding, vital signs, perfusion and urine output. Continue shock/blood-product care and document the response; successful replacement alone does not prove hemorrhage has resolved."
              },
              {
                "label": "Explain and follow up",
                "text": "Debrief the event, assess pain and emotional needs, and communicate ongoing monitoring and follow-up to the patient and receiving team."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Shared response: communicate, reassess and hand off",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Communicate and document",
                "text": "Name the suspected emergency, actual findings, membrane/birth status, relevant history, onset time, actions, response, and team arrival. Give the patient/support person brief explanations; document maternal/newborn outcome and follow-up."
              },
              {
                "label": "Oxygen safety clarification",
                "text": "The lecture lists oxygen for fetal compromise/cord prolapse. Routine oxygen for an abnormal FHR in a normally oxygenated mother is not recommended; oxygen is appropriate for maternal hypoxia or another clinical indication, including hypoxic collapse. It does not replace cord decompression or urgent birth."
              },
              {
                "label": "Source distinction",
                "text": "The PDFs provide cue lists and illustrations, not full clinical cases. Labeled guideline supplements now cover missing response/reassessment steps. The shared placental-emergency objective retains the shock/DIC foundation; exact drugs, transfusion targets and surgical techniques follow specialist/local protocols."
              }
            ]
          }
        ]
      }
    ],
    "answerSourceNote": "Lecture base: Labor & Birth Complications pages 24, 26–31 and 42–43, plus the inversion definition/list in Postpartum Care pages 16–18. Labeled guideline supplements add concealed-bleeding assessment, AFE/maternal-arrest follow-through, inversion correction priorities and post-replacement evaluation. These are sourced additions, not cases claimed to exist in the PDFs. Exact drugs, transfusion targets and operative techniques follow specialist/local protocols.",
    "answerSources": [
      {
        "title": "Original PDF — Labor & birth complications",
        "url": "#/ob-final/presentation/labor-complications"
      },
      {
        "title": "Original PDF — Postpartum care & assessment",
        "url": "#/ob-final/presentation/postpartum-care"
      },
      {
        "title": "Safety clarification — RCOG cord prolapse",
        "url": "https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/umbilical-cord-prolapse-green-top-guideline-no-50/"
      },
      {
        "title": "Safety clarification — AHRQ cord-prolapse response",
        "url": "https://www.ahrq.gov/patient-safety/settings/labor-delivery/perinatal-care/modules/strategies/labor-delivery-unit/tool-cord-prolapse.html"
      },
      {
        "title": "Safety clarification — ACOG intrapartum FHR management",
        "url": "https://journals.lww.com/greenjournal/fulltext/2025/10000/acog_clinical_practice_guideline_no_.22.aspx"
      },
      {
        "title": "Safety clarification — SMFM amniotic fluid embolism",
        "url": "https://publications.smfm.org/publications/581-society-for-maternal-fetal-medicine-clinical-guidelines-9/"
      },
      {
        "title": "Safety clarification — SMFM AFE checklist, updated 2026",
        "url": "https://publications.smfm.org/publications/636-society-for-maternal-fetal-medicine-special-statement-checklist/"
      },
      {
        "title": "Safety clarification — MSF uterine inversion",
        "url": "https://medicalguidelines.msf.org/en/viewport/ONC/english/8-4-uterine-inversion-51417808.html"
      },
      {
        "title": "Safety clarification — MSF uterine rupture",
        "url": "https://medicalguidelines.msf.org/en/viewport/ONC/english/3-3-uterine-rupture-51416296.html"
      },
      {
        "title": "Guideline supplement — AHA maternal cardiac arrest response",
        "url": "https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-and-pediatric-special-circumstances-of-resuscitation"
      },
      {
        "title": "Guideline supplement — SMFM 2026 AFE response and reassessment",
        "url": "https://doi.org/10.1002/pmf2.70364"
      }
    ],
    "answerReviewedOn": "2026-11-21"
  },
  {
    "id": "postpartum-physiology",
    "weekIds": [
      "week-7"
    ],
    "topicIds": [
      "normal-postpartum"
    ],
    "title": "Expected postpartum recovery",
    "text": "Explain uterine involution, lochia progression, afterpains, fluid shifts, and major postpartum body-system changes. Describe how expected findings change over time and distinguish them from findings needing follow-up.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Expected recovery includes a firm uterus that progressively descends, lochia changing from rubra to serosa to alba, and fluid loss through urine and perspiration.",
          "Afterpains and early soreness should improve; interpret findings by time since birth, birth route, medications, feeding, and the patient’s baseline.",
          "Heavy/increasing bleeding, fever, chest symptoms, severe headache, or deterioration needs assessment. A normal-looking recovery timetable never overrides concerning symptoms."
        ]
      },
      {
        "type": "group",
        "title": "Involution and afterpains: follow the direction of change",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Involution",
                "text": "The uterus reduces toward its prepregnancy size after placental delivery. The PDFs place it below the umbilicus immediately after birth, near the umbilicus around 12 hours, then descending about 1 cm per day; by roughly 2 weeks it lies in the true pelvis. These are approximate trends."
              },
              {
                "label": "Why contractions matter",
                "text": "Contracting uterine muscle compresses vessels at the placental site, helping control bleeding. Oxytocin strengthens contractions; breastfeeding stimulates its release."
              },
              {
                "label": "Afterpains",
                "text": "Cramping may accompany involution and feeding. Assess pain and provide ordered comfort measures; severe, persistent or worsening pain requires assessment rather than an assumption of normal afterpains."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Lochia: compare color, amount, odor and trend",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Expected sequence",
                "text": "Rubra → serosa → alba: the lecture describes dark-red lochia in the first few days, pinkish discharge around days 3–10, then yellow-white discharge over subsequent weeks. Timing varies; assess the whole pattern."
              },
              {
                "label": "Assess rather than count colors",
                "text": "Document amount, clots, odor and changes with activity or position. A brief gush on rising may represent pooled blood, but continued or increasing flow needs reassessment."
              },
              {
                "label": "Concerning change",
                "text": "Rapid pad saturation, large clots, renewed heavy bleeding, foul odor, fever or worsening pelvic pain warrants follow-up. Do not use a supposedly normal lochia stage to dismiss these findings."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Fluid, circulation and breathing: normal shifts versus deterioration",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Fluid removal",
                "text": "Diuresis and night sweats help remove retained pregnancy fluid. The source emphasizes the first 12–24 hours for increased urine output and early nights of diaphoresis; monitor hydration, edema, bladder function and intake/output."
              },
              {
                "label": "Circulation",
                "text": "Blood volume and cardiovascular workload readjust over weeks. Pregnancy’s expanded volume can mask early signs of loss; normal BP alone does not rule out hemorrhage."
              },
              {
                "label": "Respiratory findings",
                "text": "The lecture identifies rising respiratory rate or falling oxygen saturation as abnormal. New breathlessness or chest pain is not routine fluid adjustment and needs urgent assessment."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Hormones, breasts and return of fertility",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Hormonal change",
                "text": "Estrogen and progesterone fall after placental delivery. Prolactin supports milk production; oxytocin supports milk ejection and uterine contraction. Breast fullness or engorgement must be assessed with feeding/latch and inflammation symptoms."
              },
              {
                "label": "Return of cycles",
                "text": "Return of menstruation varies with feeding and the individual. Ovulation can occur before the first period, so absence of menses does not establish infertility."
              },
              {
                "label": "Safety clarification",
                "text": "The handout’s long breastfeeding-related delay is not a dependable contraception rule. Lactational amenorrhea requires all criteria; see the discharge objective for the limits."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Perineum, abdomen, pelvic floor and skin",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Healing",
                "text": "Early perineal/vaginal bruising and edema should improve. The cervix gradually closes, with a more transverse external opening after vaginal birth. The source describes vaginal recovery over weeks and pelvic-floor tone taking up to several months to recover. Inspect the actual wound and symptoms rather than declaring healing by date alone."
              },
              {
                "label": "Abdomen and pelvic support",
                "text": "Abdominal laxity/diastasis may leave a pregnant appearance initially. Pelvic pressure, persistent incontinence or leakage through the vagina needs assessment; the lecture illustrates prolapse, cystocele, rectocele and fistulas."
              },
              {
                "label": "Skin and neurologic change",
                "text": "Pregnancy pigmentation and vascular changes may fade; striae can persist. Some pregnancy discomforts improve, but a new or severe headache requires assessment. The lecture identifies hypertension and a postdural-puncture headache after neuraxial anesthesia among possible causes; assess BP, vision and neurologic findings."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Put expected findings in context",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Recovery period",
                "text": "Puerperium traditionally refers to about 6 weeks after placental delivery; recovery, family adjustment and pregnancy-related complications can extend beyond this interval."
              },
              {
                "label": "Assess the trend",
                "text": "Compare fundal position/tone, lochia, vital signs, pain, elimination and function with earlier findings. Reassuring recovery means improving symptoms and stable function, not one isolated normal measurement."
              },
              {
                "label": "Safety clarification",
                "text": "The slides describe temperature rises with lactation, but fever ≥38°C/100.4°F needs clinical assessment, including early postpartum. It should not automatically be attributed to milk coming in."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Lecture base: Postpartum Care & Assessment and the Postpartum Review Handout. Expected recovery is organized from the two PDFs. Brief clarifications qualify approximate timelines, fever, circulatory reassurance and lactational infertility; no universal recovery timetable is imposed.",
    "answerSources": [
      {
        "title": "Original PDF — Postpartum care & assessment",
        "url": "#/ob-final/presentation/postpartum-care"
      },
      {
        "title": "Original PDF — Postpartum review handout",
        "url": "#/ob-final/presentation/postpartum-handout"
      },
      {
        "title": "Safety clarification — CDC urgent maternal warning signs",
        "url": "https://www.cdc.gov/hearher/maternal-warning-signs/index.html"
      },
      {
        "title": "Timing clarification — MSD postpartum physiology and laboratory changes",
        "url": "https://www.msdmanuals.com/professional/gynecology-and-obstetrics/postpartum-care-and-associated-disorders/postpartum-care"
      },
      {
        "title": "Contraception clarification — CDC lactational amenorrhea criteria",
        "url": "https://www.cdc.gov/contraception/hcp/usmec/lactational-amenorrhea-method.html"
      }
    ]
  },
  {
    "id": "postpartum-assessment",
    "weekIds": [
      "week-7"
    ],
    "topicIds": [
      "normal-postpartum"
    ],
    "title": "Systematic postpartum assessment",
    "text": "Perform a systematic postpartum assessment using the course’s BUBBLEHE framework. Include vital signs, pain, breasts, fundus, bladder, bowel, lochia, perineum or incision, legs, and emotional status; explain how findings guide care.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Use BUBBLEHE plus vital signs, pain and legs to assess recovery systematically and document trends.",
          "Prioritize uterine tone/position, bleeding and perfusion, then connect breast, elimination, wound and emotional findings with needed care.",
          "Escalate abnormal findings and reassess the response. The mnemonic organizes assessment; it does not replace an emergency evaluation."
        ]
      },
      {
        "type": "group",
        "title": "Start with safety, history and the course mnemonic",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Baseline",
                "text": "Review time/birth route, blood loss, anesthesia/medications, complications, feeding preferences and current symptoms. Assess vital signs, pain, alertness and overall appearance before working down the checklist."
              },
              {
                "label": "BUBBLEHE",
                "text": "The course framework covers breasts, uterus, bladder, bowel, lochia, episiotomy/incision, hemorrhoids and emotional status. Include legs and respiratory/perfusion assessment even though they are not separate letters in this version."
              },
              {
                "label": "Individualize",
                "text": "Explain the examination, obtain permission, protect privacy and use the patient’s preferred support. Look for improvement from the previous assessment and document the action taken when findings change."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Breasts: match assessment with feeding goals",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Look and ask",
                "text": "Assess fullness, tenderness, skin color/warmth and nipple integrity. Ask about feeding comfort, latch and milk transfer; nipple trauma or persistent pain merits help."
              },
              {
                "label": "Distinguish patterns",
                "text": "Generalized fullness differs from a focal increasingly red, hot or painful area with systemic symptoms. The latter raises concern for inflammation/mastitis and needs clinical review."
              },
              {
                "label": "Guide care",
                "text": "Offer feeding support or comfortable suppression care consistent with the patient’s goals. Safety clarification: avoid tight binding or deep breast massage; cold packs and a supportive, nonconstricting bra are preferable for swelling."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Uterus, lochia and perfusion: connect the findings",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Fundus",
                "text": "Assess and record height, midline position and firm versus boggy tone. Support the lower uterine segment during fundal assessment/massage according to training; avoid forceful downward pressure."
              },
              {
                "label": "Interpretation",
                "text": "A distended bladder can elevate/displace the uterus and impair contraction. A boggy uterus with increased bleeding suggests atony; bleeding with a firm uterus needs another cause considered, such as trauma."
              },
              {
                "label": "Lochia and action",
                "text": "Record color, amount, odor and clots; inspect pads/underlying linen and measured blood loss. Heavy bleeding or poor perfusion calls for the hemorrhage response, not completion of the routine checklist first."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Bladder and bowel: assess ability as well as output",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Bladder",
                "text": "Ask when and how much the patient last voided; check output, distention and symptoms. Decreased bladder sensation can conceal retention after birth/anesthesia."
              },
              {
                "label": "Bowel",
                "text": "Ask about intake, flatus, bowel activity, constipation and hemorrhoids. Delayed bowel movement can occur; assess significant pain, vomiting or distention separately."
              },
              {
                "label": "Guide care",
                "text": "Provide privacy, safe assistance, fluids/food as appropriate and ordered stool softeners. Reassess voiding and uterine position after addressing a full bladder; escalate ongoing retention."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Perineum or incision, hemorrhoids and legs",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Wound assessment",
                "text": "Use REEDA: redness, edema, ecchymosis, drainage and approximation. The source calls for side-lying/Sims positioning for perineal inspection. Assess repair/incision, swelling, pain, drainage and separation."
              },
              {
                "label": "Concealed injury",
                "text": "Severe pain or asymmetric swelling may indicate a hematoma even if visible lochia is modest. Hemorrhoids may need local comfort care, but worsening pain still requires assessment."
              },
              {
                "label": "Legs and breathing",
                "text": "Ask about unilateral swelling/pain and chest or respiratory symptoms. Do not use Homan’s sign; concerning findings need prompt assessment rather than repeated dorsiflexion or reassurance."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Emotional status, documentation and evaluation",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Ask directly",
                "text": "Assess mood, anxiety, sleep, coping, support, safety and ability to care for self/baby. Observe interaction without requiring one ideal bonding behavior."
              },
              {
                "label": "Safety clarification",
                "text": "Requesting nursery help or not showing immediate affection does not by itself diagnose impaired attachment or depression; consider pain, fatigue, culture, trauma and infant illness."
              },
              {
                "label": "Close the loop",
                "text": "Document findings, communication, interventions and reassessment. Evaluation should show stable perfusion, controlled bleeding and improving comfort/function, with a clear plan for unresolved physical or emotional concerns."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Lecture base: Postpartum Care & Assessment and the Postpartum Review Handout. Uses the course’s BUBBLEHE components without changing the objective wording. Wound, bladder, bleeding and emotional observations are tied to nursing action. Breast-binding/massage and single-behavior bonding assumptions are clarified.",
    "answerSources": [
      {
        "title": "Original PDF — Postpartum care & assessment",
        "url": "#/ob-final/presentation/postpartum-care"
      },
      {
        "title": "Original PDF — Postpartum review handout",
        "url": "#/ob-final/presentation/postpartum-handout"
      },
      {
        "title": "Care clarification — NICE postnatal care",
        "url": "https://www.nice.org.uk/guidance/ng194/chapter/Recommendations"
      },
      {
        "title": "Breast-care clarification — ABM Mastitis Spectrum Protocol 36",
        "url": "https://doi.org/10.1089/bfm.2022.29207.kbm"
      },
      {
        "title": "Safety clarification — CDC urgent maternal warning signs",
        "url": "https://www.cdc.gov/hearher/maternal-warning-signs/index.html"
      }
    ]
  },
  {
    "id": "postpartum-labs-elimination",
    "weekIds": [
      "week-7"
    ],
    "topicIds": [
      "normal-postpartum"
    ],
    "title": "Vital signs, labs, and elimination",
    "text": "Interpret postpartum vital signs and laboratory changes in context. Assess urinary retention, diuresis, constipation, and the effect of bladder distention on recovery; choose appropriate nursing interventions and evaluate the response.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Interpret vital-sign and laboratory trends with symptoms and blood loss; isolated numbers can mislead during postpartum fluid shifts.",
          "Diuresis can coexist with urinary retention because bladder sensation may be reduced. A full bladder can worsen uterine displacement and bleeding.",
          "Promote safe voiding and bowel recovery, then evaluate output, comfort and uterine position; report persistent retention, fever or deterioration."
        ]
      },
      {
        "type": "group",
        "title": "Vital signs: assess the patient behind the number",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Temperature",
                "text": "The lecture describes early transient changes, but safety clarification is to assess fever ≥38°C/100.4°F rather than dismiss it as dehydration or lactation. Evaluate symptoms, wounds, breasts, urine and lochia."
              },
              {
                "label": "Pulse and BP",
                "text": "Interpret trends with blood loss, pain, medications and history. Persistent tachycardia or falling BP raises concern for loss/infection; new hypertension or severe headache requires review. Do not wait for hypotension to recognize hemorrhage."
              },
              {
                "label": "Respirations and oxygenation",
                "text": "The source expects no major normal change in respiratory rate. New tachypnea, low saturation, dyspnea or chest pain needs urgent assessment."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "CBC and fluid shifts: avoid false reassurance",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Hemoglobin/hematocrit",
                "text": "Blood loss and changing plasma volume affect results. A single normal or high Hgb/Hct does not exclude acute hemorrhage; correlate with measured loss, perfusion and repeat tests as ordered."
              },
              {
                "label": "White cells",
                "text": "Timing clarification: physiological leukocytosis can reach about 20,000–30,000/µL in the first 24 hours. The slide’s shorthand is not a normal range for every postpartum day."
              },
              {
                "label": "Use the context",
                "text": "White cells alone neither establish nor exclude infection. Fever, local findings and systemic deterioration matter. Pregnancy/birth-associated hypercoagulability and immobility also contribute to thromboembolism risk."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Diuresis versus retention: these are different findings",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Expected shift",
                "text": "Increased urine output and night sweating help eliminate retained fluid. The lecture links reduced bladder sensation with birth trauma, distention and epidural medication."
              },
              {
                "label": "Retention cues",
                "text": "Ask about a weak/small void, inability to void, incomplete emptying or suprapubic fullness. Frequent small voids do not prove the bladder is empty; compare with bladder findings and uterine displacement."
              },
              {
                "label": "Why the uterus matters",
                "text": "An overfull bladder can shift the uterus and interfere with contraction, increasing bleeding. Reassess bladder and fundus together."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Help the patient void and evaluate the result",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Support",
                "text": "Offer privacy, a comfortable position and safe help to the toilet after evaluating mobility/anesthesia recovery. Measure voids and follow catheter-removal instructions."
              },
              {
                "label": "Escalate",
                "text": "The course targets voiding within about 6 hours of birth or catheter removal. Inability to void with a palpable/distended bladder needs earlier attention and the local bladder-assessment/catheterization plan; do not wait through painful retention."
              },
              {
                "label": "Evaluate",
                "text": "Record volume, symptoms and bladder fullness; use ordered bladder scanning/residual assessment when indicated. A successful plan improves emptying, comfort and uterine midline position."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Bowel recovery and constipation",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Expected context",
                "text": "The first bowel movement may be delayed 2–3 days in the lecture’s description. Reduced intake, discomfort and fear of straining can contribute; assess individual bowel function."
              },
              {
                "label": "Nursing care",
                "text": "Support fluids, fiber, mobility and ordered stool softeners; address perineal pain/hemorrhoids. After cesarean, follow intake tolerance and orders rather than making a fixed clear-liquid phase universal."
              },
              {
                "label": "Follow up",
                "text": "Evaluate passage of stool/flatus and relief. Persistent vomiting, marked distention or worsening abdominal pain warrants assessment rather than treatment as simple constipation."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Lecture base: Postpartum Care & Assessment and the Postpartum Review Handout. Source-led vital-sign/lab/elimination review. Clarifications distinguish first-day leukocytosis from later infection assessment, fever from lactation, acute blood-loss trends, and an individualized bladder/diet plan.",
    "answerSources": [
      {
        "title": "Original PDF — Postpartum care & assessment",
        "url": "#/ob-final/presentation/postpartum-care"
      },
      {
        "title": "Original PDF — Postpartum review handout",
        "url": "#/ob-final/presentation/postpartum-handout"
      },
      {
        "title": "Safety clarification — CDC urgent maternal warning signs",
        "url": "https://www.cdc.gov/hearher/maternal-warning-signs/index.html"
      },
      {
        "title": "Timing clarification — MSD postpartum physiology and laboratory changes",
        "url": "https://www.msdmanuals.com/professional/gynecology-and-obstetrics/postpartum-care-and-associated-disorders/postpartum-care"
      },
      {
        "title": "Care clarification — NICE postnatal care",
        "url": "https://www.nice.org.uk/guidance/ng194/chapter/Recommendations"
      },
      {
        "title": "Recovery clarification — NICE cesarean care",
        "url": "https://www.nice.org.uk/guidance/ng192/chapter/Recommendations"
      }
    ]
  },
  {
    "id": "postpartum-comfort-mobility",
    "weekIds": [
      "week-7"
    ],
    "topicIds": [
      "normal-postpartum"
    ],
    "title": "Comfort and physical recovery",
    "text": "Plan nursing care for pain, perineal or incision healing, breast discomfort, mobility, rest, nutrition, and hydration after vaginal or cesarean birth. Explain safety precautions, self-care teaching, and expected outcomes.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Treat pain while continuing to assess its cause: pain should become manageable and function should improve.",
          "Combine prescribed medication with perineal/incision care, breast support, safe mobility, rest and elimination support.",
          "Worsening focal pain, new leg/chest symptoms, fever or wound changes require review; comfort measures must not hide a complication."
        ]
      },
      {
        "type": "group",
        "title": "Pain: connect location, cause and treatment",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Assess",
                "text": "Identify location, severity, timing, quality and effects on walking, sleep, feeding and self-care. Compare afterpains with perineal, incisional, breast or headache symptoms."
              },
              {
                "label": "Care",
                "text": "Give ordered analgesia and reassess response. Medication clarification: acetaminophen and an NSAID are common foundations when appropriate; opioids require sedation/breathing assessment and an individualized feeding-compatible plan."
              },
              {
                "label": "Evaluate",
                "text": "Check both pain relief and function. Severe or rising pain, especially with bleeding, swelling, fever or neurologic symptoms, needs a cause assessed."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Perineum and hemorrhoids: reduce swelling and protect healing",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Early comfort",
                "text": "The PDFs describe covered cold packs during the first 24 hours, followed by comfortably warm sitz baths as appropriate. Avoid ice directly on skin or excessively hot water."
              },
              {
                "label": "Local care",
                "text": "Keep the area clean, change pads, assess repair with REEDA and provide prescribed/local hemorrhoid care. Support fluids, fiber and stool softeners to reduce straining."
              },
              {
                "label": "Safety",
                "text": "Disproportionate pain or asymmetric swelling may mean hematoma. Persistent redness, drainage, wound opening or fever needs review, not repeated comfort treatment alone."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Cesarean incision and safe movement",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Assess",
                "text": "Monitor incision approximation, drainage, redness, tenderness and bleeding along with uterine tone/lochia. Surgical birth does not eliminate postpartum uterine bleeding."
              },
              {
                "label": "Move safely",
                "text": "Assist initial mobility after anesthesia and hemodynamic assessment. Give pain relief before activity when appropriate, support the incision, and use the prescribed thromboprophylaxis plan."
              },
              {
                "label": "Clarification",
                "text": "The handout’s reference to “sweeping the uterus” describes no routine bedside nursing procedure. Uterine exploration is clinician-led and indication-specific; continue normal recovery assessment and escalate concerns."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Breast discomfort: support the chosen feeding plan",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Assess and support",
                "text": "Check fullness, nipple injury, latch and focal warmth/redness. Offer a supportive bra and feeding/lactation assistance. Ask the patient’s goals rather than assuming breastfeeding or suppression."
              },
              {
                "label": "Safety clarification",
                "text": "For inflammation/engorgement, use cold and avoid tight binding, deep massage or forced extra pumping. If breastfeeding, support normal effective feeding rather than routinely “emptying” the breast."
              },
              {
                "label": "Follow up",
                "text": "Persistent or worsening focal redness/pain, fever or systemic illness needs assessment for mastitis or another cause. Cold packs alone do not treat bacterial infection."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Rest, food, hydration and pelvic-floor recovery",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Support function",
                "text": "Plan rest and help with infant care, comfortable feeding positions, food and hydration appropriate to recovery. Assess barriers such as nausea, pain, fatigue or lack of help."
              },
              {
                "label": "Pelvic-floor care",
                "text": "The source describes Kegel exercises for gradual recovery and notes that tone can take months to return. Practice with an empty bladder, not by repeatedly stopping urine flow; follow individualized guidance for healing/pelvic-floor symptoms."
              },
              {
                "label": "Evaluate",
                "text": "Look for tolerable pain, safe walking, adequate intake, improving elimination and workable support. Persistent pelvic pressure, incontinence or suspected fistula symptoms require referral."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Lecture base: Postpartum Care & Assessment and the Postpartum Review Handout. Builds comfort and function care from the PDFs. Short safety clarifications address analgesic monitoring, breast binding/deep massage, routine urine interruption, diet/mobility individualization and the handout’s misleading uterine-sweeping phrase.",
    "answerSources": [
      {
        "title": "Original PDF — Postpartum care & assessment",
        "url": "#/ob-final/presentation/postpartum-care"
      },
      {
        "title": "Original PDF — Postpartum review handout",
        "url": "#/ob-final/presentation/postpartum-handout"
      },
      {
        "title": "Pain-care clarification — ACOG postpartum pain management",
        "url": "https://www.acog.org/clinical/clinical-guidance/clinical-consensus/articles/2021/09/pharmacologic-stepwise-multimodal-approach-for-postpartum-pain-management"
      },
      {
        "title": "Breast-care clarification — ABM Mastitis Spectrum Protocol 36",
        "url": "https://doi.org/10.1089/bfm.2022.29207.kbm"
      },
      {
        "title": "Recovery clarification — NICE cesarean care",
        "url": "https://www.nice.org.uk/guidance/ng192/chapter/Recommendations"
      },
      {
        "title": "Care clarification — NICE postnatal care",
        "url": "https://www.nice.org.uk/guidance/ng194/chapter/Recommendations"
      },
      {
        "title": "Pelvic-floor clarification — NHS exercises after childbirth",
        "url": "https://www.uclh.nhs.uk/patients-and-visitors/patient-information-pages/advice-and-exercise-following-childbirth"
      }
    ]
  },
  {
    "id": "postpartum-family-adaptation",
    "weekIds": [
      "week-7"
    ],
    "topicIds": [
      "normal-postpartum"
    ],
    "title": "Attachment and family adaptation",
    "text": "Describe maternal role adaptation, attachment, and family adjustment after birth. Assess coping, support, and barriers to bonding, and explain how the nurse supports individualized recovery and infant care.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "The lecture describes taking-in, taking-hold and letting-go, along with gradual development of a parental identity.",
          "Assess coping, expectations, birth experience, infant health and available support rather than judging attachment from one behavior.",
          "Support the whole family with practical teaching and help; persistent distress or impaired safety/function requires follow-up."
        ]
      },
      {
        "type": "group",
        "title": "Rubin’s phases: use them as a framework",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Taking-in",
                "text": "Early recovery may involve dependence on others, rest and retelling the birth. Meet physical needs and listen to the birth story without withholding participation or teaching the patient wants."
              },
              {
                "label": "Taking-hold",
                "text": "Interest in care and growing independence may coexist with uncertainty. Offer demonstrations, guided practice and encouragement."
              },
              {
                "label": "Letting-go",
                "text": "The family reorganizes relationships and expectations around the new baby. These stages describe possible patterns, not a mandatory sequence or a parenting score."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Becoming a parent and partner adjustment",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Maternal identity",
                "text": "The source describes commitment/attachment in pregnancy, learning baby care and physical restoration, movement toward a new normal, and a developing parental identity over months. Adjustment continues beyond hospital discharge."
              },
              {
                "label": "Partner adaptation",
                "text": "The lecture’s engrossment includes interest in looking at, touching and learning the baby’s features; its role phases move from expectations to reality and mastery. Include the chosen partner/support people and avoid assuming one family structure."
              },
              {
                "label": "Family changes",
                "text": "Ask how siblings and extended family are adjusting, who will help, and how responsibilities and rest will be shared."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Assess attachment and the barriers around it",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Observe with context",
                "text": "Observe communication, touch, responsiveness and participation while considering pain, fatigue, culture, traumatic birth, separation and infant illness. There is no single required display of bonding."
              },
              {
                "label": "Risk and support",
                "text": "The PDFs list confidence, prior relationships, mental health, finances/housing, partner support, stress and infant health as influences. Ask what is difficult rather than treating a risk factor as a diagnosis."
              },
              {
                "label": "Clarification",
                "text": "Wanting nursery help, limited eye contact or delayed enthusiasm does not alone establish poor attachment. Assess needs and offer support before drawing conclusions."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Nursing support and evaluation",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Intervene",
                "text": "Use brief teaching with demonstration/return demonstration. Invite the patient/support person to practice safe feeding and routine care; support contact and communication when parent/baby separation occurs."
              },
              {
                "label": "Mobilize help",
                "text": "Identify family/community and professional supports for practical care, feeding, finances and emotional health. Ask who will help after discharge and address gaps."
              },
              {
                "label": "Evaluate",
                "text": "Assess confidence, coping, safe participation and realistic support arrangements. Persistent anxiety/depression, inability to function or safety concerns requires referral; use the mental-health objective for urgency distinctions."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Lecture base: Postpartum Care & Assessment and the Postpartum Review Handout. Preserves the lecture’s adaptation frameworks and family factors while clarifying that stage timing and immediate bonding behavior are not diagnostic tests.",
    "answerSources": [
      {
        "title": "Original PDF — Postpartum care & assessment",
        "url": "#/ob-final/presentation/postpartum-care"
      },
      {
        "title": "Original PDF — Postpartum review handout",
        "url": "#/ob-final/presentation/postpartum-handout"
      },
      {
        "title": "Care clarification — NICE postnatal care",
        "url": "https://www.nice.org.uk/guidance/ng194/chapter/Recommendations"
      },
      {
        "title": "Screening clarification — ACOG perinatal mental health",
        "url": "https://www.acog.org/programs/perinatal-mental-health/patient-screening"
      }
    ]
  },
  {
    "id": "postpartum-discharge",
    "weekIds": [
      "week-7"
    ],
    "topicIds": [
      "normal-postpartum"
    ],
    "title": "Discharge teaching and follow-up",
    "text": "Develop postpartum teaching about self-care, activity, nutrition, follow-up, warning signs, immunizations or Rh prophylaxis when indicated, and reproductive planning. Explain how you would confirm understanding and readiness for discharge.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Discharge teaching covers self-care, feeding, medicines, activity, follow-up and warning signs, adapted to the birth and complications.",
          "Verify MMR/rubella immunity, Rh prophylaxis when indicated and contraception planning; pregnancy can occur before menses returns.",
          "Use teach-back and return demonstration to confirm a safe plan, support at home and a clear route to urgent help."
        ]
      },
      {
        "type": "group",
        "title": "Check readiness and teach self-care",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Physical readiness",
                "text": "Review bleeding, pain, wound/perineum, voiding, intake, mobility and any unresolved complication. Confirm the patient can use the recovery plan and knows whom to contact."
              },
              {
                "label": "Practical teaching",
                "text": "Review medications as prescribed, incision/perineal hygiene, pads/lochia, bowel care, food/fluids, rest and gradual activity. Include feeding goals and the ability to handle the baby safely."
              },
              {
                "label": "Individualize activity",
                "text": "The PDFs mention pelvic rest for 6 weeks; frame this as the course instruction with individual obstetric guidance for wound recovery, symptoms and resuming sex/activity. Do not treat one date as proof of healing."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Warning signs: make the action clear",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Urgent physical symptoms",
                "text": "Heavy/increasing bleeding, chest pain, trouble breathing, fainting, severe headache/visual change or severe abdominal pain needs urgent assessment. Include a unilateral painful/swollen leg and fever ≥38°C/100.4°F."
              },
              {
                "label": "Local changes",
                "text": "Teach reporting of foul lochia, increasing wound redness/drainage/opening, worsening pelvic/perineal pain, breast inflammation/systemic symptoms, or inability to void."
              },
              {
                "label": "Safety and timing",
                "text": "Psychosis or an immediate risk of harm needs emergency help and protection of parent/baby. Do not wait for the scheduled postpartum visit when concerning symptoms occur; risks can extend beyond 6 weeks."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Rubella/MMR and Rh prophylaxis: different purposes",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "MMR",
                "text": "Review immunity and arrange postpartum vaccination when indicated. Breastfeeding is compatible with MMR; counsel avoiding pregnancy for 28 days afterward. The lecture’s egg-allergy/shedding wording is not a routine reason to withhold it; screen actual contraindications."
              },
              {
                "label": "Rh immune globulin",
                "text": "For an unsensitized Rh-negative patient with an Rh-positive infant, verify postpartum Rh immune globulin, ideally within 72 hours, and the ordered fetomaternal-hemorrhage/dose assessment. It prevents sensitization; it does not treat established antibodies."
              },
              {
                "label": "Close the loop",
                "text": "Confirm tests, administration/documentation and follow-up rather than assuming prenatal prophylaxis covers the postpartum indication."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Fertility and contraception: correct the long-delay assumption",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Pregnancy can precede a period",
                "text": "Ovulation may occur before menstruation resumes. Review reproductive goals, breastfeeding and an appropriate contraceptive plan; do not rely on the handout’s long average delay."
              },
              {
                "label": "LAM clarification",
                "text": "All criteria must be met: amenorrhea, fully/nearly fully breastfeeding and <6 months postpartum. CDC also limits feeding intervals to no more than 4 hours by day/6 hours at night; use another method when criteria stop being met."
              },
              {
                "label": "Planning",
                "text": "Discuss method access and follow-up. Sterilization consent rules depend on jurisdiction/funding and circumstances; the handout’s 30-day statement is not a universal rule for all patients."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Follow-up, support and teach-back",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Follow-up clarification",
                "text": "ACOG recommends postpartum contact within 3 weeks and comprehensive care by 12 weeks, with earlier/ongoing review for individual needs such as BP, wounds, mood or complications."
              },
              {
                "label": "Teach-back",
                "text": "Ask the patient to explain warning signs, contact numbers/routes, medication use, feeding and follow-up; use a return demonstration where appropriate. Address language, transport, cost and support barriers."
              },
              {
                "label": "Evaluation",
                "text": "A ready discharge plan has understanding, practical support and arranged follow-up, not simply a completed teaching checklist. Document unanswered concerns and the plan to resolve them."
              },
              {
                "label": "BP follow-up clarification",
                "text": "For hypertensive disorders, arrange BP review by 7–10 days postpartum; severe hypertension needs review within 72 hours. These earlier checks do not replace urgent assessment for new symptoms."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Lecture base: Postpartum Care & Assessment and the Postpartum Review Handout. Uses the source’s self-care/prevention teaching with labeled clarifications for fever/urgency, postpartum follow-up, MMR, nonsensitized Rh eligibility, LAM and non-universal restrictions/sterilization rules. Final review clarification separates the earlier hypertension BP checks from general postpartum contact.",
    "answerSources": [
      {
        "title": "Original PDF — Postpartum care & assessment",
        "url": "#/ob-final/presentation/postpartum-care"
      },
      {
        "title": "Original PDF — Postpartum review handout",
        "url": "#/ob-final/presentation/postpartum-handout"
      },
      {
        "title": "Safety clarification — CDC urgent maternal warning signs",
        "url": "https://www.cdc.gov/hearher/maternal-warning-signs/index.html"
      },
      {
        "title": "Follow-up clarification — ACOG optimizing postpartum care",
        "url": "https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2018/05/optimizing-postpartum-care"
      },
      {
        "title": "Prevention clarification — ACOG Rh factor and immune globulin",
        "url": "https://www.acog.org/womens-health/faqs/the-rh-factor-how-it-can-affect-your-pregnancy"
      },
      {
        "title": "Vaccine clarification — CDC pregnancy and postpartum vaccination",
        "url": "https://www.cdc.gov/vaccines-pregnancy/hcp/vaccination-guidelines/index.html"
      },
      {
        "title": "Vaccine clarification — CDC rubella recommendations",
        "url": "https://www.cdc.gov/rubella/hcp/vaccine-considerations/"
      },
      {
        "title": "Contraception clarification — CDC lactational amenorrhea criteria",
        "url": "https://www.cdc.gov/contraception/hcp/usmec/lactational-amenorrhea-method.html"
      },
      {
        "title": "Vaccine clarification — CDC MMR and egg allergy",
        "url": "https://www.cdc.gov/yellow-book/hcp/travel-associated-infections-diseases/measles-rubeola.html"
      }
    ]
  },
  {
    "id": "postpartum-hemorrhage-assessment",
    "weekIds": [
      "week-7"
    ],
    "topicIds": [
      "postpartum-complications"
    ],
    "title": "Recognize postpartum hemorrhage",
    "text": "Identify risk factors, assessment cues, and causes of postpartum hemorrhage. Compare uterine atony, retained tissue, genital tract trauma or hematoma, and coagulation problems using uterine tone, bleeding, pain, and hemodynamic findings.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Recognize hemorrhage from bleeding plus uterine tone, pain and perfusion; visible loss can underestimate severity.",
          "Compare atony, trauma/hematoma, retained tissue and coagulation problems, because treatment depends on the cause.",
          "Call for help when bleeding or the patient’s condition is concerning. Do not wait for a volume threshold or low BP before acting."
        ]
      },
      {
        "type": "group",
        "title": "Definition, timing and risk recognition",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Definition clarification",
                "text": "The PDFs use traditional >500 mL vaginal/>1000 mL cesarean thresholds. ACOG defines early maternal hemorrhage as cumulative loss ≥1000 mL or bleeding with hypovolemia within 24 hours, regardless of birth route. This is not a threshold for delaying treatment."
              },
              {
                "label": "Risk cues",
                "text": "The source lists atony, infection, retained placenta/tissue and grand multiparity. Connect these with the birth history, uterine overdistention, trauma/operative birth and prior bleeding concerns."
              },
              {
                "label": "Keep reassessing",
                "text": "Risk can change during recovery and hemorrhage can occur without an identified risk. Look at ongoing loss, tone, symptoms and physiologic response."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Atony: a poorly contracted uterus",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Key cue",
                "text": "Boggy uterine tone with increased bleeding suggests atony; contraction is needed to compress placental-site vessels. Assess position and bladder distention."
              },
              {
                "label": "Contributors",
                "text": "A full bladder, retained tissue, infection and overdistention can interfere with effective contraction. Atony is a finding that still needs its contributing cause assessed."
              },
              {
                "label": "Priority",
                "text": "Assess and summon help while starting the trained atony response; do not leave a bleeding patient alone to fetch supplies. Reassess whether tone and bleeding improve."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Trauma and hematoma: the uterus may be firm",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Laceration cue",
                "text": "Continued bleeding despite a firm uterus suggests genital-tract trauma or another non-atony cause. Prepare for clinician examination/repair rather than repeatedly treating tone alone."
              },
              {
                "label": "Hematoma cue",
                "text": "Severe localized pain, pressure, asymmetric swelling or worsening perfusion may indicate concealed blood in a hematoma. Small visible lochia does not exclude substantial concealed bleeding."
              },
              {
                "label": "Nursing assessment",
                "text": "Inspect accessible wounds/perineum with privacy and consent, quantify visible loss, assess vital signs/pain and report change promptly. Avoid manipulating a suspected hematoma."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Retained tissue, inversion and coagulation problems",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Tissue",
                "text": "Retained placental fragments may keep the uterus from contracting well or cause later subinvolution/bleeding. Report persistent loss and the placenta/birth history; removal is clinician-led."
              },
              {
                "label": "Inversion",
                "text": "A missing expected abdominal fundus or vaginal mass with pain/bleeding/shock needs urgent assessment. Inversion is not ordinary atony; the Week 6 emergency notes explain replacement/resuscitation priorities."
              },
              {
                "label": "Coagulation",
                "text": "Diffuse bleeding or oozing from puncture sites raises concern for coagulopathy/DIC. Prepare ordered blood/coagulation studies and blood-product support; check both the cause and consequences of hemorrhage."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Quantify loss and recognize shock early",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Quantification clarification",
                "text": "Measure collected loss and weigh soaked items after subtracting dry weight; account for other fluids. 1 g of added weight is approximately 1 mL of blood—the slide’s “500 mL = 454 g” is not the conversion to use."
              },
              {
                "label": "Perfusion cues",
                "text": "Trend pulse, BP, respiratory rate, saturation, mental status, skin/peripheral perfusion and urine output. Tachycardia, pallor, dizziness, weakness or restlessness may precede hypotension."
              },
              {
                "label": "Interpret together",
                "text": "Normal BP or an early normal Hgb does not rule out hemorrhage. Communicate cumulative loss and trajectory; a pad count is an alert cue, not an exact volume measurement."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Lecture base: Postpartum Care & Assessment and the Postpartum Review Handout. Compares the source’s bleeding causes using bedside clues. Definitions/QBL are clarified, and inversion/coagulation patterns are connected to the already supplied emergency framework. No fictional case or universal volume-only trigger is created.",
    "answerSources": [
      {
        "title": "Original PDF — Postpartum care & assessment",
        "url": "#/ob-final/presentation/postpartum-care"
      },
      {
        "title": "Original PDF — Postpartum review handout",
        "url": "#/ob-final/presentation/postpartum-handout"
      },
      {
        "title": "Definition clarification — ACOG postpartum hemorrhage",
        "url": "https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2017/10/postpartum-hemorrhage"
      },
      {
        "title": "Measurement clarification — ACOG quantitative blood loss",
        "url": "https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2019/12/quantitative-blood-loss-in-obstetric-hemorrhage"
      },
      {
        "title": "Response/medication clarification — CMQCC obstetric hemorrhage toolkit",
        "url": "https://www.cmqcc.org/toolkits-quality-improvement/hemorrhage"
      }
    ]
  },
  {
    "id": "postpartum-hemorrhage-management",
    "weekIds": [
      "week-7"
    ],
    "topicIds": [
      "postpartum-complications"
    ],
    "title": "Respond to hemorrhage and shock",
    "text": "Explain the first nursing action and coordinated response to postpartum hemorrhage or shock. Include cause-directed interventions, quantified blood loss, fluids or blood products, prescribed uterotonics and their precautions, reassessment, and escalation.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "For heavy bleeding or shock cues, summon the hemorrhage team and assess tone/perfusion immediately, with interventions occurring in parallel.",
          "For a boggy uterus, begin trained massage and ordered uterotonic care while addressing bladder/cause; a firm uterus with bleeding needs trauma/tissue/coagulation assessment.",
          "Trend blood loss and the patient’s response continuously; escalate persistent bleeding, restore perfusion and prepare cause-directed treatment."
        ]
      },
      {
        "type": "group",
        "title": "First response: call, assess and act together",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Immediate priority",
                "text": "Activate the obstetric hemorrhage response and stay with the patient. Assess uterine tone, bleeding and perfusion while directing team help, monitoring and needed supplies."
              },
              {
                "label": "Boggy versus firm",
                "text": "For a boggy uterus, perform trained fundal massage with lower-segment support and help address bladder distention. Continued bleeding with a firm uterus needs prompt clinician assessment for other causes."
              },
              {
                "label": "Safety clarification",
                "text": "Do not apply routine atony massage to suspected inversion or assume “uterine sweeping” is nursing care. Urgent specialist correction and resuscitation may be needed."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Restore perfusion and prepare the team’s treatment",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Support circulation",
                "text": "Assist with IV access, ordered fluids/blood products, oxygen for hypoxia/clinical indication and urgent laboratory sampling. Keep the patient warm and prepare definitive treatment in parallel."
              },
              {
                "label": "Monitor",
                "text": "Track cumulative measured loss, vital-sign/perfusion trends, alertness and urine output; prepare ordered CBC, coagulation/fibrinogen and blood-bank specimens. Clinical deterioration takes priority over an initially reassuring lab result."
              },
              {
                "label": "Escalate",
                "text": "Persistent bleeding or shock needs the local staged/massive-transfusion response and rapid cause control. No fixed fluid volume or transfusion ratio is prescribed by these source notes."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Uterotonics: purpose and the key safety checks",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Oxytocin",
                "text": "The PDFs name oxytocin/Pitocin to promote uterine contraction. Administer through the actual order/protocol and reassess tone, bleeding and maternal status; do not invent an IV-push regimen."
              },
              {
                "label": "Methylergonovine safety clarification",
                "text": "The handout names this drug; avoid methylergonovine with hypertension/preeclampsia and check BP and the order before use."
              },
              {
                "label": "Carboprost safety clarification",
                "text": "The handout also names carboprost; avoid carboprost in asthma and assess the individual contraindications. Medication choice depends on the patient as well as the bleeding."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Treat the cause and continue escalation",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Cause-directed care",
                "text": "Support clinician-led repair of lacerations, assessment/removal of retained tissue, inversion correction or coagulation support as indicated. Improving uterine tone alone is not adequate if bleeding continues."
              },
              {
                "label": "Response clarification",
                "text": "Contemporary hemorrhage guidance pairs uterotonic care with early resuscitation/cause assessment. Ordered tranexamic acid is an antifibrinolytic, not a uterotonic; WHO recommends early use within 3 hours of birth for PPH."
              },
              {
                "label": "Prepare definitive measures",
                "text": "If first-line care fails, prepare the obstetric team’s procedural/operative plan and transfer/handoff. Advanced techniques and drug doses are not supplied as a new bedside protocol here."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Evaluate, document and support recovery",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Evaluate response",
                "text": "Look for decreasing bleeding and improving perfusion, appropriate uterine tone and urine output, and stabilizing observations/laboratory trends. Reassess after every intervention and again after apparent control."
              },
              {
                "label": "Document clearly",
                "text": "Record cumulative loss, findings, activation/escalation times, drugs/fluids/products, clinician response and reassessment. Communicate any persistent concerns during handoff."
              },
              {
                "label": "Support the family",
                "text": "Explain briefly during the emergency and debrief afterward. Address pain, anemia/fatigue, feeding/separation, emotional needs, follow-up and warning signs after discharge."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Lecture base: Postpartum Care & Assessment and the Postpartum Review Handout. Builds the source’s early-recognition/massage/uterotonic approach into a nursing response. Brief labeled response and drug-safety clarifications supply essential contraindication/urgent-care context absent from the slides; no new dose, transfusion or surgical protocol is authored.",
    "answerSources": [
      {
        "title": "Original PDF — Postpartum care & assessment",
        "url": "#/ob-final/presentation/postpartum-care"
      },
      {
        "title": "Original PDF — Postpartum review handout",
        "url": "#/ob-final/presentation/postpartum-handout"
      },
      {
        "title": "Response/medication clarification — CMQCC obstetric hemorrhage toolkit",
        "url": "https://www.cmqcc.org/toolkits-quality-improvement/hemorrhage"
      },
      {
        "title": "Response clarification — WHO postpartum hemorrhage guideline",
        "url": "https://www.who.int/publications/i/item/9789240115637"
      },
      {
        "title": "Measurement clarification — ACOG quantitative blood loss",
        "url": "https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2019/12/quantitative-blood-loss-in-obstetric-hemorrhage"
      }
    ]
  },
  {
    "id": "postpartum-subinvolution",
    "weekIds": [
      "week-7"
    ],
    "topicIds": [
      "postpartum-complications"
    ],
    "title": "Subinvolution and delayed bleeding",
    "text": "Recognize a concerning pattern of delayed uterine involution or recurrent bleeding. Explain assessment for possible causes, collaborative management, nursing interventions, and discharge teaching about when to seek urgent care.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Subinvolution means the uterus fails to regress as expected after birth and can present with delayed or recurrent bleeding.",
          "The PDFs identify retained placental fragments and pelvic infection as important possible causes.",
          "Assess bleeding, uterine trend and maternal condition, seek prompt review and teach when recurrent bleeding becomes urgent."
        ]
      },
      {
        "type": "group",
        "title": "Recognize a pattern of delayed recovery",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Expected comparison",
                "text": "Use the normal pattern of progressive fundal descent and lessening lochia as the reference. Subinvolution is delayed regression; it differs from sudden immediate atony but both may cause hemorrhage."
              },
              {
                "label": "Concerning findings",
                "text": "A uterus not descending as expected with persistent/recurrent bleeding needs assessment. Ask about the amount/trajectory of bleeding, clots, pain, odor and fever."
              },
              {
                "label": "Avoid a calendar-only judgment",
                "text": "One fundal measurement or lochia color is insufficient. Compare earlier findings and consider bladder distention, birth history and symptoms."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Assess the cause and support collaborative care",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Source causes",
                "text": "Retained tissue can impair contraction/involution; infection can delay recovery and cause pain or foul lochia. The source does not provide a complete diagnostic algorithm."
              },
              {
                "label": "Nursing priorities",
                "text": "Assess perfusion and bleeding severity first, then document uterine findings, temperature, pain, urine/bladder function and relevant delivery/placental history."
              },
              {
                "label": "Collaborative management",
                "text": "Notify the clinician; prepare ordered investigations and treatment of retained tissue/infection, with uterotonic or antibiotic care as prescribed. Heavy bleeding/shock triggers the hemorrhage response rather than routine outpatient review."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Evaluate treatment and teach return precautions",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Evaluate",
                "text": "Follow bleeding, fundal trend, pain/temperature and general function. Improvement means the concerning pattern is resolving, not just that one episode of bleeding stopped."
              },
              {
                "label": "Teach",
                "text": "Explain expected lochia progression and the need to report recurrent/increasing bleeding, large clots, foul discharge, fever or increasing pelvic pain."
              },
              {
                "label": "Urgency",
                "text": "Heavy bleeding, faintness or other poor-perfusion symptoms needs urgent help. Confirm treatment adherence and planned follow-up; do not wait for the routine postpartum appointment if symptoms recur."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Lecture base: Postpartum Care & Assessment and the Postpartum Review Handout. Follows the PDFs’ brief definition and retained-tissue/infection causes. Recognition, prioritization, treatment preparation and evaluation are explained without inventing a diagnostic or medication regimen.",
    "answerSources": [
      {
        "title": "Original PDF — Postpartum care & assessment",
        "url": "#/ob-final/presentation/postpartum-care"
      },
      {
        "title": "Original PDF — Postpartum review handout",
        "url": "#/ob-final/presentation/postpartum-handout"
      },
      {
        "title": "Care clarification — NICE postnatal care",
        "url": "https://www.nice.org.uk/guidance/ng194/chapter/Recommendations"
      },
      {
        "title": "Safety clarification — CDC urgent maternal warning signs",
        "url": "https://www.cdc.gov/hearher/maternal-warning-signs/index.html"
      }
    ]
  },
  {
    "id": "postpartum-infections",
    "weekIds": [
      "week-7"
    ],
    "topicIds": [
      "postpartum-complications"
    ],
    "title": "Postpartum infections",
    "text": "Compare endometritis, wound or urinary infection, and mastitis by risk factors, local and systemic findings, and nursing assessment. Explain prescribed treatment, supportive care, feeding considerations, and signs requiring urgent escalation.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Compare uterine, wound, urinary and breast findings rather than treating every postpartum fever as one condition.",
          "Assess local symptoms plus temperature, perfusion and function; fever or systemic deterioration is not normal lactation.",
          "Give ordered treatment and supportive care, reassess, and activate urgent sepsis care when organ dysfunction or shock is suspected."
        ]
      },
      {
        "type": "group",
        "title": "Endometritis: think uterine infection",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Source connection",
                "text": "The lecture lists endometritis and connects retained fragments/pelvic infection with subinvolution. Risk assessment includes birth/operative history, membrane/infection history and retained-tissue concerns."
              },
              {
                "label": "Clinical clarification",
                "text": "Fever with uterine/pelvic tenderness or foul-smelling lochia raises concern for endometritis. Assess bleeding, involution and maternal condition; not every symptom must be present."
              },
              {
                "label": "Nursing care",
                "text": "Notify the clinician, obtain ordered specimens and give prescribed antibiotics/support. Reassess temperature, pain, lochia and perfusion; retained tissue or another source may require additional treatment."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Perineal or incision infection: inspect the wound",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Assess",
                "text": "Use REEDA and ask about increasing wound pain, redness, drainage or separation. Differentiate expected improving bruising/soreness from a worsening pattern."
              },
              {
                "label": "Care",
                "text": "Use appropriate hygiene/dressing care, pain relief and prescribed treatment. Prepare wound evaluation/cultures when ordered; report deep pain, spreading changes or systemic symptoms."
              },
              {
                "label": "Evaluate",
                "text": "Look for improving local findings and function. Continued drainage, wound breakdown, fever or deterioration needs reassessment rather than automatic continuation of routine self-care."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Urinary infection: separate dysuria from retention",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Assess",
                "text": "Ask about dysuria, urgency/frequency, suprapubic discomfort and incomplete emptying; review catheter/voiding history. Fever with flank pain or systemic illness needs prompt assessment."
              },
              {
                "label": "Care",
                "text": "Measure output and assess distention; collect ordered urine studies and give prescribed antibiotics/support. Clean collection technique matters because postpartum discharge can contaminate a sample."
              },
              {
                "label": "Evaluate",
                "text": "Follow pain, fever, voiding and general condition. Persistent symptoms may reflect retention or another complication as well as infection."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Mastitis: inflammation is not always bacterial infection",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Recognize",
                "text": "A focal painful, warm/red area with systemic symptoms warrants assessment; evaluate latch/feeding pattern, nipple injury and excessive milk removal."
              },
              {
                "label": "Breast-care clarification",
                "text": "Support normal breastfeeding/milk removal as tolerated, cold and appropriate analgesia. Avoid deep massage, tight binding or repeated extra pumping to empty the breast; antibiotics are prescribed for bacterial mastitis when indicated."
              },
              {
                "label": "Reassess",
                "text": "Persistent focal swelling, worsening illness or poor response needs clinician review for abscess/other pathology. Most mastitis does not require stopping breastfeeding; confirm the medication and individual feeding plan."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Systemic deterioration: recognize sepsis and act",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Definition/safety clarification",
                "text": "The source lists puerperal infection; sepsis means infection with life-threatening organ dysfunction, not simply a site infection within a fixed 28-day window. It can occur without fever."
              },
              {
                "label": "Urgent response",
                "text": "Escalate suspected sepsis immediately. Support monitoring, ordered cultures/lactate, prompt antibiotics, perfusion support and source control; do not delay necessary antibiotics for specimens."
              },
              {
                "label": "Evaluate",
                "text": "Follow mental status, breathing/oxygenation, circulation, urine output and response to treatment. Failure to improve needs renewed assessment/escalation, including after discharge."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Lecture base: Postpartum Care & Assessment and the Postpartum Review Handout. The PDFs name the infection types but do not give complete diagnosis/treatment pathways. Brief clinical/safety clarifications explain local cue differences, normal feeding/mastitis care and sepsis urgency; actual antibiotics and source-control decisions remain prescribed.",
    "answerSources": [
      {
        "title": "Original PDF — Postpartum care & assessment",
        "url": "#/ob-final/presentation/postpartum-care"
      },
      {
        "title": "Original PDF — Postpartum review handout",
        "url": "#/ob-final/presentation/postpartum-handout"
      },
      {
        "title": "Care clarification — NICE postnatal care",
        "url": "https://www.nice.org.uk/guidance/ng194/chapter/Recommendations"
      },
      {
        "title": "Breast-care clarification — ABM Mastitis Spectrum Protocol 36",
        "url": "https://doi.org/10.1089/bfm.2022.29207.kbm"
      },
      {
        "title": "Safety clarification — SMFM maternal sepsis",
        "url": "https://publications.smfm.org/publications/507-society-for-maternal-fetal-medicine-consult-series-67/"
      },
      {
        "title": "Safety clarification — CDC urgent maternal warning signs",
        "url": "https://www.cdc.gov/hearher/maternal-warning-signs/index.html"
      }
    ]
  },
  {
    "id": "postpartum-thromboembolism",
    "weekIds": [
      "week-7"
    ],
    "topicIds": [
      "postpartum-complications"
    ],
    "title": "Thromboembolism and urgent warning signs",
    "text": "Identify postpartum thromboembolism risks and distinguish concerning leg findings from symptoms of a possible pulmonary emergency. Explain prevention, immediate nursing priorities, safe care, and patient teaching.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "The source links hypercoagulability, vessel injury and immobility with postpartum clot risk.",
          "Unilateral leg pain/swelling needs assessment; sudden breathlessness, chest pain or collapse may indicate a pulmonary emergency.",
          "Use safe mobility and ordered prophylaxis; suspected DVT/PE requires urgent evaluation, not Homan’s sign or an assumption of normal edema."
        ]
      },
      {
        "type": "group",
        "title": "Understand the risk and prevent avoidable immobility",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Source mechanism",
                "text": "Pregnancy/birth increases clotting tendency, tissue/vessel injury occurs, and reduced movement promotes stasis. Review operative birth, illness, mobility and personal clot history with the team."
              },
              {
                "label": "Prevention",
                "text": "Encourage safe early mobility when stable, hydration appropriate to the patient and the prescribed prophylaxis plan. Assess anesthesia recovery and bleeding/fall risk before ambulation."
              },
              {
                "label": "Cesarean clarification",
                "text": "SMFM recommends sequential compression devices before cesarean and until fully ambulatory. Pharmacologic prophylaxis is individualized; check bleeding and neuraxial timing considerations."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Possible DVT: evaluate unilateral findings",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Cues",
                "text": "New one-sided swelling, tenderness, warmth or pain is concerning. General dependent edema from fluid shifts does not explain every new asymmetric finding."
              },
              {
                "label": "First action",
                "text": "Notify the clinician promptly, assess vital signs and ask about chest/breathing symptoms. Do not force walking or vigorous massage as a treatment for a suspected clot."
              },
              {
                "label": "Assessment clarification",
                "text": "Do not use Homan’s sign to diagnose or exclude DVT. The team may use compression ultrasound and begin prescribed anticoagulation when indicated; assessment cannot end with a bedside maneuver."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Possible PE: treat chest or breathing symptoms as urgent",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Cues",
                "text": "Sudden dyspnea, chest pain, hypoxia, coughing blood or collapse can indicate PE and requires urgent evaluation; other postpartum cardiac/pulmonary causes must also be considered."
              },
              {
                "label": "Immediate nursing priorities",
                "text": "Activate emergency help; assess/support airway, breathing and circulation, monitor oxygenation/perfusion and prepare the urgent team workup. Do not leave the patient to walk for help."
              },
              {
                "label": "Ongoing care",
                "text": "Support ordered diagnostic and anticoagulant treatment. Reassess breathing, circulation, pain, bleeding and response; escalate deterioration immediately."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Teaching and evaluation",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Teach prevention",
                "text": "Explain mobility, prescribed devices/medicines and follow-up. For anticoagulation, review adherence and bleeding precautions with the individual treatment plan."
              },
              {
                "label": "Teach urgency",
                "text": "New unilateral leg findings need prompt contact; chest pain, breathlessness or collapse needs emergency help. Symptoms can start after discharge."
              },
              {
                "label": "Evaluate",
                "text": "Check symptom trajectory, safe function, treatment tolerance and understanding. The original PDF supplies risk cues and the no-Homan warning, not a complete anticoagulant protocol."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Lecture base: Postpartum Care & Assessment and the Postpartum Review Handout. Uses source risk factors and leg-assessment cautions. Brief labeled assessment/prevention clarifications connect DVT/PE cues with diagnostic/team response and prescribed prophylaxis; no new anticoagulant dosing or duration table is added.",
    "answerSources": [
      {
        "title": "Original PDF — Postpartum care & assessment",
        "url": "#/ob-final/presentation/postpartum-care"
      },
      {
        "title": "Original PDF — Postpartum review handout",
        "url": "#/ob-final/presentation/postpartum-handout"
      },
      {
        "title": "Assessment/response clarification — RCOG venous thrombosis after birth",
        "url": "https://www.rcog.org.uk/for-the-public/browse-our-patient-information/diagnosis-and-treatment-of-venous-thrombosis-in-pregnancy-and-after-birth/"
      },
      {
        "title": "Prevention clarification — SMFM cesarean thromboprophylaxis",
        "url": "https://publications.smfm.org/publications/327-society-for-maternal-fetal-medicine-consult-series-51/"
      },
      {
        "title": "Safety clarification — CDC urgent maternal warning signs",
        "url": "https://www.cdc.gov/hearher/maternal-warning-signs/index.html"
      }
    ]
  },
  {
    "id": "postpartum-mental-health",
    "weekIds": [
      "week-7"
    ],
    "topicIds": [
      "postpartum-complications"
    ],
    "title": "Blues, depression, anxiety, and psychosis",
    "text": "Compare postpartum blues, depression, anxiety or intrusive thoughts, and psychosis. Assess symptoms, function, coping, and safety; identify when urgent intervention is needed and explain screening, referral, and family education.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Distinguish short-lived blues from persistent depression/anxiety and loss of reality testing; timing, function and safety matter more than a label alone.",
          "Ask about mood, anxiety, sleep, coping, support, self/baby care and thoughts of harm. Unwanted intrusive thoughts are not automatically psychosis, but they still need sensitive assessment.",
          "Psychosis or immediate danger requires emergency assessment and protection. A positive screen needs clinical follow-through; routine reassurance is insufficient for severe symptoms."
        ]
      },
      {
        "type": "group",
        "title": "Blues versus depression: duration and function guide concern",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Baby blues",
                "text": "The PDFs describe transient tearfulness/lability, fatigue and worry. Timing clarification: mild symptoms usually improve within 2 weeks; provide rest, practical help and follow-up."
              },
              {
                "label": "Depression",
                "text": "Persistent low mood, loss of interest, anxiety/guilt and impaired self/baby care needs assessment. Severe symptoms or poor function require help even before 2 weeks; do not wait to meet a duration rule."
              },
              {
                "label": "Risk context",
                "text": "The lecture lists prior depression/anxiety/bipolar disorder, traumatic birth, poor support, violence, substance use and financial/housing strain. Risk factors prompt assessment, not blame or an automatic diagnosis."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Anxiety and intrusive thoughts: ask without judgment",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Assess the impact",
                "text": "Excessive worry, panic, checking, avoidance or inability to sleep despite an opportunity to rest may impair function. Ask what the thoughts mean to the patient and how they affect care."
              },
              {
                "label": "Safety clarification",
                "text": "In OCD, intrusive thoughts are often unwanted, distressing and recognized as thoughts; psychosis involves impaired reality testing/delusions/hallucinations. Fear of a thought or asking for help does not by itself prove intent to act."
              },
              {
                "label": "Still assess safety",
                "text": "Ask about self-harm/infant-harm thoughts, intent, plan, access to means, control, reality testing and available supervision/support. Do not assume either safety or psychosis from the word “intrusive”; escalate uncertainty or risk."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Psychosis and immediate danger: protect and escalate",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Recognition",
                "text": "Hallucinations, delusions, severe confusion, mania or loss of reality testing after birth may indicate postpartum psychosis. It is distinct from ordinary blues and is not an inevitable progression of depression."
              },
              {
                "label": "Immediate response",
                "text": "Seek emergency psychiatric/medical assessment. Do not leave a patient at immediate risk alone with the baby; arrange appropriate supervision, infant safety and the emergency response."
              },
              {
                "label": "Assessment",
                "text": "Communicate observed behavior, onset, sleep/function, bipolar/psychosis history, medications/substances and any intent/plan. Severe suicidal or infant-harm intent is urgent whether or not psychosis is present."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Screening, referral and treatment follow-through",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Use the correct tool",
                "text": "The lecture names BDI-II; the handout names EPDS. Clarification: EPDS or PHQ-9 are commonly used validated screens, but screening is not diagnosis and their scores are not interchangeable. Use the prescribed tool/process."
              },
              {
                "label": "Act on the result",
                "text": "A concerning response—especially self-harm content—requires direct assessment and a documented referral/safety plan. Do not simply record a total score and discharge."
              },
              {
                "label": "Collaborative care",
                "text": "Support mental-health evaluation and prescribed psychotherapy/medication care, with feeding and medical considerations. Confirm who will follow symptoms and whether the patient can access care."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Family education and evaluation",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Practical support",
                "text": "Discuss sleep/rest, feeding assistance, daily tasks and trusted support; involve chosen family with consent. Illness is not a failure of parenting."
              },
              {
                "label": "Teach warning signs",
                "text": "Explain persistent/worsening mood or anxiety, inability to function, psychotic symptoms and immediate-danger cues. Provide a clear plan for urgent help and follow-up, not only a reassurance that hormones will settle."
              },
              {
                "label": "Evaluate",
                "text": "Reassess symptoms, functioning, safety, treatment access and support. Continue follow-up even when a patient appears bonded or a single screening score improves."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Lecture base: Postpartum Care & Assessment and the Postpartum Review Handout. Based on the PDFs’ mood/risk/support material. Brief timing, screening and safety clarifications distinguish depression, anxiety/intrusive thoughts and psychosis, which the handout conflates. No prevalence guarantee or one-score diagnosis is taught.",
    "answerSources": [
      {
        "title": "Original PDF — Postpartum care & assessment",
        "url": "#/ob-final/presentation/postpartum-care"
      },
      {
        "title": "Original PDF — Postpartum review handout",
        "url": "#/ob-final/presentation/postpartum-handout"
      },
      {
        "title": "Mental-health clarification — NIMH perinatal depression",
        "url": "https://www.nimh.nih.gov/health/publications/perinatal-depression"
      },
      {
        "title": "Screening clarification — ACOG perinatal mental health",
        "url": "https://www.acog.org/programs/perinatal-mental-health/patient-screening"
      },
      {
        "title": "Safety clarification — IOCDF intrusive thoughts versus psychosis",
        "url": "https://iocdf.org/perinatal-ocd/for-clinical-providers/perinatal-ocd-overview/"
      }
    ]
  },
  {
    "id": "newborn-transition-apgar",
    "weekIds": [
      "week-9",
      "week-10"
    ],
    "topicIds": [
      "normal-newborn"
    ],
    "title": "Transition and Apgar scoring",
    "text": "Explain the newborn’s transition to extrauterine life, including respiratory and circulatory adaptation. Calculate an Apgar score from a case and explain its role alongside ongoing assessment and immediate care priorities.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Transition depends on effective breathing, changing circulation and adequate warmth; assess the infant’s condition continuously.",
          "Apgar scores five findings from 0–2 each, for a total of 0–10 at 1 and 5 minutes; use the findings and response to care together.",
          "Do not wait for an Apgar score to begin needed resuscitation. Apnea, gasping, central cyanosis or poor tone requires immediate assessment/help."
        ]
      },
      {
        "type": "group",
        "title": "Respiratory transition: establish effective ventilation",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "What changes",
                "text": "The first breaths expand the lungs and help clear fetal lung fluid. The lecture’s birth-pressure explanation is a simplification: ongoing fluid absorption also matters."
              },
              {
                "label": "Assess",
                "text": "Count respirations for a full minute and assess effort, symmetry and color. The source’s usual resting range is 30–60 breaths/minute; grunting, retractions, persistent tachypnea or central cyanosis is concerning."
              },
              {
                "label": "Safety clarification",
                "text": "Apnea or gasping needs an immediate trained neonatal response. A pause with color change, bradycardia or poor tone is concerning even if shorter than 20 seconds; the slide’s duration alone cannot establish normality."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Circulatory transition: connect the lungs and shunts",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Pressure changes",
                "text": "Lung expansion lowers pulmonary vascular resistance and increases pulmonary blood flow; loss of placental circulation changes systemic pressures."
              },
              {
                "label": "Fetal pathways",
                "text": "The PDF diagram shows the foramen ovale, ductus arteriosus and ductus venosus. Functional closure and later anatomic closure are different processes, not one instantaneous event."
              },
              {
                "label": "Assessment",
                "text": "Auscultate the apical pulse for one full minute and assess perfusion and breathing. Acrocyanosis may occur early, but a blue tongue/trunk or persistent poor perfusion needs evaluation."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Apgar: score heart rate and respiratory effort",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Heart rate",
                "text": "Score 0 for absent; 1 for <100 beats/minute; 2 for ≥100 beats/minute. Boundary clarification: exactly 100 belongs in the 2-point category despite the slide’s >100 shorthand."
              },
              {
                "label": "Respiratory effort",
                "text": "Score 0 for absent respirations; 1 for slow/irregular breathing or a weak cry; 2 for good respiratory effort with a strong cry."
              },
              {
                "label": "Use actual observations",
                "text": "Assign points to each finding at the recorded time. A heart-rate score is not a substitute for assessing whether ventilation is effective."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Apgar: score tone, reflex response and color",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Muscle tone",
                "text": "Score 0 for limp/flaccid; 1 for some flexion; 2 for active movement with well-flexed extremities."
              },
              {
                "label": "Reflex response",
                "text": "Score 0 for no response; 1 for grimace/weak response; 2 for vigorous response such as a cry, cough or withdrawal with stimulation."
              },
              {
                "label": "Color",
                "text": "Score 0 for blue/pale throughout; 1 for a pink body with blue extremities; 2 for normal color throughout. Interpret color with other oxygenation/perfusion findings and the infant’s skin tone."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Calculate, time and interpret the total",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Calculation from the source table",
                "text": "Add heart rate + respiratory effort + tone + reflex response + color. The PDF’s complete 2-point column gives 2 + 2 + 2 + 2 + 2 = 10; its complete 1-point column gives 5. For a case, choose each row separately rather than assigning a score from appearance alone."
              },
              {
                "label": "Timing clarification",
                "text": "Record at 1 and 5 minutes. If the 5-minute score is <7, repeat every 5 minutes through 20 minutes as indicated; a single 10-minute repeat is not the entire rule."
              },
              {
                "label": "Meaning",
                "text": "Describe transition and response to care. Apgar alone neither diagnoses birth asphyxia nor predicts an individual child’s long-term neurologic outcome or automatically determines NICU admission."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Reactivity and reassessment: behavior does not override distress",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Source sequence",
                "text": "The lecture describes initial reactivity for about 30 minutes, a quieter interval and a second reactive period around 4–8 hours. Alertness and feeding interest vary."
              },
              {
                "label": "Nursing care",
                "text": "Provide warmth, observation and feeding/skin-to-skin support when stable. Follow breathing, heart rate, tone, temperature and feeding ability over time."
              },
              {
                "label": "Escalate",
                "text": "Persistent abnormal breathing, lethargy, flaccidity or poor perfusion is not explained away by a reactivity period. Reassess and summon appropriate neonatal help."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Lecture base: Assessment & care of the newborn; Newborn assessment review handout. Source-led transition/Apgar review with labeled boundary, repeat-timing and immediate-care clarifications. Table arithmetic is demonstrated without inventing a patient case or a resuscitation order set.",
    "answerSources": [
      {
        "title": "Assessment & care of the newborn (original supplied PDF)",
        "url": "#/ob-final/presentation/newborn-care"
      },
      {
        "title": "Newborn assessment review handout (original supplied PDF)",
        "url": "#/ob-final/presentation/newborn-handout"
      },
      {
        "title": "ACOG: Apgar timing and interpretation clarification",
        "url": "https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2015/10/the-apgar-score"
      },
      {
        "title": "AHA/AAP: newborn transition and immediate-care clarification",
        "url": "https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/neonatal-resuscitation"
      }
    ]
  },
  {
    "id": "newborn-head-to-toe",
    "weekIds": [
      "week-9",
      "week-10"
    ],
    "topicIds": [
      "normal-newborn"
    ],
    "title": "Head-to-toe newborn assessment",
    "text": "Describe a systematic newborn assessment, including vital signs, measurements, neurologic and reflex findings, skin, head, heart and lungs, abdomen, hips, genitalia, and behavior. Identify expected findings and those requiring follow-up.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Assess general condition and vital signs first, then examine systematically using the supplied newborn worksheet.",
          "Document measurements, skin/head, heart/lungs, abdomen, genitalia, spine/hips, tone, reflexes and behavior; compare with age and prior findings.",
          "Concerning breathing, perfusion, neurologic or feeding findings take priority over completing a routine checklist."
        ]
      },
      {
        "type": "group",
        "title": "General survey and vital signs",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Begin",
                "text": "Review gestational age, birth route, Apgar/transition, maternal history, medications, feeding and complications. Observe color, posture, spontaneous movement, tone and alertness before disturbing the infant."
              },
              {
                "label": "Measure",
                "text": "The source gives an apical pulse around 110–160/minute at rest and respirations 30–60/minute, counted for a full minute. Interpret state and trends; persistent abnormalities need review."
              },
              {
                "label": "Temperature clarification",
                "text": "Measure/document the route. Slides give 36.5–37.2°C, while the pictured table also gives 36.5–37.5°C. Use the local neonatal range and assess abnormal temperature with the infant’s condition; do not treat conflicting Fahrenheit conversions as separate targets."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Measurements, head and face",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Measurements",
                "text": "Record weight, length and head circumference; compare growth for gestational age. The lecture gives a descriptive length of about 45–55 cm and birth weight of 2500–4000 g; these are not percentile definitions. Head circumference is described as about 1–2 cm above chest circumference, but one ratio does not diagnose microcephaly."
              },
              {
                "label": "Head",
                "text": "Inspect shape, sutures, fontanelles and scalp swelling. The source describes a diamond-shaped anterior fontanelle closing around 18 months and a triangular posterior fontanelle around 8–12 weeks; timing varies. Assess state/position; persistent bulging, marked depression or unusual head size needs review."
              },
              {
                "label": "Face and mouth",
                "text": "Check symmetry, eyes/discharge, ear position/tags, nasal patency, palate integrity and oral lesions. Document actual findings; one unusual feature is not by itself a genetic diagnosis."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Heart, lungs and chest",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Respiratory assessment",
                "text": "Observe chest movement and listen bilaterally; assess for nasal flaring, grunting, retractions and central cyanosis. Distress is an urgent finding, not a normal newborn variant."
              },
              {
                "label": "Cardiac assessment",
                "text": "Count the apical rate, note rhythm/murmur and assess color/perfusion. A murmur needs clinical interpretation; absence of a murmur does not exclude congenital heart disease."
              },
              {
                "label": "Chest",
                "text": "Document symmetry and breast tissue. Maternal hormones can cause temporary breast enlargement/discharge; avoid squeezing the tissue."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Abdomen, cord and elimination",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Abdomen",
                "text": "Inspect contour and palpate/listen as appropriate. Marked distention, a scaphoid abdomen with respiratory symptoms or bilious vomiting requires prompt assessment."
              },
              {
                "label": "Cord",
                "text": "Look at the clamp/stump and document the expected two arteries and one vein. A single umbilical artery prompts further evaluation rather than a bedside diagnosis of a specific anomaly."
              },
              {
                "label": "Elimination",
                "text": "Confirm urine and meconium passage. The source expects meconium during the first 24–48 hours; report delay, earlier concern or associated vomiting/distention rather than waiting for the limit."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Genitalia and anus",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Female",
                "text": "Inspect anatomy, edema and discharge. A small transient blood-tinged discharge can reflect maternal hormone withdrawal; heavy/persistent bleeding or illness needs assessment."
              },
              {
                "label": "Male",
                "text": "Identify the urethral opening and testes. Do not force foreskin retraction. Clarification: suspected hypospadias/other penile anomaly requires review before routine circumcision."
              },
              {
                "label": "Anus and skin",
                "text": "Inspect the perineum and confirm documented stool passage. Record lesions/swelling and seek review for suspected anatomic abnormality."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Spine, extremities and hips",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Spine and limbs",
                "text": "Inspect spinal skin, dimples/tufts/masses, clavicles, digits, alignment, movement and range of motion. Asymmetric movement, deformity or a concerning spinal lesion needs follow-up."
              },
              {
                "label": "Hip clarification",
                "text": "A trained examiner performs gentle hip assessment. A true Ortolani clunk suggests instability; an isolated click is not equivalent. Do not repeatedly provoke a suspected unstable hip."
              },
              {
                "label": "Galeazzi clarification",
                "text": "Galeazzi compares knee heights with hips/knees flexed, rather than simply naming unequal skin folds. Bilateral abnormalities can look symmetric; interpret the full examination."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Neurologic findings and primitive reflexes",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Tone and feeding",
                "text": "Expect flexed posture and spontaneous movement appropriate to age; assess suck/swallow coordination. Flaccidity, marked asymmetry or poor responsiveness needs assessment."
              },
              {
                "label": "Reflex pattern",
                "text": "Rooting turns toward cheek stimulation; suck/swallow supports feeding; palmar/plantar grasp grips; Moro produces symmetric startle/arm movement. Assess presence, quality and symmetry, not just a checklist tick."
              },
              {
                "label": "Other reflexes",
                "text": "The sources include stepping, tonic-neck and Babinski responses. Clarification: the infant Babinski is an upgoing great toe with fanning; disappearance ages in the table are developmental guides, not a single-test diagnosis. The pictured course table places Moro disappearance around 3–6 months, stepping around 1–2 months and Babinski around 12 months; assess the full developmental pattern."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Behavior, senses and documentation",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Behavior",
                "text": "Recognize deep sleep, light sleep, drowsy, quiet alert, active alert and crying. Gestational age, medications, time and stimulation influence the examination."
              },
              {
                "label": "Interaction",
                "text": "The lecture describes close visual attention at about 8–12 inches and responses to sound, touch, smell and taste. Reduce overstimulation and support caregiver interaction when stable."
              },
              {
                "label": "Close the loop",
                "text": "Document findings, action and reassessment on the worksheet framework. Link concerns to a plan and handoff; a reassuring brief interaction does not replace feeding or physiologic assessment."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Lecture base: Assessment & care of the newborn; Newborn assessment review handout; Newborn assessment & care-plan worksheet. Uses the worksheet and lecture sequence; clarifies hip/Babinski terminology and inconsistent temperature tables without diagnosing anomalies from isolated features.",
    "answerSources": [
      {
        "title": "Assessment & care of the newborn (original supplied PDF)",
        "url": "#/ob-final/presentation/newborn-care"
      },
      {
        "title": "Newborn assessment review handout (original supplied PDF)",
        "url": "#/ob-final/presentation/newborn-handout"
      },
      {
        "title": "Newborn assessment & care-plan worksheet (original supplied PDF)",
        "url": "#/ob-final/presentation/newborn-care-plan"
      },
      {
        "title": "Stanford Newborn Nursery: hip-assessment clarification",
        "url": "https://med.stanford.edu/newborns/professional-education/photo-gallery/hips.html"
      },
      {
        "title": "Stanford Newborn Nursery: circumcision precautions clarification",
        "url": "https://med.stanford.edu/newborns/professional-education/circumcision/contraindications.html"
      },
      {
        "title": "AHA/AAP: newborn transition and immediate-care clarification",
        "url": "https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/neonatal-resuscitation"
      },
      {
        "title": "Stanford Newborn Nursery: primitive-reflex clarification",
        "url": "https://med.stanford.edu/newborns/professional-education/photo-gallery/neuro-reflexes.html"
      }
    ]
  },
  {
    "id": "newborn-variants",
    "weekIds": [
      "week-9"
    ],
    "topicIds": [
      "normal-newborn"
    ],
    "title": "Normal variations and concerning findings",
    "text": "Distinguish common newborn skin findings and head-shape variations from findings suggesting injury or illness. Compare molding, caput, cephalohematoma, and subgaleal bleeding using assessment cues and nursing priorities.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Common skin findings are often benign; assess appearance, distribution, change and the infant’s overall condition before reassuring.",
          "Molding changes skull shape; caput is scalp edema; cephalohematoma is blood beneath the periosteum and does not cross sutures.",
          "Progressive diffuse scalp swelling with pallor or poor perfusion may be subgaleal hemorrhage and needs urgent escalation."
        ]
      },
      {
        "type": "group",
        "title": "Common skin findings: describe and reassure appropriately",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Surface findings",
                "text": "Vernix is a protective coating, lanugo is fine hair, and mild desquamation can occur. Milia are small white spots; do not squeeze or treat milia as acne."
              },
              {
                "label": "Rashes and marks",
                "text": "The lecture pictures erythema toxicum, salmon patches and vascular lesions. Assess location, blanching, size and change; not every red lesion should receive one label or treatment."
              },
              {
                "label": "Terminology clarification",
                "text": "Use congenital dermal melanocytosis for the blue-gray birthmarks called “Mongolian spots” in the source. Document location, size and color so birthmarks are not later confused with injury."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Color changes: check location and timing",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Peripheral versus central",
                "text": "Early acrocyanosis is blue hands/feet with otherwise reassuring color. Blue tongue/mucosa or trunk is central cyanosis and needs urgent assessment."
              },
              {
                "label": "Transient patterns",
                "text": "Harlequin color change or mottling must be interpreted with temperature, perfusion and behavior. Pallor, persistent mottling or an ill appearance should not be dismissed as a skin variant."
              },
              {
                "label": "Jaundice clarification",
                "text": "Jaundice in the first 24 hours needs prompt evaluation. Later onset can also be abnormal; use measured bilirubin with age in hours/risk, not color or onset alone, to determine follow-up."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Molding and caput: different processes",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Molding",
                "text": "Overlapping skull bones change head shape after birth. Document the shape and trend; the handout’s fixed resolution time is not a guarantee for every infant."
              },
              {
                "label": "Caput",
                "text": "Caput is superficial scalp edema and can cross suture lines. The source describes improvement over several days. It is not the same process as bony molding."
              },
              {
                "label": "Nursing judgment",
                "text": "Monitor swelling and general condition. Crossing sutures alone does not prove caput; progressive boggy swelling or deterioration needs assessment for bleeding."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Cephalohematoma: blood confined by the periosteum",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Location",
                "text": "Blood lies between skull bone and periosteum, so a cephalohematoma does not cross suture lines. It may become more apparent after birth."
              },
              {
                "label": "Assessment",
                "text": "Document size/location and follow the trend. Monitor jaundice and signs of blood loss; breakdown of collected blood can increase bilirubin."
              },
              {
                "label": "Care",
                "text": "Protect the area and notify the clinician about concerning change. Do not massage or attempt to drain the swelling."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Subgaleal bleeding: recognize a potentially dangerous pattern",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Clinical clarification",
                "text": "The figure shows blood in a broad subgaleal space. Diffuse, fluctuant or expanding swelling crossing sutures, especially after assisted birth, can represent substantial concealed loss."
              },
              {
                "label": "Assess urgently",
                "text": "Check serial scalp/head findings, heart rate, perfusion, alertness and vital signs. Pallor, tachycardia, poor perfusion or increasing swelling requires immediate neonatal evaluation."
              },
              {
                "label": "Nursing priority",
                "text": "Summon help, monitor closely and prepare ordered evaluation/resuscitation. Do not wait for visible external blood or assume every cross-suture swelling is benign caput."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Lecture base: Assessment & care of the newborn; Newborn assessment review handout; Newborn assessment & care-plan worksheet. Uses original skin/scalp figures; adds a short labeled subgaleal safety explanation and separates benign patterns from concerning trends. Bilirubin treatment is not reduced to the slide’s fixed table.",
    "answerSources": [
      {
        "title": "Assessment & care of the newborn (original supplied PDF)",
        "url": "#/ob-final/presentation/newborn-care"
      },
      {
        "title": "Newborn assessment review handout (original supplied PDF)",
        "url": "#/ob-final/presentation/newborn-handout"
      },
      {
        "title": "Newborn assessment & care-plan worksheet (original supplied PDF)",
        "url": "#/ob-final/presentation/newborn-care-plan"
      },
      {
        "title": "Stanford Newborn Nursery: scalp-swelling clarification",
        "url": "https://med.stanford.edu/newborns/professional-education/photo-gallery/head.html"
      },
      {
        "title": "AHA/AAP: newborn transition and immediate-care clarification",
        "url": "https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/neonatal-resuscitation"
      },
      {
        "title": "AAP: predischarge bilirubin and follow-up clarification",
        "url": "https://www.aap.org/en/patient-care/hyperbilirubinemia/frequently-asked-questions-about-the-2022-aap-guideline-on-the-management-of-hyperbilirubinemia/"
      }
    ]
  },
  {
    "id": "newborn-gestational-assessment",
    "weekIds": [
      "week-9",
      "week-10"
    ],
    "topicIds": [
      "normal-newborn"
    ],
    "title": "Gestational age and growth classification",
    "text": "Explain Ballard assessment and distinguish gestational age from size for gestational age. Classify a case as preterm, term, or post-term and as SGA, AGA, or LGA, then identify implications for assessment and care.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Record gestational age and size for gestational age separately; a small weight does not automatically mean prematurity.",
          "Ballard combines physical and neuromuscular maturity to estimate age, interpreted with the best obstetric dating and clinical context.",
          "Use gestational-age percentiles for SGA/AGA/LGA and connect the category with breathing, warmth, feeding and glucose surveillance."
        ]
      },
      {
        "type": "group",
        "title": "Age categories: correct the lecture’s broad term range",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Definitions clarification",
                "text": "Preterm is <37 weeks. Early term is 37 weeks 0 days–38 weeks 6 days; full term is 39 weeks 0 days–40 weeks 6 days."
              },
              {
                "label": "Later categories",
                "text": "Late term is 41 weeks 0 days–41 weeks 6 days; postterm is ≥42 weeks. The PDF’s “term 38–42” shorthand misses these boundaries."
              },
              {
                "label": "Distinguish concepts",
                "text": "Postmaturity describes clinical effects of prolonged gestation/placental insufficiency; it is not a substitute for recording gestational age."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Ballard: assess two kinds of maturity",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Physical signs",
                "text": "Assess skin, lanugo, plantar creases, breast tissue, eyes/ears and genitalia using the supplied chart. One feature alone cannot establish age."
              },
              {
                "label": "Neuromuscular signs",
                "text": "Assess posture, square window, arm recoil, popliteal angle, scarf sign and heel-to-ear. Greater flexion/resistance generally suggests maturity; use gentle trained technique rather than forcing a joint."
              },
              {
                "label": "Interpretation",
                "text": "Add physical and neuromuscular points and use the chart’s age conversion. Compare with obstetric dating and factors affecting tone; the score is an estimate, not a precise replacement for reliable dating."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Growth classification: percentiles rather than fixed gram cutoffs",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Size clarification",
                "text": "SGA <10th percentile; AGA 10th–90th percentile; LGA >90th percentile for gestational age on the selected growth standard."
              },
              {
                "label": "Weight is a different descriptor",
                "text": "Low birth weight is <2500 g regardless of age. The lecture’s <2500/>4000 g shorthand does not by itself define SGA/LGA; a preterm infant can be AGA."
              },
              {
                "label": "Classification method",
                "text": "First establish age, then plot birth weight against the appropriate age/sex standard and document both. The PDF supplies a maturity chart, not a complete growth-percentile case set."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Apply the classification to care",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Source-chart check",
                "text": "On the supplied Ballard chart, a total of 35 maps to 38 weeks. That age is early term under the clarified categories; SGA/AGA/LGA still requires a separate growth percentile."
              },
              {
                "label": "Risk assessment",
                "text": "Preterm infants need extra attention to breathing, temperature and feeding maturity. SGA/LGA or infants of diabetic mothers may need prescribed glucose surveillance; size is a risk cue, not a diagnosis of hypoglycemia."
              },
              {
                "label": "Source factors and nursing response",
                "text": "The lecture lists maternal vascular disease, smoking, placental insufficiency, infection/anomalies and multiple gestation among SGA contributors. Review history, assess the actual infant and tailor warmth, feeding and monitoring; no universal hourly heel-stick schedule is assumed."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Lecture base: Assessment & care of the newborn; Newborn assessment review handout. Clarifies gestational boundaries and percentiles. The actual Ballard chart supplies the arithmetic illustration; no fictional patient case, missing growth percentile or universal glucose threshold is invented.",
    "answerSources": [
      {
        "title": "Assessment & care of the newborn (original supplied PDF)",
        "url": "#/ob-final/presentation/newborn-care"
      },
      {
        "title": "Newborn assessment review handout (original supplied PDF)",
        "url": "#/ob-final/presentation/newborn-handout"
      },
      {
        "title": "ACOG: gestational-age terminology clarification",
        "url": "https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2013/11/definition-of-term-pregnancy"
      },
      {
        "title": "MSD Professional: growth-percentile clarification",
        "url": "https://www.msdmanuals.com/professional/pediatrics/perinatal-problems/small-for-gestational-age-sga-infant"
      }
    ]
  },
  {
    "id": "newborn-routine-care",
    "weekIds": [
      "week-9"
    ],
    "topicIds": [
      "normal-newborn"
    ],
    "title": "Routine care, prophylaxis, and screening",
    "text": "Plan routine newborn care for airway, warmth, identification and safety, skin and cord care, and circumcision when applicable. Explain the purpose and timing of prescribed prophylaxis, immunizations, and newborn screening and how results are followed up.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Prioritize breathing, warmth, correct identification and repeated assessment, with routine care adapted to the infant’s condition.",
          "Explain vitamin K, eye prophylaxis, hepatitis B prevention and screening by purpose, prescribed timing and follow-up.",
          "Document care and results, teach the family, and resolve abnormal or pending findings before an appropriate discharge plan."
        ]
      },
      {
        "type": "group",
        "title": "Airway and warmth: support transition safely",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Immediate care",
                "text": "Assess breathing/tone, dry the infant, remove wet linen and maintain an appropriate thermal environment. Use monitored skin-to-skin when stable or the ordered warming method."
              },
              {
                "label": "Cold stress",
                "text": "The source links cold stress with increased oxygen/glucose use and acidosis. Prevent evaporation, convection, conduction and radiation with drying, draft protection and warm surfaces."
              },
              {
                "label": "Safety clarification",
                "text": "Do not routinely suction a breathing newborn, even with meconium-stained fluid; follow the trained response for obstruction or inadequate breathing. Use radiant warmers/temperature probes according to their protocol, with reassessment to avoid overheating."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Identification and everyday safety",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Identification",
                "text": "Apply and verify matching identification bands and the facility’s security process. Match the infant with the caregiver before transfers, treatments and discharge."
              },
              {
                "label": "Infection prevention",
                "text": "Use hand hygiene and clean equipment. Assess skin integrity and avoid exposure to ill visitors; explain why routine safety checks apply even when the infant looks well."
              },
              {
                "label": "Document",
                "text": "Record vital signs, weight, feeding, voiding/stooling, skin/color and family interaction. Compare findings over time and hand off unresolved concerns."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Skin, diaper and cord care",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Skin and diapers",
                "text": "Use gentle cleansing, avoid perfumes/overbathing, change wet/soiled diapers and use an appropriate barrier when needed. Inspect folds and genital skin."
              },
              {
                "label": "Cord",
                "text": "Follow local cord-care orders; keep the stump clean and dry and do not pull it off. The source’s approximate separation time is a guide, not a deadline."
              },
              {
                "label": "Report",
                "text": "Spreading redness, foul/purulent discharge, persistent bleeding or systemic illness needs assessment. Do not teach routine alcohol/iodine application as mandatory for every setting."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Vitamin K and eye prophylaxis: two different purposes",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Vitamin K clarification",
                "text": "Vitamin K prevents vitamin K deficiency bleeding. Verify the prescribed intramuscular dose within 6 hours of birth; dose selection follows weight/order. Feeding does not replace this prophylaxis."
              },
              {
                "label": "Eye clarification",
                "text": "Erythromycin ointment prevents gonococcal ophthalmia. The lecture uses the first 1–2 hours; CDC specifies administration as soon as possible after delivery and within 24 hours. Follow local requirements/order."
              },
              {
                "label": "Teach and document",
                "text": "Explain purpose, check administration and document counseling. Eye ointment does not prevent every neonatal eye infection; new redness/discharge still needs evaluation."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Hepatitis B: verify maternal status and infant timing",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Routine prevention",
                "text": "The lecture places vaccination before discharge. Current CDC perinatal guidance specifies the birth dose within 24 hours for medically stable infants ≥2000 g with an HBsAg-negative parent; smaller infants follow their specific schedule."
              },
              {
                "label": "Exposure clarification",
                "text": "For an HBsAg-positive parent, give hepatitis B vaccine plus HBIG within 12 hours, at separate sites, according to orders. Unknown status needs urgent testing and the weight/status-based prophylaxis pathway."
              },
              {
                "label": "Follow-up",
                "text": "Document dose/site/time and arrange the vaccine series and indicated postvaccination testing. HBIG is not the vaccine series; the slide’s later dose list should not be taught as repeated routine HBIG."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Blood-spot screening and indicated laboratory tests",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Purpose/timing clarification",
                "text": "The “PKU” heel-stick screen covers a panel of disorders, not just PKU. Collect the newborn blood spot at 24–48 hours under the state programme; early discharge or other circumstances may require repeat collection."
              },
              {
                "label": "Other tests",
                "text": "Glucose and blood group/antibody studies follow infant risk and protocol. A direct antiglobulin result supports evaluation for immune hemolysis but is not alone proof of clinical disease."
              },
              {
                "label": "Close the result loop",
                "text": "Confirm specimen quality, tracking and who reviews results. Do not assume no news means a confirmed normal screen; abnormal screens require prompt follow-up and diagnostic testing."
              },
              {
                "label": "Bilirubin clarification",
                "text": "Confirm a measured predischarge bilirubin and age/risk-based follow-up; visual assessment or the slide’s fixed bilirubin table is insufficient. Handoff the result and follow-up plan to the infant’s clinician."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Hearing and pulse-ox screening: add the follow-through",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Hearing clarification",
                "text": "Verify hearing screening, preferably before discharge and by 1 month, and arrange timely rescreen/diagnostic follow-up when needed. A screen is not a final hearing diagnosis."
              },
              {
                "label": "CCHD clarification",
                "text": "Screen for critical congenital heart defects at ≥24 hours, or as late as possible before an earlier discharge, using right-hand and foot oxygen readings under the current algorithm."
              },
              {
                "label": "Safety",
                "text": "A failed screen needs prompt evaluation, and a passed screen does not exclude all defects. The lecture’s single >95% value is not a complete screen or an immediate postbirth oxygen target."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Circumcision: preparation, comfort and observation",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Before",
                "text": "Confirm family choice/consent, examination, ordered analgesia and the clinician’s readiness criteria. A penile anomaly such as hypospadias requires review before routine circumcision."
              },
              {
                "label": "After",
                "text": "Observe bleeding and the first void, provide gentle diaper care and follow method-specific dressing/petroleum instructions. Sucrose is an adjunct; it does not replace indicated procedural analgesia."
              },
              {
                "label": "Teach",
                "text": "Report persistent bleeding, failure to void, spreading redness or illness. Healing varies by technique; routine antibiotic ointment is not automatically required for every circumcision."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Lecture base: Assessment & care of the newborn; Newborn assessment review handout; Newborn assessment & care-plan worksheet. Routine care follows the supplied material. Labeled safety/timing clarifications address suction, vitamin K/eye prophylaxis, hepatitis B/HBIG, screening/result tracking and circumcision precautions. No new medication-dose table or glucose/bilirubin treatment protocol is supplied.",
    "answerSources": [
      {
        "title": "Assessment & care of the newborn (original supplied PDF)",
        "url": "#/ob-final/presentation/newborn-care"
      },
      {
        "title": "Newborn assessment review handout (original supplied PDF)",
        "url": "#/ob-final/presentation/newborn-handout"
      },
      {
        "title": "Newborn assessment & care-plan worksheet (original supplied PDF)",
        "url": "#/ob-final/presentation/newborn-care-plan"
      },
      {
        "title": "AHA/AAP: newborn transition and immediate-care clarification",
        "url": "https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/neonatal-resuscitation"
      },
      {
        "title": "CDC: vitamin K purpose/timing clarification",
        "url": "https://www.cdc.gov/breastfeeding-special-circumstances/hcp/diet-micronutrients/vitamin-k.html"
      },
      {
        "title": "CDC: ocular prophylaxis clarification",
        "url": "https://www.cdc.gov/std/treatment-guidelines/gonorrhea-neonates.htm"
      },
      {
        "title": "CDC: perinatal hepatitis B prevention clarification",
        "url": "https://www.cdc.gov/hepatitis-b/hcp/perinatal-provider-overview/vaccine-administration.html"
      },
      {
        "title": "CDC: blood-spot screening and follow-up clarification",
        "url": "https://www.cdc.gov/newborn-screening/about/general-information.html"
      },
      {
        "title": "CDC: newborn hearing screening clarification",
        "url": "https://www.cdc.gov/hearing-loss-children-guide/parents-guide/newborn-hearing-screening.html"
      },
      {
        "title": "CDC: critical-heart-defect screening clarification",
        "url": "https://www.cdc.gov/heart-defects/hcp/screening/"
      },
      {
        "title": "Stanford Newborn Nursery: circumcision precautions clarification",
        "url": "https://med.stanford.edu/newborns/professional-education/circumcision/contraindications.html"
      },
      {
        "title": "AAP: predischarge bilirubin and follow-up clarification",
        "url": "https://www.aap.org/en/patient-care/hyperbilirubinemia/frequently-asked-questions-about-the-2022-aap-guideline-on-the-management-of-hyperbilirubinemia/"
      }
    ]
  },
  {
    "id": "newborn-discharge-teaching",
    "weekIds": [
      "week-9",
      "week-10"
    ],
    "topicIds": [
      "normal-newborn"
    ],
    "title": "Newborn discharge readiness",
    "text": "Teach caregivers about safe sleep, temperature, cord or circumcision care, feeding and elimination, follow-up, and signs of illness. Evaluate their understanding and ability to provide care and identify support or referral needs.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Discharge readiness includes stable recovery, effective feeding, elimination, completed or tracked screening and an arranged follow-up plan.",
          "Teach safe sleep, transport, hygiene, temperature and feeding using demonstration and teach-back, with the family’s support/language needs in mind.",
          "Fever, breathing/color changes, poor responsiveness or inability to feed need prompt help; caregivers need a clear contact and emergency plan."
        ]
      },
      {
        "type": "group",
        "title": "Assess readiness and the home support plan",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Infant readiness",
                "text": "Review vital signs/temperature, breathing, feeding observation, weight trend, urine/stool, jaundice and any birth complication. Confirm that unresolved concerns have an appropriate plan."
              },
              {
                "label": "Caregiver readiness",
                "text": "Assess skills, confidence, language, supplies, transport, safe sleep space and support. Use an interpreter and return demonstration when needed."
              },
              {
                "label": "Continuity",
                "text": "Provide written contacts and a follow-up appointment, including responsibility for pending results. Involve chosen support people and refer for practical/community help."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Safe sleep and transport",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Sleep clarification",
                "text": "Place the infant on the back for every sleep on a firm, flat, level separate surface, with a fitted sheet and no loose bedding, pillows or toys. Room-share without bed-sharing."
              },
              {
                "label": "Feeding and swaddling",
                "text": "A feeding-position pillow or adult bed is not a sleep surface. Avoid overheating; if swaddled, keep the face uncovered and stop swaddling when rolling attempts begin. Return the infant to the safe sleep space after feeding."
              },
              {
                "label": "Transport and supervision",
                "text": "Teach rear-facing car-seat use according to the seat/vehicle instructions and arrange a qualified fitting check where available. Do not assume every fire station offers one; never leave a newborn alone with a young sibling."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Temperature and urgent signs: state the action",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Fever clarification",
                "text": "Teach the clinician-recommended temperature method. A rectal temperature ≥38°C/100.4°F in a young infant needs immediate clinician contact/evaluation; do not give a medicine and simply wait for improvement."
              },
              {
                "label": "Emergency signs",
                "text": "Blue tongue/trunk, severe breathing difficulty, unresponsiveness or seizure-like activity needs emergency help. Persistent grunting/retractions or unusual lethargy needs urgent assessment."
              },
              {
                "label": "Other concerns",
                "text": "Report poor feeding, reduced urine, persistent abnormal temperature, worsening jaundice, bilious vomiting or an inconsolable high-pitched cry. Give specific contact instructions rather than a vague “watch the baby.”"
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Daily care, feeding and elimination",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Hygiene",
                "text": "Show gentle bathing and diaper care, stump care and method-specific circumcision care. Never leave the infant unattended in water; check water temperature and avoid irritating products."
              },
              {
                "label": "Feeding",
                "text": "Review the chosen feeding plan, cues and safe handling. Do not force a fixed bottle volume or put cereal/water in the bottle to treat crying. Persistent feeding difficulty needs review."
              },
              {
                "label": "Diapers",
                "text": "Keep a feeding/urine/stool record during early establishment. Wet diapers should increase over the first days; by around day 5, roughly six or more wet diapers/day supports intake when other findings are reassuring."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Follow-up and evaluation of teaching",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Early review clarification",
                "text": "Arrange an early newborn visit, usually at age 3–5 days, with earlier review when clinically indicated. Recheck feeding, weight, hydration and jaundice; do not wait for the next vaccination visit."
              },
              {
                "label": "Teach-back",
                "text": "Ask caregivers to demonstrate a feed, safe sleep setup and diaper/cord care, and explain when/where they would seek help. Review screening and immunization follow-up."
              },
              {
                "label": "Evaluate",
                "text": "Document what caregivers can do, unresolved barriers and the agreed plan. A signed checklist is insufficient if the family cannot obtain feeds, attend follow-up or recognize illness."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Lecture base: Assessment & care of the newborn; Newborn assessment review handout; Newborn assessment & care-plan worksheet; Infant feeding: breast & formula. Source discharge teaching with labeled safe-sleep, fever, early-follow-up and screening-result clarifications; supports practical teach-back without new discharge cutoffs or individual feed-volume orders.",
    "answerSources": [
      {
        "title": "Assessment & care of the newborn (original supplied PDF)",
        "url": "#/ob-final/presentation/newborn-care"
      },
      {
        "title": "Newborn assessment review handout (original supplied PDF)",
        "url": "#/ob-final/presentation/newborn-handout"
      },
      {
        "title": "Newborn assessment & care-plan worksheet (original supplied PDF)",
        "url": "#/ob-final/presentation/newborn-care-plan"
      },
      {
        "title": "Infant feeding: breast & formula (original supplied PDF)",
        "url": "#/ob-final/presentation/infant-feeding"
      },
      {
        "title": "NIH Safe to Sleep: sleep-surface clarification",
        "url": "https://safetosleep.nichd.nih.gov/reduce-risk/back-sleeping"
      },
      {
        "title": "AAP HealthyChildren: infant-fever urgency clarification",
        "url": "https://www.healthychildren.org/English/health-issues/conditions/fever/Pages/Fever-and-Your-Baby.aspx"
      },
      {
        "title": "AAP: early follow-up and weight-loss clarification",
        "url": "https://www.aap.org/en/patient-care/newborn-infant-and-early-childhood-nutrition/newborn-and-infant-health-assessment-and-promotion/first-office-visit-3-5-days/"
      }
    ]
  },
  {
    "id": "feeding-needs-milk-changes",
    "weekIds": [
      "week-9"
    ],
    "topicIds": [
      "feeding"
    ],
    "title": "Newborn nutrition and milk changes",
    "text": "Explain the newborn’s nutritional and fluid needs and the progression from colostrum to mature milk. Compare breast milk and formula and explain how teaching supports informed, individualized feeding choices.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Newborn intake supports growth, warmth and fluid balance; assess age-specific feeding and hydration rather than prescribing one volume to every baby.",
          "Colostrum progresses to transitional and mature milk, with changing volume and composition; frequent effective feeding supports supply.",
          "Explain benefits and practical differences, support informed feeding choices, and teach indicated vitamin D and other prescribed supplementation."
        ]
      },
      {
        "type": "group",
        "title": "Nutrition and fluid needs: respect the infant’s age",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Lecture numbers",
                "text": "The source lists 100–115 kcal/kg/day at about 1 month and a neonatal fluid figure of 140–160 mL/kg/day. These are not universal first-day feeding orders; needs depend on age, maturity, illness and growth."
              },
              {
                "label": "Early intake",
                "text": "Small early colostrum volumes accompany normal fluid shifts, but poor feeding/dehydration is never a required part of weight loss. Follow feeding effectiveness, weight and elimination."
              },
              {
                "label": "Safety clarification",
                "text": "Provide human milk or correctly prepared infant formula; do not add free water or dilute feeds to meet the fluid figure. The slide’s 30–90 mL stomach figure is not a mandatory volume for each first-day feed."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Colostrum, transitional milk and mature milk",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Colostrum",
                "text": "Early yellow milk is low-volume and rich in protein and immune factors, including IgA. It helps early gut function and meconium passage. Small volume does not mean nutritionally empty."
              },
              {
                "label": "Transitional milk",
                "text": "Milk volume generally increases over the first several days; the lecture describes roughly 32–96 hours as transition begins. Fat, energy and other components change; timing/volume varies."
              },
              {
                "label": "Mature milk",
                "text": "The source places mature milk around 2 weeks, with mostly water plus carbohydrate, fat and protein. Fixed daily slide volumes are examples, not a supply test for an individual parent."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Milk production and milk release",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Anatomy",
                "text": "The breast diagram shows alveolar secretory cells and ducts leading to the nipple. Prolactin supports production and oxytocin supports milk ejection/let-down."
              },
              {
                "label": "Stimulation",
                "text": "Frequent effective nursing or expression sends a demand signal. Poor transfer, separation or missed feeds may reduce effective stimulation and warrants help."
              },
              {
                "label": "Within a feed",
                "text": "The lecture contrasts foremilk and hindmilk. Treat composition as changing during a feed, not as two separate products; do not discard early milk or impose a stopwatch rule to obtain fat."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Human milk and formula: explain without blame",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Human milk",
                "text": "The PDFs describe immune components, changing composition and population health benefits, plus feeding support at home/work transitions. Benefits are not a guarantee of a particular health outcome."
              },
              {
                "label": "Formula",
                "text": "Commercial infant formula provides nutrition when chosen or indicated, but requires correct preparation and storage and does not reproduce all human-milk immune components. It should not be described simply as missing all necessary nutrients."
              },
              {
                "label": "Individualize",
                "text": "Discuss goals, medical needs, access, cost and caregiver support without judgment. Both feeding methods require responsive feeding and follow-up; parents can bond and share care with either plan."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Vitamins, minerals and safe supplementation",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Vitamin D clarification",
                "text": "Human milk alone usually supplies insufficient vitamin D. Breastfed/partially breastfed infants generally need 400 IU daily starting shortly after birth; confirm the product/dose with the clinician."
              },
              {
                "label": "Formula threshold clarification",
                "text": "An infant consuming about 32 ounces/day of vitamin-D-fortified formula generally does not need additional vitamin D. A newborn’s lower intake may still require a supplement; do not wait for cow’s milk."
              },
              {
                "label": "Other nutrients",
                "text": "Iron needs depend on age, prematurity and feeding; follow the infant’s prescribed plan. Do not add high-dose vitamins or assume the lecture’s general fat-soluble-vitamin caution replaces newborn vitamin K prophylaxis."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Lecture base: Infant feeding: breast & formula; Assessment & care of the newborn; Newborn assessment review handout. Keeps the lecture’s nutrition/milk progression while clarifying age-specific volumes, normal composition variation, informed choice, vitamin D and the distinction from birth vitamin K. No individualized nutrition prescription is created.",
    "answerSources": [
      {
        "title": "Infant feeding: breast & formula (original supplied PDF)",
        "url": "#/ob-final/presentation/infant-feeding"
      },
      {
        "title": "Assessment & care of the newborn (original supplied PDF)",
        "url": "#/ob-final/presentation/newborn-care"
      },
      {
        "title": "Newborn assessment review handout (original supplied PDF)",
        "url": "#/ob-final/presentation/newborn-handout"
      },
      {
        "title": "CDC: early feeding-frequency clarification",
        "url": "https://www.cdc.gov/infant-toddler-nutrition/breastfeeding/how-much-and-how-often.html"
      },
      {
        "title": "CDC: infant vitamin D clarification",
        "url": "https://www.cdc.gov/breastfeeding-special-circumstances/hcp/diet-micronutrients/vitamin-d.html"
      },
      {
        "title": "CDC: formula preparation/storage clarification",
        "url": "https://www.cdc.gov/infant-toddler-nutrition/formula-feeding/preparation-and-storage.html"
      },
      {
        "title": "CDC: vitamin K purpose/timing clarification",
        "url": "https://www.cdc.gov/breastfeeding-special-circumstances/hcp/diet-micronutrients/vitamin-k.html"
      }
    ]
  },
  {
    "id": "breastfeeding-latch-support",
    "weekIds": [
      "week-9"
    ],
    "topicIds": [
      "feeding"
    ],
    "title": "Positioning, latch, and feeding support",
    "text": "Demonstrate how to assess feeding cues, positioning, latch, and milk transfer. Recognize ineffective feeding or persistent pain, choose supportive interventions, and identify when lactation referral is needed.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Recognize early feeding cues and support frequent feeds, usually 8–12 in 24 hours during establishment.",
          "Assess alignment, a deep comfortable latch and visible/audible swallowing, rather than time at the breast alone.",
          "Persistent pain or poor transfer needs reassessment and help; support intake and supply while arranging appropriate lactation/clinical review."
        ]
      },
      {
        "type": "group",
        "title": "Cues, timing and a sleepy infant",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Early cues",
                "text": "Look for stirring, rooting, hands toward the mouth and increased alertness; crying is a late cue. Offer calm contact and feeding before the infant becomes very distressed."
              },
              {
                "label": "Frequency",
                "text": "The source supports 8–12 feeds in 24 hours, often with cluster feeding. Feed by cues while following the early-age/risk-based plan for waking a sleepy infant."
              },
              {
                "label": "Safety clarification",
                "text": "Support monitored skin-to-skin and gentle waking when stable, but poor arousal or ineffective feeding requires assessment. The slide’s suggestion that an infant may be uninterested for days is not permission to leave intake unassessed."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Position: bring the infant and parent into alignment",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Options in the figures",
                "text": "Cradle, cross-cradle, football, side-lying and laid-back positions can be chosen for comfort, birth recovery and infant needs. Positioning pillows support a feed, not infant sleep."
              },
              {
                "label": "Alignment",
                "text": "Keep the ear, shoulder and hip aligned, with the infant facing the breast, body close and head/neck supported. Avoid twisting the neck or forcing the head forward."
              },
              {
                "label": "Breast support",
                "text": "The pictures favor a C/U hold with fingers behind the areola. The scissor hold can crowd the latch or compress tissue; adjust support rather than pinching the nipple."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Latch: use a wide mouth and deep attachment",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Approach",
                "text": "Place the nose near the nipple, elicit rooting and wait for a wide gape. Bring the infant chin first toward the breast so the mouth takes breast tissue, not only the nipple."
              },
              {
                "label": "Check",
                "text": "Look for lips flanged outward, chin close, an open airway and a deep asymmetric latch. The images explain that the nipple should not remain pinched at the front of the mouth."
              },
              {
                "label": "Correct",
                "text": "If attachment is shallow/painful, gently release suction and reposition. Do not continue a painful ineffective latch just to complete a set feeding time."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Milk transfer: watch an actual feed",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Observe",
                "text": "Assess rhythmic sucking with swallowing, pauses, comfortable breathing and sustained attachment. Swallowing and transfer matter more than minutes spent latched."
              },
              {
                "label": "After",
                "text": "Assess comfort, nipple shape and breast softening; pair these with the infant’s weight and diaper trends. A calm infant alone is not proof of adequate intake."
              },
              {
                "label": "Source figure",
                "text": "Page 22 links frequent nursing, audible swallowing, softer breasts, increasing urine and lightening stools. It also warns that accepting a supplemental bottle does not itself prove hunger or low milk supply."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Pain, poor transfer and referral",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Assess causes",
                "text": "Ask about persistent nipple/breast pain and inspect the nipple; reassess position, latch, feeding frequency, infant alertness and suck/swallow. Consider parent/infant health rather than blaming effort."
              },
              {
                "label": "Support",
                "text": "Offer hands-on help with consent, comfortable positioning and an appropriate expression/feeding plan. Seek lactation help promptly for persistent pain, damaged nipples or ineffective transfer."
              },
              {
                "label": "Escalate and evaluate",
                "text": "Poor arousal, dehydration, significant weight loss or illness requires clinical review, not lactation advice alone. Reobserve a feed and reassess comfort, transfer and intake after the change."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Lecture base: Infant feeding: breast & formula; Newborn assessment review handout. Uses the actual positioning/latch/evaluation images, including text not extracted from the PDF. Clarifies sleepy-infant/pain/transfer safety without arbitrary feed lengths or fictional cases.",
    "answerSources": [
      {
        "title": "Infant feeding: breast & formula (original supplied PDF)",
        "url": "#/ob-final/presentation/infant-feeding"
      },
      {
        "title": "Newborn assessment review handout (original supplied PDF)",
        "url": "#/ob-final/presentation/newborn-handout"
      },
      {
        "title": "CDC: latch and intake-assessment clarification",
        "url": "https://www.cdc.gov/infant-toddler-nutrition/breastfeeding/newborn-basics.html"
      },
      {
        "title": "CDC: early feeding-frequency clarification",
        "url": "https://www.cdc.gov/infant-toddler-nutrition/breastfeeding/how-much-and-how-often.html"
      }
    ]
  },
  {
    "id": "feeding-adequacy",
    "weekIds": [
      "week-9"
    ],
    "topicIds": [
      "feeding"
    ],
    "title": "Evaluate feeding adequacy",
    "text": "Use feeding behavior, weight trends, urine and stool patterns, and hydration findings to evaluate intake. Identify findings that need follow-up, explain supplementation when indicated, and reassess whether the plan is effective.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Judge intake from an observed feed, serial weight, urine/stool and hydration together, not one diaper or crying episode.",
          "Excessive or ongoing weight loss, few wet diapers, poor swallowing or lethargy needs assessment; normal early fluid loss is not an excuse for dehydration.",
          "When supplementation is indicated, explain the plan, support desired milk production and reassess the infant’s response and follow-up."
        ]
      },
      {
        "type": "group",
        "title": "Observe intake and assess hydration",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Feeding",
                "text": "Record frequency, feeding method, actual transfer or amount offered/taken, tolerance and alertness. Watch a feed instead of assuming a recorded duration equals intake."
              },
              {
                "label": "Hydration",
                "text": "Assess mucosa, fontanelle, activity and urine trend. The source lists dry mouth, concentrated/decreased urine, weakness and lethargy as dehydration cues. Continued voiding does not by itself exclude dehydration."
              },
              {
                "label": "Interpretation",
                "text": "Contentment, breast softening or bottle acceptance is one clue, not a stand-alone test. Link observations with weight, stool transition and the infant’s condition."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Weight trend: quantify and interpret the loss",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Calculate",
                "text": "Use (birth weight − current weight) ÷ birth weight × 100 for percent loss; compare weights obtained consistently. Review age in hours/days and birth/feeding context."
              },
              {
                "label": "Clarification",
                "text": "The PDFs describe 5–10% early loss, but >10% requires evaluation, not routine reassurance. Concerning symptoms or a poor trajectory can need review before that amount."
              },
              {
                "label": "Recovery",
                "text": "AAP describes birth-weight recovery commonly over 7–14 days. Continued loss after day 5, inadequate gain or illness needs reassessment; neither a fixed “gain starts day 5” rule nor one number proves adequate feeding."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Urine and stool: use age-related trends",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Urine",
                "text": "The source image expects wet diapers to increase daily during the first days, with about six or more wet diapers/day by around day 5. Check actual wetness rather than judging diaper weight by appearance alone."
              },
              {
                "label": "Stool",
                "text": "Meconium should progress toward transitional then milk stools; the figure expects stool lightening by day 3 and yellow by about day 5 in breastfed infants. Formula stools differ."
              },
              {
                "label": "Follow up",
                "text": "Reduced output, delayed transition, dark urine, pale stools or persistent feeding concerns needs review. Diaper counts support assessment but do not replace weight/hydration evaluation."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Supplement when indicated, then evaluate",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Assess first",
                "text": "Poor transfer, dehydration, concerning weight loss or a prescribed glucose plan may require additional milk. Do not use crying alone or bottle acceptance alone as the indication."
              },
              {
                "label": "Individual plan",
                "text": "Explain the reason, milk type, amount/method, frequency and review plan with the team. Support latch and expression if continued breastfeeding is desired; do not delay treatment of an unwell infant."
              },
              {
                "label": "Evaluate",
                "text": "Recheck alertness, transfer/tolerance, urine/stool, weight and indicated labs. Document the follow-up and how supplementation will be reviewed as feeding becomes effective."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Lecture base: Infant feeding: breast & formula; Assessment & care of the newborn; Newborn assessment review handout. Combines lecture intake cues with labeled weight-loss/early-follow-up clarification. No formula-only rule, invented supplement-volume schedule or hypoglycemia treatment threshold is supplied.",
    "answerSources": [
      {
        "title": "Infant feeding: breast & formula (original supplied PDF)",
        "url": "#/ob-final/presentation/infant-feeding"
      },
      {
        "title": "Assessment & care of the newborn (original supplied PDF)",
        "url": "#/ob-final/presentation/newborn-care"
      },
      {
        "title": "Newborn assessment review handout (original supplied PDF)",
        "url": "#/ob-final/presentation/newborn-handout"
      },
      {
        "title": "AAP: early follow-up and weight-loss clarification",
        "url": "https://www.aap.org/en/patient-care/newborn-infant-and-early-childhood-nutrition/newborn-and-infant-health-assessment-and-promotion/first-office-visit-3-5-days/"
      },
      {
        "title": "CDC: latch and intake-assessment clarification",
        "url": "https://www.cdc.gov/infant-toddler-nutrition/breastfeeding/newborn-basics.html"
      }
    ]
  },
  {
    "id": "milk-expression-storage",
    "weekIds": [
      "week-9"
    ],
    "topicIds": [
      "feeding"
    ],
    "title": "Milk expression, storage, and maternal needs",
    "text": "Explain safe milk expression, storage, thawing, and handling. Include maternal nutrition, breast comfort, maintaining an appropriate milk supply, and teaching for a parent returning to work or separating from the infant.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Use clean hand expression or a suitable pump, and remove milk about as often as the infant normally feeds during separation.",
          "Keep expressed milk labeled and cold when needed; follow the clarified storage clocks rather than the older slide’s refrigerator limit.",
          "Support maternal food, fluids, comfort and a workable return-to-work plan; review technique, supply concerns and the infant’s intake."
        ]
      },
      {
        "type": "group",
        "title": "Maintain supply, comfort and maternal wellbeing",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Supply",
                "text": "Plan regular effective nursing or expression, especially when a feed is missed or parent/infant are separated. Avoid long unplanned gaps in milk removal when maintaining supply is the goal."
              },
              {
                "label": "Maternal needs clarification",
                "text": "Encourage a varied diet, access to food and fluids, and rest/support. Individual restrictions or nutrient supplements depend on health/diet; extra fluid or a “perfect” diet is not a guaranteed supply treatment."
              },
              {
                "label": "Comfort",
                "text": "Check flange fit, suction and breast/nipple comfort; persistent pain needs help. Do not use aggressive massage or repeatedly pump beyond the feeding plan to force an “empty” breast."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Expression and cleaning",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Prepare",
                "text": "Wash hands; inspect and assemble clean equipment. Hand expression and manual/electric pumping are options; assess what the parent can use comfortably."
              },
              {
                "label": "Cleaning clarification",
                "text": "Clean milk-contact pump parts after every use, using the manufacturer’s instructions, then air-dry thoroughly. Clean/sanitize items before storage rather than putting damp pieces away."
              },
              {
                "label": "Extra protection",
                "text": "Daily sanitizing is especially important for infants <2 months, preterm or immunocompromised. Use breast-milk storage bags or clean food-grade glass/plastic containers with secure lids; glass is not the only safe option."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Fresh milk: use the corrected storage limits",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Safety clarification",
                "text": "CDC home guidance for freshly expressed milk: up to 4 hours at ≤25°C/77°F and up to 4 days refrigerated at ≤4°C/40°F. The slide’s 8-day refrigerator limit is not the teaching rule."
              },
              {
                "label": "Freezer",
                "text": "At ≤−18°C/0°F, about 6 months is best; up to 12 months is acceptable. Freeze promptly if it will not be used within the refrigerator limit."
              },
              {
                "label": "Apply safely",
                "text": "Use shorter/individual facility instructions for higher-risk hospitalized infants or uncertain handling. Label expression dates and store away from the refrigerator door; do not combine uncertain milk into a new storage clock."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Thawing, warming and leftovers",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Thaw",
                "text": "Use the refrigerator or gentle lukewarm-water methods. Never microwave milk or refreeze fully thawed milk; heating can create burns and change milk quality."
              },
              {
                "label": "Use by",
                "text": "Use refrigerated thawed milk within 24 hours from complete thawing; once warmed or brought to room temperature, use within 2 hours. Milk does not have to be warmed for every feed."
              },
              {
                "label": "After a feed",
                "text": "Use unfinished expressed milk within 2 hours after feeding ends, then discard. Keep these rules separate from formula’s shorter post-feeding clock."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Transport, work and teach-back",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Transport clarification",
                "text": "An insulated cooler with frozen ice packs can hold expressed milk up to 24 hours. On arrival, refrigerate/use/freeze according to the remaining safe handling limits."
              },
              {
                "label": "Plan separation",
                "text": "Agree where and when to express, how equipment will be cleaned and how milk will be stored/carried. Teach the caregiver safe milk handling and responsive bottle feeding."
              },
              {
                "label": "Evaluate",
                "text": "Ask for a storage/thawing demonstration and check dates/times. Review comfort, feasible expression frequency and infant growth/intake; refer if pain or supply concerns persist."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Lecture base: Infant feeding: breast & formula. The lecture’s storage topic is retained, but outdated time/container advice is explicitly corrected using CDC home guidance. Hospital high-risk storage and individualized feeding plans remain separate.",
    "answerSources": [
      {
        "title": "Infant feeding: breast & formula (original supplied PDF)",
        "url": "#/ob-final/presentation/infant-feeding"
      },
      {
        "title": "CDC: expressed-milk storage clarification",
        "url": "https://www.cdc.gov/breastfeeding/breast-milk-preparation-and-storage/handling-breastmilk.html"
      },
      {
        "title": "CDC: pump-cleaning clarification",
        "url": "https://www.cdc.gov/hygiene/about/about-breast-pump-hygiene.html"
      },
      {
        "title": "CDC: maternal-nutrition clarification",
        "url": "https://www.cdc.gov/breastfeeding-special-circumstances/hcp/diet-micronutrients/maternal-diet.html"
      },
      {
        "title": "CDC: expressing milk during separation clarification",
        "url": "https://www.cdc.gov/infant-toddler-nutrition/breastfeeding/returning-to-your-workplace.html"
      }
    ]
  },
  {
    "id": "formula-preparation",
    "weekIds": [
      "week-9"
    ],
    "topicIds": [
      "feeding"
    ],
    "title": "Formula preparation and bottle safety",
    "text": "Teach safe preparation, dilution, handling, storage, and disposal of formula. Explain safe bottle-feeding positioning, responsive feeding, equipment hygiene, and how to evaluate caregiver understanding.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Choose the prescribed infant formula and measure the exact water-to-powder/concentrate ratio; never dilute to stretch a feed or concentrate without an order.",
          "Powdered formula is not sterile. Use safe water, clean equipment and the age/risk-appropriate preparation method.",
          "Feed while holding the infant, follow hunger/fullness cues and use the correct preparation, refrigeration and feeding-discard clocks."
        ]
      },
      {
        "type": "group",
        "title": "Product and dilution: read the label together",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Forms",
                "text": "Distinguish ready-to-feed, liquid concentrate and powder. Ready-to-feed needs no added water; concentrate and powder follow their own labeled instructions."
              },
              {
                "label": "Measure",
                "text": "For powder, measure the water first, then add the specified powder with its own scoop. Extra water lowers nutrition; too little water can cause excessive concentration and dehydration."
              },
              {
                "label": "Safety",
                "text": "Check the product, use-by date and storage instructions. Do not use homemade formula or add cereal/medicines unless specifically directed by the clinician."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Water and hygiene: correct the running-tap shortcut",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Prepare safely",
                "text": "Wash hands and clean/sanitize the preparation area and feeding equipment. Use a safe water source; running tap water for one minute does not itself sterilize powder."
              },
              {
                "label": "Higher-risk clarification",
                "text": "For infants younger than 2 months, preterm or immunocompromised, CDC advises extra precautions: boil water, wait about 5 minutes, then mix while still about 70°C/158°F. Cool safely before feeding; use the clinician/product-specific plan."
              },
              {
                "label": "Product choice",
                "text": "Ready-to-feed sterile liquid formula may be appropriate when reducing powder-related infection risk. Never microwave a bottle; warming is optional and must not leave hot spots."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Storage and discard: track three clocks",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Preparation clarification",
                "text": "Use prepared formula within 2 hours of preparation. If it will not be used promptly, refrigerate immediately and use within 24 hours."
              },
              {
                "label": "Once feeding begins",
                "text": "Use within 1 hour from the start of feeding, while also respecting the preparation limit. Discard what remains; do not refrigerate a partially used bottle for the next feed."
              },
              {
                "label": "Opened containers",
                "text": "Follow the manufacturer’s directions for opened ready-to-feed/concentrate and powder; most opened powders have about a 1-month limit. Do not apply the slide’s blanket 4-hour room/24–48-hour refrigerator rule to every formula."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Responsive bottle feeding",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Position",
                "text": "Hold the infant semi-upright with head supported and keep the nipple appropriately filled. Never prop a bottle or leave the infant alone to feed."
              },
              {
                "label": "Pace",
                "text": "Pause as needed, assess suck/swallow/breathing and stop with fullness cues. Turning away or releasing the nipple can signal a pause/end; finishing the bottle is not the goal."
              },
              {
                "label": "Assess",
                "text": "Record intake/tolerance and follow weight, hydration and diapers. The source’s example volumes are not a universal target for every age or infant; persistent poor intake or breathing difficulty needs review."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Equipment, teach-back and evaluation",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "After feeding",
                "text": "Disassemble and clean bottle parts, nipples and other milk-contact items, then dry and store safely. Sanitizing frequency follows infant risk and product guidance."
              },
              {
                "label": "Teach-back",
                "text": "Have the caregiver prepare a bottle and explain when it must be discarded. Check the scoop/ratio, safe water, temperature, labeling and storage rather than asking only “Do you understand?”"
              },
              {
                "label": "Evaluate",
                "text": "Resolve cost, supply, refrigeration or clean-water barriers before discharge. Arrange review if intake, weight, hydration or feeding tolerance remains concerning."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Lecture base: Infant feeding: breast & formula; Assessment & care of the newborn. Source formula/bottle teaching with labeled CDC corrections to powder sterility, water preparation, dilution and discard times. No new infant-specific volume prescription or formula recipe is invented.",
    "answerSources": [
      {
        "title": "Infant feeding: breast & formula (original supplied PDF)",
        "url": "#/ob-final/presentation/infant-feeding"
      },
      {
        "title": "Assessment & care of the newborn (original supplied PDF)",
        "url": "#/ob-final/presentation/newborn-care"
      },
      {
        "title": "CDC: formula preparation/storage clarification",
        "url": "https://www.cdc.gov/infant-toddler-nutrition/formula-feeding/preparation-and-storage.html"
      },
      {
        "title": "CDC: pump-cleaning clarification",
        "url": "https://www.cdc.gov/hygiene/about/about-breast-pump-hygiene.html"
      }
    ]
  },
  {
    "id": "feeding-special-circumstances",
    "weekIds": [
      "week-9"
    ],
    "topicIds": [
      "feeding"
    ],
    "title": "Feeding precautions and supplementation",
    "text": "Identify maternal and infant circumstances requiring feeding precautions, temporary interruption, or an alternative to breast milk. Distinguish direct breastfeeding from use of expressed milk and explain individualized counseling and follow-up.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "A feeding precaution depends on the exact infection, exposure, medication and infant condition, not the presence of any diagnosis alone.",
          "Direct breastfeeding and expressed milk may have different restrictions; explain what is safe, what is held, and how intake/supply will be supported.",
          "Use an individualized clinical plan for supplementation or interruption, with a clear review point and follow-up."
        ]
      },
      {
        "type": "group",
        "title": "Hepatitis B and C: correct the blanket restriction",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Hepatitis clarification",
                "text": "Hepatitis B or C alone is not a routine reason to stop breastfeeding. The slide lists these too broadly as formula indications."
              },
              {
                "label": "Prevention",
                "text": "For maternal hepatitis B, verify infant vaccine/HBIG prophylaxis within 12 hours when indicated. Do not delay until 48 hours or wait for the entire series before allowing feeding."
              },
              {
                "label": "Bleeding nipples",
                "text": "With cracked/bleeding nipples and hepatitis B/C, obtain a temporary feeding/express-and-discard plan until healing, because blood exposure is the concern. Continue support and arrange reassessment."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Breast HSV lesions: distinguish the affected side",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Safety clarification",
                "text": "Do not directly breastfeed or feed expressed milk from a breast with active HSV lesions; discard milk from that side until lesions heal under the clinician’s plan."
              },
              {
                "label": "Unaffected side",
                "text": "Direct feeding or expressed milk from the unaffected breast may be used if lesions elsewhere are fully covered and hygiene prevents contact/contamination."
              },
              {
                "label": "Support",
                "text": "Help maintain supply safely and arrange an alternative milk source as needed. Expressing affected milk does not make it safe; confirm healing before resuming its use."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "HIV: use current specialist counseling",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Clarification",
                "text": "The slide’s universal HIV prohibition is incomplete. Without ART or without sustained viral suppression, breastfeeding/expressed milk is not recommended under current CDC guidance."
              },
              {
                "label": "Individual counseling",
                "text": "For a parent with sustained suppression on ART, use specialist, patient-centered counseling on feeding options, remaining transmission risk, infant prophylaxis/testing and ongoing monitoring. Viral suppression does not mean zero breastfeeding risk."
              },
              {
                "label": "Nursing role",
                "text": "Support informed decisions without stigma; confirm the agreed milk source and follow-up. Do not apply the sexual-transmission meaning of U=U to breastfeeding."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Medications, radioactive exposure and substance use",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Verify the exact exposure",
                "text": "The source flags cytotoxic treatment, iodine-131 and certain substance exposures. Check the specific agent, dose/timing and feeding guidance with the treating team/pharmacist; some restrictions apply to expressed milk as well."
              },
              {
                "label": "Avoid blanket rules",
                "text": "Not every prescribed medicine or diagnostic study requires interruption. Stable prescribed methadone/buprenorphine treatment is not the same as active illicit opioid use; use the specialist plan."
              },
              {
                "label": "Support and review",
                "text": "If holding milk is needed, document duration, whether to discard, alternative feeding and when to reassess/resume. Include practical help and safety assessment rather than an unsupported permanent stop."
              },
              {
                "label": "Exposure counseling",
                "text": "Active illicit stimulant use, alcohol, cannabis and sedating substances require specific risk counseling and a safe feeding plan. Do not treat all exposures as having the same interruption period."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Infant metabolic disorders: standard formula is not interchangeable",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Classic galactosemia",
                "text": "Classic galactosemia is a contraindication to human milk and needs the metabolic team’s appropriate alternative formula. Routine cow’s-milk formula is not a universal substitute."
              },
              {
                "label": "PKU clarification",
                "text": "PKU needs controlled phenylalanine intake with specialist formula and monitoring; measured breast milk may be included in the prescribed plan. Do not turn the slide’s list into a ban for every affected infant."
              },
              {
                "label": "MSUD clarification",
                "text": "Initial treatment may temporarily stop breast milk/standard formula and use a specialized formula; breast milk may later be reintroduced under metabolic monitoring. Do not independently choose a protein restriction or restart."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Preterm, very small or glucose-risk infants: supplement purposefully",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Source risks",
                "text": "The PDF lists <32 weeks, <1500 g and persistent hypoglycemia despite feeding. These infants need an individual neonatal nutrition/glucose plan, not automatic avoidance of all human milk."
              },
              {
                "label": "Plan",
                "text": "Discuss expressed milk, donor milk when appropriate/available, fortification or formula as prescribed, with intake and supply support. Amount, route and schedule depend on maturity and condition."
              },
              {
                "label": "Evaluate and teach",
                "text": "Explain why supplementation is needed, reassess intake/growth and ordered glucose results, and confirm follow-up. The plan must protect immediate nutrition while respecting the family’s feeding goals."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Lecture base: Infant feeding: breast & formula. The source’s broad contraindication lists need explicit safety clarification for hepatitis, HIV, HSV, medications, metabolic disease and preterm supplementation. This is decision-oriented teaching, not a drug-specific hold-time or metabolic diet prescription.",
    "answerSources": [
      {
        "title": "Infant feeding: breast & formula (original supplied PDF)",
        "url": "#/ob-final/presentation/infant-feeding"
      },
      {
        "title": "CDC: individualized feeding-precautions clarification",
        "url": "https://www.cdc.gov/breastfeeding-special-circumstances/hcp/contraindications/"
      },
      {
        "title": "CDC: hepatitis B/C feeding clarification",
        "url": "https://www.cdc.gov/breastfeeding-special-circumstances/hcp/illnesses-conditions/hepatitis-b-c.html"
      },
      {
        "title": "CDC: perinatal hepatitis B prevention clarification",
        "url": "https://www.cdc.gov/hepatitis-b/hcp/perinatal-provider-overview/vaccine-administration.html"
      },
      {
        "title": "CDC: direct breastfeeding versus expressed milk with HSV clarification",
        "url": "https://www.cdc.gov/breastfeeding-special-circumstances/hcp/illnesses-conditions/herpes.html"
      },
      {
        "title": "NHS Health Research Authority: PKU feeding clarification",
        "url": "https://www.hra.nhs.uk/planning-and-improving-research/application-summaries/research-summaries/phenylalanine-free-infant-formula-in-pku/"
      },
      {
        "title": "UK screening programme: MSUD feeding clarification",
        "url": "https://www.gov.uk/government/publications/msud-suspected-description-in-brief/maple-syrup-urine-disease-msud-detailed-information"
      }
    ]
  },
  {
    "id": "prematurity-high-risk",
    "weekIds": [
      "week-10"
    ],
    "topicIds": [
      "newborn-complications"
    ],
    "title": "Prematurity and high-risk assessment",
    "text": "Explain how prematurity, growth restriction, and macrosomia affect newborn adaptation and care. Prioritize assessment, thermal support, infection prevention, nutrition, developmental care, and family support.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Assess gestational maturity, growth and the infant’s actual condition separately; preterm, SGA and macrosomic are different descriptions.",
          "Prioritize breathing/perfusion, temperature, glucose risk, feeding and signs of infection, then tailor monitoring and support.",
          "Use individualized nutrition, developmental care and family participation; guideline supplements fill high-risk care details absent from the PDFs."
        ]
      },
      {
        "type": "group",
        "title": "Prematurity, growth restriction and size: separate the terms",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Lecture connection",
                "text": "The newborn PDFs introduce gestational age, Ballard assessment and SGA contributors. Prematurity means birth before 37 weeks; low birth weight is <2500 g regardless of maturity. The labor slide’s <37 6/7 shorthand is not the preterm boundary."
              },
              {
                "label": "Growth",
                "text": "SGA describes weight <10th percentile for gestational age; LGA is >90th percentile. Growth restriction describes impaired fetal growth and is not established by one low weight alone."
              },
              {
                "label": "Macrosomia",
                "text": "The supporting labor PDF uses >4000 g for macrosomia. This is an absolute-weight descriptor, not the same classification as LGA. Review the existing gestational-assessment notes for the full age/percentile method."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Compare adaptation risks without assuming every infant is ill",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Prematurity",
                "text": "Immature lungs, temperature control and feeding coordination can make adaptation difficult even when size is appropriate for age. The younger the maturity, the more specialized support may be needed."
              },
              {
                "label": "Growth restriction",
                "text": "The source links reduced placental function and maternal/placental/fetal factors with small size. Limited energy reserves increase concern for poor temperature/glucose stability and ineffective feeding."
              },
              {
                "label": "Large size",
                "text": "Review maternal diabetes and delivery injury risk as well as glucose surveillance. The labor PDF names shoulder dystocia, clavicle fracture and brachial-plexus injury; assess movement and birth history rather than assuming large size means maturity."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Prioritize assessment before routine care",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "First look",
                "text": "Assess breathing effort, heart rate, color/perfusion, tone and responsiveness; obtain help for instability before completing a routine examination."
              },
              {
                "label": "Baseline",
                "text": "Review gestational age/growth, birth and maternal history, transition, medications, infection concerns and any required respiratory support. Document temperature and feeding/urine/stool trends."
              },
              {
                "label": "Plan",
                "text": "Use infant-specific observation, glucose and laboratory orders. A normal Apgar score or a reassuring single observation does not eliminate later adaptation problems."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Warmth and infection prevention",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Source mechanism",
                "text": "Cold stress increases oxygen and glucose demands. Prevent heat loss and reassess temperature, using the appropriate incubator/warmer or monitored skin-to-skin plan."
              },
              {
                "label": "Infection prevention",
                "text": "Use hand hygiene, clean equipment and careful line/skin care. Review maternal infection/rupture history and limit avoidable exposure to ill contacts."
              },
              {
                "label": "Safety clarification",
                "text": "Temperature instability, new apnea, poor perfusion or feeding change can indicate illness. Do not assume every low temperature is environmental or every infant with an infection must have fever."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Guideline supplement: nutrition and developmental care",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Source limit",
                "text": "The feeding PDF identifies very preterm/very small infants as needing additional support, but does not provide a full neonatal nutrition plan. Milk type, route and fortification are individualized."
              },
              {
                "label": "Nutrition",
                "text": "Support mother’s own milk and expression when appropriate; donor milk, fortification or specialized formula may be prescribed. Match oral feeding to breathing/coordination; do not force feeds during distress."
              },
              {
                "label": "Development",
                "text": "Protect sleep, reduce excessive light/noise and use gentle positioning/handling guided by infant cues. Monitored skin-to-skin and parent participation complement medical care."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Family participation and evaluation",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Family support supplement",
                "text": "Explain equipment, immediate priorities and the reason for repeated assessments. Invite safe participation in comfort and care, with consent, language support and lactation/social-work help as needed."
              },
              {
                "label": "Evaluate",
                "text": "Look for stable breathing/perfusion and temperature, effective prescribed nutrition, appropriate glucose trends and growth, and no new infection cues. One satisfactory feed is not the whole assessment."
              },
              {
                "label": "Communicate",
                "text": "Share changes, action and response at handoff. Give families an understandable plan and realistic next steps rather than a promised discharge date based only on weight."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Lecture base: Assessment & care of the newborn; Newborn assessment review handout. Supporting supplied PDFs: Labor & birth complications; Infant feeding: breast & formula. Uses original maturity, size, cold-stress, risk and feeding material. Clearly labeled supplements add nutrition, developmental care and family involvement; no infant-specific feeding prescription or universal admission/discharge cutoff is invented.",
    "answerSources": [
      {
        "title": "Assessment & care of the newborn (original supplied PDF)",
        "url": "#/ob-final/presentation/newborn-care"
      },
      {
        "title": "Newborn assessment review handout (original supplied PDF)",
        "url": "#/ob-final/presentation/newborn-handout"
      },
      {
        "title": "Labor & birth complications (original supplied PDF)",
        "url": "#/ob-final/presentation/labor-complications"
      },
      {
        "title": "Infant feeding: breast & formula (original supplied PDF)",
        "url": "#/ob-final/presentation/infant-feeding"
      },
      {
        "title": "AHA/AAP: immediate care, temperature and suction safety clarification",
        "url": "https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/neonatal-resuscitation"
      },
      {
        "title": "WHO: preterm nutrition, family and developmental-care supplement",
        "url": "https://www.who.int/publications/b/63796"
      },
      {
        "title": "WHO: monitored skin-to-skin care supplement",
        "url": "https://www.who.int/publications/m/item/kangaroo-mother-care--a-clinical-practice-guide"
      },
      {
        "title": "CPS: preterm feeding and discharge-readiness supplement",
        "url": "https://cps.ca/en/documents/position/discharge-planning-of-the-preterm-infant"
      }
    ]
  },
  {
    "id": "newborn-respiratory-distress",
    "weekIds": [
      "week-10"
    ],
    "topicIds": [
      "newborn-complications"
    ],
    "title": "Respiratory distress and first actions",
    "text": "Recognize respiratory distress and compare the assessment patterns of RDS, transient tachypnea, and meconium aspiration. Explain immediate priorities, collaborative respiratory support, monitoring, and evaluation of improvement or deterioration.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Recognize grunting, flaring, retractions, central cyanosis, apnea or persistent abnormal breathing and assess the infant immediately.",
          "RDS, TTN and meconium aspiration have different mechanisms, but signs overlap; use birth history, examination and the team’s investigations together.",
          "Provide the trained airway/breathing response, warmth and prescribed support; do not delay ventilation for routine meconium suctioning."
        ]
      },
      {
        "type": "group",
        "title": "Recognize distress and call for help",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Source cues",
                "text": "The newborn PDFs identify nasal flaring, grunting, retractions, cyanosis and abnormal respiratory rate/sounds. Assess work of breathing as well as rate."
              },
              {
                "label": "Immediate priorities",
                "text": "Summon neonatal help and assess/support breathing and circulation under the trained response; monitor heart rate and oxygenation while maintaining warmth. Apnea, gasping, poor tone or poor perfusion requires urgent action."
              },
              {
                "label": "Feeding safety",
                "text": "An infant struggling to breathe may not feed safely. Pause oral feeding during significant distress and obtain the team’s respiratory/nutrition plan; a feed is not a treatment for hypoxia."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Guideline supplement: RDS and surfactant deficiency",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Mechanism",
                "text": "The supporting labor PDF connects antenatal corticosteroids with fetal surfactant production. In neonatal RDS, insufficient surfactant promotes alveolar collapse, increasing work of breathing and impairing gas exchange."
              },
              {
                "label": "Pattern",
                "text": "Prematurity is a major clue; grunting, retractions, tachypnea and oxygen need typically develop soon after birth. Clinical assessment and imaging help distinguish other causes."
              },
              {
                "label": "Collaborative care",
                "text": "The team may use CPAP, surfactant and, when needed, ventilation. Nursing care monitors response, oxygen needs and respiratory effort; antenatal steroid treatment is not the newborn’s surfactant-replacement treatment."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "TTN: delayed clearance of lung fluid",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Source explanation",
                "text": "The newborn lecture describes ongoing fluid absorption by pulmonary capillaries/lymphatics and frequent respiratory observation. Retained fetal lung fluid can cause early tachypnea."
              },
              {
                "label": "Pattern clarification",
                "text": "TTN often follows term/late-preterm birth, including cesarean birth without labor. It commonly improves over the first few days with appropriate support; expected improvement is not permission to overlook deterioration."
              },
              {
                "label": "Care",
                "text": "Maintain warmth and provide prescribed oxygen/support with monitoring. The slide’s blow-by example does not mean blow-by is sufficient for every infant, and TTN should not be assumed before other causes are assessed."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Meconium exposure versus aspiration",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Source connection",
                "text": "The labor PDF describes meconium-stained fluid and possible respiratory compromise. Stained fluid is a risk/exposure finding, not by itself a diagnosis of aspiration syndrome."
              },
              {
                "label": "Assessment supplement",
                "text": "Review maturity, birth/oxygenation history and respiratory findings. Aspirated meconium can obstruct airways and inflame the lungs, causing impaired gas exchange and serious distress; clinical evaluation guides support."
              },
              {
                "label": "Preparation",
                "text": "Have the skilled neonatal team/equipment available, assess breathing and monitor closely. Record the exposure, infant condition, interventions and response."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Safety clarification: suction and immediate respiratory support",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Current practice",
                "text": "Routine oral, nasal or tracheal suctioning is not recommended solely for meconium-stained fluid. The supporting slide’s “deep suctioning” language needs this qualification."
              },
              {
                "label": "Priority",
                "text": "If breathing is absent or ineffective, prioritize effective ventilation under the neonatal algorithm. Suction is reserved for suspected airway obstruction when indicated by the skilled team."
              },
              {
                "label": "Do not wait",
                "text": "Do not wait for an Apgar total, a chest X-ray or an assumed diagnosis before responding to an infant who is not breathing effectively."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Guideline supplement: collaborative support and monitoring",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Respiratory support",
                "text": "Provide prescribed oxygen and CPAP/ventilatory support, using the ordered saturation targets and equipment checks. Pulse-ox readings need a reliable signal and clinical interpretation."
              },
              {
                "label": "Investigation",
                "text": "Prepare ordered blood gases, imaging and infection evaluation as indicated. Respiratory distress can also reflect pneumonia/sepsis, cardiac disease or another cause; it is not always one of the three comparison diagnoses."
              },
              {
                "label": "Nursing surveillance",
                "text": "Assess chest movement, respiratory effort, perfusion, alertness and device/interface integrity. Support safe fluids/nutrition and report rising support needs or skin injury."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Evaluate improvement or deterioration",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Improvement",
                "text": "Look for less work of breathing, stable oxygenation on the prescribed support, adequate perfusion and improved alertness. Assess trends rather than a single normal saturation."
              },
              {
                "label": "Deterioration",
                "text": "Escalate apnea, bradycardia, worsening retractions, exhaustion, asymmetric breath sounds, poor perfusion or increasing oxygen/ventilatory need. A falling rate with poor effort may mean fatigue rather than recovery."
              },
              {
                "label": "Handoff",
                "text": "Document the suspected cause, support/settings as ordered, findings and response; explain changes to the family and reassess after each intervention."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Lecture base: Assessment & care of the newborn; Newborn assessment review handout. Supporting supplied PDFs: Labor & birth complications. Original PDFs supply distress cues, TTN care, antenatal surfactant context and meconium risk. Labeled supplements complete RDS/comparison/support; suction safety is explicitly corrected. No oxygen-concentration, ventilator-setting, surfactant-dose or resuscitation recipe is authored.",
    "answerSources": [
      {
        "title": "Assessment & care of the newborn (original supplied PDF)",
        "url": "#/ob-final/presentation/newborn-care"
      },
      {
        "title": "Newborn assessment review handout (original supplied PDF)",
        "url": "#/ob-final/presentation/newborn-handout"
      },
      {
        "title": "Labor & birth complications (original supplied PDF)",
        "url": "#/ob-final/presentation/labor-complications"
      },
      {
        "title": "NHLBI: respiratory-pattern comparison supplement",
        "url": "https://www.nhlbi.nih.gov/health/newborn-breathing-conditions/types"
      },
      {
        "title": "NHLBI: surfactant deficiency and RDS supplement",
        "url": "https://www.nhlbi.nih.gov/health/respiratory-distress-syndrome"
      },
      {
        "title": "NICE: preterm respiratory support and monitoring supplement",
        "url": "https://www.nice.org.uk/guidance/ng124/chapter/recommendations"
      },
      {
        "title": "AHA/AAP: immediate care, temperature and suction safety clarification",
        "url": "https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/neonatal-resuscitation"
      },
      {
        "title": "MedlinePlus: meconium aspiration mechanism clarification",
        "url": "https://medlineplus.gov/ency/article/001596.htm"
      }
    ]
  },
  {
    "id": "newborn-temperature-glucose",
    "weekIds": [
      "week-10"
    ],
    "topicIds": [
      "newborn-complications"
    ],
    "title": "Temperature instability and hypoglycemia",
    "text": "Connect cold stress, oxygen demand, and glucose needs. Identify newborns at risk for hypoglycemia, recognize symptomatic illness, explain prompt assessment and prescribed treatment, and evaluate temperature and glucose trends.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Cold stress increases oxygen and glucose use, so warming, breathing and intake must be assessed together.",
          "Preterm/SGA infants, infants of diabetic mothers and other at-risk newborns need prescribed glucose surveillance; symptomatic infants need immediate assessment.",
          "Treat low glucose under the age-specific local pathway, support safe nutrition and recheck temperature, glucose and clinical response."
        ]
      },
      {
        "type": "group",
        "title": "Cold stress links oxygen use and glucose needs",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Source mechanism",
                "text": "The lecture’s figure links cold exposure with increased metabolism/oxygen demand, vasoconstriction, reduced tissue oxygenation and acidosis. Brown-fat thermogenesis consumes energy; a newborn has limited reserve."
              },
              {
                "label": "Assessment",
                "text": "Check temperature with its route, breathing effort, color/perfusion, alertness and feeding. Hypothermia can accompany low glucose, infection or illness, not just a cool room."
              },
              {
                "label": "Priority",
                "text": "Correct thermal stress while assessing breathing and glucose risk. Do not wait for shivering or treat the thermometer reading in isolation."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Prevent heat loss and warm safely",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Four mechanisms",
                "text": "Prevent evaporation from wet skin, convection to cooler air, conduction to cold surfaces and radiation to nearby cold objects. Dry, protect from drafts and use warm surfaces according to the infant’s plan."
              },
              {
                "label": "Temperature clarification",
                "text": "AHA/AAP guidance aims for 36.5–37.5°C during admission/stabilization. Use the correct monitoring route and local thermal-care plan; inconsistent slide conversions are not new targets."
              },
              {
                "label": "Reassess",
                "text": "Use monitored skin-to-skin or the prescribed incubator/warmer, check probes/device settings and reassess to avoid overheating. Persistent instability needs clinical review."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Who needs glucose surveillance?",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Source risk groups",
                "text": "The newborn PDF identifies SGA, LGA and infants of diabetic mothers; the feeding PDF also highlights preterm/very-low-birth-weight and stressed infants. Assess maturity and the actual feeding/clinical history."
              },
              {
                "label": "Mechanisms supplement",
                "text": "Low reserves, inadequate intake, increased energy use or excess insulin can reduce available glucose. Infants of diabetic mothers may remain hyperinsulinemic after placental glucose delivery stops."
              },
              {
                "label": "Screening clarification",
                "text": "Use age/risk-specific timing coordinated with feeding and symptoms. The slide’s “hourly heel stick” is not a universal schedule for every newborn, and one normal reading does not finish indicated surveillance."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Guideline supplement: recognize low-glucose illness",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Possible cues",
                "text": "Jitteriness, poor feeding, lethargy, weak tone, apnea, cyanosis or seizures can accompany hypoglycemia. At-risk infants may also be asymptomatic."
              },
              {
                "label": "Act",
                "text": "Obtain prompt bedside glucose and clinical assessment, while supporting airway/breathing and warmth. A sick infant needs evaluation for other causes as well, including infection."
              },
              {
                "label": "Measurement",
                "text": "Point-of-care meters are less reliable at low values. Obtain ordered laboratory confirmation when indicated, but do not delay urgent treatment of symptomatic low glucose while waiting for a result."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Guideline supplement: match treatment to condition",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Well infant able to feed",
                "text": "Prescribed effective feeding/supplementation and buccal dextrose gel may be used under the local pathway, with a timely repeat measurement. Gel does not replace a feeding plan or reassessment."
              },
              {
                "label": "Symptomatic or unsafe to feed",
                "text": "Urgent neonatal care and prescribed IV dextrose may be required, especially with severe/persistent low readings or inability to feed safely. Gel may only bridge access when the protocol permits; it must not delay definitive care."
              },
              {
                "label": "Thresholds",
                "text": "Intervention levels depend on postnatal age, risk, symptoms and persistent versus transitional disease. The original PDFs give no complete threshold/dose algorithm; follow the actual institutional order set."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Reassess and plan safe nutrition",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Evaluate",
                "text": "Repeat glucose at the ordered short interval after treatment and continue until the pathway’s stability criteria are met. Follow temperature, alertness, feeding tolerance and urine output together."
              },
              {
                "label": "Persistent concerns",
                "text": "Recurrent low glucose, ongoing symptoms or inability to maintain levels with feeds needs clinician reassessment and investigation rather than repeatedly restarting the same unsuccessful feed."
              },
              {
                "label": "Family and discharge",
                "text": "Explain the reason for monitoring and supplementation, support desired milk production and document the follow-up plan. Do not assume one corrected value or a warm skin reading proves discharge readiness."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Lecture base: Assessment & care of the newborn; Newborn assessment review handout. Supporting supplied PDFs: Infant feeding: breast & formula. Cold-stress physiology and glucose-risk groups come from the PDFs. Labeled guideline supplements supply symptoms, confirmation and treatment distinctions. No single universal glucose threshold, hourly schedule, gel dose or IV infusion rate is invented.",
    "answerSources": [
      {
        "title": "Assessment & care of the newborn (original supplied PDF)",
        "url": "#/ob-final/presentation/newborn-care"
      },
      {
        "title": "Newborn assessment review handout (original supplied PDF)",
        "url": "#/ob-final/presentation/newborn-handout"
      },
      {
        "title": "Infant feeding: breast & formula (original supplied PDF)",
        "url": "#/ob-final/presentation/infant-feeding"
      },
      {
        "title": "AHA/AAP: immediate care, temperature and suction safety clarification",
        "url": "https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/neonatal-resuscitation"
      },
      {
        "title": "CPS: newborn glucose assessment/treatment clarification",
        "url": "https://cps.ca/en/documents/position/newborns-at-risk-for-low-blood-glucose"
      }
    ]
  },
  {
    "id": "newborn-jaundice",
    "weekIds": [
      "week-10"
    ],
    "topicIds": [
      "newborn-complications"
    ],
    "title": "Jaundice, hemolysis, and phototherapy",
    "text": "Distinguish expected bilirubin changes from concerning jaundice using age, risk factors, and assessment findings. Explain bilirubin monitoring, the relevance of hemolysis, phototherapy care, feeding support, and follow-up.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Interpret jaundice with age in hours, gestational age, bilirubin measurement and risk, not appearance alone.",
          "Jaundice in the first 24 hours, rapid progression or an unwell infant needs prompt review; later onset is not automatically benign.",
          "Provide prescribed phototherapy and feeding/hydration support, then track measured response, rebound risk and follow-up."
        ]
      },
      {
        "type": "group",
        "title": "Age and risk: common does not mean harmless",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Source explanation",
                "text": "Bilirubin comes from red-cell breakdown; immature processing and feeding-related clearance contribute to early newborn changes. The lecture describes physiologic rise after the first day."
              },
              {
                "label": "Concerning pattern",
                "text": "Jaundice before 24 hours, a rapid rise, anemia, poor feeding or illness needs assessment. Prematurity, hemolysis and clinical instability can increase risk."
              },
              {
                "label": "Clarification",
                "text": "Do not label all later jaundice “physiologic.” Assess measured level/trajectory and the infant’s condition; severe unconjugated hyperbilirubinemia can injure the nervous system."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Measure bilirubin and use the right chart",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Monitoring clarification",
                "text": "Confirm a measured predischarge bilirubin and plan repeat testing as indicated. Transcutaneous measurement is a screening tool; obtain serum confirmation and treatment monitoring when required."
              },
              {
                "label": "Interpretation",
                "text": "Use age in hours, gestational age and neurotoxicity risks on the appropriate treatment guideline. The AAP ≥35-week framework is not a treatment chart for a very preterm infant."
              },
              {
                "label": "Source-table safety",
                "text": "Do not use the lecture’s fixed term/preterm table as a treatment order or assume prematurity allows higher levels. Its SI labels should be µmol/L, not mmol/L; verify the units and actual protocol."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Hemolysis: connect history, anemia and bilirubin",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Source connection",
                "text": "Review maternal/infant blood group and antibody history when indicated. ABO/Rh incompatibility can cause immune red-cell destruction, increasing bilirubin and sometimes causing anemia."
              },
              {
                "label": "DAT clarification",
                "text": "A positive direct antiglobulin test indicates antibody coating of red cells; it is not alone proof of clinically important hemolysis. Interpret the bilirubin rate of rise, hemoglobin and clinical findings together."
              },
              {
                "label": "Other causes supplement",
                "text": "A negative DAT does not exclude all hemolysis. The team may investigate G6PD deficiency or other causes when the pattern warrants it; bruising/cephalohematoma can also add bilirubin load."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Phototherapy: purpose and safe device care",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Purpose clarification",
                "text": "Therapeutic visible blue light, not ultraviolet light or home sunlight, changes bilirubin into forms the infant can eliminate more readily. Treatment is prescribed from the appropriate measured level/risk."
              },
              {
                "label": "Device care",
                "text": "Use the ordered device/position/intensity and manufacturer instructions; maximize appropriate exposed skin and check temperature. The lecture describes overhead and blanket devices, which have different handling requirements."
              },
              {
                "label": "Protection",
                "text": "Use correctly fitted eye protection when required, especially with overhead lights, and provide eye/skin care. Follow device-specific diaper/protection instructions rather than covering treatment surfaces with unnecessary blankets."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Support feeding, hydration and comfort",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Source nursing care",
                "text": "Support frequent effective milk feeding, assess transfer/tolerance, weight, urine and stool, and monitor temperature and skin. Poor intake can worsen bilirubin clearance and dehydration risk."
              },
              {
                "label": "Plan",
                "text": "Continue breastfeeding or expressed-milk support when appropriate; use prescribed supplementation/fluids if needed. Coordinate care and permitted feeding breaks without compromising necessary phototherapy."
              },
              {
                "label": "Evaluate",
                "text": "Track ordered serum bilirubin trends and treatment delivery, not just fading skin color. Report poor intake, weight loss, temperature instability or failure of bilirubin to respond."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Follow-up, rebound and urgent neurologic findings",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "After treatment clarification",
                "text": "Stopping treatment and rebound testing depend on age/risk, hemolysis and response. Do not stop lights because the infant looks less yellow; follow the clinician’s plan."
              },
              {
                "label": "Urgency",
                "text": "Marked lethargy, poor suck, a high-pitched cry, unusual tone/arching or seizures with jaundice requires urgent neonatal assessment. Escalate a rapidly rising/high-risk result or clinical deterioration promptly."
              },
              {
                "label": "Discharge",
                "text": "Handoff the measured result, age at sampling, treatment history and scheduled follow-up/repeat test. Teach feeding and warning signs; “no news” or a single older normal screen is not a follow-up plan."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Lecture base: Assessment & care of the newborn; Newborn assessment review handout. Builds on original jaundice/hemolysis/phototherapy teaching. Safety clarifications replace fixed bilirubin limits, wrong SI labels and the handout’s UV wording; guideline supplements explain risk-based monitoring and rebound. No treatment nomogram, IVIG dose or exchange-transfusion protocol is invented.",
    "answerSources": [
      {
        "title": "Assessment & care of the newborn (original supplied PDF)",
        "url": "#/ob-final/presentation/newborn-care"
      },
      {
        "title": "Newborn assessment review handout (original supplied PDF)",
        "url": "#/ob-final/presentation/newborn-handout"
      },
      {
        "title": "AAP: bilirubin risk, measurement and follow-up clarification",
        "url": "https://www.aap.org/en/patient-care/hyperbilirubinemia/frequently-asked-questions-about-the-2022-aap-guideline-on-the-management-of-hyperbilirubinemia/"
      },
      {
        "title": "Royal Children’s Hospital: phototherapy nursing-care clarification",
        "url": "https://www.rch.org.au/rchcpg/hospital_clinical_guideline_index/Phototherapy_for_neonatal_jaundice/"
      }
    ]
  },
  {
    "id": "newborn-sepsis-nec",
    "weekIds": [
      "week-10"
    ],
    "topicIds": [
      "newborn-complications"
    ],
    "title": "Sepsis and gastrointestinal complications",
    "text": "Recognize infection or sepsis and feeding or abdominal findings concerning for necrotizing enterocolitis. Explain risk assessment, urgent reporting, diagnostic evaluation, prescribed treatment, monitoring, and family communication.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Temperature instability, new apnea, poor feeding, lethargy or poor perfusion can signal neonatal infection, even without fever.",
          "Abdominal distention/discoloration, bilious vomiting or bloody stool can signal NEC; stop the current feed and urgently notify the neonatal team when suspected.",
          "The PDFs provide infection-risk and abdominal cues; labeled supplements explain sepsis/NEC evaluation, prescribed care and monitoring where a full lecture is absent."
        ]
      },
      {
        "type": "group",
        "title": "Source connection and infection risk",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Original material",
                "text": "The antepartum PDF links maternal GBS and membrane/intraamniotic infection with neonatal sepsis, pneumonia and meningitis. The newborn PDF highlights abnormal breathing, feeding and abdominal findings."
              },
              {
                "label": "Risk assessment",
                "text": "Review prematurity, maternal infection/rupture history, intrapartum treatment and the infant’s clinical course. Later infection risk can also relate to invasive devices and hospital exposures."
              },
              {
                "label": "Limit",
                "text": "These risk cues do not themselves diagnose sepsis. The PDFs contain no complete neonatal sepsis pathway or dedicated NEC lesson; the following topics are guideline supplements."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Guideline supplement: recognize subtle neonatal sepsis",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Possible signs",
                "text": "Poor feeding, reduced activity, temperature instability, apnea/bradycardia, respiratory distress or poor perfusion can be early signs. Fever is not required."
              },
              {
                "label": "Assessment",
                "text": "Check breathing/circulation, alertness, glucose, temperature, urine output and new skin/abdominal changes. Reassess a new pattern against baseline, not just one isolated vital sign."
              },
              {
                "label": "Urgency",
                "text": "Escalate a clinically ill newborn immediately. Do not dismiss the infant as merely sleepy, cold or feeding poorly without considering infection and other serious causes."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Guideline supplement: urgent evaluation and prescribed care",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "First response",
                "text": "Summon neonatal help and support airway, breathing, circulation and temperature. Prepare monitoring and vascular access according to the team’s plan."
              },
              {
                "label": "Investigation",
                "text": "Obtain ordered blood cultures before antibiotics when feasible; do not create a treatment delay in an unstable infant. Other tests, including lumbar puncture, depend on condition and indication; no single CBC/CRP excludes sepsis."
              },
              {
                "label": "Treatment",
                "text": "Administer prompt prescribed antibiotics/support and reassess perfusion, breathing and urine output. Use the actual gestational-age/local pathway; an early-onset risk calculator for older newborns is not a shortcut for a sick or very preterm infant."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Guideline supplement: NEC risk and abdominal cues",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "What NEC means",
                "text": "NEC involves intestinal inflammation and tissue injury that can progress to necrosis, perforation and systemic infection. Premature/very-small or ill infants are particularly vulnerable."
              },
              {
                "label": "Recognize",
                "text": "Watch for new feeding intolerance, abdominal distention/tenderness or discoloration, bilious vomiting and bloody stool, with possible lethargy, apnea or temperature instability."
              },
              {
                "label": "Interpret",
                "text": "Not every residual or distended abdomen is NEC, but a concerning combination or deterioration needs urgent evaluation. NEC is not diagnosed from one diaper or one measurement alone."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Guideline supplement: suspected NEC first response",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Protect",
                "text": "Stop the current enteral feed and urgently notify the neonatal team. Implement the ordered NPO/bowel-rest plan; do not keep feeding to test tolerance."
              },
              {
                "label": "Prepare",
                "text": "Support breathing/perfusion and prepare ordered gastric decompression, IV access, fluids/nutrition, cultures and antimicrobial treatment. Monitor the infant while investigations proceed."
              },
              {
                "label": "Escalate",
                "text": "Shock, a rapidly worsening abdomen or possible perforation needs urgent senior/surgical assessment. Do not wait for every classic sign or a visible large amount of blood."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Guideline supplement: investigation and ongoing NEC care",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Diagnostic evaluation",
                "text": "Prepare ordered abdominal imaging and laboratory assessment. Gas in the bowel wall (pneumatosis) or free abdominal air is significant; the team interprets imaging with clinical and laboratory trends."
              },
              {
                "label": "Nursing monitoring",
                "text": "Follow serial abdominal appearance/girth as ordered, stool/emesis or gastric output, respiration, perfusion, urine, glucose and temperature. Watch lines and fluid/nutritional support and document changes promptly."
              },
              {
                "label": "Treatment course",
                "text": "Continue prescribed bowel rest, decompression, antibiotics and nutrition; surgery may be needed for perforation or severe disease. Feed restarting and advancement require the neonatal/surgical plan, not a fixed timetable."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Family communication and response evaluation",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Communicate",
                "text": "Explain the concern, immediate care and why feeds or contact may change; provide regular updates and support expression/participation when appropriate. Avoid presenting suspected illness as a confirmed diagnosis before evaluation."
              },
              {
                "label": "Evaluate",
                "text": "Look for improving perfusion, breathing, temperature, alertness and abdominal findings, with appropriate urine/output and ordered laboratory/imaging trends. Failure to improve requires renewed escalation."
              },
              {
                "label": "Handoff",
                "text": "Record timing of concern, clinician notification, specimens, treatment and response. Confirm who follows pending cultures/results and the next assessment rather than assuming the initial call completes care."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Lecture base: Assessment & care of the newborn; Newborn assessment review handout. Supporting supplied PDFs: Antepartum risks. Original sources support maternal/infant infection risk and concerning abdominal assessment. Detailed sepsis and NEC nursing explanations are explicitly labeled guideline supplements, not supplied lecture content. Antibiotic choices/doses, calculator cutoffs, NEC staging and surgical protocols remain individualized.",
    "answerSources": [
      {
        "title": "Assessment & care of the newborn (original supplied PDF)",
        "url": "#/ob-final/presentation/newborn-care"
      },
      {
        "title": "Newborn assessment review handout (original supplied PDF)",
        "url": "#/ob-final/presentation/newborn-handout"
      },
      {
        "title": "Antepartum risks (original supplied PDF)",
        "url": "#/ob-final/presentation/antepartum-risks"
      },
      {
        "title": "NICE: neonatal-infection recognition and treatment supplement",
        "url": "https://www.nice.org.uk/guidance/ng195"
      },
      {
        "title": "UCSF: early-onset sepsis assessment supplement (≥34-week scope)",
        "url": "https://medconnection.ucsfbenioffchildrens.org/neonatal-sepsis-guidelines"
      },
      {
        "title": "NICHD: NEC recognition and diagnostic-evaluation supplement",
        "url": "https://www.nichd.nih.gov/health/topics/factsheets/nec"
      },
      {
        "title": "NICHD: NEC treatment supplement",
        "url": "https://www.nichd.nih.gov/health/topics/nec/conditioninfo/treatments"
      }
    ]
  },
  {
    "id": "preterm-ongoing-care",
    "weekIds": [
      "week-10"
    ],
    "topicIds": [
      "newborn-complications"
    ],
    "title": "Ongoing care of a preterm newborn",
    "text": "Describe nursing considerations for preterm feeding, oxygen therapy and complications such as retinopathy, developmental support, and discharge planning. Identify how the team evaluates readiness for feeding, growth, and safe transition home.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Ongoing preterm care balances safe nutrition, growth, respiratory stability, temperature and development, with parent participation.",
          "Use prescribed oxygen targets and complete indicated eye screening; avoid both under-treatment of hypoxia and unnecessary oxygen exposure.",
          "The PDFs provide only partial preterm-care material; guideline supplements complete readiness, retinopathy and discharge follow-up without a one-weight or one-age discharge rule."
        ]
      },
      {
        "type": "group",
        "title": "Guideline supplement: assess feeding readiness",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Source connection",
                "text": "The feeding PDF flags infants <32 weeks or <1500 g for additional nutrition support. Maturity and clinical status determine the safe route, not weight alone."
              },
              {
                "label": "Readiness",
                "text": "Assess alertness/cues, suck–swallow–breathe coordination, respiratory stability and endurance. Non-nutritive sucking or a single good latch does not prove readiness for all oral intake."
              },
              {
                "label": "Safety",
                "text": "Pause an oral feed for coughing/choking, color change, bradycardia/desaturation or fatigue and reassess. Tube or other prescribed nutrition may be needed while feeding skills mature."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Guideline supplement: nutrition, growth and feeding evaluation",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Nutrition",
                "text": "Support human milk and expression when appropriate; donor milk, fortification or formula may be prescribed. Preterm birth does not automatically require avoidance of human milk."
              },
              {
                "label": "Monitoring",
                "text": "Follow actual intake/tolerance, weight and growth trajectory, urine/stool and ordered laboratory results. Distinguish inadequate intake from a feeding route that is temporarily inappropriate because of illness."
              },
              {
                "label": "Evaluate",
                "text": "Adjust with the team when growth, hydration or tolerance is inadequate. Teach caregivers the specific milk/fortifier preparation and feeding plan; do not convert the source’s broad supplement list into a universal recipe."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Guideline supplement: oxygen and chronic lung risk",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Purpose and safety",
                "text": "Titrate oxygen to the prescribed target with continuous monitoring when indicated. Check probe signal, delivery device and clinical status; do not independently increase oxygen to chase a universal saturation number."
              },
              {
                "label": "Complications",
                "text": "Prolonged respiratory support/oxygen exposure is associated with chronic lung disease/BPD and other complications. Avoid unnecessary exposure, but never withhold needed oxygen because of fear of retinopathy."
              },
              {
                "label": "Ongoing care",
                "text": "Assess breathing/support needs, feeding endurance, growth and equipment-related skin injury. Persistent apnea/bradycardia, rising oxygen need or exhaustion requires review; caffeine or other treatments are given only as prescribed."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Guideline supplement: retinopathy and eye follow-up",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Mechanism",
                "text": "In ROP, immature retinal vessels develop abnormally, potentially threatening vision. Prematurity/low birth weight and the clinical course guide screening eligibility."
              },
              {
                "label": "Detection",
                "text": "Early ROP may have no visible symptoms; an ophthalmic examination is needed. Normal-looking eyes or acceptable oxygen saturation does not cancel the ordered exam."
              },
              {
                "label": "Follow-through",
                "text": "Verify scheduled examinations/results and the ophthalmology plan. Transfer or discharge does not end surveillance; book the next time-sensitive exam and communicate its importance to the family."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Guideline supplement: development and family care",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Protect development",
                "text": "Use cue-based handling, supported positioning, protected sleep and appropriate light/noise, while completing essential assessments. Adapt stimulation to the infant’s tolerance."
              },
              {
                "label": "Participation",
                "text": "Support monitored skin-to-skin, feeding/comfort and parent involvement when appropriate. Teach stress and engagement cues and provide emotional, language and practical support."
              },
              {
                "label": "Follow-up",
                "text": "Document developmental concerns and arrange appropriate high-risk/developmental services. Explain corrected-age use when relevant without promising outcomes from one examination or milestone."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Guideline supplement: discharge readiness and handoff",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Physiologic readiness",
                "text": "Confirm stable temperature, an acceptable breathing/apnea plan, adequate nutrition/growth and resolved or managed acute problems under the neonatal team’s criteria. No single weight or corrected age proves readiness."
              },
              {
                "label": "Caregiver readiness",
                "text": "Use teach-back/demonstration for feeding, prescribed medicines/equipment, safe sleep and illness response. If home oxygen/tube support is planned, verify training, supplies and services rather than assuming every infant must have the same discharge pathway."
              },
              {
                "label": "Continuity",
                "text": "Arrange early clinical review and nutrition, eye, hearing and developmental follow-up as indicated. Handoff pending results, screening appointments and the escalation plan; assess transport, home support and access barriers."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Lecture base: Assessment & care of the newborn; Newborn assessment review handout. Supporting supplied PDFs: Infant feeding: breast & formula. The PDFs provide maturity, baseline care, discharge and supplement-risk context but no full preterm feeding, ROP, oxygen or developmental/discharge course. All six detailed care topics are labeled guideline supplements; no universal oxygen target, eye-screening cutoff, feed-volume or discharge-weight rule is imposed.",
    "answerSources": [
      {
        "title": "Assessment & care of the newborn (original supplied PDF)",
        "url": "#/ob-final/presentation/newborn-care"
      },
      {
        "title": "Newborn assessment review handout (original supplied PDF)",
        "url": "#/ob-final/presentation/newborn-handout"
      },
      {
        "title": "Infant feeding: breast & formula (original supplied PDF)",
        "url": "#/ob-final/presentation/infant-feeding"
      },
      {
        "title": "WHO: preterm nutrition, family and developmental-care supplement",
        "url": "https://www.who.int/publications/b/63796"
      },
      {
        "title": "WHO: monitored skin-to-skin care supplement",
        "url": "https://www.who.int/publications/m/item/kangaroo-mother-care--a-clinical-practice-guide"
      },
      {
        "title": "NICE: preterm respiratory support and monitoring supplement",
        "url": "https://www.nice.org.uk/guidance/ng124/chapter/recommendations"
      },
      {
        "title": "NEI: retinopathy and time-sensitive eye follow-up supplement",
        "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/retinopathy-prematurity"
      },
      {
        "title": "CPS: preterm feeding and discharge-readiness supplement",
        "url": "https://cps.ca/en/documents/position/discharge-planning-of-the-preterm-infant"
      }
    ]
  },
  {
    "id": "contraceptive-choice",
    "weekIds": [
      "august-4"
    ],
    "topicIds": [
      "contraception"
    ],
    "title": "Individualized contraceptive counseling",
    "text": "Compare reversible and permanent contraceptive options by effectiveness, correct use, benefits, risks, and return to fertility. Use a patient’s history, preferences, breastfeeding status, and STI-prevention needs to guide counseling.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Choose with the patient: reproductive goals, medical eligibility, preferences and ability to use the method matter together.",
          "IUDs and implants provide highly effective reversible contraception with little daily effort; user-dependent methods require consistent correct use.",
          "Condoms add STI protection; pills, devices, injections and permanent methods do not replace it."
        ]
      },
      {
        "type": "group",
        "title": "Start with reproductive goals and informed choice",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Ask",
                "text": "Discuss whether pregnancy is desired now, later or never; desired spacing; prior method experiences; bleeding preferences; comfort with hormones/procedures; privacy, cost and access. The patient chooses after understandable counseling, including the option to decline or stop."
              },
              {
                "label": "Assess",
                "text": "Review pregnancy possibility, menstrual/reproductive history, blood pressure when indicated, migraine aura, clot/cardiovascular disease, breast/liver disease, smoking, medicines, postpartum timing and breastfeeding."
              },
              {
                "label": "Nursing role",
                "text": "Use plain language, an interpreter when needed and teach-back. Avoid assuming age, parity, relationship or disability determines which method someone should receive."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Compare effectiveness and daily workload",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Least user-dependent",
                "text": "IUDs and the implant have fewer than 1 pregnancy per 100 users in the first year and remain reversible. Permanent methods are also highly effective but require a different discussion about future fertility."
              },
              {
                "label": "User-dependent",
                "text": "DMPA requires repeat injections; pills, patches and rings require scheduled use. Condoms, diaphragms and fertility-awareness methods need correct action with each exposure or fertile interval. Typical use includes real-life errors; perfect use does not."
              },
              {
                "label": "Source clarification",
                "text": "The lecture’s older failure-rate chart is a comparison aid, not a current product guarantee. Explain effectiveness together with feasibility and acceptable side effects."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Benefits, risks and return to fertility",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Benefits",
                "text": "Combined hormonal methods can improve cycle control, cramps and acne; hormonal IUDs often reduce bleeding. Copper IUDs avoid hormones but may increase bleeding/cramps. Match the benefit to the person’s priorities."
              },
              {
                "label": "Tradeoffs",
                "text": "Discuss expected bleeding changes, method-specific serious risks, insertion/procedure needs and removal access. Reversible does not mean every method has the same return-to-fertility timing."
              },
              {
                "label": "Fertility",
                "text": "Fertility generally returns promptly after stopping pills/patch/ring or removing an IUD/implant. DMPA may delay ovulation for months after the last injection. Sterilization should be chosen as permanent; reversal is uncertain."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Postpartum, breastfeeding and STI needs",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Eligibility clarification",
                "text": "Breastfeeding alone is not a complete contraception plan. Review postpartum timing and method-specific eligibility; estrogen-containing methods are restricted early after birth because of clot risk and other considerations."
              },
              {
                "label": "Choices",
                "text": "Progestin-only and nonhormonal options may be appropriate; check the actual history and initiation/backup rules. LAM works only while all three required criteria remain present."
              },
              {
                "label": "Dual protection",
                "text": "Offer an external or internal condom alongside another method when STI protection is needed. Ask about exposures and testing without judgment; a monogamy label alone does not establish infection status."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Make the plan usable and reassess",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Before leaving",
                "text": "Confirm how to start, what backup is needed, what to do after an error and when to seek care. Provide access to emergency contraception advice and the next refill, injection or device review."
              },
              {
                "label": "Follow-through",
                "text": "Ask the patient to explain the plan in their own words. Address cost, transport, privacy and whether a partner interferes with contraception; offer a private safety discussion when indicated."
              },
              {
                "label": "Evaluate",
                "text": "Review satisfaction, bleeding, new health conditions/medicines and changing pregnancy goals. Troubleshoot or help switch methods rather than treating unwanted effects as a reason to abandon all protection."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Lecture base: Contraception. Preserves the lecture’s patient-centered comparison; clarifies typical-use tiers, eligibility, breastfeeding and autonomy rather than repeating dated failure rates or restrictive sterilization claims.",
    "answerSources": [
      {
        "title": "Contraception (original supplied PDF)",
        "url": "#/ob-final/presentation/contraception"
      },
      {
        "title": "CDC: contraceptive eligibility and contraindication clarification",
        "url": "https://www.cdc.gov/contraception/hcp/usspr/classifications-mec-contraception.html"
      },
      {
        "title": "CDC: IUD eligibility, backup and follow-up clarification",
        "url": "https://www.cdc.gov/contraception/hcp/usspr/intrauterine-contraception.html"
      },
      {
        "title": "CDC: permanent-method counseling and clearance clarification",
        "url": "https://www.cdc.gov/contraception/hcp/usspr/permanent-contraception.html"
      },
      {
        "title": "CDC: all three LAM criteria clarification",
        "url": "https://www.cdc.gov/contraception/hcp/usmec/lactational-amenorrhea-method.html"
      }
    ]
  },
  {
    "id": "hormonal-contraception-safety",
    "weekIds": [
      "august-4"
    ],
    "topicIds": [
      "contraception"
    ],
    "title": "Hormonal methods and safety",
    "text": "Compare combined hormonal and progestin-only methods. Identify important contraindications, adverse effects, warning signs, medication considerations, and method-specific follow-up and teaching.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Combined hormonal contraception contains estrogen plus progestin; progestin-only pills, DMPA, the implant and hormonal IUDs contain no estrogen.",
          "Check medical eligibility before use: migraine with aura, clot risk, hypertension, smoking and postpartum timing are important combined-method concerns.",
          "Teach expected bleeding effects, urgent clot/stroke symptoms, medication review and the actual product’s start/missed-use instructions."
        ]
      },
      {
        "type": "group",
        "title": "Compare combined and progestin-only methods",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Combined",
                "text": "Pills, the contraceptive patch and combined vaginal rings usually suppress ovulation; progestin also thickens cervical mucus. Estrogen adds important cardiovascular/clot restrictions as well as cycle-control benefits."
              },
              {
                "label": "Progestin-only",
                "text": "POPs, the implant, DMPA and LNG-IUDs differ in dose, action, schedule and effects. Some POPs rely heavily on mucus changes and precise timing; ovulation suppression varies by formulation."
              },
              {
                "label": "Avoid shortcuts",
                "text": "“No estrogen” does not mean every progestin-only method has identical eligibility or no contraindications. Identify the formulation, route and medical history before counseling."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Screen for estrogen-related contraindications",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Key concerns",
                "text": "Review migraine with aura, severe hypertension, prior thrombosis/thrombophilia and major cardiovascular disease. Smoking at age 35 or older requires specific eligibility review; combined methods may be inappropriate or contraindicated."
              },
              {
                "label": "Before starting",
                "text": "Measure blood pressure for combined hormonal use and review relevant symptoms/history. Do not require a routine pelvic examination solely to start pills."
              },
              {
                "label": "Eligibility clarification",
                "text": "CDC categories distinguish no restriction, benefits generally outweigh risks, risks generally outweigh benefits, and unacceptable risk. Use the condition/method-specific category rather than assuming one risk rule covers all contraception."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Postpartum, breastfeeding and breast cancer",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Postpartum",
                "text": "Combined hormonal methods are contraindicated in the first 21 days after birth; breastfeeding and other clot risks can extend restrictions. Later eligibility still depends on the person and product."
              },
              {
                "label": "Breastfeeding",
                "text": "Discuss progestin-only or nonhormonal choices, timing and milk-supply goals. Follow the prescribed formulation; the reusable ANNOVERA label has its own lactation precautions."
              },
              {
                "label": "Cancer correction",
                "text": "Current breast cancer is a contraindication to hormonal contraception, including POPs and LNG-IUDs. The lecture’s blanket POP safety claim is incorrect; nonhormonal options and specialist advice are needed."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Expected effects versus warning signs",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Common effects",
                "text": "Nausea, breast tenderness, headaches or spotting can occur; progestin-only methods commonly cause irregular bleeding or amenorrhea. Discuss persistence, burden and pregnancy possibility rather than dismissing symptoms."
              },
              {
                "label": "Urgent symptoms",
                "text": "Chest pain/breathlessness, one-sided leg pain/swelling, sudden severe headache, weakness or vision change needs urgent assessment for thrombotic/neurologic disease. Severe abdominal pain or jaundice also needs prompt review."
              },
              {
                "label": "Nursing action",
                "text": "Assess severity and onset, obtain urgent help when indicated and communicate the actual method and risk history. An ACHES mnemonic is a reminder, not a diagnosis or complete triage protocol."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Medication interactions and follow-up",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Review",
                "text": "Ask about prescription, over-the-counter and herbal products. Enzyme-inducing medicines can reduce some hormonal methods’ effectiveness; examples include rifampin, certain antiseizure medicines, some HIV medicines and St John’s wort."
              },
              {
                "label": "Clarification",
                "text": "Most routine antibiotics do not automatically make contraception ineffective. Vomiting/diarrhea can affect oral absorption; apply the specific pill instructions. Check interactions with the prescriber/pharmacist rather than inventing one backup interval for every drug."
              },
              {
                "label": "Follow-up",
                "text": "Review blood pressure when relevant, new migraine/medical symptoms, bleeding, adherence and satisfaction. Patch/ring regimens and weight/BMI restrictions vary by product; do not apply the lecture’s single weight cutoff to every patch."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Lecture base: Contraception. Clarifies estrogen-specific risk, postpartum restrictions, breast-cancer eligibility, product differences and interaction teaching. No universal “safe in breast cancer,” patch-weight cutoff or seven-day backup rule is repeated.",
    "answerSources": [
      {
        "title": "Contraception (original supplied PDF)",
        "url": "#/ob-final/presentation/contraception"
      },
      {
        "title": "CDC: contraceptive eligibility and contraindication clarification",
        "url": "https://www.cdc.gov/contraception/hcp/usspr/classifications-mec-contraception.html"
      },
      {
        "title": "CDC: combined-method use and missed-dose clarification",
        "url": "https://www.cdc.gov/contraception/hcp/usspr/combined-hormonal-contraceptives.html"
      },
      {
        "title": "CDC: product-specific progestin-only pill clarification",
        "url": "https://www.cdc.gov/contraception/hcp/usspr/progestin-only-pills.html"
      },
      {
        "title": "DailyMed: ANNOVERA product-specific safety clarification",
        "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=eb18194f-2021-41fa-8bdf-31e0c0eb646b"
      }
    ]
  },
  {
    "id": "missed-contraception",
    "weekIds": [
      "august-4"
    ],
    "topicIds": [
      "contraception"
    ],
    "title": "Missed pills, patches, and rings",
    "text": "Apply method-specific guidance to a missed-pill, delayed-patch, or displaced-ring scenario. Explain the next action, backup contraception, possible need for emergency contraception, and how the timing and product affect advice.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "First identify the exact product, active versus placebo dose, elapsed time and cycle week; ask about recent unprotected sex.",
          "The immediate action and backup interval differ: combined pills and traditional POPs do not share one missed-dose rule.",
          "Consider emergency contraception after an at-risk gap; ulipristal changes the timing of hormonal restart. Use the current product instructions."
        ]
      },
      {
        "type": "group",
        "title": "Before applying any missed-use rule",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Clarification",
                "text": "The lecture’s table combines older instructions. Count time from when the active dose or replacement was due, not just the number of calendar dates crossed. Placebo pills do not contain contraceptive hormone."
              },
              {
                "label": "Ask",
                "text": "Identify brand/formulation, last correctly used dose, number missed, extended hormone-free interval, patch/ring removal time, vomiting/diarrhea and interacting medicines. Ask about unprotected sex in the preceding five days and pregnancy symptoms."
              },
              {
                "label": "Plan",
                "text": "Explain the action now, next scheduled use, backup end point and whether emergency contraception/testing is needed. When timing or product is uncertain, obtain same-day pharmacist/prescriber advice rather than guessing."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Current guidance: one late or missed combined active pill",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Boundary",
                "text": "For a combined pill, late means <24 hours; one missed active pill means 24 to <48 hours since it was due. Take it as soon as possible and continue the pack at the usual time, even if two pills are taken on one day."
              },
              {
                "label": "Backup",
                "text": "Additional protection is generally unnecessary for this single <48-hour error. Emergency contraception is not usually needed, but review other recent errors or an extended hormone-free interval."
              },
              {
                "label": "Distinguish",
                "text": "This rule is for combined pills. It must not be transferred to norethindrone/norgestrel POPs, whose missed-dose window is much shorter."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Current guidance: two or more missed combined active pills",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Action",
                "text": "At ≥48 hours since an active pill was due, take the most recent missed pill now, discard earlier missed pills and continue the pack. Use condoms or abstain until seven consecutive active pills have been taken."
              },
              {
                "label": "Pack timing",
                "text": "If misses occur in the last active-pill week, omit the hormone-free interval and start the next pack immediately. If a new pack cannot start immediately, maintain backup until seven active pills from it have been taken."
              },
              {
                "label": "Emergency contraception",
                "text": "If the gap occurs in the first week and unprotected sex occurred within five days, consider emergency contraception. Ulipristal needs a separate restart plan because immediate progestin use can reduce its effect."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Current guidance: norethindrone or norgestrel POP",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Boundary",
                "text": "For these traditional POPs, more than three hours late counts as missed. Take a pill as soon as possible and continue one pill daily at the usual time, even if that means two in one day."
              },
              {
                "label": "Backup",
                "text": "Use condoms or abstain until pills have been taken correctly and on time for two consecutive days. Ask about unprotected sex and consider emergency contraception with the clinician/pharmacist."
              },
              {
                "label": "Teaching",
                "text": "Use a daily reminder and a refill plan. The three-hour rule belongs to these formulations; it is not the missed-use rule for drospirenone POPs or all vaginal rings."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Current guidance: drospirenone POP",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "One pill",
                "text": "If one active drospirenone pill is late or missed but <48 hours have elapsed since it was due, take it promptly and continue; backup is generally unnecessary."
              },
              {
                "label": "Two or more",
                "text": "At ≥48 hours, take the most recent missed active pill, discard earlier missed pills and continue. Use condoms or abstain until seven consecutive active pills have been taken. Review pack position and emergency-contraception need."
              },
              {
                "label": "Product check",
                "text": "Follow the drospirenone pack instructions for the placebo interval and any additional missed-dose detail. Do not use the traditional POP two-day backup rule for a multiple-pill drospirenone gap."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Current guidance: delayed or detached combined patch",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Less than 48 hours",
                "text": "Apply a new patch as soon as possible and keep the scheduled change day; backup is generally unnecessary. Identify the actual patch and how long delivery was interrupted."
              },
              {
                "label": "At least 48 hours or unknown",
                "text": "Apply a new patch promptly and use condoms or abstain for seven consecutive days of patch use. If this occurs in week three, omit the patch-free week and start the next cycle immediately."
              },
              {
                "label": "Emergency contraception",
                "text": "Consider it for a first-week gap with unprotected sex in the preceding five days. Check current product/guideline instructions rather than using the PDF’s older one-day table as a universal rule."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Current guidance: etonogestrel/ethinyl estradiol ring",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Less than 48 hours",
                "text": "CDC guidance for an etonogestrel/EE ring advises prompt placement and keeping the scheduled removal day; backup is generally unnecessary. This guidance is specific to this ring formulation."
              },
              {
                "label": "At least 48 hours or unknown",
                "text": "Insert a ring promptly and use condoms or abstain for seven consecutive days. A third-week gap requires omitting the hormone-free interval and beginning the next ring cycle without the usual break."
              },
              {
                "label": "Risk review",
                "text": "Consider emergency contraception for a first-week gap with recent unprotected sex. Use a clinician/pharmacist to reconcile the exact product label and current guidance; do not transfer this rule to ANNOVERA."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Product clarification: ANNOVERA and final teach-back",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Different ring",
                "text": "ANNOVERA contains segesterone acetate/EE and is reused for prescribed cycles. More than two continuous or cumulative hours out during a 21-day use interval requires backup until seven consecutive days in place. Follow its own cleaning/reinsertion and schedule instructions."
              },
              {
                "label": "Hormone-free interval",
                "text": "A prolonged scheduled ring-free interval also needs product-specific correction and pregnancy/EC assessment. The lecture’s blanket three-hour ring rule does not safely describe all rings."
              },
              {
                "label": "Teach-back",
                "text": "Have the patient identify the product, next use and exact backup end point. After ulipristal, wait five days before hormonal restart, then use backup for seven days after restarting; arrange testing/follow-up as indicated."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Lecture base: Contraception. The original missed-method table is outdated. Labeled current guidance separates combined pills, two POP formulations, patches, etonogestrel/EE rings and ANNOVERA; no single three-hour or two-day rule is applied to all products.",
    "answerSources": [
      {
        "title": "Contraception (original supplied PDF)",
        "url": "#/ob-final/presentation/contraception"
      },
      {
        "title": "CDC: combined-method use and missed-dose clarification",
        "url": "https://www.cdc.gov/contraception/hcp/usspr/combined-hormonal-contraceptives.html"
      },
      {
        "title": "CDC: product-specific progestin-only pill clarification",
        "url": "https://www.cdc.gov/contraception/hcp/usspr/progestin-only-pills.html"
      },
      {
        "title": "DailyMed: ANNOVERA product-specific safety clarification",
        "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=eb18194f-2021-41fa-8bdf-31e0c0eb646b"
      },
      {
        "title": "CDC: emergency contraception and restart-timing clarification",
        "url": "https://www.cdc.gov/contraception/hcp/usspr/emergency-contraception.html"
      }
    ]
  },
  {
    "id": "iud-implant-care",
    "weekIds": [
      "august-4"
    ],
    "topicIds": [
      "contraception"
    ],
    "title": "IUDs, implants, and injections",
    "text": "Compare copper and hormonal IUDs, the implant, and injectable contraception. Explain eligibility, expected effects, concerning symptoms, follow-up, duration, and return to fertility after discontinuation.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Copper and LNG-IUDs and the implant are highly effective reversible methods; DMPA requires timely repeat injections.",
          "Compare hormones, bleeding effects, insertion needs and the actual product’s current labeled duration.",
          "Assess concerning pain, fever, pregnancy symptoms or device changes; DMPA can delay fertility return after discontinuation."
        ]
      },
      {
        "type": "group",
        "title": "Copper versus levonorgestrel IUDs",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Copper",
                "text": "Copper impairs sperm function and prevents fertilization without hormone exposure. Periods may become heavier or more crampy, especially initially. Paragard is labeled for up to 10 years, not a universal 12-year interval."
              },
              {
                "label": "Hormonal",
                "text": "LNG-IUDs thicken cervical mucus and alter the uterine environment; bleeding commonly becomes lighter, with possible amenorrhea after initial spotting. Ovulation can continue."
              },
              {
                "label": "Duration clarification",
                "text": "For contraception: Mirena and Liletta up to eight years, Kyleena five and Skyla three. A heavy-menstrual-bleeding indication can have a shorter duration. Document device, insertion date and replacement/removal plan rather than memorizing one interval for all IUDs."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "IUD eligibility and insertion safety",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Eligibility",
                "text": "Adolescence, never having given birth, or wanting pregnancy in one to two years is not by itself a contraindication. Removal can be requested before the full duration. Confirm pregnancy is reasonably excluded and review uterine and medical history."
              },
              {
                "label": "Infection",
                "text": "Do not insert with current purulent cervicitis or known current gonorrhea/chlamydia. Indicated screening can often be done at placement without delaying insertion when infection is not known and no signs are present. Past PID is not an automatic lifelong exclusion."
              },
              {
                "label": "Postpartum",
                "text": "Immediate postpartum placement may be appropriate but has higher expulsion risk; postpartum sepsis precludes insertion. Discuss consent, pain management and the individualized timing."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "IUD follow-up and warning symptoms",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Backup",
                "text": "The copper IUD needs no additional pregnancy backup after placement. An LNG-IUD generally needs seven days of backup unless placed within the first seven days of menstrual bleeding or another no-backup criterion applies. Condoms remain relevant for STI prevention."
              },
              {
                "label": "Return precautions",
                "text": "Severe/worsening pelvic pain, fever, heavy bleeding, possible expulsion, changed/missing strings or pregnancy symptoms needs assessment. Use backup and contact the clinician if position is uncertain; do not pull the strings or attempt removal."
              },
              {
                "label": "Pregnancy",
                "text": "A positive test with an IUD requires prompt pregnancy-location assessment because ectopic pregnancy must be excluded. Healthy users do not all require one mandatory routine follow-up visit; arrange accessible review and removal."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "The implant: duration, effects and care",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Method",
                "text": "The subdermal etonogestrel implant suppresses ovulation and thickens cervical mucus. The 2026 FDA label permits Nexplanon use for up to five years, updating the lecture’s three-year duration. Verify the actual product and insertion date."
              },
              {
                "label": "Expected effects",
                "text": "Irregular or unpredictable bleeding is common; amenorrhea can occur. Explain this before placement and assess persistent/bothersome bleeding, pregnancy possibility or other causes as indicated."
              },
              {
                "label": "Care",
                "text": "Insertion/removal requires a trained clinician. Check the site and ability to locate the implant as instructed; report infection, significant arm symptoms or an implant that cannot be felt. Backup depends on start timing; fertility returns promptly after removal."
              },
              {
                "label": "Start clarification",
                "text": "For a menstruating patient, insertion within the first five days of bleeding needs no backup; later insertion needs seven days. Pregnancy exclusion and postpartum, amenorrhea or switching rules still apply."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "DMPA: scheduled injections and late-dose decisions",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Schedule",
                "text": "Repeat DMPA every 13 weeks. CDC permits reinjection through 15 weeks after the prior dose without extra protection; beyond that, pregnancy assessment and a late-dose plan are needed."
              },
              {
                "label": "Late injection",
                "text": "When >15 weeks have elapsed, the clinician may reinject if reasonably certain the patient is not pregnant; use condoms or abstain for seven days afterward and consider emergency contraception when indicated."
              },
              {
                "label": "Effects",
                "text": "Irregular bleeding, later amenorrhea, weight change and bone-density considerations require counseling. Discuss individual risk and review; a universal automatic stop date is not a substitute for medical eligibility and shared decision-making."
              },
              {
                "label": "First injection clarification",
                "text": "For a menstruating patient, starting within the first seven days of bleeding needs no backup; later starts need seven days. Confirm pregnancy exclusion and any postpartum/switching exception; starting and late-reinjection rules differ."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Return to fertility and method-specific evaluation",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Compare",
                "text": "IUD and implant removal generally allows prompt return to fertility; DMPA may delay ovulation for months after the final injection. The delay does not mean permanent infertility."
              },
              {
                "label": "Nursing plan",
                "text": "Check satisfaction, bleeding, medical/medication changes and pregnancy goals. Confirm access to removal or the next injection before the patient leaves; offer a switch when desired."
              },
              {
                "label": "Do not generalize",
                "text": "There is no single seven-day backup, three-month follow-up or same fertility-return rule for all long-acting methods. Record the product, start timing and individualized instructions, then verify understanding."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Lecture base: Contraception. Updates product durations and eligibility, separates IUD/implant/injection backup and fertility return, and replaces mandatory follow-up or infection myths with current method-specific care. Final review clarification separates implant and first-injection start/backup rules for menstruating patients from postpartum, switching and late-reinjection exceptions.",
    "answerSources": [
      {
        "title": "Contraception (original supplied PDF)",
        "url": "#/ob-final/presentation/contraception"
      },
      {
        "title": "CDC: IUD eligibility, backup and follow-up clarification",
        "url": "https://www.cdc.gov/contraception/hcp/usspr/intrauterine-contraception.html"
      },
      {
        "title": "CDC: contraceptive eligibility and contraindication clarification",
        "url": "https://www.cdc.gov/contraception/hcp/usspr/classifications-mec-contraception.html"
      },
      {
        "title": "FDA: Nexplanon approved-label duration clarification (NDA 021529)",
        "url": "https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=021529"
      },
      {
        "title": "Paragard: labeled duration and mechanism clarification",
        "url": "https://www.paragard.com/"
      },
      {
        "title": "CDC: injection interval and late-dose clarification",
        "url": "https://www.cdc.gov/contraception/hcp/usspr/injectables.html"
      },
      {
        "title": "NIH MedlinePlus: LNG-IUD labeled durations clarification",
        "url": "https://medlineplus.gov/druginfo/meds/a613047.html"
      },
      {
        "title": "Liletta: contraceptive versus heavy-bleeding duration clarification",
        "url": "https://www.liletta.com/faqs"
      },
      {
        "title": "CDC: implant initiation and backup clarification",
        "url": "https://www.cdc.gov/contraception/hcp/usspr/implants.html"
      }
    ]
  },
  {
    "id": "barrier-fertility-lam",
    "weekIds": [
      "august-4"
    ],
    "topicIds": [
      "contraception"
    ],
    "title": "Barrier methods, fertility awareness, and LAM",
    "text": "Explain correct use and limitations of barrier methods, fertility-awareness methods, and lactational amenorrhea. Apply the criteria for LAM to a case and distinguish pregnancy prevention from STI protection.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Condoms can reduce STI transmission; diaphragms, fertility awareness, withdrawal and LAM do not provide that protection.",
          "Fertility-awareness methods require correct daily observations and avoiding unprotected sex during the method’s fertile interval.",
          "LAM requires all three: no menses, fully/nearly fully breastfeeding and less than six months postpartum; review feeding gaps too."
        ]
      },
      {
        "type": "group",
        "title": "External and internal condoms: use correctly",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Each exposure",
                "text": "Use a new condom from the start to the end of each sex act; check expiry/package integrity and follow the application instructions. Use either an external or internal condom, not both together."
              },
              {
                "label": "Material and lubricant",
                "text": "Use compatible lubricant; oil damages latex, so use water- or silicone-based options with latex condoms. Natural-membrane condoms should not be relied on for HIV/STI prevention."
              },
              {
                "label": "Afterward",
                "text": "Hold the external condom at the base during withdrawal and avoid spilling. Breakage/slippage calls for prompt pregnancy/EC and exposure assessment, not simply waiting for a missed period. Condoms reduce risk but do not cover every infectious skin surface."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Diaphragm, cervical cap, sponge and spermicide",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Method",
                "text": "These cover or obstruct the cervix and/or deliver spermicide. Correct placement, spermicide use and repeat-intercourse instructions are product-specific; some devices need fitting and reassessment after reproductive or body changes."
              },
              {
                "label": "Timing",
                "text": "For diaphragm/cap/sponge teaching, preserve the required at least six hours after the last intercourse and verify the particular product’s maximum wear time. The lecture’s single wear limit should not be applied across all devices."
              },
              {
                "label": "Limitations",
                "text": "These methods do not prevent STIs. Nonoxynol-9 can irritate mucosa and is not an HIV-prevention agent; discuss latex/spermicide sensitivity and other options when irritation occurs."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Fertility signs: temperature and cervical mucus",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Temperature",
                "text": "Basal temperature rises after ovulation because of progesterone. Measure consistently on waking and interpret a sustained pattern under the chosen method. One temperature or an absolute temperature range does not prove a “safe day.” Illness and disrupted sleep affect readings."
              },
              {
                "label": "Mucus",
                "text": "Clearer, slippery, stretchy mucus suggests fertility; secretions change across the cycle. Infection, medicines, semen and postpartum changes can complicate interpretation."
              },
              {
                "label": "Use",
                "text": "A trained method combines defined observation rules with abstinence or barrier use during fertile/uncertain days. An app’s predicted ovulation date alone is not reliable confirmation, especially with irregular cycles."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Calendar calculation: correct the lecture’s reversed rule",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Correction",
                "text": "For the traditional calendar approach, shortest cycle minus 18 estimates the first fertile day; longest cycle minus 11 estimates the last. The lecture reverses shortest and longest; do not memorize its formula."
              },
              {
                "label": "Counting",
                "text": "Record multiple cycles and count day one as the first day of menstrual bleeding. This is a calendar estimate, not a test showing when ovulation actually occurred; cycle variation can shift fertility."
              },
              {
                "label": "Limitations",
                "text": "Use the validated method’s complete instructions and counseling, often with other fertility signs. If avoiding pregnancy is essential or cycles are unpredictable, discuss a less user-dependent method. No fertility-awareness method protects against STIs."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "LAM: all criteria must remain true",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Three criteria",
                "text": "LAM requires amenorrhea, less than six months since birth, and full or nearly full breastfeeding. Feeding intervals should not exceed about four hours by day or six hours at night."
              },
              {
                "label": "Apply",
                "text": "Ask separately about return of menses, infant age, supplements and actual day/night feeding gaps. If even one criterion fails, do not count on LAM; arrange another method and assess recent unprotected sex."
              },
              {
                "label": "Transition",
                "text": "Plan the next method before the six-month boundary or earlier feeding change. Ovulation may occur before the first period, so waiting for a menstrual period can leave an unprotected interval."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Withdrawal, abstinence and choosing a practical method",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Withdrawal",
                "text": "The penis must be withdrawn before ejaculation and semen kept away from the vulva. Timing errors and possible sperm exposure make it user-dependent; withdrawal does not prevent STIs."
              },
              {
                "label": "Abstinence",
                "text": "Avoiding penile-vaginal exposure prevents pregnancy only while that choice is maintained; other sexual contact can still transmit infection. Discuss the behaviors and a backup plan without judging the person’s goals."
              },
              {
                "label": "Teach-back",
                "text": "Ask the patient to explain use, limitations and what they would do after a mistake. For breastfeeding or fertility awareness, have them name the criteria/signs that require switching to backup protection."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Lecture base: Contraception. Retains barrier and fertility-sign teaching, corrects the reversed calendar formula, and adds the complete LAM criteria. Avoids false safe-temperature ranges, universal device wear limits or assuming all barriers prevent STIs.",
    "answerSources": [
      {
        "title": "Contraception (original supplied PDF)",
        "url": "#/ob-final/presentation/contraception"
      },
      {
        "title": "CDC: all three LAM criteria clarification",
        "url": "https://www.cdc.gov/contraception/hcp/usmec/lactational-amenorrhea-method.html"
      },
      {
        "title": "Office on Women’s Health: fertile-window calculation clarification",
        "url": "https://womenshealth.gov/pregnancy/you-get-pregnant/trying-conceive"
      },
      {
        "title": "CDC: contraceptive eligibility and contraindication clarification",
        "url": "https://www.cdc.gov/contraception/hcp/usspr/classifications-mec-contraception.html"
      }
    ]
  },
  {
    "id": "emergency-permanent-contraception",
    "weekIds": [
      "august-4"
    ],
    "topicIds": [
      "contraception"
    ],
    "title": "Emergency and permanent contraception",
    "text": "Compare emergency contraceptive options and explain timing and follow-up. Describe teaching for tubal sterilization and vasectomy, including permanence, consent, backup requirements, and evaluation of a possible pregnancy after sterilization.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Offer emergency contraception as soon as possible after unprotected sex or method failure; oral options and the copper IUD have different advantages.",
          "Ulipristal and levonorgestrel require different hormonal-restart instructions; neither treats an established pregnancy or prevents STIs.",
          "Sterilization is chosen as permanent; vasectomy needs semen-analysis clearance before relying on it."
        ]
      },
      {
        "type": "group",
        "title": "Emergency contraception: choose by timing and suitability",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Options",
                "text": "A copper IUD placed within five days of unprotected intercourse can provide emergency and ongoing contraception when eligible. Oral options include ulipristal acetate and levonorgestrel; give the selected method promptly."
              },
              {
                "label": "Timing clarification",
                "text": "CDC advises emergency contraceptive pills as soon as possible within five days. Ulipristal is more effective than levonorgestrel on days three to five; levonorgestrel works best earlier and its product label emphasizes 72 hours."
              },
              {
                "label": "Assess",
                "text": "Ask about all exposure dates, pregnancy possibility, current contraception, medicines and method access. Oral efficacy may be affected by body weight and enzyme-inducing drugs; a clinician/pharmacist can help choose without delaying available care."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Mechanism and what emergency contraception does not do",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Mechanism",
                "text": "Oral emergency contraception primarily delays or prevents ovulation. Copper interferes with sperm/fertilization. Emergency contraception does not interrupt an established pregnancy and is different from medication abortion."
              },
              {
                "label": "Not a future shield",
                "text": "Oral EC does not protect later sex in the same cycle, cure an STI or replace evaluation after assault/exposure. Discuss ongoing contraception and testing/support as appropriate."
              },
              {
                "label": "Source correction",
                "text": "The lecture’s one-step/two-tablet packaging does not determine a three- versus five-day window. Do not copy its universal “four pills” combined-pill regimen; any alternative regimen requires the specific product and prescribed instructions."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Restart after levonorgestrel versus ulipristal",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Levonorgestrel",
                "text": "Regular hormonal contraception may start or resume immediately. Use condoms or abstain for seven days after starting/resuming, following the supplied plan."
              },
              {
                "label": "Ulipristal",
                "text": "Wait at least five days before starting/resuming hormonal contraception, because progestin can reduce ulipristal’s effect; then use condoms or abstain for seven days after hormonal restart. Use protection throughout the waiting period too."
              },
              {
                "label": "Individualize",
                "text": "Placement of a clinician-administered method on the same day as ulipristal requires a specific risk/benefit discussion, not an automatic instruction. A copper IUD used for EC provides ongoing pregnancy protection after placement."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Emergency-contraception follow-up",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Expected effects",
                "text": "Nausea, spotting or a changed next period can occur. If vomiting occurs soon after the dose, contact the pharmacist/clinician promptly about whether a replacement dose is needed for that product."
              },
              {
                "label": "Testing",
                "text": "Obtain a pregnancy test if no bleed occurs within three weeks after oral EC; test/evaluate sooner when symptoms or pregnancy concern warrants it. Persistent symptoms need follow-up despite an initially negative test."
              },
              {
                "label": "Urgency",
                "text": "Severe one-sided abdominal pain, fainting or significant bleeding requires urgent assessment for ectopic pregnancy or another cause. Give a clear plan for contraception, condoms and any indicated infection testing."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Tubal sterilization: permanence and informed consent",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Choice",
                "text": "Tubal occlusion or removal is intended to be permanent. Discuss alternatives, procedure/anesthesia risks and uncertain reversal without pressuring the patient based on parity, age, disability or family preference."
              },
              {
                "label": "Consent clarification",
                "text": "Verify applicable consent, funding and jurisdiction requirements with the team; neither 72 hours nor 30 days is a universal rule for every procedure. Consent remains voluntary and can be withdrawn."
              },
              {
                "label": "Afterward",
                "text": "Current laparoscopic/abdominal tubal procedures are effective immediately; the lecture’s routine three-month confirmation test relates to older hysteroscopic approaches, not all sterilization. Follow actual recovery instructions and seek care for fever, worsening pain or wound concerns."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Vasectomy: backup until confirmed clearance",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Mechanism",
                "text": "Vasectomy interrupts sperm transport; it does not stop testosterone production, erections or ejaculation. It is chosen as permanent, with reversal not guaranteed."
              },
              {
                "label": "Clearance",
                "text": "Use another contraceptive method until postvasectomy semen analysis confirms success. CDC advises testing about 8–16 weeks after the procedure; follow the treating clinician’s collection and clearance instructions."
              },
              {
                "label": "Teaching",
                "text": "A fixed number of ejaculations or the passage of three months alone does not prove sperm clearance. Explain recovery care and report infection, significant swelling or persistent severe pain. Vasectomy does not prevent STIs."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Possible pregnancy after sterilization",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Do not dismiss",
                "text": "Sterilization can rarely fail, including later failure. A missed period or pregnancy symptoms deserves testing even after a completed procedure or prior normal clearance."
              },
              {
                "label": "Ectopic concern",
                "text": "A positive pregnancy test after tubal sterilization requires prompt assessment of pregnancy location. One-sided pelvic pain, shoulder pain, fainting or heavy bleeding needs emergency evaluation."
              },
              {
                "label": "Evaluate learning",
                "text": "Ask the patient to explain permanence, the method’s backup rule, follow-up and urgent symptoms. The lecture’s unsupported ectopic/reversal/hysterectomy percentages are not used as universal counseling statistics."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Lecture base: Contraception. Corrects emergency-contraception windows, mechanism and restart timing; excludes an unsourced universal Yuzpe pill count. Permanent-method consent, reversal and backup are clarified without repeating dated legal rules or unsupported risk percentages.",
    "answerSources": [
      {
        "title": "Contraception (original supplied PDF)",
        "url": "#/ob-final/presentation/contraception"
      },
      {
        "title": "CDC: emergency contraception and restart-timing clarification",
        "url": "https://www.cdc.gov/contraception/hcp/usspr/emergency-contraception.html"
      },
      {
        "title": "CDC: permanent-method counseling and clearance clarification",
        "url": "https://www.cdc.gov/contraception/hcp/usspr/permanent-contraception.html"
      },
      {
        "title": "CDC: IUD eligibility, backup and follow-up clarification",
        "url": "https://www.cdc.gov/contraception/hcp/usspr/intrauterine-contraception.html"
      }
    ]
  },
  {
    "id": "fertility-reproductive-planning",
    "weekIds": [
      "august-4"
    ],
    "topicIds": [],
    "title": "Fertility and reproductive planning",
    "text": "Outline assessment and support for a person or couple having difficulty conceiving. Explain the role of reproductive history, genetic assessment or counseling, referral, and respectful discussion of reproductive goals.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Begin with the person’s reproductive goals and a respectful, nonblaming history; assess relevant partners in parallel.",
          "Guideline supplement: evaluate after 12 months if younger than 35, six months if 35 or older, or earlier for known risks; over 40 may warrant immediate evaluation.",
          "The PDFs provide goals and infection-related fertility risks; the detailed fertility assessment below is a labeled supplement, including genetic counseling and referral."
        ]
      },
      {
        "type": "group",
        "title": "Guideline supplement: goals, timing and access",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Original connection",
                "text": "The contraception lecture asks about future pregnancy; the STI lecture links PID/chlamydia/gonorrhea with tubal damage. No dedicated infertility evaluation or genetics lecture is present in these supplied PDFs."
              },
              {
                "label": "When to refer",
                "text": "With regular unprotected intercourse and no other concern, begin evaluation after 12 months when younger than 35 or six months at 35 or older. Over 40, known tubal disease, irregular/absent menses or another risk warrants earlier assessment."
              },
              {
                "label": "Access",
                "text": "Tailor evaluation to age, reproductive anatomy, donor needs and goals. Do not delay appropriate care because a person is single, has a same-sex partner or needs assisted reproduction."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Guideline supplement: reproductive and general history",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Reproductive history",
                "text": "Ask about cycle regularity, prior pregnancies/losses, pregnancy attempts, contraceptive cessation, pelvic infection and pelvic surgery. Clarify exposure/timing and sexual function without assuming responsibility lies with one partner."
              },
              {
                "label": "Other contributors",
                "text": "Review chronic illness, medicines/supplements, cancer treatment, endocrine symptoms, tobacco/substance exposure and occupational risks. Ask about the partner’s reproductive/medical history and relevant treatment or surgery."
              },
              {
                "label": "Nursing support",
                "text": "Arrange an appropriate clinician assessment, explain the reason for tests and gather prior records. Pregnancy possibility, acute pain or abnormal bleeding may require immediate assessment rather than a routine infertility appointment."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Guideline supplement: evaluate contributing factors in parallel",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Core assessment",
                "text": "Clinical evaluation considers ovulation, uterine/tubal factors and semen assessment when applicable. Assess relevant partners together rather than completing all testing for one before considering another contributor."
              },
              {
                "label": "Individualize",
                "text": "Cycle history helps assess ovulation; targeted laboratory tests, ultrasound or tubal-patency testing depend on findings. A history of PID increases concern for tubal damage and ectopic pregnancy."
              },
              {
                "label": "Test limits",
                "text": "Ovarian-reserve testing can help guide selected treatment decisions; it is not a stand-alone natural-fertility score or a guarantee of pregnancy. Do not turn this outline into an automatic invasive test panel for everyone."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Guideline supplement: genetic assessment and informed choices",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "History",
                "text": "Obtain family history of inherited disease, congenital conditions and relevant reproductive outcomes; review prior carrier or genetic results. Genetic testing needs an explanation of purpose, limits and consent."
              },
              {
                "label": "Counseling",
                "text": "Refer to genetic counseling when history, testing or a known familial condition indicates it. A carrier-screen result is different from a diagnosis in a fetus or a guarantee about a future child."
              },
              {
                "label": "Respect",
                "text": "Discuss available options in the context of the person’s values, without directing them toward one reproductive choice. Confirm who will communicate results and whether partner testing or specialist review is indicated."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Guideline supplement: support, referral and follow-through",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Emotional support",
                "text": "Difficulty conceiving can affect identity, relationships, sexual wellbeing and finances. Acknowledge distress without blame or promising a pregnancy, and offer counseling or peer support if desired."
              },
              {
                "label": "Referral",
                "text": "Coordinate obstetric/gynecologic or reproductive-endocrinology care and other specialists as indicated. Address cost, scheduling, language and access barriers; do not prescribe fertility drugs from a nursing study outline."
              },
              {
                "label": "Evaluate",
                "text": "Use teach-back for the next appointment, tests and result plan. Revisit goals and preferences, including whether to continue evaluation, pursue other family-building options or stop treatment."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Lecture base: Contraception; Sexually transmitted infections. No dedicated infertility/genetic-counseling PDF was supplied. Original reproductive-goal counseling and STI/PID tubal-risk context are retained; every detailed assessment/referral topic is explicitly labeled a guideline supplement, not attributed to a missing lecture.",
    "answerSources": [
      {
        "title": "Contraception (original supplied PDF)",
        "url": "#/ob-final/presentation/contraception"
      },
      {
        "title": "Sexually transmitted infections (original supplied PDF)",
        "url": "#/ob-final/presentation/stis"
      },
      {
        "title": "ASRM: fertility evaluation, referral and assessment supplement",
        "url": "https://www.asrm.org/practice-guidance/practice-committee-documents/fertility-evaluation-of-infertile-women-a-committee-opinion-2026"
      }
    ]
  },
  {
    "id": "sti-assessment-discharge",
    "weekIds": [
      "august-4"
    ],
    "topicIds": [
      "stis"
    ],
    "title": "STI assessment and vaginal discharge",
    "text": "Compare assessment cues, risk factors, and diagnostic testing for trichomoniasis, chlamydia, and gonorrhea. Distinguish these from other causes of vaginal symptoms covered in class, including candidiasis and bacterial vaginosis.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Use a private, respectful history and site-appropriate testing; many STIs have no symptoms.",
          "Trichomoniasis, chlamydia and gonorrhea require infection-specific treatment and partner care; Candida and BV are different causes of vaginal symptoms.",
          "Discharge clues guide assessment, but appearance or a negative wet mount alone cannot rule infection in or out."
        ]
      },
      {
        "type": "group",
        "title": "History, risk and a safe examination",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Ask privately",
                "text": "Discuss partners, practices, protection, past STIs and pregnancy goals/possibility. Ask about exposure sites, symptoms, recent antibiotics, vaginal products, prior treatment and coercion when relevant. Explain confidentiality and its actual local limits."
              },
              {
                "label": "Risk context",
                "text": "New exposure, inconsistent barrier use, untreated partners and access barriers matter; infection is not evidence of someone’s character or identity. The lecture’s older demographic claims do not replace an individual assessment."
              },
              {
                "label": "Assessment",
                "text": "Obtain consent for examination/specimens and explain each step. Pelvic pain, fever, pregnancy, significant bleeding or systemic illness needs prompt evaluation for PID, ectopic pregnancy or another urgent condition."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Testing: distinguish screening, microscopy and NAAT",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Sample correctly",
                "text": "NAAT is preferred for chlamydia/gonorrhea, using a vaginal swab or appropriate first-catch urine; sample rectal/pharyngeal exposure sites when indicated. Self-collected vaginal swabs may be appropriate. The lecture’s clean-catch urine culture instruction is not the usual CT test."
              },
              {
                "label": "Vaginal symptoms",
                "text": "Assess discharge, vaginal pH, saline/KOH microscopy and indicated molecular tests. BV and trichomoniasis often have pH >4.5; candidiasis usually has normal pH."
              },
              {
                "label": "Limits",
                "text": "Symptoms overlap. Negative wet microscopy does not exclude trichomoniasis or yeast; arrange a more sensitive or additional test when indicated. History or color alone cannot establish the organism."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Trichomoniasis: sexually transmitted protozoal infection",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Cues",
                "text": "Possible malodorous yellow-green/frothy discharge, itching, irritation, dysuria or punctate “strawberry” cervix; these are not always present. Any partner can be asymptomatic and still need assessment/treatment."
              },
              {
                "label": "Test",
                "text": "A vaginal NAAT is more sensitive than wet mount; motile trichomonads may be visible on a fresh wet preparation. Do not let an unrevealing wet mount end the investigation when suspicion persists."
              },
              {
                "label": "Care",
                "text": "Prescribed oral metronidazole is used; the usual regimen for women is seven days. Treat partners concurrently and avoid sex until treatment is complete and symptoms resolve. Retesting women at about three months checks reinfection, not routine immediate cure."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Chlamydia: often silent, potentially damaging",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Cues",
                "text": "Cervicitis, mucopurulent discharge, dysuria, bleeding after sex or between periods may occur, but asymptomatic infection is common. Untreated ascending infection can cause PID, tubal infertility or ectopic pregnancy."
              },
              {
                "label": "Test",
                "text": "Use site-appropriate NAAT. Ordinary urine culture is not a substitute, and a negative test at one site does not necessarily exclude infection at another exposed site."
              },
              {
                "label": "Treatment connection",
                "text": "Doxycycline is standard for many nonpregnant cases; pregnancy generally uses azithromycin. Follow prescribed therapy, partner treatment and retesting. Pregnancy test-of-cure is about four weeks after treatment, correcting the lecture’s two-to-three-week instruction."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Gonorrhea: site matters and resistance matters",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Cues",
                "text": "Cervicitis/discharge, dysuria, pelvic pain or rectal/pharyngeal infection may occur; many cases have no symptoms. Gonorrhea can ascend and cause PID, and pregnancy/newborn exposure needs follow-through."
              },
              {
                "label": "Test",
                "text": "Use NAAT at indicated sites. Suspected treatment failure or resistance requires culture and susceptibility assessment rather than simply repeating the same empirical medicine indefinitely."
              },
              {
                "label": "Care",
                "text": "Prescribed ceftriaxone is weight-based; add chlamydia treatment when it has not been excluded, using pregnancy-appropriate therapy. Newborn eye prophylaxis does not replace maternal treatment or treatment of an already infected newborn."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Candidiasis: compare with an STI",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Pattern",
                "text": "Marked itching, vulvar redness and thick curdy discharge suggest yeast; recent antibiotics, diabetes, pregnancy or immune compromise may contribute. Vaginal pH is generally normal, and microscopy/culture may confirm when indicated."
              },
              {
                "label": "Distinction",
                "text": "Vulvovaginal candidiasis is usually not sexually acquired; routine treatment of an asymptomatic partner is not the same as STI partner management. Persistent or recurrent symptoms need assessment for other causes and yeast species."
              },
              {
                "label": "Safety clarification",
                "text": "Treat with the prescribed antifungal formulation; the lecture’s miconazole “mcg” is not a safe dosing instruction. During pregnancy use a seven-day topical azole course; oral fluconazole is not the pregnancy recommendation."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Bacterial vaginosis: dysbiosis and diagnostic criteria",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Pattern",
                "text": "Thin homogeneous discharge and a fishy odor suggest altered vaginal flora, not an infection caused only by Gardnerella. BV differs from candidiasis and trichomoniasis, although symptoms can overlap."
              },
              {
                "label": "Amsel criteria",
                "text": "Clinical diagnosis uses at least three of four: thin homogeneous discharge, pH >4.5, positive amine/whiff test and clue cells. Appropriate laboratory tests may also be used."
              },
              {
                "label": "Care clarification",
                "text": "Treat symptomatic BV with the prescribed regimen. The lecture’s “partners are never treated” statement is too broad: ACOG’s 2025 update supports considering concurrent male-partner therapy for recurrent symptomatic BV, with shared decisions for other situations."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Integrate findings and explain the next step",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Do not anchor",
                "text": "More than one infection or a noninfectious cause can be present. Persistent external itching may also suggest irritation or the lecture’s ectoparasites; reassess rather than diagnosing solely from discharge."
              },
              {
                "label": "Nursing plan",
                "text": "Collect correct specimens, implement prescribed treatment, review pregnancy/allergies/interactions and arrange result communication. Provide symptom relief, prevention teaching and urgent return precautions as indicated."
              },
              {
                "label": "Evaluate",
                "text": "Ask the patient to identify the suspected/confirmed condition, medicine plan, partner needs and follow-up. Worsening pain/fever, persistent symptoms or possible pregnancy requires renewed clinical assessment."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Lecture base: Sexually transmitted infections. Uses the lecture’s comparison and risk assessment, while clarifying NAAT versus urine culture, overlapping symptoms, candidiasis units/pregnancy treatment and the 2025 recurrent-BV partner update. Neither identity nor discharge appearance alone establishes a diagnosis.",
    "answerSources": [
      {
        "title": "Sexually transmitted infections (original supplied PDF)",
        "url": "#/ob-final/presentation/stis"
      },
      {
        "title": "CDC: vaginal-discharge assessment and testing clarification",
        "url": "https://www.cdc.gov/std/treatment-guidelines/vaginal-discharge.htm"
      },
      {
        "title": "CDC: chlamydia testing, pregnancy treatment and follow-up clarification",
        "url": "https://www.cdc.gov/std/treatment-guidelines/chlamydia.htm"
      },
      {
        "title": "CDC: gonorrhea therapy and test-of-cure clarification",
        "url": "https://www.cdc.gov/std/treatment-guidelines/gonorrhea-adults.htm"
      },
      {
        "title": "CDC: trichomoniasis therapy, partners and retesting clarification",
        "url": "https://www.cdc.gov/std/treatment-guidelines/trichomoniasis.htm"
      },
      {
        "title": "CDC: candidiasis and pregnancy-treatment clarification",
        "url": "https://www.cdc.gov/std/treatment-guidelines/candidiasis.htm"
      },
      {
        "title": "ACOG: recurrent BV partner-treatment update clarification",
        "url": "https://www.acog.org/news/news-releases/2025/10/acog-recommends-concurrent-sexual-partner-treatment-recurrent-bacterial-vaginosis-first-time"
      }
    ]
  },
  {
    "id": "syphilis-hpv-hsv",
    "weekIds": [
      "august-4"
    ],
    "topicIds": [
      "stis"
    ],
    "title": "Syphilis, HPV, and genital herpes",
    "text": "Recognize the stages and findings of syphilis and compare HPV and genital herpes. Explain testing, prescribed treatment, prevention or vaccination, follow-up, and pregnancy or newborn implications.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Syphilis is a staged bacterial infection; HPV and HSV are distinct viral infections with different lesions, testing and prevention.",
          "Penicillin is essential for syphilis in pregnancy; HSV antivirals suppress disease but do not eradicate latent infection.",
          "HPV vaccination prevents new infection rather than treating existing disease; genital lesions and pregnancy exposures need appropriate follow-up."
        ]
      },
      {
        "type": "group",
        "title": "Syphilis stages and urgent manifestations",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Early disease",
                "text": "Primary syphilis classically causes a painless chancre that can be hidden. Secondary disease can cause a diffuse rash including palms/soles, mucosal lesions and systemic symptoms; lesions can resolve without the infection being cured."
              },
              {
                "label": "Latent and late",
                "text": "Latent infection has no symptoms but still needs treatment; late disease may involve cardiovascular or gummatous injury. Latency does not remove fetal risk in pregnancy."
              },
              {
                "label": "Urgent symptoms",
                "text": "Neurologic, visual or hearing symptoms can occur at any stage and require urgent evaluation for neurosyphilis/ocular/otosyphilis. Do not wait for “tertiary” disease to investigate them."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Syphilis testing, treatment and follow-up",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Testing",
                "text": "Interpret treponemal and quantitative nontreponemal tests together, with history, prior treatment and stage. RPR/VDRL titers help assess treatment response; a treponemal test may remain positive after successful treatment."
              },
              {
                "label": "Treatment correction",
                "text": "Penicillin regimen and route depend on stage and neurologic involvement. Early disease, late/unknown-duration disease and neurosyphilis do not all receive one interchangeable IM/IV dose. Administer the exact prescribed course."
              },
              {
                "label": "Follow-up",
                "text": "Arrange stage-appropriate repeat titers and partner/public-health follow-up. Fever/aches after treatment may be a Jarisch–Herxheimer reaction rather than penicillin allergy, but assess symptoms and pregnancy concerns instead of assuming the cause."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Syphilis in pregnancy and the newborn",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Fetal risk",
                "text": "Untreated infection can cause fetal loss, stillbirth or congenital syphilis. Timely maternal penicillin and documented follow-up protect the fetus; late or incomplete therapy still leaves the newborn needing evaluation."
              },
              {
                "label": "Allergy clarification",
                "text": "Penicillin is the proven therapy for preventing congenital syphilis. A pregnant patient with true allergy needs specialist-guided desensitization and penicillin, not substitution with doxycycline from an adult treatment list."
              },
              {
                "label": "Nursing coordination",
                "text": "Verify prenatal screening and repeat-testing requirements, stage, treatment dates and partner care. Communicate the maternal record at birth and ensure the infant’s evaluation/treatment plan; a normal-looking newborn does not exclude congenital infection."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Genital herpes: HSV-1 and HSV-2",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Pattern",
                "text": "Painful grouped vesicles/ulcers, burning or prodrome may occur; lesions can be absent or atypical. Both HSV-1 and HSV-2 can cause genital herpes, including through oral-genital contact."
              },
              {
                "label": "Transmission",
                "text": "Viral shedding can occur without visible lesions; recurrence risk and shedding vary. The lecture’s “HSV-1 is not sexually transmitted” statement is incorrect."
              },
              {
                "label": "Testing",
                "text": "Swab an active lesion for type-specific NAAT/PCR when available; culture is less sensitive as lesions heal. Selected type-specific antibody testing may help particular situations, but appearance or a photograph alone cannot confirm HSV."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "HSV treatment, counseling and follow-up",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Prescribed care",
                "text": "Acyclovir or valacyclovir can treat a first episode, shorten recurrences or provide suppression. Antivirals reduce symptoms/shedding but do not cure latent HSV. Review adherence, discomfort, voiding and hydration concerns."
              },
              {
                "label": "Prevention",
                "text": "Avoid sexual contact during lesions or prodrome. Condoms and suppressive therapy reduce transmission risk but cannot eliminate it because uncovered skin and asymptomatic shedding matter."
              },
              {
                "label": "Follow-up",
                "text": "Discuss diagnosis, recurrence plans and disclosure/support without stigma. Severe symptoms, urinary retention, widespread disease or a new pregnancy-associated episode requires prompt clinical review rather than waiting for the next routine visit."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "HSV around birth: history is not the whole decision",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Risk clarification",
                "text": "New acquisition near delivery carries much greater neonatal risk than recurrent established infection. The lecture’s 30–50% figure must not be applied to every person with a history of herpes."
              },
              {
                "label": "Birth planning",
                "text": "The team may prescribe suppressive antiviral therapy from 36 weeks. At labor assess symptoms and lesions; genital lesions or prodrome generally indicate cesarean birth, while history alone does not automatically require it."
              },
              {
                "label": "Newborn",
                "text": "Communicate exposure and maternal infection timing; arrange neonatal assessment/testing/treatment as indicated. After birth, prevent direct newborn contact with active lesions and use careful hand hygiene."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "HPV: warts, cancer risk and assessment",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Distinguish",
                "text": "HPV can cause genital warts or persistent high-risk infection associated with cancer; wart-associated types are usually different from the principal cancer-associated types. Warts do not by themselves mean cancer."
              },
              {
                "label": "Assessment",
                "text": "Warts are often assessed clinically; atypical lesions may need biopsy. Cervical screening/HPV testing follows age/history-based screening guidance, not routine HPV testing of every wart or partner."
              },
              {
                "label": "Treatment",
                "text": "Prescribed wart treatments remove lesions but do not prove the virus is eradicated. Choose pregnancy-appropriate treatment and continue indicated cervical screening; vaccination does not replace screening or treat an existing abnormal result."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "HPV vaccine: current prevention teaching",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Who",
                "text": "The current U.S. vaccine is 9-valent Gardasil 9. Routine vaccination is at 11–12 years and may begin at nine; catch-up is recommended through 26. Ages 27–45 use shared clinical decision-making rather than universal catch-up."
              },
              {
                "label": "Doses",
                "text": "Starting before age 15 generally requires two doses 6–12 months apart; starting at 15 or older or being immunocompromised generally requires three. If the first two doses were less than five months apart, a third is needed."
              },
              {
                "label": "Pregnancy",
                "text": "Defer HPV vaccination during pregnancy and resume afterward; an interrupted series does not need restarting. Explain that vaccination prevents new infections and does not eliminate all HPV-related risk."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Lecture base: Sexually transmitted infections. Preserves the lecture’s infection patterns while correcting stage-independent syphilis dosing, HSV-1 transmission, nonspecific lesion photos, neonatal-risk generalization and obsolete HPV vaccine details. No lesion image alone is used as a diagnosis.",
    "answerSources": [
      {
        "title": "Sexually transmitted infections (original supplied PDF)",
        "url": "#/ob-final/presentation/stis"
      },
      {
        "title": "CDC: syphilis stage, testing and treatment clarification",
        "url": "https://www.cdc.gov/std/treatment-guidelines/syphilis.htm"
      },
      {
        "title": "CDC: syphilis pregnancy-treatment clarification",
        "url": "https://www.cdc.gov/std/treatment-guidelines/syphilis-pregnancy.htm"
      },
      {
        "title": "CDC: genital HSV, suppression and pregnancy clarification",
        "url": "https://www.cdc.gov/std/treatment-guidelines/herpes.htm"
      },
      {
        "title": "CDC: current HPV vaccination clarification",
        "url": "https://www.cdc.gov/hpv/hcp/vaccination-considerations/"
      }
    ]
  },
  {
    "id": "pid-complications",
    "weekIds": [
      "august-4"
    ],
    "topicIds": [
      "stis"
    ],
    "title": "PID and reproductive complications",
    "text": "Recognize pelvic inflammatory disease and explain its relationship to ascending infection. Identify diagnostic cues, nursing priorities, prescribed treatment, follow-up, and teaching about reproductive complications.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "PID is ascending, often polymicrobial infection of the upper reproductive tract; chlamydia/gonorrhea are important but not the only causes.",
          "Pelvic pain with cervical-motion, uterine or adnexal tenderness warrants prompt assessment; exclude pregnancy-related emergencies and begin indicated treatment early.",
          "Reassess within 72 hours, complete therapy and manage partners to reduce recurrence, infertility, ectopic pregnancy and chronic pain."
        ]
      },
      {
        "type": "group",
        "title": "Ascending infection and reproductive damage",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Mechanism",
                "text": "Organisms can ascend from the cervix/vagina to cause endometritis, salpingitis or tubo-ovarian abscess. PID is often polymicrobial, so treatment is broader than a single-organism cervicitis regimen."
              },
              {
                "label": "Clinical importance",
                "text": "Some infections are mild or minimally symptomatic. Inflammation/scarring can damage tubes even when the initial illness does not look dramatic."
              },
              {
                "label": "Complications",
                "text": "The lecture links PID to tubal infertility, ectopic pregnancy and chronic pelvic pain. Repeated episodes increase concern; explain early treatment and reinfection prevention without promising that antibiotics reverse established scarring."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Recognize cues and investigate promptly",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Cues",
                "text": "Lower abdominal/pelvic pain with cervical-motion, uterine or adnexal tenderness supports clinical suspicion; fever, abnormal discharge, bleeding or dyspareunia may occur. Absence of fever does not exclude PID."
              },
              {
                "label": "Priorities",
                "text": "Assess pain, vital signs, hydration and pregnancy possibility. Obtain a pregnancy test and evaluate ectopic pregnancy, appendicitis, torsion or another urgent cause when indicated."
              },
              {
                "label": "Tests clarification",
                "text": "Obtain indicated GC/CT NAAT and other tests; ultrasound may help assess abscess or competing diagnoses. A negative cervical test does not exclude upper-tract infection. Laparoscopy is not required before all treatment."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Prescribed therapy and nursing priorities",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Early treatment",
                "text": "Start prescribed empiric therapy promptly when PID is suspected; waiting for every result can allow further injury. Review allergies, pregnancy, medicine interactions and ability to take/complete treatment."
              },
              {
                "label": "Outpatient care",
                "text": "Many mild-to-moderate nonpregnant cases use ceftriaxone plus a 14-day oral doxycycline/metronidazole course. This is a regimen concept, not an interchangeable drug-dose order."
              },
              {
                "label": "Nursing care",
                "text": "Monitor pain, fever, intake and response; provide prescribed analgesia/fluids and explain adherence. Coordinate result review, screening for other infections and a reliable short-interval reassessment plan."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Hospitalization and the 72-hour reassessment",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Escalate",
                "text": "Pregnancy, severe illness, tubo-ovarian abscess, inability to exclude a surgical emergency, inability to tolerate/follow oral therapy or failed outpatient treatment can require admission and parenteral care. Not every PID case requires IV treatment."
              },
              {
                "label": "Response",
                "text": "Clinical improvement should occur within 72 hours: less tenderness/pain and improving fever/condition. Arrange review and return sooner for worsening pain, fever, vomiting, fainting or systemic illness."
              },
              {
                "label": "No improvement",
                "text": "Urgently reassess diagnosis, adherence, abscess and need for hospitalization/additional investigation. Do not simply extend the same unsuccessful outpatient plan without review."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Partners, fertility and prevention teaching",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Prevent reinfection",
                "text": "Avoid sex until the treatment course is complete, symptoms resolve and partners are treated. Recent partners need evaluation/presumptive GC/CT treatment under the appropriate plan, even when asymptomatic."
              },
              {
                "label": "Follow-up",
                "text": "For chlamydial/gonococcal PID, repeat testing at about three months checks reinfection. This does not replace the early 72-hour clinical review or any indicated pregnancy-related test-of-cure."
              },
              {
                "label": "Future care",
                "text": "Discuss condoms, prompt testing for new exposure and reproductive goals. A later positive pregnancy test with pain needs urgent ectopic assessment; difficulty conceiving warrants timely referral and support."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Lecture base: Sexually transmitted infections. Expands the original PID cause/cue/complication outline with clearly labeled assessment and care clarifications; clinical diagnosis, outpatient versus inpatient treatment and 72-hour reassessment replace universal laparoscopy/IV claims.",
    "answerSources": [
      {
        "title": "Sexually transmitted infections (original supplied PDF)",
        "url": "#/ob-final/presentation/stis"
      },
      {
        "title": "CDC: PID assessment, treatment and reassessment clarification",
        "url": "https://www.cdc.gov/std/treatment-guidelines/pid.htm"
      },
      {
        "title": "CDC: chlamydia testing, pregnancy treatment and follow-up clarification",
        "url": "https://www.cdc.gov/std/treatment-guidelines/chlamydia.htm"
      },
      {
        "title": "CDC: gonorrhea therapy and test-of-cure clarification",
        "url": "https://www.cdc.gov/std/treatment-guidelines/gonorrhea-adults.htm"
      }
    ]
  },
  {
    "id": "hiv-hepatitis-perinatal-care",
    "weekIds": [
      "august-4"
    ],
    "topicIds": [
      "stis"
    ],
    "title": "HIV, hepatitis, and perinatal prevention",
    "text": "Explain screening and transmission prevention for HIV and hepatitis in reproductive care. Describe the role of treatment, viral-load monitoring when relevant, birth planning, infant prevention, and individualized feeding counseling.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Use screening, prompt treatment, prevention counseling and reliable follow-up; absence of symptoms does not exclude HIV or hepatitis.",
          "In HIV pregnancy, ART adherence and late-pregnancy viral load guide birth and infant plans; infant prophylaxis is risk-based.",
          "Distinguish hepatitis A, B and C; HBV-exposed infants need timely vaccine plus HBIG, and HCV-exposed infants need scheduled testing."
        ]
      },
      {
        "type": "group",
        "title": "Screen and prevent exposure without stigma",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Pregnancy screening",
                "text": "Offer/review prenatal HIV, HBsAg and hepatitis C screening under current recommendations and arrange repeat testing when indicated. A positive screening result needs the appropriate confirmatory pathway and linkage to care."
              },
              {
                "label": "Exposure prevention",
                "text": "Discuss condoms, safe injection practices, no shared needles and vaccination where available. Review recent exposure promptly; timing affects whether urgent HIV postexposure prophylaxis is indicated."
              },
              {
                "label": "Medication distinction",
                "text": "ART treats a person with HIV; PrEP prevents acquisition in a person without HIV who has ongoing risk. Neither replaces the indicated test plan, and contraceptive interactions require a product-specific review."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "HIV: ART, monitoring and what U=U means",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Treatment",
                "text": "Continue or initiate effective prescribed ART and support adherence, with specialist review of pregnancy safety, interactions and barriers. Track viral load and the ordered immune/clinical assessment rather than relying only on symptoms."
              },
              {
                "label": "Transmission",
                "text": "Sustained viral suppression prevents sexual transmission: U=U. That statement does not mean HIV is cured or automatically establish zero transmission risk through breastfeeding."
              },
              {
                "label": "Nursing care",
                "text": "Help coordinate results, refills, nausea/side-effect management, mental-health and practical support. Missed medicines or rising viral load need timely review; do not independently stop ART during pregnancy, labor or feeding."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "HIV birth planning and newborn prevention",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Viral load",
                "text": "Review viral load around 36 weeks or within four weeks of planned birth. HIV RNA >1000 copies/mL or unknown near birth generally supports scheduled cesarean at 38 weeks for transmission prevention under the specialist plan."
              },
              {
                "label": "Individualize",
                "text": "With adequate suppression, vaginal birth is generally appropriate unless obstetric factors indicate otherwise. Intrapartum medicines and procedural precautions depend on current viral load, adherence and the clinical situation."
              },
              {
                "label": "Infant plan",
                "text": "Begin prescribed neonatal antiretrovirals promptly after birth and arrange serial virologic testing. Drug choice and duration depend on exposure risk; maternal ART alone does not make every infant eligible for the same two-week regimen."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "HIV and feeding: informed, supported planning",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Route-specific counseling",
                "text": "Formula or pasteurized donor milk eliminates postnatal HIV transmission through breast milk. With sustained maternal ART suppression, breastfeeding transmission risk is less than 1% but not zero."
              },
              {
                "label": "Shared decision",
                "text": "Use specialist-supported, nonjudgmental counseling about benefits, risks, resources and preferences. When breastfeeding is chosen, maintain the prescribed maternal viral-load and infant prevention/testing plan with prompt attention to adherence or breast problems."
              },
              {
                "label": "Change in status",
                "text": "Detectable maternal virus during breastfeeding needs urgent team review and a feeding safety plan. Do not infer that one undetectable result or U=U for sexual transmission removes the need for continued monitoring."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Hepatitis A, B and C: separate routes and prevention",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Hepatitis A",
                "text": "Primarily fecal-oral, including some sexual contact involving oral-anal exposure; “not sexually transmitted” is too absolute. Hygiene and vaccination when indicated reduce risk."
              },
              {
                "label": "Hepatitis B",
                "text": "Can spread through blood, sexual contact and perinatal exposure. Vaccination prevents infection; chronic HBV needs assessment and sometimes antiviral treatment. A positive HBsAg result is relevant even without symptoms."
              },
              {
                "label": "Hepatitis C",
                "text": "Primarily bloodborne, with possible sexual/perinatal transmission; there is no vaccine. Current infection can transmit even in a person who feels well. Treatment can cure HCV, while pregnancy-specific treatment timing requires specialist review."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "HBV: maternal assessment and infant prevention",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Maternal care",
                "text": "Screen for HBsAg in each pregnancy; a positive result needs HBV DNA/clinical review, specialist follow-up and a documented birth notification plan. High viral load may indicate maternal antiviral prevention."
              },
              {
                "label": "At birth",
                "text": "An infant of an HBsAg-positive parent needs hepatitis B vaccine and HBIG within 12 hours, regardless of birth weight, then completion of the appropriate vaccine series. Unknown status needs urgent testing and the status/weight-specific infant pathway."
              },
              {
                "label": "After discharge",
                "text": "Arrange postvaccination HBsAg and anti-HBs testing at the recommended follow-up age and track completion. Do not let the birth doses become the last documented step; hand off maternal results to the infant team."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "HCV infant follow-up and hepatitis feeding counseling",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "HCV testing",
                "text": "Use antibody testing with reflex RNA to establish current infection when indicated. Perinatally exposed infants need HCV RNA NAT at 2–6 months under CDC guidance, with pediatric expertise for a detectable result."
              },
              {
                "label": "Feeding",
                "text": "HBV or HCV alone is not an automatic breastfeeding prohibition. Ensure HBV infant prophylaxis; if nipples/areola are cracked and bleeding, temporarily stop breastfeeding from the affected side and use the team’s expression/feeding plan until healed."
              },
              {
                "label": "Evaluate",
                "text": "Confirm who follows maternal results/treatment, infant prophylaxis, vaccine series and infant tests. Explain each infection separately; hepatitis feeding guidance must not be substituted for the different HIV feeding plan."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Lecture base: Sexually transmitted infections. Keeps the lecture’s screening, ART and perinatal-prevention framework; clarifies route-specific U=U, viral-load birth planning, risk-based infant prophylaxis, shared feeding counseling and distinct hepatitis types. Avoids a universal two-week infant regimen or statements that HCV carriers cannot transmit.",
    "answerSources": [
      {
        "title": "Sexually transmitted infections (original supplied PDF)",
        "url": "#/ob-final/presentation/stis"
      },
      {
        "title": "NIH: HIV assessment and monitoring during pregnancy clarification",
        "url": "https://clinicalinfo.hiv.gov/en/guidelines/perinatal/antepartum-care-initial-evaluation-monitoring-hiv-assessments-during-pregnancy"
      },
      {
        "title": "NIH: HIV viral load and birth-planning clarification",
        "url": "https://clinicalinfo.hiv.gov/en/guidelines/perinatal/intrapartum-care"
      },
      {
        "title": "NIH: HIV infant-feeding and prevention clarification",
        "url": "https://clinicalinfo.hiv.gov/en/guidelines/perinatal/preventing-transmission-infant-feeding?view=brief"
      },
      {
        "title": "CDC: perinatal HBV infant prevention clarification",
        "url": "https://www.cdc.gov/hepatitis-b/hcp/perinatal-provider-overview/vaccine-administration.html"
      },
      {
        "title": "CDC: hepatitis C screening and infant follow-up clarification",
        "url": "https://www.cdc.gov/hepatitis-c/hcp/diagnosis-testing/index.html"
      },
      {
        "title": "CDC: hepatitis B/C feeding clarification",
        "url": "https://www.cdc.gov/breastfeeding-special-circumstances/hcp/illnesses-conditions/hepatitis-b-c.html"
      },
      {
        "title": "CDC: hepatitis A prevention clarification",
        "url": "https://www.cdc.gov/hepatitis-a/prevention/"
      }
    ]
  },
  {
    "id": "sti-treatment-partner-teaching",
    "weekIds": [
      "august-4"
    ],
    "topicIds": [
      "stis"
    ],
    "title": "Treatment, partners, and follow-up",
    "text": "For an STI case, explain appropriate prescribed therapy, pregnancy-specific precautions, adherence, partner management, abstinence or barrier teaching, and indicated test-of-cure or repeat screening. Evaluate understanding and prevention of reinfection.",
    "answer": [
      {
        "type": "overview",
        "items": [
          "Match the confirmed/suspected infection, pregnancy status, allergies and exposure site to the prescribed regimen; complete treatment.",
          "Partner management and avoiding sex during treatment prevent reinfection; the plan is not identical for every vaginal condition or STI.",
          "Separate test-of-cure, repeat screening for reinfection and symptom reassessment; give an exact result and follow-up plan."
        ]
      },
      {
        "type": "group",
        "title": "Select and administer the right prescribed treatment",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Match the infection",
                "text": "Bacterial/protozoal infections need their appropriate antimicrobial; HSV needs antiviral care, HPV warts need lesion-specific treatment, and yeast needs antifungal therapy. One medicine does not cover every cause of discharge or genital lesions."
              },
              {
                "label": "Examples",
                "text": "The lecture’s framework includes doxycycline or pregnancy-appropriate azithromycin for chlamydia, ceftriaxone for gonorrhea, metronidazole for trichomoniasis/BV, penicillin for syphilis and acyclovir/valacyclovir for HSV. Verify stage, site, weight when relevant and current orders."
              },
              {
                "label": "Safety",
                "text": "Review allergies, pregnancy, lactation, kidney/liver issues and interactions; confirm formulation and units. Do not copy the slide’s miconazole microgram typo or assume all syphilis stages share one dose/route."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Pregnancy-specific precautions",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Chlamydia and gonorrhea",
                "text": "Use pregnancy-appropriate therapy, not a default doxycycline plan copied from a nonpregnant case. Arrange chlamydia test-of-cure about four weeks after treatment and repeat testing for reinfection."
              },
              {
                "label": "Syphilis and PID",
                "text": "Pregnancy syphilis requires penicillin, including desensitization when a true allergy is present. Suspected PID in pregnancy needs hospitalization/specialist assessment; do not simply give the routine outpatient doxycycline regimen."
              },
              {
                "label": "Yeast, HPV and HSV",
                "text": "Pregnancy candidiasis uses seven-day topical azole therapy rather than oral fluconazole. Defer HPV vaccine and verify wart-treatment safety. For HSV, coordinate prescribed antivirals and birth/newborn precautions according to infection timing and findings."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Adherence, symptom care and result communication",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Course completion",
                "text": "Explain medicine name, schedule, duration and what to do after vomiting or a missed dose using the actual prescription. Symptoms improving does not establish eradication or justify skipping remaining treatment."
              },
              {
                "label": "Practical barriers",
                "text": "Ask about cost, transport, privacy, side effects and ability to take oral medicines. Use interpreters and written instructions as needed; arrange an alternative plan with the team if the regimen cannot be completed."
              },
              {
                "label": "Follow-through",
                "text": "Name the person/service that will communicate pending results. Persistent/worsening symptoms, pelvic pain, fever or pregnancy concerns need assessment; do not label every recurrence “resistance” without reviewing reinfection and adherence."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Partner management: infection-specific and nonjudgmental",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "CT, GC and trich",
                "text": "For chlamydia/gonorrhea, partners from the preceding 60 days generally need evaluation and presumptive treatment; the most recent partner still matters if the last contact was earlier. Current trichomoniasis partners need concurrent treatment, even without symptoms."
              },
              {
                "label": "Different conditions",
                "text": "Syphilis partner follow-up depends on stage/exposure and public-health guidance. HSV requires counseling rather than automatic antibiotics. Routine asymptomatic-partner treatment is not the usual yeast plan; recurrent BV may warrant shared partner-treatment decisions under the newer ACOG guidance."
              },
              {
                "label": "Access and safety",
                "text": "Expedited partner therapy may be appropriate for selected infections where permitted. Check pregnancy/allergy/exposure concerns, provide appropriate instructions and consider disclosure safety; it is not a universal substitute for partner care."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Abstinence, barriers and preventing reinfection",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Timing",
                "text": "For uncomplicated CT/GC, avoid sex for seven days after single-dose treatment or until the seven-day course is completed, and until partners are treated and symptoms resolve. PID needs completion of its longer course; trich requires both partners’ completed treatment and symptom resolution."
              },
              {
                "label": "After treatment",
                "text": "Teach consistent correct condoms, testing after relevant new exposures and avoiding sex during HSV lesions/prodrome. Barriers reduce risk but cannot cover every infectious skin surface."
              },
              {
                "label": "Product interactions",
                "text": "Some vaginal creams weaken latex; check the product’s advice and interval. Do not claim all antibiotics cause contraceptive failure: review the specific medicine, hormonal method and any vomiting/diarrhea instead."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Test-of-cure versus retesting for reinfection",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Cure testing",
                "text": "Chlamydia in pregnancy: NAAT about four weeks after treatment. Pharyngeal gonorrhea: test-of-cure at 7–14 days. Routine cure testing is not required after every appropriately treated uncomplicated nonpregnant CT or urogenital/rectal GC case."
              },
              {
                "label": "Reinfection",
                "text": "Retest CT/GC patients and women treated for trichomoniasis at about three months. This is repeat detection of possible reinfection, not the lecture’s mislabeled trich “test-of-cure.” Syphilis instead needs stage-appropriate quantitative titer follow-up."
              },
              {
                "label": "Other review",
                "text": "Persistent symptoms, adherence concerns or suspected failure may change testing. Early NAAT can detect residual nucleic acid; follow the infection-specific interval rather than ordering an immediate routine repeat for reassurance."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Teach-back and evaluation",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Ask the patient",
                "text": "Have them explain what they are taking, when sex can resume, who needs partner care and when to return/test. Correct gaps with plain-language instructions rather than asking only “Do you understand?”"
              },
              {
                "label": "Urgent return",
                "text": "Review worsening pelvic/abdominal pain, fever/systemic illness, fainting, severe drug reaction, new neurologic/visual symptoms or pregnancy concerns. Give the actual contact route and emergency plan."
              },
              {
                "label": "Success",
                "text": "Evaluate course completion, symptom response, partner access and attendance for results/retesting. Support vaccination and ongoing prevention; a resolved discharge alone does not prove all follow-up or transmission risks are addressed."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Lecture base: Sexually transmitted infections. Consolidates the lecture’s treatment/partner teaching without copying erroneous units or creating a new dose table. Clearly distinguishes pregnancy precautions, organism-specific partner plans, clinical reassessment, test-of-cure and three-month reinfection testing.",
    "answerSources": [
      {
        "title": "Sexually transmitted infections (original supplied PDF)",
        "url": "#/ob-final/presentation/stis"
      },
      {
        "title": "CDC: chlamydia testing, pregnancy treatment and follow-up clarification",
        "url": "https://www.cdc.gov/std/treatment-guidelines/chlamydia.htm"
      },
      {
        "title": "CDC: gonorrhea therapy and test-of-cure clarification",
        "url": "https://www.cdc.gov/std/treatment-guidelines/gonorrhea-adults.htm"
      },
      {
        "title": "CDC: trichomoniasis therapy, partners and retesting clarification",
        "url": "https://www.cdc.gov/std/treatment-guidelines/trichomoniasis.htm"
      },
      {
        "title": "CDC: candidiasis and pregnancy-treatment clarification",
        "url": "https://www.cdc.gov/std/treatment-guidelines/candidiasis.htm"
      },
      {
        "title": "ACOG: recurrent BV partner-treatment update clarification",
        "url": "https://www.acog.org/news/news-releases/2025/10/acog-recommends-concurrent-sexual-partner-treatment-recurrent-bacterial-vaginosis-first-time"
      },
      {
        "title": "CDC: syphilis pregnancy-treatment clarification",
        "url": "https://www.cdc.gov/std/treatment-guidelines/syphilis-pregnancy.htm"
      },
      {
        "title": "CDC: genital HSV, suppression and pregnancy clarification",
        "url": "https://www.cdc.gov/std/treatment-guidelines/herpes.htm"
      },
      {
        "title": "CDC: PID assessment, treatment and reassessment clarification",
        "url": "https://www.cdc.gov/std/treatment-guidelines/pid.htm"
      }
    ]
  }
];
