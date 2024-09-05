import React from "react";

interface ICLeftProps {
  width?: string;
  height?: string;
  fillColor?: string;
}

const ICLeft: React.FC<ICLeftProps> = ({
  width = "20px",
  height = "20px",
  fillColor = "#006ce4",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      data-rtl-flip="true"
      
    >
      <path fill={fillColor} d="M15.087 19.236a.9.9 0 0 1-.642-.266l-6.057-6.057A1.3 1.3 0 0 1 8 11.968c-.008-.35.123-.69.364-.945l6.057-6.057a.91.91 0 0 1 1.284 0 .895.895 0 0 1 0 1.284l-5.694 5.718 5.718 5.718a.896.896 0 0 1 0 1.284.88.88 0 0 1-.642.266"></path>
    </svg>
  );
};

export default ICLeft;
