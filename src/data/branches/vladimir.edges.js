// ── VLADIMIROVA GRANA — Veze ──────────────────────────────────
// Počinje vezom Ljubomir → Vladimir, pa sve do najmlađe generacije.

export const vladimirEdges = [
  // Ljubomir → Vladimir (veza ka pretku)
  { id: "e-ljubomir-vlad", source: "4", target: "vladimir", style: { stroke: "#C4B49A" } },

  // Vladimir → Ivan
  { id: "e-vladimir-ivan", source: "vladimir", target: "ivan-vladimir", style: { stroke: "#C4B49A" } },

  // Ivan → ćerke
  { id: "e-ivan-nada",    source: "ivan-vladimir", target: "ivan-nada" },
  { id: "e-ivan-snezana", source: "ivan-vladimir", target: "ivan-snezana" },

  // Snežana → deca
  { id: "e-snez-vesna",     source: "ivan-snezana", target: "snez-vesna" },
  { id: "e-snez-vladimir",  source: "ivan-snezana", target: "snez-vladimir" },

  // Nada → deca
  { id: "e-nada-andjelka", source: "ivan-nada", target: "nada-andjelka" },
  { id: "e-nada-marijana", source: "ivan-nada", target: "nada-marijana" },

  // Vesna → deca
  { id: "e-snezv-dete1", source: "snez-vesna", target: "snez-vesna-dete1" },
  { id: "e-snezv-dete2", source: "snez-vesna", target: "snez-vesna-dete2" },

  // Anđelka → deca
  { id: "e-andjelka-dete1", source: "nada-andjelka", target: "andjelka-dete1" },
  { id: "e-andjelka-dete2", source: "nada-andjelka", target: "andjelka-dete2" },

  // Marijana → deca
  { id: "e-marijana-dete1", source: "nada-marijana", target: "marijana-dete1" },
  { id: "e-marijana-dete2", source: "nada-marijana", target: "marijana-dete2" },
];
