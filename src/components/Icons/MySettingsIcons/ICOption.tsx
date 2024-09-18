import React from "react";

interface IOptionSvg {
  width?: string;
  height?: string;
  fillColor?: string;
}

function ICOption({
  width = "24",
  height = "24",
  fillColor = "#1a1a1a",
}: IOptionSvg) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      data-rtl-flip="true"
      width={width}
      height={height}
    >
      <path
        fill={fillColor}
        d="M.75 4.5h16.34a3.5 3.5 0 1 0 0-1.5H.75a.75.75 0 0 0 0 1.5M20.5 1.75a2 2 0 1 1-2 2 2 2 0 0 1 2-2m2.75 17.75H9.46a3.5 3.5 0 0 0-6.83 0H.75a.75.75 0 0 0 0 1.5h1.88a3.5 3.5 0 0 0 6.83 0h13.79a.75.75 0 0 0 0-1.5m-17.2 2.75a2 2 0 1 1 2-2 2 2 0 0 1-2 2M23.25 11h-7.84a3.49 3.49 0 0 0-6.82 0H.75a.75.75 0 0 0 0 1.5h7.84a3.49 3.49 0 0 0 6.82 0h7.84a.75.75 0 0 0 0-1.5M12 13.75a2 2 0 1 1 2-2 2 2 0 0 1-2 2"
      ></path>
    </svg>
  );
}

export default ICOption;
