import React, { useState } from "react";
import Container from "../Container";
import ICLeft from "@/components/Icons/DirectionIcons/ICLeft";
import Price from "./Price";
import Schedule from "./Schedule";

import "../Component.scss";

enum STEPS {
  Listing_NAME = 0,
  Listing_ADDRESS = 1,
}

interface PriceAndScheduleSaverProps {
  handleNextMainStep: () => void;
  handlePrevMainStep: () => void;
}

const PriceAndScheduleSaver: React.FC<PriceAndScheduleSaverProps> = ({
  handleNextMainStep,
  handlePrevMainStep,
}) => {
  const [currentSubStep, setCurrentSubStep] = useState(STEPS.Listing_NAME);

  const subSteps = [<Price />, <Schedule />];

  const totalSubSteps = subSteps.length;

  const handleNextSubStep = () => {
    //validate
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

  const handlePrev = () => {};
  return (
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
  );
};

export default PriceAndScheduleSaver;
