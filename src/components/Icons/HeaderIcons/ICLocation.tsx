import React from "react";

interface ICLocationProps {
    width?: string;
    height?: string;
    fillColor?: string;
}

function ICLocation({
    width = "20px",
    height = "20px",
    fillColor = "#fff",
}: ICLocationProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={width}
            height={height}
        >
            <path 
                fill={fillColor}
                d="M15 8.25a3 3 0 1 1-6 0 3 3 0 0 1 6 0m1.5 0a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0M12 1.5a6.75 6.75 0 0 1 6.75 6.75c0 2.537-3.537 9.406-6.75 14.25-3.214-4.844-6.75-11.713-6.75-14.25A6.75 6.75 0 0 1 12 1.5M12 0a8.25 8.25 0 0 0-8.25 8.25c0 2.965 3.594 9.945 7 15.08a1.5 1.5 0 0 0 2.5 0c3.406-5.135 7-12.115 7-15.08A8.25 8.25 0 0 0 12 0"></path>
        </svg>
    );
}

export default ICLocation;
