import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Clé Performance 66 — Clés, Reprog Moteur ECU & Climatisation à Perpignan";

export default function OGImage() {
  return new ImageResponse(
    <div
      style={{
        background:
          "linear-gradient(135deg, #1C0A08 0%, #6B1010 55%, #C82020 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "72px 80px",
        fontFamily: "system-ui, sans-serif",
        position: "relative",
      }}
    >
      {/* Location badge */}
      <div
        style={{
          display: "flex",
          alignSelf: "flex-start",
          alignItems: "center",
          background: "rgba(240, 184, 0, 0.12)",
          border: "1px solid rgba(240, 184, 0, 0.35)",
          borderRadius: "100px",
          padding: "8px 22px",
          color: "#F0B800",
          fontSize: "20px",
          marginBottom: "28px",
        }}
      >
        Perpignan &amp; Pyrénées-Orientales (66)
      </div>

      {/* Company name */}
      <div
        style={{
          color: "white",
          fontSize: "76px",
          fontWeight: "bold",
          lineHeight: 1.05,
          marginBottom: "16px",
          display: "flex",
        }}
      >
        Clé Performance 66
      </div>

      {/* Tagline */}
      <div
        style={{
          color: "rgba(255,255,255,0.65)",
          fontSize: "26px",
          marginBottom: "52px",
          display: "flex",
        }}
      >
        Technicien itinérant — Intervention mobile · Devis gratuit
      </div>

      {/* Separator */}
      <div
        style={{
          width: "100%",
          height: "1px",
          background: "rgba(240,184,0,0.4)",
          marginBottom: "40px",
          display: "flex",
        }}
      />

      {/* 3 services */}
      <div style={{ display: "flex", gap: "20px" }}>
        {(
          [
            { label: "Clés", sub: "Auto · Moto · PL · Agri" },
            { label: "Reprog Moteur ECU", sub: "Stage 1 · FAP · EGR · AdBlue" },
            { label: "Climatisation", sub: "PL & Agricole" },
          ] as const
        ).map(({ label, sub }) => (
          <div
            key={label}
            style={{
              flex: 1,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "14px",
              padding: "20px 24px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                color: "#F0B800",
                fontSize: "22px",
                fontWeight: "700",
                marginBottom: "6px",
                display: "flex",
              }}
            >
              {label}
            </span>
            <span
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "17px",
                display: "flex",
              }}
            >
              {sub}
            </span>
          </div>
        ))}
      </div>

      {/* URL bottom right */}
      <div
        style={{
          position: "absolute",
          bottom: "44px",
          right: "80px",
          color: "rgba(255,255,255,0.3)",
          fontSize: "19px",
          display: "flex",
        }}
      >
        cleperformance66.fr
      </div>
    </div>,
    { ...size },
  );
}
