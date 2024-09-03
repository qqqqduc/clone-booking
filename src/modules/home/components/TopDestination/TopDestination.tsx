import React from "react";
import "./TopDestination.scss";
import ItemsHead from "@/components/ItemsHead/ItemsHead";

function TopDestination() {
  return (
    <div className="mt-6">
      <ItemsHead
        title="Điểm đến đang thịnh hành"
        description="Các lựa chọn phổ biến nhất cho du khách từ Việt Nam"
      />
      <div className="flex gap-4">
        <div className="top-destination-banner rounded-lg"></div>
        <div className="top-destination-banner rounded-lg"></div>
      </div>
      <div className="flex gap-4 mt-4">
        <div className="top-destination-banner rounded-lg"></div>
        <div className="top-destination-banner rounded-lg"></div>
        <div className="top-destination-banner rounded-lg"></div>
      </div>
    </div>
  );
}

export default TopDestination;
