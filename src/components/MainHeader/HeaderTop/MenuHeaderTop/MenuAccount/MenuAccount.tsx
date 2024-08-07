import { Menu, MenuProps } from "antd";
import React from "react";
import "./MenuAccount.scss";

const items: MenuProps["items"] = [
  {
    label: (
      <a target="_self" rel="noopener noreferrer" href="#">
        1st menu item
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a target="_self" rel="noopener noreferrer" href="#">
        2nd menu item
      </a>
    ),
    key: "1",
  },
];

function MenuAccount() {
  return (
    <Menu
      style={{ width: 336 }}
      mode="inline"
      items={items}
      className="custom-menu-account"
      selectable={false}
    />
  );
}

export default MenuAccount;
