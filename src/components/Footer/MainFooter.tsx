import React from "react";
import { IRoutesList, routesList } from "@/routes/routesList";
import { Divider } from "antd";
import { Footer } from "antd/es/layout/layout";
import { usePathname } from "next/navigation";
import FooterTop from "./FooterTop/FooterTop";
import FooterBottom from "./FooterBottom/FooterBottom";
import "./MainFooter.scss";

function MainFooter() {
    const pathname = usePathname();
    const isLoginPage = routesList.find(
        (route: IRoutesList) => route.path === pathname && route.isLoginPage
    );
    return (
        <>
            {!isLoginPage && (
                <Footer className="px-0 w-full">
                    <FooterTop />
                    <Divider />
                    <FooterBottom />
                </Footer>
            )}
        </>
    );
}

export default MainFooter;
