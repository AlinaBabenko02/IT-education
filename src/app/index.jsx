import React from "react";
import { CheatSheetJS } from "./documentation/index";
import { Sidebar } from "./sidebar/index.jsx";
import s from "./styles.module.css";

export const AppRoot = () => (
  <div className={s.root}>
    <Sidebar />
    <CheatSheetJS />
  </div>
);
