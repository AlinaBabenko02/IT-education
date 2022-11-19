import React from "react";
import cx from "classnames";
import { Text } from "../text/index";
import s from "./styles.module.css";

export const Button = ({ className, children }) => (
  <button className={cx(s.root, className)}>
    <Text>{children}</Text>
  </button>
);
