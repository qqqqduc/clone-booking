import React from "react";
import Recommend from "./components/Recommend/Recommend";
import { Divider } from "antd";
import Neighborhood from "./components/Neighborhood/Neighborhood";
import ItemsHead from "@/components/ItemsHead/ItemsHead";

interface IItemsType {
  image: string;
  title: string;
  description: string;
}

export function Attractions() {
  const listItems: IItemsType[] = [
    {
      image:
        "https://t-cf.bstatic.com/design-assets/assets/v3.125.0/illustrations-traveller/GeniusAttractionsBadge.png",
      title: "Khám phá các địa điểm tham quan hàng đầu",
      description:
        "Trải nghiệm những điều tuyệt vời nhất tại điểm đến với các địa điểm tham quan, tour và nhiều hoạt động khác",
    },
    {
      image:
        "https://t-cf.bstatic.com/design-assets/assets/v3.125.0/illustrations-traveller/TripsAttractionsQRTicket@2x.png",
      title: "Nhanh chóng và linh hoạt",
      description:
        "Đặt vé online trong vài phút với lựa chọn hủy miễn phí ở nhiều địa điểm quan tham",
    },
    {
      image:
        "https://t-cf.bstatic.com/design-assets/assets/v3.125.0/illustrations-traveller/CustomerService@2x.png",
      title: "Được trợ giúp khi bạn cần",
      description:
        "Đội ngũ Dịch vụ Khách hàng toàn cầu của Booking.com sẽ luôn có mặt để hỗ trợ bạn 24/7",
    },
  ];

  return (
    <div>
      <Recommend />
      <Divider />
      <Neighborhood />
      <Divider />
      <div>
        <ItemsHead title="Bạn cứ vô tư khám phá, những thứ khác chúng tôi lo" />
        <div className="flex gap-4">
          {listItems.map((item: IItemsType, index: number) => (
            <div className="flex items-center gap-4 rounded-lg border border-gray-200 p-4 flex-1">
              <div className="basis-2/6">
                <img src={item.image} alt="" />
              </div>
              <div className="basis-4/6">
                <div className="font-bold text-base">{item.title}</div>
                <div className="text-gray-500 text-justify text-xs">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-lg border border-gray-200 p-4 my-10">
        <div className="">
          Hãy cho chúng tôi biết phản hồi và góp ý của bạn về chất lượng dịch vụ
        </div>
        <div className="text-blue-600 hover:underline hover:cursor-pointer">
          Gửi đề xuất
        </div>
      </div>
    </div>
  );
}
