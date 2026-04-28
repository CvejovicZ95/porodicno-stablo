import React from "react";

// ── Node modal komponenta ─────────────────────────────────────────
// Props:
//   selected  — data objekat selektovanog noda (null = zatvoren)
//   onClose   — callback za zatvaranje
//   allNodes  — niz svih noda
//   allEdges  — niz svih ivica

const NodeModal = ({ selected, onClose, allNodes, allEdges }) => {
  if (!selected) return null;

  function getAncestorLine(nodeId) {
    const line = [];
    let currentId = nodeId;

    while (true) {
      // eslint-disable-next-line
      const parentEdge = allEdges.find((e) => e.target === currentId);
      if (!parentEdge) break;

      const parentNode = allNodes.find((n) => n.id === parentEdge.source);
      if (!parentNode) break;

      line.push(parentNode);
      currentId = parentNode.id;
    }

    return line;
  }

  const ancestorLine = selected.id ? getAncestorLine(selected.id) : [];

  const relationLabels = [
    { male: "Otac", female: "Majka" },
    { male: "Deda", female: "Baba" },
    { male: "Pradeda", female: "Prababa" },
    { male: "Čukundeda", female: "Čukunbaba" },
    { male: "Navrdeda", female: "Navrbaba" },
    { male: "Kurđel", female: "Kurđela" },
    { male: "Askurđel", female: "Askurđela" },
    { male: "Kurđup", female: "Kurđupa" },
    { male: "Kurlebalo", female: "Kurlebala" },
    { male: "Sukur­dov", female: "Sukur­dova" },
    { male: "Surdepač", female: "Surdepača" },
    { male: "Parđupan", female: "Parđupana" },
    { male: "Ožmirkur", female: "Ožmikura" }
  ];




  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(44,24,16,0.5)",
        zIndex: 100,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        backdropFilter: "blur(4px)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: selected.hero ? "#FEF8E7" : "#FFFDF8",
          borderRadius: "20px 20px 0 0",
          padding: "28px 28px 40px",
          width: "100%",
          maxWidth: "500px",
          boxShadow: "0 -8px 40px rgba(0,0,0,0.15)",
          borderTop: selected.hero ? "4px solid #C49A2A" : "4px solid #D4C4A8",
          fontFamily: "'Georgia', serif",
          maxHeight: "75vh",
          overflowY: "auto",
        }}
      >
        {/* Drag handle */}
        <div style={{ width: "40px", height: "4px", background: "#D4C4A8", borderRadius: "2px", margin: "-12px auto 20px" }} />

        {selected.hero && <div style={{ fontSize: "28px", marginBottom: "10px" }}>⚔️</div>}

        {/* Slika */}
        {(selected.image || selected.image2) && (
          <div style={{ display: "flex", gap: "10px", marginBottom: "16px" }}>
            {selected.image && (
              <img
                src={selected.image}
                alt=""
                style={{
                  width: selected.image2 ? "50%" : "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                  border: "1px solid #E8DCC8",
                }}
              />
            )}
            {selected.image2 && (
              <img
                src={selected.image2}
                alt=""
                style={{
                  width: "50%",
                  objectFit: "cover",
                  borderRadius: "10px",
                  border: "1px solid #E8DCC8",
                }}
              />
            )}
          </div>
        )}

        {/* Ime */}
        <h2 style={{ margin: "0 0 4px", fontSize: "20px", color: selected.hero ? "#8B6914" : "#2C1810", letterSpacing: "0.5px", textAlign: "center" }}>
          {selected.label}
        </h2>

        {/* Godine */}
        {selected.years && (
          <div style={{ fontSize: "13px", color: "#A08060", marginBottom: selected.note ? "16px" : "0", letterSpacing: "0.5px", textAlign: "center" }}>
            {selected.years.split("|").map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>
        )}

        {ancestorLine.length > 0 && (
          <div
            style={{
              marginTop: "12px",
              marginBottom: "10px",
              padding: "10px 12px",
              borderRadius: "10px",
              border: "1px solid #E8DCC8",
            }}
          >
            {ancestorLine.map((ancestor, i) => {
              const gender = ancestor.data.gender;

              const relation =
                relationLabels[i]
                  ? (
                    gender === 1
                      ? relationLabels[i].male
                      : gender === 2
                        ? relationLabels[i].female
                        : `${relationLabels[i].male} i ${relationLabels[i].female}`
                  )
                  : `Predak ${i + 1}`;

              return (
                <div key={ancestor.id} style={{ textAlign: "center" }}>
                  {/* osoba */}
                  <div
                    style={{
                      border: "1px solid #E8DCC8",
                      borderRadius: "10px",
                      padding: "8px 10px",
                      marginBottom: "4px",
                    }}
                  >
                    <div style={{ fontSize: "12px", color: "#A08060" }}>
                      {relation}
                    </div>

                    <div style={{ fontSize: "14px", fontWeight: "bold" }}>
                      {ancestor.data.label}
                    </div>

                    {ancestor.data.years && (
                      <div style={{ fontSize: "11px", color: "#6A4E3A" }}>
                        ({ancestor.data.years})
                      </div>
                    )}
                  </div>

                  {/* strelica (osim poslednjeg) */}
                  {i !== ancestorLine.length - 1 && (
                    <div style={{ fontSize: "16px", color: "#C4A484", margin: "2px 0" }}>
                      ↓
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        <div
          style={{
            marginTop: "18px",
            paddingTop: "14px",
            paddingBottom: "14px",
            fontSize: "13px",
            color: "#6A4E3A",
            fontStyle: "italic",
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              marginBottom: "8px",
              fontStyle: "normal",
              color: "#4A3428",
            }}
          >
            {selected.monumentNote ? "Natpis na spomen ploči:" : ""}
          </div>
          {selected.monumentNote?.split("|").map((line, i) => (
            <div key={i} style={{ marginBottom: "6px" }}>
              {line}
            </div>
          ))}
        </div>

        {/* Napomena */}
        {selected.note && (
          <p style={{ margin: 0, fontSize: "14px", color: "#4A3428", lineHeight: "1.8", borderTop: "1px solid #E8DCC8", paddingTop: "14px" }}>
            {selected.note}
          </p>
        )}

        {/* Zatvori */}
        <button
          onClick={onClose}
          style={{
            marginTop: "22px",
            width: "100%",
            padding: "12px",
            background: selected.hero ? "linear-gradient(90deg, #8B6914, #C49A2A)" : "#F0E8D8",
            color: selected.hero ? "#FFF8E7" : "#4A3428",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "14px",
            fontFamily: "'Georgia', serif",
            letterSpacing: "0.5px",
          }}
        >
          Zatvori
        </button>
      </div>
    </div>
  );
};

export default NodeModal;
