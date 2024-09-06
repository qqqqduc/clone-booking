import React from "react";
import { Layout } from "antd";
import MenuHeaderBottom from "./MenuHeaderBottom/MenuHeaderBottom";
import { usePathname } from "next/navigation";
import { routesList } from "@/routes/routesList";
import _ from "lodash";
import SearchHeader from "./SearchHeader/SearchHeader";
import HeaderTop from "./HeaderTop/HeaderTop";
import SearchBox from "./SearchBox/SearchBox";
import "./MainHeader.scss";

const { Header } = Layout;

function MainHeader() {
  const pathname = usePathname();
  const isLoginPage = routesList.find(
    (route) => pathname.includes(route.path) && route.isLoginPage
  );

  return (
    <Header className="custom-ant-header relative">
      <div className="px-4">
        <HeaderTop />
        {!isLoginPage && <MenuHeaderBottom />}
      </div>
      {!isLoginPage && (
        <>
          <SearchHeader />
          <SearchBox />
        </>
      )}
    </Header>
  );
}

export default MainHeader;
