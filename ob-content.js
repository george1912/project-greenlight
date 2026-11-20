/* OB final-exam framework. Source PDFs stay private; clinical notes are intentionally empty. */
const obCourse = {
  code: 'NRBS 3410',
  title: 'OB Final Exam',
  term: 'Summer 2026',
  exam: { label: 'Exam 3', questionCount: 'Approximately 50–60 NCLEX-style questions' },
  sections: [
    {id:'overview',title:'Overview & key concepts'},
    {id:'risks',title:'Risk factors & prevention'},
    {id:'manifestations',title:'Clinical manifestations'},
    {id:'diagnostics',title:'Diagnostic tests & monitoring'},
    {id:'medical',title:'Medical & collaborative management'},
    {id:'pharmacological',title:'Pharmacological therapies'},
    {id:'nonpharmacological',title:'Nonpharmacological care'},
    {id:'safety',title:'Side effects & safety'},
    {id:'nutrition',title:'Nutrition & feeding'},
    {id:'assessment',title:'Nursing assessment'},
    {id:'diagnoses',title:'Nursing diagnoses'},
    {id:'priorities',title:'Priorities & first actions'},
    {id:'plan',title:'Plan of care'},
    {id:'interventions',title:'Nursing interventions'},
    {id:'teaching',title:'Patient teaching'},
    {id:'evaluation',title:'Evaluation'}
  ],
  weeks: [
    {id:'week-1',number:1,date:'May 26',label:'Week 1',title:'Introduction & changes of pregnancy',group:'earlier',outline:['Introduction to obstetrical and gynecologic nursing','Physiologic and psychologic changes of pregnancy']},
    {id:'week-2',number:2,date:'June 2',label:'Week 2',title:'Prenatal care & maternal health',group:'earlier',outline:['Developing fetus','Fetal and maternal health promotion','Signs of pregnancy','Nursing care during pregnancy','Nutritional health during pregnancy']},
    {id:'week-3',number:3,date:'June 9',label:'Week 3',title:'Pregnancy complications',group:'earlier',outline:['Preexisting or sudden pregnancy complications','Hemorrhagic, endocrine, and hypertensive complications','High-risk pregnancy']},
    {id:'week-5',number:5,date:'June 23',label:'Week 5',title:'Labor, birth & fetal monitoring',group:'earlier',outline:['Childbirth preparation','Normal labor and birth','Intrapartum fetal assessment and fetal heart rate monitoring','Labor comfort and pain management']},
    {id:'week-6',number:6,date:'June 30',label:'Week 6',title:'Labor complications & cesarean birth',group:'earlier',outline:['Complications in labor','Cesarean birth']},
    {id:'week-7',number:7,date:'July 7',label:'Week 7',title:'Postpartum care & complications',group:'main',outline:['Normal postpartum care','Postpartum complications']},
    {id:'week-8',number:8,date:'July 14',label:'Week 8',title:'Exam II review',group:'main',outline:[],reviewOf:['week-5','week-6','week-7']},
    {id:'week-9',number:9,date:'July 21',label:'Week 9',title:'Normal newborn care & feeding',group:'main',outline:['Normal newborn care','Newborn nutrition']},
    {id:'week-10',number:10,date:'July 28',label:'Week 10',title:'Newborn care & complications',group:'main',outline:['Normal newborn care continued','High-risk newborn','Newborn adaptations and complications']},
    {id:'august-4',number:null,date:'August 4',label:'August 4 session',title:'Contraception, fertility & STIs',group:'main',outline:['Contraception and fertility','Sexually transmitted infections'],note:'This session is listed by date without a week number in the syllabus.'}
  ],
  topics: [
    {id:'normal-postpartum',title:'Normal postpartum care',group:'main',questions:[8,16],weekIds:['week-7'],focus:['Nursing care and management of normal postpartum recovery.'],content:{},practiceQuestions:[],resources:[]},
    {id:'postpartum-complications',title:'Postpartum complications',group:'main',questions:[4,8],weekIds:['week-7'],focus:['Nursing care and management of postpartum complications.'],content:{},practiceQuestions:[],resources:[]},
    {id:'normal-newborn',title:'Normal newborn assessment & care',group:'main',questions:[6,10],weekIds:['week-9','week-10'],focus:['Nursing assessment, care, and management of the normal newborn.'],content:{},practiceQuestions:[],resources:[]},
    {id:'newborn-complications',title:'Newborn complications & prematurity',group:'main',questions:[3,8],weekIds:['week-10'],focus:['Newborn complications','Prematurity'],content:{},practiceQuestions:[],resources:[]},
    {id:'contraception',title:'Contraception',group:'main',questions:[6,10],weekIds:['august-4'],focus:['Nursing care and management related to contraception.'],content:{},practiceQuestions:[],resources:[]},
    {id:'stis',title:'Sexually transmitted infections',group:'main',questions:[4,6],weekIds:['august-4'],focus:['Nursing care and management of sexually transmitted infections.'],content:{},practiceQuestions:[],resources:[]},
    {id:'feeding',title:'Breast & formula feeding',group:'main',questions:[5,8],weekIds:['week-9'],focus:['Breastfeeding','Formula feeding'],content:{},practiceQuestions:[],resources:[]},
    {id:'antepartum-prenatal',title:'Antepartum & prenatal care',group:'cumulative',questions:[2,2],weekIds:['week-1','week-2'],focus:['Antepartum and prenatal care and discomforts','Naegele’s rule','GTPAL'],content:{},practiceQuestions:[],resources:[]},
    {id:'pregnancy-complications',title:'Pregnancy complications',group:'cumulative',questions:[2,2],weekIds:['week-3'],focus:['Diabetes','Hypertension, preeclampsia, and eclampsia'],content:{},practiceQuestions:[],resources:[]},
    {id:'fetal-monitoring',title:'Fetal monitoring',group:'cumulative',questions:[2,2],weekIds:['week-5'],focus:['Interpretation of two fetal-monitoring strips'],content:{},practiceQuestions:[],resources:[]},
    {id:'labor-emergencies',title:'Labor complications & emergencies',group:'cumulative',questions:[2,2],weekIds:['week-3','week-6'],focus:['Shoulder dystocia','Placental complications'],content:{},practiceQuestions:[],resources:[]}
  ]
};
