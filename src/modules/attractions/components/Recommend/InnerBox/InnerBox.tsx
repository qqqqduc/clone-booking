import ICStar from "@/components/Icons/AttractionIcons/ICStars";
import React from "react";

interface IProps {
  image: string;
  title: string;
  point: number;
  count: number;
  price: number;
}

function InnerBox({ image, title, point, count, price }: IProps) {
  return (
    <div
      className="flex flex-col justify-end h-[366px] p-4 rounded-lg bg-no-repeat bg-center bg-cover hover:cursor-pointer"
      style={{backgroundImage: `url(${image})`}}
    >
      <div className="text-white font-semibold">{title}</div>
      <div className="flex gap-1 items-center">
        <ICStar />
        <div className="text-white">
          {point} ({count})
        </div>
      </div>
      <div className="text-white flex items-center gap-1">
        <span className="text-xs">Từ</span>
        <span className="font-medium">US${price}</span>
      </div>
    </div>
  );
}

export default InnerBox;
