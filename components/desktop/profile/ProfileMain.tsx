import ProfileBody from "./body/ProfileBody";
import styles from "./ProfileMain.module.scss";

const ProfileMain = () => {
  return (
    <div className={styles.profileMain}>
      <ProfileBody />
    </div>
  );
};

export default ProfileMain;
