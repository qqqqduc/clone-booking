import React from "react";

interface IReviewSvg {
    width?: string;
    height?: string;
    fillColor?: string;
}

function ICReview({ width = "16", height = "16", fillColor="#fff" }: IReviewSvg) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={width}
            height={height}
        >
            <path
                fill={fillColor}
                d="M18.004 0A5.975 5.975 0 0 0 13.5 9.936l-.177-.625-.657 3.78a.75.75 0 0 0 1.133.766l3.423-2.11-.562.092A5.996 5.996 0 1 0 17.999 0zM18 1.5a4.496 4.496 0 1 1-1.004 8.877.75.75 0 0 0-.562.093l-3.423 2.11 1.133.767.657-3.78a.75.75 0 0 0-.178-.625A4.475 4.475 0 0 1 17.996 1.5zM9.375 13.125a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0m1.5 0a4.125 4.125 0 1 0-8.25 0 4.125 4.125 0 0 0 8.25 0m2.618 10.025a6.804 6.804 0 0 0-13.486 0 .75.75 0 1 0 1.486.2 5.304 5.304 0 0 1 10.514 0 .75.75 0 1 0 1.486-.2"
            ></path>
        </svg>
    );
}

export default ICReview;
