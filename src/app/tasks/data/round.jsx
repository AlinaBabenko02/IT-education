import React from "react";
import { Text } from "../../../ui";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";

import s from "./styles.module.css";

export const Round = ({ setTaskResult }) => {
  const handleRadioChange = (event) => {
    setTaskResult(event.target.value);
  };

  return (
    <div className={s.root}>
      <Text size="l" color="red1" className={s.header}>
        How do you round the number 7.25, to the nearest integer?
      </Text>
      <FormControl>
        <RadioGroup name="radio-buttons-group" onChange={handleRadioChange}>
          <FormControlLabel
            value="round"
            control={<Radio />}
            label="round(7.25)"
          />
          <FormControlLabel value="rnd" control={<Radio />} label="rnd(7.25)" />
          <FormControlLabel
            value="Math.round"
            control={<Radio />}
            label="Math.round(7.25)"
          />
          <FormControlLabel
            value="Math.rnd"
            control={<Radio />}
            label="Math.rnd(7.25)"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};
