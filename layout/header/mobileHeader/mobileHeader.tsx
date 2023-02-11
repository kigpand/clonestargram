import React, { ChangeEvent, useState } from "react";
import { useInput } from "../../../hooks/useInput";
import styles from "./mobileHeader.module.scss";

const MobileHeader = () => {
  const inputData = useInput("");

  return (
    <div className={styles.mobileHeader}>
      <input
        className={styles.text}
        type="text"
        placeholder="검색.."
        onChange={inputData.onChange}
      />
    </div>
  );
};

export default MobileHeader;
