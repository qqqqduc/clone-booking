import React from "react";

interface ICMinusProps {
    width?: string;
    height?: string;
    fillColor?: string;
}

const ICMinus: React.FC<ICMinusProps> = ({
    width = "20px", height = "20px", fillColor = "#fff"}
) =>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height} fill={fillColor} >
            <path d="M20.25 12.75H3.75a.75.75 0 0 1 0-1.5h16.5a.75.75 0 0 1 0 1.5"></path>
        </svg>
    );
}

export default ICMinus;