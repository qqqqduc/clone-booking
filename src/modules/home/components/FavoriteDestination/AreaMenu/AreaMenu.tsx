import React, { useState } from "react";
import { Menu } from "antd";
import type { GetProp, MenuProps } from "antd";
import { useRouter } from "next/navigation";
import "./AreaMenu.scss";

type MenuItem = GetProp<MenuProps, "items">[number];

interface IProps {
    items?: MenuItem[];
}

function AreaMenu({ items }: IProps) {
    const [current, setCurrent] = useState<string>("area");
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
            className="area-menu"
        />
    );
}

export default AreaMenu;
