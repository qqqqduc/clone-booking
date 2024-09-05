import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import _ from "lodash";
import MainHeader from "../MainHeader/MainHeader";
import MainFooter from "../MainFooter/MainFooter";

const { Content } = Layout;

function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div></div>
      ) : (
        <Layout className="m-0 p-0 bg-white">
          <MainHeader />
          <Content className="lg:w-11/12 md:w-full md:px-2 mx-auto sm:w-full">
            {children}
          </Content>
          <MainFooter />
        </Layout>
      )}
    </div>
  );
}

export default MainLayout;
