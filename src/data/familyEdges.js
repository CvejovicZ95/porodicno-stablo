// ── PORODIČNO STABLO — VEZE (agregator) ──────────────────────
// Ovaj fajl samo spaja sve grane. Za dodavanje novih veza
// otvori odgovarajući fajl u branches/:
//
//   ancestors.edges.js  → Gen 0–3 (Cveja → Vukoman → Miladin → braća)
//   zivojin.edges.js    → Živojinova grana i svi potomci
//   vladimir.edges.js   → Vladimirova grana i svi potomci
//   radojko.edges.js    → Radojkova grana i svi potomci

import { ancestorEdges } from "./branches/ancestors.edges";
import { zivojinEdges }  from "./branches/zivojin.edges";
import { vladimirEdges } from "./branches/vladimir.edges";
import { radojkoEdges }  from "./branches/radojko.edges";

export const edges = [
  ...ancestorEdges,
  ...zivojinEdges,
  ...vladimirEdges,
  ...radojkoEdges,
];
