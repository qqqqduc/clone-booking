import React from "react";

interface IHeartSvg {
  width?: string;
  height?: string;
  fillColor?: string;
}

function ICHeart({ width = "16", height = "16", fillColor }: IHeartSvg) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
    >
      <path
        fill={fillColor}
        d="m12.541 21.325-9.588-10a4.923 4.923 0 1 1 6.95-6.976l1.567 1.566a.75.75 0 0 0 1.06 0l1.566-1.566a4.923 4.923 0 0 1 6.963 6.962l-9.6 10.014zm-1.082 1.038a.75.75 0 0 0 1.082 0l9.59-10.003a6.42 6.42 0 0 0-.012-9.07 6.423 6.423 0 0 0-9.083-.001L11.47 4.854h1.06l-1.566-1.566a6.423 6.423 0 1 0-9.082 9.086l9.577 9.99z"
      ></path>
    </svg>
  );
}

export default ICHeart;
