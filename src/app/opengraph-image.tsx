import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Laksh Varma - Computer Engineering";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: "#050505",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Background Grid Pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, #222 1px, transparent 1px), linear-gradient(to bottom, #222 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            opacity: 0.2,
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: 140,
            fontWeight: 900,
            color: "white",
            marginBottom: 20,
            letterSpacing: "-0.05em",
            zIndex: 10,
          }}
        >
          LAKSH
        </div>
        <div
          style={{
            fontSize: 140,
            fontWeight: 900,
            color: "#444",
            marginTop: -60,
            letterSpacing: "-0.05em",
            zIndex: 10,
          }}
        >
          VARMA
        </div>

        {/* Role */}
        <div
          style={{
            fontSize: 30,
            color: "#888",
            marginTop: 40,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            zIndex: 10,
          }}
        >
          Computer Engineering
        </div>
      </div>
    ),
    // Options
    {
      ...size,
    }
  );
}