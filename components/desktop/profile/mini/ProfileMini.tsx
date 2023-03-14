import useUser from "../../../../store/user";
import styles from "./ProfileMini.module.scss";

const ProfileMini = () => {
  const { user } = useUser();
  return (
    <div className={styles.profileMini}>
      <div className={styles.container}>
        <div className={styles.headerNick}>{user?.nickname}</div>
        <img
          src={
            user && user.userImg
              ? `http://localhost:4000/${user.userImg}`
              : "/profileImg.png"
          }
          className={styles.headerImg}
          alt="profileImg"
        />
        <div className={styles.headerEmail}>
          <label>이메일 : </label>
          {user?.email}
        </div>
        <div className={styles.headerPhone}>
          <label>전화 번호 : </label>
          {user?.phone}
        </div>
      </div>
    </div>
  );
};

export default ProfileMini;
