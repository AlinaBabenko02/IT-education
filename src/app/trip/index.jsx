import React from "react";
import { Button } from "../../ui";
import { ProgressBar } from "./progress-bar/index.jsx";
import { stepsData } from "./steps/index";

import s from "./styles.module.css";

export const JSTrip = () => {
  const currentStep = +localStorage.getItem("currentStep");
  const openedStep = +localStorage.getItem("openedStep");
  const handlePreviousStep = () => {
    localStorage.setItem("currentStep", currentStep - 1);
    window.location.reload();
  };
  const handleNextStep = () => {
    localStorage.setItem("currentStep", currentStep + 1);
    if (currentStep + 1 > openedStep) {
      localStorage.setItem("openedStep", openedStep + 1);
    }
    window.location.reload();
  };
  return (
    <div className={s.root}>
      <ProgressBar />
      {stepsData[currentStep]}
      <div className={s.buttons}>
        <Button
          type="orange"
          onClick={handlePreviousStep}
          className={currentStep === 0 && s.hidden}
        >
          Previous step
        </Button>

        <Button
          onClick={handleNextStep}
          className={currentStep === 10 && s.hidden}
        >
          Next step
        </Button>
      </div>
    </div>
  );
};
