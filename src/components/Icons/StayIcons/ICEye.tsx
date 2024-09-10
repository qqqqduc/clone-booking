import React from "react";

interface IEyeSvg {
  width?: string;
  height?: string;
  fillColor?: string;
}

function ICEye({
  width = "28",
  height = "28",
  fillColor = "#333",
}: IEyeSvg) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
    >
      <path
        fill={fillColor}
        d="M12.013 4.501c-3.88-.065-8.202 2.372-11.39 5.88a2.414 2.414 0 0 0-.001 3.232c3.183 3.506 7.481 5.95 11.39 5.885 3.885.066 8.183-2.378 11.367-5.883.83-.92.83-2.314.002-3.232-3.194-3.512-7.515-5.947-11.394-5.882zm0 1.5c3.378-.057 7.328 2.17 10.256 5.389.31.344.31.872-.002 1.219-2.92 3.213-6.848 5.446-10.254 5.39-3.432.056-7.36-2.178-10.279-5.392a.91.91 0 0 1 .002-1.22c2.922-3.216 6.872-5.443 10.251-5.386zM15 12a3 3 0 1 1-6 .004 3 3 0 0 1 6-.007zm1.5 0v-.003a4.5 4.5 0 1 0-9-.002 4.5 4.5 0 0 0 9 .005"
      ></path>
    </svg>
  );
}

export default ICEye;
