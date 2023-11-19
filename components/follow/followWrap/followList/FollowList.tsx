"use client";

import { useState } from "react";
import FollowerView from "../../../common/followerView/FollowerView";
import styles from "./FollowList.module.scss";
import { IUser } from "../../../../interface/IUser";

const FollowList = ({ follow }: { follow: IUser }) => {
  const [onFollowView, setOnFollowView] = useState<boolean>(false);

  const unFollow = () => {
    setOnFollowView(false);
  };

  return (
    <div className={styles.followList}>
      <img
        src={follow.image || "/profileImg.png"}
        className={styles.profileImg}
        alt="followImg"
      ></img>
      <div className={styles.nickname} onClick={() => setOnFollowView(true)}>
        {follow.name}
      </div>
      {onFollowView && follow && (
        <FollowerView follow={follow} unFollow={unFollow} />
      )}
    </div>
  );
};

export default FollowList;
