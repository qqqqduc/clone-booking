import React from "react";
import Image from "next/image";

function GiftsContent() {
  return (
    <div className="p-4 border rounded-lg flex justify-between">
      <div className="flex flex-col gap-2">
        <div className="text-base font-semibold">Đăng nhập để tiết kiệm</div>
        <div className="text-sm">
          Chỉ cần tìm nhãn Genius xanh lam để tiết kiệm 10% trở lên ở những chỗ
          nghỉ có tham gia
        </div>
        <div className="flex gap-2">
          <a
            href="#"
            className="text-white bg-blue-600 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-sm"
          >
            <span>Đăng nhập</span>
          </a>
          <a
            href="#"
            className="text-blue-600 hover:bg-gray-200  hover:text-blue-700 px-3 py-2 rounded-sm"
          >
            <span>Đăng ký</span>
          </a>
        </div>
      </div>
      <div className="w-1/12 relative">
        <Image
          fill
          className="w-full"
          src="https://t-cf.bstatic.com/design-assets/assets/v3.118.0/illustrations-traveller/GeniusGenericGiftBox.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default GiftsContent;
