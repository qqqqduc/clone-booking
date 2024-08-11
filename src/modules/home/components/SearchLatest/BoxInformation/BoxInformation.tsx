import React from "react";

function BoxInformation() {
  return (
    <div className="flex gap-4">
      <div className="w-16 h-16">
        <img src="" alt="" className="w-full h-full" />
      </div>
      <div className="flex flex-col justify-center">
        <div className="font-semibold">Hà Nam</div>
        <div className="text-[#595959]">30 tháng 7 - 1 tháng 8, 2 người</div>
      </div>
    </div>
  );
}

export default BoxInformation;
