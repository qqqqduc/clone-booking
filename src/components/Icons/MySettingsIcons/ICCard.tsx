import React from "react";

interface ICardSvg {
  width?: string;
  height?: string;
  fillColor?: string;
}

function ICCard({
  width = "24",
  height = "24",
  fillColor = "#1a1a1a",
}: ICardSvg) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      data-rtl-flip="true"
      width={width}
      height={height}
    >
      <path
        fill={fillColor}
        d="M116 0H28c-6.627 0-12 5.373-12 12v20a4 4 0 0 0 8 0h96v40a4 4 0 0 0 8 0V12c0-6.627-5.373-12-12-12M24 24V12a4 4 0 0 1 4-4h88a4 4 0 0 1 4 4v12zm76 20H12C5.373 44 0 49.373 0 56v60c0 6.627 5.373 12 12 12h88c6.627 0 12-5.373 12-12V56c0-6.627-5.373-12-12-12m-88 8h88a4 4 0 0 1 4 4v12H8V56a4 4 0 0 1 4-4m88 68H12a4 4 0 0 1-4-4V76h96v40a4 4 0 0 1-4 4M89.14 84.25h-23A5.88 5.88 0 0 0 60 89.859v12.261a5.88 5.88 0 0 0 6.09 5.63h23a5.89 5.89 0 0 0 6.1-5.63V89.88a5.89 5.89 0 0 0-6.05-5.63m-1.9 15.5H68v-7.5h19.24zM36 96a4 4 0 0 1-4 4H20a4 4 0 0 1 0-8h12a4 4 0 0 1 4 4"
      ></path>
    </svg>
  );
}

export default ICCard;
