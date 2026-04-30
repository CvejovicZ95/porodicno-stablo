// ── PORODIČNO STABLO — NODOVI ─────────────────────────────────
// Dodaj nove osobe ovde. position: { x: 0, y: 0 } uvek ostavi tako — Dagre automatski raspoređuje.

// Kako koristiti:

// familyData.js i familyNodes.js i familyEdges.js idu u src/data/
// CustomNode.jsx i familyTree.jsx idu u src/components/

// Od sad kad dodaješ novu osobu — otvoriš samo familyNodes.js i familyEdges.js, sve ostalo ostaje netaknuto!

export const nodes = [
  // ── GENERACIJA 0 ──────────────────────────────────────────────
  {
    id: "0",
    data: {
      label: "Cveja / Cvejo (Grković)",
      years: "~1795–?",
      note: "Pretpostavljeni otac Vukomana Cvejovića. Najverovatnije poreklom od roda Grkovića iz Boća, odakle se jedna kuća doselila u zaseok Glave. Po njemu je verovatno nastalo prezime Cvejović, koje se prvi put sigurno javlja kod njegovog sina Vukomana (rođenog 1818 godine). Moguće je da je upravo ova generacija izvršila prelaz sa prezimena Grković na patronimik Cvejović. Ne postoje sačuvani spomenici ni pouzdani zapisi, pa je rekonstrukcija zasnovana na etnografskom zapisu i porodičnoj analizi.",
      isFounderAncestor: true,
      image: "back4.png",
      gender: 1,
    },
    position: { x: 0, y: 0 },
    type: "custom",
  },
  // ── GENERACIJA 1 ──────────────────────────────────────────────
  {
    id: "1",
    data: {
      label: "Vukoman i Anica Cvejović",
      years: "1818–07.02.1886|1824–28.02.1904",
      monumentNote: "Vukoman Cvejović iz Glava požive 68 g. a umr. 7 feb. 1886 spomen podiže njeg. sin Miladin i sva ne. familija. | Anica žena Vukomana Cvejovića iz Kovača žive 80 g. a umre 28 febru. 1904 g. spomen podiže sin Miladin",
      note: "Poticao iz zaseoka Glave (Kovači, Glavsko Brdo). Grob u Cvejovićima na Dublju. Jedan od najstarijih poznatih predaka Cvejovića.",
      image: "/Vukoman.jpeg",
      image2: "/Anica.jpeg",
      founder: true,
      gender: 3,
    },
    position: { x: 0, y: 0 },
    type: "custom",
  },

  // ── GENERACIJA 2 ──────────────────────────────────────────────
  {
    id: "2",
    data: {
      label: "Miladin i Stanica Cvejović",
      years: "1839-18.06.1918|1852-24.02.1912 ",
      monumentNote: "Miladin Cvejović iz Kovača, žive 79 g. a umre 18 juna 1918 g. spomen podiže sin Vukašin. | Stanica žena Miladina Cvejovića žive 60 g. a umre 24 feb. 1912 g. spomen podižu sinovi Vukašin i Ljubomir.",
      note: "Sin Vukomana Cvejovića — potvrđeno natpisom na grobu. Otac Vukašina, Vujice, Ljubomira i Ljubice Cvejović. Podigao očev spomenik 1886 godine.",
      image: "/Miladin.jpeg",
      image2: "Stanica.jpeg",
      secondGen: true,
      gender: 3,
    },
    position: { x: 0, y: 0 },
    type: "custom",
  },

  // ── GENERACIJA 3 ──────────────────────────────────────────────
  {
    id: "3",
    data: {
      label: "Ljubica Cvejović",
      years: "18.02.1885-?",
      note: "Rođena sestra Vukašina, Vujice i bliznakinja Ljubomira Cvejovića. Njena sudbina nije poznata.",
      twin: true,
      gender: 2,
    },
    position: { x: 0, y: 0 },
    type: "custom",
  },
  {
    id: "4",
    data: {
      label: "Ljubomir Cvejović",
      years: "18.02.1885–01.03.1913",
      monumentNote:
        "Ratnik Ljubomir Cvejović žive 25 g. umre na Jedranskom moru u Draču 01.03.1913 g. spomen podižu njegovi sinovi Živojin Vladimir",
      note: "Rođen 18. februara 1885. Imao sestru bliznakinju Ljubicu (četvrto dete po redu u porodici je Ljubomir), težak iz Kovača(težak u to vreme se odnosilo na seljak). Rođeni brat Vukašina, Vujice i Ljubičin brat blizanac. Učesnik Prvog balkanskog rata, poginuo 01.03.1913 na Draču (Durrës). Iako nije sahranjen na seoskom groblju, sinovi su mu podigli spomenik(na spomeniku je greška da je živeo 25 godina, sa 28 je poginuo). Jedini Cvejović na spomen-ploči boraca iz Kovača. U braku živeo 8 godina sa Milunkom Cvejović (umrla 20. oktobra 1953. godine, živela 71 godinu).Sa Milunkom dobio dva sina Živojina i Vladimira. Milunkin spomenik podigao sin Živojin(sliku spomen-ploče Milunki možete videti u galeriji).",
      hero: true,
      twin: true,
      image: "/RatnikLjubomir.jpeg",
      image2: "",
      gender: 1,
    },
    position: { x: 0, y: 0 },
    type: "custom",
  },
  {
    id: "5",
    data: {
      label: "Vukašin Cvejović",
      years: "1871-19.09.1936",
      monumentNote: "Vukašin Cvejović žive 51 g. umre okt. 1936 g. spom pod. ž. Julka sinovci Radojko i Živojin.",
      note: "Rođeni brat Vujice, Ljubomira i Ljubice. Najstariji sin Miladina Cvejovića. Živeo 65 godina, umro 19.09.1936 od šloga. Nije imao dece. Grob u Cvejovićima na Dublju podigli žena Julka i sinovci Radojko i Živojin.(na spomeniku piše 05 okt, živeo 51 godinu, taj podatak je greška).Podatak da je živeo 65 godina dobijen iz Arhiva u Kraljevu(takođe i uzrok smrti dobijen iz arhiva).",
      image: "/Vukasin.jpeg",
      brother: true,
      gender: 1,
    },
    position: { x: 0, y: 0 },
    type: "custom",
  },
  {
    id: "vujica",
    data: {
      label: "Vujica Cvejović",
      years: "1881-1903",
      monumentNote: "Vujica Cvejović iz Kovača žive 22. g. umre kao vojnik u Kragujevcu oktomb 1903. g. spomen pod. otac Miladin",
      note: "Rođeni brat Vukašina, Ljubomira i Ljubice Cvejović. Imao sina Radojka sa suprugom Rujkom. Nakon smrti Vujice, Rujka je ostavila Radojka i preudala se. Brigu o Radojku je vodila Milunka, Ljubomirova supruga.",
      image: "/Vujica.jpeg",
      uncle: true,
      gender: 1,
    },
    position: { x: 0, y: 0 },
    type: "custom",
  },

  // ── GENERACIJA 4 ──────────────────────────────────────────────
  {
    id: "6",
    data: {
      label: "Živojin Cvejović",
      years: "08.11.1907-30.03.1972",
      note: "Sin Ljubomira Cvejovića, rođeni brat Vladimira. Na grobu Vukašina Cvejovića upisan kao sinovac, što potvrđuje porodičnu vezu. Patrijarh prve grane — otac sedmoro dece sa suprugom Savkom(Veljković).",
      patriarch: true,
      image: "/ZivoinSavka.jpeg",
      gender: 1,
    },
    position: { x: 0, y: 0 },
    type: "custom",
  },
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
  {
    id: "vladimir",
    data: {
      label: "Vladimir Cvejović",
      years: "1912-08.09.1935",
      note: "Sin Ljubomira Cvejovića, rođeni brat Živojina. Živeo 23 godine, preminuo 08.09.1935. Zadobio teške povrede — prebijen i nakon zadobijenih povreda preminuo. Sa suprugom Jelkom(1912-1995) dobio sina Ivana. (uskoro slika spomen-ploče)",
      vladimirLine: true,
      gender: 1,
    },
    position: { x: 0, y: 0 },
    type: "custom",
  },

  // ── GENERACIJA 5 — Živoijnova deca ───────────────────────────
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
    data: { label: "Svetislav Cvejović", years: "1934–2020", note: "Sin Živojina Cvejovića. Sa suprugom Ružom izrodili dvoje dece: Vlada i Vladan.", gender: 1, },
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
    data: { label: "Zorka Glavčić", years: "1937-2013", note: "Ćerka Živojina Cvejovića. Sa suprugom Obradom izrodila dva sina: Slobodan i Dragan.", gender: 2, },
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

  // ── GENERACIJA 5 — Vladimirova loza ──────────────────────────
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

  // ── GENERACIJA 5 — Radojkova deca ────────────────────────────
  {
    id: "rad-radovan",
    data: {
      label: "Milomir Cvejović",
      years: "1925-2020",
      note: "Sin Radojka i Stanke Cvejovića. Sa suprugom Zorkom izrodili troje dece: Radovan, Mara i Višnja.",
      gender: 1,
    },
    position: { x: 0, y: 0 },
    type: "custom",
  },
  { id: "rad-radivoje", data: { label: "Radivoje Cvejović", years: "1930-2012", note: "Sin Radojka i Milunke Cvejović. Sa suprugom Dušankom izrodili troje dece:Goran, Kadiva i Radomirka.", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "rad-milos", data: { label: "Miloš Cvejović", years: "1923-2000", note: "Sin Radojka i Stanke Cvejović. Sa suprugom Miljojkom (Lazović) imao petoro dece:Svetislavka(preminula sa 3 godine), Milan (preminuo 3 dana nakon rođenja), Dragica, Radmila i Dragana.", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "rad-caja", data: { label: "Stanimirka Nikolic", years: "", note: "Ćerka Radojka i Milunke Cvejović.", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "rad-mara", data: { label: "Rajka Novković", years: "", note: "Ćerka Radojka i Milunke Cvejović.", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "rad-visnja", data: { label: "Dobrila Raković", years: "", note: "Ćerka Radojka i Stanke Cvejović.", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  {
    id: "rad-nepoznata",
    data: { label: "Mijojla Pribojac", years: "", note: "Ćerka Radojka i Stanke Cvejović. Nije imala dece.", gender: 2 },
    position: { x: 0, y: 0 },
    type: "custom",
  },

  // ── GENERACIJA 6 — Radojkova unučad ──────────────────────────
  // Miloševa deca
  {
    id: "milos-svetislavka",
    data: { label: "Svetislavka Cvejović", years: "", note: "Preminula sa 3 godine od upale pluća.", gender: 2 },
    position: { x: 0, y: 0 },
    type: "custom",
  },
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
  {
    id: "radi-poginula",
    data: { label: "Radomirka Cvejović", years: "", note: "Ćerka Radivoja, poginula u nesreći na pruzi u Velikoj Plani sa 16 godina.", gender: 2 },
    position: { x: 0, y: 0 },
    type: "custom",
  },

  // Cajina deca
  { id: "caja-mirjana", data: { label: "Mirjana", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "caja-svetlana", data: { label: "Svetlana", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  // Rajkina deca
  { id: "rajka-goca", data: { label: "Goca Dunkov", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  // Dobrilina deca (7)
  { id: "dob-bosko", data: { label: "Boško Raković", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "dob-mirko", data: { label: "Mirko Raković", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "dob-slavo", data: { label: "Slavo Raković", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "dob-pavle", data: { label: "Pavle Raković", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "dob-dragan", data: { label: "Dragan Raković", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "dob-dusanka", data: { label: "Dušanka", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "dob-desimirka", data: { label: "Desimirka", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  // ── NOVI (Radojkova linija dodatak) ─────────────────────────

  // Radovan → deca
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

  // ── GENERACIJA 7 — Živojinova unučad ─────────────────────────

  // Ruzina deca
  { id: "g7-vitomir", data: { label: "Vitomir Raković", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g7-smilja", data: { label: "Smilja Trifunović", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  // Svetislavova deca
  {
    id: "g7-vlada",
    data: { label: "Vlada Marić", years: "", gender: 2 },
    position: { x: 0, y: 0 },
    type: "custom",
  },
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

  // Ivanove ćerke
  { id: "ivan-nada", data: { label: "Nada Aranđelović", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "ivan-snezana", data: { label: "Snežana Milovanović", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  // ── GENERACIJA 6 ─────────────────────────────────────────────

  // Vitomirova deca
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

  // Milanova deca (Miljojkin Milan)
  { id: "g8-slavica-rad", data: { label: "Slavica", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g8-ruzica-rad", data: { label: "Ružica", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  // Radmilina deca
  { id: "g8-jasna", data: { label: "Jasna", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "g8-vesna", data: { label: "Vesna", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  // Ruzicina deca (Radojkina Ružica)
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

  // Snežanina deca
  { id: "snez-vesna", data: { label: "Vesna", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "snez-vladimir", data: { label: "Vladimir Milovanović", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },

  // Nadina deca
  { id: "nada-andjelka", data: { label: "Anđelka Milić", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "nada-marijana", data: { label: "Marijana", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  // ── GENERACIJA 7 ─────────────────────────────────────────────
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

  // Vesnina deca (Snežanina Vesna)
  { id: "snez-vesna-dete1", data: { label: "?", years: "", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "snez-vesna-dete2", data: { label: "?", years: "", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },

  // Anđelkina deca
  { id: "andjelka-dete1", data: { label: "?", years: "", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "andjelka-dete2", data: { label: "?", years: "", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },

  // Marijanina deca
  { id: "marijana-dete1", data: { label: "?", years: "", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "marijana-dete2", data: { label: "?", years: "", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },

  // ── Mikica → deca ─────────────────────────────────────────

  { id: "mikica-aleksandar", data: { label: "Aleksandar Cvejović", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "mikica-andjela", data: { label: "Anđela", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  // Aleksandar → dete
  { id: "aleksandar-bogdan", data: { label: "Bogdan Cvejović", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },

  // Anđela → deca (nepoznata imena)
  { id: "andjela-dete1", data: { label: "?", years: "", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "andjela-dete2", data: { label: "?", years: "", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },

  //Bosko → deca
  {
    id: "bosko-jugo",
    data: { label: "Jugo Raković", years: "", gender: 1, note: "Doprineo rasvetljenju u porodičnom stablu (Dobrilinih sedmoro dece)." },
    position: { x: 0, y: 0 },
    type: "custom",
  },
  { id: "bosko-ljubinko", data: { label: "Ljubinko Raković", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },

  //Mirko → deca
  { id: "mirko-dragana", data: { label: "Dragana", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "mirko-biljana", data: { label: "Biljana", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  //Palve → deca
  { id: "pavle-nebojsa", data: { label: "Nebojša Raković", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "pavle-dijana", data: { label: "Dijana", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  //Slavo → deca
  { id: "slavo-slavisa", data: { label: "Slaviša Raković", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "slavo-slavica", data: { label: "Slavica", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "slavo-svetlana", data: { label: "Svetlana", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  //Dragan → deca
  { id: "dragan-radica", data: { label: "Radica", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  //Dušanka → deca
  { id: "dusanka-aleksandra", data: { label: "Aleksandra", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "dusanka-saska", data: { label: "Saška", years: "", gender: 2 }, position: { x: 0, y: 0 }, type: "custom" },

  //Desimirka → deca
  { id: "desimirka-ljubisa", data: { label: "Ljubiša", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "desimirka-zoran", data: { label: "Zoran", years: "", gender: 1 }, position: { x: 0, y: 0 }, type: "custom" },

  //Ljubinko → deca
  { id: "ljubinko-dete1", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "ljubinko-dete2", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },

  //Dragana → deca
  { id: "dragana-dete1", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "dragana-dete2", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "dragana-dete3", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },

  //Biljana → deca
  { id: "biljana-dete1", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "biljana-dete2", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },

  //Nebojšina deca
  { id: "nebojsa-dete1", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "nebojsa-dete2", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },

  //Dijana → deca
  { id: "dijana-dete1", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "dijana-dete2", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },

  //Slavisa → deca
  { id: "slavisa-dete1", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "slavisa-dete2", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "slavisa-dete3", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },

  //Slavica → deca
  { id: "slavica-dete1", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "slavica-dete2", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },

  //Svetlana → deca
  { id: "svetlana-dete1", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "svetlana-dete2", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "svetlana-dete3", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },

  //Radica → deca
  { id: "radica-dete1", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "radica-dete2", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },

  //Aleksandra → deca
  { id: "aleksandra-dete1", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "aleksandra-dete2", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },

  //Saška → deca
  { id: "saska-dete1", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "saska-dete2", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },

  //Ljubiša → deca
  { id: "ljubisa-dete1", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "ljubisa-dete2", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },

  //Zoran → deca
  { id: "zoran-dete1", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "zoran-dete2", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },

  //Marko Cvejović → deca
  { id: "marko-dete1", data: { label: "?", years: "", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "marko-dete2", data: { label: "?", years: "", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "marko-dete3", data: { label: "?", years: "", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "marko-dete4", data: { label: "?", years: "", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },

  // Svetlana (cajina-stanimirka) → deca
  { id: "caja-svetlana-sin1", data: { label: "?", years: "", gender: 1, unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "caja-svetlana-sin2", data: { label: "?", years: "", gender: 1, unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "caja-svetlana-cerka", data: { label: "?", years: "", gender: 2, unknown: true }, position: { x: 0, y: 0 }, type: "custom" },

  // Mirjana → ćerka
  { id: "caja-mirjana-cerka", data: { label: "?", years: "", gender: 2, unknown: true }, position: { x: 0, y: 0 }, type: "custom" },

  // Olivera → 2 ćerke
  { id: "olivera-radojko-cerka1", data: { label: "?", gender: 2, unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "olivera-radojko-cerka2", data: { label: "?", gender: 2, unknown: true }, position: { x: 0, y: 0 }, type: "custom" },

  // Snežana → sin
  { id: "snezana-sin", data: { label: "?", gender: 1, unknown: true }, position: { x: 0, y: 0 }, type: "custom" },

  // Slavica → sin
  { id: "slavica-sin", data: { label: "?", gender: 1, unknown: true }, position: { x: 0, y: 0 }, type: "custom" },

  // Veroljub → ćerka
  { id: "veroljub-cerka", data: { label: "?", gender: 2, unknown: true }, position: { x: 0, y: 0 }, type: "custom" },

  // Violeta → 2 sina
  { id: "violeta-sin1", data: { label: "?", gender: 1, unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "violeta-sin2", data: { label: "?", gender: 1, unknown: true }, position: { x: 0, y: 0 }, type: "custom" },

  // Slavica (Radovanova ćerka) → deca
  { id: "radovan-slavica-sin", data: { label: "?", gender: 1, unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
  { id: "radovan-slavica-cerka", data: { label: "?", gender: 2, unknown: true }, position: { x: 0, y: 0 }, type: "custom" },

  // Sin → njegovo dete
  { id: "radovan-slavica-sin-dete", data: { label: "?", unknown: true }, position: { x: 0, y: 0 }, type: "custom" },
];
