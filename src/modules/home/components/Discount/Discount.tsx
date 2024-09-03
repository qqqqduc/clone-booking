import ItemsHead from "@/components/ItemsHead/ItemsHead";
import React from "react";

function Discount() {
  return (
    <div>
      <div className="mt-6">
        <ItemsHead title="Ưu đãi" />
        <div className="p-4 bg-[url('/img/discount.jpeg')] bg-no-repeat bg-cover bg-center h-40 mt-3 rounded-lg">
          <div className="w-96">
            <div className="text-xl text-white font-semibold">
              Đặt liền tay, bắt ngay ưu đãi
            </div>
            <div className="text-white mt-1">
              Tiết kiệm từ 15% trở lên khi đặt và lưu trú trước 1/10/2024
            </div>
            <a
              href="#"
              className="inline-block mt-3 text-white bg-blue-600 hover:bg-blue-700 hover:text-white px-3 py-2 rounded"
            >
              Tìm Ưu Đãi Mùa Du Lịch
            </a>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default Discount;
