import { NextPage } from "next";
import ProfileMain from "../components/desktop/profile/ProfileMain";
import styles from "../styles/Home.module.scss";

const Profile: NextPage = () => {
  return (
    <div className={styles.container}>
      <ProfileMain />
    </div>
  );
};

export default Profile;
