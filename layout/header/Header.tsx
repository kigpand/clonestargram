import React, { ChangeEvent, useState } from "react";
import { useInput } from "../../hooks/useInput";
import styles from "./header.module.scss";
import HeaderItems from "./headerItem/HeaderItem";

const Header = () => {
  const inputData = useInput("");

  return (
    <div className={styles.header}>
      <img src="/logo.png" className={styles.logo} alt="로고" />
      <input
        className={styles.text}
        type="text"
        placeholder="검색.."
        onChange={inputData.onChange}
      />
      <HeaderItems />
    </div>
  );
};

export default Header;
