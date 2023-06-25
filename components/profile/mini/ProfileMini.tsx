"use client";

import useUser from "../../../store/user";
import styles from "./ProfileMini.module.scss";

const ProfileMini = () => {
  const { user } = useUser();
  return (
    <div className={styles.profileMini}>
      <div className={styles.container}>
        <div className={styles.headerNick}>{user?.name}</div>
        <img
          src={
            user && user.image
              ? `http://localhost:4000/${user.image}`
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
