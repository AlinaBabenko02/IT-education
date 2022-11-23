import React from "react";
import { render } from "react-dom";
import { AppRoot } from "./app/index.jsx";
import "./App.css";

const rootElement = document.getElementById("root");
export const App = () => (
  <div>
    <AppRoot />
  </div>
);

render(<App />, rootElement);
