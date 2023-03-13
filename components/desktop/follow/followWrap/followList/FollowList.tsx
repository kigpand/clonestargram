import { IFollow } from "../../../../../interface/IFollow";
import styles from "./FollowList.module.scss";

interface IFollowList {
  follow: IFollow;
}

const FollowList = ({ follow }: IFollowList) => {
  const onTest = () => {
    console.log(follow);
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
      <div className={styles.nickname} onClick={onTest}>
        {follow.nickname}
      </div>
    </div>
  );
};

export default FollowList;
