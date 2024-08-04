import React from "react";

interface IWalletSvg {
    width?: string;
    height?: string;
    fillColor?: string;
}

function ICWallet({
    width = "16",
    height = "16",
    fillColor = "#fff",
}: IWalletSvg) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={width}
            height={height}
        >
            <path
                fill={fillColor}
                d="M111.44 29.38a1.335 1.335 0 0 0 0-.2V16.6a16.378 16.378 0 0 0-6.63-13.23A16.71 16.71 0 0 0 90 .68h-.17L17.7 28.91a3.867 3.867 0 0 0-.67.35A20 20 0 0 0 1.86 48.64V128h104.28c11.046 0 20-8.954 20-20V48.64a20 20 0 0 0-14.7-19.26zM92.4 8.32a8.75 8.75 0 0 1 7.6 1.45 8.491 8.491 0 0 1 3.43 6.83v12H40.38zM118.14 108c0 6.627-5.373 12-12 12H9.86V48.64c0-6.627 5.373-12 12-12h84.28c6.627 0 12 5.373 12 12zm-23-44.06c-7.942 0-14.38 6.438-14.38 14.38 0 7.942 6.438 14.38 14.38 14.38 7.942 0 14.38-6.438 14.38-14.38-.011-7.933-6.437-14.363-14.37-14.38zm0 20.76a6.38 6.38 0 1 1 6.38-6.38 6.39 6.39 0 0 1-6.37 6.38z"
            ></path>
        </svg>
    );
}

export default ICWallet;
