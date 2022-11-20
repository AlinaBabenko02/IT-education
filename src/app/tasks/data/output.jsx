import React from "react";
import { Text } from "../../../ui";
import { TextField } from "@material-ui/core";

import s from "./styles.module.css";

export const Output = ({ setTaskResult }) => {
  const handleInputChange = (event) => {
    setTaskResult(event.target.value);
  };

  return (
    <div className={s.root}>
      <Text size="l" color="red1" className={s.header}>
        What will be the output of the following JavaScript code?
      </Text>
      <Text size="l" className={s.header}>
        for(var i=1; i{"<"}5; i++)
        <br />
        console.log(x);
      </Text>

      <TextField
        variant="standard"
        placeholder="Type here"
        onChange={handleInputChange}
      />
    </div>
  );
};
