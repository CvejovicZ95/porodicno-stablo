import React, { useCallback, useState, useMemo, useEffect } from "react";
import ReactFlow, { Background, useNodesState, useEdgesState, useReactFlow, ReactFlowProvider } from "reactflow";
import dagre from "dagre";
import "reactflow/dist/style.css";
import { nodes as rawNodes, edges as rawEdges } from "../data/familyData";
import CustomNode, { NODE_WIDTH, NODE_HEIGHT } from "./CustomNode";
import FamilyHeader from "./FamilyHeader";
import DrawerPanel from "./DrawerPanel";
import NodeModal from "./NodeModal";
import { toPng } from "html-to-image";

// ── Dagre layout ─────────────────────────────────────────────────
function getLayoutedElements(nodes, edges) {
  const g = new dagre.graphlib.Graph();
  g.setDefaultEdgeLabel(() => ({}));
  g.setGraph({ rankdir: "TB", nodesep: 40, ranksep: 80, marginx: 40, marginy: 40 });
  nodes.forEach((n) => g.setNode(n.id, { width: NODE_WIDTH, height: NODE_HEIGHT }));
  edges.forEach((e) => g.setEdge(e.source, e.target));
  dagre.layout(g);
  return {
    nodes: nodes.map((n) => {
      const { x, y } = g.node(n.id);
      return { ...n, position: { x: x - NODE_WIDTH / 2, y: y - NODE_HEIGHT / 2 } };
    }),
    edges,
  };
}

// ── Ancestor path ─────────────────────────────────────────────────
function getAncestorPath(nodeId, edges) {
  const ancestorNodes = new Set();
  const ancestorEdges = new Set();
  function walk(id) {
    edges
      .filter((e) => e.target === id)
      .forEach((e) => {
        ancestorEdges.add(e.id);
        if (!ancestorNodes.has(e.source)) {
          ancestorNodes.add(e.source);
          walk(e.source);
        }
      });
  }
  walk(nodeId);
  return { ancestorNodes, ancestorEdges };
}

function getAllEdgesForPatriarch(rootId, edges) {
  const edgeSet = new Set();
  function walk(id) {
    edges
      .filter((e) => e.source === id)
      .forEach((e) => {
        edgeSet.add(e.id);
        walk(e.target);
      });
  }
  walk(rootId);
  return edgeSet;
}

// ── Statistika ───────────────────────────────────────────────────
function countDescendants(nodeId, edges, nodes) {
  const ids = new Set(nodes.map((n) => n.id));
  function rec(id) {
    const children = edges.filter((e) => e.source === id && ids.has(e.target)).map((e) => e.target);
    return children.length + children.reduce((s, c) => s + rec(c), 0);
  }
  return rec(nodeId);
}

const nodeTypes = { custom: CustomNode };

// ── Layoutovani nodovi i edgovi (van komponente, računa se jednom) ─
const { nodes: layoutedNodes, edges: layoutedEdges } = (() => {
  const { nodes, edges } = getLayoutedElements(rawNodes, rawEdges);

  const zivojinEdges = getAllEdgesForPatriarch("6", edges);
  const radojkoEdges = getAllEdgesForPatriarch("6b", edges);
  const vladimirEdges = getAllEdgesForPatriarch("vladimir", edges);


  const coloredEdges = edges.map((e) => {
    let stroke = "#D4C4A8";
    if (zivojinEdges.has(e.id)) stroke = "#4AAD6A";
    else if (radojkoEdges.has(e.id)) stroke = "#4A78B8";
    else if (vladimirEdges.has(e.id)) stroke = "#AA2950";

    return {
      ...e,
      style: { ...e.style, stroke, strokeWidth: 1.5, opacity: 1 },
      animated: false,
    };
  });

  return { nodes, edges: coloredEdges };
})();

// ── Unutrašnja komponenta (ima pristup useReactFlow) ─────────────
function FamilyTreeInner() {
  const { setCenter, fitView, setViewport, getNodes } = useReactFlow();

  const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);
  const [selected, setSelected] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("istorija");
  const [activeNode, setActiveNode] = useState(null);
  const [exportModalOpen, setExportModalOpen] = useState(false);


  // Navigacija do noda nakon searcha
  useEffect(() => {
    const handler = (e) => {
      const node = e.detail;
      setCenter(
        node.position.x + NODE_WIDTH / 2,
        node.position.y + NODE_HEIGHT / 2,
        { zoom: 1.2, duration: 600 }
      );
    };
    window.addEventListener("focusNode", handler);
    return () => window.removeEventListener("focusNode", handler);
  }, [setCenter]);

  // Statistika
  const stats = useMemo(
    () => ({
      miladin: countDescendants("2", edges, nodes),
      ljubomir: countDescendants("4", edges, nodes),
      zivojin: countDescendants("6", edges, nodes),
      radojko: countDescendants("6b", edges, nodes),
    }),
    [edges, nodes]
  );

  const restorePatriarchColors = useCallback((eds) => {
    const zivojinEdges = getAllEdgesForPatriarch("6", eds);
    const radojkoEdges = getAllEdgesForPatriarch("6b", eds);
    const vladimirEdges = getAllEdgesForPatriarch("vladimir", eds);

    return eds.map((e) => {
      let stroke = "#D4C4A8";
      if (zivojinEdges.has(e.id)) stroke = "#4AAD6A";
      else if (radojkoEdges.has(e.id)) stroke = "#4A78B8";
      else if (vladimirEdges.has(e.id)) stroke = "#AA2950";

      return {
        ...e,
        style: { ...e.style, stroke, strokeWidth: 1.5, opacity: 1 },
        animated: false,
      };
    });
  }, []);

  const clearHighlight = useCallback(() => {
    setNodes((nds) =>
      nds.map((n) => ({
        ...n,
        data: { ...n.data, isSelected: false, isAncestor: false, isSearchMatch: false },
      }))
    );
    setEdges((eds) => restorePatriarchColors(eds));
    setActiveNode(null);
  }, [setNodes, setEdges, restorePatriarchColors]);

  const onNodeClick = useCallback(
    (_, node) => {
      setSelected({ ...node.data, id: node.id });

      const { ancestorNodes, ancestorEdges } = getAncestorPath(node.id, rawEdges);

      setNodes((nds) =>
        nds.map((n) => ({
          ...n,
          data: {
            ...n.data,
            isSelected: n.id === node.id,
            isAncestor: ancestorNodes.has(n.id),
            isSearchMatch: false,
          },
        }))
      );

      setEdges((eds) =>
        eds.map((e) => {
          const isPath = ancestorEdges.has(e.id);
          return {
            ...e,
            style: {
              ...e.style,
              stroke: isPath ? "#B22840" : "#D4C4A8",
              strokeWidth: isPath ? 2.5 : 1,
              opacity: isPath ? 1 : 0.3,
              transition: "all 0.3s ease",
            },
            animated: isPath,
          };
        })
      );

      setActiveNode(node.id);
    },
    [setNodes, setEdges]
  );

  const handleSearch = useCallback(
    (nodeId) => {
      if (!nodeId) {
        clearHighlight();
        return;
      }

      const { ancestorNodes, ancestorEdges } = getAncestorPath(nodeId, rawEdges);

      setNodes((nds) =>
        nds.map((n) => ({
          ...n,
          data: {
            ...n.data,
            isSelected: n.id === nodeId,
            isAncestor: ancestorNodes.has(n.id),
            isSearchMatch: false,
          },
        }))
      );

      setEdges((eds) =>
        eds.map((e) => {
          const isPath = ancestorEdges.has(e.id);
          return {
            ...e,
            style: {
              ...e.style,
              stroke: isPath ? "#B22840" : "#D4C4A8",
              strokeWidth: isPath ? 2.5 : 1,
              opacity: isPath ? 1 : 0.3,
            },
            animated: isPath,
          };
        })
      );

      setActiveNode(nodeId);

      const targetNode = nodes.find((n) => n.id === nodeId);
      if (targetNode) {
        setTimeout(() => {
          window.dispatchEvent(new CustomEvent("focusNode", { detail: targetNode }));
        }, 50);
      }
    },
    [clearHighlight, setNodes, setEdges, nodes]
  );

  const openDrawer = (tab) => {
    setActiveTab(tab);
    setDrawerOpen(true);
  };

  const handleExport = useCallback(() => {
    setExportModalOpen(true);
  }, []);

  const doExport = useCallback(async () => {
    setExportModalOpen(false);
    const el = document.querySelector(".react-flow");
    if (!el) return;

    const allNodes = getNodes();
    const minX = Math.min(...allNodes.map((n) => n.position.x));
    const minY = Math.min(...allNodes.map((n) => n.position.y));
    const maxX = Math.max(...allNodes.map((n) => n.position.x + NODE_WIDTH));
    const maxY = Math.max(...allNodes.map((n) => n.position.y + NODE_HEIGHT));


    const treeWidth = maxX - minX;
    const treeHeight = maxY - minY;
    const padding = 60;

    setViewport({ x: -minX + padding, y: -minY + padding, zoom: 1 }, { duration: 0 });
    await new Promise((r) => setTimeout(r, 150));

    const dataUrl = await toPng(el, {
      backgroundColor: "#F5EFE0",
      pixelRatio: 2,
      width: treeWidth + padding * 2,
      height: treeHeight + padding * 2,
      style: {
        width: `${treeWidth + padding * 2}px`,
        height: `${treeHeight + padding * 2}px`,
      },
    });

    fitView({ padding: 0.15, duration: 0 });

    const link = document.createElement("a");
    link.download = "Cvejovic-porodicno-stablo.png";
    link.href = dataUrl;
    link.click();
  }, [fitView, setViewport, getNodes]);

  //const isMobile = window.innerWidth < 768;

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        fontFamily: "'Georgia', serif",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/back3.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.25,
          zIndex: 0,
        }}
      />
      <FamilyHeader
        stats={stats}
        activeNode={activeNode}
        onClear={clearHighlight}
        onOpenDrawer={openDrawer}
        onSearch={handleSearch}
        allNodes={nodes}
        onExport={handleExport}
      />

      <div style={{ flex: 1, position: "relative", minHeight: 0, }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={onNodeClick}
          onPaneClick={clearHighlight}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.15 }}
          minZoom={0.1}
          maxZoom={2.5}
          panOnDrag
          zoomOnPinch
          panOnScroll={false}
          nodesDraggable={false}
        >
          <Background color="#D4C4A8" gap={24} size={1} />
        </ReactFlow>
      </div>

      <DrawerPanel
        isOpen={drawerOpen}
        activeTab={activeTab}
        onClose={() => setDrawerOpen(false)}
        onTabChange={setActiveTab}
      />

      <NodeModal
        selected={selected}
        onClose={() => setSelected(null)}
        allNodes={nodes}
        allEdges={edges}
      />
      {exportModalOpen && (
        <div
          onClick={() => setExportModalOpen(false)}
          style={{
            position: "fixed", inset: 0,
            background: "rgba(44,24,16,0.5)",
            zIndex: 300,
            display: "flex", alignItems: "center", justifyContent: "center",
            backdropFilter: "blur(4px)",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#FFFDF8",
              borderRadius: "16px",
              padding: "28px 24px",
              width: "300px",
              fontFamily: "'Georgia', serif",
              boxShadow: "0 8px 40px rgba(0,0,0,0.15)",
              borderTop: "4px solid #D4C4A8",
            }}
          >
            <div style={{ fontSize: "28px", marginBottom: "12px" }}>💾</div>
            <div style={{ fontSize: "16px", fontWeight: "700", color: "#2C1810", marginBottom: "10px" }}>
              Preuzimanje stabla
            </div>
            <div style={{ fontSize: "13px", color: "#6A4E3A", lineHeight: "1.8", marginBottom: "20px" }}>
              Za najbolji kvalitet slike preporučujemo preuzimanje na računaru. Na mobilnom uređaju kvalitet može biti lošiji zbog veličine stabla (200+ osoba).
            </div>

            <button
              onClick={doExport}
              style={{
                width: "100%", padding: "11px",
                background: "linear-gradient(135deg, #4A3C28, #7A6340)",
                color: "#FFF5E8", border: "none", borderRadius: "10px",
                cursor: "pointer", fontSize: "14px",
                fontFamily: "'Georgia', serif", marginBottom: "8px",
              }}
            >
              Svejedno preuzmi
            </button>

            <button
              onClick={() => setExportModalOpen(false)}
              style={{
                width: "100%", padding: "11px",
                background: "#F0E8D8", color: "#4A3428",
                border: "none", borderRadius: "10px",
                cursor: "pointer", fontSize: "14px",
                fontFamily: "'Georgia', serif",
              }}
            >
              Zatvori
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Export wrapper sa ReactFlowProvider ──────────────────────────
export default function FamilyTree() {
  return (
    <ReactFlowProvider>
      <FamilyTreeInner />
    </ReactFlowProvider>
  );
}