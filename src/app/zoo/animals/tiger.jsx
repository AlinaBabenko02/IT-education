import React, { useState } from "react";
import cx from "classnames";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@material-ui/core";
import { Text, Button } from "../../../ui";
import s from "../styles.module.css";

export const Tiger = () => {
  const [tipOpened, setTipOpened] = useState(false);
  const [animalMood, setAnimalMood] = useState(localStorage.getItem("tiger"));
  const [isSuccess, setIsSuccess] = useState(false);
  const handleInputChange = (event) => {
    setIsSuccess(event.target.value === "=");
  };

  return (
    <>
      <button
        className={cx(s.animal, animalMood !== "happy" && s.animalSad, s.tiger)}
        onClick={() => setTipOpened(true)}
      >
        <img
          src={`tiger-${animalMood === "happy" ? "happy" : "sad"}.svg`}
          alt=""
          width="100px"
        />
      </button>
      <Dialog open={tipOpened} keepMounted onClose={() => setTipOpened(false)}>
        <DialogTitle>
          <Text size="m" color="green1">
            Tiger assignment
          </Text>
        </DialogTitle>
        <DialogContent>
          <Text size="l" color="orange1">
            Which operator is used to assign a value to a variable?
          </Text>
          <TextField
            variant="standard"
            placeholder="Type here"
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              if (isSuccess) {
                setTipOpened(false);
                localStorage.setItem("tiger", "happy");
                setAnimalMood("happy");
              }
            }}
          >
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
