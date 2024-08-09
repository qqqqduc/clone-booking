import React from "react";

interface ICPlusProps {
    width?: string;
    height?: string;
    fillColor?: string;
}

const ICPlus: React.FC<ICPlusProps> = ({
    width = "20px", height = "20px", fillColor = "#fff"}
) =>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg"viewBox="0 0 24 24" width={width} height={height} fill={fillColor}>
            <path d="M20.25 11.25h-7.5v-7.5a.75.75 0 0 0-1.5 0v7.5h-7.5a.75.75 0 0 0 0 1.5h7.5v7.5a.75.75 0 0 0 1.5 0v-7.5h7.5a.75.75 0 0 0 0-1.5"></path>
        </svg>
    );
}

export default ICPlus;
