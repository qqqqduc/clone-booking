import React from "react";
import "./ItemsHead.scss";

interface ITitle {
  title: string;
  style?: string;
  description?: string;
}

function ItemsHead({ title, style, description }: ITitle) {
  return (
    <div className="mb-3">
      <div className={`text-2xl font-semibold ${style}`}>{title}</div>
      <div className="items-head-description">{description}</div>
    </div>
  );
}

export default ItemsHead;
