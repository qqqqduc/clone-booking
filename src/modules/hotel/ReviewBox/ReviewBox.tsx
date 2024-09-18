import React from "react";

function ReviewBox() {
  return (
    <div className="flex gap-2 justify-end items-center">
      <div className="flex flex-col">
        <span className=" font-medium whitespace-nowrap">Tuyệt vời</span>
        <span className="text-gray-500 text-xs whitespace-nowrap">75 đánh giá</span>
      </div>
      <div className="flex items-center px-1 rounded-t rounded-r bg-blue-800 text-white text-base font-medium w-8 h-8">
        8.6
      </div>
    </div>
  );
}

export default ReviewBox;
