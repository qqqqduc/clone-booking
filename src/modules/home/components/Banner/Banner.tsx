import React from "react";
import "./Banner.scss";

function Banner() {
    return (
        <div className="relative h-[396px]">
            <div className="banner">
                <div className="content">
                    <div className="title">Chốn thiên đường dành cho bạn</div>
                    <p className="sub-title">
                        Đặt nhà, biệt thự, cabin nguyên căn và hơn thế
                    </p>
                    <a href="#" className="explore-btn">
                        Khám phá nhà nghỉ dưỡng
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Banner;
