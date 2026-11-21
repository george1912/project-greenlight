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
    id:'pregnancy-signs',weekIds:['week-2'],topicIds:['antepartum-prenatal'],title:'Recognizing pregnancy',
    text:'Distinguish presumptive, probable, and positive signs of pregnancy. Explain the role and limits of pregnancy testing and how findings are confirmed.',answer:[]
  },
  {
    id:'obstetric-history-gtpal',weekIds:['week-2'],topicIds:['antepartum-prenatal'],title:'Obstetric history and GTPAL',
    text:'Calculate and interpret gravida, parity, and GTPAL from a patient history. Include the current pregnancy, term and preterm births, pregnancy losses, multiple gestation, and living children.',answer:[]
  },
  {
    id:'estimated-due-date',weekIds:['week-2'],topicIds:['antepartum-prenatal'],title:'Naegele’s rule and due dates',
    text:'Calculate an estimated due date using Naegele’s rule, explain the assumptions behind the calculation, and identify when menstrual history or ultrasound dating changes the assessment.',answer:[]
  },
  {
    id:'prenatal-assessment',weekIds:['week-2'],topicIds:['antepartum-prenatal'],title:'Prenatal assessment and monitoring',
    text:'Describe the initial and follow-up prenatal assessment, routine screening, maternal measurements, and assessment of fetal well-being. Identify which findings require follow-up or urgent reporting.',answer:[]
  },
  {
    id:'pregnancy-discomforts',weekIds:['week-2'],topicIds:['antepartum-prenatal'],title:'Discomforts and warning signs',
    text:'Explain nursing measures and patient teaching for common pregnancy discomforts. Distinguish normal discomforts from warning signs that need prompt evaluation.',answer:[]
  },
  {
    id:'prenatal-nutrition-teaching',weekIds:['week-2'],topicIds:['antepartum-prenatal'],title:'Nutrition and health promotion',
    text:'Develop teaching about nutrition, weight gain, supplements, activity, medication and substance exposure, immunizations, and when to seek care during pregnancy. Adapt the plan to individual risks and needs.',answer:[]
  },
  {
    id:'high-risk-pregnancy-assessment',weekIds:['week-3'],topicIds:[],title:'Assessing a high-risk pregnancy',
    text:'Identify maternal and fetal factors that make a pregnancy high risk. Explain how assessment findings guide surveillance, referrals, patient education, and the nursing plan of care.',answer:[]
  },
  {
    id:'early-pregnancy-complications',weekIds:['week-3'],topicIds:[],title:'Early pregnancy complications',
    text:'Compare pregnancy loss, ectopic pregnancy, gestational trophoblastic disease, cervical insufficiency, and hyperemesis. For each, identify the assessment cues, diagnostic approach, management, safety priorities, and support needs emphasized in the lecture.',answer:[]
  },
  {
    id:'placental-bleeding',weekIds:['week-3'],topicIds:['labor-emergencies'],title:'Placenta previa and placental abruption',
    text:'Compare placenta previa and placental abruption using risk factors, bleeding, pain, uterine findings, and fetal assessment. Explain the diagnostic approach, precautions, and priorities for maternal and fetal safety.',answer:[]
  },
  {
    id:'diabetes-assessment',weekIds:['week-3'],topicIds:['pregnancy-complications'],title:'Diabetes: screening and assessment',
    text:'Distinguish pregestational diabetes from gestational diabetes. Interpret the screening and diagnostic tests used in the course, and connect glucose control with maternal, fetal, and newborn risks.',answer:[]
  },
  {
    id:'diabetes-nursing-management',weekIds:['week-3'],topicIds:['pregnancy-complications'],title:'Diabetes: nursing care and teaching',
    text:'Explain glucose monitoring, nutrition, activity, prescribed medication, and fetal surveillance in a pregnancy complicated by diabetes. Recognize hypo- and hyperglycemia, prioritize interventions, and describe intrapartum and postpartum follow-up.',answer:[]
  },
  {
    id:'hypertensive-disorders',weekIds:['week-3'],topicIds:['pregnancy-complications'],title:'Hypertension and preeclampsia',
    text:'Compare chronic hypertension, gestational hypertension, and preeclampsia. Identify concerning symptoms, severe features, laboratory findings, maternal and fetal complications, and nursing priorities.',answer:[]
  },
  {
    id:'eclampsia-magnesium-hellp',weekIds:['week-3'],topicIds:['pregnancy-complications'],title:'Eclampsia, HELLP, and medication safety',
    text:'Recognize eclampsia and HELLP syndrome and explain immediate nursing priorities. Describe seizure precautions, prescribed antihypertensive and magnesium therapy, toxicity assessment, emergency response, and evaluation of treatment.',answer:[]
  },
  {
    id:'pregnancy-prom-preterm',weekIds:['week-3'],topicIds:[],title:'Membrane rupture and preterm risk',
    text:'Distinguish PROM, PPROM, and preterm labor. Identify assessment findings and infection risks, explain diagnostic precautions and collaborative management, and describe patient teaching about when to seek care.',answer:[]
  },
  {
    id:'rh-abo-infections',weekIds:['week-3'],topicIds:[],title:'Alloimmunization and infection prevention',
    text:'Explain Rh and ABO incompatibility, screening, and indicated prevention. Review the pregnancy and newborn implications of the infections discussed in class, including GBS and TORCH infections, and the nurse’s teaching and prevention responsibilities.',answer:[]
  },
  {
    id:'fluid-multiples-pregnancy',weekIds:['week-3'],topicIds:[],title:'Amniotic fluid disorders and multiple gestation',
    text:'Compare oligohydramnios and polyhydramnios and identify the additional risks associated with multiple gestation. Explain the surveillance, nursing assessment, patient teaching, and care planning emphasized in the lecture.',answer:[]
  },
  {
    id:'normal-labor-process',weekIds:['week-5'],topicIds:[],title:'Preparing for labor and birth',
    text:'Distinguish true from false labor and explain the stages of labor, cervical changes, fetal position and descent, and factors affecting labor progress. Relate these findings to preparation and supportive nursing care.',answer:[]
  },
  {
    id:'labor-nursing-assessment',weekIds:['week-5'],topicIds:[],title:'Maternal assessment during labor',
    text:'Describe admission and ongoing maternal assessment during labor, including contractions, membrane status, pain, coping, and birth preferences. Explain documentation, communication, and recognition of changes requiring escalation.',answer:[]
  },
  {
    id:'monitoring-methods',weekIds:['week-5'],topicIds:['fetal-monitoring'],title:'Fetal monitoring methods',
    text:'Compare intermittent assessment and external and internal electronic monitoring. Explain what each method measures, its limitations, the requirements for internal monitoring, and the nurse’s safety responsibilities.',answer:[]
  },
  {
    id:'fhr-strip-assessment',weekIds:['week-5'],topicIds:['fetal-monitoring'],title:'Read a fetal heart rate strip',
    text:'Use a consistent sequence to assess a strip: baseline, variability, accelerations, decelerations, and uterine activity. Interpret contraction frequency, duration, and resting intervals and recognize tachysystole.',answer:[]
  },
  {
    id:'fhr-patterns',weekIds:['week-5'],topicIds:['fetal-monitoring'],title:'Decelerations and tracing categories',
    text:'Distinguish early, variable, late, and prolonged decelerations by their shape and relationship to contractions. Interpret Category I, II, and III patterns and connect the findings with likely causes.',answer:[]
  },
  {
    id:'fhr-priorities',weekIds:['week-5'],topicIds:['fetal-monitoring'],title:'Choose the first nursing action',
    text:'For a practice strip, identify the priority concern, select and explain the first nursing action, describe further interventions and escalation, and state how you would evaluate the response. Practice applying this sequence to two different strips.',answer:[]
  },
  {
    id:'labor-comfort-medication',weekIds:['week-5'],topicIds:[],title:'Comfort, analgesia, and anesthesia',
    text:'Compare nonpharmacological comfort measures, systemic analgesia, regional anesthesia, and general anesthesia. Explain maternal and fetal assessments, contraindications, adverse effects, and the nursing response to complications.',answer:[]
  },
  {
    id:'induction-augmentation',weekIds:['week-5'],topicIds:[],title:'Induction and augmentation safety',
    text:'Explain preparation and nursing monitoring for cervical ripening, induction, augmentation, and amniotomy. Identify contraindications, medication safety concerns, and changes in uterine or fetal status that require action.',answer:[]
  },
  {
    id:'complicated-labor',weekIds:['week-6'],topicIds:[],title:'Complicated labor and membrane rupture',
    text:'Compare preterm and post-term labor, dysfunctional and precipitous labor, PROM/PPROM, and suspected intraamniotic infection. For each, describe recognition, collaborative management, and maternal and newborn nursing priorities.',answer:[]
  },
  {
    id:'assisted-cesarean-birth',weekIds:['week-6'],topicIds:[],title:'Assisted vaginal and cesarean birth',
    text:'Explain indications, preparation, consent, assessment, and complications associated with operative vaginal and cesarean birth. Describe postoperative monitoring, pain management, mobility, recovery teaching, and evaluation.',answer:[]
  },
  {
    id:'shoulder-dystocia',weekIds:['week-6'],topicIds:['labor-emergencies'],title:'Shoulder dystocia',
    text:'Recognize shoulder dystocia, identify contributing risks, and explain the nurse’s immediate actions and role during corrective maneuvers. Include actions to avoid, team communication, timing, documentation, and newborn assessment after birth.',answer:[]
  },
  {
    id:'placental-emergency-response',weekIds:['week-3','week-6'],topicIds:['labor-emergencies'],title:'Placental emergencies and hemorrhage response',
    text:'Apply the nursing process to a patient with bleeding related to placental complications. Prioritize assessment, hemorrhage response, fetal monitoring, preparation for birth, and recognition of shock or coagulopathy, including DIC.',answer:[]
  },
  {
    id:'other-birth-emergencies',weekIds:['week-6'],topicIds:['labor-emergencies'],title:'Other emergencies in the labor lectures',
    text:'Compare cord prolapse, uterine rupture, amniotic fluid embolism, and uterine inversion using the case cues in the lectures. Identify the first action, urgent team response, ongoing monitoring, and evaluation for each.',answer:[]
  },
  {
    id:'postpartum-physiology',weekIds:['week-7'],topicIds:['normal-postpartum'],title:'Expected postpartum recovery',
    text:'Explain uterine involution, lochia progression, afterpains, fluid shifts, and major postpartum body-system changes. Describe how expected findings change over time and distinguish them from findings needing follow-up.',answer:[]
  },
  {
    id:'postpartum-assessment',weekIds:['week-7'],topicIds:['normal-postpartum'],title:'Systematic postpartum assessment',
    text:'Perform a systematic postpartum assessment using the course’s BUBBLEHE framework. Include vital signs, pain, breasts, fundus, bladder, bowel, lochia, perineum or incision, legs, and emotional status; explain how findings guide care.',answer:[]
  },
  {
    id:'postpartum-labs-elimination',weekIds:['week-7'],topicIds:['normal-postpartum'],title:'Vital signs, labs, and elimination',
    text:'Interpret postpartum vital signs and laboratory changes in context. Assess urinary retention, diuresis, constipation, and the effect of bladder distention on recovery; choose appropriate nursing interventions and evaluate the response.',answer:[]
  },
  {
    id:'postpartum-comfort-mobility',weekIds:['week-7'],topicIds:['normal-postpartum'],title:'Comfort and physical recovery',
    text:'Plan nursing care for pain, perineal or incision healing, breast discomfort, mobility, rest, nutrition, and hydration after vaginal or cesarean birth. Explain safety precautions, self-care teaching, and expected outcomes.',answer:[]
  },
  {
    id:'postpartum-family-adaptation',weekIds:['week-7'],topicIds:['normal-postpartum'],title:'Attachment and family adaptation',
    text:'Describe maternal role adaptation, attachment, and family adjustment after birth. Assess coping, support, and barriers to bonding, and explain how the nurse supports individualized recovery and infant care.',answer:[]
  },
  {
    id:'postpartum-discharge',weekIds:['week-7'],topicIds:['normal-postpartum'],title:'Discharge teaching and follow-up',
    text:'Develop postpartum teaching about self-care, activity, nutrition, follow-up, warning signs, immunizations or Rh prophylaxis when indicated, and reproductive planning. Explain how you would confirm understanding and readiness for discharge.',answer:[]
  },
  {
    id:'postpartum-hemorrhage-assessment',weekIds:['week-7'],topicIds:['postpartum-complications'],title:'Recognize postpartum hemorrhage',
    text:'Identify risk factors, assessment cues, and causes of postpartum hemorrhage. Compare uterine atony, retained tissue, genital tract trauma or hematoma, and coagulation problems using uterine tone, bleeding, pain, and hemodynamic findings.',answer:[]
  },
  {
    id:'postpartum-hemorrhage-management',weekIds:['week-7'],topicIds:['postpartum-complications'],title:'Respond to hemorrhage and shock',
    text:'Explain the first nursing action and coordinated response to postpartum hemorrhage or shock. Include cause-directed interventions, quantified blood loss, fluids or blood products, prescribed uterotonics and their precautions, reassessment, and escalation.',answer:[]
  },
  {
    id:'postpartum-subinvolution',weekIds:['week-7'],topicIds:['postpartum-complications'],title:'Subinvolution and delayed bleeding',
    text:'Recognize a concerning pattern of delayed uterine involution or recurrent bleeding. Explain assessment for possible causes, collaborative management, nursing interventions, and discharge teaching about when to seek urgent care.',answer:[]
  },
  {
    id:'postpartum-infections',weekIds:['week-7'],topicIds:['postpartum-complications'],title:'Postpartum infections',
    text:'Compare endometritis, wound or urinary infection, and mastitis by risk factors, local and systemic findings, and nursing assessment. Explain prescribed treatment, supportive care, feeding considerations, and signs requiring urgent escalation.',answer:[]
  },
  {
    id:'postpartum-thromboembolism',weekIds:['week-7'],topicIds:['postpartum-complications'],title:'Thromboembolism and urgent warning signs',
    text:'Identify postpartum thromboembolism risks and distinguish concerning leg findings from symptoms of a possible pulmonary emergency. Explain prevention, immediate nursing priorities, safe care, and patient teaching.',answer:[]
  },
  {
    id:'postpartum-mental-health',weekIds:['week-7'],topicIds:['postpartum-complications'],title:'Blues, depression, anxiety, and psychosis',
    text:'Compare postpartum blues, depression, anxiety or intrusive thoughts, and psychosis. Assess symptoms, function, coping, and safety; identify when urgent intervention is needed and explain screening, referral, and family education.',answer:[]
  },
  {
    id:'newborn-transition-apgar',weekIds:['week-9','week-10'],topicIds:['normal-newborn'],title:'Transition and Apgar scoring',
    text:'Explain the newborn’s transition to extrauterine life, including respiratory and circulatory adaptation. Calculate an Apgar score from a case and explain its role alongside ongoing assessment and immediate care priorities.',answer:[]
  },
  {
    id:'newborn-head-to-toe',weekIds:['week-9','week-10'],topicIds:['normal-newborn'],title:'Head-to-toe newborn assessment',
    text:'Describe a systematic newborn assessment, including vital signs, measurements, neurologic and reflex findings, skin, head, heart and lungs, abdomen, hips, genitalia, and behavior. Identify expected findings and those requiring follow-up.',answer:[]
  },
  {
    id:'newborn-variants',weekIds:['week-9'],topicIds:['normal-newborn'],title:'Normal variations and concerning findings',
    text:'Distinguish common newborn skin findings and head-shape variations from findings suggesting injury or illness. Compare molding, caput, cephalohematoma, and subgaleal bleeding using assessment cues and nursing priorities.',answer:[]
  },
  {
    id:'newborn-gestational-assessment',weekIds:['week-9','week-10'],topicIds:['normal-newborn'],title:'Gestational age and growth classification',
    text:'Explain Ballard assessment and distinguish gestational age from size for gestational age. Classify a case as preterm, term, or post-term and as SGA, AGA, or LGA, then identify implications for assessment and care.',answer:[]
  },
  {
    id:'newborn-routine-care',weekIds:['week-9'],topicIds:['normal-newborn'],title:'Routine care, prophylaxis, and screening',
    text:'Plan routine newborn care for airway, warmth, identification and safety, skin and cord care, and circumcision when applicable. Explain the purpose and timing of prescribed prophylaxis, immunizations, and newborn screening and how results are followed up.',answer:[]
  },
  {
    id:'newborn-discharge-teaching',weekIds:['week-9','week-10'],topicIds:['normal-newborn'],title:'Newborn discharge readiness',
    text:'Teach caregivers about safe sleep, temperature, cord or circumcision care, feeding and elimination, follow-up, and signs of illness. Evaluate their understanding and ability to provide care and identify support or referral needs.',answer:[]
  },
  {
    id:'feeding-needs-milk-changes',weekIds:['week-9'],topicIds:['feeding'],title:'Newborn nutrition and milk changes',
    text:'Explain the newborn’s nutritional and fluid needs and the progression from colostrum to mature milk. Compare breast milk and formula and explain how teaching supports informed, individualized feeding choices.',answer:[]
  },
  {
    id:'breastfeeding-latch-support',weekIds:['week-9'],topicIds:['feeding'],title:'Positioning, latch, and feeding support',
    text:'Demonstrate how to assess feeding cues, positioning, latch, and milk transfer. Recognize ineffective feeding or persistent pain, choose supportive interventions, and identify when lactation referral is needed.',answer:[]
  },
  {
    id:'feeding-adequacy',weekIds:['week-9'],topicIds:['feeding'],title:'Evaluate feeding adequacy',
    text:'Use feeding behavior, weight trends, urine and stool patterns, and hydration findings to evaluate intake. Identify findings that need follow-up, explain supplementation when indicated, and reassess whether the plan is effective.',answer:[]
  },
  {
    id:'milk-expression-storage',weekIds:['week-9'],topicIds:['feeding'],title:'Milk expression, storage, and maternal needs',
    text:'Explain safe milk expression, storage, thawing, and handling. Include maternal nutrition, breast comfort, maintaining an appropriate milk supply, and teaching for a parent returning to work or separating from the infant.',answer:[]
  },
  {
    id:'formula-preparation',weekIds:['week-9'],topicIds:['feeding'],title:'Formula preparation and bottle safety',
    text:'Teach safe preparation, dilution, handling, storage, and disposal of formula. Explain safe bottle-feeding positioning, responsive feeding, equipment hygiene, and how to evaluate caregiver understanding.',answer:[]
  },
  {
    id:'feeding-special-circumstances',weekIds:['week-9'],topicIds:['feeding'],title:'Feeding precautions and supplementation',
    text:'Identify maternal and infant circumstances requiring feeding precautions, temporary interruption, or an alternative to breast milk. Distinguish direct breastfeeding from use of expressed milk and explain individualized counseling and follow-up.',answer:[]
  },
  {
    id:'prematurity-high-risk',weekIds:['week-10'],topicIds:['newborn-complications'],title:'Prematurity and high-risk assessment',
    text:'Explain how prematurity, growth restriction, and macrosomia affect newborn adaptation and care. Prioritize assessment, thermal support, infection prevention, nutrition, developmental care, and family support.',answer:[]
  },
  {
    id:'newborn-respiratory-distress',weekIds:['week-10'],topicIds:['newborn-complications'],title:'Respiratory distress and first actions',
    text:'Recognize respiratory distress and compare the assessment patterns of RDS, transient tachypnea, and meconium aspiration. Explain immediate priorities, collaborative respiratory support, monitoring, and evaluation of improvement or deterioration.',answer:[]
  },
  {
    id:'newborn-temperature-glucose',weekIds:['week-10'],topicIds:['newborn-complications'],title:'Temperature instability and hypoglycemia',
    text:'Connect cold stress, oxygen demand, and glucose needs. Identify newborns at risk for hypoglycemia, recognize symptomatic illness, explain prompt assessment and prescribed treatment, and evaluate temperature and glucose trends.',answer:[]
  },
  {
    id:'newborn-jaundice',weekIds:['week-10'],topicIds:['newborn-complications'],title:'Jaundice, hemolysis, and phototherapy',
    text:'Distinguish expected bilirubin changes from concerning jaundice using age, risk factors, and assessment findings. Explain bilirubin monitoring, the relevance of hemolysis, phototherapy care, feeding support, and follow-up.',answer:[]
  },
  {
    id:'newborn-sepsis-nec',weekIds:['week-10'],topicIds:['newborn-complications'],title:'Sepsis and gastrointestinal complications',
    text:'Recognize infection or sepsis and feeding or abdominal findings concerning for necrotizing enterocolitis. Explain risk assessment, urgent reporting, diagnostic evaluation, prescribed treatment, monitoring, and family communication.',answer:[]
  },
  {
    id:'preterm-ongoing-care',weekIds:['week-10'],topicIds:['newborn-complications'],title:'Ongoing care of a preterm newborn',
    text:'Describe nursing considerations for preterm feeding, oxygen therapy and complications such as retinopathy, developmental support, and discharge planning. Identify how the team evaluates readiness for feeding, growth, and safe transition home.',answer:[]
  },
  {
    id:'contraceptive-choice',weekIds:['august-4'],topicIds:['contraception'],title:'Individualized contraceptive counseling',
    text:'Compare reversible and permanent contraceptive options by effectiveness, correct use, benefits, risks, and return to fertility. Use a patient’s history, preferences, breastfeeding status, and STI-prevention needs to guide counseling.',answer:[]
  },
  {
    id:'hormonal-contraception-safety',weekIds:['august-4'],topicIds:['contraception'],title:'Hormonal methods and safety',
    text:'Compare combined hormonal and progestin-only methods. Identify important contraindications, adverse effects, warning signs, medication considerations, and method-specific follow-up and teaching.',answer:[]
  },
  {
    id:'missed-contraception',weekIds:['august-4'],topicIds:['contraception'],title:'Missed pills, patches, and rings',
    text:'Apply method-specific guidance to a missed-pill, delayed-patch, or displaced-ring scenario. Explain the next action, backup contraception, possible need for emergency contraception, and how the timing and product affect advice.',answer:[]
  },
  {
    id:'iud-implant-care',weekIds:['august-4'],topicIds:['contraception'],title:'IUDs, implants, and injections',
    text:'Compare copper and hormonal IUDs, the implant, and injectable contraception. Explain eligibility, expected effects, concerning symptoms, follow-up, duration, and return to fertility after discontinuation.',answer:[]
  },
  {
    id:'barrier-fertility-lam',weekIds:['august-4'],topicIds:['contraception'],title:'Barrier methods, fertility awareness, and LAM',
    text:'Explain correct use and limitations of barrier methods, fertility-awareness methods, and lactational amenorrhea. Apply the criteria for LAM to a case and distinguish pregnancy prevention from STI protection.',answer:[]
  },
  {
    id:'emergency-permanent-contraception',weekIds:['august-4'],topicIds:['contraception'],title:'Emergency and permanent contraception',
    text:'Compare emergency contraceptive options and explain timing and follow-up. Describe teaching for tubal sterilization and vasectomy, including permanence, consent, backup requirements, and evaluation of a possible pregnancy after sterilization.',answer:[]
  },
  {
    id:'fertility-reproductive-planning',weekIds:['august-4'],topicIds:[],title:'Fertility and reproductive planning',
    text:'Outline assessment and support for a person or couple having difficulty conceiving. Explain the role of reproductive history, genetic assessment or counseling, referral, and respectful discussion of reproductive goals.',answer:[]
  },
  {
    id:'sti-assessment-discharge',weekIds:['august-4'],topicIds:['stis'],title:'STI assessment and vaginal discharge',
    text:'Compare assessment cues, risk factors, and diagnostic testing for trichomoniasis, chlamydia, and gonorrhea. Distinguish these from other causes of vaginal symptoms covered in class, including candidiasis and bacterial vaginosis.',answer:[]
  },
  {
    id:'syphilis-hpv-hsv',weekIds:['august-4'],topicIds:['stis'],title:'Syphilis, HPV, and genital herpes',
    text:'Recognize the stages and findings of syphilis and compare HPV and genital herpes. Explain testing, prescribed treatment, prevention or vaccination, follow-up, and pregnancy or newborn implications.',answer:[]
  },
  {
    id:'pid-complications',weekIds:['august-4'],topicIds:['stis'],title:'PID and reproductive complications',
    text:'Recognize pelvic inflammatory disease and explain its relationship to ascending infection. Identify diagnostic cues, nursing priorities, prescribed treatment, follow-up, and teaching about reproductive complications.',answer:[]
  },
  {
    id:'hiv-hepatitis-perinatal-care',weekIds:['august-4'],topicIds:['stis'],title:'HIV, hepatitis, and perinatal prevention',
    text:'Explain screening and transmission prevention for HIV and hepatitis in reproductive care. Describe the role of treatment, viral-load monitoring when relevant, birth planning, infant prevention, and individualized feeding counseling.',answer:[]
  },
  {
    id:'sti-treatment-partner-teaching',weekIds:['august-4'],topicIds:['stis'],title:'Treatment, partners, and follow-up',
    text:'For an STI case, explain appropriate prescribed therapy, pregnancy-specific precautions, adherence, partner management, abstinence or barrier teaching, and indicated test-of-cure or repeat screening. Evaluate understanding and prevention of reinfection.',answer:[]
  }
];
