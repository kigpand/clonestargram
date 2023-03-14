import { useState } from "react";
import { IFollow } from "../../../../../interface/IFollow";
import FollowerView from "../../../../shared/followerView/FollowerView";
import styles from "./FollowList.module.scss";

interface IFollowList {
  follow: IFollow;
}

const FollowList = ({ follow }: IFollowList) => {
  const [followUser, setFollowUser] = useState<any>(null);

  const unFollow = () => {
    setFollowUser(null);
  };

  return (
    <div className={styles.followList}>
      <img
        src={
          follow.userImg
            ? `${process.env.NEXT_PUBLIC_API_URL}/${follow.userImg}`
            : "/profileImg.png"
        }
        className={styles.profileImg}
        alt="followImg"
      ></img>
      <div className={styles.nickname} onClick={() => setFollowUser(follow)}>
        {follow.nickname}
      </div>
      {followUser && <FollowerView follow={followUser} unFollow={unFollow} />}
    </div>
  );
};

export default FollowList;
