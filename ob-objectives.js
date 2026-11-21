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
    "answerSourceNote": "Synthesis of the Week 3 risks discussed throughout Antepartum Risks, pages 2–55, and Diabetes in Pregnancy, pages 2–26. Organized around assessment, surveillance, referral, and the nursing plan rather than implying a separate high-risk lecture was supplied.",
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
                "text": "Risk does not disappear immediately after birth. Arrange early BP review and teach urgent return for headache, visual symptoms, upper abdominal pain, chest pain/dyspnea, or seizure. Explain long-term cardiovascular follow-up after a hypertensive pregnancy."
              }
            ]
          }
        ]
      }
    ],
    "answerReviewedOn": "2026-11-21",
    "answerSourceNote": "Based on Antepartum Risks, pages 30–38. Corrects mandatory-proteinuria/severe-protein assumptions, repeat-BP timing, postpartum definition, and routine bed-rest/high-protein treatment shortcuts.",
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
                "text": "These are invasive methods requiring appropriate selection and trained insertion; assess membrane/presentation status and follow procedure precautions. Internal monitoring can improve signal quality but does not eliminate the need to verify the signal, reassess the patient, or interpret the tracing."
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
    "answerSourceNote": "From Fetal & Maternal Monitoring, pages 2–18, and Processes of Labor & Birth, pages 30–35 and 47–48. Clarifies the external toco’s measurement limits and the lecture’s overly absolute “no maternal artifact” wording.",
    "answerSources": [
      {
        "title": "Assigned lecture — Fetal & maternal monitoring in labor",
        "url": "#/ob-final/presentation/fetal-monitoring"
      },
      {
        "title": "Assigned lecture — Processes of labor & birth",
        "url": "#/ob-final/presentation/labor-and-birth"
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
                "text": "Estimate the mean FHR in a 10-minute window, rounded to 5 bpm, excluding accelerations, decelerations, and marked variability. The usual range taught is 110–160 bpm."
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
                "text": "The usual term definition is a rise ≥15 bpm lasting ≥15 seconds but <2 minutes. Definition clarification: the lecture’s “less than 30 seconds” confuses the rapid onset with the full duration."
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
    "answerSourceNote": "From Fetal & Maternal Monitoring, pages 18–40 and 43–45, and Processes of Labor & Birth, pages 46–48. Short definition clarifications correct the acceleration duration/minimal-variability boundary and define tachysystole already requested by the objective.",
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
                "text": "Amniotomy is intentional rupture of the membranes as part of an ordered labor plan. Review presenting-part position/engagement, fetal status, and the indication before the procedure."
              },
              {
                "label": "Assessment afterward",
                "text": "Reassess FHR promptly and record the rupture time and fluid amount/color/odor. The lecture warns about cord prolapse when the presenting part is not engaged; a new concerning FHR change after rupture needs prompt assessment and escalation."
              },
              {
                "label": "Limit of the supplied material",
                "text": "These PDFs discuss membrane status, rupture/cord risk, and monitoring but do not provide a complete amniotomy protocol. Use the responsible clinician’s procedure plan; no additional procedural checklist or new induction method is invented here."
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
    "answerSourceNote": "From Processes of Labor & Birth, pages 7–13, 24–28, and 42–48, and Fetal & Maternal Monitoring, pages 46–50. Keeps to the named methods; flags the incomplete amniotomy protocol and clarifies unsafe blanket scar/drug/dose instructions without adding a new dosing regimen.",
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
          "Recognize deterioration, notify the team, give ordered treatment, and reassess both patients. The medication and timing statements below explain the lecture rather than supply standing orders."
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
    "answerSourceNote": "From Labor & Birth Complications pages 2–17, 22–24 and 31, with supportive-care principles from Pain Management pages 2–5 and 12. Brief definition, test and safety clarifications are labeled. The PDFs do not supply a complete gestation-specific PROM/PTL algorithm or a dystocia treatment protocol; no new dosing table or fixed labor-arrest rules are added.",
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
          "After birth, reassess bleeding, injury/incision, vital signs, pain/anesthesia recovery, bladder/bowel function, mobility needs, and emotional well-being. The supplied PDFs offer recovery assessments but no complete cesarean pathway."
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
                "text": "Forceps permit traction/rotation of the head; a vacuum cup uses suction to assist its birth. The team may use assistance to expedite a feasible vaginal birth; the lecture emphasizes a low presenting part and ongoing descent."
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
        "title": "Comfort and mobility: link care to reassessment",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Pain relief",
                "text": "Give prescribed analgesia and reassess relief, alertness, breathing, and ability to participate in care. Use the lecture’s positioning, relaxation, reassurance, and patient-selected support measures where appropriate. No postoperative drug regimen is supplied in the PDFs."
              },
              {
                "label": "Mobility application",
                "text": "The postpartum PDF links hypercoagulability, birth trauma, and immobility with thromboembolism. Follow the ordered assisted-mobility plan after assessing anesthesia recovery, strength/sensation, and hemodynamic stability; the slides do not specify a first-walk time."
              },
              {
                "label": "Report and evaluate",
                "text": "Report calf pain with swelling; the PDF advises against Homan’s sign. Recovery should show stable observations, manageable pain, improving function, and safe participation in self/newborn care."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Recovery teaching and the limits of the supplied material",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Teach the assessment priorities",
                "text": "Explain bleeding/lochia and incision observations, pain management as prescribed, bladder/bowel recovery, mobility assistance, and symptoms requiring prompt contact. Fever, worsening wound findings, heavy bleeding, breathlessness, and painful leg swelling need assessment."
              },
              {
                "label": "Support and evaluation",
                "text": "Discuss the birth experience, support needs, and emotional response; the postpartum lecture notes that an unplanned cesarean may bring grief or disappointment. Check understanding of the individual recovery plan and follow-up."
              },
              {
                "label": "Material limit",
                "text": "The original PDFs do not provide a complete cesarean preoperative checklist, postoperative schedule, feeding-advancement plan, or cesarean-specific home restrictions. These remain items for the course’s operative-birth material; no detailed protocol is invented here."
              }
            ]
          }
        ]
      }
    ],
    "answerSourceNote": "From Labor & Birth Complications pages 18–24, 26–33 and 42; Pain Management pages 2–5, 9–13 and 15–18; and Postpartum Care pages 4, 11–13, 21, 25–31, 34–40, 52–53 and 59. The latter supplied PDFs support consent/anesthesia and recovery assessments. Brief operative-birth/anesthesia safety clarifications are labeled. Cesarean-specific preparation, recovery schedules and home restrictions remain incompletely covered by the original material.",
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
                "text": "Give brief explanations, help the patient follow the delivering clinician’s instructions, and prepare to assist with the named maneuvers. Communicate requests and completion clearly so the team knows what has been attempted."
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
          "The supplied postpartum PDF defines uterine inversion as the uterus turning inside out. It needs urgent specialist correction and hemorrhage response; the limited safety clarification below is distinguished from the lecture’s brief definition."
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
                "text": "Call for help and, as the trained responder, use a sterile-gloved vaginal hand to elevate the presenting part off the cord. Assist with knee-chest/head-down positioning and prepare urgent birth, usually cesarean if vaginal birth is not imminent."
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
                "text": "Follow maternal perfusion/vital signs, bleeding, and FHR while supporting IV access, ordered blood-product response, and transfer/handoff. Improvement in one sign does not exclude ongoing rupture or internal bleeding."
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
        "title": "Uterine inversion: separate it from a boggy uterus",
        "blocks": [
          {
            "type": "facts",
            "items": [
              {
                "label": "Original PDF coverage",
                "text": "Postpartum Care pages 16 and 18 identify a potentially life-threatening turning inside out of the uterus. They do not provide an inversion-specific case or replacement protocol."
              },
              {
                "label": "Safety clarification: first response",
                "text": "Call obstetric/anesthesia and hemorrhage help immediately; support perfusion and prepare urgent uterine replacement by the qualified clinician. A missing usual abdominal fundus or vaginal mass with bleeding/pain/shock warrants urgent assessment."
              },
              {
                "label": "Safety clarification: avoid routine atony treatment",
                "text": "Do not apply routine fundal massage or cord traction to an inverted uterus. Uterotonics are held during replacement and administered as ordered after correction. Reassess uterine position/tone, bleeding, pain, and perfusion while resuscitation continues."
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "title": "Shared response, reassessment, and source limits",
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
                "label": "Material limit",
                "text": "These PDFs provide cue lists and cord-prolapse illustrations rather than full case histories or complete rupture/AFE/inversion protocols. Use the shared placental-emergency objective for the existing shock/DIC response; no fictional cases, resuscitation drug doses, or additional surgical techniques are added."
              }
            ]
          }
        ]
      }
    ],
    "answerSourceNote": "From Labor & Birth Complications pages 24, 26–31 and 42–43, plus the uterine-inversion definition/list in Postpartum Care pages 16–18. Recognition lists are not full clinical cases. Brief safety clarifications supply the essential emergency response, cord handling, oxygen distinction, AFE diagnosis/resuscitation and inversion-versus-atony distinction; the missing detailed protocols remain explicit.",
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
      }
    ],
    "answerReviewedOn": "2026-11-21"
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
