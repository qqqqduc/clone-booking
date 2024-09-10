import ICHeart from "@/components/Icons/StayIcons/ICHeart";
import ICShare from "@/components/Icons/StayIcons/ICShare";
import ItemsHead from "@/components/ItemsHead/ItemsHead";
import React, { ReactElement } from "react";
import ContentLeft from "./ContentLeft/ContentLeft";
import ContentRight from "./ContentRight/ContentRight";
import SubInformation from "./SubInformation/SubInformation";
import Link from "next/link";
import ICPCircle from "@/components/Icons/StayIcons/ICPCircle";
import ICWifi from "@/components/Icons/StayIcons/ICWifi";
import ICBalcony from "@/components/Icons/StayIcons/ICBalcony";
import ICAir from "@/components/Icons/StayIcons/ICAir";
import ICLocation from "@/components/Icons/HeaderIcons/ICLocation";

interface IListItems {
  icon: ReactElement;
  text: string;
}

export function HotelDetail() {
  const listItems: IListItems[] = [
    {
      icon: <ICPCircle fillColor="#008234" width="20" height="20" />,
      text: "Đỗ xe trong khuôn viên miễn phí",
    },
    {
      icon: <ICWifi fillColor="#008234" width="20" height="20" />,
      text: "Wifi miễn phí",
    },
    {
      icon: <ICBalcony fillColor="#008234" width="20" height="20" />,
      text: "Sân thượng / hiên",
    },
    {
      icon: <ICAir fillColor="#008234" width="20" height="20" />,
      text: "Điều hòa nhiệt độ",
    },
  ];

  return (
    <div className="mt-10">
      <div className="flex justify-between">
        <ItemsHead title="Eco Nest Hotel & Apartment" />
        <div className="flex items-center gap-4 mb-3">
          <div className="flex items-center">
            <ICHeart fillColor="#006ce4" width="24px" height="24px" />
          </div>
          <div className="flex items-center">
            <ICShare fillColor="#006ce4" width="24px" height="24px" />
          </div>
          <div className="bg-blue-600 px-4 py-2 rounded text-white font-medium hover:cursor-pointer">
            Đặt ngay
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <ContentLeft />
        <ContentRight />
      </div>
      <SubInformation />
      <div className="flex gap-12">
        <div
          className="basis-2/3 text-justify font-sans"
        >
          <p className="mb-3 ">
            Bạn đủ điều kiện nhận giảm giá Genius tại Homestay in City Center!
            Để tiết kiệm tại chỗ nghỉ này, bạn chỉ cần{" "}
            <Link
              href="/sign-in"
              className="text-blue-500 underline cursor-pointer"
            >
              đăng nhập
            </Link>
            .
          </p>
          <p className="mb-3 ">
            Nằm ở TP. Hồ Chí Minh, gần Bảo tàng Mỹ thuật, Trung tâm mua sắm
            Takashimaya Việt Nam và Chợ Bến Thành, Homestay in City Center có
            Wi-Fi miễn phí, nơi khách có thể trải nghiệm sân hiên.
          </p>
          <p className="mb-3 ">
            Chỗ nghỉ có điều hòa, bếp đầy đủ tiện nghi với khu vực ăn uống, TV
            màn hình phẳng, cũng như phòng tắm riêng với vòi xịt/chậu rửa vệ
            sinh, đồ vệ sinh cá nhân miễn phí và máy sấy tóc. Để thuận tiện hơn
            cho khách, chỗ nghỉ có thể cung cấp khăn tắm và khăn trải giường với
            khoản phụ phí.
          </p>
          <p className="mb-3 ">
            Các điểm tham quan nổi tiếng gần khách sạn căn hộ bao gồm Công viên
            Tao Đàn, Trung tâm Thương mại Vincom Center A và Bến cảng Nhà Rồng.
            Sân bay gần nhất là Sân bay Quốc tế Tân Sơn Nhất, cách Homestay in
            City Center 8 km.
          </p>
          <p className="mb-3 ">
            Các cặp đôi đặc biệt thích địa điểm này — họ cho điểm{" "}
            <strong>9.1</strong> khi đánh giá chuyến đi hai người.
          </p>
          <p className="my-3 text-xs text-gray-500">
            Các khoảng cách nêu trong mô tả chỗ nghỉ được tính toán bằng ©
            OpenStreetMap
          </p>
          <div className="font-bold mb-3">
            Các tiện nghi được ưa chuộng nhất
          </div>
          <div className="flex flex-wrap">
            {listItems.map((item: IListItems, index: number) => (
              <div className="flex mr-5 mb-5 gap-2">
                <div>{item.icon}</div>
                <div className="font-sans whitespace-nowrap">
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="basis-1/3 p-4 bg-blue-100 rounded h-max">
          <div className="font-bold mb-3">
            Điểm nổi bật của chỗ nghỉ
          </div>
          <div className="flex mb-3">
            <div className="pr-2">
              <ICLocation fillColor="#333" />
            </div>
            <div className="mb-3 text-xs font-sans">
              Nằm tại khu vực được đánh giá cao nhất ở TP. Hồ Chí Minh, chỗ nghỉ
              này có điểm vị trí xuất sắc là 9,4
            </div>
          </div>
          <div className="flex mb-9">
            <div className="pr-2">
              <ICPCircle fillColor="#333" width="20" height="20" />
            </div>
            <div className="mb-3 text-xs font-sans">
              Có chỗ đậu xe miễn phí trong khuôn viên
            </div>
          </div>
          <div className="bg-blue-600 rounded text-white font-bold text-center px-3 py-2 hover:cursor-pointer hover:bg-blue-800">
            Đặt ngay
          </div>
        </div>
      </div>
    </div>
  );
}
