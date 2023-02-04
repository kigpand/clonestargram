import styles from "./FollowList.module.scss";

const FollowList = () => {
  return (
    <div className={styles.followList}>
      <img
        src="/profileImg.png"
        className={styles.profileImg}
        alt="followImg"
      ></img>
      <div className={styles.nickname}>nickname</div>
    </div>
  );
};

export default FollowList;
