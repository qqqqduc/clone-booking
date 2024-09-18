import React from "react";

interface IFriends {
  width?: string;
  height?: string;
  fillColor?: string;
}

function ICFriends({
  width = "24",
  height = "24",
  fillColor = "#1a1a1a",
}: IFriends) {
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
        d="M10.875 7.875a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0m1.5 0a4.875 4.875 0 1 0-9.75 0 4.875 4.875 0 0 0 9.75 0M1.5 20.25a6 6 0 0 1 12 0 .75.75 0 0 0 1.5 0 7.5 7.5 0 0 0-15 0 .75.75 0 0 0 1.5 0m18.852-10.125a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0m1.5 0a4.125 4.125 0 1 0-8.25 0 4.125 4.125 0 0 0 8.25 0m-5.78 5.647A4.776 4.776 0 0 1 22.5 20.25a.75.75 0 0 0 1.5 0 6.276 6.276 0 0 0-8.446-5.886.75.75 0 1 0 .518 1.408"
      ></path>
    </svg>
  );
}

export default ICFriends;
