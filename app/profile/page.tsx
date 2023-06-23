import { NextPage } from "next";
import styles from "../../styles/Home.module.scss";
import Header from "../../layout/header/Header";
import ProfileMain from "../../components/profile/ProfileMain";

const Profile: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <ProfileMain />
    </div>
  );
};

export default Profile;
