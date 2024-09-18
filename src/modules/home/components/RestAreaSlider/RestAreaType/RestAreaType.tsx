import React from "react";
import Link from "next/link";

interface IProps {
  image: string;
  name: string;
  description?: string;
}

function RestAreaType({ image, name, description }: IProps) {
  return (
    <Link href="/hotel" className="house-item inline-block w-full">
      <div className="rounded-lg overflow-hidden">
        <img
          src={image}
          alt=""
          className="w-full object-contain"
        />
      </div>
      <div className="mt-2 text-base font-bold">{name}</div>
      <div className="text-gray-600 text-sm">{description}</div>
    </Link>
  );
}

export default RestAreaType;
