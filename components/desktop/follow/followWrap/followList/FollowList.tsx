"use client";

import { useEffect, useState } from "react";
import FollowerView from "../../../../shared/followerView/FollowerView";
import styles from "./FollowList.module.scss";
import { IUser } from "../../../../../interface/IUser";
import { onIdCheck } from "../../../../../service/user";

interface IFollowList {
  follow: any;
}

const FollowList = ({ follow }: IFollowList) => {
  const [followUser, setFollowUser] = useState<any>(null);
  const [imgUrl, setImgUrl] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");

  useEffect(() => {
    if (follow) {
      onIdCheck(follow._ref).then((data: IUser) => {
        if (data.image) {
          setImgUrl(data.image);
        }
        setNickname(data.name);
      });
    }
  }, [follow]);

  const unFollow = () => {
    setFollowUser(null);
  };

  return (
    <div className={styles.followList}>
      <img
        src={imgUrl !== "" ? imgUrl : "/profileImg.png"}
        className={styles.profileImg}
        alt="followImg"
      ></img>
      <div className={styles.nickname} onClick={() => setFollowUser(follow)}>
        {nickname}
      </div>
      {followUser && <FollowerView follow={followUser} unFollow={unFollow} />}
    </div>
  );
};

export default FollowList;
