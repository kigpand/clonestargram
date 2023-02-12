import { NextPage } from "next";
import FollowContaier from "../components/desktop/follow/FollowContainer";
import styles from "../styles/Home.module.scss";

const Follow: NextPage = () => {
  return (
    <div className={styles.container}>
      <FollowContaier />
    </div>
  );
};

export default Follow;
