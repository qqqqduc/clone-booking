"use client";

import React, { useState } from "react";
import { Steps, message } from "antd";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";

import BasicInfo from "./components/BasicInfo/BasicInfo";
import Agreement from "./components/Agreement/Agreement";
import UploadPhotos from "./components/UploadPhotos/UploadPhotos";
import ListingSetting from "./components/ListingSetting/ListingSetting";
import PriceAndScheduleSaver from "./components/PriceAndScheduleSaver/PriceAndScheduleSaver";

enum STEPS {
  BASIC_INFO = 0,
  Listing_SETTING = 1,
  UPLOAD_PHOTOS = 2,
  PRICE_AND_SCHEDULE = 3,
  AGREEMENT = 4,
}

const { Step } = Steps;

export const CreateListing = () => {
  const [currentMainStep, setCurrentMainStep] = useState(STEPS.BASIC_INFO);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
    trigger,
  } = useForm<FieldValues>({
    defaultValues: {
      address: "",
      lng: null,
      lat: null,
      postalCode: "",
      title: "",
      description: "",
      hasParking: false,
      isChildFriendly: false,
      hasBreakfast: false,
      listingType: "",
      city: "",
      pricePerNight: 10000,
      bedroomsCount: 1,
      bathroomsCount: 1,
      guestsCount: 1,
      amenities: [],
      generalRules: [],
      group: "",
      checkinTime: null,
      checkoutTIme: null,
      area: null,
    },
  });

  const handleNextMainStep = () => {
    if (currentMainStep < mainSteps.length - 1) {
      setCurrentMainStep(currentMainStep + 1);
    } else {
      message.success("Bạn đã hoàn thành tất cả các bước!");
    }
  };

  const handlePrevMainStep = () => {
    if (currentMainStep > 0) {
      setCurrentMainStep(currentMainStep - 1);
    }
  };

  // submit
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    message.success("Listing đã được tạo thành công!");
  };

  const mainSteps = [
    {
      title: "Thông tin cơ bản",
      component: (
        <BasicInfo
          handleNextMainStep={handleNextMainStep}
          handlePrevMainStep={handlePrevMainStep}
          register={register}
          errors={errors}
          trigger={trigger}
          setValue={setValue}
        />
      ),
    },
    {
      title: "Cài đặt chỗ nghỉ",
      component: (
        <ListingSetting
          handleNextMainStep={handleNextMainStep}
          handlePrevMainStep={handlePrevMainStep}
          register={register}
          errors={errors}
          trigger={trigger}
          setValue={setValue}
        />
      ),
    },
    {
      title: "Ảnh",
      component: (
        <UploadPhotos
          handleNextMainStep={handleNextMainStep}
          handlePrevMainStep={handlePrevMainStep}
        />
      ),
    },
    {
      title: "Giá và lịch",
      component: (
        <PriceAndScheduleSaver
          handleNextMainStep={handleNextMainStep}
          handlePrevMainStep={handlePrevMainStep}
        />
      ),
    },
    {
      title: "Xác nhận",
      component: (
        <Agreement
          handleNextMainStep={handleNextMainStep}
          handlePrevMainStep={handlePrevMainStep}
          onSubmit={handleSubmit(onSubmit)}
        />
      ),
    },
  ];

  return (
    <div className="create-listing-bg">
      <div className="pt-6 px-6">
        <Steps current={currentMainStep}>
          {mainSteps.map((step, index) => (
            <Step key={index} title={step.title} />
          ))}
        </Steps>
      </div>

      <div className="main-steps-content">
        {mainSteps[currentMainStep].component}
      </div>
    </div>
  );
};
