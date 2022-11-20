import React from "react";
import { Text } from "../../../ui";
import { TextField } from "@material-ui/core";

import s from "./styles.module.css";

export const Boolean = ({ setTaskResult }) => {
  const handleInputChange = (event) => {
    setTaskResult(event.target.value);
  };

  return (
    <div className={s.root}>
      <Text size="l" color="red1" className={s.header}>
        What will the following code return: Boolean(10 {">"} 9)
      </Text>

      <TextField
        variant="standard"
        placeholder="Type here"
        onChange={handleInputChange}
      />
    </div>
  );
};
