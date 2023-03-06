import React from "react";
import useUser from "../../../store/user";
import styles from "./FollowContainer.module.scss";
import FollowWrap from "./followWrap/FollowWrap";

const FollowContaier = () => {
  const { user } = useUser();

  return (
    <div className={styles.container}>
      <FollowWrap list={user ? user.Followers : []} title="팔로워 리스트" />
      <div className={styles.line}></div>
      <FollowWrap list={user ? user.Followings : []} title="팔로잉 리스트" />
    </div>
  );
};

export default FollowContaier;
