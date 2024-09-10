import React from "react";

interface ILocationSvg {
  width?: string;
  height?: string;
  fillColor?: string;
}

function ICLocation({
  width = "20",
  height = "20",
  fillColor = "#333",
}: ILocationSvg) {
  return (
    <svg
      className="bk-icon -streamline-geo_pin_heart ph-icon"
      width={width}
      height={height}
      viewBox="0 0 128 128"
      role="presentation"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill={fillColor}
        d="M64 128a8 8 0 0 1-6.67-3.58c-4.21-6.35-13.62-21.53-22.15-38.1C25.11 66.76 20 52.52 20 44 20 19.7 39.7 0 64 0s44 19.7 44 44c0 8.52-5.11 22.76-15.18 42.32-8.53 16.57-17.94 31.75-22.15 38.1A8 8 0 0 1 64 128zM64 8C44.118 8 28 24.118 28 44c0 15.36 23.45 57.08 36 76 12.55-18.92 36-60.64 36-76 0-19.882-16.118-36-36-36zm0 60a4 4 0 0 1-2.89-1.23l-18.19-19c-5.616-5.901-5.384-15.238.517-20.853 5.73-5.452 14.739-5.415 20.423.083l.14.14.15-.14c5.639-5.88 14.976-6.074 20.855-.435 5.88 5.638 6.074 14.976.436 20.855-.144.15-.291.296-.441.44l-18.09 18.9A4 4 0 0 1 64 68zM53.42 30.67a7.853 7.853 0 0 0-1.08.08 6.76 6.76 0 0 0-3.69 11.45L64 58.22l15.28-15.95a6.753 6.753 0 0 0-9.48-9.62l-3 3a4 4 0 0 1-5.65 0l-3-3a6.75 6.75 0 0 0-4.73-1.98z"
      ></path>
    </svg>
  );
}

export default ICLocation;
