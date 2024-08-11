import React from "react";
import ItemsHead from "../ItemsHead/ItemsHead";

function Discount() {
  return (
    <div>
      <div className="mt-6">
        <ItemsHead title="Ưu đãi" />
        <div className="p-4 bg-[url('/img/discount.jpeg')] bg-no-repeat bg-cover bg-center h-[156px] mt-3 rounded-lg">
          <div className="w-[380px]">
            <div className="text-xl text-white font-semibold">
              Đặt liền tay, bắt ngay ưu đãi
            </div>
            <div className="text-white mt-1">
              Tiết kiệm từ 15% trở lên khi đặt và lưu trú trước 1/10/2024
            </div>
            <a
              href="#"
              className="inline-block mt-3 text-white bg-[#006ce4] hover:bg-[#0f51ac] hover:text-white px-3 py-2 rounded"
            >
              Tìm Ưu Đãi Mùa Du Lịch
            </a>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <div className="w-[10px] h-[10px] bg-[#006ce4] rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default Discount;
