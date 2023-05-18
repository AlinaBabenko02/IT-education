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

export const Hippopotamus = () => {
  const [tipOpened, setTipOpened] = useState(false);
  const [animalMood, setAnimalMood] = useState(
    localStorage.getItem("hippopotamus")
  );
  const [isSuccess, setIsSuccess] = useState(false);
  const handleRadioChange = (event) => {
    setIsSuccess(event.target.value === "false");
  };

  return (
    <>
      <button
        className={cx(
          s.animal,
          animalMood !== "happy" && s.animalSad,
          s.hippopotamus
        )}
        onClick={() => setTipOpened(true)}
      >
        <img
          src={`hippopotamus-${animalMood === "happy" ? "happy" : "sad"}.svg`}
          alt=""
          width="80px"
        />
      </button>
      <Dialog open={tipOpened} keepMounted onClose={() => setTipOpened(false)}>
        <DialogTitle>
          <Text size="m" color="green1">
            Hippopotamus assignment
          </Text>
        </DialogTitle>
        <DialogContent>
          <Text size="l" color="orange1">
            JavaScript is the same as Java?
          </Text>
          <FormControl>
            <RadioGroup name="radio-buttons-group" onChange={handleRadioChange}>
              <FormControlLabel value="true" control={<Radio />} label="true" />
              <FormControlLabel
                value="false"
                control={<Radio />}
                label="false"
              />
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              if (isSuccess) {
                setTipOpened(false);
                localStorage.setItem("hippopotamus", "happy");
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
