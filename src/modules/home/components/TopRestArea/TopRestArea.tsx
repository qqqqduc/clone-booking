import React from "react";
import ResortListSlider from "../ResortListSlider/ResortListSlider";
import { ISliderListItems } from "@/types/type";
import ItemsHead from "@/components/ItemsHead/ItemsHead";

function RestAreaUnique() {
  const listRestArea: ISliderListItems[] = [
    {
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=4ff5e29f3ad72c2c9f7170f60a043f01a158f26b38c55e9676439c18f3804179&o=",
      name: "numa I Vita Apartments",
      description: "Santa Maria Novella, Ý, Florence",
      point: 9.2,
      rank: "Tuyệt hảo",
      review: "1500 đánh giá",
      price: "4.000.000",
    },
    {
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=4ff5e29f3ad72c2c9f7170f60a043f01a158f26b38c55e9676439c18f3804179&o=",
      name: "numa I Vita Apartments",
      description: "Santa Maria Novella, Ý, Florence",
      point: 9.2,
      rank: "Tuyệt hảo",
      review: "1500 đánh giá",
      price: "4.000.000",
    },
    {
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=4ff5e29f3ad72c2c9f7170f60a043f01a158f26b38c55e9676439c18f3804179&o=",
      name: "numa I Vita Apartments",
      description: "Santa Maria Novella, Ý, Florence",
      point: 9.2,
      rank: "Tuyệt hảo",
      review: "1500 đánh giá",
      price: "3.000.000",
    },
    {
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=4ff5e29f3ad72c2c9f7170f60a043f01a158f26b38c55e9676439c18f3804179&o=",
      name: "numa I Vita Apartments",
      description: "Santa Maria Novella, Ý, Florence",
      point: 9.2,
      rank: "Tuyệt hảo",
      review: "1500 đánh giá",
      price: "4.000.000",
    },
    {
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=4ff5e29f3ad72c2c9f7170f60a043f01a158f26b38c55e9676439c18f3804179&o=",
      name: "numa I Vita Apartments",
      description: "Santa Maria Novella, Ý, Florence",
      point: 9.2,
      rank: "Tuyệt hảo",
      review: "1500 đánh giá",
      price: "4.000.000",
    },
    {
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=4ff5e29f3ad72c2c9f7170f60a043f01a158f26b38c55e9676439c18f3804179&o=",
      name: "numa I Vita Apartments",
      description: "Santa Maria Novella, Ý, Florence",
      point: 9.2,
      rank: "Tuyệt hảo",
      review: "1500 đánh giá",
      price: "4.000.000",
    },
    {
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=4ff5e29f3ad72c2c9f7170f60a043f01a158f26b38c55e9676439c18f3804179&o=",
      name: "numa I Vita Apartments",
      description: "Santa Maria Novella, Ý, Florence",
      point: 9.2,
      rank: "Tuyệt hảo",
      review: "1500 đánh giá",
      price: "4.000.000",
    },
    {
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=4ff5e29f3ad72c2c9f7170f60a043f01a158f26b38c55e9676439c18f3804179&o=",
      name: "numa I Vita Apartments",
      description: "Santa Maria Novella, Ý, Florence",
      point: 9.2,
      rank: "Tuyệt hảo",
      review: "1500 đánh giá",
      price: "4.000.000",
    },
    {
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=4ff5e29f3ad72c2c9f7170f60a043f01a158f26b38c55e9676439c18f3804179&o=",
      name: "numa I Vita Apartments",
      description: "Santa Maria Novella, Ý, Florence",
      point: 9.2,
      rank: "Tuyệt hảo",
      review: "1500 đánh giá",
      price: "4.000.000",
    },
    {
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=4ff5e29f3ad72c2c9f7170f60a043f01a158f26b38c55e9676439c18f3804179&o=",
      name: "numa I Vita Apartments",
      description: "Santa Maria Novella, Ý, Florence",
      point: 9.2,
      rank: "Tuyệt hảo",
      review: "1500 đánh giá",
      price: "4.000.000",
    },
    {
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=4ff5e29f3ad72c2c9f7170f60a043f01a158f26b38c55e9676439c18f3804179&o=",
      name: "numa I Vita Apartments",
      description: "Santa Maria Novella, Ý, Florence",
      point: 9.2,
      rank: "Tuyệt hảo",
      review: "1500 đánh giá",
      price: "4.000.000",
    },
    {
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=4ff5e29f3ad72c2c9f7170f60a043f01a158f26b38c55e9676439c18f3804179&o=",
      name: "numa I Vita Apartments",
      description: "Santa Maria Novella, Ý, Florence",
      point: 9.2,
      rank: "Tuyệt hảo",
      review: "1500 đánh giá",
      price: "4.000.000",
    },
    {
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=4ff5e29f3ad72c2c9f7170f60a043f01a158f26b38c55e9676439c18f3804179&o=",
      name: "numa I Vita Apartments",
      description: "Santa Maria Novella, Ý, Florence",
      point: 9.2,
      rank: "Tuyệt hảo",
      review: "1500 đánh giá",
      price: "4.000.000",
    },
  ];
  return (
    <div className="mt-6">
      <ItemsHead
        title="Lưu trú tại các chỗ nghỉ độc đáo hàng đầu"
        description="Từ biệt thự, lâu đài cho đến nhà thuyền, igloo, chúng tôi đều có hết"
      />
      <ResortListSlider slideShow={4} listSlider={listRestArea} />
    </div>
  );
}

export default RestAreaUnique;
