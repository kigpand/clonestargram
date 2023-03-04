import LoginComponents from "../../shared/loginComponents/LoginComponents";
import styles from "./MobileLogin.module.scss";

const MobileLogin = () => {
  return (
    <div className={styles.mobileLogin}>
      <LoginComponents />
    </div>
  );
};

export default MobileLogin;
