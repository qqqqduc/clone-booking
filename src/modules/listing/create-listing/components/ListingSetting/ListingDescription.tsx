import { useState, useEffect } from "react";
import { FieldValues, UseFormSetValue } from "react-hook-form";

import Heading from "../Heading";
import "../Component.scss";

interface ListingDescriptionProps {
  setValue: UseFormSetValue<FieldValues>;
}

function ListingDescription({ setValue }: ListingDescriptionProps) {
  const [text, setText] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  
  useEffect(() => {
    if (isChecked) setText("");
  }, [isChecked, setText]);

  const handleChange = (event: any) => {
    setIsChecked(false);
    setText(event.target.value);
    setValue("description", text);
  };
  const handleInputChange = (event: any) => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <Heading title="Hồ sơ" size="3xl" bottom={4} />
      <div className="bg-white shadow p-6 rounded-lg">
        <p className="text-gray-600 mb-4">
          Giúp chỗ nghỉ của Quý vị nổi bật hơn bằng cách cho khách tiềm năng
          biết thêm một chút về chỗ nghỉ. Thông tin này sẽ được hiển thị trên
          trang chỗ nghỉ của Quý vị.
        </p>

        <div className="mb-4">
          <label className="block text-base text-gray-900 font-medium mb-1">
            Về chỗ nghỉ
          </label>
          <textarea
            className="w-full h-32 p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-600 focus:border-[2px]"
            placeholder="Điều gì khiến chỗ nghỉ của Quý vị độc đáo? Khách có thể mong đợi những gì?"
            maxLength={1200}
            onChange={handleChange}
            value={text}
          ></textarea>
          <div className="text-right text-gray-500 text-sm mt-1">
            {text.length} / 1200
          </div>
        </div>

        <div className="mb-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600"
              onChange={handleInputChange}
              checked={isChecked}
            />
            <span className="text-gray-900">
              Không thông tin nào cả / Tôi sẽ thêm chúng sau
            </span>
          </label>
        </div>
      </div>
    </>
  );
}

export default ListingDescription;
