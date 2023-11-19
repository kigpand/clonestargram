import { IUser } from "../../../interface/IUser";
import styles from "./FollowerView.module.scss";

interface IFollowerView {
  follow: IUser;
  unFollow: any;
}

const FollowerView = ({ follow, unFollow }: IFollowerView) => {
  return (
    <div className={styles.followerView}>
      <div className={styles.body}>
        <div className={styles.nickName}>{follow.name}</div>
        <div className={styles.imgContainer}>
          <img
            src={follow.image || "/profileImg.png"}
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
