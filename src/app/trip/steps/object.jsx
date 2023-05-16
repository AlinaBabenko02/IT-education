import React from "react";
import cx from "classnames";
import Paper from "@mui/material/Paper";
import { Text } from "../../../ui";

import s from "./styles.module.css";

export const Object = () => (
  <div className={s.root}>
    <Text size="l" color="green1">
      An object can be created using curly braces {"{"}...{"}"} with an optional
      list of properties. A property is a key:value pair, where the key is a
      string (also called a "property name") and the value can be anything. We
      can represent the object as a box with signed folders. Each data element
      is stored in its own folder, on which the key is written. By key, the
      folder is easy to find, delete or add something to it.
      <br /> An empty object ("empty box") can be created using one of two
      syntaxes.
    </Text>
    <Text size="m" color="orange1">
      let user = new Object(); <br />
      let user = {"{"}
      {"}"};
    </Text>
    <Text size="l" color="green1">
      When using the literal syntax {"{"}...{"}"}, we can immediately put
      several properties in the object in the form of key: value pairs:
    </Text>
    <Text size="m" color="orange1">
      let user = {"{"} <br />
      name : 'John', <br />
      age : '20' <br />
      {"}"};
    </Text>
    <Text size="l" color="green1">
      The user object now has two properties: First property with name "name"
      and value "John". The second property is named "age" and has a value of
      30.
    </Text>
    <Text size="l" color="green1">
      To access properties, use the "dot" notation:
    </Text>
    <Text size="m" color="orange1">
      user.name; {"//"} John
    </Text>
    <Text size="l" color="green1">
      The most popular object methods:
    </Text>
    <Text size="m" color="orange1">
      map(), keys(), values(), freeze()
    </Text>

    <Paper elevation={10} className={cx(s.row, s.borderWithShadow)}>
      <img src="cat-heart-eyes.svg" alt="" width="50px" />
      <Text size="h1" color="red2">
        Congratulations! You know all kinds of variables in JavaScript.
      </Text>
    </Paper>
  </div>
);
