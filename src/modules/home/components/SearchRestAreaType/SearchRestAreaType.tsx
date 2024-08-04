import React from "react";
import ItemsHead from "../ItemsHead/ItemsHead";
import RestAreaSlider from "../RestAreaSlider/RestAreaSlider";
import RestAreaType from "../RestAreaSlider/RestAreaType/RestAreaType";

function SearchRestAreaType() {
    return (
        <div className="mt-6">
            <ItemsHead title="Tìm theo loại chỗ nghỉ" style="mb-3" />
            <RestAreaSlider slideShow={4}>
            </RestAreaSlider>
        </div>
    );
}

export default SearchRestAreaType;
