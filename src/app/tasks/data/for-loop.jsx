import React from "react";
import { Text } from "../../../ui";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";

import s from "./styles.module.css";

export const ForLoop = ({ setTaskResult }) => {
  const handleRadioChange = (event) => {
    setTaskResult(event.target.value);
  };

  return (
    <div className={s.root}>
      <Text size="l" color="red1" className={s.header}>
        How does a FOR loop start?
      </Text>
      <FormControl>
        <RadioGroup name="radio-buttons-group" onChange={handleRadioChange}>
          <FormControlLabel
            value="for1"
            control={<Radio />}
            label="for (i = 0; i <= 5; i++)"
          />
          <FormControlLabel
            value="for2"
            control={<Radio />}
            label="for (i <= 5; i++)"
          />
          <FormControlLabel
            value="for3"
            control={<Radio />}
            label="for i = 1 to 5"
          />
          <FormControlLabel
            value="for4"
            control={<Radio />}
            label=" for (i = 0; i <= 5)"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};
