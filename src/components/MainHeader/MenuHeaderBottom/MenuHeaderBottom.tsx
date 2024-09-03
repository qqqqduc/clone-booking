import React, { useState } from "react";
import { Menu } from "antd";
import type { GetProp, MenuProps } from "antd";
import { useRouter } from "next/navigation";
import ICBed from "@/components/Icons/HeaderIcons/ICBed";
import ICPlane from "@/components/Icons/HeaderIcons/ICPlane";
import ICCar from "@/components/Icons/HeaderIcons/ICCar";
import ICPlace from "@/components/Icons/HeaderIcons/ICPlace";
import ICTaxi from "@/components/Icons/HeaderIcons/ICTaxi";
import Link from "next/link";
import "./MenuHeaderBottom.scss";

type MenuTheme = GetProp<MenuProps, "theme">;

type MenuItem = GetProp<MenuProps, "items">[number];

const items: MenuItem[] = [
  {
    label: (
      <Link href={"/"} className="flex items-center gap-2">
        <span>
          <ICBed />
        </span>
        <span>Lưu trú</span>
      </Link>
    ),
    key: "/",
  },
  {
    label: (
      <Link href={"/plane"} className="flex items-center gap-2">
        <span>
          <ICPlane />
        </span>
        <span>Chuyến bay</span>
      </Link>
    ),
    key: "/plane",
  },
  {
    label: (
      <Link href={"/cars"} className="flex items-center gap-2">
        <span>
          <ICCar />
        </span>
        <span>Thuê xe</span>
      </Link>
    ),
    key: "/cars",
  },
  {
    label: (
      <Link href={"/attractions"} className="flex items-center gap-2">
        <span>
          <ICPlace />
        </span>
        <span>Địa điểm tham quan</span>
      </Link>
    ),
    key: "/attractions",
  },
  {
    label: (
      <Link href={"/taxi"} className="flex items-center gap-2">
        <span>
          <ICTaxi />
        </span>
        <span>Taxi sân bay</span>
      </Link>
    ),
    key: "/taxi",
  },
];

function MenuHeaderBottom() {
  const [current, setCurrent] = useState(window.location.pathname);
  const router = useRouter();

  const onclick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onclick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      className="custom-menu-header-bottom lg:w-11/12 mx-auto"
    />
  );
}

export default MenuHeaderBottom;
