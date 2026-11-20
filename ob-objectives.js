/* Authored study prompts based on the supplied syllabus, Exam 3 blueprint, and teaching PDFs.
   These are not verbatim faculty objectives. Notes are intentionally empty and shared by both views.
   Add studyContent-compatible blocks to an objective's answer array when notes are supplied. */
const obStudyObjectives = [
  {
    id:'family-centered-care',weekIds:['week-1'],topicIds:[],title:'Family-centered obstetric nursing',
    text:'Explain the nurse’s role in safe, culturally responsive, family-centered care across pregnancy, birth, and recovery. Include communication, consent, advocacy, and available support systems.',answer:[]
  },
  {
    id:'pregnancy-adaptations',weekIds:['week-1'],topicIds:['antepartum-prenatal'],title:'Maternal adaptations to pregnancy',
    text:'Describe the major physiologic changes of pregnancy by body system. Connect those changes to common discomforts, expected assessment findings, and findings that need further evaluation.',answer:[]
  },
  {
    id:'pregnancy-psychosocial-care',weekIds:['week-1'],topicIds:[],title:'Psychological adaptation and support',
    text:'Describe psychological adaptation during pregnancy and assess family support, coping, cultural preferences, and safety. Explain how those findings influence individualized nursing care.',answer:[]
  },
  {
    id:'conception-fetal-development',weekIds:['week-1','week-2'],topicIds:[],title:'Conception and fetal development',
    text:'Outline the reproductive cycle, fertilization, implantation, and stages of fetal development. Explain the functions of the placenta, umbilical cord, amniotic fluid, and fetal circulation.',answer:[]
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
