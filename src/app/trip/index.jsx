import React from "react";
import { Button } from "../../ui";
import { ProgressBar } from "./progress-bar/index.jsx";
import { Finish } from "./steps/index";

import s from "./styles.module.css";

export const JSTrip = () => (
  <div className={s.root}>
    <ProgressBar />
    <Finish />
    <div className={s.buttons}>
      <Button type="orange">Previous step</Button>
      <Button>Next step</Button>
    </div>
  </div>
);
