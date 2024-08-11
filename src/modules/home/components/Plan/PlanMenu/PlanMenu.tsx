import React, { useState } from "react";
import { Menu } from "antd";
import type { GetProp, MenuProps } from "antd";
import { useRouter } from "next/navigation";
import "./PlanMenu.scss";

type MenuItem = GetProp<MenuProps, "items">[number];

interface IProps {
  items?: MenuItem[];
}

function PlanMenu({ items }: IProps) {
  const [current, setCurrent] = useState<string>("nature");
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
      className="plan-area-menu"
    />
  );
}

export default PlanMenu;
