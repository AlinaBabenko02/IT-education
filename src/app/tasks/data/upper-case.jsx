import React from "react";
import { Text } from "../../../ui";
import { TextField } from "@material-ui/core";

import s from "./styles.module.css";

export const UpperCase = ({ setTaskResult }) => {
  const handleInputChange = (event) => {
    setTaskResult(event.target.value);
  };

  return (
    <div className={s.root}>
      <Text size="l" color="red1" className={s.header}>
        Convert the value of txt to upper case.
      </Text>
      <Text size="l" className={s.header}>
        let txt = "Hello World";
      </Text>

      <TextField
        variant="standard"
        placeholder="Type here"
        onChange={handleInputChange}
      />
    </div>
  );
};
