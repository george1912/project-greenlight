"""Extract supplied Word exams in document order, including tables and answer keys.

Run with the bundled Python and --source-dir pointing to the original DOCX files.
The originals stay outside the published site. Reviewed edits are explicit below.
"""
import argparse
import hashlib
import json
import re
from collections import Counter
from pathlib import Path

from docx import Document
from docx.oxml.ns import qn
from docx.text.paragraph import Paragraph

ROOT = Path(__file__).resolve().parents[1]
SATA = {
    1: {3: 'C', 17: 'ABD', 29: 'ABD', 41: 'ABD', 50: 'ABD', 60: 'ABC'},
    2: {3: 'BCDE', 7: 'ABD', 9: 'ABC', 16: 'ABCE', 21: 'ABDE', 25: 'ACF', 29: 'ACD', 33: 'ABCE', 35: 'ABD', 37: 'ABCE', 47: 'ABCE', 55: 'ABD', 60: 'ABD'},
    3: {3: 'ABCD', 7: 'ABD', 9: 'ABCD', 25: 'BCDE', 29: 'ABCD', 33: 'ABDE', 35: 'ABCD', 40: 'ABCD', 47: 'ABE', 55: 'ABCE', 60: 'BCE'},
}


def field(label, answer, aliases=(), unit=''):
    return dict(label=label, answer=answer, accepted=[answer, *aliases], unit=unit)


TEXT = {
    1: {
        7: [field('Descent (cm per day)', '1–2', ['1', '2', '1 to 2', '1-2'], 'cm')],
        25: [field('Muscle', 'Vastus lateralis', ['vastus lateralis muscle'])],
        39: [field('Return of fertility', 'Immediately', ['immediate', 'right away'])],
    },
    2: {
        4: [field('Lower end (cm)', '1', ['one'], 'cm'), field('Upper end (cm)', '2', ['two'], 'cm')],
        12: [field('Anatomical landmark', 'Symphysis pubis', ['pubic symphysis'])],
        23: [field('Lower end (mg/dL)', '4.8', ['4'], 'mg/dL'), field('Upper end (mg/dL)', '9.6', ['8', '9'], 'mg/dL')],
        28: [field('Lower end (breaths/min)', '30', ['thirty']), field('Upper end (breaths/min)', '60', ['sixty'])],
        39: [field('Body part', 'Eyes', ['eye'])],
        46: [field('Hours', '24', ['twenty four', 'twenty-four'], 'hours')],
        63: [field('Additional calories per day', '500', ['450', '450–500', '450 to 500'], 'calories')],
    },
    3: {
        4: [field('Time after birth', '2 weeks', ['two weeks', '14 days', 'two', '2'])],
        12: [field('Gestational age (weeks)', '28', ['twenty eight', 'twenty-eight'], 'weeks')],
        16: [field('Procedure', 'Version', ['external cephalic version', 'ecv'])],
        21: [field('Procedure', 'Version', ['external cephalic version', 'ecv'])],
        23: [dict(field('Loss of reflexes (mg/dL)', '8–12', ['8 to 12', '8-12'], 'mg/dL'), numericRange=[8,12]), dict(field('Respiratory depression (mg/dL)', '15–17', ['15 to 17', '15-17'], 'mg/dL'), numericRange=[15,17])],
        28: [field('Lower end (beats/min)', '110', ['one hundred ten']), field('Upper end (beats/min)', '160', ['one hundred sixty'])],
        37: [field('Condition', 'Polycythemia', ['polycythaemia', 'neonatal polycythemia'])],
        46: [field('Action', 'Apply a new patch', ['replace the patch', 'change the patch', 'put on a new patch', 'apply new patch'])],
        63: [field('Second trimester: additional calories/day', '340', unit='calories'), field('Lactation: additional calories/day', '450–500', ['450', '500', '450 to 500'], 'calories')],
    },
}

# Condition, actions, monitoring (one-based source-table positions).
BOWTIES = {
    1: {'1': (2, [1, 3], [1, 3]), '2': (2, [1, 2], [1, 3])},
    2: {'A': (1, [1, 3], [1, 3]), 'C': (1, [1, 2], [1, 2]), 'B': (1, [1, 2], [1, 2]), 'D': (1, [1, 2], [1, 2])},
    3: {'1': (2, [3, 5], [3, 5]), '2': (3, [3, 4], [3, 4]), '3': (2, [3, 5], [2, 4]), '4': (3, [3, 5], [4, 5])},
}

REFS = {
    'lam': ('CDC: lactational amenorrhea', 'https://www.cdc.gov/contraception/hcp/usspr/combined-hormonal-contraceptives.html'),
    'newborn': ('AAP: newborn assessment and intake', 'https://www.aap.org/en/patient-care/newborn-infant-and-early-childhood-nutrition/newborn-and-infant-health-assessment-and-promotion/newborn-visit/'),
    'jaundice': ('AAP: jaundice in newborns', 'https://www.healthychildren.org/English/ages-stages/baby/Pages/jaundice.aspx'),
    'chlamydia': ('CDC: chlamydial infections', 'https://www.cdc.gov/std/treatment-guidelines/chlamydia.htm'),
    'pills': ('CDC: missed combined pills', 'https://www.cdc.gov/contraception/media/pdfs/2024/07/recommended-action-late-missed-contraception-508.pdf'),
    'ec': ('FDA: levonorgestrel emergency contraception', 'https://www.fda.gov/drugs/postmarket-drug-safety-information-patients-and-providers/plan-b-one-step-15-mg-levonorgestrel-information'),
    'hbv': ('CDC: hepatitis B and breastfeeding', 'https://www.cdc.gov/breastfeeding-special-circumstances/hcp/illnesses-conditions/hepatitis-b-c.html'),
    'gdm': ('USPSTF: glucose-test thresholds', 'https://www.uspreventiveservicestaskforce.org/uspstf/index.php/recommendation/gestational-diabetes-screening'),
    'preterm': ('ACOG: preterm labor and birth', 'https://www.acog.org/womens-health/faqs/preterm-labor-and-birth'),
    'implant': ('FDA: Nexplanon prescribing information', 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/021529s027lbl.pdf'),
    'rh': ('ACOG: the Rh factor', 'https://www.acog.org/womens-health/faqs/the-rh-factor-how-it-can-affect-your-pregnancy'),
    'glucose': ('AAP: neonatal glucose management', 'https://publications.aap.org/pediatrics/article/127/3/e20103851/65026/Postnatal-Glucose-Homeostasis-in-Late-Preterm-and'),
    'mastitis': ('Academy of Breastfeeding Medicine: mastitis protocol', 'https://www.bfmed.org/assets/ABM%20Protocol%20%2336.pdf'),
    'milk': ('CDC: breast milk storage', 'https://www.cdc.gov/breastfeeding/breast-milk-preparation-and-storage/handling-breastmilk.html'),
    'calories': ('ACOG: breastfeeding nutrition', 'https://www.acog.org/womens-health/faqs/breastfeeding-your-baby'),
    'pregnancy': ('ACOG: trimester-specific nutrition', 'https://www.acog.org/womens-health/experts-and-stories/ask-acog/how-much-weight-should-i-gain-during-pregnancy'),
    'pph': ('ACOG: postpartum hemorrhage', 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2017/10/postpartum-hemorrhage'),
    'sepsis': ('Canadian Paediatric Society: early-onset neonatal sepsis', 'https://cps.ca/en/documents/position/management-infant-sepsis'),
    'oxygen': ('ACOG: oxygen during fetal resuscitation', 'https://www.acog.org/clinical/clinical-guidance/practice-advisory/articles/2022/01/oxygen-supplementation-in-the-setting-of-category-ii-or-iii-fetal-heart-tracings'),
    'sterilization': ('Federal Medicaid sterilization consent requirements', 'https://www.ecfr.gov/current/title-42/section-441.253'),
    'pop': ('CDC: progestin-only pills', 'https://www.cdc.gov/contraception/hcp/usspr/progestin-only-pills.html'),
    'formula': ('CDC: formula preparation and storage', 'https://www.cdc.gov/infant-toddler-nutrition/formula-feeding/preparation-and-storage.html'),
    'postpartum': ('Merck Manual: postpartum involution', 'https://www.merckmanuals.com/professional/gynecology-and-obstetrics/postpartum-care-and-associated-disorders/postpartum-care'),
    'patch': ('Xulane prescribing information', 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f7848550-086a-43d8-8ae5-047f4b9e4382'),
    'ring': ('NuvaRing prescribing information', 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=19ef66d1-913f-49a8-a0a5-59b4e20322f5'),
    'tubal': ('ACOG: pregnancy after sterilization', 'https://www.acog.org/womens-health/experts-and-stories/the-latest/thinking-about-sterilization-heres-what-to-know'),
    'feeding': ('CDC: breastfeeding contraindications', 'https://www.cdc.gov/breastfeeding-special-circumstances/hcp/contraindications/'),
    'iodine': ('NIH: sodium iodide I-131 in lactation', 'https://pubchem.ncbi.nlm.nih.gov/compound/Sodium-iodide-I-131'),
}


def elements(path):
    doc = Document(path)
    assert not doc.inline_shapes, 'A figure needs separate extraction'
    tables = iter(doc.tables)
    lines = []
    for child in doc.element.body:
        if child.tag == qn('w:p'):
            lines.append(Paragraph(child, doc).text)
        elif child.tag == qn('w:tbl'):
            table = next(tables)
            lines += ['[TABLE]', *[' | '.join(c.text for c in row.cells) for row in table.rows], '[/TABLE]']
    return lines


def extract(path, number):
    lines = elements(path)
    body, key = '\n'.join(lines).split('\nANSWER KEY\n')
    keys = {}
    for line in key.splitlines():
        match = re.match(r'^(\d+)\. (.*)$|^(Bowtie [A-D1-4]) — (.*)$', line)
        if match:
            keys[match[1] or match[3]] = (match[2] or match[4]).strip()
    category = ''
    blocks = []
    current = None
    for line in body.splitlines():
        section = re.match(r'SECTION \d+: (.*?)(?: \(.*)?$', line)
        normal = re.match(r'^(\d+)\. (.*)$', line)
        bowtie = re.match(r'^BOWTIE ITEM ([A-D1-4])', line)
        if section:
            category = section[1]
            current = None
        elif normal or bowtie:
            source_id = normal[1] if normal else 'Bowtie ' + bowtie[1]
            current = {'sourceId': source_id, 'category': category, 'lines': [normal[2]] if normal else []}
            blocks.append(current)
        elif current is not None:
            current['lines'].append(line)
    questions = []
    for block in blocks:
        source_id = block['sourceId']
        prompt, options, table = [], [], []
        in_table = False
        for line in block['lines']:
            if line == '[TABLE]': in_table = True; continue
            if line == '[/TABLE]': in_table = False; continue
            if in_table: table.append(line.split(' | ')); continue
            option = re.match(r'^([A-F])\. (.*)', line)
            if option: options.append({'id': option[1], 'text': option[2]})
            elif line.startswith('☐'): options.append({'id': chr(65+len(options)), 'text': line[1:].strip()})
            elif line: prompt.append(line)
        q = dict(id=source_id.lower().replace(' ', '-'), label=('Question ' + source_id) if source_id.isdigit() else source_id,
                 category=block['category'], prompt='\n'.join(prompt), rationale=keys.get(source_id, ''), rationaleSource='provided')
        if source_id.startswith('Bowtie'):
            q['type'] = 'groups'
            q['format'] = 'Bowtie'
            condition_line = next(line for line in prompt if line.startswith('Condition choices:'))
            q['prompt'] = q['prompt'].split('\nCondition choices:')[0]
            condition, actions, monitoring = BOWTIES[number][source_id[-1]]
            q['groups'] = []
            for ident, label, choices, correct in [
                ('condition', 'Most likely condition', condition_line.split(': ', 1)[1].split('  |  '), [condition]),
                ('actions', 'Actions to take', [row[0] for row in table[1:]], actions),
                ('monitoring', 'Parameters to monitor', [row[2] for row in table[1:]], monitoring),
            ]:
                q['groups'].append(dict(id=ident, label=label, selectionCount=len(correct), options=[dict(id=chr(65+i), text=t.strip()) for i,t in enumerate(choices)], correct=[chr(64+i) for i in correct]))
        elif table:
            q['type'] = 'groups'
            q['format'] = 'Matrix'
            answers = ['E', 'E', 'M', 'B', 'M'] if number == 2 else ['E', 'M', 'E', 'M', 'B']
            q['groups'] = [dict(id='row-'+str(i+1), label=row[0], selectionCount=1,
                options=[dict(id=ident, text=text) for ident,text in [('E','Endometritis'),('M','Mastitis'),('B','Both'),('N','Neither')]], correct=[answers[i]]) for i,row in enumerate(table[1:])]
            # General myalgia is nonspecific; accept either interpretation already allowed by key #2.
            q['groups'][4 if number == 2 else 1]['acceptedSets'] = [['M'], ['B']]
        elif not options:
            q['type'] = 'text'
            q['format'] = 'Fill in the blank'
            q['fields'] = TEXT[number][int(source_id)]
            q['prompt'] = q['prompt'].removeprefix('Fill in the blank:\n')
        else:
            q['type'] = 'choice'
            q['options'] = options
            q['multiple'] = int(source_id) in SATA[number]
            q['correct'] = list(SATA[number][int(source_id)]) if q['multiple'] else [re.match(r'^([A-D]) — ', q['rationale'])[1]]
            q['format'] = 'Select all that apply' if q['multiple'] else 'Multiple choice'
            selection = re.search(r'Select (?:the )?(\d+) (?:priority )?actions', q['prompt'])
            if selection: q['selectionCount'] = int(selection[1])
            q['prompt'] = q['prompt'].replace('\n(Select All That Apply.)', '')
        # Strip the key's letter prefix from the explanation; the player shows the actual key separately.
        q['rationale'] = re.sub(r'^[A-D] — ', '', q['rationale'])
        questions.append(q)
    return questions, keys, len(Document(path).tables)


def review(questions, number):
    by_id = {q['id']: q for q in questions}
    def update(ident, reason, refs=(), rationale=None, correct=None, prompt=None, options=None):
        q = by_id[str(ident)]
        q['reviewNote'] = reason
        q['rationaleSource'] = 'reviewed'
        q['references'] = [dict(title=REFS[key][0], url=REFS[key][1]) for key in refs]
        if rationale is not None: q['rationale'] = rationale
        if correct is not None: q['correct'] = list(correct)
        if prompt is not None: q['prompt'] = prompt
        for letter, text in (options or {}).items():
            next(o for o in q['options'] if o['id'] == letter)['text'] = text
    if number == 1:
        update(10, 'The supplied key listed A. The statement needing clarification is B: breastfeeding alone is not enough without all LAM criteria.', ['lam'],
               'Amenorrhea at 6 weeks while breastfeeding is expected. LAM requires an infant younger than 6 months, no return of menses, and full or nearly full breastfeeding; confirm all criteria and discuss contraceptive preferences.', 'B')
        update(24, 'The supplied key listed C. One wet diaper on day 1 can be expected; early jaundice needs bilirubin assessment.', ['newborn','jaundice'],
               'Assess visible jaundice at this age and obtain an age-specific bilirubin measurement. A minimum of one wet diaper in the first day is expected, so that finding alone does not establish dehydration.', 'A')
        update(26, 'Clarified the organism covered by routine eye prophylaxis.', ['chlamydia'],
               'Routine erythromycin eye prophylaxis targets gonococcal ophthalmia. It does not reliably prevent chlamydial conjunctivitis; maternal screening and treatment are essential.')
        update(34, 'Reworded option B: take the most recent missed pill, rather than both missed pills.', ['pills'],
               'Take the most recent missed pill now, discard the older missed pill, resume the pack, and use backup for 7 days. Consider emergency contraception after recent unprotected sex in the first week.',
               options={'B':'Take the most recent missed pill now, discard the other missed pill, continue the pack, and use backup contraception for 7 days.'})
        update(35, 'Removed the outdated claim that oral levonorgestrel prevents implantation.', ['ec'],
               'Levonorgestrel emergency contraception acts by delaying or preventing ovulation. It does not end an established pregnancy; taking it sooner improves effectiveness.',
               prompt=by_id['35']['prompt'].replace('emergency contraception','oral levonorgestrel emergency contraception'),
               options={'B':'This medication works by delaying or preventing ovulation.'})
        update(36, 'Specified norethindrone: late-pill rules differ between progestin-only formulations.', ['pop'],
               'Norethindrone must be taken at the same time daily. More than 3 hours late requires backup for 2 days; drospirenone has different missed-pill rules.',
               prompt=by_id['36']['prompt'].replace('progestin-only "mini-pill"','norethindrone progestin-only "mini-pill"'),
               options={'A':'I can take this pill several hours late each day without needing backup contraception.'})
        update(37, 'Specified the federal Medicaid consent rule; the waiting period is not universal for every payer or procedure.', ['sterilization'],
               'For federally funded Medicaid sterilization, informed consent generally must be signed 30–180 days beforehand. Limited premature-delivery/emergency-surgery exceptions still require at least 72 hours.',
               prompt=by_id['37']['prompt'].replace('considering a bilateral tubal ligation','considering an elective Medicaid-funded bilateral tubal ligation'))
        update(42, 'Updated pregnancy test-of-cure timing from 2–3 weeks to approximately 4 weeks.', ['chlamydia'],
               'Pregnant clients need a chlamydia test of cure around 4 weeks after treatment completion. Partners also require treatment.',
               options={'B':'You should complete a test of cure approximately 4 weeks after treatment if you are pregnant.'})
        update(45, 'Focused the explanation on the reliable change in fat content during a feed.', [],
               'Milk fat content generally increases during a feeding. “Foremilk” and “hindmilk” describe a gradual change, not two sharply separated kinds of milk.',
               options={'C':'Milk at the beginning of a feeding generally contains less fat than milk later in the feeding.'})
        update(47, 'Corrected the other storage choices so this single-answer question has one clear answer.', ['formula'],
               'Never prop a bottle. Refrigerate prepared formula promptly and use within 24 hours; use within 2 hours of preparation or within 1 hour after feeding starts, whichever comes first.',
               options={'A':'I can refrigerate prepared formula promptly and use it within 24 hours.', 'B':'I will discard formula after 2 hours at room temperature, or 1 hour after feeding starts, whichever comes first.'})
        update(50, 'Removed hepatitis B from the key; missing infant prophylaxis needs urgent action rather than automatic cessation of breastfeeding.', ['hbv'],
               'Active cocaine use and HSV lesions on the breast require precautions. Feeding from an unaffected breast may continue with HSV lesions covered. Hepatitis B requires timely infant vaccine and HBIG, but breastfeeding need not wait for completion of immunization.', 'AD')
        update(53, 'Corrected the supplied key from C to B; the original rationale mislabeled normal glucose values as abnormal.', ['gdm'],
               'Using the 100-g, 3-hour Carpenter–Coustan test, thresholds are 95/180/155/140 mg/dL (fasting/1/2/3 hours). Option B exceeds three; option C exceeds none. At least two abnormal values meet these diagnostic criteria.', 'B')
        update(56, 'Removed routine oxygen from the rationale when maternal oxygen saturation is normal.', ['oxygen'],
               'Reposition laterally, address reversible causes, and give IV fluids as appropriate while escalating the recurrent late-deceleration pattern. Stop oxytocin if infusing. Oxygen is indicated for maternal hypoxemia, not routinely for a normoxic client.')
        update(60, 'At 32 weeks, magnesium for fetal neuroprotection is not a routine selection under the ACOG before-32-weeks threshold.', ['preterm'],
               'Expect antenatal corticosteroids and latency antibiotics for appropriate expectant PPROM management. Magnesium neuroprotection is considered when delivery before 32 weeks is anticipated; Rh immune globulin depends on Rh status.', 'AC')
        by_id['bowtie-2']['groups'][1]['options'][0]['text'] = 'Empty the bladder using catheterization per protocol while treating hemorrhage; do not ambulate this unstable client.'
        update('bowtie-2', 'Clarified safe bladder emptying for a client with hypotension; do not walk this client to the bathroom.', ['pph'],
               by_id['bowtie-2']['rationale'] + ' Activate the hemorrhage response immediately and treat shock while addressing uterine atony and bladder distention.')
    if number == 2:
        update(5, 'The source says “second H,” but BUBBLEHE has one H.', [],
               'In this BUBBLEHE version, H stands for hemorrhoids.', options={'C':'The H (hemorrhoids)'})
        update(12, 'Changed the timing from 1 week to approximately 2 weeks so the anatomical landmark matches normal involution.', ['postpartum'],
               'By approximately 2 weeks the uterus has returned to the pelvis and is generally no longer palpable abdominally.',
               prompt=by_id['12']['prompt'].replace('1 week','2 weeks'))
        update(16, 'Changed the pregnancy-loss example to 14 weeks; routine RhIg before 12 weeks is no longer universal under ACOG guidance.', ['rh'],
               'For an unsensitized Rh-negative client, these examples warrant RhIg: Rh-positive birth, loss at 14 weeks, amniocentesis, and external cephalic version. An Rh-negative infant does not require postpartum prophylaxis.',
               options={'B':'Spontaneous abortion at 14 weeks of gestation'})
        update(17, 'Clarified the current ACOG definition, which applies regardless of birth route.', ['pph'],
               '1,100 mL meets the ≥1,000 mL criterion. Blood loss with hypovolemic signs also qualifies, even below that volume; do not wait for a threshold to treat instability.')
        update(25, 'The source key prioritized feeding despite symptomatic severe hypoglycemia. Corrected to prompt IV glucose, reassessment, and provider notification.', ['glucose'],
               'Jitteriness, poor feeding, and glucose 28 mg/dL indicate symptomatic hypoglycemia. Prompt IV dextrose under protocol is appropriate; oral feeding should not delay treatment. Recheck glucose and notify the provider.', 'BCF')
        update(45, 'Updated the etonogestrel implant duration from 3 years to the current U.S. 5-year approval.', ['implant'],
               'Nexplanon is a progestin-only implant approved in the U.S. for up to 5 years, with no daily dosing.',
               options={'B':'The etonogestrel implant (Nexplanon) provides contraception for up to 5 years.'})
        update(46, 'Specified Xulane labeling; detachment instructions differ from general CDC missed-patch guidance.', ['patch'],
               'The Xulane label uses a 24-hour detachment threshold (or unknown duration): start a new cycle and use backup for 7 days.',
               prompt=by_id['46']['prompt'].replace('the contraceptive patch','the Xulane contraceptive patch, following its product labeling,'))
        update(50, 'Removed an overly broad percentage range; the key teaching point is prompt evaluation for ectopic pregnancy after sterilization failure.', ['tubal'],
               'Pregnancy is uncommon after tubal sterilization, but a pregnancy that occurs requires prompt evaluation to exclude an ectopic pregnancy.',
               options={'B':'If pregnancy occurs after tubal ligation, ectopic pregnancy is an important risk and needs prompt evaluation.'})
        update(52, 'Specified the etonogestrel/ethinyl estradiol ring label; advice varies by ring and guideline.', ['ring'],
               'Under this ring’s product labeling, being out for more than 3 continuous hours in week 2 requires reinsertion and backup for 7 days.',
               prompt='A client using the etonogestrel/ethinyl estradiol vaginal ring (NuvaRing) reports it was out for 6 hours in week 2. Following its product labeling, which instruction should the nurse provide?')
        update(59, 'Clarified that physiologic feeding should continue without excessive pumping to empty.', ['mastitis'],
               'Continue usual feeding or expression to meet the infant’s needs. Avoid extra pumping to empty, which can worsen inflammation; treat bacterial mastitis as prescribed.',
               options={'B':'Continue breastfeeding or expressing milk to match the infant’s needs; avoid excessive pumping to empty.'})
        update(60, 'Clarified that untreated active TB temporarily prevents direct breastfeeding, while expressed milk may be given by another caregiver.', ['feeding'],
               'Untreated HIV without ART and cytotoxic chemotherapy require avoiding breast milk. Untreated active TB requires temporary separation from direct breastfeeding; expressed milk may be used if otherwise safe.')
        update(63, 'Accepted the supplied ACOG-style estimate of 450–500 calories; needs are individualized and other guidelines use different estimates.', ['calories'])
        q = by_id['bowtie-c']
        q['groups'][1]['options'][0]['text'] = 'Administer IV dextrose promptly per neonatal hypoglycemia protocol; do not delay for an oral feeding attempt.'
        q['groups'][2]['acceptedSets'] = [['A','B'], ['A','C']]
        update('bowtie-c', 'Corrected oral-first treatment for a symptomatic newborn with hypoglycemia and respiratory distress. Either monitoring alternative in the original key is accepted.', ['glucose'],
               'Neonatal hypoglycemia is the best listed condition. Give prompt IV glucose and recheck. Monitor glucose with respiratory status or temperature. Poor feeding and respiratory distress make oral-first management unsafe; assess other causes of illness too.')
        by_id['bowtie-b']['groups'][2]['acceptedSets'] = [['A','B'], ['A','C']]
        by_id['bowtie-d']['groups'][1]['acceptedSets'] = [['A','B'], ['A','D']]
    if number == 3:
        update(16, 'Qualified the pregnancy-loss timing to avoid implying routine RhIg for every early loss.', ['rh'],
               'External cephalic version can cause fetomaternal bleeding. Follow RhIg guidance for an unsensitized Rh-negative client; routine use after a loss before 12 weeks is individualized.',
               prompt=by_id['16']['prompt'].replace('spontaneous or induced abortion,','pregnancy loss at 12 weeks or later,'))
        update(17, 'Specified ACOG criteria and updated option D; the older >500 mL vaginal-birth definition was not the stated current standard.', ['pph'],
               '1,050 mL meets ACOG’s ≥1,000 mL criterion within 24 hours. Hypovolemic signs qualify at a lower volume. Blood loss above 500 mL after vaginal birth still warrants attention.',
               prompt='Using ACOG criteria, which documented cumulative blood loss alone meets the ≥1,000 mL criterion for postpartum hemorrhage within 24 hours after a vaginal birth?',
               options={'D':'1,050 mL'})
        update(59, 'Updated the initial inflammatory mastitis advice to avoid increased milk removal and prolonged heat.', ['mastitis'],
               'Continue usual feeding, use ice and appropriate anti-inflammatory measures, and avoid pumping to empty or deep massage. Seek assessment if symptoms persist or systemic illness develops.',
               options={'B':'Continue usual breastfeeding, use ice and appropriate anti-inflammatory measures, and contact the provider if symptoms persist, fever develops, or symptoms worsen.'})
        update(62, 'Updated the frozen-milk option from an older freezer-type rule to current CDC temperature-based storage guidance.', ['milk'],
               'For milk continuously frozen at 0°F (−18°C) or colder, using within 6 months is preferred; up to 12 months is acceptable.',
               options={'A':'For breast milk kept frozen at 0°F (−18°C) or colder, using it within 6 months is best; up to 12 months is acceptable.'})
        update(63, 'Specified second-trimester needs rather than one calorie value for all pregnancy; kept an ACOG lactation estimate.', ['pregnancy','calories'],
               'ACOG describes about 340 extra calories/day in the second trimester, 450 in the third, and about 450–500 during lactation. Needs vary with the individual.',
               prompt='Using ACOG nutrition guidance, a client in the second trimester generally needs an additional ______ calories per day, while a lactating client generally needs an additional ______ calories per day above prepregnancy needs.')
        update(60, 'Clarified I-131 therapy: this is not simply a temporary waiting period before resuming breastfeeding the same child.', ['iodine','feeding'],
               'Untreated brucellosis and classic galactosemia require avoiding breast milk. I-131 requires stopping breastfeeding for the current child under specialist guidance. A covered HSV lesion away from the breast is not itself a contraindication. Alcohol needs timing precautions.',
               options={'E':'Radioactive iodine (I-131) therapy during the current lactation'})
        by_id['bowtie-1']['groups'][1]['options'][4]['text'] = 'Activate the postpartum hemorrhage response and notify the provider immediately while continuing first-response care.'
        update('bowtie-1', 'Escalation is immediate for hypotension and tachycardia; it should not wait for massage to fail.', ['pph'],
               'The boggy midline fundus suggests uterine atony. Massage and activate the hemorrhage response immediately. Monitor vital signs, consciousness, and quantified bleeding while treating the cause and supporting circulation.')
        update('bowtie-2', 'This bowtie has no answer in the supplied document’s key. The answer and explanation were added from neonatal sepsis guidance.', ['sepsis'],
               'Early-onset neonatal sepsis is the best listed condition given maternal risk factors, fever, lethargy, poor feeding, and respiratory distress. Notify the provider, obtain cultures promptly, and begin prescribed empiric antibiotics without waiting for culture results. Follow temperature, respiratory status, and glucose.')
    if number in (2,3):
        q=by_id['19']
        update(19, 'Either mastitis or both is accepted for nonspecific flu-like myalgia; the other matrix findings retain the supplied key.', [],
               'Uterine tenderness/subinvolution and purulent, foul lochia support endometritis. Localized breast warmth and erythema support mastitis. Fever and general body aches can occur with either infection; myalgia alone cannot distinguish the two. Mastitis or both is accepted for that nonspecific row.')
    # Some source bowtie keys name the selections without explaining the case cues.
    # Keep those selections and distinguish the added explanation from the provided text.
    explanations = {
        (1,'bowtie-1'): 'Severe hypertension with headache, visual changes, epigastric pain, and hyperreflexia supports preeclampsia with severe features. Magnesium reduces seizure risk; reflexes and breathing help identify toxicity.',
        (2,'bowtie-a'): 'Bleeding from puncture sites with low platelets and low fibrinogen supports consumption coagulopathy (DIC). Blood products replace depleted components; trends in bleeding and clotting studies guide the response.',
        (2,'bowtie-b'): 'A generalized seizure in this severely hypertensive pregnant client supports eclampsia. Protect the airway and position laterally, give prescribed magnesium, and monitor oxygenation and fetal status or maternal neurologic findings.',
        (2,'bowtie-d'): 'Head retraction and failure of the shoulder to deliver are the cues for shoulder dystocia. Call for help, use the prescribed maneuvers, and track elapsed time and newborn status because delivery can be compromised. Never apply fundal pressure.',
        (3,'bowtie-3'): 'Severe hypertension with thrombocytopenia and elevated liver enzymes suggests HELLP among the listed choices. Assess hemolysis to complete the triad. Seizure prophylaxis, urgent birth planning, and maternal respiratory/neurologic and laboratory monitoring address the immediate risks.',
        (3,'bowtie-4'): 'A visible pulsating cord with sudden fetal bradycardia indicates cord prolapse. Relieving pressure and changing position help preserve fetal circulation while arranging emergency delivery; continuous fetal monitoring tracks the response.',
    }
    for (exam_id,ident),explanation in explanations.items():
        if number==exam_id:
            q=by_id[ident]
            update(ident, 'The supplied selections are retained; an explanation of the case cues has been added.', [], q['rationale']+' '+explanation)


def main():
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--source-dir', type=Path, required=True)
    args=parser.parse_args()
    exams, audits = [], []
    for number,suffix in enumerate(['','_2','_3'],1):
        path=args.source_dir / ('OB_Exam3_Practice_Test'+suffix+'.docx')
        questions,keys,tables=extract(path,number)
        originals={q['id']:json.loads(json.dumps(q)) for q in questions}
        review(questions,number)
        assert len(questions)==[64,80,80][number-1]
        assert all(q['rationale'] for q in questions)
        exams.append(dict(id='exam-'+str(number), title='Practice exam '+str(number), description=['Core review','Advanced practice','Further practice'][number-1], questions=questions))
        edits=[dict(id=q['id'], reason=q['reviewNote'], before=originals[q['id']], after=q) for q in questions if q.get('reviewNote')]
        audits.append(dict(file=path.name,sha256=hashlib.sha256(path.read_bytes()).hexdigest(),count=len(questions),tables=tables,
                           formats=dict(Counter(q['format'] for q in questions)),missingSourceKeys=[q['id'] for q in questions if not originals[q['id']]['rationale']],edits=edits))
    (ROOT/'ob-practice-data.js').write_text('/* Supplied OB exams; structured extraction and reviewed edits: scripts/prepare-ob-practice.py. */\nconst obPracticeExams = '+json.dumps(exams,ensure_ascii=False,indent=2)+';\n')
    (ROOT/'docs/ob-practice-audit.json').write_text(json.dumps(dict(exams=audits),ensure_ascii=False,indent=2)+'\n')
    print('Extracted',sum(len(e['questions']) for e in exams),'questions:',', '.join(str(len(e['questions'])) for e in exams))


if __name__=='__main__': main()
