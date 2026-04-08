import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/seo";

export const alt = `${siteConfig.name} | ${siteConfig.tagline}`;

export const size = {
  height: 630,
  width: 1200,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "stretch",
        background:
          "linear-gradient(135deg, #0f172a 0%, #111827 48%, #f59e0b 100%)",
        color: "#f8fafc",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        padding: "64px",
        width: "100%",
      }}
    >
      <div
        style={{
          alignItems: "center",
          display: "flex",
          gap: "18px",
        }}
      >
        <div
          style={{
            background: "#f59e0b",
            borderRadius: "999px",
            height: "18px",
            width: "18px",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {siteConfig.name}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "860px",
        }}
      >
        <div
          style={{
            color: "#fbbf24",
            display: "flex",
            fontSize: 30,
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          AI-assisted MVP development
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 78,
            fontWeight: 700,
            letterSpacing: "-0.05em",
            lineHeight: 1,
            marginTop: "24px",
          }}
        >
          {siteConfig.tagline}
        </div>
        <div
          style={{
            color: "rgba(248, 250, 252, 0.84)",
            display: "flex",
            fontSize: 32,
            lineHeight: 1.35,
            marginTop: "28px",
          }}
        >
          Strategy, design, engineering, and QA in one sprint for founders who
          need a credible first launch.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "18px",
        }}
      >
        {["Scope clarity", "Launch-ready build", "Senior execution"].map(
          (item) => (
            <div
              key={item}
              style={{
                background: "rgba(248, 250, 252, 0.08)",
                border: "1px solid rgba(248, 250, 252, 0.14)",
                borderRadius: "999px",
                display: "flex",
                fontSize: 24,
                fontWeight: 600,
                padding: "16px 24px",
              }}
            >
              {item}
            </div>
          ),
        )}
      </div>
    </div>,
    size,
  );
}
