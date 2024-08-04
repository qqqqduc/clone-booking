import React from "react";
import "./RestAreaType.scss";

interface IProps {
    name?: string;
    description?: string;
}

function RestAreaType({ name, description }: IProps) {
    return (
        <div className="house-item d-block">
            <div className="rounded-lg overflow-hidden">
                <img
                    src="https://q-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o="
                    alt=""
                    className="image-house"
                />
            </div>
            <div className="mt-2 text-base font-bold">title</div>
            <div className="rest-area-type-description">mô tả</div>
        </div>
    );
}

export default RestAreaType;
