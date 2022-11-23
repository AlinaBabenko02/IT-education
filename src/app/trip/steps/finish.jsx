import React from "react";
import { Text, Button } from "../../../ui";

import s from "./styles.module.css";

export const Finish = () => (
  <div className={s.finish}>
    <div className={s.finishText}>
      <Text size="h1" color="red1" className={s.bold}>
        Hooray! You now have a basic knowledge of JavaScript. and you can
        consider yourself a real programmer-wizard!
      </Text>
      <Text size="l" color="green1 ">
        After that, I advise you to put your knowledge into practice. Head to
        the task section and try your hand at it!
      </Text>
    </div>
    <img src="cat-happy.svg" alt="" width="100px" />
    <Button>Go to TASKS!</Button>
  </div>
);
