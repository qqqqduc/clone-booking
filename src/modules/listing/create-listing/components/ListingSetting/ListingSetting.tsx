import React, { useState } from "react";
import {
  FieldValues,
  UseFormRegister,
  FieldErrors,
  UseFormTrigger,
  UseFormSetValue,
} from "react-hook-form";

import Container from "../Container";
import ICLeft from "@/components/Icons/DirectionIcons/ICLeft";
import RoomSetting from "./RoomSetting";
import ListingServices from "./ListingServices";
import ListingRules from "./ListingRules";
import ListingAmenities from "./ListingAmenities";
import ListingDescription from "./ListingDescription";
import "../Component.scss";

interface ListingSettingProps {
  handleNextMainStep: () => void;
  handlePrevMainStep: () => void;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  trigger: UseFormTrigger<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
}

const ListingSetting: React.FC<ListingSettingProps> = ({
  handleNextMainStep,
  handlePrevMainStep,
  register,
  errors,
  trigger,
  setValue,
}) => {
  const [currentSubStep, setCurrentSubStep] = useState(0);

  const subSteps = [
    <RoomSetting register={register} errors={errors} setValue={setValue} />,
    <ListingAmenities setValue={setValue}/>,
    <ListingServices setValue={setValue}/>,
    <ListingRules setValue={setValue}/>,
    <ListingDescription setValue={setValue}/>,
  ];

  const totalSubSteps = subSteps.length;

  const handleNextSubStep = async () => {
    const isValid = await trigger(["area"]);
    if (!isValid) return;
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
    <>
      <Container>
        <div className="steps-content">{subSteps[currentSubStep]}</div>
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
    </>
  );
};

export default ListingSetting;
