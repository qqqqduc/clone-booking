import ICStar from "@/components/Icons/AttractionIcons/ICStars";
import ItemsHead from "@/components/ItemsHead/ItemsHead";
import React from "react";
import InnerBox from "./InnerBox/InnerBox";
import { Divider } from "antd";
import Neighborhood from "../Neighborhood/Neighborhood";

interface IInnerBox {
  image: string;
  title: string;
  point: number;
  count: number;
  price: number;
}

function Recommend() {
  const listInnerBox: IInnerBox[] = [
    {
      image:
        "https://q-xx.bstatic.com/xdata/images/xphoto/380x580/222171388.jpg?k=5e8c66b47d003a3652ad270a965c8cf854b816db44e51c99ba83e785fd3905c0&o=",
      title: "Tour đi bộ tham quan thành phố có hướng dẫn viên",
      point: 4.5,
      count: 313,
      price: 5,
    },
    {
      image:
        "https://r-xx.bstatic.com/xdata/images/xphoto/380x580/222572168.jpg?k=5f351c429055fff045356847861f726ac480e3d395192ce444fe5ab703b8cd78&o=",
      title: "Tour ẩm thực đường phố có hướng dẫn",
      point: 4.5,
      count: 223,
      price: 5.13,
    },
    {
      image:
        "https://q-xx.bstatic.com/xdata/images/xphoto/380x580/134504627.jpg?k=59846544bc292a578cde7b0a595ee412afd4b28a459bd300ef6e60b2d8aed0e2&o=",
      title: "Ninh Bình - Hoa Lư - Động Tam Cốc",
      point: 4.5,
      count: 223,
      price: 5.13,
    },
    {
      image:
        "https://r-xx.bstatic.com/xdata/images/xphoto/380x580/222572168.jpg?k=5f351c429055fff045356847861f726ac480e3d395192ce444fe5ab703b8cd78&o=",
      title: "Tour ẩm thực đường phố có hướng dẫn",
      point: 4.5,
      count: 223,
      price: 5.13,
    },
  ];

  return (
    <div className="mt-10">
      <ItemsHead
        title="Được gợi ý ở Hà Nội"
        description="Những trải nghiệm hàng đầu ở Hà Nội để bạn bắt đầu"
      />
      <div className="flex gap-4">
        {listInnerBox.map((item: IInnerBox, index: number) => (
          <div key={index} className="basis-1/4">
            <InnerBox
              image={item.image}
              title={item.title}
              point={item.point}
              count={item.count}
              price={item.price}
            />
          </div>
        ))}
      </div>

    </div>
  );
}

export default Recommend;
