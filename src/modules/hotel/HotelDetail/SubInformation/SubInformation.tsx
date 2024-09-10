import ICAir from "@/components/Icons/StayIcons/ICAir";
import ICBalcony from "@/components/Icons/StayIcons/ICBalcony";
import ICBathroom from "@/components/Icons/StayIcons/ICBathroom";
import ICEye from "@/components/Icons/StayIcons/ICEye";
import ICHomestay from "@/components/Icons/StayIcons/ICHomestay";
import ICKitchen from "@/components/Icons/StayIcons/ICKitchen";
import ICMachine from "@/components/Icons/StayIcons/ICMachine";
import ICPCircle from "@/components/Icons/StayIcons/ICPCircle";
import ICWifi from "@/components/Icons/StayIcons/ICWifi";
import React, { ReactElement } from "react";

interface IListItems {
  icon: ReactElement;
  text: string;
}

function SubInformation() {
  const listItems: IListItems[] = [
    {
      icon: <ICHomestay />,
      text: "Căn hộ",
    },
    {
      icon: <ICPCircle />,
      text: "Đỗ xe trong khuôn viên miễn phí",
    },
    {
      icon: <ICWifi />,
      text: "Wifi miễn phí",
    },
    {
      icon: <ICBalcony />,
      text: "Ban công",
    },
    {
      icon: <ICAir />,
      text: "Điều hòa không khí",
    },
    {
      icon: <ICBathroom />,
      text: "Phòng tắm riêng",
    },
    {
      icon: <ICEye />,
      text: "Tầm nhìn ra khung cảnh",
    },
    {
      icon: <ICKitchen />,
      text: "Bếp",
    },
    {
      icon: <ICBathroom />,
      text: "Vòi sen",
    },
    {
      icon: <ICMachine />,
      text: "Máy giặt",
    },
  ];

  return (
    <div className="mb-10">
      <ul className="grid grid-cols-5 gap-x-4 gap-y-4">
        {listItems.map((item: IListItems, index: number) => (
          <li
            key={index}
            className="border border-gray-200 rounded-lg flex items-center gap-4 p-4 w-full max-w-xs"
          >
            <div className="flex items-center">{item.icon}</div>
            <div className="text-xs">{item.text}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SubInformation;
