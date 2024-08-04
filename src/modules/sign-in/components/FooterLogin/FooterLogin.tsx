import React from "react";

function FooterLogin() {
    return (
        <div>
            <div className="text-xs text-center mb-3">
                Qua việc đăng nhập hoặc tạo tài khoản, bạn đồng ý với các{" "}
                <a
                    href="#"
                    className="text-[#006ce4] hover:text-[#006ce4] hover:underline"
                >
                    Điều khoản và Điều kiện
                </a>{" "}
                cũng như
                <a
                    href="#"
                    className="text-[#006ce4] hover:text-[#006ce4] hover:underline"
                >
                    {" "}
                    Chính sách An toàn và Bảo mật{" "}
                </a>
                của chúng tôi
            </div>
            <div className="text-xs text-center">
                Bảo lưu mọi quyền. <br></br>Bản quyền (2006 - 2024) -
                Booking.com™
            </div>
        </div>
    );
}

export default FooterLogin;
