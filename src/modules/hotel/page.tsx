import React from "react";
import { Checkbox } from "antd";
import type { CheckboxProps } from "antd";

const onChange: CheckboxProps["onChange"] = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

export function Hotel() {
  return (
    <div className="flex mt-10">
      <div className="basis-1/4">
        <div className="border border-gray-200 rounded-lg">
          <div className="font-bold border-b border-gray-200 p-2 text-base">
            Chọn lọc theo:
          </div>
          <div className="p-3">
            <div className="font-bold">Dùng các bộc lọc cũ</div>
            <div className="flex justify-between py-[6px]">
              <Checkbox onChange={onChange} className="text-xs">Nhà nghỉ mát</Checkbox>
              <span className="text-xs text-gray-500">10</span>
            </div>
            <div className="flex justify-between py-[6px]">
              <Checkbox onChange={onChange} className="text-xs">Nhà nghỉ mát</Checkbox>
              <span className="text-xs text-gray-500">10</span>
            </div>
            <div className="flex justify-between py-[6px]">
              <Checkbox onChange={onChange} className="text-xs">Nhà nghỉ mát</Checkbox>
              <span className="text-xs text-gray-500">10</span>
            </div>
            <div className="flex justify-between py-[6px]">
              <Checkbox onChange={onChange} className="text-xs">Nhà nghỉ mát</Checkbox>
              <span className="text-xs text-gray-500">10</span>
            </div>
          </div>
        </div>
      </div>
      <div className="basis-3/4"></div>
    </div>
  );
}
