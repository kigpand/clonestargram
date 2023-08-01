import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";
import LoginComponents from "../components/shared/loginComponents/LoginComponents";

const Home: NextPage = () => {
  return (
    <div className={styles.login}>
      <img src="/loginBack.jpg" className={styles.loginImg} alt="login"></img>
      <LoginComponents />
    </div>
  );
};

export default Home;
