import React from "react";
import styles from "./headerItems.module.scss";

const HeaderItems = () => {
  const homeBtn = () => {};

  const profileBtn = () => {};

  const followBtn = () => {};

  const contentBtn = () => {};

  const logoutBtn = () => {};

  return (
    <div className={styles.headerItems}>
      <img
        src="/friendBtn.png"
        className={styles.friendBtn}
        onClick={followBtn}
        alt="friendBtn"
      ></img>
      <img
        src="/contentBtn.png"
        className={styles.contentBtn}
        onClick={contentBtn}
        alt="contentBtn"
      ></img>
      <img
        src="/profileBtn.png"
        className={styles.profileBtn}
        onClick={profileBtn}
        alt="profileBtn"
      ></img>
      <img
        src="/homeBtn.png"
        className={styles.homeBtn}
        onClick={homeBtn}
        alt="homeBtn"
      ></img>
      <img
        src="/logout.png"
        className={styles.logOutBtn}
        onClick={logoutBtn}
        alt="logoutBtn"
      ></img>
    </div>
  );
};

export default HeaderItems;
