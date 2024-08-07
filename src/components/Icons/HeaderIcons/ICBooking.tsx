import React from "react";

interface IBookingSvg {
  width?: string;
  height?: string;
  fillColor?: string;
}

function ICBooking({
  width = "16",
  height = "16",
  fillColor = "#fff",
}: IBookingSvg) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
    >
      <path
        fill={fillColor}
        d="M22.5 14.249v4.5a2.25 2.25 0 0 1-2.25 2.25H3.75a2.25 2.25 0 0 1-2.25-2.25v-9a2.25 2.25 0 0 1 2.25-2.25h16.5a2.25 2.25 0 0 1 2.25 2.25zm1.5 0v-4.5a3.75 3.75 0 0 0-3.75-3.75H3.75A3.75 3.75 0 0 0 0 9.749v9a3.75 3.75 0 0 0 3.75 3.75h16.5a3.75 3.75 0 0 0 3.75-3.75zm-18-7.5v15a.75.75 0 0 0 1.5 0v-15a.75.75 0 0 0-1.5 0m10.5 0v15a.75.75 0 0 0 1.5 0v-15a.75.75 0 0 0-1.5 0m0 0v-3a2.25 2.25 0 0 0-2.25-2.25h-4.5a2.25 2.25 0 0 0-2.25 2.25v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 0 1.5 0"
      ></path>
    </svg>
  );
}

export default ICBooking;
