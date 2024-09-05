interface MainStepComponentProps {
  subSteps: Array<any>;
  currentSubStep: number;
  setCurrentSubStep: React.Dispatch<React.SetStateAction<number>>;
}


function MainStepComponent({
  subSteps,
  currentSubStep,
  setCurrentSubStep,
}: MainStepComponentProps) {
  const totalSubSteps = subSteps.length;
  const progressPercent = ((currentSubStep + 1) / totalSubSteps) * 100;

  return (
    <div className="steps-content">
      <h3>{subSteps[currentSubStep]}</h3>
    </div>
  );
}

export default MainStepComponent;
