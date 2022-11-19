import React from "react";
import { Text } from "../../ui";
import cx from "classnames";

import s from "./styles.module.css";

const NavigationTab = ({ label }) => {
  const isActive = label === "Trip";
  return (
    <button className={cx(s.button, isActive && s.buttonActive)}>
      {isActive && <span className={s.circle} />}
      <Text color="green1" size="l">
        {label}
      </Text>
    </button>
  );
};
const tabs = [
  { label: "Trip" },
  { label: "Tasks" },
  { label: "Documentation" },
];

export const Sidebar = () => {
  return (
    <div className={s.root}>
      <div className={s.logo}>
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
      </div>

      {tabs.map((tab) => (
        <NavigationTab label={tab.label} />
      ))}

      <div className={s.lang}>
        <Text color="green1" size="l">
          Lang
        </Text>
      </div>
    </div>
  );
};
