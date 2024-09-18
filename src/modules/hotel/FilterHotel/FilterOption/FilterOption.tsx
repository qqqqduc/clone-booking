import React, { useState } from "react";
import { Checkbox } from "antd";
import type { CheckboxProps, GetProp } from "antd";
import "./FilterOption.scss";
import { IFilterOptions } from "@/types/type";

interface IProps {
  title: string;
  filterOptions: IFilterOptions[];
  onChange: GetProp<typeof Checkbox.Group, "onChange">
}

function FilterOption({ title, filterOptions, onChange }: IProps) {
  const [showAll, setShowAll] = useState<boolean>(false);
  const [paramsFilter, setParamsFilter] = useState<string[]>([]);

  const handleToggleShow = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <div className="filter-option">
      <div className="font-bold">{title}</div>
      <div className="flex flex-col">
        <Checkbox.Group
          options={filterOptions.slice(0, showAll ? filterOptions.length : 5)}
          onChange={onChange}
          className="custom-ant-checkbox-group"
        />
      </div>
      {filterOptions.length >= 5 && (
        <button
          onClick={handleToggleShow}
          className="text-blue-500 mt-2 text-xs hover:underline"
        >
          {showAll
            ? "Hiển thị ít đi"
            : `Hiển thị tất cả ${filterOptions.length} loại`}
        </button>
      )}
    </div>
  );
}

export default FilterOption;
