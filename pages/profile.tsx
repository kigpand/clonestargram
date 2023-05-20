import axios from "axios";
import { NextPage } from "next";
import ProfileMain from "../components/desktop/profile/ProfileMain";
import styles from "../styles/Home.module.scss";
import Header from "../layout/header/Header";

const Profile: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <ProfileMain />
    </div>
  );
};

export default Profile;
