import React, { useState } from "react";
import { Select } from "antd";
import { FieldValues, UseFormSetValue } from "react-hook-form";

import Heading from "./../Heading";
import "../Component.scss";

const { Option } = Select;

interface ListingRulesProps {
  setValue: UseFormSetValue<FieldValues>;
}

function ListingRules({ setValue }: ListingRulesProps) {
  const [checkInTime, setCheckInTime] = useState({
    from: "11:00",
    to: "12:00",
  });
  const [checkOutTime, setCheckOutTime] = useState({
    from: "11:00",
    to: "12:00",
  });

  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 0; hour <= 24; hour++) {
      const timeString = `${hour < 10 ? `0${hour}` : hour}:00`;
      options.push(
        <Option key={timeString} value={timeString}>
          {timeString}
        </Option>
      );
    }
    return options;
  };

  const handleTimeChange = (
    type: string,
    field: "from" | "to",
    value: string
  ) => {
    const updatedTime =
      type === "checkIn" ? { ...checkInTime } : { ...checkOutTime };
    updatedTime[field] = value;

    // Kiểm tra xem thời gian "to" có nhỏ hơn "from" không, nếu có thì đảo ngược lại
    if (updatedTime.from > updatedTime.to) {
      const temp = updatedTime.from;
      updatedTime.from = updatedTime.to;
      updatedTime.to = temp;
    }

    // Cập nhật lại giá trị
    if (type === "checkIn") {
      setCheckInTime(updatedTime);
      setValue("checkInTime", updatedTime);
    } else {
      setCheckOutTime(updatedTime);
      setValue("checkOutTime", updatedTime);
    }
    console.log(updatedTime);
  };

  return (
    <>
      <Heading title="Quy định chung" size="3xl" bottom={6} />
      <div className="bg-white shadow p-6 rounded-lg p-6">
        {/* Thời gian nhận phòng */}
        <div className="mb-6">
          <label className="block mb-2 text-lg font-semibold">Nhận phòng</label>
          <div className="flex gap-4">
            <div className="w-full">
              <label className="block text-sm mb-1">Từ</label>
              <Select
                value={checkInTime.from}
                style={{ width: "100%" }}
                onChange={(value) => handleTimeChange("checkIn", "from", value)}
              >
                {generateTimeOptions()}
              </Select>
            </div>
            <div className="w-full">
              <label className="block text-sm mb-1">Đến</label>
              <Select
                value={checkInTime.to}
                style={{ width: "100%" }}
                onChange={(value) => handleTimeChange("checkIn", "to", value)}
              >
                {generateTimeOptions()}
              </Select>
            </div>
          </div>
        </div>

        {/* Thời gian trả phòng */}
        <div className="mb-6">
          <label className="block mb-2 text-lg font-semibold">Trả phòng</label>
          <div className="flex gap-4">
            <div className="w-full">
              <label className="block text-sm mb-1">Từ</label>
              <Select
                value={checkOutTime.from}
                style={{ width: "100%" }}
                onChange={(value) =>
                  handleTimeChange("checkOut", "from", value)
                }
              >
                {generateTimeOptions()}
              </Select>
            </div>
            <div className="w-full">
              <label className="block text-sm mb-1">Đến</label>
              <Select
                value={checkOutTime.to}
                style={{ width: "100%" }}
                onChange={(value) => handleTimeChange("checkOut", "to", value)}
              >
                {generateTimeOptions()}
              </Select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListingRules;
