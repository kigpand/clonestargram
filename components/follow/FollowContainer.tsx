"use client";

import React from "react";
import styles from "./FollowContainer.module.scss";
import FollowWrap from "./followWrap/FollowWrap";
import useUserInfo from "../../hooks/useUserInfo";

const FollowContaier = () => {
  const { user } = useUserInfo();

  return (
    <div className={styles.container}>
      <FollowWrap list={user?.followers || []} title="팔로워 리스트" />
      <div className={styles.line}></div>
      <FollowWrap list={user?.followings || []} title="팔로잉 리스트" />
    </div>
  );
};

export default FollowContaier;
