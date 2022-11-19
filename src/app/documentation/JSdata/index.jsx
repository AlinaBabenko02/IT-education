import React from "react";
import { BasicsBody } from "./basics";
import { VariablesBody } from "./variables";
import { DataTypesBody } from "./dataTypes";
import { StringsBody } from "./strings";
import { EventsBody } from "./events";
import { ArraysBody } from "./arrays";
import { DatesBody } from "./dates";
import { IfElseBody } from "./ifElse";
import { LoopsBody } from "./loops";

export const cheatSheetJSData = [
  {
    label: "Basics",
    body: <BasicsBody />,
  },
  { label: "Variables", body: <VariablesBody /> },
  { label: "Data Types", body: <DataTypesBody /> },
  { label: "Strings", body: <StringsBody /> },
  { label: "Arrays", body: <ArraysBody /> },
  { label: "Dates", body: <DatesBody /> },
  { label: "If - Else", body: <IfElseBody /> },
  { label: "Loops", body: <LoopsBody /> },
  { label: "Events", body: <EventsBody /> },
];
