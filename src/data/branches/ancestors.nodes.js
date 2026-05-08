// ── PRECI — Gen 0, 1, 2, 3 ───────────────────────────────────
// Cveja → Vukoman → Miladin → braća (Vukašin, Vujica, Ljubomir, Ljubica)
// + Milunka (supruga Ljubomirova)

export const ancestorNodes = [
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

  // ── GENERACIJA 3 — deca Miladinova ────────────────────────────
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
      note: "Rođen 18. februara 1885. Imao sestru bliznakinju Ljubicu (četvrto dete po redu u porodici je Ljubomir), težak iz Kovača(težak u to vreme se odnosilo na seljak). Rođeni brat Vukašina, Vujice i Ljubičin brat blizanac. Učesnik Prvog balkanskog rata, poginuo 01.03.1913 na Draču (Durrës). Iako nije sahranjen na seoskom groblju, sinovi su mu podigli spomenik(na spomeniku je greška da je živeo 25 godina, sa 28 je poginuo). Jedini Cvejović na spomen-ploči boraca iz Kovača. U braku živeo 8 godina sa Milunkom Cvejović (umrla 20. oktobra 1953. godine, živela 71 godinu).Sa Milunkom dobio dva sina Živojina i Vladimira. Milunkin spomenik podigao sin Živojin.",
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
    id: "milunka",
    data: {
      label: "Milunka Cvejović",
      years: "1882–20.10.1953",
      monumentNote: "Cvejović Milunka žive 71 godinu a umre 20 oktombra 1953. god. spomen podiže sin Živojin",
      note: "Milunka Cvejović (supruga Ljubomira) ima ključnu ulogu u očuvanju porodice, zbog čega je prikazana u porodičnom stablu iako nije u krvnom srodstvu. Nakon pogibije Vujice Cvejovića 1903. godine preuzima brigu o malom Radojku, koji ostaje bez oca, dok ga majka napušta (preudala se), Milunka ga odgaja kao svoje dete. Sa suprugom Ljubomirom dobija sinove Živojina i Vladimira. Posle Ljubomirove pogibije 1913. godine sama nastavlja da brine o deci. Iz ove tri grane — Radojka, Živojina i Vladimira — razvilo se više od 200 potomaka, što njenoj ulozi daje izuzetan značaj u porodičnom stablu.",
      image: "/MilunkaCvejovicMajkaZivoina.jpeg",
      gender: 2,
      isSpouse: true,
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
];
