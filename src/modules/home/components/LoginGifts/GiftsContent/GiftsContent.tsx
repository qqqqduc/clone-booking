import React from "react";
import "./GiftsContent.scss";

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
          <a href="#" className="gift-btn-login px-3 py-2 rounded-sm">
            <span>Đăng nhập</span>
          </a>
          <a href="#" className="gift-btn-register px-3 py-2 rounded-sm">
            <span>Đăng ký</span>
          </a>
        </div>
      </div>
      <div className="w-[89px] h-[104px]">
        <img
          src="https://t-cf.bstatic.com/design-assets/assets/v3.118.0/illustrations-traveller/GeniusGenericGiftBox.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default GiftsContent;
