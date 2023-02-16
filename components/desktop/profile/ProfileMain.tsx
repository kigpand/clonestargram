import ProfileBody from "./body/ProfileBody";
import ProfileMini from "./mini/ProfileMini";
import styles from "./ProfileMain.module.scss";

const ProfileMain = () => {
  return (
    <div className={styles.profileMain}>
      <ProfileMini />
      <ProfileBody />
    </div>
  );
};

export default ProfileMain;
