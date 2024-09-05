import React from "react";

interface ICRightProps {
    width?: string;
    height?: string;
    fillColor?: string;
}

const ICRight: React.FC<ICRightProps> = ({
    width = "20px", height = "20px", fillColor = "#fff"}
) =>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height}>
            <path fill={fillColor} d="M8.913 19.236a.9.9 0 0 0 .642-.266l6.057-6.057a1.3 1.3 0 0 0 .388-.945c.008-.35-.123-.69-.364-.945L9.58 4.966a.91.91 0 0 0-1.284 0 .896.896 0 0 0 0 1.284l5.694 5.718-5.718 5.718a.896.896 0 0 0 0 1.284.88.88 0 0 0 .642.266">
            </path>
        </svg>
    );
}

export default ICRight;