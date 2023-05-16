import React, { useState } from "react";
import Collapse from "@mui/material/Collapse";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { Text } from "../../ui";
import s from "./styles.module.css";

export const Dropdown = ({ label, body }) => {
  const [isOpen, setOpen] = useState(false);
  console.log(isOpen);
  return (
    <div className={s.dropdown}>
      <button onClick={() => setOpen(!isOpen)} className={s.dropdownHeader}>
        <Text size="l" color="black">
          {label}
        </Text>

        {isOpen ? (
          <KeyboardArrowUpOutlinedIcon />
        ) : (
          <KeyboardArrowDownOutlinedIcon />
        )}
      </button>

      <Collapse in={isOpen} className={s.dropdownBody}>
        {body}
      </Collapse>
    </div>
  );
};
