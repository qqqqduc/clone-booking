import React from "react";
import { Divider, Form, Input } from "antd";
import ButtonAccessMethod from "../ButtonAccessMethod/ButtonAccessMethod";
import ICFacebook from "@/components/Icons/SignInIcons/ICFacebook";
import ICGoogle from "@/components/Icons/SignInIcons/ICGoogle";
import ICApple from "@/components/Icons/SignInIcons/ICApple";
import FooterLogin from "../FooterLogin/FooterLogin";
import "./FormLogin.scss";

function FormLogin() {
    const [form] = Form.useForm<{ name: string; age: number }>();
    const nameValue = Form.useWatch("name", form);
    // The selector is static and does not support closures.
    const customValue = Form.useWatch(
        (values) => `name: ${values.name || ""}`,
        form
    );

    return (
        <div className="w-[360px] mt-5">
            <div className="text-xl font-bold mb-7">
                Đăng nhập hoặc tạo tài khoản
            </div>
            <Form form={form} layout="vertical" autoComplete="off">
                <Form.Item name="name" label={<span>Địa chỉ email</span>}>
                    <Input placeholder="Nhập địa chỉ email của bạn" />
                </Form.Item>
                <div className="flex justify-center bg-blue-600 text-white font-medium p-3 cursor-pointer hover:bg-blue-800 rounded">
                    <button className="w-full">Tiếp tục với email</button>
                </div>
            </Form>
            <Divider plain>hoặc sử dụng một trong các lựa chọn này</Divider>
            <div className="flex justify-around">
                <ButtonAccessMethod>
                    <ICFacebook />
                </ButtonAccessMethod>
                <ButtonAccessMethod>
                    <ICGoogle />
                </ButtonAccessMethod>
                <ButtonAccessMethod>
                    <ICApple />
                </ButtonAccessMethod>
            </div>
            <Divider></Divider>
            <FooterLogin />
        </div>
    );
}

export default FormLogin;
