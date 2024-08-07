import React from "react";

interface ITaxiSvg {
  width?: string;
  height?: string;
  fillColor?: string;
}

function ICTaxi({ width = "20", height = "20", fillColor = "#fff" }: ITaxiSvg) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
    >
      <path
        fill={fillColor}
        d="M21.75 15.5V8a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0m-16.5 0V8a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0M3 8.75h3a.75.75 0 0 0 0-1.5H3a.75.75 0 0 0 0 1.5m6.75 6.75v-6a.75.75 0 0 1 1.5 0v6a.75.75 0 0 0 1.5 0v-6a2.25 2.25 0 0 0-4.5 0v6a.75.75 0 0 0 1.5 0M9 13.25h3a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5m5.304-4.971 3 7.5a.75.75 0 0 0 1.392-.557l-3-7.5a.75.75 0 0 0-1.392.557m3-.558-3 7.5a.75.75 0 0 0 1.392.557l3-7.5a.75.75 0 0 0-1.392-.557M.75 5h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5m0 15h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5"
      ></path>
    </svg>
  );
}

export default ICTaxi;
