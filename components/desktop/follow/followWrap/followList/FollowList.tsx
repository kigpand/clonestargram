"use client";

import { useEffect, useState } from "react";
import FollowerView from "../../../../shared/followerView/FollowerView";
import styles from "./FollowList.module.scss";
import { IUser } from "../../../../../interface/IUser";
import { onIdCheck } from "../../../../../service/user";
import SubLoading from "../../../../shared/subLoading/SubLoading";

interface IFollowList {
  follow: any;
}

const FollowList = ({ follow }: IFollowList) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [followUser, setFollowUser] = useState<IUser | null>(null);
  const [onFollowView, setOnFollowView] = useState<boolean>(false);

  useEffect(() => {
    if (follow) {
      setLoading(true);
      onIdCheck(follow._ref).then((data: IUser) => {
        setFollowUser(data);
        setLoading(false);
      });
    }
  }, [follow]);

  const unFollow = () => {
    setOnFollowView(false);
  };

  return (
    <div className={styles.followList}>
      {loading && <SubLoading />}
      <img
        src={followUser?.image ? followUser.image : "/profileImg.png"}
        className={styles.profileImg}
        alt="followImg"
      ></img>
      <div className={styles.nickname} onClick={() => setOnFollowView(true)}>
        {followUser?.name}
      </div>
      {onFollowView && followUser && (
        <FollowerView follow={followUser} unFollow={unFollow} />
      )}
    </div>
  );
};

export default FollowList;
