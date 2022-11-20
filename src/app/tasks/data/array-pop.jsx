import React from "react";
import { Text } from "../../../ui";
import { TextField } from "@material-ui/core";

import s from "./styles.module.css";

export const ArrayPop = ({ setTaskResult }) => {
  const handleInputChange = (event) => {
    setTaskResult(event.target.value);
  };

  return (
    <div className={s.root}>
      <Text size="l" color="red1" className={s.header}>
        Use the correct Array method to remove the last item of the fruits
        array.
      </Text>
      <Text size="l" className={s.header}>
        const fruits = ["Banana", "Orange", "Apple"];
      </Text>

      <TextField
        variant="standard"
        placeholder="Type here"
        onChange={handleInputChange}
      />
    </div>
  );
};
