import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 108,
          background: "#171d25",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
          borderRadius: 40,
          fontWeight: 800,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        R
      </div>
    ),
    {
      ...size,
    }
  );
}
