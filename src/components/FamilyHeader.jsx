import React from "react";

// ── Header komponenta ─────────────────────────────────────────────
// Props:
//   stats        — { predak, ljubomir, zivojin, radojko } brojevi potomaka
//   activeNode   — id selektovanog noda (null ako nije selektovan)
//   onClear      — callback za poništavanje selekcije
//   onOpenDrawer — callback(tab) za otvaranje drawera

function potomakWord(n) {
  if (n % 10 === 1 && n % 100 !== 11) return "potomak";
  if ([2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100)) return "potomka";
  return "potomaka";
}

// props
const FamilyHeader = ({ stats, activeNode, onClear, onOpenDrawer, onSearch, allNodes, onExport }) => {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState([]);
  const debounceRef = React.useRef(null);

  const normalize = (str) =>
    str.toLowerCase()
      .replace(/[čć]/g, "c")
      .replace(/[šđ]/g, (c) => (c === "š" ? "s" : "d"))
      .replace(/ž/g, "z");

  const handleChange = (e) => {
    const val = e.target.value;
    setQuery(val);

    clearTimeout(debounceRef.current);

    if (!val.trim()) {
      setResults([]);
      onSearch(null); // resetuj highlight
      return;
    }

    debounceRef.current = setTimeout(() => {
      const q = normalize(val);
      if (q.length < 2) { setResults([]); return; }

      const hits = allNodes
        .filter((n) => !n.data.unknown && normalize(n.data.label || "").includes(q))
        .slice(0, 6); // max 6 rezultata
      setResults(hits);
    }, 250); // debounce 250ms
  };

  const handleSelect = (node) => {
    setQuery(node.data.label);
    setResults([]);
    onSearch(node.id); // šaljemo ID, ne query string
  };

  const handleClear = () => {
    setQuery("");
    setResults([]);
    onSearch(null);
  };

  return (
    <div
      style={{
        flexShrink: 0,
        zIndex: 10,
        padding: "14px 20px 10px",
        borderBottom: "1px solid rgba(212,196,168,0.4)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "#A08060", marginBottom: "2px" }}>
            Porodično stablo
          </div>
          <div style={{ fontSize: "22px", fontWeight: "700", color: "#2C1810", letterSpacing: "1px" }}>Cvejović</div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <button
            onClick={onExport}
            title="Preuzmi kao sliku"
            style={{
              background: "transparent",
              border: "1.5px solid #D4C4A8",
              borderRadius: "8px",
              padding: "7px 10px",
              cursor: "pointer",
              color: "#A08060",
              fontSize: "16px",
              lineHeight: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            💾
          </button>
          {/* Galerija dugme */}
          <button
            onClick={() => onOpenDrawer("galerija")}
            title="Galerija"
            style={{
              background: "transparent",
              border: "1.5px solid #D4C4A8",
              borderRadius: "8px",
              padding: "7px 10px",
              cursor: "pointer",
              color: "#A08060",
              fontSize: "16px",
              lineHeight: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            📷
          </button>

          {/* Hamburger dugme */}
          <button
            onClick={() => onOpenDrawer("istorija")}
            style={{
              background: "transparent",
              border: "1.5px solid #D4C4A8",
              borderRadius: "8px",
              padding: "7px 10px",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ display: "block", width: "18px", height: "2px", background: "#A08060", borderRadius: "2px" }} />
            <span style={{ display: "block", width: "18px", height: "2px", background: "#A08060", borderRadius: "2px" }} />
            <span style={{ display: "block", width: "18px", height: "2px", background: "#A08060", borderRadius: "2px" }} />
          </button>
        </div>
      </div>

      {/* Search */}
      {/* Search */}
      <div style={{ marginTop: "8px", width: "50%", position: "relative" }}>
        <div style={{ position: "relative" }}>
          <input
            type="text"
            placeholder="Pretraži osobu..."
            value={query}
            onChange={handleChange}
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "6px 28px 6px 10px",
              borderRadius: results.length > 0 ? "6px 6px 0 0" : "6px",
              border: "1.5px solid #D4C4A8",
              borderBottom: results.length > 0 ? "1px solid #E8DCC8" : "1.5px solid #D4C4A8",
              background: "rgba(255,255,255,0.5)",
              fontSize: "13px",
              color: "#2C1810",
              outline: "none",
              fontFamily: "'Georgia', serif",
            }}
          />
          {query && (
            <span
              onClick={handleClear}
              style={{
                position: "absolute", right: "8px", top: "50%",
                transform: "translateY(-50%)", cursor: "pointer",
                color: "#A08060", fontSize: "14px", lineHeight: 1,
              }}
            >✕</span>
          )}
        </div>
        {/* Dropdown — automatski 100% wrapper-a = 50% headera */}
        {results.length > 0 && (
          <div style={{
            position: "absolute", top: "100%", left: 0, right: 0,
            background: "#F5EFE0", border: "1.5px solid #D4C4A8",
            borderTop: "none", borderRadius: "0 0 6px 6px",
            zIndex: 100, boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            maxHeight: "240px", overflowY: "auto",
          }}>
            {results.map((node) => (
              <div
                key={node.id}
                onClick={() => handleSelect(node)}
                style={{
                  padding: "7px 10px", fontSize: "12px", color: "#2C1810",
                  cursor: "pointer", borderBottom: "1px solid rgba(212,196,168,0.3)",
                  fontFamily: "'Georgia', serif",
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "#EFE3CF"}
                onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
              >
                <div style={{ fontWeight: "600" }}>{node.data.label}</div>
                {node.data.years && (
                  <div style={{ fontSize: "10px", color: "#A08060", marginTop: "1px" }}>{node.data.years}</div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Statistika (broj potomaka) */}
      <div style={{ fontSize: "10px", marginTop: "6px", paddingTop: "6px", borderTop: "1px solid rgba(212,196,168,0.3)", color: "#A08060" }}>
        <div style={{ fontSize: "11px", color: "#A08060", textAlign: "left", lineHeight: "1.7" }}>
          <div>1818 – danas</div>
          <div style={{ fontSize: "10px", opacity: 0.7 }}>9 generacija</div>
        </div>
        <div
          style={{
            height: "1px",
            background: "rgba(212,196,168,0.4)",
            margin: "8px 0",
          }}
        />
        <div>
          Miladin {stats.miladin} {potomakWord(stats.miladin)}
        </div>
        <div>
          Ljubomir: {stats.ljubomir} {potomakWord(stats.ljubomir)}
        </div>
        <div>
          Živojin: {stats.zivojin} {potomakWord(stats.zivojin)}
        </div>
        <div>
          Radojko: {stats.radojko} {potomakWord(stats.radojko)}
        </div>
        <p>Rodoslov nije 100% potpun</p>
      </div>

      {/* Hint / poništi */}
      {!activeNode && <div style={{ marginTop: "8px", fontSize: "11px", color: "#A08060", opacity: 0.8 }}>Tapni osobu da vidiš njeno poreklo ↑</div>}
      {activeNode && (
        <div style={{ marginTop: "8px", fontSize: "11px", color: "#B22840", cursor: "pointer" }} onClick={onClear}>
          ✕ Poništi selekciju
        </div>
      )}
    </div>
  );
};

export default FamilyHeader;
