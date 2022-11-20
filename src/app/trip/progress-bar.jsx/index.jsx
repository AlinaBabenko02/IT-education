import React from "react";
import cx from "classnames";
import { Text } from "../../../ui";

import s from "./styles.module.css";

const steps = [
  { label: "Intro", value: 0 },
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
  { label: "5", value: 5 },
  { label: "6", value: 6 },
  { label: "7", value: 7 },
  { label: "8", value: 8 },
  { label: "9", value: 9 },
  { label: "10", value: 10 },
  { label: "11", value: 11 },
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
            <Text size="m" color={currentStep === step.value && "red1"}>
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
