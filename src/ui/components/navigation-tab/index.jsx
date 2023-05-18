import React from "react";
import { Link } from "react-router-dom";
import cx from "classnames";
import ForwardIcon from "@mui/icons-material/Forward";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { Text } from "../text/index";
import s from "./styles.module.css";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -30,
    top: 20,
    background: "#037333",
  },
  "& .MuiBadge-badge div": {
    fontSize: "14px",
  },
}));

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
    {label === "Zoo" && (
      <StyledBadge
        badgeContent={
          <Text color="white" size="s">
            game
          </Text>
        }
        color="success"
      />
    )}
    {isActive && <ForwardIcon className={s.tabArrow} />}
  </Link>
);
