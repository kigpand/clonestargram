import LoginComponents from "../../shared/loginComponents/LoginComponents";
import styles from "./DeskLogin.module.scss";

const DeskLogin = () => {
  return (
    <div className={styles.deskLogin}>
      <img src="/loginBack.jpg" className={styles.loginImg} alt="login"></img>
      <div className={styles.loginItems}>
        <LoginComponents />
      </div>
    </div>
  );
};

export default DeskLogin;
