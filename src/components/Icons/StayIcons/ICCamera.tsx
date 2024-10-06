import React from "react";

interface ICCameraProps {
  width?: string;
  height?: string;
  fillColor?: string;
}

function ICCamera({
  width = "16px",
  height = "16px",
  fillColor,
}: ICCameraProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
    >
      <path
        fill={fillColor}
        d="M18.75 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m1.5 0a6 6 0 1 0-12 0 6 6 0 0 0 12 0m-.08-7.085-1.084-2.171a2.25 2.25 0 0 0-2.013-1.244h-5.646a2.25 2.25 0 0 0-2.013 1.244L8.33 5.663 9 5.25H2.25A2.25 2.25 0 0 0 0 7.5v12a2.25 2.25 0 0 0 2.25 2.25h19.5A2.25 2.25 0 0 0 24 19.5v-12a2.25 2.25 0 0 0-2.25-2.25H19.5zm-1.34.67a.75.75 0 0 0 .67.415h2.25a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-.75.75H2.25a.75.75 0 0 1-.75-.75v-12a.75.75 0 0 1 .75-.75H9a.75.75 0 0 0 .67-.415l1.086-2.17a.75.75 0 0 1 .67-.415h5.647a.75.75 0 0 1 .671.415zM4.124 9.75a.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5 1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5M6 6V4.5a.75.75 0 0 0-1.5 0V6A.75.75 0 0 0 6 6"
      ></path>
    </svg>
  );
}

export default ICCamera;
