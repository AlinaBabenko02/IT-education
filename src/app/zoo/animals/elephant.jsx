import React, { useState } from "react";
import cx from "classnames";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@material-ui/core";
import { Text, Button } from "../../../ui";
import s from "../styles.module.css";

export const Elephant = () => {
  const [tipOpened, setTipOpened] = useState(false);
  const [animalMood, setAnimalMood] = useState(
    localStorage.getItem("elephant")
  );
  const [isSuccess, setIsSuccess] = useState(false);
  const handleInputChange = (event) => {
    setIsSuccess(event.target.value === "Math.max()");
  };

  return (
    <>
      <button
        className={cx(
          s.animal,
          animalMood !== "happy" && s.animalSad,
          s.elephant
        )}
        onClick={() => setTipOpened(true)}
      >
        <img
          src={`elephant-${animalMood === "happy" ? "happy" : "sad"}.svg`}
          alt=""
          width="100px"
        />
      </button>
      <Dialog open={tipOpened} keepMounted onClose={() => setTipOpened(false)}>
        <DialogTitle>
          <Text size="m" color="green1">
            Elephant assignment
          </Text>
        </DialogTitle>
        <DialogContent>
          <Text size="l" color="orange1">
            How do you find the number with the highest value of x and y?
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
                localStorage.setItem("elephant", "happy");
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
