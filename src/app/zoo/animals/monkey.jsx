import React, { useState } from "react";
import cx from "classnames";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Text, Button } from "../../../ui";
import s from "../styles.module.css";

export const Monkey = () => {
  const [tipOpened, setTipOpened] = useState(false);
  const [animalMood, setAnimalMood] = useState(localStorage.getItem("monkey"));

  return (
    <>
      <button
        className={cx(
          s.animal,
          animalMood !== "happy" && s.animalSad,
          s.monkey
        )}
        onClick={() => setTipOpened(true)}
      >
        <img
          src={`monkey-${animalMood === "happy" ? "happy" : "sad"}.svg`}
          alt=""
          width="100px"
        />
      </button>
      <Dialog open={tipOpened} keepMounted onClose={() => setTipOpened(false)}>
        <DialogTitle>
          <Text size="m" color="green1">
            Monkey assignment
          </Text>
        </DialogTitle>
        <DialogContent>
          <Text size="l" color="orange1">
            Jump up 5 times!
          </Text>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setTipOpened(false);
              localStorage.setItem("monkey", "happy");
              setAnimalMood("happy");
            }}
          >
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
