import React from "react";
import { Text } from "../../../ui";

import s from "./styles.module.css";

export const Types = () => (
  <div className={s.root}>
    <Text size="l" color="red1">
      A value in JavaScript always refers to data of a certain type. For
      example, it can be a string or a number. There are eight basic data types
      in JavaScript.
    </Text>
    <div className={s.row}>
      <img src="cat-head.svg" alt="" width="30px" />
      <Text size="l" color="red1" className={s.bold}>
        Number
      </Text>
    </div>
    <Text size="m" color="orange1">
      let n = 123;
      <br />n = 12.345;
    </Text>
    <Text size="l">
      The numeric data type (number) represents both integer and floating point
      values. There are many operations for numbers, such as multiplication *,
      division /, addition +, subtraction - and so on. In addition to ordinary
      numbers, there are so-called "special numeric values" that refer to this
      data type: Infinity, -Infinity, and NaN.Infinity represents the
      mathematical infinity ∞. This is a special value that is greater than any
      number. NaN means computational error. This is the result of an incorrect
      or undefined mathematical operation, for example:
    </Text>
    <div className={s.row}>
      <img src="cat-head.svg" alt="" width="30px" />
      <Text size="l" color="red1" className={s.bold}>
        String
      </Text>
    </div>
    <Text size="l">A string in JavaScript must be enclosed in quotes.</Text>
    <Text size="m" color="orange1">
      let name = 'Kitty';
      <br />
      let message = 'Hello my dear friend';
    </Text>
    <div className={s.row}>
      <img src="cat-head.svg" alt="" width="30px" />
      <Text size="l" color="red1" className={s.bold}>
        Boolean (logical type)
      </Text>
    </div>
    <Text size="l">
      Boolean type (boolean) can take only two values: true (true) and false
      (false). This type is typically used to store yes/no values: true means
      "yes, right" and false means "no, wrong."
    </Text>
    <Text size="m" color="orange1">
      let skyIsBlue = true;
      <br />
      let skyIsYellow = false;
    </Text>
    <div className={s.row}>
      <img src="cat-head.svg" alt="" width="30px" />
      <Text size="l" color="red1" className={s.bold}>
        Null
      </Text>
    </div>
    <Text size="l">
      The special value null does not refer to any of the types described above.
      It's just a special value that represents "nothing", "empty", or "value
      unknown". It forms a separate type that contains only the null value
    </Text>
    <Text size="m" color="orange1">
      let numberOfDogs = null;
    </Text>
    <div className={s.row}>
      <img src="cat-head.svg" alt="" width="30px" />
      <Text size="l" color="red1" className={s.bold}>
        Undefined
      </Text>
    </div>
    <Text size="l">
      The special value undefined also stands apart. It forms a type from itself
      in the same way that null does. It means "no value has been assigned". If
      a variable is declared but not assigned any value, then its value will be
      undefined:
    </Text>
    <Text size="m" color="orange1">
      let favoriteFood;
      <br /> let favoriteFood = undefined;
    </Text>
  </div>
);
