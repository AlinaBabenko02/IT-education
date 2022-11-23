import React from "react";
import { Text } from "../../../ui";

import s from "./styles.module.css";

export const Loop = () => (
  <div className={s.root}>
    <Text size="l" color="green1">
      When writing scripts, the task often arises to do the same type of action
      many times. For example, to display products from the list one by one. Or
      just iterate over all the numbers from 1 to 10 and execute the same code
      for each. Loops are provided to repeat the same section of code multiple
      times.
    </Text>
    <div className={s.row}>
      <img src="cat-head.svg" alt="" width="30px" />
      <Text size="l" color="green1" className={s.bold}>
        while
      </Text>
    </div>
    <Text size="l" color="green1">
      The while loop has the following syntax:
    </Text>
    <Text size="m" color="orange1">
      while (condition) {"{"}
      <br />
      ...
      <br />
      {"}"}
    </Text>
    <Text size="l" color="green1">
      For example, the loop below outputs i as long as i {"<"} 3:
    </Text>
    <Text size="m" color="orange1">
      let i = 0;
      <br />
      while (condition) {"{"}
      <br />
      alert( i );
      <br />
      i++;
      <br />
      {"}"}
    </Text>
    <div className={s.row}>
      <img src="cat-head.svg" alt="" width="30px" />
      <Text size="l" color="green1" className={s.bold}>
        do...while
      </Text>
    </div>
    <Text size="l" color="green1">
      The condition test can be placed below the body of the loop using the
      special do..while syntax:
    </Text>
    <Text size="m" color="orange1">
      do {"{"}
      <br />
      ...
      <br />
      {"}"} while (condition)
    </Text>
    <Text size="l" color="green1">
      The loop will first execute the body and then check the condition
      condition, and as long as its value is true, it will be executed again and
      again.
    </Text>
    <Text size="m" color="orange1">
      let i = 0;
      <br />
      do {"{"}
      <br />
      alert( i );
      <br />
      i++;
      <br />
      {"}"} while (i {"<"} 3)
    </Text>
    <div className={s.row}>
      <img src="cat-head.svg" alt="" width="30px" />
      <Text size="l" color="green1" className={s.bold}>
        For
      </Text>
    </div>
    <Text size="l" color="green1">
      More complex, but at the same time the most common loop is the for loop.It
      looks like this:
    </Text>
    <Text size="m" color="orange1">
      for (start; condition; step) {"{"}
      <br />
      ...
      <br />
      {"}"}
    </Text>
    <Text size="l" color="green1">
      Let's understand what each part means with an example. The loop below
      executes alert(i) for i from 0 to (but not including) 3:
    </Text>
    <Text size="m" color="orange1">
      for (let i = 0; i {"<"} 3; i++) {"{"}
      <br />
      alert(i);
      <br />
      {"}"}
    </Text>
  </div>
);
