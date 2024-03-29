import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./home-page/index";
import { JSTrip } from "./trip/index";
import { Tasks } from "./tasks/index";
import { CheatSheetJS } from "./documentation/index";
import { ForParents } from "./for-parents/index";
import { ZooGame } from "./zoo/index.jsx";
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
        <Route path="/for-parents" element={<ForParents />} />
        <Route path="/zoo" element={<ZooGame />} />
      </Routes>
    </Router>
  </div>
);
