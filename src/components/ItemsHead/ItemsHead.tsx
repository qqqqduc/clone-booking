import React from "react";

interface ITitle {
  title: string;
  style?: string;
  description?: string;
}

function ItemsHead({ title, style, description }: ITitle) {
  return (
    <div className="mb-3">
      <div className={`text-gray-900 text-2xl font-semibold ${style}`}>{title}</div>
      <div className="mt-1 text-gray-500">{description}</div>
    </div>
  );
}

export default ItemsHead;
