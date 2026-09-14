import { ImageResponse } from "next/og";
import { join } from "node:path";
import { readFile } from "node:fs/promises";

const size = { width: 1200, height: 630 };

export async function createSocialImage() {
  const portrait = await readFile(
    join(process.cwd(), "public", "rayan-idrees-portrait.jpg"),
    "base64"
  );
  const portraitSrc = `data:image/jpeg;base64,${portrait}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#17151f",
          color: "#f5f9d0",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "radial-gradient(circle at 72% 68%, #315d1f 0%, #17151f 42%, #08090a 76%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -62,
            left: -14,
            display: "flex",
            color: "rgba(245,249,208,0.08)",
            fontSize: 156,
            fontWeight: 800,
            letterSpacing: -12,
          }}
        >
          RAYAN / 01
        </div>
        <div
          style={{
            width: 715,
            padding: "165px 0 66px 78px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", letterSpacing: -3, lineHeight: 0.92 }}>
            <span style={{ fontSize: 63, fontWeight: 500, color: "#f8f7f3" }}>Building</span>
            <span style={{ fontSize: 77, fontWeight: 800, color: "#baff00" }}>scalable CMS</span>
            <span style={{ fontSize: 77, fontWeight: 800, color: "#baff00" }}>experiences.</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", fontSize: 24, color: "#f8f7f3" }}>
            <span style={{ color: "#baff00", marginRight: 12 }}>•</span>
            Rayan Idrees <span style={{ color: "#8bdcf0", marginLeft: 12 }}>@kactusman</span>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: 505,
            height: "100%",
            display: "flex",
            overflow: "hidden",
            maskImage: "linear-gradient(to left, black 80%, transparent 100%)",
          }}
        >
          <img
            src={portraitSrc}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "49% 47%" }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            right: 18,
            top: 220,
            display: "flex",
            color: "rgba(186,255,0,0.20)",
            fontSize: 32,
            fontWeight: 700,
            transform: "rotate(-72deg)",
          }}
        >
          RAYAN IDREES
        </div>
      </div>
    ),
    size
  );
}
