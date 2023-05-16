import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Text, NavigationTab } from "../../ui";

import s from "./styles.module.css";

const tabs = [
  { label: "Trip", link: "trip" },
  { label: "Tasks", link: "tasks" },
  { label: "Handbook", link: "documentation" },
];

export const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(
    window.location.href.split("/").pop()
  );
  return (
    <div className={s.root}>
      <Link to="/home" onClick={() => setActiveTab("home")}>
        <button className={s.logo}>
          <img src="logo.svg" alt="logo" />
          <div className={s.logoText}>
            <Text color="black" size="l">
              IT education
            </Text>
            <Text color="red1" size="m">
              BASICS
            </Text>
            <Text color="red1" size="m" className={s.logoChild}>
              for children
            </Text>
          </div>
        </button>
      </Link>

      {tabs.map((tab) => (
        <NavigationTab
          label={tab.label}
          link={tab.link}
          isActive={activeTab === tab.link}
          setActiveTab={setActiveTab}
        />
      ))}
    </div>
  );
};
