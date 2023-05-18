import React, { useState } from "react";
import cx from "classnames";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Text, Button } from "../../../ui";
import s from "../styles.module.css";

export const Bird = () => {
  const [tipOpened, setTipOpened] = useState(false);
  const [animalMood, setAnimalMood] = useState(localStorage.getItem("bird"));

  return (
    <>
      <button
        className={cx(s.animal, animalMood !== "happy" && s.animalSad, s.bird)}
        onClick={() => setTipOpened(true)}
      >
        <img
          src={`bird-${animalMood === "happy" ? "happy" : "sad"}.svg`}
          alt=""
          width="80px"
        />
      </button>

      <Dialog open={tipOpened} keepMounted onClose={() => setTipOpened(false)}>
        <DialogTitle>
          <Text size="m" color="green1">
            Bird assignment
          </Text>
        </DialogTitle>
        <DialogContent>
          <Text size="l" color="orange1">
            Sing a song for 30 seconds!
          </Text>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setTipOpened(false);
              localStorage.setItem("bird", "happy");
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
