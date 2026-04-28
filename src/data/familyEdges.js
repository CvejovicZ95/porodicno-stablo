// ── PORODIČNO STABLO — VEZE ───────────────────────────────────
// Dodaj nove veze ovde. source = roditelj, target = dete.
// Kako koristiti:

// familyData.js i familyNodes.js i familyEdges.js idu u src/data/
// CustomNode.jsx i familyTree.jsx idu u src/components/

// Od sad kad dodaješ novu osobu — otvoriš samo familyNodes.js i familyEdges.js, sve ostalo ostaje netaknuto!

export const edges = [
  // Gen 0 → 1
  { id: "e0-1", source: "0", target: "1", style: { stroke: "#8B4513" } },
  // Gen 1→2
  { id: "e1-2", source: "1", target: "2" },
  // Gen 2→3
  { id: "e2-ljubica", source: "2", target: "3", style: { stroke: "#C4B49A" } },
  { id: "e2-4", source: "2", target: "4", style: { stroke: "#C4B49A" } },
  { id: "e2-5", source: "2", target: "5", style: { stroke: "#C4B49A" } },
  { id: "e2-vujica", source: "2", target: "vujica", style: { stroke: "#C4B49A" } },

  // Ljubomir → Živojin, Vladimir
  { id: "e4-6", source: "4", target: "6", style: { stroke: "#C4B49A" } },
  { id: "e-ljubomir-vlad", source: "4", target: "vladimir", style: { stroke: "#C4B49A" } },

  // Vujica → Radojko
  { id: "e-vujica-radojko", source: "vujica", target: "6b", style: { stroke: "#C4B49A" } },

  // Vladimir → Ivan
  { id: "e-vladimir-ivan", source: "vladimir", target: "ivan-vladimir", style: { stroke: "#C4B49A" } },

  // Ivan → ćerke
  { id: "e-ivan-nada", source: "ivan-vladimir", target: "ivan-nada" },
  { id: "e-ivan-snezana", source: "ivan-vladimir", target: "ivan-snezana" },

  // ── Živojin → deca ───────────────────────────────────────────
  { id: "e6-miljojka", source: "6", target: "g6-miljojka" },
  { id: "e6-ruza", source: "6", target: "g6-ruza" },
  { id: "e6-svetislav", source: "6", target: "g6-svetislav" },
  { id: "e6-zora", source: "6", target: "g6-zora" },
  { id: "e6-radojka", source: "6", target: "g6-radojka" },
  { id: "e6-mico", source: "6", target: "g6-mico" },
  { id: "e6-rada", source: "6", target: "g6-rada" },

  // ── Radojko → deca ───────────────────────────────────────────
  // Radojko → deca (NOVI REDOSLED)
  { id: "e-rad-milos", source: "6b", target: "rad-milos" },        // Miloš
  { id: "e-rad-radovan", source: "6b", target: "rad-radovan" },    // Milomir (Radovan linija)
  { id: "e-rad-nepoznata", source: "6b", target: "rad-nepoznata" },// Mijojla
  { id: "e-rad-visnja", source: "6b", target: "rad-visnja" },      // Dobrila
  { id: "e-rad-radivoje", source: "6b", target: "rad-radivoje" },  // Radivoje
  { id: "e-rad-mara", source: "6b", target: "rad-mara" },          // Rajka
  { id: "e-rad-caja", source: "6b", target: "rad-caja" },          // Stanimirka

  // Milomir → deca
  { id: "e-mil-radovan", source: "rad-radovan", target: "mil-radovan" },
  { id: "e-mil-mara", source: "rad-radovan", target: "mil-mara" },
  { id: "e-mil-visnja", source: "rad-radovan", target: "mil-visnja" },

  // Radivoje → deca
  { id: "e-radi-goran", source: "rad-radivoje", target: "radi-goran" },
  { id: "e-radi-kadiva", source: "rad-radivoje", target: "radi-kadiva" },
  { id: "e-radi-poginula", source: "rad-radivoje", target: "radi-poginula" },

  // Miloš → deca
  { id: "e-milos-svetislavka", source: "rad-milos", target: "milos-svetislavka" },
  { id: "e-milos-dragica", source: "rad-milos", target: "milos-dragica" },
  { id: "e-milos-radmila", source: "rad-milos", target: "milos-radmila" },
  { id: "e-milos-dragana", source: "rad-milos", target: "milos-dragana" },

  // Caja → deca
  { id: "e-caja-mirjana", source: "rad-caja", target: "caja-mirjana" },
  { id: "e-caja-svetlana", source: "rad-caja", target: "caja-svetlana" },

  // Rajka → deca
  { id: "e-rajka-goca", source: "rad-mara", target: "rajka-goca" },

  // Dobrila → deca
  { id: "e-dob-bosko", source: "rad-visnja", target: "dob-bosko" },
  { id: "e-dob-pavle", source: "rad-visnja", target: "dob-pavle" },
  { id: "e-dob-slavo", source: "rad-visnja", target: "dob-slavo" },
  { id: "e-dob-mirko", source: "rad-visnja", target: "dob-mirko" },
  { id: "e-dob-dragan", source: "rad-visnja", target: "dob-dragan" },
  { id: "e-dob-dusanka", source: "rad-visnja", target: "dob-dusanka" },
  { id: "e-dob-desimirka", source: "rad-visnja", target: "dob-desimirka" },

  // ── NOVI EDGE-OVI ─────────────────────────────────────────

  // Radovan → deca
  { id: "e-radovan-mikica", source: "mil-radovan", target: "radovan-mikica" },
  { id: "e-radovan-slavica", source: "mil-radovan", target: "radovan-slavica" },

  // Mara → deca
  { id: "e-mara-olivera", source: "mil-mara", target: "mara-olivera" },
  { id: "e-mara-snezana", source: "mil-mara", target: "mara-snezana" },
  { id: "e-mara-slavica", source: "mil-mara", target: "mara-slavica" },
  { id: "e-mara-ljiljana", source: "mil-mara", target: "mara-ljiljana" },

  // Višnja → deca
  { id: "e-visnja-veroljub", source: "mil-visnja", target: "visnja-veroljub" },
  { id: "e-visnja-violeta", source: "mil-visnja", target: "visnja-violeta" },

  // Goran → deca
  { id: "e-goran-darko", source: "radi-goran", target: "goran-darko" },
  { id: "e-goran-marko", source: "radi-goran", target: "goran-marko" },
  { id: "e-goran-filip", source: "radi-goran", target: "goran-filip" },

  // Kadiva → Žarko
  { id: "e-kadiva-zarko", source: "radi-kadiva", target: "kadiva-zarko" },

  // Dragica → Nataša
  { id: "e-dragica-natasa", source: "milos-dragica", target: "dragica-natasa" },

  // Radmila → deca
  { id: "e-radmila-nikola", source: "milos-radmila", target: "radmila-nikola" },
  { id: "e-radmila-violeta", source: "milos-radmila", target: "radmila-violeta" },
  { id: "e-radmila-danijela", source: "milos-radmila", target: "radmila-danijela" },

  // Dragana → Milica
  { id: "e-dragana-milica", source: "milos-dragana", target: "dragana-milica" },

  // ── Živojinova unučad ─────────────────────────────────────────

  // Ruža → deca
  { id: "e-ruza-vitomir", source: "g6-ruza", target: "g7-vitomir" },
  { id: "e-ruza-smilja", source: "g6-ruza", target: "g7-smilja" },

  // Svetislav → deca
  { id: "e-svet-vlada", source: "g6-svetislav", target: "g7-vlada" },
  { id: "e-svet-vladan", source: "g6-svetislav", target: "8" },

  // Miljojka → deca
  { id: "e-milj-milan", source: "g6-miljojka", target: "g7-milan-rad" },
  { id: "e-milj-radmila", source: "g6-miljojka", target: "g7-radmila" },

  // Radojka → deca
  { id: "e-radojka-ruzica", source: "g6-radojka", target: "g7-ruzica" },
  { id: "e-radojka-milka", source: "g6-radojka", target: "g7-milka" },
  { id: "e-radojka-ljubinka", source: "g6-radojka", target: "g7-ljubinka" },

  // Zora → deca
  { id: "e-zora-slobodan", source: "g6-zora", target: "g7-slobodan" },
  { id: "e-zora-dragan", source: "g6-zora", target: "g7-dragan" },

  // Mićo → deca
  { id: "e-mico-slobodanka", source: "g6-mico", target: "g7-slobodanka" },
  { id: "e-mico-biljana", source: "g6-mico", target: "g7-biljana" },

  // Rada → deca
  { id: "e-rada-branislav", source: "g6-rada", target: "g7-branislav" },
  { id: "e-rada-zoran", source: "g6-rada", target: "g7-zoran-rada" },

  // Vitomir → deca
  { id: "e-vito-jasmina", source: "g7-vitomir", target: "g8-jasmina" },
  { id: "e-vito-aleksandar", source: "g7-vitomir", target: "g8-aleksandar" },
  { id: "e-vito-kristina", source: "g7-vitomir", target: "g8-kristina" },

  // Smilja → deca
  { id: "e-smilj-dragoljub", source: "g7-smilja", target: "g8-dragoljub" },
  { id: "e-smilj-maja", source: "g7-smilja", target: "g8-maja" },

  // Vlada → deca
  { id: "e-vlada-jelena", source: "g7-vlada", target: "g8-jelena" },
  { id: "e-vlada-milijana", source: "g7-vlada", target: "g8-milijana" },

  // Vladan → deca
  { id: "e8-dusan", source: "8", target: "g8-dusan" },
  { id: "e8-9", source: "8", target: "9" },

  // Milan (Miljojkin) → deca
  { id: "e-milan-slavica", source: "g7-milan-rad", target: "g8-slavica-rad" },
  { id: "e-milan-ruzica", source: "g7-milan-rad", target: "g8-ruzica-rad" },

  // Radmila → deca
  { id: "e-radmila-jasna", source: "g7-radmila", target: "g8-jasna" },
  { id: "e-radmila-vesna", source: "g7-radmila", target: "g8-vesna" },

  // Ružica (Radojkina) → deca
  { id: "e-ruzica-mirjana", source: "g7-ruzica", target: "g8-mirjana" },
  { id: "e-ruzica-milovan", source: "g7-ruzica", target: "g8-milovan" },
  { id: "e-ruzica-slavka", source: "g7-ruzica", target: "g8-slavka" },

  // Milka → deca
  { id: "e-milka-oliver", source: "g7-milka", target: "g8-oliver" },
  { id: "e-milka-olivera", source: "g7-milka", target: "g8-olivera" },

  // Ljubinka → deca
  { id: "e-ljubinka-bojan", source: "g7-ljubinka", target: "g8-bojan" },
  { id: "e-ljubinka-bojana", source: "g7-ljubinka", target: "g8-bojana" },

  // Slobodan → deca
  { id: "e-slobodan-goran", source: "g7-slobodan", target: "g8-goran" },
  { id: "e-slobodan-marin", source: "g7-slobodan", target: "g8-marin" },

  // Dragan → deca
  { id: "e-dragan-djordje", source: "g7-dragan", target: "g8-djordje" },
  { id: "e-dragan-biljana", source: "g7-dragan", target: "g8-biljana-drag" },

  // Slobodanka → deca
  { id: "e-slobodanka-teodora", source: "g7-slobodanka", target: "g8-teodora" },
  { id: "e-slobodanka-arsenije", source: "g7-slobodanka", target: "g8-arsenije" },

  // Biljana (Mićeva) → deca
  { id: "e-biljana-luka", source: "g7-biljana", target: "g8-luka" },

  // Branislav → deca
  { id: "e-branislav-marija", source: "g7-branislav", target: "g8-marija" },
  { id: "e-branislav-lazar", source: "g7-branislav", target: "g8-lazar" },

  // Zoran Bekčić → troje dece
  { id: "e-zoranb-boban", source: "g7-zoran-rada", target: "g8-boban" },
  { id: "e-zoranb-sin", source: "g7-zoran-rada", target: "g8-zoranb-sin" },
  { id: "e-zoranb-cerka", source: "g7-zoran-rada", target: "g8-zoranb-cerka" },

  // Snežana → deca
  { id: "e-snez-vesna", source: "ivan-snezana", target: "snez-vesna" },
  { id: "e-snez-vladimir", source: "ivan-snezana", target: "snez-vladimir" },

  // Nada → deca
  { id: "e-nada-andjelka", source: "ivan-nada", target: "nada-andjelka" },
  { id: "e-nada-marijana", source: "ivan-nada", target: "nada-marijana" },

  // ── Gen 9 ─────────────────────────────────────────────────────
  { id: "e-jasmina-dete1", source: "g8-jasmina", target: "g9-jasmina-dete1" },
  { id: "e-dragoljub-sofija", source: "g8-dragoljub", target: "g9-sofija" },
  { id: "e-maja-cerka1", source: "g8-maja", target: "g9-maja-cerka1" },
  { id: "e-maja-cerka2", source: "g8-maja", target: "g9-maja-cerka2" },
  { id: "e-jelena-lana", source: "g8-jelena", target: "g9-lana" },
  { id: "e-jelena-djordje", source: "g8-jelena", target: "g9-djordje-maric" },
  { id: "e-milovan-sara", source: "g8-milovan", target: "g9-sara" },
  { id: "e-milovan-luka", source: "g8-milovan", target: "g9-luka-velj" },
  { id: "e-milovan-andrej", source: "g8-milovan", target: "g9-andrej" },
  { id: "e-slavka-david", source: "g8-slavka", target: "g9-david" },
  { id: "e-olivera-cerka1", source: "g8-olivera", target: "g9-olivera-cerka1" },
  { id: "e-olivera-cerka2", source: "g8-olivera", target: "g9-olivera-cerka2" },
  { id: "e-bojan-dijana", source: "g8-bojan", target: "g9-dijana" },
  { id: "e-bojan-elena", source: "g8-bojan", target: "g9-elena" },
  { id: "e-bojana-ksenija", source: "g8-bojana", target: "g9-ksenija" },
  { id: "e-goran-sin", source: "g8-goran", target: "g9-goran-sin" },
  { id: "e-goran-cerka", source: "g8-goran", target: "g9-goran-cerka" },
  { id: "e-goran-sin2", source: "g8-goran", target: "g9-goran-sin2" },
  { id: "e-djordje-gl-dete", source: "g8-djordje", target: "g9-djordje-gl-dete" },
  { id: "e-djordje-gl-dete2", source: "g8-djordje", target: "g9-djordje-gl-dete2" },
  { id: "e-djordje-gl-dete3", source: "g8-djordje", target: "g9-djordje-gl-dete3" },
  { id: "e-biljana-gl-dete", source: "g8-biljana-drag", target: "g9-biljana-gl-dete" },
  { id: "e-marija-vuk", source: "g8-marija", target: "g9-vuk" },
  { id: "e-marija-relja", source: "g8-marija", target: "g9-relja" },
  { id: "e-slavica-dete1", source: "g8-slavica-rad", target: "g9-slavica-dete1" },
  { id: "e-slavica-dete2", source: "g8-slavica-rad", target: "g9-slavica-dete2" },
  { id: "e-ruzica-rad-sin1", source: "g8-ruzica-rad", target: "g9-ruzica-sin1" },
  { id: "e-ruzica-rad-sin2", source: "g8-ruzica-rad", target: "g9-ruzica-sin2" },
  { id: "e-jasna-dete1", source: "g8-jasna", target: "g9-jasna-dete1" },
  { id: "e-jasna-dete2", source: "g8-jasna", target: "g9-jasna-dete2" },
  { id: "e-vesna-dete1", source: "g8-vesna", target: "g9-vesna-dete1" },
  { id: "e-vesna-dete2", source: "g8-vesna", target: "g9-vesna-dete2" },
  { id: "e-ivan-bekcic-dete", source: "g8-boban", target: "g9-ivan-bekcic-dete" },

  // Vesna (Snežanina) → deca
  { id: "e-snezv-dete1", source: "snez-vesna", target: "snez-vesna-dete1" },
  { id: "e-snezv-dete2", source: "snez-vesna", target: "snez-vesna-dete2" },

  // Anđelka → deca
  { id: "e-andjelka-dete1", source: "nada-andjelka", target: "andjelka-dete1" },
  { id: "e-andjelka-dete2", source: "nada-andjelka", target: "andjelka-dete2" },

  // Marijana → deca
  { id: "e-marijana-dete1", source: "nada-marijana", target: "marijana-dete1" },
  { id: "e-marijana-dete2", source: "nada-marijana", target: "marijana-dete2" },

  // ── Mikica → deca ─────────────────────────────────────────

  { id: "e-mikica-aleksandar", source: "radovan-mikica", target: "mikica-aleksandar" },
  { id: "e-mikica-andjela", source: "radovan-mikica", target: "mikica-andjela" },

  // Aleksandar → Bogdan
  { id: "e-aleksandar-bogdan", source: "mikica-aleksandar", target: "aleksandar-bogdan" },

  // Anđela → deca
  { id: "e-andjela-dete1", source: "mikica-andjela", target: "andjela-dete1" },
  { id: "e-andjela-dete2", source: "mikica-andjela", target: "andjela-dete2" },

  // Bosko → deca
  { id: "e-bosko-jugo", source: "dob-bosko", target: "bosko-jugo" },
  { id: "e-bosko-ljubinko", source: "dob-bosko", target: "bosko-ljubinko" },

  // Mirko → deca
  { id: "e-mirko-dragana", source: "dob-mirko", target: "mirko-dragana" },
  { id: "e-mirko-biljana", source: "dob-mirko", target: "mirko-biljana" },

  //Palve → deca
  { id: "e-pavle-nebojsa", source: "dob-pavle", target: "pavle-nebojsa" },
  { id: "e-pavle-dijana", source: "dob-pavle", target: "pavle-dijana" },

  //Slavo → deca
  { id: "e-slavo-slavisa", source: "dob-slavo", target: "slavo-slavisa" },
  { id: "e-slavo-slavica", source: "dob-slavo", target: "slavo-slavica" },
  { id: "e-slavo-svetlana", source: "dob-slavo", target: "slavo-svetlana" },

  //Dragan → deca
  { id: "e-dragan-radica", source: "dob-dragan", target: "dragan-radica" },

  //Dušanka → deca
  { id: "e-dusanka-aleksandra", source: "dob-dusanka", target: "dusanka-aleksandra" },
  { id: "e-dusanka-saska", source: "dob-dusanka", target: "dusanka-saska" },

  //Desimirka → deca
  { id: "e-desimirka-ljubisa", source: "dob-desimirka", target: "desimirka-ljubisa" },
  { id: "e-desimirka-zoran", source: "dob-desimirka", target: "desimirka-zoran" },

  //Ljubnko → deca
  { id: "e-ljubinko-dete1", source: "bosko-ljubinko", target: "ljubinko-dete1" },
  { id: "e-ljubinko-dete2", source: "bosko-ljubinko", target: "ljubinko-dete2" },

  //Dragana → deca
  { id: "e-dragana-dete1", source: "mirko-dragana", target: "dragana-dete1" },
  { id: "e-dragana-dete2", source: "mirko-dragana", target: "dragana-dete2" },
  { id: "e-dragana-dete3", source: "mirko-dragana", target: "dragana-dete3" },

  //Biljana → deca
  { id: "e-biljana-dete1", source: "mirko-biljana", target: "biljana-dete1" },
  { id: "e-biljana-dete2", source: "mirko-biljana", target: "biljana-dete2" },

  //Nebojsa → deca
  { id: "e-nebojsa-dete1", source: "pavle-nebojsa", target: "nebojsa-dete1" },
  { id: "e-nebojsa-dete2", source: "pavle-nebojsa", target: "nebojsa-dete2" },

  //Dijana → deca
  { id: "e-dijana-dete1", source: "pavle-dijana", target: "dijana-dete1" },
  { id: "e-dijana-dete2", source: "pavle-dijana", target: "dijana-dete2" },

  //Slavisa → deca
  { id: "e-slavisa-dete1", source: "slavo-slavisa", target: "slavisa-dete1" },
  { id: "e-slavisa-dete2", source: "slavo-slavisa", target: "slavisa-dete2" },
  { id: "e-slavisa-dete3", source: "slavo-slavisa", target: "slavisa-dete3" },

  //Slavica → deca
  { id: "e-slavica-slavo-dete1", source: "slavo-slavica", target: "slavica-dete1" },
  { id: "e-slavica-slavo-dete2", source: "slavo-slavica", target: "slavica-dete2" },

  // Svetlana → deca
  { id: "e-svetlana-dete1", source: "slavo-svetlana", target: "svetlana-dete1" },
  { id: "e-svetlana-dete2", source: "slavo-svetlana", target: "svetlana-dete2" },
  { id: "e-svetlana-dete3", source: "slavo-svetlana", target: "svetlana-dete3" },

  // Radica → deca
  { id: "e-radica-dete1", source: "dragan-radica", target: "radica-dete1" },
  { id: "e-radica-dete2", source: "dragan-radica", target: "radica-dete2" },

  //Aleksandra → deca
  { id: "e-aleksandra-dete1", source: "dusanka-aleksandra", target: "aleksandra-dete1" },
  { id: "e-aleksandra-dete2", source: "dusanka-aleksandra", target: "aleksandra-dete2" },

  //Saška → deca
  { id: "e-saska-dete1", source: "dusanka-saska", target: "saska-dete1" },
  { id: "e-saska-dete2", source: "dusanka-saska", target: "saska-dete2" },

  //Ljubiša → deca
  { id: "e-ljubisa-dete1", source: "desimirka-ljubisa", target: "ljubisa-dete1" },
  { id: "e-ljubisa-dete2", source: "desimirka-ljubisa", target: "ljubisa-dete2" },

  //Zoran → deca
  { id: "e-zoran-dete1", source: "desimirka-zoran", target: "zoran-dete1" },
  { id: "e-zoran-dete2", source: "desimirka-zoran", target: "zoran-dete2" },

  //Marko Cvejović → deca
  { id: "e-marko-dete1", source: "goran-marko", target: "marko-dete1" },
  { id: "e-marko-dete2", source: "goran-marko", target: "marko-dete2" },
  { id: "e-marko-dete3", source: "goran-marko", target: "marko-dete3" },
  { id: "e-marko-dete4", source: "goran-marko", target: "marko-dete4" },

  // Svetlana (Ćajina ćerka) → deca
  { id: "e-caja-svetlana-sin1", source: "caja-svetlana", target: "caja-svetlana-sin1" },
  { id: "e-caja-svetlana-sin2", source: "caja-svetlana", target: "caja-svetlana-sin2" },
  { id: "e-caja-svetlana-cerka", source: "caja-svetlana", target: "caja-svetlana-cerka" },

  // Mirjana → ćerka
  { id: "e-caja-mirjana-cerka", source: "caja-mirjana", target: "caja-mirjana-cerka" },

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

  // Slavica → deca
  { id: "e-radovan-slavica-sin", source: "radovan-slavica", target: "radovan-slavica-sin" },
  { id: "e-radovan-slavica-cerka", source: "radovan-slavica", target: "radovan-slavica-cerka" },

  // Sin → njegovo dete
  { id: "e-radovan-slavica-sin-dete", source: "radovan-slavica-sin", target: "radovan-slavica-sin-dete" },
];
