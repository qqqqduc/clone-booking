import React from "react";
import Recommend from "./components/Recommend/Recommend";
import { Divider } from "antd";
import Neighborhood from "./components/Neighborhood/Neighborhood";
import ItemsHead from "@/components/ItemsHead/ItemsHead";
import LoginGifts from "@/components/LoginGifts/LoginGifts";

export function Attractions() {
  return (
    <div>
      <Recommend />
      <Divider />
      <Neighborhood />
      <Divider />
      <div>
        <ItemsHead title="Bạn cứ vô tư khám phá, những thứ khác chúng tôi lo" />
      </div>
    </div>
  );
}
