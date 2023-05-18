import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Text, Button } from "../../ui";
import s from "./styles.module.css";
import {
  Monkey,
  Crocodile,
  Bird,
  Elephant,
  Tiger,
  Hippopotamus,
} from "./animals/index";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
const animals = [
  "monkey",
  "crocodile",
  "bird",
  "elephant",
  "tiger",
  "hippopotamus",
];

export const ZooGame = () => {
  const [tipOpened, setTipOpened] = useState(true);
  const allAnimalsHappy = animals.every(
    (animal) => localStorage.getItem(animal) === "happy"
  );

  useEffect(() => {
    setTimeout(() => {
      setTipOpened(false);
    }, 8000);
  }, []);

  return (
    <>
      <div className={s.root}>
        <Text size="h1" color="orange1" className={allAnimalsHappy && s.header}>
          {allAnimalsHappy
            ? "All animals are happy!"
            : "Let's make all animals happy!"}
        </Text>
        <div className={s.zoo}>
          <Monkey />
          <Crocodile />
          <Bird />
          <Elephant />
          <Tiger />
          <Hippopotamus />
        </div>
      </div>

      <Dialog
        open={tipOpened}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setTipOpened(false)}
      >
        <DialogTitle>
          <Text size="l" color="green1">
            Let's make all animals happy!
          </Text>
        </DialogTitle>
        <DialogContent>
          <Text size="m">
            Click on the sad animal. You will see a task - complete it! After
            its completion, the animal will immediately become happier because
            you have received new knowledge and emotions!
          </Text>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setTipOpened(false)}>I understand!</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
