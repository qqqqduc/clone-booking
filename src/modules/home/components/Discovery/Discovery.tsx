import React from "react";
import RestAreaSlider from "../RestAreaSlider/RestAreaSlider";
import { ISliderListItems } from "@/types/type";
import ItemsHead from "@/components/ItemsHead/ItemsHead";

function Discovery() {
  const listDiscovery: ISliderListItems[] = [
    {
      image:
        "https://r-xx.bstatic.com/xdata/images/city/170x136/688956.jpg?k=fc88c6ab5434042ebe73d94991e011866b18ee486476e475a9ac596c79dce818&o=",
      name: "Vũng tàu",
      description: "1.826 chỗ nghỉ",
    },
    {
      image:
        "https://r-xx.bstatic.com/xdata/images/city/170x136/688844.jpg?k=02892d4252c5e4272ca29db5faf12104004f81d13ff9db724371de0c526e1e15&o=",
      name: "Đà Nẵng",
      description: "2.513 chỗ nghỉ",
    },
    {
      image:
        "https://r-xx.bstatic.com/xdata/images/city/170x136/688893.jpg?k=d32ef7ff94e5d02b90908214fb2476185b62339549a1bd7544612bdac51fda31&o=",
      name: "TP. Hồ Chí Minh",
      description: "5.613",
    },
    {
      image:
        "https://r-xx.bstatic.com/xdata/images/city/170x136/688853.jpg?k=f6427c8fccdf777e4bbc75fcd245e7c66204280181bea23350388c76c57348d1&o=",
      name: "Hà Nội",
      description: "3.810",
    },
    {
      image:
        "https://r-xx.bstatic.com/xdata/images/city/170x136/688853.jpg?k=f6427c8fccdf777e4bbc75fcd245e7c66204280181bea23350388c76c57348d1&o=",
      name: "Hà Nội",
      description: "3.810",
    },
    {
      image:
        "https://r-xx.bstatic.com/xdata/images/city/170x136/688853.jpg?k=f6427c8fccdf777e4bbc75fcd245e7c66204280181bea23350388c76c57348d1&o=",
      name: "Hà Nội",
      description: "3.810",
    },
    {
      image:
        "https://r-xx.bstatic.com/xdata/images/city/170x136/688853.jpg?k=f6427c8fccdf777e4bbc75fcd245e7c66204280181bea23350388c76c57348d1&o=",
      name: "Hà Nội",
      description: "3.810",
    },
    {
      image:
        "https://r-xx.bstatic.com/xdata/images/city/170x136/688853.jpg?k=f6427c8fccdf777e4bbc75fcd245e7c66204280181bea23350388c76c57348d1&o=",
      name: "Hà Nội",
      description: "3.810",
    },
    {
      image:
        "https://r-xx.bstatic.com/xdata/images/city/170x136/688853.jpg?k=f6427c8fccdf777e4bbc75fcd245e7c66204280181bea23350388c76c57348d1&o=",
      name: "Hà Nội",
      description: "3.810",
    },
    {
      image:
        "https://r-xx.bstatic.com/xdata/images/city/170x136/688853.jpg?k=f6427c8fccdf777e4bbc75fcd245e7c66204280181bea23350388c76c57348d1&o=",
      name: "Hà Nội",
      description: "3.810",
    },
    {
      image:
        "https://r-xx.bstatic.com/xdata/images/city/170x136/688853.jpg?k=f6427c8fccdf777e4bbc75fcd245e7c66204280181bea23350388c76c57348d1&o=",
      name: "Hà Nội",
      description: "3.810",
    },
  ];

  return (
    <div className="mt-6">
      <ItemsHead
        title="Khám phá Việt Nam"
        description="Các điểm đến phổ biến này có nhiều điều chờ đón bạn"
      />
      <RestAreaSlider slideShow={6} listSlider={listDiscovery} />
    </div>
  );
}

export default Discovery;
