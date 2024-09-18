import ICProfile from "@/components/Icons/MySettingsIcons/ICProfile";
import Link from "next/link";
import React, { ReactElement } from "react";
import Preferences from "../../Preferences/Preferences";
import ICLock from "@/components/Icons/MySettingsIcons/ICLock";
import ICCard from "@/components/Icons/MySettingsIcons/ICCard";
import ICPrivate from "@/components/Icons/MySettingsIcons/ICPrivate";
import ICBell from "@/components/Icons/ICBell";
import ICFriends from "@/components/Icons/MySettingsIcons/ICFriends";
import ICOption from "@/components/Icons/MySettingsIcons/ICOption";

interface ItemsType {
  icon: ReactElement;
  text: string;
  slug: string;
}

function TabSettings() {
  const items: ItemsType[] = [
    {
      icon: <ICProfile width="16" height="16" />,
      text: "Thông tin cá nhân",
      slug: "personal",
    },
    {
      icon: <ICOption width="16" height="16" />,
      text: "Các tùy chọn",
      slug: "preferences",
    },
    {
      icon: <ICLock width="16" height="16" />,
      text: "An toàn và bảo mật",
      slug: "security",
    },
    {
      icon: <ICCard width="16" height="16" />,
      text: "Thông tin thanh toán",
      slug: "payment",
    },
    {
      icon: <ICPrivate width="16" height="16" />,
      text: "Quyền riêng tư",
      slug: "privacy",
    },
    {
      icon: <ICBell width="16" height="16" fillColor="#1a1a1a" />,
      text: "Thông báo email",
      slug: "notifications",
    },
    {
      icon: <ICFriends width="16" height="16" />,
      text: "Người đi cùng",
      slug: "other-travelers",
    },
  ];

  return (
    <div className="flex flex-col rounded-lg border border-gray-200 overflow-hidden">
      {items.map((item: ItemsType, index: number) => (
        <Link
          key={index}
          href={`/mysettings/${item.slug}`}
          className="select-tab p-3 border-y border-gray-200 flex items-center gap-2"
        >
          <div className="rounded-full bg-gray-100 w-9 h-9 flex justify-center items-center">
            {item.icon}
          </div>
          <div className="select-content">{item.text}</div>
        </Link>
      ))}
    </div>
  );
}

export default TabSettings;
