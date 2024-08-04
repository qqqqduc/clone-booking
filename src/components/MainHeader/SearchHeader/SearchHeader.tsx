import React from "react";
import { Input } from "antd";
import { UserOutlined } from '@ant-design/icons';

function SearchHeader() {
    return (
        <div className="search-header py-14 px-1">
            <div className="w-[1110px] m-auto">
                <h1 className="text-white text-5xl font-extrabold">
                    Tìm chỗ nghỉ tiếp theo
                </h1>
                <div className="text-2xl text-white mt-2">
                    Tìm ưu đãi khách sạn, chỗ nghỉ dạng nhà và nhiều hơn nữa...
                </div>
                <div>
                    <Input
                        size="large"
                        placeholder="large size"
                        prefix={<UserOutlined />}
                    />
                </div>
            </div>
        </div>
    );
}

export default SearchHeader;
