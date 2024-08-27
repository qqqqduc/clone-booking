import { IRoutesList, routesList } from "@/routes/routesList";
import { Footer } from "antd/es/layout/layout";
import { usePathname } from "next/navigation";
import FooterTop from "./FooterTop/FooterTop";
import FooterBottom from "./FooterBottom/FooterBottom";

function MainFooter() {
  const pathname = usePathname();
  const isLoginPage = routesList.find(
    (route: IRoutesList) => route.path === pathname && route.isLoginPage
  );
  return (
    <>
      {!isLoginPage && (
        <Footer className="flex flex-col gap-y-5 px-0">
          <FooterTop />
          <div className="bg-gray-200 lg:w-11/12 lg:mx-auto md:mx-3 h-[1px]"></div>
          <FooterBottom />
        </Footer>
      )}
    </>
  );
}

export default MainFooter;
