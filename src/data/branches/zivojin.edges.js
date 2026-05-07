// ── ŽIVOJINOVA GRANA — Veze ───────────────────────────────────
// Počinje vezom Ljubomir → Živojin, pa sve do najmlađe generacije.

export const zivojinEdges = [
  // Ljubomir → Živojin (veza ka pretku)
  { id: "e4-6", source: "4", target: "6", style: { stroke: "#C4B49A" } },

  // Živojin → deca
  { id: "e6-miljojka", source: "6", target: "g6-miljojka" },
  { id: "e6-ruza", source: "6", target: "g6-ruza" },
  { id: "e6-svetislav", source: "6", target: "g6-svetislav" },
  { id: "e6-zora", source: "6", target: "g6-zora" },
  { id: "e6-radojka", source: "6", target: "g6-radojka" },
  { id: "e6-mico", source: "6", target: "g6-mico" },
  { id: "e6-rada", source: "6", target: "g6-rada" },

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

  // Biljana (Mićeva) → dete
  { id: "e-biljana-luka", source: "g7-biljana", target: "g8-luka" },

  // Branislav → deca
  { id: "e-branislav-marija", source: "g7-branislav", target: "g8-marija" },
  { id: "e-branislav-lazar", source: "g7-branislav", target: "g8-lazar" },

  // Zoran Bekčić → troje dece
  { id: "e-zoranb-boban", source: "g7-zoran-rada", target: "g8-boban" },
  { id: "e-zoranb-sin", source: "g7-zoran-rada", target: "g8-zoranb-sin" },
  { id: "e-zoranb-cerka", source: "g7-zoran-rada", target: "g8-zoranb-cerka" },

  // ── Gen 8 → Gen 9 ─────────────────────────────────────────────
  { id: "e-jasmina-dete1", source: "g8-jasmina", target: "g9-jasmina-dete1" },
  { id: "e-dragoljub-sofija", source: "g8-dragoljub", target: "g9-sofija" },
  { id: "e-maja-cerka1", source: "g8-maja", target: "g9-maja-cerka1" },
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
];
