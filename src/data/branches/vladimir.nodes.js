// ── VLADIMIROVA GRANA ─────────────────────────────────────────
// Vladimir Cvejović (id: "vladimir") i svi potomci
// Koren grane dolazi iz ancestors: Ljubomir (id: "4") → Vladimir

export const vladimirNodes = [
  // ── Gen 4 — Vladimir ──────────────────────────────────────────
  {
    id: "vladimir",
    data: {
      label: "Vladimir Cvejović",
      years: "1912-08.09.1935",
      note: "Sin Ljubomira i Milunke Cvejović, rođeni brat Živojina. Živeo 23 godine, preminuo 08.09.1935. Zadobio teške povrede — prebijen i nakon zadobijenih povreda preminuo. Sa suprugom Jelkom(1912-1995) dobio sina Ivana. (uskoro slika spomen-ploče)",
      vladimirLine: true,
      gender: 1,
    },
    position: { x: 0, y: 0 },
    type: "custom",
  },

  // ── Gen 5 — Ivan ──────────────────────────────────────────────
  {
    id: "ivan-vladimir",
    data: {
      label: "Ivan Cvejović",
      years: "1934-2020",
      note: "Sin Vladimira Cvejovića. Služio u Titovoj gardi(desno). Sa suprugom Ljubinkom izrodili dve ćerke: Snežana i Nada.",
      image: "/IvanCvejovic.jpeg",
      gender: 1,
    },
    position: { x: 0, y: 0 },
    type: "custom",
  },

  // ── Gen 6 — Ivanove ćerke ─────────────────────────────────────
  { id: "ivan-nada", data: { label: "Nada Aranđelović", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "ivan-snezana", data: { label: "Snežana Milovanović", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  // ── Gen 7 — Snežanina deca ────────────────────────────────────
  { id: "snez-vesna", data: { label: "Vesna Perović", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "snez-vladimir", data: { label: "Vladimir Milovanović", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },

  // Nadina deca
  { id: "nada-andjelka", data: { label: "Anđelka Milić", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "nada-marijana", data: { label: "Marijana Simić", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  // ── Gen 8 — Vesnina deca ──────────────────────────────────────
  { id: "snez-vesna-dete1", data: { label: "Teodora Perović", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "snez-vesna-dete2", data: { label: "Martina Perović", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  // Anđelkina deca
  { id: "andjelka-dete1", data: { label: "Katarina Milić", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "andjelka-dete2", data: { label: "Maja Milić", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  // Marijanina deca
  { id: "marijana-dete1", data: { label: "?", years: "", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "marijana-dete2", data: { label: "?", years: "", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
];
