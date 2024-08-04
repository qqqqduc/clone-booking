import React from "react";
import Image from "next/image";
import MenuHeaderTop from "./MenuHeaderTop/MenuHeaderTop";

function HeaderTop() {
    return (
        <div className="header-top">
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
