import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Text, Button } from "../../ui";
import s from "./styles.module.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export const ZooGame = () => {
  const [tipOpened, setTipOpened] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTipOpened(false);
    }, 8000);
  }, []);

  return (
    <>
      <div className={s.root}>
        <Text size="h1" color="orange1">
          Let's make all animals happy!
        </Text>
        <div className={s.zoo} />
      </div>

      <Dialog
        open={tipOpened}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setTipOpened(false)}
        aria-describedby="alert-dialog-slide-description"
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
