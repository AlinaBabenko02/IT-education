import React from "react";
import { Text } from "../../../ui";
import s from "../styles.module.css";

export const IfElseBody = () => (
  <>
    <div>
      if ((age {">= 14"}) && (age {"<"} 19)) {"{"} <br />
      status = "Eligible."; <br />
      {"}"} else {"{"} <br />
      status = "Not eligible.";
      {"}"}
    </div>
    <Text size="m" color="green1" className={s.blockName}>
      Switch Statement
    </Text>
    <div>
      switch (new Date().getDay()) {"{"}
      <br />
      case 6: <br />
      text = "Saturday"; <br />
      break;
      <br />
      case 0: <br />
      text = "Sunday";
      <br />
      break;
      <br />
      default: <br />
      text = "Whatever";
      <br />
      {"}"}
    </div>
  </>
);
