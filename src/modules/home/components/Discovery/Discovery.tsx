import React from "react";
import ItemsHead from "../ItemsHead/ItemsHead";
import RestAreaSlider from "../RestAreaSlider/RestAreaSlider";

function Discovery() {
  return (
    <div className="mt-6">
      <ItemsHead
        title="Khám phá Việt Nam"
        description="Các điểm đến phổ biến này có nhiều điều chờ đón bạn"
      />
      <RestAreaSlider slideShow={6}></RestAreaSlider>
    </div>
  );
}

export default Discovery;
