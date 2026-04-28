import React from "react";

// ── Dodaj/menjaj slike ovde ───────────────────────────────────────
// src: "/naziv.jpeg"  →  slika mora biti u public/ folderu
// title: naslov ispod slike
// date: datum ili mesto (opciono)
// desc: opis — ostavi "" ako još nisi dodao
// hero: true → zlatni akcenat (za Ljubomira i sl.)

const SLIKE = [
  {
    src: "/Vukoman.jpeg",
    title: "Grob Vukomana Cvejovića",
    date: "Cvejovići, Dublje — 1886.",
    desc: "Najstariji potvrđeni grob u porodici. Natpis na grobu: „Vukoman Cvejović iz Glava, požive 68g, umre 7 feb 1886, spomenik podiže njegov sin Miladin i sva familija.",
    hero: false,
  },
  {
    src: "/Anica.jpeg",
    title: "Grob Anice Cvejović",
    date: "Cvejovići, Dublje — 1904.",
    desc: "Supruga Vukomana Cvejovića. Natpis na grobu: „Anica žena Vukomana Cvejovića iz Kovača, žive 80g, umre 28 febru 1904 g, spomenik podiže sin Miladin.",
    hero: false,
  },
  {
    src: "/Miladin.jpeg",
    title: "Grob Miladina Cvejovića",
    date: "Cvejovići, Dublje — 1918.",
    desc: "Sin Vukomana Cvejovića. Natpis na grobu: „Miladin Cvejović iz Kovača, živeo 79g umre 18 jula 1918 g, spomenik podiže sin Vukašin.",
    hero: false,
  },
  {
    src: "/Stanica.jpeg",
    title: "Grob Stanice Cvejović",
    date: "Cvejovići, Dublje — 1912.",
    desc: "Supruga Miladina Cvejovića. Natpis na grobu: „Stanica žena Miladina Cvejovića, žive 60g umre 24 feb 1912 g, spomenik podižu sinovi Vukašin i Ljubomir.",
    hero: false,
  },
  {
    src: "/Vujica.jpeg",
    title: "Grob Vujice Cvejovića",
    date: "Cvejovići, Dublje — 1903.",
    desc: "Sin Miladina Cvejovića. Natpis na grobu: „Vujica Cvejović iz Kovača žive 22g umre kao vojnik u Kragujevcu oktombar 1903 g, spomenik podiže otac Miladin.",
  },
  {
    src: "/Vukasin.jpeg",
    title: "Grob Vukašina Cvejovića",
    date: "Cvejovići, Dublje — 1936.",
    desc: "Sin Miladina Cvejovića. Grob podigla supruga Julka i sinovci Radojko i Živojin.",
    hero: false,
  },
  {
    src: "/RatnikLjubomir.jpeg",
    title: "Spomen-ploča ratnika Ljubomira Cvejovića ",
    date: "Cvejovići, Dublje — 1913.",
    desc: "Ratnik Ljubomir Cvejović požive 25 godina(greška je na spomeniku, sa 28 godina je stradao), umre na Jedranskom moru na Draču 01.03.1913 g. Spomenik podižu njegovi sinovi Živojin i Vladimir",
    hero: true,
  },
  {
    src: "/LjubomirPloca.jpeg",
    title: "Spomen-ploča boraca iz Kovača",
    date: "Jošanička Banja — kompleks Milunke Savić",
    desc: "Ime Ljubomira Cvejovića uklesano je među palim borcima Prvog balkanskog rata. Umro je 1. marta 1913. kod Drača (Durrës).",
    hero: true,
  },
  {
    src: "/LjubomirDatumi.jpeg",
    title: "Ljubomir Cvejović — detalj ploče",
    date: "",
    desc: "Detalj sa spomen-ploče sa jasno vidljivim imenom i datumima.",
    hero: true,
  },
  {
    src: "/MilunkaCvejovicMajkaZivoina.jpeg",
    title: "Milunka Cvejović supruga Ljubomira Cvejovića — detalj ploče",
    date: "1882 - 20.10.1953.",
    desc: "Cvejović Milunka žive 71 godinu, umre 20 oktobra 1953, spomenik podiže sin Živojin.",
  },
  {
    src: "/Stanka.jpeg",
    title: "Stanka Cvejović — detalj ploče",
    date: "",
    desc: "Prva supruga Radojka Cvejovića.Natpis na spomen-ploči: Stanka žena Radojka Cvejovića žive 31g a umre 15 marta 1922 g, spomen podižu sinovi Miloš i Milomir(datum srmti na ploči je pogrešan, Miloš i Milomir su rođeni 1923 i 1925).",
  },
  {
    src: "/RadojkoMilunka.jpeg",
    title: "Radojko Cvejović i supruga Milunka Cvejović",
    date: "Cvejovići, Dublje — 1974.",
    desc: "Spomen-ploča Radojka i Milunke Cvejović.",
    hero: false,
  },
  {
    src: "/ZivoinSavka.jpeg",
    title: "Živojin Cvejović i supruga Savka Cvejović",
    date: "Cvejovići, Dublje — 1972.",
    desc: "Spomen-ploča Živojina i Savke Cvejović.",
    hero: false,
  },
  {
    src: "/Savka1.jpeg",
    title: "Savka Cvejović, supruga Živojina Cvejovića",
    date: "",
    desc: "",
    hero: false,
  },
  {
    src: "/Savka2.jpeg",
    title: "Savka Cvejović, supruga Živojina Cvejovića",
    date: "",
    desc: "",
    hero: false,
  },
  {
    src: "/RadaOriginal.jpeg",
    title: "Rada Cvejović (Bekčić), najmlađa ćerka Živojina Cvejovića",
    date: "",
    desc: "",
    hero: false,
  },
  {
    src: "/RadmilaMiljojka.jpeg",
    title: "Radmila, ćerka Miljojke Radisavljević",
    date: "",
    desc: "Radmila sa suprugom i decom — porodični trenutak zabeležen na fotografiji.",
    hero: false,
  },
  {
    src: "/IvanCvejovic.jpeg",
    title: "Ivan Cvejović",
    date: "",
    desc: "Ivan Cvejović (desno) u Titovoj gardi.",
    hero: false,
  },
  {
    src: "/Radojka1.jpeg",
    title: "Radojka Cvejović (Pribojac) i Zorka Cvejović (Glavčić)",
    date: "",
    desc: "Obrad Glavčić (Zorin suprug), Radojka (druga s leva) i Zorka (prva s desna).",
    hero: false,
  },
  {
    src: "/RadojkaISvetislav.jpeg",
    title: "Radojka Cvejović (Pribojac) i Svetislav Cvejović",
    date: "",
    desc: "Radojka (skroz desno) i Svetislav (dole levo) u društvu prijatelja.",
    hero: false,
  },
  {
    src: "/RadojkaISvetislav2.jpeg",
    title: "Radojka Cvejović (Pribojac) i Svetislav Cvejović",
    date: "",
    desc: "Svetislav(u sredini)",
    hero: false,
  },
  {
    src: "/PeroIvanSvetislav.jpeg",
    title: "Pero Petrović, Ivan Cvejović i Svetislav Cvejović",
    date: "",
    desc: "Pero(levo), Ivan(sredina) i Svetislav(desno) u Titovom Užicu, 1970-ih",
    hero: false,
  },
  {
    src: "/SvetislavBozidar.jpeg",
    title: "Svetislav Cvejović, Mihajlo Milojević i Božidar Milojević na saboru na Željinu",
    date: "",
    desc: "Svetislav(prvi s leva), Mihajlo(do Svetislava) i Božidar(prvi s desna).",
    hero: false,
  },
  {
    src: "/SvetislavNaKonju.jpeg",
    title: "Svetislav Cvejović na konju",
    date: "",
    desc: "Trenutak sa svadbenog veselja u selu.",
    hero: false,
  },
  {
    src: "/SvetislavRuzaDobrivoje.jpeg",
    title: "Svetislav, Ruža i Dobrivoje",
    date: "",
    desc: "Fotografija sa svadbe Svetislava i Ruže.",
    hero: false,
  },
  {
    src: "/MiodragObuka.jpeg",
    title: "Miodrag Cvejović — vojna obuka",
    date: "",
    desc: "Miodrag tokom vojne obuke.",
    hero: false,
  },
  {
    src: "/MiodragSvadba1.jpeg",
    title: "Svadba Miodraga Cvejovića",
    date: "",
    desc: "Svadba Miodraga Cvejovića i njegove supruge Zorke.",
    hero: false,
  },
  {
    src: "/MiodragSvadba2.jpeg",
    title: "Svadba Miodraga Cvejovića",
    date: "",
    desc: "Svadba Miodraga Cvejovića i njegove supruge Zorke.",
    hero: false,
  },
];

const RESTAURIRANE = [
  { src: "/SavkaNew1.jpeg", title: "", date: "", desc: "", hero: false },
  { src: "/SavkaNew.png", title: "", date: "", desc: "", hero: false },
  { src: "/RadmilaNew.jpeg", title: "", date: "", desc: "", hero: false },
  { src: "/IvanGardaNew.png", title: "", date: "", desc: "", hero: false },
  { src: "/RadojkaSvetislavNew.png", title: "", date: "", desc: "", hero: false },
  { src: "/Rada.png", title: "", date: "", desc: "", hero: false },
  { src: "/TitovoUziceNew.png", title: "", date: "", desc: "", hero: false },
  { src: "/SvetislavNaKonjuNew.png", title: "", date: "", desc: "", hero: false },
  { src: "/SvetislavRuzaZoraNew.png", title: "", date: "", desc: "", hero: false },
  { src: "/MiodragObukaNew.jpeg", title: "", date: "", desc: "", hero: false },
  { src: "/MiodragSvadbaNew1.jpeg", title: "", date: "", desc: "", hero: false },
  { src: "/MiodragSvadbaNew.jpeg", title: "", date: "", desc: "", hero: false },
  { src: "/ZoraRadojkaObradNew.png", title: "", date: "", desc: "", hero: false },
  { src: "/RadojkaObradNew.png", title: "", date: "", desc: "", hero: false },
  { src: "/BozoNew.png", title: "", date: "", desc: "", hero: false },
  { src: "/drugaSlika.png", title: "", date: "", desc: "", hero: false }
];;

const Galerija = () => {
  return (
    <div style={{ flex: 1, overflowY: "auto", fontFamily: "'Georgia', serif" }}>
      {SLIKE.map((slika, i) => (
        <div key={i} style={{ marginBottom: "2px" }}>
          {/* Slika */}
          <div
            style={{
              width: "100%",
              //aspectRatio: "4/3",
              background: slika.hero ? "linear-gradient(135deg, #8B6914, #C49A2A)" : "#D4C4A8",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={slika.src}
              alt={slika.title}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>

          {/* Opis */}
          <div
            style={{
              padding: "12px 20px 18px",
              background: slika.hero ? "#FEF8E7" : "#FFFDF8",
              borderBottom: "1px solid #E8DCC8",
              borderLeft: slika.hero ? "3px solid #C49A2A" : "none",
            }}
          >
            {slika.hero && (
              <div style={{ fontSize: "9px", letterSpacing: "2px", textTransform: "uppercase", color: "#C49A2A", marginBottom: "5px" }}>
                ⚔ Pao za otadžbinu
              </div>
            )}
            <div style={{ fontSize: "14px", fontWeight: "700", color: slika.hero ? "#8B6914" : "#2C1810", marginBottom: slika.date ? "3px" : "0" }}>
              {slika.title}
            </div>
            {slika.date && (
              <div style={{ fontSize: "11px", color: "#A08060", marginBottom: slika.desc ? "8px" : "0", letterSpacing: "0.3px" }}>{slika.date}</div>
            )}
            {slika.desc && <div style={{ fontSize: "13px", color: "#4A3428", lineHeight: "1.8" }}>{slika.desc}</div>}
          </div>
        </div>
      ))}

      {/* NASLOV ZA RESTAURIRANE */}
      <div
        style={{
          padding: "30px 20px 10px",
          textAlign: "center",
          fontSize: "13px",
          letterSpacing: "2px",
          color: "#8B6914",
          fontWeight: "700",
        }}
      >
        Restaurirane fotografije
      </div>

      {/* RESTAURIRANE */}
      {RESTAURIRANE.map((slika, i) => (
        <div key={"r-" + i} style={{ marginBottom: "2px" }}>
          <div
            style={{
              width: "100%",
              background: "#E8E0D0", // malo drugačije da se razlikuje
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={slika.src}
              alt={slika.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <div
            style={{
              padding: "12px 20px 18px",
              background: "#FFFCF5",
              borderBottom: "1px solid #E8DCC8",
            }}
          >
            <div style={{ fontSize: "14px", fontWeight: "700" }}>
              {slika.title}
            </div>

            {slika.date && <div style={{ fontSize: "11px" }}>{slika.date}</div>}
            {slika.desc && <div style={{ fontSize: "13px" }}>{slika.desc}</div>}
          </div>
        </div>
      ))}

      <div style={{ padding: "24px 20px", textAlign: "center", fontSize: "12px", color: "#C4B49A", letterSpacing: "0.5px", fontStyle: "italic" }}>
        Arhiv se stalno dopunjuje
      </div>
    </div>
  );
};

export default Galerija;
