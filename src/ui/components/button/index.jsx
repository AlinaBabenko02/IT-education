import React from "react";
import cx from "classnames";
import { Text } from "../text/index";
import s from "./styles.module.css";

export const Button = ({ type = "red", onClick, className, children }) =>
  type === "red" ? (
    <button className={cx(s.red, className)} onClick={onClick}>
      <Text color="orange2" size="l">
        {children}
      </Text>
    </button>
  ) : (
    <button className={cx(s.orange, className)} onClick={onClick}>
      <Text color="red1" size="l">
        {children}
      </Text>
    </button>
  );
