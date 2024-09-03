import React from "react";
import { GetProp, MenuProps } from "antd";
import ICBed from "@/components/Icons/HeaderIcons/ICBed";
import ICPlane from "@/components/Icons/HeaderIcons/ICPlane";
import ICCar from "@/components/Icons/HeaderIcons/ICCar";
import PlanMenu from "./PlanMenu/PlanMenu";
import ItemsHead from "@/components/ItemsHead/ItemsHead";

type MenuItem = GetProp<MenuProps, "items">[number];

const items: MenuItem[] = [
  {
    label: (
      <div className="flex items-center gap-2">
        <span>
          <ICBed fillColor="#333" />
        </span>
        <span>Thiên nhiên</span>
      </div>
    ),
    key: "nature",
  },
  {
    label: (
      <div className="flex items-center gap-2">
        <span>
          <ICPlane fillColor="#333" />
        </span>
        <span>Bãi biển</span>
      </div>
    ),
    key: "beach",
  },
  {
    label: (
      <div className="flex items-center gap-2">
        <span>
          <ICCar fillColor="#333" />
        </span>
        <span>Lãng mạn</span>
      </div>
    ),
    key: "heart",
  },
  {
    label: (
      <div className="flex items-center gap-2">
        <span>
          <ICCar fillColor="#333" />
        </span>
        <span>Thành phố</span>
      </div>
    ),
    key: "city",
  },
  {
    label: (
      <div className="flex items-center gap-2">
        <span>
          <ICCar fillColor="#333" />
        </span>
        <span>Thư giãn</span>
      </div>
    ),
    key: "relax",
  },
];

function Plan() {
  return (
    <div className="mt-6">
      <ItemsHead
        title="Lên kế hoạch dễ dàng và nhanh chóng"
        description="Khám phá các điểm đến hàng đầu theo cách bạn thích ở Việt Nam"
      />
      <div>
        <PlanMenu items={items} />
      </div>
    </div>
  );
}

export default Plan;
