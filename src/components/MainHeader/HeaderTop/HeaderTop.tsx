import React from "react";
import Image from "next/image";
import MenuHeaderTop from "./MenuHeaderTop/MenuHeaderTop";
import "./HeaderTop.scss";

function HeaderTop() {
    return (
        <div className="header-top max-w-[1110px]">
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
