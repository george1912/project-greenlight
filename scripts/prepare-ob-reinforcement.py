"""Build shared OB reinforcement sections from the supplied CSV, without publishing the CSV.

Each row keeps its source number, receives one primary learning objective, and has
deterministically shuffled choices. Reviewed changes are recorded in the audit.
"""
import argparse
import csv
import hashlib
import json
import random
from collections import Counter, defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
GROUPS = {
    'postpartum-physiology': '1-4,7,8,10,12-15,76,77,91,385,386,394-402,503,509,510,513-517,522,524,525',
    'postpartum-assessment': '9,11,20,21,25,59-64,368,378,502,511,512,514',
    'postpartum-labs-elimination': '22,23,79-82,360-366,371,372,393,505-508',
    'postpartum-comfort-mobility': '16,74,75,78,89,90,92,93,270,271,373-377,379,397,398,518-521,527,528',
    'postpartum-family-adaptation': '87,88,189,403-411,529-535',
    'postpartum-discharge': '18,19,94-96,412-414,501,504,526,536',
    'postpartum-subinvolution': '5,6',
    'postpartum-hemorrhage-assessment': '26-28,36-43,358,359,367,369',
    'postpartum-hemorrhage-management': '29-35,44-47,370,389-392',
    'postpartum-infections': '24,65-73',
    'postpartum-thromboembolism': '17,83-86',
    'postpartum-mental-health': '51-58,537-540',
    'newborn-transition-apgar': '98-107,273',
    'newborn-head-to-toe': '97,108-122,132-148,160-168,171,172,188,291-296,460',
    'newborn-variants': '123-131,186,187',
    'newborn-gestational-assessment': '112,301-303',
    'newborn-routine-care': '169,170,175-180,319,320,425-427,432-435,437-442,461,462',
    'newborn-discharge-teaching': '173,174,190,415-422,431,433,436,463-465',
    'feeding-needs-milk-changes': '181-183,381-384,522,523',
    'breastfeeding-latch-support': '272,308,380,423,429',
    'feeding-adequacy': '149-151,309,430',
    'formula-preparation': '184,185,424',
    'prematurity-high-risk': '256,450,451,458,459',
    'newborn-respiratory-distress': '230,274-277',
    'newborn-temperature-glucose': '152-154,297-300,443,454',
    'newborn-jaundice': '155-159,304-307,428,452,453',
    'newborn-sepsis-nec': '278-280,444,448,449,455',
    'preterm-ongoing-care': '281-285,456,457',
    'normal-labor-process': '191-203,352-357',
    'fhr-strip-assessment': '204-211,351',
    'fhr-patterns': '212-215',
    'fhr-priorities': '216,217',
    'prenatal-assessment': '218-223,333,337-343',
    'conception-fetal-development': '224,344-350',
    'fluid-multiples-pregnancy': '225-227',
    'complicated-labor': '228,229,231-238',
    'eclampsia-magnesium-hellp': '239-241,245-249',
    'hypertensive-disorders': '242-244,250,251',
    'diabetes-assessment': '252,253,255',
    'diabetes-nursing-management': '254',
    'shoulder-dystocia': '257,258',
    'placental-bleeding': '259-265',
    'assisted-cesarean-birth': '266-269',
    'other-birth-emergencies': '48-50',
    'prenatal-nutrition-teaching': '334-336',
    'pregnancy-discomforts': '541',
    'rh-abo-infections': '445-447',
    'postpartum-physiology-endocrine': '387,388',
    'infant-development-review': '310-318,466-485',
    'infant-health-review': '486-500',
    'congenital-screening-review': '286-290,321-332',
}
# A few rows span adjacent concepts. The last explicit assignment above is the primary location.
# Thyroid findings reinforce the normal-versus-concerning body-system assessment.
ALIASES = {'postpartum-physiology-endocrine':'postpartum-physiology'}
EXTRAS = [
    {'id':'infant-development-review','title':'Later infant development','weekIds':['week-9']},
    {'id':'infant-health-review','title':'Later infant nutrition and child follow-up','weekIds':['week-9']},
    {'id':'congenital-screening-review','title':'Congenital conditions and screening background','weekIds':['week-9']},
]
CONTEXT = {
    'postpartum-physiology':'Placental hormone withdrawal, uterine contraction, and gradual tissue recovery explain postpartum changes; assess the trend as well as the finding.',
    'postpartum-assessment':'A systematic assessment links fundal tone, bleeding, vital signs, pain, and emotional status; concerning findings require reassessment and escalation.',
    'postpartum-labs-elimination':'Fluid shifts, blood loss, and bladder or bowel function affect recovery. Compare measurements with the patient’s baseline and symptoms.',
    'postpartum-comfort-mobility':'Comfort measures support mobility and recovery, but severe or worsening pain and new systemic symptoms need evaluation.',
    'postpartum-family-adaptation':'Supportive, individualized care promotes attachment and adjustment; adaptation varies between patients and families.',
    'postpartum-discharge':'Teaching should help the patient recognize warning signs, seek timely follow-up, and make informed self-care and reproductive choices.',
    'postpartum-subinvolution':'Retained tissue or infection can prevent normal involution and cause persistent or recurrent bleeding.',
    'postpartum-hemorrhage-assessment':'Identify the source of bleeding and assess perfusion; fundal tone, pain, bleeding, and vital signs help distinguish the causes.',
    'postpartum-hemorrhage-management':'Treat the cause while supporting circulation and reassessing the response; ongoing bleeding or instability requires an urgent coordinated response.',
    'postpartum-infections':'Local symptoms plus systemic findings guide assessment; physiologic postpartum leukocytosis alone does not diagnose infection.',
    'postpartum-thromboembolism':'Postpartum hypercoagulability and venous stasis increase risk. Suspected thrombosis requires clinical evaluation and appropriate imaging.',
    'postpartum-mental-health':'Duration, impairment, reality testing, and safety help distinguish adjustment from a condition needing treatment or emergency care.',
    'newborn-transition-apgar':'Apgar describes adaptation at specified times; immediate resuscitation decisions depend on breathing, tone, and heart rate without waiting for a score.',
    'newborn-head-to-toe':'Use age, behavioral state, gestational age, trends, and the complete examination to interpret newborn findings.',
    'newborn-variants':'Recognizing common benign variations helps identify findings that instead suggest bleeding, injury, or illness.',
    'newborn-gestational-assessment':'Size for gestational age describes growth relative to gestational age; it is distinct from the absolute birth weight.',
    'newborn-routine-care':'Routine care and screening prevent avoidable harm or detect problems before symptoms appear; follow up abnormal results.',
    'newborn-discharge-teaching':'Caregiver teaching should pair practical prevention with recognition of illness and a clear plan for follow-up.',
    'feeding-needs-milk-changes':'Milk production and ejection have different hormonal mechanisms; feeding support should follow the infant’s cues and the family’s needs.',
    'breastfeeding-latch-support':'Effective latch and milk transfer support intake and comfort; persistent pain or poor transfer warrants reassessment and help.',
    'feeding-adequacy':'Age-specific diaper counts, weight trends, feeding behavior, and hydration together help assess whether intake is adequate.',
    'formula-preparation':'Age-appropriate quantities, safe preparation, and responsive feeding protect nutrition and reduce feeding-related risks.',
    'prematurity-high-risk':'Immaturity and underlying illness affect stability, nutrition, development, and the amount of monitoring and support needed.',
    'newborn-respiratory-distress':'Assess work of breathing and oxygenation promptly; management addresses the underlying cause while supporting ventilation.',
    'newborn-temperature-glucose':'Cold stress increases metabolic demand. Interpret glucose using age, symptoms, risk factors, and the neonatal treatment protocol.',
    'newborn-jaundice':'Interpret bilirubin using age in hours, gestational age, risk factors, and the trend; treatment decisions use the appropriate threshold chart.',
    'newborn-sepsis-nec':'Poor feeding, lethargy, respiratory changes, temperature instability, or concerning abdominal findings require prompt assessment and escalation.',
    'preterm-ongoing-care':'Care balances respiratory support, nutrition, development, and complication surveillance, with treatment individualized to the infant.',
    'normal-labor-process':'Assess labor using cervical change, contractions, fetal descent and position, and maternal and fetal status; progress varies.',
    'fhr-strip-assessment':'Baseline, variability, accelerations, decelerations, and uterine activity are interpreted together rather than as isolated features.',
    'fhr-patterns':'The shape and timing of a deceleration relative to contractions help identify its likely mechanism and clinical significance.',
    'fhr-priorities':'Interventions address the likely cause while the nurse reassesses the tracing and communicates an unresolved concerning pattern.',
    'prenatal-assessment':'Screening results are interpreted with gestational age, maternal risk, and the full clinical picture; abnormal findings guide further assessment.',
    'conception-fetal-development':'Placental function and fetal circulatory pathways support gas exchange and nutrient delivery before extrauterine adaptation.',
    'fluid-multiples-pregnancy':'Ultrasound measurements and the clinical context guide assessment of fluid disorders and their maternal and fetal effects.',
    'complicated-labor':'Gestational age, membrane status, infection risk, and maternal and fetal stability determine appropriate management.',
    'eclampsia-magnesium-hellp':'Seizure prevention, airway safety, blood-pressure management, and maternal-fetal monitoring are priorities; magnesium also requires toxicity surveillance.',
    'hypertensive-disorders':'Timing, repeated blood-pressure measurements, proteinuria, and organ involvement distinguish hypertensive disorders and their severity.',
    'diabetes-assessment':'Pregnancy changes insulin requirements; screening and glucose control help identify and reduce maternal and neonatal complications.',
    'diabetes-nursing-management':'Nutrition, activity, monitoring, and prescribed medication are used together to maintain glucose targets and reduce complications.',
    'shoulder-dystocia':'This is an obstetric emergency; coordinated maneuvers aim to release the shoulder while avoiding harmful fundal pressure.',
    'placental-bleeding':'Placental location or separation affects the pattern of bleeding and maternal-fetal risk; stabilize the patient and avoid unsafe examinations.',
    'assisted-cesarean-birth':'The birth plan depends on the indication, uterine scar and obstetric history, and current maternal and fetal condition.',
    'other-birth-emergencies':'Sudden respiratory or circulatory collapse requires an immediate multidisciplinary resuscitation response.',
    'prenatal-nutrition-teaching':'Adequate nutrition and indicated supplements support maternal needs and fetal development; recommendations depend on individual risk.',
    'pregnancy-discomforts':'Teaching should reflect pregnancy risk and symptoms rather than imposing blanket restrictions on an uncomplicated pregnancy.',
    'rh-abo-infections':'Screening and indicated prevention reduce fetal or newborn risk; the maternal and neonatal plans are coordinated but are not interchangeable.',
    'infant-development-review':'Development is a progression with individual variation. Use age-appropriate surveillance and screening, rather than one item as a diagnostic deadline.',
    'infant-health-review':'Preventive advice depends on the infant’s age, developmental readiness, feeding pattern, and risk factors.',
    'congenital-screening-review':'Screening identifies infants needing further evaluation; a positive screen requires follow-up rather than establishing a diagnosis by itself.',
}
REFS = {
    'pph':('ACOG: postpartum hemorrhage','https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2017/10/postpartum-hemorrhage'),
    'postpartum':('ACOG: ongoing postpartum care','https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2018/05/optimizing-postpartum-care'),
    'involution':('Merck Manual: postpartum recovery','https://www.merckmanuals.com/professional/gynecology-and-obstetrics/postpartum-care-and-associated-disorders/postpartum-care'),
    'dvt':('Royal College of Emergency Medicine: DVT assessment','https://www.rcemlearning.org/reference/deep-vein-thrombosis/'),
    'mastitis':('Academy of Breastfeeding Medicine: mastitis spectrum','https://www.bfmed.org/assets/ABM%20Protocol%20%2336.pdf'),
    'labor':('ACOG: first and second stage labor','https://www.acog.org/clinical/clinical-guidance/clinical-practice-guideline/articles/2024/01/first-and-second-stage-labor-management'),
    'htn':('ACOG: preeclampsia and hypertension','https://www.acog.org/womens-health/faqs/preeclampsia-and-high-blood-pressure-during-pregnancy'),
    'preterm':('ACOG: preterm labor and birth','https://www.acog.org/womens-health/faqs/preterm-labor-and-birth'),
    'oxygen':('ACOG: oxygen during fetal resuscitation','https://www.acog.org/clinical/clinical-guidance/practice-advisory/articles/2022/01/oxygen-supplementation-in-the-setting-of-category-ii-or-iii-fetal-heart-tracings'),
    'bilirubin':('AAP: hyperbilirubinemia guidance','https://www.aap.org/en/patient-care/hyperbilirubinemia/'),
    'glucose':('Canadian Paediatric Society: newborn glucose assessment','https://cps.ca/en/documents/position/newborns-at-risk-for-low-blood-glucose'),
    'newborn':('AAP: newborn assessment and feeding','https://www.aap.org/en/patient-care/newborn-infant-and-early-childhood-nutrition/newborn-and-infant-health-assessment-and-promotion/newborn-visit/'),
    'followup':('AAP: first newborn visits','https://publications.aap.org/first1000days/pages/first_visits'),
    'vaccines':('AAP: immunization recommendations','https://www.aap.org/en/patient-care/immunizations/aap-immunization-faq/'),
    'birthcare':('AAP: routine delivery-room care','https://www.healthychildren.org/English/ages-stages/prenatal/delivery-beyond/Pages/Delivery-Room-Procedures-Following-a-Normal-Vaginal-Birth.aspx'),
    'prenatal':('ACOG: tailored prenatal care','https://www.acog.org/clinical/clinical-guidance/clinical-consensus/articles/2025/04/tailored-prenatal-care-delivery-for-pregnant-individuals'),
    'milestones':('CDC: milestones by 1 year','https://www.cdc.gov/act-early/milestones/1-year.html'),
    'sleep':('AAP: safe sleep and swaddling','https://www.healthychildren.org/English/ages-stages/baby/diapers-clothing/Pages/Swaddling-Is-it-Safe.aspx'),
    'peanut':('NIAID: peanut introduction guidance','https://www.niaid.nih.gov/sites/default/files/addendum-peanut-allergy-prevention-guidelines.pdf'),
    'lead':('Medicaid: lead screening','https://www.medicaid.gov/medicaid/benefits/early-and-periodic-screening-diagnostic-and-treatment/lead-screening'),
    'lam':('CDC: lactational amenorrhea criteria','https://www.cdc.gov/contraception/hcp/usspr/combined-hormonal-contraceptives.html'),
    'fluid':('ACOG: amniotic fluid assessment','https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2021/06/Indications-for-outpatient-antenatal-fetal-surveillance'),
    'apgar':('Milwaukee County EMS: Apgar scoring','https://county.milwaukee.gov/files/county/emergency-management/EMS-/Standards-of-Care/TOOLAPGAR'),
}
RATIONALES = {
    1:'Puerperium describes the traditional early recovery period after birth. Some physical, emotional, and health needs continue beyond those 6 weeks.',
    2:'Retrogressive changes return structures toward their prepregnancy state; progressive changes establish functions and roles such as lactation and parenting.',
    3:'Contraction and remodeling reduce uterine size after birth. Fundal tone and the pattern of bleeding help assess recovery.',
    4:'Suckling stimulates posterior-pituitary oxytocin release. Oxytocin contracts the uterus and ejects milk; prolactin primarily supports milk production.',
    7:'The change from red to pink/brown to white/yellow reflects healing and changing discharge composition. The stages overlap rather than ending on rigid dates.',
    9:'Amount and trend help identify abnormal bleeding, while odor and associated symptoms can suggest infection. A clot alone cannot identify its cause.',
    14:'Uterine contractions can be felt as afterpains. Oxytocin release during breastfeeding may make them more noticeable.',
    15:'Suckling releases oxytocin, linking milk ejection with uterine contraction and involution.',
    16:'Blood loss and circulatory changes can reduce tolerance of standing. Assess stability and assist initial mobility to reduce falls.',
    17:'Pregnancy-related hypercoagulability and venous stasis persist into postpartum recovery, so prevention and symptom assessment remain important.',
    18:'Anti-D immune globulin helps prevent an unsensitized Rh-negative patient from developing antibodies after exposure to Rh-positive fetal red cells.',
    19:'Maternal antibodies can cross the placenta and destroy susceptible fetal red cells in a future pregnancy.',
    26:'Significant blood loss or hypovolemic symptoms require action regardless of birth route; do not wait for a numeric threshold to treat instability.',
    27:'The four T’s organize the major mechanisms of hemorrhage and guide cause-directed assessment and treatment.',
    28:'A poorly contracted uterus cannot effectively compress the placental-site blood vessels, making atony a leading cause of hemorrhage.',
    29:'Massage and uterotonics address atony by improving contraction, while assessment for retained tissue or other causes continues.',
    31:'Methylergonovine can increase vascular tone and blood pressure; hypertension is an important contraindication.',
    32:'Carboprost can provoke bronchospasm, so asthma is an important medication safety concern.',
    33:'Misoprostol is a prostaglandin medication that promotes uterine contraction; route and dosing follow the clinical protocol.',
    34:'Oxytocin stimulates myometrial contraction, helping compress vessels at the placental site.',
    35:'Retained tissue can prevent effective uterine contraction or contribute to infection. Removal is performed by the qualified treating team.',
    36:'Placenta accreta spectrum involves abnormal placental adherence or invasion and can cause severe hemorrhage when separation is attempted.',
    37:'Increta specifies invasion into the uterine muscle, distinguishing it from adherence without that depth of invasion.',
    38:'Percreta extends through the uterine wall and may involve adjacent structures, increasing surgical and hemorrhage risks.',
    41:'Inversion can cause profound hemorrhage and shock. The patient needs immediate skilled obstetric management and resuscitation.',
    44:'DIC combines abnormal clotting activation with consumption of platelets and coagulation factors, creating serious bleeding risk.',
    46:'Low platelets and fibrinogen reflect consumption; widespread oozing and bleeding are important clinical clues.',
    47:'Replacing blood components supports coagulation, but controlling the underlying trigger is essential to stop continued consumption.',
    48:'The syndrome causes sudden cardiopulmonary instability and can trigger coagulopathy, requiring immediate team-based resuscitation.',
    53:'Blues are usually brief and mild. Persistent symptoms, impaired functioning, or safety concerns warrant assessment rather than reassurance alone.',
    54:'Psychosis involves impaired reality testing and can rapidly endanger the patient or infant; urgent psychiatric and safety intervention is needed.',
    55:'Hallucinations, delusions, and severe confusion suggest loss of reality testing, unlike ordinary fatigue or transient mood lability.',
    56:'Emergency assessment and a safe supervised setting are priorities; medication and ongoing treatment are directed by the specialist team.',
    57:'A screening result identifies a need for further assessment. It does not independently diagnose depression or replace evaluation of a self-harm response.',
    67:'Uterine tenderness, fever, and abnormal lochia together support concern for endometritis; leukocytosis by itself may be physiologic postpartum.',
    69:'Inflammation can precede or occur without bacterial infection, which is why treatment is matched to the mastitis spectrum.',
    71:'Reducing inflammation while maintaining physiologic milk removal supports recovery. Extra pumping to empty can perpetuate oversupply and inflammation.',
    73:'Diffuse bilateral fullness fits engorgement more closely than focal inflammatory findings with systemic illness, although assessment is individualized.',
    75:'Responsive feeding and limited expression for comfort address fullness without driving further oversupply; cold helps reduce edema and discomfort.',
    80:'Hydration, dietary fiber, movement, and indicated medication help restore bowel function; assess severe pain or other concerning symptoms.',
    83:'Homan’s sign has poor diagnostic accuracy. VTE assessment relies on the clinical picture and appropriate diagnostic testing.',
    84:'A symptom produced by this maneuver neither confirms nor excludes a clot. New unilateral symptoms need proper assessment.',
    94:'LAM has three required criteria. Breastfeeding alone, without verifying them, is not enough to judge contraceptive protection.',
    95:'Early contact detects emerging problems and supports recovery; comprehensive assessment by 12 weeks is part of ongoing postpartum care.',
    98:'Each Apgar component scores 0–2. Scores describe the newborn at 1 and 5 minutes but must not delay needed resuscitation.',
    103:'The heart-rate boundary is inclusive: exactly 100/min receives 2 points, while a detectable rate below 100 receives 1.',
    116:'Primitive reflexes help assess neurologic function; interpret symmetry, strength, and persistence with age and clinical context.',
    128:'Caput is superficial scalp edema, so it can cross sutures and usually improves over the first days.',
    129:'A cephalohematoma is beneath the periosteum and is limited by sutures; breakdown of the collected blood can increase bilirubin.',
    130:'The tissue compartment explains the key distinction: superficial edema crosses sutures, while a subperiosteal collection does not.',
    133:'A fontanel can look fuller during crying; persistent bulging when calm or associated illness is concerning and needs evaluation.',
    134:'A sunken fontanel may support concern for dehydration, but feeding, weight, urine output, and the full assessment are also important.',
    149:'Urine output rises as intake becomes established. Applying an older-infant diaper target on day 1 can incorrectly label a normal transition.',
    151:'A loss approaching or exceeding 10% should trigger assessment of feeding and hydration; it is not reassurance by itself.',
    152:'Glucose changes during adaptation after birth. The same value can have different implications depending on age, symptoms, and risk.',
    154:'Symptomatic hypoglycemia may need prompt IV treatment; feeding plans for an asymptomatic at-risk infant cannot be applied automatically to an ill infant.',
    156:'Bilirubin commonly rises as red cells turn over and clearance matures, but timing and risk determine whether a pattern is reassuring.',
    158:'Phototherapy changes bilirubin into forms that can be excreted more readily. Escalation is based on age-specific thresholds and clinical risk.',
    159:'Excess bilirubin can injure the brain. Recognizing concerning jaundice and providing appropriate follow-up helps prevent neurologic harm.',
    174:'Supine sleep on a firm, flat, separate surface without loose bedding reduces sleep-related risk; avoid smoke exposure and overheating.',
    176:'Newborn vitamin K stores are limited. IM prophylaxis prevents vitamin K deficiency bleeding, including potentially serious intracranial bleeding.',
    177:'Ocular prophylaxis targets gonococcal eye infection; it does not replace maternal STI screening and treatment.',
    182:'Breast milk provides nutrition and immune factors, while responsive feeding and contact also support attachment.',
    183:'Colostrum is produced in small amounts appropriate to early feeding and contains concentrated immune factors.',
    184:'Newborn intake volumes increase with age. Feeding cues, tolerance, and growth matter more than applying one bottle size from birth.',
    191:'The stage boundaries follow completion of cervical dilation, birth of the infant, and delivery of the placenta, followed by early recovery.',
    200:'Effacement describes cervical thinning as a percentage; dilation describes the opening in centimeters.',
    201:'Complete cervical dilation is approximately 10 cm. It is different from effacement or fetal station.',
    202:'The ischial spines are the reference level, so 0 station means the presenting part is at that level.',
    206:'Moderate variability reflects functioning fetal autonomic responses and is reassuring when interpreted with the rest of the tracing.',
    212:'Head compression can produce a gradual deceleration that mirrors a contraction; interpret it alongside the complete tracing.',
    213:'Late timing suggests impaired uteroplacental oxygen exchange and calls for assessment and interventions directed at reversible causes.',
    214:'Abrupt decelerations are associated with cord compression; duration, recurrence, and the rest of the tracing determine concern.',
    216:'Restore maternal-fetal perfusion and address reversible causes. Routine oxygen does not improve outcomes for a normoxic patient.',
    218:'A reactive NST demonstrates appropriate heart-rate responses to fetal activity; a nonreactive result needs contextual assessment.',
    222:'The BPP combines acute fetal observations with amniotic-fluid assessment. A score is interpreted with fluid status and the clinical picture.',
    229:'Routine suctioning is not recommended solely because meconium is present; newborn breathing, tone, and heart rate direct initial care.',
    240:'Magnesium can depress neuromuscular and respiratory function at toxic levels. Stop the infusion and initiate the emergency response per protocol when toxicity is suspected.',
    241:'Calcium gluconate is used to counter magnesium toxicity while airway, breathing, and circulation are supported.',
    247:'HELLP names the characteristic combination of hemolysis, elevated liver enzymes, and low platelets.',
    253:'The 1-hour glucose challenge is a screen. An abnormal result generally leads to diagnostic testing under the selected screening strategy.',
    255:'Excess maternal glucose can promote fetal growth and hyperinsulinemia, linking diabetes to macrosomia, shoulder dystocia, and neonatal hypoglycemia.',
    258:'McRoberts positioning and directed suprapubic pressure help release an impacted shoulder; fundal pressure can worsen the impaction.',
    261:'A digital cervical examination can provoke severe bleeding with placenta previa. Ultrasound assessment is a different procedure.',
    275:'Surfactant reduces alveolar surface tension. Deficiency promotes collapse and impaired gas exchange, particularly in premature infants.',
    280:'Bowel rest and antimicrobial treatment address intestinal injury and infection; perforation or deterioration may require surgery.',
    281:'Immature cerebral vessels are vulnerable to bleeding in a preterm infant, making neurologic and physiologic stability important.',
    283:'The ductus is normal in fetal circulation; its significance after birth depends on physiology and the infant’s condition.',
    298:'Generating heat increases oxygen and glucose consumption; sustained cold stress can contribute to hypoglycemia and acidosis.',
    304:'A bilirubin number cannot be interpreted safely without age in hours and the infant’s gestational and clinical risk profile.',
    307:'Treatment thresholds change with age and risk; a single fixed value such as 15 mg/dL is not appropriate for every newborn.',
    320:'A screen can identify a condition before symptoms become obvious, allowing prompt confirmatory testing and treatment.',
    335:'Folate supports early neural tube development, which occurs before many people recognize a pregnancy.',
    339:'Pregnancy increases ventilation mainly through greater tidal volume. New significant tachypnea requires assessment.',
    353:'Current assessment recognizes variable labor progress; the old 1 cm/hour rule should not independently diagnose arrest.',
    375:'The degree describes the deepest involved tissue, distinguishing skin, muscle, anal sphincter, and rectal mucosa injuries.',
    377:'REEDA organizes wound-healing observations. Increasing redness, drainage, pain, or separation should prompt reassessment.',
    382:'Oxytocin contracts cells around the milk-producing structures, ejecting milk that has already been produced.',
    383:'Prolactin supports milk synthesis; oxytocin primarily mediates milk ejection.',
    384:'Oxytocin links milk ejection and uterine contraction, which explains breastfeeding-associated afterpains.',
    390:'Severe hemorrhage or hypotension can impair pituitary perfusion and cause loss of pituitary hormone function.',
    416:'Early follow-up reassesses bilirubin, feeding, hydration, weight, and emerging illness after discharge.',
    435:'When needed, gentle mouth-first clearance reduces secretion obstruction; avoid deep or routine suction in a vigorous newborn.',
    458:'Skin-to-skin care supports warmth, attachment, and family participation while the infant is monitored appropriately.',
    463:'Safe swaddling must allow hip movement and stop when rolling begins. It does not replace safe sleep positioning and environment.',
    488:'Cow’s milk as the main drink before 12 months can displace iron-rich nutrition and is not an appropriate substitute for infant formula or breast milk.',
    490:'Honey can contain botulism spores; an infant’s immature gut can allow toxin-producing colonization.',
    491:'Hard, round, or cylindrical foods can obstruct an infant’s airway; preparation must match developmental ability.',
    493:'Vitamin D supports bone mineralization, and breast milk alone may not provide sufficient vitamin D without supplementation.',
    494:'As iron stores decline, infants need an adequate iron source from indicated supplements or developmentally appropriate iron-rich nutrition.',
    501:'Ovulation can occur before the first visible menstrual period, so waiting for bleeding before planning contraception can leave a gap in protection.',
    540:'Unwanted thoughts with preserved insight differ from delusional beliefs or commands, but assessment of safety and functional impact remains important.',
}


def numbers(text):
    for token in text.split(','):
        bounds=token.split('-')
        yield from range(int(bounds[0]),int(bounds[-1])+1)


def revise(rows):
    changes={}
    def fix(ids, answer=None, rationale=None, reason='Clarified the supplied teaching point.', ref=None, question=None, distractors=None):
        for ident in numbers(str(ids)):
            row=rows[ident-1]
            if answer is not None: row['correct_answer']=answer
            if question is not None: row['question']=question
            if distractors:
                for i,text in enumerate(distractors,1):row['distractor_'+str(i)]=text
            changes[ident]={'reviewNote':reason,'rationale':rationale,'references':[dict(title=REFS[r][0],url=REFS[r][1]) for r in ([ref] if isinstance(ref,str) else ref or [])]}
    fix(7,'Rubra is initially red, serosa becomes pink/brown, and alba becomes white/yellow around days 10–14 and may continue for several weeks.',reason='Alba begins around this time; it does not necessarily end at day 14.',ref='involution')
    fix('77,504','Rubra: initially red; serosa: pink/brown over the following days; alba: white/yellow from around days 10–14, potentially continuing for several weeks.',reason='Lochia stages overlap; corrected the implication that alba lasts only through day 14.',ref='involution')
    fix(9,'Assess amount, color progression, odor, and clots; heavy bleeding or large clots needs assessment, and foul odor may suggest infection.',reason='A large clot does not by itself establish retained placenta.')
    fix(10,'The decidua is the pregnancy-modified endometrium; it supports implantation and contributes to the maternal side of the placenta, then is shed or regenerates postpartum.',reason='Replaced the inaccurate statement that its primary function is preventing abnormal implantation.')
    fix('11,502',reason='This is a commonly taught observation sequence, not a universal schedule. Follow local policy and reassess more often with bleeding or instability.',rationale='Frequent early observations detect atony, bleeding, or instability; frequency is then adjusted to clinical condition and local policy.')
    fix(12,'The fundus is normally firm and near the umbilicus soon after birth, then generally descends about 1 cm/day.',question='How should a firm fundus near the umbilicus soon after birth be interpreted?',reason='Clarified the finding and its expected trend.',ref='involution')
    fix(13,'By approximately 2 weeks, it is usually no longer palpable abdominally.',reason='Used the approximate 2-week landmark rather than a rigid day-10 deadline.',ref='involution')
    fix(18,'Give indicated anti-D immune globulin to an unsensitized Rh-negative patient after an Rh-positive birth, generally within 72 hours.',reason='Added the unsensitized qualifier; prophylaxis does not reverse established alloimmunization.')
    fix(503,'Near the umbilicus initially; generally descends about 1 cm/day and is no longer palpable abdominally by about 2 weeks.',reason='Corrected the rigid day-10 endpoint.',ref='involution')
    fix('20,21','Breasts, Uterus, Bladder/Bowel, Lochia, Episiotomy or perineum, Hemorrhoids, and Emotional status; assess the legs for VTE symptoms without provoking Homan’s sign.',reason='Mnemonics vary. Replaced routine Homan’s testing with appropriate VTE assessment.',ref='dvt')
    fix('22,81','Assess for spontaneous voiding within the first 4–6 hours after birth or catheter removal and investigate inability to void or bladder distention.',reason='Qualified timing by clinical context and local protocol.')
    fix(24,'Fever, foul-smelling lochia, uterine tenderness, or systemic illness; WBC elevation alone can be physiologic postpartum.',reason='Postpartum leukocytosis alone does not diagnose infection.',ref='involution')
    fix(26,'Within 24 hours, cumulative blood loss ≥1,000 mL or bleeding with hypovolemic signs, regardless of delivery route; delayed postpartum bleeding also requires assessment.',reason='Updated to ACOG criteria; lower-volume bleeding can still require urgent treatment.',ref='pph')
    fix(30,'Assess bleeding and perfusion, activate appropriate help, and massage a boggy fundus while initiating the hemorrhage response.',reason='Fundal massage addresses atony; it must not delay resuscitation or replace evaluation of other causes.',ref='pph')
    fix(40,'A rare obstetric emergency in which the uterus turns inside out; reported incidence varies by population and setting.',reason='Avoided an unnecessary universal incidence estimate.')
    fix(50,'Activate emergency resuscitation; support oxygenation and ventilation, circulation, and coagulopathy with the multidisciplinary team.',reason='Specified the emergency response rather than routine fluids alone.')
    fix(57,'A screening questionnaire for perinatal depression; interpret the score, self-harm item, and clinical findings together, using the local referral threshold.',reason='A single score is not diagnostic, and referral thresholds vary.',ref='postpartum')
    fix(61,'Interpret readings against baseline and symptoms; new persistent BP ≥140/90 needs assessment, and severe-range BP or concerning symptoms require urgent action.',reason='Replaced an overly narrow “normal” range with postpartum assessment priorities.',ref='htn')
    fix(62,'New systolic BP ≥140 or diastolic BP ≥90 mm Hg postpartum; assess for preeclampsia and other causes.',reason='Either elevated component matters; the threshold includes equality.',ref='htn')
    fix(69,'Inflammation of breast tissue along a spectrum that can include bacterial infection.',reason='Mastitis is not always bacterial.',ref='mastitis')
    fix(71,'Continue physiologic breastfeeding or expression, use ice and appropriate anti-inflammatory measures, and give antibiotics when bacterial mastitis is diagnosed or suspected.',reason='Avoid excessive pumping to empty and prolonged heat, which can worsen inflammation.',ref='mastitis')
    fix(75,'Feed responsively, address latch, use cold packs, and express small amounts for comfort if needed; avoid excessive milk removal.',reason='Updated engorgement care to avoid overstimulation.',ref='mastitis')
    fix(83,'It is calf discomfort with dorsiflexion, an unreliable finding that should not be used to diagnose or exclude DVT.',reason='Corrected the claim that Homan’s sign establishes DVT.',ref='dvt')
    fix(84,'It does not confirm DVT; concerning leg symptoms need clinical assessment and appropriate imaging rather than repeated provocative testing.',reason='Homan’s sign is neither sensitive nor specific.',ref='dvt')
    fix(85,'Prescribed anticoagulation with individualized activity and compression guidance; urgently evaluate possible pulmonary embolism symptoms.',reason='Activity is directed by the clinical team, not a blanket instruction to ambulate a newly symptomatic patient.')
    fix(93,'Resume when healing, bleeding, comfort, readiness, and contraceptive needs have been addressed with the clinician; timing is individualized.',reason='There is no single mandatory day for every postpartum patient.',ref='postpartum')
    fix(94,'Discuss an individualized method; LAM requires amenorrhea, full or nearly full breastfeeding, and an infant younger than 6 months.',reason='Qualified breastfeeding protection using the actual LAM criteria.',ref='lam')
    fix(95,'Contact the maternal-care provider within 3 weeks, with ongoing care and a comprehensive visit by 12 weeks; earlier review for specific risks.',reason='Updated the single 6-week visit model.',ref='postpartum',distractors=['Only one visit at 6 weeks, even with new symptoms','No visit is needed until 6 months','Wait until 12 weeks before making any contact'])
    fix(103,'0 = absent heart rate; 1 = below 100/min; 2 = 100/min or greater.',reason='Corrected the boundary: a heart rate of exactly 100 earns 2 points.',ref='apgar')
    fix(104,'0 = no response; 1 = grimace; 2 = cough, sneeze, cry, or active withdrawal with stimulation.',reason='A full reflex-irritability response includes more than crying alone.')
    fix('108,291',reason='Heart rate varies with sleep, crying, and age. The supplied 120–160/min range is a common resting teaching range, not an exclusive diagnostic boundary.')
    fix(145,'Inspect alignment and skin over the spine; assess unusual dimples, hair tufts, masses, or neurologic findings in context.',reason='A simple low sacral dimple can be benign; not every dimple indicates a defect.')
    fix(149,'Expect a first void within 24 hours; wet diapers increase over the first days, with about 6 or more daily once intake is established.',reason='The first-day expectation differs from the established-feeding expectation.',ref='newborn')
    fix(150,'Feed responsively; breastfed newborns generally feed 8–12 times daily, and formula amounts and intervals are adjusted to age and cues.',reason='Avoid a rigid interval that could delay feeding a hungry newborn.',ref='newborn')
    fix(151,'Some early loss is expected; assess the trajectory, feeding, and hydration. Loss over 10% needs evaluation, and birth weight is generally regained by about 10–14 days.',reason='A 10% loss is an assessment threshold, not automatically normal.',ref='newborn')
    fix(152,'Use postnatal age, symptoms, risk factors, and the neonatal protocol; there is no single normal range for every newborn.',question='How should a nurse interpret a newborn glucose result?',reason='Replaced the universal 40–60 mg/dL range.',ref='glucose',distractors=['Use 40–60 mg/dL as the normal range at every postnatal age','Assume every glucose below 70 mg/dL requires the same treatment','Treat 20–30 mg/dL as safe even with symptoms'])
    fix(153,'A low glucose result interpreted by age and protocol, especially with jitteriness, poor feeding, lethargy, or other symptoms.',reason='Operational treatment thresholds vary with age and risk.',ref='glucose')
    fix(154,'Follow the neonatal protocol; support feeding or dextrose gel when appropriate, with prompt IV glucose for symptomatic or severe hypoglycemia.',reason='Symptoms can require urgent IV therapy rather than an oral-first delay.',ref='glucose')
    fix(156,'Usually begins after 24 hours and peaks over the following days; interpret the trend by age and risk and reassess persistent jaundice.',reason='Avoided a universal resolution deadline of 1 week.',ref='bilirubin')
    fix(157,'Jaundice in the first 24 hours requires prompt bilirubin measurement and evaluation; treatment depends on the findings.',reason='Early jaundice needs investigation rather than automatic treatment at one unspecified threshold.',ref='bilirubin')
    fix('164,167',reason='The hematology values are approximate teaching ranges. Glucose must be interpreted by postnatal age, symptoms, and protocol, rather than using 40–60 mg/dL universally.',ref='glucose')
    for n in [164,167]:rows[n-1]['correct_answer']=rows[n-1]['correct_answer'].replace('glucose 40-60 mg/dL','glucose interpreted by age and clinical protocol').replace('glucose 40-60','glucose interpreted by age and clinical protocol')
    fix('166,168','Measure and plot head circumference on a sex- and gestational-age-appropriate chart; unusual percentiles, trends, or examination findings need evaluation.',reason='Replaced fixed centimeter cutoffs with appropriate growth-chart assessment.')
    fix(171,'Approximately 8–12 inches (20–30 cm); faces and high-contrast objects are easiest to attend to at close range.',question='At what distance does a newborn most readily focus on a caregiver’s face?',reason='Avoided an oversimplified newborn visual-acuity estimate.',distractors=['Only objects more than 10 feet away','About 3–6 feet, with adult visual acuity at birth','Only objects touching the nose; no ability to attend to faces'])
    fix(175,'Under AAP recommendations, a birth dose followed by doses at 1–2 and 6–18 months; follow the applicable product and risk-specific schedule.',question='What hepatitis B schedule does the AAP recommend for most infants?',reason='Specified the recommending organization and corrected the routine 3-dose ages; combination-vaccine schedules can differ.',ref='vaccines')
    fix(176,'IM vitamin K prevents vitamin K deficiency bleeding; give after stabilization within the recommended first-hours window, generally within 6 hours.',reason='The source’s within-1-hour rule was unnecessarily rigid.',ref='birthcare')
    fix(177,'Erythromycin eye ointment prevents gonococcal ophthalmia neonatorum; administer according to newborn prophylaxis policy.',reason='Clarified the target infection and avoided a universal 1-hour deadline.',ref='birthcare')
    fix(184,'Use correctly prepared iron-fortified infant formula, with small amounts initially and volumes increasing with age and feeding cues.',reason='2–3 ounces is not a universal quantity for the first day of life.')
    fix(193,'Latent labor precedes about 6 cm; active labor begins at about 6 cm and continues to complete dilation, with late active labor often called transition.',reason='Updated the 4-cm active-phase convention.',ref='labor',distractors=['Active labor always begins at 4 cm, and all patients must dilate 1 cm/hour','The second stage begins at 3 cm and ends at 6 cm','Pushing defines the entire first stage, regardless of cervical dilation'])
    fix(194,'The first-stage period before the active phase, generally before about 6 cm; duration and contraction pattern vary.',reason='Used current active-phase terminology.',ref='labor')
    fix(195,'Active labor generally begins at about 6 cm and progresses to full dilation; a rigid 1 cm/hour rate is not required.',reason='Updated the active-phase threshold and removed an obsolete minimum rate.',ref='labor')
    fix(202,'The presenting part’s level relative to the ischial spines; negative is above, 0 is at the spines, and positive is below.',reason='Station scales differ; the anatomical reference is the key point.')
    fix(211,'A transient FHR rise; at 32 weeks or later, a qualifying acceleration is ≥15/min above baseline for ≥15 seconds, with different criteria before 32 weeks.',reason='Corrected the inclusive threshold and gestational-age qualifier.')
    fix(216,'Reposition, stop oxytocin if infusing, assess reversible causes, give IV fluid as appropriate, and escalate; oxygen is for maternal hypoxemia.',reason='Removed routine oxygen for a normoxic patient.',ref='oxygen')
    fix(219,'Generally at least 2 qualifying accelerations during the observation period; criteria depend on gestational age, and monitoring may extend for sleep.',reason='A 20-minute window can be extended rather than immediately labeling sleep as abnormal.')
    fix(220,'Insufficient qualifying accelerations after an adequate observation period; assess context and arrange further evaluation.',reason='A nonreactive result does not require a complete absence of accelerations.')
    fix('225,226,227',reason='Current assessment uses ultrasound: oligohydramnios is typically a deepest vertical pocket <2 cm or AFI ≤5 cm; polyhydramnios is usually a pocket ≥8 cm or AFI ≥24–25 cm. Interpret with the clinical context.',ref='fluid')
    rows[224]['correct_answer']='Low amniotic fluid assessed by ultrasound, typically a deepest vertical pocket <2 cm or AFI ≤5 cm.'
    rows[225]['correct_answer']='Excess amniotic fluid assessed by ultrasound, typically a deepest pocket ≥8 cm or AFI ≥24–25 cm.'
    rows[226]['correct_answer']='AFI is interpreted with gestational age and context; roughly above 5 and below 24–25 cm is commonly used as an expected interval.'
    fix(228,'Green or brown fluid containing meconium; assess fetal status and prepare appropriate newborn support rather than assuming distress from color alone.',reason='Meconium does not prove current fetal hypoxia.')
    fix(233,'Assess maternal and fetal status, gestational age, GBS status, and infection; plan birth or observation and antibiotics when indicated.',reason='Antibiotics are not automatic for every term PROM patient.')
    fix(234,'When expectant management is appropriate, use gestational-age-specific surveillance, indicated latency antibiotics, and corticosteroids; infection or compromise changes the birth plan.',reason='PPROM management depends on gestational age and maternal-fetal condition.',ref='preterm')
    fix(237,'Depending on gestational age and contraindications: short-term tocolysis, antenatal corticosteroids, and magnesium for indicated fetal neuroprotection.',reason='These treatments are indication- and gestational-age-specific.',ref='preterm')
    fix(238,'Medications used for short-term suppression of preterm contractions, such as nifedipine when appropriate.',reason='Magnesium is not the routine preferred tocolytic.',ref='preterm')
    fix(239,'Seizure prevention or treatment in preeclampsia/eclampsia and fetal neuroprotection when indicated before an anticipated early preterm birth.',reason='Replaced routine tocolysis as the principal indication.',ref='preterm')
    fix(242,'New hypertension after 20 weeks with proteinuria or qualifying organ dysfunction; proteinuria is not always required.',reason='Corrected the proteinuria requirement.',ref='htn')
    fix(243,'New hypertension, with findings such as proteinuria, persistent headache, visual symptoms, or organ dysfunction; edema alone is nonspecific.',reason='Edema alone is not diagnostic.',ref='htn')
    fix(244,'Severe features can include systolic BP ≥160 or diastolic BP ≥110, thrombocytopenia, organ dysfunction, or pulmonary edema.',reason='Either severe BP component matters, and the threshold includes equality.',ref='htn')
    fix(250,'New hypertension after 20 weeks without proteinuria or qualifying preeclampsia-related organ dysfunction.',reason='Absence of proteinuria alone does not exclude preeclampsia.',ref='htn')
    fix(252,'Gestational diabetes is glucose intolerance diagnosed in pregnancy that is not clearly overt preexisting diabetes.',reason='Distinguished GDM from overt diabetes first recognized in pregnancy.')
    fix(261,'Avoid digital cervical examination with placenta previa; assess and stabilize bleeding and plan cesarean birth when the placenta covers the os.',reason='Specified digital examination; clinically indicated transvaginal ultrasound is different.')
    fix(264,'Stabilize the mother, assess fetal status and coagulation, and arrange urgent birth when indicated by severity or compromise.',reason='Management depends on maternal and fetal status; not every small stable abruption has the same plan.')
    fix(267,'Examples include persistent fetal compromise, labor arrest under appropriate criteria, placenta previa, or specific contraindications to labor.',reason='A prior cesarean alone does not exclude an appropriately selected trial of labor.')
    fix(282,'Abnormal retinal vascular development in a premature infant, influenced by immaturity, oxygen exposure, and other factors.',reason='Avoided attributing ROP solely to high oxygen.')
    fix(285,'Management of a hemodynamically significant PDA may include observation, selected medication such as ibuprofen/indomethacin, or procedural closure.',reason='Treatment is individualized rather than automatic surgery or indomethacin for every PDA.')
    fix(291,'Assess rate and rhythm, pulses and perfusion, heart sounds, and any murmur; a new murmur needs evaluation in context.',reason='A normal cardiac assessment cannot be reduced to “no murmur.”')
    fix(295,'Central cyanosis involving the tongue or mucosa is abnormal; peripheral acrocyanosis can be transitional but persistent or symptomatic findings need assessment.',reason='Peripheral cyanosis is not automatically normal in every context.')
    fix(304,'Interpret bilirubin by age in hours, gestational age, neurotoxicity risks, and the trajectory rather than one normal number.',reason='Replaced fixed normal/peak values that are unsafe across ages.',ref='bilirubin')
    fix(305,'A direct bilirubin above about 1 mg/dL is abnormal and needs follow-up for cholestasis in the appropriate clinical context.',question='Which direct bilirubin finding needs follow-up in an infant?',reason='Focused the item on recognition of an abnormal direct bilirubin result.',ref='bilirubin',distractors=['An elevated direct bilirubin is always physiologic and can be ignored','Only indirect bilirubin can indicate any neonatal disease','Direct bilirubin never needs follow-up if total bilirubin is falling'])
    fix(306,'Because bilirubin interpretation and treatment depend on age, gestational age, risks, and total bilirubin rather than one indirect cutoff.',question='Why is a single “normal indirect bilirubin” cutoff inappropriate for every newborn?',reason='Removed a universal <12 mg/dL teaching cutoff.',ref='bilirubin',distractors=['Every newborn is safe whenever indirect bilirubin is below 12 mg/dL','Age in hours has no effect on bilirubin interpretation','Gestational age never changes bilirubin-related risk'])
    fix(307,'Use the guideline threshold chart for total bilirubin, age in hours, gestational age, and neurotoxicity risks.',reason='Removed the blanket >15 mg/dL phototherapy threshold.',ref='bilirubin')
    fix(317,'Pulling to stand or cruising while holding furniture, with emerging gestures or words; independent walking varies.',reason='Independent walking is not required at exactly 12 months.',ref='milestones')
    fix(319,'AAP recommends a hepatitis B birth dose for most medically stable infants; timing also depends on weight and maternal HBsAg status.',question='Which vaccine does the AAP recommend at birth for most medically stable infants?',reason='Specified the recommending organization and clinical qualifiers.',ref='vaccines')
    fix(333,reason='This is the traditional visit schedule used in many courses; current care may use a tailored schedule based on risk, needs, and shared planning.',ref='prenatal')
    fix(337,'BP ≥140 systolic or ≥90 diastolic raises concern for hypertension; assess repeated readings, baseline, symptoms, and gestational timing.',question='What blood-pressure finding should prompt assessment for hypertension in pregnancy?',reason='Below the diagnostic threshold is not a complete definition of a healthy BP.',ref='htn')
    fix(339,'Respiratory rate usually remains near the prepregnancy range, while tidal volume and minute ventilation increase.',reason='Pregnancy normally increases ventilation chiefly through deeper breathing, not a routine rise to tachypnea.')
    fix(341,'In mid-pregnancy, fundal height in centimeters generally approximates gestational age within a few centimeters, with limitations.',reason='Qualified a useful screening approximation rather than an exact equality at every gestation.')
    fix(353,'Active labor starts around 6 cm and has variable progress; a rigid minimum of 1 cm/hour should not be imposed.',reason='Removed an obsolete universal rate.',ref='labor')
    fix(354,'Descent varies with parity, fetal position, contractions, and clinical context; assess change over time with maternal and fetal status.',reason='There is no universal 1 cm/hour descent requirement.',ref='labor')
    fix(355,'Duration varies widely with parity, stage, and interventions; evaluate progress and maternal-fetal status using current labor criteria.',reason='Fixed total hours are not universal definitions of normal labor.',ref='labor')
    fix(356,'Second-stage duration is individualized; prolonged pushing is generally over 3 hours in nulliparous or 2 hours in multiparous patients, with contextual assessment.',reason='Replaced short fixed “normal” durations with current assessment guidance.',ref='labor')
    fix('358,359',reason='These are older teaching estimates, not guarantees of safety. Assess bleeding, cumulative loss, symptoms, and vital signs regardless of birth route.',ref='pph')
    fix(360,'There is no single postpartum hemoglobin that confirms normal recovery; compare baseline, timing, blood loss, symptoms, and anemia criteria.',reason='A value just over 10 g/dL does not universally establish normal postpartum status.')
    fix(361,'Interpret hematocrit relative to baseline, timing, blood loss, fluid shifts, symptoms, and the laboratory range.',reason='A narrow 30–40% range is not a universal postpartum normal interval.')
    fix(364,'Use ordinary adult laboratory and clinical interpretation; a typical fasting reference is about 70–99 mg/dL, with follow-up for prior GDM.',reason='Postpartum status does not create a universal fasting glucose range of 70–110 mg/dL.')
    fix(367,'Assess quantity and trend; rapidly soaking pads, persistent heavy flow, large clots, or hypovolemic symptoms require prompt assessment.',reason='“Heavy” must be interpreted with quantified bleeding and patient condition.',ref='pph')
    fix(378,'Assess fullness, comfort, nipples, and milk transfer; early fullness can be expected, while focal redness, persistent pain, or systemic illness needs assessment.',reason='Some early tenderness is common and not automatically infection.',ref='mastitis')
    fix(387,'Postpartum thyroid dysfunction can occur and should be assessed when symptoms or risk factors suggest it.',question='What should the nurse know about postpartum thyroid function?',reason='Avoided describing thyroiditis as an expected normal finding.')
    fix(389,'Severe postpartum hemorrhage or hypotension can cause ischemic pituitary injury (Sheehan syndrome); this is a complication, not normal adaptation.',question='Which pituitary complication can follow severe postpartum hemorrhage?',reason='Separated a rare complication from normal pituitary function.')
    fix(402,'Placental hormones fall after birth, while prolactin and ovarian function vary with lactation and recovery.',reason='Hormones do not all return to prepregnancy levels on one fixed 6-week timeline.')
    fix('404,405,406',reason='Rubin’s phases are a traditional conceptual model; their timing and expression vary rather than defining mandatory behavioral deadlines.')
    fix('416,418','Arrange the early newborn visit around 3–5 days after birth or within 48–72 hours after discharge, with earlier review when indicated and continued follow-up.',reason='Timing depends on discharge age, bilirubin, feeding, and other risks.',ref='followup')
    fix(435,'If secretions obstruct breathing and suction is indicated, gently clear the mouth before the nose; avoid deep or routine suctioning.',reason='Routine suction is not needed for every well newborn.')
    fix(441,'Pulse-oximetry screening for critical congenital heart disease is generally done at or after 24 hours, or as late as possible before earlier discharge.',reason='Added the early-discharge qualifier.')
    fix(442,'An abnormal pulse-oximetry screen requires prompt clinical evaluation and, when indicated, echocardiography; screening does not establish every diagnosis.',reason='A screen is not equivalent to a diagnosis and cannot exclude every heart defect.')
    fix('446,447','Give indicated intrapartum antibiotic prophylaxis to the mother; a prelabor cesarean with intact membranes is an important exception.',reason='Maternal prophylaxis is distinct from automatic antibiotic treatment of a well newborn.')
    fix(449,'GBS infection from about 7–89 days of age, which may present as bacteremia, pneumonia, or meningitis.',reason='Late-onset GBS is not limited to meningitis.')
    fix(454,'Dextrose-containing IV fluid such as D10W may be prescribed for glucose or maintenance needs, with monitoring; composition depends on age and indication.',question='Which IV-fluid teaching point is appropriate for neonatal glucose or maintenance therapy?',reason='No single IV fluid is routine for every newborn; resuscitation has different indications.')
    fix(461,'Use developmentally appropriate comfort measures for minor procedures; more painful procedures may require prescribed local or systemic analgesia.',reason='Sucrose and swaddling do not replace adequate analgesia for every procedure.')
    fix(463,'If swaddling is used, keep hips free to flex, avoid overheating and weighted products, place supine, and stop when rolling begins.',reason='Added essential safe-swaddling precautions.',ref='sleep')
    fix(465,reason='For sleep, offer a pacifier after breastfeeding is established when applicable; do not force it, attach cords, or use it instead of responding to feeding cues.',ref='sleep')
    fix(477,'A thumb-and-forefinger grasp develops in later infancy, becoming more refined toward the first birthday.',reason='A mature pincer grasp is not a rigid 9-month requirement.',ref='milestones')
    fix(483,question='What is the traditional “rule of threes” description of infant colic?',reason='This is a historical description, not a substitute for assessing an infant with excessive crying.')
    fix(486,'Begin complementary foods around 6 months when developmentally ready, including varied iron-rich foods; cereal need not be first.',reason='Iron-fortified cereal is an option, not a required first food.')
    fix(487,'Introduce age-appropriate allergenic foods with complementary feeding; high-risk infants may need clinician-guided peanut introduction at 4–6 months.',reason='Added developmental readiness, high-risk assessment, and safe food form.',ref='peanut')
    fix(495,'Children enrolled in Medicaid need blood lead testing at 12 and 24 months; other testing follows risk and local requirements.',reason='The 12/24-month universal requirement applies to Medicaid; other recommendations vary.',ref='lead')
    fix(501,'Return of menses varies; ovulation can precede the first postpartum period, so discuss contraception before menses returns.',question='What is the key teaching point about return of postpartum fertility?',reason='Removed a nonessential percentage while preserving the important fertility teaching.')
    fix(506,'Interpret the trend in context; reactive changes can occur, while marked thrombocytopenia or bleeding needs evaluation.',reason='There is no universal normalization deadline of 1 week for every postpartum patient.')
    fix('507,508','Interpret the trend with blood loss, fluid shifts, symptoms, baseline, and recovery; assess and treat anemia when indicated.',reason='Hemoglobin and hematocrit do not follow one fixed recovery timetable in every patient.')
    fix(511,'BP can rise over the first postpartum days; new hypertension or symptoms need assessment rather than reassurance based on a 6-week timeline.',reason='Postpartum blood pressure does not simply decrease and normalize on schedule.',ref='htn')
    fix(512,'A lower resting pulse can occur, but significant or symptomatic bradycardia needs assessment; tachycardia may signal a complication.',reason='Avoided presenting bradycardia as universally benign.')
    fix('518,519,520',reason='These are approximate recovery timelines. Healing varies; worsening pain, redness, discharge, fever, or wound separation needs assessment.')
    fix(538,'Screen during pregnancy and postpartum with a validated tool and a response plan; timing follows care contacts, risk, and symptoms.',reason='Replaced rigid 2- and 6-week-only screening.',ref='postpartum')
    fix(539,'Anxiety can occur postpartum; persistent, distressing, or impairing symptoms warrant assessment and treatment.',question='When does postpartum anxiety warrant follow-up?',reason='Avoided normalizing clinically significant anxiety.')
    fix(540,'Unwanted, distressing intrusive thoughts and/or compulsions can occur; assess safety, insight, impairment, and treatment needs.',question='How can postpartum obsessive-compulsive symptoms present?',reason='OCD is not described as a normal expected postpartum adaptation.')
    fix(133,'Persistent bulging when the infant is calm can suggest increased intracranial pressure or other illness and needs assessment.',reason='Fontanel fullness during crying is different from persistent bulging at rest.')
    fix(137,'Patent nares without obstruction; newborns strongly prefer nasal breathing, particularly during feeding.',reason='Qualified the absolute “obligate nose breather” wording.')
    fix(222,'Ultrasound observations plus NST; 8–10 is generally reassuring when fluid is adequate and the clinical context is appropriate.',reason='A total score must be interpreted with amniotic fluid and the clinical context.')
    rows[332]['question']='What is the traditional prenatal visit schedule often taught in this course?'
    return changes


def main():
    parser=argparse.ArgumentParser(description=__doc__);parser.add_argument('--source',type=Path,required=True);args=parser.parse_args()
    rows=list(csv.DictReader(args.source.open(encoding='utf-8-sig',newline='')))
    assert len(rows)==541 and [int(r['number']) for r in rows]==list(range(1,542))
    original=json.loads(json.dumps(rows))
    mapping={}
    for group,selection in GROUPS.items():
        for n in numbers(selection):mapping[n]=ALIASES.get(group,group)
    assert set(mapping)==set(range(1,542)),sorted(set(range(1,542))-set(mapping))
    changes=revise(rows)
    # Later pediatric review stays separate from the newborn final-exam focus.
    for n,group in mapping.items():
        if group in ('infant-development-review','infant-health-review'):
            rows[n-1]['question']=rows[n-1]['question'].replace('newborn','infant')
    sections=defaultdict(list)
    for n,row in enumerate(rows,1):
        group=mapping[n];edit=changes.get(n,{})
        options=[{'text':row['correct_answer'],'key':True},*[{'text':row['distractor_'+str(i)]} for i in range(1,4)]]
        random.Random(3410+n).shuffle(options)
        q={'id':'OBR-'+str(n).zfill(4),'sourceNumber':n,'type':'mcq','prompt':row['question'],'options':[dict(id=chr(65+i),text=o['text']) for i,o in enumerate(options)],'correct':[chr(65+next(i for i,o in enumerate(options) if o.get('key')))],'rationale':edit.get('rationale') or RATIONALES.get(n) or CONTEXT[group]}
        for key in ['reviewNote','references']:
            if edit.get(key):q[key]=edit[key]
        sections[group].append(q)
    output=ROOT/'ob-practice-questions';output.mkdir(exist_ok=True)
    (output/'ob-review.json').write_text(json.dumps({'id':'ob-review','sections':sections},ensure_ascii=False,indent=2)+'\n')
    manifest={'sections':{key:len(value) for key,value in sections.items()},'extras':EXTRAS,'questionCount':len(rows)}
    (ROOT/'ob-question-map.js').write_text('/* Lightweight section map; question content loads when a practice panel opens. */\nconst obQuestionMap = '+json.dumps(manifest,ensure_ascii=False,indent=2)+';\n')
    edited=[{'sourceNumber':n,'objectiveId':mapping[n],'reason':changes.get(n,{}).get('reviewNote','Updated infant age terminology.'),'before':original[n-1],'after':rows[n-1]} for n in range(1,542) if n in changes or original[n-1]!=rows[n-1]]
    audit={'source':args.source.name,'sha256':hashlib.sha256(args.source.read_bytes()).hexdigest(),'sourceRows':541,'publishedQuestions':541,'excluded':[], 'rationales':'Brief nursing explanations authored for this integration; no rationales were supplied in the CSV.','mapping':[{'sourceNumber':n,'sectionId':mapping[n]} for n in range(1,542)],'reviewedEdits':edited,'correctChoiceDistribution':dict(Counter(q['correct'][0] for qs in sections.values() for q in qs)),'scopeNotes':['All supplied rows are retained. Source choices are shuffled reproducibly; answers are not always A.','Later infant development and preventive care, plus additional congenital background, remain in separate weekly review panels and are not inserted into final blueprint topics.','The CSV has no substantive contraception-method or STI bank; no questions are fabricated for these objectives.']}
    (ROOT/'docs/ob-reinforcement-audit.json').write_text(json.dumps(audit,ensure_ascii=False,indent=2)+'\n')
    print('Published',len(rows),'rows across',len(sections),'sections;',len(edited),'reviewed/wording edits; key distribution',audit['correctChoiceDistribution'])


if __name__=='__main__':main()
