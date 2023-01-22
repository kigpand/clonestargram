import ProfileBody from "./body/ProfileBody";
import ProfileHeader from "./mini/ProfileMini";
import styles from "./ProfileMain.module.scss";

const ProfileMain = () => {
  return (
    <div className={styles.profileMain}>
      <ProfileHeader />
      <ProfileBody />
    </div>
  );
};

export default ProfileMain;
