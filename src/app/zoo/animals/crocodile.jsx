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

export const Crocodile = () => {
  const [tipOpened, setTipOpened] = useState(false);
  const [animalMood, setAnimalMood] = useState(
    localStorage.getItem("crocodile")
  );

  const [isSuccess, setIsSuccess] = useState(false);
  const handleRadioChange = (event) => {
    setIsSuccess(event.target.value === "single");
  };

  return (
    <>
      <button
        className={cx(
          s.animal,
          animalMood !== "happy" && s.animalSad,
          s.crocodile
        )}
        onClick={() => setTipOpened(true)}
      >
        <img
          src={`crocodile-${animalMood === "happy" ? "happy" : "sad"}.svg`}
          alt=""
          width="100px"
        />
      </button>
      <Dialog open={tipOpened} keepMounted onClose={() => setTipOpened(false)}>
        <DialogTitle>
          <Text size="m" color="green1">
            Crocodile assignment
          </Text>
        </DialogTitle>
        <DialogContent>
          <Text size="l" color="orange1">
            How do you call a function named "myFunction"?
          </Text>
          <FormControl>
            <RadioGroup name="radio-buttons-group" onChange={handleRadioChange}>
              <FormControlLabel
                value="call function"
                control={<Radio />}
                label="call function myFunction()"
              />
              <FormControlLabel
                value="single"
                control={<Radio />}
                label="myFunction()"
              />
              <FormControlLabel
                value="call"
                control={<Radio />}
                label="call function myFunction()"
              />
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              if (isSuccess) {
                setTipOpened(false);
                localStorage.setItem("crocodile", "happy");
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
