import React from "react";
import { JSTrip } from "./trip/index";
import { Sidebar } from "./sidebar/index.jsx";
import s from "./styles.module.css";

export const AppRoot = () => (
  <div className={s.root}>
    <Sidebar />
    <JSTrip />
  </div>
);
