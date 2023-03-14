import { useEffect } from "react";
import styles from "./FollowerView.module.scss";

interface IFollowerView {
  follow: any;
  unFollow: any;
}

const FollowerView = ({ follow, unFollow }: IFollowerView) => {
  return (
    <div className={styles.followerView}>
      <div className={styles.body}>
        <div className={styles.nickName}>{follow.nickname}</div>
        <div className={styles.imgContainer}>
          <img
            src={
              follow && follow.userImg
                ? `${process.env.NEXT_PUBLIC_API_URL}/${follow.userImg}`
                : "/profileImg.png"
            }
            alt="img"
            className={styles.img}
          />
        </div>
        <div className={styles.intro}>{follow.intro}</div>
      </div>
      <div className={styles.back} onClick={unFollow}></div>
    </div>
  );
};

export default FollowerView;
