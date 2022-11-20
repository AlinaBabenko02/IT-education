import React from "react";
import { Text } from "../../../ui";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";

import s from "./styles.module.css";

export const CreateFunc = ({ setTaskResult }) => {
  const handleRadioChange = (event) => {
    setTaskResult(event.target.value);
  };

  return (
    <div className={s.root}>
      <Text size="l" color="red1" className={s.header}>
        How do you create a function in JavaScript?
      </Text>
      <FormControl>
        <RadioGroup name="radio-buttons-group" onChange={handleRadioChange}>
          <FormControlLabel
            value="equal"
            control={<Radio />}
            label={"function = myFunc()"}
          />
          <FormControlLabel
            value="create"
            control={<Radio />}
            label="myFunc = () => {}"
          />
          <FormControlLabel
            value="false"
            control={<Radio />}
            label="function : myFunc()"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};
