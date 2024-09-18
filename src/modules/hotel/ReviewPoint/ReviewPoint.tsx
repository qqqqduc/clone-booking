import React, { useState } from "react";
import { Checkbox } from "antd";
import type { CheckboxProps } from "antd";

interface ItemsType {
  text: string;
  count: number;
}

function ReviewPoint() {
  const [showAll, setShowAll] = useState(false);

  const listItems: ItemsType[] = [
    {
      text: "Tuyệt hảo: 9 điểm trở lên",
      count: 31,
    },
    {
      text: "Rất tốt: 8 điểm trở lên",
      count: 76,
    },
    {
      text: "Tốt: 7 điểm trở lên",
      count: 94,
    },
    {
      text: "Dễ chịu: 6 điểm trở lên",
      count: 101,
    },
  ];

  const handleToggleShow = () => {
    setShowAll((prev) => !prev);
  };

  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div className="p-3 border-t border-gray-200">
      <div className="font-bold">Điểm đánh giá của khách</div>
      <div className="flex flex-col">
        {listItems
          .slice(0, showAll ? listItems.length : 5)
          .map((item: ItemsType, index: number) => (
            <div key={index} className="flex justify-between py-[6px]">
              <Checkbox onChange={onChange} className="text-xs">
                {item.text}
              </Checkbox>
              <span className="text-xs text-gray-600">{item.count}</span>
            </div>
          ))}
      </div>
      {listItems.length >= 5 && (
        <button
          onClick={handleToggleShow}
          className="text-blue-500 mt-2 text-xs hover:underline"
        >
          {showAll
            ? "Hiển thị ít đi"
            : `Hiển thị tất cả ${listItems.length} loại`}
        </button>
      )}
    </div>
  );
}

export default ReviewPoint;
