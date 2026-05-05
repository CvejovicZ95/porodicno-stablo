// ── PORODIČNO STABLO — NODOVI (agregator) ────────────────────
// Ovaj fajl samo spaja sve grane. Za dodavanje novih osoba
// otvori odgovarajući fajl u branches/:
//
//   ancestors.nodes.js  → Gen 0–3 (Cveja, Vukoman, Miladin, braća)
//   zivojin.nodes.js    → Živojinova grana i svi potomci
//   vladimir.nodes.js   → Vladimirova grana i svi potomci
//   radojko.nodes.js    → Radojkova grana i svi potomci

import { ancestorNodes } from "./branches/ancestors.nodes";
import { zivojinNodes }   from "./branches/zivojin.nodes";
import { vladimirNodes }  from "./branches/vladimir.nodes";
import { radojkoNodes }   from "./branches/radojko.nodes";

export const nodes = [
  ...ancestorNodes,
  ...zivojinNodes,
  ...vladimirNodes,
  ...radojkoNodes,
];
