import { useState, useEffect } from "react";
import { FieldValues, UseFormSetValue } from "react-hook-form";

import Heading from "../Heading";
import CheckBox from "../CheckBox";
import "../Component.scss";

interface ListingAmenitiesProps {
  setValue: UseFormSetValue<FieldValues>;
}

function ListingAmenities({ setValue }: ListingAmenitiesProps) {
  const [checkedValues, setCheckedValues] = useState<string[]>([]);

  useEffect(() => {
    setValue("amenities", checkedValues);
  }, [checkedValues, setValue]);

  const handleCheckboxChange = (label: string, isChecked: boolean) => {
    setCheckedValues((prev) => {
      if (isChecked) {
        // Nếu được check, thêm vào checkedValues
        return [...prev, label];
      } else {
        // Nếu bỏ check, xóa khỏi checkedValues
        return prev.filter((item) => item !== label);
      }
    });
  };

  return (
    <>
      <Heading
        title="Khách hàng có thể sử dụng gì tại chỗ nghỉ?"
        size="3xl"
        bottom={6}
      />
      <div className="bg-white shadow p-6 rounded-lg">
        <h3 className="font-medium text-lg mt-4 mb-2">Tiện nghi chung</h3>

        <div className="space-y-3">
          <div className="pb-4 border-bottom-soft">
            <CheckBox
              label="Điều hòa nhiệt độ"
              onChange={handleCheckboxChange}
            />
            <CheckBox label="Hệ thống sưởi" onChange={handleCheckboxChange} />
            <CheckBox label="WiFi miễn phí" onChange={handleCheckboxChange} />
            <CheckBox
              label="Trạm sạc xe điện"
              onChange={handleCheckboxChange}
            />
          </div>
        </div>

        <div>
          <h3 className="font-medium text-lg mt-4 mb-2">
            Nấu nướng và giặt rửa
          </h3>
          <div className="space-y-3">
            <div className="pb-4 border-bottom-soft">
              <CheckBox label="Bếp" onChange={handleCheckboxChange} />
              <CheckBox label="Bếp nhỏ" onChange={handleCheckboxChange} />
              <CheckBox label="Máy giặt" onChange={handleCheckboxChange} />
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-medium text-lg mt-4 mb-2">Giải trí</h3>
          <div className="space-y-3">
            <div className="pb-4 border-bottom-soft">
              <CheckBox
                label=" TV màn hình phẳng"
                onChange={handleCheckboxChange}
              />
              <CheckBox label="Hồ bơi" onChange={handleCheckboxChange} />
              <CheckBox label="Bể sục" onChange={handleCheckboxChange} />
              <CheckBox label="Minibar" onChange={handleCheckboxChange} />
              <CheckBox
                label="Phòng xông hơi"
                onChange={handleCheckboxChange}
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-medium text-lg mt-4 mb-2">
            Không gian ngoài trời và tầm nhìn
          </h3>
          <div className="space-y-3">
            <CheckBox label="Ban công" onChange={handleCheckboxChange} />
            <CheckBox label="Nhìn ra vườn" onChange={handleCheckboxChange} />
            <CheckBox
              label="Sân thượng / hiên"
              onChange={handleCheckboxChange}
            />
            <CheckBox
              label="Tầm nhìn ra khung cảnh"
              onChange={handleCheckboxChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ListingAmenities;
