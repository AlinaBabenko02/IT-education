import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./home-page/index";
import { JSTrip } from "./trip/index";
import { Tasks } from "./tasks/index";
import { CheatSheetJS } from "./documentation/index";
import { Sidebar } from "./sidebar/index.jsx";
import s from "./styles.module.css";

export const AppRoot = () => (
  <div className={s.root}>
    <Router>
      <Sidebar />

      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/trip" element={<JSTrip />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/documentation" element={<CheatSheetJS />} />
      </Routes>
    </Router>
  </div>
);
