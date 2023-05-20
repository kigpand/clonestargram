import type { NextPage } from "next";
import Login from "../components/login/Login";
import styles from "../styles/Home.module.scss";
import Contents from "../components/desktop/contents/Contents";

const Home: NextPage = () => {
  return (
    <div className={styles.container} style={{ height: "100%" }}>
      {/* <Login /> */}
      <Contents />
    </div>
  );
};

export default Home;
