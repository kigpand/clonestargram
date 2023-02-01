import React from "react";
import styles from "./FollowContainer.module.scss";

const FollowContaier = () => {
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <div className={styles.title}>팔로워 리스트</div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.list}>
        <div className={styles.title}>팔로잉 리스트</div>
      </div>
    </div>
  );
};

export default FollowContaier;
