import React from "react";
import Link from "next/link";
import ReviewBox from "../ReviewBox/ReviewBox";

function HotelItem() {
  return (
    <div className="p-4 my-4 rounded-lg border border-gray-200 flex items-start gap-4">
      <div className="rounded-lg overflow-hidden basis-1/3">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/375529085.webp?k=7be28f25a27c579a6059b8c99272afe72afaa8d095647e7ae0289db544420d5c&o="
          alt=""
        />
      </div>
      <div className="basis-2/3">
        <div className="flex">
          <Link
            href="#"
            className="font-bold text-xl text-blue-500 hover:text-gray-900 hover:cursor-pointer"
          >
            Hành Ngò Homestay - Hòn Đỏ Ninh Thuận
          </Link>
          <div className="flex gap-1">
            <ReviewBox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelItem;
