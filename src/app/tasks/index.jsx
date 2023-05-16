import React, { useState } from "react";
import cx from "classnames";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import {
  Alert,
  CreateFunc,
  ForLoop,
  Comment,
  Array,
  Round,
  Onclick,
  Boolean,
  Equal,
  Output,
  ArrayPop,
  UpperCase,
  Object,
} from "./data/index";
import { Button, Text } from "../../ui";

import s from "./styles.module.css";

export const Tasks = () => {
  const [randomTask, setRandomTask] = useState(Math.floor(Math.random() * 13));
  const [taskResult, setTaskResult] = useState(null);
  const [success, setSuccess] = useState(false);
  const [resultOpened, setResultOpened] = useState(false);

  const tasksData = [
    { component: <Alert setTaskResult={setTaskResult} />, answer: "alert" },
    {
      component: <CreateFunc setTaskResult={setTaskResult} />,
      answer: "create",
    },
    { component: <ForLoop setTaskResult={setTaskResult} />, answer: "for1" },
    {
      component: <Comment setTaskResult={setTaskResult} />,
      answer: "comment1",
    },
    { component: <Array setTaskResult={setTaskResult} />, answer: "array2" },
    {
      component: <Round setTaskResult={setTaskResult} />,
      answer: "Math.round",
    },
    { component: <Onclick setTaskResult={setTaskResult} />, answer: "onclick" },
    { component: <Boolean setTaskResult={setTaskResult} />, answer: "true" },
    { component: <Equal setTaskResult={setTaskResult} />, answer: "false" },
    { component: <Output setTaskResult={setTaskResult} />, answer: "1234" },
    {
      component: <ArrayPop setTaskResult={setTaskResult} />,
      answer: "fruits.pop()",
    },
    {
      component: <UpperCase setTaskResult={setTaskResult} />,
      answer: "txt.toUpperCase()",
    },
    {
      component: <Object setTaskResult={setTaskResult} />,
      answer: "person.firstName",
    },
  ];

  return (
    <>
      <div className={s.root}>
        <Text color="green1" size="h1" className={s.header}>
          JavaScript testing
        </Text>
        {tasksData[randomTask].component}

        <div className={s.buttons}>
          <Button
            onClick={() => {
              const isSuccess = taskResult === tasksData[randomTask].answer;
              setSuccess(isSuccess);
              setResultOpened(true);
            }}
          >
            Check answer
          </Button>
          <Button
            onClick={() => {
              setRandomTask(Math.floor(Math.random() * tasksData.length));
              setSuccess(null);
            }}
            className={cx(s.nextButton, !success && s.disabled)}
            type="orange"
          >
            Next task
          </Button>
        </div>
      </div>
      <Snackbar
        open={resultOpened}
        autoHideDuration={5000}
        onClose={() => setResultOpened(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MuiAlert
          onClose={() => setResultOpened(false)}
          severity={success ? "success" : "error"}
          elevation={6}
          variant="filled"
        >
          {success ? "This is a right answer!" : "This is a wrong answer!"}
        </MuiAlert>
      </Snackbar>
    </>
  );
};
