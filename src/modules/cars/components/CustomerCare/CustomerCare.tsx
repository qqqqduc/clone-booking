import React from "react";

interface IProps {
  image: string;
  title: string;
  description: string;
}

function CustomerCare({ image, title, description }: IProps) {
  return (
    <div className="flex gap-4">
      <div className="basis-1/4">
        <img
          src={image}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center">
        <div className="text-gray-900 font-bold text-base">
          {title}
        </div>
        <div className="text-gray-500 text-justify">
          {description}
        </div>
      </div>
    </div>
  );
}

export default CustomerCare;
