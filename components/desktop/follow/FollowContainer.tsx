import React from "react";
import styles from "./FollowContainer.module.scss";
import FollowWrap from "./followWrap/FollowWrap";

const FollowContaier = () => {
  const dummy = ["1", "2", "3"];

  return (
    <div className={styles.container}>
      <FollowWrap list={dummy} title="팔로워 리스트" />
      <div className={styles.line}></div>
      <FollowWrap list={dummy} title="팔로잉 리스트" />
    </div>
  );
};

export default FollowContaier;
