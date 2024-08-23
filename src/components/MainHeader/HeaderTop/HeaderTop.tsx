import React from "react";
import Image from "next/image";
import MenuHeaderTop from "./MenuHeaderTop/MenuHeaderTop";

function HeaderTop() {
  return (
    <div className="flex justify-between items-center px-4 text-white h-20 lg:w-11/12 mx-auto">
      <div>
        <Image src="/img/logo.svg" alt="" width={144} height={24} />
      </div>
      <div className="flex justify-center items-center">
        <MenuHeaderTop />
      </div>
    </div>
  );
}

export default HeaderTop;
