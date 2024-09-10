import React from "react";

interface IProps{
    point?: number;
    rank?: string;
    review?: string;
}

function HouseQuantity({point, rank, review} : IProps) {
  return (
    <div className="flex items-center mt-2 text-xs">
      <div className="mr-2 text-white bg-blue-800 text-center leading-6 rounded-t rounded-r w-6">{point}</div>
      <div className="leading-6">{rank}</div>
      <div className="text-gray-500 mx-1">.</div>
      <div className="leading-6 text-gray-500">{review}</div>
    </div>
  );
}

export default HouseQuantity;
