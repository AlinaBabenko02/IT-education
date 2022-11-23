import React from "react";
import cx from "classnames";
import { Text } from "../../../ui";

import s from "./styles.module.css";

const steps = [
  { label: "Intro", value: 0 },
  { label: "Basics", value: 1 },
  { label: "Variables", value: 2 },
  { label: "Types", value: 3 },
  { label: "Array", value: 4 },
  { label: "Object", value: 5 },
  { label: "Operators", value: 6 },
  { label: "If", value: 7 },
  { label: "loop", value: 8 },
  { label: "Functions", value: 9 },
  { label: "Finish", value: 10 },
];

export const ProgressBar = () => {
  const currentStep = 6;
  return (
    <div className={s.root}>
      {steps.map((step) => (
        <>
          <div
            className={cx(
              s.block,
              currentStep === step.value && s.blockCurrent,
              currentStep < step.value && s.blockFuture
            )}
          >
            <img src="track-cat.svg" alt="" />
            <Text size="s" color={currentStep === step.value && "red1"}>
              {step.label}
            </Text>
          </div>
          {step.value !== steps.length - 1 && (
            <div
              className={cx(s.line, currentStep <= step.value && s.lineFuture)}
            />
          )}
        </>
      ))}
    </div>
  );
};
