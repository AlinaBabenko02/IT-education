import React from "react";
import { Text } from "../../../ui";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";

import s from "./styles.module.css";

export const Alert = ({ setTaskResult }) => {
  const handleRadioChange = (event) => {
    setTaskResult(event.target.value);
  };

  return (
    <div className={s.root}>
      <Text size="l" color="red1" className={s.header}>
        How do you write "Hello World" in an alert box?
      </Text>
      <FormControl>
        <RadioGroup name="radio-buttons-group" onChange={handleRadioChange}>
          <FormControlLabel
            value="alertBox"
            control={<Radio />}
            label="alertBox('Hello World')"
          />
          <FormControlLabel
            value="msgBox"
            control={<Radio />}
            label="msgBox('Hello World')"
          />
          <FormControlLabel
            value="msg"
            control={<Radio />}
            label="msg('Hello World')"
          />
          <FormControlLabel
            value="alert"
            control={<Radio />}
            label="alert('Hello World')"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};
