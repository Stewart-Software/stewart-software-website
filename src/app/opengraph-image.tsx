import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Stewart Software — Senior software engineering, on demand";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(
    join(process.cwd(), "public/logos/stewartSoftwareLogoSmall.png"),
  );
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "#FDFCF7",
      }}
    >
      <div
        style={{
          display: "flex",
          height: 16,
          width: "100%",
          background:
            "linear-gradient(90deg, #264653 0%, #2A9D8F 50%, #F4A261 100%)",
        }}
      />
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          padding: "0 80px",
          gap: 64,
        }}
      >
        <img src={logoSrc} width={235} height={283} alt="" />
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div
            style={{
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#2A9D8F",
              marginBottom: 20,
            }}
          >
            Stewart Software
          </div>
          <div
            style={{
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.1,
              color: "#264653",
              marginBottom: 28,
            }}
          >
            Senior software engineering, on demand.
          </div>
          <div style={{ fontSize: 30, color: "#4B5563", marginBottom: 36 }}>
            MVPs · Web &amp; mobile apps · Ongoing development
          </div>
          <div style={{ fontSize: 28, fontWeight: 700, color: "#F4A261" }}>
            stewartsoftware.dev
          </div>
        </div>
      </div>
    </div>,
    size,
  );
}
