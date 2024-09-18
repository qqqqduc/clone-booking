import ItemsHead from "@/components/ItemsHead/ItemsHead";
import React from "react";
import Wrapper from "./components/Wrapper/Warraper";

export function MySettings() {
  return (
    <div className="my-12">
      <div className="">
        <ItemsHead
          title="Cài đặt tài khoản"
          description="Quản lý trải nghiệm Booking.com của bạn"
        />
      </div>
      <Wrapper />
    </div>
  );
}
