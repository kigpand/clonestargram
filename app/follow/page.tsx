import { NextPage } from "next";
import Header from "../../layout/header/Header";
import FollowContaier from "../../components/desktop/follow/FollowContainer";
import styles from "../../styles/Home.module.scss";

const Follow: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <FollowContaier />
    </div>
  );
};

export default Follow;
