import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "なこなこカップルが別れた本当の理由";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #fce7f3 0%, #fff1f2 50%, #fee2e2 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 100, marginBottom: 24 }}>💔</div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 900,
            color: "#be123c",
            textAlign: "center",
            lineHeight: 1.3,
            padding: "0 60px",
          }}
        >
          なこなこカップルが
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 900,
            color: "#be123c",
            textAlign: "center",
            lineHeight: 1.3,
            padding: "0 60px",
          }}
        >
          別れた本当の理由
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 28,
            color: "#f43f5e",
            textAlign: "center",
          }}
        >
          キーワードを入れるだけ。真実が明らかに。
        </div>
      </div>
    ),
    { ...size }
  );
}
