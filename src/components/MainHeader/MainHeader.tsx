import React from "react";
import { Layout } from "antd";
import MenuHeaderBottom from "./MenuHeaderBottom/MenuHeaderBottom";
import { usePathname } from "next/navigation";
import { routesList } from "@/routes/routesList";
import _ from "lodash";
import SearchHeader from "./SearchHeader/SearchHeader";
import HeaderTop from "./HeaderTop/HeaderTop";
import "./MainHeader.scss";

const { Header } = Layout;

function MainHeader() {
    const pathname = usePathname();
    const isLoginPage = routesList.find(
        (route) => route.path === pathname && route.isLoginPage
    );

    return (
        <Header className="custom-ant-header">
            <div className="px-4">
                <HeaderTop />
                {!isLoginPage && <MenuHeaderBottom />}
            </div>
            {!isLoginPage && <SearchHeader />}
        </Header>
    );
}

export default MainHeader;
