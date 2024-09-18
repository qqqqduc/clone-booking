import { Checkbox, Divider, GetProp } from "antd";
import React, { useEffect, useState } from "react";
import FilterOption from "./FilterOption/FilterOption";
import _ from "lodash";
import { amenity, checkCommonValue, point } from "@/utils/dataFilterOptions";

function FilterHotel() {
  const [amenityOption, setAmenityOption] = useState<string[]>([]);
  const [pointOption, setPointOption] = useState<string[]>([]);
  const [paramsFilter, setParamsFilter] = useState<string[]>([]);

  const field = ["city", "check_in", "check_out", "adult_count", "children_count", "min_price", "max_price", "min_rating", "bedroom_count", "bathroom_count", "des_type", "meal_plan"]

  const onChange: GetProp<typeof Checkbox.Group, "onChange"> = (
    checkedValues
  ) => {
    const options = checkedValues as string[];
    if (
      checkCommonValue(
        amenity.map((item) => item.value),
        options
      )
    ) {
      setAmenityOption(options);
    }
    if (
      checkCommonValue(
        point.map((item) => item.value),
        options
      )
    ) {
      setPointOption(options);
    }
  };

  useEffect(() => {
    setParamsFilter([...amenityOption, ...pointOption]);
  }, [amenityOption, pointOption]);

  return (
    <div className="border border-gray-200 rounded-lg">
      <div className="font-bold p-2 label-base">Chọn lọc theo:</div>
      <Divider className="m-0" />
      <button onClick={() => console.log(paramsFilter)}>click</button>
      <FilterOption
        title="Tiện nghi"
        filterOptions={amenity}
        onChange={onChange}
      />
      <Divider className="m-0" />
      <FilterOption
        title="Điểm đánh giá của khách"
        filterOptions={point}
        onChange={onChange}
      />
    </div>
  );
}

export default FilterHotel;
