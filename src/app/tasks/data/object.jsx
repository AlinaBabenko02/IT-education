import React from "react";
import { Text } from "../../../ui";
import { TextField } from "@material-ui/core";

import s from "./styles.module.css";

export const Object = ({ setTaskResult }) => {
  const handleInputChange = (event) => {
    setTaskResult(event.target.value);
  };

  return (
    <div className={s.root}>
      <Text size="l" color="red1" className={s.header}>
        How do yo get "John" from the person object?
      </Text>
      <Text size="l" className={s.header}>
        const person = {"{"}
        <br />
        firstName: "John",
        <br />
        lastName: "Doe"
        <br />
        {"}"};
      </Text>

      <TextField
        variant="standard"
        placeholder="Type here"
        onChange={handleInputChange}
      />
    </div>
  );
};
