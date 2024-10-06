import React, { useState } from "react";
import { FieldValues, UseFormRegister, FieldErrors, UseFormTrigger, UseFormSetValue } from "react-hook-form";

import Container from "../Container";
import ICLeft from "@/components/Icons/DirectionIcons/ICLeft";
import ListingName from "./ListingName";
import ListingAdress from "./ListingAddress";
import "../Component.scss";


interface BasicInfoProps {
  handleNextMainStep: () => void;
  handlePrevMainStep: () => void;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  trigger: UseFormTrigger<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
}

const BasicInfo: React.FC<BasicInfoProps> = ({
  handleNextMainStep,
  handlePrevMainStep,
  register,
  errors,
  trigger,
  setValue 
}) => {
  const [currentSubStep, setCurrentSubStep] = useState(0);

  const subSteps = [
    <ListingName register={register} errors={errors} />,
    <ListingAdress register={register} errors={errors} setValue={setValue}/>,
  ];

  const totalSubSteps = subSteps.length;

  const handleNextSubStep = async() => {
    const isValid = await trigger(["title", "postalCode","address" ]);
    if(!isValid) return;

    if (currentSubStep < totalSubSteps - 1) {
      setCurrentSubStep(currentSubStep + 1);
    } else {
      handleNextMainStep();
    }
  };

  const handlePrevSubStep = () => {
    if (currentSubStep > 0) {
      setCurrentSubStep(currentSubStep - 1);
    } else {
      handlePrevMainStep();
    }
  };

  return ( 
    <Container>
      <div className="sub-steps-content">{subSteps[currentSubStep]}</div>
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
};

export default BasicInfo;
