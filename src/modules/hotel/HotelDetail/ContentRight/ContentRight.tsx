import { Avatar } from "antd";
import React from "react";
import ReviewBox from "../../ReviewBox/ReviewBox";

function ContentRight() {
  return (
    <div className="basis-1/4 w-full h-full flex flex-col rounded border border-gray-200">
      <div className="p-3">
        <ReviewBox />
      </div>
      <div className="p-3 border-t border-b border-gray-200">
        <div className="text-xs  font-medium">
          Khách lưu trú ở đây thích điều gì?
        </div>
        <p className="px-3 my-3 text-xs ">
          “Căn hộ ở ngay trung tâm , rất thuận tiện đi lại , di chuyển đến phố
          cổ , căn hộ cũng khá yên tĩnh . Các chú bảo vệ khá thân thiện , anh
          quản lý...”
        </p>
        <div className="flex items-center gap-2 px-3">
          <Avatar className=" bg-green-700" size={24}>
            <span className="text-xs text-white flex items-center">C</span>
          </Avatar>
          <span className="text-xs ">Chi</span>
        </div>
      </div>
      <div className="p-3 flex justify-between items-center">
        <div className=" font-medium">Tuyệt vời</div>
        <div className="flex items-center px-1 rounded-t rounded-r border border-gray-900  text-base w-8 h-8">
          9.2
        </div>
      </div>
    </div>
  );
}

export default ContentRight;
