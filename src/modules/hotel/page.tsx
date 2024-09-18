import React from "react";
import HotelItem from "./HotelItem/ItemBox";
import _ from "lodash";
import FilterHotel from "./FilterHotel/FilterHotel";

export function Hotel() {
  return (
    <div className="flex gap-4 my-10">
      <div className="basis-1/4">
        <FilterHotel />
      </div>
      <div className="basis-3/4">
        <h3 className="font-bold label-xl">
          Ninh Thuận: tìm thấy 128 chỗ nghỉ
        </h3>
        <div>
          <HotelItem />
        </div>
      </div>
    </div>
  );
}
