import React from "react";
import CardItem from "../HouseType/HouseType";
import TitleItem from "../ItemsHead/ItemsHead";
import ItemsHead from "../ItemsHead/ItemsHead";

function ViewedItem() {
    return (
        <div>
            <div className="mt-6">
                <ItemsHead
                    title="Bạn có còn quan tâm đến những chỗ nghỉ này?"
                    style="mb-3"
                />
                <CardItem width={242} />
            </div>
        </div>
    );
}

export default ViewedItem;
