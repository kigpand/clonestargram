import { NextPage } from "next";
import FollowContaier from "../components/follow/FollowContainer";
import styles from "../styles/Home.module.scss";

const Follow: NextPage = () => {
  return (
    <div className={styles.container}>
      <FollowContaier />
    </div>
  );
};

export default Follow;
