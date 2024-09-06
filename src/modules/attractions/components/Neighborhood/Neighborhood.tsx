import ItemsHead from "@/components/ItemsHead/ItemsHead";
import React from "react";

interface IItemsType {
  image: string;
  title: string;
  description: string;
}

function Neighborhood() {
  const listItems: IItemsType[] = [
    {
      image:
        "https://q-xx.bstatic.com/xdata/images/city/533x300/688907.jpg?k=8a219233969467d9f7ff828918cce2a53b4db6f1da1039d27222441ffb97c409&o=",
      title: "Nha Trang",
      description: "227 hoạt động",
    },
    {
      image:
        "https://q-xx.bstatic.com/xdata/images/city/533x300/688885.jpg?k=e3bb191d52454bdeb0eb1055c8dbca3b85d467e19ddaaf8519c2c1c676966f89&o=",
      title: "Huế",
      description: "405 hoạt động",
    },
    {
      image:
        "https://q-xx.bstatic.com/xdata/images/city/533x300/688857.jpg?k=68f28ef88a6f66ac91ad457a30a113b5b63326bff2613186142670587e4e3513&o=",
      title: "Hà Nội",
      description: "3190 hoạt động",
    },
    {
      image:
        "https://q-xx.bstatic.com/xdata/images/city/533x300/688857.jpg?k=68f28ef88a6f66ac91ad457a30a113b5b63326bff2613186142670587e4e3513&o=",
      title: "Đà Nẵng",
      description: "2187 hoạt động",
    },
    {
      image:
        "https://q-xx.bstatic.com/xdata/images/city/533x300/688857.jpg?k=68f28ef88a6f66ac91ad457a30a113b5b63326bff2613186142670587e4e3513&o=",
      title: "Hội An",
      description: "2187 hoạt động",
    },
    {
      image:
        "https://q-xx.bstatic.com/xdata/images/city/533x300/688857.jpg?k=68f28ef88a6f66ac91ad457a30a113b5b63326bff2613186142670587e4e3513&o=",
      title: "TP. Hồ Chí Minh",
      description: "1185 hoạt động",
    },
  ];

  return (
    <div>
      <ItemsHead title="Điểm đến lân cận" />
      <div className="grid grid-cols-3 gap-4">
        {listItems.map((item: IItemsType, index: number) => (
          <div
            key={index}
            className="flex flex-col justify-end h-44 p-4 rounded-lg bg-no-repeat bg-center bg-cover hover:cursor-pointer"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="text-base text-white">{item.title}</div>
            <div className="text-xs text-white">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Neighborhood;
