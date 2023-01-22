import type { NextPage } from "next";
import Contents from "../components/contents/Contents";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Contents />
    </div>
  );
};

export default Home;
