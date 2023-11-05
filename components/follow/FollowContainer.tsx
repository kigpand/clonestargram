"use client";

import React, { Suspense } from "react";
import styles from "./FollowContainer.module.scss";
import FollowWrap from "./followWrap/FollowWrap";
import useUserInfo from "../../hooks/useUserInfo";
import Loading from "../shared/loading/Loading";

const FollowContaier = () => {
  const { user } = useUserInfo();

  if (!user) return <></>;

  return (
    <div className={styles.container}>
      <Suspense fallback={<Loading />}>
        <FollowWrap list={user?.followers || []} title="팔로워 리스트" />
        <div className={styles.line}></div>
        <FollowWrap list={user?.followings || []} title="팔로잉 리스트" />
      </Suspense>
    </div>
  );
};

export default FollowContaier;
