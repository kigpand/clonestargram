import { useState } from "react";
import { IFollow } from "../../../../../interface/IFollow";
import FollowerView from "../../../../shared/followerView/FollowerView";
import styles from "./FollowList.module.scss";
import { IUser } from "../../../../../interface/IUser";

interface IFollowList {
  follow: IUser;
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
          follow.image
            ? `http://localhost:4000/${follow.image}`
            : "/profileImg.png"
        }
        className={styles.profileImg}
        alt="followImg"
      ></img>
      <div className={styles.nickname} onClick={() => setFollowUser(follow)}>
        {follow.name}
      </div>
      {followUser && <FollowerView follow={followUser} unFollow={unFollow} />}
    </div>
  );
};

export default FollowList;
