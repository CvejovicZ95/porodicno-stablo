// ── ŽIVOJINOVA GRANA ─────────────────────────────────────────
// Živojin Cvejović (id: "6") i svi potomci
// Koren grane dolazi iz ancestors: Ljubomir (id: "4") → Živojin (id: "6")

export const zivojinNodes = [
  // ── Gen 4 — Živojin ───────────────────────────────────────────
  {
    id: "6",
    data: {
      label: "Živojin Cvejović",
      years: "08.11.1907-30.03.1972",
      note: "Sin Ljubomira i Milunke Cvejović, rođeni brat Vladimira. Na grobu Vukašina Cvejovića upisan kao sinovac, što potvrđuje porodičnu vezu. Patrijarh prve grane — otac sedmoro dece sa suprugom Savkom(Veljković).",
      patriarch: true,
      image: "/ZivoinSavka.jpeg",
      gender: 1,
    },
    position: { x: 0, y: 0 },
    type: "custom",
  },

  // ── Gen 5 — Živojinova deca ───────────────────────────────────
  {
    id: "g6-ruza",
    data: {
      label: "Ruža Raković",
      years: "1932-2021",
      note: "Ćerka Živojina Cvejovića. Sa suprugom Bogomirom izrodila dvoje dece: Vitomir i Smilja.",
      gender: 2,
    },
    position: { x: 0, y: 0 },
    type: "custom",
  },
  {
    id: "g6-svetislav",
    data: { label: "Svetislav Cvejović", years: "1934–2020", note: "Sin Živojina Cvejovića. Sa suprugom Ružom izrodili dvoje dece: Vlada i Vladan.", gender: 1 },
    position: { x: 0, y: 0 },
    type: "custom",
  },
  {
    id: "g6-miljojka",
    data: {
      label: "Miljojka Radisavljević",
      years: "1929-?",
      note: "Ćerka Živojina Cvejovića.Sa suprugom Dobrivojem izrodila dvoje dece: Milan i Radmila.",
      gender: 2,
    },
    position: { x: 0, y: 0 },
    type: "custom",
  },
  {
    id: "g6-radojka",
    data: {
      label: "Radojka Pribojac",
      years: "1939-2013",
      note: "Ćerka Živojina Cvejovića. Sa suprugom Milanom (Lače) izrodila tri ćerke: Ružica, Milka i Ljubinka.",
      gender: 2,
    },
    position: { x: 0, y: 0 },
    type: "custom",
  },
  {
    id: "g6-zora",
    data: { label: "Zorka Glavčić", years: "1937-2013", note: "Ćerka Živojina Cvejovića. Sa suprugom Obradom izrodila dva sina: Slobodan i Dragan.", gender: 2 },
    position: { x: 0, y: 0 },
    type: "custom",
  },
  {
    id: "g6-mico",
    data: {
      label: "Miodrag Cvejović",
      years: "1942-2002",
      note: "Sin Živojina Cvejovića. Sa suprugom Zorkom izrodio dve ćerke: Slobodanka i Biljana.",
      gender: 1,
    },
    position: { x: 0, y: 0 },
    type: "custom",
  },
  {
    id: "g6-rada",
    data: {
      label: "Rada Bekčić",
      years: "1945-1965",
      note: "Ćerka Živojina Cvejovića. Sa suprugom Budimirom izrodila dva sina: Branislava i Zorana. Preminula odmah nakon što je rodila Zorana na Božić 1965.",
      image: "/RadaOriginal.jpeg",
      gender: 2,
    },
    position: { x: 0, y: 0 },
    type: "custom",
  },

  // ── Gen 6 — Ruzina deca ───────────────────────────────────────
  { id: "g7-vitomir", data: { label: "Vitomir Raković", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g7-smilja", data: { label: "Smilja Trifunović", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  // Svetislavova deca
  { id: "g7-vlada", data: { label: "Vlada Marić", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "8", data: { label: "Vladan Cvejović", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },

  // Miljojkina deca
  { id: "g7-milan-rad", data: { label: "Milan Radisavljević", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g7-radmila", data: { label: "Radmila", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  // Radojkina deca
  { id: "g7-ruzica", data: { label: "Ružica Veljković", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g7-milka", data: { label: "Milka Bekčić", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g7-ljubinka", data: { label: "Ljubinka Bekčić", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  // Zorina deca
  { id: "g7-slobodan", data: { label: "Slobodan Glavčić", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g7-dragan", data: { label: "Dragan Glavčić", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },

  // Micova deca
  { id: "g7-slobodanka", data: { label: "Slobodanka Koljančić Cvejović", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g7-biljana", data: { label: "Biljana Vespa", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  // Radina deca
  { id: "g7-branislav", data: { label: "Branislav Bekčić", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g7-zoran-rada", data: { label: "Zoran Bekčić", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },

  // ── Gen 7 — Vitomirova deca ───────────────────────────────────
  { id: "g8-jasmina", data: { label: "Jasmina Carcagni", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g8-aleksandar", data: { label: "Aleksandar Raković", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g8-kristina", data: { label: "Kristina Raković", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  // Smiljina deca
  { id: "g8-dragoljub", data: { label: "Dragoljub Trifunović", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g8-maja", data: { label: "Maja", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  // Vladina deca
  { id: "g8-jelena", data: { label: "Jelena Miković", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g8-milijana", data: { label: "Milijana Marić", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  // Vladanova deca
  { id: "g8-dusan", data: { label: "Dušan Cvejović", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "9", data: { label: "Zoran Cvejović", years: "", gender: 1, note: "Tvorac porodičnog stabla" }, position: { x: 0, y: 0 }, type: "custom" },

  // Milan (Miljojkin) → deca
  { id: "g8-slavica-rad", data: { label: "Slavica", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g8-ruzica-rad", data: { label: "Ružica", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  // Radmilina deca
  { id: "g8-jasna", data: { label: "Jasna", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g8-vesna", data: { label: "Vesna", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  // Ružica (Radojkina) → deca
  { id: "g8-mirjana", data: { label: "Mirjana Veljković", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g8-milovan", data: { label: "Milovan Veljković", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g8-slavka", data: { label: "Slavka Đorđević", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  // Milkina deca
  { id: "g8-oliver", data: { label: "Oliver Bekčić", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g8-olivera", data: { label: "Olivera Bekčić", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  // Ljubinkina deca
  { id: "g8-bojan", data: { label: "Bojan Bekčić", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g8-bojana", data: { label: "Bojana Janković", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  // Slobodanova deca
  { id: "g8-goran", data: { label: "Goran Glavčić", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g8-marin", data: { label: "Marin Glavčić", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },

  // Draganova deca
  { id: "g8-djordje", data: { label: "Đorđe Glavčić", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g8-biljana-drag", data: { label: "Biljana Glavčić", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  // Slobodankina deca
  { id: "g8-teodora", data: { label: "Teodora Koljančić Cvejović", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g8-arsenije", data: { label: "Arsenije Koljančić Cvejović", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },

  // Biljanina deca (Micova Biljana)
  { id: "g8-luka", data: { label: "Luka Vespa", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },

  // Branislavova deca
  { id: "g8-marija", data: { label: "Marija Raković", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g8-lazar", data: { label: "Lazar Bekčić", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },

  // Zoranova deca (Zoran Bekčić)
  { id: "g8-boban", data: { label: "Boban Bekčić", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g8-zoranb-sin", data: { label: "Rada Bekčić", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g8-zoranb-cerka", data: { label: "Ivan Bekčić", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },

  // ── Gen 8 ──────────────────────────────────────────────────────
  { id: "g9-jasmina-dete1", data: { label: "Soena-Kalina Carcagni", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g9-sofija", data: { label: "Sofija Trifunović", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g9-maja-cerka1", data: { label: "Elena", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g9-lana", data: { label: "Lana Miković", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g9-djordje-maric", data: { label: "Đorđe Miković", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g9-sara", data: { label: "Sara Veljković", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g9-luka-velj", data: { label: "Luka Veljković", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g9-andrej", data: { label: "Andrej Veljković", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g9-david", data: { label: "David Đorđević", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g9-olivera-cerka1", data: { label: "Roberta Laura Bekčić", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g9-olivera-cerka2", data: { label: "Jana Marković", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g9-dijana", data: { label: "Dijana Bekčić", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g9-elena", data: { label: "Elena Bekčić", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g9-ksenija", data: { label: "Ksenija Janković", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g9-goran-sin", data: { label: "Luka Glavčić", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g9-goran-cerka", data: { label: "Katarina Glavčić", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g9-goran-sin2", data: { label: "Frano Glavčić", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g9-djordje-gl-dete", data: { label: "Anja Glavčić", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g9-djordje-gl-dete2", data: { label: "Todor Glavčić", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g9-djordje-gl-dete3", data: { label: "Hana Glavčić", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g9-vuk", data: { label: "Vuk Raković", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g9-relja", data: { label: "Relja Raković", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g9-slavica-dete1", data: { label: "?", years: "", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g9-slavica-dete2", data: { label: "?", years: "", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g9-ruzica-sin1", data: { label: "?", years: "", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g9-ruzica-sin2", data: { label: "?", years: "", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g9-jasna-dete1", data: { label: "?", years: "", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g9-jasna-dete2", data: { label: "?", years: "", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g9-vesna-dete1", data: { label: "?", years: "", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g9-vesna-dete2", data: { label: "?", years: "", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g9-ivan-bekcic-dete", data: { label: "Minja Bekčić", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
];
