import React from "react";
import { Text } from "../../../ui";

import s from "./styles.module.css";

export const Operators = () => (
  <div className={s.root}>
    <Text size="h1" color="green1">
      Javascript is a smart language and it knows simple math! Therefore, you
      can use all mathematical operators to work with numbers. Their meaning of
      the property and priority remains unchanged.
    </Text>
    <div className={s.row}>
      <img src="cat-head.svg" alt="" width="30px" />
      <Text size="l" color="red1">
        Addition +
      </Text>
    </div>
    <div className={s.row}>
      <img src="cat-head.svg" alt="" width="30px" />
      <Text size="l" color="red1">
        Subtraction -
      </Text>
    </div>
    <div className={s.row}>
      <img src="cat-head.svg" alt="" width="30px" />
      <Text size="l" color="red1">
        Multiplication *
      </Text>
    </div>
    <div className={s.row}>
      <img src="cat-head.svg" alt="" width="30px" />
      <Text size="l" color="red1">
        Division /
      </Text>
    </div>
    <div className={s.row}>
      <img src="cat-head.svg" alt="" width="30px" />
      <Text size="l" color="red1">
        Taking the remainder of division %
      </Text>
    </div>
    <div className={s.row}>
      <img src="cat-head.svg" alt="" width="30px" />
      <Text size="l" color="red1">
        Exponentiation **
      </Text>
    </div>
    <Text size="l" color="green1" className={s.bold}>
      Comparison Operators (All comparison operators return a boolean value)
    </Text>
    <div className={s.row}>
      <img src="cat-head.svg" alt="" width="30px" />
      <Text size="l" color="red1">
        More/less: a {">"} b, a {"<"} b.
      </Text>
    </div>
    <div className={s.row}>
      <img src="cat-head.svg" alt="" width="30px" />
      <Text size="l" color="red1">
        Greater than/less than or equal to: a {">="} b, a {"<="} b.
      </Text>
    </div>
    <div className={s.row}>
      <img src="cat-head.svg" alt="" width="30px" />
      <Text size="l" color="red1">
        Equals: a == b. Note that the double equal sign == is used for
        comparison. A single equal sign a = b would mean an assignment.
      </Text>
    </div>
    <div className={s.row}>
      <img src="cat-head.svg" alt="" width="30px" />
      <Text size="l" color="red1">
        Not equal. In mathematics it is denoted by the symbol ≠, but in
        JavaScript it is written as a != b.
      </Text>
    </div>
    <Text size="l" color="green1" className={s.bold}>
      Logical operators
    </Text>
    <div className={s.row}>
      <img src="cat-head.svg" alt="" width="30px" />
      <Text size="l" color="red1">
        || (OR)
      </Text>
    </div>
    <div className={s.row}>
      <img src="cat-head.svg" alt="" width="30px" />
      <Text size="l" color="red1">
        && (AND)
      </Text>
    </div>
    <div className={s.row}>
      <img src="cat-head.svg" alt="" width="30px" />
      <Text size="l" color="red1">
        ! (NO)
      </Text>
    </div>
  </div>
);
