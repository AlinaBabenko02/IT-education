import React from "react";
import { Text } from "../../../ui";
import s from "../styles.module.css";

export const BasicsBody = () => (
  <>
    <Text size="m" color="green1" className={s.blockName}>
      On page script
    </Text>
    <div>{"<script type='text/javascript'> ...</script>"}</div>
    <Text size="m" color="green1" className={s.blockName}>
      Include external JS file
    </Text>
    <div>{"<script src='filename.js'></script>"}</div>
    <Text size="m" color="green1" className={s.blockName}>
      Delay - 1 second timeout
    </Text>
    <div>
      setTimeout(function () {"{"}...
      <br />
      {"}"}, 1000);
    </div>
    <Text size="m" color="green1" className={s.blockName}>
      Functions
    </Text>
    <div>
      function addNumbers(a, b) {"{"} <br />
      return a + b;
      <br /> {"}"} <br />x = addNumbers(1, 2);
    </div>
    <Text size="m" color="green1" className={s.blockName}>
      Edit DOM element
    </Text>
    <div>document.getElementById("elementID").innerHTML = "Hello World!";</div>
    <Text size="m" color="green1" className={s.blockName}>
      Output
    </Text>
    <div>
      console.log(a);
      <Text size="s" color="green2">
        {"// write to the browser"}
      </Text>
    </div>
    <div>
      console document.write(a);
      <Text size="s" color="green2">
        {"// write to the HTML alert(a);"}
      </Text>
    </div>
    <div>
      alert(a);
      <Text size="s" color="green2">
        {" // output in an alert box"}
      </Text>
    </div>
    <div>
      confirm("Really?");
      <Text size="s" color="green2">
        {"// yes/no dialog, returns true/false depending on user"}
      </Text>
    </div>
    <div>
      prompt("Your age?","0");
      <Text size="s" color="green2">
        {"// input dialog. Second argument is the initial value"}
      </Text>
    </div>
  </>
);
