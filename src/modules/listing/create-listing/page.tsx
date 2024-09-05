"use client";
import React, { useState, useMemo } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import { Steps, message } from "antd";
import ICLeft from "@/components/Icons/DirectionIcons/ICLeft";
import MainStepComponent from "./MainStepComponent";
import ListingName from "./components/BasicInfo/ListingName";
import ListingAddress from "./components/BasicInfo/ListingAddress";
import RoomSetting from "./components/ListingSetting/RoomSetting";
import ListingAmenities from "./components/ListingSetting/ListingAmenities";
import ListingServices from "./components/ListingSetting/ListingServices";
import ListingRules from "./components/ListingSetting/ListingRules";

enum STEPS {
  BASIC_INFO = 0,
  Listing_SETTING = 1,
  UPLOAD_PHOTOS = 2,
  PRICE_AND_SCHEDULE = 3,
  PARTNER_INFO = 4, // thêm thông tin
  AGREEMENT = 5, // xác nhận
}

const { Step } = Steps;

export const CreateListing = () => {
  const [currentMainStep, setCurrentMainStep] = useState(STEPS.BASIC_INFO);
  const [currentSubStep, setCurrentSubStep] = useState(0);

  const [isloading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      address: null,
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
      checkinDate: new Date().toISOString(),
      checkoutDate: new Date().toISOString(),
    },
  });

  const mainSteps = [
    {
      title: "Thông tin cơ bản",
      component: (
        <MainStepComponent
          subSteps={[<ListingName />, <ListingAddress />]}
          currentSubStep={currentSubStep}
          setCurrentSubStep={setCurrentSubStep}
        />
      ),
    },
    {
      title: "Cài đặt chỗ nghỉ",
      component: (
        <MainStepComponent
          subSteps={[<RoomSetting />, <ListingAmenities />, <ListingServices />, <ListingRules />]}
          currentSubStep={currentSubStep}
          setCurrentSubStep={setCurrentSubStep}
        />
      ),
    },
  ];

  const handleNext = () => {
    const totalSubSteps =
      mainSteps[currentMainStep].component.props.subSteps.length;
    if (currentSubStep < totalSubSteps - 1) {
      setCurrentSubStep(currentSubStep + 1);
    } else if (currentMainStep < mainSteps.length - 1) {
      setCurrentMainStep(currentMainStep + 1);
      setCurrentSubStep(0);
    } else {
      message.success("Quá trình hoàn tất!");
    }
  };

  const handlePrev = () => {
    if (currentSubStep > 0) {
      setCurrentSubStep(currentSubStep - 1);
    } else if (currentMainStep > 0) {
      setCurrentMainStep(currentMainStep - 1);
      setCurrentSubStep(
        mainSteps[currentMainStep - 1].component.props.subSteps.length - 1
      );
    }
  };

  return (
    <div className="create-listing-container">
      <div className="pt-6 px-6">
        <Steps current={currentMainStep}>
          {mainSteps.map((step, index) => (
            <Step key={index} title={step.title} />
          ))}
        </Steps>
      </div>

      <div className="container lg:w-[500px] p-8 ml-[10vh]">
        <div className="steps-content">
          {mainSteps[currentMainStep].component}
        </div>

        <div className="flex mt-10 gap-[6px]">
          <button
            onClick={handlePrev}
            className="basic-info-prev-button flex justify-center items-center py-2 px-4 border-[1px] border-blue-500 rounded-md"
          >
            <ICLeft width="35px" />
          </button>

          <button
            onClick={handleNext}
            className="basic-info-next-button flex-1 text-center p-3 bg-blue-500 text-white rounded-md"
          >
            Tiếp tục
          </button>
        </div>
      </div>
    </div>
  );
};
