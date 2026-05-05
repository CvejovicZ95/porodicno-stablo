// ── PRECI — Veze Gen 0 → 1 → 2 → 3 ─────────────────────────
// Napomena: veze od Gen 3 ka patrijarsima (Živojin, Vladimir, Radojko)
// nalaze se u odgovarajućim branch fajlovima.

export const ancestorEdges = [
  // Gen 0 → 1
  { id: "e0-1", source: "0", target: "1", style: { stroke: "#8B4513" } },

  // Gen 1 → 2
  { id: "e1-2", source: "1", target: "2" },

  // Gen 2 → 3 (deca Miladinova)
  { id: "e2-ljubica", source: "2", target: "3",    style: { stroke: "#C4B49A" } },
  { id: "e2-4",       source: "2", target: "4",    style: { stroke: "#C4B49A" } },
  { id: "e2-5",       source: "2", target: "5",    style: { stroke: "#C4B49A" } },
  { id: "e2-vujica",  source: "2", target: "vujica", style: { stroke: "#C4B49A" } },
];
