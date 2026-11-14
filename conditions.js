/* Every condition uses this order. Content is keyed by section ID, never by position. */
const conditionSections = [
  ['overview', 'Overview & pathophysiology'],
  ['manifestations', 'Clinical manifestations'],
  ['risk', 'Risk factors & prevention'],
  ['diagnostics', 'Diagnostic tests'],
  ['medical', 'Medical management'],
  ['medications', 'Pharmacological therapies'],
  ['nonpharmacological', 'Non-pharmacological therapies'],
  ['adverse-effects', 'Treatment side effects & complications'],
  ['nutrition', 'Nutrition'],
  ['assessment', 'Nursing assessment'],
  ['diagnoses', 'Nursing diagnoses'],
  ['priorities', 'Nursing priorities & first action'],
  ['plan', 'Plan of care'],
  ['interventions', 'Nursing management & interventions'],
  ['education', 'Patient education'],
  ['evaluation', 'Evaluation']
].map(([id, title]) => ({ id, title }));

/* The numbered groups follow the faculty study guide; only supplied notes are populated. */
const examTopics = [
  ['parkinsons', 'Parkinson’s disease'],
  ['myasthenia-gravis', 'Myasthenia gravis'],
  ['multiple-sclerosis', 'Multiple sclerosis (MS)'],
  ['als', 'Amyotrophic lateral sclerosis (ALS)'],
  ['meningitis', 'Meningitis'],
  ['guillain-barre', 'Guillain-Barré syndrome (GBS)'],
  ['rheumatoid-arthritis', 'Rheumatoid arthritis (RA)'],
  ['osteoarthritis', 'Osteoarthritis (OA)'],
  ['osteoporosis', 'Osteoporosis'],
  ['gout', 'Gout'],
  ['meniere-disease', 'Ménière’s disease'],
  ['breast-gynecologic-cancers', 'Breast and gynecologic cancers'],
  ['prostate-cancer', 'Prostate cancer'],
  ['hiv', 'HIV and opportunistic infections']
].map(([id, title], index) => ({ id, title, number: index + 1 }));

const conditionNotes = {
  'myasthenia-gravis': {
    title: 'Myasthenia gravis', abbreviation: 'MG', week: 8, deck: 'myasthenia-gravis',
    reviewed: 'November 14, 2026',
    focus: [
      { section: 'manifestations', label: 'Clinical manifestations' },
      { section: 'education', label: 'Pyridostigmine patient instructions' }
    ],
    content: {
      overview: [
        { type: 'paragraph', text: 'Myasthenia gravis (MG) is a chronic autoimmune neuromuscular disorder characterized by fluctuating, fatigable weakness of voluntary skeletal muscles. Weakness typically worsens with repeated activity and improves with rest; it may become more noticeable later in the day.' },
        { type: 'heading', text: 'Normal nerve-to-muscle signaling' },
        { type: 'paragraph', text: 'A motor neuron releases acetylcholine (ACh) into the synaptic cleft. ACh binds to nicotinic ACh receptors on the muscle fiber’s postsynaptic membrane. This opens ion channels, allowing net sodium influx and depolarization. If the threshold is reached, a muscle action potential triggers contraction.' },
        { type: 'heading', text: 'What changes in AChR-antibody MG' },
        { type: 'paragraph', text: 'B cells and antibody-secreting plasma cells produce autoantibodies that interfere with neuromuscular transmission. In AChR-antibody MG, three mechanisms reduce functional receptors:' },
        { type: 'list', items: [
          'Direct receptor blockade: antibodies can interfere with ACh binding to receptors on the postsynaptic membrane.',
          'Accelerated receptor degradation: antibodies cross-link ACh receptors, causing the receptors—not the whole muscle cells—to be internalized and broken down faster than they are replaced.',
          'Complement-mediated damage: antibody binding activates complement, damaging the folded postsynaptic motor endplate and reducing functional receptors and the normal membrane architecture.'
        ] },
        { type: 'paragraph', text: 'The result is a reduced safety margin for neuromuscular transmission. During repetitive activity, normal changes in ACh release can leave the endplate signal too small to trigger contraction. The core problem is postsynaptic transmission failure, rather than MG simply exhausting the body’s ACh stores.' },
        { type: 'paragraph', text: 'These three mechanisms describe AChR-antibody MG. Other subtypes, including MuSK-antibody MG, disrupt neuromuscular signaling differently; the complement mechanism should not be assumed to apply to every subtype.' }
      ],
      manifestations: [
        { type: 'callout', title: 'Hallmark pattern', text: 'Muscle weakness worsens with activity and improves with rest. Look for fluctuating symptoms rather than assuming strength stays the same throughout the day.' },
        { type: 'cards', items: [
          { title: 'Ocular findings', fields: [['Ptosis', 'Drooping of one or both upper eyelids.'], ['Diplopia', 'Double vision: seeing two images of a single object.']] },
          { title: 'Facial and bulbar findings', fields: [['Dysarthria', 'Weakness-related slurred or nasal speech; speech may become harder to sustain with prolonged talking. This is a motor speech problem, not aphasia.'], ['Dysphagia', 'Difficulty swallowing, with chewing fatigue, choking, or aspiration risk.'], ['Facial weakness', 'Reduced facial movement or expression.']] },
          { title: 'Limb, neck, and respiratory findings', fields: [['Proximal weakness', 'Difficulty lifting the arms, performing activities of daily living, or maintaining activity.'], ['Neck weakness', 'Difficulty holding the head upright.'], ['Respiratory weakness', 'Dyspnea, weak cough, difficulty clearing secretions, or progression to a myasthenic crisis.']] }
        ] },
        { type: 'paragraph', text: 'New or worsening breathing difficulty, inability to handle secretions, or severe swallowing difficulty requires immediate emergency assessment.' }
      ],
      risk: [
        { type: 'heading', text: 'Risk factors and associations' },
        { type: 'list', items: ['Thymic hyperplasia or thymoma, particularly in AChR-antibody MG.', 'A personal history of other autoimmune disorders.', 'Genetic susceptibility can contribute, but acquired autoimmune MG is usually not directly inherited. Congenital myasthenic syndromes are different disorders.'] },
        { type: 'heading', text: 'Reduce exacerbation risk' },
        { type: 'paragraph', text: 'These measures help reduce flares and complications; they are not proven methods of preventing autoimmune MG itself.' },
        { type: 'list', items: ['Reduce exposure to infection and follow the care team’s infection-prevention plan.', 'Avoid overheating, excessive exertion, and unnecessary stress; plan rest periods.', 'Check with the provider or pharmacist before starting prescription drugs, over-the-counter medicines, supplements, or herbal products that could worsen weakness.'] },
        { type: 'heading', text: 'Early recognition' },
        { type: 'paragraph', text: 'Notice whether weakness increases with activity and improves with rest. Ptosis and diplopia often appear early. Ask about changes in speech, chewing, and swallowing. A weak cough, dyspnea, or difficulty managing secretions needs urgent assessment, especially when new or worsening.' }
      ],
      diagnostics: [
        { type: 'paragraph', text: 'Your notes cover six important test groups. Antibody and electrodiagnostic studies help establish the diagnosis; breathing tests assess respiratory strength and chest imaging evaluates the thymus. They are not interchangeable diagnostic tests.' },
        { type: 'cards', items: [
          { title: '1. Antibody blood tests', fields: [['Purpose', 'Identify antibodies affecting the neuromuscular junction, starting with AChR antibodies; MuSK and other testing may follow when appropriate.'], ['Findings', 'A positive result can support MG. Negative antibody testing does not exclude it, especially with ocular disease or seronegative MG.'], ['Nursing considerations', 'Explain the purpose, collect and label the specimen correctly, and reinforce that results are interpreted with symptoms and other tests.']] },
          { title: '2. Repetitive nerve stimulation (RNS)', fields: [['Purpose', 'Repeated small electrical stimuli assess the muscle’s electrical response.'], ['Findings', 'A decrement in the recorded muscle response can support impaired neuromuscular transmission. A normal study does not exclude MG.'], ['Nursing considerations', 'Explain the procedure and document baseline strength. Hold pyridostigmine or other MG medication only when specifically ordered for testing.']] },
          { title: '3. Single-fiber electromyography (SFEMG)', fields: [['Purpose', 'A fine needle electrode records individual muscle-fiber responses and variation in transmission timing, called jitter.'], ['Findings', 'This is a highly sensitive test for a neuromuscular transmission defect, but abnormal jitter is not unique to MG.'], ['Nursing considerations', 'Explain the needle procedure and check puncture sites for bleeding or bruising afterward.']] },
          { title: '4. Ice pack test', fields: [['Purpose', 'Assess whether cooling improves ptosis.'], ['Findings', 'The eyelid opening is measured before and after a wrapped ice pack is applied for approximately 2–5 minutes according to the clinician’s protocol. Improvement supports MG but is not a standalone diagnosis.'], ['Nursing considerations', 'Protect the skin with a cloth barrier and document the eyelid position before and after.']] },
          { title: '5. Breathing tests: FVC and NIF', fields: [['Purpose', 'Forced vital capacity (FVC) and negative inspiratory force (NIF) help assess respiratory muscle strength and the risk of respiratory failure.'], ['Findings', 'Falling FVC or a NIF that becomes less negative indicates worsening strength. Interpret trends with the clinical picture; a normal oxygen saturation does not rule out dangerous respiratory muscle weakness.'], ['Nursing considerations', 'Monitor respiratory effort and cough, repeat measurements as ordered, and report deterioration promptly. Do not wait for oxygen saturation to fall before escalating concern.']] },
          { title: '6. Chest CT or MRI', fields: [['Purpose', 'Evaluate the thymus for thymoma or other abnormalities.'], ['Findings', 'A thymoma prompts specialist evaluation and consideration of thymectomy.'], ['Nursing considerations', 'Explain the scan. If contrast is planned, check prior reactions to the specific contrast agent and renal function as required by protocol. Monitor for reactions; for MRI, complete implant and metal screening.']] }
        ] }
      ],
      medical: [
        { type: 'heading', text: 'Overall treatment approach' },
        { type: 'list', items: ['Improve neuromuscular transmission for symptom relief, usually with pyridostigmine.', 'Reduce the autoimmune attack with corticosteroids, steroid-sparing immunosuppressants, or selected targeted therapies.', 'Evaluate thymectomy when indicated.', 'Use IV immunoglobulin (IVIG) or therapeutic plasma exchange (PLEX) for rapid improvement when clinically indicated.'] },
        { type: 'heading', text: 'Thymectomy' },
        { type: 'paragraph', text: 'Surgical removal of the thymus is generally considered for thymoma and for selected patients with AChR-antibody-positive generalized MG, including patients without thymoma. It can improve disease control and reduce steroid requirements. It is not an immediate rescue treatment, and eligibility depends on antibody status, age, disease course, and specialist assessment; it is not routine treatment for every MG subtype.' },
        { type: 'heading', text: 'Rapid therapies and crisis care' },
        { type: 'paragraph', text: 'PLEX removes circulating antibodies, while IVIG modifies immune activity. Both can act faster than long-term immunosuppressants; benefits are usually temporary, often lasting weeks. They may be used for severe exacerbations, crisis, selected preoperative situations, or as a bridge while longer-term treatment takes effect.' },
        { type: 'paragraph', text: 'Myasthenic crisis requires urgent airway and respiratory support, often intensive care. Prepare for intubation and mechanical ventilation if ventilation or airway protection fails, and for IVIG or PLEX as ordered. Oxygen alone does not correct inadequate ventilation. During an intubated crisis, the specialist team may temporarily hold pyridostigmine because it increases secretions; it should not simply be increased automatically.' }
      ],
      medications: [
        { type: 'cards', items: [
          { title: 'Acetylcholinesterase inhibitors', fields: [['Examples', 'Pyridostigmine (Mestinon); neostigmine is an alternative in selected situations.'], ['Action and purpose', 'Inhibit ACh breakdown so ACh remains available longer at the neuromuscular junction. They improve strength and symptoms but do not suppress the autoimmune disease process.'], ['Administration', 'Give exactly on schedule. Immediate-release oral pyridostigmine is commonly timed 30–60 minutes before meals when chewing or swallowing weakness is present, following the individual prescription. The meal-timing instruction is not for prednisone.'], ['Watch for', 'Excess salivation, abdominal cramping, diarrhea, bradycardia, and increasing weakness. Excess medication can cause cholinergic crisis.']] },
          { title: 'Corticosteroids', fields: [['Example', 'Prednisone.'], ['Action and purpose', 'Suppress immune activity for longer-term disease control.'], ['Administration and monitoring', 'Starting or increasing steroids can temporarily worsen MG. Initiation and titration require close supervision, particularly with bulbar or respiratory weakness. Monitor treatment effects and adverse effects rather than applying pyridostigmine’s meal-timing rule.']] },
          { title: 'Non-steroidal immunosuppressants', fields: [['Examples', 'Azathioprine, mycophenolate, cyclosporine, and tacrolimus; methotrexate is a selected later-line option with more limited evidence in MG.'], ['Action and purpose', 'Provide longer-term control and reduce reliance on corticosteroids.'], ['What to expect', 'These are not rescue medicines. Azathioprine may take months to provide benefit. Monitoring and selection depend on the drug and specialist plan.']] },
          { title: 'Rituximab and other targeted therapies', fields: [['Rituximab', 'A B-cell-directed therapy with an important role in MuSK-antibody MG and selected generalized MG. Specialist guidance determines use; it is not restricted exclusively to MuSK-positive disease.'], ['Other targeted therapies', 'Complement-pathway and neonatal Fc receptor (FcRn) therapies are additional options for selected generalized MG. Eligibility depends on the specific medicine, antibody profile, and current prescribing information.'], ['Clarification', 'The dictated name “Enrichromax” could not be identified reliably. Rituximab is included here because it fits the described B-cell/MuSK treatment role, not because the original drug name has been proven.']] },
          { title: 'Acute rescue therapies', fields: [['Examples', 'IVIG and therapeutic plasma exchange (PLEX).'], ['Purpose', 'Rapid immune-directed treatment for severe flares or myasthenic crisis. IVIG alters immune activity; PLEX removes antibodies. PLEX is a procedure rather than an oral medication.'], ['Clarification', '“Methotrexate crisis” was corrected to “myasthenic crisis.” Methotrexate is not an acute rescue treatment.']] }
        ] },
        { type: 'heading', text: 'Medicines that can worsen MG' },
        { type: 'paragraph', text: 'Aminoglycosides, fluoroquinolones, beta blockers, and magnesium—especially IV magnesium—can worsen weakness. Fluoroquinolones carry an MG warning. These are not all blanket contraindications in every circumstance: the prescriber must weigh the specific drug’s risks, alternatives, and monitoring needs. Check before giving a new medicine and report worsening symptoms.' }
      ],
      nonpharmacological: [
        { type: 'heading', text: 'Energy conservation and pacing' },
        { type: 'paragraph', text: 'Schedule frequent rests before fatigue becomes severe. Plan meals and important activities during periods of greatest strength and peak medication effect. Balance activity with rest rather than pushing through worsening weakness.' },
        { type: 'heading', text: 'Ocular support' },
        { type: 'paragraph', text: 'An eye patch may relieve diplopia. If patching is recommended, follow eye-care advice about alternating eyes and duration; “every few hours” is not a universal prescription. Use recommended lubricating drops or ointment for dryness. If the eyelids do not fully close, protective closure or taping at night may be advised after the patient is taught a safe technique.' },
        { type: 'heading', text: 'Respiratory support' },
        { type: 'paragraph', text: 'Trend FVC and NIF, assess breathing and secretion clearance, and provide respiratory support according to the care plan. Incentive spirometry may be ordered as an adjunct in appropriate patients, but it does not treat myasthenic crisis or replace assisted ventilation. Worsening respiratory weakness requires prompt escalation and possible ventilatory support.' }
      ],
      'adverse-effects': [
        { type: 'heading', text: 'Cholinergic effects of acetylcholinesterase inhibitors' },
        { type: 'list', items: ['Abdominal cramping, diarrhea, and nausea.', 'Increased salivation and bronchial secretions.', 'Sweating and tearing.', 'Miosis: constricted or pinpoint pupils, rather than mydriasis.', 'Bradycardia.', 'Muscle cramping, twitching, and weakness may also occur.'] },
        { type: 'paragraph', text: 'Excess acetylcholinesterase inhibitor can cause cholinergic crisis with profound weakness and respiratory failure. Worsening weakness must be assessed before assuming that another dose is needed. Atropine can treat muscarinic effects such as bradycardia and secretions when ordered, but it does not reverse skeletal-muscle paralysis or replace respiratory support.' },
        { type: 'heading', text: 'Corticosteroids and other immunosuppressants' },
        { type: 'paragraph', text: 'Steroids may transiently worsen weakness when started; longer-term concerns include infection, hyperglycemia, mood changes, and bone loss. Other immunosuppressants require drug-specific surveillance, including blood counts and organ-function tests as ordered.' },
        { type: 'heading', text: 'IVIG' },
        { type: 'list', items: ['Headache and infusion reactions.', 'Thromboembolism.', 'Renal dysfunction or acute kidney injury.', 'Fluid overload in susceptible patients.', 'Severe hypersensitivity or anaphylaxis. IgA deficiency alone does not mean anaphylaxis is inevitable; risk assessment includes anti-IgA antibodies, previous reactions, and the specific product.'] },
        { type: 'heading', text: 'Therapeutic plasma exchange' },
        { type: 'list', items: ['Hypotension.', 'Hypocalcemia, often associated with citrate anticoagulation.', 'Bleeding or changes in coagulation.', 'Vascular-access or central-line infection; this is not limited to a limb site.'] },
        { type: 'paragraph', text: 'Monitor vital signs, access sites, symptoms, laboratory results, and infusion/procedure tolerance as ordered. “Acute infusion crisis” is not a single shared diagnosis for IVIG and PLEX; recognize the specific adverse reaction and respond according to the treatment protocol.' }
      ],
      nutrition: [
        { type: 'paragraph', text: 'Chewing and swallowing fatigue can lead to aspiration, dehydration, and malnutrition. Individualize nutrition with the dietitian and speech-language pathologist when swallowing is affected.' },
        { type: 'list', items: ['Offer small, frequent meals—such as five or six smaller eating opportunities if suitable—rather than large meals that exhaust the patient.', 'When prescribed, time immediate-release pyridostigmine approximately 30–60 minutes before eating so meals coincide with improved strength.', 'Rest before eating and sit fully upright, usually close to 90° when tolerated, following the swallowing plan.', 'Use soft, moist, easy-to-chew foods when appropriate. Calorie-dense foods can help if intake or weight is low; they are not required for every patient.', 'Food texture and liquid thickness must follow the individual swallowing assessment. Soft food alone does not guarantee aspiration safety.', 'Provide adequate protein and balanced nutrition. With long-term corticosteroid therapy, address calcium, vitamin D, and bone protection with the care team. Testosterone is not a standard reason for this MG nutrition recommendation.'] }
      ],
      assessment: [
        { type: 'cards', items: [
          { title: 'Breathing and airway clearance', fields: [['Assess and monitor', 'Respiratory rate, depth, effort, speech tolerance, orthopnea, cough strength, ability to handle secretions, and serial FVC/NIF as ordered.'], ['Escalate', 'Report worsening effort, decreasing FVC, less-negative NIF, weak cough, or inability to clear secretions. Normal pulse oximetry does not exclude respiratory failure risk.']] },
          { title: 'Swallowing and nutrition', fields: [['Assess and monitor', 'Chewing fatigue, coughing/choking, voice change with intake, swallowing difficulty, hydration, weight, and food intake.'], ['Act on findings', 'Use the swallowing screen and referral pathway. If oral intake is unsafe, stop oral food, fluids, and medicines and urgently obtain an alternative medication/nutrition plan. An intact gag reflex alone does not establish safe swallowing.']] },
          { title: 'Strength, fatigue, and safety', fields: [['Assess and monitor', 'Ptosis, diplopia, speech changes, neck/proximal weakness, grip, gait, fall risk, and performance of daily activities. Compare strength before and after prescribed medication.'], ['Prevent injury', 'Identify burn risk from a weak grip and the need for walking aids or adaptive tools.']] },
          { title: 'Treatment response and crisis readiness', fields: [['Assess and monitor', 'Exact medication times, missed doses, recent medicine changes, infections, increasing weakness, bradycardia, excessive secretions, and gastrointestinal symptoms.'], ['Prepare', 'Ensure access to suction, oxygen when indicated, and emergency airway equipment. Have ordered emergency medicines available; atropine is for selected cholinergic effects, not routine treatment of all MG weakness.']] }
        ] }
      ],
      diagnoses: [
        { type: 'paragraph', text: 'Choose nursing diagnoses from the patient’s actual assessment findings and the terminology used by your program. Examples from your notes include:' },
        { type: 'list', items: ['Ineffective breathing pattern related to diaphragm/intercostal muscle weakness.', 'Ineffective airway clearance related to a weak cough and difficulty clearing retained secretions.', 'Risk for aspiration related to dysphagia and impaired airway protection.', 'Activity intolerance and fatigue related to fatigable muscle weakness.'] }
      ],
      priorities: [
        { type: 'callout', title: 'The nurse’s first action', text: 'Assess airway and respiratory status. With respiratory distress or inability to protect the airway, activate the emergency response while supporting airway and breathing.' },
        { type: 'list', items: ['Airway and breathing: assess respiratory effort, FVC/NIF trends, cough, and secretion clearance. Escalate deterioration early.', 'Aspiration prevention: assess swallowing before oral intake, use the prescribed swallowing plan, position upright, and keep suction available. A gag check alone is insufficient.', 'Medication timing: give prescribed pyridostigmine on time and coordinate meals and activity with its effect. Check for both undertreated MG and medication toxicity instead of automatically adding medication for weakness.'] },
        { type: 'heading', text: 'Myasthenic versus cholinergic crisis' },
        { type: 'cards', items: [
          { title: 'Myasthenic crisis', fields: [['What it is', 'Severe worsening of MG causing respiratory failure or inability to protect the airway. It can be triggered by infection, surgery, stress, medication changes, or inadequate treatment; it is not defined simply as “too little medicine.”'], ['Management principle', 'Urgent respiratory support, evaluation of triggers, and specialist-directed treatment such as IVIG or PLEX. Pyridostigmine decisions depend on the situation, especially when intubated.']] },
          { title: 'Cholinergic crisis', fields: [['What it is', 'Excess acetylcholinesterase inhibitor causing weakness, potentially respiratory failure, with cholinergic features such as secretions, diarrhea, cramping, bradycardia, or miosis.'], ['Management principle', 'Emergency respiratory support and withholding the causative drug under urgent clinical direction; atropine may treat muscarinic effects. It does not reverse the muscle weakness.']] }
        ] },
        { type: 'paragraph', text: 'Both are emergencies. Their medication management differs, but airway and breathing remain priorities in both. Patients should not self-diagnose the type of crisis or adjust doses to test which one it is.' }
      ],
      plan: [
        { type: 'paragraph', text: 'Turn the identified problems into patient-centered outcomes with an agreed time frame. The plan should describe what the patient will achieve, while the interventions section describes what the nurse will do.' },
        { type: 'list', items: ['Maintain effective ventilation and airway clearance, with stable or improving respiratory assessments and FVC/NIF trends.', 'Maintain safe intake using the agreed swallowing plan, without observed choking or clinical evidence of aspiration, and meet individualized hydration and nutrition goals.', 'Complete selected daily activities with planned rest and appropriate assistance, without unsafe exhaustion or injury.', 'Explain and demonstrate the prescribed medication schedule, meal timing, missed-dose instructions, and recognition of emergency symptoms using teach-back.', 'Identify a support person when desired and describe how to obtain practical or emotional support.'] },
        { type: 'paragraph', text: 'Medication timing, hands-on practice, mood screening, and family involvement from your original “plan of care” notes are retained in the intervention and education sections below.' }
      ],
      interventions: [
        { type: 'heading', text: 'Build practical self-management skills' },
        { type: 'list', items: ['Assess what the patient already knows, what they can physically do, and where the gaps are.', 'Practice medication administration and symptom monitoring hands-on. Ask the patient to demonstrate the task rather than only repeat facts.', 'Use teach-back and clear written instructions for the schedule, warning signs, and when to seek help; handouts alone do not establish understanding.', 'Time medication, meals, and important activities around the patient’s prescribed regimen and strongest periods.', 'Arrange regular follow-up to reassess illness progression, treatment response, and changing needs.'] },
        { type: 'heading', text: 'Home safety and energy conservation' },
        { type: 'list', items: ['Remove loose rugs and clutter.', 'Consider shower grab bars and a shower chair.', 'Use a lidded mug for hot drinks and adaptive equipment for weak grip.', 'Plan rest before demanding tasks and keep frequently used items within reach.', 'Arrange walking aids and other support when indicated by assessment.'] },
        { type: 'heading', text: 'Emotional and caregiver support' },
        { type: 'paragraph', text: 'Screen for depression and anxiety and assess how symptoms affect coping and daily function. The original “about one third” estimate should not be treated as a fixed rate for every MG population. Offer referral and support according to findings. Include family or caregivers with the patient’s consent, teach symptom recognition and medication support, and assess caregiver strain to help prevent burnout.' }
      ],
      education: [
        { type: 'heading', text: 'Pyridostigmine: patient instructions' },
        { type: 'cards', items: [
          { title: 'Take it on time', fields: [['Teach', 'Follow the exact prescribed schedule. Missing or delaying medication may cause marked weakness. Do not stop or change the dose without the prescriber’s guidance; new severe weakness needs assessment, not an automatic extra dose.']] },
          { title: 'Coordinate with meals', fields: [['Teach', 'Immediate-release pyridostigmine is often prescribed 30–60 minutes before meals for chewing/swallowing weakness. Follow the individual plan. If it causes stomach upset, ask the pharmacist about taking it with a small snack or milk that is safe for the prescribed swallowing plan.']] },
          { title: 'Check the formulation', fields: [['Teach', 'Swallow extended-release/Timespan tablets whole; do not crush or chew them. Do not substitute formulations or crush medication for dysphagia without pharmacist guidance. An alternative formulation or route may be needed.']] },
          { title: 'Never double a missed dose', fields: [['Teach', 'Take a missed dose when remembered unless it is nearly time for the next dose; then skip it and follow the usual schedule. Never take two doses to make up for one. Follow formulation-specific instructions; extended-release dosing has different spacing requirements.']] },
          { title: 'Recognize emergency symptoms', fields: [['Teach', 'Seek immediate care for breathing difficulty, inability to clear secretions, severe or worsening swallowing difficulty, or sudden marked weakness. Severe cramping, diarrhea, heavy drooling, or slow heart rate with weakness may signal excessive cholinergic effects. Do not wait for every symptom to appear.']] },
          { title: 'Use safety precautions', fields: [['Teach', 'Wear a Medical Alert ID. Tell healthcare professionals about MG and check with the provider or pharmacist before adding any prescription, OTC medicine, supplement, or herbal product. Keep an up-to-date medication list.']] }
        ] },
        { type: 'heading', text: 'Include the patient’s support system' },
        { type: 'paragraph', text: 'With consent, teach family and caregivers how to support the schedule, recognize warning signs, and seek help. Confirm understanding with teach-back and a practical demonstration, including how the patient will manage fatigue or an unsafe swallow.' }
      ],
      evaluation: [
        { type: 'list', items: ['Respiratory and airway stability: breathing is comfortable, respiratory measurements are stable or improving, cough and secretion clearance are effective, and swallowing follows the safe-intake plan. Absence of coughing alone does not rule out silent aspiration.', 'Bulbar and ocular improvement: ptosis or diplopia is reduced, speech is clearer or more sustained, and chewing/swallowing function improves. Complete resolution of every symptom is not required to demonstrate progress.', 'Increased endurance: the patient can hold the head upright, lift the arms, and perform selected activities of daily living with less fatigue and planned rest.', 'Appropriate medication response: strength improves in the expected period after the prescribed pyridostigmine dose, often around 30–60 minutes for immediate-release medicine, without excessive cholinergic effects. A higher dose is not itself a measure of success.', 'Fewer complications: no progression to myasthenic or cholinergic crisis, aspiration-related complications, preventable injury, or serious treatment reaction.', 'Self-management: the patient/caregiver demonstrates the medication routine, correctly explains warning signs and missed-dose instructions, and identifies available support.'] }
      ]
    },
    clarifications: [
      { title: 'Muscles, signaling, and speech', text: 'Corrected “involuntary” to voluntary skeletal muscles; clarified sodium-driven depolarization and receptor degradation rather than destruction of whole muscle cells. Replaced the ACh-store depletion explanation with impaired transmission. Corrected “aphasia” to dysarthria in the speech description.' },
      { title: 'Medication names and timing', text: 'Corrected “mestonin” to Mestinon (pyridostigmine) and moved the premeal timing instruction from prednisone to immediate-release pyridostigmine. “Enrichromax” and “mine metopan” are not reliably identifiable drug names: the described MuSK/B-cell treatment role is covered with rituximab, and response assessment uses prescribed pyridostigmine. These are evidence-based replacements, not confirmed transcriptions of the original words.' },
      { title: 'Crises and emergency care', text: 'Corrected “methotrexate crisis” to myasthenic crisis and removed the rule that myasthenic crisis always means too little medication. Airway support comes first in either crisis. Atropine treats muscarinic toxicity, not skeletal paralysis; oxygen or incentive spirometry alone does not treat ventilatory failure.' },
      { title: 'Pupils, positioning, and swallowing', text: 'Replaced mydriasis with miosis in cholinergic toxicity. Corrected “9°” to fully upright positioning, usually close to 90° when tolerated. Replaced gag-reflex-only clearance and automatic soft-food advice with individualized swallowing assessment. Clarified that less-negative NIF is deterioration.' },
      { title: 'Nutrition and treatment reactions', text: 'Kept the protein/calcium/vitamin D and bone-health concepts with appropriate individualized guidance for corticosteroid care; testosterone is not a standard MG nutrition indication. Replaced “acute infusion crisis,” “central line infection on the limb,” “chloride overdose,” and “anaphylactic crisis” as a disease outcome with the specific adverse effects or MG/cholinergic complications described above.' },
      { title: 'Context-dependent details', text: 'Retained smaller meals, ocular care, mood screening, and family support. Five or six meals and alternating an eye patch every few hours are options rather than universal rules. A fixed “one third” depression/anxiety prevalence was not established for all MG populations. Drug cautions, thymectomy, and immunotherapies are presented as individualized decisions rather than absolute rules for every patient.' }
    ],
    references: [
      { title: 'NIH / NINDS · Myasthenia gravis', url: 'https://www.ninds.nih.gov/sites/default/files/2025-05/myasthenia-gravis.pdf', supports: 'Overview, symptoms, risk associations, diagnostic evaluation, and crisis triggers.' },
      { title: 'MGFA · Diagnosing MG', url: 'https://myasthenia.org/understanding-mg/diagnosing-mg/', supports: 'Antibody tests, ice pack test, electrodiagnostic testing, and chest imaging.' },
      { title: 'Autoimmune MG: clinical and biological heterogeneity', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2730933/', supports: 'AChR receptor blockade, internalization, complement injury, and subtype differences.' },
      { title: 'ABN · MG management guidelines, 2025 update', url: 'https://pubmed.ncbi.nlm.nih.gov/40940171/', supports: 'Contemporary treatment framework, thymectomy, rituximab, and newer targeted pathways.' },
      { title: 'International Consensus Guidance · 2020 update', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7884987/', supports: 'Rituximab in MuSK MG, selected methotrexate use, and thymectomy considerations.' },
      { title: 'Guideline for the management of myasthenic syndromes · 2023', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10752078/', supports: 'Antibody-directed treatment choices, immunosuppressants, and rescue therapies.' },
      { title: 'DailyMed · Mestinon prescribing information', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a851795e-b7a8-40c3-9922-5e79d3eb4d92', supports: 'Mechanism, formulations, cholinergic effects, and medication toxicity.' },
      { title: 'Mestinon · Summary of Product Characteristics', url: 'https://www.medicines.org.uk/emc/product/962/smpc', supports: 'Onset of effect, miosis, interactions, and muscarinic effects of overdose.' },
      { title: 'MedlinePlus · Pyridostigmine', url: 'https://medlineplus.gov/druginfo/meds/a682229.html', supports: 'Patient instructions, extended-release tablets, and missed doses.' },
      { title: 'NHS · Pyridostigmine for MG', url: 'https://www.rightdecisions.scot.nhs.uk/media/2616/1061-pyridostigmine-for-myasthenia-gravis.pdf', supports: 'Individualized scheduling and timing before meals.' },
      { title: 'MGFA · Emergency management', url: 'https://myasthenia.org/understanding-mg/learn-more-about-mg-treatments/mg-brochures/emergency-management-for-first-responders/', supports: 'Airway priorities, serial FVC/NIF, pulse-oximetry limitations, and ventilatory support.' },
      { title: 'MGFA · Cautionary drugs', url: 'https://myasthenia.org/wp-content/uploads/2024/09/MGFA-Cautionary-Drug-List.pdf', supports: 'Antibiotics, beta blockers, magnesium, and risk-benefit decisions.' },
      { title: 'MGFA · General MG management', url: 'https://myasthenia.org/living-with-mg/after-your-diagnosis/general-mg-management/', supports: 'Swallowing, meal planning, self-management, and calcium/vitamin D with steroid use.' },
      { title: 'Alberta Health Services · Eating and swallowing safely', url: 'https://myhealth.alberta.ca/Health/aftercareinformation/pages/conditions.aspx?hwid=custom.ab_eating_swallowing_inst', supports: 'Upright positioning and individualized food/liquid consistency.' },
      { title: 'FDA · Privigen (IVIG) prescribing information', url: 'https://www.fda.gov/media/83304/download', supports: 'Thrombosis, renal dysfunction, fluid overload, and hypersensitivity/IgA precautions.' },
      { title: 'UCLH · Plasma exchange service', url: 'https://www.uclh.nhs.uk/patients-and-visitors/patient-information-pages/plasma-exchange-service-nhnn', supports: 'Hypotension, electrolyte changes, bleeding, and vascular-access care.' },
      { title: 'Myasthenia Alliance Australia · Lifestyle tips', url: 'https://www.myasthenia.org.au/patient-support/lifestyle/', supports: 'Patching for diplopia, lubricants, and protective eyelid care.' }
    ]
  }
};
