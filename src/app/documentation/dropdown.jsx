import React, { useState } from "react";
import cx from "classnames";
import { Text } from "../../ui";
import s from "./styles.module.css";

export const Dropdown = ({ label, body }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={s.dropdown}>
      <div className={s.dropdownHeader}>
        <Text size="l" color="black">
          {label}
        </Text>
        <button
          onClick={() => setOpen(!isOpen)}
          className={cx(s.dropdownButton, !isOpen && s.reverse)}
        >
          <img src="arrow.svg" alt="arrow" />
        </button>
      </div>
      {isOpen && <div className={s.dropdownBody}>{body}</div>}
    </div>
  );
};
