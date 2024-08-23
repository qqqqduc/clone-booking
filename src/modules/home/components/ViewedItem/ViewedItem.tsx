import React from "react";
import ItemsHead from "../ItemsHead/ItemsHead";
import HouseType from "../HouseType/HouseType";

function ViewedItem() {
  return (
    <div>
      <div className="mt-6">
        <ItemsHead
          title="Bạn có còn quan tâm đến những chỗ nghỉ này?"
          style="mb-3"
        />
        <div className="w-1/4">
          <HouseType
            image="https://cf.bstatic.com/xdata/images/hotel/square600/573101946.webp?k=5d95af7b1c22dc3d7e83cb919332b56aeba4fda4f856b00957853fc5361a0c13&o="
            name="Homestay Phủ Lý"
            description="Hà Nam"
            point={9.1}
            rank="Tuyệt hảo"
            review="8 đánh giá"
          />
        </div>
      </div>
    </div>
  );
}

export default ViewedItem;
