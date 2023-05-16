import React from "react";
import Paper from "@mui/material/Paper";
import { Text } from "../../../ui";

import s from "./styles.module.css";

export const Intro = () => (
  <div className={s.root}>
    <Text size="h1" color="orange1" className={s.bold}>
      Hello! Let's start learning JavaScript!
    </Text>
    <Text size="l" color="green1">
      What is JavaScript?
    </Text>
    <Text size="m">
      JavaScript was originally created to "make web pages come alive". Programs
      in this language are called scripts. They can be embedded in HTML and run
      automatically when the web page is loaded. Scripts are distributed and
      executed as plain text. They don't need special preparation or compilation
      to run.
    </Text>
    <Text size="l" color="green1">
      Why JavaScript?
    </Text>
    <Text size="m">
      When JavaScript was created, it had a different name - "LiveScript".
      However, the Java language was very popular at the time and it was decided
      that positioning JavaScript as Java's "little brother" would be helpful.
    </Text>
    <Paper elevation={10} className={s.borderWithShadow}>
      <Text size="m" color="orange2" className={s.bold}>
        Programmers spend most of their working time in code editors. <br />
        There are two main types of editors: IDE and lightweight editors. Many
        use one of each type of instrument.
      </Text>
      <Text size="m" color="orange2">
        IDE:
      </Text>
      <div className={s.row}>
        <img src="cat-head.svg" alt="" width="30px" />
        <Text>Visual Studio Code</Text>
      </div>
      <div className={s.row}>
        <img src="cat-head.svg" alt="" width="30px" />
        <Text>WebStorm</Text>
      </div>
      <Text size="m" color="orange2">
        Lightweight editors:
      </Text>
      <div className={s.row}>
        <img src="cat-head.svg" alt="" width="30px" />
        <Text>Atom</Text>
      </div>
      <div className={s.row}>
        <img src="cat-head.svg" alt="" width="30px" />
        <Text>Sublime Text </Text>
      </div>
      <div className={s.row}>
        <img src="cat-head.svg" alt="" width="30px" />
        <Text>Vim</Text>
      </div>
    </Paper>
  </div>
);
