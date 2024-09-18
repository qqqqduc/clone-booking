import React from "react";

interface IProfileSvg {
  width?: string;
  height?: string;
  fillColor?: string;
}

function ICProfile({
  width = "24",
  height = "24",
  fillColor = "#1a1a1a",
}: IProfileSvg) {
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
        d="M22.5 17.25a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0m1.5 0a6.75 6.75 0 1 0-13.5 0 6.75 6.75 0 0 0 13.5 0m-7.5-3v6a.75.75 0 0 0 1.5 0v-6a.75.75 0 0 0-1.5 0M14.25 18h6a.75.75 0 0 0 0-1.5h-6a.75.75 0 0 0 0 1.5M1.5 17.25a6.003 6.003 0 0 1 8.356-5.518.75.75 0 0 0 .588-1.38A7.504 7.504 0 0 0 0 17.25a.75.75 0 0 0 1.5 0m9.375-12.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0m1.5 0a4.875 4.875 0 1 0-9.75 0 4.875 4.875 0 0 0 9.75 0"
      ></path>
    </svg>
  );
}

export default ICProfile;
