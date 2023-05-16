import React from "react";
import Paper from "@mui/material/Paper";
import { Text } from "../../../ui";

import s from "./styles.module.css";

export const Variables = () => (
  <div className={s.root}>
    <Text size="l" color="green1">
      A variable is a "named store" for data. We can use variables to store
      products, visitors, and other data. To create a variable in JavaScript,
      use the let keyword. The following statement creates a variable called
      "cat":
    </Text>
    <Text size="m" color="orange1">
      let cat;
    </Text>
    <Text size="l" color="green1">
      Now you can put data into it using the assignment operator =:
    </Text>
    <Text size="m" color="orange1">
      let cat;
      <br />
      cat = 'Kitty';
    </Text>
    <Text size="l" color="green1">
      To declare a const, that is, immutable variable, use const instead of let:
      Variables declared with const are called "consts". They cannot be changed.
    </Text>
    <Text size="m" color="orange1">
      const myBirthday = '18.04.1982';
    </Text>
    <Text size="l" color="green1">
      A variable can only be declared once. When the value changes, the old data
      is removed from the variable: Redeclaring the same variable is an error.
    </Text>
    <Paper elevation={10} className={s.borderWithShadow}>
      <Text size="m" color="red1">
        In older scripts, you can also find another keyword: var instead of let:
      </Text>
      <Text size="m" color="orange1">
        var message = 'Hello';
      </Text>
      <Text size="m" color="red1">
        The var keyword is almost the same as let. It declares a variable, but
        in a slightly different, "legacy" way.
      </Text>
    </Paper>
    <Text size="m" color="red1">
      There is a list of reserved words that cannot be used as variable names
      because they are used by the language itself. <br />
      For example: let , class , return and function are reserved.
    </Text>
  </div>
);
