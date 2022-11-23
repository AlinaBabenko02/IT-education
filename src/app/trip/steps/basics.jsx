import React from "react";
import { Text } from "../../../ui";

import s from "./styles.module.css";

export const Basics = () => (
  <div className={s.root}>
    <Text size="m">
      To begin with, we need to install the development with which we will be
      comfortable working. <br />
      So, firstly, let's see how to execute the script on the page. JavaScript
      programs can be inserted anywhere in an HTML document using the
      {"<script>"} tag.
    </Text>
    <img
      src="script.png"
      alt=""
      width="600px"
      style={{ marginBottom: "20px" }}
    />
    <Text size="m">
      If you have a lot of JavaScript code, you can put it in a separate file.
      The script file can be included in HTML using the src attribute:
    </Text>
    <Text size="m" color="orange1">
      {'<script src="/path/to/script.js"></script>'}
    </Text>
  </div>
);
