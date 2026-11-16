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
  hiv: {
    "title": "HIV & opportunistic infections",
    "abbreviation": "HIV / AIDS",
    "week": 12,
    "reviewed": "November 15, 2026",
    "reading": "Course study guide, Topic 14: HIV—opportunistic infections, PEP and PrEP, and education for partners with different HIV statuses. Combines your Week 12 notes with the supplied high-yield focus; repeated points are consolidated and missing nursing-process sections completed. Current clinical references and correction notes follow the study content and existing videos.",
    "focus": [
      {
        "section": "manifestations",
        "label": "Opportunistic infections"
      },
      {
        "section": "medical",
        "label": "PEP vs. PrEP"
      },
      {
        "section": "medications",
        "label": "PrEP & OI medicines"
      },
      {
        "section": "education",
        "label": "Partner education: U = U"
      }
    ],
    "content": {
      "overview": [
        {
          "type": "paragraph",
          "text": "HIV (human immunodeficiency virus) is a retrovirus that progressively impairs cell-mediated immunity by infecting and depleting CD4+ T lymphocytes. It also infects cells of the monocyte/macrophage lineage. Viral RNA is reverse-transcribed into DNA and integrated into host DNA; latent reservoirs persist despite effective treatment. ART suppresses replication and allows immune recovery but does not eradicate HIV."
        },
        {
          "type": "paragraph",
          "text": "HIV-1 causes most infections worldwide; HIV-2 is less common and concentrated in West Africa, with different testing and treatment considerations. The viral life cycle (binding, fusion, reverse transcription, integration, replication, assembly, and budding) is different from the clinical stages of infection."
        },
        {
          "type": "cards",
          "items": [
            {
              "title": "Acute infection",
              "fields": [
                [
                  "What happens",
                  "Early high-level replication may cause a flu/mononucleosis-like illness, although symptoms can be absent. A negative antibody-only test does not exclude acute infection."
                ]
              ]
            },
            {
              "title": "Chronic infection",
              "fields": [
                [
                  "What happens",
                  "Symptoms may be absent for years, especially with treatment. Without effective ART, ongoing replication and immune damage can lead to advanced disease."
                ]
              ]
            },
            {
              "title": "AIDS / advanced HIV",
              "fields": [
                [
                  "Definition",
                  "In a person with HIV, CD4 <200 cells/mm³ or an AIDS-defining illness establishes AIDS, even if the CD4 count is above 200. CDC surveillance staging also uses age-specific criteria and CD4 percentage; it is not the viral life cycle."
                ]
              ]
            }
          ]
        },
        {
          "type": "callout",
          "title": "CD4 count and viral load answer different questions",
          "text": "CD4 reflects immune function and helps guide OI prevention. HIV RNA viral load measures replication and response to ART. OIs do not suddenly begin only below 200: risk varies by organism, prior exposure, treatment, and immune status; TB can occur at any CD4 count."
        }
      ],
      "manifestations": [
        {
          "type": "heading",
          "text": "General and early findings"
        },
        {
          "type": "list",
          "items": [
            "Acute HIV may cause fever, rash, sore throat, lymphadenopathy, fatigue, myalgia, or diarrhea. These findings are nonspecific; test according to the exposure and clinical picture.",
            "Advanced untreated disease may cause recurrent infections, persistent fever/night sweats, weight loss, chronic diarrhea, oral lesions, fatigue, and neurological changes. Effective ART greatly reduces these complications."
          ]
        },
        {
          "type": "heading",
          "text": "Exam focus: opportunistic infections"
        },
        {
          "type": "cards",
          "items": [
            {
              "title": "Pneumocystis jirovecii pneumonia (PCP / PJP)",
              "fields": [
                [
                  "Typical risk",
                  "Most cases occur with CD4 <200 cells/mm³, especially without effective ART or prophylaxis."
                ],
                [
                  "Recognize",
                  "Progressive dyspnea, dry/nonproductive cough, fever, chest discomfort, and hypoxemia. Diffuse interstitial/ground-glass changes may occur; early chest X-ray can be normal. Worsening oxygenation needs urgent assessment."
                ]
              ]
            },
            {
              "title": "Candidiasis",
              "fields": [
                [
                  "Oral thrush",
                  "Creamy, cottage-cheese-like white plaques on tongue/buccal mucosa/palate that can be scraped away, leaving a red base."
                ],
                [
                  "Esophageal / genital",
                  "Odynophagia (painful swallowing), dysphagia, or retrosternal discomfort suggests esophageal disease, which may occur without oral thrush. Vulvovaginal candidiasis can cause itching/burning and white discharge; oral or vaginal candidiasis alone is not an AIDS-defining illness, whereas esophageal candidiasis is."
                ]
              ]
            },
            {
              "title": "Toxoplasma encephalitis",
              "fields": [
                [
                  "Typical risk",
                  "Reactivation is especially associated with CD4 <100 cells/mm³ and prior Toxoplasma infection."
                ],
                [
                  "Recognize",
                  "Headache, confusion, seizures, focal weakness/neurological deficits; brain imaging commonly shows multiple ring-enhancing lesions, but imaging is not diagnostic by itself."
                ]
              ]
            },
            {
              "title": "Disseminated Mycobacterium avium complex (MAC)",
              "fields": [
                [
                  "Typical risk",
                  "Usually CD4 <50 cells/mm³ with uncontrolled HIV."
                ],
                [
                  "Recognize",
                  "Persistent fever, night sweats, weight loss, fatigue, chronic diarrhea, abdominal pain, and sometimes anemia. Disseminated MAC is a systemic infection, not simply another name for pneumonia."
                ]
              ]
            },
            {
              "title": "Cytomegalovirus (CMV) retinitis",
              "fields": [
                [
                  "Typical risk",
                  "Usually CD4 <50 cells/mm³, particularly without effective ART."
                ],
                [
                  "Recognize",
                  "Floaters, blurred/failing vision, field defects, or painless progressive visual loss. The notes’ four Fs are floaters, flashes, field deficits, and failing vision. Hemorrhagic yellow-white retinal lesions are sometimes described as “pizza-pie” changes. New visual symptoms need urgent ophthalmology assessment."
                ]
              ]
            },
            {
              "title": "Cryptococcal meningitis",
              "fields": [
                [
                  "Typical risk",
                  "Advanced immunosuppression, often CD4 <100 cells/mm³."
                ],
                [
                  "Recognize",
                  "Subacute severe headache, fever, altered mental status, nausea/vomiting, or visual symptoms. Neck stiffness may be absent; do not wait for the complete classic meningitis triad. Raised intracranial pressure can be life-threatening."
                ]
              ]
            },
            {
              "title": "Tuberculosis (TB)",
              "fields": [
                [
                  "Typical risk",
                  "Active TB can occur at any CD4 count; advanced immune deficiency increases disseminated/extrapulmonary disease and atypical findings."
                ],
                [
                  "Recognize",
                  "Persistent cough, fever, night sweats, weight loss, or organ-specific extrapulmonary findings. Suspected infectious pulmonary/laryngeal TB requires airborne precautions while evaluated."
                ]
              ]
            }
          ]
        },
        {
          "type": "heading",
          "text": "Other findings retained from Week 12"
        },
        {
          "type": "list",
          "items": [
            "GI illness: anorexia, nausea/vomiting, diarrhea, and malabsorption. Potential causes include Cryptosporidium, Salmonella, Shigella, CMV, C. difficile, MAC, medicines, and noninfectious disorders. Persistent diarrhea can cause dehydration, electrolyte loss, perineal skin damage, weakness, and impaired ADLs.",
            "HIV wasting syndrome: involuntary loss of >10% of body weight with chronic diarrhea or prolonged weakness and fever for >30 days, after excluding another cause. Low intake, infection, depression, adverse effects, malabsorption, inflammation, and altered metabolism can contribute. Frailty and weight/metabolic problems also deserve assessment in treated HIV.",
            "HIV-associated neurocognitive disorders (HAND) affect cognition, behavior, or motor function; HIV-associated dementia is the severe form. Memory/concentration problems and psychomotor slowing warrant assessment. New confusion, hallucinations, seizures, or incontinence require evaluation for OI, delirium, medicines, metabolic disease, and other causes rather than an automatic dementia diagnosis.",
            "Peripheral neuropathy may cause painful/numb hands or feet and impair balance/ADLs. HIV, selected older ARVs, nutritional problems, diabetes, and other causes should be considered.",
            "Progressive multifocal leukoencephalopathy (PML): JC-virus reactivation causes CNS demyelination, often with progressive focal weakness, visual change, aphasia, or ataxia. Effective ART is central; there is no proven specific anti-JC-virus cure.",
            "Kaposi sarcoma: HHV-8-associated malignancy with often painless purple/brown vascular skin or mucosal lesions; internal disease can affect lungs/GI tract. It is a cancer, not itself an OI. Other HIV-associated cancers include lymphoma and invasive cervical cancer."
          ]
        }
      ],
      "risk": [
        {
          "type": "heading",
          "text": "Transmission and prevention"
        },
        {
          "type": "list",
          "items": [
            "HIV can be transmitted through blood, semen/pre-seminal fluid, vaginal/rectal fluids, and breast milk when an infectious fluid reaches susceptible mucosa, damaged tissue, or the bloodstream. Routes include sexual exposure without effective prevention, shared injection equipment, and pregnancy/birth/breastfeeding. Occupational sharps and mucosal/nonintact-skin exposures require immediate assessment. Potentially infectious occupational fluids, including amniotic fluid and certain other normally sterile fluids, are evaluated under the exposure protocol.",
            "HIV is not transmitted by ordinary touching, sharing toilets/utensils, air/water, insects, or saliva alone. Standard Precautions apply in healthcare; HIV status alone is not a reason for Contact Precautions or social isolation.",
            "Effective ART and sustained viral suppression prevent sexual transmission (U = U). Offer PrEP to people without HIV who want it; use urgent PEP assessment after a recent substantial-risk exposure. Address access barriers without labeling or blaming patients.",
            "Offer external/internal condoms, dental dams as appropriate, STI screening/treatment, and sterile syringe/equipment services. Do not share needles, syringes, or other injection equipment; provide safe disposal and substance-use treatment access.",
            "Prevent advanced disease through diagnosis, durable ART access/adherence, vaccination, indicated OI prophylaxis, and follow-up. Low CD4, unsuppressed virus, previous OIs, and interrupted care increase OI risk."
          ]
        },
        {
          "type": "heading",
          "text": "Everyday infection prevention"
        },
        {
          "type": "paragraph",
          "text": "Use hand hygiene and food/water safety; avoid undercooked meat, unpasteurized products, and unwashed produce. For toxoplasmosis prevention, have someone else change cat litter when possible; otherwise use gloves, change it daily, and wash hands. Gloves/handwashing also apply to gardening/soil. Do not advise giving away a healthy pet solely because of HIV. Review vaccine history with the HIV team; some live vaccines, including MMR with CD4 <200, are contraindicated. Not every vaccine is live or contraindicated."
        }
      ],
      "diagnostics": [
        {
          "type": "cards",
          "items": [
            {
              "title": "Establish HIV infection",
              "fields": [
                [
                  "Testing",
                  "Begin the usual laboratory algorithm with a fourth-generation HIV-1/2 antigen/antibody assay. A reactive screen is followed by an HIV-1/HIV-2 antibody differentiation test; negative/indeterminate supplemental findings require HIV-1 NAT to assess acute infection."
                ],
                [
                  "Window period",
                  "Recent exposure or acute symptoms can require HIV RNA testing and repeat testing even with a negative initial screen. PrEP/PEP and long-acting drugs can alter detection; follow the regimen-specific algorithm. A positive screening test alone is not the same as a completed diagnostic algorithm."
                ]
              ]
            },
            {
              "title": "Baseline and ongoing assessment",
              "fields": [
                [
                  "HIV-specific",
                  "HIV RNA, CD4 count, resistance genotype, prior ART/PrEP exposure, clinical stage and OI history. Viral load monitors treatment response; CD4 helps assess immunity/prophylaxis."
                ],
                [
                  "Other tests",
                  "CBC, renal/hepatic tests, HBV/HCV and STI screening, TB screening/evaluation, pregnancy testing when applicable, and other tests according to symptoms/therapy. Review immunizations, interactions, mental health, and social needs."
                ]
              ]
            },
            {
              "title": "Investigate the suspected complication",
              "fields": [
                [
                  "Respiratory",
                  "Oxygenation/ABG when indicated, chest imaging and appropriate sputum/BAL testing for PCP; TB sputum NAAT, smear, culture and susceptibility as indicated. A TB blood/skin test does not establish or exclude active TB."
                ],
                [
                  "Neurological / visual",
                  "Brain imaging, organism testing, and LP when safe/indicated. Cryptococcal evaluation includes serum/CSF antigen, CSF culture and opening pressure. Suspected retinitis needs a dilated ophthalmological examination."
                ],
                [
                  "GI / systemic",
                  "Stool testing directed by symptoms, exposure and immune status; blood cultures including mycobacterial cultures when indicated; evaluate dysphagia and persistent lesions. Imaging or an organism-positive PCR alone may not prove that organism is causing the illness."
                ]
              ]
            }
          ]
        },
        {
          "type": "callout",
          "title": "PrEP baseline testing is a safety step",
          "text": "Confirm absence of HIV using current blood-based testing and assess for acute infection. HIV RNA testing depends on symptoms, recent PrEP/PEP and the planned product. Do not treat an ambiguous result as negative. Check renal function for oral tenofovir-based PrEP, HBV status, STIs and pregnancy when relevant; routine tenofovir renal monitoring does not apply identically to injectable PrEP."
        }
      ],
      "medical": [
        {
          "type": "heading",
          "text": "Treat HIV and the present illness"
        },
        {
          "type": "paragraph",
          "text": "Offer ART to all people with HIV and link promptly to experienced care. Choose the regimen using resistance, HBV status, renal/hepatic function, pregnancy, interactions, previous long-acting PrEP, and patient preferences. Most care is outpatient; severe infection, hypoxemia, neurological deterioration, dehydration, or other instability may require hospital care. ART timing during an OI is organism-specific: CNS cryptococcosis usually requires delaying ART initiation about 4–6 weeks after antifungals begin. Do not independently stop established ART."
        },
        {
          "type": "heading",
          "text": "Exam focus: PEP versus PrEP"
        },
        {
          "type": "cards",
          "items": [
            {
              "title": "PEP — after an exposure",
              "fields": [
                [
                  "Who / purpose",
                  "A person without established HIV after an exposure judged to carry substantial transmission risk. Examples include relevant sexual exposure, sexual assault, shared injection equipment, or occupational sharps injury; not every condom break or body-fluid contact requires PEP."
                ],
                [
                  "Timing / duration",
                  "Seek immediate assessment. Start indicated PEP as soon as possible, ideally within 24 hours and no later than 72 hours; prescribed course is 28 days. Do not delay the first dose while waiting for source information or laboratory results."
                ],
                [
                  "Current nPEP examples",
                  "Preferred adult/adolescent options include BIC/FTC/TAF or dolutegravir plus (TAF or TDF) plus (FTC or 3TC). Selection and dosing are clinician-specific. Raltegravir-based regimens are no longer the preferred 2025 CDC nPEP options."
                ],
                [
                  "Follow-up",
                  "Baseline HIV and safety tests, early adherence/tolerability review, and HIV laboratory follow-up generally at 4–6 and 12 weeks after PEP initiation using the CDC nPEP algorithm, including Ag/Ab and diagnostic NAT. Occupational exposures follow the separate occupational-health guideline. Plan a seamless transition to PrEP when ongoing prevention is desired."
                ]
              ]
            },
            {
              "title": "PrEP — before potential exposure",
              "fields": [
                [
                  "Who / purpose",
                  "Antiretroviral medication taken by a person without HIV to prevent acquisition. Offer according to exposure, preference and eligibility, including to people who request it without disclosing risk."
                ],
                [
                  "Timing / duration",
                  "Use the prescribed prevention schedule during periods of potential exposure: daily oral tablets or long-acting injections. Protection is not instant, and missed/stopped doses require an individualized plan. PrEP does not replace PEP assessment for an exposure that has already occurred without adequate protection."
                ],
                [
                  "Options",
                  "TDF/FTC (Truvada/generic), TAF/FTC (Descovy), IM cabotegravir (Apretude), and six-monthly subcutaneous lenacapavir (Yeztugo). Indications and monitoring differ; see pharmacological therapies."
                ],
                [
                  "Key distinction",
                  "PrEP is not a complete HIV-treatment regimen and does not prevent other STIs or pregnancy. If HIV is diagnosed, arrange prompt full ART care rather than continuing PrEP alone."
                ]
              ]
            }
          ]
        },
        {
          "type": "paragraph",
          "text": "PEP testing needs are not a reason to wait until the end of the 72-hour window. After a workplace exposure, wash skin with soap/water or irrigate mucous membranes, report immediately, and activate occupational health; do not squeeze aggressively or use caustic disinfectant in a wound."
        }
      ],
      "medications": [
        {
          "type": "heading",
          "text": "Antiretroviral therapy (ART)"
        },
        {
          "type": "paragraph",
          "text": "Most initial regimens use an integrase inhibitor such as bictegravir or dolutegravir with an NRTI backbone. Selected two-drug regimens are appropriate only when their eligibility criteria are met. Other drug classes include NNRTIs, protease inhibitors, entry/fusion and capsid inhibitors. ART is a complete combination regimen, not single-drug treatment. Long-acting treatment options exist for selected patients; follow the prescribed injection schedule rather than assuming every ART regimen is a daily pill."
        },
        {
          "type": "heading",
          "text": "PrEP options and nursing considerations"
        },
        {
          "type": "cards",
          "items": [
            {
              "title": "Daily oral TDF/FTC — Truvada or generic",
              "fields": [
                [
                  "Exposure coverage",
                  "Sexual and injection-drug-use prevention; daily adherence matters."
                ],
                [
                  "Before / during",
                  "Check HIV status, HBV and renal function; use calculated creatinine clearance, not serum creatinine alone. CDC specifies eCrCl >60 mL/min. Ongoing HIV Ag/Ab and HIV-1 RNA testing is at least every 3 months, with risk-based STI and renal follow-up. Stopping tenofovir/FTC in active HBV can cause hepatitis flare."
                ]
              ]
            },
            {
              "title": "Daily oral TAF/FTC — Descovy",
              "fields": [
                [
                  "Exposure coverage",
                  "Sexual prevention excluding receptive vaginal exposure; it is not interchangeable with TDF/FTC for every exposure route."
                ],
                [
                  "Before / during",
                  "eCrCl ≥30 mL/min, HBV screening, and lipid/weight monitoring in addition to HIV follow-up. Plan HBV care before stopping or switching."
                ]
              ]
            },
            {
              "title": "IM cabotegravir — Apretude",
              "fields": [
                [
                  "Schedule",
                  "First injection, another 1 month later, then every 2 months; an oral lead-in is optional. Used for sexual HIV prevention."
                ],
                [
                  "Before / during",
                  "HIV Ag/Ab plus HIV-1 RNA testing at injection visits, assess acute symptoms and injection reactions, and arrange missed-dose/tail coverage. The tenofovir renal-monitoring requirement does not apply to CAB."
                ]
              ]
            },
            {
              "title": "Subcutaneous lenacapavir — Yeztugo",
              "fields": [
                [
                  "Schedule",
                  "An additional current option approved in 2025 for sexual HIV-1 prevention in eligible adults/adolescents ≥35 kg: oral loading plus injections, then every 6 months. It is not the same schedule as cabotegravir."
                ],
                [
                  "Before / during",
                  "Exclude HIV before initiation and every injection using the current product/CDC testing algorithm; obtain RNA testing when indicated, especially with possible acute infection. Review interactions, injection reactions and missed-dose/tail plans. Arrange STI care more often than six-month visits when needed."
                ]
              ]
            }
          ]
        },
        {
          "type": "heading",
          "text": "OI treatment versus prophylaxis"
        },
        {
          "type": "cards",
          "items": [
            {
              "title": "PCP",
              "fields": [
                [
                  "Treat",
                  "TMP-SMX is preferred; treatment doses differ from prophylaxis and are usually given for 21 days in HIV. Moderate/severe hypoxemia may require adjunctive corticosteroids under protocol."
                ],
                [
                  "Prevent",
                  "Current NIH: initiate prophylaxis at CD4 <200 if not on ART or starting ART. For people already on ART, use CD4 <100 regardless of viral load, or CD4 100–200 with persistently detectable/rising HIV RNA. TMP-SMX is preferred; stopping/restarting depends on documented immune/virologic recovery and the treating team."
                ]
              ]
            },
            {
              "title": "Toxoplasma encephalitis",
              "fields": [
                [
                  "Treat",
                  "TMP-SMX or pyrimethamine + sulfadiazine + leucovorin are specialist-directed regimens, followed by maintenance when indicated. Leucovorin reduces pyrimethamine marrow toxicity."
                ],
                [
                  "Prevent",
                  "TMP-SMX when Toxoplasma IgG is positive and CD4 <100; CD4 alone is not the entire indication. A suitable TMP-SMX regimen also protects against PCP."
                ]
              ]
            },
            {
              "title": "Candidiasis",
              "fields": [
                [
                  "Treat",
                  "Oral fluconazole is preferred for oropharyngeal disease; topical nystatin (swish and swallow as ordered) is an alternative for appropriate oral disease. Esophageal disease requires systemic antifungal therapy, usually fluconazole; nystatin alone is inadequate."
                ],
                [
                  "Prevent",
                  "Routine long-term antifungal primary prophylaxis is not recommended for everyone. Assess swallowing, intake and interactions."
                ]
              ]
            },
            {
              "title": "Disseminated MAC",
              "fields": [
                [
                  "Treat",
                  "At least two active drugs, typically azithromycin or clarithromycin plus ethambutol; additional drugs may be indicated. Do not treat established disease with a macrolide alone."
                ],
                [
                  "Prevent",
                  "Primary prophylaxis is considered with CD4 <50 when not on effective ART, remaining viremic, or without a suppressive regimen option. It is not routinely indicated when effective ART is promptly initiated. Exclude active disseminated MAC before prophylactic monotherapy."
                ]
              ]
            },
            {
              "title": "CMV retinitis",
              "fields": [
                [
                  "Treat",
                  "Urgent ophthalmology plus systemic valganciclovir or IV ganciclovir; sight-threatening disease may also need intravitreal treatment. Follow induction, maintenance and eye-exam plans."
                ],
                [
                  "Prevent",
                  "ART/immune recovery is central; routine valganciclovir primary prophylaxis is not recommended solely for low CD4 or CMV viremia."
                ]
              ]
            },
            {
              "title": "Cryptococcal meningitis",
              "fields": [
                [
                  "Treat",
                  "Induction commonly uses liposomal amphotericin B + flucytosine in a resource-available setting, followed by fluconazole consolidation and maintenance. Manage raised intracranial pressure; induction alone is not the whole course."
                ],
                [
                  "Timing",
                  "ART initiation is usually deferred about 4–6 weeks for CNS disease to reduce harm from inflammatory complications; specialist supervision is essential."
                ]
              ]
            },
            {
              "title": "Active TB and HIV-associated cancer",
              "fields": [
                [
                  "TB",
                  "Use a susceptibility- and site-specific multidrug regimen. A common drug-susceptible regimen begins with isoniazid, rifampin, pyrazinamide and ethambutol (RIPE), with pyridoxine when indicated. ART/rifamycin interactions and ART timing require HIV/TB expertise."
                ],
                [
                  "Kaposi / lymphoma / cervical cancer",
                  "Optimize ART and coordinate oncology-directed care; ART alone is not sufficient for every cancer or stage."
                ]
              ]
            }
          ]
        },
        {
          "type": "paragraph",
          "text": "Give medicines on the actual prescribed schedule, verify formulation/food instructions, and reconcile OTC drugs, supplements, antacids/minerals, anticonvulsants, rifamycins and herbals. Integrase-inhibitor/mineral timing and azole/rifamycin interactions require product-specific pharmacy review. Do not stop or substitute treatment independently."
        }
      ],
      "nonpharmacological": [
        {
          "type": "list",
          "items": [
            "Use Standard Precautions for all patients. Add transmission-based precautions for the diagnosed/suspected pathogen, such as airborne precautions for infectious pulmonary TB, rather than for HIV status itself.",
            "Support rest/activity pacing, mobility and ADLs; provide orientation/cognitive aids, fall prevention and neuropathy foot/skin care according to deficits.",
            "Provide gentle oral/perineal care, skin protection, diarrhea management, fluid support and symptom relief. Persistent dysphagia or aspiration concerns need appropriate specialist assessment.",
            "Coordinate confidential, nonjudgmental interdisciplinary care, peer support, mental-health services, social work and practical medication/transport support. Include chosen support people only with permission.",
            "Discuss goals, advance care planning and palliative symptom support when appropriate to the clinical situation; an HIV diagnosis alone does not imply terminal illness."
          ]
        }
      ],
      "adverse-effects": [
        {
          "type": "heading",
          "text": "Monitor the actual regimen"
        },
        {
          "type": "list",
          "items": [
            "ART/PrEP: nausea, diarrhea, headache or sleep changes may affect adherence. TDF can cause renal and bone toxicity; some regimens affect weight, lipids, glucose or liver tests. Do not assume every drug causes every class effect. New severe rash, mucosal lesions, jaundice, marked weakness or systemic symptoms needs urgent review.",
            "TMP-SMX: rash, severe cutaneous reactions, cytopenias, renal changes and hyperkalemia; monitor CBC, renal function and potassium as ordered. Dapsone alternatives require G6PD assessment because of hemolysis/methemoglobinemia risk.",
            "Ganciclovir/valganciclovir and flucytosine can suppress marrow; renal function guides dosing. Amphotericin B can cause infusion reactions, nephrotoxicity and potassium/magnesium loss. Monitor laboratory trends and replace/support according to orders.",
            "Azoles, macrolides, rifamycins and ART have important interactions; selected agents can affect QT interval or liver function. Ethambutol requires visual monitoring. Teach symptom reporting and verify interactions with pharmacy.",
            "Injection-site pain/nodules can occur with long-acting PrEP. Missed injections or stopping without alternative prevention can leave a prolonged drug tail and risk of resistant HIV; arrange a product-specific prevention/testing plan.",
            "Immune reconstitution inflammatory syndrome (IRIS): symptoms from a known or previously unrecognized infection may worsen after ART begins despite improving immune function. Assess for infection progression, toxicity or another cause; urgently escalate severe CNS/respiratory findings rather than independently stopping ART.",
            "Stopping tenofovir-based PrEP or ART in active HBV can cause a hepatitis flare. Any switch to an injectable regimen requires a separate HBV-treatment plan when needed."
          ]
        }
      ],
      "nutrition": [
        {
          "type": "list",
          "items": [
            "Assess serial weight, muscle/function, intake, food access, oral/esophageal pain, nausea, diarrhea and malabsorption. HIV can involve wasting or excess weight/metabolic risk; a high-calorie diet is not universal.",
            "For undernutrition/wasting, offer small frequent energy- and protein-dense meals and dietitian-directed supplements. Treat infection, swallowing pain, depression and other barriers rather than relying on calories alone.",
            "Use soft, nonirritating foods for oral discomfort as tolerated. Odynophagia needs assessment and treatment; adjust texture to individual swallowing safety, not HIV status alone.",
            "Replace fluid/electrolyte losses as prescribed; monitor intake/output, stool losses, orthostatic symptoms and relevant labs. Tailor intake in renal/cardiac disease.",
            "Use safe water, wash produce and hands, separate raw/cooked foods, cook meat/eggs thoroughly, and avoid unpasteurized products. Check food requirements and supplement/mineral timing for the specific medicines. No supplement or diet replaces ART."
          ]
        }
      ],
      "assessment": [
        {
          "type": "paragraph",
          "text": "Assess the person’s current symptoms, immune/virologic status, actual medicines and goals. Ask respectfully about exposures, sexual/injection practices and support needs; do not infer them from identity or appearance."
        },
        {
          "type": "list",
          "items": [
            "Immediate status: ABCs, respiratory rate/work, SpO₂, vital signs/perfusion, fever, pain, mental status and hydration. Ask about dyspnea, severe headache, visual changes, focal deficits or seizures.",
            "Immune/infection history: current and previous CD4/viral-load trends, ART/prophylaxis adherence, prior OIs, recent exposures/travel, vaccination, TB/STI symptoms, and access interruptions.",
            "Head-to-toe: mouth/swallowing; skin/mucosal lesions; lungs; weight/intake, abdomen/stool and perineal skin; neurological/cognitive status, neuropathy, gait and ADL ability; visual complaints.",
            "Medication safety: complete regimen, last doses/injections, allergies, side effects, interactions, CBC/renal/hepatic and drug-specific monitoring. Assess readiness and barriers without blame.",
            "Psychosocial: anxiety/depression, cognition, stigma, privacy/disclosure safety, relationships, housing, food, insurance, transport, language/health literacy and the person’s chosen support system.",
            "For prevention visits: exact exposure time, route/fluid, source information if available, current/recent PrEP/PEP, acute-HIV symptoms, pregnancy potential and baseline tests. Do not delay time-critical PEP while completing routine history."
          ]
        }
      ],
      "diagnoses": [
        {
          "type": "paragraph",
          "text": "Select program-approved nursing-diagnosis terms and support actual problems with assessment findings. HIV alone does not establish every diagnosis."
        },
        {
          "type": "list",
          "items": [
            "Impaired gas exchange / ineffective breathing pattern when supported by hypoxemia or respiratory findings.",
            "Risk for infection, or an actual infection-related nursing problem with documented findings, based on immune status and exposures.",
            "Inadequate nutritional intake, deficient fluid volume or risk for electrolyte imbalance with poor intake, wasting or diarrhea.",
            "Impaired oral mucous membrane or skin integrity with thrush, lesions or perineal breakdown.",
            "Acute/chronic pain, fatigue, activity intolerance, impaired mobility or risk for falls when supported by symptoms/function.",
            "Acute confusion, self-management/learning needs, anxiety, social-isolation concerns or ineffective coping according to the person’s actual findings and preferences. Suspected sepsis, meningitis, retinal disease or respiratory failure requires urgent medical evaluation in addition to the care plan."
          ]
        }
      ],
      "priorities": [
        {
          "type": "callout",
          "title": "First action follows the urgent problem",
          "text": "Assess ABCs, oxygenation/perfusion and neurological status. New hypoxemia/dyspnea, sepsis features, severe headache/altered consciousness, focal deficits or seizures take priority over routine teaching. Activate the appropriate emergency pathway, provide ordered immediate support, and do not wait for a low CD4 result to act."
        },
        {
          "type": "list",
          "items": [
            "Possible PCP or other severe pneumonia: sit upright as tolerated, assess respiratory status and SpO₂, provide prescribed oxygen/support and escalate promptly. Obtain ordered specimens without delaying urgent treatment.",
            "New floaters, field loss or failing vision: arrange urgent ophthalmology assessment; do not wait for pain or the next routine visit.",
            "Suspected cryptococcal meningitis/raised intracranial pressure: urgent neurological/infectious-disease assessment and preparation for safe diagnostic/pressure management. Neck stiffness may be absent.",
            "Possible infectious pulmonary TB: institute airborne precautions according to policy while evaluating and treating. HIV itself does not require airborne precautions.",
            "Recent substantial-risk HIV exposure: immediate PEP evaluation; every hour matters. Do not substitute routine PrEP or wait for all baseline results.",
            "Then address dehydration/intake, skin/oral care, medication continuity and toxicity, falls/cognition, confidentiality and discharge access according to findings."
          ]
        }
      ],
      "plan": [
        {
          "type": "cards",
          "items": [
            {
              "title": "1. Stabilize the present complication",
              "fields": [
                [
                  "Goal",
                  "Maintain patient-specific oxygenation/perfusion and neurological safety, with prompt assessment/treatment of the suspected OI."
                ],
                [
                  "Actions",
                  "Monitor respiratory/neurological and fluid trends, use pathogen-specific precautions, obtain ordered specimens and administer/support prescribed therapy."
                ],
                [
                  "Evaluate",
                  "Work of breathing, oxygenation, mental status, fever and symptoms improve without missed deterioration or treatment toxicity."
                ]
              ]
            },
            {
              "title": "2. Sustain HIV treatment and prevention",
              "fields": [
                [
                  "Goal",
                  "Maintain a feasible complete ART plan, appropriate OI prophylaxis, and scheduled monitoring; use the chosen prevention plan for partners without HIV."
                ],
                [
                  "Actions",
                  "Reconcile medicines, coordinate pharmacy/HIV team, solve access barriers, plan injection/refill dates and teach ART versus PrEP versus PEP."
                ],
                [
                  "Evaluate",
                  "Viral load trends toward/maintains suppression, immune recovery is reviewed over time, and teach-back/attendance demonstrate a workable regimen."
                ]
              ]
            },
            {
              "title": "3. Restore function, nutrition and support",
              "fields": [
                [
                  "Goal",
                  "Meet individualized intake/hydration, skin, activity, comfort and psychosocial goals."
                ],
                [
                  "Actions",
                  "Treat oral/GI symptoms, collaborate with dietitian/rehab/social work and chosen supports, protect privacy, and arrange follow-up/community resources."
                ],
                [
                  "Evaluate",
                  "Weight/intake and hydration stabilize, skin/ADLs improve, and the person can obtain medicines and identify whom to contact."
                ]
              ]
            }
          ]
        }
      ],
      "interventions": [
        {
          "type": "list",
          "items": [
            "Administer ordered ART, OI treatment/prophylaxis and symptom medicines; verify doses, interactions and renal/hepatic adjustments. Monitor response and adverse effects, and coordinate any missed-dose or vomiting plan with the prescriber/pharmacist.",
            "Trend temperature, respiratory status, neurological/visual symptoms, intake/output, stool losses, weight and laboratory findings. Escalate deterioration rather than attributing it automatically to chronic HIV.",
            "Provide oral care and ordered antifungals; assess swallowing pain and ability to take medicines/food. Use perineal cleansing/barrier protection for diarrhea and protect pressure areas.",
            "Support hydration/nutrition, energy conservation, safe mobilization, neuropathy/fall care and ADLs. Reassess pain and comfort after interventions.",
            "Use correct precautions and safe sharps practice. Promote vaccination and food/sexual/injection prevention education appropriate to current immune status and preferences.",
            "Protect confidentiality; use respectful language and private discussions. Coordinate partner services with trained staff and applicable policy rather than independently disclosing status to family or partners.",
            "Before discharge, confirm actual access to ART/prophylaxis, dates for labs/refills/injections, urgent warning signs, transport and a reachable HIV-care contact. Involve social work/case management, dietitian, mental health, pharmacy and peer support as needed.",
            "Offer interdisciplinary debriefing, peer/leadership, ethics or voluntary spiritual support for staff distress while preserving confidentiality and equitable patient care."
          ]
        }
      ],
      "education": [
        {
          "type": "heading",
          "text": "Exam focus: one partner has HIV, the other does not"
        },
        {
          "type": "callout",
          "title": "U = U: Undetectable = Untransmittable",
          "text": "A person taking effective ART who achieves and maintains viral suppression (<200 HIV RNA copies/mL) does not transmit HIV through sex. Confirm and maintain suppression with monitoring; simply taking tablets for six months is not proof. NIH recommends an additional prevention method for at least the first six months of ART and until <200 copies/mL is documented. U = U does not establish zero transmission through breast milk or shared injection equipment."
        },
        {
          "type": "list",
          "items": [
            "Explain ART adherence and viral-load follow-up for the partner with HIV; CD4 monitoring addresses immunity and is individualized. For prescribed long-acting treatment, adherence means keeping injection appointments and following the missed-dose plan.",
            "Offer PrEP to the partner without HIV, particularly if suppression is not yet confirmed, is inconsistent/unknown, or there are other exposures. PrEP remains a personal option even with U = U; it is not medically mandatory solely because a partner with HIV has durable suppression.",
            "Condoms can prevent other STIs and pregnancy and provide HIV protection when suppression is uncertain. Use latex or appropriate synthetic condoms with compatible water- or silicone-based lubricant; oil damages latex. Natural-membrane condoms are not reliable HIV protection. Barrier choices should support the couple’s informed goals.",
            "Keep prevention follow-up drug-specific: oral PrEP HIV testing at least every 3 months, CAB testing at injection visits, and LEN HIV testing before each six-month injection with additional assessment/testing as indicated. STI screening can be needed more frequently than injection visits. Do not wait for a scheduled visit after acute symptoms or a significant unprotected exposure.",
            "PrEP is highly effective when used as prescribed (oral/CAB sexual prevention about 99%); missed doses, delayed injections or stopping require a prevention plan. PrEP does not prevent other STIs or pregnancy. Do not share ART/PrEP medicines or use a partner’s regimen as PEP."
          ]
        },
        {
          "type": "heading",
          "text": "Family planning and infant feeding"
        },
        {
          "type": "paragraph",
          "text": "Before attempting conception, coordinate HIV and reproductive care, screen/treat STIs, and establish sustained suppression in the partner with HIV. NIH describes sustained suppression for this setting using two undetectable viral loads at least three months apart. With sustained suppression, condomless intercourse permits conception without sexual HIV transmission; PrEP can be chosen as additional prevention. Sperm washing or assisted reproduction is not routinely required solely for HIV prevention, but may be appropriate for infertility or other goals. If suppression is uncertain, discuss PrEP and specialist-guided options rather than treating “and/or PrEP” as a guarantee."
        },
        {
          "type": "paragraph",
          "text": "Preventing infant HIV is a separate care pathway: ART, viral-load monitoring, obstetric planning, infant ARVs and testing. With sustained suppression during pregnancy/breastfeeding, breast-milk transmission risk is less than 1% but not zero. Properly prepared formula or pasteurized banked donor milk eliminates the breast-milk route. Provide shared decision-making and follow the specialist infant-feeding plan; sexual U = U does not make breastfeeding risk zero."
        },
        {
          "type": "heading",
          "text": "Living well, safety and resources"
        },
        {
          "type": "list",
          "items": [
            "Teach urgent reporting of dyspnea, persistent fever, severe headache/confusion, seizures/focal changes, new visual symptoms, inability to swallow medicines/fluids, significant diarrhea/dehydration or severe drug reactions.",
            "Review medication/food instructions, refill/injection reminders, avoiding independent interruptions, safer injection practices, hygiene/food safety and vaccine follow-up. Use teach-back without stigma.",
            "Offer HIV-clinic case management, social work, pharmacy, dietitian, mental-health and peer/community support. Ryan White HIV/AIDS Program services and ADAP may help eligible people obtain care/medicines; housing, food and transport resources are assessed locally. HRSA’s HIV-care locator is linked in the references. Do not promise universal eligibility.",
            "Respect autonomy, confidentiality, sexual/gender identity and chosen supports. Discuss disclosure/partner-service options in a private, safety-conscious way. Invite questions about relationships, school/work and long-term health; HIV care includes more than infection control."
          ]
        }
      ],
      "evaluation": [
        {
          "type": "list",
          "items": [
            "Acute safety: oxygenation/perfusion and neurological status are stable/improving; OI symptoms and fever trend appropriately, with no untreated visual decline, dehydration, sepsis or other deterioration.",
            "Treatment response: HIV RNA achieves/maintains suppression; CD4 and OI history inform prophylaxis decisions. Symptoms, function and laboratory trends are reviewed alongside viral load rather than declaring success from one test.",
            "Medication safety: complete prescribed therapy is obtainable/tolerated, renal/hepatic/CBC/electrolyte issues are addressed, and injection/refill and interaction plans are understood. No unsupervised ART or HBV-active drug interruption.",
            "Nutrition/function: individualized weight/intake/hydration, skin integrity, pain, activity and ADL goals improve or prompt plan adjustment.",
            "Teach-back: explain HIV versus AIDS, CD4 versus viral load, urgent OI warnings, PEP’s ≤72-hour/28-day framework, PrEP eligibility/testing, and the sexual scope of U = U.",
            "Partnership/support: both partners understand the chosen prevention and testing plan without coercion; reproductive questions, privacy needs, mental health, medication access and follow-up are addressed."
          ]
        }
      ]
    },
    "clarifications": [
      {
        "title": "CD4 thresholds and OI prevention",
        "text": "OIs do not all start below 200, and AIDS can be diagnosed by a defining illness at a higher CD4 count. Used the May 2026 NIH PCP distinction for people starting/not on ART versus already on ART. Toxoplasma prophylaxis requires positive IgG with CD4 <100; MAC prophylaxis is not automatic at <50 if effective ART begins promptly. Routine CMV/candidiasis primary prophylaxis is not added."
      },
      {
        "title": "Infection-specific treatment and urgency",
        "text": "Separated oral thrush from esophageal disease (systemic treatment required), MAC combination treatment from prophylaxis, and cryptococcal induction from the complete treatment/pressure-management course. Added urgent visual/neurological warning signs and the CNS cryptococcosis ART-timing exception. Kaposi sarcoma is HHV-8-associated cancer, not itself an infection."
      },
      {
        "title": "PEP versus PrEP and current options",
        "text": "Kept ≤72-hour/28-day PEP teaching and updated preferred nPEP regimens/follow-up to CDC 2025. Occupational exposures have their own guideline. Added six-monthly lenacapavir, clarified TAF/FTC’s receptive-vaginal limitation and CAB loading, and made renal/HBV/testing and missed-injection plans regimen-specific. Not every PrEP user takes a daily pill or follows a quarterly injection schedule."
      },
      {
        "title": "U = U, partners and family planning",
        "text": "U = U requires maintained suppression, not simply six months of tablet use. Retained NIH’s additional-prevention recommendation during at least the first six months of ART and until suppression is documented. PrEP is offered according to preference/exposure rather than made mandatory for every durably suppressed partnership. Sexual transmission, conception, perinatal and breast-milk risks are distinguished; sperm washing is not a universal requirement."
      },
      {
        "title": "Earlier dictated fragments resolved without guessing",
        "text": "Removed the unsupported “over 60%” HAND statistic; it cannot be applied without a source/population. Retained the verified neurocognitive spectrum and urgent differential. Unidentifiable “Trichuria,” “Mavibom Entercell,” and “sinus pneumonia” are not used as clinical organism/diagnosis recommendations; verified enteric infections, MAC, sinusitis and pneumonia are covered by their established names. Week 12 remains available as the supporting objective notes."
      }
    ],
    "references": [
      {
        "title": "NIH · HIV stages",
        "url": "https://hivinfo.nih.gov/understanding-hiv/fact-sheets/stages-hiv-infection",
        "supports": "Acute/chronic infection, AIDS and immune deterioration."
      },
      {
        "title": "NIH · HIV life cycle",
        "url": "https://hivinfo.nih.gov/understanding-hiv/fact-sheets/hiv-life-cycle",
        "supports": "Retroviral replication and antiretroviral drug classes."
      },
      {
        "title": "CDC · How HIV spreads",
        "url": "https://www.cdc.gov/hiv/causes/index.html",
        "supports": "Infectious fluids, exposure routes and casual-contact misconceptions."
      },
      {
        "title": "NIH · Initial ART regimens",
        "url": "https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-arv/what-start-initial-combination-regimens",
        "supports": "Current combination treatment and individualized regimen selection."
      },
      {
        "title": "CDC · HIV testing algorithm",
        "url": "https://www.cdc.gov/std/treatment-guidelines/hiv.htm",
        "supports": "Ag/Ab, differentiation, NAT and acute-infection assessment."
      },
      {
        "title": "CDC · Nonoccupational PEP (2025)",
        "url": "https://www.cdc.gov/mmwr/volumes/74/rr/rr7401a1.htm",
        "supports": "Urgent initiation, preferred regimens, 28-day course, follow-up and PrEP transition."
      },
      {
        "title": "US Public Health Service · Occupational PEP (2025)",
        "url": "https://stacks.cdc.gov/view/cdc/258795",
        "supports": "Healthcare-worker exposure management; separate from the nPEP pathway."
      },
      {
        "title": "CDC · PrEP clinical guidance",
        "url": "https://www.cdc.gov/hivnexus/hcp/prep/",
        "supports": "Oral/CAB prevention, eligibility, renal/HBV safety and regimen-specific monitoring."
      },
      {
        "title": "CDC · Six-monthly lenacapavir PrEP",
        "url": "https://www.cdc.gov/mmwr/volumes/74/wr/mm7435a1.htm",
        "supports": "Additional prevention option, initiation, HIV testing, interactions and follow-up."
      },
      {
        "title": "DailyMed · Yeztugo prescribing information",
        "url": "https://www.dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1c241af1-ce62-4b0a-9eb7-f6b626174f01",
        "supports": "Current lenacapavir label, HIV testing, loading/injections and resistance/tail safety."
      },
      {
        "title": "NIH · PCP (May 2026 update)",
        "url": "https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/pneumocystis",
        "supports": "Symptoms, diagnostic limitations, treatment and ART-specific prophylaxis thresholds."
      },
      {
        "title": "NIH · Toxoplasmosis",
        "url": "https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/toxoplasmosis",
        "supports": "IgG-positive/CD4 <100 prophylaxis, treatment and food/cat-litter prevention."
      },
      {
        "title": "NIH · Disseminated MAC",
        "url": "https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/disseminated",
        "supports": "Systemic findings, combination treatment and when primary prophylaxis is unnecessary."
      },
      {
        "title": "NIH · Mucocutaneous candidiasis",
        "url": "https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/candidiasis",
        "supports": "Oral versus esophageal disease and systemic treatment requirements."
      },
      {
        "title": "NIH · CMV disease",
        "url": "https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/cytomegalovirus",
        "supports": "Retinitis warning signs, treatment and no routine valganciclovir primary prophylaxis."
      },
      {
        "title": "NIH · Cryptococcosis",
        "url": "https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/cryptococcosis",
        "supports": "Induction/consolidation/maintenance, intracranial pressure and delayed ART initiation in CNS disease."
      },
      {
        "title": "NIH · Tuberculosis",
        "url": "https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/mycobacterium",
        "supports": "Any-CD4 risk, diagnostic testing, multidrug therapy and ART/rifamycin considerations."
      },
      {
        "title": "NIH · PML / JC virus",
        "url": "https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/progressive",
        "supports": "Focal CNS demyelination and the central role of effective ART."
      },
      {
        "title": "NIH · HAND terminology",
        "url": "https://clinicalinfo.hiv.gov/en/glossary/hiv-associated-neurocognitive-disorders-hand",
        "supports": "Neurocognitive spectrum rather than equating all cognitive symptoms with dementia."
      },
      {
        "title": "NCI · HIV and cancer",
        "url": "https://www.cancer.gov/about-cancer/causes-prevention/risk/infectious-agents/hiv-fact-sheet",
        "supports": "Kaposi sarcoma, lymphoma and cervical-cancer associations."
      },
      {
        "title": "NIH · HIV immunizations",
        "url": "https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/immunizations",
        "supports": "Vaccine selection according to immune status; live-vaccine restrictions."
      },
      {
        "title": "NIH · Medicine side effects",
        "url": "https://hivinfo.nih.gov/understanding-hiv/fact-sheets/hiv-medicines-and-side-effects",
        "supports": "Regimen-specific adverse effects, monitoring and adherence support."
      },
      {
        "title": "NIH · Nutrition and food safety",
        "url": "https://hivinfo.nih.gov/understanding-hiv/fact-sheets/hiv-and-nutrition-and-food-safety",
        "supports": "Individualized nutrition, weight and food-safety support."
      },
      {
        "title": "NIH · ART to prevent sexual transmission",
        "url": "https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-arv/arv-therapy-as-prevention",
        "supports": "U = U, <200 copies/mL, initial prevention interval and sustained suppression."
      },
      {
        "title": "NIH · Reproductive options for partners",
        "url": "https://clinicalinfo.hiv.gov/en/guidelines/perinatal/prepregnancy-counseling-childbearing-age-reproductive-options-partners",
        "supports": "Conception with sustained suppression, optional PrEP and reproductive choices."
      },
      {
        "title": "NIH · Infant feeding and HIV",
        "url": "https://clinicalinfo.hiv.gov/en/guidelines/perinatal/preventing-transmission-infant-feeding?view=brief",
        "supports": "Breast-milk risk, shared decision-making and replacement-feeding options."
      },
      {
        "title": "HRSA · Ryan White care and services",
        "url": "https://ryanwhite.hrsa.gov/hiv-care/services",
        "supports": "Eligibility-dependent HIV medical/support services and medication access."
      },
      {
        "title": "HRSA · Find HIV care",
        "url": "https://findhivcare.hrsa.gov/",
        "supports": "Locator for Ryan White HIV/AIDS Program providers."
      }
    ]
  },
  'prostate-cancer': {
    title: 'Prostate cancer', abbreviation: 'Prostate cancer', week: 7, deck: 'prostate-cancer',
    reviewed: 'November 15, 2026',
    reading: 'Course study guide, Topic 13: Prostate cancer—risk factors and metastasis. Based on your supplied notes and Week 7 presentation, with missing nursing-process sections completed. Current references include the American Cancer Society screening update published November 12, 2026. Corrections distinguish radical prostatectomy, TURP, surveillance, and different radiation treatments; references remain below the study content.',
    focus: [
      { section: 'risk', label: 'Risk factors' },
      { section: 'manifestations', label: 'Metastasis: findings & warning signs' }
    ],
    content: {
      overview: [
        { type: 'paragraph', text: 'Prostate cancer is the most common non-skin cancer in men in the US and a leading cause of cancer death. It ranges from indolent localized disease to aggressive metastatic cancer. Most cases are adenocarcinomas arising from glandular epithelium, commonly in the peripheral zone near the rectum. This location can make a lesion palpable on DRE, but many cancers are not palpable and early disease often causes no urinary symptoms.' },
        { type: 'paragraph', text: 'BPH usually develops in the transition/periurethral zone; it is not the same disease as prostate cancer and can coexist with it. Neither urinary obstruction nor an enlarged prostate alone establishes cancer. People who retain a prostate, including transgender women after many gender-affirming procedures, can still develop prostate cancer.' },
        { type: 'heading', text: 'Androgen signaling, grade, and spread' },
        { type: 'paragraph', text: 'Androgens such as testosterone and DHT stimulate androgen-receptor signaling in many prostate cancers. Reducing androgen production or blocking its action can control disease. Castration-resistant cancer progresses despite castrate testosterone levels; it does not mean androgen signaling is irrelevant or that all hormonal treatments must stop. Histological Grade Group/Gleason pattern, PSA, stage, imaging, health, and patient goals guide management.' },
        { type: 'paragraph', text: 'Local extension may involve the seminal vesicles, bladder neck, or other pelvic structures; pelvic/obturator nodes are regional sites. Bloodborne spread commonly involves the axial skeleton (spine, pelvis, ribs, hips), with lung/liver and less commonly brain involvement. Vertebral venous connections, often discussed as Batson’s plexus, are one route—not proof that every tumor follows one mandatory pathway. Bone lesions are often osteoblastic but can still cause pain, fracture, or spinal cord compression.' }
      ],
      manifestations: [
        { type: 'heading', text: 'Localized and urinary findings' },
        { type: 'list', items: ['Early prostate cancer is often asymptomatic and may be detected through PSA-based evaluation rather than symptoms.', 'Hesitancy, weak/small stream, incomplete emptying, frequency/nocturia, or retention can occur, but BPH and other disorders also cause these findings.', 'Hematuria means blood in urine; hematospermia means blood in semen. Painful ejaculation, sexual dysfunction, or pelvic/perineal/rectal discomfort warrants assessment and is not specific to cancer.'] },
        { type: 'heading', text: 'Exam focus: metastasis' },
        { type: 'list', items: ['Bone: persistent or worsening backache, hip/pelvic/rib pain, or pain at rest/night; pathologic fractures may follow minimal trauma. “Bone-forming” lesions do not guarantee strong bone.', 'Regional/local progression: pelvic or perineal discomfort, urinary/ureteral obstruction, hydronephrosis, or reduced urine output. Oliguria can reflect obstruction, renal injury, or another acute problem and requires assessment.', 'Systemic/other-organ findings: weight loss, anemia, fatigue/weakness, nausea, respiratory symptoms, liver-related symptoms, or neurological changes depending on disease sites. These findings are not all required, and each can have other causes.'] },
        { type: 'callout', title: 'Possible spinal cord compression: emergency', text: 'New severe/progressive back pain with leg weakness/numbness, altered gait, saddle sensory change, or new bladder/bowel dysfunction needs immediate emergency assessment. Do not wait for paralysis or complete loss of continence. Protect against unsafe movement and activate the local spinal metastasis/cord-compression pathway.' }
      ],
      risk: [
        { type: 'heading', text: 'Risk factors' },
        { type: 'list', items: ['Increasing age is the strongest common risk factor; disease is much more frequent after 50 and many diagnoses occur in older adults. Age alone does not determine treatment suitability or screening benefit.', 'Black/African American men have higher US incidence and mortality. Use this to support timely risk discussion, education, and access; outcomes also reflect structural/access and other factors, not a deterministic prediction for every individual.', 'A father, brother, or son with prostate cancer increases risk, particularly with younger diagnosis or multiple affected relatives. The supplied “doubles to triples” is an approximate association, not a universal personal risk multiplier.', 'Inherited pathogenic variants, especially BRCA2 and selected other genes including BRCA1 or Lynch-associated genes, can increase risk. Consider genetic counseling/testing when personal/family or disease features meet criteria.', 'Obesity is associated particularly with aggressive/fatal disease; specific high-fat-food causal claims are less certain. Vitamin E supplementation should not be used for prostate cancer prevention.'] },
        { type: 'heading', text: 'Prevention, health promotion, and current screening' },
        { type: 'paragraph', text: 'No method guarantees prevention. Support healthy weight, activity, a balanced diet, tobacco avoidance, and reporting persistent urinary changes, blood in urine, or pelvic/bone symptoms. Discuss screening benefits and harms, including false positives, biopsy complications, overdiagnosis, and overtreatment. Screening is for people without symptoms; symptoms require diagnostic assessment regardless of screening age.' },
        { type: 'cards', items: [
          { title: 'USPSTF: current final recommendation', fields: [['Ages 55–69', 'Individual PSA-screening decision after discussion of benefits/harms and preferences.'], ['Age 70 or older', 'Recommends against routine PSA-based screening. This is not a prohibition on investigating symptoms or monitoring an established cancer.']] },
          { title: 'ACS: updated November 12, 2026', fields: [['Average risk', 'PSA screening every 2 years at ages 50–69, with informed discussion.'], ['Higher risk', 'Black men: yearly at 45–69. A strong first-degree family history also favors yearly screening from 45; one relative diagnosed at 65 or older has a different, 2-year pathway. Inherited-risk screening is individualized.'], ['Later ages', 'Ages 70–74: individualized discussion; if continuing, every 2 years. ACS does not recommend screening at 75 or older.']] }
        ] },
        { type: 'paragraph', text: 'These organizations differ; label the guideline rather than combining their ages into one rule. Base care on prostate anatomy, inherited risk, health/life expectancy, and hormone exposure. Gender-affirming estrogen/androgen suppression and finasteride can lower PSA, so the interpreting clinician needs that history.' }
      ],
      diagnostics: [
        { type: 'cards', items: [
          { title: 'PSA blood test and DRE', fields: [['PSA', 'Produced by normal and malignant prostate tissue. Elevated results can reflect BPH, prostatitis/infection, recent procedures, and other temporary influences; a low result does not exclude every cancer. Confirm an unexpected elevation and assess context before automatic biopsy. There is no single universal normal/cancer cutoff.'], ['DRE', 'Palpation through the rectum for nodules, induration, or asymmetry—not direct visual inspection of the prostate. It is an adjunct; a normal DRE does not rule out cancer and DRE alone is not the principal PSA-screening strategy.']] },
          { title: 'MRI and prostate biopsy', fields: [['Pathway', 'Risk assessment, repeat PSA, selected biomarkers, and multiparametric MRI can guide whether/where to biopsy. Tissue histology usually establishes the diagnosis; an MRI result alone does not replace pathology in the usual diagnostic pathway.'], ['Routes', 'Needle cores may be obtained transperineally (through perineal skin) or transrectally, often with ultrasound/MRI targeting. A transrectal ultrasound probe guides imaging; it is not itself the cutting instrument. EAU favors the transperineal route to reduce infectious risk.'], ['Nursing care', 'Explain the actual route/anesthetic plan; verify consent, allergies, bleeding/anticoagulant review, infection risk, and ordered preparation/prophylaxis. Antibiotics/enemas/fasting are route- and procedure-specific. Afterward, explain expected minor bleeding and report fever/chills, inability to void, severe pain, or heavy/persistent bleeding urgently.']] },
          { title: 'Gleason score and ISUP Grade Group', fields: [['Modern reporting', 'The historical pattern system runs 1–5, but contemporary diagnosed prostate cancer is usually reported with Gleason scores 6–10, not interpreted as a routine 2–10 clinical scale. Primary/secondary patterns and biopsy conventions matter.'], ['Groups', 'Grade Group 1: Gleason 3+3=6; Group 2: 3+4=7; Group 3: 4+3=7; Group 4: 8; Group 5: 9–10. A 4+3 tumor is not equivalent to 3+4 despite the same total. Higher groups generally indicate more aggressive disease.']] },
          { title: 'TURP, staging, and molecular information', fields: [['TURP distinction', 'Tissue removed during TURP for obstruction can reveal incidental cancer, but TURP is not the usual targeted diagnostic biopsy or a curative radical prostatectomy. It mainly removes obstructing periurethral tissue.'], ['Staging', 'Selected MRI, CT/bone imaging, or PSMA PET assess local/nodal/distant disease according to risk and availability; not every low-risk patient needs every scan. CBC, renal function, and other tests assess consequences and treatment safety.'], ['Genetics / biomarkers', 'Selected germline/tumor testing informs inherited-risk counseling and eligibility for therapies such as PARP inhibitors or biomarker-selected immunotherapy. PSMA imaging selects patients for certain radioligand treatments.']] }
        ] }
      ],
      medical: [
        { type: 'heading', text: 'Match treatment to risk, stage, health, and goals' },
        { type: 'cards', items: [
          { title: 'Active surveillance versus watchful waiting', fields: [['Active surveillance', 'Structured monitoring with PSA, clinical review, MRI and repeat biopsy as indicated, preserving a curative-treatment option if disease progresses. Often appropriate for low-risk and selected favorable intermediate-risk disease.'], ['Watchful waiting', 'Usually symptom-directed observation for a person whose health/life expectancy or preferences make curative treatment unlikely to help. It is not the same repeat-biopsy program simply renamed “watch and wait.”']] },
          { title: 'Local treatment', fields: [['Surgery / radiation', 'Radical prostatectomy removes the prostate, usually seminal vesicles, and selected nodes; radiation may be external beam and/or brachytherapy, sometimes with ADT. These standard options were added to the abbreviated treatment outline.'], ['Brachytherapy', 'LDR commonly leaves permanent seeds after image-guided implantation; HDR uses a temporary source that is removed. Outpatient discharge depends on the procedure and recovery. Review urinary/rectal symptoms and individualized radiation instructions.']] },
          { title: 'Advanced disease and symptom control', fields: [['Systemic treatment', 'ADT is commonly intensified with an androgen-receptor pathway inhibitor and, in selected fit patients, docetaxel. Chemotherapy can be used during metastatic hormone-sensitive disease—not only after hormones stop working. Continue the appropriate ADT backbone in castration-resistant disease.'], ['Selected later / biomarker treatment', 'PARP inhibition, PSMA-directed radioligand treatment, other chemotherapy or immunotherapy require specific disease/biomarker and prior-treatment criteria. Palliative radiation, analgesia, bone care, urinary relief, and psychosocial support accompany cancer treatment.']] }
        ] },
        { type: 'paragraph', text: 'Acute retention, clot obstruction, suspected spinal cord compression, infection/sepsis, or renal obstruction needs timely evaluation rather than routine follow-up alone. Address urinary continence, sexual function/fertility, body image, mood, and patient priorities before and throughout treatment.' }
      ],
      medications: [
        { type: 'cards', items: [
          { title: 'ADT and androgen-receptor treatment', fields: [['Examples / mechanism', 'Leuprolide and goserelin are GnRH agonists that reduce testosterone after an initial surge. Bicalutamide blocks the androgen receptor; it does not work identically to testosterone-lowering drugs. GnRH antagonists such as degarelix/relugolix avoid the initial testosterone surge.'], ['Nursing care', 'Track PSA and indicated testosterone, bone/metabolic/CV health, mood, hot flashes, libido/erectile concerns, and drug-specific labs. Review nutrition, exercise, bone protection, and treatment access/adherence.'], ['Flare / intensification', 'An agonist’s early surge can worsen bone pain/obstruction; selected patients receive short antiandrogen coverage or another approach. New neurological/obstructive symptoms are urgent, not an expected effect to tolerate. Newer agents such as abiraterone or enzalutamide have distinct monitoring/interactions; abiraterone commonly requires a prescribed steroid and BP/potassium/liver review.']] },
          { title: 'Docetaxel and supportive steroid care', fields: [['Role', 'Used in selected metastatic hormone-sensitive or castration-resistant settings; prednisone/prednisolone use depends on the regimen. Verify premedication, including prescribed dexamethasone, and do not substitute steroid plans.'], ['Nursing care', 'Follow hazardous-drug and infusion-reaction protocols; check CBC/ANC, liver function and other ordered labs. Assess neuropathy/falls, fluid retention, fatigue, nausea, mouth symptoms, and infection. Steroids can raise glucose and affect mood/sleep. Fever ≥100.4°F (38°C) needs immediate oncology contact/urgent assessment.']] },
          { title: 'Olaparib (Lynparza): biomarker-selected PARP inhibitor', fields: [['Selection', 'Selected HRR-mutated mCRPC after specified prior treatment, or selected BRCA-mutated mCRPC combination therapy. It is not appropriate for every prostate cancer simply because it is advanced.'], ['Nursing care', 'Assess CBC at baseline and monthly, renal function, fatigue, nausea, interactions, and dose/tolerance. Persistent cytopenias or new dyspnea need assessment; rare serious risks include MDS/AML, pneumonitis, and thrombosis. Follow the exact oral-drug/contraception plan.']] },
          { title: 'Pluvicto: PSMA-directed radioligand', fields: [['Selection / monitoring', 'Lutetium Lu 177 vipivotide tetraxetan for selected PSMA-positive mCRPC after ARPI treatment. The expanded FDA indication includes patients appropriate to delay taxane chemotherapy, as well as those previously treated with taxanes. Coordinate oncology/nuclear medicine, PSMA selection, CBC and renal monitoring; watch fatigue, dry mouth, and cytopenias.'], ['Hydration / safety', 'Follow individualized hydration, frequent voiding, and written hygiene/body-fluid instructions after each dose. This is not the same radiation situation as sealed prostate seeds.'], ['Current US label intervals', 'After each administration: limit close contact under 3 feet for 2 days with others and 7 days with children/pregnant people; avoid sex for 7 days; sleep separately for 3 days from others, 7 from children, and 15 from pregnant people. Follow the department’s written plan, including longer contraception requirements where relevant.']] },
          { title: 'Urinary symptoms, spasms, pain, and bone care', fields: [['Examples', 'Tamsulosin may help outlet symptoms but can cause orthostasis. Finasteride treats selected BPH/enlargement and lowers PSA; it is not definitive cancer treatment or a universal prevention drug.'], ['Supportive care', 'Use prescribed analgesia, bowel medicines, selected antispasmodics such as oxybutynin, and risk-appropriate bone-protective therapy. Check catheter drainage before attributing pain/leakage to spasm. Denosumab/zoledronic acid roles and doses differ for osteoporosis versus metastatic skeletal-event prevention; review renal/calcium/dental and other drug-specific safety.']] }
        ] }
      ],
      nonpharmacological: [
        { type: 'heading', text: 'Function, symptom control, and coping' },
        { type: 'list', items: ['Offer pelvic-floor assessment/training for continence before and after treatment according to the team’s instructions; after surgery, timing often depends on catheter removal. Do not routinely strain/Valsalva to empty a poorly draining bladder.', 'Encourage safe walking/graded aerobic and resistance work, fatigue pacing, and fall prevention. Modify loading with bone metastases/fracture risk; involve PT rather than prescribing the same weight-bearing routine to everyone.', 'Discuss erectile dysfunction, dry orgasm/ejaculatory changes, fertility preservation before treatment, and sexual rehabilitation/referral. Nerve-sparing surgery does not guarantee erectile preservation; TURP and radical surgery have different sexual effects.', 'Offer emotional, family/peer, social work, continence, and community resources. Ask whom the patient wants involved and address financial/transport and cultural barriers.'] },
        { type: 'heading', text: 'Radiation precautions depend on the treatment' },
        { type: 'paragraph', text: 'External-beam treatment does not make the patient radioactive. After HDR brachytherapy the temporary source is removed; permanent LDR seeds have isotope-specific contact/sex/seed-passage instructions. The supplied “avoid pregnant people/infants for 2 months” and “condoms for 2 weeks” can resemble a particular program’s instructions but are not universal rules and must not be copied to Pluvicto.' },
        { type: 'paragraph', text: 'After permanent seeds, follow the radiation-safety card and any instructed urine straining/condom plan. If a seed passes, do not handle it with bare fingers; use the provided instructions/equipment, keep it safely away from others, and contact radiation safety. Sealed seed radiation does not make all urine/body fluids radioactive in the way systemic radioligand treatment can.' }
      ],
      'adverse-effects': [
        { type: 'cards', items: [
          { title: 'Radical prostatectomy versus TURP', fields: [['Urinary / bleeding', 'Incontinence, retention/obstruction, bleeding, infection, or bladder spasms may occur. TURP may need ordered 3-way irrigation for hematuria; routine CBI is not assumed after every radical prostatectomy. Protect the fresh bladder-urethral anastomosis.'], ['Sexual / reproductive', 'Radical surgery commonly causes dry orgasm/anejaculation and infertility from loss of prostate/seminal-vesicle contributions; erectile function can change. TURP more commonly causes retrograde ejaculation and has different nerve/anatomy effects.']] },
          { title: 'Classic TURP syndrome', fields: [['Mechanism', 'Systemic absorption of hypotonic irrigant during traditional monopolar TURP can cause dilutional hyponatremia/fluid overload, confusion, nausea, BP changes, and cardiorespiratory deterioration.'], ['Modern distinction', 'Bipolar saline techniques avoid the classic hypotonic hyponatremic syndrome, although fluid overload or other complications remain possible. Postoperative saline CBI is not itself identical to intraoperative hypotonic-fluid absorption. Escalate acute confusion or instability.']] },
          { title: 'ADT', fields: [['Monitor', 'Hot flashes, reduced libido/ED, gynecomastia, fatigue, mood changes, muscle loss, weight gain/metabolic changes, and bone loss/fracture risk; review CV health.'], ['Flare', 'Early GnRH-agonist testosterone surge may worsen symptoms. New back pain with neurological findings, retention, or renal compromise needs urgent assessment rather than simply labeling it a harmless flare.']] },
          { title: 'Radiation', fields: [['Monitor', 'Dysuria, frequency/urgency, retention, rectal urgency/diarrhea/bleeding, fatigue, and later erectile dysfunction or urethral narrowing.'], ['Safety', 'Permanent seed passage and systemic radioligand contamination require different handling plans. Severe retention, bleeding, or systemic illness is not routine irritation to ignore.']] },
          { title: 'Systemic medicine toxicity', fields: [['Chemotherapy / PARP therapy', 'Cytopenias/infection or bleeding, fatigue, GI symptoms; docetaxel neuropathy/fluid retention and olaparib-specific serious warnings need review.'], ['Pluvicto / supportive drugs', 'Renal and marrow toxicity, dry mouth, radiation exposure/excretion precautions; tamsulosin-related dizziness and anticholinergic retention/constipation can add to existing symptoms.']] }
        ] }
      ],
      nutrition: [
        { type: 'list', items: ['Use adequate energy/protein and a varied plant-forward diet to support recovery and muscle health. Vegetables, whole grains, and foods such as tomatoes can fit the plan, but lycopene or cruciferous vegetables are not proven stand-alone treatments or guaranteed prevention.', 'Prevent constipation/straining with tolerated fiber, appropriate fluids, walking, and prescribed laxative/stool-softening treatment. Severe abdominal pain, distention, vomiting, or failure to pass stool/gas needs assessment rather than more fiber alone.', 'The supplied 6–8 glasses/day is a common general suggestion, not a universal prescription. Tailor intake to renal/cardiac status, vomiting/diarrhea, catheter/procedure needs, and nuclear-medicine instructions. Drinking water cannot fix a blocked catheter.', 'During ADT, assess calcium/vitamin D intake, bone/fracture risk, and muscle preservation; use age-appropriate totals, supplement gaps, and prescribed bone therapy when indicated. Avoid automatic high-dose supplements.', 'Avoid vitamin E supplements for prostate cancer prevention; SELECT found increased risk with the studied supplementation. Do not substitute selenium or another supplement as a proven preventive treatment.', 'Support healthy weight and moderation of processed/red meats and excess saturated fat without claiming every high-fat dairy food causes cancer. Reduce caffeine, alcohol, acidic/spicy foods only as helpful for urinary/bowel symptoms; adjust fiber during radiation-related diarrhea with dietitian advice.'] }
      ],
      assessment: [
        { type: 'paragraph', text: 'Assess stage/risk, Grade Group/Gleason details, PSA trend and treatment context, metastatic sites, treatment intent, baseline continence/sexual function, fertility goals, comorbidities, medicines/supplements, cognition, and the patient’s priorities. Ask about risk/family history and provide appropriate genetic-counseling referral.' },
        { type: 'list', items: ['Urinary: frequency/nocturia, stream/emptying, urine amount/color/clots, dysuria, suprapubic pain/distention, retention, catheter patency/leakage, and renal function. Assess possible obstruction instead of advising straining.', 'Metastatic: new or changing bone/back pain, gait, leg strength/sensation, and new bowel/bladder dysfunction; assess fractures, weight loss, fatigue/anemia, and organ-specific symptoms.', 'Postoperative: vital signs/perfusion, pain, wound/drain, bleeding, catheter/irrigation orders, accurate fluid balance, mobility/VTE risk, bowel function, mental status and relevant sodium/renal tests.', 'Systemic therapy: CBC/ANC, infection/fever, neuropathy, edema, renal/hepatic and drug-specific monitoring; ADT bone/metabolic/CV, sexual and mood effects; radiation instructions and home practicality.', 'Psychosocial/home: knowledge, anxiety/depression, language/health literacy, relationships/support, continence supplies, ability to manage a catheter, transport/access, and teach-back of urgent signs.'] }
      ],
      diagnoses: [
        { type: 'paragraph', text: 'Select program-approved terms and support actual diagnoses with the patient’s findings.' },
        { type: 'list', items: ['Impaired urinary elimination, retention, or incontinence when supported by symptoms/examination.', 'Acute postoperative/procedural pain or chronic/cancer-related pain when present.', 'Risk for bleeding, infection, or fluid/electrolyte imbalance based on surgery, irrigation, cytopenias, or treatment.', 'Impaired mobility/activity intolerance, fatigue, or risk for falls/fracture based on neurological, skeletal, medicine, or functional findings.', 'Constipation, inadequate intake, or skin concerns when present.', 'Anxiety/fear, sexual-health/body-image concerns, and learning/self-management needs according to patient goals. Suspected cord compression, sepsis, and obstructed drainage require urgent medical assessment, not only a routine nursing diagnosis.'] }
      ],
      priorities: [
        { type: 'callout', title: 'First action: identify the urgent problem', text: 'Assess ABCs, vital signs/perfusion, pain, urinary drainage/obstruction, and neurological findings in context. New back pain with weakness or bowel/bladder changes suggests possible cord compression; absent catheter drainage with painful distention suggests obstruction. Both need urgent escalation, not routine exercises or hydration alone.' },
        { type: 'list', items: ['For suspected spinal cord compression, activate the urgent oncology/spinal pathway, protect against unsafe movement, and prepare for time-critical evaluation/treatment. Do not wait for complete paralysis.', 'For poor drainage during ordered CBI, check kinks/dependent loops and fluid totals, assess pain/distention, stop irrigation inflow if outflow is obstructed, and promptly obtain skilled/urologic review. Do not keep filling an obstructed bladder or force an arbitrary-volume flush.', 'After radical prostatectomy, catheter dislodgement/blocked drainage needs prompt urology advice to protect the anastomosis. Do not independently remove/reinsert or blindly manipulate the catheter.', 'Heavy/bright-red bleeding with large clots, hemodynamic change, acute confusion/fluid overload, fever/sepsis, or chest/respiratory/VTE symptoms takes priority over routine discharge teaching.', 'During chemotherapy, fever ≥100.4°F (38°C) requires immediate oncology contact/urgent assessment. Do not wait for a higher fever, known ANC, or a routine appointment.'] }
      ],
      plan: [
        { type: 'cards', items: [
          { title: '1. Safe urinary recovery', fields: [['Goal', 'Maintain drainage/renal function without unrecognized obstruction or significant bleeding and demonstrate procedure-appropriate catheter care.'], ['Actions', 'Verify the operation and orders, assess urine/clots/pain and fluid balance, protect the catheter, manage symptoms/bowel care, and arrange rapid review for problems.'], ['Evaluate', 'Adequate true urine output and acceptable drainage trend, no painful distention/untreated infection, and correct home technique.']] },
          { title: '2. Cancer control and complication detection', fields: [['Goal', 'Follow the agreed surveillance/treatment plan and identify progression, cord compression, or toxicity promptly.'], ['Actions', 'Track therapy-specific PSA/imaging and labs, evaluate bone/neurological symptoms, reinforce fever/radiation instructions, and coordinate oncology/urology.'], ['Evaluate', 'Review clinical and laboratory trends, symptoms/function, and access; a stable PSA alone is not enough to declare every treatment successful.']] },
          { title: '3. Function, continence, and quality of life', fields: [['Goal', 'Improve safe activity/continence and maintain nutrition, sexual-health support, coping, and feasible follow-up.'], ['Actions', 'Prescribed pelvic-floor/rehab plan, pain and bowel support, bone/metabolic health, sexual/fertility counseling, and chosen family/community assistance.'], ['Evaluate', 'Use patient-selected outcomes and teach-back rather than promising identical continence or erection recovery for everyone.']] }
        ] }
      ],
      interventions: [
        { type: 'heading', text: 'Catheter and ordered irrigation care' },
        { type: 'list', items: ['Verify whether the patient had radical prostatectomy, TURP, biopsy, or another procedure. Maintain closed drainage, secure tubing without traction according to the surgical plan, keep the bag below the bladder/off the floor, and prevent kinks/dependent loops.', 'When CBI is ordered, use the prescribed solution/rate and local protocol to maintain patency and the intended urine color, often clear/light pink. Record irrigant instilled and total drainage separately: true urine output equals drainage minus irrigant, accounting for measurement/time differences.', 'Assess increasing red drainage, clots, bladder distention/pain, leakage/spasm, and net outflow. If drainage is obstructed, stop inflow and escalate. Manual irrigation requires an appropriate order, competence, and procedure-specific urologic instructions; “irrigate 50 mL” is not a universal rule.', 'Assess patency before giving a prescribed antispasmodic. Monitor bleeding, volume status, sodium/renal changes as indicated, and systemic deterioration. Do not confuse classic intraoperative TURP syndrome with every episode of postoperative bladder irrigation.'] },
        { type: 'heading', text: 'Continuing nursing and home support' },
        { type: 'list', items: ['Administer prescribed analgesia, symptom medicines, and antibiotics only when ordered; reassess effect and adverse effects. Encourage early safe ambulation and prescribed VTE prevention while respecting bone/procedure restrictions.', 'Teach catheter/penile hygiene with soap/water, hand hygiene, bag emptying before it becomes too full (often about half-full), securement, supplies, and the contact plan. Do not teach a patient to reinsert a displaced postoperative catheter.', 'Coordinate pelvic-floor training at the prescribed time, continence supplies, erectile/sexual rehabilitation, nutrition/bowel support, ADT bone/metabolic care, and mood/coping resources.', 'Provide the exact brachytherapy or Pluvicto radiation-safety instructions and confirm household arrangements with teach-back. Arrange urology/oncology, lab, rehabilitation, and transport/home support.'] }
      ],
      education: [
        { type: 'paragraph', text: 'Explain anatomy, stage/risk/grade, treatment intent, and the difference between surveillance, watchful waiting, local treatment, and systemic therapy. Offer clear, culturally responsive risk education to Black patients and families while avoiding assumptions or coercion. Include chosen support people with permission and discuss community/psychological resources.' },
        { type: 'list', items: ['After surgery, gradually increase walking and follow the specific lifting, sports, sexual activity, and driving plan. “2 weeks” and “10 lb” are common example instructions, not universal recovery cutoffs. Do not drive while impaired by pain/sedating medicines or before safe movement/clearance.', 'Explain permanent changes and possible continence, orgasm/ejaculation, erection, and fertility effects. Practice pelvic-floor technique when the surgical/PT team advises, often after catheter removal; do not routinely Valsalva/strain to void.', 'Demonstrate catheter care, daily cleansing, bag positioning/emptying, and avoiding pulling. Some light blood may be expected, but worsening bright-red bleeding, large clots, distention, no drainage, or catheter loss needs prompt contact. Foul odor alone does not prove infection, but report it with symptoms or concerning changes.', 'Prevent constipation with individualized fluids/fiber, walking, and prescribed bowel medicines; do not self-use rectal treatments after pelvic surgery without clearance. Use wrapped ice only at an approved site/interval if instructed, avoiding skin injury or pressure on tubing.', 'Keep a thermometer and daytime/after-hours contacts. Call promptly for postoperative fever/chills, worsening wound redness/warmth/pain/pus, significant bleeding, low output, or persistent vomiting/diarrhea; during chemotherapy call immediately at ≥100.4°F (38°C). Breathing difficulty, chest symptoms, severe weakness or neurological changes needs emergency assessment.', 'For seeds or systemic radioligand therapy, use the actual radiation-safety card/instructions, including sex/contact, seed handling or body-fluid precautions. Do not substitute one treatment’s “2 months / 2 weeks” instructions for another.', 'Keep PSA and treatment-safety follow-ups even when well. Tell the team about hormones, finasteride, OTC medicines, and supplements; avoid vitamin E as a prevention strategy and do not self-change anticancer doses.'] }
      ],
      evaluation: [
        { type: 'list', items: ['Urinary recovery: appropriate true urine output, patent drainage and acceptable color/clot trend, no painful distention or untreated bleeding/infection; CBI endpoints apply only when irrigation is actually indicated.', 'Self-care/function: safe catheter technique and mobility, bowel comfort without straining, and improved continence with prescribed rehabilitation. Recovery and restrictions are procedure- and patient-specific.', 'Cancer response: PSA and imaging are interpreted in context. PSA should become undetectable after complete radical prostatectomy; after radiation it typically falls more slowly and can show a bounce. Persistent/rising trends need clinician review; one stable value does not prove all cancer is controlled.', 'Complications/toxicity: early reporting of bone/neurological changes, retention, infection/fever, bleeding, neuropathy, marrow/renal or ADT metabolic/bone effects; no assumption that bone pain is always a benign hormone flare.', 'Radiation safety: patient accurately explains the specific seed or radioligand instructions and has an achievable household plan, rather than applying the same contact/condom interval to every treatment.', 'Quality of life/follow-up: adequate individualized intake, activity and symptom control, useful coping/sexual-health support, access to appointments/medicines, and teach-back of the treatment plan and urgent contacts.'] }
      ]
    },
    clarifications: [
      { title: 'Current screening and risk wording', text: 'Retained the source-labeled USPSTF 55–69 discussion and added ACS’s November 12, 2026 update rather than treating one organization’s ages as universal. Qualified fixed familial risk multipliers, race/ethnicity absolutes, and diet claims; risk education supports informed access. Screening and evaluation of symptoms/known cancer are different.' },
      { title: 'Biopsy, anatomy, and grading', text: 'Corrected BPH to the transition/periurethral zone, DRE to palpation, and blood-in-semen terminology. Separated the imaging probe from the biopsy needle and added transperineal/MRI pathways. TURP can reveal incidental cancer but is not routine definitive cancer biopsy/surgery. Modern Gleason/Grade Groups replace an unqualified clinical 2–10 scale.' },
      { title: 'Surveillance, systemic treatment, and metastasis', text: 'Separated active surveillance from symptom-directed watchful waiting and restored surgery/radiation to the treatment outline. Docetaxel can be used before castration resistance; ADT commonly remains part of resistant-disease care. Bone-forming metastases can still fracture and compress the cord. Added the expanded Pluvicto indication and biomarker-specific PARP selection.' },
      { title: 'TURP versus radical surgery and catheter safety', text: 'Removed routine Valsalva advice and universal postoperative CBI/50-mL flushing. Obstructed outflow requires stopping irrigation inflow and escalation; fresh-anastomosis catheter manipulation/replacement needs urologic direction. Saline bipolar TURP differs from classic hypotonic-fluid TURP syndrome. Sexual/ejaculatory consequences and recovery instructions vary by operation.' },
      { title: 'Radiation, hydration, and homecare', text: 'Separated external beam, temporary HDR, permanent seeds, and systemic Pluvicto. The supplied fixed contact/condom intervals are not universal; Pluvicto has distinct label instructions. Hydration, fiber, weights/activity, ice and antibiotic use follow the individual plan. Completed the truncated incision warning with standard infection signs and filled missing nursing-process sections.' }
    ],
    references: [
      { title: 'NCI · Prostate cancer treatment', url: 'https://www.cancer.gov/types/prostate/patient/prostate-treatment-pdq', supports: 'Disease, stage/grade, local/systemic treatments, and patient-centered care.' },
      { title: 'ACS · Updated prostate screening (November 12, 2026)', url: 'https://www.cancer.org/cancer/types/prostate-cancer/detection-diagnosis-staging/acs-recommendations.html', supports: 'Current ACS ages/intervals and inherited-risk discussions.' },
      { title: 'ACS · 2026 screening guideline publication', url: 'https://acsjournals.onlinelibrary.wiley.com/doi/10.3322/caac.70112', supports: 'Informed screening, confirmation of elevated PSA, diagnostic refinement, and active surveillance.' },
      { title: 'USPSTF · Prostate cancer screening', url: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/prostate-cancer-screening', supports: 'Current final 55–69 shared-decision and age-70 routine-screening recommendations, distinguished from ACS.' },
      { title: 'NCI · PSA test', url: 'https://www.cancer.gov/types/prostate/psa-fact-sheet', supports: 'PSA limitations, repeat evaluation, BPH/inflammation and medicine effects.' },
      { title: 'EAU · Diagnostic evaluation (2026)', url: 'https://uroweb.org/guidelines/prostate-cancer/chapter/diagnostic-evaluation', supports: 'MRI/biopsy pathways, transperineal infection considerations, Grade Groups, staging, and molecular assessment.' },
      { title: 'EAU · Prostate cancer treatment (2026)', url: 'https://uroweb.org/guidelines/prostate-cancer/chapter/treatment', supports: 'Active surveillance versus watchful waiting, local therapies, and intensified metastatic treatment.' },
      { title: 'NCI · Hormone therapy for prostate cancer', url: 'https://www.cancer.gov/types/prostate/prostate-hormone-therapy-fact-sheet', supports: 'Agonist/antagonist/androgen-receptor distinctions, flare, treatment combinations, and bone/metabolic/sexual effects.' },
      { title: 'FDA · Pluvicto expanded indication (2025)', url: 'https://www.fda.gov/drugs/cancer-approvals/fda-expands-pluvictos-metastatic-castration-resistant-prostate-cancer-indication', supports: 'PSMA-positive mCRPC after ARPI when appropriate to delay taxane chemotherapy.' },
      { title: 'FDA · Pluvicto prescribing information (PDF)', url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/215833s021s024lbl.pdf', supports: 'Selection, marrow/renal safety, hydration, and treatment-specific contact/sex/sleep precautions.' },
      { title: 'DailyMed · Lynparza / olaparib', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=741ff3e3-dc1a-45a6-84e5-2481b27131aa', supports: 'Biomarker/prior-treatment indications, CBC/renal monitoring, interactions, and serious adverse effects.' },
      { title: 'MSK · Prostate surgery and home recovery', url: 'https://www.mskcc.org/cancer-care/patient-education/about-your-prostate-surgery', supports: 'Catheter, bowel, activity, sexual-function, and individualized postoperative teaching.' },
      { title: 'NSW ACI · Bladder irrigation and troubleshooting', url: 'https://aci.health.nsw.gov.au/networks/urology/resources/bladder-irrigation/overview', supports: 'Orders/competence, drainage assessment, fluid accounting, and action when outflow is obstructed.' },
      { title: 'NHS · TURP', url: 'https://www.nhs.uk/tests-and-treatments/transurethral-resection-of-the-prostate-turp/', supports: 'Obstruction-relieving procedure, catheter/bleeding and sexual/recovery distinctions.' },
      { title: 'EAU · Male LUTS treatment and bipolar TURP', url: 'https://uroweb.org/guidelines/management-of-non-neurogenic-male-luts/chapter/disease-management', supports: 'Transition-zone obstruction treatment and saline versus hypotonic-irrigant syndrome distinction.' },
      { title: 'MSK · LDR prostate brachytherapy', url: 'https://www.mskcc.org/cancer-care/patient-education/ldr-brachytherapy-prostate-cancer', supports: 'Permanent seeds, individual radiation-safety card, seed handling, urinary/rectal symptoms, and sexual precautions.' },
      { title: 'MSK · Brachytherapy types', url: 'https://www.mskcc.org/cancer-care/diagnosis-treatment/cancer-treatments/radiation-therapy/what-brachytherapy', supports: 'Permanent LDR versus temporary-source HDR treatment.' },
      { title: 'NICE NG234 · Spinal metastases and cord compression', url: 'https://www.nice.org.uk/guidance/ng234/chapter/Recommendations', supports: 'Urgent recognition/escalation for new back pain with neurological or sphincter symptoms.' },
      { title: 'CDC · Fever during chemotherapy', url: 'https://www.cdc.gov/cancer-preventing-infections/patients/fever.html', supports: 'Immediate oncology call/urgent assessment at 100.4°F/38°C.' },
      { title: 'NCI · SELECT vitamin E prevention results', url: 'https://www.cancer.gov/types/prostate/research/select-trial-results-qa', supports: 'Avoidance of vitamin E supplementation as a prostate cancer prevention strategy.' }
    ]
  },
  'breast-gynecologic-cancers': {
    title: 'Breast cancer', abbreviation: 'Breast / gynecologic cancers', week: 7, deck: 'breast-cancer',
    reviewed: 'November 15, 2026',
    reading: 'Course study guide, Topic 12: Breast and gynecologic cancers. Breast cancer is the main focus, with brief gynecologic comparisons and the requested cervical-screening/endometrial-biopsy points. Based on your supplied notes and Week 7 breast presentation. NCI and CDC were named in your notes; verified sources for clinical updates and completed nursing sections are linked below. The existing topic videos also include gynecologic and shared oncology material.',
    focus: [
      { section: 'risk', label: 'Breast cancer: risk reduction' },
      { section: 'interventions', label: 'Sentinel node biopsy care' },
      { section: 'priorities', label: 'Chemotherapy & fever' },
      { section: 'nonpharmacological', label: 'Cervical screening' },
      { section: 'diagnostics', label: 'Endometrial biopsy' }
    ],
    content: {
      overview: [
        { type: 'paragraph', text: 'Breast cancer is the most common non-skin cancer in women in the US and can also occur in men and other people with breast tissue. It involves uncontrolled growth of breast epithelial cells, most often ductal carcinoma and also lobular carcinoma. In situ disease remains confined; invasive cancer extends into surrounding tissue. Many tumors occur in the upper outer breast, but cancer can arise anywhere in the breast.' },
        { type: 'paragraph', text: 'Tumor biology guides treatment: estrogen/progesterone receptor status (ER/PR), HER2 expression/amplification, grade, and stage matter. Triple-negative means ER-negative, PR-negative, and HER2-negative; it does not mean no treatments exist. Inherited pathogenic variants such as BRCA1/BRCA2 increase susceptibility, but most breast cancers are not explained by one inherited variant. Tumor HER2 testing is different from inherited-risk testing.' },
        { type: 'paragraph', text: 'Cancer may spread through lymphatic and blood routes; regional axillary nodes are important for staging, and distant sites include bone, lungs, liver, and brain. Nodal involvement does not automatically mean distant metastasis, and spread is not required to pass through every node in a fixed sequence.' },
        { type: 'heading', text: 'Brief gynecologic comparison' },
        { type: 'list', items: ['Cervical cancer: usually begins in the transformation zone after persistent high-risk HPV infection. Viral E6/E7 effects on p53/Rb contribute to precancer and invasion. HPV 16/18 are major contributors, but not the only oncogenic types.', 'Endometrial cancer: arises in the uterine lining. Unopposed estrogen, obesity/chronic anovulation, estrogen-only therapy in a person with a uterus, and tamoxifen are relevant risks; not all subtypes are estrogen-driven. Lynch syndrome is another important inherited risk.', 'Ovarian/fallopian tube cancer: many high-grade serous cancers originate in the tube and spread within the peritoneum, causing seeding/ascites. BRCA-associated risk matters. Early symptoms may be subtle rather than always absent; “silent killer” should not discourage evaluation of persistent symptoms.'] }
      ],
      manifestations: [
        { type: 'heading', text: 'Breast cancer: findings to recognize' },
        { type: 'list', items: ['A new lump or thickening, often painless and sometimes hard/irregular or fixed. A soft, mobile, painful, or non-upper-outer-quadrant finding can still need evaluation; many cancers are detected on imaging before a lump is felt.', 'Skin dimpling/retraction, altered contour/asymmetry, edema or peau d’orange from lymphatic obstruction, erythema, or warmth. Rapid diffuse redness/swelling may indicate inflammatory breast cancer and warrants prompt assessment, including when initially thought to be infection.', 'New nipple inversion/retraction, persistent unilateral scaling/crusting or an eczema-like nipple change (possible Paget disease), or spontaneous unilateral bloody/clear-serous discharge.', 'Firm axillary or supraclavicular nodes. Examine with the clinical context; tenderness or its absence is not an independent cancer test.', 'Possible distant-disease symptoms: persistent bone/back or hip pain, cough/dyspnea, jaundice/hepatomegaly, or headache/neurological deficits. These symptoms have other causes but require assessment rather than assuming either benign disease or metastasis.'] },
        { type: 'heading', text: 'Brief gynecologic symptom reminders' },
        { type: 'cards', items: [
          { title: 'Cervical', fields: [['Recognize', 'Early disease may be asymptomatic. Postcoital, intermenstrual, or postmenopausal bleeding; watery/blood-tinged or foul discharge. Advanced findings can include pelvic/back pain, leg edema, hematuria, or rectal bleeding.']] },
          { title: 'Endometrial', fields: [['Recognize', 'Abnormal uterine bleeding, especially any bleeding after menopause; watery/bloody discharge. Pelvic pressure/pain, urinary symptoms, mass, or weight loss may occur later. Bleeding needs diagnostic evaluation, not just a screening Pap test.']] },
          { title: 'Ovarian / tubal', fields: [['Recognize', 'Persistent/new bloating, early satiety, pelvic/abdominal discomfort, bowel changes, urinary frequency/urgency, fatigue, increasing girth/ascites, mass, or unexplained weight loss. Persistence and change from baseline matter.']] }
        ] }
      ],
      risk: [
        { type: 'heading', text: 'Breast cancer risk factors' },
        { type: 'list', items: ['Increasing age, female sex, family/personal history, pathogenic inherited variants, dense breast tissue, and prior high-dose chest radiation increase risk. Include maternal and paternal family history; absence of family history does not exclude cancer.', 'Longer reproductive hormone exposure—such as menarche before 12 or menopause after 55—and some reproductive patterns (no pregnancy or later first full-term pregnancy) are associated with risk. These are associations, not reasons to blame the patient or prescribe pregnancy.', 'Alcohol, physical inactivity, and excess body weight particularly after menopause contribute. Tobacco cessation supports cancer and treatment health. Menopausal hormone-therapy risk depends on formulation, duration, and clinical context, especially combined estrogen/progestin.', 'Less or no breastfeeding is associated with a different risk profile; offer support when relevant without implying that breastfeeding guarantees prevention or that cancer is the patient’s fault.'] },
        { type: 'heading', text: 'Risk reduction and inherited-risk counseling' },
        { type: 'list', items: ['Support appropriate weight, regular activity, alcohol limitation, tobacco avoidance, and informed discussion of menopausal hormones. Do not abruptly stop prescribed treatment without review.', 'Offer risk assessment and appropriate genetic counseling/testing for BRCA1/BRCA2 and other indicated genes. HER2 is chiefly a tumor biomarker, not a routine inherited-risk screening test.', 'Selected people at increased risk may consider risk-reducing endocrine medicine: tamoxifen in pre/postmenopausal patients; raloxifene or an aromatase inhibitor in selected postmenopausal patients. Balance breast benefit against thrombotic, uterine, bone, and other risks. These primarily prevent hormone-sensitive disease and are not automatically effective for every BRCA carrier.', 'Selected high inherited-risk patients may consider bilateral risk-reducing mastectomy and/or gene-appropriate risk-reducing salpingo-oophorectomy after counseling about age, fertility, menopause, and residual risk. Ovarian/tubal risk reduction is a distinct goal; removing ovaries is not a universal breast-prevention requirement.'] }
      ],
      diagnostics: [
        { type: 'heading', text: 'Breast workup: imaging, tissue, biomarkers, and staging' },
        { type: 'cards', items: [
          { title: 'Examination and mammography', fields: [['Purpose', 'Diagnostic assessment of a symptom or abnormal screen includes examination and appropriate imaging for masses, calcifications, or asymmetry. A normal screen does not dismiss a persistent new symptom.'], ['Nursing care', 'Follow instructions about deodorant/lotion/powder on the breast/axilla that day; explain brief compression. Scheduling after menses may reduce tenderness when convenient, but do not delay necessary diagnostic evaluation to wait for a cycle.']] },
          { title: 'Ultrasound and breast MRI', fields: [['Ultrasound', 'Distinguishes cystic/solid features and guides biopsy. It is often an adjunct, but can be first-line imaging for a palpable finding in younger or pregnant patients; “never first line” is incorrect.'], ['MRI', 'Selected high-risk screening or assessment of extent/additional lesions. Review MRI-conditional implants/metal, claustrophobia, possible pregnancy, and gadolinium/renal considerations if contrast is planned; an implant is not automatically a permanent MRI prohibition.']] },
          { title: 'Breast biopsy', fields: [['Purpose', 'Tissue pathology establishes the diagnosis and reports invasive/in situ type and grade. Imaging alone does not provide the complete tissue diagnosis.'], ['Nursing care', 'Confirm consent, allergies, anticoagulant/bleeding review, and the actual procedure/anesthetic plan. NPO and an escort depend on sedation/anesthesia; not every local core biopsy requires fasting. Afterward, use the ordered pressure/dressing/wrapped cold care and report expanding swelling, persistent bleeding, fever, or increasing redness/pain.']] },
          { title: 'Three different kinds of tumor / genetic information', fields: [['ER / PR / HER2', 'Tests on tumor tissue guide systemic therapy. ER/PR are hormone receptors; HER2 protein/amplification testing guides HER2-directed options.'], ['Germline testing', 'Blood/saliva testing for inherited pathogenic variants such as BRCA1/BRCA2 informs personal/family risk and selected treatment choices. Offer counseling and protect confidentiality.'], ['Tumor genomic assays', 'Selected recurrence-risk assays help guide chemotherapy decisions in particular early-stage cancers; they are different from inherited BRCA testing and do not apply to everyone.']] },
          { title: 'Sentinel lymph node biopsy (SLNB)', fields: [['Purpose', 'Samples the first draining node(s) for staging, usually with less morbidity than full axillary dissection. A positive node does not automatically require every remaining node to be removed; selected low-risk patients may omit SLNB under the oncology plan.'], ['Nursing care', 'Review mapping-agent allergy and tracer/dye teaching; postoperative incision, fluid collection, arm function, and swelling assessment are detailed under Nursing management.']] }
        ] },
        { type: 'heading', text: 'Brief gynecologic focus: endometrial biopsy' },
        { type: 'paragraph', text: 'Indications include postmenopausal bleeding, AUB at age 45 or older, or younger patients with persistent bleeding/unopposed-estrogen or other risks (for example, obesity, chronic anovulation/PCOS, tamoxifen, Lynch syndrome). ACOG’s April 2026 update recommends both transvaginal ultrasound and endometrial sampling for most initial postmenopausal-bleeding evaluations; a thin stripe is not an automatic reason to dismiss bleeding. Histology is needed for diagnosis, and an insufficient/negative blind sample with persistent symptoms may need further assessment or hysteroscopy.' },
        { type: 'paragraph', text: 'Before sampling, verify consent, pregnancy exclusion when relevant, infection/bleeding/medicine review, and an individualized pain plan; an NSAID 30–60 minutes beforehand may be offered when safe but is not adequate for everyone. Empty the bladder, provide privacy and support, and monitor vasovagal symptoms. Mild cramps/spotting can last a few days. Follow the actual aftercare interval for intercourse/tampons and avoid douching; report heavy bleeding (for example, soaking a pad in an hour), severe/worsening pain, fever, or foul discharge promptly.' }
      ],
      medical: [
        {
          "type": "paragraph",
          "text": "Breast treatment depends on stage, invasive/in situ type, grade, ER/PR/HER2 and other relevant biomarkers, previous therapies, health, fertility goals, and preferences. Distinguish local treatment from systemic treatment and neoadjuvant (before surgery) from adjuvant (after surgery) therapy. Not every patient needs every modality."
        },
        {
          "type": "list",
          "items": [
            "Surgery: lumpectomy/breast-conserving surgery removes the tumor with a margin; mastectomy removes breast tissue. Nodal staging/dissection is a separate individualized decision. Offer discussion of reconstruction, external prosthesis, or flat closure as appropriate.",
            "Radiation: commonly follows breast conservation and is used after selected mastectomies or for palliation. Selected patients may safely omit it after specialist assessment; treatment is not identical for all stages.",
            "Systemic treatment: chemotherapy, HR-directed endocrine treatment, HER2/other targeted therapy, or immunotherapy may reduce recurrence risk, shrink disease before surgery, or control metastatic cancer and symptoms.",
            "Address fertility preservation before potentially gonadotoxic treatment, pregnancy/contraception and menopausal effects, supportive/palliative care, distress, and practical access throughout the plan. Breast surgery alone does not cause surgical menopause; ovarian removal or ovarian-suppressing/gonadotoxic treatment can."
          ]
        },
        {
          "type": "paragraph",
          "text": "Gynecologic care remains cancer-specific: cervical, endometrial, and ovarian/tubal disease have different surgery, radiation, and biomarker-guided systemic pathways. These breast regimens should not be copied automatically to pelvic cancers. Refer abnormal bleeding or persistent pelvic/abdominal findings for appropriate gynecologic evaluation."
        },
        {
          "type": "heading",
          "text": "Brief gynecologic treatment comparison"
        },
        {
          "type": "list",
          "items": [
            "Cervical cancer: selected early disease may receive surgery or fertility-preserving treatment. Locally advanced disease often uses radiation with concurrent chemotherapy; additional systemic options depend on stage and biomarkers.",
            "Endometrial cancer: commonly hysterectomy with bilateral salpingo-oophorectomy and surgical staging. Additional radiation, hormonal, chemotherapy or immunotherapy treatment depends on stage, risk and biomarkers. Fertility-preserving management is specialist-directed for selected cases.",
            "Epithelial ovarian/fallopian-tube/primary peritoneal cancer: commonly cytoreductive surgery and platinum-based chemotherapy, with maintenance selected according to response, biomarkers and patient factors. These are distinct pathways, not breast endocrine treatment applied to every gynecologic cancer."
          ]
        }
      ],
      medications: [
        { type: 'cards', items: [
          { title: 'Chemotherapy: examples from your notes', fields: [['Agents / role', 'Doxorubicin, cyclophosphamide, and paclitaxel are examples, used in selected combinations/sequences. They disrupt cancer-cell growth; doses and supportive medicines follow the actual oncology regimen.'], ['Nursing care', 'Check ordered CBC/ANC, platelets, renal/hepatic results, dose/route, line safety, and supportive prescriptions. Assess infection, anemia/fatigue, bleeding, nausea, mucositis, and neuropathy.'], ['Agent-specific concerns', 'Doxorubicin: cumulative cardiac injury and vesicant extravasation. Paclitaxel: neuropathy and hypersensitivity. Cyclophosphamide: urinary/bladder injury risk; hydration, voiding advice, and mesna use are regimen-specific—not mandatory identical protocols for every breast dose.']] },
          { title: 'Endocrine therapy for HR-positive disease', fields: [['Examples / selection', 'Tamoxifen is a SERM used in pre/postmenopausal patients. Toremifene and the SERD fulvestrant have selected, often advanced-disease roles. Aromatase inhibitors include anastrozole, letrozole, and exemestane; in premenopausal patients they require ovarian suppression rather than use as effective monotherapy.'], ['Tamoxifen / SERM safety', 'Assess VTE history, interactions, hot flashes, and abnormal vaginal bleeding. Report leg swelling/pain, chest pain/dyspnea, or stroke symptoms urgently; investigate bleeding. Not every endocrine agent has the same uterine/thrombotic risk profile.'], ['Aromatase inhibitor safety', 'Assess arthralgia, bone loss/fracture risk, menopausal symptoms, and adherence. Coordinate bone-risk assessment/DXA when indicated, tailored activity, adequate calcium/vitamin D, and prescribed bone-protective treatment when appropriate.']] },
          { title: 'HER2-directed and other targeted therapy', fields: [['Examples', 'Trastuzumab (Herceptin) and pertuzumab (Perjeta) are used in selected HER2-positive cancers. Other targeted agents/antibody-drug conjugates have their own biomarker and stage requirements; do not treat all trastuzumab-containing products as interchangeable.'], ['Nursing care', 'Assess baseline and interval LVEF/cardiac function and heart-failure symptoms, infusion reactions, and agent-specific labs/risks. Doxorubicin and HER2 therapies can both affect the heart; verify the intended sequencing and monitoring. New dyspnea, edema, chest symptoms, or infusion instability needs assessment.']] },
          { title: 'Immunotherapy and supportive medicines', fields: [['Immunotherapy', 'Selected triple-negative cancers may receive a checkpoint inhibitor such as pembrolizumab according to stage/biomarkers. New dyspnea/cough, significant diarrhea, rash, or endocrine symptoms can signal immune toxicity and need prompt review.'], ['Supportive treatment', 'Use prescribed antiemetics, analgesia, mouth care, bowel support, and selected growth-factor or infection prophylaxis according to risk. Do not self-start supplements/herbal products or change oral anticancer doses without oncology/pharmacy advice.']] }
        ] }
      ],
      nonpharmacological: [
        { type: 'heading', text: 'Breast awareness and screening' },
        { type: 'paragraph', text: 'Teach awareness of usual appearance/feel and prompt reporting of changes. A mandated monthly self-exam has not been established as a mortality-reducing screening replacement; clinical examination can evaluate symptoms and support care but does not replace indicated imaging. Address language, cost, transport, health literacy, and cultural/personal barriers; awareness events can help connect people with ongoing screening and follow-up.' },
        { type: 'list', items: ['Average-risk schedules differ: USPSTF recommends mammography every 2 years from ages 40–74; ACR/SBI recommends annual screening from 40 and risk assessment by 25. Label the source rather than presenting annual screening as the only universal standard.', 'High-risk patients may need earlier mammography and/or annual MRI on a risk-specific schedule. More frequent imaging is not automatically better for every patient with family history or dense breasts.', 'Tailor screening to remaining breast tissue, previous cancer/surgery, age, inherited risk, and hormone exposure, including gender-affirming treatment; do not decide from outward presentation or legal sex alone. Symptomatic assessment is different from routine screening.'] },
        { type: 'heading', text: 'Breast recovery and quality of life' },
        { type: 'paragraph', text: 'Use graded activity, prescribed shoulder/arm ROM and rehabilitation, fatigue pacing, body-image/sexual-health support, counseling, and shared decisions about reconstruction/prosthesis. Protect skin and use the radiation team’s cleansing/moisturizer guidance. Suspected lymphedema needs assessment and specialist therapy, not automatic self-prescribed compression or aggressive massage.' },
        { type: 'heading', text: 'Brief gynecologic focus: cervical screening' },
        { type: 'list', items: ['Apply routine schedules to asymptomatic, average-risk people with a cervix. USPSTF’s current final 2018 recommendation: no screening under 21; ages 21–29 Pap/cytology every 3 years; ages 30–65 Pap every 3 years, primary hrHPV every 5 years, or cotesting every 5 years. Do not present a draft as a final recommendation.', 'ACS uses a different starting age: 25. Its updated pathway prefers clinician-collected primary HPV every 5 years; approved self-collected vaginal HPV testing is acceptable every 3 years after a negative result. Cotesting every 5 years or Pap every 3 years are alternatives when primary HPV testing is unavailable.', 'Stopping at/after 65 requires the chosen guideline’s adequate negative history and no high-risk reason for surveillance. Updated ACS exit guidance includes negative clinician HPV/cotests at 60 and 65 (final test at least 65), or its specified alternative pathway. Do not stop solely because of age or merge different organizations’ exit rules.', 'After total hysterectomy, verify the cervix was removed and the indication/history. Prior CIN2+/AIS/cancer, HIV/immunocompromise, or DES exposure requires individualized follow-up; after treated high-grade precancer, surveillance commonly continues for at least 25 years. HPV vaccination does not remove screening needs, and symptoms/abnormal results require diagnostic follow-up rather than waiting for the next routine screen.'] }
      ],
      'adverse-effects': [
        { type: 'cards', items: [
          { title: 'Surgery / nodes', fields: [['Watch for', 'Bleeding/hematoma, seroma, wound infection, pain, shoulder stiffness, altered sensation, arm/chest lymphedema, and body-image distress.'], ['Act', 'Trend wound/drain and function findings; report new swelling/tightness, fever/redness, or expanding painful swelling. Sentinel biopsy reduces but does not eliminate lymphedema risk. Pelvic surgery has different risks, including possible surgical menopause if ovaries are removed.']] },
          { title: 'Cytotoxic chemotherapy', fields: [['Watch for', 'Neutropenia/infection, anemia, thrombocytopenia/bleeding, nausea/vomiting, mucositis, alopecia, and fertility effects. Agent-specific cardiac, nerve, urinary, and extravasation injury require monitoring.'], ['Act', 'A temperature ≥100.4°F (38°C) during chemotherapy warrants an immediate oncology call/urgent assessment under the written plan. Do not wait to prove neutropenia or for additional symptoms.']] },
          { title: 'Endocrine and targeted / immune therapies', fields: [['Endocrine', 'Tamoxifen: hot flashes, VTE, uterine/endometrial risk. AIs: arthralgia, bone loss, fractures. Review reproductive/menopausal and drug-specific effects.'], ['Targeted / immune', 'Trastuzumab/selected HER2 therapies: cardiac dysfunction and infusion reactions. Checkpoint therapy: potentially serious immune effects involving lungs, bowel, endocrine glands, and other organs. Symptoms may overlap infection or progression; report rather than self-diagnose.']] },
          { title: 'Radiation', fields: [['Breast / chest', 'Dermatitis, skin tenderness/peeling, fatigue, and selected later tissue/heart/lung effects depend on field and dose.'], ['Pelvic distinction', 'Pelvic radiation can cause bowel/urinary symptoms and vaginal changes/stenosis; these are not expected from every breast radiation field. Follow the site-specific prevention/aftercare plan.']] }
        ] }
      ],
      nutrition: [
        { type: 'heading', text: 'Maintain intake and manage symptoms' },
        { type: 'list', items: ['Use smaller frequent nutrient-dense meals/snacks if helpful, rather than requiring everyone to eat exactly 5–6 meals. Match energy/protein to weight, treatment, and healing needs; involuntary loss or poor intake warrants dietitian review.', 'For nausea/odor sensitivity, try cool or room-temperature foods and avoid personally aggravating greasy/fried/spicy foods. For metallic taste, nonmetal utensils may help; rinse the mouth before meals using recommended care.', 'For mucositis, choose soft, bland, moist foods; avoid very hot, rough/crunchy, acidic, or irritating foods and alcohol-containing mouthwash. Report pain or swallowing difficulty that prevents intake.', 'Protein choices include poultry/fish, safely cooked eggs, yogurt, legumes, and suitable shakes. High-calorie supplementation is useful for inadequate intake, not automatically necessary for every patient.'] },
        { type: 'heading', text: 'Food safety, fluids, and longer-term health' },
        { type: 'list', items: ['Wash produce, prevent cross-contamination, cook meat/eggs/seafood safely, and avoid unpasteurized products. Avoid food with uncertain handling, such as buffets/salad bars during significant immunosuppression. A blanket ban on all raw fruits/vegetables or a universal restrictive “neutropenic diet” is not required; follow the center’s risk-specific instructions.', 'Maintain appropriate hydration and replace vomiting/diarrhea losses according to the plan. Do not force a universal high fluid volume to “flush all chemotherapy”; renal/heart limits and bladder-protective regimens differ.', 'For AI use or treatment-induced menopause, assess bone health and age-appropriate total calcium (often 1,000–1,200 mg/day in adults) and vitamin D, with supplementation based on intake/risk. A 1,200-mg target is not universal for every patient.', 'When recovery permits, support a plant-forward varied diet, fiber as tolerated, activity, and a healthy weight without crash dieting or promises that one food prevents recurrence. Review supplement interactions with oncology.'] }
      ],
      assessment: [
        { type: 'paragraph', text: 'Assess the actual diagnosis, stage/grade, ER/PR/HER2 and relevant inherited/genomic results, treatment intent and current phase, allergies, comorbidities, pregnancy/menopausal status, fertility goals, and complete medication/supplement use. Ask about understanding, preferred language, distress/body image, sexuality, support, transport/cost, and the patient’s priorities.' },
        { type: 'list', items: ['Before/after surgery: baseline arm ROM/function/swelling, wound/skin, pain, mobility/VTE risks, incision/drain output and character, hematoma/seroma, infection, and ability to perform home care.', 'During systemic therapy: vital signs/temperature and infection symptoms; CBC/ANC/platelets and indicated renal/hepatic results; mucosa, intake/weight/hydration, bowel/urine symptoms, neuropathy/falls, fatigue, and line/infusion-site findings.', 'For doxorubicin/HER2 therapy: cardiac history, ordered LVEF surveillance, edema, breathlessness, chest symptoms, and exercise tolerance. For endocrine therapy: VTE/abnormal bleeding, menopausal symptoms, bone/joint concerns, and adherence.', 'Brief gynecologic assessment: abnormal/postmenopausal bleeding, persistent pelvic/abdominal or urinary/GI symptoms, screening/cervix/surgical history, and relevant inherited risk. Use trauma-informed, consent-based assessment and preserve privacy.'] }
      ],
      diagnoses: [
        { type: 'paragraph', text: 'Use the program’s accepted terminology and actual findings. Risks differ before surgery, during treatment, and in survivorship.' },
        { type: 'list', items: ['Acute pain related to surgery/procedures, or chronic/cancer-related pain when present.', 'Risk for infection related to neutropenia, compromised skin, surgery, or vascular access; suspected sepsis is a medical emergency, not just an education need.', 'Risk for bleeding related to thrombocytopenia, surgery, or relevant medicines; impaired skin/tissue integrity when supported by findings.', 'Impaired physical mobility/self-care ability or fatigue/activity intolerance when pain, arm limitation, neuropathy, or treatment affects function.', 'Nausea, inadequate nutritional intake, or fluid-volume concerns when supported by intake, symptoms, and examination.', 'Anxiety/fear, disturbed body image, sexual-health concerns, or learning/self-management needs based on the patient’s assessment and goals.'] }
      ],
      priorities: [
        { type: 'callout', title: 'Chemotherapy + temperature ≥100.4°F (38°C): act immediately', text: 'Teach patients to call oncology immediately and follow the urgent assessment plan; do not wait an hour or take an antipyretic to hide fever before contacting the team. Tell ED triage about current chemotherapy. Fever may be the only infection sign, and sepsis can also occur without fever.' },
        { type: 'heading', text: 'Clinical febrile-neutropenia assessment' },
        { type: 'paragraph', text: 'Formal fever criteria commonly use one oral temperature ≥38.3°C (101°F), or ≥38.0°C sustained for an hour, together with neutropenia. ANC <500/microliter is severe neutropenia. These diagnostic definitions do not replace the lower patient call threshold or justify waiting when infection is suspected. Assess ABCs, vital signs/perfusion/mental status, recent treatment, line/sites, CBC/ANC, renal/liver results, and other indicated sepsis studies. Obtain blood cultures from appropriate peripheral/line sources before antibiotics when this will not delay treatment; urine/sputum and other tests are indication-based.' },
        { type: 'paragraph', text: 'Activate the local oncology/sepsis pathway and give the prescribed empiric antibacterial treatment promptly—ASCO/IDSA recommends an initial dose within 1 hour of triage for febrile neutropenia. Do not wait for culture results. Instability/high risk generally needs inpatient IV treatment; outpatient oral pathways are only for carefully assessed low-risk patients with reliable follow-up.' },
        { type: 'heading', text: 'Other first-action problems' },
        { type: 'list', items: ['Infusion anaphylaxis, respiratory/hemodynamic instability, major bleeding, suspected PE/stroke, or spinal/neurological compromise takes priority over routine teaching.', 'For suspected vesicant extravasation, stop the infusion, leave access in place initially, do not flush, and activate the extravasation protocol for aspiration/antidote and agent-specific care.', 'After breast surgery, assess pain, wound/drain, swelling, arm function, and safe discharge. During stable treatment, prioritize toxicity detection, nutrition/function, communication, and adherence support.'] }
      ],
      plan: [
        { type: 'cards', items: [
          { title: '1. Safe recovery and arm function', fields: [['Goal', 'Wound/drain recovery follows the individual plan; pain is acceptable for sleep/ADLs and prescribed shoulder movement.'], ['Actions', 'Assess wound/drain and swelling, administer prescribed analgesia, teach drain care, progress surgeon-approved ROM/activity, and arrange help/rehabilitation.'], ['Evaluate', 'No unrecognized infection/hematoma/seroma, safe self-care, and timely assessment of new swelling or functional limitation.']] },
          { title: '2. Detect treatment emergencies early', fields: [['Goal', 'Patient explains the fever threshold/contact plan and promptly reports toxicity; prescribed treatment is delivered with required monitoring.'], ['Actions', 'Trend symptoms/labs and cardiac function, reinforce drug-specific red flags, verify infusion safety, and address access to urgent care.'], ['Evaluate', 'Teach-back is accurate and concerning changes trigger assessment; “no fever” or “normal EF once” alone does not prove ongoing safety.']] },
          { title: '3. Maintain nutrition, coping, and continuity', fields: [['Goal', 'Adequate individualized intake/function and meaningful support; treatment and surveillance appointments remain feasible.'], ['Actions', 'Treat symptoms, involve dietitian/social work and chosen support people, address body image/fertility/sexual health, and agree on a written follow-up plan.'], ['Evaluate', 'Review weight/intake, symptoms, patient-selected goals, understanding, and practical barriers rather than demanding a universally stable weight or a guaranteed absence of recurrence.']] }
        ] }
      ],
      interventions: [
        { type: 'heading', text: 'Exam focus: sentinel lymph node biopsy care' },
        { type: 'list', items: ['Explain that mapping locates the first draining node(s); pathology determines whether they contain cancer. A radioisotope and/or blue dye may be used, with different preparations. Review prior dye reactions/allergies and the procedure/anesthetic plan.', 'Blue dye—not the mere presence of a radiotracer—may temporarily discolor skin and urine blue/green, commonly for a day or two; skin staining can last longer. Follow the specific agent’s information and monitor for allergic reactions.', 'Assess breast/axillary incision, bleeding/hematoma, seroma, infection, pain, sensation, arm movement, and new arm/chest swelling or tightness. Support prescribed gentle ROM; timing depends on reconstruction, drains, and the surgeon’s plan.', 'Teach lymphedema awareness, skin protection/infection recognition, and appropriate activity. Prefer an unaffected site when feasible, especially with established lymphedema, while respecting local instructions and preferences. Evidence does not support a lifelong absolute ban on every BP/needle procedure in every at-risk arm after node surgery; do not delay necessary care because no other site is convenient.', 'Avoid tight constriction and arrange prompt evaluation/lymphedema referral for new persistent swelling. Do not promise SLNB completely prevents lymphedema or forbid normal progressive arm use.'] },
        { type: 'heading', text: 'Ongoing breast oncology and discharge care' },
        { type: 'list', items: ['Perform regimen-specific symptom, blood-count, renal/hepatic, cardiac, and infusion-site checks. Use hand hygiene and risk-based infection/food/line care; avoid rectal temperatures/procedures when neutropenic or thrombocytopenic. Private-room/flower restrictions are protocol/risk-specific, not mandatory for all outpatient breast chemotherapy.', 'Administer prescribed symptom relief, support mouth/skin care, nutrition/hydration and safe activity, and report new toxicity rather than normalizing severe symptoms.', 'If a JP drain is present, demonstrate emptying, maintaining suction, measuring/recording output, securement, and when to call. Removal depends on the surgical plan and output—not a universal fixed day or amount.', 'Provide instructions for incision care, pain, lifting/driving/ROM, medication use, urgent symptoms, and daytime/after-hours contacts. Confirm support, supplies, appointments, and transport using teach-back.'] }
      ],
      education: [
        { type: 'paragraph', text: 'Personalize information to language, health literacy, treatment phase, and preferences. Explain how stage and ER/PR/HER2 results affect the actual plan; distinguish inherited BRCA testing from tumor biomarkers. With permission, include a chosen support person. Offer fertility referral before relevant treatment and discuss body image, sexuality, menopause, and practical support without assuming everyone wants the same reconstruction or family plan.' },
        { type: 'list', items: ['Keep a working thermometer and written oncology day/after-hours numbers. During chemotherapy, call immediately for ≥100.4°F (38°C), chills or concerning illness; do not wait for a higher number or self-mask fever before seeking advice.', 'Know the prescribed side-effect plan and urgent signs: breathing/chest symptoms, unilateral leg swelling, neurological changes, significant bleeding, infusion-site pain/swelling, severe diarrhea/vomiting or poor intake, abnormal vaginal bleeding on tamoxifen, and rapidly worsening wound/arm findings.', 'Demonstrate wound/drain care if relevant, report increasing redness/warmth/pain, purulent drainage or expanding swelling, and follow prescribed shoulder exercises and return-to-activity/lifting instructions.', 'Use skin protection and lymphedema awareness without fear-driven lifelong avoidance of all arm activity. Ask the surgical/lymphedema team about site-specific BP/needle advice when needed.', 'Maintain safe food handling, adequate intake, mouth care, activity and bone support as appropriate. Review all OTC medicines/supplements and oral-treatment missed-dose instructions with the team.', 'Follow the oncology surveillance plan based on surgery and residual tissue; routine screening schedules for average-risk people do not substitute for post-treatment follow-up. Complete cervical/bleeding evaluation when relevant rather than assuming a breast cancer diagnosis replaces other care.', 'Use teach-back: explain the treatment plan, how/when to call, medication red flags, home care, and next appointments. Reteach gaps and solve cost, transport, caregiver, and access problems.'] }
      ],
      evaluation: [
        { type: 'list', items: ['Recovery: incision/drain trends fit the procedure plan; pain is manageable and shoulder/arm function improves with prescribed activity. New swelling/tightness, infection signs, hematoma, or seroma is assessed rather than overlooked.', 'Treatment safety: symptoms, CBC/ANC/platelets, renal/hepatic and indicated cardiac trends are reviewed; fever is reported promptly and serious infection, bleeding, infusion injury, or organ toxicity is treated early. Absence of symptoms alone does not replace scheduled LVEF monitoring.', 'Medicine understanding: patient distinguishes therapies and reports tamoxifen thrombotic/uterine warnings, AI bone/joint concerns, and HER2/immune-treatment red flags. Adherence barriers are addressed without assuming side effects mean personal failure.', 'Nutrition/function: adequate individualized fluid, energy/protein intake and activity; nausea, mucositis, taste changes, neuropathy, and fatigue are controlled enough to support the patient’s goals.', 'Coping/follow-up: patient identifies useful supports, discusses emotional/body-image/sexual concerns if desired, and demonstrates teach-back of contacts, self-care, surveillance, and appointments.', 'Oncologic response: the team reviews pathology/imaging and disease-specific response/recurrence outcomes. Nursing evaluation supports safety and quality of life; no plan can guarantee stable EF, no lymphedema, normal weight, or freedom from cancer in every patient.'] }
      ]
    },
    clarifications: [
      { title: 'Breast focus and biomarker terminology', text: 'Breast cancer is the main page; the supplied gynecologic material is kept brief for comparison and exam points. Corrected the implication that all tumors are upper-outer, hard/fixed/painless or that spread follows one mandatory route. Separated tumor ER/PR/HER2, inherited BRCA testing, and recurrence-risk genomic assays.' },
      { title: 'Risk reduction and screening sources', text: 'Replaced required monthly self-exams with breast awareness and diagnostic assessment of changes. Annual ACR/SBI and biennial USPSTF mammography are labeled separately. Risk-reducing endocrine treatment/surgery is individualized; HER2 is not an inherited-risk screening test and every BRCA carrier is not automatically helped by the same preventive medicine.' },
      { title: 'Nodes, arm precautions, and recovery', text: 'SLNB has lower but nonzero morbidity; a positive node does not automatically require full dissection, and selected patients can omit staging surgery. Dye and radiotracer effects differ. Replaced the universal lifelong no-BP/no-needle rule with evidence-informed, individualized precautions, especially when lymphedema exists. Breast surgery alone does not cause surgical menopause.' },
      { title: 'Cervical screening and endometrial sampling', text: 'Separated the current final USPSTF pathway from updated ACS start, self-collection, and exit guidance rather than merging their ages/rules. High-risk surveillance is separate. Included ACOG’s 2026 postmenopausal-bleeding update and individualized biopsy pain/aftercare; a thin stripe or negative/insufficient blind sample does not settle every symptomatic case.' },
      { title: 'Fever, drug safety, and nutrition', text: 'Distinguished the immediate patient call threshold from formal febrile-neutropenia criteria; no waiting for cultures or an hour at home is advised. Cultures and precautions are indication/risk-based, not universal blanket testing/isolation. Added infusion/extravasation and immune-therapy safety, individualized bone/fluid/intake advice, and completed the nursing-process sections while retaining wound/drain, teaching, and coping details.' }
    ],
    references: [
      {
        "title": "NCI · Breast cancer diagnosis",
        "url": "https://www.cancer.gov/types/breast/diagnosis",
        "supports": "Imaging, tissue diagnosis, staging, biomarkers, and genomic versus inherited testing."
      },
      {
        "title": "NCI · Breast cancer causes and risk factors",
        "url": "https://www.cancer.gov/types/breast/causes-risk-factors",
        "supports": "Risk associations, inherited susceptibility, and prevention context."
      },
      {
        "title": "NCI · Risk-reducing breast surgery",
        "url": "https://www.cancer.gov/types/breast/causes-risk-factors/prevention/preventive-breast-surgery",
        "supports": "Selected inherited-risk surgery, residual risk, and breast versus ovarian/tubal goals."
      },
      {
        "title": "USPSTF · Breast screening (2024 final)",
        "url": "https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/breast-cancer-screening",
        "supports": "Biennial mammography at ages 40–74 for the specified average-risk population and evidence limits."
      },
      {
        "title": "ACR / SBI · Screening position (2026)",
        "url": "https://www.acr.org/News-and-Publications/Media-Center/2026/new-breast-cancer-screening-guidelines-may-cost-lives",
        "supports": "Annual mammography from 40 and risk assessment by 25, distinguished from USPSTF."
      },
      {
        "title": "NCI · Breast treatment overview",
        "url": "https://www.cancer.gov/types/breast/treatment",
        "supports": "Stage/biology-based local and systemic treatment choices."
      },
      {
        "title": "NCI · Chemotherapy for breast cancer",
        "url": "https://www.cancer.gov/types/breast/treatment/chemotherapy",
        "supports": "Selected neoadjuvant/adjuvant regimens and treatment effects."
      },
      {
        "title": "NCI · Breast endocrine therapy",
        "url": "https://www.cancer.gov/types/breast/treatment/hormone-therapy",
        "supports": "HR selection, SERMs/SERDs/AIs, ovarian suppression, and drug-specific effects."
      },
      {
        "title": "NCI · Targeted breast treatment",
        "url": "https://www.cancer.gov/types/breast/treatment/targeted-therapy",
        "supports": "Biomarker-specific options and distinctions among targeted agents."
      },
      {
        "title": "NCI · Breast immunotherapy",
        "url": "https://www.cancer.gov/types/breast/treatment/immunotherapy",
        "supports": "Selected triple-negative treatment and immune-effect monitoring."
      },
      {
        "title": "DailyMed · Herceptin (trastuzumab)",
        "url": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=492dbdb2-077e-4064-bff3-372d6af0a7a2",
        "supports": "LVEF monitoring, cardiac/infusion risks, and avoidance of product confusion."
      },
      {
        "title": "DailyMed · Tamoxifen citrate",
        "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8c0eb763-420a-4106-ba56-526b53a7f72b",
        "supports": "Thrombotic/uterine risks, indication-specific precautions, and benefit-risk review."
      },
      {
        "title": "NCI · Sentinel lymph node biopsy",
        "url": "https://www.cancer.gov/about-cancer/diagnosis-staging/staging/sentinel-node-biopsy-fact-sheet",
        "supports": "Mapping, pathology, staging role, and morbidity compared with larger node surgery."
      },
      {
        "title": "ASCO · Sentinel node guideline update (2025)",
        "url": "https://ascopubs.org/doi/10.1200/JCO-25-00099",
        "supports": "Selected SLNB omission and individualized axillary treatment after positive nodes."
      },
      {
        "title": "UCSF · Sentinel lymph node care",
        "url": "https://cancer.ucsf.edu/breastcarecenter/treatment/surgical_oncology/sentinel_lymph",
        "supports": "Blue dye versus tracer effects and procedure education."
      },
      {
        "title": "NICE NG101 · Breast cancer management (2025 updates)",
        "url": "https://www.nice.org.uk/guidance/ng101/chapter/recommendations",
        "supports": "Rehabilitation, lymphedema awareness, and lack of consistent evidence for blanket treated-side medical-procedure prohibitions."
      },
      {
        "title": "NCI · Lymphedema and cancer",
        "url": "https://www.cancer.gov/about-cancer/treatment/side-effects/lymphedema",
        "supports": "Swelling assessment, skin/function care, and precautions with established lymphedema."
      },
      {
        "title": "CDC · Watch out for fever",
        "url": "https://www.cdc.gov/cancer-preventing-infections/patients/fever.html",
        "supports": "Immediate call at 100.4°F/38°C during chemotherapy and urgent triage teaching."
      },
      {
        "title": "ASCO / IDSA · Fever and neutropenia guideline (PDF)",
        "url": "https://www.idsociety.org/globalassets/idsa/practice-guidelines/outpatient-management-of-fever-and-neutropenia.pdf",
        "supports": "Clinical definitions, rapid empiric therapy, and carefully selected outpatient management."
      },
      {
        "title": "NCI · Infection and neutropenia",
        "url": "https://www.cancer.gov/about-cancer/treatment/side-effects/infection",
        "supports": "Infection recognition, medication/fever precautions, and individualized prevention."
      },
      {
        "title": "eviQ · Extravasation management procedure",
        "url": "https://www.eviq.org.au/clinical-resources/extravasation/4156-extravasation-management-clinical-procedure",
        "supports": "Stop infusion, leave access initially, do not flush, and use drug-specific response."
      },
      {
        "title": "NCI · Nutrition during cancer",
        "url": "https://www.cancer.gov/about-cancer/treatment/side-effects/nutrition",
        "supports": "Symptom-adapted intake, protein/energy needs, hydration, and food safety."
      },
      {
        "title": "USPSTF · Cervical screening (current final 2018)",
        "url": "https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/cervical-cancer-screening",
        "supports": "Average-risk 21–29/30–65 options, high-risk exclusions, and cervix/hysterectomy considerations."
      },
      {
        "title": "ACS · Updated cervical screening guideline",
        "url": "https://www.cancer.org/cancer/types/cervical-cancer/detection-diagnosis-staging/cervical-cancer-screening-guidelines.html",
        "supports": "Age-25 start, clinician/self-collected HPV intervals, and guideline-specific exit criteria."
      },
      {
        "title": "ASCCP · ACS 2025 update advisory (PDF)",
        "url": "https://www.asccp.org/wp-content/uploads/2026/01/ASCCP-Practice-Advisory-ACS-Guidelines-Updated-12-19-25.pdf",
        "supports": "Self-collection and exit pathways; this summary is not presented as ASCCP endorsement of ACS."
      },
      {
        "title": "ASCCP · Risk-based consensus guidelines (PDF)",
        "url": "https://asccp.org/wp-content/uploads/2025/09/2019_ASCCP_Risk_Based_Management_Consensus.3.pdf",
        "supports": "Long-term surveillance after treated high-grade cervical precancer."
      },
      {
        "title": "ACOG · Updated postmenopausal-bleeding guidance (April 2026)",
        "url": "https://www.acog.org/news/news-releases/2026/04/acog-publishes-updated-guidance-evaluation-postmenopausal-bleeding",
        "supports": "Combined ultrasound and tissue sampling in most initial postmenopausal-bleeding evaluations."
      },
      {
        "title": "Johns Hopkins · Endometrial biopsy",
        "url": "https://www.hopkinsmedicine.org/health/treatment-tests-and-therapies/endometrial-biopsy",
        "supports": "Indications, pregnancy/bleeding review, preparation, cramping/spotting, and aftercare warnings."
      },
      {
        "title": "ACOG · In-office uterine/cervical pain management (2025)",
        "url": "https://www.acog.org/clinical/clinical-guidance/clinical-consensus/articles/2025/05/pain-management-for-in-office-uterine-and-cervical-procedures",
        "supports": "Individualized analgesia rather than a universally adequate single NSAID dose."
      },
      {
        "title": "NCI · Cervical cancer causes and prevention",
        "url": "https://www.cancer.gov/types/cervical/causes-risk-prevention",
        "supports": "Persistent high-risk HPV, multiple oncogenic types, and prevention context."
      },
      {
        "title": "NCI · Endometrial cancer treatment",
        "url": "https://www.cancer.gov/types/uterine/endometrial/treatment",
        "supports": "Uterine lining disease and cancer-specific management distinctions."
      },
      {
        "title": "NCI · Ovarian, tubal, and peritoneal cancer",
        "url": "https://www.cancer.gov/types/ovarian/patient/ovarian-epithelial-treatment-pdq",
        "supports": "Tubal origins, inherited risk, subtle symptoms, and peritoneal spread."
      },
      {
        "title": "NCI · Cervical cancer treatment",
        "url": "https://www.cancer.gov/types/cervical/treatment",
        "supports": "Stage-specific surgery, radiation/chemotherapy and fertility considerations."
      }
    ]
  },
  'meniere-disease': {
    title: 'Ménière’s disease', abbreviation: 'Ménière’s', week: null, deck: 'meniere-disease',
    reviewed: 'November 15, 2026',
    reading: 'Course study guide: Ménière’s disease—clinical signs/symptoms and hydrochlorothiazide. Based on your supplied notes and original presentation, retained under Additional presentations until its week is confirmed. Your notes cite Hinkle et al. (2025), Cleveland Clinic (2025), NIDCD (2024), and Basura et al. (2020); incomplete textbook citation details were not invented. Clinical sources supporting the completed sections and corrections are below.',
    focus: [
      { section: 'manifestations', label: 'Clinical signs & symptoms' },
      { section: 'medications', label: 'Hydrochlorothiazide (HCTZ)' }
    ],
    content: {
      overview: [
        { type: 'paragraph', text: 'Ménière’s disease is an inner-ear disorder affecting hearing and balance. Its characteristic pattern is recurrent spontaneous vertigo, sensorineural hearing loss, tinnitus, and aural fullness/pressure. It commonly starts in one ear, but the other ear can become involved. The timing and course vary, with symptom-free intervals or persistent imbalance between attacks.' },
        { type: 'heading', text: 'Endolymphatic hydrops and uncertain cause' },
        { type: 'paragraph', text: 'Endolymphatic hydrops is excess/distension of endolymph within the membranous labyrinth. Altered fluid and ion regulation is associated with disruption of cochlear and vestibular signaling. Increased pressure and membrane rupture/mixing of inner-ear fluids are proposed mechanisms, not a proven explanation for every attack. Hydrops can occur in other settings; it is not by itself synonymous with clinical Ménière’s disease.' },
        { type: 'paragraph', text: 'The underlying cause remains incompletely understood and may involve genetic, immune, and environmental factors. Published US estimates cited by NIDCD/MedlinePlus are about 615,000 affected people and roughly 45,000–45,500 new diagnoses annually; these are estimates, not a current census. The supplied “12 per 1,000” prevalence was not retained as an established US rate.' }
      ],
      manifestations: [
        { type: 'callout', title: 'Classic triad, plus aural fullness', text: 'Recurrent vertigo, fluctuating sensorineural hearing loss, and tinnitus are the classic triad; ear fullness/pressure is also characteristic. Definite Ménière’s attacks last 20 minutes to 12 hours; probable disease can include episodes lasting up to 24 hours. Longer or otherwise atypical symptoms require reassessment rather than automatically extending the definite criteria.' },
        { type: 'cards', items: [
          { title: 'Episodic rotational vertigo', fields: [['Recognize', 'Sudden spinning, often with nausea/vomiting, diaphoresis, pallor, nystagmus, and severe imbalance. It can be the most disabling symptom and creates an immediate injury risk.'], ['Between attacks', 'Some people feel well; others have residual disequilibrium or fatigue for hours to days or chronic unsteadiness. Not all dizziness between attacks is another Ménière’s spell.']] },
          { title: 'Sensorineural hearing loss', fields: [['Pattern', 'Often low- to mid-frequency and fluctuating early, usually in one ear initially. Hearing loss can become permanent and may involve both ears; the exact course is not inevitable or identical for every patient.'], ['Nursing implication', 'Assess hearing/communication needs and follow audiograms. A new sudden major hearing change needs urgent assessment, even in a person with known Ménière’s disease.']] },
          { title: 'Tinnitus and aural fullness', fields: [['Tinnitus', 'Roaring, buzzing, ringing, or hissing in the affected ear; intensity may change before or during an attack.'], ['Fullness / pressure', 'Plugging, heaviness, or pressure may precede attacks, but a reliable warning is not guaranteed. Do not rely on an “aura” to make driving or hazardous work safe.']] },
          { title: 'Tumarkin drop attacks', fields: [['Recognize', 'Abrupt vestibular falls, classically without loss of consciousness; these may occur without the usual spinning warning and are not simply every fall caused by severe vertigo.'], ['Nursing implication', 'Promptly assess injury and other causes of collapse. Loss of consciousness, neurological findings, or a new pattern warrants evaluation for syncope, seizure, stroke, or another cause.']] }
        ] }
      ],
      risk: [
        { type: 'list', items: ['Onset is most common in middle adulthood, often ages 40–60, but can occur outside this range.', 'Most cases are sporadic; some cluster in families. Familial percentages vary across populations/studies, so the supplied 7–10% is not a universal rate or proof that every case is inherited.', 'Migraine, allergy, immune/autoimmune conditions, infection, injury, and altered inner-ear drainage have been investigated as associations or possible mechanisms. RA, lupus, and ankylosing spondylitis are not diagnostic criteria or proven causes in every affected patient.', 'Stress, fatigue, illness, dietary patterns, or other personal factors may be associated with attacks; distinguish an individual trigger from an established cause of the disease.'] },
        { type: 'heading', text: 'Prevention and early recognition' },
        { type: 'paragraph', text: 'There is no established way to prevent all Ménière’s disease because its cause is uncertain. Encourage early assessment of recurrent vertigo with hearing/ear symptoms, audiology/ENT follow-up, an attack diary, safe activity, and a feasible symptom-management plan. Treatment may reduce disability and attacks, but does not guarantee prevention of progressive hearing loss. Patients should be supported in reporting symptoms rather than blamed for unpredictable attacks.' }
      ],
      diagnostics: [
        { type: 'paragraph', text: 'Diagnosis is clinical and audiometric; there is no single confirmatory test. Document episode timing/triggers, hearing changes, tinnitus/fullness, and alternative explanations, including vestibular migraine. Brief position-triggered episodes suggest a different pattern such as BPPV; persistent/new atypical vertigo may need neurological assessment.' },
        { type: 'cards', items: [
          { title: 'Definite versus probable disease', fields: [['Definite pattern', 'At least 2 spontaneous vertigo episodes lasting 20 minutes to 12 hours, documented low- to mid-frequency sensorineural hearing loss in the affected ear on at least one occasion, and fluctuating aural symptoms in that ear; another diagnosis must not better explain the presentation.'], ['Probable pattern', 'At least 2 vertigo/dizziness episodes lasting 20 minutes to 24 hours with fluctuating aural symptoms and no better explanation. Do not treat “up to 24 hours” as the definite-disease duration criterion.']] },
          { title: 'Audiometry and tuning-fork assessment', fields: [['Audiogram', 'Obtain formal hearing testing; it documents type, degree, frequencies, and asymmetry and provides a follow-up baseline. Low/mid-frequency changes are common early.'], ['Weber test', 'With asymmetric sensorineural loss, sound may lateralize to the better-hearing ear. It is a bedside clue, not a substitute for audiometry or an independent Ménière’s diagnosis.']] },
          { title: 'MRI and selected vestibular testing', fields: [['MRI', 'An internal auditory canal/posterior-fossa MRI may be offered for asymmetric sensorineural loss to evaluate alternatives such as vestibular schwannoma. It is not a compulsory confirmatory scan for every typical case. Follow implant/metal, pregnancy, and any contrast-safety instructions for the ordered study.'], ['ENG / VNG / electrocochleography', 'ENG/VNG records eye movements to assess vestibular function; electrocochleography records auditory electrical responses. These can have selected specialist roles, but routine vestibular testing or electrocochleography is not recommended solely to establish Ménière’s disease.']] },
          { title: 'Balance, neurological, and treatment-safety assessment', fields: [['Bedside examination', 'Assess nystagmus, gait when safe, hearing, cranial/neurological findings, and the symptom pattern. A guarded Romberg test assesses balance but is nonspecific; do not make an acutely unstable patient stand with eyes closed to prove a diagnosis.'], ['Safety tests', 'Electrolytes and renal function support vomiting/diuretic assessment; other tests depend on the differential. No blood test specifically confirms Ménière’s disease. HINTS is a trained clinician’s examination in the appropriate acute vestibular syndrome, not a general self-test or a routine nursing rule-out for stroke.']] }
        ] }
      ],
      medical: [
        { type: 'heading', text: 'Acute attack versus maintenance' },
        { type: 'paragraph', text: 'During an attack, protect against falls, control nausea/vertigo with the prescribed short-course rescue plan, and address vomiting/dehydration. Between attacks, review individualized diet/lifestyle measures, possible maintenance medicines, hearing support, and persistent imbalance. Track vertigo, hearing, tinnitus, and quality of life; response to one medicine does not prove the diagnosis.' },
        { type: 'paragraph', text: 'Diuretics and/or betahistine may be offered for maintenance in selected patients, depending on local availability and clinical circumstances. Benefit is uncertain and should be reviewed against adverse effects. These treatments are not proven to restore hearing or prevent every attack. Screen anxiety/depression and offer appropriate counseling or cognitive/behavioral support.' },
        { type: 'heading', text: 'Persistent disabling symptoms: ENT-directed options' },
        { type: 'paragraph', text: 'Discuss intratympanic steroids after noninvasive measures fail and intratympanic gentamicin for selected refractory active disease. Surgical options may include endolymphatic sac procedures, vestibular nerve section, or labyrinthectomy in carefully selected patients. Evidence, residual hearing, the other ear’s function, and patient goals matter; labyrinthectomy sacrifices residual hearing and is generally reserved for a poorly/nonfunctional hearing ear after less definitive treatment.' },
        { type: 'callout', title: 'Meniett positive-pressure therapy: corrected recommendation', text: 'Your notes describe pressure pulses delivered through an ear-canal probe after tympanostomy-tube placement. That mechanism is retained here for recognition, but AAO-HNS recommends against prescribing positive-pressure therapy for Ménière’s disease. It is not presented as the routine next treatment for persistent vertigo.' }
      ],
      medications: [
        { type: 'cards', items: [
          { title: 'Hydrochlorothiazide (HCTZ): exam focus', fields: [['Role / mechanism', 'Thiazide diuretic that increases renal sodium/water excretion. It is sometimes used as maintenance to reduce attack frequency, alone or with triamterene. Reducing inner-ear hydrops is the rationale, not a reliably demonstrated effect or a guarantee of hearing protection. It is not immediate rescue therapy.'], ['Before / ongoing', 'Check BP/orthostatic symptoms, volume status, creatinine/eGFR, sodium, potassium, and relevant magnesium/glucose/urate trends. Review gout, diabetes, renal disease, allergies, and other BP drugs, NSAIDs, lithium, supplements, or interacting medicines. Anuria is a contraindication; severe/progressive renal impairment needs prescriber review. Verify the actual HCTZ/sulfonamide reaction and product contraindications with the prescriber/pharmacist.'], ['Administration / teaching', 'Give as prescribed, generally early in the day to limit nocturia; follow the product’s food instructions. Review BP and hydration, especially with vomiting. I&O and daily weights are useful when clinically indicated rather than a compulsory lifelong daily measurement for every patient. Rise slowly and report faintness, marked weakness/cramps, palpitations, confusion, low urine, or new gout symptoms.'], ['Potassium distinction', 'HCTZ alone can cause hypokalemia. Potassium-rich foods such as bananas, oranges, potatoes, or spinach may fit an individualized plan, but do not automatically prescribe extra potassium. HCTZ/triamterene or spironolactone can cause hyperkalemia, especially with CKD or interacting drugs. Avoid self-started potassium pills, potassium salt substitutes, or a deliberately potassium-enriched diet with a potassium-sparing regimen.']] },
          { title: 'Meclizine / dimenhydrinate: limited attack-time suppression', fields: [['Role', 'Sedating antihistamines can reduce vestibular symptoms during attacks; use the prescribed limited course, not automatic continuous daily suppression.'], ['Nursing role', 'Assess benefit, alertness, falls, dry mouth, constipation, urinary retention, and relevant glaucoma/other cautions. Alcohol, opioids, benzodiazepines, and other sedatives increase impairment. Monitor breathing when sedation, combinations, route, or patient risk warrants it.']] },
          { title: 'Antiemetics: promethazine / selected alternatives', fields: [['Role', 'Promethazine treats nausea/vomiting but is sedating; ondansetron is another selected antiemetic, not a direct treatment of the underlying vestibular disease.'], ['Nursing role', 'For promethazine, assess drowsiness, anticholinergic effects, hypotension, respiratory depression, and dystonia/other extrapyramidal symptoms. Route-specific administration matters; follow the actual product/protocol. Review QT risk and electrolytes when relevant to the chosen antiemetic.']] },
          { title: 'Diazepam / selected benzodiazepines', fields: [['Role', 'May be used briefly for severe acute vertigo, with an associated anxiolytic effect; not routine long-term Ménière’s maintenance.'], ['Nursing role', 'Check alertness, respiratory rate/effort, BP, interactions, and safe mobility. Avoid alcohol and unsupervised combination with opioids/other sedatives. Dependence, withdrawal, and prolonged impairment are concerns.'], ['Flumazenil clarification', 'A benzodiazepine reversal agent for selected monitored situations, not an automatic antidote to give after every dose. Support airway/breathing first and follow emergency protocols; flumazenil can precipitate seizures/withdrawal, particularly with dependence or mixed overdose.']] },
          { title: 'Other maintenance medicines', fields: [['Examples', 'Triamterene, spironolactone, or acetazolamide may be selected by the clinician; they have different electrolyte/renal precautions and should not be treated as interchangeable HCTZ equivalents. Betahistine is another guideline option where available.'], ['Review', 'Assess attack benefit and drug-specific adverse effects; do not promise that every maintenance agent directly lowers measured inner-ear pressure or restores hearing.']] },
          { title: 'Intratympanic steroid or gentamicin', fields: [['Steroids', 'A specialist nonablative option intended to control active disease while limiting hearing risk; benefit and the injection plan are individualized.'], ['Gentamicin', 'Uses vestibulotoxic effects to reduce vestibular function/vertigo in selected refractory disease. Hearing loss, persistent imbalance, and eardrum perforation are risks. Risk is not uniformly “high” in every regimen; discuss hearing/contralateral function, dosing, and follow-up with ENT. Evidence limitations do not make it an unrecognized treatment.']] }
        ] }
      ],
      nonpharmacological: [
        { type: 'heading', text: 'During a spell' },
        { type: 'paragraph', text: 'Sit or lie down immediately in a safe place, obtain assistance, and minimize head movement until severe spinning settles. A quiet, dim environment and a comfortable fixed visual target or closing the eyes may help some patients; use what is tolerable rather than imposing one visual technique. Do not walk alone, use stairs unassisted, drive, climb, swim alone, or operate machinery during active vertigo or medication impairment.' },
        { type: 'heading', text: 'Between spells' },
        { type: 'list', items: ['Use a diary of attack frequency, duration, severity, hearing/ear symptoms, medicines, and possible triggers. Review patterns with ENT rather than assuming every avoided food is a proven cause.', 'Offer vestibular rehabilitation/PT for chronic imbalance, including after ablative treatment when appropriate. It is not the treatment for an acute spinning attack; avoid forcing provocative exercises during a severe spell.', 'Reduce fall hazards: remove loose rugs/clutter, improve lighting, add grab bars/handrails, and fit needed aids. Plan safe bathing, transfers, and help from family/caregivers.', 'Use hearing aids/assistive listening technology and communication strategies as indicated. Tinnitus support may include suitable sound therapy and counseling; match approaches to audiology advice.', 'Support smoking cessation, adequate sleep, stress management, and individualized caffeine/alcohol reduction. Screen mood/distress and arrange counseling/support resources when needed.'] }
      ],
      'adverse-effects': [
        { type: 'cards', items: [
          { title: 'Diuretic fluid / electrolyte effects', fields: [['Recognize', 'HCTZ may cause dehydration, orthostatic hypotension, low sodium/potassium/magnesium, glucose elevation, or hyperuricemia/gout. Potassium-sparing agents/combination products may instead cause dangerous hyperkalemia.'], ['Respond', 'Review symptoms, BP, renal function, and labs with the team; severe weakness, palpitations, confusion, syncope, or reduced urine needs prompt assessment. Do not treat suspected electrolyte toxicity by simply adding water or potassium independently.']] },
          { title: 'Sedating rescue medicines', fields: [['Recognize', 'Drowsiness, confusion, impaired balance, anticholinergic effects, and additive CNS depression. Diazepam/promethazine can produce significant respiratory depression, especially with other depressants.'], ['Respond', 'Assist mobility and monitor level of consciousness/breathing according to risk. Difficult arousal or slow/shallow breathing is an emergency; do not assume it is ordinary fatigue after vertigo.']] },
          { title: 'Antiemetic-specific problems', fields: [['Promethazine', 'Watch for dystonia/abnormal eye, neck, or tongue movements and other EPS; follow urgent treatment protocols. Route-specific tissue-injury precautions also apply to injectable formulations.'], ['Other antiemetics', 'Review agent-specific QT/electrolyte and interaction risks, particularly with repeated vomiting or diuretics.']] },
          { title: 'Intratympanic / surgical complications', fields: [['Monitor', 'New or worsening hearing loss, persistent imbalance, ear pain/drainage, infection, or eardrum problems. Surgical risks depend on the procedure and may include facial nerve injury or other neurological complications.'], ['Evaluate', 'Compare hearing/balance/cranial nerve function with baseline, follow ENT aftercare, and report marked deterioration. Destructive treatment can impair balance long term and requires realistic counseling/rehabilitation.']] }
        ] }
      ],
      nutrition: [
        { type: 'paragraph', text: 'A consistent lower-sodium eating pattern is commonly tried; the supplied 1,500–2,000 mg sodium/day is a commonly used individualized target, not a universal diagnostic or treatment requirement. Trial evidence for a specific sodium/fluid prescription is limited. Agree on a feasible plan with the clinician/dietitian, especially with diuretics, CKD, heart disease, or low sodium.' },
        { type: 'list', items: ['Read sodium per serving and portion size; reduce heavily salted/processed foods, soups, sauces, and restaurant meals. MSG contributes sodium, but is not established as a universal independent trigger requiring blanket avoidance.', 'Regular meals/snacks and spreading intake through the day may help a consistent routine. Avoid large swings in salt intake; do not claim that eliminating all sugar has proven to prevent Ménière’s attacks.', 'Stay adequately hydrated within the individual plan. Do not force large water volumes or automatically restrict fluids to “drain the inner ear,” particularly during vomiting or while taking a thiazide.', 'Review personal responses to caffeine/alcohol; reduce or avoid them if advised or associated with attacks. Support smoking cessation rather than only reducing cigarettes.', 'Monitor nutrition during nausea/vomiting and resume tolerated intake after symptom control. Follow a prescribed oral/IV rehydration plan if needed.', 'Potassium advice depends on the actual diuretic and renal/lab results. HCTZ alone and HCTZ/triamterene have different risks; avoid self-directed potassium supplements/salt substitutes with potassium-sparing treatment.'] }
      ],
      assessment: [
        { type: 'paragraph', text: 'Document onset, frequency, duration, severity, triggers versus spontaneous onset, nausea/vomiting, tinnitus/fullness, hearing fluctuation, warning symptoms, drop attacks, and function between attacks. Ask what medicines/treatments were tried and their benefit/adverse effects. Assess ADLs, work/driving, fear of falling, sleep, anxiety/depression, and available support.' },
        { type: 'list', items: ['Assess alertness, vital signs, hydration, intake/urine, dry mouth, orthostatic symptoms, and tachycardia; distinguish vestibular spinning from presyncope/dehydration where possible.', 'Observe eye movements/nystagmus and hearing/communication; perform or assist the indicated neurological assessment. Assess walking/balance only with appropriate guarding and when safe; defer Romberg during severe instability.', 'Review diuretics and sedatives, renal/electrolyte results, fluid/diet restrictions, falls, vision, footwear, home stairs/bathroom hazards, and need for aids.', 'New focal weakness/numbness, dysarthria, diplopia, a severe new headache, marked new inability to stand/walk, syncope, or an atypical persistent episode requires urgent evaluation. A known Ménière’s diagnosis does not rule out stroke or another acute disorder.', 'New sudden significant hearing loss is urgent; do not wait for a routine follow-up or assume it is simply expected chronic progression.'] }
      ],
      diagnoses: [
        { type: 'paragraph', text: 'Choose program-approved terminology and support actual diagnoses with the patient’s findings.' },
        { type: 'list', items: ['Risk for falls/injury related to episodic vertigo, drop attacks, chronic imbalance, or sedating medicines.', 'Nausea related to vestibular disturbance when present, with fluid-volume deficit or risk for imbalance based on vomiting/intake/diuretic findings.', 'Impaired physical mobility or decreased self-care ability when vertigo limits safe walking, bathing, dressing, or eating.', 'Communication difficulty related to hearing loss when supported by assessment; select the appropriate diagnostic wording.', 'Anxiety/fear, disturbed sleep, or reduced participation related to unpredictable attacks when identified.', 'Learning/self-management needs concerning rescue versus maintenance medicines, trigger/diet planning, hearing support, and red flags.'] }
      ],
      priorities: [
        { type: 'callout', title: 'First action: make the patient safe and assess the episode', text: 'Help the patient sit/lie safely and assess clinical stability, injury, neurological/hearing changes, and the episode pattern. ABC compromise, stroke concerns, syncope, serious injury, or major dehydration takes priority over routine Ménière’s care. For a familiar assessed attack, provide prescribed rescue treatment, assistance, and a low-stimulation environment.' },
        { type: 'list', items: ['Prevent falls, especially with sudden drop attacks; do not rely on warning fullness/tinnitus or ask the patient to walk unassisted to test recovery.', 'Control vomiting/vertigo while monitoring alertness, respiratory status, and additive sedative effects.', 'Protect hydration and electrolyte balance; review BP/renal function and HCTZ versus potassium-sparing medicine risks.', 'Escalate new sudden hearing loss or neurological/atypical findings promptly rather than attributing everything to the established diagnosis.', 'Support communication, realistic long-term symptom goals, rehabilitation/hearing resources, and an achievable home safety plan.'] }
      ],
      plan: [
        { type: 'cards', items: [
          { title: '1. Safety and acute symptom control', fields: [['Goal', 'No preventable fall/injury; nausea/vertigo settle enough for safe assisted transfers and essential care without excessive sedation.'], ['Actions', 'Assess red flags, assist positioning/mobility, reduce stimulation, administer prescribed rescue therapy, and reassess response and breathing/alertness.'], ['Evaluate', 'Compare symptoms/function and medication effects with baseline; investigate deterioration rather than forcing activity.']] },
          { title: '2. Hydration and maintenance safety', fields: [['Goal', 'Maintain an appropriate fluid status, BP, renal function, and electrolytes while evaluating attack benefit from the maintenance plan.'], ['Actions', 'Review vomiting/intake, exact diuretic, diet/fluid goals, and ordered labs; coordinate monitoring and prescriber review during illness or adverse effects.'], ['Evaluate', 'No unmanaged orthostasis/dehydration or potassium/sodium disorder; the patient explains when to seek advice and avoids unsupervised potassium changes.']] },
          { title: '3. Function, hearing, and coping', fields: [['Goal', 'Improve safe participation and communication, reduce attack-related disability/distress, and maintain access to support.'], ['Actions', 'Use an attack diary, PT/vestibular rehabilitation for chronic imbalance, audiology/hearing technology, home modifications, and mood/coping support.'], ['Evaluate', 'Review attack pattern, falls, ADLs, hearing/communication, patient priorities, and follow-up rather than promising cure or normal hearing.']] }
        ] }
      ],
      interventions: [
        { type: 'heading', text: 'Acute and continuing nursing care' },
        { type: 'list', items: ['Remain available during severe spells; assist safe positioning, toileting/ADLs, fall precautions, an emesis container, and a quiet/dim environment as tolerated. Avoid abrupt head/position changes and unassisted stairs.', 'Give the selected short-course rescue medicine, reassess nausea/vertigo and alertness, and monitor breathing/BP according to agent, route, and patient risk. Review combined sedatives and alcohol exposure.', 'Assess intake, vomiting, urine, orthostatic symptoms, and ordered electrolytes/renal function. Provide prescribed rehydration and review the maintenance regimen with the team when intake is poor.', 'Teach HCTZ timing and individualized potassium advice, use teach-back, and help arrange labs/appointments. Support symptom tracking and feasible diet/lifestyle changes.', 'Face the patient, speak clearly without shouting, reduce background noise, position on the better-hearing side as preferred, and confirm understanding. Offer written instructions and hearing-assistive referral.', 'Coordinate home hazard review, caregiver assistance, mobility aids, chronic-imbalance rehabilitation, hearing support, and emotional/community resources.'] },
        { type: 'heading', text: 'Before and after an ENT procedure' },
        { type: 'paragraph', text: 'Before treatment, document baseline hearing, balance, cranial nerve function, vital signs, medicines, and informed expectations about hearing/vestibular tradeoffs. Afterward, monitor symptoms, hearing change, facial/other cranial nerve findings as appropriate, wound/ear drainage, pain, and safe mobility. Follow the specific operation/injection instructions for positioning, ear/wound care, activity, and follow-up; do not impose one generic postoperative regimen on every procedure.' }
      ],
      education: [
        { type: 'paragraph', text: 'Explain the chronic, fluctuating course and the difference between rescue medicines and a monitored maintenance plan. No treatment guarantees that hearing loss will never progress. Keep an episode diary and attend ENT/audiology and medicine-safety follow-up. Encourage the patient and family to practice the written attack plan and identify who can help.' },
        { type: 'list', items: ['At warning symptoms or active vertigo, stop hazardous activity and sit/lie down safely. Do not drive, operate machinery, climb, or swim alone during attacks or sedative impairment. Because drop attacks can occur without warning, discuss individualized driving/work restrictions and local rules with the treating clinician.', 'Reduce clutter/rugs, improve lighting, use grab bars/handrails, move slowly between positions, and use prescribed aids. Family should assist without pulling the person into unsafe walking.', 'Follow the agreed sodium, meal, and fluid plan; review caffeine/alcohol and personal triggers without extreme restrictions. Stop smoking and use sleep/stress/coping support.', 'For HCTZ, review early-day dosing, orthostasis, labs, glucose/urate concerns, and the actual potassium plan. During substantial vomiting, poor intake, or faintness, contact the team for medication/fluid advice rather than continuing blindly or changing doses independently.', 'Review OTC medicines: salicylates/aspirin and some other drugs can worsen tinnitus, especially at high doses. Do not independently stop appropriately prescribed low-dose cardiovascular aspirin; discuss the product, dose, and symptoms with the prescriber.', 'Get urgent help for neurological changes, collapse, major injury, inability to stand/walk with a new severe episode, or sudden significant hearing loss. Report persistent vomiting, low urine, severe weakness/palpitations, or excessive sedation promptly.', 'Use face-to-face communication, reduced background noise, written information, and prescribed hearing/sound-support tools. Discuss anxiety/depression and ask for counseling/support when needed.'] }
      ],
      evaluation: [
        { type: 'list', items: ['Safety: no preventable falls/injuries; patient/caregiver demonstrates safe response to attacks and use of home modifications/aids without assuming a warning will always occur.', 'Symptoms: decreased frequency, duration, severity, or disability from vertigo/nausea/vomiting/fullness according to diary and patient goals. Evaluate each therapy’s benefit rather than inferring success solely from adherence.', 'Fluid/medicine safety: appropriate hydration, BP, renal function, and electrolyte trends, with no unmanaged orthostasis, potassium/sodium disorder, respiratory depression, or significant drug reaction.', 'Hearing/communication: serial audiology findings are reviewed, changes receive appropriate assessment, and hearing/communication tools improve participation. Normal hearing or prevention of all progression is not a required or guaranteed outcome.', 'Function/coping: safer ADLs and chronic-imbalance management, reduced distress, and access to audiology/ENT, rehabilitation, mental-health, and family/community support.', 'Teach-back/follow-up: patient explains rescue versus maintenance use, individualized diet/fluid/potassium advice, red flags, and driving/activity safety; after a procedure, healing and hearing/balance/cranial findings follow the expected individual recovery plan.'] }
      ]
    },
    clarifications: [
      { title: 'Hydrops, prevalence, risk, and hearing course', text: 'Hydrops is an important association, not proof of a single cause or membrane rupture during every attack. Replaced the unsupported supplied US prevalence with attributed estimates and qualified the fixed familial percentage/autoimmune claims. Hearing changes can become permanent or bilateral; neither a reliable warning aura nor inevitable unilateral progression is assumed.' },
      { title: 'Definite/probable criteria and selected testing', text: 'Separated the attack-duration categories and emphasized audiometry plus clinical exclusion of alternatives. Weber/Romberg are clues rather than confirmatory tests; ENG/VNG/electrocochleography and MRI have selected roles. New neurological symptoms or sudden hearing loss require urgent reassessment.' },
      { title: 'Meniett, rehabilitation, and invasive treatment', text: 'Retained recognition of the positive-pressure device but corrected it to the US guideline’s recommendation against prescribing. Distinguished chronic-imbalance rehabilitation from acute-attack care. Intratympanic steroid/gentamicin and surgical choices require hearing/vestibular tradeoff counseling; gentamicin hearing risk varies rather than being uniformly high.' },
      { title: 'HCTZ, potassium, and rescue medicines', text: 'Presented diuretics as a monitored option with uncertain benefit, not a proven way to restore hearing. Distinguished HCTZ hypokalemia from potassium-sparing hyperkalemia and individualized labs, weights, fluids, and diet. Limited vestibular suppressants to the attack plan and replaced routine flumazenil readiness with monitored emergency use and seizure/withdrawal precautions.' },
      { title: 'Diet, aspirin, and completed nursing process', text: 'Qualified the commonly used sodium range, MSG/sugar/trigger claims, and hydration advice. High-dose salicylate tinnitus does not mean every patient should stop prescribed low-dose aspirin. Completed the missing nutrition, adverse-effect, diagnosis, priority, care-plan, and intervention material while retaining the supplied homecare, communication, psychological, perioperative, and evaluation details.' }
    ],
    references: [
      { title: 'AAO-HNS · Ménière’s disease guideline', url: 'https://www.entnet.org/quality-practice/quality-products/clinical-practice-guidelines/menieres-disease/', supports: 'US guideline and clinical/audiometric diagnostic and treatment framework.' },
      { title: 'Basura et al. · AAO-HNS guideline executive summary (2020)', url: 'https://journals.sagepub.com/doi/10.1177/0194599820909439', supports: 'Selected tests, limited vestibular suppressants, maintenance options, Meniett recommendation, and rehabilitation/invasive-treatment distinctions.' },
      { title: 'Brazilian Society of Otology / Academy of Neurotology · 2026 task force', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC13683429/', supports: 'Recent specialty review of hydrops, uncertain diuretic evidence, gentamicin/surgical selection, and functional rehabilitation.' },
      { title: 'NIDCD · Ménière’s disease', url: 'https://www.nidcd.nih.gov/health/menieres-disease', supports: 'Symptom pattern, variable/unilateral-bilateral course, attributed US estimates, diagnosis, and treatment context.' },
      { title: 'MedlinePlus Genetics · Ménière disease', url: 'https://medlineplus.gov/genetics/condition/meniere-disease/', supports: 'Sporadic/familial disease, investigated mechanisms, variable course, and prevalence context.' },
      { title: 'AAO-HNS · Patient FAQ (PDF)', url: 'https://www.entnet.org/wp-content/uploads/files/uploads/PracticeManagement/Resources/_files/figure_1_cpg_menieres_diseasefaq_v5.pdf', supports: 'Patient education, attack diary, hearing/balance symptoms, and shared decisions.' },
      { title: 'SAEM GRACE-3 · Acute dizziness and vertigo', url: 'https://www.saem.org/publications/grace/grace-3', supports: 'Timing/trigger-based assessment, neurological/gait evaluation, and trained-use limits of HINTS.' },
      { title: 'NIDCD · Sudden deafness', url: 'https://www.nidcd.nih.gov/health/sudden-deafness', supports: 'Urgency of new sudden sensorineural hearing loss.' },
      { title: 'DailyMed · Hydrochlorothiazide', url: 'https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=4e43dd27-3f4b-4205-a26e-6ecaa8281347&type=display', supports: 'Contraindications, renal/volume/electrolyte monitoring, hyperglycemia, urate/gout, and interactions.' },
      { title: 'DailyMed · Triamterene / hydrochlorothiazide', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6c4cd90b-44c0-4da5-8f26-f0fa465acce4', supports: 'Hyperkalemia/renal risks and precautions against added potassium or potassium salt substitutes.' },
      { title: 'DailyMed · Meclizine', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1b541252-e8a7-b678-e063-6394a90a34dc', supports: 'Vestibular vertigo indication, drowsiness, anticholinergic cautions, and CNS-depressant interactions.' },
      { title: 'DailyMed · Promethazine tablets', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=eec705f7-123a-7926-e053-2a95a90af46d', supports: 'Sedation, respiratory depression, anticholinergic effects, and extrapyramidal symptoms.' },
      { title: 'MedlinePlus · Diazepam', url: 'https://medlineplus.gov/druginfo/meds/a682047.html', supports: 'Sedative/respiratory, interaction, dependence, driving, and withdrawal precautions.' },
      { title: 'DailyMed · Flumazenil', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=56452ba8-521d-1f84-e063-6294a90af6fc', supports: 'Selected monitored reversal use, airway/respiratory support, resedation, and seizure/withdrawal risks.' },
      { title: 'NIDCD · Tinnitus', url: 'https://www.nidcd.nih.gov/health/tinnitus', supports: 'Medicine-associated tinnitus, including dose-related salicylate concerns, and hearing/sound/counseling support.' }
    ]
  },
  gout: {
    title: 'Gout', abbreviation: 'Gout', week: 9, deck: 'gout',
    reviewed: 'November 15, 2026',
    reading: 'Course study guide: Gout—clinical signs/symptoms and diet. Based on your supplied notes and Week 9 presentation. The notes mention CDC (2025), Mayo Clinic (2022), and Cleveland Clinic (2025); full citation details were not supplied. Current clinical references supporting the completed sections and corrections are linked below.',
    focus: [
      { section: 'manifestations', label: 'Clinical signs & symptoms' },
      { section: 'nutrition', label: 'Diet & nutrition' }
    ],
    content: {
      overview: [
        { type: 'paragraph', text: 'Gout is a common inflammatory arthritis caused by deposition of monosodium urate (MSU) crystals in joints and surrounding tissues. Persistent hyperuricemia increases the likelihood of crystal formation; not everyone with elevated serum urate develops gout. Urate comes from breakdown of purines in the body and food. Reduced excretion, increased production, or both can cause accumulation; gout is not simply the result of eating the wrong foods.' },
        { type: 'heading', text: 'From crystal deposition to joint damage' },
        { type: 'paragraph', text: 'Crystals trigger an inflammatory response, producing sudden painful flares. Symptom-free intervals are called intercritical gout; crystal deposits can persist between attacks. Over time, untreated disease may cause more frequent flares, chronic arthritis, erosions/deformity, and tophi. Tophi are deposits of MSU crystals in soft tissue—not kidney stones—and may initially be painless. Uric acid kidney stones are a separate possible complication.' },
        { type: 'heading', text: 'Primary and secondary contributors' },
        { type: 'list', items: ['Primary gout/hyperuricemia commonly reflects inherited differences in urate handling, often reduced excretion. Purine-rich food, alcohol, and other exposures can add to the burden or trigger flares; dietary intake alone does not define primary disease.', 'Secondary causes include kidney disease, medicines that reduce urate excretion, and increased cell turnover in conditions such as leukemia, psoriasis, or hemolytic disorders. “Anemia” alone is too broad to identify a high-turnover cause.', 'Crash dieting/starvation, dehydration, illness, surgery, or injury can precipitate a flare. These are triggers/exposures, not all non-modifiable inherited risk factors.'] },
        { type: 'paragraph', text: 'Your diagram’s first metatarsophalangeal (MTP) joint is where the first metatarsal meets the great toe’s proximal phalanx. Articular cartilage, the synovial membrane, joint capsule, and nearby tendons are relevant structures: MSU deposits and synovial inflammation explain the swollen, painful joint and later tissue damage.' }
      ],
      manifestations: [
        { type: 'callout', title: 'Classic flare: sudden, intensely painful, hot joint', text: 'Often begins overnight with severe tenderness, warmth, redness, swelling, and limited ROM. The first MTP joint/great toe is classic (podagra); even light contact may be painful. A first or unusual hot, swollen joint needs assessment for infection and other causes rather than automatic labeling as gout.' },
        { type: 'list', items: ['Usually monoarticular early on, but more than one joint can be involved, especially in established disease. Ankles/midfoot, knees, elbows, wrists, and fingers may be affected.', 'Pain and swelling impair walking, weight bearing, sleep, work, and ADLs. Symptoms last days to weeks; remissions between flares do not mean the urate problem has resolved.', 'Without effective long-term control, attacks can become more frequent/prolonged and chronic joint pain, reduced ROM, deformity, and disability may develop.', 'Tophi can occur around the great toe, fingers/hands, elbows, ears, tendons, and other tissues. They may be firm and painless or become inflamed, painful, ulcerated, or damaging. Their burden reflects sustained urate exposure over time, not a one-to-one prediction from today’s blood level.', 'Fever can accompany inflammation, but fever/systemic illness with a hot joint raises concern for septic arthritis. Absence of fever does not exclude infection, and gout and infection can coexist.'] }
      ],
      risk: [
        { type: 'heading', text: 'Risk factors and flare triggers' },
        { type: 'list', items: ['Family history/genetics, increasing age, and male sex increase risk; women’s risk rises after menopause. The male-to-female ratio varies by age/population rather than always being exactly 3–4:1.', 'Obesity, hypertension, CKD, diabetes/metabolic syndrome, and cardiovascular disease commonly coexist. Assess these conditions and their treatment together.', 'Alcohol, sugar/fructose-sweetened drinks, and high-purine animal foods such as organ meats, red meat, and selected seafood can contribute. Fasting/crash diets, dehydration, recent injury, surgery, or illness may trigger attacks.', 'Important medication contributors include thiazide/loop diuretics, low-dose aspirin, high-dose niacin, and some transplant medicines such as cyclosporine. Review the actual antihypertensive regimen. ACE inhibitors have also been associated with increased incident-gout risk in observational research; medicines differ in effect, and essential therapy must not be stopped independently.'] },
        { type: 'heading', text: 'Prevention and health promotion' },
        { type: 'paragraph', text: 'Use sustainable weight management, a balanced eating pattern, appropriate hydration, alcohol/sugary-drink reduction, and treatment of comorbid conditions. Review urate-raising medicines with the prescriber; an alternative to hydrochlorothiazide or use of losartan may be feasible for some patients. Continue low-dose aspirin when appropriately prescribed for another indication unless its prescriber changes the plan. Lifestyle supports treatment but often cannot replace indicated urate-lowering therapy (ULT).' }
      ],
      diagnostics: [
        { type: 'paragraph', text: 'Assess the onset/pattern of pain, redness, warmth, swelling, joint distribution, previous flares/tophi, family history, renal disease, and medicines. Consider septic arthritis, calcium pyrophosphate crystal arthritis (CPPD/pseudogout), injury, and other inflammatory arthritis. Prompt evaluation helps control symptoms and prevent missed infection or progressive damage.' },
        { type: 'cards', items: [
          { title: 'Serum urate', fields: [['Role', 'Supports clinical assessment and is used to guide long-term ULT. Hyperuricemia alone does not prove gout.'], ['During a flare', 'A normal or lower result does not exclude gout. If suspicion remains and the level is below 6 mg/dL (360 micromol/L), repeat at least 2 weeks after the flare settles. Do not delay infection assessment while waiting for a repeat urate.']] },
          { title: 'Joint aspiration / synovial fluid analysis', fields: [['Confirmation', 'Identification of needle-shaped, negatively birefringent MSU crystals by polarized-light microscopy supports a definitive diagnosis. CPP crystals indicate a different crystal arthropathy.'], ['Infection safety', 'If infection is possible, send appropriate cell count/differential, Gram stain, and culture as well as crystals. Crystals, a negative Gram stain, or a single cell-count threshold do not independently exclude septic arthritis.'], ['Nursing role', 'Explain the procedure, verify consent under local policy, review allergy/bleeding/anticoagulant history, assist with aseptic positioning and specimen handling, and monitor the site afterward. Do not independently withhold anticoagulants or delay urgent evaluation.']] },
          { title: 'Ultrasound, DECT, and X-rays', fields: [['Ultrasound', 'May show urate on cartilage as a double-contour sign (hyperechoic rim), tophi, effusion, and synovial thickening. Effusion or thickened synovium alone is not specific for gout.'], ['Other imaging', 'Dual-energy CT can identify urate deposition when aspiration is not possible or uncertainty remains; interpretation/artifacts matter. Plain X-rays may show chronic erosive damage or another diagnosis and can be normal early. Imaging does not replace aspiration/culture when infection is a concern.']] },
          { title: 'Baseline / treatment-safety tests', fields: [['Before ULT', 'Review serum urate, CBC, chemistry, liver tests, and renal function (creatinine/eGFR; BUN as relevant), with follow-up tailored to the medicine and patient.'], ['Other tests', 'ESR/CRP or leukocytosis may reflect inflammation/infection but are not gout-specific. Consider blood cultures and urgent infection workup when clinically indicated. Selected patients need HLA-B*58:01 testing before allopurinol.']] }
        ] }
      ],
      medical: [
        { type: 'heading', text: '1. Treat the active flare' },
        { type: 'paragraph', text: 'Start the prescribed anti-inflammatory plan promptly: low-dose colchicine, an appropriate NSAID, or a short corticosteroid course are common first-line options. Choose according to renal/hepatic function, GI bleeding, cardiovascular/diabetes risk, interactions, and patient factors. Rest/protect the joint and use ice as an adjunct. Suspected septic arthritis requires urgent assessment; do not inject a potentially infected joint.' },
        { type: 'heading', text: '2. Lower urate to prevent future damage' },
        { type: 'paragraph', text: 'ULT addresses the underlying crystal burden over time; it is not immediate flare analgesia. ACR strongly recommends ULT for tophi, gout-related radiographic damage, or frequent flares (at least 2/year); shared decisions also consider less frequent recurrent disease. After a first flare, CKD stage 3 or higher, serum urate >9 mg/dL, or urolithiasis may favor treatment. Asymptomatic hyperuricemia alone usually does not require a gout medicine.' },
        { type: 'paragraph', text: 'Use a low starting dose and titrate with serial serum urate toward <6 mg/dL (<360 micromol/L). NICE considers <5 mg/dL (<300 micromol/L) for tophi/chronic gouty arthritis or persistent frequent flares despite <6. The target and monitoring schedule should be explicit. ULT is generally long term, often lifelong; benefits continue after symptoms settle.' },
        { type: 'callout', title: 'A flare is not a reason to stop established allopurinol', text: 'Continue established ULT during a flare unless a safety problem requires stopping. When ULT is indicated, ACR permits starting it during a treated flare; timing is individualized. Give prescribed anti-inflammatory prophylaxis during initiation/titration, commonly at least 3–6 months with reassessment, because early flares can occur while crystals are mobilized.' }
      ],
      medications: [
        { type: 'cards', items: [
          { title: 'Colchicine: flare treatment and prophylaxis', fields: [['Action / timing', 'Anti-inflammatory; it does not lower serum urate. Start promptly under the flare plan, ideally at the first symptoms. “Within 24 hours” emphasizes early treatment, not a reason to ignore a later presentation. Low-dose regimens are preferred over repeated high-dose dosing.'], ['Safety review', 'Check the actual prescription, renal/hepatic function, recent courses, and interacting drugs. Do not independently add a flare course on top of prophylaxis, especially with kidney/liver impairment. Strong CYP3A4/P-gp inhibitors such as clarithromycin or cyclosporine can cause fatal toxicity; combinations with renal/hepatic impairment are contraindicated. Statins and other medicines can increase muscle-toxicity risk.'], ['Nursing role', 'Assess pain and GI tolerance. Severe/persistent diarrhea, vomiting, or abdominal symptoms warrant withholding further doses and urgent clinical review for toxicity; assess dehydration, weakness, or systemic symptoms. Do not keep taking doses until diarrhea occurs.']] },
          { title: 'Allopurinol: long-term urate-lowering therapy', fields: [['Action', 'Oral xanthine oxidase inhibitor that reduces urate production. Sustained control prevents new crystals and gradually dissolves deposits, reducing future flares/tophi; it does not directly relieve acute pain.'], ['Start / monitor', 'Start low (often ≤100 mg/day, lower in CKD) and titrate to the agreed urate target with renal/liver/CBC safety review. CKD does not automatically rule out allopurinol. Confirm selected HLA-B*58:01 screening before initiation—particularly with Han Chinese, Korean, Thai, or African American ancestry per ACR; a negative result does not eliminate rash risk.'], ['Priority teaching', 'Stop at the first rash or other hypersensitivity sign and seek prompt medical advice. Blistering, mucosal sores, fever with rash, facial swelling, or breathing difficulty requires urgent/emergency care. Do not wait for severe blistering to report a rash.'], ['Interactions / names', 'Azathioprine or mercaptopurine needs specialist dose adjustment and monitoring with allopurinol because of serious marrow toxicity. Reconcile the complete medication list. Your notes list Lopurin/Zyloprim and Aloprim; Aloprim is IV allopurinol for a specific cancer-therapy indication, not the routine oral gout maintenance product.']] },
          { title: 'NSAIDs: selected flare symptom control', fields: [['Examples / role', 'Naproxen (Aleve) or ibuprofen (Advil/Motrin) reduce prostaglandin-mediated inflammation and pain; they do not dissolve the urate burden. Follow the prescribed short-course dose and avoid duplicate NSAIDs.'], ['Nursing role', 'Assess pain, swelling, mobility, renal function, GI ulcer/bleeding, BP/edema, cardiovascular risk, anticoagulants, and pregnancy considerations. Consider ordered gastroprotection when appropriate. Food may reduce stomach upset but does not prevent serious GI bleeding.']] },
          { title: 'Corticosteroids: short-course flare treatment', fields: [['Examples / route', 'Oral prednisone/prednisolone is one option. An appropriately formulated corticosteroid can be injected into a joint by the clinician after infection is excluded; this does not mean oral prednisone itself is injected into the joint.'], ['Nursing role', 'Monitor glucose, BP/fluid status, sleep/mood, and infection concerns. Long-term/repeated use adds adrenal, bone, and other toxicity risks. Follow the actual course/taper instructions rather than assuming every brief course requires the same taper.']] },
          { title: 'If usual therapy is unsuitable or ineffective', fields: [['Other ULT', 'Febuxostat is an alternative xanthine oxidase inhibitor for selected patients. US labeling reserves it for inadequate response/intolerance to appropriately titrated allopurinol or when allopurinol is inadvisable, and carries a cardiovascular-death boxed warning. Review CV history, liver monitoring, and interactions.'], ['Specialist options', 'Uricosurics, pegloticase for selected refractory severe disease, or selected specialist anti-inflammatory therapies require drug-specific assessment. They are not automatic next steps after a single flare.']] }
        ] }
      ],
      nonpharmacological: [
        { type: 'heading', text: 'During a flare: reduce stress on the painful joint' },
        { type: 'list', items: ['Rest and elevate the affected joint when feasible. Apply a wrapped cold pack for about 15–20 minutes at a time if tolerated; inspect skin/sensation and avoid direct ice injury.', 'Limit prolonged standing and painful weight bearing; use a fitted aid and assistance if balance is affected. Avoid running, jumping, and high-impact loading until inflammation improves.', 'Wear comfortable supportive shoes that do not compress swelling. Use handrails/assistance on stairs, protect the joint from pressure, and arrange help with ADLs if needed.', 'Resume movement and work duties gradually as pain/swelling improve. Avoid driving if foot pain prevents safe pedal control or medicine effects impair alertness.'] },
        { type: 'heading', text: 'Between flares: sustainable prevention' },
        { type: 'paragraph', text: 'Support regular appropriate exercise, gradual weight management, balanced nutrition, hydration within the individual fluid plan, and management of hypertension, diabetes/metabolic syndrome, renal disease, and cardiovascular risks. Reconcile medicines with the prescriber. These measures improve health and may reduce flares, but are not a substitute for indicated ULT.' }
      ],
      'adverse-effects': [
        { type: 'cards', items: [
          { title: 'Colchicine toxicity', fields: [['Recognize', 'Severe diarrhea/nausea/vomiting may be an early warning; muscle pain/weakness, dark urine, bruising, infection symptoms, or severe systemic illness can indicate more serious toxicity.'], ['Respond', 'Withhold further doses and obtain prompt assessment; suspected overdose or systemic toxicity requires emergency care. Recheck kidney/liver function, dose, and interactions.']] },
          { title: 'Allopurinol hypersensitivity / organ effects', fields: [['Recognize', 'Any new rash warrants action; SJS/TEN or DRESS can involve fever, blistering/mouth sores, facial swelling, and organ injury. Kidney/liver injury or cytopenias also require assessment.'], ['Respond', 'Stop the drug and seek prompt medical review; severe skin/systemic symptoms are an emergency. Do not restart it independently after a suspected reaction.']] },
          { title: 'NSAIDs and corticosteroids', fields: [['NSAIDs', 'Watch for melena, hematemesis, severe abdominal pain, reduced urine, edema/BP rise, or cardiovascular symptoms. Escalate bleeding, kidney injury, chest pain, or dyspnea urgently.'], ['Corticosteroids', 'Assess hyperglycemia, hypertension/fluid retention, insomnia/mood changes, and infection. Repeated/prolonged courses need additional bone/adrenal risk review.']] },
          { title: 'Disease complications versus treatment effects', fields: [['Gout', 'Recurrent/chronic inflammation can cause erosive damage, functional loss, ulcerated tophi, and uric acid stones. Assess severe flank pain, hematuria, or reduced urine.'], ['Early ULT flares', 'Flares can increase initially while urate deposits change. This is not automatically allergy or treatment failure; follow the prophylaxis and titration plan while reporting adverse effects separately.']] }
        ] }
      ],
      nutrition: [
        { type: 'callout', title: 'Balanced eating, not starvation or a cure by diet alone', text: 'Diet changes can reduce triggers and support cardiometabolic health, but urate handling is strongly influenced by genetics and kidney function. Avoid blame, extreme restriction, or promising that cherries, extra water, or a special diet will replace needed ULT.' },
        { type: 'heading', text: 'Limit or avoid' },
        { type: 'list', items: ['Purine-rich animal foods: especially organ meats such as liver/kidneys, large portions of red meat, and selected seafood (shellfish such as shrimp, lobster, scallops, mussels; anchovies/sardines). Individualize portions and overall nutritional adequacy.', 'Alcohol: limit or avoid, particularly during flares; beer and spirits are important triggers, and wine is not automatically risk-free. Alcohol can increase production and reduce urate excretion.', 'Sugar/fructose-sweetened drinks: reduce or avoid soft drinks and sweetened fruit drinks/high-fructose corn syrup. Whole fruit is different from sugary juice; favor whole fruit and moderate juice portions.', 'Crash dieting/fasting: rapid weight loss, starvation, ketosis, and dehydration may precipitate flares. Use gradual sustainable changes instead.'] },
        { type: 'heading', text: 'Encourage' },
        { type: 'list', items: ['A balanced DASH-style pattern with vegetables, whole fruit, whole grains, low-fat dairy, and suitable protein/unsaturated-fat sources; tailor diabetes, renal, and other needs.', 'Low-fat milk/yogurt can fit the plan. Vegetables/legumes should not automatically be excluded because they contain purines; animal-food and plant-food associations with gout differ.', 'Water and appropriate hydration unless fluid restricted. Individualize fluid amounts in heart failure or CKD; hydration supports urinary health but does not guarantee stone prevention or dissolve all joint deposits.', 'Gradual weight reduction when appropriate, with dietitian support for complex needs. Cherries may be included as food, but evidence is insufficient to prescribe cherries/cherry extract as established urate-lowering treatment.'] }
      ],
      assessment: [
        { type: 'paragraph', text: 'Assess onset (often overnight), location/number of joints, pain severity/tenderness, warmth, redness, swelling, ROM, weight-bearing ability, sleep, and ADLs. Ask about prior confirmed gout/crystals, flare frequency/duration, tophi, renal stones, recent illness/injury/surgery, diet/alcohol changes, hydration, and current flare/ULT medicines with last doses.' },
        { type: 'list', items: ['Screen for fever/systemic illness, skin breakdown/infection, immunosuppression, prosthetic joint, and a new/atypical presentation. Gout history does not exclude septic arthritis.', 'Review renal/hepatic function, GI bleeding/ulcers, cardiovascular disease/BP/edema, diabetes/glucose, allergies/rash, pregnancy considerations, and relevant lab trends before therapy.', 'Reconcile prescriptions, OTC analgesics, supplements, thiazide/loop diuretics, aspirin, transplant drugs, antibiotics, and other interaction risks. Check ULT/prophylaxis adherence and understanding without assuming nonadherence caused every flare.', 'Assess gait/falls, footwear, stairs, work/driving needs, support, fluid restrictions, access to treatment/labs, and readiness for sustainable nutrition changes.'] }
      ],
      diagnoses: [
        { type: 'paragraph', text: 'Select your program’s diagnostic terminology and support actual diagnoses with assessment findings.' },
        { type: 'list', items: ['Acute pain related to crystal-induced joint inflammation, supported by pain/tenderness and functional limitation.', 'Impaired physical mobility or decreased self-care ability related to pain/swelling and reduced ROM.', 'Risk for falls/injury when gait, balance, or medication effects create a hazard.', 'Disturbed sleep or activity intolerance when supported by findings.', 'Learning/self-management needs related to the distinction between flare medicines and long-term ULT, administration, interactions, or follow-up.', 'Risk for medication-related harm, or a fluid-volume concern when supported by GI losses/clinical context; do not prescribe high fluid intake to every patient regardless of comorbidities.'] }
      ],
      priorities: [
        { type: 'callout', title: 'First action: assess the hot joint and clinical stability', text: 'Check vital signs/systemic illness, joint findings, pain, and infection risk. Suspected septic arthritis needs immediate clinical referral/workup; sepsis or instability takes priority over routine gout teaching. Crystal identification and absence of fever do not safely rule out infection.' },
        { type: 'list', items: ['For a clinically assessed gout flare, deliver the prescribed safe anti-inflammatory treatment early and protect the painful joint.', 'Check renal/hepatic function and interactions before colchicine, bleeding/renal/CV risks before NSAIDs, and glucose/infection risks before steroids.', 'Stop allopurinol for a new rash/hypersensitivity sign and escalate promptly; withhold further colchicine for severe GI/systemic toxicity and obtain assessment.', 'Prevent falls and support ADLs while pain limits mobility; use cold/elevation and reassess treatment response.', 'Maintain an explicit long-term urate target, prophylaxis/titration plan, and follow-up; continue established ULT through ordinary flares unless a safety issue dictates otherwise.'] }
      ],
      plan: [
        { type: 'cards', items: [
          { title: '1. Control the flare safely', fields: [['Goal', 'Pain/swelling improve enough for sleep, safe transfers, and essential ADLs, without missed infection or significant drug toxicity.'], ['Actions', 'Assess symptoms/red flags, give the selected prescription, protect/elevate the joint, use wrapped cold packs, assist mobility, and reassess.'], ['Evaluate', 'Trend pain, warmth/swelling, ROM, function, and safety; inadequate or worsening response requires clinical review rather than simply more doses.']] },
          { title: '2. Reduce urate and future crystal burden', fields: [['Goal', 'Reach and maintain the agreed serum urate target, with fewer future flares and stable/reducing tophi over time.'], ['Actions', 'Coordinate low-start/titrated ULT, prescribed flare prophylaxis, serial urate/safety labs, and adherence/access support.'], ['Evaluate', 'Review laboratory trends, tolerability, flare pattern, tophi, and joint function; early flares do not alone establish ULT failure.']] },
          { title: '3. Support home self-management', fields: [['Goal', 'Patient uses teach-back to explain their medicines, warning signs, mobility plan, realistic diet/fluid changes, and follow-up.'], ['Actions', 'Provide a written flare plan, reconcile OTC/prescription medicines, fit aids/footwear, arrange needed help, and agree on sustainable nutrition/weight goals.'], ['Evaluate', 'Confirm safe technique/understanding and practical access to medicines, labs, transport, and support.']] }
        ] }
      ],
      interventions: [
        { type: 'list', items: ['Assess and document pain, joint appearance, mobility, vital signs, and treatment response; escalate infection concern or an atypical/worsening course promptly.', 'Administer the chosen flare medicine after patient-specific safety/interaction checks. Monitor stool/GI symptoms, renal function, bleeding, glucose/BP, skin reactions, and other drug-specific concerns.', 'Rest/protect and elevate the joint, apply wrapped cold packs when appropriate, avoid tight footwear/pressure, and assist transfers/ADLs. Progress activity as tolerated without forcing painful loading.', 'Coordinate aspiration/specimen handling or ordered imaging/labs; ensure urate is rechecked after a potentially misleading flare-time result and serially during ULT titration.', 'Reinforce the difference between acute anti-inflammatory treatment, temporary prophylaxis, and maintenance ULT. Support dosing reminders and prompt reporting of adverse effects.', 'Before discharge, review home stairs/fall hazards, footwear/aids, family support, return-to-work/driving safety, and the individual fluid/diet plan. Arrange primary care/rheumatology, pharmacy/dietitian, or home/rehabilitation support when needed.'] }
      ],
      education: [
        { type: 'heading', text: 'A clear home flare plan' },
        { type: 'paragraph', text: 'Teach when and how to start the prescribed flare medicine, the dose limits/interaction precautions, and whom to contact if it does not work. Do not double doses, keep adding colchicine, combine OTC NSAIDs, or stop established ULT just because symptoms recur. Follow prescribed steroid course/taper instructions. Any new allopurinol rash is an exception requiring stopping and prompt medical review.' },
        { type: 'list', items: ['Rest/elevate the painful joint, use wrapped ice for about 15–20 minutes if tolerated, wear non-compressive supportive footwear, and use help/aids/handrails when needed. Avoid high-impact loading until the flare improves; resume work and activities gradually.', 'Keep adequate hydration within any renal/heart fluid restriction. Use whole foods/low-fat dairy, limit high-purine animal foods, alcohol, and sugary drinks, and avoid crash diets. Lifestyle measures support rather than replace indicated maintenance medicine.', 'A flare may be most intense during its first 24–48 hours, improve over the following days, and settle over 1–2 weeks or sometimes longer. This is an approximate pattern, not a guarantee or a reason to wait through worsening symptoms.', 'Seek urgent assessment for a new/atypical hot swollen joint, fever/systemic illness, persistent/worsening pain, or inability to manage at home. Suspected infection can occur without fever.', 'Stop allopurinol and report any rash promptly; blistering, mouth sores, facial swelling, or systemic symptoms need urgent/emergency care. Report severe colchicine GI symptoms, muscle weakness/dark urine, GI bleeding, or reduced urine urgently.', 'Attend serum urate and medicine-safety follow-ups even when well. Use teach-back to confirm the long-term target, actual regimen, safety exceptions, return-to-activity plan, and contact instructions.'] }
      ],
      evaluation: [
        { type: 'list', items: ['Acute symptoms/function: pain, erythema, warmth, swelling, and tenderness improve with treatment, with safer ROM/weight bearing and ADLs. Improvement may begin within 24–48 hours, but neither that response nor full resolution by 1–2 weeks is guaranteed; reassess worsening or inadequate response.', 'Long-term control: the agreed serum urate target is achieved and sustained, with fewer flares and gradual prevention/reduction of tophi and joint damage. Tophi usually resolve over a longer period than an acute flare.', 'Medication safety/adherence: the patient differentiates flare treatment/prophylaxis/ULT, follows the plan when asymptomatic, and recognizes rash, severe GI toxicity, bleeding, renal symptoms, and steroid metabolic effects.', 'Nutrition/lifestyle: sustainable dietary and weight changes, appropriate hydration, and management of hypertension/diabetes/metabolic or renal disease without unsafe fluid loading or stopping indicated aspirin.', 'Follow-up: urate is checked during titration with drug-specific safety labs; once stable at target, ongoing monitoring continues (NICE suggests considering annual urate checks). Review flare frequency, tolerability, and renal changes as well as the number.', 'Teach-back/home safety: the patient explains when to seek urgent care, has safe footwear/aids and help as needed, and can obtain medicines and attend follow-up.'] }
      ]
    },
    clarifications: [
      { title: 'Hyperuricemia, tophi, and triggers', text: 'Separated elevated urate from crystal-proven/clinically assessed gout and clarified underexcretion/production rather than a diet-only model. Tophi are soft-tissue crystal deposits and can be painless; they are not the same as kidney stones. Replaced broad “anemia” with relevant high-turnover disorders and moved surgery/injury into the trigger discussion.' },
      { title: 'Diagnosis and the hot-joint priority', text: 'Added the limits of a flare-time urate result and an explicit infection differential. Crystals and a negative Gram stain do not independently exclude septic arthritis. Ultrasound findings are interpreted with the clinical picture rather than every effusion being diagnostic.' },
      { title: 'Flare treatment versus long-term urate control', text: 'Corrected allopurinol’s role, product/route confusion with Aloprim, and the statement implying prednisone itself is injected into a joint. Added ULT indications, a defined target, low-dose titration, prophylaxis, and continuity through ordinary flares. Colchicine’s early-treatment advice does not justify escalating doses or ignoring later symptoms.' },
      { title: 'Medication and food claims', text: 'Clarified antihypertensive review and preservation of appropriately indicated aspirin. Expanded drug-interaction and renal/hepatic precautions and selected allopurinol pharmacogenetic screening. Cherries, dairy, hydration, and vegetables are placed within a balanced plan without promising a dietary cure or imposing starvation/blanket plant-food restrictions.' },
      { title: 'Nursing process and recovery', text: 'Completed missing adverse-effect, assessment, diagnosis, priority, care-plan, and intervention content while retaining homecare and teach-back details. Recovery intervals are approximate and symptom-based, not guaranteed deadlines; persistent or worsening symptoms need review.' }
    ],
    references: [
      { title: 'BMJ · Antihypertensive drugs and risk of incident gout', url: 'https://www.bmj.com/content/344/bmj.d8190', supports: 'Observational associations differ among antihypertensive medicines, including ACE inhibitors, diuretics, and losartan; this does not justify stopping essential therapy independently.' },
      { title: 'ACR · Gout clinical practice guideline', url: 'https://rheumatology.org/gout-guideline', supports: 'Current ACR guideline listing and full management guidance.' },
      { title: 'ACR · 2020 gout management guideline (PDF)', url: 'https://assets.contentstack.io/v3/assets/bltee37abb6b278ab2c/blt04d52e3b6ff5112f/632cab5b258fb55f6b2186af/gout-guideline-2020.pdf', supports: 'ULT indications, treat-to-target care, prophylaxis, flare-time initiation, HLA screening, and concurrent medicines/diet evidence.' },
      { title: 'NICE NG219 · Gout diagnosis and management', url: 'https://www.nice.org.uk/guidance/ng219/chapter/Recommendations', supports: 'Repeat urate after a flare, diagnosis, individualized treatment targets, titration, and ongoing monitoring.' },
      { title: 'NIAMS · Gout overview, symptoms, and causes', url: 'https://www.niams.nih.gov/health-topics/gout', supports: 'Urate/crystal biology, intercritical disease, tophi, triggers, risk factors, and associated conditions.' },
      { title: 'NIAMS · Diagnosis, treatment, and self-care', url: 'https://www.niams.nih.gov/health-topics/gout/diagnosis-treatment-and-steps-to-take', supports: 'Flare versus urate-lowering treatment, DASH-style nutrition, activity, cold/elevation, and lifestyle limitations.' },
      { title: 'EULAR · Updated gout diagnostic recommendations', url: 'https://ard.bmj.com/content/79/1/31', supports: 'MSU crystal identification, limits of hyperuricemia alone, and clinical/imaging assessment.' },
      { title: 'EULAR · 2023 imaging recommendations (published 2024)', url: 'https://ard.bmj.com/content/83/6/752', supports: 'Ultrasound/DECT use and interpretation alongside clinical and synovial-fluid assessment.' },
      { title: 'EBJIS · Septic arthritis in native joints guideline (SANJO)', url: 'https://jbji.copernicus.org/articles/8/29/2023/index.html', supports: 'Urgent infection assessment, aspiration/culture, and why crystals or Gram stain do not rule out infection.' },
      { title: 'DailyMed · Colchicine tablet prescribing information', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9111bbad-b020-44fb-b276-d7853e5acd2c', supports: 'Low-dose treatment/prophylaxis, GI/systemic toxicity, renal/hepatic considerations, and CYP3A4/P-gp interactions.' },
      { title: 'DailyMed · Oral allopurinol prescribing information (2026)', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=30ad5ba2-1cef-4933-b104-0597f6a2aaa2', supports: 'Baseline testing, dosing/titration, rash/hypersensitivity, HLA-B*58:01, and azathioprine/mercaptopurine interaction.' },
      { title: 'DailyMed · Aloprim IV prescribing information', url: 'https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=10cc918f-aa44-415b-932d-2404695ac449', supports: 'Distinguishes the specific IV cancer-therapy indication from routine oral gout maintenance.' },
      { title: 'DailyMed · Febuxostat prescribing information', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f2c338dc-5bab-49f4-a4ac-d8dea8afeea5', supports: 'US treatment positioning, cardiovascular-death boxed warning, and medicine safety.' },
      { title: 'MedlinePlus · Naproxen', url: 'https://medlineplus.gov/druginfo/meds/a681029.html', supports: 'NSAID GI, renal, cardiovascular, pregnancy, duplicate-use, and bleeding precautions.' },
      { title: 'MedlinePlus · Prednisone', url: 'https://medlineplus.gov/druginfo/meds/a601102.html', supports: 'Individualized course/taper, metabolic and mood effects, and infection precautions.' }
    ]
  },
  osteoporosis: {
    title: 'Osteoporosis', abbreviation: 'Osteoporosis', week: 9, deck: 'osteoporosis',
    reviewed: 'November 15, 2026',
    reading: 'Course study guide: Osteoporosis—prevention and diagnostic testing. Based on your supplied notes and Week 9 presentation, with missing nursing-process sections completed and clinical guidance verified against the sources below.',
    focus: [
      { section: 'risk', label: 'Prevention & health promotion' },
      { section: 'diagnostics', label: 'Diagnostic testing' }
    ],
    content: {
      overview: [
        { type: 'paragraph', text: 'Osteoporosis is a chronic bone disease characterized by reduced bone strength and deterioration of internal bone structure, making fractures more likely. Bone remodeling becomes imbalanced: resorption exceeds replacement, or bone formation is inadequate. Low bone mineral density (BMD) is an important part of fracture risk, but bone quality, prior fractures, and falls also matter.' },
        { type: 'paragraph', text: 'Primary osteoporosis commonly accompanies aging and estrogen loss after menopause. Secondary osteoporosis is associated with another disorder or medicine. Early detection, adequate nutrition, appropriate medication, fall prevention, and tailored weight-bearing/resistance exercise reduce fracture risk. Calcium and vitamin D support treatment; they do not replace fracture-prevention medicine when that is indicated.' }
      ],
      manifestations: [
        { type: 'callout', title: 'Often silent until a fracture', text: 'Low BMD itself usually causes no pain or early physical discomfort. A fragility fracture typically follows low-energy trauma, such as a fall from standing height or less; vertebral fractures may occur with minimal stress and may be unrecognized.' },
        { type: 'list', items: ['Common fragility-fracture sites include vertebrae, hip, and distal forearm/wrist; other sites also occur.', 'Vertebral compression fractures may cause sudden or persistent back pain, muscle spasm, height loss, and increasing thoracic kyphosis. Some produce few symptoms.', 'Hip fractures can cause hip/groin pain, inability to bear weight, and a shortened or externally rotated leg; a fracture may still be present without every classic finding.', 'Pain, altered posture/body shape, fear of falling, reduced independence, and body-image concerns can affect daily life. Constipation may accompany immobility, medicines, or reduced intake; assess the cause rather than assuming it proves spinal bone loss.'] }
      ],
      risk: [
        { type: 'heading', text: 'Non-modifiable and clinical risk factors' },
        { type: 'list', items: ['Increasing age, menopause/estrogen deficiency, family history (especially parental hip fracture), and a previous fragility fracture raise risk. Men also develop osteoporosis.', 'Population rates differ by ancestry, including higher rates of low BMD in White and Asian women, but people of every racial/ethnic group can fracture. Do not use race to exclude assessment or needed treatment.', 'Low body weight, eating disorders/severe malnutrition, inadequate calcium/vitamin D, inactivity, smoking, and excessive alcohol contribute. Falls and poor balance add fracture risk even when BMD is not severely reduced.', 'Secondary contributors include hyperparathyroidism, hyperthyroidism, Cushing syndrome, diabetes, celiac disease, IBD, and bariatric surgery/malabsorption. Type 2 diabetes can increase fracture risk despite normal or higher BMD.', 'Long-term systemic glucocorticoids such as prednisone reduce formation and increase resorption. Selected antiseizure drugs affect vitamin D/bone metabolism. Aromatase inhibitors and androgen-deprivation therapy accelerate bone loss through sex-hormone reduction. Review all medicines rather than stopping essential treatment independently.'] },
        { type: 'heading', text: 'Prevention, health promotion, and early detection' },
        { type: 'paragraph', text: 'Build a plan for adequate calcium/vitamin D and protein, regular safe weight-bearing/strength/balance activity, smoking cessation, alcohol moderation, and home fall prevention. Review diseases and medicines that affect bone, fracture/fall history, and unexplained height loss. Arrange screening or diagnostic assessment according to age, risk, and clinical findings; FRAX estimates risk but is not a screening blood test or a substitute for assessment after a fracture.' },
        { type: 'paragraph', text: 'USPSTF recommends screening women age 65 or older and postmenopausal women younger than 65 who have increased risk on clinical assessment. Its evidence is insufficient to recommend for or against routine screening in men; specialty guidance such as BHOF recommends BMD testing in men age 70 or older and younger adults with relevant risks. These routine-screening statements do not mean waiting until those ages after a fragility fracture, substantial glucocorticoid exposure, or another suspected secondary cause.' }
      ],
      diagnostics: [
        { type: 'heading', text: 'Central DXA / DEXA: standard BMD assessment' },
        { type: 'paragraph', text: 'Dual-energy X-ray absorptiometry uses low-dose radiation, usually at the lumbar spine and hip. A 33% radius/forearm measurement is used in selected circumstances, not as an interchangeable routine wrist test for everyone. Interpret results with fracture history, risk factors, scan quality, and possible artifact.' },
        { type: 'cards', items: [
          { title: 'T-score: young-adult reference', fields: [['Who / what', 'Used for diagnostic classification in postmenopausal women and men age 50 or older. It compares BMD with a young-adult reference, not an age-matched person.'], ['Thresholds', 'Normal: T-score ≥ −1.0. Low bone mass (osteopenia): −2.5 < T-score < −1.0. Osteoporosis: T-score ≤ −2.5 at an accepted diagnostic site.'], ['Clinical diagnosis', 'A hip or vertebral fragility fracture can establish a treatment indication regardless of T-score. A less abnormal score does not erase a prior osteoporosis diagnosis or exclude fracture risk.']] },
          { title: 'Z-score: age-matched reference', fields: [['Who / what', 'Preferred in premenopausal women and men younger than 50. Z-score ≤ −2.0 is “below the expected range for age.”'], ['Interpretation', 'Investigate context/secondary causes; do not automatically apply older-adult T-score labels to younger adults. BMD alone is insufficient to diagnose osteoporosis in men under 50.']] },
          { title: 'DXA nursing responsibilities', fields: [['Before', 'Explain the brief, noninvasive scan. Follow the facility’s instructions, commonly withholding calcium supplements for at least 24 hours because residual tablets can create image artifact—not because they instantly raise local bone calcium. Review possible pregnancy and recent barium, contrast, or nuclear-medicine studies; remove metal near the scan area.'], ['During', 'Assist with safe supine positioning, transfers, and remaining still; protect painful or previously fractured areas.'], ['After', 'Usual activities generally resume immediately. Ensure results reach the clinician, explain the agreed follow-up, and reinforce fall safety. Do not treat a T-score in isolation or delay urgent assessment of suspected fracture.']] },
          { title: 'FRAX and vertebral imaging', fields: [['FRAX', 'Estimates 10-year hip and major osteoporotic fracture probability using clinical factors, with or without femoral-neck BMD. US BHOF treatment thresholds include hip risk ≥3% or major fracture risk ≥20% in appropriate older adults with low bone mass. Country thresholds differ; FRAX is not a serial treatment-response test.'], ['Imaging', 'X-rays or DXA vertebral fracture assessment can identify compression fractures when indicated by height loss, symptoms, or risk. Plain X-rays are not the routine quantitative test for early bone loss or serial BMD response.']] },
          { title: 'Laboratory assessment', fields: [['Purpose', 'No single lab confirms osteoporosis. Evaluate secondary causes and medication safety using selected CBC, calcium/albumin, renal function, phosphate, alkaline phosphatase, 25-hydroxyvitamin D, and indicated PTH, TSH, or other tests.'], ['Interpretation', 'Normal serum calcium does not rule out osteoporosis. Interpret calcium with albumin or ionized calcium when appropriate. Testing is individualized; not every patient requires every endocrine test.']] }
        ] }
      ],
      medical: [
        { type: 'paragraph', text: 'The goal is to prevent first and subsequent fractures while preserving safe mobility, independence, and quality of life. Assess overall fracture risk and secondary causes; correct nutritional deficiencies and select therapy with the patient based on fracture pattern/risk, renal function, comorbidities, preferences, and access.' },
        { type: 'list', items: ['Antiresorptives, including bisphosphonates and denosumab, slow bone breakdown. Bone-forming/anabolic treatment such as teriparatide may be appropriate for very high risk, including selected patients with severe or multiple vertebral fractures. Follow an anabolic course with an antiresorptive to preserve gains.', 'After a fragility fracture, coordinate prompt osteoporosis evaluation, appropriate fracture care, pain control, rehabilitation, and a fracture-liaison or equivalent secondary-prevention service. Do not treat the fracture alone and overlook the next-fracture risk.', 'Treat contributory endocrine/malabsorptive disease and review bone-harming medicines with the prescribing team. Calcium/vitamin D adequacy accompanies, rather than replaces, indicated medication.', 'Review treatment duration and response. A supervised bisphosphonate pause may be considered in selected lower-risk patients after reassessment, often after about 5 years oral or 3 years IV treatment. High-risk patients may need continued therapy. Denosumab does not have the same drug-holiday approach.'] },
        { type: 'callout', title: 'Plan denosumab continuity before starting', text: 'Do not delay, stop, or switch denosumab without a prescriber-led plan. Its effects reverse rapidly, and discontinuation can cause rebound bone loss and multiple vertebral fractures. Arrange follow-on antiresorptive treatment when discontinuing; renal disease may require specialist planning.' }
      ],
      medications: [
        { type: 'cards', items: [
          { title: 'Bisphosphonates: inhibit osteoclast-mediated resorption', fields: [['Schedules differ', 'Examples for osteoporosis treatment: alendronate orally daily or weekly; immediate-release risedronate daily, weekly, or monthly depending on product; ibandronate orally monthly or IV every 3 months; zoledronic acid (Reclast) IV yearly. They are not all oral daily/weekly medicines. Ibandronate’s demonstrated vertebral benefit should not be assumed to establish hip-fracture reduction.'], ['Oral technique', 'For standard immediate-release alendronate/risedronate, take after rising with plain water, before food, other drinks, or medicines; wait at least 30 minutes and remain upright. Alendronate also requires remaining upright until after the first food. Oral ibandronate requires at least 60 minutes. Use the actual label’s water amount, commonly 6–8 oz (about 180–240 mL); never swallow dry or take at bedtime.'], ['Important exception', 'Delayed-release risedronate (Atelvia) is taken immediately after breakfast, with at least 4 oz plain water, remaining upright for at least 30 minutes. Confirm formulation rather than teaching one rule for all products.'], ['Before / monitor', 'Correct hypocalcemia, assess vitamin D/calcium adequacy and renal function, and review dental and esophageal/swallowing problems. Oral products are contraindicated with delayed esophageal emptying (for example, stricture/achalasia) or inability to remain upright. Barrett esophagus warrants caution/clinical review; it is not identical to every label’s formal contraindication. Osteoporosis medicines are generally unsuitable during pregnancy; obtain drug-specific advice.'], ['IV zoledronic acid', 'Reclast osteoporosis treatment is 5 mg over at least 15 minutes yearly. Review hydration, creatinine/creatinine clearance before each dose, and calcium/vitamin D. It is contraindicated with CrCl <35 mL/min or acute renal impairment. Other bisphosphonates have their own renal limits.']] },
          { title: 'Denosumab (Prolia): RANKL inhibitor', fields: [['Action / schedule', 'Monoclonal antibody that inhibits osteoclast formation/activity and reduces resorption; 60 mg subcutaneously every 6 months. Book and track the next dose.'], ['Safety', 'Correct hypocalcemia and ensure calcium/vitamin D support; arrange calcium monitoring according to risk. The boxed warning highlights severe, sometimes fatal hypocalcemia in advanced CKD, especially dialysis/CKD-mineral and bone disorder. These patients need specialist assessment and close monitoring; lack of a renal dose adjustment does not make the drug automatically safe.'], ['Continuity', 'Do not let appointments lapse or independently hold treatment for dental work. Coordinate any interruption and follow-on therapy with the prescriber/dentist. Promptly report hypocalcemia symptoms, serious skin infection, jaw symptoms, or new thigh/groin pain.']] },
          { title: 'Teriparatide (Forteo): PTH analogue / anabolic treatment', fields: [['Action / schedule', 'Stimulates new bone formation; typically 20 micrograms subcutaneously daily. Teach pen use, site rotation, sharps disposal, and the prescribed follow-on antiresorptive plan.'], ['Storage / use', 'For the Forteo device, refrigerate at 2–8°C, do not freeze, and discard 28 days after first use. Check the actual product/device instructions. Give initial doses where the patient can sit or lie down if lightheaded.'], ['Precautions', 'Review calcium, stones/hypercalcemia, and osteosarcoma risk. Avoid use in patients with relevant risks such as Paget disease, skeletal malignancy/metastases, or prior skeletal radiation. Nausea, leg cramps, and transient orthostatic symptoms can occur.'], ['Duration', 'Use beyond 2 years during a lifetime is considered only if the patient remains at, or returns to, high fracture risk; it is not an unconditional “never over 2 years” rule under the current label.']] },
          { title: 'Calcium and vitamin D', fields: [['Role', 'Meet dietary needs and treat deficiency to support bone and medication safety. Supplement only the gap or prescribed replacement need; more is not automatically better.'], ['Administration', 'Use elemental-calcium amounts, divided into supplement doses generally no larger than 500 mg for best absorption. Separate from oral bisphosphonates, iron, levothyroxine, and other interacting drugs according to the product/pharmacist’s schedule. See Nutrition for age-specific targets.']] }
        ] }
      ],
      nonpharmacological: [
        { type: 'heading', text: 'Weight-bearing, resistance, and balance exercise' },
        { type: 'paragraph', text: 'Encourage regular walking, appropriate stair climbing or low-impact aerobics, resistance/muscle-strengthening, and balance practice such as adapted tai chi. PT can tailor activity and posture/extension training. Swimming and cycling help general fitness but do not replace weight-bearing/resistance work for bone loading. Progress safely rather than prescribing the same daily intensity for everyone.' },
        { type: 'paragraph', text: 'With vertebral fractures or substantial fracture risk, obtain advice before high-impact exercise or loaded/repetitive spinal flexion and twisting. Modify yoga and lifting techniques; use hip hinging and safe handling rather than deep rounded-back bends. Avoid blanket inactivity, which worsens weakness and falls.' },
        { type: 'heading', text: 'Fall prevention and function' },
        { type: 'list', items: ['Remove loose rugs/clutter and trailing cords; improve lighting/nightlights, install stair handrails and bathroom grab bars, and use secure non-slip bath surfaces.', 'Choose supportive non-slip footwear, correct vision/hearing barriers, and fit canes/walkers appropriately. Practice safe transfers and ask for assistance when needed.', 'Review sedating medicines, orthostatic symptoms, gait/balance, and previous falls. Coordinate PT/OT and home assessment, including access to daily necessities.', 'Support smoking cessation, alcohol moderation, sleep, and coping with posture changes or fear of falling. After fracture, use prescribed bracing/analgesia and rehabilitation when appropriate; avoid prolonged bed rest without a clinical indication.'] }
      ],
      'adverse-effects': [
        { type: 'cards', items: [
          { title: 'Oral bisphosphonate irritation', fields: [['Watch for', 'Dyspepsia, esophagitis, ulcers, painful/difficult swallowing, chest pain, or worsening heartburn.'], ['Response', 'Check technique and prompt prescriber review; significant esophageal symptoms require stopping the oral dose and seeking medical advice under the label. GI bleeding or severe chest symptoms need urgent assessment.']] },
          { title: 'IV bisphosphonates', fields: [['Watch for', 'Transient flu-like fever/aches after infusion, particularly the first dose; hypocalcemia and kidney injury are more serious concerns.'], ['Response', 'Check pre-dose renal/calcium status, hydration, prescribed infusion timing, and symptoms. Do not assume persistent severe illness or reduced urine output is merely an expected flu-like reaction.']] },
          { title: 'Hypocalcemia and denosumab', fields: [['Watch for', 'Tingling around the mouth/fingers, cramps or spasms; severe cases may cause confusion, seizures, or arrhythmia. Advanced CKD greatly increases risk.'], ['Response', 'Urgently assess symptoms and follow the monitoring/treatment plan. Also report spreading hot/red/painful skin, fever, or suspected cellulitis/infection.']] },
          { title: 'Rare jaw / atypical femur complications', fields: [['Watch for', 'Nonhealing oral wounds, jaw pain/exposed bone, and persistent new thigh/groin pain during antiresorptive treatment.'], ['Response', 'Arrange evaluation and dental care, maintain oral hygiene, and balance rare medicine risks against fracture-prevention benefit. Do not independently stop denosumab while awaiting dental review.']] },
          { title: 'Anabolic treatment and supplements', fields: [['Teriparatide', 'Monitor symptomatic orthostasis/falls, nausea, leg cramps, and hypercalcemia/stone concerns.'], ['Calcium / vitamin D', 'Excess can cause hypercalcemia or other toxicity; supplements may contribute to constipation or kidney stones. Review total intake, renal disease, and interactions.']] }
        ] }
      ],
      nutrition: [
        { type: 'heading', text: 'Calcium: total intake from food plus supplements' },
        { type: 'list', items: ['US recommended intake: 1,000 mg/day for adults 19–50 and men 51–70; 1,200 mg/day for women 51 or older and all adults 71 or older. The 1,300-mg target is for adolescents, not the routine adult osteoporosis target.', 'Use low-fat dairy or suitable fortified plant milk/juice/cereal, calcium-set tofu, canned salmon/sardines with bones, and vegetables such as kale, bok choy, and broccoli. Check labels and actual portions.', 'Food is preferred; supplement the shortfall. For best absorption, divide supplements into elemental-calcium doses of about 500 mg or less. This is an absorption strategy, not a toxicity threshold or a limit on total daily intake.', 'Calcium carbonate is best with food; calcium citrate can be taken with or without food and may suit low stomach acid. Review constipation, stone/renal history, excessive intake, and medication spacing.'] },
        { type: 'heading', text: 'Vitamin D and balanced nutrition' },
        { type: 'paragraph', text: 'Vitamin D supports intestinal calcium absorption. US RDA is 600 IU/day for adults through age 70 and 800 IU/day after 70. Osteoporosis guidance commonly uses 800–1,000 IU/day for adults age 50 or older, adjusted for clinical status, 25-hydroxyvitamin D, malabsorption, and prescribed deficiency treatment. A generic 400-IU dose is not the default older-adult target. Avoid unsupervised high-dose replacement.' },
        { type: 'list', items: ['Sources include fatty fish (salmon, mackerel, tuna), egg yolks, fortified foods, and prescribed/suitable vitamin D supplements such as D3. Sun exposure is variable and is not a reliable dosing plan; maintain skin protection.', 'Adequate protein supports bone matrix and muscle: fish, poultry, legumes, nuts, dairy, or suitable alternatives. A varied diet supplies magnesium, phosphorus, and vitamin K; routine extra supplements of each are not required.', 'Excessive alcohol increases bone/fall risks. Review caffeine in context of intake and calcium adequacy rather than treating 2–3 cups as a universal medical cutoff.', 'Avoid excessive sodium and displacement of nutritious foods by soft drinks. Carbonation itself is not an established cause of osteoporosis; a blanket claim that all dark colas cause bone loss through phosphoric acid is too strong. Tailor diet to renal and other conditions.'] }
      ],
      assessment: [
        { type: 'paragraph', text: 'Ask about low-trauma fractures, falls/near-falls, new back/hip pain, measured height loss, posture, family history, menopause/hypogonadism, nutrition/weight change, activity, smoking/alcohol, and secondary causes. Review systemic steroids and other medicines, including OTC products, supplement totals, adherence, administration technique, and injection/infusion dates.' },
        { type: 'list', items: ['Assess pain, gait, balance, strength, transfer safety, orthostatic symptoms, ADLs, fear of falling, body image, cognition/vision, and home support/environment.', 'Review available DXA/vertebral imaging and relevant labs, renal status, calcium/vitamin D adequacy, dental problems/planned procedures, and drug-specific contraindications.', 'Check ability to swallow and remain upright before an oral bisphosphonate; check ability to use/refrigerate an injection, obtain medicines, and attend appointments.', 'After a fall or new severe pain, assess injury, neurovascular status, and safe movement rather than testing walking repeatedly. New weakness, saddle sensory changes, or new bladder/bowel dysfunction with back pain requires emergency evaluation.'] }
      ],
      diagnoses: [
        { type: 'paragraph', text: 'Choose the program’s accepted terminology and support actual diagnoses with findings. Low BMD alone does not establish pain or impaired mobility.' },
        { type: 'list', items: ['Risk for falls / physical injury or fracture related to low bone strength, balance problems, medicines, or environmental hazards.', 'Acute or chronic pain related to a vertebral or other fracture when present.', 'Impaired physical mobility, reduced self-care ability, or activity intolerance when supported by pain, weakness, or fracture-related restrictions.', 'Inadequate nutritional intake or knowledge/self-management needs when assessment identifies a gap.', 'Fear/anxiety, disturbed body image, or reduced social participation when identified.', 'Constipation related to immobility, medicines, or intake when present; assess for other causes and red flags.'] }
      ],
      priorities: [
        { type: 'callout', title: 'First action depends on the presentation', text: 'After a fall or suspected fracture, assess ABCs, injury/pain, neurovascular findings, and signs of spinal compromise; arrange urgent evaluation when indicated. Protect the affected limb/spine, assist safely, and avoid forcing weight bearing or movement. For a stable visit, prioritize fracture/fall risk, medication safety/continuity, and an achievable prevention plan.' },
        { type: 'list', items: ['Identify a new hip/vertebral fracture or neurological emergency promptly; do not attribute sudden severe pain to ordinary painless bone loss.', 'Prevent falls through assistance, appropriate aids, environmental changes, and strength/balance rehabilitation.', 'Check calcium/renal and drug-specific safety requirements before treatment; recognize symptomatic hypocalcemia or significant esophageal symptoms.', 'Keep denosumab doses and any planned transition on track; escalate barriers early rather than allowing an unplanned interruption.', 'Support nutrition, education, secondary-cause evaluation, and follow-up to prevent subsequent fractures.'] }
      ],
      plan: [
        { type: 'cards', items: [
          { title: '1. Prevent fractures and falls', fields: [['Goal', 'No new fragility fracture or preventable fall; patient demonstrates safe transfers and an individualized mobility plan.'], ['Actions', 'Assess fall/fracture risks, arrange appropriate therapy and DXA/secondary-cause evaluation, coordinate PT/OT, and complete agreed home safety changes.'], ['Evaluate', 'Review falls/near-falls, new pain/height loss, equipment use, function, and fracture history at follow-up.']] },
          { title: '2. Use treatment safely and consistently', fields: [['Goal', 'Patient explains the exact regimen, demonstrates oral/SC technique when relevant, and has the next dose/lab/follow-up scheduled.'], ['Actions', 'Reconcile medicines and supplements, verify renal/calcium safety, teach the actual formulation instructions, and solve cost, transport, or dexterity barriers.'], ['Evaluate', 'Use teach-back and appointment/dispensing review; confirm no unplanned denosumab gap or unmanaged adverse effect.']] },
          { title: '3. Maintain nutrition, comfort, and independence', fields: [['Goal', 'Meet individualized calcium/vitamin D/protein needs and participate in safe daily activities with acceptable pain if recovering from fracture.'], ['Actions', 'Estimate dietary intake, supplement gaps appropriately, provide prescribed pain relief, graded activity, bowel support, and rehabilitation/home services.'], ['Evaluate', 'Review intake, tolerance, weight/function, pain-related participation, and the patient’s own priorities.']] }
        ] }
      ],
      interventions: [
        { type: 'heading', text: 'Deliver the plan and reassess' },
        { type: 'list', items: ['Implement safe transfers, footwear, lighting, grab bars/handrails, and fitted mobility aids; involve PT/OT for strength, balance, lifting, posture, and home setup.', 'Give prescribed therapies after drug-specific safety checks. Verify fasting/upright timing for the exact oral bisphosphonate, infusion renal/hydration requirements, and calcium monitoring when indicated.', 'Use a dose/appointment reminder system, particularly for 6-monthly denosumab. Notify the prescribing team early about missed doses, dental procedures, new contraindications, or access problems.', 'Support adequate intake and prescribed supplementation, review interactions and bowel tolerance, and involve a dietitian for malnutrition/malabsorption or complex renal needs.', 'After fracture, provide appropriate analgesia, protected positioning, prescribed weight-bearing/bracing, skin/respiratory/bowel care, and early safe rehabilitation according to the injury plan.', 'Before discharge, assess ADLs, balance, stairs, living environment, equipment, caregiver ability, and medication understanding. Arrange primary care/specialist follow-up, home health/rehabilitation, transport, and community support as needed.'] }
      ],
      education: [
        { type: 'paragraph', text: 'Explain that osteoporosis can remain silent and that the main goal is fewer fractures, not only a better scan number. Use teach-back and include chosen family/caregivers. Review calcium/vitamin D targets, food sources, smoking cessation, alcohol moderation, tailored weight-bearing/strength/balance activity, and safe movement/home modifications.' },
        { type: 'list', items: ['Have the patient describe their specific medicine, route, interval, water/food/upright rules, supplement spacing, storage, missed-dose advice, and planned monitoring. Avoid a generic rule that every osteoporosis pill is taken the same way.', 'Do not independently stop treatment. A clinician may plan a bisphosphonate pause after reassessment; denosumab requires an explicit transition strategy if discontinued.', 'Maintain oral hygiene and dental follow-up; tell the dentist and prescriber about antiresorptive treatment. Promptly report jaw/nonhealing mouth problems or persistent new thigh/groin pain.', 'Report new sudden back or hip pain, unexplained height loss, a fall with suspected injury, or inability to bear weight promptly. New neurological deficits/bladder-bowel changes or severe hypocalcemia symptoms require emergency care.', 'Keep follow-up, DXA, labs, and injection/infusion appointments. Ask early for transportation, medication-cost, home-health, or caregiver support.'] }
      ],
      evaluation: [
        { type: 'list', items: ['Fracture prevention: no new fragility fracture, fewer falls/near-falls, and no unexplained height loss or new concerning back/hip symptoms; investigate any event rather than relying on a scan alone.', 'Bone density: stable or improved BMD when follow-up is indicated, interpreted against the facility’s least significant change/precision and comparable scans. Repeat DXA is often considered 1–2 years after starting/changing therapy and individualized thereafter; a tiny T-score change may be measurement variation.', 'Function and comfort: acceptable fracture-related pain, safe transfers/ADLs, and participation in suitable weight-bearing, strength, and balance activities without unsafe loading.', 'Medication safety/adherence: correct product-specific technique, scheduled doses/follow-on therapy, and no unrecognized esophageal injury, hypocalcemia, significant infection, jaw complication, or atypical-femur symptoms.', 'Nutrition and lifestyle: adequate age-appropriate total calcium, vitamin D, and protein; appropriate supplement spacing; smoking cessation and alcohol moderation without unnecessary dietary restrictions.', 'Follow-up and self-management: the patient explains red flags, demonstrates safety changes/aids, attends follow-up, and has needed home/community support. Reassess treatment risk/benefit over time; a T-score rising above −2.5 does not automatically mean osteoporosis is cured.'] }
      ]
    },
    clarifications: [
      { title: 'DXA interpretation and screening', text: 'Corrected T-score to a young-adult reference and separated age-matched Z-scores. Threshold boundaries do not overlap. Central hip/spine DXA is standard; forearm sites are selected. USPSTF screening recommendations for women and insufficient evidence in men are distinguished from BHOF’s specialty recommendation to test men at 70. A fracture or suspected secondary cause warrants evaluation outside routine age-based screening.' },
      { title: 'Scan preparation, X-rays, and FRAX', text: 'Calcium tablets may produce scan artifact; they do not rapidly increase calcium in local bone. Plain X-rays detect fractures but are not routine quantitative monitoring for early osteoporosis. FRAX estimates fracture probability and helps treatment decisions; it does not directly monitor drug response or replace clinical assessment.' },
      { title: 'Bisphosphonate formulation and safety', text: 'Corrected the claim that all bisphosphonates are oral daily/weekly drugs. Added monthly/IV options, 60-minute oral ibandronate instructions, and after-breakfast delayed-release risedronate. Barrett esophagus is a caution requiring review, while delayed esophageal emptying/inability to remain upright and hypocalcemia are formal oral-product contraindications. Renal limits and pregnancy advice are drug-specific.' },
      { title: 'Denosumab interruption and advanced kidney disease', text: 'Strengthened “another medication may be started” to a planned follow-on antiresorptive strategy when discontinuing, because rebound vertebral fractures are a recognized risk. Added the current boxed warning for severe hypocalcemia in advanced CKD, especially dialysis/CKD-mineral and bone disorder. No unsupervised drug holiday or dental hold is advised.' },
      { title: 'Nutrition, exercise, and teriparatide', text: 'Replaced broad calcium/vitamin D ranges with age-specific US targets and individualized osteoporosis/deficiency dosing. Divided-dose advice applies to calcium supplements. Removed a universal caffeine cutoff, a blanket carbonation/cola mechanism, and prescribed sun exposure. Exercise and spinal-flexion restrictions are individualized. Forteo device storage and the current conditional use beyond 2 years replace generic or outdated rules.' },
      { title: 'Completed nursing process', text: 'Filled the empty assessment, diagnoses, priority, care-plan, adverse-effect, and intervention sections while retaining your homecare, nutrition, teaching, and evaluation points. Pain/constipation are assessed in context rather than assumed in every patient. Follow-up emphasizes fractures, safe function, and meaningful BMD change—not a promise of cure or a required improvement on every scan.' }
    ],
    references: [
      { title: 'BHOF · Clinician’s guide to osteoporosis prevention and treatment (2022)', url: 'https://doi.org/10.1007/s00198-021-05900-y', supports: 'Fracture assessment, specialty screening, US FRAX treatment thresholds, medication selection, and follow-up.' },
      { title: 'USPSTF · Osteoporosis screening (2025)', url: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/osteoporosis-screening', supports: 'Screening women at 65 or earlier after postmenopausal risk assessment; insufficient screening evidence for men.' },
      { title: 'ISCD · Official adult positions', url: 'https://iscd.org/official-positions-2023/', supports: 'T-score/Z-score populations and references, accepted DXA sites, vertebral assessment, and serial BMD interpretation.' },
      { title: 'RadiologyInfo · Bone density scan', url: 'https://www.radiologyinfo.org/en/info/dexa', supports: 'Low-dose DXA, preparation, calcium supplements, positioning, pregnancy/recent contrast review, and aftercare.' },
      { title: 'Endocrine Society · Osteoporosis pharmacological management', url: 'https://www.endocrine.org/clinical-practice-guidelines/osteoporosis-in-postmenopausal-women', supports: 'Risk-based treatment, selected bisphosphonate holidays, denosumab continuity, and anabolic/antiresorptive sequencing.' },
      { title: 'NOGG · 2024 recommendations summary', url: 'https://www.nogg.org.uk/sites/nogg/download/NOGG-Summary-of-main-recommendations-2024.pdf?v4=', supports: 'Prompt secondary fracture prevention, risk reassessment, and planned therapy after denosumab.' },
      { title: 'NOGG · Non-pharmacological management', url: 'https://www.nogg.org.uk/full-guideline/section-5-non-pharmacological-management-osteoporosis', supports: 'Tailored weight-bearing/strength/balance work, falls assessment, diet, smoking/alcohol, and spinal-flexion caution.' },
      { title: 'NIH ODS · Calcium: health professional fact sheet', url: 'https://ods.od.nih.gov/factsheets/Calcium-HealthProfessional/', supports: 'US age/sex intake targets, sources, elemental supplement doses/forms, interactions, and excess-intake risks.' },
      { title: 'NIH ODS · Vitamin D: health professional fact sheet', url: 'https://ods.od.nih.gov/factsheets/VitaminD-HealthProfessional/', supports: 'Age-specific RDA, food/supplement sources, deficiency context, UV limitations, and toxicity.' },
      { title: 'FDA · Fosamax prescribing information (2026)', url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/020560s073lbl.pdf', supports: 'Alendronate schedules, water/fasting/upright rules, esophageal precautions, hypocalcemia, and rare bone adverse effects.' },
      { title: 'DailyMed · Immediate-release risedronate', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f715718a-407d-4e2a-9834-74a8f1361d03', supports: 'Product-specific daily/weekly/monthly schedules and before-food administration.' },
      { title: 'DailyMed · Atelvia delayed-release risedronate', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c8b9ab88-1a26-46c3-80ec-4eaa45202021', supports: 'After-breakfast dosing, water amount, upright time, and mineral/iron separation.' },
      { title: 'DailyMed · Oral ibandronate', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6ca94cce-a2bb-421f-bd8f-6b14bc2bd985', supports: 'Monthly dosing and 60-minute fasting/upright interval.' },
      { title: 'DailyMed · IV ibandronate', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e81f2c5b-bead-48ac-be3e-016cf963d7ed', supports: 'IV treatment every 3 months and professional administration requirements.' },
      { title: 'FDA · Reclast prescribing information (2026)', url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/021817s032lbl.pdf', supports: 'Yearly osteoporosis infusion, minimum infusion time, renal contraindications, hydration, and acute-phase reaction.' },
      { title: 'DailyMed · Prolia prescribing information', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=49e5afe9-a0c7-40c4-af9f-f287a80c5c88', supports: 'Six-month dosing, current boxed hypocalcemia warning, monitoring, skin/jaw/femur risks, and rebound fractures.' },
      { title: 'FDA · Prolia severe hypocalcemia boxed warning', url: 'https://www.fda.gov/drugs/drug-safety-and-availability/fda-adds-boxed-warning-increased-risk-severe-hypocalcemia-patients-advanced-chronic-kidney-disease', supports: 'Advanced CKD/dialysis risk and specialist-led assessment/monitoring.' },
      { title: 'DailyMed · Forteo prescribing information', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=aae667c5-381f-4f92-93df-2ed6158d07b0', supports: 'Daily anabolic dosing, refrigeration/device discard, orthostasis, calcium/osteosarcoma precautions, and conditional duration beyond 2 years.' }
    ]
  },
  osteoarthritis: {
    title: 'Osteoarthritis', abbreviation: 'OA', week: 9, deck: 'osteoarthritis',
    reviewed: 'November 15, 2026',
    reading: 'Course study guide: Osteoarthritis—clinical signs and symptoms and the nursing care plan. Based on your supplied notes and Week 9 presentation. Your notes cite Hinkle et al. (2025), Katz et al. (2021), and Richard et al. (2023); full bibliographic details were not supplied. Verified clinical references are linked below.',
    focus: [
      { section: 'manifestations', label: 'Clinical signs & symptoms' },
      { section: 'plan', label: 'Nursing care plan' }
    ],
    content: {
      overview: [
        { type: 'paragraph', text: 'Osteoarthritis (OA) is the most common form of arthritis. It is a whole-joint disorder involving cartilage, subchondral bone, synovium, ligaments/tendons, surrounding muscles, and structures such as the knee meniscus. The traditional label “non-inflammatory degenerative disease” distinguishes it from systemic autoimmune arthritis, but local inflammation can occur; OA is more than simple wear-and-tear.' },
        { type: 'heading', text: 'Structural changes and symptoms' },
        { type: 'list', items: ['Altered joint loading, tissue injury, aging-related changes, and other factors can disrupt cartilage maintenance. Cartilage damage and loss contribute to joint-space narrowing.', 'Subchondral bone can become thickened/sclerotic, cystic changes can develop, and osteophytes form at joint margins. Loose cartilage/bone fragments and synovial irritation may contribute to symptoms.', 'Pain can arise from several innervated joint and surrounding tissues; cartilage itself is not the sole pain source. Weakness and reduced activity can further impair stability and function.', 'Primary/idiopathic OA has no single identified initiating cause. Secondary OA follows a contributing condition such as previous injury, abnormal joint structure, metabolic disease, or damage from inflammatory arthritis. OA and RA may coexist, but they are distinct disorders.'] },
        { type: 'heading', text: 'Onset and course' },
        { type: 'paragraph', text: 'OA can occur in younger adults, including after injury, and becomes more common with age. The original 30s/50s/60s descriptions are context, not age requirements. Symptoms often develop gradually over years, but there is no universal 10–20-year progression schedule. Some people remain stable or improve with management; others develop significant disability or need joint replacement.' }
      ],
      manifestations: [
        { type: 'callout', title: 'Typical OA: activity-related pain and brief stiffness', text: 'Deep aching pain often worsens with loading/use and improves with rest; morning or post-inactivity stiffness is usually brief, often 30 minutes or less. Reduced ROM, crepitus, and bony enlargement support the pattern. Symptoms may be asymmetric, bilateral, or involve several joints—“unilateral” is not a requirement.' },
        { type: 'cards', items: [
          { title: 'Pain and function', fields: [['Recognize', 'Pain with walking, stairs, gripping, or other joint use; brief stiffness after sitting; reduced ROM and difficulty with transfers/ADLs. Advanced disease can also cause rest/night pain.'], ['Impact', 'Weakness, joint instability/buckling, altered gait, sleep disturbance, fatigue, and mood effects can follow chronic pain and disability.']] },
          { title: 'Common sites', fields: [['Lower limb / spine', 'Knees, hips, and degenerative changes of the cervical/lumbar spine. Hip pain may be felt in the groin, buttock/thigh, or referred to the knee.'], ['Hands', 'DIP and PIP joints and the thumb base (first CMC) are common. OA is not limited to weight-bearing joints.']] },
          { title: 'Physical findings', fields: [['Nodes', 'Heberden’s nodes are hard bony enlargements at DIP joints; Bouchard’s nodes are at PIP joints.'], ['Other findings', 'Crepitus is a grating/crunching sensation or sound with movement, often at the knee. Reduced ROM, bony enlargement, deformity, tenderness, and a mild effusion/swelling can occur. Crepitus does not require a hot, bright-red, febrile joint.']] }
        ] },
        { type: 'paragraph', text: 'OA does not typically cause a systemic inflammatory syndrome with fever, unexplained weight loss, or autoimmune organ injury. However, “no fatigue ever” is too absolute because pain and poor sleep can cause fatigue. A suddenly hot, very red, severely swollen joint, fever, rapid deterioration, or inability to bear weight needs assessment for infection, crystal arthritis, injury, or another cause.' }
      ],
      risk: [
        { type: 'heading', text: 'Risk factors' },
        { type: 'list', items: ['Increasing age, female sex (especially in later adulthood), family history, inherited cartilage/bone disorders, and abnormal joint shape/alignment can increase risk.', 'Overweight/obesity, especially for knee and hip disease, repetitive high joint loading, muscle weakness, and prior injury or surgery are important contributors.', 'Physically demanding work and some sports/exposures increase repetitive-load or injury risk. Athletic participation itself is not a reason to avoid all exercise; type, dose, injury history, and individual biomechanics matter.', 'A previous injury cannot be undone, but rehabilitation and prevention of further injury remain useful. Smoking cessation supports overall and surgical health; evidence does not justify promising that quitting specifically prevents all cartilage loss.'] },
        { type: 'heading', text: 'Prevention and early recognition' },
        { type: 'paragraph', text: 'Support an appropriate weight, regular strengthening/aerobic activity, injury prevention/rehabilitation, safe work techniques, and appropriate footwear. No strategy guarantees prevention. There is no universal age-based OA screening program; evaluate persistent symptoms and function. Routine MRI screening for early tissue changes is not recommended for otherwise typical OA.' }
      ],
      diagnostics: [
        { type: 'paragraph', text: 'Typical OA is often diagnosed from history and joint examination without routine imaging. Assess activity-related pain, stiffness pattern, ROM, bony changes, crepitus, gait/function, and atypical features. NICE’s common clinical pattern includes age 45 or older with activity-related pain and no stiffness or stiffness lasting no more than 30 minutes; younger patients can still have OA and need an appropriate differential assessment.' },
        { type: 'cards', items: [
          { title: 'X-rays', fields: [['Findings', 'Joint-space narrowing, osteophytes, subchondral sclerosis/thickening, and sometimes subchondral cysts or deformity. The diagram labels in your notes correspond to cartilage fragments, narrowed space, and osteophytes.'], ['Limitations', 'Corrected “abnormal X-ray does not exclude early OA” to the intended point: a normal or minimally changed X-ray does not exclude early symptomatic OA. Imaging severity and pain do not always match. Imaging may be useful for atypical features or surgical planning, not required for every case.']] },
          { title: 'MRI / other imaging', fields: [['Role', 'MRI can show cartilage, menisci, ligaments, bone, and other tissues, but is usually unnecessary for straightforward OA. Consider it when a specific additional diagnosis or unexplained presentation would change management, not simply because it detects more abnormalities.'], ['Nursing role', 'Explain the actual ordered study and follow implant/metal, pregnancy, positioning, and any contrast-safety instructions. Plain X-rays usually require no fasting/contrast preparation.']] },
          { title: 'Blood tests', fields: [['Role', 'No routine blood test independently confirms OA. ESR/CRP, RF/anti-CCP or other tests may investigate inflammatory/infectious alternatives when indicated. CBC, renal/liver studies, and other tests may assess treatment or operative safety.'], ['Interpretation', 'Use symptoms and examination alongside results; a normal inflammatory marker does not independently exclude joint infection. Avoid ordering a broad autoimmune panel for every typical OA presentation.']] },
          { title: 'Arthrocentesis for unexplained swelling or an acutely hot joint', fields: [['Purpose', 'Send indicated cell count/differential, Gram stain/culture, and crystal analysis to investigate infection or gout/other crystal disease. OA fluid is often non-inflammatory, but no cell-count threshold or crystal result alone excludes infection.'], ['Nursing care', 'Explain/verify consent under local policy, review relevant bleeding/anticoagulant and allergy history, assist with aseptic positioning/specimen handling, and monitor the site and symptoms afterward. Escalate increasing pain, fever, drainage, or marked swelling.']] }
        ] }
      ],
      medical: [
        { type: 'heading', text: 'Core treatment: function, exercise, and shared decisions' },
        { type: 'paragraph', text: 'Aim to reduce pain/stiffness and improve mobility, participation, and quality of life. Provide education/self-management, tailored strengthening and aerobic exercise, weight support when appropriate, PT/OT, and selected walking aids/braces/hand orthoses. Match treatment to the affected site, comorbidities, goals, and adverse-effect risk rather than treating the X-ray alone.' },
        { type: 'heading', text: 'Medicines and injections are adjuncts' },
        { type: 'paragraph', text: 'Topical NSAIDs are important options for knee/hand OA; oral NSAIDs may be used when suitable after GI, renal, CV, hepatic, and interaction review. Acetaminophen has limited benefit and is not automatically the first choice for most patients. Selected injections can give temporary relief to support function/exercise, but do not rebuild the joint. Routine long-term opioids are discouraged; distinguish chronic OA treatment from a time-limited postoperative pain plan.' },
        { type: 'heading', text: 'Joint replacement' },
        { type: 'paragraph', text: 'Consider referral for arthroplasty when pain, stiffness, deformity, or functional limitation substantially affects life and appropriate non-surgical management is ineffective or unsuitable. Shared decisions include expected benefit, operative risk, rehabilitation, and the patient’s preferences. Recovery varies by joint/procedure, baseline function, and complications; “6+ weeks” is not a universal time to complete recovery.' },
        { type: 'paragraph', text: 'Preoperative optimization includes anemia, infection, smoking, nutrition, diabetes, medication, and VTE/bleeding review. Postoperative priorities include respiratory/hemodynamic stability, bleeding/wound and neurovascular assessment, appropriate pain control, early safe mobilization, infection/VTE prevention, and procedure-specific precautions.' }
      ],
      medications: [
        { type: 'cards', items: [
          { title: 'Topical analgesics', fields: [['Options', 'Topical NSAIDs such as diclofenac for appropriate superficial joints; selected counterirritants such as methyl salicylate, or knee capsaicin in an individualized plan. Topicals do not all have the same evidence or risks.'], ['Nursing role', 'Check the product, dose/area, skin integrity, allergy/interaction history, and any concurrent oral NSAID. Avoid eyes/mucosa and follow handwashing instructions. Do not add heating pads, tight occlusion, or application to damaged skin unless expressly permitted by the product.']] },
          { title: 'Oral NSAIDs and COX-2-selective celecoxib', fields: [['Role', 'Pain/inflammation relief when benefit outweighs GI, renal, CV, fluid/BP, and other risks. Consider appropriate gastroprotection; use the lowest effective dose for the shortest suitable duration.'], ['Nursing role', 'Review ulcer/GI-bleed history, kidney/liver status, BP/edema, pregnancy, anticoagulants and duplicate OTC NSAIDs; monitor relevant CBC/chemistry trends as indicated. Food may reduce dyspepsia but does not prevent ulcer/bleeding.'], ['Celecoxib distinction', 'Review celecoxib/NSAID and sulfonamide reaction history under the current label. CABG-related use is contraindicated; established heart disease/prior stroke requires individualized risk review rather than being an identical absolute contraindication in every case. COX-2 selectivity does not remove GI, renal, or cardiovascular risk.']] },
          { title: 'Acetaminophen / paracetamol', fields: [['Role and dose safety', 'An option for selected short-term/episodic relief when suitable, not a universal first-line default. Follow the actual product/prescriber limit: FDA’s adult ceiling is 4,000 mg in 24 hours from all sources, but many products set a lower limit (for example, 3,000 mg) and some patients require less. The ceiling is not a treatment target.'], ['Monitoring', 'Count combination pain/cold medicines, review alcohol and liver risks, and assess clinically indicated liver/other organ tests for ongoing use. Possible toxicity includes nausea/vomiting, anorexia, RUQ pain, or jaundice, but overdose may initially have few symptoms. Suspected excess needs urgent assessment; N-acetylcysteine is the medical antidote, not a reason to wait for symptoms.']] },
          { title: 'Intra-articular corticosteroids', fields: [['Role', 'Selected short-term symptom relief, with image guidance particularly important for hip injections. Repeat timing depends on response, joint, risks, and surgical plans. A practical limit around 3–4 per year is often used, but “no more than 3” is not a universal evidence-based ceiling or a guarantee of safety.'], ['Nursing role', 'Screen for infection, diabetes, bleeding/anticoagulant issues, and allergies; assist with aseptic technique and positioning. Monitor glucose and the site afterward. Use a wrapped cool pack/rest as advised, rather than a universal compulsory 48-hour icing rule. Report worsening hot swelling, fever, or severe persistent pain.']] },
          { title: 'Duloxetine and opioids', fields: [['Duloxetine', 'A selected option for persistent OA pain. Review liver/renal status, BP, mood, falls, and serotonergic interactions; benefit is not immediate and discontinuation should be supervised.'], ['Tramadol / other opioids', 'Not routine next-step long-term therapy for OA. If an exceptional or postoperative prescription is appropriate, use a clear goal, duration, reassessment, and taper/stop plan. Monitor sedation, breathing, BP, falls, urinary retention, constipation, dependence, and interactions. Tramadol also carries seizure/serotonin-syndrome risk, including with duloxetine or other serotonergic medicines.']] },
          { title: 'Selected 2026 ACR updates', fields: [['Scope', 'The September 2026 summary conditionally supports GLP-1 receptor agonists with diet/exercise for knee OA plus obesity, and methotrexate for selected erosive hand OA. These are individualized specialist/prescriber decisions, not routine drugs for all OA or proven cartilage-restoring treatment. Methotrexate is not recommended for ordinary knee/hip OA in that summary.']] },
          { title: 'Perioperative medicines', fields: [['Examples', 'Prescribed multimodal analgesia, timed surgical antibiotic prophylaxis, appropriate VTE prophylaxis, and tranexamic acid when indicated.'], ['Nursing role', 'Verify the operation-specific plan, allergies, renal/bleeding risks, and neuraxial/procedure timing. NSAIDs, aspirin/other antiplatelets, and anticoagulants have different interruption/restart requirements; do not tell everyone to stop all of them 1 week before surgery.']] }
        ] }
      ],
      nonpharmacological: [
        { type: 'heading', text: 'Exercise and activity pacing' },
        { type: 'paragraph', text: 'Use regular tailored low-impact aerobic activity (walking, cycling, swimming/water exercise), ROM and lower-extremity or hand strengthening. PT can supervise progression, balance, and gait; OT can adapt tasks. Pace activity with rest without prolonged immobilization. Some initial exercise discomfort may occur; adjust loading rather than assuming all discomfort is injury. Severe/new pain or rapid swelling needs reassessment.' },
        { type: 'paragraph', text: 'Yoga, tai chi, or other suitable movement can be adapted to ability. High-impact or injury-prone activities may need modification, but “avoid every high-impact sport forever” is not a universal rule for every patient. After arthroplasty, follow the implant/surgeon’s activity guidance.' },
        { type: 'heading', text: 'Weight, devices, and the environment' },
        { type: 'paragraph', text: 'Support weight reduction when living with overweight/obesity, using achievable goals and nutritional adequacy. Fit canes/walkers and selected braces, splints/hand orthoses, or appropriate shoes to the person’s joint and biomechanics. Do not assume generic insoles or every support benefits everyone. Address device stigma and reassess need with function; discontinuing an aid depends on safe gait, balance, and strength rather than a fixed deadline.' },
        { type: 'heading', text: 'Comfort and integrative care' },
        { type: 'paragraph', text: 'Use protected local warmth for stiffness and cold for painful swelling when helpful, checking skin/sensation/circulation and avoiding burns. Massage, yoga, acupuncture, and coping/behavioral approaches can be discussed as adjuncts. Recommendations differ: the 2026 ACR summary conditionally supports some of these approaches, whereas NICE does not recommend acupuncture for OA. Explain uncertainty and preferences; special diets or supplements are not established cartilage-regrowth treatments.' },
        { type: 'paragraph', text: 'Support sleep, smoking cessation, safe work/recreation, and fall prevention. There is no universal OA screening age or fixed progression timeline; neither repeated MRI nor restricting all movement is the foundation of routine care.' }
      ],
      'adverse-effects': [
        { type: 'cards', items: [
          { title: 'NSAIDs / celecoxib and topical products', fields: [['Systemic risks', 'GI ulcer/bleeding, AKI, fluid retention/hypertension, cardiovascular events, hepatic or allergic/skin reactions. Watch melena, coffee-ground/bloody emesis, declining urine output, edema, chest pain, or serious rash.'], ['Topical risks', 'Local dermatitis/burning and possible systemic NSAID/salicylate exposure. Avoid excessive application, duplicate medicines, and unsafe external heat; topical does not mean risk-free.']] },
          { title: 'Acetaminophen', fields: [['Monitor', 'Excess total dosing, alcohol/liver-related risk, and hepatotoxicity. Early overdose may be asymptomatic; prompt assessment and indicated N-acetylcysteine treatment matter more than waiting for jaundice.']] },
          { title: 'Joint injections', fields: [['Monitor', 'Transient flare/pain, glucose rise, skin/fat changes, bleeding, and rare joint infection. Repeated exposure can harm cartilage or other tissues; discuss benefit, intervals, and timing before planned joint replacement.'], ['Escalate', 'Increasing severe pain, marked hot swelling, fever, drainage, or systemic illness needs urgent evaluation rather than repeated home icing alone.']] },
          { title: 'Duloxetine / tramadol / opioids', fields: [['Monitor', 'Nausea, dizziness/sedation, orthostasis/falls, constipation, and drug-specific risks. Duloxetine requires BP, liver/renal and mood/interaction review. Opioids may depress ventilation; tramadol can cause seizures and serotonin syndrome.'], ['Safety', 'Use prescribed bowel care and appropriate hydration/fiber when safe; discuss overdose-response/naloxone planning when indicated. Do not abruptly stop long-term treatment without an appropriate plan.']] },
          { title: 'Arthroplasty complications', fields: [['Monitor', 'Bleeding/anemia or hematoma, wound/prosthetic infection, DVT/PE, neurovascular injury, dislocation (particularly hip), falls, delirium/sedation, urinary retention, constipation, and delayed rehabilitation.'], ['Hip warning signs', 'Sudden increased pain, a pop, inability to move/bear weight, shortening, or abnormal rotation may indicate dislocation/fracture. Notify the surgical/emergency team immediately, protect the limb, and do not attempt to force it back into place.']] }
        ] }
      ],
      nutrition: [
        { type: 'paragraph', text: 'Use a balanced, adequate diet and dietitian support when weight, comorbidities, or recovery needs warrant it. No special diet, glucosamine, or other supplement has been established to rebuild an arthritic joint. Treat confirmed nutritional deficiencies and bone-health needs for their own indications, not as a promise to cure OA.' },
        { type: 'list', items: ['For overweight/obesity, agree on achievable weight goals while preserving muscle and adequate protein. Avoid crash diets, particularly before/after surgery or in a frail patient.', 'Include vegetables/fruit, whole grains, protein foods, and appropriate fats/fluids; tailor sodium, glucose, renal, and cardiovascular needs to the person.', 'Before arthroplasty, assess weight loss, poor intake, anemia and its cause. Iron is appropriate for iron deficiency; not every anemia needs iron or epoetin.', 'After surgery, support protein/energy intake and wound healing. Manage nausea, swallowing limitations if present, hydration, and bowel care. Fiber/fluids help constipation when appropriate but do not replace assessment of ileus or obstruction.', 'Review alcohol and all supplements/OTC products for medication and surgical interactions. Food with an NSAID may improve tolerance without eliminating GI bleeding risk.'] }
      ],
      assessment: [
        { type: 'heading', text: 'Conservative-care assessment' },
        { type: 'paragraph', text: 'Use OLDCARTS or a consistent pain assessment: onset, location, duration, character, aggravating/relieving factors, radiation, timing, severity, and functional effect as applicable. Assess stiffness duration, ROM, crepitus, swelling/bony changes, strength, gait, balance, falls, sleep, fatigue, mood, work, ADLs, and patient-selected goals. Assess medication use/risks and current exercise/device needs.' },
        { type: 'callout', title: 'Atypical or urgent findings', text: 'A suddenly hot, red, rapidly swollen joint with fever/systemic illness, new inability to bear weight, trauma/deformity, or neurological/neurovascular change needs prompt assessment for another cause. Do not explain these findings away as ordinary OA. With spine symptoms, new progressive weakness, saddle sensory change, or new bladder/bowel dysfunction needs emergency evaluation.' },
        { type: 'heading', text: 'Before arthroplasty' },
        { type: 'paragraph', text: 'Assess baseline neurovascular/function status, skin/infection concerns, CBC/anemia and indicated renal/metabolic tests, bleeding/VTE history, medications/supplements, smoking, nutrition, diabetes, and home support. Confirm the surgical/anesthesia plan, weight-bearing/precautions, teaching needs, and the actual medication stop/restart instructions.' },
        { type: 'heading', text: 'After arthroplasty' },
        { type: 'paragraph', text: 'Assess airway/breathing, alertness/sedation, vital signs/perfusion, pain/nausea, wound/dressing/drain output, swelling/hematoma, and ordered labs. Compare distal pulses, warmth/color, capillary refill, sensation, and movement with baseline and regional-block expectations; new/worsening deficits need escalation. Monitor calf/PE symptoms, mobility/orthostasis, intake/urine and bowel function, and ability to follow the individual precautions. Neurovascular checks do not rule out DVT by themselves.' }
      ],
      diagnoses: [
        { type: 'paragraph', text: 'Use your program’s diagnostic terminology and the actual findings. Conservative and postoperative needs differ.' },
        { type: 'list', items: ['Chronic pain related to joint/tissue changes, or acute pain related to surgery when present.', 'Impaired physical mobility related to pain, stiffness, weakness, or postoperative limitations.', 'Risk for falls/injury based on gait, balance, medication, and environmental factors.', 'Decreased self-care ability or activity intolerance when supported by assessment.', 'Disturbed sleep, fatigue, anxiety, or learning/self-management needs when identified.', 'For arthroplasty: risk for infection, bleeding, thrombosis, or peripheral neurovascular dysfunction as appropriate; assess rather than combining every risk into an assumed actual complication.', 'Constipation, urinary retention, or inadequate nutritional intake when findings support them.'] }
      ],
      priorities: [
        { type: 'callout', title: 'First action: assess the presentation', text: 'For a stable OA visit, assess pain, function, mobility/fall risk, and medication safety. For an acutely hot joint or new severe/traumatic symptoms, evaluate urgently for infection/injury or another cause. After arthroplasty, ABCs/hemodynamic instability, major bleeding, PE symptoms, acute neurovascular changes, or suspected dislocation take priority over routine rehabilitation.' },
        { type: 'list', items: ['Maintain safe movement and pain control that enables exercise/ADLs without unacceptable drug toxicity or sedation.', 'Use education, tailored strengthening/aerobic activity, weight support where indicated, PT/OT, and appropriate aids as core ongoing care.', 'After surgery, detect bleeding/infection/neurovascular problems and deliver the prescribed VTE-prevention plan, analgesia, and early assisted mobilization.', 'Apply the actual operation-specific weight-bearing and hip precautions; do not impose one universal position or assume every approach needs identical restrictions.', 'Prepare accessible home support, equipment, medication instructions, follow-up, and a clear emergency/contact plan.'] }
      ],
      plan: [
        { type: 'paragraph', text: 'Agree on goals, actions, and review times with the patient. These examples retain your conservative and postoperative care-plan structure; adapt the diagnoses and targets to the assessment.' },
        { type: 'cards', items: [
          { title: '1. Pain and participation', fields: [['Goal', 'Achieve an acceptable pain/function target, such as pain ≤3/10 if appropriate for that patient, while completing selected ADLs or exercise.'], ['Actions', 'Assess consistently, give appropriate prescribed medicines, use protected warmth/cold, pace activity/rest, and review adjuncts. Reassess at the expected medicine/route onset and after activity.'], ['Evaluate', 'Better participation/sleep or acceptable pain without GI bleeding, liver/renal injury, excess sedation, or other unacceptable effects; do not rely only on the numeric pain score.']] },
          { title: '2. Mobility, self-care, and fall safety', fields: [['Goal', 'Use aids safely and maintain/improve ROM, transfers, walking, and chosen self-care tasks.'], ['Actions', 'Tailored strengthening/aerobic/ROM work, PT/OT device training, home modifications, pacing, and prescribed weight-bearing/approach-specific precautions after surgery.'], ['Evaluate', 'Demonstrates safe transfers/gait and equipment use, with fewer limitations and no preventable falls or dislocation. Do not judge every hip patient against mandatory abduction/90° restrictions if those were not prescribed.']] },
          { title: '3. Surgical risk prevention, if undergoing arthroplasty', fields: [['Goal', 'Recover with adequate perfusion, a managed wound, and prevention/early recognition of bleeding, infection, VTE, or neurovascular compromise.'], ['Actions', 'Follow individualized medication holds, antibiotic and VTE protocols, wound/neurovascular checks, and early assisted mobility; monitor for anemia and complications.'], ['Evaluate', 'Stable clinical/laboratory trends, wound healing, acceptable limb perfusion/function, and no untreated complication. Being afebrile with a palpable pulse alone does not exclude infection or thrombosis.']] }
        ] }
      ],
      interventions: [
        { type: 'heading', text: 'Conservative pain, function, and self-management' },
        { type: 'paragraph', text: 'Assess pain/function, administer the selected medicines safely, and time appropriate relief before planned exercise when helpful. Reassess oral analgesic benefit often around 30–60 minutes, but follow route/onset and clinical needs rather than a universal clock; parenteral opioids need earlier sedation/respiratory checks. Coordinate PT/OT, joint protection, graded exercise, devices, thermal comfort, weight/nutrition support, and sleep/coping care.' },
        { type: 'heading', text: 'Before surgery: blood conservation and infection readiness' },
        { type: 'paragraph', text: 'Identify and investigate anemia early; give iron for confirmed deficiency or other prescribed treatment. Epoetin alfa is for selected indications, not every arthroplasty patient. Tranexamic acid is commonly used under the surgical plan with contraindication/renal review. Cell salvage and pneumatic tourniquets are selected procedure/team measures, not universal requirements. Verify the medication interruption/restart plan instead of stopping all clotting-related drugs 1 week beforehand.' },
        { type: 'paragraph', text: 'Report active infection/skin breaks or new illness before surgery; postponement and timing depend on the infection and surgical assessment, not one automatic 2–4-week rule. Follow prescribed preoperative washing/antisepsis and appropriately timed antibiotic prophylaxis. Teach wound and symptom reporting without promising antiseptic soap eliminates all infection risk.' },
        { type: 'heading', text: 'After surgery: VTE, wound, and neurovascular care' },
        { type: 'paragraph', text: 'Assess VTE and bleeding risk with the institution’s appropriate surgical pathway; Padua is a medical-patient tool, and Caprini or another tool is used only where appropriate/validated. Reassess at clinical review and whenever condition changes, with additional checks under local policy rather than waiting a fixed 24–48 hours. Administer the selected prophylaxis (for example, LMWH, a DOAC, or aspirin in an appropriate protocol; other options depend on the plan), not every listed medicine together. Coordinate timing with renal function, bleeding, and neuraxial procedures.' },
        { type: 'paragraph', text: 'Use prescribed compression devices/stockings with fit/skin checks, early assisted ambulation, in-bed ankle/leg exercises, and appropriate hydration. These support but do not replace prescribed prophylaxis. Monitor wound drainage/odor, bleeding, fever/systemic illness, pain trajectory, swelling, and distal neurovascular status. Sudden dyspnea/chest pain, new calf swelling, major bleeding, or a new perfusion/neurological deficit needs prompt escalation.' },
        { type: 'heading', text: 'Hip positioning, dislocation precautions, and rehabilitation' },
        { type: 'paragraph', text: 'Confirm the surgical approach, permitted weight bearing, sleeping/sitting positions, and precautions with the team. Neutral alignment/abduction, an abduction pillow, avoiding crossed legs, and avoiding hip flexion beyond 90° may be ordered for some patients, especially with posterior precautions; they are not mandatory for every hip replacement. Choose chair/toilet height and any reclining position within that plan. For suspected dislocation, stop mobilization, protect the limb, notify the team urgently, and do not attempt reduction.' },
        { type: 'paragraph', text: 'Practice supervised walking, transfers, stairs when cleared, dressing aids, and bathroom equipment. Prepare discharge continuity, medication/VTE duration, wound instructions, PT/OT, follow-up, and home support. Assess urinary retention, constipation, nutrition, orthostasis, fatigue, and caregiver capacity as recovery proceeds.' }
      ],
      education: [
        { type: 'list', items: ['Explain whole-joint OA and realistic symptom/function goals. It does not inevitably worsen on a fixed timeline, and an abnormal X-ray is not the only measure of pain or the need for treatment.', 'Continue tailored low-impact aerobic/strength/ROM activity with gradual progression and pacing. Ask about taking prescribed analgesia before activity; avoid excess doses or using pain suppression to force unsafe exercise.', 'Use an appropriate weight/nutrition plan, protected warmth for stiffness and cold for painful swelling, and selected adjuncts such as adapted yoga, massage, or acupuncture after discussing evidence, cost, and safety.', 'Know the actual medicine limit and count all acetaminophen-containing products. Report GI bleeding, kidney/fluid changes, jaundice, serious rash, or excessive sedation. Do not self-combine NSAIDs or assume food prevents ulcers.', 'Before aspiration/injection or surgery, disclose all medicines, anticoagulants, supplements, allergies, diabetes, and infection symptoms. Follow the specific medication hold/restart plan rather than a blanket 1-week rule.', 'After arthroplasty, follow prescribed weight-bearing and approach-specific hip precautions. Learn the actual safe chair, bed, toilet, dressing, and sexual-activity guidance; not every patient needs identical restrictions.', 'Stair training can occur early, even before discharge, when PT/team criteria are met; it does not universally start only at 3–6 weeks. Use the taught railing/device technique and assistance. Driving, work, sexual activity, and fuller recovery are individualized and may take weeks to months.', 'Use canes/walkers and other devices as trained; discuss stigma and reassess with PT rather than stopping because a calendar date or muscle-tone assumption has been reached. Use reachers, long-handled shoehorns, dressing aids, and other OT tools if needed.', 'Prepare a clutter-free, well-lit home with safe footwear, non-slip surfaces, grab bars, and a suitable toilet/shower chair if indicated. Choose seating/reclining arrangements that meet the actual precautions.', 'Seek urgent care for severe new pain, rapid/hot swelling, intense redness, fever/systemic illness, or inability to bear weight. After replacement, a pop with shortening/abnormal rotation or sudden loss of function needs urgent surgical assessment.', 'Know DVT/PE, wound infection, major bleeding, and neurovascular warning signs; sudden chest pain/dyspnea or a cold/pale/numb weak limb is an emergency. Complete the prescribed VTE course and wound/rehabilitation follow-up after discharge.'] }
      ],
      evaluation: [
        { type: 'list', items: ['Pain/stiffness are acceptable for the agreed goals, with improved or maintained sleep, walking, transfers, and ADLs. A chosen ≤3/10 target is individualized rather than universal.', 'The patient performs the agreed exercise/pacing plan, uses aids correctly, and maintains/improves strength, ROM, and safe function without preventable falls.', 'Medicines provide worthwhile benefit without unacceptable GI, renal, hepatic, CV, respiratory/sedation, or skin effects; total doses and ongoing need are reviewed.', 'If postoperative, clinical and laboratory trends support adequate perfusion/blood-loss management, wound healing, safe neurovascular function, and progress in assisted mobility.', 'VTE/infection/dislocation precautions match the procedure and patient, complications are detected promptly, and prophylaxis/monitoring plans continue for the prescribed duration.', 'Nutrition, bowel/bladder issues, home equipment, support, and follow-up are addressed. The patient/caregiver demonstrates relevant skills and can explain warning signs and whom to contact.', 'Recovery goals are reviewed over time without assuming complete recovery by 6 weeks or restoration of normal gait in everyone. Persistent or worsening symptoms trigger reassessment.'] }
      ]
    },
    clarifications: [
      { title: 'OA biology, symptoms, and imaging wording', text: 'Replaced an absolute non-inflammatory/wear-and-tear model with whole-joint disease that can include local inflammation. Corrected the crepitus sentence: marked hot redness, fever, and severe swelling are warning signs, not requirements for crepitus. OA may be bilateral and can cause secondary fatigue/sleep problems. Normal—not abnormal—X-rays may fail to show early disease. Routine MRI screening and a fixed 10–20-year course are not supported.' },
      { title: 'Medicine choices and acetaminophen limits', text: 'Acetaminophen is not the automatic initial medicine for most patients. Retained FDA’s 4,000-mg adult maximum as a ceiling while emphasizing lower product/patient limits and all-source totals. NSAID/celecoxib risks and contraindications are drug/patient-specific; food does not prevent ulcers. Opioids are not routine long-term escalation for OA. Added relevant selected options from the September 2026 ACR summary.' },
      { title: 'Injections and integrative care', text: 'A practical annual injection limit is not a universal safe ceiling; benefit, cartilage/tissue risk, diabetes, infection, and surgical timing matter. Cooling/aftercare instructions vary. Exercise, devices, and higher-impact activity are individualized. ACR and NICE differ on acupuncture; special diets/supplements are not established cartilage-regrowth therapy.' },
      { title: 'Surgical blood loss, medicines, infection, and VTE', text: 'Epoetin/iron, cell salvage, and tourniquets are not universal requirements; anemia cause and procedure determine their role, and tranexamic acid is part of modern blood-conservation plans. Replaced blanket 1-week holds and automatic infection-delay intervals with the actual perioperative plan. VTE tools, medicine choice, duration, and reassessment follow surgical/bleeding risk; Padua is not a universal arthroplasty scoring tool.' },
      { title: 'Hip precautions and recovery', text: 'Abduction pillows, 90° flexion limits, leg-crossing restrictions, and sleeping/chair positions depend on approach and patient risk. Stair practice may start before discharge rather than waiting 3–6 weeks. Sexual activity, driving, device discontinuation, and full recovery require individualized advice; “6+ weeks” does not guarantee complete recovery.' },
      { title: 'Completed nursing sections and source details', text: 'Completed adverse effects, nutrition, assessment, diagnoses, priorities, care goals, interventions, and evaluation, retaining the supplied conservative/postoperative care plans and home equipment advice. Author-year citations were retained as supplied; missing titles/editions/pages were not invented. Linked references below support the clinical updates.' }
    ],
    references: [
      { title: 'ACR · Osteoarthritis guideline and September 2026 summary', url: 'https://rheumatology.org/osteoarthritis-guideline', supports: 'Current site-specific exercise, medicine, device, and selected newer treatment recommendations.' },
      { title: 'ACR · 2026 recommendations summary (PDF)', url: 'https://assets.contentstack.io/v3/assets/bltee37abb6b278ab2c/bltb3d12c34020da842/oa-guideline-summary-2026.pdf', supports: 'Conditional selected GLP-1/erosive-hand methotrexate options, duloxetine, opioid caution, and adjunct recommendations.' },
      { title: 'NICE NG226 · OA diagnosis and management', url: 'https://www.nice.org.uk/guidance/ng226/chapter/recommendations', supports: 'Clinical diagnosis without routine imaging, core exercise/weight care, drug/injection choices, and acupuncture differences.' },
      { title: 'NIAMS · OA symptoms, causes, and joint tissues', url: 'https://www.niams.nih.gov/health-topics/osteoarthritis', supports: 'Whole-joint changes, common sites, variable course, and pain/sleep/fatigue effects.' },
      { title: 'NIAMS · OA diagnosis, treatment, and self-care', url: 'https://www.niams.nih.gov/health-topics/osteoarthritis/diagnosis-treatment-and-steps-to-take', supports: 'Clinical evaluation, self-management, rehabilitation, and treatment context.' },
      { title: 'FDA · Acetaminophen safety', url: 'https://www.fda.gov/drugs/safe-use-over-counter-pain-relievers-and-fever-reducers/acetaminophen', supports: 'All-source adult ceiling, duplicate products, and urgent overdose assessment.' },
      { title: 'DailyMed · Extra Strength Tylenol', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4961695d-72f3-533a-e063-6294a90a5a29', supports: 'An example product with a lower 3,000-mg daily label limit unless directed otherwise.' },
      { title: 'FDA · Acetadote (N-acetylcysteine)', url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/021539s019lbl.pdf', supports: 'Antidote treatment for acetaminophen poisoning, including repeated excessive ingestion.' },
      { title: 'DailyMed · Celecoxib', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b3545cfb-97c3-b896-e053-2a95a90a15a0', supports: 'CABG/allergy contraindications and cardiovascular, GI, renal, BP/fluid risks.' },
      { title: 'DailyMed · Naproxen', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9c963e77-6e05-47d0-a8d3-e581777377b9', supports: 'NSAID bleeding, renal/CV toxicity, interactions, and limits of food-related protection.' },
      { title: 'DailyMed · Duloxetine', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=569582d5-cb6d-735e-e063-6394a90abfb6', supports: 'Chronic musculoskeletal pain, BP/liver/renal and interaction review, and supervised discontinuation.' },
      { title: 'DailyMed · Tramadol', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d7e75fd3-18d1-4370-bb63-c9dd8a2c1719', supports: 'Respiratory, seizure, serotonin-syndrome, dependence, and interaction risks.' },
      { title: 'AAOS · Cortisone injections', url: 'https://www.orthoinfo.org/en/treatment/cortisone-shot-steroid-injection/', supports: 'Temporary benefit, individualized repeat limits, tissue/infection risks, and surgical timing.' },
      { title: 'SANJO · Septic arthritis guideline', url: 'https://jbji.copernicus.org/articles/8/29/2023/index.html', supports: 'Hot-joint assessment and why cell counts/crystals alone do not exclude infection.' },
      { title: 'NICE NG157 · Primary joint replacement', url: 'https://www.nice.org.uk/guidance/ng157/chapter/recommendations', supports: 'Perioperative pathways, tranexamic acid, infection prevention, and rehabilitation.' },
      { title: 'NICE NG24 · Blood transfusion and conservation', url: 'https://www.nice.org.uk/guidance/ng24/chapter/Reducing-requirement-for-blood-transfusion-for-people-having-surgery', supports: 'Cause-specific anemia/iron care, selected erythropoietin, and cell-salvage context.' },
      { title: 'NICE NG89 · VTE prevention', url: 'https://www.nice.org.uk/guidance/ng89/chapter/recommendations', supports: 'Surgical VTE/bleeding reassessment and hip/knee-specific prophylaxis options.' },
      { title: 'AAOS · Surgical medication safety', url: 'https://www.orthoinfo.org/treatment/preparing-for-surgery/preparing-for-surgery-medication-safety-checklist/', supports: 'Individualized review and interruption/restart instructions for medicines/supplements.' },
      { title: 'AAOS · Total hip replacement', url: 'https://www.orthoinfo.org/treatment/total-hip-replacement/', supports: 'Complications, fall prevention, aids, and patient/approach-specific precautions.' },
      { title: 'AAOS · Hip replacement exercise and stairs', url: 'https://www.orthoinfo.org/recovery/total-hip-replacement-exercise-guide/', supports: 'Rehabilitation, safe stair technique, and recovery over months.' },
      { title: 'AAOS · Activities after hip replacement', url: 'https://www.orthoinfo.org/bodypart/hip-thigh/activities-after-hip-replacement/', supports: 'Individualized activities, sitting/sexual precautions, and gradual return to roles.' }
    ]
  },
  'rheumatoid-arthritis': {
    title: 'Rheumatoid arthritis', abbreviation: 'RA', week: 9, deck: 'rheumatoid-arthritis',
    reviewed: 'November 15, 2026',
    reading: 'Course study guide: Rheumatoid arthritis—clinical signs and symptoms, DMARDs, and labs. Based on your supplied notes and the Week 9 presentation, with missing pharmacology and nursing-process sections completed. Current clinical references and corrections are listed below.',
    focus: [
      { section: 'manifestations', label: 'Clinical signs & symptoms' },
      { section: 'medications', label: 'DMARDs' },
      { section: 'diagnostics', label: 'Diagnostic & monitoring labs' }
    ],
    content: {
      overview: [
        { type: 'paragraph', text: 'Rheumatoid arthritis (RA) is a chronic systemic autoimmune inflammatory disease that primarily affects synovial joints. Persistent synovitis can damage cartilage, bone, tendons, and ligaments, causing pain, stiffness, loss of function, and deformity. It commonly produces symmetric polyarthritis of the hands, wrists, and feet, although early disease need not be perfectly symmetric. Effective early treatment can control disease and prevent much damage; relentless progression is not inevitable.' },
        { type: 'heading', text: 'Immune activation and pannus' },
        { type: 'list', items: ['Genetic susceptibility and environmental factors contribute to loss of immune tolerance. Citrullinated proteins can become immune targets; anti-citrullinated protein antibodies (ACPA, commonly measured by anti-CCP assays) and rheumatoid factor (RF) may develop, sometimes before clinical arthritis. RF recognizes the Fc portion of IgG. Antibody-positive disease is not the only form of RA.', 'Activated T cells, B cells, macrophages, and synovial cells sustain inflammatory pathways including TNF, IL-1, and IL-6. Synovial edema, vascular changes, and effusion produce warm, swollen, boggy joints.', 'Thickened inflammatory synovial tissue forms pannus. Destructive enzymes and osteoclast activation contribute to cartilage loss and marginal bone erosions; damaged supporting structures permit subluxation and deformity.', 'Chronic inflammation can lead to fibrosis, restricted motion, and sometimes fibrous or bony ankylosis. It is not simply a universal sequence in which scar tissue calcifies and every joint fuses.'] },
        { type: 'heading', text: 'Systemic disease' },
        { type: 'paragraph', text: 'RA can affect lungs (interstitial lung disease or pleural disease/effusions), heart (pericarditis and increased atherosclerotic cardiovascular risk), eyes (scleritis and associated dry-eye/Sjögren disease), vessels (vasculitis), and skin (rheumatoid nodules). Osteoarthritis is a different joint disorder, but describing it as only localized wear-and-tear also oversimplifies its biology.' }
      ],
      manifestations: [
        { type: 'callout', title: 'Recognize inflammatory joint disease', text: 'Look for persistent joint swelling and tenderness, warmth/boggy synovitis, and prolonged stiffness after rest—often more than an hour in the morning. Gentle movement may ease stiffness, but active inflammation can also hurt with use. No fixed stiffness duration, perfect symmetry, or positive blood test is required in every case.' },
        { type: 'cards', items: [
          { title: 'Joint distribution and findings', fields: [['Typical pattern', 'MCP and PIP joints, wrists, and MTP joints are common sites, often bilaterally. DIP joints are usually spared in the typical pattern, rather than involvement being impossible. Other joints and tendon sheaths can be affected.'], ['Findings', 'Pain, swelling, warmth, limited ROM, reduced grip, and difficulty with ADLs. Erythema can occur; a suddenly very hot, painful joint requires assessment for infection or crystal arthritis rather than being labeled automatically as an RA flare.']] },
          { title: 'Established damage and deformity', fields: [['Examples', 'Ulnar drift/deviation toward the little-finger side; swan-neck deformity (PIP hyperextension with DIP flexion); boutonnière deformity (PIP flexion with DIP hyperextension); subluxation, contractures, and possible ankylosis.'], ['Meaning', 'These are possible later findings, not required early diagnostic signs. Synovitis, cartilage loss, and bone erosion are underlying disease processes and may be assessed clinically or on imaging.']] },
          { title: 'Constitutional, skin, and extra-articular findings', fields: [['Recognize', 'Fatigue, malaise, low-grade fever, anorexia, unintended weight loss, and sometimes lymphadenopathy. Firm subcutaneous nodules may occur over extensor/pressure surfaces such as elbows.'], ['Systemic involvement', 'Dry eyes/mouth, painful scleral redness, pleuritic symptoms or dyspnea, pericarditis, cardiovascular disease, vasculitis, and other organ complications. Anemia may contribute to fatigue.']] }
        ] },
        { type: 'paragraph', text: 'A painful red eye or visual change, new breathlessness/chest pain, suspected infection, or neck pain with new neurological symptoms needs prompt assessment. Cervical-spine disease can cause instability/myelopathy in established RA. These symptoms should not simply be treated as routine joint pain.' }
      ],
      risk: [
        { type: 'heading', text: 'Risk factors and associations' },
        { type: 'list', items: ['RA is more common in women (often reported about 2–3 times as common) and can begin at many adult ages. The original 30–50/30–60 ranges are useful context, not diagnostic age limits.', 'Family history and genetic susceptibility, including HLA-DRB1 shared-epitope variants historically associated with HLA-DR4, increase risk. They are not deterministic and HLA testing is not a routine diagnostic requirement.', 'Smoking is an important modifiable risk, particularly for antibody-positive disease. Obesity and periodontal disease are associated with RA; good dental care and healthy weight support overall health.', 'Occupational inhaled exposures, particularly silica, have been associated with risk. Dust, asbestos, and mineral oils have been studied, but evidence and risk are not identical for every exposure.', 'Stress can affect symptoms, coping, and wellbeing; it should not be presented as a single proven cause of autoimmune disease.'] },
        { type: 'heading', text: 'Early recognition and prevention of damage' },
        { type: 'paragraph', text: 'There is no guaranteed way to prevent all RA. Support smoking cessation, appropriate workplace respiratory protection, oral/periodontal care, healthy weight, and cardiovascular health without promising that these measures prevent disease. Persistent synovitis—especially small-joint or multiple-joint swelling—needs prompt rheumatology referral even with normal ESR/CRP or negative RF/anti-CCP.' },
        { type: 'paragraph', text: 'The first months of symptoms are an important opportunity for treatment. Start a DMARD promptly once indicated, ideally within 3 months of persistent symptom onset rather than waiting 3 months after diagnosis. A “12-week window” is not a reason to delay now or withhold treatment later. Early X-rays may be normal; that does not exclude RA or make MRI mandatory for everyone.' }
      ],
      diagnostics: [
        { type: 'paragraph', text: 'Diagnosis combines the history, examination for synovitis, pattern/duration, serology, inflammatory markers, and imaging while considering alternatives. No single autoantibody or imaging result confirms every case. Classification criteria can support assessment but do not replace clinical judgment.' },
        { type: 'cards', items: [
          { title: 'RF and anti-CCP / ACPA', fields: [['Purpose', 'Anti-CCP is relatively specific for RA and, especially at higher titers, can indicate greater erosive risk. RF is less specific and can occur in other diseases or healthy people. Neither positive result independently proves RA.'], ['Seronegative disease', 'Both RF and ACPA can be negative in genuine RA. Frequency varies with the population, disease stage, and definition; the original fixed “only 10%” estimate is not a reliable universal rule. RF/anti-CCP are not the main serial tests for day-to-day activity monitoring.']] },
          { title: 'ESR, CRP, and ANA', fields: [['Purpose', 'ESR and CRP reflect inflammation and help track response alongside joint examination and a validated disease-activity measure. They may be normal despite RA or elevated for reasons such as infection. ANA can be positive but is not a specific RA-confirming marker.'], ['Ranges and preparation', 'Use the reporting laboratory’s units and age/sex/assay reference range. The original ESR examples (<15 mm/hour in men, <20 in women) are not universal. Standard CRP is not universally normal only below 1 mg/L; for example, Mayo uses <5 mg/L. High-sensitivity CRP cardiovascular categories are a different interpretation. Usually no fasting is needed for these tests alone.'], ['Interpretation', 'Document NSAIDs, glucocorticoids, and DMARDs: treatment may truly reduce inflammation/markers, not simply produce a falsely low result. Some targeted therapies particularly suppress acute-phase markers, so assess symptoms, examination, and infection concerns as well.']] },
          { title: 'Baseline and treatment-safety laboratories', fields: [['Tests', 'CBC with differential/platelets; AST/ALT, albumin and other liver studies; creatinine/eGFR and other indicated metabolic tests. Before relevant biologic/targeted therapy, assess TB and hepatitis B; hepatitis C and other infection screening follow the regimen/risk/local plan.'], ['Nursing role', 'Arrange the actual drug-specific schedule, review trends, and escalate cytopenias, hepatic or renal changes. Anemia is common; WBC may be normal, raised, or low depending on disease, infection, or treatment. Do not assume leukocytosis is required for RA.']] },
          { title: 'X-ray, ultrasound, and MRI', fields: [['Purpose', 'Baseline hand/foot X-rays assess erosions and established joint-space changes; early films may be normal. Ultrasound or MRI may help identify synovitis/early damage or resolve uncertainty. MRI is not obligatory for every early case.'], ['Nursing care', 'Plain X-rays generally need no fasting or contrast preparation. For MRI, complete implant/metal safety and pregnancy/contrast screening. Check renal/AKI and contrast history according to the agent and radiology policy; modern gadolinium agents have different NSF risks. Metformin is not routinely held for usual-dose gadolinium, and even iodinated contrast does not automatically require holding it in every patient.']] },
          { title: 'Arthrocentesis: evaluate fluid, crystals, and infection', fields: [['Findings', 'Normal fluid is typically clear/pale yellow and viscous, with WBC <200 cells/µL and a low neutrophil fraction. Inflammatory fluid may be cloudy/yellow, less viscous, with about 2,000–50,000 WBC/µL and often >50% neutrophils. These are illustrative patterns with substantial overlap, not RA-specific cutoffs.'], ['Essential limitation', 'Send indicated cell count/differential, Gram stain/culture, and crystal analysis. An inflammatory WBC range does not rule out septic arthritis or gout; crystals and infection can coexist. Clinical suspicion and microbiology matter.'], ['Before/during', 'Explain/verify consent, check relevant bleeding/anticoagulant history and ordered tests, screen antiseptic/latex/local-anesthetic allergies, and support aseptic positioning/specimen handling. Avoid passing through infected skin; the clinician selects a safe approach. Do not independently stop anticoagulants or assume every patient requires a full coagulation panel.'], ['After', 'Assess pain, site bleeding/swelling, neurovascular status as appropriate, and signs of infection. Provide prescribed dressing, activity, and symptom instructions; escalating pain, fever, drainage, or marked swelling needs review.']] }
        ] }
      ],
      medical: [
        { type: 'heading', text: 'Early DMARD therapy and treat-to-target care' },
        { type: 'paragraph', text: 'Start disease-modifying treatment promptly and aim for sustained remission or low disease activity, prevention of structural damage, and preserved participation/function. Methotrexate is commonly the initial anchor for active RA; treatment is individualized for disease activity, pregnancy plans, comorbidities, safety, and patient preference. Hydroxychloroquine may suit selected milder disease, and sulfasalazine or leflunomide may be alternatives or part of a combination.' },
        { type: 'paragraph', text: 'Monitor active disease frequently using symptoms, joint counts, function, and an appropriate composite measure. Current EULAR guidance calls for adjustment if there is insufficient improvement by about 3 months or the target is not reached by 6 months. Escalate to a suitable biologic or targeted synthetic DMARD when needed; this is more specific than a universal “all biologics are second-line” rule.' },
        { type: 'heading', text: 'Symptom relief while controlling the disease' },
        { type: 'paragraph', text: 'NSAIDs relieve pain/inflammation but do not replace DMARD protection against damage. Short-term glucocorticoids or an intra-articular injection may be used for selected flares/bridging, with the lowest effective dose and a plan to taper/discontinue. Avoid routine long-term steroid dependence; regimens and onset of DMARD benefit vary over weeks to months, not one fixed 6–12-week timetable.' },
        { type: 'heading', text: 'Procedures, rehabilitation, and systemic risk' },
        { type: 'paragraph', text: 'Arthrocentesis can investigate or relieve an effusion; injections require an appropriate diagnosis and infection assessment. Refer for surgical evaluation, including possible arthroplasty, when pain, damage, tendon/nerve complications, deformity, or function remains unacceptable despite appropriate non-surgical treatment. PT/OT, podiatry, and assistive devices support mobility and independence.' },
        { type: 'paragraph', text: 'Review CBC/liver/renal monitoring, infection risk, cardiovascular risk factors, fracture/bone health, mood, and extra-articular disease. DEXA and fracture-risk assessment depend on age, risk, and glucocorticoid exposure rather than being identical for every patient. RA increases cardiovascular risk, but a fixed claim that 40% of all RA deaths are cardiovascular is population- and era-dependent; control inflammation and address lipids, BP, smoking, diabetes, and activity.' }
      ],
      medications: [
        { type: 'callout', title: 'Methotrexate safety: once weekly for RA', text: 'Confirm the exact weekly day, dose, tablet strength/count or injection device, and prescribed folic-acid schedule. Accidental daily methotrexate dosing for RA can be fatal. If daily dosing is suspected, seek urgent medical/poison-service assessment rather than waiting for the next routine appointment.' },
        { type: 'cards', items: [
          { title: 'Methotrexate: conventional synthetic DMARD', fields: [['Role', 'A common first-line anchor for active RA. It affects folate-related pathways and immune/inflammatory signaling; its low-dose anti-inflammatory action is more complex than simply stopping immune-cell proliferation.'], ['Monitor and teach', 'CBC/platelets, liver and renal function, infection, mouth ulcers/GI symptoms, bruising, and new cough/dyspnea. Renal impairment/interactions can increase exposure. Give prescribed folic acid; daily and weekly folate regimens differ, so use the actual instructions. Avoid alcohol unless the rheumatology team has given individualized advice.'], ['Reproductive safety', 'Contraindicated in pregnancy for RA. Confirm pregnancy assessment and contraception/conception planning. The current US tablet label advises contraception during therapy and for 6 months after the final dose for females of reproductive potential and 3 months for males with partners who may become pregnant; coordinate the individual plan with rheumatology/reproductive care.']] },
          { title: 'Hydroxychloroquine', fields: [['Role', 'An antimalarial with immunomodulatory effects, used in selected milder disease or combinations. Take with food/milk if directed. It does not have the same infection or laboratory-risk profile as every other DMARD.'], ['Eye safety', 'Retinal toxicity can be irreversible. Current AAO guidance advises a baseline retinal examination soon after starting (including OCT and fundus autofluorescence) and annual screening; annual screening may be deferred during the first 5 years if there are no significant risk factors. Higher-risk patients need earlier ongoing screening. This replaces a blanket every-6–12-month schedule for everyone.'], ['Other review', 'Dose relative to actual body weight, renal disease, duration, and interacting/risk medicines affect retinal risk. Review cardiac/QT concerns and report visual changes promptly; screening aims to detect damage before symptoms.']] },
          { title: 'Sulfasalazine', fields: [['Safety', 'Check sulfonamide/salicylate allergy and the prescribed formulation. Monitor CBC, liver/renal studies and GI tolerance; report fever/sore throat, bruising, serious rash, or other hypersensitivity symptoms.'], ['Teaching', 'Orange-yellow urine or skin discoloration can occur. New yellow eyes/skin with dark urine, illness, or other liver symptoms still requires evaluation rather than being dismissed as harmless color change.']] },
          { title: 'Leflunomide', fields: [['Safety', 'Important embryo-fetal and hepatic toxicity risks; check pregnancy status, contraception, liver tests, CBC, BP, and infection risk under the prescribed plan.'], ['Elimination', 'The active metabolite can persist for a long time. Pregnancy planning/exposure or severe toxicity may require a clinician-supervised accelerated elimination procedure, commonly cholestyramine (or activated charcoal), with level verification as indicated. Simply stopping tablets does not immediately eliminate exposure.']] },
          { title: 'Biologic DMARDs', fields: [['Examples and routes', 'TNF inhibitors include subcutaneous adalimumab/etanercept and IV infliximab. Other biologic mechanisms include agents such as abatacept, rituximab, or IL-6 inhibitors. Not every biologic is a TNF inhibitor or a home injection.'], ['Safety and teaching', 'Complete indicated TB/hepatitis screening and vaccination review before therapy. Assess serious infection and drug-specific risks/contraindications; follow the prescribed hold/contact plan for infection. Teach product-specific storage, aseptic injection/infusion care, rotation, and sharps disposal. Do not combine biologics or add a JAK inhibitor without the specialist plan.']] },
          { title: 'Targeted synthetic DMARDs: JAK inhibitors', fields: [['Example', 'Tofacitinib is an oral targeted synthetic medicine, not a biologic/TNF blocker.'], ['Safety', 'Review infection/TB/hepatitis, CBC, liver, and lipid monitoring plus individual cardiovascular, malignancy, and clotting risks. FDA boxed warnings include serious infection, major cardiovascular events, malignancy, thrombosis, and mortality; US use for inflammatory conditions is reserved for patients with inadequate response/intolerance to at least one TNF blocker. Discuss risks, especially with smoking/CV history.']] },
          { title: 'NSAIDs, corticosteroids, and injections', fields: [['Purpose', 'Symptom control; selected glucocorticoid bridging or joint injections may be used while optimizing DMARDs.'], ['Teaching', 'Use the lowest effective dose for the appropriate duration. Review GI/renal/CV risks, interactions, and the need for gastroprotection with NSAIDs. Do not abruptly stop prolonged systemic steroids; use the prescribed taper. Injection into a suspected infected joint is inappropriate until assessed.']] }
        ] },
        { type: 'paragraph', text: 'Plan vaccines before and during treatment with the clinical team. Live vaccines are generally deferred during significant immunosuppression; selected administration may require medication-specific timing/holds and specialist review. Non-live vaccines remain important, although responses and medication timing can vary. Do not stop medicines or receive a live vaccine independently based on a blanket rule.' }
      ],
      nonpharmacological: [
        { type: 'heading', text: 'Joint protection, exercise, and pacing' },
        { type: 'paragraph', text: 'Balance scheduled rest with regular low-impact aerobic, ROM, and individualized strengthening activity. During a flare, modify loading and allow more rest without prolonged complete immobilization. PT/OT can teach joint protection, task modification, supportive splints, and safe use of larger joints/assistive devices. Avoid forcing painful joints or allowing fatigue to accumulate unchecked.' },
        { type: 'paragraph', text: 'Built-up/lightweight utensils, jar openers, button hooks, suitable footwear, walkers, grab bars, and other adaptive aids can reduce strain and preserve ADLs. Assess home/work needs and remove tripping hazards. Tailor equipment to the person rather than assuming everyone needs the same device.' },
        { type: 'heading', text: 'Heat, cold, and comfort' },
        { type: 'paragraph', text: 'Moist warmth can help morning stiffness; a wrapped cold pack may relieve a hot/swollen joint during a flare. Check skin, sensation, circulation, comfort, and exposure time to avoid injury. Avoid forceful neck manipulation when cervical instability is possible.' },
        { type: 'heading', text: 'Whole-person health' },
        { type: 'paragraph', text: 'Support smoking cessation, oral hygiene/dental care, appropriate workplace protection, healthy weight, cardiovascular risk reduction, and bone health. Offer self-management education, sleep strategies, stress reduction, relaxation/deep breathing, and psychological support. Acupuncture or other integrative approaches may be considered for symptoms if appropriate, but do not replace DMARDs; check herbs/supplements for interactions first.' }
      ],
      'adverse-effects': [
        { type: 'cards', items: [
          { title: 'Conventional DMARDs: risks are drug-specific', fields: [['Methotrexate / leflunomide', 'Liver toxicity, cytopenias/infection, reproductive harm, and other serious reactions need prescribed laboratory and symptom surveillance. Methotrexate can cause acute/subacute pneumonitis or other lung toxicity; new cough/dyspnea also raises infection or RA lung-disease concerns. It is not accurate to label every respiratory symptom inevitable drug-induced fibrosis.'], ['Hydroxychloroquine / sulfasalazine', 'HCQ requires retinal-risk surveillance and other individualized safety review. Sulfasalazine can cause GI effects, cytopenias, hepatic injury, and serious hypersensitivity/skin reactions. Do not generalize all DMARDs as equally liver-processed or equally immunosuppressive.']] },
          { title: 'Biologics and JAK medicines', fields: [['Monitor', 'Serious/opportunistic infection and reactivation (including TB or hepatitis B) according to the agent; injection/infusion reactions, cytopenias, and other organ-specific risks. Fever may be blunted, so an afebrile patient is not automatically infection-free.'], ['JAK distinction', 'Review the particular cardiovascular, malignancy, thrombosis, and mortality warnings; do not transfer the same warning profile indiscriminately to every RA medicine.']] },
          { title: 'NSAIDs, including COX-2-selective agents', fields: [['Monitor', 'Dyspepsia, ulcers/GI bleeding, renal injury, fluid retention, hypertension, and cardiovascular events. COX-2 selectivity can reduce some GI risk but does not eliminate it, and nonselective NSAIDs also carry CV risks.'], ['Safety', 'Food or milk may reduce stomach upset but does not prevent ulcers or bleeding. Monitor melena/hematemesis, abdominal pain, edema, BP/renal status, and concurrent steroids/anticoagulants/duplicate OTC NSAIDs. Use prescribed gastroprotection when indicated.']] },
          { title: 'Systemic glucocorticoids and joint procedures', fields: [['Steroids', 'Weight gain, hyperglycemia, BP/fluid effects, infection, mood/sleep changes, osteoporosis/fractures, and adrenal suppression with prolonged exposure. Use the shortest appropriate course and supervised taper when needed; calcium/vitamin D alone may not be enough bone protection.'], ['Procedures', 'After aspiration/injection, monitor bleeding, increasing pain/swelling, fever/drainage, and infection. Joint steroid injections can transiently increase glucose. Follow the specific aftercare plan.']] }
        ] }
      ],
      nutrition: [
        { type: 'heading', text: 'Mediterranean-style eating: an adjunct to treatment' },
        { type: 'paragraph', text: 'A Mediterranean-style pattern may support symptoms and cardiometabolic health: vegetables/leafy greens, fruit/berries, beans, whole grains, nuts, olive oil, and fish such as salmon, sardines, or mackerel. Walnuts, flax, and chia provide plant omega-3 fats, but are not identical to fish-derived EPA/DHA. Food or omega-3 supplements do not reliably replace DMARDs or prevent joint destruction.' },
        { type: 'paragraph', text: 'Limit highly processed/fried foods, refined sugars, trans fats, and excess red/processed meat as part of a balanced heart-healthy plan. Avoid excessive alcohol and follow drug-specific advice, especially with methotrexate or leflunomide. A particular food does not have to be banned for every patient; avoid restrictive diets or unverified supplements that compromise nutrition.' },
        { type: 'cards', items: [
          { title: 'Folate, bone health, and medication considerations', fields: [['Methotrexate', 'Take prescribed folic acid on the actual schedule to reduce adverse effects; it does not eliminate marrow/liver risks or make incorrect daily methotrexate dosing safe.'], ['Glucocorticoids / bone health', 'Optimize age-appropriate total calcium (often 1,000–1,200 mg/day) and vitamin D (often 600–800 IU/day, adjusted for the individual). Assess dietary intake, deficiency, renal/stone risks, and fracture risk; some patients need an osteoporosis medicine, not only supplements.'], ['Other medicines', 'Use a heart-healthy, appropriate-sodium plan and monitor glucose/BP when steroids affect them. Take NSAIDs with food/milk if directed for tolerance, while recognizing that GI protection may still be needed.']] },
          { title: 'Weight, fatigue, jaw pain, and feeding independence', fields: [['Support', 'Aim for an appropriate weight without ignoring unintended loss or reduced intake. Use smaller, nutrient-dense meals when fatigue, anorexia, or TMJ pain makes eating difficult. A dietitian can tailor energy/protein and texture choices.'], ['Adapt', 'Use lightweight/built-up utensils and other OT aids for hand limitations. Provide adequate protein, vitamins, and iron-containing foods, but investigate anemia rather than prescribing iron supplements for all RA-related anemia; inflammation and iron deficiency are different problems.']] }
        ] }
      ],
      assessment: [
        { type: 'heading', text: 'Joint activity, function, and symptom burden' },
        { type: 'paragraph', text: 'Assess tender/swollen joints, warmth, stiffness duration, pain at rest/use, ROM, grip, gait, deformity, and ADLs. Compare with baseline and track the pattern with the team’s activity/function measures. Ask about fatigue, sleep, mood, work/family roles, jaw pain, appetite, and barriers to self-care.' },
        { type: 'cards', items: [
          { title: 'Urgent or extra-articular symptoms', fields: [['Assess', 'Acute hot/swollen joint, systemic illness/infection, painful red eye or visual change, cough/dyspnea/chest pain, skin/vascular changes, neuropathy, and neck symptoms.'], ['Escalate', 'New weakness, gait disturbance, sensory changes, or bladder/bowel change with possible cervical disease requires urgent evaluation; alert procedural/anesthesia teams to known instability. Do not assume a new severe symptom is an ordinary flare.']] },
          { title: 'Medication and laboratory safety', fields: [['Assess', 'Exact medicine/dose/route, weekly methotrexate day, folate schedule, missed/extra doses, OTC NSAIDs, alcohol/supplements, pregnancy plans, infection history, vaccination, and laboratory/eye-screening attendance.'], ['Trend', 'CBC, liver/renal studies and regimen-specific tests, ESR/CRP alongside clinical activity, adverse effects, injection technique, storage, and access/adherence barriers.']] },
          { title: 'Systemic health and teaching readiness', fields: [['Assess', 'BP, weight/nutrition, smoking, lipid/diabetes/CV risk, fracture/fall risk, steroid exposure, oral/eye care, skin, and home/work supports.'], ['Adapt', 'Address acute pain, fatigue, depression, literacy/vision/hand-function needs, and readiness before teaching. Include the patient’s reproductive, career, and caregiving priorities.']] }
        ] }
      ],
      diagnoses: [
        { type: 'paragraph', text: 'Select diagnoses using your program’s terminology and the actual assessment. Possible nursing diagnoses include:' },
        { type: 'list', items: ['Chronic or acute pain related to joint inflammation/damage, supported by the pain assessment.', 'Impaired physical mobility related to pain, stiffness, weakness, or deformity.', 'Decreased self-care ability related to hand/function limitations when present.', 'Fatigue, activity intolerance, or disturbed sleep based on symptoms and function.', 'Risk for infection related to selected immunosuppressive therapy and individual risk factors.', 'Risk for falls/injury related to mobility limitations, weakness, or medication effects.', 'Inadequate nutritional intake, altered body image, anxiety, depressed mood, or ineffective coping when identified.', 'Learning/self-management needs related to a new diagnosis, complex medicine schedule, monitoring, or access barriers; avoid assuming lack of knowledge when the real barrier is cost or disability.'] }
      ],
      priorities: [
        { type: 'callout', title: 'The nurse’s first action depends on the presentation', text: 'First assess for urgent infection, a septic joint, medication toxicity, cardiopulmonary symptoms, visual threat, or cervical neurological compromise. Escalate these promptly. In a stable routine visit, assess pain, active synovitis, function, and treatment safety so early disease control and self-management can proceed.' },
        { type: 'list', items: ['Protect against irreversible damage: ensure prompt rheumatology assessment, reliable DMARD access, and treat-to-target follow-up; do not delay referral for negative antibodies or a normal X-ray.', 'Prevent medication harm: verify once-weekly methotrexate, folate, pregnancy/interaction counseling, infection plans, laboratory surveillance, and HCQ retinal screening.', 'Relieve pain, stiffness, fatigue, and sleep disturbance while maintaining movement, safe ADLs, and joint protection.', 'Address systemic risks: cardiovascular disease, fracture/steroid effects, lung/eye/cervical complications, nutrition, and smoking.', 'Support learning, autonomy, mood, work/family roles, and the practical ability to use medicines and attend care.'] }
      ],
      plan: [
        {
          "type": "paragraph",
          "text": "Agree on measurable, patient-centered goals and review dates. Aim for sustained remission/low activity and meaningful function rather than a single laboratory or stiffness cutoff."
        },
        {
          "type": "cards",
          "items": [
            {
              "title": "1. Disease control, comfort, and function",
              "fields": [
                [
                  "Goal",
                  "Reduce pain, swelling, and stiffness toward agreed targets while reassessing active disease and treatment response. Maintain or improve chosen ADLs, grip, gait, ROM, sleep, and participation using appropriate aids and pacing."
                ],
                [
                  "Actions",
                  "Track disease activity and joint function with rheumatology. Give prescribed symptom medicines and reassess benefit/toxicity; coordinate PT/OT, safe heat/cold, supportive positioning, gentle ROM, graded activity, pacing, and appropriate aids."
                ],
                [
                  "Evaluate",
                  "Pain, swelling, stiffness, and disease activity improve toward the agreed target; chosen ADLs, grip, gait, ROM, sleep, and participation are maintained or improve. Interpret ESR/CRP with the clinical assessment rather than using one marker as proof of success."
                ]
              ]
            },
            {
              "title": "2. Medication safety and monitoring",
              "fields": [
                [
                  "Goal",
                  "Demonstrate the actual medication schedule, injection/device skills, and weekly methotrexate/folate distinction when applicable. Complete regimen-specific laboratory and retinal monitoring and recognize infection/toxicity warning signs."
                ],
                [
                  "Actions",
                  "Reconcile medicines, clarify dosing errors, and use teach-back for the actual schedule and weekly methotrexate/folate distinction. Arrange drug-specific laboratory and retinal monitoring, injection/infusion education, and the prescribed infection/procedure/vaccine contact plan."
                ],
                [
                  "Evaluate",
                  "The patient demonstrates the correct schedule and technique, completes laboratory/retinal surveillance, and recognizes infection/toxicity concerns promptly. Absence of fever alone does not establish freedom from infection."
                ]
              ]
            },
            {
              "title": "3. Joint protection and whole-person health",
              "fields": [
                [
                  "Goal",
                  "Follow an individualized activity/rest, joint-protection, nutrition, smoking-cessation, CV, and bone-health plan."
                ],
                [
                  "Actions",
                  "Coordinate activity/rest and joint-protection teaching, nutrition/dietitian support, smoking cessation, cardiovascular and fracture/fall review, and indicated steroid-related glucose/BP/bone care. Assess fatigue, sleep, mood, and daily roles."
                ],
                [
                  "Evaluate",
                  "The patient uses safe pacing, thermal measures, joint protection, and aids with acceptable fatigue/pain control. Nutrition, smoking, cardiovascular and bone-health needs are addressed without avoidable falls or treatment injury."
                ]
              ]
            },
            {
              "title": "4. Continuity, reproductive planning, and support",
              "fields": [
                [
                  "Goal",
                  "Identify a flare/contact plan, pregnancy/conception needs, practical supports, and follow-up arrangements that the patient can access."
                ],
                [
                  "Actions",
                  "Review pregnancy/conception and medicine precautions; confirm the flare/contact plan, medicine supplies, monitoring appointments, PT/OT, safe home setup, and accessible practical support. Provide written instructions adapted to hand, vision, language, and fatigue needs."
                ],
                [
                  "Evaluate",
                  "The patient explains warning signs, the flare/contact pathway, reproductive/medicine precautions, and follow-up arrangements, with needed practical and psychosocial support in place."
                ]
              ]
            }
          ]
        }
      ],
      interventions: [
        { type: 'heading', text: 'Disease control and medicine safety' },
        { type: 'paragraph', text: 'Coordinate rheumatology follow-up, symptom/joint-function trends, ordered laboratory monitoring, and referrals for systemic symptoms. Reconcile all medicines and clarify dose errors immediately. Teach the methotrexate weekly day and folate schedule with teach-back; review contraindications, pregnancy plans, alcohol/interactions, and the specific instructions for infection, surgery, or vaccination. Arrange HCQ retinal screening and product-specific injection/infusion education.' },
        { type: 'heading', text: 'Pain, joint protection, mobility, and rest' },
        { type: 'paragraph', text: 'Give prescribed symptom medicines and reassess benefit/toxicity. Use safe heat/cold, supportive positioning, gentle ROM, graded low-impact activity/strengthening, and scheduled rest. PT/OT guides splints, joint protection, adaptive ADL tools, and safe mobility; check fit, skin, and changing needs. Avoid excessive loading of acutely inflamed joints and prolonged inactivity that worsens stiffness/deconditioning.' },
        { type: 'heading', text: 'Systemic health and daily living' },
        { type: 'paragraph', text: 'Support dietitian input for weight/intake or chewing limitations, oral care, smoking cessation, CV risk review, fracture/fall assessment, and steroid-related glucose/BP/bone care. Assess pain, sleep, depression/anxiety, fatigue, and caregiving/work roles. Offer coping strategies, self-management resources, and social/practical support rather than attributing all distress to inflammation alone.' },
        { type: 'heading', text: 'Discharge, home care, and continuity' },
        { type: 'paragraph', text: 'Confirm the medication list/schedule, supplies, monitoring/eye appointments, PT/OT plan, safe home setup, and whom to contact for flares or adverse effects. Practice devices/injection skills with the patient or a chosen caregiver. Link with the interdisciplinary team and resources such as the Arthritis Foundation. Use accessible written instructions that account for hand, vision, language, and fatigue needs.' }
      ],
      education: [
        { type: 'list', items: ['Explain RA as a treatable systemic inflammatory disease. Early DMARD treatment protects joints; NSAIDs, diet, and supplements do not replace disease-modifying therapy.', 'Know each medicine’s name, purpose, dose, route, day/time, expected onset, and monitoring. Methotrexate for RA is once weekly; take folate as separately prescribed. Never guess about extra doses or a confusing label.', 'Do not independently stop or alter treatment because symptoms improve. Obtain specific hold instructions for infection, procedures, and vaccines; prolonged steroids require an appropriate taper.', 'Practice aseptic self-injection and site rotation only for the prescribed injectable product; learn storage, device steps, and safe sharps disposal. Infliximab and other infusion medicines have different arrangements.', 'Use topical analgesics according to the product: intact skin, avoid eyes/mucosa, and follow handwashing/application instructions. Do not use damaged skin or add external heat unless permitted by that product.', 'Balance activity with rest, use low-impact exercise and individualized strengthening/ROM, and practice joint protection and assistive devices. Use safe moist warmth for stiffness and wrapped cold for hot/swollen joints if helpful.', 'Follow a balanced Mediterranean-style pattern, appropriate weight/protein intake, smoking cessation, oral hygiene, and CV/bone-health advice. Check herbs, supplements, alcohol, and OTC NSAIDs with the care team.', 'Keep CBC/liver/renal and other ordered checks, rheumatology/primary-care visits, retinal screening if taking HCQ, and PT/OT appointments. A normal inflammatory marker alone does not prove disease or infection is controlled.', 'Discuss pregnancy, conception, contraception, breastfeeding, work, and family responsibilities early; medication compatibility differs substantially. Contact the team promptly for pregnancy exposure to methotrexate or leflunomide.', 'Seek urgent help for a very hot swollen joint/systemic illness, severe infection symptoms, painful red eye/vision change, chest pain/breathlessness, new neurological symptoms with neck concerns, black stools/vomiting blood, serious rash, unusual bruising, jaundice, or a suspected methotrexate dosing error. Do not wait for fever if seriously unwell.', 'Report worsening pain/swelling, unusual fatigue, persistent cough, or other new symptoms and use the agreed flare/contact plan. Ask for support with mood, coping, sleep, finances, transport, and disability-related barriers.'] }
      ],
      evaluation: [
        { type: 'list', items: ['Pain, swelling/warmth, stiffness, and clinical disease activity improve toward the agreed remission/low-activity target. ESR/CRP trends support the assessment where informative; no single marker or morning-stiffness duration proves success.', 'ROM, grip, gait, sleep, and chosen ADLs/participation are maintained or improve with appropriate aids. Assess progression over time rather than promising every existing deformity will reverse or that flares can never occur.', 'The patient balances activity/rest, uses safe thermal measures and joint protection, and has acceptable fatigue/pain control without avoidable falls or treatment injury.', 'The actual medication schedule and technique are demonstrated correctly, with laboratory/retinal surveillance completed and toxicity/infection concerns recognized promptly. Absence of fever alone is not proof of freedom from infection.', 'Nutrition, smoking, cardiovascular risk, and fracture/bone-health needs are addressed through an individualized plan, including steroid-risk treatment when indicated.', 'The patient can explain warning signs, the flare/contact pathway, reproductive/medicine precautions, and follow-up arrangements, with accessible practical and psychosocial support.'] }
      ]
    },
    clarifications: [
      { title: 'Disease course, age, and mechanisms', text: 'RA can occur outside the supplied age ranges, need not be perfectly symmetric early, and is not inevitably deforming with effective treatment. Clarified RF/ACPA and pannus rather than depicting all antibodies as identical direct synovial targets or all scar tissue as inevitably calcifying. DIP sparing is typical, not absolute. Pain can occur with use as well as after rest.' },
      { title: 'Diagnosis, seronegativity, and lab ranges', text: 'Neither RF/anti-CCP nor ANA alone confirms RA; negative antibodies do not exclude it. Removed the fixed 10% seronegative estimate and universal WBC elevation. ESR/CRP use the local assay/reference range: <1 mg/L is not a universal standard-CRP limit. Medicines can genuinely reduce inflammatory markers. Early X-rays may be normal but are not guaranteed normal for a fixed 12 weeks.' },
      { title: 'Arthrocentesis and imaging safety', text: 'Inflammatory synovial WBC/appearance does not rule out septic arthritis or gout; culture/crystal evaluation and the clinical picture are needed, and crystals can coexist with infection. Coagulation testing/anticoagulant decisions are individualized. MRI renal/contrast precautions depend on the patient/agent; metformin is not automatically held for every contrast study.' },
      { title: 'DMARD timing, methotrexate, and reproductive care', text: 'Early-treatment timing refers to persistent symptom onset, not a reason to wait after diagnosis. Added the critical once-weekly methotrexate safety point, individualized folate/laboratory plans, and drug-specific reproductive precautions. Methotrexate pulmonary toxicity is not synonymous with inevitable fibrosis. Not all DMARDs have the same hepatic, renal, or immunosuppressive profile.' },
      { title: 'HCQ, biologics/JAK medicines, and vaccines', text: 'Updated HCQ monitoring to current AAO baseline/annual risk-based retinal screening, including permitted deferral in low-risk early use. Distinguished oral JAK inhibitors from biologics and separated SC from IV products. Added JAK boxed-risk/US sequencing context. Live vaccines are generally deferred during significant immunosuppression, but “never give a live vaccine ever” is too broad; timing/holds require a specialist vaccination plan.' },
      { title: 'Nutrition, NSAIDs, systemic risk, and nursing completion', text: 'Mediterranean-style food is an adjunct, not a substitute for DMARDs or a guarantee of disease control. Food/milk does not prevent NSAID ulcers, and COX-2 agents are not risk-free. Calcium/vitamin D and iron need individual assessment; steroid fracture prevention may require medication. A fixed 40% cardiovascular-death figure is not universal. Completed assessment, diagnoses, priorities, care goals, and interventions while consolidating repeated education.' }
    ],
    references: [
      { title: 'EULAR · RA management, 2025 update (published 2026)', url: 'https://doi.org/10.1016/j.ard.2026.01.023', supports: 'Current treat-to-target strategy, DMARD escalation, glucocorticoid use, and monitoring/response timing.' },
      { title: 'NICE NG100 · Rheumatoid arthritis management', url: 'https://www.nice.org.uk/guidance/ng100/chapter/recommendations', supports: 'Urgent referral despite negative tests, early DMARDs, systemic review, rehabilitation, and surgical complications.' },
      { title: 'NIAMS · RA diagnosis, treatment, and self-care', url: 'https://www.niams.nih.gov/health-topics/rheumatoid-arthritis/diagnosis-treatment-and-steps-to-take', supports: 'Clinical diagnosis, symptoms, monitoring, and practical care.' },
      { title: 'MedlinePlus Genetics · Rheumatoid arthritis', url: 'https://medlineplus.gov/genetics/condition/rheumatoid-arthritis/', supports: 'Genetic susceptibility, disease course, and joint/systemic context.' },
      { title: 'ACR · Rheumatoid arthritis', url: 'https://rheumatology.org/patients/rheumatoid-arthritis', supports: 'Patient-centered disease and treatment overview, including conventional DMARDs.' },
      { title: 'BSR · Conventional DMARD prescription/monitoring, 2025', url: 'https://doi.org/10.1093/rheumatology/keaf522', supports: 'Drug-specific pretreatment and safety surveillance, avoiding a universal monitoring assumption.' },
      { title: 'FDA · Methotrexate tablets label, 2026', url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/008085s072lbl.pdf', supports: 'Fatal daily-dose errors, once-weekly RA dosing, folate, organ toxicity, and reproductive precautions.' },
      { title: 'AAO · Current hydroxychloroquine retinal-screening recommendations', url: 'https://www.aao.org/education/clinical-statement/revised-recommendations-on-screening-chloroquine-h', supports: 'Baseline retinal assessment, OCT/FAF, annual screening and low-risk deferral, dose/risk review.' },
      { title: 'DailyMed · Sulfasalazine', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=257cee60-b68f-4c2b-b57d-8e4d73d17e09', supports: 'Allergy, CBC/organ monitoring, serious reactions, and orange-yellow discoloration.' },
      { title: 'DailyMed · Leflunomide', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b9af9870-014f-4c4e-8738-bb04b30b3e85', supports: 'Hepatic/embryo-fetal risks, long persistence, and accelerated elimination.' },
      { title: 'FDA · Humira (adalimumab) label', url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/125057s424lbl.pdf', supports: 'TNF-inhibitor infection/TB/HBV precautions, administration, and vaccination context.' },
      { title: 'FDA · JAK inhibitor safety communication', url: 'https://www.fda.gov/safety/medical-product-safety-information/janus-kinase-jak-inhibitors-drug-safety-communication-fda-requires-warnings-about-increased-risk', supports: 'Cardiovascular, malignancy, thrombosis/mortality warnings and use after TNF-blocker failure/intolerance.' },
      { title: 'ACR · Vaccinations in rheumatic diseases', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10291822/', supports: 'Live/non-live vaccine planning and medication-specific timing/holds.' },
      { title: 'ACR · Exercise, rehabilitation, diet, and integrative care', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10947582/', supports: 'Exercise, OT/joint protection, Mediterranean-style eating, and complementary symptom care.' },
      { title: 'ACR · Glucocorticoid-induced osteoporosis guideline', url: 'https://rheumatology.org/glucocorticoid-induced-osteoporosis-guideline', supports: 'Fracture-risk assessment, calcium/vitamin D, and additional bone-protective treatment when indicated.' },
      { title: 'Mayo Clinic Laboratories · Standard CRP reference', url: 'https://www.mayocliniclabs.com/test-catalog/Overview/800164', supports: 'An assay-specific standard-CRP reference of <5 mg/L rather than a universal <1-mg/L rule.' },
      { title: 'SANJO guideline · Septic arthritis in native joints', url: 'https://jbji.copernicus.org/articles/8/29/2023/index.html', supports: 'Aspiration, microbiology/crystals, and why cell counts or crystals do not exclude infection.' },
      { title: 'EULAR · Intra-articular therapies', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8458067/', supports: 'Asepsis, procedure counseling, aftercare, and individualized bleeding/antithrombotic assessment.' },
      { title: 'ACR · Manual on contrast media', url: 'https://www.acr.org/Clinical-Resources/Clinical-Tools-and-Reference/Contrast-Manual', supports: 'Agent/renal-risk assessment, gadolinium safety, and individualized metformin instructions.' },
      { title: 'DailyMed · Naproxen and NSAID safety', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9c963e77-6e05-47d0-a8d3-e581777377b9', supports: 'GI bleeding/ulcer, renal/CV risks, and why food does not guarantee GI protection.' }
    ]
  },
  'guillain-barre': {
    title: 'Guillain-Barré syndrome', abbreviation: 'GBS', week: 8, deck: 'guillain-barre',
    reviewed: 'November 15, 2026',
    reading: 'Course study guide: Guillain-Barré syndrome—clinical signs and symptoms. B&S textbook: Chapter 65, GBS section. Organized from your supplied notes, with the missing nursing-process sections completed and verified corrections explained below.',
    focus: [{ section: 'manifestations', label: 'Clinical signs & symptoms' }],
    content: {
      overview: [
        { type: 'paragraph', text: 'Guillain-Barré syndrome (GBS) is an acute immune-mediated polyradiculoneuropathy affecting peripheral nerves and nerve roots. It often produces rapidly progressive, relatively symmetric weakness with reduced or absent reflexes. Weakness commonly starts in the legs and ascends, but variants do not always follow that pattern. Respiratory failure and autonomic instability can be life-threatening.' },
        { type: 'heading', text: 'Triggers and immune injury' },
        { type: 'paragraph', text: 'About two-thirds of patients report a preceding respiratory or gastrointestinal illness, often days to a few weeks before weakness. Campylobacter jejuni is a major trigger; associations also include CMV, Epstein–Barr virus, influenza, HIV, Zika, and SARS-CoV-2. GBS can follow surgery and, rarely, certain vaccinations. A temporal association does not prove the cause in an individual patient.' },
        { type: 'list', items: ['Molecular mimicry can cause an immune response to an infection to cross-react with peripheral nerve components. Antibodies, complement, inflammatory cells, and other immune mechanisms contribute; not all cases share one antibody or mechanism.', 'In acute inflammatory demyelinating polyradiculoneuropathy (AIDP), segmental myelin injury impairs saltatory conduction and may produce conduction block. Schwann cells can remyelinate surviving peripheral axons during recovery.', 'Axonal forms include acute motor axonal neuropathy (AMAN) and acute motor-sensory axonal neuropathy (AMSAN). Injury may involve nodes/axons rather than simply stripping myelin; axonal regeneration can make recovery slower.', 'Motor, sensory, cranial, and autonomic nerve involvement explains weakness, paresthesias/pain, bulbar/facial findings, and cardiovascular or bowel/bladder dysfunction. The brain and spinal cord are not the usual primary target of classic GBS.'] },
        { type: 'heading', text: 'Course and recovery' },
        { type: 'paragraph', text: 'Weakness usually reaches its worst point within 4 weeks, often within 2, followed by a plateau and recovery. Many people recover well, but improvement may take months or years and residual fatigue, pain, sensory change, or weakness can persist. Recovery is not guaranteed to proceed in a descending order. New deterioration after initial improvement requires reassessment for complications, treatment-related fluctuation, or another diagnosis; progression beyond the expected course may prompt consideration of acute-onset CIDP.' }
      ],
      manifestations: [
        { type: 'callout', title: 'Clinical hallmark—and the immediate threats', text: 'Think progressive bilateral weakness with reduced/absent reflexes, often ascending after a recent infection. Look actively for respiratory muscle weakness, impaired swallowing/cough, and autonomic instability. A patient can be profoundly weak and fully aware, with normal oxygen saturation early in respiratory decline.' },
        { type: 'cards', items: [
          { title: 'Motor and reflex findings', fields: [['Typical pattern', 'Leg weakness, difficulty walking or rising, flaccid paralysis, and hyporeflexia/areflexia that may progress to the trunk, arms, neck, and respiratory muscles. Findings are usually relatively symmetric, not necessarily identical side to side.'], ['Variants', 'Not every case ascends or loses all reflexes. Miller Fisher syndrome classically causes ophthalmoplegia, ataxia, and areflexia. Dyskinesia (involuntary movement) is not a defining classic GBS feature.']] },
          { title: 'Sensory findings and pain', fields: [['Recognize', 'Tingling, numbness, or pins-and-needles in the feet/hands, sometimes described in a stocking-glove pattern. Deep aching, cramping, back/radicular or thigh pain, neuropathic pain, and hypersensitivity may be severe or worse at night. Sensory findings vary by subtype.']] },
          { title: 'Respiratory and bulbar findings', fields: [['Recognize', 'Shallow or rapid breathing, breathlessness while talking, accessory-muscle use, weak cough, reduced single-breath count, and declining vital capacity/inspiratory strength. Some patients have little obvious dyspnea before deterioration. Roughly one in five may require ventilation, with rates varying by cohort/severity.'], ['Bulbar and facial involvement', 'Dysphagia, dysarthria, drooling, weak secretion clearance, and bilateral facial weakness or incomplete eye closure. Eye-movement weakness can cause diplopia; optic-nerve blindness is not a typical GBS manifestation and requires assessment for another cause.']] },
          { title: 'Autonomic dysfunction', fields: [['Cardiovascular', 'Labile hypertension alternating with hypotension/orthostasis, tachycardia, bradycardia, or serious dysrhythmias. Sweating and other autonomic changes may occur.'], ['GI/GU', 'Constipation, paralytic ileus, and urinary retention can occur. Sphincter dysfunction is less typical as an initial dominant feature; prominent early bladder/bowel symptoms, a sensory level, or marked asymmetry warrants evaluation for spinal cord disease or other mimics.']] }
        ] },
        { type: 'heading', text: 'Awareness is usually preserved' },
        { type: 'paragraph', text: 'Classic GBS usually preserves cognition, hearing, and awareness despite paralysis or intubation. Speak directly to the patient and establish communication. “Always completely intact” is too absolute: hypoventilation, infection, medicines, delirium, or an alternative/overlapping disorder can alter consciousness. An acute change needs assessment, not dismissal as paralysis.' }
      ],
      risk: [
        { type: 'heading', text: 'Risk context and early detection' },
        { type: 'paragraph', text: 'GBS can occur at any age and is more common with increasing age and in males. Recent GI/respiratory infection is common but not required. Campylobacter, other preceding infections, surgery, and selected rare vaccine associations are risk context, not a diagnostic checklist. Trauma has been reported in association with GBS but should not be treated as proof of causation.' },
        { type: 'list', items: ['Seek urgent assessment for new progressive weakness, difficulty walking, reduced reflexes with sensory symptoms, facial/bulbar weakness, or breathing difficulty—especially after a recent illness.', 'There is no established intervention that reliably prevents all GBS. Food safety, hand hygiene, and appropriate infection prevention support general health, but treating every preceding infection has not been shown to prevent GBS.', 'GBS itself is not contagious. Use precautions appropriate to an active underlying infection rather than isolating someone solely for the autoimmune neuropathy.', 'Review vaccination individually with the treating team rather than advising automatic avoidance or automatic vaccination without checking the history. GBS within 6 weeks of a prior influenza vaccine is a precaution for subsequent influenza vaccination; risks and benefits depend on the patient. Other vaccine-specific guidance may apply.', 'Use age/risk-appropriate preventive care and HIV screening according to usual recommendations or diagnostic indications; screening is not a proven GBS-prevention treatment.'] }
      ],
      diagnostics: [
        { type: 'paragraph', text: 'GBS is a clinical diagnosis supported by examination, CSF, and electrodiagnostic studies, while excluding mimics. Do not wait for a “positive” LP or nerve study before addressing breathing or starting indicated treatment. A preceding infection supports the history but is not mandatory.' },
        { type: 'cards', items: [
          { title: 'Neurological examination and respiratory measurements', fields: [['Assess', 'Distribution/progression of weakness, reflexes, sensation, cranial/bulbar function, gait if safe, and autonomic signs. Serial FVC/VC, single-breath count, NIF/MIP, and sometimes MEP monitor respiratory risk; they do not independently diagnose GBS.'], ['NIF sign convention', 'A less-negative NIF is weaker: −20 cm H₂O is weaker than −40. The original “greater than −60” statement is not a universal diagnostic threshold. Interpret technique, baseline, symptoms, and trends; a poor lip seal/facial weakness can reduce test reliability.']] },
          { title: 'LP and CSF: albuminocytologic dissociation', fields: [['Supportive result', 'Raised CSF protein with a normal or only mildly increased white-cell count. Protein may be normal early, particularly in the first week, so an early normal result does not exclude GBS. Marked pleocytosis requires evaluation for infection or another cause.'], ['Before', 'Explain and verify consent under local policy; review bleeding/anticoagulant risk, skin infection, clinical contraindications, and respiratory/positioning tolerance. Offer bladder emptying if practical; bowel emptying is not a routine requirement.'], ['During', 'Support lateral recumbent or appropriate seated positioning, asepsis, stillness, and prompt specimen labeling. Flex the back as needed without tightly forcing the neck/chest into a position that impairs weak breathing.'], ['After', 'Check neurological status, puncture site, and symptoms of bleeding/leakage or post-dural-puncture headache. Rest for comfort and maintain appropriate hydration; routine flat bed rest/extra fluids do not prevent headache. Escalate severe/persistent headache or new neurological findings.']] },
          { title: 'Nerve conduction studies and EMG', fields: [['Purpose', 'Support peripheral nerve dysfunction, characterize demyelinating/axonal patterns, and help assess disease severity.'], ['Limitations and care', 'Early testing can be normal or inconclusive; repeat testing may be useful. Explain discomfort, review implanted devices and anticoagulants with the examiner, avoid skin creams/oils if instructed, and support comfortable positioning.']] },
          { title: 'Blood tests and selected additional tests', fields: [['Purpose', 'CBC, electrolytes (including sodium), glucose, renal/liver studies, and targeted tests investigate mimics, complications, and treatment safety. Serum testing is not useless simply because no routine blood test alone confirms GBS.'], ['Selected testing', 'Anti-GQ1b testing may support suspected Miller Fisher syndrome; other antibody/infection tests are selected by presentation. MRI may help investigate spinal cord or other alternative pathology rather than serving as a routine confirmatory GBS test.']] }
        ] }
      ],
      medical: [
        { type: 'heading', text: 'Urgent monitored care' },
        { type: 'paragraph', text: 'Suspected acute GBS needs urgent hospital assessment and monitoring. ICU care is indicated for evolving respiratory insufficiency, severe bulbar dysfunction/weak cough, rapid progression, or major autonomic instability. Plan controlled airway support early when indicated; waiting for collapse, hypoxemia, or an abnormal blood gas can be dangerous.' },
        { type: 'heading', text: 'Immunotherapy: IVIG or plasma exchange' },
        { type: 'paragraph', text: 'IVIG and plasma exchange are effective disease-directed treatments; care is more than symptom management. Treat patients who cannot walk independently and consider treatment earlier with rapid progression or serious respiratory/bulbar/autonomic features. Evidence is strongest for IVIG begun within 2 weeks of weakness (sometimes considered within 2–4 weeks) or plasma exchange within 4 weeks; specialists weigh the individual course.' },
        { type: 'paragraph', text: 'Choose one initial treatment based on clinical circumstances. Routine combination/sequential plasma exchange plus IVIG is not recommended; exchange after IVIG can remove infused immunoglobulin. “Never together” is overly absolute for exceptional specialist decisions, but combining them is not routine rescue care. A second IVIG course solely for poor prognosis or slow improvement is not recommended. Treatment-related fluctuation needs specialist reassessment. Corticosteroids are not effective routine GBS treatment.' },
        { type: 'heading', text: 'Prevent and treat complications' },
        { type: 'paragraph', text: 'Provide ventilation/secretion support, continuous ECG and close BP monitoring when indicated, short-acting treatment for significant dysautonomia, VTE prevention, pain control, safe nutrition, skin/eye protection, and bowel/bladder care. Continue vigilance during the plateau and recovery phases; autonomic and respiratory complications do not end as soon as weakness stops ascending.' },
        { type: 'heading', text: 'Rehabilitation and recovery support' },
        { type: 'paragraph', text: 'Coordinate PT, OT, SLP, respiratory therapy, dietitian, rehabilitation, and psychological support. Use graded activity with rest rather than exhausting weak muscles. Provide a realistic recovery outlook and practical support for patients needing prolonged ventilation or rehabilitation; neither a fixed recovery date nor complete recovery can be promised.' }
      ],
      medications: [
        { type: 'cards', items: [
          { title: 'IVIG: usual GBS course', fields: [['Regimen', 'A common guideline regimen is 0.4 g/kg/day for 5 days (total 2 g/kg), prescribed with the appropriate weight/dose and product.'], ['Before infusion', 'Review prior reactions, allergies, renal/thrombotic risk, fluid status, baseline vital signs, lung sounds, urine output/labs, and IV access. Explain immediate and delayed adverse effects. Discuss known IgA deficiency with the prescriber; risk depends on the product and reaction/anti-IgA history, not every low IgA result alone.'], ['During', 'Use the exact product/concentration-specific starting rate, escalation, maximum rate, and patient risk adjustments. The original 0.5–1 mL/kg/hour start and 3–6 maximum are not interchangeable across products. Monitor per protocol, particularly at initiation and rate changes.'], ['After', 'Assess delayed reactions, hydration/renal status and clot symptoms; confirm the prescribed consecutive-day schedule. Acute GBS usually requires inpatient monitoring; do not assume outpatient infusions are appropriate simply because appointments are available.']] },
          { title: 'VTE prophylaxis', fields: [['Examples', 'LMWH such as enoxaparin or low-dose unfractionated heparin is commonly used in immobilized hospitalized adults when bleeding risk allows. Warfarin is not the usual initial inpatient prophylaxis choice. Use the prescribed mechanical alternative when anticoagulation is unsuitable.'], ['Monitoring', 'Check bleeding, platelets/HIT risk, renal function, weight, and procedure timing. aPTT monitoring applies to selected therapeutic UFH regimens, not automatically to prophylactic subcutaneous UFH or LMWH. INR is for warfarin when actually prescribed; anti-Xa testing is selective.']] },
          { title: 'Somatic and neuropathic pain', fields: [['Options', 'Acetaminophen or an NSAID when appropriate; gabapentin/pregabalin, carbamazepine, or a selected tricyclic (amitriptyline/nortriptyline) may be considered for neuropathic pain. Evidence is limited; no one option is universally best for every GBS patient.'], ['Safety', 'Review renal/hepatic, GI/bleeding, cardiac, and interaction risks. Sedating drugs/opioids can worsen ventilation, swallowing, constipation, and falls; titrate cautiously and reassess pain and breathing. Use opioid rescue/reversal planning when indicated.']] },
          { title: 'Autonomic instability', fields: [['Examples from the notes', 'Atropine for significant symptomatic bradycardia under the emergency plan; selected short-acting beta blockers or vasodilators such as nitroprusside for severe hypertension/tachycardia; fluids or vasoactive support for hypotension when indicated.'], ['Safety', 'These are monitored specialist choices, not automatic treatment for every abnormal pulse/BP. Continuous ECG and frequent/continuous BP assessment may be required. Labile hypertension can abruptly become hypotension; avoid aggressive long-acting therapy.']] },
          { title: 'Urinary retention and supportive prescriptions', fields: [['Bladder', 'Assess bladder volume/post-void residual and use prescribed intermittent catheterization or other drainage when needed. Tamsulosin from the notes is not standard treatment for every GBS bladder problem; selected off-label use requires a specific indication and review of orthostatic risk.'], ['Other support', 'Prescribed fluids, bowel medicines, nutrition support, and eye lubrication/protection are individualized. IV fluids do not provide complete nutrition, and parenteral nutrition is not the default for bulbar weakness.']] }
        ] }
      ],
      nonpharmacological: [
        { type: 'heading', text: 'Respiratory protection and secretion care' },
        { type: 'paragraph', text: 'Trend breathing mechanics and cough/swallow function, position for comfortable ventilation, and keep appropriate suction and emergency support accessible. Coordinate respiratory/critical-care review before exhaustion develops. Oxygen may be needed for hypoxemia but cannot correct weak ventilation by itself. Non-invasive support must not postpone intubation when airway protection or rapidly worsening weakness makes it unsafe.' },
        { type: 'heading', text: 'Mobility, skin, and VTE prevention' },
        { type: 'paragraph', text: 'Use functional positioning, gentle passive/active-assisted ROM, pressure-redistributing surfaces, heel/bony-prominence protection, and individualized repositioning. Twice-daily ROM may be part of a plan, not a universal dose; assess pain, fatigue, skin, and tolerance. Use safe transfers, prescribed compression devices, and PT/OT equipment. Do not massage a leg with suspected DVT.' },
        { type: 'heading', text: 'Communication, eyes, and swallowing' },
        { type: 'paragraph', text: 'Establish a reliable yes/no signal, letter/picture board, tablet, or individually assessed blink/eye-gaze system. Facial/eye-movement weakness can limit access, so keep a backup call-for-help method. Explain procedures and talk to the patient directly. With incomplete eye closure, assess the cornea and use ordered lubrication/closure protection. Obtain SLP evaluation for bulbar weakness and arrange a safe feeding route.' },
        { type: 'heading', text: 'Anxiety, fatigue, and participation' },
        { type: 'paragraph', text: 'Give clear explanations, reassurance without false promises, family/social contact, and opportunities to participate in decisions. Offer relaxation/distraction, conversation, reading sessions, music/audiobooks, television, or video contact as wanted and tolerated. Pace activity, identify demanding tasks, assist with self-care, support sleep, and build rest breaks into rehabilitation. No specific fatigue medicine is established as routine GBS therapy.' }
      ],
      'adverse-effects': [
        { type: 'cards', items: [
          { title: 'IVIG', fields: [['Infusion effects', 'Headache, chills/fever, flushing, myalgias, nausea, and back/abdominal discomfort can occur. A common headache is not automatically aseptic meningitis; severe headache with neck stiffness/photophobia needs assessment. Premedication and rate changes follow the prescribed product/reaction plan, not an automatic rule for every patient.'], ['Serious effects', 'Hypersensitivity/anaphylaxis, thrombosis (DVT/PE/MI/stroke), AKI, volume overload, hemolysis, aseptic meningitis, and rare pulmonary reactions. Monitor renal function/urine output, lung/fluid status, cardiopulmonary symptoms, and relevant blood counts. Maintain appropriate hydration without causing overload; stop/escalate a serious reaction.']] },
          { title: 'Plasma exchange', fields: [['Monitor', 'Hypotension/hypovolemia, dizziness, fatigue/nausea, citrate-related hypocalcemia, electrolyte changes, bleeding/coagulation-factor loss, allergic reactions, and vascular-access infection/thrombosis. Review CBC, calcium/electrolytes, coagulation/fibrinogen and other ordered tests.'], ['Citrate warning signs', 'Perioral tingling, new paresthesias/cramps, tetany (including Chvostek/Trousseau signs), QT prolongation, or dysrhythmia need prompt assessment. Follow the apheresis team’s rate/citrate adjustment and prescribed calcium plan. Potassium can change; do not assume every exchange causes hypokalemia.']] },
          { title: 'Anticoagulants and pain medicines', fields: [['Anticoagulants', 'Bleeding/bruising and heparin-associated thrombocytopenia/HIT; follow agent-specific laboratory monitoring and renal/procedure precautions.'], ['Neuropathic pain medicines', 'Gabapentinoids: dizziness/sedation and respiratory depression risk, particularly with opioids or respiratory weakness; renal dosing matters. Carbamazepine: blood dyscrasias, serious skin reactions (SJS/TEN), hyponatremia, hepatic effects/interactions, and selected drug-level/genetic-risk review. Tricyclics: sedation, anticholinergic effects, orthostasis, cardiac conduction/QT concerns, mood/suicidality monitoring, and MAOI interactions. Avoid abrupt unsupervised changes.']] },
          { title: 'Autonomic, bladder, ventilation, and immobility risks', fields: [['Medicines', 'Antihypertensives/vasopressors can worsen BP swings; tamsulosin can cause orthostasis and falls. Reassess after each intervention.'], ['Ongoing care', 'Monitor ventilator-associated infection, airway/device injury, DVT/PE, pressure injury, contractures, eye exposure injury, ileus, urinary retention/infection, and deconditioning. Tube/parenteral feeding can cause metabolic, fluid, access, or aspiration complications.']] }
        ] }
      ],
      nutrition: [
        { type: 'paragraph', text: 'Assess energy/protein needs, weight/intake, hydration, respiratory effort, GI function, and nutrition risk with a dietitian. Acute illness and recovery can increase needs, but a fixed high-calorie/high-protein prescription for every patient can overfeed; nutrition supports recovery rather than directly guaranteeing remyelination.' },
        { type: 'cards', items: [
          { title: 'Safe oral intake', fields: [['Assess first', 'Bulbar/facial weakness can impair swallowing and secretion clearance. Use the approved swallow-screen/SLP pathway; a gag check alone cannot establish safety or exclude silent aspiration.'], ['Support', 'If safe, use the recommended texture/liquid consistency, upright supported positioning close to 90° during meals, pacing/rest, and a prescribed period upright afterward (often 30 minutes or longer). Soft/pureed foods or thickened liquids are individualized, not automatic. Keep suction accessible when indicated.']] },
          { title: 'When oral intake is unsafe or insufficient', fields: [['Enteral support', 'NG or post-pyloric feeding may be appropriate once stable if the GI tract can be used. Confirm placement by the approved method before use, elevate the head during feeding as appropriate (commonly 30–45°), and monitor tolerance/aspiration risk. Gastrostomy is considered if prolonged support is expected, not the immediate default for everyone.'], ['Parenteral support', 'Use when enteral feeding is contraindicated, unavailable, or persistently insufficient despite the appropriate plan—not only when ileus exists. Severe ileus or uncontrolled shock needs evaluation; bowel sounds alone do not determine feeding safety.']] },
          { title: 'Fluid, bowel, and metabolic support', fields: [['Monitor', 'I&O, weight, renal function, glucose, sodium and other electrolytes, abdominal distension, vomiting, stool, and urine output. Provide appropriate fluids/fiber and a bowel regimen when tolerated; do not add bulk fiber to suspected ileus without review.'], ['Treatment risks', 'With nutrition support, assess refeeding risk and monitor phosphate, potassium, magnesium, glucose, fluid balance, and the relevant access site. Provide oral care even when NPO.']] }
        ] }
      ],
      assessment: [
        { type: 'callout', title: 'Assess ventilation before oxygen saturation falls', text: 'Trend FVC/VC, NIF/MIP, cough, secretion handling, and swallowing alongside respiratory rate/depth, work of breathing, neck weakness, and single-breath count. Normal SpO₂ or a reassuring blood gas does not rule out evolving neuromuscular respiratory failure.' },
        { type: 'heading', text: 'Respiratory warning values: use trends and the current protocol' },
        { type: 'paragraph', text: 'The 2023 EAN/PNS guideline advises considering elective ventilation when FVC is 20 mL/kg or lower; measured MIP magnitude below 40 cm H₂O (inspiratory pressure weaker/less negative than about −40) or MEP below 30 cm H₂O also prompts urgent consideration. These are warning values, not a requirement to wait for all three or an automatic intubation order. Rapid decline, weak cough, bulbar dysfunction, poor airway protection, and fatigue may require action sooner. A single-breath count below 20 is concerning but does not replace formal measurements. Use the local critical-care protocol and frequent reassessment.' },
        { type: 'cards', items: [
          { title: 'Motor, sensory, and cranial function', fields: [['Assess', 'Serial strength (including neck/arms/legs), reflexes, sensation, pain, facial movement/eye closure, speech, cough, swallowing, and functional ability. Record timing and progression, using a consistent scale where appropriate.'], ['Watch for mimics', 'A sensory level, prominent early sphincter symptoms, marked persistent asymmetry, upper motor neuron signs, or unexpected loss of awareness needs review rather than forcing every finding into GBS.']] },
          { title: 'Autonomic and circulation status', fields: [['Assess', 'ECG/heart rate, BP trends and orthostasis when safe, perfusion, sweating, urine output/bladder distension, bowel function, and abdominal symptoms. Assess VTE/PE signs and bleeding risk.'], ['Escalate', 'New severe bradycardia/tachyarrhythmia, syncope, major BP swings, or shock needs urgent response. Monitor closely during procedures and position changes.']] },
          { title: 'Treatment and daily needs', fields: [['Assess', 'IVIG/plasma-exchange safety, fluid/renal status, labs, nutrition, skin/eye integrity, ROM, sleep, pain, anxiety, communication access, and patient/family understanding.'], ['Frequency', 'Match monitoring frequency and care location to progression and severity. Continue surveillance during early recovery and after ICU transfer; improved limb strength alone does not end risk.']] }
        ] }
      ],
      diagnoses: [
        { type: 'paragraph', text: 'Choose diagnoses using your program’s terminology and the patient’s actual findings, rather than assigning every diagnosis to every patient.' },
        { type: 'list', items: ['Ineffective breathing pattern related to respiratory muscle weakness; impaired gas exchange when supported by assessment.', 'Ineffective airway clearance related to weak cough/retained secretions; risk for aspiration with bulbar weakness or impaired airway protection.', 'Impaired physical mobility related to weakness/paralysis, with risk for falls, contractures, or pressure injury.', 'Acute pain related to inflammatory neuropathy, radicular/muscular pain, or immobility when present.', 'Impaired verbal communication related to facial/bulbar weakness or intubation.', 'Inadequate nutritional intake related to dysphagia, fatigue, or inability to self-feed when supported by findings.', 'Urinary retention, impaired bowel elimination, or risk for fluid/electrolyte imbalance as indicated.', 'Anxiety, powerlessness, or caregiver/support needs related to sudden illness and dependence when identified; risk for unstable BP/cardiovascular complications guides surveillance.'] }
      ],
      priorities: [
        { type: 'callout', title: 'The nurse’s first action', text: 'Assess airway protection, breathing mechanics, cough/secretions, and circulation immediately. With rapidly worsening weakness, bulbar symptoms, respiratory distress, or major autonomic instability, activate urgent escalation and prepare for monitored airway/critical-care support. Do not wait for desaturation, an LP result, or a numerical cutoff.' },
        { type: 'list', items: ['Protect ventilation and the airway: obtain/track respiratory measurements with respiratory therapy, support secretion clearance, and prepare controlled intubation when indicated.', 'Detect dangerous dysautonomia: monitor ECG/BP, respond to serious dysrhythmia or perfusion changes, and use prescribed short-acting treatment carefully.', 'Arrange timely IVIG or plasma exchange when indicated, while monitoring treatment safety and avoiding delays for confirmatory tests.', 'Prevent secondary injury: VTE prophylaxis, aspiration precautions, safe nutrition, pressure/eye protection, gentle ROM, and bowel/bladder management.', 'Preserve communication, dignity, and participation: assume awareness unless assessment shows otherwise, explain care, and establish a reliable help signal.'] }
      ],
      plan: [
        {
          "type": "paragraph",
          "text": "Use patient-centered, time-linked goals that change with the progressive, plateau, and recovery phases. Preserving function and preventing harm are meaningful outcomes before strength improves."
        },
        {
          "type": "cards",
          "items": [
            {
              "title": "1. Respiratory and autonomic safety",
              "fields": [
                [
                  "Goal",
                  "Maintain adequate ventilation and airway protection, identify decline early, and use ventilatory support appropriate to the clinical course. Maintain acceptable perfusion/heart rhythm with dangerous BP swings recognized and treated promptly."
                ],
                [
                  "Actions",
                  "Trend respiratory mechanics, bulbar/cough function, ECG and BP; support airway/secretion care and prescribed monitored treatment, escalating decline before exhaustion."
                ],
                [
                  "Evaluate",
                  "Ventilation, airway protection, rhythm and perfusion remain acceptable; serious respiratory or autonomic changes are recognized and treated promptly."
                ]
              ]
            },
            {
              "title": "2. Immunotherapy and symptom control",
              "fields": [
                [
                  "Goal",
                  "Complete the selected immunotherapy course safely and reassess new deterioration with the neurology team. Control pain and anxiety without unacceptable sedation, respiratory effects, or autonomic complications."
                ],
                [
                  "Actions",
                  "Complete product-specific IVIG or plasma-exchange checks, assess laboratory/infusion safety, and reassess pain/anxiety relief against sedation, breathing and BP effects."
                ],
                [
                  "Evaluate",
                  "The selected course is delivered safely, new deterioration is reviewed, and pain/anxiety are tolerable without unacceptable treatment toxicity."
                ]
              ]
            },
            {
              "title": "3. Nutrition, elimination and injury prevention",
              "fields": [
                [
                  "Goal",
                  "Meet individualized nutrition/hydration goals through a safe route and maintain appropriate bladder/bowel function. Maintain skin/eye protection and joint range, with safe transfers and prevention of avoidable VTE, falls, and pressure injuries."
                ],
                [
                  "Actions",
                  "Coordinate SLP/dietitian support and the safe feeding route; monitor bladder/bowel function and provide prescribed VTE prevention, ROM, skin/eye protection and safe transfers."
                ],
                [
                  "Evaluate",
                  "Nutrition/hydration and elimination goals are addressed; skin, eyes, joint range and mobility are protected with avoidable VTE, falls and pressure injury minimized."
                ]
              ]
            },
            {
              "title": "4. Communication and rehabilitation readiness",
              "fields": [
                [
                  "Goal",
                  "Communicate needs and decisions through a reliable method with a backup. Prepare the patient/caregivers for equipment, rehabilitation, realistic recovery, medication monitoring, home safety, and emergency escalation."
                ],
                [
                  "Actions",
                  "Set up a reliable help signal/AAC with a backup, involve the patient in decisions, and practice equipment/transfers while arranging rehabilitation, home support and emergency instructions."
                ],
                [
                  "Evaluate",
                  "Communication is reliable, care preferences are heard, and patient/caregivers demonstrate relevant home-care skills and understand escalation and follow-up."
                ]
              ]
            }
          ]
        }
      ],
      interventions: [
        { type: 'heading', text: 'Respiratory and autonomic care' },
        { type: 'paragraph', text: 'Measure and trend prescribed respiratory mechanics; assess swallowing, cough, and secretion burden. Position for breathing and use indicated suction/assisted clearance. Alert the team early to decline and prepare airway equipment/support. Maintain ECG and ordered BP monitoring, change positions cautiously, and reassess perfusion after fluids or vasoactive medicines. Coordinate suction/procedures carefully in severe dysautonomia because marked bradycardia can occur.' },
        { type: 'heading', text: 'Immunotherapy and medication safety' },
        { type: 'paragraph', text: 'Complete product-specific IVIG checks, ordered rate changes, monitoring, and response documentation; manage a serious reaction promptly. For plasma exchange, assess access, hemodynamics, calcium/electrolytes, coagulation, and the prescribed replacement/calcium plan. Coordinate timing of medicines that exchange might remove. Review anticoagulation/procedure timing and monitor drug-specific risks rather than ordering every coagulation test for every anticoagulant.' },
        { type: 'heading', text: 'Mobility, skin, eyes, and elimination' },
        { type: 'paragraph', text: 'Provide prescribed pharmacological/mechanical VTE prevention, gentle ROM, supportive positioning, pressure relief, and safe transfers. PT/OT guides graded activity, splints, and assistive devices; stop before excessive fatigue. Protect incompletely closing eyes with ordered measures. Track bladder volume/voiding and use aseptic catheter care when needed; review retention medicines individually. Assess distension/ileus and use an appropriate bowel plan.' },
        { type: 'heading', text: 'Nutrition, pain, communication, and coping' },
        { type: 'paragraph', text: 'Coordinate SLP/dietitian input and a safe oral/enteral/parenteral plan; monitor intake, weight, glucose/electrolytes, and refeeding risk when relevant. Reassess pain relief, sedation, breathing, sleep, and constipation. Establish communication aids and a call signal, offer choices and family involvement, and provide meaningful activities and emotional support without overstimulation or exhaustion.' },
        { type: 'heading', text: 'Discharge and rehabilitation' },
        { type: 'paragraph', text: 'Arrange rehabilitation, home nursing/respiratory support, equipment, medication review, and neurology follow-up according to residual needs. Practice transfers and equipment with caregivers; use trained assistance, lifts, and safe body mechanics rather than expecting a caregiver to manually lift a dependent patient. Plan pacing, home access, transport, and reassessment if recovery stalls or new weakness appears.' }
      ],
      education: [
        { type: 'list', items: ['Explain GBS, immunotherapy, monitoring, and the possibility of a prolonged but often substantial recovery. Treatment interrupts immune injury and supports complications; it is not limited to symptom relief.', 'Call emergency services for new/worsening breathing difficulty, shallow breathing, weak cough/inability to handle saliva, choking, syncope, severe palpitations, chest pain, or rapidly worsening weakness. Wheezing is not required for neuromuscular respiratory failure.', 'Recognize possible DVT (new unilateral swelling, warmth, redness, tenderness/calf pain) and seek urgent assessment. Sudden chest pain, breathlessness, fainting, or coughing blood may indicate PE and needs emergency care; do not massage the leg.', 'Use medicines exactly as prescribed and report bleeding, severe rash, marked sedation, reduced urine output, severe infusion-related headache, or clot symptoms. Understand the relevant anticoagulant precautions and reversal plan, if applicable.', 'Practice safe swallowing/feeding, oral care, eye protection, pressure relief, ROM, catheter/bowel care, and equipment use with teach-back and demonstration.', 'Remove loose rugs/clutter, improve lighting, add appropriate rails, and use prescribed wheelchairs, commodes, shower benches, or other ADL aids. Avoid unsafe solo transfers; caregivers use a stable base, keep loads close when appropriate, and use assistance/equipment for dependent transfers.', 'Pace daily tasks and alternate activity with rest. Recovery may take months or years; persistent fatigue, pain, or weakness deserves follow-up. Strength and reflexes do not have to return in a fixed order.', 'Keep communication aids, a reliable yes/no signal, and a way to summon help available. Discuss fear, mood, sleep, and caregiver strain; request support rather than assuming paralysis prevents understanding.', 'Review influenza, COVID-19, and other vaccination decisions with the clinician using current guidance and the individual GBS/vaccine timeline. Do not assume that all future vaccines are prohibited. Attend routine age/risk-based screening and follow-up.'] }
      ],
      evaluation: [
        { type: 'list', items: ['Respiratory mechanics, cough, secretion clearance, and airway protection are stable or improving; ventilatory support and weaning decisions match the clinical assessment. An SpO₂ of 92% or a normal reading alone is not proof of adequate ventilation.', 'Heart rhythm, BP, perfusion, and orthostatic tolerance are acceptable without untreated dangerous dysautonomia. Monitoring continues during vulnerable recovery periods.', 'Motor/function trends stabilize and then improve where possible, with pain, fatigue, sensation, and reflexes tracked individually. Recovery is not judged by a guaranteed descending sequence or rapid reflex normalization.', 'The patient receives the selected immunotherapy safely, and delayed reactions, renal/fluid problems, clotting, bleeding, electrolyte changes, or other toxicities are recognized and managed.', 'Nutrition/hydration goals are met as closely as possible through a safe route, with acceptable feeding tolerance, metabolic trends, and bowel/bladder management.', 'Communication is reliable, needs/preferences are heard, and anxiety/pain are tolerable without excessive sedation. Skin, eyes, joints, and mobility are protected with preventable VTE, pressure injury, and falls minimized.', 'The patient/caregivers demonstrate relevant home-care/transfer skills, understand emergency warning signs and medication precautions, and have rehabilitation, equipment, support, and follow-up arranged.'] }
      ]
    },
    clarifications: [
      { title: 'Anatomy, variants, and cranial findings', text: 'Expanded the demyelination-only model to include axonal/nodal forms. Ascending symmetry is typical, not mandatory, and dyskinesia is not a classic hallmark. Replaced routine optic-nerve blindness with facial/bulbar and eye-movement findings; optic-nerve/visual loss requires another assessment. Awareness is usually preserved, but “completely intact in all cases” overlooks secondary illness and overlapping diagnoses.' },
      { title: 'Respiratory measurements and early warning', text: 'Clarified that a less-negative NIF is weaker and that “greater than −60” is not a universal diagnostic cutoff. A NIF weaker than −30 is concerning, but deterioration can require action sooner. The older 2019 “20/30/40” mnemonic and the 2023 EAN/PNS pressure values are not identical; this page uses the 2023 guidance with symptoms, trends, bulbar function, and cough. Normal SpO₂ or early blood gases do not exclude respiratory decline, and thresholds must not delay airway support.' },
      { title: 'Testing and LP care', text: 'Albuminocytologic dissociation supports GBS but may be absent early; neither early normal CSF nor nerve studies exclude it. Routine serum tests help evaluate mimics and treatment safety. Bowel emptying, forced tight LP positioning, preventive flat bed rest, and forced fluids were removed as universal requirements.' },
      { title: 'IVIG, plasma exchange, and steroids', text: 'Retained the common 0.4-g/kg/day, 5-day IVIG regimen while replacing universal infusion-rate numbers with product-specific instructions. Routine sequential IVIG/exchange and an automatic second IVIG course for poor prognosis are not recommended; fluctuations need reassessment. Steroids are not routine effective GBS treatment. A common IVIG headache is not synonymous with aseptic meningitis; IgA-related risk is more specific than all IgA deficiency.' },
      { title: 'Supportive medicines and nutrition', text: 'Warfarin is not the usual initial inpatient prophylaxis choice, and anticoagulant labs depend on the actual drug/dose. Pain medicines require respiratory/autonomic risk review. Tamsulosin is not routine for every retention problem. Enteral feeding is preferred when feasible; parenteral nutrition is not automatic or restricted to ileus alone. Calories, protein, swallowing strategies, fiber, and hydration are individualized.' },
      { title: 'Prevention, prognosis, and missing nursing sections', text: 'Treating a preceding infection is not proven prevention of GBS. Vaccine decisions follow individual history/current guidance. Removed guaranteed descending recovery and fixed saturation-only success criteria. Completed assessment, diagnoses, priorities, care goals, and interventions while retaining the supplied communication, fatigue, home-care, and emergency teaching.' }
    ],
    references: [
      { title: 'EAN / PNS · GBS diagnosis and treatment guideline, 2023', url: 'https://onlinelibrary.wiley.com/doi/full/10.1111/jns.12594', supports: 'Current diagnostic framework, CSF/electrophysiology, IVIG/exchange timing, second-course/steroid recommendations, and pain care.' },
      { title: 'International consensus · Diagnosis and management in ten steps', url: 'https://www.nature.com/articles/s41582-019-0250-9', supports: 'Older respiratory warning framework, autonomic/functional surveillance, supportive care, and awareness. Current respiratory/treatment recommendations follow the 2023 guideline above.' },
      { title: 'NIH / NINDS · Guillain-Barré syndrome booklet', url: 'https://www.ninds.nih.gov/sites/default/files/2025-05/NINDS_Guillain-Barre-Syndrome.pdf', supports: 'Demyelinating/axonal injury, symptoms, recovery variability, and rehabilitation.' },
      { title: 'WHO · Guillain-Barré syndrome', url: 'https://www.who.int/news-room/fact-sheets/detail/guillain-barr%C3%A9-syndrome', supports: 'Urgent assessment, respiratory/autonomic complications, immunotherapy, and recovery context.' },
      { title: 'CDC · GBS, preceding illness, and influenza vaccination', url: 'https://www.cdc.gov/flu/vaccine-safety/guillainbarre.html', supports: 'Preceding illness frequency and rare vaccine-associated risk in context.' },
      { title: 'CDC · Current influenza vaccine safety guidance', url: 'https://www.cdc.gov/flu/hcp/vax-summary/vaccine-safety.html', supports: 'GBS within 6 weeks of prior influenza vaccination as a precaution requiring individual assessment.' },
      { title: 'DailyMed · Privigen (an IVIG product)', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7e5649da-75be-4a42-8eeb-4aeba562c401', supports: 'Product-specific infusion instructions, thrombosis/renal and hypersensitivity risk, hemolysis, and aseptic meningitis; GBS regimen is guideline-based.' },
      { title: 'British Society for Haematology · Apheresis guideline', url: 'https://onlinelibrary.wiley.com/doi/full/10.1111/tme.13144', supports: 'Citrate/hypocalcemia symptoms, replacement-fluid/coagulation effects, and procedure monitoring.' },
      { title: 'Canadian Blood Services · Therapeutic apheresis', url: 'https://professionaleducation.blood.ca/en/transfusion/clinical-guide/therapeutic-apheresis', supports: 'Plasma exchange purpose, fluid/electrolyte, bleeding, and infection risks.' },
      { title: 'ASH · VTE prophylaxis for hospitalized medical patients', url: 'https://www.hematology.org/resources/clinical-practice-guidelines/venous-thromboembolism-guidelines/prophylaxis-for-medical-patients', supports: 'Risk-based pharmacological/mechanical prevention and standard inpatient options.' },
      { title: 'DailyMed · Enoxaparin', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=21b095d1-5ade-43e9-9114-30fbfb2331c9', supports: 'Bleeding/platelet and renal monitoring, procedural precautions, and limits of PT/aPTT for LMWH.' },
      { title: 'FDA · Gabapentinoid respiratory safety', url: 'https://www.fda.gov/safety/medical-product-safety-information/neurontin-gralise-horizant-gabapentin-and-lyrica-lyrica-cr-pregabalin-drug-safety-communication', supports: 'Respiratory depression risk, especially with respiratory impairment and other sedating medicines.' },
      { title: 'DailyMed · Carbamazepine', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f3465f71-8931-43b6-baea-eac7046a4400', supports: 'Blood dyscrasias, severe skin/genetic-risk precautions, sodium/liver effects, and interactions.' },
      { title: 'DailyMed · Tamsulosin', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=00097e78-9c04-4e62-8260-ddb50e9a6a93', supports: 'Approved BPH indication and orthostatic/syncope precautions; not routine GBS therapy.' },
      { title: 'Royal Children’s Hospital · LP safety and positioning', url: 'https://www.rch.org.au/clinicalguide/guideline_index/lumbar_puncture_guideline/', supports: 'Procedure assessment, respiratory-safe positioning, and nursing assistance.' },
      { title: 'Cochrane review · Posture/fluids after dural puncture', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6682345/', supports: 'Routine preventive bed rest or extra fluid supplementation is not supported.' },
      { title: 'ASHA · Adult dysphagia', url: 'https://www.asha.org/practice-portal/clinical-topics/adult-dysphagia/', supports: 'Individualized swallowing assessment, texture/strategy decisions, and aspiration limitations.' },
      { title: 'ASPEN · Enteral nutrition indications', url: 'https://nutritioncare.org/wp-content/uploads/2024/12/Malnutrition-EN-Indication.pdf', supports: 'Nutrition risk and enteral support when oral intake is insufficient.' },
      { title: 'ASPEN / SCCM · Critical-care nutrition guidance', url: 'https://aspenjournals.onlinelibrary.wiley.com/doi/full/10.1177/0148607115621863', supports: 'Individualized enteral/parenteral support, feeding safety, and why bowel sounds alone do not determine readiness.' }
    ]
  },
  meningitis: {
    title: 'Meningitis', abbreviation: 'Meningitis', week: 8, deck: 'meningitis',
    reviewed: 'November 15, 2026',
    reading: 'Course study guide: Meningitis—clinical signs and symptoms, droplet precautions, and lumbar puncture nursing considerations. B&S textbook: Chapter 65, meningitis section. Organized from your supplied notes, with missing nutrition and nursing-process content completed and clinical corrections explained below.',
    focus: [
      { section: 'manifestations', label: 'Clinical signs & symptoms' },
      { section: 'nonpharmacological', label: 'Droplet precautions' },
      { section: 'diagnostics', label: 'Lumbar puncture nursing care' }
    ],
    content: {
      overview: [
        { type: 'paragraph', text: 'Meningitis is inflammation of the meninges, the protective coverings of the brain and spinal cord (dura, arachnoid, and pia mater). Infectious meningitis involves the CSF-containing subarachnoid space and leptomeninges (pia and arachnoid). Bacterial meningitis is a medical emergency that can progress rapidly to death or permanent disability.' },
        { type: 'cards', items: [
          { title: 'Bacterial', fields: [['Examples', 'Streptococcus pneumoniae, Neisseria meningitidis, and Haemophilus influenzae type b (Hib). Listeria monocytogenes is important with older age, pregnancy, or immunocompromise; group B streptococcus and enteric organisms are important in newborns.'], ['Urgency', 'Treat suspected bacterial disease immediately. Meningococcal bloodstream infection can cause shock and a non-blanching rash with or without meningitis.']] },
          { title: 'Viral and aseptic', fields: [['Examples', 'Enteroviruses are common; HSV, varicella-zoster, mumps, and arboviruses such as West Nile can also cause meningitis. Influenza and Zika are less common reported associations rather than the main routine causes.'], ['Distinction', 'Many viral cases are self-limited, but severe disease can occur. Aseptic means routine bacterial cultures do not identify a cause; it is not a synonym proving viral infection. Other infections, partially treated bacterial disease, and non-infectious causes may fit this description.']] },
          { title: 'Other causes', fields: [['Examples', 'Fungal disease such as cryptococcal meningitis is particularly important in advanced HIV or other immunocompromise. Tuberculous, parasitic, and amebic infections need specific treatment.'], ['Context', 'Not all uncommon causes are limited to immunocompromised people. Meningitis may also be non-infectious, including medication-related or inflammatory disease.']] }
        ] },
        { type: 'heading', text: 'How inflammation causes injury' },
        { type: 'list', items: ['Organisms may enter through the bloodstream after nasopharyngeal colonization, extend from otitis/sinusitis/mastoiditis, or gain direct access through a skull defect, CSF leak, trauma, or neurosurgical procedure. Transmission depends on the organism; not every form spreads through respiratory droplets.', 'Inflammatory cytokines and white cells increase blood–brain barrier permeability. In bacterial disease, purulent exudate, vasogenic/cytotoxic edema, and meningeal irritation contribute to headache, photophobia, and neck stiffness.', 'Inflammation can impair CSF reabsorption at arachnoid granulations, causing communicating hydrocephalus; obstruction of CSF pathways may also occur. These are distinct mechanisms rather than one interchangeable type of hydrocephalus.', 'Raised intracranial pressure (ICP), impaired cerebral perfusion, and vascular inflammation can cause ischemia/infarction, seizures, cranial nerve injury, hearing loss, or herniation. Meningococcemia may also trigger disseminated intravascular coagulation (DIC) and shock.'] }
      ],
      manifestations: [
        { type: 'callout', title: 'Recognize the emergency without waiting for every sign', text: 'A commonly taught bacterial meningitis triad is fever, neck stiffness, and altered mental status; some summaries group fever, headache, and neck stiffness. For recognition, consider all four warning features: fever, headache, neck stiffness, and altered consciousness/cognition. The full combination, meningeal signs, and a rash may be absent; their absence does not rule out meningitis.' },
        { type: 'cards', items: [
          { title: 'Common and early findings', fields: [['Recognize', 'Fever/chills, severe persistent or throbbing headache, nuchal rigidity (painful/stiff neck), photophobia, phonophobia, nausea/vomiting, tachycardia, and ill appearance. Fever need not be high-grade or present in every patient.']] },
          { title: 'Neurological findings', fields: [['Recognize', 'Irritability/restlessness, confusion or other mental-status change, lethargy, seizures, focal deficits, cranial nerve abnormalities, and worsening consciousness up to coma.'], ['Meningeal signs', 'Kernig sign: pain/resistance with knee extension while the hip is flexed. Brudzinski sign: involuntary hip/knee flexion with passive neck flexion. These signs have limited sensitivity; do not force maneuvers or use negative findings to exclude disease.']] },
          { title: 'Meningococcal and fulminant disease', fields: [['Recognize', 'Petechiae, purpura, or larger ecchymoses, especially a rapidly spreading non-blanching rash, with abrupt fever, poor perfusion, hypotension/shock, or DIC. Inspect the whole skin surface and consider that rash can be harder to see on darker skin.'], ['Act', 'Escalate immediately. A rash may appear late or never appear; do not wait for it before treating a deteriorating patient.']] },
          { title: 'Infants and older adults', fields: [['Infants', 'Poor feeding, lethargy, irritability, abnormal/high-pitched cry, temperature instability, bulging fontanelle, apnea, or seizures may occur; neck stiffness may be absent.'], ['Older adults', 'Delirium or reduced alertness may dominate, with less obvious fever or neck stiffness. Compare with baseline and avoid attributing an acute change simply to age.']] }
        ] },
        { type: 'heading', text: 'Raised ICP: do not wait for late signs' },
        { type: 'paragraph', text: 'A declining level of consciousness, abnormal pupils, new focal findings, repeated seizures, or posturing require urgent review. Papilledema may occur but is not a reliable early screening test. Cushing’s triad—systolic hypertension/widened pulse pressure, bradycardia, and irregular respirations—is a late, ominous finding, not a prerequisite for escalation.' },
        { type: 'paragraph', text: 'A child with fever and a seizure needs prompt assessment for serious infection, but fever plus seizure does not automatically establish meningitis. Simple febrile seizures exist; prolonged/focal seizures, persistent altered consciousness, very young age, or other concerning findings require particular attention.' }
      ],
      risk: [
        { type: 'heading', text: 'Risk factors' },
        { type: 'list', items: ['Age and organism: newborns are vulnerable to group B streptococcus and enteric bacteria; pneumococcus and meningococcus are important beyond the neonatal period. Older adults also have greater risk from pneumococcus and Listeria.', 'Close living or prolonged contact, including college dormitories or military barracks, raises meningococcal transmission risk. Travel/outbreak exposure changes risk and vaccine requirements.', 'Immunocompromise (including HIV, cancer, or immunosuppressive treatment), asplenia, and complement deficiency or complement-inhibiting medicines increase risk for selected organisms.', 'Recent respiratory/ear/sinus infection, skull trauma, a CSF leak, cochlear implants, or neurosurgery can create routes or risks for bacterial infection. A history of any head injury alone does not define an identical risk.', 'Viral exposures vary: enteroviruses, herpesviruses, mumps, and mosquito-borne viruses have different transmission routes. Use cause-specific hand, respiratory, food/water, and vector precautions.'] },
        { type: 'heading', text: 'Vaccination and everyday prevention' },
        { type: 'paragraph', text: 'Vaccination prevents several important causes, but no single vaccine prevents all meningitis. Keep Hib, pneumococcal, and meningococcal vaccines current according to age, health risks, and travel guidance. US routine MenACWY vaccination is at ages 11–12 with a booster at 16. MenB is a separate decision: shared clinical decision-making for healthy adolescents/young adults (preferred age 16–18), with different recommendations for people at increased risk. Combination MenABCWY products may be used when both components are indicated. Check the current schedule rather than treating MenACWY and MenB as interchangeable.' },
        { type: 'paragraph', text: 'Use hand hygiene, respiratory etiquette, and avoid sharing drinks or items contaminated with saliva. Vaccination does not replace post-exposure prophylaxis when a meningococcal close contact meets criteria.' },
        { type: 'heading', text: 'Meningococcal close-contact prophylaxis' },
        { type: 'paragraph', text: 'Notify infection prevention/public health promptly. Eligible contacts include household members, childcare contacts, and people directly exposed to oral/respiratory secretions; routine casual contact or entering the room is not enough. Exposed airway-care staff may qualify. Give prophylaxis as soon as possible, ideally within 24 hours after identification of the index patient—not a rule that eligibility ends 24 hours after the original exposure. Do not delay for a contact’s throat culture.' },
        { type: 'paragraph', text: 'Options include single-dose oral ciprofloxacin, single-dose IM ceftriaxone, or a 2-day rifampin course, selected by public health/prescribers for age, pregnancy, interactions, and local resistance. Ciprofloxacin-resistant meningococcus requires alternative guidance; azithromycin is an option in specified resistance settings. Not every contact of every type of meningitis needs antibiotics. Selected Hib exposures have separate prophylaxis criteria.' }
      ],
      diagnostics: [
        { type: 'callout', title: 'Timing: obtain samples promptly; never delay urgent antibiotics', text: 'Get blood cultures and, if immediately safe and practical, CSF before antibiotics. If LP is unsafe or imaging/procedure arrangements would delay treatment, take bloods promptly and give empiric IV antibiotics first. Aim to start treatment immediately, within 1 hour of hospital arrival for suspected bacterial disease; the hour is not a reason to wait.' },
        { type: 'cards', items: [
          { title: 'Blood tests and microbiology', fields: [['Tests', 'Blood cultures, CBC, inflammatory markers, blood glucose, electrolytes/renal function, and additional sepsis/coagulation tests as indicated. Blood PCR may help identify meningococcus or pneumococcus.'], ['Nursing role', 'Collect/label promptly, document antibiotic timing, and escalate critical results. A normal WBC or inflammatory marker alone does not exclude infection.']] },
          { title: 'Lumbar puncture and CSF analysis', fields: [['Tests', 'Opening pressure when appropriate; CSF cell count/differential, protein, glucose with paired blood glucose, Gram stain, bacterial culture/susceptibilities, and pathogen-directed PCR. Additional fungal/TB testing depends on the presentation.'], ['Interpretation', 'Bacterial disease commonly has neutrophilic pleocytosis, raised protein, and low glucose/CSF-to-blood glucose ratio; viral disease often has lymphocytic pleocytosis and preserved glucose. Early disease, prior antibiotics, and other organisms can blur this pattern. No single normal result or negative Gram stain safely rules out all disease.']] },
          { title: 'Before LP: safety and imaging', fields: [['Check', 'Explain the procedure and verify informed consent under local policy. Review airway, breathing, circulation, consciousness, focal findings/pupils, seizures, skin at the puncture site, platelets/coagulation, and anticoagulants. Support comfort and offer bladder emptying if practical.'], ['Defer and escalate', 'Stabilize an unprotected airway, respiratory compromise, shock, uncontrolled seizures, or bleeding risk. Extensive/rapidly spreading purpura, local infection, or concern for dangerous intracranial pressure/space-occupying disease may preclude LP.'], ['CT is selective', 'Do not obtain CT automatically for everyone. Imaging is indicated with concerning findings such as focal deficits, abnormal pupils/papilledema, markedly impaired or rapidly falling consciousness, new seizures, or risk of a space-occupying lesion; criteria vary with age, immune status, and local guidance. A normal CT or funduscopic examination does not independently certify that LP is safe.']] },
          { title: 'During LP: position, assist, and label', fields: [['Position', 'Lateral recumbent with the back flexed, or supported sitting when appropriate, to access the lumbar space (often L3–4 or L4–5). Avoid excessive neck flexion or compression that compromises breathing; use safe support, especially in infants.'], ['Assist', 'Maintain asepsis and help the patient remain still. Lateral positioning is used for a standard opening-pressure measurement; follow the operator’s instructions. Monitor airway, breathing, comfort, and neurological status; label and send numbered CSF tubes promptly according to laboratory policy.']] },
          { title: 'After LP: assess rather than prescribe blanket bed rest', fields: [['Monitor', 'Vital signs, neurological status, leg movement/sensation, back/radicular pain, and the site for bleeding, hematoma, or clear-fluid leakage. Report deterioration immediately.'], ['Headache care', 'A post-dural-puncture headache is often worse upright and relieved lying down. Rest for comfort and maintain appropriate hydration; routine 2–4-hour flat bed rest and forced extra fluids have not been shown to prevent it. Follow individualized instructions and seek review for persistent/severe headache or new deficits; an epidural blood patch may be considered after assessment.']] }
        ] }
      ],
      medical: [
        { type: 'heading', text: 'Suspected bacterial meningitis: urgent hospital treatment' },
        { type: 'paragraph', text: 'Stabilize airway, breathing, and circulation; implement appropriate precautions concurrently. Start meningitis-dose IV antibiotics urgently, obtain infection-specialist input, and adjust to the organism and susceptibility results. Do not withhold treatment for CT, LP, culture results, or delayed dexamethasone.' },
        { type: 'paragraph', text: 'Ceftriaxone or cefotaxime is a common empiric foundation. Vancomycin is added when resistant pneumococcus is a concern under local guidance; ampicillin adds Listeria coverage in at-risk patients. Penicillin G is a targeted option for susceptible organisms, not a universal partner to ceftriaxone. Age, immune status, allergies, pregnancy, neonatal status, recent surgery, and resistance all affect the regimen and duration.' },
        { type: 'heading', text: 'Adjuncts and complications' },
        { type: 'paragraph', text: 'Give dexamethasone with or before the first antibiotic dose when indicated; it is not a substitute for antibiotics. A typical adult protocol uses dosing every 6 hours for up to 4 days, with continuation reviewed once the cause is known. Treat seizures promptly, assess for raised ICP/hydrocephalus, and provide critical-care ventilation or circulatory support when required. Routine antiseizure prophylaxis or routine mannitol is not required for every patient.' },
        { type: 'heading', text: 'Fluid, fever, and pain management' },
        { type: 'paragraph', text: 'Correct shock and dehydration with prescribed fluid/resuscitation plans while tracking perfusion, urine output, sodium, and neurological status. Do not restrict fluids automatically for all meningitis. Confirm the cause of hyponatremia before treating suspected SIADH; salt loss and hypovolemia require different management. Use prescribed antipyretics/comfort measures and individualized analgesia. Opioids are not universally prohibited by the diagnosis, but respiratory depression, hypotension, CO₂ retention, and impaired neurological assessment make sedating medicines particularly hazardous.' },
        { type: 'heading', text: 'Other causes and follow-up' },
        { type: 'paragraph', text: 'Many viral cases need supportive care, but suspected HSV/VZV CNS disease may require antiviral therapy; possible encephalitis needs urgent evaluation. Fungal, tuberculous, parasitic, and amebic causes need specific specialist treatment. Arrange hearing assessment and neurological, cognitive, functional, and psychosocial follow-up after bacterial disease rather than assuming recovery ends when fever resolves.' }
      ],
      medications: [
        { type: 'cards', items: [
          { title: 'Ceftriaxone / cefotaxime', fields: [['Purpose', 'Third-generation cephalosporins used at meningitis doses to provide effective CSF antibacterial treatment.'], ['Nursing role', 'Check allergy history and prescribed dose/timing; obtain cultures without delaying administration, assess IV access, and monitor response, rash, diarrhea, renal/hepatic status, and compatibility. Renal dose adjustments are drug-specific; do not assume every cephalosporin follows the same rule.']] },
          { title: 'Vancomycin', fields: [['Purpose', 'Additional empiric or targeted coverage for resistant gram-positive organisms when indicated.'], ['Nursing role', 'Infuse at the prescribed rate, monitor creatinine/urine output and ordered drug levels, and coordinate dosing with pharmacy. AUC-guided monitoring is established for serious MRSA infections, but meningitis targets require the local CNS-infection protocol; do not substitute one universal trough/AUC target.']] },
          { title: 'Ampicillin and penicillin G', fields: [['Purpose', 'Ampicillin adds Listeria coverage, which ceftriaxone does not provide. Penicillin G may be selected for a proven susceptible organism.'], ['Nursing role', 'Verify beta-lactam allergy, dose/renal adjustment, infusion compatibility, and response. Older age, pregnancy, and immunocompromise prompt Listeria consideration. The original “50+” rule is not universal: WHO uses age over 60 alongside other risks; follow the applicable local protocol.']] },
          { title: 'Dexamethasone', fields: [['Purpose', 'An adjunct for selected suspected/confirmed bacterial meningitis to reduce inflammatory injury; benefit and continuation depend on organism, age, and context.'], ['Nursing role', 'Give before or with the first antibiotic if possible; never delay antibiotics to obtain it. If missed, get prompt guidance rather than assuming it can never be started later. Monitor glucose, fluid/electrolytes, mood, infection, and GI symptoms. A q6h, 4-day course is a common adult regimen, not a universal order for all causes/ages.']] },
          { title: 'Antiseizure medicines', fields: [['Purpose', 'An active prolonged seizure/status epilepticus requires rescue treatment such as a benzodiazepine under the emergency protocol, followed by an appropriate agent such as levetiracetam or fosphenytoin/phenytoin when indicated.'], ['Nursing role', 'Support breathing, time/document the seizure, and monitor cardiorespiratory effects. Phenytoin is not obligatory maintenance for every case. Duration and need for further treatment require reassessment.']] },
          { title: 'Selected adjuncts', fields: [['Examples', 'Prescribed acetaminophen/other appropriate analgesia and fever care, antiemetics, and organism-specific antivirals (such as acyclovir for HSV CNS infection). Severe ICP emergencies may require specialist-directed mannitol or hypertonic saline.'], ['Nursing role', 'Monitor the actual medicine’s effects and contraindications. Acyclovir requires hydration/renal review; hyperosmolar therapy needs close perfusion, fluid, renal, electrolyte, and osmolar monitoring. Neither is a routine substitute for antibiotics.']] },
          { title: 'Contact prophylaxis', fields: [['Examples', 'Rifampin, ciprofloxacin, or ceftriaxone for eligible meningococcal contacts; resistance may change the choice.'], ['Nursing role', 'Coordinate public-health instructions and completion promptly, review interactions/contraindications, and distinguish a contact’s prophylaxis from treatment of an ill patient.']] }
        ] }
      ],
      nonpharmacological: [
        { type: 'callout', title: 'Droplet precautions: start promptly, then identify the cause', text: 'Use Standard plus Droplet Precautions immediately when meningococcal or Hib meningitis is suspected, including undifferentiated acute bacterial meningitis until these causes are excluded under local policy. Continue for meningococcal/Hib disease until at least 24 hours after effective antibiotics start. This is not the isolation rule for every bacterial cause.' },
        { type: 'cards', items: [
          { title: 'Room, PPE, and transport', fields: [['Use', 'A single room when available; cohort only through infection prevention with a matching confirmed infection. Don a medical/surgical mask on room entry rather than relying on a 3–6-foot threshold. Add eye protection, gown, and gloves for anticipated secretion/splash exposure and follow procedure-specific PPE guidance.'], ['Transport', 'Limit transport; when needed, mask the patient if tolerated and notify the receiving service. Droplet isolation alone does not require a negative-pressure room or a continuously closed door.']] },
          { title: 'Precautions vary by organism', fields: [['Examples', 'Pneumococcal, Listeria, and many other bacterial meningitides generally require Standard Precautions. Viral/aseptic meningitis generally uses Standard Precautions, with Contact Precautions for infants/young children and enteroviral situations as indicated. TB meningitis with concurrent pulmonary TB or other pathogens may require additional precautions.'], ['Review', 'Follow infection prevention’s organism-specific plan. “Viral” does not guarantee that every patient needs Standard Precautions only.']] }
        ] },
        { type: 'heading', text: 'Support cerebral perfusion and comfort' },
        { type: 'paragraph', text: 'When appropriate for hemodynamic status, elevate the head about 30° and keep the head/neck neutral to promote venous drainage. Avoid unnecessary neck/hip compression and straining; support bowel care and gentle repositioning. Do not withhold essential airway clearance or suction merely to prevent coughing. Space care to avoid excessive stimulation without delaying urgent assessment or treatment.' },
        { type: 'paragraph', text: 'Provide a quiet, dim room for headache, photophobia, and sound sensitivity. Limit unnecessary disturbances/visitors while maintaining supportive communication. Use safe seizure precautions, a low bed, assistance with mobility, and ready access to suction/oxygen. During a seizure protect from injury, avoid restraint or objects in the mouth, and follow emergency positioning/airway guidance.' },
        { type: 'heading', text: 'Temperature and fluid surveillance' },
        { type: 'paragraph', text: 'Use comfortable bedding and prescribed fever management; avoid shivering and excessive cooling. Cooling blankets require an appropriate indication and monitoring. Routine tepid sponging is not recommended for a febrile child, and antipyretics do not reliably prevent febrile seizures. Monitor intake/output, daily weight when indicated, and electrolytes; assess for dehydration, fluid excess, and hyponatremia rather than assuming every low sodium is SIADH.' }
      ],
      'adverse-effects': [
        { type: 'cards', items: [
          { title: 'IV antibiotics', fields: [['Monitor', 'GI upset/diarrhea, phlebitis, rash, and severe hypersensitivity/anaphylaxis. Persistent or severe diarrhea requires assessment for C. difficile. Blistering/peeling rash or mucosal lesions need urgent review for a serious skin reaction.'], ['Drug-specific cautions', 'Vancomycin can cause kidney injury, infusion reactions, and hearing toxicity. Stop/escalate an acute infusion reaction and assess airway/circulation; distinguish it from anaphylaxis. Assess new hearing symptoms because meningitis itself can also injure hearing. Ceftriaxone has calcium/IV compatibility and neonatal restrictions; combined severe renal/hepatic dysfunction needs specialist dosing review.']] },
          { title: 'Dexamethasone', fields: [['Monitor', 'Hyperglycemia, insomnia, mood change, GI irritation/bleeding, infection, and fluid/electrolyte effects. Check glucose, I&O, weight/labs as indicated.'], ['Individualize', 'Stress-ulcer prophylaxis with a PPI/H2 blocker depends on GI/critical-care risk; it is not automatically required for every short dexamethasone course. Do not assume a fixed sodium/potassium pattern in every patient.']] },
          { title: 'Mannitol / hypertonic saline', fields: [['Monitor', 'Fluid shifts, hypotension or volume excess, dehydration, electrolyte/osmolar disturbances, and AKI. Mannitol can cause marked diuresis and may accumulate; rebound edema is a potential risk, not a reason to invent a universal taper.'], ['Safety', 'Use specialist targets, response, fluid status, kidney function, and osmolar/osmolality trends. A serum osmolality below 320 mOsm/kg is not a stand-alone guarantee of safety or universal stopping threshold.']] },
          { title: 'Antiseizure treatment', fields: [['Phenytoin', 'Hypotension, arrhythmias, and tissue injury can occur with IV administration. The adult IV rate must not exceed 50 mg/min and may need to be slower; monitor ECG, BP, breathing, and the IV site during/after administration. Pediatric limits differ. Watch for ataxia/nystagmus, serious rash, and, with longer use, gingival overgrowth; reinforce oral care.'], ['Levetiracetam / rescue benzodiazepines', 'Levetiracetam may cause somnolence, dizziness, or behavioral/mood change and needs renal dose review. Benzodiazepines may depress breathing; be ready to support ventilation.']] },
          { title: 'LP and disease complications', fields: [['LP', 'Post-dural-puncture headache, bleeding/hematoma, infection, back/radicular pain, and CSF leakage. Herniation risk relates to dangerous intracranial pressure gradients/underlying pathology; clinical assessment remains essential even after a normal CT.'], ['Meningitis', 'Raised ICP/hydrocephalus, seizures, stroke, hearing loss, cognitive/balance problems, septic shock, DIC, or limb/skin injury from meningococcal sepsis need monitoring and follow-up.']] }
        ] }
      ],
      nutrition: [
        { type: 'paragraph', text: 'There is no special diet that treats meningitis. Assess recent intake, weight, hydration, vomiting, alertness, swallowing ability, and the metabolic demands of fever/critical illness. Involve a dietitian if intake is poor, nutrition risk is present, or tube feeding may be needed.' },
        { type: 'list', items: ['If alert with a safe swallow, offer tolerated meals with adequate energy/protein, smaller portions as needed, and prescribed fluids. Manage nausea and provide oral care.', 'With reduced consciousness, active seizures, unsafe swallowing, or airway instability, avoid oral food, fluids, and medicines until a safe route is established. NPO does not mean withholding urgent IV antibiotics or necessary IV fluids.', 'For a critically ill patient who cannot eat, consider enteral support once stabilized and safe under the care plan; do not force feeding during uncontrolled shock. Use aspiration precautions and monitor tolerance.', 'Individualize hydration and sodium management. Do not encourage unlimited fluid intake after LP or restrict fluids automatically for meningitis; monitor I&O, sodium, glucose, renal function, and weight trends.', 'During recovery, support adequate intake and gradual return to usual meals; reassess feeding support if neurological deficits or persistent nausea limit intake.'] }
      ],
      assessment: [
        { type: 'callout', title: 'Priority: ABCs, neurological change, and sepsis', text: 'Assess airway protection, respiratory effort/oxygenation, perfusion, and level of consciousness immediately. Falling GCS, abnormal pupils, a rapidly spreading purpuric rash, shock, or ongoing seizures require emergency escalation. Do not wait for Cushing’s triad or a positive meningeal sign.' },
        { type: 'cards', items: [
          { title: 'Neurological status', fields: [['Assess', 'Baseline and serial GCS/alertness, orientation/behavior, pupils, limb movement, focal deficits, cranial nerve changes, headache/photophobia, and seizures. Compare trends and account for sedating medicines.'], ['Frequency', 'Continuous monitoring or very frequent checks may be needed when unstable. The original q15–30 minutes initially and q2–4 hours later are examples, not a universal safe schedule; follow acuity, critical-care orders, and escalation policy.']] },
          { title: 'Breathing and circulation', fields: [['Assess', 'Airway reflexes, respiratory pattern, SpO₂, ordered blood gases, BP/pulse, capillary refill, extremity temperature, urine output, and lactate/perfusion trends when ordered.'], ['Escalate', 'Shock or falling consciousness may require invasive monitoring, vasopressors, or ventilation. An arterial line is useful for selected unstable patients, not necessary for every case.']] },
          { title: 'Infection, skin, and history', fields: [['Assess', 'Temperature, rash evolution/non-blanching lesions, bruising/bleeding, recent infections, travel/contacts, vaccination, immune status, pregnancy, skull defects/CSF leak, neurosurgery, antibiotics already taken, and allergy details.'], ['Act', 'Document times of recognition, cultures, antibiotics, steroid administration, and precautions. Report suspected meningococcal disease promptly through the local infection/public-health pathway.']] },
          { title: 'Fluid, treatment, and function', fields: [['Assess', 'I&O, daily weight as indicated, sodium/osmolality, glucose, renal function, nutrition, swallowing, IV/LP sites, medication toxicity, mobility/skin risk, hearing, balance, memory, and patient/family needs.'], ['Interpret', 'Hyponatremia can have several causes. Assess volume status; fluid restriction for presumed SIADH can be harmful if the person is hypovolemic.']] }
        ] }
      ],
      diagnoses: [
        { type: 'paragraph', text: 'Select nursing diagnoses from the actual findings using your program’s terminology; not every patient has each problem.' },
        { type: 'list', items: ['Risk for ineffective cerebral tissue perfusion related to inflammation, edema, or reduced perfusion; describe actual neurological findings when present.', 'Acute pain related to meningeal irritation, evidenced by headache/photophobia when present.', 'Hyperthermia related to infection when temperature is elevated.', 'Acute confusion related to CNS infection or physiological disturbance when supported by assessment.', 'Ineffective airway clearance, ineffective breathing pattern, or impaired gas exchange when the assessment supports them; risk for aspiration with impaired consciousness/swallowing.', 'Inadequate fluid volume or risk for fluid/electrolyte imbalance based on losses, intake, renal function, and sodium/volume findings.', 'Risk for injury related to seizures, falls, or neurological impairment; risk for pressure injury with immobility.', 'Inadequate nutritional intake, anxiety, or learning/support needs as supported by the patient’s condition.'] }
      ],
      priorities: [
        { type: 'callout', title: 'The nurse’s first action', text: 'Rapidly assess ABCs and consciousness, call for urgent medical/emergency help, and initiate indicated precautions concurrently. If the airway is unprotected, a seizure is ongoing, or shock is present, immediate stabilization takes priority. Do not make “isolate first” or “draw blood first” an absolute rule that delays resuscitation.' },
        { type: 'list', items: ['Deliver urgent treatment: obtain IV access and blood cultures promptly, give ordered empiric antibiotics without waiting for imaging or delayed LP, and coordinate indicated dexamethasone with the first dose.', 'Detect neurological deterioration: trend GCS/pupils/focal findings, protect cerebral perfusion, use appropriate head positioning, and escalate suspected raised ICP or herniation immediately.', 'Support breathing and perfusion: oxygen/ventilation, fluid resuscitation, and other critical-care support according to findings and orders. Monitor for shock and DIC.', 'Prevent transmission: Standard plus Droplet when meningococcus/Hib is suspected, timely infection prevention/public-health involvement, and eligible contact prophylaxis.', 'Prevent secondary harm: seizure safety, safe nutrition/medication routes, fluid/sodium and drug monitoring, skin protection, and follow-up for hearing/neurological sequelae.'] }
      ],
      plan: [
        {
          "type": "paragraph",
          "text": "Set time-linked goals based on severity and baseline function, then reassess frequently. The emergency goals come before recovery teaching."
        },
        {
          "type": "cards",
          "items": [
            {
              "title": "1. Immediate physiological and neurological safety",
              "fields": [
                [
                  "Goal",
                  "Maintain an adequately protected airway, effective ventilation/oxygenation, and perfusion using individualized targets and prompt escalation. Maintain or improve consciousness/pupillary and focal findings, identify raised ICP early, and control seizures if they occur."
                ],
                [
                  "Actions",
                  "Monitor ABCs, perfusion, consciousness, pupils and seizures; support prescribed stabilization and head positioning and escalate neurological decline promptly."
                ],
                [
                  "Evaluate",
                  "Airway, oxygenation/perfusion and neurological findings stabilize or improve, with seizures controlled and deterioration recognized promptly."
                ]
              ]
            },
            {
              "title": "2. Infection treatment and transmission prevention",
              "fields": [
                [
                  "Goal",
                  "Administer prescribed antibiotics urgently and reliably, with an organism-specific plan once results return. Apply organism-appropriate precautions and complete public-health contact assessment/prophylaxis when indicated."
                ],
                [
                  "Actions",
                  "Obtain timely samples without delaying prescribed antibiotics, coordinate indicated dexamethasone, and use organism-specific precautions and public-health contact management."
                ],
                [
                  "Evaluate",
                  "Urgent antimicrobial doses and appropriate precautions are documented; clinical response, treatment safety and eligible-contact follow-through are reviewed."
                ]
              ]
            },
            {
              "title": "3. Comfort, fluids and safe nutrition",
              "fields": [
                [
                  "Goal",
                  "Reduce headache, photophobia, fever-related distress, and nausea without unacceptable sedation or treatment toxicity. Maintain appropriate fluid, sodium, glucose, renal function, and nutrition with a safe feeding/medication route."
                ],
                [
                  "Actions",
                  "Reassess prescribed pain/fever/nausea relief and sedation; monitor intake/output, sodium/glucose/renal trends and a safe nutrition/medicine route."
                ],
                [
                  "Evaluate",
                  "Distress improves while alertness/breathing remain acceptable, and individualized fluid, laboratory and nutrition goals are met without avoidable harm."
                ]
              ]
            },
            {
              "title": "4. Recovery and discharge",
              "fields": [
                [
                  "Goal",
                  "Before discharge, confirm medication skills, warning-sign recognition, follow-up/hearing assessment, rehabilitation needs, and a gradual recovery plan with the patient/family."
                ],
                [
                  "Actions",
                  "Use teach-back for medicines and emergency signs; arrange hearing/clinical follow-up, rehabilitation and individualized gradual activity with the patient/family."
                ],
                [
                  "Evaluate",
                  "The patient/family explains the home plan and warning signs, and hearing, neurological/functional and support follow-up are arranged."
                ]
              ]
            }
          ]
        }
      ],
      interventions: [
        { type: 'heading', text: 'Immediate stabilization and treatment' },
        { type: 'paragraph', text: 'Activate the appropriate response for acute deterioration. Support airway/breathing and prescribed oxygen/ventilation, establish IV access, obtain timely samples, and administer antibiotics and indicated dexamethasone. Assess allergies and document actual times. Prepare for LP only after the clinician confirms safety; treatment must continue if LP is deferred.' },
        { type: 'heading', text: 'Neurological, seizure, and ICP care' },
        { type: 'paragraph', text: 'Perform ordered neuro/vital checks and escalate any decline from baseline. Elevate the head about 30° with neutral alignment when appropriate, reduce excessive stimulation, and maintain oxygenation/perfusion. Keep emergency suction/oxygen ready; protect and time seizures, give rescue medicines as ordered, and monitor recovery. Severe ICP treatment belongs in an urgent critical-care plan, not routine unsupervised mannitol administration.' },
        { type: 'heading', text: 'Precautions and exposure response' },
        { type: 'paragraph', text: 'Use the required room/PPE, hand hygiene, and transport masking; reassess duration with the organism and effective-treatment timing. Coordinate exposure assessment and prophylaxis through infection prevention/public health, rather than promising antibiotics to everyone who entered the room.' },
        { type: 'heading', text: 'Fever, comfort, fluids, and daily care' },
        { type: 'paragraph', text: 'Give prescribed analgesia/antipyretics and antiemetics; reassess pain, alertness, breathing, and temperature. Avoid shivering from overcooling. Track I&O, weight/laboratory trends, shock or fluid overload, sodium/glucose changes, and medication/IV-site effects. Maintain oral care, safe nutrition, gentle mobility, pressure relief, and skin assessment; provide assistance to reduce falls and exhaustion.' },
        { type: 'heading', text: 'Recovery, discharge, and home care' },
        { type: 'paragraph', text: 'Review the medicine list, schedule, duration, and any home IV-antibiotic arrangements with teach-back. Arrange hearing and clinical follow-up, plus PT, OT, home nursing, cognitive/psychological support, or school/work adjustments if needed. Recommend quiet rest as helpful, gradually increasing activity, and individualized advice on driving, work, or school. Explain whom to contact for worsening symptoms or new hearing, memory, or balance difficulties.' }
      ],
      education: [
        { type: 'list', items: ['Seek emergency assessment for severe/worsening headache, fever with stiff neck or confusion, a new seizure, reduced consciousness, or a non-blanching/purpuric rash. Do not wait for all classic symptoms or for a rash to appear.', 'For infants, seek urgent help for poor feeding, unusual lethargy/irritability, temperature instability, a bulging fontanelle, apnea, or seizures.', 'Complete the prescribed antibiotic course exactly as directed and attend any IV-treatment monitoring. Report severe diarrhea, allergic symptoms, blistering rash, new kidney/urine changes, or hearing symptoms.', 'Understand the specific isolation plan. Meningococcal/Hib droplet precautions generally continue until 24 hours of effective antibiotics; confirmed other causes can require different precautions.', 'Eligible meningococcal close contacts need prompt prophylaxis even if vaccinated. Follow public-health advice on the right medicine and timing; casual contact does not automatically require antibiotics.', 'Use hand hygiene, respiratory etiquette, avoid saliva-sharing, and keep recommended Hib, pneumococcal, and meningococcal vaccines current. MenACWY and MenB protect against different serogroups and have different schedules/indications.', 'After LP, follow individualized activity/comfort instructions and maintain appropriate hydration. Report persistent/severe positional headache, site leakage, fever, increasing back pain, leg weakness/numbness, or other new neurological symptoms.', 'Use prescribed pain/fever medicines safely; ask about NSAIDs if bleeding risk, kidney injury, dehydration, or other contraindications are present. Do not add sedating medicines without review.', 'Recovery may include fatigue and cognitive, emotional, hearing, or balance problems. Increase activity gradually; obtain individualized advice before driving or resuming demanding work/school. Attend follow-up and hearing assessment, even if the acute infection has improved.'] }
      ],
      evaluation: [
        { type: 'list', items: ['Airway, ventilation/oxygenation, BP/perfusion, and urine output are stable or improving within the individualized plan, without untreated shock or DIC.', 'GCS/mental status and pupils/focal findings are stable or return toward baseline, with seizures controlled and no new signs of herniation. Absence of Cushing’s triad or negative Kernig/Brudzinski signs alone does not prove recovery.', 'Headache, photophobia, nausea, fever, and distress improve, and clinical/laboratory trends support response to treatment. Repeat blood cultures or LP are obtained only when clinically indicated, not as mandatory proof of cure in every improving case.', 'Fluid balance, sodium, glucose, renal function, and intake meet individualized goals without avoidable dehydration, fluid overload, aspiration, or treatment toxicity.', 'The patient tolerates the prescribed antimicrobial/adjunct plan; infusion reactions, renal/hearing changes, serious rash, GI bleeding, or other adverse effects are detected and addressed.', 'Correct precautions and eligible contact prophylaxis are documented, with an infection-prevention/public-health follow-through plan. Absence of a secondary case during a short admission is not the only measure of infection-control success.', 'The patient/family can explain medicines, emergency signs, and follow-up. Hearing assessment is arranged promptly once fit to test (ideally before discharge or within 4 weeks), with rehabilitation/support for residual hearing, neurological, cognitive, or functional problems.'] }
      ]
    },
    clarifications: [
      { title: 'Symptoms, triad, and pediatric wording', text: 'Clarified variable “triad” wording: fever, headache, neck stiffness, and altered mental status are all important warning features. No complete triad, rash, Kernig/Brudzinski sign, or Cushing’s triad is required to recognize disease. Fever plus seizure warrants assessment but is not automatically meningitis; infant findings can be subtle. Antipyretics are not a proven method of preventing febrile seizures.' },
      { title: 'LP safety and antibiotic timing', text: 'Removed “CT before every LP” and the suggestion that CT or fundoscopy alone rules out danger. Imaging and LP deferral depend on clinical findings and risk; stabilize first. Obtain cultures/CSF promptly when safe, but never delay antibiotics for a difficult sample, imaging, or delayed LP. Routine flat bed rest/extra fluids do not prevent post-LP headache.' },
      { title: 'Cause-specific precautions and contacts', text: 'Meningococcal/Hib disease requires Standard plus Droplet until 24 hours of effective therapy; other bacterial and viral causes have different rules, including Contact for selected young children/enterovirus. Mask on entry replaces a rigid distance rule; droplet precautions alone do not require a closed-door negative-pressure room. Prophylaxis is for eligible contacts, ideally within 24 hours of identifying the case, with local resistance considered.' },
      { title: 'Antibiotics, steroids, and monitoring', text: 'Penicillin G is a susceptibility-directed option, not a universal empiric combination. Listeria coverage depends on age and other risks; a single “50+” threshold is not universal. Dexamethasone timing is important, but antibiotics must never wait for it, and a missed first dose needs prompt specialist guidance rather than an absolute “too late.” Cephalosporin renal adjustments and alcohol advice are drug-specific, not universal class rules. Vancomycin monitoring follows the CNS-infection protocol.' },
      { title: 'ICP, fluids, seizures, and analgesia', text: 'Separated communicating hydrocephalus from obstruction. Avoided automatic SIADH fluid restriction, routine antiseizure prophylaxis, routine mannitol, and a universal 320-mOsm/kg safety cutoff. Severe ICP deterioration needs critical care. Opioid risks are substantial with impaired breathing/consciousness but “all opioids contraindicated in every meningitis case” is too broad. GI protection and check frequency depend on the patient’s risks and acuity.' },
      { title: 'Completed and reorganized sections', text: 'Preserved the original disease findings, LP steps, medicines, complications, prevention, and discharge advice while merging repeated passages. Completed nutrition, nursing diagnoses, priorities, and measurable care goals. Shifted patient teaching from the intervention heading into education and retained clinical recovery/follow-up, rather than requiring routine repeat cultures or LP for every patient.' }
    ],
    references: [
      { title: 'WHO · Meningitis diagnosis, treatment and care, 2025', url: 'https://www.who.int/publications/i/item/9789240108042', supports: 'Current community-acquired meningitis framework, diagnostic safety, empiric antibiotics/Listeria coverage, fluid care, and specialist management of complications.' },
      { title: 'NICE NG240 · Bacterial meningitis and meningococcal disease', url: 'https://www.nice.org.uk/guidance/ng240/chapter/recommendations', supports: 'Urgent antibiotics, selective neuroimaging/LP, dexamethasone timing, clinical recognition, and hearing/recovery follow-up.' },
      { title: 'UCSF · Meningitis treatment guidance', url: 'https://idmp.ucsf.edu/content/meningitis-0', supports: 'Empiric/targeted treatment, resistant pneumococcal coverage, steroid regimen context, and delayed-LP treatment sequencing.' },
      { title: 'NIH / NINDS · Meningitis and encephalitis', url: 'https://health.nih.gov/health-topics-a-z/meningitis-and-encephalitis', supports: 'Causes, symptoms, diagnostic context, and disease-specific care.' },
      { title: 'CDC · About meningitis', url: 'https://www.cdc.gov/meningitis/about/index.html', supports: 'Infectious and non-infectious causes, transmission differences, and need for prompt assessment.' },
      { title: 'CDC · Viral meningitis', url: 'https://www.cdc.gov/meningitis/about/viral-meningitis.html', supports: 'Common viruses, severity/risk variation, and supportive versus specific treatment.' },
      { title: 'CDC · HSV treatment guidance', url: 'https://www.cdc.gov/std/treatment-guidelines/herpes.htm', supports: 'Antiviral treatment for HSV CNS complications rather than assuming all viral meningitis is self-limited.' },
      { title: 'DailyMed · Acyclovir injection', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=69a98000-adef-4323-89a7-09e035a257d4', supports: 'Adequate hydration, infusion safety, and renal dose/monitoring considerations.' },
      { title: 'CDC · Organism-specific isolation precautions', url: 'https://www.cdc.gov/infection-control/hcp/isolation-precautions/appendix-a-type-duration.html', supports: 'Meningococcal/Hib droplet duration, other bacterial Standard Precautions, viral/enteroviral Contact indications, and TB context.' },
      { title: 'CDC · Isolation recommendations and droplet PPE', url: 'https://www.cdc.gov/infection-control/hcp/isolation-precautions/recommendations.html', supports: 'Mask on entry, patient placement, transport precautions, and distinction from airborne-room requirements.' },
      { title: 'CDC · Meningococcal exposure management for healthcare staff', url: 'https://www.cdc.gov/infection-control/hcp/healthcare-personnel-epidemiology-control/meningococcal-disease.html', supports: 'Qualifying secretion/airway exposures, contact prophylaxis, and timing after index-case identification.' },
      { title: 'CDC · Meningococcal surveillance manual', url: 'https://www.cdc.gov/surv-manual/php/table-of-contents/chapter-8-meningococcal-disease.html', supports: 'Eligible contacts, prophylaxis regimens, and vaccination-independent prophylaxis.' },
      { title: 'CDC · Antibiotic-resistant meningococcus', url: 'https://www.cdc.gov/meningococcal/php/antibiotic-resistant/index.html', supports: 'Alternatives to ciprofloxacin for prophylaxis where resistance warrants.' },
      { title: 'CDC · Current meningococcal vaccine recommendations', url: 'https://www.cdc.gov/meningococcal/hcp/vaccine-recommendations/index.html', supports: 'MenACWY routine timing, MenB shared decision-making/increased-risk use, and combination vaccines.' },
      { title: 'Royal Children’s Hospital · Lumbar puncture guideline', url: 'https://www.rch.org.au/clinicalguide/guideline_index/lumbar_puncture_guideline/', supports: 'Contraindications, safe positioning, clinical safety despite a normal CT, and procedural care.' },
      { title: 'Cochrane review · Posture/fluids and post-LP headache', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6682345/', supports: 'Lack of evidence for preventive bed rest or extra fluid supplementation after dural puncture.' },
      { title: 'Multisociety guidance · Post-dural-puncture headache', url: 'https://rapm.bmj.com/content/49/7/471', supports: 'Assessment, comfort measures, and escalation for persistent or severe post-procedure headache.' },
      { title: 'DailyMed · Ceftriaxone', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8351aa37-552d-471d-b293-c564dcb6ec29', supports: 'Hypersensitivity/C. difficile, IV calcium compatibility, and drug-specific renal/hepatic precautions.' },
      { title: 'FDA · Vancomycin injection label, 2026', url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/050671s043lbl.pdf', supports: 'Infusion reactions, kidney/hearing toxicity, serious skin reactions, and monitoring.' },
      { title: 'ASHP / IDSA · Vancomycin therapeutic monitoring', url: 'https://www.idsociety.org/practice-guideline/vancomycin', supports: 'AUC-guided serious-MRSA monitoring and limits on extrapolation to other infections.' },
      { title: 'Neurocritical Care Society · Cerebral edema guideline', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7272487/', supports: 'Hyperosmolar therapy safety, renal/volume/osmolar monitoring, and limitations of a fixed 320-mOsm/kg threshold.' },
      { title: 'DailyMed · IV phenytoin', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=035a8d4e-2063-4240-83cb-d7eebcabe301', supports: 'Adult infusion-rate limit, ECG/BP/respiratory monitoring, and severe adverse effects.' },
      { title: 'DailyMed · Levetiracetam injection', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8bf7c1ce-dfc4-457f-8a8b-365f82aa8512', supports: 'Somnolence, behavioral effects, and renal dosing considerations.' },
      { title: 'FDA · Morphine sulfate injection label', url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/202515s046lbl.pdf', supports: 'Respiratory/CO₂, hypotension, raised-ICP, and impaired-consciousness risks informing individualized analgesia.' },
      { title: 'NICE NG143 · Fever in children under 5', url: 'https://www.nice.org.uk/guidance/ng143/chapter/recommendations', supports: 'Avoiding routine tepid sponging and distinguishing comfort-oriented antipyretics from seizure prevention.' },
      { title: 'Royal Children’s Hospital · Febrile seizures', url: 'https://www.rch.org.au/clinicalguide/guideline_index/Febrile_seizure/', supports: 'Distinguishing febrile seizures from CNS infection and assessing concerning features.' },
      { title: 'ASPEN · Enteral nutrition indications', url: 'https://nutritioncare.org/wp-content/uploads/2024/12/Malnutrition-EN-Indication.pdf', supports: 'Nutrition risk assessment and appropriate enteral support when oral intake is inadequate.' }
    ]
  },
  als: {
    title: 'Amyotrophic lateral sclerosis', abbreviation: 'ALS', week: 8, deck: 'als',
    reviewed: 'November 15, 2026',
    reading: 'Course study guide: ALS—clinical manifestations, priority assessment, and “CAM for communicating.” This page uses AAC (augmentative and alternative communication) for assistive communication. B&S textbook: Chapter 65, ALS section. Based on your supplied ALS notes, with missing care-plan detail and clinical corrections supported below.',
    focus: [
      { section: 'manifestations', label: 'Clinical manifestations' },
      { section: 'assessment', label: 'Priority respiratory assessment' },
      { section: 'nonpharmacological', label: 'Communication tools (AAC / “CAM”)' }
    ],
    content: {
      overview: [
        { type: 'paragraph', text: 'Amyotrophic lateral sclerosis (ALS) is a progressive neurodegenerative motor neuron disease. It affects upper motor neurons in the brain’s motor cortex and lower motor neurons in the brainstem and spinal cord. As these neurons degenerate, signals to voluntary muscles are lost, producing weakness, wasting (atrophy), and increasing functional limitations.' },
        { type: 'heading', text: 'Upper and lower motor neuron findings' },
        { type: 'paragraph', text: 'Upper motor neuron dysfunction can cause spasticity and brisk reflexes; lower motor neuron loss causes weakness, atrophy, and fasciculations. Both patterns may coexist. Limb-onset disease may first affect a hand or foot; bulbar-onset disease first affects speech or swallowing. Respiratory muscles can become involved at any stage.' },
        { type: 'paragraph', text: 'Most cases have no single identified cause, while some have an identifiable genetic contribution. ALS is not contagious. Sensation is often relatively preserved, but thinking, language, or behavior can change, including frontotemporal dementia in some people. Loss of speech or movement must never be assumed to mean loss of understanding.' }
      ],
      manifestations: [
        { type: 'heading', text: 'Progressive motor findings' },
        { type: 'list', items: ['Gradual weakness of a hand, arm, leg, or foot, often initially asymmetric, with new difficulty in ADLs.', 'Tripping, foot drop, difficulty walking/transferring, or loss of fine-motor control that may feel like poor coordination.', 'Muscle cramps, fasciculations (small involuntary muscle twitches), and progressive muscle wasting.', 'Spasticity, stiffness, and hyperreflexia from upper motor neuron involvement, alongside lower motor neuron findings.', 'Fatigue and increasing dependence as weakness progresses; the pattern and rate vary between people.'] },
        { type: 'heading', text: 'Bulbar, communication, and respiratory findings' },
        { type: 'list', items: ['Dysarthria: slurred, strained, weak, or otherwise difficult speech. “Dysrhythmia” means an abnormal rhythm and was corrected to dysarthria in the speech notes.', 'Dysphagia, chewing fatigue, drooling/pooled saliva, choking, or difficulty handling secretions. Tongue weakness, atrophy, or fasciculations may be present.', 'A weaker cough, difficulty blowing the nose, and reduced ability to generate a strong voluntary laugh or other forceful expiratory action.', 'Shortness of breath, orthopnea, shallow breathing, sleep disturbance, morning headache, daytime sleepiness, or reduced cough effectiveness as respiratory muscles weaken.', 'Pseudobulbar affect can cause involuntary laughing or crying out of proportion to mood. This is different from depression or weakness of voluntary laughter.'] },
        { type: 'paragraph', text: 'Progressive neuromuscular respiratory failure is a major life-limiting complication. Aspiration and chest infection can further compromise breathing. New acute deterioration also requires assessment for treatable causes rather than being dismissed as inevitable ALS progression.' }
      ],
      risk: [
        { type: 'heading', text: 'Established context and genetic risk' },
        { type: 'list', items: ['Risk increases with age; ALS commonly starts in middle or later adulthood but is not restricted to ages 40–60. It affects people of all ethnic backgrounds.', 'ALS is more common in men in some age groups; sex differences vary with age.', 'Most people have no clear family history. Around 10% of cases are described as familial in NIH information, with estimates varying by definition and population. A disease-associated variant can also be found without an obvious family history.', 'Many inherited forms show autosomal dominant transmission, but ALS genetics is more varied than “one affected parent always passes it on.” Offer genetic counseling and discussion of testing regardless of family history; a result can affect treatment eligibility, including SOD1-directed therapy.'] },
        { type: 'heading', text: 'Risk associations are not proven prevention rules' },
        { type: 'paragraph', text: 'Smoking, environmental/occupational exposures, body weight, and trauma have been studied, but the causes of most ALS remain uncertain. Autoimmune disease, excessive alcohol, viral infections, or low BMI should not be presented as an established causal checklist for an individual patient. Low weight can also reflect the disease and is important to address during care.' },
        { type: 'paragraph', text: 'Smoking cessation, sensible exposure protection, and appropriate helmets/injury prevention support general health. They have not been proven to prevent ALS. Do not promise that avoiding pesticides/lead or preventing a spinal cord/head injury will eliminate ALS risk. In established ALS, prevention focuses on avoidable complications and maintaining comfort and function.' }
      ],
      diagnostics: [
        { type: 'paragraph', text: 'An experienced neurologist diagnoses ALS from progressive motor impairment, examination findings, and investigations that support motor neuron involvement and exclude mimics. There is no single routine blood test that independently confirms every case. Genetic results may identify a cause or treatment target but are interpreted within the clinical assessment.' },
        { type: 'cards', items: [
          { title: 'Neurological examination and functional assessment', fields: [['Purpose', 'Assess upper/lower motor neuron findings, distribution and progression of weakness, bulbar function, respiratory symptoms, and alternative explanations.'], ['Nursing role', 'Record the baseline, symptom timeline, asymmetry, falls, ADLs, weight, communication, and care-partner observations. Functional scales such as ALSFRS-R may help track change.']] },
          { title: 'EMG and nerve conduction studies', fields: [['Purpose', 'EMG assesses muscle electrical activity for evidence of denervation/reinnervation. Nerve conduction studies help characterize nerve function and investigate mimics, including treatable neuropathies. Results support the diagnosis rather than replacing the clinical evaluation.'], ['Before', 'Explain the procedure and verify consent requirements under local policy. Avoid skin creams/oils that interfere with surface electrodes. Tell the examiner about implanted electrical devices, bleeding disorders, and anticoagulants; do not stop medicines independently. Follow the laboratory’s specific caffeine/smoking instructions rather than applying a universal restriction.'], ['During', 'Support comfortable positioning and breathing; a person with orthopnea may not tolerate lying flat. Provide reassurance, rest/support as needed, and monitor symptoms according to the clinical situation.'], ['After', 'Check needle sites for bleeding, bruising, or hematoma. Mild soreness may occur; offer approved comfort measures/analgesia if needed. Arrange further support and follow-up rather than assuming the nurse independently prescribes it.']] },
          { title: 'Other investigations and genetic testing', fields: [['Purpose', 'MRI and blood/other tests may identify alternative causes of weakness. Genetic counseling/testing can identify ALS-associated variants, including SOD1, C9orf72, and others.'], ['Nursing role', 'Prepare for the actual ordered tests and support informed discussion of results, family implications, and available counseling. Do not imply every familial case has the same mutation or inheritance pattern.']] },
          { title: 'Respiratory and swallowing assessments', fields: [['Purpose', 'Serial FVC or slow vital capacity, inspiratory-pressure measures such as NIF/MIP or SNIP, cough assessment, and sleep/CO₂ testing when indicated guide respiratory care. SLP assessment and selected instrumental swallowing studies evaluate feeding safety.'], ['Nursing role', 'Track trends and symptoms, report changes promptly, and recognize that weak lip seal/bulbar impairment can affect test reliability. Normal daytime SpO₂ does not exclude nocturnal or progressive hypoventilation.']] }
        ] }
      ],
      medical: [
        { type: 'heading', text: 'Goals and setting of care' },
        { type: 'paragraph', text: 'Management aims to preserve function, communication, autonomy, wellbeing, and quality of life while discussing treatments that may alter disease course. Much care occurs at home and in the community, with hospitalization when acute problems or complex procedures require it. A multidisciplinary ALS team coordinates medical, nursing, respiratory, nutrition, rehabilitation, and psychosocial care.' },
        { type: 'heading', text: 'Disease-directed and symptom treatment' },
        { type: 'paragraph', text: 'Discuss riluzole, US-approved edaravone, and SOD1-specific tofersen when appropriate, including expected benefits, uncertainties, burden, access, and monitoring. Manage spasticity, cramps, saliva, pain, mood, pseudobulbar affect, constipation, and fatigue individually. None of these is a cure or guarantees preservation of current function.' },
        { type: 'heading', text: 'Respiratory and nutritional support' },
        { type: 'paragraph', text: 'Progressive respiratory weakness can cause alveolar hypoventilation and CO₂ retention. Offer timely assessment for non-invasive ventilation (NIV), cough augmentation, and secretion support; discuss invasive ventilation according to the patient’s wishes. Consider gastrostomy early and revisit it as swallowing, intake, weight, respiratory function, and preferences change.' },
        { type: 'heading', text: 'Palliative care and advance planning' },
        { type: 'paragraph', text: 'Palliative care can accompany disease-directed treatment, NIV, or invasive ventilation. It is not an either/or alternative reserved for the final days. Discuss advance directives, emergency plans, decision-making support, tracheostomy/ventilation preferences, and hospice when appropriate before a crisis limits communication or choices.' }
      ],
      medications: [
        { type: 'heading', text: 'Disease-directed therapies' },
        { type: 'cards', items: [
          { title: 'Riluzole (Rilutek and other formulations)', fields: [['Purpose and mechanism', 'May modestly prolong survival. It is thought to affect glutamatergic/excitotoxic pathways, but the exact therapeutic mechanism is not established. The roughly 2–3-month benefit in the original notes reflects group differences in classic trials, not a prediction of an individual’s lifespan.'], ['Nursing considerations', 'Check liver tests and the prescribed formulation, feeding-route compatibility, and food timing. Review alcohol and other liver-toxic exposures with the care team. Monitor weakness/fatigue, nausea, dizziness, and new symptoms.']] },
          { title: 'Edaravone (Radicava / Radicava ORS)', fields: [['Purpose', 'An antioxidant/free-radical scavenger approved in the US for ALS; trials showed slower functional decline in a selected population. Benefit varies, and recommendations differ by region—European guidance has been more cautious about use outside trials.'], ['Administration and safety', 'Available as IV therapy or oral suspension. Follow the cyclic schedule and formulation-specific fasting/tube instructions. Monitor hypersensitivity, including sulfite reactions; this is sulfite sensitivity, not automatically the same as a sulfonamide antibiotic allergy.']] },
          { title: 'Tofersen (Qalsody)', fields: [['Who it is for', 'Adults with ALS associated with a SOD1 mutation. This antisense oligonucleotide reduces production of SOD1 protein and is administered intrathecally by a trained team.'], ['Evidence and safety', 'The current US label describes accelerated approval based on reduced plasma neurofilament light chain, with clinical benefit subject to confirmation. It is not a treatment for every genetic or sporadic ALS case. Monitor post-lumbar-puncture symptoms and serious neurological adverse effects.']] }
        ] },
        { type: 'heading', text: 'Symptom-directed medicines from your notes' },
        { type: 'cards', items: [
          { title: 'Spasticity', fields: [['Examples', 'Baclofen or tizanidine may be selected. Dantrolene sodium and diazepam appear in the original notes but require particular caution because weakness, sedation, or respiratory depression may outweigh benefit. “Dantrolene sodium” is one medicine; sodium is not a separate ALS spasticity drug.'], ['Nursing role', 'Assess benefit against remaining strength, transfers, alertness, and breathing. Baclofen must not be stopped abruptly. Tizanidine also needs a supervised taper when indicated, but its withdrawal pattern differs.']] },
          { title: 'Sialorrhea (pooled or excessive saliva)', fields: [['Examples', 'Glycopyrrolate, prescribed sublingual atropine drops, amitriptyline, or selected salivary-gland botulinum toxin injections may reduce symptoms. Some uses are off-label and require an explicit prescription and route.'], ['Nursing role', 'Balance relief against dry mouth, constipation, urinary retention, confusion, and thickened secretions. Drooling often reflects impaired swallowing/clearance rather than overproduction; reducing saliva does not guarantee prevention of aspiration.']] },
          { title: 'Pseudobulbar affect', fields: [['Example', 'Dextromethorphan/quinidine (Nuedexta) may reduce involuntary laughing/crying.'], ['Nursing role', 'Review cardiac history, QT-related contraindications, and interactions, including serotonergic medicines such as some antidepressants. Distinguish pseudobulbar affect from mood symptoms.']] },
          { title: 'Cramps and fatigue', fields: [['Cramps', 'Mexiletine or other selected medicines, including gabapentin in some care plans, may be considered. These are symptom treatments, not proven disease-modifying therapies. Mexiletine needs cardiac/interaction review.'], ['Fatigue', 'Investigate hypoventilation, sleep, nutrition, mood, and medication effects first. Modafinil has limited evidence from small ALS studies and may be an off-label specialist option, not a standard replacement for treating these causes.']] }
        ] }
      ],
      nonpharmacological: [
        { type: 'heading', text: 'Communication tools: AAC and the guide’s “CAM” focus' },
        { type: 'paragraph', text: 'Augmentative and alternative communication (AAC) is the standard term for tools that supplement or replace speech. Assess communication early and repeatedly with SLP/assistive-technology services. Match access to current motor, visual, cognitive, language, and respiratory abilities rather than waiting for complete loss of speech or hand use.' },
        { type: 'cards', items: [
          { title: 'While speech is still intelligible', fields: [['Options', 'Voice banking records material to help create a personalized synthetic voice; message banking saves the person’s own recordings of meaningful phrases. Offer these early if wanted. Voice amplifiers, shorter messages, rest, and a quieter environment may reduce effort.']] },
          { title: 'When speech is difficult and hand use is available', fields: [['Options', 'Pen/paper, dry-erase whiteboards, alphabet or picture boards, yes/no cards, tablets, smartphones, predictive text, and text-to-speech applications. Plan a reliable way to request help.']] },
          { title: 'When hand access becomes limited', fields: [['Options', 'Eye-gaze systems, head tracking, accessible switches, blink/facial signals, or partner-assisted scanning can support selection and speech generation. Eye movement is often relatively preserved but must be assessed; eye fatigue, visual problems, and cognitive changes can limit use.'], ['Access caution', 'Sip-and-puff access requires sufficient breathing ability and may not suit advanced respiratory weakness. Brain–computer interfaces are specialized/emerging options rather than the same thing as routine head/blink switches; availability and suitability require expert review. Keep a low-tech backup.']] },
          { title: 'Complementary comfort approaches', fields: [['Role', 'Guided imagery, music, relaxation, and appropriately gentle anxiety-management strategies may improve comfort. They do not replace AAC, secretion care, ventilatory support, or treatment of dyspnea. Avoid exercises that exhaust weak respiratory muscles.']] }
        ] },
        { type: 'heading', text: 'Respiratory and secretion support' },
        { type: 'paragraph', text: 'Offer NIV, often bilevel support, when symptoms, signs, or tests indicate respiratory insufficiency; do not wait for a single FVC threshold or obvious daytime desaturation. Support mask fit, acclimatization, and equipment training. Cough augmentation may include breath stacking, manually assisted cough, and mechanical insufflation–exsufflation when indicated, with portable suction for accessible secretions. Respiratory therapy tailors techniques; chest physiotherapy or incentive spirometry alone cannot replace ventilation and effective cough support.' },
        { type: 'heading', text: 'Mobility, skin, and rehabilitation' },
        { type: 'paragraph', text: 'Use gentle individualized activity, stretching, and passive/active-assisted ROM to preserve comfort, flexibility, and function without prolonged exhaustion. PT/OT may recommend AFOs, a correctly fitted head/neck support, walkers, transfer aids, power wheelchairs, or home adaptations. Use pressure-redistributing surfaces, skin checks, and an individualized repositioning plan as mobility changes.' },
        { type: 'heading', text: 'Coordinated care' },
        { type: 'paragraph', text: 'Involve the ALS clinician/nurse, respiratory therapist, PT, OT, SLP, dietitian, social worker, mental-health support, and palliative-care team according to needs. Include caregivers with consent and reassess practical skills, equipment, home support, and respite needs.' }
      ],
      'adverse-effects': [
        { type: 'cards', items: [
          { title: 'Riluzole', fields: [['Common effects', 'Asthenia/fatigue, nausea, dizziness, and GI upset.'], ['Important monitoring', 'Check aminotransferases before treatment, monthly during the first 3 months, and periodically afterward under the current label. Watch for liver injury and review alcohol/other hepatotoxic exposures. Rare severe neutropenia means fever or sore throat needs prompt assessment; new lung symptoms may also require evaluation for drug-related lung disease.']] },
          { title: 'Edaravone', fields: [['Monitor', 'Bruising/contusion, gait disturbance, and headache. Hypersensitivity/anaphylaxis or sulfite-related reactions can occur; stop administration and obtain emergency treatment when indicated. For IV treatment, assess line infection, thrombosis, and access problems.']] },
          { title: 'Tofersen', fields: [['Monitor', 'Pain in muscles/joints, fatigue, and post-lumbar-puncture headache or back pain. Serious myelitis/radiculitis, aseptic meningitis, papilledema, and raised intracranial pressure are reported.'], ['Escalate', 'New severe/persistent headache, visual changes, fever/meningeal symptoms, or new neurological deficits require prompt assessment rather than being assumed to be ALS progression.']] },
          { title: 'Antispasticity medicines', fields: [['Baclofen', 'Drowsiness, dizziness, weakness, and falls may compromise remaining function. Abrupt withdrawal can cause rebound spasticity, high fever, hallucinations, seizures, and severe illness including rhabdomyolysis. Pump/refill interruption is urgent if intrathecal therapy is used.'], ['Tizanidine', 'Sedation, hypotension, weakness, and liver injury require monitoring. Withdrawal may cause rebound hypertension, tachycardia, and increased tone; do not assume its withdrawal syndrome is identical to baclofen’s.'], ['Dantrolene sodium / diazepam', 'Dantrolene can cause hepatotoxicity and additional weakness. Diazepam may cause sedation, falls, and respiratory depression; specialist selection is especially important with ventilatory weakness.']] },
          { title: 'Anticholinergics, botulinum toxin, and other symptom medicines', fields: [['Saliva treatments', 'Monitor dry mouth, constipation, urinary retention, blurred vision, confusion, and secretions that become too thick to clear. Botulinum toxin may also worsen swallowing or produce other weakness.'], ['Dextromethorphan/quinidine', 'Review QT prolongation/arrhythmia risk, contraindications such as heart failure, interactions, dizziness, and possible serotonin toxicity with interacting drugs.'], ['Cramps/fatigue treatments', 'Review sedation, balance, cardiac effects, and interactions for the actual prescribed drug; more alertness or fewer cramps is not useful if safety or ventilation worsens.']] },
          { title: 'NIV and gastrostomy', fields: [['NIV', 'Check nasal-bridge/face pressure injury, mask leaks, dry mucosa, eye irritation, bloating/aerophagia, secretion problems, and tolerance. Vomiting or inability to protect the airway with a mask requires urgent reassessment; NIV suitability and backup plans are individualized.'], ['Gastrostomy', 'Watch site infection, leakage, clogging/dislodgement, pain, feeding intolerance, reflux, hydration, and aspiration risk. Elevate the head of the bed for feeding as prescribed, commonly 30–45°; tube feeding does not eliminate aspiration.']] }
        ] }
      ],
      nutrition: [
        { type: 'heading', text: 'Prevent avoidable weight loss' },
        { type: 'paragraph', text: 'Dysphagia, fatigue, respiratory effort, impaired hand use, and reduced intake can lead to weight loss and dehydration. Hypermetabolism occurs in some people with ALS, but calorie requirements vary. A dietitian should assess energy/protein needs and weight trends rather than prescribing the same high-calorie diet to everyone.' },
        { type: 'list', items: ['Use nutrient-dense foods, shakes, added appropriate fats/oils, and smaller, frequent meals when needed to meet intake goals.', 'Maintain adequate protein and calories; avoid presenting a higher BMI as a guaranteed treatment that slows progression or deliberately promoting obesity.', 'Use adaptive equipment such as built-up handles, plate guards, supported utensils, or an electric toothbrush for oral care. Weighted utensils may be useful for selected problems but can increase effort with ALS weakness; OT should assess.'] },
        { type: 'heading', text: 'Swallowing precautions' },
        { type: 'paragraph', text: 'Use SLP assessment and the prescribed texture/liquid consistency. Soft, moist foods may help, but thin liquids, crumbly/sticky foods, or thickened liquids require individualized decisions. Sit upright close to 90° when tolerated with appropriate head/trunk support; remain upright afterward according to the care plan, often at least 30 minutes. Chin tuck is not universal. Rest before meals, allow time, and keep suction available when indicated. A gag check or absence of cough does not prove a safe swallow.' },
        { type: 'heading', text: 'Discuss enteral feeding early' },
        { type: 'paragraph', text: 'Gastrostomy can support nutrition, hydration, and medication delivery when oral intake becomes too difficult or unsafe. Discuss it before a crisis and revisit preferences. Weight loss around 10% and an FVC near/below 50% are warning markers in some guidance, not targets to wait for or absolute eligibility cutoffs. Consider swallowing, intake, respiratory symptoms, procedure risk, and patient wishes together. Respiratory insufficiency may require NIV optimization/support during placement; severe weakness does not automatically rule it out.' },
        { type: 'paragraph', text: 'A PEG does not restore swallowing or prevent all aspiration: saliva and reflux may still be aspirated. Follow feeding/flush, positioning, oral-care, and tube-care plans. Maintain appropriate hydration and fiber and use a bowel regimen, including prescribed stool softeners/laxatives when indicated, to address immobility and anticholinergic effects.' }
      ],
      assessment: [
        { type: 'callout', title: 'Priority assessment: airway and respiratory status', text: 'Assess airway patency, respiratory rate/depth and effort, orthopnea, cough effectiveness, and ability to clear secretions. Include sleep-related symptoms and pulmonary-function trends. SpO₂ is one measurement; a normal reading does not rule out hypoventilation or rising CO₂.' },
        { type: 'cards', items: [
          { title: 'Ventilation and cough', fields: [['Assess', 'Dyspnea, accessory-muscle use, shallow/paradoxical breathing, inability to lie flat, sleep disturbance, morning headaches, daytime somnolence, lung sounds, infection symptoms, and secretion clearance.'], ['Trend and escalate', 'Record serial FVC/SVC, NIF/MIP or SNIP, and cough measures as ordered. A less-negative NIF indicates weaker inspiratory effort. Sleep studies/overnight oximetry and CO₂ or blood-gas assessment may be needed; bulbar weakness can make mouthpiece measurements unreliable.']] },
          { title: 'Bulbar function and nutrition', fields: [['Assess', 'Speech intelligibility, tongue atrophy/fasciculations, chewing/swallowing fatigue, choking, wet/gurgly voice, pooled saliva, meal duration, hydration, weight trend, and ability to use utensils.'], ['Safety', 'A gag reflex alone cannot exclude aspiration. Arrange SLP and nutrition review, and escalate unsafe oral intake while establishing a safe medication/hydration plan.']] },
          { title: 'Motor, mobility, and skin', fields: [['Assess', 'Asymmetric or more widespread weakness, wasting, fasciculations, spasticity, reflexes, ROM, pain/cramps, ADLs, transfers, falls, head support, pressure areas, and device fit.'], ['Adapt', 'Reassess supports and equipment as disease changes; avoid exhausting repeated strength tasks simply to demonstrate weakness.']] },
          { title: 'Communication, cognition, and emotional health', fields: [['Assess', 'Current and future AAC access, reliable yes/no responses, vision/eye movement, cognition, behavior, language, mood, anxiety, and pseudobulbar affect.'], ['Respect autonomy', 'Address the patient directly, allow response time, and support decision making. Assess changes rather than assuming all cognition remains intact or that dysarthria equals impaired understanding.']] },
          { title: 'Treatment, care preferences, and caregiver needs', fields: [['Assess', 'Medication toxicity, ventilation/cough-assist use, tube care, bowel function, home access, caregiving capacity, respite, and emergency equipment/plans.'], ['Plan ahead', 'Review goals, advance directives, ventilation and feeding preferences, and a reachable contact pathway as appropriate. Preferences can be revisited.']] }
        ] }
      ],
      diagnoses: [
        { type: 'paragraph', text: 'Use your program’s diagnostic terminology and the actual assessment findings. Possible nursing diagnoses include:' },
        { type: 'list', items: ['Ineffective breathing pattern related to respiratory muscle weakness; impaired gas exchange when supported by findings such as abnormal gas exchange/CO₂ retention.', 'Ineffective airway clearance related to a weak cough and retained secretions.', 'Risk for aspiration related to dysphagia and impaired airway protection.', 'Impaired verbal communication related to dysarthria and reduced respiratory support for speech.', 'Impaired physical mobility related to progressive weakness, atrophy, and spasticity.', 'Inadequate nutritional intake related to dysphagia, feeding difficulty, fatigue, or increased energy requirements when present.', 'Risk for pressure injury, constipation, or caregiver strain as supported by the assessment.'] }
      ],
      priorities: [
        { type: 'callout', title: 'The nurse’s first action', text: 'Assess airway, respiratory effort, and secretion clearance. With acute distress, choking, or reduced consciousness, activate the emergency response promptly. Position for breathing, use indicated suction/assisted cough and ventilatory support within the ordered emergency plan, and communicate the patient’s care preferences. Do not delay escalation while waiting for an FVC test.' },
        { type: 'cards', items: [
          { title: '1. Airway, ventilation, and secretion clearance', fields: [['Prioritize', 'Detect hypoventilation early, support an effective cough, and arrange respiratory-team assessment/NIV when indicated. Neuromuscular respiratory failure is a major cause of death; aspiration pneumonia is an important complication rather than the only explanation.'], ['Oxygen safety', 'Oxygen alone does not treat weak ventilation and may mask or worsen CO₂ retention. Give oxygen when indicated for hypoxemia under the clinical plan, while urgently addressing ventilation and monitoring CO₂ when appropriate; do not reduce care to a saturation target.']] },
          { title: '2. Swallowing, nutrition, and hydration', fields: [['Prioritize', 'Use the individualized feeding plan, support adequate intake, monitor weight and hydration, and discuss gastrostomy early without treating a PEG as aspiration-proof.']] },
          { title: '3. Communication and autonomy', fields: [['Prioritize', 'Establish AAC, an accessible call-for-help method, and a low-tech backup early. Discuss voice/message banking and clarify ventilation/feeding wishes while supporting the person’s ability to decide.']] },
          { title: '4. Function, skin, symptoms, and support', fields: [['Prioritize', 'Prevent avoidable falls, painful contractures, pressure injury, and medication harm; manage pain/dyspnea and support the patient and caregivers.']] }
        ] }
      ],
      plan: [
        {
          "type": "paragraph",
          "text": "Set realistic, patient-chosen outcomes with review dates. ALS is progressive, so success may mean preserved participation, effective support, and comfort rather than restoration of normal strength."
        },
        {
          "type": "cards",
          "items": [
            {
              "title": "1. Ventilation and secretion clearance",
              "fields": [
                [
                  "Goal",
                  "Maintain the best achievable ventilation, sleep quality, secretion clearance, and comfort using the agreed respiratory plan."
                ],
                [
                  "Actions",
                  "Trend breathing/cough and sleep symptoms; support prescribed NIV, assisted cough, suction and interface care, with timely respiratory-team review."
                ],
                [
                  "Evaluate",
                  "Respiratory support meets the patient’s comfort goals, ventilation is assessed appropriately, and secretions are managed effectively."
                ]
              ]
            },
            {
              "title": "2. Safe nutrition and hydration",
              "fields": [
                [
                  "Goal",
                  "Meet individualized nutrition/hydration goals and reduce avoidable feeding burden and weight loss."
                ],
                [
                  "Actions",
                  "Coordinate SLP/dietitian input, supported meal pacing and the prescribed oral or gastrostomy plan; monitor intake, weight, hydration and aspiration concerns."
                ],
                [
                  "Evaluate",
                  "Individualized intake/weight goals and feeding burden are addressed; the feeding plan is demonstrated and swallowing or tube problems are acted on."
                ]
              ]
            },
            {
              "title": "3. Communication, preferences and support",
              "fields": [
                [
                  "Goal",
                  "Express needs, preferences, and decisions through a reliable communication method with a backup. Document and revisit advance-care preferences, identify practical support, and reduce preventable caregiver strain."
                ],
                [
                  "Actions",
                  "Practice individualized AAC and backup access, allow response time, revisit advance-care preferences, and coordinate chosen support, respite and palliative care."
                ],
                [
                  "Evaluate",
                  "The patient communicates needs/decisions reliably, care preferences remain accessible, and patient/caregiver support needs are addressed."
                ]
              ]
            },
            {
              "title": "4. Function, comfort and home-care skills",
              "fields": [
                [
                  "Goal",
                  "Complete selected ADLs and transfers with appropriate equipment/assistance and minimal fatigue or injury. Maintain skin comfort/integrity, joint range, and an effective bowel routine. Demonstrate medication, NIV, cough-assist, suction, feeding, and emergency-care skills appropriate to the home plan."
                ],
                [
                  "Actions",
                  "Use PT/OT equipment, supported activity, ROM, pressure relief and bowel care; teach medicines, respiratory/feeding equipment and the home emergency plan."
                ],
                [
                  "Evaluate",
                  "Transfers and activity use safe assistance, skin/joint and bowel comfort are maintained, and relevant care/equipment skills are demonstrated without unacceptable treatment toxicity."
                ]
              ]
            }
          ]
        },
        {
          "type": "paragraph",
          "text": "The ROM, fluid/fiber, bowel support, illness/progression teaching, and interdisciplinary consultations in your original care-plan notes are retained as interventions and education below."
        }
      ],
      interventions: [
        { type: 'heading', text: 'Airway and respiratory care' },
        { type: 'paragraph', text: 'Use semi-Fowler’s/High Fowler’s or another individually comfortable position. Maintain access to suction and the prescribed cough-assist/ventilation equipment. Teach and monitor assisted cough or breath-stacking techniques when indicated. Review NIV interface, leaks, mucosal dryness, skin pressure, secretion clearance, and tolerance. Monitor respiratory trends and ordered gas/CO₂ testing; incentive spirometry is not a substitute for these supports.' },
        { type: 'heading', text: 'Swallowing, nutrition, and saliva' },
        { type: 'paragraph', text: 'Coordinate SLP/dietitian input, meal pacing, appropriate texture/liquids, positioning, hydration, oral care, and supplements. Follow gastrostomy feeding/flush and head-elevation instructions when applicable. Give prescribed medicines using a safe formulation/route, monitor riluzole liver tests, and balance saliva reduction against thick mucus and plugging.' },
        { type: 'heading', text: 'Communication and participation' },
        { type: 'paragraph', text: 'Speak directly to the person, reduce distractions, allow time, and confirm meaning without finishing every sentence for them. Set up and practice whiteboards, letter/yes-no boards, speech-generating devices, and eye-gaze or switch access as appropriate. Offer voice/message banking early, reassess access with progression, and keep a backup and help signal available.' },
        { type: 'heading', text: 'Mobility, skin, bowel, and daily care' },
        { type: 'paragraph', text: 'Use gentle daily ROM/stretching and supported activity rather than exercising weak muscles to exhaustion. Fit braces/AFOs, neck supports, transfer aids, and seating with PT/OT. Reposition according to skin risk, surface, comfort, tolerance, and care goals; a 2-hour interval may be used in a plan but is not a universal rule for every patient. Inspect pressure points, including NIV masks. Support appropriate fluids, fiber, toileting routines, and prescribed bowel medicines.' },
        { type: 'heading', text: 'Interdisciplinary, psychosocial, and palliative support' },
        { type: 'paragraph', text: 'SLP supports communication and swallowing; PT supports safe movement/ROM and equipment; OT supports ADLs and devices such as an electric toothbrush; respiratory therapy supports ventilation and cough; the dietitian supports intake. Include mental-health, social-work, and caregiver-respite services. Discuss pain, dyspnea, anxiety, delirium, and end-of-life preferences sensitively, with specialist symptom treatment when needed. Palliative care can support the patient alongside ongoing treatments.' }
      ],
      education: [
        { type: 'list', items: ['Explain the condition and the purpose, realistic benefit, administration, and monitoring of each prescribed treatment. Confirm patient/caregiver understanding through teach-back and hands-on practice.', 'Recognize worsening breathing, weak cough, secretion difficulty, morning headaches, sleep-related symptoms, and daytime sleepiness. Normal SpO₂ is not enough reassurance. Know who to contact and when to use the emergency plan.', 'Demonstrate NIV, cough-assist, suction, mask/skin care, and equipment troubleshooting within the home plan; know power-failure and backup arrangements.', 'Demonstrate the individual swallowing and feeding plan. Recognize dehydration, inadequate intake, unintentional weight loss, choking, fever/chest infection, and tube problems. A PEG does not remove all aspiration risk.', 'Practice AAC, a reliable yes/no signal, and a backup call-for-help method. Offer voice/message banking and reassess tools before access is lost.', 'Do not abruptly stop baclofen; follow supervised changes for other medicines. Report jaundice, fever/sore throat, severe allergic symptoms, marked sedation/weakness, or new neurological symptoms after intrathecal therapy.', 'Teach safe transfers, appropriate ROM, pressure relief, oral care, bowel routines, and energy conservation. Arrange practical caregiver training and respite.', 'Discuss advance directives and ventilation/feeding preferences without implying that choosing NIV or a tracheostomy prevents palliative support. Include comfort care for pain, dyspnea, anxiety, or delirium and revisit decisions as wished.'] }
      ],
      evaluation: [
        { type: 'list', items: ['Respiratory support is effective for the patient’s goals: less distress or sleep-related hypoventilation, acceptable ventilation/CO₂ assessment when measured, and effective cough/secretion management. Use an individualized oxygen target; SpO₂ ≥92% alone is not proof of adequate ventilation.', 'Nutrition/hydration goals are met as closely as possible, weight trends and feeding burden are addressed, and oral/tube feeding is managed according to the plan. Lack of coughing or use of a PEG alone does not exclude aspiration.', 'The patient communicates needs and decisions reliably using an appropriate device or low-tech method and can access help. Care preferences are documented and reviewed when desired.', 'Transfers and activity use appropriate assistance/equipment, fatigue is manageable, and skin/joint comfort is maintained with preventable falls, contractures, and pressure injuries minimized.', 'Spasticity, cramps, pain, and saliva symptoms are tolerable without unacceptable medication toxicity or loss of useful function; required liver and other monitoring is completed.', 'The patient and caregivers can demonstrate the relevant daily-care and emergency skills, access multidisciplinary/respite support, and describe an acceptable symptom-relief and ongoing-care plan.'] }
      ]
    },
    clarifications: [
      { title: 'Disease anatomy, speech, cognition, and genetics', text: 'Added upper motor neurons in the motor cortex to the brainstem/spinal lower motor neuron description. Corrected speech “dysrhythmia” to dysarthria. Cognition/behavior can be affected, including ALS–frontotemporal dementia; speech loss does not itself imply cognitive loss. Familial percentages and inheritance vary, and counseling/testing is offered regardless of family history.' },
      { title: 'Risk and prevention claims', text: 'The original age 40–60 range and 10–15% familial estimate were not treated as universal limits. Autoimmune disease, alcohol, infections, low BMI, and trauma are not presented as a proven causal checklist. General smoking/exposure/injury precautions support health but are not proven ALS prevention.' },
      { title: 'Respiratory wording and oxygen', text: 'The phrase “AVPR hyperventilation develops” could not be recovered reliably. The verified clinical concept is respiratory-muscle weakness causing hypoventilation and possible CO₂ retention. Corrected saturation-only evaluation and oxygen/BiPAP shorthand: assess/support ventilation, cough, and secretion clearance; use oxygen when indicated with the appropriate monitoring. NIV decisions use symptoms and trends rather than one threshold.' },
      { title: 'Swallowing, gastrostomy, and calories', text: 'Chin tuck, thickened liquids, and food exclusions require individual SLP assessment; gag reflex or absence of cough cannot exclude aspiration. PEG does not prevent all aspiration. Weight loss around 10% and FVC around 50% are warning markers, not a reason to delay discussion or absolute procedural cutoffs. Hypermetabolism is not universal, and higher BMI is not prescribed as a guaranteed disease-slowing treatment.' },
      { title: 'Medicines and monitoring', text: 'Clarified riluzole’s uncertain exact mechanism and group-level survival estimates; liver monitoring is monthly initially, then periodic. Edaravone’s US approval and regional evidence differences are distinguished. Tofersen is SOD1-specific with accelerated-approval evidence explained. “Dantrolene sodium” is one drug. Baclofen and tizanidine have different withdrawal risks; modafinil has limited ALS evidence.' },
      { title: 'Communication and supportive care', text: 'Preserved the study guide’s “CAM for communicating” focus while using AAC for assistive communication. Complementary comfort methods are separate. Eye-gaze access requires assessment, switch access is not the same as a brain–computer interface, and respiratory-dependent access may not suit everyone. Palliative care and ventilation can coexist; repositioning and equipment are individualized.' },
      { title: 'Scope of this page', text: 'Merged repeated ALS passages without dropping their care domains, completed patient-centered goals and education, and moved action items into interventions. The trailing “5. Meningitis / Risk factors” fragment belongs to the next condition and is not used to invent meningitis content here.' }
    ],
    references: [
      { title: 'NIH / NINDS · ALS information booklet', url: 'https://www.ninds.nih.gov/sites/default/files/2025-05/NINDS_ALS_Booklet_Digital-508c.pdf', supports: 'Motor neuron disease, symptoms, familial context, and treatment background; current drug labels/guidelines below govern treatment updates.' },
      { title: 'NICE NG42 · Motor neurone disease', url: 'https://www.nice.org.uk/guidance/ng42/chapter/recommendations', supports: 'Multidisciplinary assessment, communication, cognition, nutrition, respiratory care, and advance planning.' },
      { title: 'EAN / ERN EURO-NMD · ALS management guideline, 2024', url: 'https://onlinelibrary.wiley.com/doi/full/10.1111/ene.16264', supports: 'NIV, cough augmentation, gastrostomy/respiratory support, symptom treatment, and regional edaravone recommendations.' },
      { title: 'CDC · National ALS Registry FAQ', url: 'https://www.cdc.gov/als/abouttheregistrymain/faqs.html', supports: 'Uncertainty about environmental causes and distinction between possible associations and established causes.' },
      { title: 'Consensus guidelines · ALS genetic testing and counseling', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10646996/', supports: 'Offering testing/counseling regardless of family history and implications for relatives and gene-targeted treatment.' },
      { title: 'Mayo Clinic · Electromyography', url: 'https://www.mayoclinic.org/tests-procedures/emg/about/pac-20393913', supports: 'EMG/NCS purpose, skin preparation, implanted devices, anticoagulants, and procedure expectations.' },
      { title: 'DailyMed · Riluzole', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=dd432c13-389e-46b3-8891-0cf1a58800ff', supports: 'Mechanism uncertainty, trial survival context, formulations, liver monitoring, neutropenia, and pulmonary adverse effects.' },
      { title: 'DailyMed · Radicava / Radicava ORS', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0ce2c1c4-2a40-485c-b7cb-96a9b85d9d11', supports: 'US indication, formulation schedules/fasting, hypersensitivity, and sulfite precautions.' },
      { title: 'DailyMed · Qalsody (tofersen)', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=81356b45-1cb7-4eef-88ea-e44cc18b47c5', supports: 'SOD1 indication, accelerated approval, intrathecal administration, myelitis/radiculitis, meningitis, and raised ICP.' },
      { title: 'DailyMed · Baclofen', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=231ef477-822c-46fe-9bf3-d55cdf9bd4c2', supports: 'Sedation, weakness, and serious withdrawal effects.' },
      { title: 'DailyMed · Tizanidine', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f0e4eb26-6733-4df6-bb3c-86bf4d976f42', supports: 'Sedation, hypotension, liver injury, and rebound hypertension/tachycardia on withdrawal.' },
      { title: 'DailyMed · Dantrium (dantrolene sodium)', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=57b4eec1-49e1-432c-95ae-0fe36e32d64b', supports: 'Spasticity indication, weakness, and boxed hepatotoxicity warning.' },
      { title: 'DailyMed · Dextromethorphan/quinidine', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7028dcb7-f436-4cf6-9beb-23c1d215c798', supports: 'Pseudobulbar affect, cardiac contraindications, and serotonergic/other interactions.' },
      { title: 'Randomized trial · Mexiletine for ALS cramps', url: 'https://pubmed.ncbi.nlm.nih.gov/26911633/', supports: 'Symptom benefit for cramps rather than demonstrated slowing of ALS progression.' },
      { title: 'Placebo-controlled study · Modafinil for ALS fatigue', url: 'https://pubmed.ncbi.nlm.nih.gov/19208404/', supports: 'Small-study evidence and need for confirmation rather than routine proven benefit.' },
      { title: 'MND Association · Respiratory symptoms', url: 'https://www.mndassociation.org/professionals/management-of-mnd/respiratory-symptoms-mnd', supports: 'Hypoventilation, respiratory referral, and caution with oxygen alone.' },
      { title: 'ALS Association · Adapting to changes in breathing', url: 'https://www.als.org/sites/default/files/2022-10/Resource-Guide-10.pdf', supports: 'NIV, cough/secretions, equipment, oxygen limitations, and respiratory-care planning.' },
      { title: 'Canadian Thoracic Society · Home ventilation in ALS', url: 'https://als.ca/wp-content/uploads/2023/06/1.-HMV-for-patients-with-ALS-CTS-CPG.pdf', supports: 'Respiratory testing, sleep/CO₂ assessment, and NIV decisions beyond a single saturation reading.' },
      { title: 'ASHA · Augmentative and alternative communication', url: 'https://www.asha.org/practice-portal/professional-issues/augmentative-and-alternative-communication/', supports: 'AAC assessment, low/high-tech tools, eye/head/switch access, and partner-assisted scanning.' },
      { title: 'ALS Association · AAC', url: 'https://www.als.org/navigating-als/living-with-als/therapies-care/augmentative-alternative-communication', supports: 'Early communication planning and assistive technologies.' },
      { title: 'ALS Association · Changes in speech and communication solutions', url: 'https://www.als.org/sites/default/files/2022-10/Resource-Guide-9.pdf', supports: 'Voice/message banking, communication supports, and requirements/limitations of eye-gaze use.' },
      { title: 'ASHA · Adult dysphagia', url: 'https://www.asha.org/practice-portal/clinical-topics/adult-dysphagia/', supports: 'Individualized swallowing strategies, texture modification, and silent aspiration.' }
    ]
  },
  'multiple-sclerosis': {
    title: 'Multiple sclerosis', abbreviation: 'MS', week: 8, deck: 'multiple-sclerosis',
    reviewed: 'November 15, 2026',
    reading: 'Course study guide: Multiple sclerosis—clinical manifestations and Uhthoff phenomenon. B&S textbook: Chapter 65, MS section. Organized from your supplied notes, with missing clinical and nursing-process sections added from the references below.',
    focus: [{ section: 'manifestations', label: 'Clinical manifestations & Uhthoff phenomenon' }],
    content: {
      overview: [
        { type: 'paragraph', text: 'Multiple sclerosis (MS) is a chronic immune-mediated disease of the central nervous system (CNS): the brain, spinal cord, and optic nerves. Inflammation damages myelin, the insulating covering formed by oligodendrocytes, and can also injure axons. Areas of damage and scarring are called lesions or plaques.' },
        { type: 'heading', text: 'Why symptoms vary' },
        { type: 'paragraph', text: 'Demyelination slows or blocks nerve conduction; axonal injury can produce lasting impairment. The location and activity of lesions determine the symptoms, so two people with MS may have very different findings. Recovery after inflammation may be complete or incomplete. MS is not contagious.' },
        { type: 'heading', text: 'Disease course' },
        { type: 'paragraph', text: 'Relapsing-remitting MS involves attacks followed by periods of recovery or stability. Some people later develop secondary progressive MS, with gradual worsening that may occur with or without relapses. Primary progressive MS involves progression from onset. Disease activity and progression guide treatment; an individual’s course cannot be predicted from one symptom.' },
        { type: 'paragraph', text: 'Heat can temporarily impair conduction in already demyelinated pathways. This explains Uhthoff phenomenon: a change in function without the heat episode itself creating a new inflammatory lesion.' }
      ],
      manifestations: [
        { type: 'heading', text: 'Clinical manifestations' },
        { type: 'cards', items: [
          { title: 'Visual and sensory findings', fields: [['Vision', 'Optic neuritis may cause painful eye movement, reduced vision, or altered color vision, often in one eye. Diplopia, blurred vision, or nystagmus may occur.'], ['Sensation', 'Numbness, tingling, altered sensation, or neuropathic pain. Lhermitte sign is an electric-shock-like sensation down the back or limbs with neck flexion; it is not specific to MS.']] },
          { title: 'Movement and coordination', fields: [['Motor findings', 'Weakness, spasticity, spasms, hyperreflexia, impaired balance, ataxia, tremor, and difficulty walking.'], ['Speech and swallowing', 'Dysarthria and dysphagia may affect communication, nutrition, hydration, and airway protection.']] },
          { title: 'Other common findings', fields: [['Fatigue and thinking', 'Physical or cognitive fatigue, slowed information processing, attention/memory difficulties, and executive-function changes.'], ['Autonomic and emotional symptoms', 'Urinary urgency, frequency, incontinence or retention; constipation or bowel dysfunction; sexual dysfunction; pain, sleep disturbance, depression, or anxiety.']] }
        ] },
        { type: 'callout', title: 'Uhthoff phenomenon: temporary heat-related worsening', text: 'A rise in temperature can slow or block conduction in demyelinated CNS pathways, temporarily bringing back or worsening symptoms such as blurred/dimmed vision, fatigue, weakness, numbness, or impaired balance. Symptoms usually improve as temperature returns to baseline. The heat-related episode itself does not mean new MS damage.' },
        { type: 'heading', text: 'Triggers and nursing response' },
        { type: 'list', items: ['Potential triggers include hot baths/showers, saunas, warm or humid weather, an overheated room, vigorous exercise without cooling, and fever. Stress may contribute. Medicines that reduce sweating, such as oxybutynin, can make overheating more likely.', 'Assess temperature, onset, duration, and whether symptoms match the patient’s usual deficits. Look for infection, particularly urinary or respiratory symptoms. Do not assume every temperature-related change is a harmless flare.', 'Move to a cooler environment, stop the heat exposure, allow rest, and use comfortable cooling such as tepid/cool water, air conditioning, or a cooling vest. Avoid very hot drinks if they provoke symptoms; exercise can continue with pacing and cooling.', 'Reassess after cooling and management of the trigger. New, persistent, severe, or atypical deficits require clinical review. Sudden focal weakness, speech loss, or other stroke-like symptoms require emergency assessment rather than being attributed automatically to MS.'] },
        { type: 'heading', text: 'Pseudo-relapse versus true relapse' },
        { type: 'paragraph', text: 'A pseudo-relapse is temporary symptom worsening from a trigger such as heat, fever, infection, or overexertion, rather than new inflammatory activity. Uhthoff phenomenon is specifically the heat-related form. Infection can also coexist with a true relapse. A suspected true relapse involves new or worsening neurological symptoms lasting more than 24 hours, after a stable interval of about a month, with infection and other causes excluded. The MS team makes this distinction; urgent symptoms should not wait for a 24-hour threshold.' }
      ],
      risk: [
        { type: 'heading', text: 'Risk factors and associations' },
        { type: 'list', items: ['MS often begins in young adulthood and is more common in women, although it can occur at other ages and in any sex.', 'Family history and genetic susceptibility increase risk, but MS is not usually inherited through a simple single-gene pattern.', 'Epstein–Barr virus infection, smoking, lower vitamin D/sunlight exposure, and obesity are associated with increased risk. An association does not mean that everyone with that factor will develop MS.'] },
        { type: 'heading', text: 'Prevent complications and recognize changes' },
        { type: 'paragraph', text: 'There is no guaranteed prevention strategy for all MS. Support smoking cessation, appropriate general health care, vaccination planning, and nutrition. In established MS, focus on preventing infection, falls, pressure injury, medication harm, overheating, and bowel/bladder complications. Report new neurological symptoms rather than trying to diagnose a relapse from fatigue alone.' }
      ],
      diagnostics: [
        { type: 'paragraph', text: 'An MS specialist combines the history, neurological examination, MRI, laboratory findings, and exclusion of mimics. Current assessment uses the 2024 revised McDonald criteria; diagnosis is not based on one symptom, a hot-bath test, or an isolated MRI spot.' },
        { type: 'cards', items: [
          { title: 'History and neurological examination', fields: [['Purpose', 'Document patterns of CNS symptoms, previous episodes, progression, and objective neurological findings while considering alternative causes.'], ['Nursing considerations', 'Record onset, duration, baseline function, vision, sensation, strength, coordination, gait, cognition, bladder/bowel changes, temperature, and recent infections or medicines.']] },
          { title: 'MRI of the brain and spinal cord', fields: [['Purpose', 'Identify lesions with a pattern consistent with MS, assess activity when appropriate, and help distinguish other causes. The revised criteria can also use optic-nerve involvement and certain advanced imaging markers in defined situations.'], ['Nursing considerations', 'Complete implant/metal and pregnancy screening. If contrast is planned, follow the facility’s contrast and renal-function assessment protocol. Explain the scan and manage positioning or fatigue needs.']] },
          { title: 'Cerebrospinal fluid and laboratory studies', fields: [['Purpose', 'CSF oligoclonal bands or kappa free-light chain measures can provide supporting evidence under current criteria. Blood/other tests investigate mimics, such as vitamin deficiencies or other inflammatory disorders, as indicated. A positive CSF result alone does not establish MS.'], ['Nursing considerations', 'Prepare for lumbar puncture as ordered, review bleeding risk and relevant medicines, explain the procedure, label specimens accurately, and monitor the site and postprocedure symptoms. Follow local aftercare instructions.']] },
          { title: 'Visual pathway and functional testing', fields: [['Purpose', 'Optical coherence tomography, visual evoked potentials, or other tests may assess optic-pathway involvement. Functional assessments help track walking, vision, cognition, and disability over time.'], ['Nursing considerations', 'Explain each ordered test, document the baseline, and compare follow-up measures with both clinical function and the patient’s reported experience.']] }
        ] }
      ],
      medical: [
        { type: 'heading', text: 'Three treatment goals' },
        { type: 'list', items: ['Modify disease activity with an individualized disease-modifying therapy (DMT) when indicated for the disease type and activity.', 'Treat a functionally significant inflammatory relapse when the MS team determines treatment is appropriate.', 'Manage symptoms, rehabilitation, safety, and quality of life throughout the disease course.'] },
        { type: 'heading', text: 'Acute relapse management' },
        { type: 'paragraph', text: 'Assess for infection and other causes of deterioration before treating a presumed relapse. High-dose methylprednisolone, orally or intravenously according to the specialist plan, may speed recovery from a significant relapse. Not every relapse needs steroids; steroids are not a long-term substitute for DMTs. Plasma exchange may be considered for a severe relapse that responds poorly to steroids.' },
        { type: 'heading', text: 'Long-term review' },
        { type: 'paragraph', text: 'Select or adjust DMTs through shared decision making about disease activity, course, risks, monitoring, pregnancy plans, comorbidities, and preferences. For example, ocrelizumab has indications for relapsing MS and primary progressive MS; eligibility for other drugs differs. Review symptoms and MRI/clinical activity, adherence, treatment tolerance, and rehabilitation needs rather than assuming all patients need the same regimen.' }
      ],
      medications: [
        { type: 'heading', text: 'Disease-modifying therapies from your notes' },
        { type: 'paragraph', text: 'DMTs act on immune activity to reduce disease activity in appropriate patients. They are different from medicines that temporarily improve walking, spasticity, or bladder symptoms. The following preserves your examples; it is not an exhaustive list of every available DMT.' },
        { type: 'cards', items: [
          { title: 'Oral DMTs', fields: [['Examples', 'Fingolimod and siponimod (sphingosine-1-phosphate receptor modulators), dimethyl fumarate, and teriflunomide.'], ['Nursing considerations', 'Confirm the exact drug’s pre-treatment tests, titration, monitoring, contraception, and restart instructions. Siponimod requires CYP2C9 genotype assessment; fingolimod has specific first-dose cardiac observation requirements. These are not identical for every oral DMT.']] },
          { title: 'Injectable DMTs', fields: [['Examples', 'Interferon beta preparations and glatiramer acetate.'], ['Nursing considerations', 'Teach the prescribed device and schedule, injection technique, site rotation, storage, and recognition of adverse reactions. Glatiramer has a boxed warning for anaphylaxis.']] },
          { title: 'Infusion DMTs', fields: [['Examples', 'Ocrelizumab and natalizumab.'], ['Nursing considerations', 'Verify required screening, ordered premedication and observation, and treatment-specific infection risks. Ocrelizumab requires hepatitis B screening; natalizumab requires PML risk assessment and the US TOUCH program.']] },
          { title: 'Mitoxantrone: a restricted, high-risk option', fields: [['Role', 'Retained because it appears in your monitoring notes. It has an MS indication for selected worsening disease but is not a routine preferred option in contemporary practice because of serious cardiac, marrow, and leukemia risks.'], ['Nursing considerations', 'If prescribed, verify cardiac and blood-count monitoring and cumulative-exposure limits under specialist supervision.']] }
        ] },
        { type: 'callout', title: 'Daclizumab is not a current oral DMT', text: 'Daclizumab (Zinbryta) was an injectable therapy and was withdrawn in 2018 because of serious safety concerns, including inflammatory brain disorders. It is retained in the correction record, not listed as an active treatment option.' },
        { type: 'heading', text: 'Symptom-directed medicines' },
        { type: 'cards', items: [
          { title: 'Dalfampridine for walking impairment', fields: [['Purpose', 'May improve walking in selected people with MS; it does not replace a DMT. This is the verified medicine matching the walking indication in the dictated phrase “Dama Prime.”'], ['Safety', 'Check seizure history and renal function. Dalfampridine is contraindicated with a history of seizures or creatinine clearance of 50 mL/min or less. Extended-release tablets must not be crushed or doubled after a missed dose.']] },
          { title: 'Baclofen for spasticity', fields: [['Purpose', 'An oral option for goal-directed spasticity management; selected patients may receive intrathecal therapy through a specialist service.'], ['Safety', 'Monitor sedation, weakness, dizziness, falls, and functional response. Some patients use tone to support standing/transfers, so less spasticity is not automatically better function. Never abruptly interrupt treatment; pump/refill problems need urgent attention.']] },
          { title: 'Dantrolene and botulinum toxin', fields: [['Purpose', 'Dantrolene is a selected antispasticity option; “Dantraline” was corrected to dantrolene. Botulinum toxin may treat focal spasticity and, through bladder injection, selected neurogenic detrusor overactivity.'], ['Safety', 'Dantrolene can cause serious liver injury and weakness. Botulinum toxin requires specialist selection and monitoring for weakness, dysphagia/breathing problems, and, with bladder treatment, urinary retention and UTI.']] },
          { title: 'Oxybutynin for bladder overactivity', fields: [['Purpose', 'May help urgency/incontinence from detrusor overactivity. It is not treatment for every cause of bladder dysfunction or incomplete emptying.'], ['Safety', 'Monitor residual urine/retention when indicated, constipation, dry mouth, cognition, and reduced sweating/overheating. Review the bladder pattern before assuming urgency means the bladder empties well.']] }
        ] }
      ],
      nonpharmacological: [
        { type: 'heading', text: 'Energy conservation and heat management' },
        { type: 'paragraph', text: 'Plan demanding tasks during the person’s best energy period—often earlier in the day, but not universally. Alternate activity and scheduled rest rather than pushing to exhaustion. Use cooling, air conditioning, a cooling vest, and comfortable tepid/cool showers when helpful. Avoid personally troublesome heat exposures; assess and treat fever or infection. Moderate exercise remains useful when adapted to fatigue, ability, and temperature.' },
        { type: 'heading', text: 'Physical and occupational therapy' },
        { type: 'paragraph', text: 'Use individualized aerobic/resistance activity, stretching and ROM, balance/gait training, positioning, and assistive devices. Canes, walkers, grab bars, and transfer equipment require assessment and practice. A wide-based stance is not a universal gait prescription. Protect skin and maintain joint movement when mobility is limited.' },
        { type: 'heading', text: 'Speech, swallowing, visual, and cognitive support' },
        { type: 'paragraph', text: 'Use SLP assessment for dysarthria, swallowing difficulty, and appropriate communication/cognitive strategies. Sit upright for intake; chin tuck, food texture, and thickened liquids depend on the individual swallowing assessment. An eye patch may relieve diplopia when recommended; follow eye-care advice about alternating eyes. Calendars, checklists, reminders, rest breaks, and uncluttered routines can reduce the load of memory or executive fatigue.' },
        { type: 'heading', text: 'Bowel and bladder routine' },
        { type: 'paragraph', text: 'Use a bladder diary and an individualized timed-voiding plan; every 2–3 hours may suit some people but is not a universal schedule. Pelvic-floor training may help selected patients. Incomplete emptying may require measured residual urine and taught clean intermittent catheterization. Establish a regular bowel routine with appropriate fiber, fluids, activity, and prescribed bowel medicines when needed.' }
      ],
      'adverse-effects': [
        { type: 'cards', items: [
          { title: 'High-dose methylprednisolone', fields: [['Monitor', 'Blood glucose; blood pressure, weight/fluid balance and potassium when indicated; infection, GI symptoms/bleeding risk, insomnia, mood change, agitation, or confusion.'], ['Taper clarification', 'A brief high-dose MS relapse course does not automatically require a taper. Follow the prescribed plan; longer/repeated exposure or other adrenal-risk circumstances may need a different approach. Do not apply baclofen’s withdrawal rule to every short steroid course.']] },
          { title: 'Interferon beta-1a / beta-1b', fields: [['Monitor and teach', 'Flu-like symptoms, injection-site injury, liver tests, CBC and blood counts, and mood/depression or suicidal thoughts. Rotate injection sites. Acetaminophen or an NSAID may be used for flu-like effects if approved for that patient.']] },
          { title: 'Glatiramer acetate', fields: [['Skin care', 'Rotate injection sites and watch for lipoatrophy or local injury.'], ['Reaction safety', 'A temporary immediate post-injection reaction may include flushing, chest tightness, palpitations, or breathlessness. Early anaphylaxis can look similar, even after years of therapy. Do not automatically reassure and wait: stop further doses pending prescriber advice, and obtain emergency help for breathing difficulty, facial/throat swelling, hives with systemic symptoms, or reactions that are severe, worsening, or persistent.']] },
          { title: 'Fingolimod', fields: [['First dose', 'Obtain ECG before dosing and at the end of observation; observe for at least 6 hours with hourly pulse and blood-pressure checks. Longer or overnight continuous ECG monitoring is required for specified higher-risk patients or abnormal findings, rather than being the same rule for everyone.'], ['Ongoing care', 'Monitor infection risk/CBC, liver function, and visual symptoms with baseline/follow-up eye assessment for macular edema as ordered. Treatment interruptions/restarts and discontinuation require specialist advice because monitoring may need repeating and disease can worsen after withdrawal.']] },
          { title: 'Siponimod and dimethyl fumarate', fields: [['Siponimod', 'Verify genotype-guided eligibility/dosing, titration, cardiac-risk review, and selected first-dose observation. Monitor infection, liver, and eye risks according to the label. Do not substitute fingolimod’s instructions automatically.'], ['Dimethyl fumarate', 'Monitor flushing/GI symptoms, CBC with lymphocyte count, liver concerns, and infections. Prolonged lymphopenia increases concern for opportunistic infection including PML; new neurological decline needs urgent review.']] },
          { title: 'Teriflunomide', fields: [['Monitor and teach', 'Exclude pregnancy before starting, discuss effective contraception/reproductive planning, and monitor liver tests—ALT at least monthly for the first 6 months under prescribing guidance. Severe liver injury and fetal harm are major concerns. The drug persists for a long time; pregnancy or serious toxicity may require a supervised accelerated-elimination procedure.']] },
          { title: 'Natalizumab', fields: [['Monitor and teach', 'Assess PML risk with anti-JCV antibody status, treatment duration, prior immunosuppressant exposure, and required surveillance. A negative JCV antibody result does not guarantee no risk.'], ['Urgent change', 'New or progressive weakness, confusion, impaired coordination, or vision/speech changes may be PML rather than a routine relapse. Withhold further administration and seek prompt specialist evaluation according to protocol. Verify TOUCH requirements and infusion observation.']] },
          { title: 'Ocrelizumab', fields: [['Before and during therapy', 'Verify hepatitis B screening, immunoglobulins, liver tests, vaccination planning, absence of an active infection, and ordered premedications. Monitor during and after infusion for reactions; continue infection and immunoglobulin surveillance as ordered. HBV reactivation is a serious risk.']] },
          { title: 'Mitoxantrone', fields: [['Monitor', 'Baseline and repeated quantitative LVEF/cardiac assessment, ECG and examination, CBC/myelosuppression, liver tests, and cumulative exposure. Cardiac monitoring continues after treatment as indicated by the label. Watch for heart-failure symptoms, infection/bleeding, and secondary leukemia risk.']] },
          { title: 'Baclofen, dantrolene, botulinum toxin, and oxybutynin', fields: [['Baclofen', 'Sedation, dizziness, and muscle weakness increase fall risk. Abrupt withdrawal can cause rebound spasticity, fever, hallucinations, seizures, and life-threatening illness. Maintain pump/refill plans and seek urgent help for interruption.'], ['Dantrolene', 'Serious hepatotoxicity and weakness require careful selection and liver monitoring.'], ['Botulinum toxin', 'Watch for spreading weakness, dysphagia or breathing difficulty; bladder treatment can cause retention/UTI and may require catheterization.'], ['Oxybutynin', 'Watch for retention, constipation, confusion, and heat illness from decreased sweating. Heat-related symptom worsening is not automatically a new inflammatory MS relapse.']] }
        ] }
      ],
      nutrition: [
        { type: 'heading', text: 'Balanced nutrition rather than a promised MS diet' },
        { type: 'paragraph', text: 'Your proposed fish/omega-3-containing foods, walnuts, fruits, vegetables, and whole grains can fit a balanced eating pattern. Limit excessive saturated fat and heavily processed foods as part of general health care. No specific “anti-inflammatory” diet or omega-3 supplement is established as a replacement for DMTs or a guaranteed way to prevent relapse.' },
        { type: 'heading', text: 'Vitamin D, calcium, bowel, and bladder needs' },
        { type: 'list', items: ['Correct vitamin D deficiency and support adequate calcium/vitamin D and bone health when indicated, particularly with low mobility or relevant steroid exposure. Do not promise that vitamin D supplements prevent relapse for everyone or recommend unsupervised high doses.', 'A fiber target around 25–30 g/day and fluid intake around 1.5–2 L/day may be starting examples for some adults, not fixed MS prescriptions. Adjust to age, intake, swallowing, renal/cardiac status, bowel function, and the care plan.', 'Distribute fluids to support hydration; earlier intake may help some people with nocturia, but excessive restriction can worsen constipation and bladder problems. Fluids alone do not guarantee prevention of UTIs.'] },
        { type: 'heading', text: 'Dysphagia, fatigue, heat, and steroids' },
        { type: 'paragraph', text: 'Offer smaller, frequent meals during the patient’s better energy periods. Use soft/moist foods or modified liquids only as the swallowing plan recommends, with upright positioning close to 90° when tolerated. Chin tuck is individualized; lack of coughing does not exclude silent aspiration. Avoid very hot food/drinks if heat worsens symptoms. During steroid treatment, individualize sodium and simple-sugar intake and monitor blood pressure/fluid balance and glucose rather than imposing one restrictive diet on everyone.' }
      ],
      assessment: [
        { type: 'cards', items: [
          { title: 'Neurological baseline and change', fields: [['Assess', 'Vision, eye movement, strength, sensation, coordination, gait, tone/spasticity, pain, speech, cognition, and usual level of independence.'], ['Clarify deterioration', 'Document exact onset and duration, previous deficits, temperature/heat exposure, infections, medication changes, and whether cooling restores baseline. Sudden or severe findings may be an emergency.']] },
          { title: 'Fatigue, function, and safety', fields: [['Assess', 'Best energy periods, sleep, mood, activity tolerance, falls, transfers, assistive-device use, skin condition, ROM, and ability to perform ADLs.'], ['Look beyond MS', 'Investigate contributors such as infection, medication effects, anemia, sleep problems, depression, pain, or bladder-related sleep disruption when appropriate.']] },
          { title: 'Airway, swallowing, and nutrition', fields: [['Assess', 'Cough strength, respiratory status when affected, choking, voice changes with intake, saliva management, meal duration, weight, hydration, and oral intake.'], ['Safety', 'Use the swallowing-screen/referral pathway and SLP assessment when indicated; bedside signs or gag reflex alone cannot exclude aspiration.']] },
          { title: 'Bladder and bowel', fields: [['Assess', 'Urgency, frequency, leakage, incomplete emptying, catheter use, residual urine when indicated, constipation, fluid/fiber intake, and symptoms of infection.'], ['Interpret carefully', 'Retention can coexist with urgency. Fever or urinary symptoms require evaluation; do not label every neurological change or positive urine finding as a symptomatic UTI without assessment.']] },
          { title: 'Medication and support needs', fields: [['Assess', 'DMT and symptom-medicine adherence, exact monitoring schedule, infections, infusion/injection reactions, mood, pregnancy plans, pump safety, and ability to self-administer treatment.'], ['Support', 'Include cognition, health literacy, hand function, home access, finances, caregiver strain, and the patient’s goals in the plan.']] }
        ] }
      ],
      diagnoses: [
        { type: 'paragraph', text: 'Use the program’s terminology and diagnoses supported by the individual assessment. Possible concerns include:' },
        { type: 'list', items: ['Impaired physical mobility related to weakness, spasticity, or impaired coordination.', 'Fatigue/activity intolerance affecting ADLs and participation.', 'Risk for falls and injury related to visual, balance, sensory, or medication effects.', 'Risk for aspiration when dysphagia or impaired airway protection is present.', 'Impaired urinary elimination or retention and constipation, according to the actual bladder/bowel findings.', 'Self-care or communication limitations, and risk for impaired skin integrity with reduced mobility.', 'Coping difficulties, mood concerns, or caregiver strain when assessment supports them.'] }
      ],
      priorities: [
        { type: 'callout', title: 'The nurse’s first action', text: 'Assess the patient and the immediate threat. Prioritize airway/breathing, severe allergic reaction, sudden stroke-like deficits, or rapidly worsening function when present. For otherwise stable symptom worsening, compare with baseline and check temperature, heat exposure, infection, and medicines before assuming an MS relapse.' },
        { type: 'list', items: ['Escalate emergencies promptly. Do not wait for a symptom to last 24 hours when there are acute danger signs.', 'For possible Uhthoff phenomenon, remove the heat trigger, cool comfortably, assess for fever/infection, and reassess neurological function. Persistent or new deficits need MS-team review.', 'Protect against falls, unsafe transfers, aspiration, pressure injury, and bladder retention while preserving as much independence as possible.', 'Prevent treatment harm: recognize anaphylaxis and PML warning signs, complete drug-specific screening, and avoid abrupt baclofen or pump interruption.', 'Treat infection or other causes of worsening through the appropriate clinical pathway and coordinate timely relapse assessment when indicated.'] }
      ],
      plan: [
        {
          "type": "paragraph",
          "text": "Agree on measurable goals, a time frame, and a realistic baseline for the person’s disease course. Complete symptom resolution is not the only measure of effective care."
        },
        {
          "type": "cards",
          "items": [
            {
              "title": "1. Neurological stability and heat response",
              "fields": [
                [
                  "Goal",
                  "Maintain or improve agreed neurological and functional measures, with new deterioration evaluated promptly. Identify personal heat triggers and demonstrate a practical cooling and escalation plan."
                ],
                [
                  "Actions",
                  "Compare neurological function with baseline, check heat/infection triggers, support cooling and pacing, and coordinate assessment of persistent or new deficits."
                ],
                [
                  "Evaluate",
                  "Agreed neurological measures remain stable or improve; heat-related symptoms return toward baseline and persistent changes are escalated."
                ]
              ]
            },
            {
              "title": "2. Safe mobility and daily participation",
              "fields": [
                [
                  "Goal",
                  "Complete selected ADLs and mobility tasks safely with pacing, aids, or assistance and no preventable falls."
                ],
                [
                  "Actions",
                  "Coordinate PT/OT, graded exercise, transfer aids and home adaptations; balance meaningful activity with rest and skin protection."
                ],
                [
                  "Evaluate",
                  "Selected mobility tasks and ADLs use appropriate aids/assistance without preventable falls or excessive fatigue."
                ]
              ]
            },
            {
              "title": "3. Swallowing, nutrition and elimination",
              "fields": [
                [
                  "Goal",
                  "Use an appropriate swallowing/nutrition plan and meet individualized intake, hydration, and weight goals. Achieve a workable bowel pattern and bladder-emptying plan without avoidable retention or symptomatic infection."
                ],
                [
                  "Actions",
                  "Coordinate the individualized SLP/dietitian plan, monitor intake and weight, and implement the agreed bowel, voiding or prescribed catheter routine."
                ],
                [
                  "Evaluate",
                  "Intake/hydration and weight goals are met as closely as possible; swallowing concerns, retention and bowel problems receive timely review."
                ]
              ]
            },
            {
              "title": "4. Treatment skills and support",
              "fields": [
                [
                  "Goal",
                  "Demonstrate medication/pump care, required monitoring, and recognition of adverse effects using teach-back. Maintain participation and coping with appropriate patient-chosen support and caregiver relief."
                ],
                [
                  "Actions",
                  "Use teach-back, demonstrations and cognitive/visual reminders for medicines and pump care; arrange monitoring and patient-chosen caregiver/community support."
                ],
                [
                  "Evaluate",
                  "Treatment and monitoring skills are demonstrated, adverse effects are recognized, and practical support sustains participation and coping."
                ]
              ]
            }
          ]
        }
      ],
      interventions: [
        { type: 'heading', text: 'Turn the plan into practical care' },
        { type: 'list', items: ['Group care thoughtfully, pace demanding tasks, and build rest/cooling breaks around the patient’s actual energy pattern. Avoid prolonged inactivity as well as exhaustion.', 'Coordinate PT/OT for transfers, gait, ROM, stretching, equipment, home adaptations, and safe exercise. Reassess function after antispasticity treatment.', 'Arrange SLP input for speech/swallowing concerns and teach only the individualized feeding or communication strategy. Support oral hygiene and monitor intake.', 'Implement the agreed voiding and bowel plan. Teach clean intermittent catheterization when prescribed, verify technique and supplies, and monitor symptoms/residuals as indicated.', 'Use reminders, calendars, checklists, simple organized instructions, and practical demonstrations for cognitive or visual limitations. Seek eye-care guidance for patching/diplopia.', 'Administer treatments as ordered, verify screening/laboratory follow-up, rotate injection sites, monitor reactions, and act on infection, PML, hepatic, cardiac, mood, or withdrawal concerns.', 'Assess emotional and sexual-health concerns sensitively, offer appropriate referrals, involve caregivers with consent, and arrange community support or respite.'] }
      ],
      education: [
        { type: 'list', items: ['Explain the difference between a DMT, acute relapse treatment, and symptom-relief medicine. DMT selection and changes require the MS team; do not stop/restart treatment independently.', 'Know the personal relapse contact pathway. Report new or persistent symptoms; do not assume all worsening is Uhthoff phenomenon or start leftover steroids without assessment.', 'Use cooling and pacing while remaining appropriately active. Learn how fever, infection, heat, and reduced sweating can affect symptoms.', 'Know each medicine’s testing, vaccination, infection, contraception, and pregnancy-planning instructions. Bring an up-to-date medication and monitoring list to appointments.', 'Recognize emergency allergic symptoms after glatiramer or other treatment and new progressive neurological changes during therapies associated with PML.', 'Never abruptly stop baclofen; keep pump refill and alarm plans current. Seek urgent advice for interruption, withdrawal signs, or severe weakness/sedation.', 'Follow dalfampridine formulation and missed-dose instructions and renal/seizure precautions. Do not crush extended-release tablets or double doses.', 'Demonstrate the prescribed bladder/catheter, bowel, swallowing, skin-protection, and mobility routines. Use teach-back and include a support person if desired.'] }
      ],
      evaluation: [
        { type: 'list', items: ['Neurological/function goals: strength, coordination, vision, and spasticity are stable or improved relative to the individual baseline; new symptoms and suspected relapses are assessed. Progressive disease may require adapting goals rather than promising no worsening.', 'Safe mobility: the patient uses agreed aids and transfer techniques without preventable falls and balances activity with rest.', 'Swallowing/nutrition: the individualized plan is followed, intake and hydration are adequate, and concerning chest/swallowing changes are addressed. No cough, choking, or wet voice alone does not prove absence of aspiration.', 'Bowel/bladder management: bowel movements are comfortable, emptying follows the agreed plan with acceptable residuals when measured, and retention/UTI symptoms are recognized promptly.', 'Heat management: the patient identifies triggers, uses cooling, and returns toward baseline after a heat-related episode; persistent changes are escalated rather than repeatedly dismissed.', 'Medication safety: the patient/caregiver demonstrates treatment and monitoring, laboratory/cardiac/mood findings remain acceptable for the actual regimen, and severe reactions or withdrawal are avoided or acted on promptly.', 'Participation and support: the patient can express needs, use cognitive/visual aids, access follow-up, and identify practical and emotional support.'] }
      ]
    },
    clarifications: [
      { title: 'Withdrawn and unclear medicine names', text: 'Daclizumab was injectable, not oral, and was withdrawn in 2018; it is not an active recommendation. “Dama Prime” is covered with dalfampridine because that medicine matches the walking indication, without claiming the original spelling was confirmed. “Dantraline” is corrected to dantrolene. “Pyronarbitirate” could not be identified reliably and is not treated as a real medication or silently substituted with a guess. The verified DMT and symptom-treatment options are listed above.' },
      { title: 'Glatiramer reaction safety', text: 'Updated the reassurance-only instruction using the FDA boxed warning introduced in 2025 and current labeling. Temporary post-injection reactions and early anaphylaxis can overlap. Severe, persistent, or worsening reactions require urgent assessment, and emergency allergic symptoms require immediate treatment.' },
      { title: 'Steroids and cardiac observation', text: 'A short high-dose MS steroid course does not routinely require a taper; longer exposure and individual adrenal-risk circumstances differ. Fingolimod requires at least 6-hour first-dose observation with hourly pulse/BP and pre/post ECG; continuous/overnight ECG is for specified risks or findings. Siponimod has its own genotype, titration, and cardiac-observation rules.' },
      { title: 'Uhthoff phenomenon and relapse', text: 'Retained the heat-related conduction explanation and cooling actions. Heat, reduced sweating, infection, and overexertion can worsen symptoms without new inflammatory damage. Infection can also coexist with a true relapse. Persistent/new symptoms need assessment; acute emergency findings should never wait for the formal relapse-duration threshold.' },
      { title: 'Nutrition, swallowing, and routines', text: 'Replaced guaranteed relapse prevention from vitamin D or an “anti-inflammatory” diet with nutritional adequacy and individualized supplementation. Fiber/fluid amounts and 2–3-hour voiding are examples, not universal prescriptions. Chin tuck, thickened liquids, patching, and gait stance require individual assessment. Absence of cough cannot exclude silent aspiration.' },
      { title: 'Missing sections completed', text: 'Added the disease overview, clinical manifestations, risks, contemporary diagnostic approach, treatment framework, and nursing assessment/diagnoses/priorities/care plan/interventions/education. Updated diagnosis to the 2024 revised McDonald framework, cited in current NICE guidance. Existing topic videos and the supplied presentation remain supporting resources; video summaries are not used as independent clinical evidence.' }
    ],
    references: [
      { title: 'NIH / NINDS · Multiple sclerosis', url: 'https://health.nih.gov/health-topics-a-z/ms', supports: 'CNS disease, demyelination, course, symptoms, and treatment concepts.' },
      { title: 'WHO · Multiple sclerosis', url: 'https://www.who.int/news-room/fact-sheets/detail/multiple-sclerosis/', supports: 'Disease overview, variable symptoms, and multidisciplinary care.' },
      { title: 'MedlinePlus Genetics · Multiple sclerosis', url: 'https://medlineplus.gov/genetics/condition/multiple-sclerosis/', supports: 'Genetic/environmental risk associations and neurological findings.' },
      { title: 'NICE NG220 · MS in adults: management', url: 'https://www.nice.org.uk/guidance/ng220/chapter/Recommendations', supports: 'Current diagnostic guidance, fatigue/spasticity care, relapse recognition, and nutrition/supplement limits.' },
      { title: 'McDonald criteria · 2024 revisions, published 2025', url: 'https://pubmed.ncbi.nlm.nih.gov/40975101/', supports: 'Updated diagnostic framework, optic-nerve involvement, MRI and CSF biomarkers.' },
      { title: 'MS Trust · Heat sensitivity and Uhthoff phenomenon', url: 'https://mstrust.org.uk/a-z/heat-sensitivity-uhthoffs-phenomenon', supports: 'Temperature triggers, temporary symptom change, and cooling strategies.' },
      { title: 'National MS Society · Professional relapse management', url: 'https://www.nationalmssociety.org/for-professionals/for-healthcare-professionals/managing-and-treating-ms/relapse-management', supports: 'Pseudo-relapse, infection assessment, and steroid-resistant relapse management.' },
      { title: 'VA MS Centers of Excellence · Relapse management', url: 'https://www.va.gov/MS/LEARN_ABOUT_MULTIPLE_SCLEROSIS/Relapse_Management_for_Multiple_Sclerosis.asp', supports: 'High-dose oral/IV steroids and selected plasma exchange.' },
      { title: 'AAN · Disease-modifying therapy practice guideline', url: 'https://www.neurology.org/doi/10.1212/WNL.0000000000005347', supports: 'Individualized DMT decisions and the restricted risk-benefit role of mitoxantrone.' },
      { title: 'MS Trust · Steroids (methylprednisolone)', url: 'https://mstrust.org.uk/a-z/steroids-methylprednisolone', supports: 'Relapse recovery, short courses, and taper clarification.' },
      { title: 'EMA · Zinbryta withdrawal and safety review', url: 'https://www.ema.europa.eu/en/medicines/human/referrals/zinbryta', supports: 'Daclizumab withdrawal and inflammatory brain risks.' },
      { title: 'FDA · Glatiramer anaphylaxis boxed warning', url: 'https://www.fda.gov/drugs/drug-safety-communications/fda-adds-boxed-warning-about-rare-serious-allergic-reaction-called-anaphylaxis-multiple-sclerosis', supports: 'Distinguishing temporary reactions from possible life-threatening allergy and required response.' },
      { title: 'DailyMed · Fingolimod', url: 'https://www.dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d9aa1078-fd72-47ef-84b2-2e1ad17b12a2', supports: 'First-dose cardiac observation, infection/eye monitoring, and restart/withdrawal precautions.' },
      { title: 'DailyMed · Mayzent (siponimod)', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=44492772-5aed-4627-bd85-e8e89f308bb3', supports: 'Genotype, titration, cardiac, infection, and eye precautions.' },
      { title: 'DailyMed · Dimethyl fumarate', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b00dcf89-59d3-9ab2-fd9b-16b9ec2d677b', supports: 'Lymphopenia, PML, GI/flushing effects, and monitoring.' },
      { title: 'DailyMed · Teriflunomide', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=bb9b9381-dc5a-4d90-a54e-5f08a03d3796', supports: 'Liver tests, fetal harm, pregnancy precautions, and accelerated elimination.' },
      { title: 'DailyMed · Tysabri (natalizumab)', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c5fdde91-1989-4dd2-9129-4f3323ea2962', supports: 'PML/JCV risk assessment, surveillance, and TOUCH requirements.' },
      { title: 'DailyMed · Ocrevus (ocrelizumab)', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9da42362-3bb5-4b83-b4bb-b59fd4e55f0d', supports: 'Indications, HBV/immunoglobulin/liver screening, vaccines, and infusion monitoring.' },
      { title: 'DailyMed · Rebif (interferon beta-1a)', url: 'https://dailymed.nlm.nih.gov/dailymed/getFile.cfm?setid=c6fcb5d2-8fcd-44fa-a838-b84ee5f44f0f&type=pdf', supports: 'Injection effects, liver and blood-count monitoring, and mood warnings.' },
      { title: 'DailyMed · Mitoxantrone', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1634528a-30c5-4309-acc8-4c0293ae14ae', supports: 'Cardiotoxicity, LVEF monitoring, myelosuppression, and leukemia risk.' },
      { title: 'DailyMed · Dalfampridine extended release', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?audience=consumer&setid=688eb479-debc-4cfc-a74d-14828c347049', supports: 'Walking indication, seizure/renal contraindications, and administration.' },
      { title: 'DailyMed · Baclofen', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=231ef477-822c-46fe-9bf3-d55cdf9bd4c2', supports: 'Sedation, weakness, and serious withdrawal reactions.' },
      { title: 'DailyMed · Gablofen (intrathecal baclofen)', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=00d3e846-dd92-448d-9ab8-6a07be823cc1', supports: 'Pump/refill and alarm precautions, abrupt interruption, and life-threatening withdrawal.' },
      { title: 'DailyMed · Dantrium (dantrolene)', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=57b4eec1-49e1-432c-95ae-0fe36e32d64b', supports: 'Spasticity treatment and boxed hepatotoxicity warning.' },
      { title: 'DailyMed · Botox (onabotulinumtoxinA)', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a6f42753-d31e-4b23-8da0-4b990fee4b38', supports: 'Spasticity/neurogenic bladder use, spreading weakness, dysphagia, and urinary retention.' },
      { title: 'DailyMed · Oxybutynin extended release', url: 'https://dailymed.nlm.nih.gov/dailymed/getFile.cfm?setid=c5950dba-d92b-46a0-993f-af9f9ddb52bf&type=pdf', supports: 'Retention, constipation, cognitive effects, and heat illness from reduced sweating.' },
      { title: 'NICE CG148 · Neurological urinary incontinence', url: 'https://www.nice.org.uk/guidance/cg148/chapter/Recommendations', supports: 'Bladder assessment, behavioral strategies, residual monitoring, and catheterization.' },
      { title: 'NIH Office of Dietary Supplements · Vitamin D', url: 'https://ods.od.nih.gov/factsheets/Vitamind-HealthProfessional/', supports: 'Vitamin D adequacy and limits of MS disease-treatment evidence.' },
      { title: 'ASHA · Adult dysphagia', url: 'https://www.asha.org/practice-portal/clinical-topics/adult-dysphagia/', supports: 'Individualized swallowing strategies, liquid modification, and silent aspiration.' }
    ]
  },
  parkinsons: {
    title: 'Parkinson’s disease', abbreviation: 'PD', week: 7,
    reviewed: 'November 15, 2026',
    reading: 'Course study guide: Parkinson’s disease—cardinal signs, swallowing safety, and nursing priorities. B&S textbook: Chapter 66, Parkinson’s disease section. Based on your Week 7 learning-objective notes and additional exam-focus notes.',
    focus: [
      { section: 'manifestations', label: 'Cardinal signs (TRAP)' },
      { section: 'nutrition', label: 'Swallowing safety' },
      { section: 'priorities', label: 'Nursing priorities' }
    ],
    content: {
      overview: [
        { type: 'paragraph', text: 'Parkinson’s disease (PD) is a slowly progressive neurodegenerative disorder that affects movement and many non-motor functions. It occurs more often in men and usually begins later in life, although young-onset disease can occur, including in the 30s. Functional disability and support needs vary from person to person.' },
        { type: 'heading', text: 'Dopamine loss and movement control' },
        { type: 'paragraph', text: 'Degeneration of dopamine-producing neurons in the substantia nigra reduces dopamine signaling to the striatum within the basal ganglia movement circuits. These circuits help initiate and scale movement. Reduced dopamine disrupts their balance, contributing to bradykinesia, rigidity, tremor, and later postural and gait difficulties.' },
        { type: 'paragraph', text: 'Dopamine and acetylcholine signaling interact within the striatum. Dopamine’s effects depend on the receptor and pathway, and reduced dopamine changes the balance of these movement-control circuits.' },
        { type: 'paragraph', text: 'PD also affects systems involved in autonomic function, mood, cognition, and sleep. This helps explain constipation, blood-pressure changes, urinary symptoms, depression, and other non-motor manifestations. Idiopathic PD is distinct from secondary parkinsonism, which can have causes such as dopamine-blocking medicines or other neurological disease.' }
      ],
      manifestations: [
        { type: 'callout', title: 'Cardinal signs: TRAP', text: 'Tremor, Rigidity, Akinesia/bradykinesia, and Postural instability are a useful study mnemonic. Not everyone has all four signs, tremor may be absent, and postural instability often develops later. The mnemonic is not a requirement that all four be present for diagnosis.' },
        { type: 'cards', items: [
          { title: 'T — Tremor at rest', fields: [['Recognize it', 'Classically a rhythmic, often initially unilateral “pill-rolling” hand tremor, with the thumb moving against the fingers. Slow turning movements of the hand or forearm may be seen.'], ['Pattern', 'Usually more noticeable at rest, decreases with purposeful movement, and typically subsides during sleep. These are typical patterns rather than absolute rules; other tremor patterns can coexist.']] },
          { title: 'R — Rigidity', fields: [['Recognize it', 'Increased resistance during passive movement. Lead-pipe rigidity feels uniformly stiff; cogwheel rigidity has a ratchet-like, interrupted quality.'], ['Associated findings', 'Stiff arms, legs, or trunk; reduced flexibility; shoulder discomfort; stooped posture. Hypomimia (a mask-like expression) and reduced blinking also reflect reduced spontaneous movement.']] },
          { title: 'A — Akinesia / bradykinesia', fields: [['Recognize it', 'Bradykinesia is slowness of movement, often with decreasing size or speed during repeated movements. Akinesia refers to absent movement or difficulty initiating movement; they are related but not identical terms.'], ['Examples', 'Freezing episodes, difficulty rising or turning, small handwriting (micrographia), reduced arm swing, reduced blinking, and slower or smaller movements during daily activities. Speech may become soft, monotonous, slow, or difficult to sustain.']] },
          { title: 'P — Postural instability', fields: [['Recognize it', 'Impaired balance and postural/righting responses, with difficulty maintaining stability or recovering from a disturbance.'], ['Gait and injury risk', 'Shuffling steps, difficulty turning or pivoting, and festination—progressively small, rapid steps that may propel the patient forward—can accompany PD. These are related gait problems rather than all being caused solely by impaired balance. Falls are a major concern.']] }
        ] },
        { type: 'heading', text: 'Other manifestations from your Week 7 notes' },
        { type: 'list', items: ['Sweating, drooling or pooled saliva, orthostatic hypotension, and reduced spontaneous movement.', 'Delayed gastric emptying, constipation, urinary difficulties including retention in some patients, and sexual dysfunction.', 'Changes in vision or sense of smell; dysphagia with choking, aspiration, dehydration, and malnutrition risk.', 'Sleep disturbances, apathy, depression, anxiety, and changes in coping or social engagement.', 'Cognitive and executive-function changes; some patients develop dementia, hallucinations, or psychosis. New delirium is not simply expected progression and warrants evaluation for an acute cause.'] },
        { type: 'paragraph', text: 'Symptoms and progression differ: a person may have a tremor-dominant or a predominantly non-tremor presentation. Limited movement can leave the patient feeling trapped or overwhelmed; assess their experience rather than judging cognition or emotions by a mask-like face.' }
      ],
      risk: [
        { type: 'heading', text: 'Risk factors and associations' },
        { type: 'list', items: ['Increasing age is an important risk factor.', 'PD is more common in men.', 'Family history, genetic susceptibility, and environmental exposures can contribute; many cases have no single identifiable cause.'] },
        { type: 'heading', text: 'Prevention and early recognition' },
        { type: 'paragraph', text: 'There is no established way to prevent every case of PD. For nursing care, prevention focuses on complications: aspiration, falls, medication-related harm, constipation, malnutrition, and loss of function.' },
        { type: 'paragraph', text: 'Family members may notice subtle changes over time—unilateral tremor, stiffness, smaller handwriting, reduced arm swing, slower tasks, or a softer voice—that a brief encounter can miss. Refer concerning changes for specialist assessment rather than diagnosing from one sign.' }
      ],
      diagnostics: [
        { type: 'paragraph', text: 'Diagnosis is primarily clinical and made by a clinician experienced in movement disorders. History, examination, symptom evolution, medication exposure, and response to treatment are considered together.' },
        { type: 'cards', items: [
          { title: 'Clinical history and neurological examination', fields: [['Purpose', 'Identify bradykinesia with rigidity and/or rest tremor and assess supportive findings, alternative explanations, and red flags.'], ['Nursing considerations', 'Document onset, asymmetry, gait, falls, freezing, ADLs, cognition, autonomic symptoms, and exact medication use. Include observations from the patient and care partner.']] },
          { title: 'Levodopa response', fields: [['Meaning', 'A clear, sustained response can support PD. A positive response alone does not prove the diagnosis, and an acute L-dopa challenge is not a routine confirmatory test.'], ['Nursing considerations', 'Record mobility and function before and after prescribed doses, dose timing, adverse effects, and “on/off” patterns. Do not independently withhold or change doses for testing.']] },
          { title: 'Dopamine-transporter SPECT (DaTscan)', fields: [['Purpose and limits', 'May help a specialist distinguish a degenerative parkinsonian syndrome from essential tremor when the clinical diagnosis is uncertain. It is not needed in every typical case and cannot by itself reliably distinguish PD from every other degenerative parkinsonian disorder.'], ['Nursing considerations', 'Explain why the test is ordered and follow nuclear-medicine instructions for preparation, medication review, and radiation-safety precautions.']] },
          { title: 'Other imaging and tests', fields: [['Purpose and limits', 'MRI or other tests may help investigate alternative causes. PET was mentioned in the original notes, but it is not routine testing to confirm PD; NICE reserves its use in the differential diagnosis for clinical trials.'], ['Nursing considerations', 'Prepare the patient for the specific ordered investigation. Imaging is interpreted alongside the clinical picture rather than substituted for the neurological assessment.']] }
        ] }
      ],
      medical: [
        { type: 'heading', text: 'Treatment goals' },
        { type: 'paragraph', text: 'Treatment aims to reduce symptoms, preserve functional independence, and improve quality of life. Medicines, rehabilitation, nutrition, and selected procedures work together. There is no established cure; symptom improvement does not mean the underlying disease has been eliminated.' },
        { type: 'heading', text: 'Medication review' },
        { type: 'paragraph', text: 'Individualize dopaminergic treatment and review “wearing off,” unpredictable “off” periods, dyskinesia, and non-motor symptoms. A specialist may adjust the formulation, timing, or regimen when control is inadequate. Nurses document patterns and administer the prescribed regimen accurately.' },
        { type: 'heading', text: 'Selected procedural treatments' },
        { type: 'list', items: ['Deep brain stimulation (DBS): electrodes implanted at selected brain targets deliver electrical stimulation. It may help selected patients with troublesome motor fluctuations, tremor, or dyskinesia despite optimized treatment; assessment includes expected motor response and cognitive/psychiatric status.', 'MRI-guided focused ultrasound: focused energy creates a targeted lesion for selected motor symptoms, particularly medication-refractory tremor in appropriate candidates. It differs from adjustable DBS and requires specialist selection and discussion of risks.', 'Neither procedure is a cure or an appropriate option for every patient. Continue interdisciplinary care and prescribed follow-up.'] },
        { type: 'paragraph', text: 'Address hallucinations or psychosis by looking for acute illness, delirium, or medication effects and involving the specialist team. “Use any antipsychotic at a low dose” is not a safe rule: dopamine-blocking agents may markedly worsen motor symptoms. PD-compatible treatment requires careful selection and monitoring.' }
      ],
      medications: [
        {
          "type": "cards",
          "items": [
            {
              "title": "Carbidopa–levodopa",
              "fields": [
                [
                  "Action and purpose",
                  "Levodopa (L-dopa) crosses into the brain and is converted to dopamine. Carbidopa reduces conversion outside the brain, allowing more levodopa to reach the brain and helping reduce peripheral adverse effects such as nausea."
                ],
                [
                  "Administration",
                  "Use the patient’s exact prescribed times, dose, formulation, and route. Do not substitute routine hospital medication-round times or abruptly stop treatment. Delayed or missed doses can worsen “off” symptoms and immobility."
                ],
                [
                  "Meals and protein",
                  "Some patients have less benefit with high-protein meals. If this occurs, the care team may separate immediate-release levodopa from meals—for example, around 30 minutes before or 60 minutes after food—or arrange protein redistribution. Follow the individual plan and formulation instructions; maintain adequate total protein. A low-protein snack may help nausea."
                ],
                [
                  "Monitor",
                  "Motor benefit, wearing off, dyskinesia, nausea/vomiting, confusion or hallucinations, dizziness, orthostatic hypotension, and sleepiness."
                ]
              ]
            },
            {
              "title": "Other symptom-directed medicines",
              "fields": [
                [
                  "Purpose",
                  "Specialists may use other dopaminergic agents or adjuncts to improve symptom control. Some therapies reduce cholinergic activity in selected patients, but anticholinergic adverse effects are particularly important with cognitive, urinary, or bowel problems."
                ],
                [
                  "Nursing considerations",
                  "Review the actual prescribed medicines and intended effects. Do not assume every PD drug has identical timing, crushing, or food instructions. Report new confusion, hallucinations, sleepiness, or worsening function."
                ]
              ]
            }
          ]
        },
        {
          "type": "heading",
          "text": "Other medication classes: examples and safety"
        },
        {
          "type": "cards",
          "items": [
            {
              "title": "Dopamine agonists",
              "fields": [
                [
                  "Examples / role",
                  "Pramipexole, ropinirole and the rotigotine patch stimulate dopamine receptors; used alone or with levodopa in selected patients."
                ],
                [
                  "Monitor / teach",
                  "Orthostatic hypotension, hallucinations, edema and sleepiness/sudden sleep episodes. Ask about gambling, spending, eating or sexual urges (impulse-control problems); report changes promptly. Do not drive with sleep attacks or independently stop therapy."
                ]
              ]
            },
            {
              "title": "MAO-B inhibitors",
              "fields": [
                [
                  "Examples / role",
                  "Rasagiline, selegiline and safinamide reduce dopamine breakdown; specific indications differ."
                ],
                [
                  "Monitor / teach",
                  "Review interacting prescription/OTC drugs with pharmacy; monitor dyskinesia, hypotension, hallucinations and sleep changes. Do not apply one formulation’s instructions to every drug."
                ]
              ]
            },
            {
              "title": "COMT inhibitors",
              "fields": [
                [
                  "Examples / role",
                  "Entacapone or opicapone prolong levodopa benefit and reduce wearing off; they are adjuncts to levodopa."
                ],
                [
                  "Monitor / teach",
                  "Dyskinesia, dizziness/hypotension and gastrointestinal effects; levodopa adjustments require the prescriber. Entacapone can discolor urine."
                ]
              ]
            },
            {
              "title": "Amantadine",
              "fields": [
                [
                  "Role",
                  "May reduce levodopa-associated dyskinesia; formulation and renal function affect dosing."
                ],
                [
                  "Monitor / teach",
                  "Hallucinations/confusion, edema, dizziness and mottled skin (livedo reticularis). Review renal dosing and avoid an unsupervised abrupt stop."
                ]
              ]
            },
            {
              "title": "Anticholinergics",
              "fields": [
                [
                  "Examples / role",
                  "Trihexyphenidyl or benztropine have a limited role for selected tremor presentations."
                ],
                [
                  "Monitor / teach",
                  "Dry mouth, blurred vision, constipation, urinary retention and cognitive effects. Often unsuitable for older adults or people with cognitive problems; specialist selection is essential."
                ]
              ]
            }
          ]
        },
        {
          "type": "heading",
          "text": "Medicines that can worsen parkinsonism"
        },
        {
          "type": "paragraph",
          "text": "Avoid dopamine-blocking medicines such as metoclopramide and haloperidol in PD; seek a PD-compatible alternative from the prescriber/pharmacist. A low dose does not make an otherwise unsuitable dopamine antagonist safe. Reconcile prescription drugs, OTC products, and supplements before administration."
        },
        {
          "type": "callout",
          "title": "If swallowing is unsafe or the patient is NPO",
          "text": "Escalate promptly for a safe medication route and schedule. Do not give tablets orally when swallowing is unsafe, crush modified-release products indiscriminately, or simply omit time-critical Parkinson’s medicines. Neurology and pharmacy should guide the alternative plan."
        }
      ],
      nonpharmacological: [
        { type: 'heading', text: 'Mobility, exercise, and rehabilitation' },
        { type: 'paragraph', text: 'Use an individualized daily activity program to support strength, coordination, balance, flexibility, and function. Include range-of-motion and stretching exercises. Walking, stationary cycling, gardening, or supervised water-based exercise may be appropriate according to ability and fall risk; do not assume every activity is safe without assessment.' },
        { type: 'paragraph', text: 'Physical therapy can teach upright posture, deliberate larger steps, foot clearance, arm swing when feasible, and safe turning. Practice visual or auditory cues for freezing, such as stepping over an imaginary line or using a rhythm. Occupational therapy supports self-care, the home environment, and adaptive devices.' },
        { type: 'heading', text: 'Speech, swallowing, and social participation' },
        { type: 'paragraph', text: 'Speech-language pathology (SLP) assesses swallowing and communication and recommends individualized strategies, voice therapy, and devices. Encourage therapeutic programs and achievable social or recreational activity. Allow time for the patient to respond and participate rather than taking over tasks they can perform.' }
      ],
      'adverse-effects': [
        {
          "type": "heading",
          "text": "Treatment effects to monitor"
        },
        {
          "type": "list",
          "items": [
            "Dyskinesia: involuntary movements that may occur with dopaminergic treatment; distinguish these from resting tremor and from a rigid, bradykinetic “off” state.",
            "Nausea and vomiting, which can reduce intake and medication adherence.",
            "Dizziness and orthostatic hypotension, increasing fall and fainting risk. Autonomic dysfunction from PD can contribute as well as medication.",
            "Confusion, hallucinations, psychosis, and excessive daytime sleepiness; assess whether these reflect medication, PD, sleep problems, or an acute illness.",
            "Anticholinergic effects, when these medicines are prescribed, may worsen dry mouth, constipation, urinary retention, and cognition."
          ]
        },
        {
          "type": "paragraph",
          "text": "Dopaminergic therapy can cause impulse-control problems, particularly with dopamine agonists. Ask privately about new compulsive urges and involve chosen supports with consent. Sudden sleep episodes require stopping driving and contacting the care team; medication reduction/withdrawal must be supervised. Abrupt loss of dopaminergic treatment can cause severe akinesia or a malignant-like syndrome with fever/rigidity and requires urgent assessment."
        },
        {
          "type": "heading",
          "text": "Disease-related complications"
        },
        {
          "type": "list",
          "items": [
            "Aspiration, aspiration pneumonia, dehydration, or malnutrition related to dysphagia.",
            "Falls and injuries from freezing, postural impairment, or blood-pressure changes.",
            "Constipation and possible impaction, reduced independence, and caregiver strain.",
            "Sleep and psychiatric disturbances. New acute confusion requires assessment for delirium rather than being dismissed as inevitable PD progression."
          ]
        },
        {
          "type": "paragraph",
          "text": "Track complications after procedures as directed by the surgical team and report new neurological changes or infection concerns promptly."
        }
      ],
      nutrition: [
        { type: 'heading', text: 'Swallowing safety and aspiration prevention' },
        { type: 'paragraph', text: 'Slower and less coordinated tongue, oral, pharyngeal, and airway-protection movements can impair swallowing. Dysphagia is not explained by rigidity alone. It can affect food, drinks, pills, and saliva; aspiration may occur without obvious coughing.' },
        { type: 'cards', items: [
          { title: 'Positioning', fields: [['During and after meals', 'Sit fully upright, close to 90° when tolerated, with appropriate trunk and head support. Remain upright afterward—commonly at least 30 minutes, or 30–45 minutes if that is the care plan.'], ['Chin tuck', 'Use only when SLP assessment shows it is helpful for that patient. It is not a universal airway-protection maneuver and can be unsuitable for some swallowing problems.']] },
          { title: 'Food texture and liquids', fields: [['Individualize', 'Soft, moist, semisolid foods may be easier to manage, while dry/crumbly foods or thin liquids may be difficult for some patients. Use the specific texture and liquid thickness recommended by SLP.'], ['Monitor', 'Thickened liquids are not automatically required for every patient and do not guarantee prevention of aspiration pneumonia. Watch hydration, intake, tolerance, and the patient’s preferences.']] },
          { title: 'Meal pacing and timing', fields: [['Pacing', 'Offer small bites, allow extra time without rushing, minimize distractions, and provide assistance or rest breaks as needed. Use only the swallowing sequence or compensatory technique taught for the individual patient.'], ['Timing', 'When feasible, eat during the patient’s best “on” period. Your suggested 30–60 minutes after carbidopa–levodopa may fit some immediate-release regimens, but onset and swallowing response vary. Follow the prescribed medication/meal plan rather than assuming a fixed peak or guaranteed safe swallow.']] },
          { title: 'Bedside readiness', fields: [['Before oral intake', 'Assess swallowing concerns and use the facility’s screening/referral pathway. A gag reflex or a bedside check alone cannot exclude aspiration. Unsafe swallowing requires SLP/team review before oral food, fluids, or medicines.'], ['Equipment and care', 'Keep suction readily available when indicated, support oral hygiene, and observe intake closely. Suction readiness does not replace safe feeding and airway assessment.']] }
        ] },
        { type: 'heading', text: 'Maintain adequate intake and weight' },
        { type: 'paragraph', text: 'Tremor, rigidity, dry mouth, reduced hand control, chewing difficulty, and fatigue may reduce intake or alter energy needs. Monitor weight regularly—such as weekly when tracking nutritional risk—and investigate unintentional changes. Offer smaller, more frequent meals, supplements, or calorie-dense choices if intake or weight is inadequate; not everyone needs a high-calorie diet.' },
        { type: 'paragraph', text: 'Coordinate adequate protein with levodopa when a food interaction is present. Do not broadly eliminate protein. Involve the dietitian to balance weight, hydration, fiber, and medication response. Increase fluids and fiber for constipation only within the patient’s swallowing safety and medical restrictions.' },
        { type: 'heading', text: 'When oral intake remains insufficient' },
        { type: 'paragraph', text: 'Consider supplemental nutrition and, when appropriate, enteral feeding through an individualized multidisciplinary discussion. PEG placement is based on persistent unsafe or inadequate intake, medication needs, goals, and preferences—not immobility alone. A feeding tube does not eliminate aspiration of saliva or reflux.' }
      ],
      assessment: [
        { type: 'cards', items: [
          { title: 'Function and mobility', fields: [['Assess', 'ADLs, self-feeding, hygiene, transfers, gait, turning, balance, stiffness, tremor, freezing, dyskinesia, and the amount of assistance needed.'], ['Look for patterns', 'Compare “on” and “off” periods with exact medication times. Check lying/standing blood pressure and dizziness when indicated and safe.']] },
          { title: 'Airway, swallowing, and nutrition', fields: [['Assess', 'Swallowing difficulty, prolonged meals, drooling or pooled secretions, cough strength, choking, wet/gurgly voice, chest symptoms, lung sounds, hydration, and weight trends.'], ['Important limitation', 'Silent aspiration can occur without coughing. Normal lung sounds or an apparently intact gag do not establish safe swallowing; recurrent chest infection, unexplained fever, weight loss, or changing intake should prompt assessment.']] },
          { title: 'Communication, cognition, and coping', fields: [['Assess', 'Voice volume, speech clarity and pace, facial movement, attention, executive function, mood, anxiety, apathy, hallucinations, sleep, nocturia, and caregiver stress.'], ['Respond', 'Ask the patient how symptoms affect life. Distinguish chronic cognitive change from acute delirium and investigate new changes.']] },
          { title: 'Bowel, bladder, and treatment', fields: [['Assess', 'Bowel pattern, stool consistency, fluid/fiber intake, gastric symptoms, urinary difficulties, medication adherence, adverse effects, and the home environment.'], ['Review', 'Check the medication list for dopamine antagonists, unnecessary sedatives, and other medicines that may worsen motor, cognitive, or autonomic function.']] }
        ] }
      ],
      diagnoses: [
        { type: 'paragraph', text: 'Select diagnoses supported by the individual assessment and your program’s terminology. The concerns in your notes include:' },
        { type: 'list', items: ['Impaired physical mobility related to bradykinesia, rigidity, and postural/gait impairment.', 'Self-care limitations affecting feeding, dressing, hygiene, or other ADLs.', 'Risk for falls or injury associated with freezing, impaired balance, and orthostatic hypotension.', 'Risk for aspiration associated with dysphagia and reduced airway protection.', 'Inadequate nutritional intake when assessment shows difficulty eating or unintended weight loss.', 'Constipation related to gastrointestinal dysfunction, reduced mobility, intake, or medication effects.', 'Impaired verbal communication related to reduced voice volume and speech-motor changes.', 'Coping difficulties and caregiver strain when supported by assessment.'] }
      ],
      priorities: [
        { type: 'callout', title: 'The nurse’s first action', text: 'Assess the immediate problem and ABCs. With choking, respiratory distress, or inability to protect the airway, stop feeding and activate the appropriate emergency response. In routine care, establish swallowing safety, mobility/fall risk, and the exact medication schedule early.' },
        { type: 'cards', items: [
          { title: '1. Airway and aspiration prevention', fields: [['Priority actions', 'Assess swallowing, pooled secretions, drooling, cough strength, and respiratory findings. Use the individual SLP plan and appropriate supervision.'], ['Remember', 'Silent aspiration may have no cough; lung sounds alone cannot rule it out. Escalate concerning changes rather than waiting for overt choking or pneumonia.']] },
          { title: '2. Fall and injury prevention', fields: [['Priority actions', 'Address both postural instability and orthostatic hypotension. Help with slow position changes, clear clutter, and use assessed assistive devices.'], ['Freezing strategies', 'PT may teach an appropriately stable stance, weight shifting, deliberate steps over an imaginary/visual line, rhythmic auditory cues, and safe turning. Do not pull or rush the patient or prescribe one stance for every gait problem.']] },
          { title: '3. Strict medication timing', fields: [['Priority actions', 'Give carbidopa–levodopa at the prescribed times to reduce preventable “off” periods and immobility. Check the exact formulation and coordinate meals when protein affects response.'], ['Medication safety', 'Avoid metoclopramide and haloperidol; obtain safer alternatives. If swallowing is unsafe or NPO is ordered, urgently arrange a safe medication route rather than missing doses.']] },
          { title: '4. Mobility, nutrition, and bowel support', fields: [['Priority actions', 'Encourage individualized exercise, ROM, and physical therapy. Support self-care and communication, adequate nutrition, and a regular bowel program.'], ['Individualize', 'Use smaller, calorie-dense meals if needed and increase fluids/fiber when appropriate. These measures must respect swallowing safety, weight goals, and medical restrictions.']] }
        ] }
      ],
      plan: [
        {
          "type": "paragraph",
          "text": "Agree on patient-centered goals with realistic time frames and the patient’s level of function in mind. Your Week 7 goals become the outcomes to evaluate:"
        },
        {
          "type": "cards",
          "items": [
            {
              "title": "1. Mobility and self-care",
              "fields": [
                [
                  "Goal",
                  "Improve or maintain safe functional mobility and transfers using agreed assistance or cueing, without preventable falls. Maintain as much independence as possible in feeding, hygiene, and other ADLs with adaptive equipment and enough time."
                ],
                [
                  "Actions",
                  "Coordinate PT/OT, medication-aware activity, safe transfers, fall prevention, cueing and adaptive self-care equipment. Allow adequate time and agreed assistance."
                ],
                [
                  "Evaluate",
                  "Compare transfers, mobility and chosen ADLs with baseline; review falls, freezing and the assistance needed."
                ]
              ]
            },
            {
              "title": "2. Swallowing and nutrition",
              "fields": [
                [
                  "Goal",
                  "Follow the individualized swallowing plan, meet nutrition/hydration goals, and maintain an appropriate weight trend."
                ],
                [
                  "Actions",
                  "Use the individual SLP feeding plan, upright positioning and meal pacing; coordinate medicines/meals and monitor intake, hydration and weight."
                ],
                [
                  "Evaluate",
                  "Review intake and weight against agreed targets and act on aspiration concerns; absence of coughing alone does not establish safety."
                ]
              ]
            },
            {
              "title": "3. Bowel comfort",
              "fields": [
                [
                  "Goal",
                  "Establish a comfortable, regular bowel pattern without impaction or treatment complications."
                ],
                [
                  "Actions",
                  "Support a regular bowel routine, safe activity, fluids/fiber within restrictions and prescribed bowel medicines when needed."
                ],
                [
                  "Evaluate",
                  "Review stool comfort/frequency and check for impaction, dehydration or bowel-treatment adverse effects."
                ]
              ]
            },
            {
              "title": "4. Medication self-management",
              "fields": [
                [
                  "Goal",
                  "Demonstrate the medication schedule, explain adverse effects and warning signs, and identify how to obtain help."
                ],
                [
                  "Actions",
                  "Confirm exact doses/formulations/times, use teach-back and track on/off response and adverse effects; arrange a safe route if swallowing is unsafe."
                ],
                [
                  "Evaluate",
                  "The patient/caregiver demonstrates the schedule, explains warning signs and knows how to obtain help; benefit and toxicity are reassessed."
                ]
              ]
            },
            {
              "title": "5. Communication and support",
              "fields": [
                [
                  "Goal",
                  "Communicate needs effectively using speech strategies or an appropriate device. Use positive coping strategies and access a sustainable support or caregiver-relief plan."
                ],
                [
                  "Actions",
                  "Use SLP communication strategies or aids, allow response time, assess coping and involve chosen supports with consent; arrange caregiver relief."
                ],
                [
                  "Evaluate",
                  "The patient expresses needs and participates in decisions; coping and practical caregiver support are reviewed."
                ]
              ]
            }
          ]
        }
      ],
      interventions: [
        { type: 'heading', text: 'Support movement and self-care' },
        { type: 'list', items: ['Create a daily exercise plan with PT that addresses strength, coordination, range of motion, rigidity, posture, balance, gait, and safe turning.', 'Allow time and encourage participation in ADLs. Offer help where needed without taking over tasks the patient can safely complete.', 'Clear tripping hazards and evaluate lighting, bathroom access, and transfer surfaces. OT can recommend walking aids, grab bars, and other adaptations.', 'Use bed rails or overhead transfer equipment only after individual assessment; they are not universal fall-prevention measures and can create entrapment or injury risks.', 'Use easy-grip utensils, plate stabilizers, and spill-resistant cups. If a warming tray is used for slow meals, check temperature and burn safety.'] },
        { type: 'heading', text: 'Bowel elimination' },
        { type: 'paragraph', text: 'Maintain regular meals and a bowel routine, appropriate activity, hydration, and fiber when safe. PD-related slowed gut function, medicines, reduced mobility, and inadequate intake can contribute to constipation. Do not use a blanket “avoid laxatives” rule: prescribed laxatives may be appropriate if lifestyle measures are insufficient. Psyllium requires adequate fluid and a safe swallow and may be unsuitable with obstruction risk or severe dysphagia; obtain a suitable plan.' },
        { type: 'heading', text: 'Communication' },
        { type: 'paragraph', text: 'Give the patient time, reduce distractions, listen actively, and confirm meaning. Encourage short, clear phrases and deliberate pronunciation as taught by SLP. Attend to facial and other nonverbal cues without assuming a lack of expression means a lack of emotion. A voice amplifier or another communication aid may help when soft speech limits communication.' },
        { type: 'heading', text: 'Sleep, mental health, and participation' },
        { type: 'paragraph', text: 'Assess sleep quality, nocturia, caffeine use, daytime sleepiness, apathy, depression, and hallucinations. Promote a regular sleep/activity pattern and review causes of excessive sleepiness; do not simply prohibit all daytime rest. Encourage achievable goals, therapeutic participation, and social or recreational activities. New psychiatric symptoms need assessment and medication review, not automatic nonspecific antipsychotic treatment.' },
        { type: 'heading', text: 'Continuing care and caregiver support' },
        { type: 'paragraph', text: 'Use an interdisciplinary approach and involve the family, partner, or caregiver with consent. Teach care skills, assess stress, encourage relief from caregiving, and connect with community resources. Evaluate the home for adaptations. As needs increase, discuss home support, respite, or longer-term care; acute complications may require hospital care. Discuss advance directives and goals of care when appropriate.' }
      ],
      education: [
        {
          "type": "heading",
          "text": "Medication routine and safety"
        },
        {
          "type": "list",
          "items": [
            "Know the exact medicine, formulation, dose, and clock times. Bring the current schedule to hospital and explain why timing matters.",
            "Do not abruptly stop or independently change carbidopa–levodopa. Report “off” patterns, dyskinesia, nausea, dizziness, confusion, hallucinations, and excessive sleepiness.",
            "If protein interferes with levodopa, use the agreed meal/dose plan while maintaining adequate nutrition. Do not automatically eliminate protein.",
            "Check new prescriptions and OTC medicines with the PD team or pharmacist. Specifically flag dopamine-blocking medicines such as metoclopramide and haloperidol.",
            "If swallowing pills becomes difficult or NPO is required, seek a safe alternative formulation/route promptly. Do not crush modified-release medicines or skip critical doses without a plan."
          ]
        },
        {
          "type": "paragraph",
          "text": "With dopamine agonists, report new compulsive gambling, shopping, eating or sexual urges, hallucinations, or sudden sleep episodes. Avoid driving if sleep attacks occur and obtain prompt specialist advice. Do not independently stop or taper dopaminergic medicines."
        },
        {
          "type": "heading",
          "text": "Daily care and warning signs"
        },
        {
          "type": "list",
          "items": [
            "Demonstrate the prescribed swallowing, positioning, pacing, and texture plan. Know that aspiration may be silent and that chin tuck is used only when individually recommended.",
            "Practice fall prevention, slow position changes, and the PT-taught response to freezing. Keep pathways clear and use assessed equipment.",
            "Follow the activity, bowel, fluid, and nutrition plan and report constipation, unintentional weight loss, or a change in oral intake.",
            "Seek prompt help for new swallowing difficulty, repeated chest infections, fever, new confusion, recurrent fainting/falls, or medication interruption. Choking with breathing difficulty is an emergency.",
            "Include caregivers in teaching when the patient wishes. Adapt education to cognition, disease severity, and actual ability; confirm understanding through teach-back and practical demonstration."
          ]
        }
      ],
      evaluation: [
        { type: 'list', items: ['Mobility and self-care: the patient moves and transfers more safely, uses cueing/equipment effectively, and retains the greatest practical independence in ADLs.', 'Swallowing and nutrition: the individual feeding plan is followed, intake and hydration meet agreed goals, weight is stable or improving as intended, and concerning respiratory or swallowing changes are addressed. No cough alone is not proof that aspiration is absent.', 'Bowel function: stools are comfortable and regular for the patient without impaction, dehydration, or adverse effects from the bowel regimen.', 'Medication response: doses are given at the correct times, “on/off” patterns are documented, and benefit is balanced against dyskinesia, hypotension, confusion, and other adverse effects.', 'Communication and coping: the patient can express needs, participates in decisions and achievable activities, and identifies useful coping strategies.', 'Safety and support: preventable falls and other complications are minimized, the home plan is workable, and the caregiver can demonstrate care tasks and access relief or support.'] }
      ]
    },
    clarifications: [
      { title: 'TRAP and diagnosis', text: 'Retained all four TRAP categories and their examples. Tremor patterns are typical rather than absolute, and postural instability often appears later. Bradykinesia and akinesia are related but distinct. PD is a clinical diagnosis; treatment response supports it but does not independently confirm it. PET is not routine diagnostic confirmation.' },
      { title: 'Pathway and disease terminology', text: 'Corrected the corpus callosum location to the nigrostriatal/basal ganglia pathway. Secondary parkinsonism is not interchangeable with idiopathic Parkinson’s disease. Removed an unsupported fixed “up to 50%” choking-risk statement while preserving dysphagia and aspiration as major risks.' },
      { title: 'Swallowing safety', text: 'Kept upright positioning, the postmeal upright period, small bites, pacing, moisture/texture modification, and suction readiness. Chin tuck, liquid thickness, and swallowing sequences require individualized assessment. A gag reflex, absence of cough, or normal lung sounds does not exclude aspiration. A fixed medication interval does not establish a safe swallow.' },
      { title: 'Medication and nutrition', text: 'Clarified individualized “on” periods and protein interactions rather than imposing a single levodopa/meal rule. Adequate protein remains important. Orthostatic hypotension is a key monitoring concern, rather than presenting increased blood pressure as the usual levodopa effect. High-calorie meals are used when indicated by nutritional assessment.' },
      { title: 'Bowel care, feeding tubes, and psychiatric treatment', text: 'Replaced blanket avoidance of laxatives with an appropriate supervised bowel regimen. PEG is considered for persistent intake/medication needs and patient goals, not immobility alone, and does not eliminate aspiration. A low dose does not make every antipsychotic appropriate for PD; dopamine-blocking agents such as haloperidol can worsen motor symptoms.' },
      { title: 'Incomplete older phrases', text: 'The unfinished walking instruction (“raising your…”), unspecified living setting, and unclear amplifier/communication phrases cannot be recovered word for word. Their care areas are completed with current PT-guided gait, OT/home adaptation, and SLP/communication guidance. This does not claim to reconstruct the original missing wording. Bed equipment and daytime rest are also individualized rather than universal rules.' }
    ],
    references: [
      {
        "title": "NIH / NINDS · Parkinson’s disease: Hope Through Research",
        "url": "https://www.ninds.nih.gov/sites/default/files/2025-05/parkinsons-disease-hope-through-research.pdf",
        "supports": "Dopamine loss, motor/non-motor findings, disease course, and general treatment concepts."
      },
      {
        "title": "NICE NG71 · Parkinson’s disease in adults",
        "url": "https://www.nice.org.uk/guidance/ng71/chapter/Recommendations",
        "supports": "Clinical diagnosis, SPECT/PET limitations, medication timing, rehabilitation, protein redistribution, and psychiatric care."
      },
      {
        "title": "Parkinson’s Foundation · Getting diagnosed",
        "url": "https://www.parkinson.org/understanding-parkinsons/getting-diagnosed",
        "supports": "Clinical assessment, treatment response, and the supporting role and limits of diagnostic tests."
      },
      {
        "title": "RUSH · Focused ultrasound outcomes and risks",
        "url": "https://www.fusanddbs.org/fus/outcomes-and-risks",
        "supports": "Selected motor-symptom targets, patient selection, and focused ultrasound limitations."
      },
      {
        "title": "Parkinson’s Foundation · Tremor",
        "url": "https://www.parkinson.org/understanding-parkinsons/movement-symptoms/tremor",
        "supports": "Typical rest-tremor pattern, purposeful movement, and sleep."
      },
      {
        "title": "Parkinson’s Foundation · Levodopa",
        "url": "https://www.parkinson.org/living-with-parkinsons/treatment/prescription-medications/levodopa",
        "supports": "Carbidopa–levodopa, food/protein interaction, nausea, and response monitoring."
      },
      {
        "title": "Parkinson’s Foundation · Hospital care recommendations",
        "url": "https://www.parkinson.org/sites/default/files/documents/hospital-care-recommendations-april2023.pdf",
        "supports": "Time-critical medication, harmful dopamine-blocking medicines, alternative medication delivery, and hospital safety."
      },
      {
        "title": "ASHA · Adult dysphagia",
        "url": "https://www.asha.org/practice-portal/clinical-topics/adult-dysphagia/",
        "supports": "Individualized swallowing assessment, silent aspiration, chin-down posture, and food/liquid modification."
      },
      {
        "title": "ASHA · Swallowing screening",
        "url": "https://www.asha.org/practice-portal/clinical-topics/adult-dysphagia/swallowing-screening",
        "supports": "Bedside screening limits and referral for a comprehensive swallowing assessment."
      },
      {
        "title": "Consensus recommendations · PD dysphagia during hospital admission",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13347581/",
        "supports": "Swallowing warning signs, hospital management, medication/nutrition routes, and care-partner education."
      },
      {
        "title": "Parkinson’s Foundation · Speech & swallowing",
        "url": "https://www.parkinson.org/understanding-parkinsons/non-movement-symptoms/speech-swallowing",
        "supports": "Dysphagia, communication, SLP therapy, voice amplifiers, and assistive strategies."
      },
      {
        "title": "Alberta Health Services · Eating and swallowing safely",
        "url": "https://myhealth.alberta.ca/Health/aftercareinformation/pages/conditions.aspx?hwid=custom.ab_eating_swallowing_inst",
        "supports": "Positioning, pacing, and the individualized safe-feeding plan."
      },
      {
        "title": "APDA · Freezing of gait",
        "url": "https://www.apdaparkinson.org/what-is-parkinsons/symptoms/freezing-of-gait/",
        "supports": "Visual/auditory cues and individually chosen strategies for freezing."
      },
      {
        "title": "Parkinson’s Foundation · Low blood pressure",
        "url": "https://www.parkinson.org/library/fact-sheets/blood-pressure",
        "supports": "Autonomic dysfunction, orthostatic hypotension, medication contributions, and fall risk."
      },
      {
        "title": "Parkinson’s Foundation · Exercise",
        "url": "https://www.parkinson.org/living-with-parkinsons/treatment/exercise",
        "supports": "Activity, strength, balance, flexibility, and individualized exercise approaches."
      },
      {
        "title": "Parkinson’s Foundation · Nutrition",
        "url": "https://www.parkinson.org/library/fact-sheets/nutrition",
        "supports": "Balanced nutrition, adequate intake, fiber, and fluids."
      },
      {
        "title": "Parkinson’s Foundation · Constipation & nausea",
        "url": "https://www.parkinson.org/understanding-parkinsons/non-movement-symptoms/constipation",
        "supports": "PD gastrointestinal changes and supervised use of bowel medicines."
      },
      {
        "title": "Parkinson’s Foundation · Sleep problems",
        "url": "https://www.parkinson.org/library/fact-sheets/sleep",
        "supports": "Night-time symptoms, daytime sleepiness, and individualized assessment."
      },
      {
        "title": "FDA · Bed safety and bed rails",
        "url": "https://www.fda.gov/medical-devices/hospital-beds/guide-bed-safety-bed-rails-hospitals-nursing-homes-and-home-health-care-facts",
        "supports": "Individual assessment, entrapment risk, monitoring, and alternatives to routine bed rails."
      },
      {
        "title": "Parkinson’s Foundation · Dopamine agonists",
        "url": "https://www.parkinson.org/living-with-parkinsons/treatment/prescription-medications/dopamine-antagonists",
        "supports": "Named agents, motor role, sleep and impulse-control risks."
      },
      {
        "title": "Parkinson’s Foundation · MAO-B inhibitors",
        "url": "https://www.parkinson.org/living-with-parkinsons/treatment/prescription-medications/mao-b-inhibitors",
        "supports": "Dopamine-breakdown inhibition, examples and medication review."
      },
      {
        "title": "Parkinson’s Foundation · COMT inhibitors",
        "url": "https://www.parkinson.org/living-with-parkinsons/treatment/prescription-medications/comt-inhibitors",
        "supports": "Levodopa adjuncts, wearing off and adverse-effect monitoring."
      },
      {
        "title": "Parkinson’s Foundation · Amantadine",
        "url": "https://www.parkinson.org/living-with-parkinsons/treatment/prescription-medications/amantadine",
        "supports": "Dyskinesia role, renal dosing and adverse effects."
      },
      {
        "title": "Parkinson’s Foundation · Anticholinergics",
        "url": "https://www.parkinson.org/living-with-parkinsons/treatment/prescription-medications/anticholinergic-drugs",
        "supports": "Selected tremor use and cognitive/urinary/bowel limitations."
      }
    ]
  },
  'myasthenia-gravis': {
    title: 'Myasthenia gravis', abbreviation: 'MG', week: 8, deck: 'myasthenia-gravis',
    reading: 'Course study guide: Myasthenia gravis—clinical manifestations and pyridostigmine patient instructions. B&S textbook: Chapter 65, MG section.',
    reviewed: 'November 15, 2026',
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
        {
          "type": "heading",
          "text": "Cholinergic effects of acetylcholinesterase inhibitors"
        },
        {
          "type": "list",
          "items": [
            "Abdominal cramping, diarrhea, and nausea.",
            "Increased salivation and bronchial secretions.",
            "Sweating and tearing.",
            "Miosis: constricted or pinpoint pupils, rather than mydriasis.",
            "Bradycardia.",
            "Muscle cramping, twitching, and weakness may also occur."
          ]
        },
        {
          "type": "paragraph",
          "text": "Excess acetylcholinesterase inhibitor can cause cholinergic crisis with profound weakness and respiratory failure. Worsening weakness must be assessed before assuming that another dose is needed. Atropine can treat muscarinic effects such as bradycardia and secretions when ordered, but it does not reverse skeletal-muscle paralysis or replace respiratory support."
        },
        {
          "type": "heading",
          "text": "Corticosteroids and other immunosuppressants"
        },
        {
          "type": "paragraph",
          "text": "Steroids may transiently worsen weakness when started; longer-term concerns include infection, hyperglycemia, mood changes, and bone loss. Other immunosuppressants require drug-specific surveillance, including blood counts and organ-function tests as ordered."
        },
        {
          "type": "heading",
          "text": "IVIG"
        },
        {
          "type": "list",
          "items": [
            "Headache and infusion reactions.",
            "Thromboembolism.",
            "Renal dysfunction or acute kidney injury.",
            "Fluid overload in susceptible patients.",
            "Severe hypersensitivity or anaphylaxis. IgA deficiency alone does not mean anaphylaxis is inevitable; risk assessment includes anti-IgA antibodies, previous reactions, and the specific product."
          ]
        },
        {
          "type": "heading",
          "text": "Therapeutic plasma exchange"
        },
        {
          "type": "list",
          "items": [
            "Hypotension.",
            "Hypocalcemia, often associated with citrate anticoagulation.",
            "Bleeding or changes in coagulation.",
            "Vascular-access or central-line infection; this is not limited to a limb site."
          ]
        },
        {
          "type": "paragraph",
          "text": "Monitor vital signs, access sites, symptoms, laboratory results, and infusion/procedure tolerance as ordered. “Acute infusion crisis” is not a single shared diagnosis for IVIG and PLEX; recognize the specific adverse reaction and respond according to the treatment protocol."
        },
        {
          "type": "heading",
          "text": "Targeted-therapy infection precautions"
        },
        {
          "type": "paragraph",
          "text": "Complement C5 inhibitors such as eculizumab or ravulizumab greatly increase meningococcal-disease risk. Verify the prescribed MenACWY/MenB vaccination, booster and any antibiotic-prevention plan before treatment. Vaccination and antibiotics do not eliminate risk: fever, severe headache, stiff neck, rash or rapid deterioration needs immediate assessment, even when vaccinated. Carry the treatment safety information and tell emergency clinicians about the complement inhibitor. Other targeted therapies have their own infection and monitoring requirements."
        }
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
        {
          "type": "paragraph",
          "text": "Turn the identified problems into patient-centered outcomes with an agreed time frame. The plan should describe what the patient will achieve, while the interventions section describes what the nurse will do."
        },
        {
          "type": "cards",
          "items": [
            {
              "title": "1. Ventilation and airway clearance",
              "fields": [
                [
                  "Goal",
                  "Maintain effective ventilation and airway clearance, with stable or improving respiratory assessments and FVC/NIF trends."
                ],
                [
                  "Actions",
                  "Trend breathing, cough, secretion handling and ordered FVC/NIF; support the prescribed respiratory plan and escalate deterioration promptly."
                ],
                [
                  "Evaluate",
                  "Respiratory effort and mechanics are stable/improving, secretions are managed and deterioration is recognized before exhaustion."
                ]
              ]
            },
            {
              "title": "2. Safe nutrition and hydration",
              "fields": [
                [
                  "Goal",
                  "Maintain safe intake using the agreed swallowing plan, without observed choking or clinical evidence of aspiration, and meet individualized hydration and nutrition goals."
                ],
                [
                  "Actions",
                  "Follow the swallowing assessment, upright feeding and rest plan; coordinate prescribed immediate-release pyridostigmine with meals and arrange an alternative route if intake is unsafe."
                ],
                [
                  "Evaluate",
                  "Intake/hydration and weight meet individualized targets; chewing/swallowing fatigue and aspiration concerns receive timely review."
                ]
              ]
            },
            {
              "title": "3. Activity and injury prevention",
              "fields": [
                [
                  "Goal",
                  "Complete selected daily activities with planned rest and appropriate assistance, without unsafe exhaustion or injury."
                ],
                [
                  "Actions",
                  "Plan rest before demanding tasks, pace ADLs and provide assessed aids, safe transfers and home adaptations."
                ],
                [
                  "Evaluate",
                  "The patient completes selected activities with appropriate assistance, manageable fatigue and no preventable injury."
                ]
              ]
            },
            {
              "title": "4. Medication skills and support",
              "fields": [
                [
                  "Goal",
                  "Explain and demonstrate the prescribed medication schedule, meal timing, missed-dose instructions, and recognition of emergency symptoms using teach-back. Identify a support person when desired and describe how to obtain practical or emotional support."
                ],
                [
                  "Actions",
                  "Practice the actual schedule and missed-dose plan with teach-back; review emergency signs, follow-up, coping and patient-chosen caregiver support."
                ],
                [
                  "Evaluate",
                  "The patient/caregiver demonstrates the regimen, recognizes emergencies and can obtain medicines, follow-up and practical support."
                ]
              ]
            }
          ]
        },
        {
          "type": "paragraph",
          "text": "Medication timing, hands-on practice, mood screening, and family involvement from your original “plan of care” notes are retained in the intervention and education sections below."
        }
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
      {
        "title": "NIH / NINDS · Myasthenia gravis",
        "url": "https://www.ninds.nih.gov/sites/default/files/2025-05/myasthenia-gravis.pdf",
        "supports": "Overview, symptoms, risk associations, diagnostic evaluation, and crisis triggers."
      },
      {
        "title": "MGFA · Diagnosing MG",
        "url": "https://myasthenia.org/understanding-mg/diagnosing-mg/",
        "supports": "Antibody tests, ice pack test, electrodiagnostic testing, and chest imaging."
      },
      {
        "title": "Autoimmune MG: clinical and biological heterogeneity",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2730933/",
        "supports": "AChR receptor blockade, internalization, complement injury, and subtype differences."
      },
      {
        "title": "ABN · MG management guidelines, 2025 update",
        "url": "https://pubmed.ncbi.nlm.nih.gov/40940171/",
        "supports": "Contemporary treatment framework, thymectomy, rituximab, and newer targeted pathways."
      },
      {
        "title": "International Consensus Guidance · 2020 update",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7884987/",
        "supports": "Rituximab in MuSK MG, selected methotrexate use, and thymectomy considerations."
      },
      {
        "title": "Guideline for the management of myasthenic syndromes · 2023",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10752078/",
        "supports": "Antibody-directed treatment choices, immunosuppressants, and rescue therapies."
      },
      {
        "title": "DailyMed · Mestinon prescribing information",
        "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a851795e-b7a8-40c3-9922-5e79d3eb4d92",
        "supports": "Mechanism, formulations, cholinergic effects, and medication toxicity."
      },
      {
        "title": "Mestinon · Summary of Product Characteristics",
        "url": "https://www.medicines.org.uk/emc/product/962/smpc",
        "supports": "Onset of effect, miosis, interactions, and muscarinic effects of overdose."
      },
      {
        "title": "MedlinePlus · Pyridostigmine",
        "url": "https://medlineplus.gov/druginfo/meds/a682229.html",
        "supports": "Patient instructions, extended-release tablets, and missed doses."
      },
      {
        "title": "NHS · Pyridostigmine for MG",
        "url": "https://www.rightdecisions.scot.nhs.uk/media/zecds0og/1061-v2-pyridostigmine-for-ma.pdf",
        "supports": "Individualized scheduling and timing before meals."
      },
      {
        "title": "MGFA · Emergency management",
        "url": "https://myasthenia.org/understanding-mg/learn-more-about-mg-treatments/mg-brochures/emergency-management-for-first-responders/",
        "supports": "Airway priorities, serial FVC/NIF, pulse-oximetry limitations, and ventilatory support."
      },
      {
        "title": "MGFA · Cautionary drugs",
        "url": "https://myasthenia.org/wp-content/uploads/2024/09/MGFA-Cautionary-Drug-List.pdf",
        "supports": "Antibiotics, beta blockers, magnesium, and risk-benefit decisions."
      },
      {
        "title": "MGFA · General MG management",
        "url": "https://myasthenia.org/living-with-mg/after-your-diagnosis/general-mg-management/",
        "supports": "Swallowing, meal planning, self-management, and calcium/vitamin D with steroid use."
      },
      {
        "title": "Alberta Health Services · Eating and swallowing safely",
        "url": "https://myhealth.alberta.ca/Health/aftercareinformation/pages/conditions.aspx?hwid=custom.ab_eating_swallowing_inst",
        "supports": "Upright positioning and individualized food/liquid consistency."
      },
      {
        "title": "FDA · Privigen (IVIG) prescribing information",
        "url": "https://www.fda.gov/media/83304/download",
        "supports": "Thrombosis, renal dysfunction, fluid overload, and hypersensitivity/IgA precautions."
      },
      {
        "title": "UCLH · Plasma exchange service",
        "url": "https://www.uclh.nhs.uk/patients-and-visitors/patient-information-pages/plasma-exchange-service-nhnn",
        "supports": "Hypotension, electrolyte changes, bleeding, and vascular-access care."
      },
      {
        "title": "Myasthenia Alliance Australia · Lifestyle tips",
        "url": "https://www.myasthenia.org.au/patient-support/lifestyle/",
        "supports": "Patching for diplopia, lubricants, and protective eyelid care."
      },
      {
        "title": "CDC · Complement inhibitors and meningococcal disease",
        "url": "https://www.cdc.gov/meningococcal/risk-factors/receiving-complement-inhibitors.html",
        "supports": "Vaccination/antibiotics do not remove meningococcal risk; urgent symptom assessment."
      }
    ]
  }
};
