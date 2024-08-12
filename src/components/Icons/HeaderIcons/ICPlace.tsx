import React from "react";

interface IPlaneSvg {
  width?: string;
  height?: string;
  fillColor?: string;
}

function ICPlace({
    width = "20px",
    height = "20px",
    fillColor = " #fff",
}: IPlaneSvg) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
    >
      <path
        fill={fillColor}
        d="M13.5 3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M15 3a3 3 0 1 0-6 0 3 3 0 0 0 6 0m6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0M6 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0M21 15a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0m-9-3.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0M6 15a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0m10.066 1.277a7.5 7.5 0 0 1-3.077 2.05.75.75 0 0 0 .498 1.415 9 9 0 0 0 3.693-2.46.75.75 0 1 0-1.114-1.005m1.798-6.466c.177.922.183 1.869.015 2.792a.75.75 0 1 0 1.476.268c.2-1.106.194-2.24-.019-3.344a.75.75 0 1 0-1.472.284m-5.337-5.784a7.5 7.5 0 0 1 3.54 2.196.75.75 0 0 0 1.113-1.004 9 9 0 0 0-4.247-2.636.75.75 0 1 0-.406 1.444M6.434 6.223a7.5 7.5 0 0 1 3.539-2.196.75.75 0 1 0-.406-1.444A9 9 0 0 0 5.32 5.219a.75.75 0 0 0 1.114 1.004M4.636 12.69a7.6 7.6 0 0 1 0-2.878.75.75 0 1 0-1.472-.284 9.1 9.1 0 0 0 0 3.446.75.75 0 0 0 1.472-.284m4.876 5.639a7.5 7.5 0 0 1-3.035-2.005.75.75 0 0 0-1.106 1.014 9 9 0 0 0 3.641 2.405.75.75 0 1 0 .5-1.414M7.31 21.872A1.5 1.5 0 0 0 8.672 24h6.656a1.5 1.5 0 0 0 1.362-2.128l-3.314-8.217c-.361-.785-1.252-1.114-2.005-.767a1.5 1.5 0 0 0-.733.734l-3.343 8.283zm1.377.595 3.328-8.25-.015.033 3.313 8.217.015.033H8.672z"
      ></path>
    </svg>
  );
}

export default ICPlace;
