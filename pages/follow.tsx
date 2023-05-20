import { NextPage } from "next";
import FollowContaier from "../components/desktop/follow/FollowContainer";
import styles from "../styles/Home.module.scss";
import Header from "../layout/header/Header";

const Follow: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <FollowContaier />
    </div>
  );
};

export default Follow;
