// ── RADOJKOVA GRANA ───────────────────────────────────────────
// Radojko Cvejović (id: "6b") i svi potomci
// Koren grane dolazi iz ancestors: Vujica (id: "vujica") → Radojko (id: "6b")

export const radojkoNodes = [
  // ── Gen 4 — Radojko ───────────────────────────────────────────
  {
    id: "6b",
    data: {
      label: "Radojko Cvejović",
      years: "24.05.1900–13.10.1974",
      note: "Sin Vujice Cvejovića. Na grobu Vukašina Cvejovića upisan kao sinovac, što potvrđuje porodičnu vezu. Patrijarh druge grane — otac sedmoro dece sa dve supruge Stankom i Milunkom.",
      patriarch2: true,
      image: "RadojkoMilunka.jpeg",
      gender: 1,
    },
    position: { x: 0, y: 0 },
    type: "custom",
  },

  // ── Gen 5 — Radojkova deca ────────────────────────────────────
  { id: "rad-milos", data: { label: "Miloš Cvejović", years: "1923-2000", note: "Sin Radojka i Stanke Cvejović. Sa suprugom Miljojkom (Lazović) imao petoro dece:Svetislavka(preminula sa 3 godine), Milan (preminuo 3 dana nakon rođenja), Dragica, Radmila i Dragana.", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "rad-radovan", data: { label: "Milomir Cvejović", years: "1925-2020", note: "Sin Radojka i Stanke Cvejovića. Sa suprugom Zorkom izrodili troje dece: Radovan, Mara i Višnja.", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "rad-nepoznata", data: { label: "Mijojla Pribojac", years: "", note: "Ćerka Radojka i Stanke Cvejović. Nije imala dece.", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "rad-visnja", data: { label: "Dobrila Raković", years: "", note: "Ćerka Radojka i Stanke Cvejović.", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "rad-radivoje", data: { label: "Radivoje Cvejović", years: "1930-2012", note: "Sin Radojka i Milunke Cvejović. Sa suprugom Dušankom izrodili troje dece:Goran, Kadiva i Radomirka.", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "rad-mara", data: { label: "Rajka Novković", years: "", note: "Ćerka Radojka i Milunke Cvejović.", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "rad-caja", data: { label: "Stanimirka Nikolic", years: "", note: "Ćerka Radojka i Milunke Cvejović.", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  // ── Gen 6 — Miloševa deca ─────────────────────────────────────
  { id: "milos-svetislavka", data: { label: "Svetislavka Cvejović", years: "", note: "Preminula sa 3 godine od upale pluća.", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "milos-milan", data: { label: "Milan Cvejović", years: "", note: "Preminuo 3 dana nakon rođenja.", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "milos-dragica", data: { label: "Dragica Milosavac", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "milos-radmila", data: { label: "Radmila Glavčić", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "milos-dragana", data: { label: "Dragana Cvejović", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  // Milomirova deca
  { id: "mil-radovan", data: { label: "Radovan Cvejović", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "mil-mara", data: { label: "Mara", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "mil-visnja", data: { label: "Višnja", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  // Radivojeva deca
  { id: "radi-goran", data: { label: "Goran Cvejović", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "radi-kadiva", data: { label: "Kadiva", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "radi-poginula", data: { label: "Radomirka Cvejović", years: "", note: "Ćerka Radivoja, poginula u nesreći na pruzi u Velikoj Plani sa 16 godina.", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  // Cajina deca
  { id: "caja-mirjana", data: { label: "Mirjana", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "caja-svetlana", data: { label: "Svetlana", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  // Rajkina deca
  { id: "rajka-goca", data: { label: "Goca Dunkov", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  // Dobrilina deca
  { id: "dob-bosko", data: { label: "Boško Raković", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "dob-mirko", data: { label: "Mirko Raković", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "dob-slavo", data: { label: "Slavo Raković", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "dob-pavle", data: { label: "Pavle Raković", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "dob-dragan", data: { label: "Dragan Raković", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "dob-dusanka", data: { label: "Dušanka", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "dob-desimirka", data: { label: "Desimirka", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  // ── Gen 7 — Radovanova deca ───────────────────────────────────
  { id: "radovan-mikica", data: { label: "Mikica Cvejović", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "radovan-slavica", data: { label: "Slavica", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  // Mara → deca
  { id: "mara-olivera", data: { label: "Olivera", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "mara-snezana", data: { label: "Snežana", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "mara-slavica", data: { label: "Slavica", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "mara-ljiljana", data: { label: "Ljiljana", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  // Višnja → deca
  { id: "visnja-veroljub", data: { label: "Veroljub", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "visnja-violeta", data: { label: "Violeta", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  // Goran → deca
  { id: "goran-darko", data: { label: "Darko Cvejović", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "goran-marko", data: { label: "Marko Cvejović", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "goran-filip", data: { label: "Filip Cvejović", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },

  // Kadiva → dete
  { id: "kadiva-zarko", data: { label: "Žarko", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },

  // Dragica → dete
  { id: "dragica-natasa", data: { label: "Nataša Milosavac", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  // Radmila → deca
  { id: "radmila-nikola", data: { label: "Nikola", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "radmila-violeta", data: { label: "Violeta", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "radmila-danijela", data: { label: "Danijela", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  // Dragana → dete
  { id: "dragana-milica", data: { label: "Milica Cvejović", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  // Boško → deca
  { id: "bosko-jugo", data: { label: "Jugo Raković", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "bosko-ljubinko", data: { label: "Ljubinko Raković", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },

  // Mirko → deca
  { id: "mirko-dragana", data: { label: "Dragana", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "mirko-biljana", data: { label: "Biljana", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  // Pavle → deca
  { id: "pavle-nebojsa", data: { label: "Nebojša Raković", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "pavle-dijana", data: { label: "Dijana", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  // Slavo → deca
  { id: "slavo-slavisa", data: { label: "Slaviša Raković", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "slavo-slavica", data: { label: "Slavica", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "slavo-svetlana", data: { label: "Svetlana", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  // Dragan → dete
  { id: "dragan-radica", data: { label: "Radica", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  // Dušanka → deca
  { id: "dusanka-aleksandra", data: { label: "Aleksandra", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "dusanka-saska", data: { label: "Saška", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  // Desimirka → deca
  { id: "desimirka-ljubisa", data: { label: "Ljubiša", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "desimirka-zoran", data: { label: "Zoran", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },

  // ── Gen 8 — Mikica → deca ─────────────────────────────────────
  { id: "mikica-aleksandar", data: { label: "Aleksandar Cvejović", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "mikica-andjela", data: { label: "Anđela", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  // Aleksandar → dete
  { id: "aleksandar-bogdan", data: { label: "Bogdan Cvejović", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },

  // Anđela → deca
  { id: "andjela-dete1", data: { label: "?", years: "", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "andjela-dete2", data: { label: "?", years: "", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },

  // Slavica (Radovanova) → deca
  { id: "radovan-slavica-sin", data: { label: "?", gender: 1, unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "radovan-slavica-cerka", data: { label: "?", gender: 2, unknown: true }, position: { x: 0, y: 0 }, type: "custom" },

  // Sin → njegovo dete
  { id: "radovan-slavica-sin-dete", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },

  // Olivera → deca
  { id: "olivera-radojko-cerka1", data: { label: "?", gender: 2, unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "olivera-radojko-cerka2", data: { label: "?", gender: 2, unknown: true }, position: { x: 0, y: 0 }, type: "custom" },

  // Snežana → sin
  { id: "snezana-sin", data: { label: "?", gender: 1, unknown: true }, position: { x: 0, y: 0 }, type: "custom" },

  // Slavica → sin
  { id: "slavica-sin", data: { label: "?", gender: 1, unknown: true }, position: { x: 0, y: 0 }, type: "custom" },

  // Veroljub → ćerka
  { id: "veroljub-cerka", data: { label: "?", gender: 2, unknown: true }, position: { x: 0, y: 0 }, type: "custom" },

  // Violeta → deca
  { id: "violeta-sin1", data: { label: "?", gender: 1, unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "violeta-sin2", data: { label: "?", gender: 1, unknown: true }, position: { x: 0, y: 0 }, type: "custom" },

  // Marko → deca
  { id: "marko-dete1", data: { label: "Anja Cvejović", years: "" }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "marko-dete2", data: { label: "Vanja Cvejović", years: "" }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "marko-dete3", data: { label: "David Cvejović", years: "" }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "marko-dete4", data: { label: "Maša Cvejović", years: "" }, position: { x: 0, y: 0 }, type: "custom" },

  // Svetlana (Cajina) → deca
  { id: "caja-svetlana-sin1", data: { label: "?", years: "", gender: 1, unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "caja-svetlana-sin2", data: { label: "?", years: "", gender: 1, unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "caja-svetlana-cerka", data: { label: "?", years: "", gender: 2, unknown: true }, position: { x: 0, y: 0 }, type: "custom" },

  // Mirjana → ćerka
  { id: "caja-mirjana-cerka", data: { label: "?", years: "", gender: 2, unknown: true }, position: { x: 0, y: 0 }, type: "custom" },

  // Ljubinko → deca
  { id: "ljubinko-dete1", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "ljubinko-dete2", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },

  // Dragana (Mirkova) → deca
  { id: "dragana-dete1", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "dragana-dete2", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "dragana-dete3", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },

  // Biljana (Mirkova) → deca
  { id: "biljana-dete1", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "biljana-dete2", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },

  // Nebojša → deca
  { id: "nebojsa-dete1", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "nebojsa-dete2", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },

  // Dijana → deca
  { id: "dijana-dete1", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "dijana-dete2", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },

  // Slaviša → deca
  { id: "slavisa-dete1", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "slavisa-dete2", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "slavisa-dete3", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },

  // Slavica (Slavova) → deca
  { id: "slavica-dete1", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "slavica-dete2", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },

  // Svetlana (Slavova) → deca
  { id: "svetlana-dete1", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "svetlana-dete2", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "svetlana-dete3", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },

  // Radica → deca
  { id: "radica-dete1", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "radica-dete2", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },

  // Aleksandra → deca
  { id: "aleksandra-dete1", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "aleksandra-dete2", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },

  // Saška → deca
  { id: "saska-dete1", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "saska-dete2", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },

  // Ljubiša → deca
  { id: "ljubisa-dete1", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "ljubisa-dete2", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },

  // Zoran → deca
  { id: "zoran-dete1", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "zoran-dete2", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
];
