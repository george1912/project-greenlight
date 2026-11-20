/* Supplied OB presentations and handouts, organized by syllabus subject. */
const obPresentationDecks = {
  "historical-context": {
    "id": "historical-context",
    "title": "Historical context & maternal–fetal health",
    "weekIds": [
      "week-1"
    ],
    "kind": "Lecture PDF",
    "focus": [],
    "pages": 16,
    "pdf": "ob-presentations/historical-context/original.pdf",
    "manifest": "ob-presentations/historical-context/deck.json",
    "contextLabel": "OB COURSE MATERIAL",
    "showSourceLinks": false
  },
  "fetal-development": {
    "id": "fetal-development",
    "title": "Menstruation, conception & fetal development",
    "weekIds": [
      "week-1",
      "week-2"
    ],
    "kind": "Lecture PDF",
    "focus": [],
    "pages": 24,
    "pdf": "ob-presentations/fetal-development/original.pdf",
    "manifest": "ob-presentations/fetal-development/deck.json",
    "contextLabel": "OB COURSE MATERIAL",
    "showSourceLinks": false
  },
  "maternal-adaptation": {
    "id": "maternal-adaptation",
    "title": "Maternal adaptation & nutrition",
    "weekIds": [
      "week-1",
      "week-2"
    ],
    "kind": "Lecture PDF",
    "focus": [
      {
        "id": "gtpal",
        "topicId": "antepartum-prenatal",
        "label": "GTPAL",
        "page": 6,
        "endPage": 9
      },
      {
        "id": "maternal-adaptation",
        "topicId": "antepartum-prenatal",
        "label": "Maternal changes and nutrition",
        "page": 11,
        "endPage": 37
      }
    ],
    "pages": 37,
    "pdf": "ob-presentations/maternal-adaptation/original.pdf",
    "manifest": "ob-presentations/maternal-adaptation/deck.json",
    "contextLabel": "OB COURSE MATERIAL",
    "showSourceLinks": false
  },
  "prenatal-nursing-care": {
    "id": "prenatal-nursing-care",
    "title": "Nursing management during pregnancy",
    "weekIds": [
      "week-2"
    ],
    "kind": "Lecture PDF",
    "focus": [
      {
        "id": "naegeles-rule",
        "topicId": "antepartum-prenatal",
        "label": "Naegele’s rule and estimated due date",
        "page": 6,
        "endPage": 7
      },
      {
        "id": "prenatal-care",
        "topicId": "antepartum-prenatal",
        "label": "Prenatal assessment and discomforts",
        "page": 9,
        "endPage": 29
      }
    ],
    "pages": 29,
    "pdf": "ob-presentations/prenatal-nursing-care/original.pdf",
    "manifest": "ob-presentations/prenatal-nursing-care/deck.json",
    "contextLabel": "OB COURSE MATERIAL",
    "showSourceLinks": false
  },
  "pregnancy-discomforts": {
    "id": "pregnancy-discomforts",
    "title": "Managing normal pregnancy discomforts",
    "weekIds": [
      "week-2"
    ],
    "kind": "Lecture PDF",
    "focus": [
      {
        "id": "normal-discomforts",
        "topicId": "antepartum-prenatal",
        "label": "Normal pregnancy discomforts",
        "page": 2,
        "endPage": 4
      }
    ],
    "pages": 4,
    "pdf": "ob-presentations/pregnancy-discomforts/original.pdf",
    "manifest": "ob-presentations/pregnancy-discomforts/deck.json",
    "contextLabel": "OB COURSE MATERIAL",
    "showSourceLinks": false
  },
  "antepartum-risks": {
    "id": "antepartum-risks",
    "title": "Antepartum risks & pregnancy complications",
    "weekIds": [
      "week-3"
    ],
    "kind": "Lecture PDF",
    "focus": [
      {
        "id": "hypertensive-complications",
        "topicId": "pregnancy-complications",
        "label": "Hypertension, preeclampsia, and eclampsia",
        "page": 30,
        "endPage": 38
      },
      {
        "id": "placental-complications",
        "topicId": "labor-emergencies",
        "label": "Placenta previa and placental abruption",
        "page": 18,
        "endPage": 25
      }
    ],
    "pages": 55,
    "pdf": "ob-presentations/antepartum-risks/original.pdf",
    "manifest": "ob-presentations/antepartum-risks/deck.json",
    "contextLabel": "OB COURSE MATERIAL",
    "showSourceLinks": false
  },
  "diabetes-in-pregnancy": {
    "id": "diabetes-in-pregnancy",
    "title": "Diabetes in pregnancy",
    "weekIds": [
      "week-3"
    ],
    "kind": "Lecture PDF",
    "focus": [
      {
        "id": "diabetes",
        "topicId": "pregnancy-complications",
        "label": "Pregestational and gestational diabetes",
        "page": 2,
        "endPage": 26
      }
    ],
    "pages": 26,
    "pdf": "ob-presentations/diabetes-in-pregnancy/original.pdf",
    "manifest": "ob-presentations/diabetes-in-pregnancy/deck.json",
    "contextLabel": "OB COURSE MATERIAL",
    "showSourceLinks": false
  },
  "labor-and-birth": {
    "id": "labor-and-birth",
    "title": "Processes of labor & birth",
    "weekIds": [
      "week-5"
    ],
    "kind": "Lecture PDF",
    "focus": [],
    "pages": 68,
    "pdf": "ob-presentations/labor-and-birth/original.pdf",
    "manifest": "ob-presentations/labor-and-birth/deck.json",
    "contextLabel": "OB COURSE MATERIAL",
    "showSourceLinks": false
  },
  "fetal-monitoring": {
    "id": "fetal-monitoring",
    "title": "Fetal & maternal monitoring in labor",
    "weekIds": [
      "week-5"
    ],
    "kind": "Lecture PDF",
    "focus": [
      {
        "id": "monitoring-strips",
        "topicId": "fetal-monitoring",
        "label": "Fetal heart rate monitoring and strips",
        "page": 18,
        "endPage": 51
      }
    ],
    "pages": 51,
    "pdf": "ob-presentations/fetal-monitoring/original.pdf",
    "manifest": "ob-presentations/fetal-monitoring/deck.json",
    "contextLabel": "OB COURSE MATERIAL",
    "showSourceLinks": false
  },
  "labor-pain-management": {
    "id": "labor-pain-management",
    "title": "Pain management in labor",
    "weekIds": [
      "week-5"
    ],
    "kind": "Lecture PDF",
    "focus": [],
    "pages": 18,
    "pdf": "ob-presentations/labor-pain-management/original.pdf",
    "manifest": "ob-presentations/labor-pain-management/deck.json",
    "contextLabel": "OB COURSE MATERIAL",
    "showSourceLinks": false
  },
  "labor-complications": {
    "id": "labor-complications",
    "title": "Labor & birth complications",
    "weekIds": [
      "week-6"
    ],
    "kind": "Lecture PDF",
    "focus": [
      {
        "id": "shoulder-dystocia",
        "topicId": "labor-emergencies",
        "label": "Shoulder dystocia",
        "page": 35,
        "endPage": 41
      }
    ],
    "pages": 43,
    "pdf": "ob-presentations/labor-complications/original.pdf",
    "manifest": "ob-presentations/labor-complications/deck.json",
    "contextLabel": "OB COURSE MATERIAL",
    "showSourceLinks": false
  },
  "postpartum-care": {
    "id": "postpartum-care",
    "title": "Postpartum care & assessment",
    "weekIds": [
      "week-7"
    ],
    "kind": "Lecture PDF",
    "focus": [
      {
        "id": "normal-recovery",
        "topicId": "normal-postpartum",
        "label": "Normal recovery and assessment",
        "page": 2,
        "endPage": 13
      },
      {
        "id": "postpartum-assessment",
        "topicId": "normal-postpartum",
        "label": "Focused postpartum assessment",
        "page": 34,
        "endPage": 39
      },
      {
        "id": "postpartum-hemorrhage",
        "topicId": "postpartum-complications",
        "label": "Postpartum hemorrhage",
        "page": 14,
        "endPage": 22
      },
      {
        "id": "postpartum-infection",
        "topicId": "postpartum-complications",
        "label": "Postpartum infection",
        "page": 40,
        "endPage": 40
      },
      {
        "id": "postpartum-mental-health",
        "topicId": "postpartum-complications",
        "label": "Postpartum depression and psychosis",
        "page": 53,
        "endPage": 56
      }
    ],
    "pages": 59,
    "pdf": "ob-presentations/postpartum-care/original.pdf",
    "manifest": "ob-presentations/postpartum-care/deck.json",
    "contextLabel": "OB COURSE MATERIAL",
    "showSourceLinks": false
  },
  "postpartum-handout": {
    "id": "postpartum-handout",
    "title": "Postpartum review handout",
    "weekIds": [
      "week-7"
    ],
    "kind": "Study handout",
    "focus": [
      {
        "id": "postpartum-review",
        "topicId": "normal-postpartum",
        "label": "Postpartum review",
        "page": 1,
        "endPage": 7
      },
      {
        "id": "complications-review",
        "topicId": "postpartum-complications",
        "label": "Complications review",
        "page": 3,
        "endPage": 7
      }
    ],
    "pages": 7,
    "pdf": "ob-presentations/postpartum-handout/original.pdf",
    "manifest": "ob-presentations/postpartum-handout/deck.json",
    "contextLabel": "OB COURSE MATERIAL",
    "showSourceLinks": false
  },
  "newborn-care": {
    "id": "newborn-care",
    "title": "Assessment & care of the newborn",
    "weekIds": [
      "week-9",
      "week-10"
    ],
    "kind": "Lecture PDF",
    "focus": [
      {
        "id": "normal-newborn",
        "topicId": "normal-newborn",
        "label": "Newborn assessment and routine care",
        "page": 2,
        "endPage": 44
      },
      {
        "id": "newborn-complications",
        "topicId": "newborn-complications",
        "label": "Selected newborn complications and screening",
        "page": 45,
        "endPage": 60
      }
    ],
    "pages": 63,
    "pdf": "ob-presentations/newborn-care/original.pdf",
    "manifest": "ob-presentations/newborn-care/deck.json",
    "contextLabel": "OB COURSE MATERIAL",
    "showSourceLinks": false
  },
  "newborn-handout": {
    "id": "newborn-handout",
    "title": "Newborn assessment review handout",
    "weekIds": [
      "week-9",
      "week-10"
    ],
    "kind": "Study handout",
    "focus": [
      {
        "id": "assessment-review",
        "topicId": "normal-newborn",
        "label": "Assessment review",
        "page": 1,
        "endPage": 3
      },
      {
        "id": "complications-review",
        "topicId": "newborn-complications",
        "label": "Selected complications review",
        "page": 4,
        "endPage": 6
      }
    ],
    "pages": 7,
    "pdf": "ob-presentations/newborn-handout/original.pdf",
    "manifest": "ob-presentations/newborn-handout/deck.json",
    "contextLabel": "OB COURSE MATERIAL",
    "showSourceLinks": false
  },
  "newborn-care-plan": {
    "id": "newborn-care-plan",
    "title": "Newborn assessment & care-plan worksheet",
    "weekIds": [
      "week-9"
    ],
    "kind": "Assessment worksheet",
    "focus": [
      {
        "id": "assessment-care-plan",
        "topicId": "normal-newborn",
        "label": "Assessment and care planning",
        "page": 1,
        "endPage": 5
      }
    ],
    "pages": 5,
    "pdf": "ob-presentations/newborn-care-plan/original.pdf",
    "manifest": "ob-presentations/newborn-care-plan/deck.json",
    "contextLabel": "OB COURSE MATERIAL",
    "showSourceLinks": false
  },
  "infant-feeding": {
    "id": "infant-feeding",
    "title": "Infant feeding: breast & formula",
    "weekIds": [
      "week-9"
    ],
    "kind": "Lecture PDF",
    "focus": [
      {
        "id": "breastfeeding",
        "topicId": "feeding",
        "label": "Breastfeeding and feeding support",
        "page": 6,
        "endPage": 22
      },
      {
        "id": "formula-feeding",
        "topicId": "feeding",
        "label": "Formula preparation and feeding",
        "page": 23,
        "endPage": 26
      }
    ],
    "pages": 26,
    "pdf": "ob-presentations/infant-feeding/original.pdf",
    "manifest": "ob-presentations/infant-feeding/deck.json",
    "contextLabel": "OB COURSE MATERIAL",
    "showSourceLinks": false
  },
  "contraception": {
    "id": "contraception",
    "title": "Contraception",
    "weekIds": [
      "august-4"
    ],
    "kind": "Lecture PDF",
    "focus": [
      {
        "id": "contraception",
        "topicId": "contraception",
        "label": "Contraceptive methods and counseling",
        "page": 5,
        "endPage": 35
      }
    ],
    "pages": 35,
    "pdf": "ob-presentations/contraception/original.pdf",
    "manifest": "ob-presentations/contraception/deck.json",
    "contextLabel": "OB COURSE MATERIAL",
    "showSourceLinks": false
  },
  "stis": {
    "id": "stis",
    "title": "Sexually transmitted infections",
    "weekIds": [
      "august-4"
    ],
    "kind": "Lecture PDF",
    "focus": [
      {
        "id": "stis",
        "topicId": "stis",
        "label": "Sexually transmitted infections",
        "page": 2,
        "endPage": 27
      }
    ],
    "pages": 27,
    "pdf": "ob-presentations/stis/original.pdf",
    "manifest": "ob-presentations/stis/deck.json",
    "contextLabel": "OB COURSE MATERIAL",
    "showSourceLinks": false
  }
};
