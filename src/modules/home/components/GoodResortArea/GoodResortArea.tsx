import React from "react";
import ItemsHead from "../ItemsHead/ItemsHead";
import ResortListSlider from "../ResortListSlider/ResortListSlider";

function GoodResortArea() {
    return (
        <div className="mt-6">
            <ItemsHead title="Đặt nhà nghỉ dưỡng được đánh giá cao" />
            <ResortListSlider slideShow={4} />
        </div>
    );
}

export default GoodResortArea;
