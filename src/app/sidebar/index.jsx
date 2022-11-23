import React, { useState } from "react";
import { Link } from "react-router-dom";
import cx from "classnames";
import { Text } from "../../ui";

import s from "./styles.module.css";

const NavigationTab = ({ label, link, activeTab, setActiveTab }) => {
  const isActive = activeTab === link;

  return (
    <Link
      to={`/${link}`}
      className={cx(s.button, isActive && s.buttonActive)}
      onClick={() => {
        setActiveTab(link);
      }}
    >
      {isActive && <span className={s.circle} />}
      <Text color="green1" size="l">
        {label}
      </Text>
    </Link>
  );
};
const tabs = [
  { label: "Trip", link: "trip" },
  { label: "Tasks", link: "tasks" },
  { label: "Documentation", link: "documentation" },
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
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      ))}
    </div>
  );
};
