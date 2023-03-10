import useUser from "../../../store/user";
import ProfileBody from "./body/ProfileBody";
import styles from "./ProfileMain.module.scss";

const ProfileMain = () => {
  const { user } = useUser();
  return <div className={styles.profileMain}>{user && <ProfileBody />}</div>;
};

export default ProfileMain;
