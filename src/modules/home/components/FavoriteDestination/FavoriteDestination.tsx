import React from "react";
import ItemsHead from "../ItemsHead/ItemsHead";
import AreaMenu from "./AreaMenu/AreaMenu";
import MenuItem from "antd/es/menu/MenuItem";
import { GetProp, MenuProps } from "antd";
import ICBed from "@/components/Icons/HeaderIcons/ICBed";
import ICPlane from "@/components/Icons/HeaderIcons/ICPlane";
import ICCar from "@/components/Icons/HeaderIcons/ICCar";
import AreaList from "./AreaList/AreaList";
type MenuItem = GetProp<MenuProps, "items">[number];

const items: MenuItem[] = [
    {
        label: (
            <div className="flex items-center gap-2">
                <span>
                    <ICBed fillColor="#333" />
                </span>
                <span>Khu vực</span>
            </div>
        ),
        key: "area",
    },
    {
        label: (
            <div className="flex items-center gap-2">
                <span>
                    <ICPlane fillColor="#333" />
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
                <span>Địa điểm được quan tâm</span>
            </div>
        ),
        key: "place",
    },
];

function FavoriteDestination() {
    return (
        <div className="mt-6">
            <ItemsHead title="Các điểm đến được chúng tôi ưa thích" />
            <AreaMenu items={items} />
            <AreaList />
        </div>
    );
}

export default FavoriteDestination;
