import React, { ChangeEvent, useState } from "react";
import styles from "./header.module.scss";
import HeaderItems from "./headerItem/HeaderItem";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={styles.header}>
      <img src="/logo.png" className={styles.logo} alt="로고" />
      <input
        className={styles.text}
        type="text"
        placeholder="검색.."
        onChange={onChangeSearch}
      />
      <HeaderItems />
    </div>
  );
};

export default Header;
