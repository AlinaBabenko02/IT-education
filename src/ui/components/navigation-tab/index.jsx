import React from "react";
import { Link } from "react-router-dom";
import cx from "classnames";
import ForwardIcon from "@mui/icons-material/Forward";
import { Text } from "../text/index";
import s from "./styles.module.css";

export const NavigationTab = ({
  label,
  link,
  isActive,
  setActiveTab,
  className,
}) => (
  <Link
    to={`/${link}`}
    className={cx(s.tab, isActive && s.tabActive, className)}
    onClick={() => {
      setActiveTab(link);
    }}
  >
    <Text color="black" size="l">
      {label}
    </Text>
    {isActive && <ForwardIcon className={s.tabArrow} />}
  </Link>
);
