import React from "react";

interface IShareSvg {
  width?: string;
  height?: string;
  fillColor?: string;
}

function ICShare({ width = "16", height = "16", fillColor }: IShareSvg) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
    >
      <path
        fill={fillColor}
        d="M8.25 11.25a3 3 0 1 1-6 0 3 3 0 0 1 6 0m1.5 0a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0m12-5.25a3 3 0 1 1-6 0 3 3 0 0 1 6 0m1.5 0a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0m-1.5 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0m1.5 0a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0M9.018 10.59l6.508-2.531a.75.75 0 0 0-.544-1.398L8.474 9.192a.75.75 0 1 0 .544 1.398m-.748 3.009 6.79 3.395a.75.75 0 1 0 .67-1.342l-6.79-3.395a.75.75 0 1 0-.67 1.342"
      ></path>
    </svg>
  );
}

export default ICShare;
