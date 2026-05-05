// ── RADOJKOVA GRANA — Veze ────────────────────────────────────
// Počinje vezom Vujica → Radojko, pa sve do najmlađe generacije.

export const radojkoEdges = [
  // Vujica → Radojko (veza ka pretku)
  { id: "e-vujica-radojko", source: "vujica", target: "6b", style: { stroke: "#C4B49A" } },

  // Radojko → deca
  { id: "e-rad-milos",     source: "6b", target: "rad-milos" },
  { id: "e-rad-radovan",   source: "6b", target: "rad-radovan" },
  { id: "e-rad-nepoznata", source: "6b", target: "rad-nepoznata" },
  { id: "e-rad-visnja",    source: "6b", target: "rad-visnja" },
  { id: "e-rad-radivoje",  source: "6b", target: "rad-radivoje" },
  { id: "e-rad-mara",      source: "6b", target: "rad-mara" },
  { id: "e-rad-caja",      source: "6b", target: "rad-caja" },

  // Miloš → deca
  { id: "e-milos-svetislavka", source: "rad-milos", target: "milos-svetislavka" },
  { id: "e-milos-milan",       source: "rad-milos", target: "milos-milan" },
  { id: "e-milos-dragica",     source: "rad-milos", target: "milos-dragica" },
  { id: "e-milos-radmila",     source: "rad-milos", target: "milos-radmila" },
  { id: "e-milos-dragana",     source: "rad-milos", target: "milos-dragana" },

  // Milomir → deca
  { id: "e-mil-radovan", source: "rad-radovan", target: "mil-radovan" },
  { id: "e-mil-mara",    source: "rad-radovan", target: "mil-mara" },
  { id: "e-mil-visnja",  source: "rad-radovan", target: "mil-visnja" },

  // Radivoje → deca
  { id: "e-radi-goran",    source: "rad-radivoje", target: "radi-goran" },
  { id: "e-radi-kadiva",   source: "rad-radivoje", target: "radi-kadiva" },
  { id: "e-radi-poginula", source: "rad-radivoje", target: "radi-poginula" },

  // Caja → deca
  { id: "e-caja-mirjana",  source: "rad-caja", target: "caja-mirjana" },
  { id: "e-caja-svetlana", source: "rad-caja", target: "caja-svetlana" },

  // Rajka → dete
  { id: "e-rajka-goca", source: "rad-mara", target: "rajka-goca" },

  // Dobrila → deca
  { id: "e-dob-bosko",     source: "rad-visnja", target: "dob-bosko" },
  { id: "e-dob-pavle",     source: "rad-visnja", target: "dob-pavle" },
  { id: "e-dob-slavo",     source: "rad-visnja", target: "dob-slavo" },
  { id: "e-dob-mirko",     source: "rad-visnja", target: "dob-mirko" },
  { id: "e-dob-dragan",    source: "rad-visnja", target: "dob-dragan" },
  { id: "e-dob-dusanka",   source: "rad-visnja", target: "dob-dusanka" },
  { id: "e-dob-desimirka", source: "rad-visnja", target: "dob-desimirka" },

  // Radovan → deca
  { id: "e-radovan-mikica",  source: "mil-radovan", target: "radovan-mikica" },
  { id: "e-radovan-slavica", source: "mil-radovan", target: "radovan-slavica" },

  // Mara → deca
  { id: "e-mara-olivera",  source: "mil-mara", target: "mara-olivera" },
  { id: "e-mara-snezana",  source: "mil-mara", target: "mara-snezana" },
  { id: "e-mara-slavica",  source: "mil-mara", target: "mara-slavica" },
  { id: "e-mara-ljiljana", source: "mil-mara", target: "mara-ljiljana" },

  // Višnja → deca
  { id: "e-visnja-veroljub", source: "mil-visnja", target: "visnja-veroljub" },
  { id: "e-visnja-violeta",  source: "mil-visnja", target: "visnja-violeta" },

  // Goran → deca
  { id: "e-goran-darko", source: "radi-goran", target: "goran-darko" },
  { id: "e-goran-marko", source: "radi-goran", target: "goran-marko" },
  { id: "e-goran-filip", source: "radi-goran", target: "goran-filip" },

  // Kadiva → Žarko
  { id: "e-kadiva-zarko", source: "radi-kadiva", target: "kadiva-zarko" },

  // Dragica → Nataša
  { id: "e-dragica-natasa", source: "milos-dragica", target: "dragica-natasa" },

  // Radmila → deca
  { id: "e-radmila-nikola",   source: "milos-radmila", target: "radmila-nikola" },
  { id: "e-radmila-violeta",  source: "milos-radmila", target: "radmila-violeta" },
  { id: "e-radmila-danijela", source: "milos-radmila", target: "radmila-danijela" },

  // Dragana → Milica
  { id: "e-dragana-milica", source: "milos-dragana", target: "dragana-milica" },

  // Boško → deca
  { id: "e-bosko-jugo",     source: "dob-bosko", target: "bosko-jugo" },
  { id: "e-bosko-ljubinko", source: "dob-bosko", target: "bosko-ljubinko" },

  // Mirko → deca
  { id: "e-mirko-dragana", source: "dob-mirko", target: "mirko-dragana" },
  { id: "e-mirko-biljana", source: "dob-mirko", target: "mirko-biljana" },

  // Pavle → deca
  { id: "e-pavle-nebojsa", source: "dob-pavle", target: "pavle-nebojsa" },
  { id: "e-pavle-dijana",  source: "dob-pavle", target: "pavle-dijana" },

  // Slavo → deca
  { id: "e-slavo-slavisa",  source: "dob-slavo", target: "slavo-slavisa" },
  { id: "e-slavo-slavica",  source: "dob-slavo", target: "slavo-slavica" },
  { id: "e-slavo-svetlana", source: "dob-slavo", target: "slavo-svetlana" },

  // Dragan → dete
  { id: "e-dragan-radica", source: "dob-dragan", target: "dragan-radica" },

  // Dušanka → deca
  { id: "e-dusanka-aleksandra", source: "dob-dusanka", target: "dusanka-aleksandra" },
  { id: "e-dusanka-saska",      source: "dob-dusanka", target: "dusanka-saska" },

  // Desimirka → deca
  { id: "e-desimirka-ljubisa", source: "dob-desimirka", target: "desimirka-ljubisa" },
  { id: "e-desimirka-zoran",   source: "dob-desimirka", target: "desimirka-zoran" },

  // Mikica → deca
  { id: "e-mikica-aleksandar", source: "radovan-mikica", target: "mikica-aleksandar" },
  { id: "e-mikica-andjela",    source: "radovan-mikica", target: "mikica-andjela" },

  // Aleksandar → Bogdan
  { id: "e-aleksandar-bogdan", source: "mikica-aleksandar", target: "aleksandar-bogdan" },

  // Anđela → deca
  { id: "e-andjela-dete1", source: "mikica-andjela", target: "andjela-dete1" },
  { id: "e-andjela-dete2", source: "mikica-andjela", target: "andjela-dete2" },

  // Slavica (Radovanova) → deca
  { id: "e-radovan-slavica-sin",   source: "radovan-slavica", target: "radovan-slavica-sin" },
  { id: "e-radovan-slavica-cerka", source: "radovan-slavica", target: "radovan-slavica-cerka" },

  // Sin → njegovo dete
  { id: "e-radovan-slavica-sin-dete", source: "radovan-slavica-sin", target: "radovan-slavica-sin-dete" },

  // Olivera → deca
  { id: "e-olivera-radojko-cerka1", source: "mara-olivera", target: "olivera-radojko-cerka1" },
  { id: "e-olivera-radojko-cerka2", source: "mara-olivera", target: "olivera-radojko-cerka2" },

  // Snežana → sin
  { id: "e-snezana-sin", source: "mara-snezana", target: "snezana-sin" },

  // Slavica → sin
  { id: "e-slavica-sin", source: "mara-slavica", target: "slavica-sin" },

  // Veroljub → ćerka
  { id: "e-veroljub-cerka", source: "visnja-veroljub", target: "veroljub-cerka" },

  // Violeta → deca
  { id: "e-violeta-sin1", source: "visnja-violeta", target: "violeta-sin1" },
  { id: "e-violeta-sin2", source: "visnja-violeta", target: "violeta-sin2" },

  // Marko → deca
  { id: "e-marko-dete1", source: "goran-marko", target: "marko-dete1" },
  { id: "e-marko-dete2", source: "goran-marko", target: "marko-dete2" },
  { id: "e-marko-dete3", source: "goran-marko", target: "marko-dete3" },
  { id: "e-marko-dete4", source: "goran-marko", target: "marko-dete4" },

  // Svetlana (Cajina) → deca
  { id: "e-caja-svetlana-sin1",  source: "caja-svetlana", target: "caja-svetlana-sin1" },
  { id: "e-caja-svetlana-sin2",  source: "caja-svetlana", target: "caja-svetlana-sin2" },
  { id: "e-caja-svetlana-cerka", source: "caja-svetlana", target: "caja-svetlana-cerka" },

  // Mirjana → ćerka
  { id: "e-caja-mirjana-cerka", source: "caja-mirjana", target: "caja-mirjana-cerka" },

  // Ljubinko → deca
  { id: "e-ljubinko-dete1", source: "bosko-ljubinko", target: "ljubinko-dete1" },
  { id: "e-ljubinko-dete2", source: "bosko-ljubinko", target: "ljubinko-dete2" },

  // Dragana (Mirkova) → deca
  { id: "e-dragana-dete1", source: "mirko-dragana", target: "dragana-dete1" },
  { id: "e-dragana-dete2", source: "mirko-dragana", target: "dragana-dete2" },
  { id: "e-dragana-dete3", source: "mirko-dragana", target: "dragana-dete3" },

  // Biljana (Mirkova) → deca
  { id: "e-biljana-dete1", source: "mirko-biljana", target: "biljana-dete1" },
  { id: "e-biljana-dete2", source: "mirko-biljana", target: "biljana-dete2" },

  // Nebojša → deca
  { id: "e-nebojsa-dete1", source: "pavle-nebojsa", target: "nebojsa-dete1" },
  { id: "e-nebojsa-dete2", source: "pavle-nebojsa", target: "nebojsa-dete2" },

  // Dijana → deca
  { id: "e-dijana-dete1", source: "pavle-dijana", target: "dijana-dete1" },
  { id: "e-dijana-dete2", source: "pavle-dijana", target: "dijana-dete2" },

  // Slaviša → deca
  { id: "e-slavisa-dete1", source: "slavo-slavisa", target: "slavisa-dete1" },
  { id: "e-slavisa-dete2", source: "slavo-slavisa", target: "slavisa-dete2" },
  { id: "e-slavisa-dete3", source: "slavo-slavisa", target: "slavisa-dete3" },

  // Slavica (Slavova) → deca
  { id: "e-slavica-slavo-dete1", source: "slavo-slavica", target: "slavica-dete1" },
  { id: "e-slavica-slavo-dete2", source: "slavo-slavica", target: "slavica-dete2" },

  // Svetlana (Slavova) → deca
  { id: "e-svetlana-dete1", source: "slavo-svetlana", target: "svetlana-dete1" },
  { id: "e-svetlana-dete2", source: "slavo-svetlana", target: "svetlana-dete2" },
  { id: "e-svetlana-dete3", source: "slavo-svetlana", target: "svetlana-dete3" },

  // Radica → deca
  { id: "e-radica-dete1", source: "dragan-radica", target: "radica-dete1" },
  { id: "e-radica-dete2", source: "dragan-radica", target: "radica-dete2" },

  // Aleksandra → deca
  { id: "e-aleksandra-dete1", source: "dusanka-aleksandra", target: "aleksandra-dete1" },
  { id: "e-aleksandra-dete2", source: "dusanka-aleksandra", target: "aleksandra-dete2" },

  // Saška → deca
  { id: "e-saska-dete1", source: "dusanka-saska", target: "saska-dete1" },
  { id: "e-saska-dete2", source: "dusanka-saska", target: "saska-dete2" },

  // Ljubiša → deca
  { id: "e-ljubisa-dete1", source: "desimirka-ljubisa", target: "ljubisa-dete1" },
  { id: "e-ljubisa-dete2", source: "desimirka-ljubisa", target: "ljubisa-dete2" },

  // Zoran → deca
  { id: "e-zoran-dete1", source: "desimirka-zoran", target: "zoran-dete1" },
  { id: "e-zoran-dete2", source: "desimirka-zoran", target: "zoran-dete2" },
];
