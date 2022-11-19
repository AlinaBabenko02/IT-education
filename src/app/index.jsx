import React from "react";
import { Button } from "../ui/index.jsx";
import { Sidebar } from "./sidebar/index.jsx";
import s from "./styles.module.css";

export const AppRoot = () => (
  <div className={s.root}>
    <Sidebar />

    <Button color="green1" size="l">
      Vladik
    </Button>
  </div>
);
