import React from "react";
import { Text } from "../../../ui";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";

import s from "./styles.module.css";

export const Array = ({ setTaskResult }) => {
  const handleRadioChange = (event) => {
    setTaskResult(event.target.value);
  };

  return (
    <div className={s.root}>
      <Text size="l" color="red1" className={s.header}>
        What is the correct way to write a JavaScript array?
      </Text>
      <FormControl>
        <RadioGroup name="radio-buttons-group" onChange={handleRadioChange}>
          <FormControlLabel
            value="array1"
            control={<Radio />}
            label="var colors = (1:'red', 2:'green', 3:'blue')"
          />
          <FormControlLabel
            value="array2"
            control={<Radio />}
            label="var colors = ['red', 'green', 'blue']"
          />
          <FormControlLabel
            value="array3"
            control={<Radio />}
            label="var colors ='red', 'green', 'blue'"
          />
          <FormControlLabel
            value="array4"
            control={<Radio />}
            label="var colors =1='red',2='green',3='blue'"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};
