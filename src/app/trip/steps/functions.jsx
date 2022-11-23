import React from "react";
import { Text } from "../../../ui";

import s from "./styles.module.css";

export const Functions = () => (
  <div className={s.root}>
    <Text size="l" color="green1">
      Often we need to repeat the same action in many parts of the program. For
      example, you need to beautifully display a message when greeting a
      visitor, when a visitor leaves the site, or somewhere else. In order not
      to repeat the same code in many places, functions were invented. Functions
      are the basic "building blocks" of a program.
    </Text>
    <Text size="l" color="red2">
      Examples of built-in functions you have already seen are alert(message),
      prompt(message, default) and confirm(question). But you can also create
      your own.
    </Text>
    <Text size="l" color="green1">
      To create functions, we can use a function declaration.
    </Text>
    <Text size="m" color="orange1">
      function name(arguments) {"{"}
      <br />
      ...body...
      <br />
      {"}"}
    </Text>
    <Text size="l" color="green1">
      There is another very simple and concise syntax for creating functions
      that is often better than Function Expression. It is called "arrow
      functions" or "arrow functions" (arrow functions), because as follows:
    </Text>
    <Text size="m" color="orange1">
      let func = (arg1, arg2, ...argN) {"=>"} expression;
    </Text>
  </div>
);
