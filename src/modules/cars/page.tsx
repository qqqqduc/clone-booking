import LoginGifts from "@/components/LoginGifts/LoginGifts";
import React from "react";
import CustomerCare from "./components/CustomerCare/CustomerCare";
import ExpandQuestion from "./components/ExpandQuestion/ExpandQuestion";

interface ICustomerCare {
  image: string;
  title: string;
  description: string;
}

export function Cars() {
  const customerCare: ICustomerCare[] = [
    {
      image:
        "https://t-cf.bstatic.com/design-assets/assets/v3.125.0/illustrations-traveller/CustomerService.png",
      title: "Chúng tôi sẵn sàng hỗ trợ bạn",
      description: "Hỗ trợ khách hàng bằng hơn 30 ngôn ngữ",
    },
    {
      image:
        "https://t-cf.bstatic.com/design-assets/assets/v3.125.0/illustrations-traveller/FreeCancellation.png",
      title: "Miễn phí hủy xe",
      description: "Lên đến 48 giờ trước khi nhận xe, đối với hầu hết đơn đặt",
    },
    {
      image:
        "https://t-cf.bstatic.com/design-assets/assets/v3.125.0/illustrations-traveller/Reviews.png",
      title: "Hơn 5 triệu đánh giá",
      description: "Bởi khách hàng thật đã được xác minh",
    },
  ];

  return (
    <div>
      <div className="pt-5">
        <LoginGifts />
      </div>
      <div className="my-8 px-4 py-16 flex justify-between items-center gap-5 bg-gray-200 rounded-lg">
        {customerCare.map((item: ICustomerCare, index: number) => (
          <div key={index} className="flex-1">
            <CustomerCare
              image={item.image}
              title={item.title}
              description={item.description}
            />
          </div>
        ))}
      </div>
      <div className="my-10">
        <ExpandQuestion />
      </div>
    </div>
  );
}
