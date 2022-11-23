import React from "react";
import { Text } from "../../../ui";

import s from "./styles.module.css";

export const Array = () => (
  <div className={s.root}>
    <Text size="l" color="green1">
      Objects allow you to store data with string keys. This is amazing.
    </Text>
    <Text size="l" color="green1">
      But quite often we realize that we need an ordered collection of data that
      has the 1st, 2nd, 3rd elements, and so on. For example, we will need it to
      store a list of something: users, products, HTML elements, etc.
    </Text>
    <Text size="l" color="green1">
      There are two syntax options for creating an empty array:
    </Text>
    <Text size="m" color="orange1">
      let arr = new Array();
      <br />
      let arr = [];
    </Text>
    <Text size="l" color="green1">
      The second syntax is almost always used. In parentheses, we can specify
      the initial values of elements:
    </Text>
    <Text size="m" color="orange1">
      let fruits = ["Apple", "Orange", "Banana"];
    </Text>
    <Text size="l" color="green1">
      Array elements are numbered starting from zero.
    </Text>
    <Text size="l" color="green1">
      We can get an element by specifying its number in square brackets:
    </Text>
    <Text size="m" color="orange1">
      fruits[0]; // Apple <br />
      fruits[1]; // Orange <br />
      fruits[2]; // Banana
    </Text>
    <Text size="l" color="red1">
      The most popular array methods:
    </Text>
    <Text size="m" color="red2">
      some(), every, reduce(), map(), flat(), filter(), forEach(), find(),
      findIndex(), sort(), concat(), includes()
    </Text>
  </div>
);
