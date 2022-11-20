import React from "react";
import { Tasks } from "./tasks/index";
import { Sidebar } from "./sidebar/index.jsx";
import s from "./styles.module.css";

export const AppRoot = () => (
  <div className={s.root}>
    <Sidebar />
    <Tasks />
  </div>
);
