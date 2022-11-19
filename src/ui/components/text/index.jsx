import React from "react";
import cx from "classnames";
import s from "./styles.module.css";

export const Text = ({ color = "black", size = "s", className, children }) => (
  <div
    className={cx(s.root, s[`color--${color}`], s[`size--${size}`], className)}
  >
    {children}
  </div>
);
