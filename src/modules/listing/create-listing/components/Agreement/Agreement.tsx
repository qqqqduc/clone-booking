import React, { useState } from "react";

import Heading from "../Heading";
import Container from "../Container";
import ICLeft from "@/components/Icons/DirectionIcons/ICLeft";

import "../Component.scss";

interface AgreenentProps {
  handleNextMainStep: () => void;
  handlePrevMainStep: () => void;
  onSubmit: ()=> void;
}

function Agreement({ handleNextMainStep, handlePrevMainStep, onSubmit }: AgreenentProps) {
  const [currentSubStep, setCurrentSubStep] = useState(0);

  const subSteps = [];

  const totalSubSteps = subSteps.length;
  const handleNextSubStep = () => {
  
    if (currentSubStep < totalSubSteps - 1) {
      setCurrentSubStep(currentSubStep + 1);
    } else {
      handleNextMainStep();
    }
  };

  const handlePrevSubStep = () => {
    //validate
    if (currentSubStep > 0) {
      setCurrentSubStep(currentSubStep - 1);
    } else {
      handlePrevMainStep();
    }
  };
  return (
    <Container>
      <Heading title="Quý vị gần xong rồi" size="3xl" bottom={4} />
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h3 className="text-lg font-medium mb-6">
          Quý vị đăng chỗ nghỉ với tư cách doanh nghiệp hay cá nhân?
        </h3>

        <div className="mb-4">
          <label className="flex items-center mb-1">
            <input
              type="radio"
              name="role"
              value="individual"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500"
            />
            <span className="ml-2">Cá nhân</span>
          </label>
          <p className="text-sm text-gray-500 ml-6">
            Một cá nhân hoặc chủ sở hữu duy nhất là người tự làm chủ và điều
            hành một doanh nghiệp không có tư cách pháp nhân.
          </p>
        </div>

        <div className="mb-4">
          <label className="flex items-center mb-1">
            <input
              type="radio"
              name="role"
              value="business"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500"
            />
            <span className="ml-2">Doanh nghiệp</span>
          </label>
          <p className="text-sm text-gray-500 ml-6">
            Một chủ thể kinh doanh có thể được sở hữu bởi nhiều cá nhân, chẳng
            hạn như công ty hợp danh, công ty đại chúng hoặc tư nhân, tổ chức
            phi lợi nhuận, v.v.
          </p>
        </div>

        <h2 className="text-xl font-medium text-gray-800 mb-4">
          Nơi cư trú chính
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Địa chỉ dòng 1<span className="custom-required-input">*</span>
          </label>
          <input
            type="text"
            className="w-full border-2 border-gray-300 rounded-md px-3 py-2 outline-none focus:border-blue-600 focus:border-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Địa chỉ dòng 2
          </label>
          <input
            type="text"
            className="w-full border-2 border-gray-300 rounded-md px-3 py-2 outline-none focus:border-blue-600 focus:border-2"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Thành phố<span className="custom-required-input"> *</span>
            </label>
            <input
              type="text"
              className="w-full border-2 border-gray-300 rounded-md px-3 py-2 outline-none focus:border-blue-600 focus:border-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Mã bưu chính
            </label>
            <input
              type="text"
              className="w-full border-2 border-gray-300 rounded-md px-3 py-2 outline-none focus:border-blue-600 focus:border-2"
            />
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-medium text-gray-800 mb-4">
          Thông tin cá nhân của bên ký kết hợp đồng
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Tên gọi theo đúng giấy tờ tùy thân
            <span className="custom-required-input"> *</span>
          </label>
          <input
            type="text"
            className="w-full border-2 border-gray-300 rounded-md px-3 py-2 outline-none focus:border-blue-600 focus:border-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Họ theo đúng giấy tờ tùy thân
            <span className="custom-required-input"> *</span>
          </label>
          <input
            type="text"
            className="w-full border-2 border-gray-300 rounded-md px-3 py-2 outline-none focus:border-blue-600 focus:border-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Email<span className="custom-required-input"> *</span>
          </label>
          <input
            type="email"
            className="w-full border-2 border-gray-300 rounded-md px-3 py-2 outline-none focus:border-blue-600 focus:border-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Số điện thoại<span className="custom-required-input"> *</span>
          </label>
          <div className="flex items-center">
            <input
              type="tel"
              className="w-full border-2 border-gray-300 rounded-md px-3 py-2 outline-none focus:border-blue-600 focus:border-2"
            />
          </div>
        </div>
      </div>

      <div className="flex mt-10 gap-[6px]">
        <button
          onClick={handlePrevSubStep}
          className="create-listing-prev-button flex justify-center items-center py-2 px-4 border-[1px] border-blue-500 rounded-md"
        >
          <ICLeft width="35px" />
        </button>

        <button
          onClick={handleNextSubStep}
          className="create-listing-next-button flex-1 text-center p-3 bg-blue-500 text-white rounded-md"
        >
          Tiếp tục
        </button>
      </div>
    </Container>
  );
}

export default Agreement;
