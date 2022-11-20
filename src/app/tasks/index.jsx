import React, { useState } from "react";
import cx from "classnames";
import { Alert } from "./data/index";
import { Button, Text } from "../../ui";

import s from "./styles.module.css";

export const Tasks = () => {
  const [randomTask, setRandomTask] = useState(0);
  const [taskResult, setTaskResult] = useState(null);
  const [success, setSuccess] = useState(false);

  const tasksData = [
    { component: <Alert setTaskResult={setTaskResult} />, answer: "alert" },
  ];
  return (
    <div className={s.root}>
      <Text color="green1" size="h1" className={s.header}>
        JavaScript testing
      </Text>
      {tasksData[randomTask].component}

      <div className={s.buttons}>
        <Button
          onClick={() =>
            setSuccess(taskResult === tasksData[randomTask].answer)
          }
        >
          Check answer
        </Button>
        <Button
          onClick={() => {
            setRandomTask(Math.floor(Math.random() * 2));
            setSuccess(null);
          }}
          className={cx(s.nextButton, !success && s.disabled)}
          type="orange"
        >
          Next task
        </Button>
      </div>
    </div>
  );
};
