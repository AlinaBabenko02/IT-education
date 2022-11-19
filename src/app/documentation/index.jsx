import React from "react";
import { Dropdown } from "./dropdown";
import { cheatSheetJSData } from "./JSdata/index";
import { Text } from "../../ui";
import s from "./styles.module.css";

export const CheatSheetJS = () => (
  <div className={s.root}>
    <Text color="red1" size="h1" className={s.rootHeader}>
      Basic documentation JavaScript
    </Text>
    {cheatSheetJSData.map((block) => (
      <Dropdown label={block.label} body={block.body} />
    ))}
  </div>
);
