import React from "react";
import { Text } from "../../../ui";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";

import s from "./styles.module.css";

export const Comment = ({ setTaskResult }) => {
  const handleRadioChange = (event) => {
    setTaskResult(event.target.value);
  };

  return (
    <div className={s.root}>
      <Text size="l" color="red1" className={s.header}>
        How can you add a comment in a JavaScript?
      </Text>
      <FormControl>
        <RadioGroup name="radio-buttons-group" onChange={handleRadioChange}>
          <FormControlLabel
            value="comment1"
            control={<Radio />}
            label="//This is a comment"
          />
          <FormControlLabel
            value="comment2"
            control={<Radio />}
            label="<!--This is a comment-->"
          />
          <FormControlLabel
            value="comment3"
            control={<Radio />}
            label="'This is a comment"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};
