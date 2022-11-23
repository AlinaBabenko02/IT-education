import React from "react";
import { Text } from "../../../ui";

import s from "./styles.module.css";

export const If = () => (
  <div className={s.root}>
    <Text size="l" color="green1">
      Sometimes we need to perform different actions depending on conditions. To
      do this, we can use the if statement and the conditional operator ?, which
      is also called the "question mark" operator.
    </Text>
    <Text size="l" color="red1" className={s.bold}>
      If-else
    </Text>
    <Text size="l" color="green1">
      The if(...) statement evaluates the condition in the parentheses and, if
      the result is true, executes the block of code.
    </Text>
    <Text size="m" color="orange1">
      let year = 2022;
      <br />
      if (year === 2022) alert('Now is 2022!')
    </Text>
    <Text size="l" color="green1">
      The if statement may contain an optional "else" block ("otherwise").It is
      executed when the condition is false.
    </Text>
    <Text size="m" color="orange1">
      let year;
      <br />
      ....
      <br />
      if (year === 2022) {"{"} <br />
      alert('Year is 2022!') <br />
      {"}"} else {"{"} <br />
      alert('Year is not 2022!') <br />
      {"}"}
    </Text>
    <Text size="l" color="green1">
      Multiple conditions: "else if" Sometimes, you need to check several
      variants of a condition. For this, the else if block is used.
    </Text>
    <Text size="m" color="orange1">
      let year;
      <br />
      ....
      <br />
      if (year === 2022) {"{"} <br />
      alert('Year is 2022!') <br />
      {"}"} else if(year === 2019){"{"} <br />
      alert('Year is 2019!') <br />
      {"}"} else if(year === 2010){"{"} <br />
      alert('Year is 2010!') <br />
      {"}"}
    </Text>
    <Text size="l" color="red1" className={s.bold}>
      Conditional operator "?"
    </Text>

    <Text size="l" color="green1">
      Sometimes we need to define a variable depending on a condition. The
      so-called "conditional" operator "question mark" allows us to do this in a
      shorter and simpler way. The operator is represented by a question mark ?.
      It is also called "ternary" because this operator, the only one of its
      kind, has three arguments.
    </Text>
    <Text size="m" color="orange1">
      let year; <br />
      ....
      <br />
      if (year === 2022) {"{"} <br />
      alert('Year is 2022!') <br />
      {"}"} else {"{"} <br />
      alert('Year is not 2022!') <br />
      {"}"}
    </Text>
    <Text size="l" color="green1">
      Syntax:
    </Text>
    <Text size="m" color="orange1">
      let year; <br />
      ....
      <br />
      console.log(year === 2022 ? 'Year is 2022!' : 'Year is not 2022!')
    </Text>
  </div>
);
