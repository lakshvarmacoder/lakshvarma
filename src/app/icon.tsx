import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 24,
          background: "#050505",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          borderRadius: "50%", // Makes it a circle (Modern)
          // borderRadius: "20%", // Uncomment this if you prefer a rounded square (App style)
          fontFamily: "sans-serif",
          fontWeight: 900,
        }}
      >
        L
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}