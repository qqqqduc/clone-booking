import React from "react";
import BoxInformation from "./BoxInformation/BoxInformation";
import ItemsHead from "../ItemsHead/ItemsHead";
import "./SearchLatest.scss";

function SearchLatest() {
  return (
    <div className="search-latest">
      <div className="mt-6">
        <ItemsHead title="Tìm kiếm gần đây của bạn" />
        <div className="content-box inline-block rounded-lg mt-3">
          <BoxInformation />
        </div>
      </div>
    </div>
  );
}

export default SearchLatest;
