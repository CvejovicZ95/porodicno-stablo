import React from "react";
import Gallery from "./Gallery";

// ── Drawer panel komponenta ───────────────────────────────────────
// Props:
//   isOpen     — boolean
//   activeTab  — "istorija" | "galerija"
//   onClose    — callback za zatvaranje
//   onTabChange— callback(tab) za promenu taba

const ABOUT_TEXT = `Prema etnografskim zapisima, Cvejovići su se u Kovače doselili iz zaseoka Glave i obližnjeg zaseoka Boće, gde su živeli kod roda Grković. Zemlja je kupljena, što znači da nisu bili starosedeoci. Doseljavanje se verovatno desilo krajem 18. ili početkom 19. veka, u sklopu šireg kretanja stanovništva iz pravca Crne Gore i Starog Vlaha prema Kopaoniku i Raškoj.

Najstariji potvrđeni predak je Vukoman Cvejović (1818–1886), čiji grob stoji na seoskom groblju Dublje. Na grobu je navedeno da je iz Glava, što potvrđuje tradiciju porekla porodice. Vukoman je verovatno bio unuk prvog doseljenika — dakle druga generacija u Kovačima. Prezime je već tada bilo stabilno, što je za to vreme bilo relativno rano, jer su stalna srpska prezimena zvanično uvedena tek 1851. godine.

Prezime Cvejović potiče od starog srpskog ličnog imena Cvejo ili Cvijo, a srodne varijante sreću se u oblasti Drobnjaka i oko Nikšića u Crnoj Gori — što se poklapa sa pretpostavljenim pravcem migracije roda. Krsna slava porodice je Đurđevdan (6. maj), sa preslavom na Đurđic (16. novembar). Porodice sa ovom slavom u Raškoj oblasti najčešće vuku poreklo iz Drobnjaka, Morače ili Starog Vlaha.

Rod je u Kovačima dugo živeo kao jedna kuća — po etnografskom zapisu iz sredine 20. veka, zabeležena je samo jedna porodica Cvejović u selu. Svi današnji Cvejovići u tom kraju gotovo sigurno potiču od zajedničkog pretka.

<b> Nakon smrti Vujice, Radojkova majka napušta porodicu i kasnije se preudala. Nakon njenog odlaska, o Radojku su brigu preuzeli Živojinovi roditelji, pre svega njegova majka, koja ga je podizala zajedno sa ostalom decom u domaćinstvu. </b>

<b> Poznat je podatak da su Radojko i Živojin jedno vreme živeli u zajedničkoj kući sa čak 37 članova porodice. </b>

<b>Zabeležena je i upečatljiva priča o Milunki, drugoj ženi Radojkovoj. U svom prvom braku nije imala dece i živela je na Kosovu, gde su je zadesile teške porodične okolnosti. Prema tadašnjim običajima, postojalo je nasilno nametanje odnosa sa svekrom, zbog čega je odlučila da pobegne. Sama, peške, kroz šume, prešla je dug put sve do Kovača.</b>

<b> Na sudu nije želela da iznese pravu istinu o onome što je preživela, kako ne bi okaljala obraz porodice iz koje potiče niti porodice u koju se udala. Zbog toga je proglašena krivom za rasturanje braka i kažnjena zabranom ponovne udaje u trajanju od dve godine. </b>

<b> Po isteku tog perioda udala se za Radojka i došla u njegovu kuću, gde je već bilo četvoro dece, započinjući novo poglavlje života u velikoj porodičnoj zajednici. </b>

Po podacima o naseljima Kovača, Cvejovići su se naselili na kupljenom imanju, što potvrđuje i zapis da su došli "od Grkovića iz Boća" i da nisu bili starosedeoci. Ovo se uklapa u širi istorijski kontekst doseljavanja novih porodica u Kovače tokom 19. veka, dok su starije porodice, poput Miletića i Tošovića, bile već dugo useljene u selo.


<p>
  Sledi original tekst iz zapisa: <a href="https://www.poreklo.rs/2018/07/29/poreklo-prezimena-selo-kovaci-raska/" target="_blank">Poreklo.rs</a>
</p>


Zaselak KOVAČI

Zaselak je zapadno od Brezove Glave i Vojmilovića, u dolini potoka Kovačice.

Rečice i potoci su: Kovačka ili Glavska reka, Nebeško i Kamešnica, a vode: Izvor u Velikoj livadi i Izvor kod Milanovića kuća. Pije se i voda iz bunara.

Delovi atara se zovu: Zarovo, Strana, Zabel, Lukovače, Do, Njive kod Duba, Reka, Miletić, Velika livada. Bačije su na Jankovcu.

Dve kućne grupe su nablizu. Groblje je na Ruđaku.

Istorijat zaseoka

V. Simić je ispitivao Planu, srednjovekovno središte rudarske privrede, pa navodi da su srednjovekovni Kovači središte industrije gvožđa; da su Kovači zasnovani u vezi s pralištima zlata u mestu Glavama, dalje da su se uz isprače zlata odmah naselili kovači (za opravku rudarske opreme). U Kovačima su stanovali i Dubrovčani. Prema dubrovačkim arhivskim knjigama, 1426. godine kurir koji je imao da preda pismo nekom Dubrovčaninu u Trepči našao je adresanta u villa chovazi (selu Kovačima). Godine 1812. Kovače (tako) je selo u Knežini Jošanici i Nahiji novopazarskoj.

Po popisu od 1921. u Kovačkoj kmetiji su 297 domaćinstava, a 1948. u Kovačima je popisano 42 domaćinstva, s 350 članova.

Na bregu Tominjači više Opštinske sudnice i škole, upravo nad sastavcima potoka Kovačice i Kovačke — Glavske reke stoji crkva–hram posvećen Tomi apostolu u katolika, 20. juna (3. jula). Od crkve nema traga; vidi se samo malo ovalno ulegnuće na mestu nekadašnje crkve. Oko crkvine je staro groblje. Grobovi su obeleženi blokovima stena i velikim kamenjem povađenim iz reke.

Po predanju, groblje je “saborsko” i nastalo je u jednom danu. Turci su odnekud došli iznenada i napali okupljene na saboru kod crkve o crkvenoj slavi, mnoge su pobili i poklali. Mali broj preživelih pokušao je da se spase bekstvom. Međutim, Turci su ih prognali preko reke, na Cigancu sustigli i sve pobili. Ubijen je i sveštenik koji je služio službu toga dana. Izginuli su sahranjeni na mestu pogibije. Grobovi su obeleženi krupnim kamenjem, a na “Popovom grobu” pobiven je veći neobrađen kamen.

Priča se i kako je oskrnavljena crkva, da bi se “oprala” od nevino prolivene krvi – sklizila po noći u reku, a ujutru osvanula preko reke na mestu Miletić. U stvari, crkvu je podigao “na svojoj zemlji” neki Miletić, svakako imućan čovek, trgovac. Za izgradnju crkve upotrebio je građu razorene crkve ap. Tome – Tominjače. Sada je Miletićeva crkva potpuno u ruševinama. Na crkvini se kupi sabor o Sv. arh. prolećem, sutradan po Blagovestima, 26. marta.

Između Kovana i Glava je staro groblje. Na Ravni u zaseoku Popama, ne zna se mesto, je Radanov grob. Radan, rudarski “car”, bio je nadzornik svih rudista u Plani. Na Jankovcu su tri “neznana” groba. Na Velikom Peruševcu stoje tragovi “turskog” šanca.

Poreklo stanovništva

Rodovi

Miletići, slavili su Sv. Jovana, 7. januara i Sv. Jovana Preteču, 24. juna. Čini mi se da su oni, davnašnji doseljenici, došli “od mora” – iz Dubrovnika. Dugo vremena živeli su u Vojmilovićima i Kovačima i ostali u tim mestima i po prestanku rada u rudnicima rudarskog reјona u Plani. Sada se u Plani ni jedan rod ne preziva Miletić, dok se krvni srodnici Miletića prezivaju:
Rakovići i Kostovići u Vojmilovićima; Tošovići u Kovačima; Lazovići, starije Miletići, u Boću; Čevrljakovići, starije prezime Miletići, u Vitkovu i Bobotama, selima Aleksandrovačke Župe; Stevovići u Lesenovcima i Gornjem Stupnju u Aleksandrovačkoj Župi; Miletići, Vojmilovci — Stevovići, Mihailovići, Stevanovići i Savići u Maloj Grabovnici, u mestu “Na Brusu”. Sada u Maloj Grabovnici, Drtevcima i varošici Brusu su. Neke porodice Miletića iz Kovača odselile su se Bošnjane, selo Temniću. Vojmilovci iz Vojmilovića prelaze u Gokčanicu i nastanjuju se u Cerju, Rudnjaku, Predolu i Dubovu. Iz Gokčanice se spuštaju u Podibar i nastanjuju u selima Gračacu, Vrbi, Ribnici, Kovačima i u Kraljevu. Iz Podibra udolinom Ibra i njenim produženjem plastičnom dolinom Gruže ulaze u Gružu i nastanjuju se u selima Balosavama, Grabovcu, Lipnici i Čestinu.
Lopaćani slave Sv. Jovana, 7. januara i Sv. Jovana Preteču, 24. juna. Tvrde da su ove slave od starina i da ih nikad nisu menjali. Međutim, velika grupa rodova starinaca u Sočanici na Kopaoničkom području sliva Gornjeg Ibra poznati “jovaњčani”, prezimena ne kažu, prislužuju Usekovanje glave Sv. Jovana Krstitelja, 29. avgusta. Toga dana u Sočanici kraj izvora Bogdanovca kupi se narod na sabor. Sočanci su se spustili s planine Lopata u Sočanici, i po mestu porekla prozvani su Lopaćani. Miletići i njihovi srodnici pak tvrde da su poreklom iz Lopata u Levoj Reci u Vasojevićima; “Mi smo Lopaćani”, kažu, ali odbijaju i pomisao da su od plemena Vasojevića, od današnjih Vasojevićkih Lopaćana. Mislim s toga da su sočanski Lopaćani, kao i Vasojevićki Lopaćani, tako prozvani ne po mestu porekla, već da su i jedni i drugi pre nego što su preobraćeni u pravoslavnu veru u vreme arhiepiskopa Save kao katolici krstili se šakom kao lopatom; – lopataši, lopatari.
Tošovići (8 kuća), su krvni srodnici Rakovića i Kostovića u Vojmilovićima, kao i iseljenih Miletića.

Uskoro za Miletićima doselili su se preci Džoda.

Milovanovića (9 kuća, Sv. Nikola zimnji i prekađa, njihova stara slava “Sv. Mojsilo”, sutradan po Todorovoj suboti – “Todorici”), od Džoda iz Rudna u Studenici. Posle Džoda nije bilo nikakvih doseljavanja.

Novi doseljenici posle 1900. godine:

Vojmilovac (1 kuća) je od Vojmilovaca iz Zastuplja u Rudnjaku.
Veljković (1 kuća, Sv. Jovan, 7. januara i ženina slava Sv. Nikola), od Vojkovići iz Jošaničke Banje, ušao je u kuću Džoda – Milovanovića.
Tlačinac (1 kuća, Sv. Arhanđeo, u novembru i slava “miraza” Sv. Jovan, 7. januara), iz zaseoka Tlačine (u levom slivu Ibra) ušao je u Tošoviće.

Zaselak POPE i GLAVE

Zaselak Pope je na Popskom brdu, a zaselak Glave na Glavskom brdu. Oba zaseoka su na desnoj strani Kovačke–Popske ili Glavske reke.

Vode imaju ove nazive: Mlakica, Zavrće, Studenac, Cvejovićki izvor.

Delovi atara zaselaka nose nazive: Njive “U Obrnjica”, Ravan, Ratkovina, Brdo, Njime “U Međa”, Njive “Ravništa”, Rudine, Glavljani, Strane i Njive “Kod Kuće”. Bačije su “Na Murča” i na Borovoj njivi.

U zaseocima su kućne grupe udaljene među sobom nepun kilometar, a kuće u njima su zbijene. Zajedničko groblje zaselaka je na Dublju.

Ime zaseoku potiče od Popa, trgovaca iz Dubrovnika, tamo se pominju 1282. godine i ponovo u 15. veku.

Ime zaseoku Glave dali su doseljenici. U zaseoku su sedeli Miletići. I jedni i drugi su po zanimanju krojači i članovi bratovštine pod zaštitom apostola Tome.

Istorijat zaseoka

Pretpostavlja se da su stanovnici Glava: Glave i neki Miletić podigli crkvu apostola Tome u Kovačima i da je neki Miletić podigao na svom imanju novu crkvu.

Vuk je zabeležio sela Pope i Glave u Knežini Jošanici, Nahiji novopazarskoj. U Rečniku J. Gavrilovića (1846) Pope, selo u opštini istog imena, imalo je 5 kuća s 26 stanovnika. Pope je tada sedište “primiliteljng” suda — opštine. U popsku opštinu spadala su ova sela: Predole (staro — “Predolje”) u Gokčanici, Plana, Kovači, Boće, Dubrave, Vojmilovići, Glave; selo Goč na planini Goču, Gvozdac, zaseok Kamenice u Podibru.

Godine 1874. u Popama bilo je 12 kuća. Po popisu od 1921. u Popama je 56 domaćinstava, s 240 članova.

Poreklo stanovništva

Rodovi

Sasvim su iseljeni Glave i Pope.

Glavčići, Radosavljevići i Radovanovići (17 kuća, Sv. Nikola zimnji i prekađa stara slava Sv. Mojsilo), jedan su rod sa Džodama – Milovanovićima u Kovačima. Mnogo su se selili na razne strane i u razno doba. Njihovi krvni srodnici su: Džode – Glavčići u Rudnjaku; Ilići u Predolu; Milašinovići i Živkovići u Brezni; Glavčići u Gračacu i Kruševici (Žiči); Glavčići i Rudnjani u Podunavcima; Glavčići i Docići u Otrocima; Milašinovići i Ilići-Gošinci u Ribnici. – U gružanskom selu Čukojevcu Glavčići su zabeleženi kao “starinci”. U Vrnjačkoj Banji i selu Lipovi u Zapadno–moravskom Pomoravlju su: Popčići (Perkovići i Rajkovići), Pajići, Tošići i Srećkovići. U Popama Glavčići su se jedno vreme prezivali:
Toskići. Od Toskići–Glavčića iz Popa su sadašnji Toskići u Budilovini.

“Došljaci” novi doseljenici su:

Pršići (3 kuće, Sv. Arhanđelo i slava imanja Sv. Nikola zimnji), od Pršića iz Krive Reke su došli na imanje Vukosava Glavčića.
<b> Cvejović (1 kuća), od Grkovića iz Boća prešao je na “kupovinu” (kupljeno zemljište)  </b>.
Vukmirović (1 kuća, Sv. Arhanđeo i ženina slava Sv. Nikola zimdki), od Vukmirovića iz Barina u Jelakcu, ušao je u Glavčiće.
Dunjić (1 kuća) je “došljak” od Dunjića iz Rokca.
Jasnić (1 kuća, Sv. Vračevi i Sv. Jovan, slava imanja), od Jasnića iz Dubrava prešao u Borovo – Gokčanicu na imanje Riste Jakovljevića.`;

const TABS = [
  { id: "istorija", label: "O porodici" },
  { id: "galerija", label: "Galerija" },
  { id: "video", label: "Video" },
  // Dodaj novi tab ovde: { id: "dokumenta", label: "Dokumenta" }
];

const DrawerPanel = ({ isOpen, activeTab, onClose, onTabChange }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(44,24,16,0.4)", zIndex: 200, backdropFilter: "blur(2px)" }} />
      )}

      {/* Panel */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          maxWidth: "1200px",
          background: "#FFFDF8",
          zIndex: 201,
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          display: "flex",
          flexDirection: "column",
          boxShadow: isOpen ? "-8px 0 40px rgba(0,0,0,0.15)" : "none",
          borderLeft: "1px solid #D4C4A8",
        }}
      >
        {activeTab === "istorija" && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url('/back4.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "400px",
              opacity: 0.08,
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
        )}
        {/* Header */}
        <div style={{ flexShrink: 0, borderBottom: "1px solid #E8DCC8", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px 0" }}>
            <div style={{ fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "#A08060" }}>Cvejović</div>
            <button
              onClick={onClose}
              style={{
                background: "#F0E8D8",
                border: "none",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                cursor: "pointer",
                fontSize: "16px",
                color: "#A08060",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ×
            </button>
          </div>

          {/* Tabovi */}
          <div style={{ display: "flex", padding: "10px 20px 0", gap: "4px" }}>
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                style={{
                  background: "transparent",
                  border: "none",
                  borderBottom: activeTab === tab.id ? "2px solid #8B6914" : "2px solid transparent",
                  padding: "6px 12px 10px",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontFamily: "'Georgia', serif",
                  fontWeight: activeTab === tab.id ? "700" : "400",
                  color: activeTab === tab.id ? "#2C1810" : "#A08060",
                  letterSpacing: "0.3px",
                  transition: "all 0.2s ease",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Sadržaj */}
        {activeTab === "istorija" && (
          <div style={{ flex: 1, overflowY: "auto", padding: "20px 24px 40px" }}>
            {ABOUT_TEXT.split("\n\n").map((para, i) => (
              <p
                key={i}
                style={{ margin: "0 0 18px", fontSize: "14px", color: "#4A3428", lineHeight: "1.9" }}
                dangerouslySetInnerHTML={{ __html: para }}
              />
            ))}
          </div>
        )}

        {activeTab === "galerija" && <Gallery />}

        {activeTab === "video" && (
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px" }}>
            <div style={{ width: "100%", maxWidth: "600px", aspectRatio: "16/9", borderRadius: "12px", overflow: "hidden", border: "1px solid #D4C4A8" }}>
              <video
                width="100%"
                height="100%"
                src="/boljiZivot.mp4"
                title=""
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                controls
              />
            </div>
          </div>
        )}

        {/* Dodaj novi tab sadržaj ovde:
        {activeTab === "dokumenta" && <Dokumenta />}
        */}
      </div>
    </>
  );
};

export default DrawerPanel;
