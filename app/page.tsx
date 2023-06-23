import type { NextPage } from "next";
import Login from "../components/login/Login";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container} style={{ height: "100%" }}>
      <Login />
    </div>
  );
};

export default Home;
