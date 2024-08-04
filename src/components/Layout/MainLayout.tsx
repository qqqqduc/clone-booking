import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import _ from "lodash";
import MainHeader from "../MainHeader/MainHeader";
import MainFooter from "../Footer/MainFooter";
import "./MainLayout.scss";


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
                <Layout style={{ margin: 0, padding: 0, background: "#fff" }}>
                    <MainHeader />
                    <Content className="custom-ant-content">{children}</Content>
                    <MainFooter />
                </Layout>
            )}
        </div>
    );
}

export default MainLayout;
