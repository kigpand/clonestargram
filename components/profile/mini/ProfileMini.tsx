import styles from "./ProfileMini.module.scss";

const ProfileMini = () => {
  return (
    <div className={styles.profileMini}>
      <div className={styles.container}>
        <div className={styles.headerNick}>nickName</div>
        <img
          src="/profileImg.png"
          className={styles.headerImg}
          alt="profileImg"
        />
        <div className={styles.headerEmail}>
          <label>이메일 : </label>
          kigpand@naver.com
        </div>
        <div className={styles.headerPhone}>
          <label>전화 번호 : </label>
          000-0000-0000
        </div>
      </div>
    </div>
  );
};

export default ProfileMini;
