import React from "react";
import Image from "next/image";
import MenuHeaderTop from "./MenuHeaderTop/MenuHeaderTop";
import "./HeaderTop.scss";
import Link from "next/link";

function HeaderTop() {
    return (
        <div className="header-top">
            <Link href="/">
                <Image src="/img/logo.svg" alt="" width={144} height={24} />
            </Link>
            <div className="flex justify-center items-center">
                <MenuHeaderTop />
            </div>
        </div>
    );

export default HeaderTop;
