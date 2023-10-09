import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";
import LoginComponents from "../components/shared/loginComponents/LoginComponents";
import { unstable_getImgProps as getImgProps } from "next/image";

const Home: NextPage = () => {
  const common = { alt: "Hero", width: 800, height: 400 };
  const {
    props: { srcSet: light, ...rest },
  } = getImgProps({ ...common, src: "/loginBack.jpg" });

  return (
    <div className={styles.login}>
      <img {...rest} className={styles.loginImg} alt="login"></img>
      <LoginComponents />
    </div>
  );
};

export default Home;
