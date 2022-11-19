import React from "react";
import { Text } from "../../../ui";
import s from "../styles.module.css";

export const LoopsBody = () => (
  <>
    <Text size="m" color="green1" className={s.blockName}>
      For Loop
    </Text>
    <div>
      for (var i = 0; i {"<"} 10; i++) {"{"}
      <br />
      console.log(i)
      <br />
      {"}"}
    </div>
    <Text size="m" color="green1" className={s.blockName}>
      While Loop
    </Text>
    <div>
      var i = 1; <br />
      while (i {"<"} 100) {"{"} <br />
      i *= 2; <br />
      document.write(i + ", "); <br />
      {"}"}
    </div>
    <Text size="m" color="green1" className={s.blockName}>
      Do While Loop
    </Text>
    <div>
      var i = 1;
      <br />
      do {"{"} <br />
      i *= 2; <br />
      document.write(i + ", "); <br />
      {"}"} while (i {"<"} 100){" "}
    </div>
    <Text size="m" color="green1" className={s.blockName}>
      Break
    </Text>
    <div>
      for (var i = 0; i {"<"} 10; i++) {"{"}
      <br />
      if (i == 5) {"{"} {"break"} {"}"} <br />
      document.write(i + ", "); <br />
      {"}"}
    </div>
    <Text size="m" color="green1" className={s.blockName}>
      Continue
    </Text>
    <div>
      for (var i = 0; i {"<"} 10; i++) {"{"}
      <br />
      if (i == 5) {"{ continue; }"} <br />
      document.write(i + ", ");
      <br />
      {"}"}
    </div>
  </>
);
