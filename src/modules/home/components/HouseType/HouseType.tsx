import React, { ReactElement } from "react";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import ICHeart from "@/components/Icons/HeaderIcons/ICHeart";
import HouseQuantity from "./HouseQuantity/HouseQuantity";
import "./HouseType.scss";

interface IProps {
    width?: number;
    priceElement?: ReactElement;
}

function HouseType({ width, priceElement }: IProps) {
    return (
        <Card
            extra={<ICHeart fillColor="#333" />}
            style={{ width: width }}
            cover={
                <img
                    alt="example"
                    src="https://cf.bstatic.com/xdata/images/hotel/square600/573101946.webp?k=5d95af7b1c22dc3d7e83cb919332b56aeba4fda4f856b00957853fc5361a0c13&o="
                />
            }
            className="custom-antd-card mx-2"
        >
            <Meta title="Home stay in Ha Nam" description="Phủ Lý" />
            <HouseQuantity />
            
            {priceElement}
        </Card>
    );
}

export default HouseType;
