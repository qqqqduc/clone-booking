import React, { ReactElement } from "react";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import ICHeart from "@/components/Icons/HeaderIcons/ICHeart";
import HouseQuantity from "./HouseQuantity/HouseQuantity";
import Image from "next/image";
import "./HouseType.scss";

interface IProps {
  image: string;
  name: string;
  description?: string;
  point?: number;
  rank?: string;
  review?: string;
  priceElement?: ReactElement;
}

function HouseType({
  image,
  name,
  description,
  point,
  rank,
  review,
  priceElement,
}: IProps) {
  return (
    <Card
      extra={<ICHeart fillColor="#333" />}
      cover={
        <Image
          fill
          alt="example" 
          src={image}
          className="object-contain"
        />
      }
      className="custom-ant-card"
    >
      <Meta title={name} description={description} />
      <HouseQuantity point={point} rank={rank} review={review} />
      {priceElement}
    </Card>
  );
}

export default HouseType;
