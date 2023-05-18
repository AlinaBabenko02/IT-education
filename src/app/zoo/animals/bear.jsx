import React, { useState } from "react";
import cx from "classnames";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { Text, Button } from "../../../ui";
import s from "../styles.module.css";

export const Bear = () => {
  const [tipOpened, setTipOpened] = useState(false);
  const [animalMood, setAnimalMood] = useState(localStorage.getItem("bear"));

  const [isSuccess, setIsSuccess] = useState(false);
  const handleRadioChange = (event) => {
    setIsSuccess(event.target.value === "slice");
  };

  return (
    <>
      <button
        className={cx(s.animal, animalMood !== "happy" && s.animalSad, s.bear)}
        onClick={() => setTipOpened(true)}
      >
        <img
          src={`bear-${animalMood === "happy" ? "happy" : "sad"}.svg`}
          alt=""
          width={100}
        />
      </button>
      <Dialog open={tipOpened} keepMounted onClose={() => setTipOpened(false)}>
        <DialogTitle>
          <Text size="m" color="green1">
            Bear assignment
          </Text>
        </DialogTitle>
        <DialogContent>
          <Text size="l" color="orange1">
            Which of the following function of Array object extracts a section
            of an array and returns a new array?
          </Text>
          <FormControl>
            <RadioGroup name="radio-buttons-group" onChange={handleRadioChange}>
              <FormControlLabel
                value="reverse"
                control={<Radio />}
                label="reverse()"
              />
              <FormControlLabel
                value="shift"
                control={<Radio />}
                label="shift()"
              />
              <FormControlLabel
                value="slice"
                control={<Radio />}
                label="slice()"
              />
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              if (isSuccess) {
                setTipOpened(false);
                localStorage.setItem("bear", "happy");
                setAnimalMood("happy");
              } else {
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
