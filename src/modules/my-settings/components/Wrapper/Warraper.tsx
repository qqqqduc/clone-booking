import ICBell from "@/components/Icons/ICBell";
import ICCard from "@/components/Icons/MySettingsIcons/ICCard";
import ICFriends from "@/components/Icons/MySettingsIcons/ICFriends";
import ICLock from "@/components/Icons/MySettingsIcons/ICLock";
import ICOption from "@/components/Icons/MySettingsIcons/ICOption";
import ICPrivate from "@/components/Icons/MySettingsIcons/ICPrivate";
import ICProfile from "@/components/Icons/MySettingsIcons/ICProfile";
import React, { ReactElement } from "react";
import ContentAction from "../ContentAction/ContentAction";

interface ItemsType {
  icon: ReactElement;
  title: string;
  description: string;
  action: string;
  path: string;
}

function Wrapper() {
  const items: ItemsType[] = [
    {
      icon: <ICProfile />,
      title: "Thông tin cá nhân",
      description:
        "Cập nhật thông tin của bạn và tìm hiểu các thông tin này được sử dụng ra sao",
      action: "Quản lý thông tin cá nhân",
      path: "personal",
    },
    {
      icon: <ICOption />,
      title: "Các tùy chọn",
      description:
        "Thay đổi ngôn ngữ, tiền tệ và các yêu cầu hỗ trợ khuyết tật.",
      action: "Quản lý tùy chọn",
      path: "preferences",
    },
    {
      icon: <ICLock />,
      title: "An toàn và bảo mật",
      description:
        "Thay đổi thiết lập bảo mật, cài đặt xác thực bổ sung hoặc xóa tài khoản của Quý vị.",
      action: "Quản lý bảo mật tài khoản",
      path: "security",
    },

    {
      icon: <ICCard />,
      title: "Thông tin thanh toán",
      description:
        "Thêm hoặc bỏ các phương thức thanh toán một cách bảo mật để dễ đặt hơn.",
      action: "Quản lý thông tin thanh toán",
      path: "payment",
    },
    {
      icon: <ICPrivate />,
      title: "Quyền riêng tư",
      description:
        "Thực hiện quyền riêng tư và kiểm soát cách dữ liệu của bạn được sử dụng.",
      action: "Quản lý quyền riêng tư",
      path: "privacy",
    },
    {
      icon: <ICBell fillColor="#1a1a1a" />,
      title: "Thông báo email",
      description:
        "Chọn những gì được thông báo đến bạn và tắt các thông báo không cần thiết.",
      action: "Quản lý thông báo",
      path: "notifications",
    },
    {
      icon: <ICFriends />,
      title: "Người đi cùng",
      description:
        "Thêm hoặc chỉnh sửa thông tin của những người mà bạn đi cùng.",
      action: "Quản lý người đi cùng",
      path: "other-travelers",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-5">
      {items.map((item: ItemsType, index: number) => (
        <ContentAction
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
          action={item.action}
          path={item.path}
        />
      ))}
    </div>
  );
}

export default Wrapper;
