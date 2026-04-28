import React from "react";
import { Handle, Position } from "reactflow";

export const NODE_WIDTH = 220;
export const NODE_HEIGHT = 70;

const CustomNode = ({ data, selected }) => {
  const isFounderAncestor = data.isFounderAncestor;
  const isFounder = data.founder;
  const isSecondGen = data.secondGen;
  const isThirdGen = data.thirdGen;
  const isTwin = data.twin;
  const isHero = data.hero;
  const isPatriarch = data.patriarch;
  const isPatriarch2 = data.patriarch2;
  const isAncestor = data.isAncestor;
  const isUnknown = data.unknown;
  const isSelected = data.isSelected;
  const isBrother = data.brother;
  const isUncle = data.uncle;
  const isVladimir = data.vladimirLine;

  let background, color, border, boxShadow;
  if (isSelected) {
    background = "linear-gradient(135deg, #7A1C2E 0%, #B22840 100%)";
    color = "#FFF0F2";
    border = "2px solid #E8506A";
    boxShadow = "0 4px 24px rgba(178,40,64,0.5)";
  }
  else if (isFounderAncestor) {
    background = "linear-gradient(135deg, #6B3E26 0%, #A5673F 100%)";
    color = "#FFF8E0";
    border = "2px solid #8B4513";
    boxShadow = "0 4px 20px rgba(139,69,19,0.5)";
  }
  else if (isAncestor) {
    background = "#FFF0F2";
    color = "#000000";
    border = "2px solid #B22840";
    boxShadow = "0 4px 16px rgba(178,40,64,0.25)";
  } else if (isHero) {
    background = "linear-gradient(135deg, #6B4F0A 0%, #B8860B 25%, #FFD700 50%, #B8860B 75%, #6B4F0A 100%)";
    color = "#FFF8E7";
    border = "3px solid #FFD700";
    boxShadow = "0 0 20px rgba(255,215,0,0.6), 0 4px 20px rgba(139,105,20,0.5), inset 0 1px 0 rgba(255,255,255,0.2)";
  } else if (isTwin) {
    background = "linear-gradient(135deg, #6A5ACD 0%, #9370DB 100%)";
    color = "#F3F0FF";
    border = "2px solid #B19CFF";
    boxShadow = "0 4px 20px rgba(106,90,205,0.4)";
  } else if (isPatriarch) {
    background = "linear-gradient(135deg, #1E4D2B 0%, #2D7A45 50%, #4AAD6A 100%)";
    color = "#E8F5EC";
    border = "2px solid #4AAD6A";
    boxShadow = "0 4px 20px rgba(30,77,43,0.35)";
  } else if (isPatriarch2) {
    background = "linear-gradient(135deg, #2D4A6B 0%, #4A78B8 50%, #6AA0E0 100%)";
    color = "#E8F5FF";
    border = "2px solid #4A78B8";
    boxShadow = "0 4px 20px rgba(45,74,107,0.35)";
  } else if (isBrother) {
    background = "linear-gradient(135deg, #1f3a2d 0%, #173127 100%)";
    color = "#E8F0FF";
    border = "2px solid #4A7FD4";
    boxShadow = "0 4px 20px rgba(27,58,107,0.4)";
  } else if (isUncle) {
    background = "linear-gradient(135deg, #8B4500 0%, #C46200 100%)";
    color = "#FFF3E0";
    border = "2px solid #E07820";
    boxShadow = "0 4px 20px rgba(139,69,0,0.4)";
  } else if (isVladimir) {
    background = "linear-gradient(135deg, #df3c3c 0%, #cc4343 100%)";
    color = "#E8F5F0";
    border = "2px solid #b85a5a";
    boxShadow = "0 4px 20px rgba(45,90,74,0.4)";
  } else if (isFounder) {
    background = "linear-gradient(135deg, #3D1F1F 0%, #6B3939 100%)";
    color = "#FFE8E0";
    border = "2px solid #8B4A4A";
    boxShadow = "0 4px 20px rgba(61,31,31,0.5)";
  } else if (isSecondGen) {
    background = "linear-gradient(135deg, #4A3C28 0%, #7A6340 100%)";
    color = "#FFF5E8";
    border = "2px solid #9B7D50";
    boxShadow = "0 4px 20px rgba(74,60,40,0.4)";
  } else if (isThirdGen) {
    background = "linear-gradient(135deg, #5B5240 0%, #8E8060 100%)";
    color = "#FFFEF8";
    border = isUnknown ? "2px dashed #B0A080" : "2px solid #B0A080";
    boxShadow = "0 4px 20px rgba(91,82,64,0.4)";
  } else if (isUnknown) {
    background = "#F0EBE0";
    color = "#999";
    border = "1.5px dashed #C4B49A";
    boxShadow = "0 2px 8px rgba(0,0,0,0.06)";
  } else if (data.isSearchMatch) {
    background = "linear-gradient(135deg, #1A4A6B 0%, #2E7AB8 100%)";
    color = "#E8F5FF";
    border = "2px solid #5AABF0";
    boxShadow = "0 4px 20px rgba(30,100,180,0.5)";
  } else if (selected) {
    background = "#3D2B1F";
    color = "#FFF8E7";
    border = "1.5px solid #8B6914";
    boxShadow = "0 4px 16px rgba(61,43,31,0.2)";
  } else {
    background = "#FFFDF8";
    color = "#2C1810";
    border = "1.5px solid #D4C4A8";
    boxShadow = "0 2px 8px rgba(0,0,0,0.06)";
  }

  const handleColor =
    isSelected || isAncestor
      ? "#E8506A"
      : isHero
        ? "#E8C55A"
        : isFounderAncestor
          ? "#8B4513"
          : isFounder
            ? "#8B4A4A"
            : isSecondGen
              ? "#9B7D50"
              : isThirdGen
                ? "#B0A080"
                : isPatriarch
                  ? "#4AAD6A"
                  : isPatriarch2
                    ? "#4A78B8"
                    : isBrother
                      ? "#4A7FD4"
                      : isUncle
                        ? "#E07820"
                        : isVladimir
                          ? "#753232"
                          : data.isSearchMatch
                            ? "#5AABF0"
                            : "#C4B49A";



  return (
    <div style={{ position: "relative", width: NODE_WIDTH, overflow: "visible" }}>

      {isFounderAncestor && (
        <img
          src={`/${data.image}`}
          alt=""
          style={{
            position: "absolute",
            top: "-520px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "500px",
            opacity: 0.15,
            pointerEvents: "none",
            zIndex: 10,
            filter: "drop-shadow(0 6px 18px rgba(0,0,0,0.25))",
          }}
        />
      )}
      <div
        style={{
          background,
          color,
          border,
          borderRadius: "12px",
          padding: "10px 16px",
          width: `${NODE_WIDTH}px`,
          textAlign: "center",
          boxShadow,
          cursor: "pointer",
          fontFamily: "'Georgia', serif",
          touchAction: "none",
          boxSizing: "border-box",
          transition: "all 0.3s ease",
        }}
      >
        <Handle type="target" position={Position.Top} style={{ background: handleColor, border: "none", width: 8, height: 8 }} />


        {isHero && !isSelected && <div style={{ fontSize: "18px", marginBottom: "4px", filter: "drop-shadow(0 0 4px rgba(255,215,0,0.8))" }}>⚔️</div>}
        {isSelected && <div style={{ fontSize: "14px", marginBottom: "3px" }}>👆</div>}

        <div
          style={{
            fontWeight: "700",
            fontSize: "13px",
            letterSpacing: "0.3px",
            fontStyle: isUnknown ? "italic" : "normal",
            lineHeight: 1.3,
          }}
        >
          {data.label}
        </div>

        {data.years && <div style={{ fontSize: "11px", marginTop: "3px", opacity: 0.7, letterSpacing: "0.2px" }}>{data.years}</div>}

        {isHero && !isSelected && (
          <div style={{ fontSize: "9px", marginTop: "4px", color: "#000000", letterSpacing: "1.5px", textTransform: "uppercase" }}>
            Pao za otadžbinu
          </div>
        )}

        {(isPatriarch || isPatriarch2) && !isSelected && (
          <div
            style={{
              fontSize: "9px",
              marginTop: "4px",
              color: "#3abbaa",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
            }}
          >
            Patrijarh
          </div>
        )}

        <Handle type="source" position={Position.Bottom} style={{ background: handleColor, border: "none", width: 8, height: 8 }} />
      </div>
    </div>
  );
};

export default CustomNode;
