import { Menu, Popover, Tooltip } from "antd";
import React, { useState } from "react";
import "./MenuHeaderTop.scss";
import TooltipHeader from "./TooltipHeader/TooltipHeader";
import ICQuestion from "@/components/Icons/HeaderIcons/ICQuestion";
import { usePathname, useRouter } from "next/navigation";
import _ from "lodash";
import { routesList } from "@/routes/routesList";

function MenuHeaderTop() {
    const [open, setOpen] = useState(false);

    const hide = () => {
        setOpen(false);
    };

    const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen);
    };
    const router = useRouter();

    const pathname = usePathname();
    const isLoginPage = routesList.find(
        (route) => route.path === pathname && route.isLoginPage
    );

    return (
        <Menu
            mode="horizontal"
            className="custom-menu-header-top"
            selectable={false}
            disabledOverflow={true}
        >
            <TooltipHeader text={"Loại tiền tệ"}>
                <Menu.Item key="money" className="custom-menu-item-header-top">
                    VND
                </Menu.Item>
            </TooltipHeader>
            <TooltipHeader text={"Ngôn ngữ của bạn"}>
                <Menu.Item key="nation" className="custom-menu-item-header-top">
                    <div className="w-6 h-6">
                        <img
                            src="https://t-cf.bstatic.com/design-assets/assets/v3.122.0/images-flags/Vn@3x.png"
                            alt=""
                            className="rounded-full"
                        />
                    </div>
                </Menu.Item>
            </TooltipHeader>
            <TooltipHeader
                text={!isLoginPage ? "Liên hệ dịch vụ khách hàng" : "Trợ giúp"}
            >
                <Menu.Item
                    key="question"
                    className="custom-menu-item-header-top w-12 h-12 flex justify-center items-center"
                >
                    <ICQuestion />
                </Menu.Item>
            </TooltipHeader>

            {/* SAU KHI ĐĂNG NHẬP  */}
            {/* <TooltipHeader text="Xem các thông báo">
                <Menu.Item key="notification" className="ant-custom-menu-item">
                    <span>
                        <ICBell />
                    </span>
                </Menu.Item>
            </TooltipHeader> */}
            {!isLoginPage && (
                <>
                    <Menu.Item
                        key="personal-property"
                        className="custom-menu-item-header-top"
                    >
                        Đăng chỗ nghỉ của bạn
                    </Menu.Item>

                    {/* CHƯA ĐĂNG NHẬP */}

                    <Menu.Item
                        key="sign-up"
                        className="custom-menu-action-header-top"
                    >
                        <span className="text-[#006CE4]">Đăng ký</span>
                    </Menu.Item>
                    <Menu.Item
                        key="sign-in"
                        className="custom-menu-action-header-top"
                        onClick={() => router.push("/sign-in")}
                    >
                        <span className="text-[#006CE4]">Đăng nhập</span>
                    </Menu.Item>
                </>
            )}

            {/* SAU KHI ĐĂNG NHẬP */}
            {/* <Popover
                content={<CustomMenuAccount />}
                trigger="click"
                open={open}
                placement="bottomRight"
                className="p-0"
                getPopupContainer={(triggerNode) =>
                    triggerNode.parentNode as HTMLElement
                }
                onOpenChange={handleOpenChange}
                arrow={false}
            >
                <Menu.Item key="account" className="ant-custom-menu-item">
                    <div className="flex items-center gap-2 p-0">
                        <div>
                            <AntCustomAvatar />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm">Tên</span>
                            <span className="text-xs text-amber-500">
                                level
                            </span>
                        </div>
                    </div>
                </Menu.Item>
            </Popover> */}
        </Menu>
    );
}

export default MenuHeaderTop;
