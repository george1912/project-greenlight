/* Original supplied PNGs and their supplied text; clinical clarifications are separate. */
const conditionPosterData = {
  "parkinsons": {
    "glance": [
      {
        "emoji": "🧠",
        "label": "Dopamine loss"
      },
      {
        "emoji": "📈",
        "label": "Progressive"
      },
      {
        "emoji": "🚫",
        "label": "No cure"
      }
    ],
    "hero_emoji": "🧠",
    "number": 1,
    "priorities": [
      "Prevent falls",
      "Levodopa on time",
      "Never stop abruptly",
      "Check swallowing"
    ],
    "remember": "Safety first. Protein blocks levodopa.",
    "slug": "parkinsons-disease",
    "subtitle": "Progressive movement disorder",
    "title": "Parkinson's Disease",
    "watch_for": [
      {
        "emoji": "🖐️",
        "label": "Resting tremor"
      },
      {
        "emoji": "🦾",
        "label": "Rigidity"
      },
      {
        "emoji": "🐢",
        "label": "Slow movement"
      },
      {
        "emoji": "⚠️",
        "label": "Falls"
      }
    ],
    "file": "posters/01-parkinsons-disease.png",
    "width": 1200,
    "height": 1446,
    "sha256": "1eeb2d8f5f07ec12c0bb7bf72e934f9d922d5e0615d054454bfb9636ea41f649",
    "clarification": {
      "text": "Protein can reduce levodopa benefit in some people. Adjust meal timing only with the care team; maintain adequate total protein.",
      "references": [
        {
          "title": "NICE · Parkinson’s medicines and nutrition",
          "url": "https://www.nice.org.uk/guidance/ng71/chapter/recommendations"
        }
      ]
    }
  },
  "myasthenia-gravis": {
    "glance": [
      {
        "emoji": "💪",
        "label": "Fatigable weakness"
      },
      {
        "emoji": "👁",
        "label": "Drooping eyelids"
      },
      {
        "emoji": "🫁",
        "label": "Crisis stops breathing"
      }
    ],
    "hero_emoji": "💪",
    "number": 2,
    "priorities": [
      "Watch breathing first",
      "Pyridostigmine before meals",
      "Check swallow first",
      "Rest between tasks"
    ],
    "remember": "Underdosed: myasthenic crisis. Overdosed: cholinergic.",
    "slug": "myasthenia-gravis",
    "subtitle": "Weakness worse with use",
    "title": "Myasthenia Gravis",
    "watch_for": [
      {
        "emoji": "👁",
        "label": "Ptosis, diplopia"
      },
      {
        "emoji": "💪",
        "label": "Weakness with use"
      },
      {
        "emoji": "🍽",
        "label": "Trouble swallowing"
      },
      {
        "emoji": "🚨",
        "label": "Myasthenic crisis"
      }
    ],
    "file": "posters/02-myasthenia-gravis.png",
    "width": 1200,
    "height": 1446,
    "sha256": "8e757f5e1250e88d297468be10f792020ff760a45a3fa5cb843847da8a2db785",
    "clarification": {
      "text": "Myasthenic crisis is not defined simply by underdosing; infection and other triggers can contribute. Breathing or severe swallowing deterioration needs urgent assessment, not an automatic extra dose.",
      "references": [
        {
          "title": "MGFA · Emergency management",
          "url": "https://myasthenia.org/understanding-mg/learn-more-about-mg-treatments/mg-brochures/emergency-management-for-first-responders/"
        }
      ]
    }
  },
  "multiple-sclerosis": {
    "glance": [
      {
        "emoji": "🧠",
        "label": "Demyelination"
      },
      {
        "emoji": "🌡",
        "label": "Heat worsens symptoms"
      },
      {
        "emoji": "📉",
        "label": "Relapses and remissions"
      }
    ],
    "hero_emoji": "🧠",
    "number": 3,
    "priorities": [
      "Keep cool, avoid heat",
      "Prevent falls",
      "Conserve energy",
      "No live vaccines"
    ],
    "remember": "Heat worsens MS. Cool down first, not a relapse.",
    "slug": "multiple-sclerosis",
    "subtitle": "Autoimmune demyelination · No cure",
    "title": "Multiple Sclerosis (MS)",
    "watch_for": [
      {
        "emoji": "👁",
        "label": "Optic neuritis"
      },
      {
        "emoji": "⚡",
        "label": "Paresthesias, numbness"
      },
      {
        "emoji": "🦵",
        "label": "Spasticity, weakness"
      },
      {
        "emoji": "😴",
        "label": "Fatigue, bladder issues"
      }
    ],
    "file": "posters/03-multiple-sclerosis.png",
    "width": 1200,
    "height": 1446,
    "sha256": "0445a17d1d740ec0aadae0732884f276a7158ad274b18721a8922218760f09f9",
    "clarification": {
      "text": "Live-vaccine restrictions depend on the medicine and immune status, not MS alone. Heat-related worsening can be temporary, but new or persistent deficits still need assessment.",
      "references": [
        {
          "title": "ECTRIMS/EAN · Vaccination consensus",
          "url": "https://journals.sagepub.com/doi/10.1177/13524585231168043"
        },
        {
          "title": "VA · MS and heat",
          "url": "https://www.va.gov/MS/LEARN_ABOUT_MULTIPLE_SCLEROSIS/Keep_Cool_Multiple_Sclerosis_and_Heat_Tolerance.asp"
        }
      ]
    }
  },
  "als": {
    "glance": [
      {
        "emoji": "💪",
        "label": "Progressive muscle weakness"
      },
      {
        "emoji": "🫁",
        "label": "Breathing muscles weaken"
      },
      {
        "emoji": "✋",
        "label": "Sensation stays intact"
      }
    ],
    "hero_emoji": "🫁",
    "number": 4,
    "priorities": [
      "Monitor breathing closely",
      "Aspiration precautions",
      "Communication aids early",
      "Fall safety, PEG feeding"
    ],
    "remember": "Breathing comes first. Plan communication early.",
    "slug": "als",
    "subtitle": "Motor neurons die · No cure",
    "title": "Amyotrophic Lateral Sclerosis (ALS)",
    "watch_for": [
      {
        "emoji": "💪",
        "label": "Progressive weakness"
      },
      {
        "emoji": "🌀",
        "label": "Fasciculations, twitches"
      },
      {
        "emoji": "🍽",
        "label": "Dysphagia, dysarthria"
      },
      {
        "emoji": "🫁",
        "label": "Weak cough, dyspnea"
      }
    ],
    "file": "posters/04-als.png",
    "width": 1200,
    "height": 1446,
    "sha256": "b50f093a5e6a79acd1034c16c5db09f03e9d78ef937b8b04bdc19552aaf8b7a3"
  },
  "meningitis": {
    "glance": [
      {
        "emoji": "🧠",
        "label": "Inflamed meninges"
      },
      {
        "emoji": "🌡",
        "label": "Fever, severe headache"
      },
      {
        "emoji": "🦠",
        "label": "Droplet precautions"
      }
    ],
    "hero_emoji": "🧠",
    "number": 5,
    "priorities": [
      "Droplet precautions",
      "Antibiotics before LP",
      "Lie flat after LP",
      "Watch LOC, seizures"
    ],
    "remember": "Antibiotics first. LP never delays treatment.",
    "slug": "meningitis",
    "subtitle": "Inflamed meninges · Emergency",
    "title": "Meningitis",
    "watch_for": [
      {
        "emoji": "🤒",
        "label": "Nuchal rigidity"
      },
      {
        "emoji": "🦵",
        "label": "Kernig's, Brudzinski's"
      },
      {
        "emoji": "☀",
        "label": "Photophobia"
      },
      {
        "emoji": "🩸",
        "label": "Petechial rash"
      }
    ],
    "file": "posters/05-meningitis.png",
    "width": 1200,
    "height": 1446,
    "sha256": "0e015c450f4e9f69dc5937d90b486ab9ca9db02c5b765e72fed915b93a0d422b",
    "clarification": {
      "text": "Perform LP before antibiotics when safe and without a clinically significant treatment delay. Routine lying flat after LP does not prevent post-puncture headache. Precautions depend on the suspected organism.",
      "references": [
        {
          "title": "NICE · Meningitis diagnosis and treatment",
          "url": "https://www.nice.org.uk/guidance/ng240/chapter/recommendations"
        },
        {
          "title": "Cochrane · Bed rest after lumbar puncture",
          "url": "https://www.cochrane.org/evidence/CD009199_body-position-and-intake-fluids-preventing-headache-after-lumbar-puncture"
        }
      ]
    }
  },
  "guillain-barre": {
    "glance": [
      {
        "emoji": "🦵",
        "label": "Ascending weakness"
      },
      {
        "emoji": "🦠",
        "label": "Post-infection onset"
      },
      {
        "emoji": "🫁",
        "label": "Respiratory failure risk"
      }
    ],
    "hero_emoji": "🦵",
    "number": 6,
    "priorities": [
      "Assess breathing first",
      "Watch BP, HR swings",
      "Swallow checks",
      "IVIG or plasmapheresis"
    ],
    "remember": "Ascending weakness. Airway and breathing first.",
    "slug": "guillain-barre-syndrome",
    "subtitle": "Ascending paralysis · Autoimmune",
    "title": "Guillain-Barré Syndrome",
    "watch_for": [
      {
        "emoji": "🦵",
        "label": "Ascending leg weakness"
      },
      {
        "emoji": "✋",
        "label": "Tingling hands, feet"
      },
      {
        "emoji": "🦿",
        "label": "Lost reflexes"
      },
      {
        "emoji": "😰",
        "label": "Trouble breathing/swallowing"
      }
    ],
    "file": "posters/06-guillain-barre-syndrome.png",
    "width": 1200,
    "height": 1446,
    "sha256": "7e6b21e5ddfd5f0a17275bb39d6baa9fa1452bd7dd43efaf38f8f37598dc4265"
  },
  "rheumatoid-arthritis": {
    "glance": [
      {
        "emoji": "🧬",
        "label": "Autoimmune synovitis"
      },
      {
        "emoji": "✋",
        "label": "Bilateral symmetric joints"
      },
      {
        "emoji": "⏰",
        "label": "Stiffness >30 min"
      }
    ],
    "hero_emoji": "✋",
    "number": 7,
    "priorities": [
      "Methotrexate first-line DMARD",
      "Folic acid, avoid alcohol",
      "Heat and cold therapy",
      "Watch infection on biologics"
    ],
    "remember": "Symmetric joints, AM stiffness. DMARDs slow damage.",
    "slug": "rheumatoid-arthritis",
    "subtitle": "Autoimmune joint disease · No cure",
    "title": "Rheumatoid Arthritis",
    "watch_for": [
      {
        "emoji": "🌞",
        "label": "Morning stiffness"
      },
      {
        "emoji": "✋",
        "label": "Swollen tender joints"
      },
      {
        "emoji": "🦴",
        "label": "Rheumatoid nodules"
      },
      {
        "emoji": "🤚",
        "label": "Ulnar deviation"
      }
    ],
    "file": "posters/07-rheumatoid-arthritis.png",
    "width": 1200,
    "height": 1446,
    "sha256": "8c739c963d5e0d17e160f6859984285db410e47f5d75d08cfd294f34275e411c"
  },
  "osteoarthritis": {
    "glance": [
      {
        "emoji": "🦴",
        "label": "Cartilage wears away"
      },
      {
        "emoji": "🦵",
        "label": "Pain with use"
      },
      {
        "emoji": "⏰",
        "label": "Stiffness <30 min"
      }
    ],
    "hero_emoji": "🦴",
    "number": 8,
    "priorities": [
      "Exercise, lose weight",
      "Acetaminophen, NSAIDs",
      "Heat or cold",
      "Joint replacement if severe"
    ],
    "remember": "Pain with use, rest helps. Stiffness <30 min.",
    "slug": "osteoarthritis",
    "subtitle": "Degenerative wear-and-tear joints",
    "title": "Osteoarthritis",
    "watch_for": [
      {
        "emoji": "🦵",
        "label": "Pain with activity"
      },
      {
        "emoji": "✋",
        "label": "Heberden's nodes (DIP)"
      },
      {
        "emoji": "🦴",
        "label": "Bouchard's nodes (PIP)"
      },
      {
        "emoji": "🌀",
        "label": "Crepitus on movement"
      }
    ],
    "file": "posters/08-osteoarthritis.png",
    "width": 1200,
    "height": 1446,
    "sha256": "69c584eff941d67722af98c5caf9e149c6a7585e9879a84b03e3842f0193bec3"
  },
  "osteoporosis": {
    "glance": [
      {
        "emoji": "🦴",
        "label": "Low bone density"
      },
      {
        "emoji": "🔍",
        "label": "Silent until fracture"
      },
      {
        "emoji": "🧍",
        "label": "Risk after menopause"
      }
    ],
    "hero_emoji": "🦴",
    "number": 9,
    "priorities": [
      "Calcium, vitamin D",
      "Weight-bearing exercise",
      "Alendronate, upright 30 min",
      "Prevent falls"
    ],
    "remember": "Silent until fracture. DEXA ≤ -2.5 confirms it.",
    "slug": "osteoporosis",
    "subtitle": "Silent bone loss · Fracture risk",
    "title": "Osteoporosis",
    "watch_for": [
      {
        "emoji": "🦴",
        "label": "Fractures, minor falls"
      },
      {
        "emoji": "🧍",
        "label": "Height loss, kyphosis"
      },
      {
        "emoji": "🤕",
        "label": "Back pain"
      },
      {
        "emoji": "📉",
        "label": "DEXA ≤ -2.5"
      }
    ],
    "file": "posters/09-osteoporosis.png",
    "width": 1200,
    "height": 1446,
    "sha256": "cf911a6b08d9ed2fd347f18fc45ecd3a74835d45b4ee161fcbe1fd77b8a06ac0",
    "clarification": {
      "text": "The −2.5 cutoff refers to a DXA T-score in the appropriate population, not the scan itself. Certain fragility fractures can establish osteoporosis without that cutoff.",
      "references": [
        {
          "title": "ISCD · Adult diagnostic positions",
          "url": "https://iscd.org/official-positions-2023/"
        },
        {
          "title": "BHOF · Clinician’s guide",
          "url": "https://doi.org/10.1007/s00198-021-05900-y"
        }
      ]
    }
  },
  "gout": {
    "glance": [
      {
        "emoji": "🧂",
        "label": "Uric acid crystals"
      },
      {
        "emoji": "🦶",
        "label": "Great toe pain"
      },
      {
        "emoji": "🔥",
        "label": "Sudden severe pain"
      }
    ],
    "hero_emoji": "🦶",
    "number": 10,
    "priorities": [
      "Colchicine, NSAIDs acute",
      "Allopurinol daily",
      "Increase fluids",
      "Avoid alcohol, purines"
    ],
    "remember": "Allopurinol prevents flares. Never start in a flare.",
    "slug": "gout",
    "subtitle": "Uric acid crystals in joints",
    "title": "Gout",
    "watch_for": [
      {
        "emoji": "🦶",
        "label": "Podagra, great toe"
      },
      {
        "emoji": "🔥",
        "label": "Hot swollen joint"
      },
      {
        "emoji": "🧂",
        "label": "Tophi: urate deposits"
      },
      {
        "emoji": "🤒",
        "label": "Fever with attacks"
      }
    ],
    "file": "posters/10-gout.png",
    "width": 1200,
    "height": 1446,
    "sha256": "d4be9ec87527d4144779664340cc8d9d813aba25453c4c080067c196dd54c7d9",
    "clarification": {
      "text": "“Never start in a flare” is too absolute: when urate-lowering therapy is indicated, allopurinol may be started during a flare with appropriate anti-inflammatory treatment. Continue established treatment as prescribed; individualize fluids.",
      "references": [
        {
          "title": "ACR · Gout treatment guideline",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10563586/"
        }
      ]
    }
  },
  "meniere-disease": {
    "glance": [
      {
        "emoji": "🌀",
        "label": "Spinning vertigo attacks"
      },
      {
        "emoji": "🔔",
        "label": "Ringing in ear"
      },
      {
        "emoji": "👂",
        "label": "Fluctuating hearing loss"
      }
    ],
    "hero_emoji": "👂",
    "number": 11,
    "priorities": [
      "Prevent falls",
      "Lie still, dark room",
      "Low-sodium diet",
      "HCTZ in morning"
    ],
    "remember": "Meclizine eases vertigo; HCTZ prevents attacks.",
    "slug": "menieres-disease",
    "subtitle": "Inner-ear fluid disorder · No cure",
    "title": "Ménière's Disease",
    "watch_for": [
      {
        "emoji": "🌀",
        "label": "Episodic vertigo"
      },
      {
        "emoji": "🔔",
        "label": "Tinnitus"
      },
      {
        "emoji": "👂",
        "label": "Hearing loss"
      },
      {
        "emoji": "😵",
        "label": "Sudden drop attacks"
      }
    ],
    "file": "posters/11-menieres-disease.png",
    "width": 1200,
    "height": 1446,
    "sha256": "b2d14420c86d37480b42f45f1c1ce7d7c95725848c3fad542330ea2d6754ba96"
  },
  "breast-gynecologic-cancers": {
    "glance": [
      {
        "emoji": "🔍",
        "label": "Painless lump"
      },
      {
        "emoji": "🦠",
        "label": "HPV causes cancer"
      },
      {
        "emoji": "🩸",
        "label": "Postmenopausal bleeding"
      }
    ],
    "hero_emoji": "🧬",
    "number": 12,
    "priorities": [
      "Report chemo fever now",
      "Spare the affected arm",
      "Screening: mammograms, Pap",
      "Elevate arm, prevent lymphedema"
    ],
    "remember": "Fever on chemo is an emergency. Report it fast.",
    "slug": "breast-gynecologic-cancers",
    "subtitle": "Breast, cervical, uterine cancers",
    "title": "Breast and Gynecologic Cancers",
    "watch_for": [
      {
        "emoji": "🔍",
        "label": "Hard fixed lump"
      },
      {
        "emoji": "👁",
        "label": "Nipple retraction, discharge"
      },
      {
        "emoji": "🩸",
        "label": "Bleeding after sex"
      },
      {
        "emoji": "🚨",
        "label": "Postmenopausal bleeding"
      }
    ],
    "file": "posters/12-breast-gynecologic-cancers.png",
    "width": 1200,
    "height": 1446,
    "sha256": "39fe99ff772c35bcc7de19a36485bac20010bd44c94819f804afb38a31ae40ef",
    "clarification": {
      "text": "Arm care is individualized. Blood-pressure measurement and venipuncture on the affected side are not universally prohibited after axillary surgery; follow the clinical plan, especially if swelling is present.",
      "references": [
        {
          "title": "ANZCA · Procedures after axillary surgery",
          "url": "https://www.anzca.edu.au/patient-information/about-anaesthesia/have-you-had-axillary-lymph-nodes-removed-during-breast-surgery"
        }
      ]
    }
  },
  "prostate-cancer": {
    "glance": [
      {
        "emoji": "🧍",
        "label": "Affects older men"
      },
      {
        "emoji": "🦴",
        "label": "Spreads to bone"
      },
      {
        "emoji": "🩸",
        "label": "PSA screens"
      }
    ],
    "hero_emoji": "🧍",
    "number": 13,
    "priorities": [
      "Post-TURP: light pink urine",
      "Red urine, clots: report",
      "Teach PSA, rectal exam",
      "Assess voiding, bone pain"
    ],
    "remember": "Silent early. Bone pain means spread.",
    "slug": "prostate-cancer",
    "subtitle": "Most common cancer in men",
    "title": "Prostate Cancer",
    "watch_for": [
      {
        "emoji": "💧",
        "label": "Hesitancy, weak stream"
      },
      {
        "emoji": "🦴",
        "label": "Bone pain"
      },
      {
        "emoji": "🩸",
        "label": "Blood in urine"
      },
      {
        "emoji": "🤫",
        "label": "Silent early"
      }
    ],
    "file": "posters/13-prostate-cancer.png",
    "width": 1200,
    "height": 1446,
    "sha256": "c2c78b33159a077dc5fce80361c868d14ae8731089c95e8b6468e487f96e409e",
    "clarification": {
      "text": "Bone pain warrants evaluation; it does not by itself prove metastasis. Screening and diagnosis are different, and PSA/DRE findings must be interpreted in context.",
      "references": [
        {
          "title": "NCI · Prostate cancer and its evaluation",
          "url": "https://www.cancer.gov/types/prostate/patient/prostate-treatment-pdq"
        }
      ]
    }
  },
  "hiv": {
    "glance": [
      {
        "emoji": "🦠",
        "label": "Destroys CD4 cells"
      },
      {
        "emoji": "📉",
        "label": "CD4 under 200"
      },
      {
        "emoji": "💊",
        "label": "ART every day"
      }
    ],
    "hero_emoji": "🦠",
    "number": 14,
    "priorities": [
      "ART daily, no skips",
      "PEP within 72 hours",
      "PrEP daily, high-risk",
      "Standard precautions only"
    ],
    "remember": "Undetectable viral load means untransmittable.",
    "slug": "hiv-opportunistic-infections",
    "subtitle": "Attacks CD4 cells · No cure",
    "title": "HIV and Opportunistic Infections",
    "watch_for": [
      {
        "emoji": "🫁",
        "label": "PCP pneumonia"
      },
      {
        "emoji": "🧠",
        "label": "Toxo, crypto meningitis"
      },
      {
        "emoji": "👁",
        "label": "CMV retinitis, MAC"
      },
      {
        "emoji": "🤒",
        "label": "Fever, weight loss"
      }
    ],
    "file": "posters/14-hiv-opportunistic-infections.png",
    "width": 1200,
    "height": 1446,
    "sha256": "1ef97589a45ea3141944a4992039e8db03649476a0723c66cf91c465f823fa75",
    "clarification": {
      "text": "Follow the prescribed ART/PrEP schedule, which can include long-acting injections. U = U applies to sexual transmission with sustained viral suppression. Coinfections may require additional precautions.",
      "references": [
        {
          "title": "CDC · PrEP options",
          "url": "https://www.cdc.gov/hivnexus/hcp/prep/"
        },
        {
          "title": "NIH · Treatment as prevention",
          "url": "https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-arv/arv-therapy-as-prevention"
        }
      ]
    }
  }
};

const ConditionPosters = (() => {
  function section(id, p = conditionPosterData[id]) {
    if (!p) return '';
    const text = items => items.map(item=>`<li>${escapeHTML(item.label || item)}</li>`).join('');
    return `<section class="condition-poster" aria-label="${escapeHTML(p.title)} nursing poster">
      <button type="button" class="poster-image-button" data-poster-open aria-label="Enlarge ${escapeHTML(p.title)} nursing poster"><img class="condition-poster-image" src="${p.file}" width="${p.width}" height="${p.height}" ${p.description ? 'loading="lazy"' : 'fetchpriority="high"'} decoding="async" alt="${escapeHTML(p.title)} nursing-focus poster."></button>
      <p class="poster-caption">Click poster to enlarge</p>
      <div class="sr-only">${p.description ? `<ul>${text(p.description)}</ul>` : `<h2>Poster text</h2><h3>At a glance</h3><ul>${text(p.glance)}</ul><h3>Watch for</h3><ul>${text(p.watch_for)}</ul><h3>Nursing focus</h3><ol>${text(p.priorities)}</ol><h3>Remember</h3><p>${escapeHTML(p.remember)}</p>`}</div>
      <dialog class="poster-viewer" aria-labelledby="poster-viewer-title-${id}"><header class="poster-viewer-header"><h2 id="poster-viewer-title-${id}">${escapeHTML(p.title)} · Nursing poster</h2><div class="poster-viewer-controls" role="group" aria-label="Poster controls"><button type="button" data-poster-zoom="out" aria-label="Zoom out">−</button><output class="poster-zoom-label" aria-label="Poster zoom">100%</output><button type="button" data-poster-zoom="in" aria-label="Zoom in">+</button><button type="button" data-poster-fit aria-pressed="true">Fit</button><button type="button" data-poster-actual>Actual size</button><button type="button" data-poster-close autofocus>Close ×</button></div></header><div class="poster-viewport" tabindex="0" aria-label="Poster image. Scroll to move around when zoomed in."><img width="${p.width}" height="${p.height}" alt="${escapeHTML(p.title)} nursing-focus poster"></div>${p.clarification?`<aside class="poster-viewer-context" aria-label="Clinical clarification"><p><strong>Clinical clarification:</strong> ${escapeHTML(p.clarification.text)} <a href="${escapeHTML(p.clarification.references[0].url)}" target="_blank" rel="noopener noreferrer">Reference ↗</a></p></aside>`:''}</dialog>
    </section>`;
  }
  function clarification(id) {
    const p = conditionPosterData[id]; if (!p) return '';
    return `<section class="poster-bottom-note" aria-label="Poster clinical clarification"><h3>Nursing poster</h3>${p.clarification?`<p>${escapeHTML(p.clarification.text)}</p><p class="poster-context-sources">${p.clarification.references.map(ref=>`<a href="${escapeHTML(ref.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(ref.title)} ↗</a>`).join(' ')}</p>`:''}<p><a href="${p.file}" download>Download poster PNG</a></p></section>`;
  }
  function mount(root,id,p=conditionPosterData[id]) {
    const host=root.querySelector('.condition-poster');if(!p||!host)return()=>{};
    const dialog=host.querySelector('.poster-viewer'),viewport=host.querySelector('.poster-viewport'),image=viewport.querySelector('img');
    const fitButton=host.querySelector('[data-poster-fit]'),out=host.querySelector('[data-poster-zoom="out"]'),into=host.querySelector('[data-poster-zoom="in"]'),label=host.querySelector('.poster-zoom-label');
    let scale=1,fitted=true,returnFocus=null;
    function apply(next) {
      scale=Math.max(.1,Math.min(3,next));image.style.width=`${Math.round(p.width*scale)}px`;image.style.height='auto';
      label.textContent=`${Math.round(scale*100)}%`;out.disabled=scale<=.1;into.disabled=scale>=3;fitButton.setAttribute('aria-pressed',String(fitted));
    }
    function fit(){fitted=true;apply(Math.min(1,(viewport.clientWidth-32)/p.width,(viewport.clientHeight-32)/p.height));viewport.scrollTop=0;viewport.scrollLeft=0;}
    function open(event){returnFocus=event.currentTarget;image.src=p.file;document.body.classList.add('poster-viewer-open');dialog.showModal();fit();}
    function close(){document.body.classList.remove('poster-viewer-open');if(returnFocus?.isConnected)returnFocus.focus({preventScroll:true});}
    function resize(){if(dialog.open&&fitted)fit();}
    const openButtons=host.querySelectorAll('[data-poster-open]');openButtons.forEach(button=>button.addEventListener('click',open));
    const closeButton=host.querySelector('[data-poster-close]'),actual=host.querySelector('[data-poster-actual]');
    const closeClick=()=>dialog.close(),actualClick=()=>{fitted=false;apply(1);},zoomOut=()=>{fitted=false;apply(scale/1.25);},zoomIn=()=>{fitted=false;apply(scale*1.25);};
    closeButton.addEventListener('click',closeClick);dialog.addEventListener('close',close);fitButton.addEventListener('click',fit);actual.addEventListener('click',actualClick);out.addEventListener('click',zoomOut);into.addEventListener('click',zoomIn);window.addEventListener('resize',resize);
    return()=>{if(dialog.open)dialog.close();document.body.classList.remove('poster-viewer-open');window.removeEventListener('resize',resize);openButtons.forEach(button=>button.removeEventListener('click',open));closeButton.removeEventListener('click',closeClick);dialog.removeEventListener('close',close);fitButton.removeEventListener('click',fit);actual.removeEventListener('click',actualClick);out.removeEventListener('click',zoomOut);into.removeEventListener('click',zoomIn);};
  }
  return {section,mount,clarification};
})();
