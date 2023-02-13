import React, { ChangeEvent, useState } from "react";
import { useInput } from "../../../hooks/useInput";
import HeaderToggle from "./headerToggle/HeaderToggle";
import styles from "./mobileHeader.module.scss";

const MobileHeader = () => {
  const inputData = useInput("");
  const [toggle, setToggle] = useState<boolean>(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className={styles.mobileHeader}>
      <input
        className={styles.text}
        type="text"
        placeholder="검색.."
        onChange={inputData.onChange}
      />
      <div className={styles.toggleBtn} onClick={onToggle}>
        O
      </div>
      {toggle && <HeaderToggle />}
    </div>
  );
};

export default MobileHeader;
