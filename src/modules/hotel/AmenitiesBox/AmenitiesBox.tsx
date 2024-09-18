import React, { useState } from "react";
import { Checkbox } from "antd";
import type { CheckboxProps } from "antd";

interface IAmenities {
  text: string;
  count: number;
}

function AmenitiesBox() {
  const [showAll, setShowAll] = useState(false);

  const amenities: IAmenities[] = [
    {
      text: "Chỗ đỗ xe",
      count: 119,
    },
    {
      text: "Nhà hàng",
      count: 27,
    },
    {
      text: "Cho phép mang theo vật nuôi",
      count: 52,
    },
    {
      text: "Dịch vụ phòng",
      count: 60,
    },
    { text: "Lễ tân 24 giờ", count: 71 },
    { text: "Trung tâm thể dục", count: 3 },
    {
      text: "Phòng không hút thuốc",
      count: 77,
    },
    { text: "Xe đưa đón sân bay", count: 57 },
    { text: "Phòng gia đình", count: 66 },
    { text: "Trung tâm spa & chăm sóc sức khỏe", count: 7 },
    { text: "Wifi miễn phí", count: 116 },
    { text: "Chỉ dành cho người lớn", count: 2 },
    { text: "Trạm sạc xe điện", count: 4 },
    { text: "Lối vào cho người đi xe lăn", count: 7 },
    { text: "Hồ bơi", count: 14 },
  ];

  const handleToggleShow = () => {
    setShowAll((prev) => !prev);
  };

  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div className="p-3">
      <div className="font-bold">Tiện nghi</div>
      <div className="flex flex-col">
        {amenities
          .slice(0, showAll ? amenities.length : 5)
          .map((item: IAmenities, index: number) => (
            <div key={index} className="flex justify-between py-[6px]">
              <Checkbox onChange={onChange} className="text-xs">
                {item.text}
              </Checkbox>
              <span className="text-xs text-gray-600">{item.count}</span>
            </div>
          ))}
      </div>
      <button
        onClick={handleToggleShow}
        className="text-blue-500 mt-2 text-xs hover:underline"
      >
        {showAll
          ? "Hiển thị ít đi"
          : `Hiển thị tất cả ${amenities.length} loại`}
      </button>
    </div>
  );
}

export default AmenitiesBox;
