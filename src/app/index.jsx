import React from "react";
import { HomePage } from "./home-page/index";
import { Sidebar } from "./sidebar/index.jsx";
import s from "./styles.module.css";

export const AppRoot = () => (
  <div className={s.root}>
    <Sidebar />
    <HomePage />
  </div>
);
